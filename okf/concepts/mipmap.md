---
okf_version: "0.2"
type: Class
title: Mipmap
resource: urn:ngm:class:mipmap
domain: spatial-computing
description: A precomputed pyramid of progressively half-resolution versions of a texture image, from full size down to a single texel, from which the graphics pipeline selects (and trilinearly blends between) the level whose texel density best matches the on-screen footprint of the surface being shaded; introduced by Lance Williams in 1983, mipmapping eliminates minification aliasing and shimmer, improves tex
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:texture-map
enables:
  - urn:ngm:class:foveated-rendering
partOf:
  - urn:ngm:class:texture-mapping
relatedTo:
  - urn:ngm:class:texture-compression
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Mipmap

A precomputed pyramid of progressively half-resolution versions of a texture image, from full size down to a single texel, from which the graphics pipeline selects (and trilinearly blends between) the level whose texel density best matches the on-screen footprint of the surface being shaded; introduced by Lance Williams in 1983, mipmapping eliminates minification aliasing and shimmer, improves texture-cache coherence, and costs only one third more memory than the base image.
