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
  - urn:ngm:class:machine-learning-discipline-model
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
  - urn:ngm:class:large-language-model
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# ELECTRA

ELECTRA (Efficiently Learning an Encoder that Classifies Token Replacements Accurately) is a transformer pre-training method that trains a discriminator to detect replaced tokens rather than reconstructing masked inputs, using a generator-discriminator architecture. This replaced token detection task utilises all positions in a sequence, yielding substantially greater sample efficiency than masked language modelling with less than one quarter of the compute required by comparable models.
