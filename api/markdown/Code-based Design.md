---
public: true
---

# Code-based Design
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:code-based-design",
  "@type": "Page",
  "vc:slug": "code-based-design",
  "title": "Code-based Design",
  "vc:public": true,
  "vc:outboundWikilinks": ["Claude Design", "SVG Generation"],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:code-based-design",
  "@type": "Class",
  "label": "Code-based Design",
  "definition": "A design methodology where visual elements are generated and manipulated through code structures like SVGs rather than raster-based image synthesis.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [{"@id": "urn:ngm:class:image-generation", "label": "Image Generation"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:image-generation", "label": "Image Generation"}, {"@id": "urn:ngm:class:svg-generation", "label": "SVG Generation"}]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "the-best-claude-design-use-cases.md"
  }
}
```

- ### Overview
  - Claude Design generates visual elements using code and SVGs rather than a native image generation model. *(Source: AI Daily Brief host, via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
