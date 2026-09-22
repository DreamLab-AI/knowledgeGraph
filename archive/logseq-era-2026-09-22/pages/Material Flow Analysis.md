public:: true

# Material Flow Analysis
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:material-flow-analysis",
  "@type": "Page",
  "vc:slug": "material-flow-analysis",
  "title": "Material Flow Analysis",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:material-flow-analysis",
  "@type": "Class",
  "label": "Material Flow Analysis",
  "definition": "Material flow analysis (MFA) is a systematic accounting of the flows and stocks of materials within a defined system in space and time, grounded in the principle of mass conservation. It quantifies inputs, outputs, and accumulations to reveal resource use, losses, and recycling potential across an economy, industry, or region. MFA is a foundational method for industrial ecology, circular-economy design, and sustainability assessment.",
  "domain": "supply-chain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sustainability", "label": "Sustainability"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:industrial-symbiosis", "label": "Industrial Symbiosis"}, {"@id": "urn:ngm:class:circular-economy", "label": "Circular Economy"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Material flow analysis traces material inputs, stocks, and outputs across a system using mass-balance accounting. It is a core tool for [[Industrial Symbiosis]] and a structural component of [[Circular Economy]] design.
- ### Content
  - MFA constructs balanced flow networks that expose where materials are lost, dissipated, or could be cycled back as feedstock. Results inform policy targets, eco-design, and the identification of by-product exchange opportunities between co-located industries.
