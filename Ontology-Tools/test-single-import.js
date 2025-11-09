#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Load the main script's functions
const scriptPath = '/home/devuser/workspace/project/multi-agent-docker/skills/import-to-ontology/destructive-import.js';
const scriptContent = fs.readFileSync(scriptPath, 'utf8');

// Create a temporary directory with just ecash.md
const testFile = 'sourceMarkdown/pages/ecash.md';
const targetDir = 'logseq/pages';

console.log('🧪 Testing import-to-ontology with ecash.md\n');
console.log(`Source: ${testFile}`);
console.log(`Target: ${targetDir}`);
console.log(`DRY RUN: ${process.argv.includes('--dry-run')}\n`);

// Just run the script on the pages directory but it will process all files
// For now, let's just do a dry-run to see what would happen
const { execSync } = require('child_process');
try {
  execSync(`node ${scriptPath} sourceMarkdown/pages logseq/pages --dry-run`, { 
    stdio: 'inherit',
    cwd: process.cwd()
  });
} catch (e) {
  console.error('Error:', e.message);
}
