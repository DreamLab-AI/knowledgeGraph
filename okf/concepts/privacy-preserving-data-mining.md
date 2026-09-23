---
okf_version: "0.2"
type: Class
title: Privacy Preserving Data Mining
resource: urn:ngm:class:privacy-preserving-data-mining
domain: artificial-intelligence
description: Privacy-Preserving Data Mining (PPDM) is a research field and collection of techniques that enable extraction of useful knowledge patterns—including association rules, classifiers, clusters, and outliers—from datasets while preventing disclosure of sensitive individual records. PPDM methods span data perturbation (noise addition, randomisation, synthetic data generation before mining), cryptograph
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-governance-and-ethics
requires:
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:secure-multi-party-computation
enables:
  - urn:ngm:class:privacy
  - urn:ngm:class:data-sharing
uses:
  - urn:ngm:class:synthetic-data
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:federated-learning
supports:
  - urn:ngm:class:data-protection
  - urn:ngm:class:homomorphic-encryption-for-machine-learning
relatedTo:
  - urn:ngm:class:membership-inference
  - urn:ngm:class:model-inversion
  - urn:ngm:class:pattern-recognition
  - urn:ngm:class:data-pipeline
---

# Privacy Preserving Data Mining

Privacy-Preserving Data Mining (PPDM) is a research field and collection of techniques that enable extraction of useful knowledge patterns—including association rules, classifiers, clusters, and outliers—from datasets while preventing disclosure of sensitive individual records. PPDM methods span data perturbation (noise addition, randomisation, synthetic data generation before mining), cryptographic protocols (secure multi-party computation for distributed pattern discovery, homomorphic encryption for encrypted operations), anonymisation transformations (k-anonymity, l-diversity, t-closeness applied before dataset release), and differential-privacy query mechanisms that inject calibrated noise into published pattern outputs. The field navigates an inherent privacy–utility trade-off: stronger privacy guarantees typically reduce pattern accuracy, and compositions of multiple analyses risk cumulative information leakage through inference and re-identification attacks.
