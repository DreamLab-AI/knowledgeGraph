export interface OntologyMetadata {
  term_id: string;
  preferred_term: string;
  definition?: string;
  source_domain: string | null;
  domain?: string;
  domain_name?: string;
  maturity_level?: string;
  authority_score?: number;
  quality_score?: number;
  is_subclass_of?: string[];
  relates_to?: string[];
}

export interface PageData {
  title: string;
  content: string;
  properties: Record<string, string>;
  backlinks: string[];
  ontology?: OntologyMetadata;
  jsonldBlocks?: string[];
}

interface SearchDocument {
  id: string;
  title: string;
  definition?: string;
  iri?: string;
  domain?: string;
  domain_name?: string;
  qualityScore?: number;
  authorityScore?: number;
  maturity?: string;
  status?: string;
  is_subclass_of?: string[];
  labels?: string[];
  wikilinks?: string[];
}

interface PageApiResponse {
  id: string;
  title: string;
  slug: string;
  classIri?: string;
  domain?: string;
  definition?: string;
  subClassOf?: { id: string; label: string }[];
  qualityScore?: number;
  authorityScore?: number;
  maturity?: string;
  status?: string;
  relationships?: Record<string, { id: string; label: string }[]>;
  wikilinks?: { slug: string; label: string }[];
  backlinks?: { slug: string; label: string }[];
  body?: string;
}

let searchIndexCache: SearchDocument[] | null = null;
const pageApiCache: Map<string, PageApiResponse> = new Map();

function extractJsonLdBlocks(markdown: string): { content: string; jsonld: string[] } {
  const jsonldBlocks: string[] = [];
  const withoutJsonLd = markdown.replace(/```json-ld\s*\n([\s\S]*?)```/g, (_match, block) => {
    jsonldBlocks.push(block.trim());
    return '';
  });
  return { content: withoutJsonLd, jsonld: jsonldBlocks };
}

function cleanLogseqMarkdown(markdown: string): string {
  return markdown
    // Strip Logseq property lines (key:: value format)
    .replace(/^(schema_version|legacy_iri|legacy_uri|public|public-access|definition|owl-class|owl-role|belongs-to-domain|sources|migration-date)::.+\n?/gm, '')
    // Strip page title (# Title) since we render it separately
    .replace(/^# .+\n?/m, '')
    // Convert Logseq outliner bullets to clean markdown
    // "- ### Header" → "### Header"
    .replace(/^(\s*)- (#{1,6} )/gm, '$2')
    // "  - **Bold item**" → "**Bold item**"  (top-level bullets only)
    .replace(/^- (?![-*])/gm, '')
    // Clean up nested Logseq bullets (tab-indented "- " prefixes)
    .replace(/^\t+- /gm, '  ')
    // Convert [[wikilinks]] to internal page links
    .replace(/\[\[([^\]]+)\]\]/g, '[$1](/page/$1)')
    // Strip Logseq image syntax {:height N, :width N}
    .replace(/\{:height \d+, :width \d+\}/g, '')
    // Fix broken image paths (assets/ → not available on deployed site)
    .replace(/!\[([^\]]*)\]\(assets\/[^)]+\)/g, '*[Image: $1]*')
    // Remove empty list items and excessive whitespace
    .replace(/^\s*[-*]\s*$/gm, '')
    .replace(/^\n+/, '')
    .replace(/\n{3,}/g, '\n\n');
}

function isValidMarkdown(content: string, contentType: string): boolean {
  if (contentType.includes('html')) return false;
  if (content.includes('sessionStorage.setItem')) return false;
  if (content.trim().startsWith('<!DOCTYPE') || content.trim().startsWith('<html')) return false;
  return true;
}

async function fetchPageApi(slug: string): Promise<PageApiResponse | null> {
  if (pageApiCache.has(slug)) {
    return pageApiCache.get(slug) || null;
  }

  try {
    const response = await fetch(`/api/pages/${encodeURIComponent(slug)}.json`);
    if (response.ok) {
      const data = await response.json();
      pageApiCache.set(slug, data);
      return data;
    }
  } catch {
    // Page API not available
  }
  return null;
}

interface ParsedMarkdown {
  content: string;
  jsonldBlocks: string[];
}

const parsedMarkdownCache: Map<string, ParsedMarkdown> = new Map();

