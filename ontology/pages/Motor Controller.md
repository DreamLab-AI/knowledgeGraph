public:: true

# Motor Controller
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:motor-controller",
  "@type": "Page",
  "vc:slug": "motor-controller",
  "title": "Motor Controller",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:motor-controller",
  "@type": "Class",
  "label": "Motor Controller",
  "definition": "A motor controller is an electronic device that regulates the speed, torque, direction, and position of an electric motor by modulating the power delivered to it, typically via pulse-width modulation and closed-loop feedback. In robotics it interprets high-level velocity or position commands and drives motors accordingly, often integrating current sensing and encoder feedback. It is a core actuation component bridging control software and mechanical motion.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Actuation and Control"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:mobile-robot-platform", "label": "Mobile Robot Platform"},
      {"@id": "urn:ngm:class:tc-0003-telepresence-robot", "label": "tc 0003 telepresence robot"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A motor controller regulates a motor's speed, torque, and direction by modulating delivered power under closed-loop feedback. It is a hardware part of a [[Mobile Robot Platform]] and a [[Telepresence Robot]].
- ### Content
  - Controllers commonly drive brushless DC or stepper motors using PWM and field-oriented control, closing loops on encoder and current feedback for precise motion. They expose interfaces such as CAN, EtherCAT, or PWM to the robot's control stack and enforce limits to protect the motor and mechanism.
