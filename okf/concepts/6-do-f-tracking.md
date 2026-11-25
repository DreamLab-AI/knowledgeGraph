---
okf_version: "0.2"
type: Class
title: 6DoF Tracking
resource: urn:ngm:class:6-do-f-tracking
domain: spatial-computing
description: 6DoF (Six Degrees of Freedom) Tracking is the measurement and continuous estimation of an object's complete rigid-body pose in three-dimensional space, encompassing three translational components (x, y, z position) and three rotational components (pitch, yaw, roll orientation). It is the foundational capability for XR headsets, controllers, and spatial computing devices to understand and respond t
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:simultaneous-localisation-and-mapping
enables:
  - urn:ngm:class:xr-applications
  - urn:ngm:class:ar-registration
  - urn:ngm:class:3-d-perception
uses:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:imu
  - urn:ngm:class:simultaneous-localisation-and-mapping
relatedTo:
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:camera-tracking
  - urn:ngm:class:depth-sensing
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# 6DoF Tracking

6DoF (Six Degrees of Freedom) Tracking is the measurement and continuous estimation of an object's complete rigid-body pose in three-dimensional space, encompassing three translational components (x, y, z position) and three rotational components (pitch, yaw, roll orientation). It is the foundational capability for XR headsets, controllers, and spatial computing devices to understand and respond to the user's physical motion with sub-millimetre accuracy and minimal latency. 6DoF tracking is achieved through sensor fusion of inertial measurement units, camera-based visual odometry, and optionally external beacons or reference markers.
