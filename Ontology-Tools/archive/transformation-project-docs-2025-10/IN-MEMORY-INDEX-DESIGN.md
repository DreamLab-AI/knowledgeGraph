# In-Memory Ontology Index Design

## Overview

This document defines an efficient in-memory index structure for the Disruptive Technologies Ontology that enables:
- Fast semantic lookups across 1,262+ ontology files
- Content placement guidance for new concepts
- Relationship traversal and validation
- Domain-aware navigation
- WikiLink integrity checking

**Target Performance**:
- Load time: <200ms
- Memory footprint: ~1-2MB
- Query time: <10ms per lookup

---

## Index Architecture

### 1. Core Index Structure

```typescript
interface OntologyIndex {
  metadata: IndexMetadata;
  files: FileMetadataMap;
  domains: DomainIndex;
  concepts: ConceptGraph;
  hierarchies: HierarchyIndex;
  relationships: RelationshipIndex;
  wikilinks: WikiLinkIndex;
  statistics: IndexStatistics;
}
```

### 2. Index Metadata

```typescript
interface IndexMetadata {
  version: string;              // "1.0.0"
  generatedAt: string;          // ISO timestamp
  totalFiles: number;           // 1262
  totalConcepts: number;        // Number of unique concepts
  sourcePath: string;           // "/logseq/pages"
  indexFormat: string;          // "disruptive-tech-v1"
}
```

### 3. File Metadata Map

**Purpose**: Fast file lookup by term-id or filename

```typescript
interface FileMetadataMap {
  byTermId: Record<string, FileMetadata>;
  byFilename: Record<string, FileMetadata>;
  byOwlClass: Record<string, FileMetadata>;
}

interface FileMetadata {
  // Core identification
  termId: string;               // "BC-0001" | "AI-0376" | "MV-20140"
  filename: string;             // "BC-0001-blockchain.md"
  preferredTerm: string;        // "Blockchain" | "Algorithmic Accountability"

  // Domain classification
  sourceDomain: SourceDomain;   // "blockchain" | "ai-grounded" | "metaverse" | "robotics"
  namespace: string;            // "bc:" | "aigo:" | "mv:" | "rb:"

  // OWL classification
  owlClass: string;             // "bc:Blockchain"
  owlPhysicality?: string;      // "VirtualEntity" | "PhysicalEntity" | "AbstractEntity"
  owlRole?: string;             // "Object" | "Process" | "Agent" | "Property"
  owlInferredClass?: string;    // "bc:VirtualObject"

  // Hierarchy
  parentClasses: string[];      // ["Distributed Data Structure", "Cryptographic System"]
  childClasses: string[];       // Computed from relationships

  // Status and quality
  status: string;               // "complete" | "in-progress" | "draft" | "legacy"
  maturity?: string;            // "mature" | "emerging" | "experimental"
  authorityScore?: number;      // 0.0 - 1.0

  // Location metadata
  belongsToDomain?: string;     // "[[BlockchainDomain]]"
  implementedInLayer?: string;  // "[[ConceptualLayer]]"

  // File system
  path: string;                 // "logseq/pages/BC-0001-blockchain.md"
  size: number;                 // Bytes
  lastModified: string;         // ISO timestamp

  // Relationships (counts)
  linkCount: {
    outgoing: number;           // WikiLinks in this file
    incoming: number;           // WikiLinks to this file
    bridges: number;            // Cross-domain relationships
  };
}

type SourceDomain = "blockchain" | "ai-grounded" | "metaverse" | "robotics";
```

### 4. Domain Index

**Purpose**: Domain-level statistics and grouping

