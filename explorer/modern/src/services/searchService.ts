import Fuse, { type FuseResultMatch } from 'fuse.js';

export interface SearchDocument {
  id: string;
  title: string;
  definition?: string;
  domain?: string;
  domain_name?: string;
  qualityScore?: number;
  authorityScore?: number;
  maturity?: string;
  status?: string;
  iri?: string;
  labels?: string[];
  is_subclass_of?: string[];
  wikilinks?: string[];
}

export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  score: number;
  domain?: string;
  domain_name?: string;
  qualityScore?: number;
  matches?: readonly FuseResultMatch[];
}

let fuseInstance: Fuse<SearchDocument> | null = null;
let documentsCache: SearchDocument[] = [];

export async function initializeSearch(): Promise<void> {
  try {
    const response = await fetch('/api/search-index.json');
    if (!response.ok) {
      throw new Error('Failed to load search index');
    }

    const data = await response.json();
    documentsCache = Array.isArray(data) ? data : (data.documents || []);

    fuseInstance = new Fuse(documentsCache, {
      keys: [
        { name: 'title', weight: 3 },
        { name: 'labels', weight: 2.5 },
        { name: 'definition', weight: 1.5 },
        { name: 'domain_name', weight: 1 },
        { name: 'is_subclass_of', weight: 0.8 },
      ],
      threshold: 0.4,
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 2,
      ignoreLocation: true,
    });
  } catch {
    console.warn('Search index not available');
    documentsCache = [];
    fuseInstance = new Fuse([], {
      keys: [{ name: 'title', weight: 3 }],
      threshold: 0.4,
      includeScore: true,
      includeMatches: true,
    });
  }
}

function extractExcerpt(doc: SearchDocument, query: string, maxLength: number = 150): string {
  const text = doc.definition || `${doc.title} — ${doc.domain_name || 'ontology concept'}`;
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerText.indexOf(lowerQuery);

  if (index === -1) {
    return text.substring(0, maxLength) + (text.length > maxLength ? '...' : '');
  }

  const start = Math.max(0, index - 50);
  const end = Math.min(text.length, index + query.length + 100);
  const excerpt = text.substring(start, end);

  return (start > 0 ? '...' : '') + excerpt + (end < text.length ? '...' : '');
}

export function search(query: string, limit: number = 50): SearchResult[] {
  if (!fuseInstance) {
    throw new Error('Search not initialized. Call initializeSearch() first.');
  }

  if (query.length < 2) {
    return [];
  }

  const results = fuseInstance.search(query, { limit });

  return results.map(result => ({
    id: result.item.id,
    title: result.item.title,
    excerpt: extractExcerpt(result.item, query),
    score: result.score || 0,
    domain: result.item.domain,
    domain_name: result.item.domain_name,
    qualityScore: result.item.qualityScore,
    matches: result.matches,
  }));
}

export function getDocumentCount(): number {
  return documentsCache.length;
}

export function isInitialized(): boolean {
  return fuseInstance !== null;
}
