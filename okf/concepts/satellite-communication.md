---
okf_version: "0.2"
type: Class
title: Satellite Communication
resource: urn:ngm:class:satellite-communication
domain: infrastructure
description: Satellite communication is the end-to-end exchange of information through a system that uses one or more satellite links between space and terrestrial, airborne or maritime endpoints.
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:telecommunications
hasPart:
  - urn:ngm:class:ground-station
  - urn:ngm:class:transponder
  - urn:ngm:class:satellite-link
requires:
  - urn:ngm:class:spectrum-allocation
  - urn:ngm:class:launch-vehicle
enables:
  - urn:ngm:class:gps-navigation
  - urn:ngm:class:remote-sensing
  - urn:ngm:class:global-connectivity
  - urn:ngm:class:broadcasting
dependsOn:
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:standards
contrastsWith:
  - urn:ngm:class:fibre-optic-network
uses:
  - urn:ngm:class:spectrum-allocation
  - urn:ngm:class:frequency-band
  - urn:ngm:class:orbital-mechanics
supports:
  - urn:ngm:class:telecommunications
  - urn:ngm:class:disaster-response
relatedTo:
  - urn:ngm:class:low-earth-orbit
  - urn:ngm:class:geostationary-orbit
---

# Satellite Communication

Satellite communication is the end-to-end exchange of information through a system that uses one or more satellite links between space and terrestrial, airborne or maritime endpoints.
