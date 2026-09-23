---
okf_version: "0.2"
type: Class
title: Profinet
resource: urn:ngm:class:profinet
domain: infrastructure
description: PROFINET is an open industrial Ethernet standard for real-time communication between controllers, devices and supervisory systems in factory and process automation. Built on standard Ethernet, it supports cyclic real-time data exchange, isochronous motion control and integration with IT networks, while remaining interoperable through the PROFIBUS and PROFINET International organisation. It is wide
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:industrial-automation
requires:
  - urn:ngm:class:ethernet
  - urn:ngm:class:real-time-systems
enables:
  - urn:ngm:class:deterministic-networking
  - urn:ngm:class:real-time-communication
dependsOn:
  - urn:ngm:class:industrial-ethernet
implements:
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:industrial-automation
contrastsWith:
  - urn:ngm:class:fieldbus
  - urn:ngm:class:opc-ua
uses:
  - urn:ngm:class:ethernet
  - urn:ngm:class:industrial-ethernet
  - urn:ngm:class:real-time-communication
supports:
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:sensor-networks
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:sensor-networks
partOf:
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:industrial-automation
relatedTo:
  - urn:ngm:class:time-sensitive-networking
  - urn:ngm:class:scada
  - urn:ngm:class:deterministic-networking
---

# Profinet

PROFINET is an open industrial Ethernet standard for real-time communication between controllers, devices and supervisory systems in factory and process automation. Built on standard Ethernet, it supports cyclic real-time data exchange, isochronous motion control and integration with IT networks, while remaining interoperable through the PROFIBUS and PROFINET International organisation. It is widely used to connect programmable logic controllers to distributed I/O, drives and sensors.
