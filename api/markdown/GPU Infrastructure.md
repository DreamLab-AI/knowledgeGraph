```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:gpu-infrastructure",
  "@type": "Page",
  "vc:slug": "gpu-infrastructure",
  "title": "GPU Infrastructure",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "Colossus Cluster",
    "xAI"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gpu-infrastructure",
  "@type": "Class",
  "label": "GPU Infrastructure",
  "definition": "The specialized hardware clusters and data center architectures designed to support the high-throughput parallel processing required for training and deploying large-scale artificial intelligence models.",
  "domain": "infrastructure",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "Infrastructure"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      },
      {
        "@id": "urn:ngm:class:data-storage",
        "label": "Data Storage"
      },
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      }
    ]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "is-openai-the-new-github.md"
  }
}
```

- ### Overview
  - xAI's Colossus mega cluster began with 100,000 GPUs in March, scaled to 200,000, and is now reportedly at 550,000 units. *(Source: Host (citing reports on xAI infrastructure), via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
