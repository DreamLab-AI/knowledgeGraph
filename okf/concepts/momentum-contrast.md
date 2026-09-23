---
okf_version: "0.2"
type: Class
title: Momentum Contrast
resource: urn:ngm:class:momentum-contrast
domain: artificial-intelligence
description: A self-supervised contrastive learning framework (MoCo) that maintains a dynamically updated queue of encoded negative samples and a momentum encoder — updated as an exponential moving average of the query encoder — to provide large, consistent dictionaries for contrastive loss computation without requiring large batch sizes.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-content-and-assets
enables:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:transfer-learning
dependsOn:
  - urn:ngm:class:neural-network
  - urn:ngm:class:training-data
contrastsWith:
  - urn:ngm:class:supervised-learning
uses:
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:deep-learning
---

# Momentum Contrast

A self-supervised contrastive learning framework (MoCo) that maintains a dynamically updated queue of encoded negative samples and a momentum encoder — updated as an exponential moving average of the query encoder — to provide large, consistent dictionaries for contrastive loss computation without requiring large batch sizes.
