import Fuse from 'fuse.js';

export interface SearchDocument {
  id: string;
  title: string;
  content: string;
  tags: string[];
  ontology_id?: string;
}

export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  score: number;
  type: 'page' | 'ontology';
  matches?: readonly Fuse.FuseResultMatch[];
}

let fuseInstance: Fuse<SearchDocument> | null = null;
let documentsCache: SearchDocument[] = [];

export async function initializeSearch(): Promise<void> {
  try {
    const response = await fetch('/api/search-index.json');
    if (!response.ok) {
      throw new Error('Failed to load search index');
    }

    documentsCache = await response.json();

    fuseInstance = new Fuse(documentsCache, {
      keys: [
        { name: 'title', weight: 2 },
        { name: 'content', weight: 1 },
        { name: 'tags', weight: 1.5 },
      ],
      threshold: 0.4,
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 2,
      ignoreLocation: true,
    });
  } catch (error) {
    console.warn('Search index not available, using mock data');
    // Fallback to mock data for development
    documentsCache = generateMockDocuments();
    fuseInstance = new Fuse(documentsCache, {
      keys: [
        { name: 'title', weight: 2 },
        { name: 'content', weight: 1 },
        { name: 'tags', weight: 1.5 },
      ],
      threshold: 0.4,
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 2,
    });
  }
}

function generateMockDocuments(): SearchDocument[] {
  return [
    {
      id: 'ai-alignment',
      title: 'AI Alignment',
      content: 'AI alignment is the challenge of ensuring that artificial intelligence systems pursue goals that are aligned with human values and intentions.',
      tags: ['ai', 'safety', 'ethics'],
      ontology_id: 'AI-0268',
    },
    {
      id: 'smart-contracts',
      title: 'Smart Contracts',
      content: 'Smart contracts are self-executing contracts with the terms of the agreement directly written into code on a blockchain.',
      tags: ['blockchain', 'ethereum', 'solidity'],
      ontology_id: 'BC-0045',
    },
    {
      id: 'robotics',
      title: 'Robotics',
      content: 'Robotics is an interdisciplinary field that integrates computer science, engineering, and artificial intelligence to design, construct, and operate robots.',
      tags: ['robotics', 'automation', 'ai'],
      ontology_id: 'RB-0001',
    },
    {
      id: 'virtual-worlds',
      title: 'Virtual Worlds',
      content: 'Virtual worlds are computer-simulated environments that users can inhabit and interact with through avatars.',
      tags: ['metaverse', 'vr', 'gaming'],
      ontology_id: 'MV-0001',
    },
    {
      id: 'disruptive-technologies',
      title: 'Disruptive Technologies',
      content: 'Disruptive technologies are innovations that significantly alter the way that consumers, industries, or businesses operate.',
      tags: ['innovation', 'transformation', 'future'],
      ontology_id: 'DT-0001',
    },
  ];
}

function extractExcerpt(content: string, query: string, maxLength: number = 150): string {
  const lowerContent = content.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerContent.indexOf(lowerQuery);

  if (index === -1) {
    return content.substring(0, maxLength) + (content.length > maxLength ? '...' : '');
  }

  const start = Math.max(0, index - 50);
  const end = Math.min(content.length, index + query.length + 100);
  const excerpt = content.substring(start, end);

  return (start > 0 ? '...' : '') + excerpt + (end < content.length ? '...' : '');
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
    excerpt: extractExcerpt(result.item.content, query),
    score: result.score || 0,
    type: result.item.ontology_id ? 'ontology' : 'page',
    matches: result.matches,
  }));
}

export function getDocumentCount(): number {
  return documentsCache.length;
}

export function isInitialized(): boolean {
  return fuseInstance !== null;
}
