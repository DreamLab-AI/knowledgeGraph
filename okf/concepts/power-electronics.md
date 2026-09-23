---
okf_version: "0.2"
type: Class
title: Power Electronics
resource: urn:ngm:class:power-electronics
domain: infrastructure
description: Power electronics is the engineering discipline concerned with the conversion and control of electrical power using switching semiconductor devices such as MOSFETs, IGBTs and SiC transistors, central to motor drives, power supplies, inverters and energy management systems.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:embedded-systems-domain
hasPart:
  - urn:ngm:class:inverter
  - urn:ngm:class:rectifier
  - urn:ngm:class:dc-dc-converter
  - urn:ngm:class:gate-driver
requires:
  - urn:ngm:class:switching-semiconductor
  - urn:ngm:class:thermal-management
  - urn:ngm:class:electromagnetic-compatibility
enables:
  - urn:ngm:class:motor-driver
  - urn:ngm:class:electric-motor
  - urn:ngm:class:servo-motor
  - urn:ngm:class:variable-frequency-drive
  - urn:ngm:class:wireless-power-transfer
dependsOn:
  - urn:ngm:class:pulse-width-modulation
  - urn:ngm:class:feedback-control
contrastsWith:
  - urn:ngm:class:power-supply
  - urn:ngm:class:power-supply
bridgesTo:
  - urn:ngm:class:robotics
  - urn:ngm:class:electric-vehicle
  - urn:ngm:class:smart-grid
  - urn:ngm:class:battery-management-system
  - urn:ngm:class:servo-motor
uses:
  - urn:ngm:class:mosfet
  - urn:ngm:class:igbt
  - urn:ngm:class:silicon-carbide
supports:
  - urn:ngm:class:battery-management-system
  - urn:ngm:class:renewable-energy-integration
standardizedBy:
  - urn:ngm:class:ieee-standards
  - urn:ngm:class:iec-61800-adjustable-speed-electrical-power-drive-systems
  - urn:ngm:class:iec-61800-adjustable-speed-electrical-power-drive-systems
partOf:
  - urn:ngm:class:embedded-systems
relatedTo:
  - urn:ngm:class:energy-harvesting
  - urn:ngm:class:microcontroller
---

# Power Electronics

Power electronics is the engineering discipline concerned with the conversion and control of electrical power using switching semiconductor devices such as MOSFETs, IGBTs and SiC transistors, central to motor drives, power supplies, inverters and energy management systems.
