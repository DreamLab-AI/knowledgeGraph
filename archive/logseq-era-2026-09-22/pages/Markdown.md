public:: true

# Markdown
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:markdown",
  "@type": "Page",
  "vc:slug": "markdown",
  "title": "Markdown",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:markdown",
  "@type": "Class",
  "label": "Markdown",
  "definition": "Markdown is a lightweight plain-text markup language that uses simple punctuation conventions to denote formatting such as headings, lists, links, and emphasis. Created by John Gruber in 2004 and later standardised by efforts like CommonMark, it is designed to be readable as source and convertible to HTML and other formats. Its simplicity makes it the dominant format for documentation, notes, and content authoring in developer tooling.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:diagrams-as-code", "label": "Diagrams as Code"}, {"@id": "urn:ngm:class:ai-diagram-tools", "label": "AI Diagram Tools"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Markdown is a plain-text formatting syntax that renders to HTML while remaining human-readable in source form. It underpins [[Diagrams as Code]] workflows and is consumed by [[AI Diagram Tools]].
- ### Content
  - Variants such as CommonMark, GitHub Flavored Markdown, and MyST extend the core with tables, task lists, footnotes, and embedded code. Its plain-text nature makes it version-control friendly and easy for both humans and language models to author and parse.
