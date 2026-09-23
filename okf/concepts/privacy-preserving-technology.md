---
okf_version: "0.2"
type: Class
title: Privacy Preserving Technology
resource: urn:ngm:class:privacy-preserving-technology
domain: security
description: Privacy Preserving Technology (PPT) is the family of cryptographic and computational methods that enable analysis, sharing, and machine learning on sensitive data without exposing raw individual records. Core paradigms include differential privacy (injecting calibrated noise into query outputs), federated learning (training models across distributed silos without centralising data), homomorphic en
maturity: emerging
quality: 0.74
is-a:
  - urn:ngm:class:infra-security-and-identity
hasPart:
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:federated-learning
  - urn:ngm:class:homomorphic-encryption
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:secure-multi-party-computation
  - urn:ngm:class:tee
requires:
  - urn:ngm:class:cryptography
  - urn:ngm:class:cryptographic-infrastructure
enables:
  - urn:ngm:class:privacy-by-design
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:confidential-computing
  - urn:ngm:class:consent-management
dependsOn:
  - urn:ngm:class:noise-mechanisms
  - urn:ngm:class:elliptic-curve-cryptography
contrastsWith:
  - urn:ngm:class:anonymisation
  - urn:ngm:class:pseudonymisation
  - urn:ngm:class:anonymisation
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:machine-learning-security
  - urn:ngm:class:blockchain
  - urn:ngm:class:marketplace
  - urn:ngm:class:marketplace
supports:
  - urn:ngm:class:data-governance
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:data-minimisation
relatedTo:
  - urn:ngm:class:gdpr
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:data-protection
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:data-protection
---

# Privacy Preserving Technology

Privacy Preserving Technology (PPT) is the family of cryptographic and computational methods that enable analysis, sharing, and machine learning on sensitive data without exposing raw individual records. Core paradigms include differential privacy (injecting calibrated noise into query outputs), federated learning (training models across distributed silos without centralising data), homomorphic encryption (computing directly on ciphertext), secure multi-party computation (joint computation among mutually distrusting parties), and zero-knowledge proofs (demonstrating a statement's truth without revealing the witness). Together these techniques form the technical foundation for privacy-by-design engineering under regulatory regimes such as GDPR, CCPA, and the EU AI Act, and are increasingly integral to trusted AI pipelines, healthcare analytics, and decentralised identity systems.
