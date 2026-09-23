---
okf_version: "0.2"
type: Class
title: Differential Privacy
resource: urn:ngm:class:differential-privacy
domain: artificial-intelligence
description: Differential Privacy is a mathematical framework providing provable privacy guarantees by adding carefully calibrated noise to data queries or model outputs, ensuring that the presence or absence of any single individual's data has negligible impact on analysis results. The epsilon (ε) parameter quantifies the privacy budget, with smaller values indicating stronger guarantees.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:privacy-enhancing-technologies
  - urn:ngm:class:ai-safety-technique
hasPart:
  - urn:ngm:class:laplace-mechanism
  - urn:ngm:class:gaussian-mechanism
  - urn:ngm:class:privacy-budget-management
  - urn:ngm:class:exponential-mechanism
  - urn:ngm:class:composition-theorems
  - urn:ngm:class:r-nyi-differential-privacy
  - urn:ngm:class:dp-sgd
  - urn:ngm:class:local-differential-privacy
  - urn:ngm:class:shuffle-model
requires:
  - urn:ngm:class:sensitivity-analysis
  - urn:ngm:class:noise-calibration
  - urn:ngm:class:privacy-accountant
  - urn:ngm:class:query-mechanism
enables:
  - urn:ngm:class:privacy-by-design
  - urn:ngm:class:federated-edge-learning
  - urn:ngm:class:privacy-preserving-machine-learning
  - urn:ngm:class:federated-learning
  - urn:ngm:class:differentially-private-analytics
  - urn:ngm:class:synthetic-data-generation
  - urn:ngm:class:private-empirical-risk-minimisation
dependsOn:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:stochastic-processes
  - urn:ngm:class:information-theory
  - urn:ngm:class:cryptography
implements:
  - urn:ngm:class:privacy-mechanism
  - urn:ngm:class:formal-privacy-guarantee
  - urn:ngm:class:statistical-disclosure-limitation
contrastsWith:
  - urn:ngm:class:k-anonymity-in-datasets
  - urn:ngm:class:anonymisation
  - urn:ngm:class:k-anonymity-in-datasets
  - urn:ngm:class:anonymisation
  - urn:ngm:class:l-diversity
  - urn:ngm:class:t-closeness
  - urn:ngm:class:pseudonymisation
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:statistical-query-model
  - urn:ngm:class:random-noise
supports:
  - urn:ngm:class:gdpr-compliance
  - urn:ngm:class:data-protection
  - urn:ngm:class:data-minimisation
  - urn:ngm:class:ai-governance
  - urn:ngm:class:nhs-data-security
  - urn:ngm:class:data-use-and-access-act-2025
standardizedBy:
  - urn:ngm:class:national-institute-of-standards-and-technology
  - urn:ngm:class:ico-privacy-enhancing-technologies-guidance
relatedTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:homomorphic-encryption
  - urn:ngm:class:secure-multi-party-computation
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:tee
  - urn:ngm:class:synthetic-data
  - urn:ngm:class:apple-differential-privacy
  - urn:ngm:class:u-s-census-2020
---

# Differential Privacy

Differential Privacy is a mathematical framework providing provable privacy guarantees by adding carefully calibrated noise to data queries or model outputs, ensuring that the presence or absence of any single individual's data has negligible impact on analysis results. The epsilon (ε) parameter quantifies the privacy budget, with smaller values indicating stronger guarantees.
