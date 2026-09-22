public:: true

# Memory-Efficient Training

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:memory-efficient-training", "@type": "Page", "title": "Memory-Efficient Training", "vc:slug": "memory-efficient-training", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:memory-efficient-training",
  "@type": "Class",
  "label": "Memory-Efficient Training",
  "definition": "Memory-efficient training encompasses techniques that reduce the accelerator memory required to train large neural networks, allowing larger models or batch sizes to fit within fixed hardware budgets. Approaches include gradient checkpointing, which recomputes intermediate activations during the backward pass instead of storing them, and parameter-efficient methods such as LoRA and DoRA, which train small low-rank adapters instead of full weight matrices. These techniques trade additional compute or reduced expressivity for substantially lower peak memory use during model training.",
  "domain": "machine-learning",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-training",
      "label": "Model Training"
    }
  ],
  "relations": {
    "uses": [],
    "requires": [],
    "enables": [],
    "partOf": [
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Memory-efficient training encompasses techniques that reduce the accelerator memory required to train large neural networks, allowing larger models or batch sizes to fit within fixed hardware budgets. Approaches include gradient checkpointing, which recomputes intermediate activations during the backward pass instead of storing them, and parameter-efficient methods such as LoRA and DoRA, which train small low-rank adapters instead of full weight matrices. These techniques trade additional compute or reduced expressivity for substantially lower peak memory use during model training.
- ### Relationships
	- partOf:: [[Model Training]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
