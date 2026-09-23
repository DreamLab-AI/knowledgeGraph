---
okf_version: "0.2"
type: Class
title: Environmental Registry
resource: urn:ngm:class:environmental-registry
domain: spatial-computing
description: A catalogued, authoritative store of descriptors for physical or virtual environments, recording their spatial bounds, safety parameters, hazard zones, and compliance status. XR systems query the environmental registry during session initialisation to validate that the current space meets operational and safety requirements before permitting immersive interactions.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-governance-and-safety
hasPart:
  - urn:ngm:class:spatial-anchor
  - urn:ngm:class:room-scale
uses:
  - urn:ngm:class:database-query
  - urn:ngm:class:data-management
supports:
  - urn:ngm:class:environmental-verification
  - urn:ngm:class:xr-runtime-environment
relatedTo:
  - urn:ngm:class:calibration-tools
---

# Environmental Registry

A catalogued, authoritative store of descriptors for physical or virtual environments, recording their spatial bounds, safety parameters, hazard zones, and compliance status. XR systems query the environmental registry during session initialisation to validate that the current space meets operational and safety requirements before permitting immersive interactions.
