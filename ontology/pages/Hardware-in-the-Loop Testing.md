public:: true

# Hardware-in-the-Loop Testing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:hardware-in-the-loop-testing",
  "@type": "Page",
  "vc:slug": "hardware-in-the-loop-testing",
  "title": "Hardware-in-the-Loop Testing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hardware-in-the-loop-testing",
  "@type": "Class",
  "label": "Hardware-in-the-Loop Testing",
  "definition": "Hardware-in-the-loop (HIL) testing is a validation technique in which real physical hardware, such as a controller or actuator, is connected to a real-time simulation of the rest of the system. It lets engineers exercise embedded control software against realistic, repeatable plant dynamics without risking expensive or dangerous full-system runs. HIL is standard practice in robotics, automotive, and aerospace development.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:control-system", "label": "Control System"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:control-algorithm", "label": "Control Algorithm"},
      {"@id": "urn:ngm:class:gazebo-simulator", "label": "Gazebo Simulator"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Hardware-in-the-loop testing connects physical controllers to a real-time simulated plant, validating a [[Control Algorithm]] under realistic dynamics and often driven by tools such as the [[Gazebo Simulator]].
- ### Content
  - A HIL rig runs the simulation on deterministic real-time hardware so sensor inputs and actuator commands are exchanged with the device under test at the true loop rate. This catches timing, fault-handling, and edge-case behaviour early, shortening development cycles and improving safety before deployment on real machines.
