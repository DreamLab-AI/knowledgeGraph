/**
 * Logseq Publisher - Fast graph parser powered by Rust and WASM
 */

import * as fs from 'fs/promises';
import * as path from 'path';
import { glob } from 'glob';

// WASM module will be loaded dynamically
let wasmModule: any = null;

/**
 * Initialize the WASM module
 */
export async function initialize(): Promise<void> {
  if (wasmModule) return;

  try {
    wasmModule = await import('../pkg/logseq_publisher_rust.js');
    console.log('WASM module initialized');
  } catch (error) {
    throw new Error(`Failed to initialize WASM module: ${error}`);
  }
}

export interface PublishOptions {
  inputDir: string;
  outputDir: string;
  theme?: string;
  includeBacklinks?: boolean;
  includeGraphView?: boolean;
  customCss?: string;
}

export interface GraphStats {
  page_count: number;
  total_blocks: number;
  total_links: number;
  orphan_pages: number;
}

/**
 * Publish a Logseq graph to static HTML
 */
export async function publish(options: PublishOptions): Promise<GraphStats> {
  await initialize();

  const publisher = new wasmModule.LogseqPublisher();

  // Find all markdown files
  const files = await glob('**/*.md', {
    cwd: options.inputDir,
    ignore: ['node_modules/**', '.git/**'],
  });

  console.log(`Found ${files.length} markdown files`);

  // Read all files
  const fileContents: Record<string, string> = {};
  for (const file of files) {
    const fullPath = path.join(options.inputDir, file);
    const content = await fs.readFile(fullPath, 'utf-8');
    fileContents[file] = content;
  }

  // Parse files with WASM
  const statsJson = publisher.parse_files(JSON.stringify(fileContents));
  const stats: GraphStats = JSON.parse(statsJson);

  console.log(`Parsed ${stats.page_count} pages with ${stats.total_blocks} blocks`);

  // Export to HTML
  const config = {
    theme: options.theme || 'default',
    include_backlinks: options.includeBacklinks ?? true,
    include_graph_view: options.includeGraphView ?? false,
    custom_css: options.customCss,
  };

  const html = publisher.export_html(JSON.stringify(config));

  // Write output
  await fs.mkdir(options.outputDir, { recursive: true });
  await fs.writeFile(path.join(options.outputDir, 'index.html'), html);

  console.log(`Published to ${options.outputDir}`);

  return stats;
}

/**
 * Parse Logseq files and return graph data
 */
export async function parseGraph(inputDir: string): Promise<GraphStats> {
  await initialize();

  const publisher = new wasmModule.LogseqPublisher();

  const files = await glob('**/*.md', {
    cwd: inputDir,
    ignore: ['node_modules/**', '.git/**'],
  });

  const fileContents: Record<string, string> = {};
  for (const file of files) {
    const fullPath = path.join(inputDir, file);
    const content = await fs.readFile(fullPath, 'utf-8');
    fileContents[file] = content;
  }

  const statsJson = publisher.parse_files(JSON.stringify(fileContents));
  return JSON.parse(statsJson);
}

/**
 * Get backlinks for a specific page
 */
export async function getBacklinks(
  inputDir: string,
  pagePath: string
): Promise<string[]> {
  await initialize();

  const publisher = new wasmModule.LogseqPublisher();

  // Parse graph first
  const files = await glob('**/*.md', { cwd: inputDir });
  const fileContents: Record<string, string> = {};
  for (const file of files) {
    const content = await fs.readFile(path.join(inputDir, file), 'utf-8');
    fileContents[file] = content;
  }
  publisher.parse_files(JSON.stringify(fileContents));

  // Get backlinks
  const backlinksJson = publisher.get_backlinks(pagePath);
  return JSON.parse(backlinksJson);
}

// Re-export for TypeScript users
export { LogseqPublisher } from '../pkg/logseq_publisher_rust.js';
