---
okf_version: "0.2"
type: Class
title: Hardware Abstraction
resource: urn:ngm:class:hardware-abstraction
domain: infrastructure
description: Hardware Abstraction is the software engineering principle and architectural practice of interposing a uniform programmatic interface layer between high-level software and the physical characteristics of underlying hardware components, enabling software to operate independently of specific hardware implementations. The abstraction layer translates generic API calls into vendor-specific or device-s
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:software-engineering
hasPart:
  - urn:ngm:class:hardware-abstraction-layer-hal
  - urn:ngm:class:device-drivers
  - urn:ngm:class:device-drivers
  - urn:ngm:class:firmware-interface
requires:
  - urn:ngm:class:device-drivers
  - urn:ngm:class:firmware
  - urn:ngm:class:instruction-set-architecture
  - urn:ngm:class:device-drivers
enables:
  - urn:ngm:class:portability
  - urn:ngm:class:operating-system
  - urn:ngm:class:cross-platform-development
  - urn:ngm:class:virtualisation
  - urn:ngm:class:portability
implements:
  - urn:ngm:class:application-programming-interface
  - urn:ngm:class:posix
contrastsWith:
  - urn:ngm:class:bare-metal-programming
  - urn:ngm:class:hardware-specific-optimisation
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:ai-accelerator
  - urn:ngm:class:webgpu
uses:
  - urn:ngm:class:graphics-api
  - urn:ngm:class:driver-software
  - urn:ngm:class:system-call-interface
  - urn:ngm:class:unified-extensible-firmware-interface
supports:
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:real-time-operating-system
  - urn:ngm:class:cloud-computing
partOf:
  - urn:ngm:class:operating-system-architecture
  - urn:ngm:class:system-software-stack
relatedTo:
  - urn:ngm:class:hardware
  - urn:ngm:class:memory-management
  - urn:ngm:class:interrupt-handling
---

# Hardware Abstraction

Hardware Abstraction is the software engineering principle and architectural practice of interposing a uniform programmatic interface layer between high-level software and the physical characteristics of underlying hardware components, enabling software to operate independently of specific hardware implementations. The abstraction layer translates generic API calls into vendor-specific or device-specific commands, shielding operating systems, runtimes, and applications from the diversity of processor architectures, memory subsystems, I/O controllers, graphics units, and peripheral devices. This principle underpins portability, vendor independence, and long-term maintainability of system software stacks across the full spectrum of computing platforms, from embedded microcontrollers to cloud server farms to spatial-computing headsets. Hardware Abstraction Layers (HALs) are the canonical realisation of this principle in operating systems, device driver frameworks, and graphics APIs.
