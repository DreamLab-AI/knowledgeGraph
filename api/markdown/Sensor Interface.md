public:: true

# Sensor Interface
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sensor-interface",
  "@type": "Page",
  "vc:slug": "sensor-interface",
  "title": "Sensor Interface",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sensor-interface",
  "@type": "Class",
  "label": "Sensor Interface",
  "definition": "A sensor interface is the hardware and protocol boundary through which a controller acquires data from a sensor, encompassing signal conditioning, analogue-to-digital conversion, and bus protocols such as I2C, SPI, CAN, or analogue voltage lines. It standardises timing, addressing, and electrical levels so that heterogeneous sensors can be integrated into a control loop. It is a core subsystem of embedded and robotic control architectures.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:control-system", "label": "Control System"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:embedded-systems-domain", "label": "Embedded Systems Domain"}, {"@id": "urn:ngm:class:control-system", "label": "Control System"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A sensor interface is the hardware-and-protocol boundary through which a controller reads a sensor, handling signal conditioning, conversion, and bus communication. It is a part of the [[Control System]] and of the [[Embedded Systems Domain]].
- ### Content
  - Interfaces span analogue front-ends with amplifiers and filters through digital buses such as I2C, SPI, and CAN. Robust designs address sampling rate, electrical isolation, noise immunity, and deterministic timing so sensor data arrives reliably for closed-loop control.
