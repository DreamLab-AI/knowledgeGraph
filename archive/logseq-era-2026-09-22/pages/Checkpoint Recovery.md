public:: true

# Checkpoint Recovery
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:checkpoint-recovery",
  "@type": "Page",
  "title": "Checkpoint Recovery",
  "vc:slug": "checkpoint-recovery",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:checkpoint-recovery",
  "@type": "Class",
  "label": "Checkpoint Recovery",
  "definition": "Checkpoint recovery is the process of resuming a computation, most commonly a machine learning training run, from a previously saved checkpoint after an interruption such as a hardware failure, pre-emption or planned restart. It requires that checkpoints capture sufficient state, including model parameters, optimiser state and progress markers, to continue correctly without repeating completed work. Reliable checkpoint recovery is essential for large-scale and decentralised training where node failures are expected rather than exceptional.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-checkpoint",
      "label": "Model Checkpoint"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:model-checkpoint",
        "label": "Model Checkpoint"
      }
    ]
  },
  "quality": 0.65
}
```

- ### Definition
  - Checkpoint recovery is the process of resuming a computation, most commonly a machine learning training run, from a previously saved checkpoint after an interruption such as a hardware failure, pre-emption or planned restart.
  - It is a subclass of [[Model Checkpoint]].
- ### Content
  - Checkpoint recovery is the process of resuming a computation, most commonly a machine learning training run, from a previously saved checkpoint after an interruption such as a hardware failure, pre-emption or planned restart. It requires that checkpoints capture sufficient state, including model parameters, optimiser state and progress markers, to continue correctly without repeating completed work. Reliable checkpoint recovery is essential for large-scale and decentralised training where node failures are expected rather than exceptional.
