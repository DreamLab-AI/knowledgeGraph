public:: true

# Moore's Law
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:moore-s-law",
  "@type": "Page",
  "vc:slug": "moore-s-law",
  "title": "Moore's Law",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:moore-s-law",
  "@type": "Class",
  "label": "Moore's Law",
  "definition": "Moore's Law is the observation, articulated by Gordon Moore in 1965, that the number of transistors on an integrated circuit doubles roughly every two years, driving exponential gains in computing capability and cost-efficiency. It functioned for decades as a self-fulfilling roadmap for the semiconductor industry. Physical and economic limits have slowed transistor scaling, shifting progress toward specialised architectures and advanced packaging.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:hardware", "label": "Hardware"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:convergence", "label": "Convergence"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Moore's Law observes that transistor counts on a chip double roughly every two years, yielding exponential compute gains. It is frequently invoked in discussions of technological [[Convergence]].
- ### Content
  - The trend underpinned decades of falling cost-per-transistor and rising performance that enabled modern computing and AI. As atomic-scale and power-density limits bite, the industry now relies on heterogeneous accelerators, chiplets, and 3D packaging rather than pure dimensional scaling to sustain effective improvement.
