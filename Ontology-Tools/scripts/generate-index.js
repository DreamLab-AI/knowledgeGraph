#!/usr/bin/env node

/**
 * Ontology Index Generator
 *
 * Scans all markdown files in logseq/pages and generates an efficient
 * in-memory index structure for the Claude Code skill runtime.
 *
 * Usage:
 *   node scripts/generate-index.js
 *   node scripts/generate-index.js --output .cache/ontology-index.json
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  pagesDir: path.join(__dirname, '../logseq/pages'),
  outputPath: path.join(__dirname, '../.cache/ontology-index.json'),
  cacheDir: path.join(__dirname, '../.cache'),
  verbose: process.argv.includes('--verbose'),
};

// Parse command line args
const outputArg = process.argv.find(arg => arg.startsWith('--output='));
if (outputArg) {
  CONFIG.outputPath = path.resolve(outputArg.split('=')[1]);
}

/**
 * Main index generation function
 */
async function generateIndex() {
  console.log('🚀 Generating Ontology Index...');
  console.log(`   Source: ${CONFIG.pagesDir}`);
  console.log(`   Output: ${CONFIG.outputPath}\n`);

  const startTime = Date.now();

  // Ensure cache directory exists
  if (!fs.existsSync(CONFIG.cacheDir)) {
    fs.mkdirSync(CONFIG.cacheDir, { recursive: true });
  }

  // Initialize index structure
  const index = {
    metadata: {
      version: '1.0.0',
      generatedAt: new Date().toISOString(),
      totalFiles: 0,
      totalConcepts: 0,
      sourcePath: CONFIG.pagesDir,
      indexFormat: 'disruptive-tech-v1',
    },
    files: {
      byTermId: {},
      byFilename: {},
      byOwlClass: {},
    },
    domains: {
      blockchain: createEmptyDomainMetadata('bc:'),
      'ai-grounded': createEmptyDomainMetadata('aigo:'),
      metaverse: createEmptyDomainMetadata('mv:'),
      robotics: createEmptyDomainMetadata('rb:'),
    },
    concepts: {
      concepts: {},
      orphanedConcepts: [],
      missingConcepts: [],
    },
    hierarchies: {
      blockchain: { roots: [], maxDepth: 0, byDepth: {} },
      'ai-grounded': { roots: [], maxDepth: 0, byDepth: {} },
      metaverse: { roots: [], maxDepth: 0, byDepth: {} },
      robotics: { roots: [], maxDepth: 0, byDepth: {} },
    },
    relationships: {
      predicates: {},
      patterns: [],
    },
    wikilinks: {
      valid: {},
      broken: {},
      stats: {
        totalLinks: 0,
        validLinks: 0,
        brokenLinks: 0,
        integrityScore: 0,
      },
    },
    statistics: createEmptyStatistics(),
  };

  // Step 1: Scan all markdown files
  console.log('📂 Scanning markdown files...');
  const files = fs.readdirSync(CONFIG.pagesDir)
    .filter(f => f.endsWith('.md'))
    .map(f => path.join(CONFIG.pagesDir, f));

  console.log(`   Found ${files.length} markdown files\n`);

  // Step 2: Process each file
  console.log('🔍 Processing files...');
  let processedCount = 0;
  const allWikiLinks = new Set();
  const existingConcepts = new Set();

  for (const filePath of files) {
    try {
      const fileMetadata = await processFile(filePath, index);

      if (fileMetadata) {
        // Add to index
        const { termId, filename, owlClass, preferredTerm, sourceDomain } = fileMetadata;

        index.files.byTermId[termId] = fileMetadata;
        index.files.byFilename[filename] = termId;
        if (owlClass) {
          index.files.byOwlClass[owlClass] = termId;
        }

        // Track concept
        existingConcepts.add(preferredTerm);

        // Add to domain
        index.domains[sourceDomain].files.push(filename);
        index.domains[sourceDomain].fileCount++;

        // Collect WikiLinks
        fileMetadata.wikilinks?.forEach(link => allWikiLinks.add(link));

        processedCount++;

        if (CONFIG.verbose && processedCount % 100 === 0) {
          console.log(`   Processed ${processedCount}/${files.length} files...`);
        }
      }
    } catch (error) {
      console.error(`   ⚠️  Error processing ${path.basename(filePath)}: ${error.message}`);
    }
  }

  console.log(`   ✅ Processed ${processedCount} files\n`);

  // Step 3: Build concept graph
  console.log('🕸️  Building concept graph...');
  buildConceptGraph(index);

  // Step 4: Build hierarchies
  console.log('🌲 Building hierarchies...');
  buildHierarchies(index);

  // Step 5: Analyze relationships
  console.log('🔗 Analyzing relationships...');
  analyzeRelationships(index);

  // Step 6: Validate WikiLinks
  console.log('🔍 Validating WikiLinks...');
  validateWikiLinks(index, allWikiLinks, existingConcepts);

  // Step 7: Compute statistics
  console.log('📊 Computing statistics...');
  computeStatistics(index);

  // Step 8: Write index to file
  console.log('💾 Writing index file...');
  const indexJson = JSON.stringify(index, null, 2);
  fs.writeFileSync(CONFIG.outputPath, indexJson, 'utf-8');

  const endTime = Date.now();
  const duration = endTime - startTime;
  const sizeKB = (indexJson.length / 1024).toFixed(2);
  const sizeMB = (indexJson.length / 1024 / 1024).toFixed(2);

  console.log('\n✨ Index generation complete!\n');
  console.log(`   Files indexed: ${index.metadata.totalFiles}`);
  console.log(`   Concepts: ${index.metadata.totalConcepts}`);
  console.log(`   Index size: ${sizeKB} KB (${sizeMB} MB)`);
  console.log(`   Generation time: ${duration}ms`);
  console.log(`   Output: ${CONFIG.outputPath}\n`);

  return index;
}

