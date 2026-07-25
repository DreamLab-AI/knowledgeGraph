public:: true

# Firmware
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:firmware", "@type":"Page", "title":"Firmware", "vc:slug":"firmware", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:firmware",
  "@type": "Class",
  "label": "Firmware",
  "definition": "Firmware is the low-level software stored in non-volatile memory that provides the control, monitoring and data-handling logic for a hardware device. It sits between the physical hardware and higher-level software, initialising components, exposing device functions and often forming the only software a simple device runs. Firmware is typically tightly coupled to specific hardware and is updated through controlled mechanisms such as over-the-air updates. It is foundational to embedded systems, peripherals and connected devices.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:embedded-systems",
      "label": "Embedded Systems"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:bootloader",
        "label": "Bootloader"
      },
      {
        "@id": "urn:ngm:class:device-drivers",
        "label": "Device Driver"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:microcontroller",
        "label": "Microcontroller"
      },
      {
        "@id": "urn:ngm:class:non-volatile-memory",
        "label": "Non-Volatile Memory"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:hardware-abstraction",
        "label": "Hardware Abstraction"
      },
      {
        "@id": "urn:ngm:class:device-functionality",
        "label": "Device Functionality"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:over-the-air-update",
        "label": "Over-the-Air Update"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:iot-device",
        "label": "IoT Device"
      },
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:hardware",
        "label": "Hardware"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:computer-hardware",
        "label": "Computer Hardware"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:operating-system",
        "label": "Operating System"
      },
      {
        "@id": "urn:ngm:class:real-time-operating-system",
        "label": "Real-Time Operating System"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:application-software",
        "label": "Application Software"
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
  - Firmware is the low-level software held in non-volatile memory that controls a hardware device, sitting between [[Hardware]] and higher software within [[Embedded Systems]]. It typically runs on a [[Microcontroller]] and is maintained through an [[Over-the-Air Update]].

- ### Overview
  - Firmware provides the persistent, device-specific logic that brings hardware to life: initialising peripherals, managing power, exposing functions and, in simple devices, constituting the entire software stack. It is stored in flash, ROM or other non-volatile memory so it survives power cycles.
  - Because it is tightly coupled to particular hardware, firmware bridges the gap between bare silicon and any operating system or application that runs above it, and is a frequent target of security hardening and update governance.

- ### Key aspects
  - The bootloader is the first code to execute, initialising the system and optionally validating and loading newer firmware images.
  - Device drivers within firmware translate generic requests into hardware-specific register operations.
  - Hardware abstraction layers let higher software interact with components without knowing their electrical details.
  - Secure and signed update mechanisms protect integrity and allow defect and vulnerability remediation in the field.

- ### Applications
  - Microcontrollers and embedded controllers in appliances, vehicles and industrial equipment.
  - Peripherals such as storage drives, network cards and printers.
  - Internet-of-things devices requiring remote update and management.
  - Battery management, sensor and actuator controllers.

- ### Relationships
  - subClassOf:: [[Embedded Systems]]
  - hasPart:: [[Bootloader]]
  - hasPart:: [[Device Driver]]
  - requires:: [[Microcontroller]]
  - requires:: [[Non-Volatile Memory]]
  - enables:: [[Hardware Abstraction]]
  - enables:: [[Device Functionality]]
  - uses:: [[Over-the-Air Update]]
  - supports:: [[IoT Device]]
  - supports:: [[Internet of Things]]
  - dependsOn:: [[Hardware]]
  - partOf:: [[Computer Hardware]]
  - relatedTo:: [[Operating System]]
  - relatedTo:: [[Real-Time Operating System]]
  - contrastsWith:: [[Application Software]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
