---
okf_version: "0.2"
type: Class
title: Image Captioning
resource: urn:ngm:class:image-captioning
domain: artificial-intelligence
description: "Image captioning is the artificial-intelligence task of generating a natural-language description of the content of an image. It sits at the intersection of computer vision and natural-language generation, typically pairing a visual encoder that extracts image features with a language decoder that produces a fluent sentence. Modern systems use attention mechanisms and large vision-language models "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:computer-vision
requires:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:natural-language-processing
enables:
  - urn:ngm:class:accessibility
  - urn:ngm:class:scene-understanding
dependsOn:
  - urn:ngm:class:deep-learning
implements:
  - urn:ngm:class:natural-language-processing
contrastsWith:
  - urn:ngm:class:object-detection
bridgesTo:
  - urn:ngm:class:generative-ai
uses:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:transformer
supports:
  - urn:ngm:class:object-detection
partOf:
  - urn:ngm:class:computer-vision
relatedTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:object-detection
  - urn:ngm:class:generative-ai
  - urn:ngm:class:scene-understanding
---

# Image Captioning

Image captioning is the artificial-intelligence task of generating a natural-language description of the content of an image. It sits at the intersection of computer vision and natural-language generation, typically pairing a visual encoder that extracts image features with a language decoder that produces a fluent sentence. Modern systems use attention mechanisms and large vision-language models to ground the generated text in salient regions of the image.
