public:: true

# MLflow
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mlflow",
  "@type": "Page",
  "vc:slug": "mlflow",
  "title": "MLflow",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mlflow",
  "@type": "Class",
  "label": "MLflow",
  "definition": "MLflow is an open-source platform for managing the machine learning lifecycle, covering experiment tracking, reproducible runs, model packaging, and a model registry. It records parameters, metrics, code versions, and artefacts including checkpoints, enabling teams to compare experiments and promote models to production. It is framework-agnostic and integrates with most training libraries and serving backends.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-infrastructure", "label": "AI Infrastructure"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:checkpoints", "label": "Checkpoints"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - MLflow is an open-source platform for the ML lifecycle: tracking, packaging, registry, and deployment. It manages and versions model [[Checkpoints]] alongside the metrics and code that produced them.
- ### Content
  - The tracking server logs each run's hyperparameters, metrics, and artefacts, while the model registry adds stage transitions, annotations, and lineage. Being framework-agnostic, it wraps PyTorch, TensorFlow, scikit-learn, and custom flavours behind a common API for storage and serving.
