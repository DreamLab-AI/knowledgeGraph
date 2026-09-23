---
okf_version: "0.2"
type: Class
title: Cryptographic Security
resource: urn:ngm:class:cryptographic-security
domain: security
description: Cryptographic Security is the discipline of applying mathematical cryptographic primitives and protocols — including symmetric encryption, asymmetric public-key cryptography, cryptographic hash functions, digital signatures, message authentication codes, and zero-knowledge proofs — to enforce confidentiality, integrity, authenticity, and non-repudiation of information and communications. It provid
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:infra-security-and-identity
hasPart:
  - urn:ngm:class:encryption
  - urn:ngm:class:digital-signature
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:hash-function
  - urn:ngm:class:key-management
  - urn:ngm:class:message-authentication-code
requires:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:random-number-generation
  - urn:ngm:class:hardware-security-module
enables:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:secure-multi-party-computation
  - urn:ngm:class:digital-identity
  - urn:ngm:class:privacy-preserving-computation
contrastsWith:
  - urn:ngm:class:post-quantum-cryptography
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:federated-learning
  - urn:ngm:class:decentralised-identity
supports:
  - urn:ngm:class:blockchain
  - urn:ngm:class:privacy-framework
  - urn:ngm:class:decentralised-application
  - urn:ngm:class:tls
standardizedBy:
  - urn:ngm:class:nist
  - urn:ngm:class:ietf
  - urn:ngm:class:iso-iec
relatedTo:
  - urn:ngm:class:network-security
  - urn:ngm:class:access-control
  - urn:ngm:class:threat-model
---

# Cryptographic Security

Cryptographic Security is the discipline of applying mathematical cryptographic primitives and protocols — including symmetric encryption, asymmetric public-key cryptography, cryptographic hash functions, digital signatures, message authentication codes, and zero-knowledge proofs — to enforce confidentiality, integrity, authenticity, and non-repudiation of information and communications. It provides the formal security guarantees upon which trustless distributed systems, secure channels, identity frameworks, and privacy-preserving computation are constructed. The field spans both theoretical hardness assumptions (discrete logarithm, integer factorisation, lattice problems) and practical protocol engineering, encompassing key management, certificate infrastructure, and post-quantum cryptographic migration. In applied contexts it underpins everything from TLS transport security and blockchain transaction authorisation to hardware security modules and secure multi-party computation.
