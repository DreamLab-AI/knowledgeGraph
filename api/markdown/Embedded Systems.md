```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@type": "Page",
  "@id": "urn:visionflow:page:embedded-systems",
  "title": "Embedded Systems",
  "vc:slug": "embedded-systems",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
alias:: EmbeddedSystems

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:embedded-systems",
  "@type": "Class",
  "label": "Embedded Systems",
  "definition": "Embedded Systems are dedicated computing systems integrated into larger mechanical or electronic devices, designed to perform specific control or sensing functions with constrained resources, real-time requirements, and tight hardware-software coupling. They encompass microcontrollers, FPGAs, sensors, actuators, and the firmware that manages them, forming the computational substrate for robotics, industrial automation, IoT devices, and edge AI deployments.",
  "domain": "robotics",
  "maturity": "emerging",
  "quality": 0.3,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:sensor", "label": "Sensor"},
      {"@id": "urn:ngm:class:actuator", "label": "Actuator"},
      {"@id": "urn:ngm:class:fpga", "label": "FPGA"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:robotics", "label": "Robotics"},
      {"@id": "urn:ngm:class:internet-of-things", "label": "Internet of Things"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"},
      {"@id": "urn:ngm:class:control-system", "label": "Control System"}
    ]
  }
}
```

## Embedded Systems

Embedded Systems are purpose-built computing platforms integrated into host devices to perform dedicated functions — sensing, actuation, communication, and control — under real-time constraints and resource limitations. Unlike general-purpose computers, embedded systems are optimised for a specific task: a microcontroller in a motor drive, an FPGA implementing a signal-processing pipeline, or an ARM SoC running sensor-fusion firmware in a robotic joint. They form the hardware-software boundary in robotics, connecting high-level planning algorithms to physical actuators and sensors. Edge computing increasingly co-locates AI inference on embedded hardware, enabling low-latency decision-making without cloud round-trips. Design considerations include power budgets, thermal management, real-time scheduling, functional safety (IEC 61508, ISO 26262), and hardware security to prevent firmware tampering.

- ### Relationships
  - uses [[Sensor]]
  - uses [[Actuator]]
  - uses [[FPGA]]
  - enables [[Robotics]]
  - enables [[Internet of Things]]
  - relatedTo [[Edge Computing]]
  - relatedTo [[Control System]]
