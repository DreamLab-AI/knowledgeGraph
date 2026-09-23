---
okf_version: "0.2"
type: Class
title: Noise Function
resource: urn:ngm:class:noise-function
domain: spatial-computing
description: A Noise Function is a deterministic pseudo-random function that maps spatial coordinates to smoothly varying scalar values, providing the controllable randomness behind procedural content. Gradient-based variants such as Perlin and Simplex noise produce coherent, band-limited fields that can be layered into fractal octaves to synthesise terrain, clouds, and textures. Because output depends only on
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:procedural-generation
hasPart:
  - urn:ngm:class:interpolation
enables:
  - urn:ngm:class:procedural-generation
  - urn:ngm:class:shader
implements:
  - urn:ngm:class:gpu-computing
bridgesTo:
  - urn:ngm:class:random-number-generation
uses:
  - urn:ngm:class:random-number-generation
  - urn:ngm:class:interpolation
supports:
  - urn:ngm:class:procedural-generation
partOf:
  - urn:ngm:class:spatial-computing
relatedTo:
  - urn:ngm:class:shader
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:interpolation
---

# Noise Function

A Noise Function is a deterministic pseudo-random function that maps spatial coordinates to smoothly varying scalar values, providing the controllable randomness behind procedural content. Gradient-based variants such as Perlin and Simplex noise produce coherent, band-limited fields that can be layered into fractal octaves to synthesise terrain, clouds, and textures. Because output depends only on input coordinates and a seed, noise functions are reproducible and efficiently evaluable on the GPU.
