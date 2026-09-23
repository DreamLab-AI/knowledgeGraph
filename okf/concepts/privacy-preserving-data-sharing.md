---
okf_version: "0.2"
type: Class
title: Privacy Preserving Data Sharing
resource: urn:ngm:class:privacy-preserving-data-sharing
domain: data
description: Privacy Preserving Data Sharing (PPDS) encompasses the set of cryptographic, statistical, and algorithmic techniques that allow multiple parties to exchange, query, or jointly analyse data without disclosing raw sensitive records. Core mechanisms include differential privacy, secure multi-party computation, homomorphic encryption, federated learning, and synthetic data generation, each providing f
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:data-sharing
hasPart:
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:secure-multi-party-computation
  - urn:ngm:class:homomorphic-encryption
  - urn:ngm:class:synthetic-data-generation
  - urn:ngm:class:federated-learning
requires:
  - urn:ngm:class:cryptographic-protocols
  - urn:ngm:class:trust-models
enables:
  - urn:ngm:class:distributed-ai-training
  - urn:ngm:class:collaborative-analytics
  - urn:ngm:class:data-clean-rooms
  - urn:ngm:class:distributed-ai-training
dependsOn:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:trusted-execution-environments
  - urn:ngm:class:zero-knowledge-proof
implements:
  - urn:ngm:class:gdpr
  - urn:ngm:class:hipaa
contrastsWith:
  - urn:ngm:class:anonymisation
  - urn:ngm:class:data-masking
  - urn:ngm:class:anonymisation
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:federated-learning
  - urn:ngm:class:blockchain-data-sharing
uses:
  - urn:ngm:class:noise-mechanisms
  - urn:ngm:class:access-control
supports:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:data-monetisation
partOf:
  - urn:ngm:class:data-governance
relatedTo:
  - urn:ngm:class:information-security
  - urn:ngm:class:data-minimisation
  - urn:ngm:class:consent-management
---

# Privacy Preserving Data Sharing

Privacy Preserving Data Sharing (PPDS) encompasses the set of cryptographic, statistical, and algorithmic techniques that allow multiple parties to exchange, query, or jointly analyse data without disclosing raw sensitive records. Core mechanisms include differential privacy, secure multi-party computation, homomorphic encryption, federated learning, and synthetic data generation, each providing formal or empirical guarantees that individual-level information cannot be inferred. PPDS enables collaborative analytics, AI model training, and regulatory reporting across organisational and jurisdictional boundaries while satisfying privacy regulations such as GDPR and HIPAA. It is a foundational discipline at the intersection of cryptography, distributed systems, and machine learning, increasingly deployed in healthcare, finance, and cross-industry data-sharing consortia.
