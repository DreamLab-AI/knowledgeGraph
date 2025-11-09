#!/usr/bin/env node
/**
 * Batch 5-6: Metaverse File Converter
 * Converts 993 non-prefixed files to Format A (OntologyBlock)
 * Strategy: Check format, add missing fields or full conversion
 */

const fs = require('fs').promises;
const path = require('path');

const PAGES_DIR = path.join(__dirname, '../logseq/pages');
const LOG_FILE = path.join(__dirname, '../swarm-coordination/batch-5-6-log.txt');

// Skip these files
const SKIP_FILES = ['README.md', 'CONTRIBUTING.md', 'task.md'];
const SKIP_PREFIXES = ['_', 'mv_', 'ai_', 'web3_'];

const log = [];

function shouldSkip(filename) {
  if (SKIP_FILES.includes(filename)) return true;
  for (const prefix of SKIP_PREFIXES) {
    if (filename.startsWith(prefix)) return true;
  }
  return false;
}

function extractTermFromFilename(filename) {
  return filename.replace(/\.md$/, '').replace(/-/g, ' ');
}

function extractTermId(content) {
  // Try Format A
  const termIdMatch = content.match(/term-id::\s*(\S+)/);
  if (termIdMatch) return termIdMatch[1];

  // Try Format B
  const altMatch = content.match(/\*\*Term ID\*\*:\s*(\S+)/);
  if (altMatch) return altMatch[1];

  return null;
}

function isFormatA(content) {
  return content.includes('### OntologyBlock') && content.includes('id::');
}

function isFormatB(content) {
  return content.includes('**Term ID**:') && content.includes('## Definition');
}

function hasRequiredFields(content) {
  return content.includes('source-domain::') && content.includes('status::');
}

