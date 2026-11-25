---
okf_version: "0.2"
type: Class
title: Volumetric Rendering
resource: urn:ngm:class:volumetric-rendering
domain: spatial-computing
description: Volumetric rendering is the process of producing images of three-dimensional density fields where light is absorbed, emitted, and scattered as it travels through a participating medium. Rather than rendering surfaces, it integrates radiance along rays passing through a volume, capturing effects such as smoke, clouds, fog, and translucent materials. The technique underlies medical visualisation, vi
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:rendering
hasPart:
  - urn:ngm:class:ray-marching
  - urn:ngm:class:voxel
enables:
  - urn:ngm:class:neural-radiance-fields
  - urn:ngm:class:medical-imaging
implements:
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:global-illumination
uses:
  - urn:ngm:class:point-cloud
  - urn:ngm:class:gpu
supports:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:cloud-rendering
partOf:
  - urn:ngm:class:computer-graphics
relatedTo:
  - urn:ngm:class:gaussian-splatting
  - urn:ngm:class:neural-radiance-fields
  - urn:ngm:class:ray-tracing
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Volumetric Rendering

Volumetric rendering is the process of producing images of three-dimensional density fields where light is absorbed, emitted, and scattered as it travels through a participating medium. Rather than rendering surfaces, it integrates radiance along rays passing through a volume, capturing effects such as smoke, clouds, fog, and translucent materials. The technique underlies medical visualisation, visual effects, and neural scene representations that store the world as a continuous volumetric function.
