---
okf_version: "0.2"
type: Class
title: Spatial Anchors
resource: urn:ngm:class:spatial-anchors
domain: spatial-computing
description: Spatial anchors are persistent, georeferenced coordinate frames that bind virtual content to specific physical locations, enabling augmented and mixed reality experiences to survive device handoffs, multi-user sessions, and temporal gaps between visits. They are constructed by fusing visual feature maps (point clouds or learned descriptors), inertial measurements, and optionally GPS or Ultra-Wideb
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:ar-technology
  - urn:ngm:class:sc-platform-and-environment
hasPart:
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:feature-map
requires:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:slam
  - urn:ngm:class:visual-inertial-odometry
enables:
  - urn:ngm:class:persistent-ar-placement
  - urn:ngm:class:shared-ar-experiences
  - urn:ngm:class:indoor-navigation
  - urn:ngm:class:digital-twin
  - urn:ngm:class:shared-ar-experiences
dependsOn:
  - urn:ngm:class:coordinate-system
  - urn:ngm:class:relocalisation
  - urn:ngm:class:coordinate-system
contrastsWith:
  - urn:ngm:class:image-target
  - urn:ngm:class:gps-coordinate
bridgesTo:
  - urn:ngm:class:geospatial-data
  - urn:ngm:class:semantic-spatial-web-layer
uses:
  - urn:ngm:class:point-cloud
  - urn:ngm:class:lidar
  - urn:ngm:class:ultra-wideband
  - urn:ngm:class:global-positioning-system
supports:
  - urn:ngm:class:mixed-reality
  - urn:ngm:class:metaverse
  - urn:ngm:class:location-based-services
standardizedBy:
  - urn:ngm:class:open-xr
  - urn:ngm:class:arcore
  - urn:ngm:class:arkit
relatedTo:
  - urn:ngm:class:world-locking-tools
  - urn:ngm:class:spatial-anchors
---

# Spatial Anchors

Spatial anchors are persistent, georeferenced coordinate frames that bind virtual content to specific physical locations, enabling augmented and mixed reality experiences to survive device handoffs, multi-user sessions, and temporal gaps between visits. They are constructed by fusing visual feature maps (point clouds or learned descriptors), inertial measurements, and optionally GPS or Ultra-Wideband signals to produce a stable six-degrees-of-freedom pose estimate within a real-world coordinate system. Platform-level implementations such as ARKit, ARCore, Azure Spatial Anchors, and OpenXR's XR_MSFT_spatial_anchor extension expose this capability through APIs that serialise anchor state for later relocalisation. The technology underpins cross-device shared AR, indoor navigation, and location-aware digital twins by ensuring that virtual overlays remain semantically and geometrically coupled to the objects and surfaces they annotate.