```typescript
interface DomainIndex {
  blockchain: DomainMetadata;
  "ai-grounded": DomainMetadata;
  metaverse: DomainMetadata;
  robotics: DomainMetadata;
}

interface DomainMetadata {
  namespace: string;            // "bc:" | "aigo:" | "mv:" | "rb:"
  fileCount: number;            // 200 for blockchain
  conceptCount: number;         // Unique concepts
  files: string[];              // Array of filenames in domain
  topLevelClasses: string[];    // Root classes in hierarchy

  // Domain-specific statistics
  completionRate: number;       // Percentage of complete vs draft
  averageAuthorityScore: number;
  bridgeCount: {
    outgoing: number;           // Bridges to other domains
    incoming: number;           // Bridges from other domains
  };

  // Common patterns
  commonParentClasses: Array<{ name: string; count: number; }>;
  commonPhysicalities: Array<{ type: string; count: number; }>;
}
```

### 5. Concept Graph

**Purpose**: Fast relationship traversal and WikiLink validation

```typescript
interface ConceptGraph {
  concepts: Record<string, ConceptNode>;
  orphanedConcepts: string[];   // Concepts with no links
  missingConcepts: string[];    // Referenced but don't exist (broken WikiLinks)
}

interface ConceptNode {
  // Identity
  preferredTerm: string;        // "Blockchain"
  termId: string;               // "BC-0001"
  file: string;                 // "BC-0001-blockchain.md"
  owlClass: string;             // "bc:Blockchain"
  domain: SourceDomain;

  // Relationships within domain
  parentOf: string[];           // Child concepts (is-subclass-of inverted)
  childOf: string[];            // Parent concepts (is-subclass-of)
  relatedTo: string[];          // Sibling concepts (related-to)

  // Cross-domain bridges
  bridges: Bridge[];

  // WikiLinks
  linksTo: string[];            // Outgoing WikiLinks
  linkedFrom: string[];         // Incoming WikiLinks (backlinks)

  // Semantic context
  definition?: string;          // Short definition (first 200 chars)
  keywords: string[];           // Extracted key terms for search
}

interface Bridge {
  targetConcept: string;        // "Smart Contract"
  targetDomain: SourceDomain;   // "blockchain"
  targetFile: string;           // "BC-0123-smart-contract.md"
  relationshipType: string;     // "securedBy" | "implements" | "uses" | "enables"
  bidirectional: boolean;       // Does target link back?
  namespace: string;            // "dt:" for cross-domain predicates
}
```

### 6. Hierarchy Index

**Purpose**: Navigate class hierarchies within each domain

```typescript
interface HierarchyIndex {
  blockchain: DomainHierarchy;
  "ai-grounded": DomainHierarchy;
  metaverse: DomainHierarchy;
  robotics: DomainHierarchy;
}

interface DomainHierarchy {
  roots: HierarchyNode[];       // Top-level classes (no parents)
  maxDepth: number;             // Deepest nesting level
  byDepth: Record<number, string[]>; // Classes grouped by depth
}

interface HierarchyNode {
  concept: string;              // Concept name
  owlClass: string;             // OWL class IRI
  file: string;                 // Filename
  depth: number;                // Distance from root (0 = root)
  children: HierarchyNode[];    // Subclasses
  siblingCount: number;         // Number of siblings at same level
  descendantCount: number;      // Total descendants
}
```

### 7. Relationship Index

**Purpose**: Fast relationship type queries

```typescript
interface RelationshipIndex {
  predicates: Record<string, PredicateMetadata>;
  patterns: RelationshipPattern[];
}

interface PredicateMetadata {
  predicate: string;            // "is-subclass-of" | "has-part" | "uses"
  namespace: string;            // "owl:" | "dt:" | domain-specific
  usageCount: number;           // How many times used
  domains: {
    source: SourceDomain[];     // Domains that use this as source
    target: SourceDomain[];     // Domains that use this as target
  };
  examples: Array<{
    source: string;
    target: string;
    file: string;
  }>;
}

interface RelationshipPattern {
  pattern: string;              // "[AI Concept] implements [Robotics Concept]"
  predicate: string;            // "implements"
  frequency: number;            // How common
  sourceDomain: SourceDomain;
  targetDomain: SourceDomain;
}
```

