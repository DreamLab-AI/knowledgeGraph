public:: true

# Error Signal
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:error-signal",
  "@type": "Page",
  "vc:slug": "error-signal",
  "title": "Error Signal",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:error-signal",
  "@type": "Class",
  "label": "Error Signal",
  "definition": "An error signal is the quantity in a feedback control system representing the instantaneous difference between the reference setpoint and the actual measured output. It is the driving input to the controller, which acts to reduce it toward zero. The error signal's magnitude, rate of change, and accumulated value are processed by proportional, derivative, and integral control terms respectively.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:control-system", "label": "Control System"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:derivative-control", "label": "Derivative Control"}, {"@id": "urn:ngm:class:feedback-loop", "label": "Feedback Loop"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The error signal is the difference between setpoint and measured output that drives a [[Control System]]; its rate of change is required by [[Derivative Control]] and it is a core part of any [[Feedback Loop]].
- ### Content
  - Controllers consume the error signal through proportional, integral, and derivative paths to compute corrective output. Its time history determines transient response and steady-state error, making it the central variable of closed-loop control.
