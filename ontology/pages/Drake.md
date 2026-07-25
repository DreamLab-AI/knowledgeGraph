public:: true

# Drake
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:drake",
  "@type": "Page",
  "vc:slug": "drake",
  "title": "Drake",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:drake",
  "@type": "Class",
  "label": "Drake",
  "definition": "Drake is an open-source C++/Python toolbox for model-based design and verification of robotics systems, originally developed at MIT and maintained by the Toyota Research Institute. It provides rigorous multibody dynamics, kinematics, and optimisation tooling, including analytical gradients, contact modelling, and trajectory optimisation. Drake is widely used for simulating manipulators and mobile robots and for solving collision-detection and motion-planning problems.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Navigation and Planning"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:kinematics-model", "label": "Kinematics Model"}, {"@id": "urn:ngm:class:collision-detection", "label": "Collision Detection"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Drake is an open-source robotics toolbox for model-based design, simulation, and verification, providing rigorous multibody dynamics and optimisation. It supplies the [[Kinematics Model]] and [[Collision Detection]] machinery used in planning and control.
- ### Content
  - Drake exposes a symbolic and numerical engine with analytical gradients, enabling trajectory optimisation, contact simulation, and controller synthesis. Its modular system framework lets engineers compose plants, controllers, and sensors for accurate simulation before deployment to physical hardware.
