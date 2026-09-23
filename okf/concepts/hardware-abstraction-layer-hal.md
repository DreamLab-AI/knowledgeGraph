---
okf_version: "0.2"
type: Class
title: Hardware Abstraction Layer (HAL)
resource: urn:ngm:class:hardware-abstraction-layer-hal
domain: spatial-computing
description: Software interface that lets applications interact with hardware without device-specific code, providing a standardized abstraction between software and hardware components.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-platform-and-environment
hasPart:
  - urn:ngm:class:api
  - urn:ngm:class:device-drivers
  - urn:ngm:class:api
  - urn:ngm:class:abstraction-modules
requires:
  - urn:ngm:class:hardware-resources
  - urn:ngm:class:operating-system
enables:
  - urn:ngm:class:platform-independence
  - urn:ngm:class:unified-hardware-access
  - urn:ngm:class:device-portability
partOf:
  - urn:ngm:class:technology-infrastructure-domain-layer
---

# Hardware Abstraction Layer (HAL)

Software interface that lets applications interact with hardware without device-specific code, providing a standardized abstraction between software and hardware components.
