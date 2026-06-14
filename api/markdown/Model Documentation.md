public:: true

# Model Documentation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:model-documentation",
  "@type": "Page",
  "vc:slug": "model-documentation",
  "title": "Model Documentation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-documentation",
  "@type": "Class",
  "label": "Model Documentation",
  "definition": "Model documentation is the structured recording of a machine learning model's intended use, training data, performance, limitations, and ethical considerations, typically through artefacts such as model cards and datasheets. It supports transparency, accountability, and informed deployment decisions for downstream users and regulators. It is increasingly required by AI governance frameworks and procurement standards.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-governance-and-ethics", "label": "AI Governance and Ethics"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance Domain"},
      {"@id": "urn:ngm:class:algorithmic-transparency-index", "label": "Algorithmic Transparency Index"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Model documentation records a model's intended use, data, performance, and limitations via artefacts like model cards. It is part of the [[AI Governance Domain]] and feeds requirements such as the [[Algorithmic Transparency Index]].
- ### Content
  - Model cards summarise evaluation across relevant subgroups and disclose failure modes, while datasheets describe dataset provenance, collection, and consent. Standardised documentation enables reproducibility, auditing, and comparison, and is becoming a compliance obligation under emerging AI regulation.
