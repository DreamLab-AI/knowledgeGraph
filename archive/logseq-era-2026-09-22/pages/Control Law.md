public:: true

# Control Law
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:control-law",
  "@type": "Page",
  "vc:slug": "control-law",
  "title": "Control Law",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:control-law",
  "@type": "Class",
  "label": "Control Law",
  "definition": "A control law is the mathematical rule that maps measured system state and reference signals to the control inputs applied to a plant. It is the algorithmic core of a feedback controller, expressed as functions such as PID, state feedback, or impedance laws. The choice of control law determines stability, tracking accuracy, and disturbance rejection of the closed-loop system.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:control-theory", "label": "Control Theory"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:position-control", "label": "PositionControl"}, {"@id": "urn:ngm:class:force-control", "label": "Force Control"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A control law is the rule mapping state and reference to control inputs, instantiated in schemes such as [[Position Control]] and [[Force Control]].
- ### Content
  - Common forms include PID, full-state feedback, LQR, sliding-mode, and impedance laws, each trading off robustness, performance, and model dependence. The control law is selected and tuned against stability margins and performance specifications, and is the part of the controller that is analysed for closed-loop guarantees.
