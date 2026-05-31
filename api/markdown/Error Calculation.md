public:: true

# Error Calculation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:error-calculation",
  "@type": "Page",
  "vc:slug": "error-calculation",
  "title": "Error Calculation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:error-calculation",
  "@type": "Class",
  "label": "Error Calculation",
  "definition": "Error calculation is the step in a control system that computes the difference between a desired setpoint and the measured process variable. This error term is the input that drives corrective action in feedback controllers such as PID loops. Accurate, low-latency error calculation is essential for stable and responsive position, velocity, and other regulated control behaviours.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:control-system", "label": "Control System"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:velocity-control", "label": "Velocity Control"}, {"@id": "urn:ngm:class:position-control", "label": "Position Control"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Error calculation computes the difference between setpoint and measured variable within a [[Control System]], serving as the core input to both [[Velocity Control]] and [[Position Control]] loops.
- ### Content
  - The error signal it produces feeds proportional, integral, and derivative terms that determine the controller output. Precision and timing of this computation directly govern loop stability, overshoot, and steady-state accuracy.
