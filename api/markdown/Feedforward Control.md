public:: true

# Feedforward Control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:feedforward-control",
  "@type": "Page",
  "vc:slug": "feedforward-control",
  "title": "Feedforward Control",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:feedforward-control",
  "@type": "Class",
  "label": "Feedforward Control",
  "definition": "Feedforward control is a control strategy in which the controller acts on a reference command or a measured disturbance before it affects the output, rather than reacting to output error after the fact. Because it does not rely on output measurement, pure feedforward cannot correct for unmodelled effects and is therefore usually paired with feedback. It is widely used in motion and process control to improve command tracking and pre-empt known disturbances.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:control-system", "label": "Control System"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:motion-control", "label": "Motion Control"},
      {"@id": "urn:ngm:class:velocity-control", "label": "Velocity Control"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Feedforward control drives the system from the reference command or a measured disturbance ahead of any output error, making it a key building block of [[Motion Control]] and [[Velocity Control]]. It is a strategy within a closed-loop [[Control System]].
- ### Content
  - A feedforward controller inverts a model of the plant to produce the command needed to follow a desired trajectory, contributing the bulk of the control effort while feedback trims residual error. Because it is open-loop with respect to the output, its accuracy depends entirely on model fidelity and disturbance measurability, so practical systems combine feedforward and feedback to gain both responsiveness and robustness.
