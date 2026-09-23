---
okf_version: "0.2"
type: Class
title: Sybil Resistance
resource: urn:ngm:class:sybil-resistance
domain: blockchain
description: Sybil resistance is a security property of distributed and decentralised networks that constrains the ability of a single adversary to gain disproportionate influence by fabricating multiple pseudonymous or fake identities. The property is foundational to any permissionless system where voting power, reputation, resource allocation, or participation rights are tied to the concept of a unique parti
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
requires:
  - urn:ngm:class:identity-verification
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:cryptographic-proof
enables:
  - urn:ngm:class:decentralised-governance
  - urn:ngm:class:quadratic-voting
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:fair-airdrop
dependsOn:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:distributed-ledger
contrastsWith:
  - urn:ngm:class:sybil-attack
  - urn:ngm:class:eclipse-attack
  - urn:ngm:class:51-attack
bridgesTo:
  - urn:ngm:class:bot-detection
  - urn:ngm:class:federated-learning-poisoning-defence
  - urn:ngm:class:ai-alignment-mechanism-design
uses:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:trust-graph
  - urn:ngm:class:biometric-authentication
relatedTo:
  - urn:ngm:class:humanity-attestation
  - urn:ngm:class:reputation-system
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:proof-of-personhood
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:web-of-trust
  - urn:ngm:class:verifiable-credential-vc
---

# Sybil Resistance

Sybil resistance is a security property of distributed and decentralised networks that constrains the ability of a single adversary to gain disproportionate influence by fabricating multiple pseudonymous or fake identities. The property is foundational to any permissionless system where voting power, reputation, resource allocation, or participation rights are tied to the concept of a unique participant. Mechanisms achieving sybil resistance range from resource-binding consensus protocols — proof-of-work and proof-of-stake — to cryptographic proof-of-personhood schemes and social trust-graph analysis, each balancing security guarantees against privacy requirements.
