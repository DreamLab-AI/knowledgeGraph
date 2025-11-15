#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import path from 'path';
import { readFileSync } from 'fs';
import { publish, parseGraph, getBacklinks } from '../dist/index.js';

const program = new Command();

program
  .name('logseq-publish')
  .description('Publish Logseq graphs to static HTML (Rust/WASM powered)')
  .version('0.1.0');

program
  .command('build')
  .description('Build static HTML from Logseq graph')
  .option('-i, --input <dir>', 'Input directory (Logseq graph)', './graph')
  .option('-o, --output <dir>', 'Output directory', './public')
  .option('-t, --theme <theme>', 'Theme name', 'default')
  .option('--no-backlinks', 'Disable backlinks')
  .option('--graph-view', 'Enable interactive graph view')
  .option('--css <file>', 'Custom CSS file')
  .action(async (options) => {
    try {
      console.log(chalk.blue('🚀 Building Logseq graph with Rust/WASM...'));
      console.log(chalk.gray(`Input: ${options.input}`));
      console.log(chalk.gray(`Output: ${options.output}`));

      const customCss = options.css
        ? readFileSync(options.css, 'utf-8')
        : undefined;

      const stats = await publish({
        inputDir: path.resolve(options.input),
        outputDir: path.resolve(options.output),
        theme: options.theme,
        includeBacklinks: options.backlinks,
        includeGraphView: options.graphView,
        customCss,
      });

      console.log(chalk.green('\n✅ Build complete!'));
      console.log(chalk.white(`📄 Pages: ${stats.page_count}`));
      console.log(chalk.white(`📝 Blocks: ${stats.total_blocks}`));
      console.log(chalk.white(`🔗 Links: ${stats.total_links}`));

      if (stats.orphan_pages > 0) {
        console.log(chalk.yellow(`⚠️  Orphan pages: ${stats.orphan_pages}`));
      }
    } catch (error) {
      console.error(chalk.red('❌ Build failed:'), error.message);
      if (error.stack) {
        console.error(chalk.gray(error.stack));
      }
      process.exit(1);
    }
  });

program
  .command('stats')
  .description('Show graph statistics')
  .option('-i, --input <dir>', 'Input directory', './graph')
  .action(async (options) => {
    try {
      console.log(chalk.blue('📊 Analyzing graph...'));

      const stats = await parseGraph(path.resolve(options.input));

      console.log(chalk.green('\nGraph Statistics:'));
      console.log(chalk.white(`  Pages: ${stats.page_count}`));
      console.log(chalk.white(`  Blocks: ${stats.total_blocks}`));
      console.log(chalk.white(`  Links: ${stats.total_links}`));
      console.log(chalk.white(`  Orphans: ${stats.orphan_pages}`));
    } catch (error) {
      console.error(chalk.red('❌ Analysis failed:'), error.message);
      process.exit(1);
    }
  });

program
  .command('backlinks')
  .description('Show backlinks for a page')
  .argument('<page>', 'Page path')
  .option('-i, --input <dir>', 'Input directory', './graph')
  .action(async (page, options) => {
    try {
      console.log(chalk.blue(`🔍 Finding backlinks for ${page}...`));

      const backlinks = await getBacklinks(path.resolve(options.input), page);

      if (backlinks.length === 0) {
        console.log(chalk.yellow('No backlinks found'));
      } else {
        console.log(chalk.green(`\nFound ${backlinks.length} backlinks:`));
        backlinks.forEach(link => {
          console.log(chalk.white(`  • ${link}`));
        });
      }
    } catch (error) {
      console.error(chalk.red('❌ Failed:'), error.message);
      process.exit(1);
    }
  });

program.parse();
