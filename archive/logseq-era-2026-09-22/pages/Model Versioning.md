public:: true

# Model Versioning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:model-versioning",
  "@type": "Page",
  "vc:slug": "model-versioning",
  "title": "Model Versioning",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-versioning",
  "@type": "Class",
  "label": "Model Versioning",
  "definition": "Model versioning is the practice of tracking and managing successive versions of machine learning models, recording the code, data, hyperparameters, and checkpoints that produced each one. It enables reproducibility, rollback, lineage tracing, and controlled promotion of models through development and production stages. Model registries and artefact stores implement versioning as a core MLOps capability.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-infrastructure", "label": "AI Infrastructure"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:checkpoints", "label": "Checkpoints"},
      {"@id": "urn:ngm:class:mlflow", "label": "MLflow"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Model versioning tracks successive model versions together with the code, data, and [[Checkpoints]] that produced them. Tools such as [[MLflow]] provide registries that implement it.
- ### Content
  - Beyond naming weights, versioning binds each model to its full provenance so a result can be reproduced or a regression rolled back. Registries add stage transitions (staging, production, archived), approvals, and metadata, making model lifecycle management auditable and governable.
