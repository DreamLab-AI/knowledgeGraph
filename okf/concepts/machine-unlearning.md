---
okf_version: "0.2"
type: Class
title: Machine Unlearning
resource: urn:ngm:class:machine-unlearning
domain: machine-learning
description: A family of techniques for removing the influence of specific training examples from an already-trained machine learning model without retraining it from scratch, so that the resulting model behaves as if the deleted data had never been seen; motivated by privacy law (the right to erasure), copyright disputes, data poisoning remediation, and the removal of hazardous capabilities from foundation mo
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:machine-learning-discipline
enables:
  - urn:ngm:class:right-to-erasure
  - urn:ngm:class:data-privacy
relatedTo:
  - urn:ngm:class:continual-learning
  - urn:ngm:class:federated-learning
---

# Machine Unlearning

A family of techniques for removing the influence of specific training examples from an already-trained machine learning model without retraining it from scratch, so that the resulting model behaves as if the deleted data had never been seen; motivated by privacy law (the right to erasure), copyright disputes, data poisoning remediation, and the removal of hazardous capabilities from foundation models.
