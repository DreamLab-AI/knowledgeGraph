---
okf_version: "0.2"
type: Class
title: Indoor Navigation
resource: urn:ngm:class:indoor-navigation
domain: spatial-computing
description: Indoor Navigation encompasses the technologies and systems that provide wayfinding, positioning, and routing guidance within enclosed spaces where satellite-based positioning (GPS) is unavailable or unreliable. It relies on alternative positioning signals such as Wi-Fi fingerprinting, Bluetooth beacons, Ultra-Wideband (UWB) ranging, visual markers, inertial sensors, and lidar-based spatial maps. I
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:environmental-mapping
enables:
  - urn:ngm:class:wayfinding
  - urn:ngm:class:asset-tracking
  - urn:ngm:class:augmented-reality
dependsOn:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:map-data
contrastsWith:
  - urn:ngm:class:gps
bridgesTo:
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:bluetooth-low-energy
  - urn:ngm:class:wi-fi
  - urn:ngm:class:ultra-wideband
  - urn:ngm:class:lidar
  - urn:ngm:class:spatial-mapping
supports:
  - urn:ngm:class:smart-building
  - urn:ngm:class:robotics
relatedTo:
  - urn:ngm:class:gps
  - urn:ngm:class:location-services
  - urn:ngm:class:simultaneous-localisation-and-mapping
---

# Indoor Navigation

Indoor Navigation encompasses the technologies and systems that provide wayfinding, positioning, and routing guidance within enclosed spaces where satellite-based positioning (GPS) is unavailable or unreliable. It relies on alternative positioning signals such as Wi-Fi fingerprinting, Bluetooth beacons, Ultra-Wideband (UWB) ranging, visual markers, inertial sensors, and lidar-based spatial maps. Indoor navigation is critical for large venues such as airports, hospitals, shopping centres, factories, and warehouses where occupant or asset routing improves operational efficiency and user experience.
