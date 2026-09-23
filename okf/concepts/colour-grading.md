---
okf_version: "0.2"
type: Class
title: Colour Grading
resource: urn:ngm:class:colour-grading
domain: spatial-computing
description: Colour grading is the post-production process of altering and enhancing the colour, contrast, and tonal qualities of a moving image or rendered frame to establish a consistent look and convey mood. It builds on basic colour correction — which neutralises exposure and white-balance errors — by applying creative adjustments such as curves, lift-gamma-gain controls, and secondary qualifiers that isol
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:post-processing
hasPart:
  - urn:ngm:class:tone-mapping
  - urn:ngm:class:colour-correction
requires:
  - urn:ngm:class:rendering
  - urn:ngm:class:gpu-rendering
enables:
  - urn:ngm:class:photorealism
  - urn:ngm:class:visual-effects
uses:
  - urn:ngm:class:shader
  - urn:ngm:class:texture-mapping
supports:
  - urn:ngm:class:hdr
partOf:
  - urn:ngm:class:post-processing
  - urn:ngm:class:film-production
relatedTo:
  - urn:ngm:class:computer-graphics
  - urn:ngm:class:physically-based-rendering
---

# Colour Grading

Colour grading is the post-production process of altering and enhancing the colour, contrast, and tonal qualities of a moving image or rendered frame to establish a consistent look and convey mood. It builds on basic colour correction — which neutralises exposure and white-balance errors — by applying creative adjustments such as curves, lift-gamma-gain controls, and secondary qualifiers that isolate specific hues or regions. In real-time rendering and virtual production the grade is frequently applied as a post-processing pass using look-up tables and tone-mapping operators so interactive scenes match the intended cinematic aesthetic.
