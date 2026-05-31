public:: true

# Disclosure Requirements
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:disclosure-requirements",
  "@type": "Page",
  "vc:slug": "disclosure-requirements",
  "title": "Disclosure Requirements",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:disclosure-requirements",
  "@type": "Class",
  "label": "Disclosure Requirements",
  "definition": "Disclosure requirements are legal or regulatory obligations to reveal specified information to consumers, regulators, or the public so they can make informed decisions. In technology governance they cover material facts such as the use of automated decision-making, data practices, risks, and conflicts of interest. They underpin transparency regimes and consumer protection by reducing information asymmetry between providers and users.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:algorithmic-transparency-index", "label": "Algorithmic Transparency Index"},
      {"@id": "urn:ngm:class:consumer-protection", "label": "Consumer Protection"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Disclosure requirements compel providers to reveal material information so users and regulators can decide and oversee. They are a component of the [[Algorithmic Transparency Index]] and a core instrument of [[Consumer Protection]].
- ### Content
  - Examples include AI-system transparency notices, financial prospectuses, data-processing disclosures, and labelling of synthetic media. Effective requirements specify what, when, and how information must be presented; over-disclosure can cause notice fatigue, while under-disclosure leaves users unable to assess risk.
