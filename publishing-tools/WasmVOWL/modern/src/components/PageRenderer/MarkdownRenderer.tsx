import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { WikiLink } from './WikiLink';
import { CodeBlock } from './CodeBlock';
import { OntologyBlock } from './OntologyBlock';
import './MarkdownRenderer.css';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Pre-process content to handle Logseq-specific syntax
  const processedContent = content
    // Convert [[Wiki Links]] to markdown links
    .replace(/\[\[([^\]]+)\]\]/g, '[[$1]]($1)')
    // Handle block references ((block-id))
    .replace(/\(\(([a-f0-9-]+)\)\)/g, '<BlockRef id="$1" />');

  return (
    <div className="markdown-renderer">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          a: (props) => {
            const href = props.href || '';
            // Check if it's a wiki link
            if (href && !href.startsWith('http') && !href.startsWith('#')) {
              return <WikiLink {...props} pageName={href} />;
            }
            return <a {...props} target="_blank" rel="noopener noreferrer" />;
          },
          code: CodeBlock,
          // Custom handling for ontology metadata blocks
          pre: (props) => {
            const content = props.children?.toString() || '';
            if (content.includes('term-id:') || content.includes('preferred-term:')) {
              return <OntologyBlock content={content} />;
            }
            return <pre {...props} />;
          },
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
}
