---
okf_version: "0.2"
type: Class
title: Pseudonymisation
resource: urn:ngm:class:pseudonymisation
domain: artificial-intelligence
description: Pseudonymisation is a data de-identification technique, defined in GDPR Article 4(5), that processes personal data such that it can no longer be attributed to a specific data subject without additional information held separately under technical and organisational safeguards. It replaces direct identifiers—names, national identification numbers, email addresses—with pseudonyms such as tokens, encr
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-governance-and-ethics
requires:
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:cryptographic-hash-function
enables:
  - urn:ngm:class:data-minimisation
  - urn:ngm:class:privacy-preserving-data-mining
supports:
  - urn:ngm:class:ai-governance-and-ethics
  - urn:ngm:class:ai-fairness
relatedTo:
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:k-anonymity-in-datasets
  - urn:ngm:class:gdpr-compliance
  - urn:ngm:class:data-protection
  - urn:ngm:class:privacy-by-design
---

# Pseudonymisation

Pseudonymisation is a data de-identification technique, defined in GDPR Article 4(5), that processes personal data such that it can no longer be attributed to a specific data subject without additional information held separately under technical and organisational safeguards. It replaces direct identifiers—names, national identification numbers, email addresses—with pseudonyms such as tokens, encrypted identifiers, or keyed hashes, preserving data utility for analytics and machine learning while reducing but not eliminating re-identification risk. Unlike full anonymisation, pseudonymisation is reversible by an authorised party holding the supplementary mapping or key material.
