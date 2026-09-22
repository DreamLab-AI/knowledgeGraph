public:: true

# Microcontroller
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:microcontroller", "@type":"Page", "title":"Microcontroller", "vc:slug":"microcontroller", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:microcontroller",
  "@type": "Class",
  "label": "Microcontroller",
  "definition": "A microcontroller is a compact integrated circuit that combines a processor core, memory and programmable input and output peripherals on a single chip, designed to run a dedicated control program. Unlike a general-purpose processor, it embeds the resources needed for embedded control directly, enabling low-cost, low-power operation in devices that sense and actuate their environment. Microcontrollers execute firmware in real time and are the computational heart of countless embedded and robotic systems.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:hardware-component",
      "label": "Hardware Component"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:memory",
        "label": "Memory"
      },
      {
        "@id": "urn:ngm:class:non-volatile-memory",
        "label": "Non-Volatile Memory"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:firmware",
        "label": "Firmware"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:real-time-operating-system",
        "label": "Real-Time Operating System"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      },
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:embedded-system",
        "label": "Embedded System"
      },
      {
        "@id": "urn:ngm:class:iot-device",
        "label": "IoT Device"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:embedded-system",
        "label": "Embedded System"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:hardware",
        "label": "Hardware"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:system-on-chip",
        "label": "System-on-Chip"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:motor-driver",
        "label": "Motor Driver"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:hardware-component",
        "label": "Hardware Component"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A microcontroller is a single-chip [[Hardware Component]] integrating a [[Processor]], [[Memory]] and input/output peripherals to run dedicated control logic. It executes [[Firmware]] in real time to read a [[Sensor]] and drive an [[Actuator]], forming the core of embedded and robotic devices.

- ### Overview
  - Microcontrollers trade raw computational power for integration, low cost and low power: everything needed to control a small system is on one chip, so the device can run for years on modest energy.
  - They are programmed with firmware that interacts directly with peripherals such as timers, analogue-to-digital converters, pulse-width-modulation generators and serial interfaces, giving precise, deterministic control over hardware.
  - Because their behaviour is predictable and their resources constrained, microcontrollers are typically programmed against the bare metal or a lightweight real-time operating system rather than a full general-purpose OS.

- ### Key aspects
  - An on-chip processor core executes the control program directly from integrated flash memory.
  - Built-in peripherals handle timing, analogue sensing, digital I/O and communication buses.
  - Deterministic, real-time execution allows tight control loops for sensing and actuation.
  - Low power modes let the device sleep between events to conserve energy.

- ### Applications
  - Robotics control loops driving motors, servos and sensors.
  - Internet-of-things endpoints that sense, process and report data.
  - Appliance, automotive and industrial embedded controllers.
  - Wearables and battery-powered devices needing long operating life.

- ### Relationships
  - subClassOf:: [[Hardware Component]]
  - hasPart:: [[Processor]]
  - hasPart:: [[Memory]]
  - hasPart:: [[Non-Volatile Memory]]
  - requires:: [[Firmware]]
  - uses:: [[Real-Time Operating System]]
  - supports:: [[Sensor]]
  - supports:: [[Actuator]]
  - enables:: [[Embedded System]]
  - enables:: [[IoT Device]]
  - partOf:: [[Embedded System]]
  - dependsOn:: [[Hardware]]
  - contrastsWith:: [[System-on-Chip]]
  - relatedTo:: [[Motor Driver]]
  - relatedTo:: [[Edge Computing]]
  - relatedTo:: [[Hardware Component]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
