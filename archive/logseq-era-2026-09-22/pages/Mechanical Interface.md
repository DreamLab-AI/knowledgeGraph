public:: true

# Mechanical Interface
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mechanical-interface",
  "@type": "Page",
  "vc:slug": "mechanical-interface",
  "title": "Mechanical Interface",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mechanical-interface",
  "@type": "Class",
  "label": "Mechanical Interface",
  "definition": "A mechanical interface is the standardised physical coupling between two components that defines their geometric fit, fastening, and load transfer. In robotics it specifies how an end-effector or tool attaches to a robot wrist or actuator, governing alignment, rigidity, and quick-change capability. Well-defined mechanical interfaces enable modularity and interchangeability of subsystems.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Actuation and Control"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:end-effector", "label": "End Effector"}, {"@id": "urn:ngm:class:electric-actuator", "label": "Electric Actuator"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A mechanical interface is the physical coupling that defines how components mate, fasten, and transfer load. It is what an [[End-Effector]] requires to mount to a robot and a structural feature of an [[Electric Actuator]] output.
- ### Content
  - Standardised flange patterns, such as ISO 9409 tool-side plates, allow tools from different vendors to attach interchangeably. Design considerations include stiffness, repeatability of re-attachment, routing of power and signal services, and tolerance to misalignment under dynamic loads.
