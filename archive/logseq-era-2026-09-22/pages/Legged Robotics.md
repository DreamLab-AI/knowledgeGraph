public:: true

# Legged Robotics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:legged-robotics",
  "@type": "Page",
  "vc:slug": "legged-robotics",
  "title": "Legged Robotics",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:legged-robotics",
  "@type": "Class",
  "label": "Legged Robotics",
  "definition": "Legged robotics is the field concerned with robots that locomote using articulated legs rather than wheels or tracks, enabling traversal of rough, discontinuous terrain. Designs span bipeds, quadrupeds, and hexapods and rely on dynamic balance, gait planning, and high-bandwidth force control. The approach trades mechanical and control complexity for superior mobility over obstacles and stairs.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:robo-robot-type", "label": "Robot Type"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:hydraulic-actuator", "label": "Hydraulic Actuator"}, {"@id": "urn:ngm:class:mechanical-component", "label": "Mechanical Component"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Legged robotics studies robots that walk on articulated legs; such platforms depend on actuation hardware like the [[Hydraulic Actuator]] and on the [[Mechanical Component]] subsystems that bear dynamic loads.
- ### Content
  - Control stacks combine model-predictive whole-body control with contact scheduling to maintain balance during dynamic gaits. Recent commercial quadrupeds use electric actuators for efficiency, while heavy-duty and humanoid platforms still leverage hydraulics for high force density.
