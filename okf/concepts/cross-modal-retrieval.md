---
okf_version: "0.2"
type: Class
title: Cross Modal Retrieval
resource: urn:ngm:class:cross-modal-retrieval
domain: artificial-intelligence
description: Cross-modal retrieval is the task of retrieving items in one modality (such as images) using a query expressed in a different modality (such as text), and vice versa. It relies on learning a shared embedding space in which semantically corresponding items across modalities lie close together, so that similarity search can bridge the modality gap. Contrastive vision-language models are the dominant
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:information-retrieval
requires:
  - urn:ngm:class:representation-learning
enables:
  - urn:ngm:class:semantic-search
  - urn:ngm:class:text-to-image
dependsOn:
  - urn:ngm:class:embedding
implements:
  - urn:ngm:class:information-retrieval
contrastsWith:
  - urn:ngm:class:semantic-search
bridgesTo:
  - urn:ngm:class:clip
uses:
  - urn:ngm:class:embedding
  - urn:ngm:class:vector-search
  - urn:ngm:class:contrastive-learning
supports:
  - urn:ngm:class:vision-language-model
partOf:
  - urn:ngm:class:information-retrieval
relatedTo:
  - urn:ngm:class:clip
  - urn:ngm:class:vision-language-model
  - urn:ngm:class:vector-search
---

# Cross Modal Retrieval

Cross-modal retrieval is the task of retrieving items in one modality (such as images) using a query expressed in a different modality (such as text), and vice versa. It relies on learning a shared embedding space in which semantically corresponding items across modalities lie close together, so that similarity search can bridge the modality gap. Contrastive vision-language models are the dominant approach, enabling text-to-image search, image captioning retrieval and multimodal recommendation.
