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
  - urn:ngm:class:machine-learning
enables:
  - urn:ngm:class:right-to-erasure
  - urn:ngm:class:data-privacy
relatedTo:
  - urn:ngm:class:continual-learning
  - urn:ngm:class:federated-learning
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Machine Unlearning

A family of techniques for removing the influence of specific training examples from an already-trained machine learning model without retraining it from scratch, so that the resulting model behaves as if the deleted data had never been seen; motivated by privacy law (the right to erasure), copyright disputes, data poisoning remediation, and the removal of hazardous capabilities from foundation models.
