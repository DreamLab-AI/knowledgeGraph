---
okf_version: "0.2"
type: Class
title: Depth Map
resource: urn:ngm:class:depth-map
domain: spatial-computing
description: A depth map is a per-pixel image in which each value encodes the distance from the camera to the corresponding point in the scene rather than its colour. It provides the 2.5D geometric structure needed to reconstruct surfaces, segment foreground from background and place virtual content in spatial computing. Depth maps are produced by stereo matching, structured light, time-of-flight sensing or le
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:computer-vision
hasPart:
  - urn:ngm:class:point-cloud
requires:
  - urn:ngm:class:depth-sensing
enables:
  - urn:ngm:class:point-cloud
  - urn:ngm:class:volumetric-video
bridgesTo:
  - urn:ngm:class:computer-graphics
uses:
  - urn:ngm:class:stereo-vision
  - urn:ngm:class:structured-light
  - urn:ngm:class:lidar
supports:
  - urn:ngm:class:spatial-computing
partOf:
  - urn:ngm:class:computer-vision
relatedTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:stereo-vision
  - urn:ngm:class:volumetric-video
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Depth Map

A depth map is a per-pixel image in which each value encodes the distance from the camera to the corresponding point in the scene rather than its colour. It provides the 2.5D geometric structure needed to reconstruct surfaces, segment foreground from background and place virtual content in spatial computing. Depth maps are produced by stereo matching, structured light, time-of-flight sensing or learned monocular estimation.
