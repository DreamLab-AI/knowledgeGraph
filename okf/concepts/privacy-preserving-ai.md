---
okf_version: "0.2"
type: Class
title: Privacy-Preserving AI
resource: urn:ngm:class:privacy-preserving-ai
domain: machine-learning
description: Privacy-Preserving AI is a family of machine-learning techniques and system architectures that enable models to be trained, validated, and deployed without exposing raw personal or sensitive data to any single party. Core mechanisms include federated learning, differential privacy, homomorphic encryption, and secure multi-party computation, each offering distinct trade-offs between privacy guarant
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:privacy-preserving
hasPart:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:homomorphic-encryption
  - urn:ngm:class:secure-multi-party-computation
  - urn:ngm:class:tee
requires:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:cryptography
  - urn:ngm:class:data-governance
enables:
  - urn:ngm:class:collaborative-systems-modality-learning
  - urn:ngm:class:data-minimisation
  - urn:ngm:class:regulatory-compliance
dependsOn:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:noise-mechanisms
contrastsWith:
  - urn:ngm:class:centralised-learning
  - urn:ngm:class:data-pooling
bridgesTo:
  - urn:ngm:class:healthcare-ai
  - urn:ngm:class:financial-ai
  - urn:ngm:class:edge-computing
uses:
  - urn:ngm:class:gradient-aggregation
  - urn:ngm:class:zero-knowledge-proof
supports:
  - urn:ngm:class:ai-governance
  - urn:ngm:class:trustworthy-ai
  - urn:ngm:class:ethical-ai
standardizedBy:
  - urn:ngm:class:nist-privacy-framework
  - urn:ngm:class:gdpr
relatedTo:
  - urn:ngm:class:model-inversion
  - urn:ngm:class:membership-inference
  - urn:ngm:class:responsible-ai
  - urn:ngm:class:model-inversion
  - urn:ngm:class:membership-inference
---

# Privacy-Preserving AI

Privacy-Preserving AI is a family of machine-learning techniques and system architectures that enable models to be trained, validated, and deployed without exposing raw personal or sensitive data to any single party. Core mechanisms include federated learning, differential privacy, homomorphic encryption, and secure multi-party computation, each offering distinct trade-offs between privacy guarantees, computational cost, and model utility. The discipline addresses regulatory requirements (GDPR, HIPAA) as well as ethical imperatives around data minimisation and individual autonomy. By decoupling learning from data centralisation, Privacy-Preserving AI enables collaborative intelligence across organisational and jurisdictional boundaries that would otherwise be closed to data sharing.
