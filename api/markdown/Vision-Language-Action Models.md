public:: true

# Vision-Language-Action Models
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:vision-language-action-models",
  "@type": "Page",
  "vc:slug": "vision-language-action-models",
  "title": "Vision-Language-Action Models",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:vision-language-action-models",
  "@type": "Class",
  "label": "Vision-Language-Action Models",
  "definition": "Vision-language-action (VLA) models are foundation models that jointly process visual observations and natural-language instructions to produce executable action sequences for embodied agents such as robots. Extending vision-language models with an action-generation head, VLAs are trained on large datasets pairing perception and instructions with demonstrated behaviour, enabling generalisation across tasks, objects, and embodiments. They represent a convergence of multimodal learning and robotics, aiming for generalist policies that follow open-ended commands rather than executing narrowly scripted skills.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:vision-language-model", "label": "Vision-Language Model"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:multimodal-ai-architecture-learning", "label": "Multimodal Learning"},
      {"@id": "urn:ngm:class:imitation-learning", "label": "Imitation Learning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:robot-learning", "label": "Robot Learning"},
      {"@id": "urn:ngm:class:embodied-ai", "label": "Embodied AI"}
    ]
  },
  "quality": 0.74
}
```

- ### Definition
  - [[Vision-Language-Action Models]] are foundation models that map visual observations and language instructions to executable actions for embodied agents. They extend the [[Vision-Language Model]] architecture with an action-generation capability for robotic control.
- ### Relationships
  - VLAs build on [[Multimodal Learning]] to fuse perception and language and are commonly trained via [[Imitation Learning]] from demonstrations. They are a central method within [[Robot Learning]] and the broader pursuit of [[Embodied AI]], where the goal is generalist policies that follow open-ended commands.
- ### Content
  - Architecturally, a VLA couples a pretrained vision-language backbone with an action decoder that emits low-level control signals or discretised action tokens. Pretraining on internet-scale vision-language data is followed by fine-tuning on robot trajectories, transferring semantic and spatial priors into the control policy.

  - The central research challenge is generalisation across embodiments and environments from limited robot data. Approaches include cross-embodiment datasets that pool trajectories from many robot platforms, and action tokenisation schemes that let a single transformer policy span perception, language, and control within one autoregressive model.
