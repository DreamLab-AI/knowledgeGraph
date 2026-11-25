---
okf_version: "0.2"
type: Class
title: Binaural Audio
resource: urn:ngm:class:binaural-audio
domain: spatial-computing
description: Binaural audio is two-channel sound designed to reproduce the directional and spatial cues a listener would experience naturally, delivering an immersive three-dimensional image over headphones. It can be captured with a dummy head or in-ear microphones, or synthesised by convolving sources with head-related transfer functions. By preserving interaural time and level differences and pinna spectral
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:spatial-audio
hasPart:
  - urn:ngm:class:head-related-transfer-function
requires:
  - urn:ngm:class:digital-signal-processor
enables:
  - urn:ngm:class:immersive-audio
implements:
  - urn:ngm:class:spatial-audio
uses:
  - urn:ngm:class:digital-signal-processing
  - urn:ngm:class:signal-processing
supports:
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:immersive-audio
partOf:
  - urn:ngm:class:spatial-audio
relatedTo:
  - urn:ngm:class:ambisonics
  - urn:ngm:class:microphone-array
  - urn:ngm:class:audio-system
  - urn:ngm:class:audio-codec
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Binaural Audio

Binaural audio is two-channel sound designed to reproduce the directional and spatial cues a listener would experience naturally, delivering an immersive three-dimensional image over headphones. It can be captured with a dummy head or in-ear microphones, or synthesised by convolving sources with head-related transfer functions. By preserving interaural time and level differences and pinna spectral cues, binaural audio conveys not just left-right panning but full surrounding placement including elevation.
