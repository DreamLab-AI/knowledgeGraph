import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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

  // Extract term name and domain for collapsed summary
  const termName = metadata['term-name'] || metadata['name'] || 'Ontology';
  const domain = metadata['domain'] || metadata['namespace'] || '';

  return (
    <div className="ontology-block">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="ontology" className="border-b border-border">
          <AccordionTrigger className="text-sm font-semibold py-3 hover:no-underline">
            <div className="flex items-center gap-2">
              <span className="ontology-icon">🏷️</span>
              <span>Ontology: {termName}</span>
              {domain && <span className="text-muted-foreground">({domain})</span>}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <dl className="ontology-properties space-y-2 pt-2">
              {Object.entries(metadata).map(([key, value]) => (
                <div key={key} className="ontology-property flex gap-2">
                  <dt className="font-medium min-w-[120px] text-foreground/80">
                    {key.replace(/-/g, ' ')}:
                  </dt>
                  <dd className="text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
