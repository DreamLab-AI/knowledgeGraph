public:: true

# Semantic HTML
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:semantic-html",
  "@type": "Page",
  "vc:slug": "semantic-html",
  "title": "Semantic HTML",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:semantic-html",
  "@type": "Class",
  "label": "Semantic HTML",
  "definition": "Semantic HTML is the practice of using HTML elements according to their intended meaning rather than for presentation alone. Elements such as header, nav, main, article, and button convey document structure and role to browsers and assistive technologies. It is a foundational requirement for accessible, machine-interpretable web content.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:accessibility", "label": "Accessibility"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Semantic HTML uses elements for their meaning to expose document structure, and is both required by and a constituent part of web [[Accessibility]].
- ### Content
  - Correctly chosen elements give the browser an accessibility tree with implicit roles, states, and landmarks, letting screen readers convey structure without extra ARIA. Beyond accessibility, semantic markup improves SEO, maintainability, and the reliability of automated parsing and content extraction.
