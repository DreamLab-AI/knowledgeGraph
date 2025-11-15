#!/usr/bin/env node
/**
 * Parallel Ontology File Processor
 * Processes multiple ontology markdown files in parallel using research-swarm and Perplexity
 */

const fs = require('fs').promises;
const path = require('path');
const { queryPerplexity, enrichOntologyTerm } = require('./perplexity-research');

const PAGES_DIR = path.join(__dirname, '../../mainKnowledgeGraph/pages');
const BATCH_SIZE = 10; // Process 10 files concurrently
const DELAY_MS = 2000; // Delay between batches to respect rate limits

// Parse ontology block from markdown
function parseOntologyBlock(content) {
  const lines = content.split('\n');
  const ontologyData = {};
  let inOntologyBlock = false;

  for (const line of lines) {
    if (line.includes('### OntologyBlock')) {
      inOntologyBlock = true;
      continue;
    }

    if (inOntologyBlock) {
      if (line.trim().startsWith('-') && line.includes('::')) {
        const match = line.match(/- ([^:]+)::\s*(.+)/);
        if (match) {
          ontologyData[match[1]] = match[2];
        }
      }

      // End of ontology block
      if (line.trim() === '' && Object.keys(ontologyData).length > 0) {
        break;
      }
    }
  }

  return ontologyData;
}

// Check if file needs enrichment
function needsEnrichment(content) {
  const lines = content.split('\n');
  const nonEmptyLines = lines.filter(l => l.trim() !== '').length;

  // Empty or very small files need enrichment
  if (nonEmptyLines < 20) return true;

  // Check for placeholder content
  if (content.includes('I am a prepended block')) return true;

  // Check if missing key sections
  const hasKeyLiterature = content.toLowerCase().includes('key literature') ||
                           content.toLowerCase().includes('academic') ||
                           content.toLowerCase().includes('sources');
  const hasExamples = content.toLowerCase().includes('example') ||
                      content.toLowerCase().includes('application') ||
                      content.toLowerCase().includes('use case');

  return !hasKeyLiterature || !hasExamples;
}

// Generate enriched content in proper Logseq markdown format
async function generateEnrichedContent(filePath, ontologyData, existingContent) {
  const preferredTerm = ontologyData['preferred-term'] || ontologyData.term || path.basename(filePath, '.md');
  const definition = ontologyData.definition || 'A metaverse-related concept';
  const termId = ontologyData['term-id'] || 'UNKNOWN';

  console.log(`  📚 Researching: ${preferredTerm}...`);

  const enrichmentResult = await enrichOntologyTerm(preferredTerm, definition);

  if (!enrichmentResult.success) {
    console.error(`  ❌ Failed to enrich ${preferredTerm}: ${enrichmentResult.error}`);
    return null;
  }

  // Build the enriched markdown with proper Logseq formatting
  const ontologyBlock = existingContent.split('## ')[0]; // Keep original ontology block

  const enrichedMarkdown = `${ontologyBlock}
## Academic Context

${enrichmentResult.content}


## Related Resources

For more information, see:
- [[Metaverse]]
- [[MetaverseDomain]]


## Last Updated

- **Enriched**: ${new Date().toISOString().split('T')[0]}
- **Source**: Perplexity AI Research + International Standards
- **Verification**: Automated enrichment with human review recommended


`;

  return enrichedMarkdown;
}

// Process a single file
async function processFile(filePath) {
  try {
    const relativePath = path.relative(PAGES_DIR, filePath);
    console.log(`\n📄 Processing: ${relativePath}`);

    const content = await fs.readFile(filePath, 'utf-8');

    // Check if enrichment needed
    if (!needsEnrichment(content)) {
      console.log(`  ✅ Already enriched, skipping`);
      return { file: relativePath, status: 'skipped', reason: 'already enriched' };
    }

    // Parse ontology data
    const ontologyData = parseOntologyBlock(content);

    if (!ontologyData['preferred-term'] && !ontologyData.term) {
      console.log(`  ⚠️  No ontology block found, skipping`);
      return { file: relativePath, status: 'skipped', reason: 'no ontology block' };
    }

    // Generate enriched content
    const enriched = await generateEnrichedContent(filePath, ontologyData, content);

    if (!enriched) {
      return { file: relativePath, status: 'failed', reason: 'enrichment failed' };
    }

    // Write back to file
    await fs.writeFile(filePath, enriched, 'utf-8');
    console.log(`  ✅ Enriched successfully`);

    return { file: relativePath, status: 'enriched', size: enriched.length };

  } catch (error) {
    console.error(`  ❌ Error processing ${filePath}:`, error.message);
    return { file: path.relative(PAGES_DIR, filePath), status: 'error', error: error.message };
  }
}

