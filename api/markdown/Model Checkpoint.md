public:: true

# Model Checkpoint
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:model-checkpoint",
  "@type": "Page",
  "vc:slug": "model-checkpoint",
  "title": "Model Checkpoint",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-checkpoint",
  "@type": "Class",
  "label": "Model Checkpoint",
  "definition": "A model checkpoint is a serialised snapshot of a machine learning model's learned parameters (weights), often including optimiser state, captured at a point during or after training. Checkpoints allow training to resume after interruption, enable model sharing and deployment, and support evaluation of intermediate states. They are typically stored in formats such as safetensors, PyTorch .pt, or framework-native files.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-infrastructure", "label": "AI Infrastructure"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:safetensors", "label": "Safetensors"},
      {"@id": "urn:ngm:class:comfy-ui-workflows", "label": "ComfyUI Workflows"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A model checkpoint is a serialised snapshot of a model's weights and optimiser state. It is commonly stored with [[Safetensors]] and loaded by tools such as [[ComfyUI Workflows]].
- ### Content
  - Checkpoints make long training runs fault-tolerant by allowing exact resumption, and they are the unit of distribution for pretrained and fine-tuned models. Safetensors has become a preferred format because it avoids the arbitrary-code-execution risk of pickle while supporting fast, zero-copy loading.
