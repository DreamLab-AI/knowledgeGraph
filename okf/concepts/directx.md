---
okf_version: "0.2"
type: Class
title: DirectX
resource: urn:ngm:class:directx
domain: spatial-computing
description: DirectX is a collection of application programming interfaces developed by Microsoft for handling multimedia tasks, especially graphics and gaming, on Windows and Xbox platforms. Its Direct3D component provides low-level access to graphics hardware for real-time rendering, while related APIs cover input, audio and compute. By abstracting diverse hardware behind a common interface, it lets develope
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:graphics-api
hasPart:
  - urn:ngm:class:rendering-pipeline
requires:
  - urn:ngm:class:graphics-processing-unit
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:game-development
implements:
  - urn:ngm:class:graphics-api
contrastsWith:
  - urn:ngm:class:vulkan
uses:
  - urn:ngm:class:hlsl
  - urn:ngm:class:gpu-computing
supports:
  - urn:ngm:class:graphics-pipeline
  - urn:ngm:class:rendering-engine
relatedTo:
  - urn:ngm:class:microsoft
  - urn:ngm:class:gaming
  - urn:ngm:class:visual-effects
---

# DirectX

DirectX is a collection of application programming interfaces developed by Microsoft for handling multimedia tasks, especially graphics and gaming, on Windows and Xbox platforms. Its Direct3D component provides low-level access to graphics hardware for real-time rendering, while related APIs cover input, audio and compute. By abstracting diverse hardware behind a common interface, it lets developers target a wide range of GPUs through a single programming model.
