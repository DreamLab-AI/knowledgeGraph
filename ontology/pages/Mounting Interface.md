public:: true

# Mounting Interface
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mounting-interface",
  "@type": "Page",
  "vc:slug": "mounting-interface",
  "title": "Mounting Interface",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mounting-interface",
  "@type": "Class",
  "label": "Mounting Interface",
  "definition": "A mounting interface is the standardised mechanical feature set, such as bolt patterns, flanges, and alignment pins, that defines how one component is rigidly attached to another in a mechanical or robotic assembly. It ensures repeatable positioning, load transfer, and interchangeability of links, end-effectors, sensors, and payloads. Standardised interfaces (e.g. ISO tool flanges) enable modular, reconfigurable robots.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Actuation and Control"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:mechanical-component", "label": "Mechanical Component"},
      {"@id": "urn:ngm:class:robot-link", "label": "RobotLink"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A mounting interface is the standardised mechanical feature set (bolt pattern, flange, alignment) that rigidly joins components. It is a part of a [[Mechanical Component]] and connects to a [[Robot Link]].
- ### Content
  - Well-defined interfaces guarantee repeatable alignment and predictable load paths, allowing end-effectors, sensors, and payloads to be swapped without recalibration. Standards such as ISO 9409 tool flanges underpin modular robot design and a broad ecosystem of compatible accessories.