async function fetchMarkdownContent(title: string): Promise<ParsedMarkdown | null> {
  if (parsedMarkdownCache.has(title)) {
    return parsedMarkdownCache.get(title) || null;
  }

  const encodedTitle = encodeURIComponent(title);
  const primaryUrl = `/api/markdown/${encodedTitle}.md`;
  const fallbackUrl = `https://raw.githubusercontent.com/DreamLab-AI/knowledgeGraph/gh-pages/api/markdown/${encodedTitle}.md`;

  for (const url of [primaryUrl, fallbackUrl]) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const contentType = response.headers.get('content-type') || '';
        const markdown = await response.text();
        if (isValidMarkdown(markdown, contentType)) {
          const { content: rawContent, jsonld } = extractJsonLdBlocks(markdown);
          const cleaned = cleanLogseqMarkdown(rawContent);
          const result = { content: cleaned, jsonldBlocks: jsonld };
          parsedMarkdownCache.set(title, result);
          return result;
        }
      }
    } catch {
      continue;
    }
  }

  return null;
}

async function getSearchIndex(): Promise<SearchDocument[]> {
  if (searchIndexCache) {
    return searchIndexCache;
  }

  try {
    const response = await fetch('/api/search-index.json');
    if (response.ok) {
      const data = await response.json();
      const docs: SearchDocument[] = Array.isArray(data) ? data : (data.documents || []);
      searchIndexCache = docs;
      return docs;
    }
  } catch {
    // Search index unavailable
  }

  return [];
}

function camelToSpaces(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
}

async function findDocumentInIndex(pageName: string): Promise<SearchDocument | null> {
  const searchIndex = await getSearchIndex();
  const lowerName = pageName.toLowerCase();

  // Exact ID match (slug)
  let doc = searchIndex.find(d => d.id === pageName);
  if (doc) return doc;

  // Case-insensitive title match
  doc = searchIndex.find(d => d.title.toLowerCase() === lowerName);
  if (doc) return doc;

  // Labels match
  doc = searchIndex.find(d => d.labels?.some(l => l.toLowerCase() === lowerName));
  if (doc) return doc;

  // IRI match (full IRI or just the slug part)
  doc = searchIndex.find(d => d.iri === pageName || d.iri?.endsWith(`:${pageName}`));
  if (doc) return doc;

  // CamelCase conversion
  const spacedName = camelToSpaces(pageName);
  if (spacedName !== pageName) {
    doc = searchIndex.find(d => d.title.toLowerCase() === spacedName.toLowerCase());
    if (doc) return doc;
  }

  // Slug-style match (hyphenated → title)
  const unhyphenated = pageName.replace(/-/g, ' ');
  doc = searchIndex.find(d => d.title.toLowerCase() === unhyphenated.toLowerCase());
  if (doc) return doc;

  return null;
}

export async function fetchPage(pageName: string): Promise<PageData> {
  const doc = await findDocumentInIndex(pageName);

  if (doc) {
    // Try per-page API first for full data
    const apiData = await fetchPageApi(doc.id);
    const parsed = await fetchMarkdownContent(doc.title);

    const displayDomain = apiData?.domain || doc.domain;
    const backlinks = apiData?.backlinks?.map(b => b.label) || [];
    const subClassOf = apiData?.subClassOf?.map(s => s.label) || doc.is_subclass_of || [];

    let content: string;
    let jsonldBlocks: string[] = parsed?.jsonldBlocks || [];
    if (parsed && parsed.content.length > 0) {
      content = parsed.content;
    } else if (apiData?.definition) {
      content = `## Definition\n\n${apiData.definition}`;
    } else if (doc.definition) {
      content = `## Definition\n\n${doc.definition}`;
    } else {
      content = `No detailed content available for ${doc.title}.`;
    }

    return {
      title: doc.title,
      content,
      jsonldBlocks: jsonldBlocks.length > 0 ? jsonldBlocks : undefined,
      properties: {
        ...(doc.maturity ? { maturity: doc.maturity } : {}),
        ...(doc.status ? { status: doc.status } : {}),
      },
      backlinks,
      ontology: {
        term_id: doc.id,
        preferred_term: doc.title,
        definition: apiData?.definition || doc.definition,
        source_domain: displayDomain || null,
        domain: displayDomain,
        domain_name: displayDomain?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        maturity_level: apiData?.maturity || doc.maturity,
        authority_score: apiData?.authorityScore ?? doc.authorityScore,
        quality_score: apiData?.qualityScore ?? doc.qualityScore,
        is_subclass_of: subClassOf,
      },
    };
  }

  const readableTitle = camelToSpaces(pageName);
  return {
    title: readableTitle,
    content: `This concept exists in the ontology graph but doesn't have a detailed knowledge base entry yet.\n\n**Node ID**: ${pageName}`,
    properties: { status: 'stub' },
    backlinks: [],
    ontology: undefined,
  };
}

export async function fetchBacklinks(pageName: string): Promise<string[]> {
  const apiData = await fetchPageApi(pageName);
  if (apiData?.backlinks) {
    return apiData.backlinks.map(b => b.label);
  }
  return [];
}
