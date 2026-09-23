---
okf_version: "0.2"
type: Class
title: Multi-Party Computation
resource: urn:ngm:class:multi-party-computation
domain: security
description: Multi-Party Computation (MPC) is a subfield of cryptography that enables a set of mutually distrusting parties to jointly compute a function over their private inputs without revealing those inputs to any other participant. Correctness is guaranteed even when a bounded subset of participants behave maliciously, making MPC a cornerstone of privacy-preserving collaborative computation. The technique
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:cryptography
requires:
  - urn:ngm:class:secret-sharing
  - urn:ngm:class:oblivious-transfer
  - urn:ngm:class:cryptographic-protocol
enables:
  - urn:ngm:class:privacy-preserving-data-sharing
  - urn:ngm:class:privacy-preserving-analytics
  - urn:ngm:class:private-set-intersection
  - urn:ngm:class:verifiable-computation
dependsOn:
  - urn:ngm:class:computational-hardness-assumption
contrastsWith:
  - urn:ngm:class:trusted-third-party
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:de-fi
  - urn:ngm:class:digital-asset-custody
uses:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:garbled-circuits
  - urn:ngm:class:arithmetic-circuit
supports:
  - urn:ngm:class:gdpr-compliance
  - urn:ngm:class:data-sovereignty
relatedTo:
  - urn:ngm:class:threshold-cryptography
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:homomorphic-encryption
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:tee
---

# Multi-Party Computation

Multi-Party Computation (MPC) is a subfield of cryptography that enables a set of mutually distrusting parties to jointly compute a function over their private inputs without revealing those inputs to any other participant. Correctness is guaranteed even when a bounded subset of participants behave maliciously, making MPC a cornerstone of privacy-preserving collaborative computation. The technique generalises two-party secure computation to arbitrary numbers of participants using secret-sharing or garbled-circuit protocols.