### 8. WikiLink Index

**Purpose**: Validate and resolve WikiLinks

```typescript
interface WikiLinkIndex {
  valid: Record<string, WikiLinkMetadata>;
  broken: Record<string, BrokenWikiLink>;
  stats: {
    totalLinks: number;         // 5505
    validLinks: number;         // 388
    brokenLinks: number;        // 5117
    integrityScore: number;     // 7%
  };
}

interface WikiLinkMetadata {
  wikilink: string;             // "[[Blockchain]]"
  targetFile: string;           // "BC-0001-blockchain.md"
  targetConcept: string;        // "Blockchain"
  targetDomain: SourceDomain;
  referenceCount: number;       // How many files link to this
  referencedBy: string[];       // Files that link to this
}

interface BrokenWikiLink {
  wikilink: string;             // "[[MetaverseDomain]]"
  referenceCount: number;       // 583
  referencedBy: string[];       // Files that try to link to this
  suggestedFixes: Array<{
    suggestion: string;
    confidence: number;         // 0.0 - 1.0
    reason: string;
  }>;
}
```

### 9. Index Statistics

**Purpose**: Quick overview and health metrics

```typescript
interface IndexStatistics {
  // File counts
  totalFiles: number;           // 1262
  byDomain: Record<SourceDomain, number>;
  byStatus: Record<string, number>;

  // Relationship counts
  totalConcepts: number;
  totalRelationships: number;
  totalBridges: number;
  bridgesByDomain: Record<string, number>; // "blockchain->metaverse": 40

  // WikiLink health
  wikilinkIntegrity: number;    // 0.07 (7%)
  topMissingConcepts: Array<{   // Top 10 broken links
    concept: string;
    count: number;
  }>;

  // Hierarchy depth
  maxHierarchyDepth: number;
  averageHierarchyDepth: number;

  // Quality metrics
  averageAuthorityScore: number;
  completeFiles: number;
  draftFiles: number;

  // Index health
  orphanedConcepts: number;     // Concepts with no relationships
  isolatedDomains: string[];    // Domains with no bridges
}
```

---

## JSON Schema Example

Here's a concrete example of what the index looks like:

