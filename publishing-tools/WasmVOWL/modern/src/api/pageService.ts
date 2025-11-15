export interface OntologyMetadata {
  term_id: string;
  preferred_term: string;
  definition?: string;
  source_domain: string;
  maturity_level?: string;
  authority_score?: number;
}

export interface PageData {
  title: string;
  content: string;
  properties: Record<string, string>;
  backlinks: string[];
  ontology?: OntologyMetadata;
}

// Cache for search index to avoid repeated fetches
let searchIndexCache: { id: string; title: string }[] | null = null;

async function getSearchIndex(): Promise<{ id: string; title: string }[]> {
  if (searchIndexCache) {
    return searchIndexCache;
  }

  try {
    const response = await fetch('/api/search-index.json');
    if (response.ok) {
      const data = await response.json();
      searchIndexCache = data.map((item: any) => ({ id: item.id, title: item.title }));
      return searchIndexCache;
    }
  } catch (error) {
    console.warn('Failed to load search index:', error);
  }

  return [];
}

// Convert page name to slug by finding match in search index
async function pageNameToSlug(pageName: string): Promise<string> {
  const searchIndex = await getSearchIndex();

  // Try exact match first (case-insensitive)
  const exactMatch = searchIndex.find(
    item => item.title.toLowerCase() === pageName.toLowerCase()
  );
  if (exactMatch) {
    return exactMatch.id;
  }

  // Fallback: create slug from name (remove parentheses, lowercase, hyphenate)
  return pageName
    .toLowerCase()
    .replace(/\s*\([^)]*\)/g, '') // Remove parentheses and content
    .replace(/[^\w\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Collapse multiple hyphens
    .replace(/^-|-$/g, ''); // Trim hyphens
}

export async function fetchPage(pageName: string): Promise<PageData> {
  try {
    // Convert page name to slug for API lookup
    const slug = await pageNameToSlug(pageName);
    console.log(`[pageService] Fetching page: "${pageName}" → slug: "${slug}"`);

    const response = await fetch(`/api/pages/${slug}.json`);
    if (!response.ok) {
      throw new Error('Page not found');
    }
    return await response.json();
  } catch (error) {
    console.error(`[pageService] Failed to fetch page "${pageName}":`, error);

    // Fallback to mock data for development
    return {
      title: pageName,
      content: `# ${pageName}\n\nThis is a sample page for **${pageName}**.\n\n## Content\n\nThe actual content will be loaded from the Rust publisher's output.\n\n### Features\n\n- [[Wiki Links]]\n- **Bold** and *italic* text\n- Code blocks\n- Lists and tables`,
      properties: {
        'public-access': 'true',
        'created-at': new Date().toISOString(),
      },
      backlinks: ['AI Alignment', 'Robotics'],
      ontology: pageName.includes('AI') ? {
        term_id: 'AI-0001',
        preferred_term: pageName,
        definition: 'Sample ontology definition',
        source_domain: 'ai',
        maturity_level: 'established',
        authority_score: 0.95,
      } : undefined,
    };
  }
}

export async function fetchBacklinks(pageName: string): Promise<string[]> {
  try {
    const response = await fetch(`/api/backlinks/${encodeURIComponent(pageName)}.json`);
    if (!response.ok) {
      throw new Error('Backlinks not found');
    }
    return await response.json();
  } catch (error) {
    // Fallback to empty array for development
    return [];
  }
}
