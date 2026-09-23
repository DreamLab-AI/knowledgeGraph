---
okf_version: "0.2"
type: Class
title: Spherical Harmonics
resource: urn:ngm:class:spherical-harmonics
domain: spatial-computing
description: Spherical harmonics are a complete set of orthogonal basis functions defined on the surface of a sphere, used to represent functions of direction compactly as a weighted sum of coefficients. Analogous to a Fourier series on the sphere, they allow smooth angular functions — such as incoming light or a directional colour — to be approximated with a small number of low-order coefficients. In computer
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:computer-graphics
supports:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:neural-rendering
relatedTo:
  - urn:ngm:class:gaussian-splatting
  - urn:ngm:class:rendering-pipeline
---

# Spherical Harmonics

Spherical harmonics are a complete set of orthogonal basis functions defined on the surface of a sphere, used to represent functions of direction compactly as a weighted sum of coefficients. Analogous to a Fourier series on the sphere, they allow smooth angular functions — such as incoming light or a directional colour — to be approximated with a small number of low-order coefficients. In computer graphics they underpin precomputed radiance transfer, irradiance environment lighting, and, more recently, view-dependent colour in Gaussian splatting and neural rendering.