```json
{
  "metadata": {
    "version": "1.0.0",
    "generatedAt": "2025-10-29T23:59:59Z",
    "totalFiles": 1262,
    "totalConcepts": 1262,
    "sourcePath": "/home/devuser/workspace/project/Metaverse-Ontology/logseq/pages",
    "indexFormat": "disruptive-tech-v1"
  },

  "files": {
    "byTermId": {
      "BC-0001": {
        "termId": "BC-0001",
        "filename": "BC-0001-blockchain.md",
        "preferredTerm": "Blockchain",
        "sourceDomain": "blockchain",
        "namespace": "bc:",
        "owlClass": "bc:Blockchain",
        "owlPhysicality": "VirtualEntity",
        "owlRole": "Object",
        "owlInferredClass": "bc:VirtualObject",
        "parentClasses": ["Distributed Data Structure", "Distributed Ledger", "Cryptographic System"],
        "childClasses": ["Public Blockchain", "Private Blockchain", "Consortium Blockchain"],
        "status": "complete",
        "maturity": "mature",
        "authorityScore": 1.0,
        "belongsToDomain": "[[BlockchainDomain]]",
        "implementedInLayer": "[[ConceptualLayer]]",
        "path": "logseq/pages/BC-0001-blockchain.md",
        "size": 7823,
        "lastModified": "2025-10-28T12:00:00Z",
        "linkCount": {
          "outgoing": 12,
          "incoming": 47,
          "bridges": 3
        }
      }
    },
    "byFilename": {
      "BC-0001-blockchain.md": "BC-0001"
    },
    "byOwlClass": {
      "bc:Blockchain": "BC-0001"
    }
  },

  "domains": {
    "blockchain": {
      "namespace": "bc:",
      "fileCount": 200,
      "conceptCount": 233,
      "files": ["BC-0001-blockchain.md", "BC-0002-block.md", "..."],
      "topLevelClasses": ["Blockchain", "Consensus Mechanism", "Smart Contract", "Cryptographic Primitive"],
      "completionRate": 0.95,
      "averageAuthorityScore": 0.92,
      "bridgeCount": {
        "outgoing": 90,
        "incoming": 85
      },
      "commonParentClasses": [
        {"name": "Distributed System", "count": 45},
        {"name": "Cryptographic System", "count": 38}
      ],
      "commonPhysicalities": [
        {"type": "VirtualEntity", "count": 180},
        {"type": "AbstractEntity", "count": 20}
      ]
    }
  },

  "concepts": {
    "concepts": {
      "Blockchain": {
        "preferredTerm": "Blockchain",
        "termId": "BC-0001",
        "file": "BC-0001-blockchain.md",
        "owlClass": "bc:Blockchain",
        "domain": "blockchain",
        "parentOf": ["Public Blockchain", "Private Blockchain"],
        "childOf": ["Distributed Data Structure", "Distributed Ledger"],
        "relatedTo": ["Consensus Mechanism", "Cryptographic Hash Function"],
        "bridges": [
          {
            "targetConcept": "Digital Asset",
            "targetDomain": "metaverse",
            "targetFile": "MV-12345-digital-asset.md",
            "relationshipType": "secures",
            "bidirectional": true,
            "namespace": "dt:"
          }
        ],
        "linksTo": ["Block", "Transaction", "Node", "Consensus Mechanism"],
        "linkedFrom": ["Bitcoin", "Ethereum", "Smart Contract", "DeFi"],
        "definition": "A distributed, cryptographically-secured data structure consisting of an ordered chain of blocks...",
        "keywords": ["distributed", "cryptographic", "consensus", "immutable", "decentralized"]
      }
    },
    "orphanedConcepts": [],
    "missingConcepts": ["MetaverseDomain", "ISO/IEC 23257:2021", "IEEE 2418.1", "ConceptualLayer", "VirtualObject"]
  },

  "hierarchies": {
    "blockchain": {
      "roots": [
        {
          "concept": "Blockchain",
          "owlClass": "bc:Blockchain",
          "file": "BC-0001-blockchain.md",
          "depth": 0,
          "children": [
            {
              "concept": "Public Blockchain",
              "owlClass": "bc:PublicBlockchain",
              "file": "BC-0050-public-blockchain.md",
              "depth": 1,
              "children": [],
              "siblingCount": 2,
              "descendantCount": 0
            }
          ],
          "siblingCount": 3,
          "descendantCount": 12
        }
      ],
      "maxDepth": 4,
      "byDepth": {
        "0": ["Blockchain", "Consensus Mechanism", "Smart Contract"],
        "1": ["Public Blockchain", "Proof of Work", "ERC-20 Token"],
        "2": ["Bitcoin", "Nakamoto Consensus", "Uniswap Token"]
      }
    }
  },

  "relationships": {
    "predicates": {
      "is-subclass-of": {
        "predicate": "is-subclass-of",
        "namespace": "owl:",
        "usageCount": 847,
        "domains": {
          "source": ["blockchain", "ai-grounded", "metaverse", "robotics"],
          "target": ["blockchain", "ai-grounded", "metaverse", "robotics"]
        },
        "examples": [
          {
            "source": "Public Blockchain",
            "target": "Blockchain",
            "file": "BC-0050-public-blockchain.md"
          }
        ]
      },
      "securedBy": {
        "predicate": "securedBy",
        "namespace": "dt:",
        "usageCount": 45,
        "domains": {
          "source": ["metaverse"],
          "target": ["blockchain"]
        },
        "examples": [
          {
            "source": "Digital Asset",
            "target": "Smart Contract",
            "file": "MV-12345-digital-asset.md"
          }
        ]
      }
    },
    "patterns": [
      {
        "pattern": "[Metaverse Concept] securedBy [Blockchain Concept]",
        "predicate": "securedBy",
        "frequency": 40,
        "sourceDomain": "metaverse",
        "targetDomain": "blockchain"
      }
    ]
  },

  "wikilinks": {
    "valid": {
      "[[Blockchain]]": {
        "wikilink": "[[Blockchain]]",
        "targetFile": "BC-0001-blockchain.md",
        "targetConcept": "Blockchain",
        "targetDomain": "blockchain",
        "referenceCount": 47,
        "referencedBy": ["BC-0050-public-blockchain.md", "..."]
      }
    },
    "broken": {
      "[[MetaverseDomain]]": {
        "wikilink": "[[MetaverseDomain]]",
        "referenceCount": 583,
        "referencedBy": ["MV-20140-6g-network-slice.md", "..."],
        "suggestedFixes": [
          {
            "suggestion": "Create organizational page 'MetaverseDomain.md' describing metaverse domain",
            "confidence": 0.95,
            "reason": "High reference count, clear organizational concept"
          }
        ]
      }
    },
    "stats": {
      "totalLinks": 5505,
      "validLinks": 388,
      "brokenLinks": 5117,
      "integrityScore": 0.07
    }
  },

  "statistics": {
    "totalFiles": 1262,
    "byDomain": {
      "blockchain": 200,
      "ai-grounded": 64,
      "metaverse": 993,
      "robotics": 5
    },
    "byStatus": {
      "complete": 1100,
      "in-progress": 100,
      "draft": 62
    },
    "totalConcepts": 1262,
    "totalRelationships": 3847,
    "totalBridges": 201,
    "bridgesByDomain": {
      "blockchain->metaverse": 40,
      "ai-grounded->robotics": 40,
      "ai-grounded->metaverse": 40,
      "blockchain->robotics": 30
    },
    "wikilinkIntegrity": 0.07,
    "topMissingConcepts": [
      {"concept": "MetaverseDomain", "count": 583},
      {"concept": "ISO/IEC 23257:2021", "count": 198},
      {"concept": "IEEE 2418.1", "count": 192},
      {"concept": "ConceptualLayer", "count": 154},
      {"concept": "VirtualObject", "count": 143}
    ],
    "maxHierarchyDepth": 6,
    "averageHierarchyDepth": 2.3,
    "averageAuthorityScore": 0.89,
    "completeFiles": 1100,
    "draftFiles": 62,
    "orphanedConcepts": 12,
    "isolatedDomains": []
  }
}
```

