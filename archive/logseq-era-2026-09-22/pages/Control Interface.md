public:: true

# Control Interface
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:control-interface",
  "@type": "Page",
  "vc:slug": "control-interface",
  "title": "Control Interface",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:control-interface",
  "@type": "Class",
  "label": "Control Interface",
  "definition": "A control interface is the defined boundary through which commands and feedback are exchanged between a controller and a controlled device such as an actuator, end-effector, or robot subsystem. It specifies the signals, protocols, data rates, and timing required for deterministic command of the hardware. A well-defined control interface is what allows higher-level planners and digital twins to actuate physical systems reliably.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Actuation and Control"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:end-effector", "label": "End Effector"}, {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A control interface is the command-and-feedback boundary to actuated hardware such as an [[End Effector]], and a component that a [[Digital Twin]] uses to mirror and drive physical systems.
- ### Content
  - It defines signal semantics, transport protocol, update rate, and real-time guarantees, abstracting hardware so that controllers and planners can issue commands consistently. Standardised interfaces (e.g. EtherCAT, CANopen, ROS control) decouple control software from specific drives, easing integration and substitution of components.
