---
okf_version: "0.2"
type: Class
title: Tone Mapping
resource: urn:ngm:class:tone-mapping
domain: spatial-computing
description: An image processing operation that compresses the high dynamic range of luminance values captured or rendered in a scene into the limited range a display or print medium can reproduce, while preserving perceived contrast, detail, and colour appearance. Tone mapping operators range from simple global curves such as Reinhard and filmic ACES transforms to local, content-adaptive methods, and are a st
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:image-processing
enables:
  - urn:ngm:class:photorealism
partOf:
  - urn:ngm:class:colour-grading
  - urn:ngm:class:computational-photography
relatedTo:
  - urn:ngm:class:rendering
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Tone Mapping

An image processing operation that compresses the high dynamic range of luminance values captured or rendered in a scene into the limited range a display or print medium can reproduce, while preserving perceived contrast, detail, and colour appearance. Tone mapping operators range from simple global curves such as Reinhard and filmic ACES transforms to local, content-adaptive methods, and are a standard final stage in real-time rendering pipelines, HDR photography, and cinematic colour workflows.
