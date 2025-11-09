# Ontology Index Integration Guide

## Overview

This guide explains how to integrate the in-memory ontology index into Claude Code skills for efficient semantic queries and content placement decisions.

## Quick Start

### 1. Generate the Index

```bash
cd /home/devuser/workspace/project/Metaverse-Ontology
node scripts/generate-index.js
```

**Output**: `.cache/ontology-index.json` (1.3 MB, loads in 226ms)

### 2. Use in Claude Code Skill

Create a skill that loads the index at initialization:

```markdown
---
name: ontology-builder
description: Intelligent ontology content builder with semantic index
---

# Ontology Builder Skill

This skill helps create and place new ontology concepts using an efficient in-memory index.

## Initialization

The skill loads the ontology index on first use:

\`\`\`typescript
import fs from 'fs';
import path from 'path';

const INDEX_PATH = '/home/devuser/workspace/project/Metaverse-Ontology/.cache/ontology-index.json';

let ONTOLOGY_INDEX = null;

function loadIndex() {
  if (ONTOLOGY_INDEX) return ONTOLOGY_INDEX;

  console.log('Loading ontology index...');
  const data = fs.readFileSync(INDEX_PATH, 'utf-8');
  ONTOLOGY_INDEX = JSON.parse(data);
  console.log(`✅ Loaded ${ONTOLOGY_INDEX.metadata.totalFiles} concepts`);

  return ONTOLOGY_INDEX;
}
\`\`\`

## Query Examples

### Find Concept by Term ID

\`\`\`typescript
function findConceptByTermId(termId: string) {
  const index = loadIndex();
  return index.files.byTermId[termId];
}

// Usage
const blockchain = findConceptByTermId('BC-0001');
console.log(blockchain.preferredTerm); // "Blockchain"
console.log(blockchain.owlClass);      // "bc:Blockchain"
\`\`\`

### Find Concepts by Domain

\`\`\`typescript
function findConceptsByDomain(domain: 'blockchain' | 'ai-grounded' | 'metaverse' | 'robotics') {
  const index = loadIndex();
  return index.domains[domain].files.map(filename => {
    const termId = index.files.byFilename[filename];
    return index.files.byTermId[termId];
  });
}

// Usage
const blockchainConcepts = findConceptsByDomain('blockchain');
console.log(`Found ${blockchainConcepts.length} blockchain concepts`);
\`\`\`

### Validate WikiLink

\`\`\`typescript
function validateWikiLink(link: string): WikiLinkValidation {
  const index = loadIndex();

  // Check if valid
  if (index.wikilinks.valid[link]) {
    return {
      valid: true,
      target: index.wikilinks.valid[link].targetFile,
      concept: index.wikilinks.valid[link].targetConcept,
    };
  }

  // Check if broken
  if (index.wikilinks.broken[link]) {
    return {
      valid: false,
      broken: true,
      referenceCount: index.wikilinks.broken[link].referenceCount,
      suggestions: index.wikilinks.broken[link].suggestedFixes,
    };
  }

  // New link
  return {
    valid: false,
    broken: false,
    suggestion: 'Create new concept file',
  };
}

// Usage
const validation = validateWikiLink('[[Blockchain]]');
if (validation.valid) {
  console.log(`✅ Valid link to ${validation.target}`);
} else {
  console.log(`❌ Broken link - ${validation.suggestions[0].suggestion}`);
}
\`\`\`

### Find Related Concepts

\`\`\`typescript
function findRelatedConcepts(conceptName: string, limit = 5) {
  const index = loadIndex();
  const concept = index.concepts.concepts[conceptName];

  if (!concept) return [];

  // Combine parent, child, and linked concepts
  const related = [
    ...concept.parentOf,
    ...concept.childOf,
    ...concept.linksTo,
    ...concept.linkedFrom,
  ];

  // Remove duplicates and limit
  return [...new Set(related)].slice(0, limit);
}

// Usage
const related = findRelatedConcepts('Blockchain');
console.log('Related concepts:', related);
// ["Block", "Transaction", "Consensus Mechanism", "Smart Contract", "DeFi"]
\`\`\`

### Suggest Placement for New Concept

\`\`\`typescript
function suggestPlacement(conceptName: string, domain: string) {
  const index = loadIndex();

  // Extract keywords from concept name
  const keywords = conceptName.toLowerCase().split(/\\s+/);

  // Find similar concepts in domain
  const domainConcepts = Object.values(index.concepts.concepts)
    .filter(c => c.domain === domain);

  // Score each concept by keyword overlap
  const scored = domainConcepts.map(c => {
    const overlap = keywords.filter(kw =>
      c.keywords.some(ck => ck.includes(kw) || kw.includes(ck))
    ).length;
    return { concept: c, score: overlap };
  })
  .filter(s => s.score > 0)
  .sort((a, b) => b.score - a.score);

  if (scored.length === 0) {
    // No matches - suggest top-level placement
    const topLevel = index.hierarchies[domain].roots[0];
    return {
      suggestedParent: topLevel.concept,
      suggestedFile: generateFilename(conceptName, domain),
      confidence: 0.3,
      reason: 'No similar concepts found - suggesting top-level placement',
    };
  }

  // Suggest as sibling of most similar concept
  const bestMatch = scored[0].concept;
  return {
    suggestedParent: bestMatch.childOf[0] || bestMatch.preferredTerm,
    suggestedFile: generateFilename(conceptName, domain),
    relatedConcepts: scored.slice(0, 5).map(s => s.concept.preferredTerm),
    confidence: Math.min(scored[0].score / keywords.length, 0.9),
    reason: \`Similar to existing concept: \${bestMatch.preferredTerm}\`,
  };
}

function generateFilename(conceptName: string, domain: string) {
  const prefix = {
    'blockchain': 'BC',
    'ai-grounded': 'AI',
    'metaverse': 'MV',
    'robotics': 'RB',
  }[domain];

  const slug = conceptName.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  return \`\${prefix}-XXXX-\${slug}.md\`;
}

// Usage
const placement = suggestPlacement('Zero Knowledge Proof', 'blockchain');
console.log(\`Suggested parent: \${placement.suggestedParent}\`);
console.log(\`File: \${placement.suggestedFile}\`);
console.log(\`Confidence: \${(placement.confidence * 100).toFixed(0)}%\`);
\`\`\`

### Find Cross-Domain Bridge Opportunities

\`\`\`typescript
function suggestBridges(conceptName: string, targetDomain: string) {
  const index = loadIndex();
  const concept = index.concepts.concepts[conceptName];

  if (!concept) return [];

  // Get common relationship patterns for this domain pair
  const patterns = index.relationships.patterns.filter(p =>
    p.sourceDomain === concept.domain && p.targetDomain === targetDomain
  );

  if (patterns.length === 0) {
    return [];
  }

  // Find target concepts with keyword overlap
  const targetConcepts = Object.values(index.concepts.concepts)
    .filter(c => c.domain === targetDomain);

  const suggestions = [];

  for (const pattern of patterns) {
    for (const target of targetConcepts) {
      const overlap = concept.keywords.filter(kw =>
        target.keywords.includes(kw)
      ).length;

      if (overlap > 0) {
        suggestions.push({
          source: concept.preferredTerm,
          target: target.preferredTerm,
          predicate: pattern.predicate,
          confidence: Math.min(overlap / concept.keywords.length, 0.8),
          reason: \`Pattern: \${pattern.pattern}\`,
        });
      }
    }
  }

  return suggestions
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, 5);
}

// Usage
const bridges = suggestBridges('Digital Asset', 'blockchain');
bridges.forEach(b => {
  console.log(\`\${b.source} --[\${b.predicate}]--> \${b.target} (\${(b.confidence * 100).toFixed(0)}%)\`);
});
\`\`\`

### Get Domain Statistics

\`\`\`typescript
function getDomainStats(domain: string) {
  const index = loadIndex();
  const domainData = index.domains[domain];

  return {
    name: domain,
    namespace: domainData.namespace,
    fileCount: domainData.fileCount,
    topLevelClasses: domainData.topLevelClasses,
    completionRate: domainData.completionRate,
    bridges: domainData.bridgeCount,
  };
}

// Usage
const stats = getDomainStats('blockchain');
console.log(\`Blockchain: \${stats.fileCount} files, \${stats.completionRate * 100}% complete\`);
\`\`\`

### Check Index Health

\`\`\`typescript
function checkIndexHealth() {
  const index = loadIndex();
  const stats = index.statistics;

  return {
    totalFiles: stats.totalFiles,
    totalConcepts: stats.totalConcepts,
    wikilinkIntegrity: \`\${(stats.wikilinkIntegrity * 100).toFixed(1)}%\`,
    topMissingConcepts: stats.topMissingConcepts,
    orphanedConcepts: stats.orphanedConcepts,
    qualityScore: calculateQualityScore(stats),
  };
}

function calculateQualityScore(stats) {
  const scores = {
    completeness: stats.completeFiles / stats.totalFiles,
    connectivity: stats.wikilinkIntegrity,
    documentation: stats.averageAuthorityScore,
  };

  return (
    scores.completeness * 0.4 +
    scores.connectivity * 0.3 +
    scores.documentation * 0.3
  );
}

// Usage
const health = checkIndexHealth();
console.log(\`Ontology Health: \${(health.qualityScore * 100).toFixed(0)}%\`);
console.log(\`WikiLink Integrity: \${health.wikilinkIntegrity}\`);
console.log(\`Top missing concepts:\`);
health.topMissingConcepts.forEach(c =>
  console.log(\`  - \${c.concept} (\${c.count} references)\`)
);
\`\`\`

## Performance Characteristics

Based on testing with 537 indexed files:

- **Index Size**: 1.3 MB (uncompressed JSON)
- **Load Time**: ~226ms on first load
- **Memory Usage**: ~1.3 MB RAM
- **Query Time**: <1ms for direct lookups (O(1))
- **Search Time**: <10ms for keyword searches (O(n) where n = domain size)

## Integration Patterns

### Pattern 1: Content Creation Workflow

\`\`\`typescript
async function createNewConcept(name: string, domain: string) {
  const index = loadIndex();

  // 1. Validate concept doesn't exist
  if (index.concepts.concepts[name]) {
    return { error: 'Concept already exists' };
  }

  // 2. Suggest placement
  const placement = suggestPlacement(name, domain);

  // 3. Find related concepts for linking
  const similar = findSimilarConcepts(name, domain);

  // 4. Check for cross-domain bridges
  const otherDomains = ['blockchain', 'ai-grounded', 'metaverse', 'robotics']
    .filter(d => d !== domain);
  const bridgeOpportunities = otherDomains.flatMap(d =>
    suggestBridges(name, d)
  );

  return {
    filename: placement.suggestedFile,
    suggestedParent: placement.suggestedParent,
    relatedConcepts: similar.map(s => s.preferredTerm),
    bridgeOpportunities: bridgeOpportunities.slice(0, 3),
    template: generateTemplate(name, domain, placement),
  };
}
\`\`\`

### Pattern 2: WikiLink Auto-Completion

\`\`\`typescript
function autoCompleteWikiLink(partial: string) {
  const index = loadIndex();
  const allConcepts = Object.keys(index.concepts.concepts);

  const matches = allConcepts
    .filter(c => c.toLowerCase().includes(partial.toLowerCase()))
    .map(c => {
      const concept = index.concepts.concepts[c];
      return {
        text: c,
        domain: concept.domain,
        file: concept.file,
        definition: concept.definition,
      };
    })
    .slice(0, 10);

  return matches;
}

// Usage in skill
const completions = autoCompleteWikiLink('block');
// Returns: ["Blockchain", "Block", "Blocksize", ...]
\`\`\`

### Pattern 3: Quality Improvement

\`\`\`typescript
function findImprovementOpportunities() {
  const index = loadIndex();

  const opportunities = [];

  // 1. Find orphaned concepts (no relationships)
  const orphaned = Object.values(index.concepts.concepts)
    .filter(c =>
      c.parentOf.length === 0 &&
      c.childOf.length === 0 &&
      c.linksTo.length === 0
    );

  if (orphaned.length > 0) {
    opportunities.push({
      type: 'orphaned_concepts',
      count: orphaned.length,
      action: 'Add relationships to integrate these concepts',
      concepts: orphaned.slice(0, 5).map(c => c.preferredTerm),
    });
  }

  // 2. Find high-value broken links
  const highValueBroken = Object.values(index.wikilinks.broken)
    .filter(b => b.referenceCount > 10)
    .sort((a, b) => b.referenceCount - a.referenceCount)
    .slice(0, 10);

  if (highValueBroken.length > 0) {
    opportunities.push({
      type: 'missing_high_value_concepts',
      count: highValueBroken.length,
      action: 'Create these frequently referenced concepts',
      concepts: highValueBroken.map(b => ({
        name: b.wikilink.replace(/[\[\]]/g, ''),
        references: b.referenceCount,
      })),
    });
  }

  // 3. Find shallow hierarchies (could use more detail)
  for (const [domain, hierarchy] of Object.entries(index.hierarchies)) {
    if (hierarchy.maxDepth < 2) {
      opportunities.push({
        type: 'shallow_hierarchy',
        domain: domain,
        action: \`Expand \${domain} hierarchy (current depth: \${hierarchy.maxDepth})\`,
      });
    }
  }

  return opportunities;
}
\`\`\`

## Best Practices

### 1. Load Index Once

Load the index at skill initialization, not on every query:

\`\`\`typescript
// ✅ Good - load once
let INDEX = null;
function getIndex() {
  if (!INDEX) INDEX = loadIndex();
  return INDEX;
}

// ❌ Bad - load on every call
function findConcept(name) {
  const index = JSON.parse(fs.readFileSync('index.json'));
  // ...
}
\`\`\`

### 2. Use Direct Lookups When Possible

Use hash map lookups (O(1)) instead of array scans:

\`\`\`typescript
// ✅ Good - O(1) lookup
const concept = index.files.byTermId['BC-0001'];

// ❌ Bad - O(n) scan
const concept = Object.values(index.files.byTermId)
  .find(c => c.termId === 'BC-0001');
\`\`\`

### 3. Regenerate Index After Bulk Changes

If you modify many files, regenerate the index:

\`\`\`bash
# After bulk file operations
node scripts/generate-index.js
\`\`\`

### 4. Cache Query Results

For expensive queries, cache results in the skill session:

\`\`\`typescript
const CACHE = {};

function findConceptsExpensive(query) {
  if (CACHE[query]) return CACHE[query];

  const result = performExpensiveQuery(query);
  CACHE[query] = result;
  return result;
}
\`\`\`

## Troubleshooting

### Index Not Found

\`\`\`bash
# Generate index if missing
node scripts/generate-index.js
\`\`\`

### Index Out of Date

\`\`\`bash
# Regenerate after file changes
node scripts/generate-index.js

# Check index timestamp
node -e "console.log(require('./.cache/ontology-index.json').metadata.generatedAt)"
\`\`\`

### Slow Query Performance

\`\`\`typescript
// Profile query performance
console.time('query');
const result = performQuery();
console.timeEnd('query');

// If > 50ms, optimize:
// 1. Use direct hash lookups
// 2. Limit result sets
// 3. Cache results
\`\`\`

## Advanced Topics

### Custom Index Extensions

You can extend the index with additional data:

\`\`\`typescript
function enrichIndex(index) {
  // Add custom computed fields
  for (const concept of Object.values(index.concepts.concepts)) {
    concept.popularity = concept.linkedFrom.length;
    concept.centrality = calculateCentrality(concept, index);
  }

  return index;
}
\`\`\`

### Incremental Index Updates

For live updates during development:

\`\`\`typescript
function updateIndexForFile(filename, index) {
  // 1. Parse file
  const metadata = parseFile(filename);

  // 2. Update index structures
  index.files.byTermId[metadata.termId] = metadata;
  index.concepts.concepts[metadata.preferredTerm] = buildConceptNode(metadata);

  // 3. Rebuild affected relationships
  rebuildRelationships(metadata, index);

  return index;
}
\`\`\`

### Index Compression

For even faster loading:

\`\`\`bash
# Compress index with gzip
gzip -k .cache/ontology-index.json

# Load compressed (requires gunzip in skill)
gunzip -c .cache/ontology-index.json.gz | node skill.js
\`\`\`

## See Also

- [In-Memory Index Design](../IN-MEMORY-INDEX-DESIGN.md) - Full index structure specification
- [Ontology Builder README](README.md) - Guide for building ontology content
- [CANONICAL-FORMAT-GUIDE](../CANONICAL-FORMAT-GUIDE.md) - Format specification
