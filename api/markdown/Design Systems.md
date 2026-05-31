public:: true

# Design Systems
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:design-systems",
  "@type": "Page",
  "vc:slug": "design-systems",
  "title": "Design Systems",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:design-systems",
  "@type": "Class",
  "label": "Design Systems",
  "definition": "A design system is a single source of truth that combines reusable UI components, design tokens, patterns, and documentation governing how a product looks and behaves. It unifies designers and engineers around a shared component library and usage guidelines, ensuring consistency and accelerating delivery across teams and platforms. It encompasses both the visual language and the coded implementation that enforces it.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:software-development", "label": "Software Development"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:product-design", "label": "Product Design"},
      {"@id": "urn:ngm:class:human-computer-interaction", "label": "Human-Computer Interaction"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A design system packages reusable components, tokens, and documentation into one governed source of truth for an interface. It is required by mature [[Product Design]] practice and a structuring part of how product teams ship consistent UI.
- ### Content
  - Design systems express decisions as design tokens (colour, spacing, type) and ship them as a versioned component library consumed by application code. Benefits include consistency, accessibility, and velocity; the chief cost is the governance and maintenance burden of keeping the system aligned with evolving product needs.
