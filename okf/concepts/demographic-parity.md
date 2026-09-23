---
okf_version: "0.2"
type: Class
title: Demographic Parity
resource: urn:ngm:class:demographic-parity
domain: artificial-intelligence
description: "Demographic parity is a group-fairness criterion requiring that a model's positive prediction rate be equal across protected groups, independent of the true label. Also called statistical parity, it is satisfied when the probability of a favourable decision does not depend on membership of a protected attribute such as gender or ethnicity. It is one of several formal, often mutually incompatible, "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:algorithmic-fairness
hasPart:
  - urn:ngm:class:classification
requires:
  - urn:ngm:class:model-evaluation
dependsOn:
  - urn:ngm:class:classification
implements:
  - urn:ngm:class:algorithmic-fairness
contrastsWith:
  - urn:ngm:class:accuracy
bridgesTo:
  - urn:ngm:class:disparate-impact
uses:
  - urn:ngm:class:model-evaluation
supports:
  - urn:ngm:class:fairness
partOf:
  - urn:ngm:class:fairness
relatedTo:
  - urn:ngm:class:disparate-impact
  - urn:ngm:class:bias
  - urn:ngm:class:responsible-ai
  - urn:ngm:class:transparency
---

# Demographic Parity

Demographic parity is a group-fairness criterion requiring that a model's positive prediction rate be equal across protected groups, independent of the true label. Also called statistical parity, it is satisfied when the probability of a favourable decision does not depend on membership of a protected attribute such as gender or ethnicity. It is one of several formal, often mutually incompatible, definitions of algorithmic fairness.
