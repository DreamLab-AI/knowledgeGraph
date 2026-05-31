public:: true

# Cable Drive
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cable-drive",
  "@type": "Page",
  "vc:slug": "cable-drive",
  "title": "Cable Drive",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cable-drive",
  "@type": "Class",
  "label": "Cable Drive",
  "definition": "A cable drive (cable-driven transmission) is a mechanical actuation mechanism that transmits force and motion through tensioned cables, tendons, or belts routed over pulleys, rather than through rigid gear trains. It allows actuators to be located remotely from the joint they drive, reducing distal mass and inertia in robotic limbs and surgical instruments. Cable drives matter in robotics because they enable lightweight, compliant, backdrivable joints with low backlash.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Robotic Actuation and Control"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:mechanical-component", "label": "Mechanical Component"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A Cable Drive is a [[Mechanical Component]] transmission that moves robotic joints via tensioned cables over pulleys, relocating actuator mass away from the moving end-effector.
- ### Content
  - Cable-driven systems reduce reflected inertia and enable compliant, backdrivable behaviour valued in collaborative and surgical robots. Their principal trade-offs are cable stretch, friction, and routing complexity, which require pretensioning and periodic maintenance to preserve positioning accuracy.
