---
okf_version: "0.2"
type: Class
title: Cut Mix
resource: urn:ngm:class:cut-mix
domain: spatial-computing
description: A data augmentation technique that creates training examples by cutting and pasting patches between images, with labels mixed proportionally to the patch areas. CutMix improves model robustness and localisation ability by forcing attention to less discriminative regions.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-content-and-assets
requires:
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:adversarial-robustness
  - urn:ngm:class:computer-vision
bridgesTo:
  - urn:ngm:class:computer-vision
uses:
  - urn:ngm:class:deep-learning
partOf:
  - urn:ngm:class:data-augmentation-strategies
---

# Cut Mix

A data augmentation technique that creates training examples by cutting and pasting patches between images, with labels mixed proportionally to the patch areas. CutMix improves model robustness and localisation ability by forcing attention to less discriminative regions.
