public:: true

# Hugging Face Model Hub
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:hugging-face-model-hub",
  "@type": "Page",
  "vc:slug": "hugging-face-model-hub",
  "title": "Hugging Face Model Hub",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hugging-face-model-hub",
  "@type": "Class",
  "label": "Hugging Face Model Hub",
  "definition": "The Hugging Face Model Hub is a public repository and platform for sharing, discovering, and versioning machine-learning models, datasets, and demo spaces. Built on Git and Git-LFS, it hosts hundreds of thousands of pretrained models with standardised model cards, metadata, and direct integration into the Transformers ecosystem. It functions as the central distribution layer for open machine-learning artefacts.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-infrastructure", "label": "AI Infrastructure"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:safetensors", "label": "Safetensors"},
      {"@id": "urn:ngm:class:fooocus", "label": "Fooocus"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The Hugging Face Model Hub is a Git-backed repository for ML models and datasets; it distributes weights in formats such as [[Safetensors]] and supplies the checkpoints consumed by applications like [[Fooocus]].
- ### Content
  - Each repository carries a model card, configuration, and weight files, with the Hub providing search, access control, inference endpoints, and download analytics. Tight integration with the Transformers and Diffusers libraries lets developers load a model by identifier, making the Hub the de facto registry for open and community-contributed models.
