---
okf_version: "0.2"
type: Class
title: Colour Management
resource: urn:ngm:class:colour-management
domain: spatial-computing
description: Colour management is the controlled conversion of colour representations between the characteristics of different devices and media so that colours appear consistent across capture, display and output. It relies on device profiles that describe how a given device reproduces colour and a profile connection space to translate between them. In spatial computing and real-time rendering, colour managem
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:display-technology
hasPart:
  - urn:ngm:class:display-calibration
requires:
  - urn:ngm:class:display-calibration
enables:
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:physically-based-rendering
dependsOn:
  - urn:ngm:class:display-technology
contrastsWith:
  - urn:ngm:class:rendering
bridgesTo:
  - urn:ngm:class:augmented-reality
uses:
  - urn:ngm:class:shader
supports:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:virtual-production
relatedTo:
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:computer-graphics
  - urn:ngm:class:design-software
---

# Colour Management

Colour management is the controlled conversion of colour representations between the characteristics of different devices and media so that colours appear consistent across capture, display and output. It relies on device profiles that describe how a given device reproduces colour and a profile connection space to translate between them. In spatial computing and real-time rendering, colour management ensures perceptually accurate imagery across cameras, displays and headsets.
