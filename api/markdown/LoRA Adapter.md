public:: true

# LoRA Adapter

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:lora-adapter", "@type":"Page", "title":"LoRA Adapter", "vc:slug":"lora-adapter", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v2.jsonld", "@id": "urn:ngm:class:lora-adapter", "@type": "Class", "label": "LoRA Adapter", "definition": "A LoRA adapter is a small set of low-rank matrices trained via Low-Rank Adaptation and inserted alongside a frozen pretrained model's weight matrices to specialise its behaviour without updating the original parameters. Because the adapter contains only a small fraction of the base model's parameter count, it can be trained, stored, and swapped cheaply, allowing many task- or style-specific adapters to share a single base model. LoRA adapters are widely used to customise diffusion and language models for particular styles, subjects, or domains.", "domain": "artificial-intelligence", "maturity": "mature", "subClassOf": [{"@id": "urn:ngm:class:parameter-efficient-fine-tuning", "label": "Parameter-Efficient Fine-Tuning"}], "relations": {"partOf": [{"@id": "urn:ngm:class:parameter-efficient-fine-tuning", "label": "Parameter-Efficient Fine-Tuning"}]}, "sameAs": [], "quality": 0.55, "provenance": {"attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-07-25T00:00:00Z", "inferenceRule": "GapMaterialisation"}}
```

- ### Definition
	- A LoRA adapter is a small set of low-rank matrices trained via Low-Rank Adaptation and inserted alongside a frozen pretrained model's weight matrices to specialise its behaviour without updating the original parameters. Because the adapter contains only a small fraction of the base model's parameter count, it can be trained, stored, and swapped cheaply, allowing many task- or style-specific adapters to share a single base model. LoRA adapters are widely used to customise diffusion and language models for particular styles, subjects, or domains.
- ### Relationships
	- subClassOf:: [[Parameter-Efficient Fine-Tuning]]
	- partOf:: [[Parameter-Efficient Fine-Tuning]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
