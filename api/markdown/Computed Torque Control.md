public:: true

# Computed Torque Control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:computed-torque-control",
  "@type": "Page",
  "vc:slug": "computed-torque-control",
  "title": "Computed Torque Control",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:computed-torque-control",
  "@type": "Class",
  "label": "Computed Torque Control",
  "definition": "Computed torque control is a model-based robot control method that uses the inverse dynamics of the manipulator to cancel nonlinear coupling and gravity terms, linearising the closed-loop behaviour. The controller computes the joint torques required to achieve a desired acceleration, then adds a linear feedback term to correct tracking error. It enables high-accuracy trajectory following at the cost of requiring an accurate dynamic model.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Robotics Actuation and Control"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:force-control", "label": "Force Control"}, {"@id": "urn:ngm:class:motion-control", "label": "Motion Control"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Computed torque control uses inverse-dynamics feedforward to linearise a manipulator, implementing precise [[Motion Control]] and forming a basis for [[Force Control]].
- ### Content
  - The method splits the control law into a model-based feedforward term that cancels Coriolis, centrifugal, and gravity effects, and a feedback term (typically PD) acting on the linearised error dynamics. Tracking accuracy depends directly on the fidelity of the identified dynamic parameters.
