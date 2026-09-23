---
okf_version: "0.2"
type: Class
title: k-Anonymity in Datasets
resource: urn:ngm:class:k-anonymity-in-datasets
domain: artificial-intelligence
description: k-Anonymity is a dataset privacy property that guarantees each record is indistinguishable from at least k-1 other records with respect to quasi-identifier attributes—fields such as age, gender, and postal code that can be combined to re-identify individuals. Anonymization is achieved through generalisation (replacing specific values with broader categories) and suppression (removing highly identi
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:privacy-preserving-analytics
requires:
  - urn:ngm:class:data-anonymization-pipeline
  - urn:ngm:class:data-governance
enables:
  - urn:ngm:class:privacy-preserving-data-sharing
  - urn:ngm:class:gdpr-compliance
contrastsWith:
  - urn:ngm:class:homomorphic-encryption
  - urn:ngm:class:federated-learning
uses:
  - urn:ngm:class:synthetic-data-generation
relatedTo:
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:synthetic-data
  - urn:ngm:class:privacy-preserving-analytics
  - urn:ngm:class:data-protection
  - urn:ngm:class:privacy-mechanism
---

# k-Anonymity in Datasets

k-Anonymity is a dataset privacy property that guarantees each record is indistinguishable from at least k-1 other records with respect to quasi-identifier attributes—fields such as age, gender, and postal code that can be combined to re-identify individuals. Anonymization is achieved through generalisation (replacing specific values with broader categories) and suppression (removing highly identifying records), producing equivalence classes where all members share identical quasi-identifier values.
