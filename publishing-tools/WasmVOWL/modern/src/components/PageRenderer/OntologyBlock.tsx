import './OntologyBlock.css';

interface OntologyBlockProps {
  content: string;
}

export function OntologyBlock({ content }: OntologyBlockProps) {
  // Parse ontology metadata from content
  const lines = content.split('\n').filter(line => line.trim());
  const metadata: Record<string, string> = {};

  lines.forEach(line => {
    const match = line.match(/^([a-z-]+):\s*(.+)$/i);
    if (match) {
      metadata[match[1]] = match[2];
    }
  });

  return (
    <div className="ontology-block">
      <div className="ontology-header">
        <span className="ontology-icon">🏷️</span>
        <h4>Ontology Metadata</h4>
      </div>
      <dl className="ontology-properties">
        {Object.entries(metadata).map(([key, value]) => (
          <div key={key} className="ontology-property">
            <dt>{key.replace(/-/g, ' ')}:</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
