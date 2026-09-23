---
okf_version: "0.2"
type: Class
title: Texture Atlas
resource: urn:ngm:class:texture-atlas
domain: spatial-computing
description: A texture atlas is a single large image that packs many smaller textures or sprites into one bitmap, accompanied by coordinate metadata mapping each sub-image to a region of the atlas. By consolidating textures, it lets a renderer draw many objects that share one bound texture, reducing state changes and draw calls and improving GPU efficiency in real-time graphics. UV coordinates of meshes are re
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:real-time-rendering
hasPart:
  - urn:ngm:class:uv-mapping
requires:
  - urn:ngm:class:gpu
  - urn:ngm:class:uv-mapping
enables:
  - urn:ngm:class:batching
  - urn:ngm:class:level-of-detail
uses:
  - urn:ngm:class:shader
  - urn:ngm:class:batching
supports:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:computer-graphics
partOf:
  - urn:ngm:class:game-engine
relatedTo:
  - urn:ngm:class:rendering
  - urn:ngm:class:shader
  - urn:ngm:class:spatial-computing
---

# Texture Atlas

A texture atlas is a single large image that packs many smaller textures or sprites into one bitmap, accompanied by coordinate metadata mapping each sub-image to a region of the atlas. By consolidating textures, it lets a renderer draw many objects that share one bound texture, reducing state changes and draw calls and improving GPU efficiency in real-time graphics. UV coordinates of meshes are remapped to address sub-regions within the atlas. It is widely used in game engines, 2D sprite rendering, and font glyph caching to optimise throughput on the graphics pipeline.
