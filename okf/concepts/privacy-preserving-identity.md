---
okf_version: "0.2"
type: Class
title: Privacy-Preserving Identity
resource: urn:ngm:class:privacy-preserving-identity
domain: security
description: Privacy-preserving identity refers to identity management architectures and protocols that enable individuals to prove attributes, credentials, or facts about themselves to verifiers without revealing unnecessary personal information, leveraging cryptographic techniques such as zero-knowledge proofs, selective disclosure, and unlinkable credentials. These systems reconcile strong authentication gu
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:digital-identity
requires:
  - urn:ngm:class:cryptographic-commitment
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:privacy-preserving-authentication
  - urn:ngm:class:identity-verification
  - urn:ngm:class:anonymous-credential
  - urn:ngm:class:age-verification
  - urn:ngm:class:self-sovereign-identity
dependsOn:
  - urn:ngm:class:decentralized-identity
  - urn:ngm:class:digital-identity-wallet
implements:
  - urn:ngm:class:w3-c-verifiable-credentials
  - urn:ngm:class:sd-jwt
  - urn:ngm:class:e-idas-2-0
contrastsWith:
  - urn:ngm:class:federated-identity
  - urn:ngm:class:centralised-identity
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:secure-multi-party-computation
uses:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:decentralized-identifiers
  - urn:ngm:class:bbs-signatures
  - urn:ngm:class:zk-snark
  - urn:ngm:class:tee
supports:
  - urn:ngm:class:gdpr-compliance
  - urn:ngm:class:kyc
standardizedBy:
  - urn:ngm:class:w3-c
  - urn:ngm:class:ietf
relatedTo:
  - urn:ngm:class:unlinkability
  - urn:ngm:class:data-minimisation
---

# Privacy-Preserving Identity

Privacy-preserving identity refers to identity management architectures and protocols that enable individuals to prove attributes, credentials, or facts about themselves to verifiers without revealing unnecessary personal information, leveraging cryptographic techniques such as zero-knowledge proofs, selective disclosure, and unlinkable credentials. These systems reconcile strong authentication guarantees with user privacy, countering surveillance by minimising the attack surface of identity data aggregation and preventing cross-context correlation of user activity. They are foundational to self-sovereign identity frameworks, anonymous credential schemes, hardware-backed identity wallets, and privacy-respecting regulatory compliance workflows. The field spans cryptographic research, standardisation bodies (W3C, IETF, ISO), and deployment infrastructure including secure enclaves and decentralised ledgers.
