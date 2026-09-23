---
okf_version: "0.2"
type: Class
title: Model Cards
resource: urn:ngm:class:model-cards
domain: machine-learning
description: Model Cards are short structured documents that accompany a trained machine learning model, reporting its intended uses, out-of-scope uses, training and evaluation data characteristics, disaggregated performance metrics across demographic groups, known limitations, and ethical considerations. Introduced by Mitchell et al. (2019) at Google, they standardise transparency disclosures so that develope
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:responsible-ai
hasPart:
  - urn:ngm:class:performance-metrics
  - urn:ngm:class:fairness
  - urn:ngm:class:training-data-documentation
  - urn:ngm:class:intended-use-statement
  - urn:ngm:class:fairness
requires:
  - urn:ngm:class:transparency
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:metadata
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:metadata
enables:
  - urn:ngm:class:accountability
  - urn:ngm:class:algorithmic-auditing
  - urn:ngm:class:informed-consent
  - urn:ngm:class:ai-risk-assessment
contrastsWith:
  - urn:ngm:class:datasheets-for-datasets
  - urn:ngm:class:system-cards
bridgesTo:
  - urn:ngm:class:ai-governance
  - urn:ngm:class:regulatory-compliance
partOf:
  - urn:ngm:class:ai-documentation-standards
  - urn:ngm:class:model-governance
  - urn:ngm:class:ai-documentation-standards
relatedTo:
  - urn:ngm:class:fairness-in-machine-learning
  - urn:ngm:class:explainability
  - urn:ngm:class:data-governance
  - urn:ngm:class:model-registry
---

# Model Cards

Model Cards are short structured documents that accompany a trained machine learning model, reporting its intended uses, out-of-scope uses, training and evaluation data characteristics, disaggregated performance metrics across demographic groups, known limitations, and ethical considerations. Introduced by Mitchell et al. (2019) at Google, they standardise transparency disclosures so that developers, deployers, and affected communities can judge whether a model is appropriate for a given context. Model Cards serve as a communication artefact bridging technical model documentation to governance, fairness auditing, and regulatory compliance workflows.
