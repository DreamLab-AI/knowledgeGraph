public:: true

# Device Drivers
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:device-drivers",
  "@type": "Page",
  "vc:slug": "device-drivers",
  "title": "Device Drivers",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:device-drivers",
  "@type": "Class",
  "label": "Device Drivers",
  "definition": "A device driver is a software component that mediates between an operating system and a specific hardware device, translating generic OS calls into the device's command and register protocol. Drivers expose a uniform interface so applications can use peripherals without knowing their internal details, and they handle interrupts, buffering, and power state. They are the foundation of the hardware abstraction layer that makes hardware portable to software.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-software-engineering", "label": "Infrastructure Software Engineering"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:human-interface-device", "label": "Human Interface Device"},
      {"@id": "urn:ngm:class:hardware-abstraction-layer-hal", "label": "Hardware Abstraction Layer (HAL)"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Device drivers translate operating-system calls into hardware-specific commands, giving software a uniform view of devices. A [[Human Interface Device]] requires a driver to function, and drivers form a core part of the [[Hardware Abstraction Layer (HAL)]].
- ### Content
  - Drivers run in kernel or user space, manage interrupts and DMA, and expose standardised class interfaces (e.g. HID, USB, block). Their correctness and security are critical, since a faulty privileged driver can crash or compromise the entire system.
