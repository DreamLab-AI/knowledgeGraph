---
okf_version: "0.2"
type: Class
title: Distributed Key Generation
resource: urn:ngm:class:distributed-key-generation
domain: security
description: Distributed Key Generation (DKG) is a cryptographic protocol in which a group of mutually distrusting participants collaboratively compute a shared public key together with secret key shares, without any single party ever learning or holding the complete private key. Each participant contributes randomness so that the final key material is the joint product of all honest parties, providing resilie
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cryptographic-protocol
hasPart:
  - urn:ngm:class:private-key
  - urn:ngm:class:key-management
requires:
  - urn:ngm:class:secret-sharing
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:multi-party-computation
enables:
  - urn:ngm:class:multi-signature-wallet
implements:
  - urn:ngm:class:threshold-cryptography
bridgesTo:
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:secret-sharing
supports:
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:threshold-cryptography
  - urn:ngm:class:multi-sig-governance
relatedTo:
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:self-custody
---

# Distributed Key Generation

Distributed Key Generation (DKG) is a cryptographic protocol in which a group of mutually distrusting participants collaboratively compute a shared public key together with secret key shares, without any single party ever learning or holding the complete private key. Each participant contributes randomness so that the final key material is the joint product of all honest parties, providing resilience against compromise of individual nodes. DKG underpins threshold signatures and secure multi-party computation, removing the single point of failure inherent in a centrally generated key.
