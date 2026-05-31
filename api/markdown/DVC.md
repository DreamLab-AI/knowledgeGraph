public:: true

# DVC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dvc",
  "@type": "Page",
  "vc:slug": "dvc",
  "title": "DVC",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:dvc",
  "@type": "Class",
  "label": "DVC",
  "definition": "DVC (Data Version Control) is an open-source tool that brings Git-style versioning to machine-learning datasets, models, and pipelines. It stores large binary artefacts in external object storage while keeping lightweight metadata pointers in Git, enabling reproducible experiments and shareable data lineage. DVC also defines pipeline stages and tracks model checkpoints so that experiments can be rerun and compared deterministically.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-infrastructure", "label": "AI Infrastructure"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:checkpoints", "label": "Checkpoints"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - DVC (Data Version Control) is an open-source system that applies Git-like versioning to ML data, models, and pipelines. It tracks model [[Checkpoints]] and dataset versions to make experiments reproducible.
- ### Content
  - DVC decouples large artefacts from the code repository by storing them in remote object storage while committing hash-based pointers to Git. Its pipeline definitions capture dependencies and stages, allowing teams to reproduce, compare, and roll back training runs and checkpoints with full lineage.
