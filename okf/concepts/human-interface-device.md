---
okf_version: "0.2"
type: Class
title: Human Interface Device
resource: urn:ngm:class:human-interface-device
domain: spatial-computing
description: Physical hardware component enabling user input or feedback in immersive systems through controllers, sensors, and actuators.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-interaction
hasPart:
  - urn:ngm:class:communication-interface
  - urn:ngm:class:sensor-input
  - urn:ngm:class:actuators
  - urn:ngm:class:haptics
  - urn:ngm:class:sensor-input
  - urn:ngm:class:actuators
  - urn:ngm:class:tracking-components
requires:
  - urn:ngm:class:calibration
  - urn:ngm:class:device-drivers
  - urn:ngm:class:power-management
enables:
  - urn:ngm:class:haptic-feedback
  - urn:ngm:class:motion-tracking
  - urn:ngm:class:spatial-interaction
  - urn:ngm:class:user-input
dependsOn:
  - urn:ngm:class:usb-protocol
  - urn:ngm:class:bluetooth
  - urn:ngm:class:wireless-communication
partOf:
  - urn:ngm:class:interaction-system
---

# Human Interface Device

Physical hardware component enabling user input or feedback in immersive systems through controllers, sensors, and actuators.
