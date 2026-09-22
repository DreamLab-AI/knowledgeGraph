public:: true

# Feedforward Compensation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:feedforward-compensation",
  "@type": "Page",
  "vc:slug": "feedforward-compensation",
  "title": "Feedforward Compensation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:feedforward-compensation",
  "@type": "Class",
  "label": "Feedforward Compensation",
  "definition": "Feedforward compensation is a control technique that uses a model of the system or known disturbances to compute corrective control action in advance, rather than waiting for an error to appear at the output. By anticipating required effort, for example to overcome inertia, friction, or measurable load disturbances, it improves tracking and disturbance rejection beyond what feedback alone provides. It is typically combined with feedback control to handle modelling errors and unmeasured disturbances.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:control-system", "label": "Control System"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:velocity-control", "label": "VelocityControl"},
      {"@id": "urn:ngm:class:position-control", "label": "PositionControl"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Feedforward compensation computes control action from a model of the plant and known disturbances ahead of any measured error, sharpening the response of [[Velocity Control]] and [[Position Control]] loops. It is a component of a closed-loop [[Control System]].
- ### Content
  - In motion control, feedforward terms inject anticipated torque or force based on commanded acceleration, velocity, and known load, so the feedback loop only corrects residual errors. This division reduces tracking lag and improves bandwidth, but its benefit is bounded by model accuracy: imperfect plant models leave residual error that feedback must still absorb.
