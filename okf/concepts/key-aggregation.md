---
okf_version: "0.2"
type: Class
title: Key Aggregation
resource: urn:ngm:class:key-aggregation
domain: security
description: Key Aggregation is a cryptographic technique that combines multiple individual public keys into a single aggregate public key, against which a combined signature can be verified as though produced by one signer. It is central to modern multi-signature schemes such as MuSig2, where several parties jointly produce one compact signature indistinguishable from a single-key signature. Key aggregation i
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:cryptographic-protocol
requires:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:multi-signature
  - urn:ngm:class:schnorr-signature
dependsOn:
  - urn:ngm:class:public-key-cryptography
implements:
  - urn:ngm:class:cryptographic-protocol
contrastsWith:
  - urn:ngm:class:key-management
bridgesTo:
  - urn:ngm:class:multi-signature
uses:
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:cryptography
supports:
  - urn:ngm:class:multi-signature
  - urn:ngm:class:bitcoin
partOf:
  - urn:ngm:class:cryptographic-protocol
relatedTo:
  - urn:ngm:class:key-management
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptography
---

# Key Aggregation

Key Aggregation is a cryptographic technique that combines multiple individual public keys into a single aggregate public key, against which a combined signature can be verified as though produced by one signer. It is central to modern multi-signature schemes such as MuSig2, where several parties jointly produce one compact signature indistinguishable from a single-key signature. Key aggregation improves privacy, reduces on-chain footprint and lowers verification cost in distributed signing protocols.
