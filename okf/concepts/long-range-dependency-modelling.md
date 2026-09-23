---
okf_version: "0.2"
type: Class
title: Long Range Dependency Modelling
resource: urn:ngm:class:long-range-dependency-modelling
domain: machine-learning
description: Long range dependency modelling is the capability of a sequence model to capture relationships between elements that are far apart in a sequence, such as tokens separated by thousands of positions. Recurrent architectures struggle with this because gradients vanish over long horizons, whereas attention mechanisms and structured state-space models provide direct or efficient paths between distant e
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:attention-mechanism
requires:
  - urn:ngm:class:positional-encoding
enables:
  - urn:ngm:class:context-window
implements:
  - urn:ngm:class:attention-mechanism
contrastsWith:
  - urn:ngm:class:recurrent-neural-network
bridgesTo:
  - urn:ngm:class:state-space-model
uses:
  - urn:ngm:class:self-attention
  - urn:ngm:class:multi-head-attention
  - urn:ngm:class:positional-encoding
supports:
  - urn:ngm:class:transformer
partOf:
  - urn:ngm:class:attention-mechanism
relatedTo:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:state-space-model
  - urn:ngm:class:transformer
---

# Long Range Dependency Modelling

Long range dependency modelling is the capability of a sequence model to capture relationships between elements that are far apart in a sequence, such as tokens separated by thousands of positions. Recurrent architectures struggle with this because gradients vanish over long horizons, whereas attention mechanisms and structured state-space models provide direct or efficient paths between distant elements. Effective long range modelling is essential for tasks where context far from the current position determines the output.
