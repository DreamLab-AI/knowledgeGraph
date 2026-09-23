---
okf_version: "0.2"
type: Class
title: ELECTRA
resource: urn:ngm:class:electra
domain: spatial-computing
description: ELECTRA (Efficiently Learning an Encoder that Classifies Token Replacements Accurately) is a transformer pre-training method that trains a discriminator to detect replaced tokens rather than reconstructing masked inputs, using a generator-discriminator architecture. This replaced token detection task utilises all positions in a sequence, yielding substantially greater sample efficiency than masked
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-content-and-assets
enables:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:machine-learning-model
contrastsWith:
  - urn:ngm:class:albert
  - urn:ngm:class:ro-berta
bridgesTo:
  - urn:ngm:class:computer-vision
uses:
  - urn:ngm:class:transformer
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:language-modeling
relatedTo:
  - urn:ngm:class:large-language-models
---

# ELECTRA

ELECTRA (Efficiently Learning an Encoder that Classifies Token Replacements Accurately) is a transformer pre-training method that trains a discriminator to detect replaced tokens rather than reconstructing masked inputs, using a generator-discriminator architecture. This replaced token detection task utilises all positions in a sequence, yielding substantially greater sample efficiency than masked language modelling with less than one quarter of the compute required by comparable models.
