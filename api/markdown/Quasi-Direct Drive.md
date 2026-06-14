public:: true

# Quasi-Direct Drive
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:quasi-direct-drive",
  "@type": "Page",
  "vc:slug": "quasi-direct-drive",
  "title": "Quasi-Direct Drive",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:quasi-direct-drive",
  "@type": "Class",
  "label": "Quasi-Direct Drive",
  "definition": "Quasi-direct drive (QDD) is an actuation architecture that pairs a high-torque electric motor with a low-ratio gearbox to achieve high force fidelity, backdrivability, and impact tolerance while retaining usable torque density. By minimising gear reduction it preserves transparency between the motor and the load, enabling accurate force sensing and control without dedicated torque sensors. It is a dominant approach in legged and dynamic robots.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Actuation and Control"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:mechanical-component", "label": "Mechanical Component"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Quasi-direct drive couples a high-torque motor with a low-ratio gearbox for backdrivable, force-transparent actuation. It is implemented and enabled as a [[Mechanical Component]] in dynamic and legged robots.
- ### Content
  - Compared with highly geared actuators, QDD offers superior backdrivability, proprioceptive force estimation from motor current, and resilience to impacts, at the cost of lower peak torque density and higher thermal load. It became prominent through MIT Cheetah-style designs and is now standard in agile quadrupeds and torque-controlled manipulators.
