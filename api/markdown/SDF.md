public:: true

# SDF
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sdf",
  "@type": "Page",
  "vc:slug": "sdf",
  "title": "SDF",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sdf",
  "@type": "Class",
  "label": "SDF",
  "definition": "SDF (Simulation Description Format) is an XML-based format for describing robots, sensors, and environments for simulation and control. Developed alongside the Gazebo simulator, it specifies kinematic and dynamic properties, links, joints, visual and collision geometry, and world contents. It is widely used in robotics for modelling platforms and scenes consistently across simulation and tooling.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:kinematics-model", "label": "Kinematics Model"},
      {"@id": "urn:ngm:class:robotics-platform", "label": "Robotics Platform"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - SDF is an XML model format for robots and worlds; it is consumed when building a [[Kinematics Model]] and to describe a [[Robotics Platform]] for simulation.
- ### Content
  - SDF describes a tree of links connected by joints, each with inertial, collision, and visual elements, plus sensors, plugins, and full world definitions. It is more expressive than URDF for full-world simulation, and is the native format of the Gazebo and Ignition ecosystems.
