---
okf_version: "0.2"
type: Class
title: Lpwan
resource: urn:ngm:class:lpwan
domain: infrastructure
description: Low-Power Wide-Area Network (LPWAN) is a class of wireless communication technologies designed to transmit small amounts of data over long distances at very low power consumption, enabling battery-operated IoT devices to operate for years on a single charge. LPWAN technologies trade high data rates for extended range and deep indoor penetration, covering areas from a few kilometres to tens of kilo
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:wireless-communication
hasPart:
  - urn:ngm:class:lo-ra-wan
enables:
  - urn:ngm:class:iot-device
  - urn:ngm:class:industrial-io-t
  - urn:ngm:class:smart-agriculture
  - urn:ngm:class:asset-tracking
dependsOn:
  - urn:ngm:class:network-infrastructure
contrastsWith:
  - urn:ngm:class:wi-fi
  - urn:ngm:class:bluetooth-low-energy
uses:
  - urn:ngm:class:radio-frequency
  - urn:ngm:class:encryption
supports:
  - urn:ngm:class:sensor-networks
  - urn:ngm:class:edge-computing
  - urn:ngm:class:sensor-networks
relatedTo:
  - urn:ngm:class:zigbee
  - urn:ngm:class:z-wave
  - urn:ngm:class:wireless-protocol
  - urn:ngm:class:mesh-networking
---

# Lpwan

Low-Power Wide-Area Network (LPWAN) is a class of wireless communication technologies designed to transmit small amounts of data over long distances at very low power consumption, enabling battery-operated IoT devices to operate for years on a single charge. LPWAN technologies trade high data rates for extended range and deep indoor penetration, covering areas from a few kilometres to tens of kilometres per base station. Major LPWAN variants include LoRaWAN, Sigfox, NB-IoT, and LTE-M, each suited to different deployment and regulatory environments.