---

## Usage in Skill Runtime

### Loading the Index

```typescript
// In skill initialization
import fs from 'fs';
import path from 'path';

class OntologySkill {
  private index: OntologyIndex;

  async initialize() {
    const indexPath = path.join(__dirname, '../.cache/ontology-index.json');

    console.log('Loading ontology index...');
    const startTime = Date.now();

    const indexData = fs.readFileSync(indexPath, 'utf-8');
    this.index = JSON.parse(indexData);

    const loadTime = Date.now() - startTime;
    console.log(`✅ Loaded ${this.index.metadata.totalFiles} files in ${loadTime}ms`);
    console.log(`   Memory: ~${(indexData.length / 1024 / 1024).toFixed(2)}MB`);
  }

  // Query methods...
}
```

### Query Examples

```typescript
// Find where to place a new concept
function findPlacementForConcept(conceptName: string, domain: SourceDomain): PlacementSuggestion {
  // 1. Find similar concepts in same domain
  const domainConcepts = Object.values(index.concepts.concepts)
    .filter(c => c.domain === domain);

  // 2. Extract keywords from concept name
  const keywords = extractKeywords(conceptName);

  // 3. Find concepts with matching keywords
  const matches = domainConcepts
    .map(c => ({
      concept: c,
      score: calculateSimilarity(keywords, c.keywords)
    }))
    .filter(m => m.score > 0.3)
    .sort((a, b) => b.score - a.score);

  // 4. Suggest parent class and related concepts
  if (matches.length > 0) {
    const topMatch = matches[0].concept;
    return {
      suggestedParent: topMatch.preferredTerm,
      suggestedFile: `${domain.toUpperCase()}-XXXX-${slugify(conceptName)}.md`,
      relatedConcepts: matches.slice(0, 5).map(m => m.concept.preferredTerm),
      domain: domain
    };
  }

  // 5. Fall back to domain roots
  return {
    suggestedParent: index.hierarchies[domain].roots[0].concept,
    suggestedFile: `${domain.toUpperCase()}-XXXX-${slugify(conceptName)}.md`,
    relatedConcepts: index.domains[domain].topLevelClasses,
    domain: domain
  };
}

// Validate a WikiLink before creating it
function validateWikiLink(wikilink: string): WikiLinkValidation {
  const cleanLink = wikilink.replace(/[\[\]]/g, '');

  if (index.wikilinks.valid[wikilink]) {
    return {
      valid: true,
      targetFile: index.wikilinks.valid[wikilink].targetFile,
      targetConcept: index.wikilinks.valid[wikilink].targetConcept
    };
  }

  if (index.wikilinks.broken[wikilink]) {
    const broken = index.wikilinks.broken[wikilink];
    return {
      valid: false,
      broken: true,
      referenceCount: broken.referenceCount,
      suggestions: broken.suggestedFixes
    };
  }

  return {
    valid: false,
    broken: false,
    suggestions: [
      {
        suggestion: `Create new concept file for "${cleanLink}"`,
        confidence: 0.5,
        reason: "No existing references found"
      }
    ]
  };
}

// Find cross-domain bridge opportunities
function suggestBridges(sourceConcept: string): BridgeSuggestion[] {
  const concept = index.concepts.concepts[sourceConcept];
  if (!concept) return [];

  const suggestions: BridgeSuggestion[] = [];

  // Look for common patterns
  for (const pattern of index.relationships.patterns) {
    if (pattern.sourceDomain === concept.domain) {
      // Find concepts in target domain matching pattern keywords
      const targetConcepts = Object.values(index.concepts.concepts)
        .filter(c => c.domain === pattern.targetDomain)
        .filter(c => hasKeywordOverlap(concept.keywords, c.keywords));

      for (const target of targetConcepts) {
        suggestions.push({
          source: concept.preferredTerm,
          target: target.preferredTerm,
          predicate: pattern.predicate,
          confidence: 0.7,
          reason: `Common pattern: ${pattern.pattern}`
        });
      }
    }
  }

  return suggestions.sort((a, b) => b.confidence - a.confidence);
}
```

---

## Index Generation

The index is generated by a script that scans all markdown files:

```bash
# Generate index
cd /home/devuser/workspace/project/Metaverse-Ontology
node scripts/generate-index.js

# Output: .cache/ontology-index.json (1-2MB)
# Load time: <200ms
# Query time: <10ms
```

---

## Benefits

1. **Fast Lookups**: O(1) lookup by term-id, filename, or owl:class
2. **Semantic Context**: Keywords and definitions enable similarity matching
3. **Relationship Traversal**: Navigate hierarchies and bridges efficiently
4. **WikiLink Validation**: Instant validation with suggestions for broken links
5. **Content Placement**: Algorithm-driven suggestions for new concept placement
6. **Memory Efficient**: ~1-2MB for 1,262 files (JSON compressed further with gzip)
7. **Load Once**: Index loaded at skill initialization, cached for entire session
8. **Incremental Updates**: Can update specific entries without full rebuild

---

## Next Steps

1. Implement index generation script (`scripts/generate-index.js`)
2. Test with existing 1,262 files
3. Measure actual performance metrics
4. Integrate into Claude Code skill runtime
5. Add query helper methods
6. Document query API for skill usage
