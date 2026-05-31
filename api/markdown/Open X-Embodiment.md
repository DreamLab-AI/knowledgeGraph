public:: true

# Open X-Embodiment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:open-x-embodiment",
  "@type": "Page",
  "vc:slug": "open-x-embodiment",
  "title": "Open X-Embodiment",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-x-embodiment",
  "@type": "Class",
  "label": "Open X-Embodiment",
  "definition": "Open X-Embodiment is a large, collaborative open dataset and associated model effort that aggregates robot manipulation demonstrations across many robot embodiments and labs. By pooling trajectories from diverse hardware into a unified format, it enables training generalist robot policies that transfer across different platforms. The initiative supports research into cross-embodiment learning and the RT-X family of robotic foundation models.",
  "domain": "robotics",
  "maturity": "experimental",
  "subClassOf": [{"@id": "urn:ngm:class:robotics", "label": "Robotics"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:imitation-learning", "label": "Imitation Learning"},
      {"@id": "urn:ngm:class:embodied-minds", "label": "Embodied Minds"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Open X-Embodiment is a pooled open dataset of robot manipulation demonstrations across many embodiments, enabling cross-platform generalist policies and supporting [[Imitation Learning]] for [[Embodied Minds]].
- ### Content
  - It unifies trajectories from numerous robots and labs into a shared format, lowering the barrier to training transferable control policies. The dataset underpins RT-X foundation models and broader research into how skills generalize across heterogeneous robot bodies.