function extractDefinition(content) {
  // Format B
  const defMatch = content.match(/## Definition\s*\n\s*\n(.+?)(?=\n\n##|\n\n\*\*|$)/s);
  if (defMatch) return defMatch[1].trim();

  // Format A
  const altMatch = content.match(/definition::\s*(.+?)(?=\n\s*-|\n\n|$)/s);
  if (altMatch) return altMatch[1].trim();

  return 'A component of the metaverse ecosystem.';
}

function extractCategory(content) {
  const catMatch = content.match(/\*\*Category\*\*:\s*(.+?)(?=\n|$)/);
  return catMatch ? catMatch[1].trim() : 'Metaverse Concept';
}

function extractRelationships(content) {
  const relationships = {
    'has-part': [],
    'requires': [],
    'enables': [],
    'related-to': []
  };

  // Try Format B relationships section
  const relSection = content.match(/## Relationships\s*\n([\s\S]*?)(?=\n##|$)/);
  if (relSection) {
    const lines = relSection[1].split('\n');
    for (const line of lines) {
      const relMatch = line.match(/\*\*(\w+)\*\*:\s*(.+)/);
      if (relMatch) {
        const relType = relMatch[1].toLowerCase();
        const terms = relMatch[2].split(',').map(t => t.trim());
        if (relationships[relType]) {
          relationships[relType] = terms;
        }
      }
    }
  }

  // Try See Also section
  const seeAlso = content.match(/## See Also\s*\n([\s\S]*?)(?=\n##|$)/);
  if (seeAlso) {
    const links = seeAlso[1].match(/\[\[([^\]]+)\]\]/g);
    if (links) {
      relationships['related-to'] = links.map(l => l.replace(/[\[\]]/g, ''));
    }
  }

  return relationships;
}

function addMissingFieldsToFormatA(content, filename) {
  const lines = content.split('\n');
  const result = [];
  let inOntologyBlock = false;
  let fieldsAdded = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    result.push(line);

    if (line.includes('### OntologyBlock')) {
      inOntologyBlock = true;
    }

    // Add missing fields after term-id
    if (inOntologyBlock && !fieldsAdded && line.includes('term-id::')) {
      // Check if next lines already have source-domain and status
      const hasSource = content.includes('source-domain::');
      const hasStatus = content.includes('status::');

      if (!hasSource) {
        result.push('\t- source-domain:: metaverse');
      }
      if (!hasStatus) {
        result.push('\t- status:: draft');
      }
      fieldsAdded = true;
    }

    if (line.includes('#### Relationships') || line.includes('#### OWL Axioms')) {
      inOntologyBlock = false;
    }
  }

  return result.join('\n');
}

function convertFormatBToA(content, filename) {
  const term = extractTermFromFilename(filename);
  const termId = extractTermId(content) || `mv-${Date.now()}`;
  const definition = extractDefinition(content);
  const category = extractCategory(content);
  const relationships = extractRelationships(content);

  const ontologyId = term.toLowerCase().replace(/\s+/g, '-') + '-ontology';
  const relId = term.toLowerCase().replace(/\s+/g, '-') + '-relationships';

  let output = `- ### OntologyBlock
  id:: ${ontologyId}
  collapsed:: true
\t- metaverseOntology:: true
\t- term-id:: ${termId}
\t- preferred-term:: ${term}
\t- source-domain:: metaverse
\t- status:: draft
\t- definition:: ${definition}
\t- maturity:: draft
\t- owl:class:: mv:${term.replace(/\s+/g, '')}
\t- owl:physicality:: ConceptualEntity
\t- owl:role:: Concept
\t- belongsToDomain:: [[MetaverseDomain]]
`;

  // Add relationships if found
  const hasRels = Object.values(relationships).some(arr => arr.length > 0);
  if (hasRels) {
    output += `\t- #### Relationships
\t  id:: ${relId}
`;
    for (const [relType, terms] of Object.entries(relationships)) {
      if (terms.length > 0) {
        output += `\t\t- ${relType}:: ${terms.map(t => `[[${t}]]`).join(', ')}
`;
      }
    }
  }

  // Add About section with original content
  output += `- ## About ${term}
\t- ${definition}
\t-
\t- ### Original Content
\t  collapsed:: true
\t\t- \`\`\`
${content.replace(/\n/g, '\n\t\t  ')}
\t\t  \`\`\`
`;

  return output;
}

async function processFile(filename) {
  const filePath = path.join(PAGES_DIR, filename);

  try {
    const content = await fs.readFile(filePath, 'utf-8');

    if (isFormatA(content)) {
      if (hasRequiredFields(content)) {
        log.push(`✓ SKIP: ${filename} - Already Format A with all fields`);
        return { status: 'skip', filename };
      } else {
        const updated = addMissingFieldsToFormatA(content, filename);
        await fs.writeFile(filePath, updated, 'utf-8');
        log.push(`✓ UPDATE: ${filename} - Added missing fields to Format A`);
        return { status: 'updated', filename };
      }
    } else if (isFormatB(content)) {
      const converted = convertFormatBToA(content, filename);
      await fs.writeFile(filePath, converted, 'utf-8');
      log.push(`✓ CONVERT: ${filename} - Format B → Format A`);
      return { status: 'converted', filename };
    } else {
      // Unknown format - try best effort conversion
      const converted = convertFormatBToA(content, filename);
      await fs.writeFile(filePath, converted, 'utf-8');
      log.push(`⚠ CONVERT: ${filename} - Unknown format → Format A (best effort)`);
      return { status: 'converted-unknown', filename };
    }
  } catch (error) {
    log.push(`✗ ERROR: ${filename} - ${error.message}`);
    return { status: 'error', filename, error: error.message };
  }
}

async function main() {
  console.log('🚀 Batch 5-6: Processing Metaverse Files...\n');
  log.push('=== BATCH 5-6: METAVERSE FILE CONVERSION LOG ===');
  log.push(`Started: ${new Date().toISOString()}\n`);

  // Get all markdown files
  const allFiles = await fs.readdir(PAGES_DIR);
  const mdFiles = allFiles.filter(f => f.endsWith('.md') && !shouldSkip(f));

  log.push(`Total files to process: ${mdFiles.length}\n`);
  console.log(`📁 Found ${mdFiles.length} files to process\n`);

  const results = {
    skip: 0,
    updated: 0,
    converted: 0,
    'converted-unknown': 0,
    error: 0
  };

  // Process files in batches of 50 for better performance
  const BATCH_SIZE = 50;
  for (let i = 0; i < mdFiles.length; i += BATCH_SIZE) {
    const batch = mdFiles.slice(i, i + BATCH_SIZE);
    const batchResults = await Promise.all(batch.map(processFile));

    batchResults.forEach(result => {
      results[result.status]++;
    });

    console.log(`✓ Processed ${Math.min(i + BATCH_SIZE, mdFiles.length)} / ${mdFiles.length} files`);
  }

  // Summary
  log.push('\n=== SUMMARY ===');
  log.push(`Total files: ${mdFiles.length}`);
  log.push(`Skipped (already complete): ${results.skip}`);
  log.push(`Updated (fields added): ${results.updated}`);
  log.push(`Converted (Format B→A): ${results.converted}`);
  log.push(`Converted (unknown format): ${results['converted-unknown']}`);
  log.push(`Errors: ${results.error}`);
  log.push(`\nCompleted: ${new Date().toISOString()}`);

  // Write log file
  await fs.writeFile(LOG_FILE, log.join('\n'), 'utf-8');

  console.log('\n=== SUMMARY ===');
  console.log(`✓ Skipped: ${results.skip}`);
  console.log(`✓ Updated: ${results.updated}`);
  console.log(`✓ Converted: ${results.converted}`);
  console.log(`⚠ Unknown: ${results['converted-unknown']}`);
  console.log(`✗ Errors: ${results.error}`);
  console.log(`\n📝 Log saved to: ${LOG_FILE}`);
}

main().catch(console.error);
