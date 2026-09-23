---
okf_version: "0.2"
type: Class
title: Spatial Anchoring
resource: urn:ngm:class:spatial-anchoring
domain: spatial-computing
description: Spatial anchoring is the process of binding virtual or digital content to a precise, persistent location in physical space so that the content maintains a consistent position and orientation relative to the real world across multiple sessions, devices, and users. It relies on environmental mapping techniques such as Simultaneous Localisation and Mapping (SLAM), feature descriptor extraction, and c
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:environmental-mapping
hasPart:
  - urn:ngm:class:anchor-persistence
  - urn:ngm:class:localisation
  - urn:ngm:class:localisation
requires:
  - urn:ngm:class:slam
  - urn:ngm:class:environment-mapping
  - urn:ngm:class:pose-estimation
enables:
  - urn:ngm:class:location-based-ar
  - urn:ngm:class:persistent-ar-placement
  - urn:ngm:class:shared-ar-experiences
  - urn:ngm:class:indoor-navigation
  - urn:ngm:class:persistent-ar-placement
dependsOn:
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:depth-sensing
contrastsWith:
  - urn:ngm:class:world-locking
bridgesTo:
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:point-cloud
  - urn:ngm:class:coordinate-frame
  - urn:ngm:class:cloud-storage
  - urn:ngm:class:feature-extraction
supports:
  - urn:ngm:class:mixed-reality
  - urn:ngm:class:digital-twin
  - urn:ngm:class:metaverse
relatedTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:computer-vision
  - urn:ngm:class:coordinate-system
  - urn:ngm:class:coordinate-system
---

# Spatial Anchoring

Spatial anchoring is the process of binding virtual or digital content to a precise, persistent location in physical space so that the content maintains a consistent position and orientation relative to the real world across multiple sessions, devices, and users. It relies on environmental mapping techniques such as Simultaneous Localisation and Mapping (SLAM), feature descriptor extraction, and cloud-synchronised anchor databases to re-localise digital objects reliably when the same physical environment is revisited. Anchors encode both geometric and semantic information about a surface or landmark, enabling persistent mixed-reality experiences, shared multi-user overlays, and location-aware services. The technology underpins applications ranging from indoor navigation and industrial training overlays to collaborative augmented reality workspaces and location-based gaming.
