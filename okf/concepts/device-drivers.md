---
okf_version: "0.2"
type: Class
title: Device Drivers
resource: urn:ngm:class:device-drivers
domain: infrastructure
description: A device driver is a software component that mediates between an operating system and a specific hardware device, translating generic OS calls into the device's command and register protocol. Drivers expose a uniform interface so applications can use peripherals without knowing their internal details, and they handle interrupts, buffering, and power state. They are the foundation of the hardware a
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:software-engineering
relatedTo:
  - urn:ngm:class:human-interface-device
  - urn:ngm:class:hardware-abstraction-layer-hal
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Device Drivers

A device driver is a software component that mediates between an operating system and a specific hardware device, translating generic OS calls into the device's command and register protocol. Drivers expose a uniform interface so applications can use peripherals without knowing their internal details, and they handle interrupts, buffering, and power state. They are the foundation of the hardware abstraction layer that makes hardware portable to software.
