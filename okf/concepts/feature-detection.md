---
okf_version: "0.2"
type: Class
title: Feature Detection
resource: urn:ngm:class:feature-detection
domain: infrastructure
description: Feature detection is the programmatic technique of querying a runtime environment to determine whether a specific capability, API, or behaviour is available before invoking it, rather than inferring support from user-agent strings or version numbers. In computer vision, it also denotes the algorithmic identification of salient points, edges, or regions within images that carry discriminative infor
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:runtime-inspection
requires:
  - urn:ngm:class:sensor-data
enables:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:object-detection
  - urn:ngm:class:graceful-degradation
  - urn:ngm:class:image-segmentation
  - urn:ngm:class:augmented-reality-tracking
dependsOn:
  - urn:ngm:class:signal-processing
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:robotics
uses:
  - urn:ngm:class:runtime-environment
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:image-processing
supports:
  - urn:ngm:class:computer-vision-system
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:web-xr
relatedTo:
  - urn:ngm:class:machine-learning
  - urn:ngm:class:neural-network
  - urn:ngm:class:edge-detection
  - urn:ngm:class:corner-detection
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:point-cloud
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Feature Detection

Feature detection is the programmatic technique of querying a runtime environment to determine whether a specific capability, API, or behaviour is available before invoking it, rather than inferring support from user-agent strings or version numbers. In computer vision, it also denotes the algorithmic identification of salient points, edges, or regions within images that carry discriminative information for downstream tasks.
