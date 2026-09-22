public:: true

# Sliding Mode Control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sliding-mode-control",
  "@type": "Page",
  "vc:slug": "sliding-mode-control",
  "title": "Sliding Mode Control",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sliding-mode-control",
  "@type": "Class",
  "label": "Sliding Mode Control",
  "definition": "Sliding mode control is a nonlinear, robust control method that drives a system's state onto a designed sliding surface and constrains it there using high-frequency switching of the control input. Once on the surface, the closed-loop dynamics become insensitive to matched disturbances and parameter uncertainty, giving strong robustness. It is a control-theory technique widely applied to robotic actuators and power electronics, though it can induce chattering.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:control-theory", "label": "Control Theory"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:control-algorithm", "label": "Control Algorithm"}, {"@id": "urn:ngm:class:control-theory", "label": "Control Theory"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Sliding mode control forces a system's state onto a sliding surface via switching control, yielding robustness to matched disturbances and uncertainty once the surface is reached. It is a [[Control Theory]] method realised as a robust [[Control Algorithm]].
- ### Content
  - The design chooses a sliding surface defining desired error dynamics, then a discontinuous control law that enforces a reaching condition toward it. The main practical drawback is chattering from the switching action, mitigated by boundary-layer smoothing or higher-order sliding-mode schemes such as super-twisting.