/**
 * Process a single markdown file
 */
async function processFile(filePath, index) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(filePath);

  // Extract metadata using regex patterns
  const metadata = extractMetadata(content, filename);

  if (!metadata.termId || !metadata.sourceDomain) {
    if (CONFIG.verbose) {
      console.log(`   ⚠️  Skipping ${filename} - missing required metadata`);
    }
    return null;
  }

  // Extract WikiLinks
  metadata.wikilinks = extractWikiLinks(content);

  // Extract relationships
  metadata.relationships = extractRelationships(content);

  // Get file stats
  const stats = fs.statSync(filePath);
  metadata.path = path.relative(process.cwd(), filePath);
  metadata.size = stats.size;
  metadata.lastModified = stats.mtime.toISOString();

  // Initialize link counts
  metadata.linkCount = {
    outgoing: metadata.wikilinks.length,
    incoming: 0, // Computed later
    bridges: 0, // Computed later
  };

  return metadata;
}

/**
 * Extract metadata from markdown content
 */
function extractMetadata(content, filename) {
  const metadata = {
    filename,
    parentClasses: [],
    childClasses: [],
  };

  // Extract term-id
  const termIdMatch = content.match(/term-id::\s*([A-Z]+-\d+)/);
  if (termIdMatch) metadata.termId = termIdMatch[1];

  // Extract preferred-term
  const preferredTermMatch = content.match(/preferred-term::\s*(.+)/);
  if (preferredTermMatch) {
    metadata.preferredTerm = preferredTermMatch[1].trim();
  } else {
    // Fallback: extract from filename or first heading
    const titleMatch = content.match(/^#\s+(.+)/m);
    if (titleMatch) {
      metadata.preferredTerm = titleMatch[1].trim();
    } else {
      metadata.preferredTerm = filename.replace('.md', '').replace(/^[A-Z]+-\d+-/, '');
    }
  }

  // Extract source-domain
  const domainMatch = content.match(/source-domain::\s*(blockchain|ai-grounded|metaverse|robotics)/);
  if (domainMatch) {
    metadata.sourceDomain = domainMatch[1];
  } else {
    // Infer from term-id prefix
    if (metadata.termId) {
      const prefix = metadata.termId.split('-')[0];
      const domainMap = { BC: 'blockchain', AI: 'ai-grounded', MV: 'metaverse', RB: 'robotics' };
      metadata.sourceDomain = domainMap[prefix] || 'unknown';
    }
  }

  // Map source domain to namespace
  const namespaceMap = {
    blockchain: 'bc:',
    'ai-grounded': 'aigo:',
    metaverse: 'mv:',
    robotics: 'rb:',
  };
  metadata.namespace = namespaceMap[metadata.sourceDomain] || '';

  // Extract owl:class
  const owlClassMatch = content.match(/owl:class::\s*([a-z]+:[A-Za-z0-9_]+)/);
  if (owlClassMatch) metadata.owlClass = owlClassMatch[1];

  // Extract OWL properties
  const physicalityMatch = content.match(/owl:physicality::\s*(\w+)/);
  if (physicalityMatch) metadata.owlPhysicality = physicalityMatch[1];

  const roleMatch = content.match(/owl:role::\s*(\w+)/);
  if (roleMatch) metadata.owlRole = roleMatch[1];

  const inferredClassMatch = content.match(/owl:inferred-class::\s*([a-z]+:[A-Za-z0-9_]+)/);
  if (inferredClassMatch) metadata.owlInferredClass = inferredClassMatch[1];

  // Extract status
  const statusMatch = content.match(/status::\s*(complete|in-progress|draft|legacy)/);
  if (statusMatch) metadata.status = statusMatch[1];

  // Extract maturity
  const maturityMatch = content.match(/maturity::\s*(\w+)/);
  if (maturityMatch) metadata.maturity = maturityMatch[1];

  // Extract authority-score
  const authorityMatch = content.match(/authority-score::\s*([0-9.]+)/);
  if (authorityMatch) metadata.authorityScore = parseFloat(authorityMatch[1]);

  // Extract belongsToDomain
  const belongsMatch = content.match(/belongsToDomain::\s*\[\[(.+?)\]\]/);
  if (belongsMatch) metadata.belongsToDomain = belongsMatch[1];

  // Extract implementedInLayer
  const layerMatch = content.match(/implementedInLayer::\s*\[\[(.+?)\]\]/);
  if (layerMatch) metadata.implementedInLayer = layerMatch[1];

  // Extract parent classes from is-subclass-of
  const parentMatches = content.matchAll(/is-subclass-of::\s*\[\[(.+?)\]\]/g);
  for (const match of parentMatches) {
    metadata.parentClasses.push(match[1]);
  }

  // Extract definition (first 200 chars)
  const defMatch = content.match(/definition::\s*(.+)/);
  if (defMatch) {
    metadata.definition = defMatch[1].trim().substring(0, 200);
  }

  // Extract keywords from preferred term
  if (metadata.preferredTerm) {
    metadata.keywords = extractKeywords(metadata.preferredTerm);
  }

  return metadata;
}

/**
 * Extract WikiLinks from content
 */
function extractWikiLinks(content) {
  const wikilinks = [];
  const regex = /\[\[(.+?)\]\]/g;
  let match;

  while ((match = regex.exec(content)) !== null) {
    wikilinks.push(match[1]);
  }

  return [...new Set(wikilinks)]; // Remove duplicates
}

/**
 * Extract relationships from content
 */
function extractRelationships(content) {
  const relationships = [];

  // Pattern: relationship-name:: [[Target]]
  const relationshipRegex = /([a-z-]+)::\s*\[\[(.+?)\]\]/g;
  let match;

  while ((match = relationshipRegex.exec(content)) !== null) {
    const predicate = match[1];
    const target = match[2];

    // Filter to known relationship predicates
    const knownPredicates = [
      'is-subclass-of', 'has-part', 'uses', 'implements', 'secured-by',
      'enables', 'requires', 'related-to', 'bridges-to'
    ];

    if (knownPredicates.includes(predicate)) {
      relationships.push({ predicate, target });
    }
  }

  return relationships;
}

/**
 * Extract keywords from text
 */
function extractKeywords(text) {
  // Simple keyword extraction: split on spaces and camelCase
  const words = text
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Split camelCase
    .toLowerCase()
    .split(/\s+/)
    .filter(w => w.length > 3); // Filter short words

  return [...new Set(words)];
}

/**
 * Build concept graph
 */
function buildConceptGraph(index) {
  const concepts = {};

  // Build concept nodes
  for (const [termId, fileMetadata] of Object.entries(index.files.byTermId)) {
    const concept = {
      preferredTerm: fileMetadata.preferredTerm,
      termId: fileMetadata.termId,
      file: fileMetadata.filename,
      owlClass: fileMetadata.owlClass || '',
      domain: fileMetadata.sourceDomain,
      parentOf: [],
      childOf: fileMetadata.parentClasses || [],
      relatedTo: [],
      bridges: [],
      linksTo: fileMetadata.wikilinks || [],
      linkedFrom: [],
      definition: fileMetadata.definition || '',
      keywords: fileMetadata.keywords || [],
    };

    concepts[fileMetadata.preferredTerm] = concept;
  }

  // Build parent-child relationships
  for (const concept of Object.values(concepts)) {
    for (const parentName of concept.childOf) {
      if (concepts[parentName]) {
        concepts[parentName].parentOf.push(concept.preferredTerm);
      }
    }
  }

  // Build backlinks (linkedFrom)
  for (const concept of Object.values(concepts)) {
    for (const targetName of concept.linksTo) {
      if (concepts[targetName]) {
        concepts[targetName].linkedFrom.push(concept.preferredTerm);
      }
    }
  }

  index.concepts.concepts = concepts;
}

/**
 * Build hierarchies
 */
function buildHierarchies(index) {
  for (const domain of ['blockchain', 'ai-grounded', 'metaverse', 'robotics']) {
    const domainConcepts = Object.values(index.concepts.concepts)
      .filter(c => c.domain === domain);

    // Find root concepts (no parents)
    const roots = domainConcepts.filter(c => c.childOf.length === 0);

    // Build hierarchy nodes
    const hierarchyNodes = roots.map(root => buildHierarchyNode(root, index.concepts.concepts, 0));

    index.hierarchies[domain].roots = hierarchyNodes;

    // Compute max depth and by-depth grouping
    const byDepth = {};
    let maxDepth = 0;

    function traverse(node) {
      if (!byDepth[node.depth]) byDepth[node.depth] = [];
      byDepth[node.depth].push(node.concept);
      maxDepth = Math.max(maxDepth, node.depth);
      node.children.forEach(traverse);
    }

    hierarchyNodes.forEach(traverse);

    index.hierarchies[domain].maxDepth = maxDepth;
    index.hierarchies[domain].byDepth = byDepth;
  }
}

/**
 * Build hierarchy node recursively
 */
function buildHierarchyNode(concept, allConcepts, depth) {
  const children = concept.parentOf
    .map(childName => allConcepts[childName])
    .filter(c => c)
    .map(childConcept => buildHierarchyNode(childConcept, allConcepts, depth + 1));

  const descendantCount = children.reduce((sum, child) => sum + 1 + child.descendantCount, 0);

  return {
    concept: concept.preferredTerm,
    owlClass: concept.owlClass,
    file: concept.file,
    depth,
    children,
    siblingCount: 0, // Computed by parent
    descendantCount,
  };
}

/**
 * Analyze relationships
 */
function analyzeRelationships(index) {
  const predicates = {};

  // Analyze all relationships
  for (const fileMetadata of Object.values(index.files.byTermId)) {
    if (!fileMetadata.relationships) continue;

    for (const rel of fileMetadata.relationships) {
      const { predicate, target } = rel;

      if (!predicates[predicate]) {
        predicates[predicate] = {
          predicate,
          namespace: predicate.startsWith('owl:') ? 'owl:' : 'dt:',
          usageCount: 0,
          domains: { source: new Set(), target: new Set() },
          examples: [],
        };
      }

      predicates[predicate].usageCount++;
      predicates[predicate].domains.source.add(fileMetadata.sourceDomain);

      // Find target domain
      const targetConcept = index.concepts.concepts[target];
      if (targetConcept) {
        predicates[predicate].domains.target.add(targetConcept.domain);
      }

      // Add example
      if (predicates[predicate].examples.length < 5) {
        predicates[predicate].examples.push({
          source: fileMetadata.preferredTerm,
          target,
          file: fileMetadata.filename,
        });
      }
    }
  }

  // Convert Sets to Arrays
  for (const pred of Object.values(predicates)) {
    pred.domains.source = Array.from(pred.domains.source);
    pred.domains.target = Array.from(pred.domains.target);
  }

  index.relationships.predicates = predicates;
}

/**
 * Validate WikiLinks
 */
function validateWikiLinks(index, allWikiLinks, existingConcepts) {
  const valid = {};
  const broken = {};

  for (const link of allWikiLinks) {
    if (existingConcepts.has(link)) {
      // Find the concept
      const concept = index.concepts.concepts[link];
      if (concept) {
        valid[`[[${link}]]`] = {
          wikilink: `[[${link}]]`,
          targetFile: concept.file,
          targetConcept: concept.preferredTerm,
          targetDomain: concept.domain,
          referenceCount: concept.linkedFrom.length,
          referencedBy: concept.linkedFrom.slice(0, 10), // Limit to 10
        };
      }
    } else {
      // Broken link
      const referencedBy = [];
      for (const concept of Object.values(index.concepts.concepts)) {
        if (concept.linksTo.includes(link)) {
          referencedBy.push(concept.file);
        }
      }

      broken[`[[${link}]]`] = {
        wikilink: `[[${link}]]`,
        referenceCount: referencedBy.length,
        referencedBy: referencedBy.slice(0, 10),
        suggestedFixes: [
          {
            suggestion: `Create new concept file for "${link}"`,
            confidence: 0.7,
            reason: `${referencedBy.length} files reference this concept`,
          },
        ],
      };
    }
  }

  index.wikilinks.valid = valid;
  index.wikilinks.broken = broken;
  index.wikilinks.stats.totalLinks = allWikiLinks.size;
  index.wikilinks.stats.validLinks = Object.keys(valid).length;
  index.wikilinks.stats.brokenLinks = Object.keys(broken).length;
  index.wikilinks.stats.integrityScore =
    Object.keys(valid).length / Math.max(1, allWikiLinks.size);
}

/**
 * Compute statistics
 */
function computeStatistics(index) {
  const stats = index.statistics;

  stats.totalFiles = Object.keys(index.files.byTermId).length;
  stats.totalConcepts = Object.keys(index.concepts.concepts).length;

  // By domain
  for (const domain of ['blockchain', 'ai-grounded', 'metaverse', 'robotics']) {
    stats.byDomain[domain] = index.domains[domain].fileCount;
  }

  // By status
  for (const fileMetadata of Object.values(index.files.byTermId)) {
    const status = fileMetadata.status || 'unknown';
    stats.byStatus[status] = (stats.byStatus[status] || 0) + 1;
  }

  // Relationships
  stats.totalRelationships = Object.values(index.relationships.predicates)
    .reduce((sum, pred) => sum + pred.usageCount, 0);

  // WikiLink integrity
  stats.wikilinkIntegrity = index.wikilinks.stats.integrityScore;

  // Top missing concepts
  stats.topMissingConcepts = Object.values(index.wikilinks.broken)
    .sort((a, b) => b.referenceCount - a.referenceCount)
    .slice(0, 10)
    .map(broken => ({
      concept: broken.wikilink.replace(/[\[\]]/g, ''),
      count: broken.referenceCount,
    }));

  // Update metadata
  index.metadata.totalFiles = stats.totalFiles;
  index.metadata.totalConcepts = stats.totalConcepts;
}

/**
 * Helper: Create empty domain metadata
 */
function createEmptyDomainMetadata(namespace) {
  return {
    namespace,
    fileCount: 0,
    conceptCount: 0,
    files: [],
    topLevelClasses: [],
    completionRate: 0,
    averageAuthorityScore: 0,
    bridgeCount: { outgoing: 0, incoming: 0 },
    commonParentClasses: [],
    commonPhysicalities: [],
  };
}

/**
 * Helper: Create empty statistics
 */
function createEmptyStatistics() {
  return {
    totalFiles: 0,
    byDomain: {},
    byStatus: {},
    totalConcepts: 0,
    totalRelationships: 0,
    totalBridges: 0,
    bridgesByDomain: {},
    wikilinkIntegrity: 0,
    topMissingConcepts: [],
    maxHierarchyDepth: 0,
    averageHierarchyDepth: 0,
    averageAuthorityScore: 0,
    completeFiles: 0,
    draftFiles: 0,
    orphanedConcepts: 0,
    isolatedDomains: [],
  };
}

// Run generator
if (require.main === module) {
  generateIndex().catch(console.error);
}

module.exports = { generateIndex };
