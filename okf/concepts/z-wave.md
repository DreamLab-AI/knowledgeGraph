---
okf_version: "0.2"
type: Class
title: Z Wave
resource: urn:ngm:class:z-wave
domain: infrastructure
description: Z-Wave is a low-power wireless communication protocol designed specifically for home automation and smart home devices, operating in the sub-GHz frequency band (868 MHz in Europe, 908 MHz in North America). It uses a mesh networking topology where each device can relay signals, extending range and improving reliability throughout a building. Z-Wave supports up to 232 nodes per network and is gover
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:infra-network-and-comms
enables:
  - urn:ngm:class:smart-home
  - urn:ngm:class:home-automation
  - urn:ngm:class:iot-device
implements:
  - urn:ngm:class:mesh-networking
  - urn:ngm:class:wireless-protocol
contrastsWith:
  - urn:ngm:class:zigbee
  - urn:ngm:class:bluetooth-low-energy
  - urn:ngm:class:thread-protocol
  - urn:ngm:class:wi-fi
uses:
  - urn:ngm:class:encryption
  - urn:ngm:class:aes-encryption
standardizedBy:
  - urn:ngm:class:standards
relatedTo:
  - urn:ngm:class:lpwan
  - urn:ngm:class:industrial-io-t
  - urn:ngm:class:interoperability
---

# Z Wave

Z-Wave is a low-power wireless communication protocol designed specifically for home automation and smart home devices, operating in the sub-GHz frequency band (868 MHz in Europe, 908 MHz in North America). It uses a mesh networking topology where each device can relay signals, extending range and improving reliability throughout a building. Z-Wave supports up to 232 nodes per network and is governed by the Z-Wave Alliance, which maintains interoperability standards across manufacturers.
