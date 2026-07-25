public:: true

# Model Adaptation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:model-adaptation", "@type":"Page", "title":"Model Adaptation", "vc:slug":"model-adaptation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:model-adaptation",
  "@type":"Class",
  "label":"Model Adaptation",
  "definition":"Model adaptation is the process of adjusting a pretrained model's parameters or behaviour to perform well on a new task, domain, or dataset distinct from the one it was originally trained on. It spans a spectrum from full fine-tuning of all parameters to parameter-efficient methods such as LoRA, which inject small trainable matrices into frozen layers to adapt behaviour at a fraction of the memory and compute cost. Effective model adaptation must balance plasticity, the ability to acquire new task-specific behaviour, against catastrophic forgetting of prior capability. It is the practical mechanism through which large pretrained foundation models are specialised for downstream applications.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:transfer-learning","label":"Transfer Learning"}],
  "relations":{}
}
```

- ### Definition
	- Model adaptation is the process of adjusting a pretrained model's parameters or behaviour to perform well on a new task, domain, or dataset distinct from the one it was originally trained on. It spans a spectrum from full fine-tuning of all parameters to parameter-efficient methods such as LoRA, which inject small trainable matrices into frozen layers to adapt behaviour at a fraction of the memory and compute cost. Effective model adaptation must balance plasticity, the ability to acquire new task-specific behaviour, against catastrophic forgetting of prior capability. It is the practical mechanism through which large pretrained foundation models are specialised for downstream applications.
- ### Relationships
	- subClassOf:: [[Transfer Learning]]
