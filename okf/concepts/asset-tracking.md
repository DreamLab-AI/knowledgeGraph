---
okf_version: "0.2"
type: Class
title: Asset Tracking
resource: urn:ngm:class:asset-tracking
domain: infrastructure
description: Asset tracking is the continuous identification and localisation of physical objects, such as inventory, equipment, and vehicles, across their lifecycle and movement. It combines identification technologies like RFID and BLE beacons with positioning systems and connectivity to give organisations real-time visibility of where assets are and in what condition. Asset tracking underpins supply-chain t
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:internet-of-things
hasPart:
  - urn:ngm:class:rfid
  - urn:ngm:class:bluetooth-low-energy
requires:
  - urn:ngm:class:sensor
enables:
  - urn:ngm:class:supply-chain-visibility
  - urn:ngm:class:inventory-management
  - urn:ngm:class:logistics
dependsOn:
  - urn:ngm:class:internet-of-things
bridgesTo:
  - urn:ngm:class:mesh-networking
uses:
  - urn:ngm:class:rfid
  - urn:ngm:class:bluetooth-low-energy
  - urn:ngm:class:gps
supports:
  - urn:ngm:class:logistics
partOf:
  - urn:ngm:class:internet-of-things
relatedTo:
  - urn:ngm:class:gps
  - urn:ngm:class:supply-chain-visibility
  - urn:ngm:class:inventory-management
---

# Asset Tracking

Asset tracking is the continuous identification and localisation of physical objects, such as inventory, equipment, and vehicles, across their lifecycle and movement. It combines identification technologies like RFID and BLE beacons with positioning systems and connectivity to give organisations real-time visibility of where assets are and in what condition. Asset tracking underpins supply-chain transparency, loss prevention, and operational efficiency.
