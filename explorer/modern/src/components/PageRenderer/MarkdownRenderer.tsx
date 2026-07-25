import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { WikiLink } from './WikiLink';
import { CodeBlock } from './CodeBlock';
import { OntologyBlock } from './OntologyBlock';

interface MarkdownRendererProps {
  content: string;
}

/**
 * Pre-process Logseq markdown to standard markdown
 * Handles wiki-links, block references, and Logseq-specific syntax
 */
function preprocessLogseqMarkdown(content: string): string {
  let processed = content;

  // Convert [[Wiki Links]] to markdown links
  // Handle links with aliases: [[Page|Display Text]]
  processed = processed.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '[$2]($1)');
  // Handle simple links: [[Page Name]]
  processed = processed.replace(/\[\[([^\]]+)\]\]/g, '[$1]($1)');

  // Handle block references ((block-id)) - display as inline reference
  processed = processed.replace(/\(\(([a-f0-9-]+)\)\)/g, '`ref:$1`');

  // Handle Logseq property lines (key:: value) - convert to bold key-value
  // But skip lines that are clearly metadata headers
  processed = processed.replace(/^(\s*)- \*\*([^*]+)\*\*: (.+)$/gm, '$1- **$2**: $3');

  // Handle collapsed:: true markers - remove them
  processed = processed.replace(/^\s*collapsed:: true\s*$/gm, '');

  // Handle id:: markers - remove them
  processed = processed.replace(/^\s*id:: [a-f0-9-]+\s*$/gm, '');

  // Clean up Logseq bullet-point style lines that are just properties
  // Convert "  - key:: value" to cleaner format
  processed = processed.replace(/^(\s*)- ([\w-]+):: (.+)$/gm, (_, indent, key, value) => {
    // Skip ontology properties that should be hidden
    const hiddenProps = ['ontology', 'collapsed', 'id', 'public', 'public-access'];
    if (hiddenProps.includes(key.toLowerCase())) {
      return '';
    }
    return `${indent}- **${key}**: ${value}`;
  });

  // Remove empty bullet points
  processed = processed.replace(/^\s*-\s*$/gm, '');

  // Clean up excessive whitespace
  processed = processed.replace(/\n{3,}/g, '\n\n');

  return processed;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const processedContent = preprocessLogseqMarkdown(content);

  return (
    <div className="markdown-renderer prose prose-slate dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          a: (props) => {
            const href = props.href || '';
            // Check if it's a wiki link (internal page reference)
            if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')) {
              return <WikiLink {...props} pageName={href} />;
            }
            // External links open in new tab
            return (
              <a
                {...props}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              />
            );
          },
          code: CodeBlock,
          // Custom handling for ontology metadata blocks
          pre: (props) => {
            const preContent = props.children?.toString() || '';
            if (preContent.includes('term-id:') || preContent.includes('preferred-term:')) {
              return <OntologyBlock content={preContent} />;
            }
            return <pre className="bg-muted p-4 rounded-lg overflow-x-auto" {...props} />;
          },
          // Enhanced list styling
          ul: (props) => (
            <ul className="list-disc pl-6 space-y-2 my-4" {...props} />
          ),
          ol: (props) => (
            <ol className="list-decimal pl-6 space-y-2 my-4" {...props} />
          ),
          li: (props) => (
            <li className="text-foreground leading-relaxed" {...props} />
          ),
          // Enhanced heading styling
          h2: (props) => (
            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground border-b border-border pb-2" {...props} />
          ),
          h3: (props) => (
            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground" {...props} />
          ),
          h4: (props) => (
            <h4 className="text-lg font-medium mt-4 mb-2 text-foreground" {...props} />
          ),
          // Paragraph styling
          p: (props) => (
            <p className="my-4 leading-relaxed text-foreground" {...props} />
          ),
          // Image handling
          img: (props) => (
            <img
              {...props}
              className="max-w-full h-auto rounded-lg shadow-md my-4"
              loading="lazy"
              alt={props.alt || 'Image'}
            />
          ),
          // Blockquote styling
          blockquote: (props) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-muted/50 rounded-r-lg italic" {...props} />
          ),
          // Strong/bold
          strong: (props) => (
            <strong className="font-semibold text-foreground" {...props} />
          ),
          // Table styling
          table: (props) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border-collapse border border-border" {...props} />
            </div>
          ),
          th: (props) => (
            <th className="border border-border bg-muted px-4 py-2 text-left font-semibold" {...props} />
          ),
          td: (props) => (
            <td className="border border-border px-4 py-2" {...props} />
          ),
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
}
