public:: true

# Robot RB-0001
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:robot-rb-0001",
  "@type": "Page",
  "vc:slug": "robot-rb-0001",
  "title": "Robot RB-0001",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:robot-rb-0001",
  "@type": "Class",
  "label": "Robot RB-0001",
  "definition": "Robot RB-0001 is an identifier-class for a reference mobile-manipulator robot platform that combines a mobile base with an articulated manipulator arm. As a composite robot, it integrates locomotion and manipulation subsystems so the system can both navigate an environment and perform physical tasks within it. It serves as a canonical example linking mobile-robot and manipulator capabilities.",
  "domain": "robotics",
  "maturity": "experimental",
  "subClassOf": [{"@id": "urn:ngm:class:robo-robot-type", "label": "Robotics Robot Type"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:mobile-robot", "label": "Mobile Robot"}, {"@id": "urn:ngm:class:manipulator", "label": "Manipulator"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Robot RB-0001 is a reference mobile-manipulator platform combining a [[Mobile Robot]] base with a [[Manipulator]] arm as integrated subsystems.
- ### Content
  - The platform unifies locomotion and manipulation, letting it move to a workspace and then grasp or place objects. As a composite type it illustrates how navigation and arm-control stacks compose into a single coordinated system.
