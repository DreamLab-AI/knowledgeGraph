---
okf_version: "0.2"
type: Class
title: Over The Air Update
resource: urn:ngm:class:over-the-air-update
domain: infrastructure
description: An over-the-air (OTA) update is the wireless delivery of new software, firmware, or configuration to a deployed device without physical access. OTA mechanisms package an update, transport it over a network, verify its authenticity and integrity, and apply it safely with rollback protection. They are essential to maintaining, securing, and extending the capabilities of fleets of embedded and connec
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:firmware
requires:
  - urn:ngm:class:non-volatile-memory
  - urn:ngm:class:firmware
enables:
  - urn:ngm:class:vulnerability-management
  - urn:ngm:class:incident-response
dependsOn:
  - urn:ngm:class:telemetry
implements:
  - urn:ngm:class:cryptographic-proof
bridgesTo:
  - urn:ngm:class:cybersecurity
uses:
  - urn:ngm:class:wireless-communication
  - urn:ngm:class:encryption
supports:
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:reliability
partOf:
  - urn:ngm:class:io-t
relatedTo:
  - urn:ngm:class:io-t
  - urn:ngm:class:edge-computing
  - urn:ngm:class:microcontroller
---

# Over The Air Update

An over-the-air (OTA) update is the wireless delivery of new software, firmware, or configuration to a deployed device without physical access. OTA mechanisms package an update, transport it over a network, verify its authenticity and integrity, and apply it safely with rollback protection. They are essential to maintaining, securing, and extending the capabilities of fleets of embedded and connected devices throughout their operational life.
