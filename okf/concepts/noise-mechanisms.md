---
okf_version: "0.2"
type: Class
title: Noise Mechanisms
resource: urn:ngm:class:noise-mechanisms
domain: security
description: Noise mechanisms are the algorithmic primitives in differential privacy that add calibrated random perturbation to query results or data so that the contribution of any single individual is statistically masked. The amount of noise is calibrated to the query's sensitivity and the desired privacy budget, balancing privacy protection against the accuracy of released statistics. The principal mechani
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:differential-privacy
hasPart:
  - urn:ngm:class:laplace-mechanism
  - urn:ngm:class:gaussian-mechanism
requires:
  - urn:ngm:class:privacy-budget
enables:
  - urn:ngm:class:data-privacy
  - urn:ngm:class:privacy-preserving-technology
dependsOn:
  - urn:ngm:class:privacy-budget
  - urn:ngm:class:sensitivity
implements:
  - urn:ngm:class:differential-privacy
uses:
  - urn:ngm:class:laplace-mechanism
  - urn:ngm:class:gaussian-mechanism
supports:
  - urn:ngm:class:data-anonymization
partOf:
  - urn:ngm:class:differential-privacy
relatedTo:
  - urn:ngm:class:epsilon-differential-privacy
  - urn:ngm:class:noise-injection
---

# Noise Mechanisms

Noise mechanisms are the algorithmic primitives in differential privacy that add calibrated random perturbation to query results or data so that the contribution of any single individual is statistically masked. The amount of noise is calibrated to the query's sensitivity and the desired privacy budget, balancing privacy protection against the accuracy of released statistics. The principal mechanisms are the Laplace, Gaussian, and exponential mechanisms, each suited to particular query types and privacy definitions.
