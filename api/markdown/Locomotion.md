public:: true

# Locomotion
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:locomotion",
  "@type": "Page",
  "vc:slug": "locomotion",
  "title": "Locomotion",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:locomotion",
  "@type": "Class",
  "label": "Locomotion",
  "definition": "Locomotion is the capability of a robot or embodied agent to move its body through an environment by coordinating actuators against ground or fluid reaction forces. It encompasses gait generation, balance control, and trajectory execution across modalities such as legged walking, wheeled rolling, and aerial or aquatic propulsion. Robust locomotion is fundamental to autonomous mobility and physical task execution.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Robotics Actuation and Control"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:mobile-robot", "label": "Mobile Robot"}, {"@id": "urn:ngm:class:control-system", "label": "Control System"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Locomotion is the coordinated bodily movement that lets an embodied system traverse an environment, generating motion through actuator forces. It underpins [[Mobile Robot]] mobility and is governed by feedback [[Control System]] loops.
- ### Content
  - Locomotion strategies vary by morphology: legged systems require dynamic balance and gait planning, wheeled platforms optimise for efficiency on flat terrain, and flying or swimming robots manage fluid dynamics. Stability, energy economy, and terrain adaptability are the primary trade-offs engineers balance when designing locomotion controllers.