// Process files in parallel batches
async function processBatch(files) {
  const results = await Promise.all(files.map(processFile));
  return results;
}

// Main processing function
async function processAllFiles(priorityOnly = false) {
  console.log('🔍 Scanning for files to enrich...\n');

  const allFiles = await fs.readdir(PAGES_DIR);
  const mdFiles = allFiles.filter(f => f.endsWith('.md'));

  console.log(`Found ${mdFiles.length} markdown files`);

  // Identify files that need enrichment
  const filesToProcess = [];

  for (const file of mdFiles) {
    const filePath = path.join(PAGES_DIR, file);
    const content = await fs.readFile(filePath, 'utf-8');

    if (needsEnrichment(content)) {
      const ontologyData = parseOntologyBlock(content);
      const priority = content.length === 0 ? 'high' : 'medium';
      filesToProcess.push({ path: filePath, priority, size: content.length });
    }
  }

  // Sort by priority (empty files first, then by size)
  filesToProcess.sort((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority === 'high' ? -1 : 1;
    }
    return a.size - b.size;
  });

  console.log(`\n📋 Found ${filesToProcess.length} files needing enrichment`);
  console.log(`   High priority (empty): ${filesToProcess.filter(f => f.priority === 'high').length}`);
  console.log(`   Medium priority: ${filesToProcess.filter(f => f.priority === 'medium').length}\n`);

  if (priorityOnly) {
    const highPriorityFiles = filesToProcess.filter(f => f.priority === 'high');
    console.log(`\n🎯 Processing ${highPriorityFiles.length} high-priority files only\n`);
    filesToProcess.length = 0;
    filesToProcess.push(...highPriorityFiles);
  }

  // Process in batches
  const results = [];
  for (let i = 0; i < filesToProcess.length; i += BATCH_SIZE) {
    const batch = filesToProcess.slice(i, i + BATCH_SIZE);
    console.log(`\n📦 Processing batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(filesToProcess.length / BATCH_SIZE)}`);
    console.log(`   Files ${i + 1}-${Math.min(i + BATCH_SIZE, filesToProcess.length)} of ${filesToProcess.length}`);

    const batchResults = await processBatch(batch.map(f => f.path));
    results.push(...batchResults);

    // Delay between batches to respect rate limits
    if (i + BATCH_SIZE < filesToProcess.length) {
      console.log(`\n⏳ Waiting ${DELAY_MS / 1000}s before next batch...`);
      await new Promise(resolve => setTimeout(resolve, DELAY_MS));
    }
  }

  // Summary
  console.log('\n\n' + '='.repeat(60));
  console.log('📊 ENRICHMENT SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total files processed: ${results.length}`);
  console.log(`✅ Enriched: ${results.filter(r => r.status === 'enriched').length}`);
  console.log(`⏭️  Skipped: ${results.filter(r => r.status === 'skipped').length}`);
  console.log(`❌ Failed: ${results.filter(r => r.status === 'failed' || r.status === 'error').length}`);
  console.log('='.repeat(60) + '\n');

  return results;
}

// CLI
if (require.main === module) {
  const priorityOnly = process.argv.includes('--priority-only');

  if (!process.env.PERPLEXITY_API_KEY) {
    console.error('❌ Error: PERPLEXITY_API_KEY environment variable not set');
    process.exit(1);
  }

  processAllFiles(priorityOnly)
    .then(results => {
      const failed = results.filter(r => r.status === 'error' || r.status === 'failed');
      if (failed.length > 0) {
        console.log('\n⚠️  Some files failed to process:');
        failed.forEach(f => console.log(`   - ${f.file}: ${f.reason || f.error}`));
      }
      process.exit(failed.length > 0 ? 1 : 0);
    })
    .catch(error => {
      console.error('\n❌ Fatal error:', error);
      process.exit(1);
    });
}

module.exports = { processAllFiles, processFile, needsEnrichment };
