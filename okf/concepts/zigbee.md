---
okf_version: "0.2"
type: Class
title: Zigbee
resource: urn:ngm:class:zigbee
domain: infrastructure
description: Zigbee is a low-power, low-data-rate wireless mesh networking protocol stack built atop the IEEE 802.15.4 physical and MAC layer standard, designed for battery-operated IoT sensors, actuators, and control devices in home automation, industrial monitoring, and building management. Maintained by the Connectivity Standards Alliance (formerly the Zigbee Alliance), it defines application-layer profiles
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:ieee-802-15-4
hasPart:
  - urn:ngm:class:zigbee-coordinator
  - urn:ngm:class:zigbee-router
  - urn:ngm:class:zigbee-end-device
requires:
  - urn:ngm:class:ieee-802-15-4
  - urn:ngm:class:aes-128
enables:
  - urn:ngm:class:automation
  - urn:ngm:class:building-automation
  - urn:ngm:class:io-t-sensor-network
  - urn:ngm:class:smart-metering
  - urn:ngm:class:automation
  - urn:ngm:class:io-t-sensor-network
dependsOn:
  - urn:ngm:class:mesh-networking
  - urn:ngm:class:ism-band
implements:
  - urn:ngm:class:mesh-routing-software
  - urn:ngm:class:routing-protocol
  - urn:ngm:class:mesh-routing-software
  - urn:ngm:class:routing-protocol
contrastsWith:
  - urn:ngm:class:bluetooth-low-energy
  - urn:ngm:class:z-wave
  - urn:ngm:class:thread-protocol
  - urn:ngm:class:wi-fi-halow
bridgesTo:
  - urn:ngm:class:cloud-platform
  - urn:ngm:class:ip-networking
  - urn:ngm:class:cloud-platform
uses:
  - urn:ngm:class:aes-encryption
  - urn:ngm:class:csma-ca
  - urn:ngm:class:direct-sequence-spread-spectrum
supports:
  - urn:ngm:class:sensor-data
  - urn:ngm:class:over-the-air-update
standardizedBy:
  - urn:ngm:class:ieee
  - urn:ngm:class:connectivity-standards-alliance
partOf:
  - urn:ngm:class:protocol-stack
  - urn:ngm:class:protocol-stack
relatedTo:
  - urn:ngm:class:matter-protocol
  - urn:ngm:class:smart-home
  - urn:ngm:class:industrial-io-t
  - urn:ngm:class:lpwan
---

# Zigbee

Zigbee is a low-power, low-data-rate wireless mesh networking protocol stack built atop the IEEE 802.15.4 physical and MAC layer standard, designed for battery-operated IoT sensors, actuators, and control devices in home automation, industrial monitoring, and building management. Maintained by the Connectivity Standards Alliance (formerly the Zigbee Alliance), it defines application-layer profiles, mesh routing, and AES-128 security on top of IEEE 802.15.4, supporting coordinator, router, and sleepy end-device roles within self-healing mesh topologies. Operating predominantly at 2.4 GHz (globally) as well as 868 MHz and 915 MHz regional bands, Zigbee targets data rates up to 250 kbps and enables coin-cell battery lifetimes of years, making it a foundational IoT wireless technology that coexists and increasingly converges with Thread and the Matter smart-home standard.
