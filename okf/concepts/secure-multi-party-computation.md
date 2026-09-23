---
okf_version: "0.2"
type: Class
title: Secure Multi-Party Computation
resource: urn:ngm:class:secure-multi-party-computation
domain: security
description: Secure Multi-Party Computation (MPC) is a cryptographic protocol enabling multiple parties to jointly compute functions over their combined private inputs without revealing individual inputs to other participants or third parties. Only the final output is disclosed; intermediate computations remain confidential. Key implementation techniques include secret sharing (Shamir), garbled circuits (Yao),
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptography
hasPart:
  - urn:ngm:class:secret-sharing
  - urn:ngm:class:oblivious-transfer
requires:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:secure-channel
enables:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:privacy-preserving-data-sharing
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:private-set-intersection
  - urn:ngm:class:secure-aggregation
contrastsWith:
  - urn:ngm:class:tee
  - urn:ngm:class:homomorphic-encryption
bridgesTo:
  - urn:ngm:class:privacy-preserving-machine-learning
  - urn:ngm:class:de-fi
uses:
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:homomorphic-encryption
  - urn:ngm:class:shamir-secret-sharing
partOf:
  - urn:ngm:class:privacy-enhancing-computation-pec
relatedTo:
  - urn:ngm:class:privacy-preserving-technology
  - urn:ngm:class:privacy-enhancing-computation-pec
  - urn:ngm:class:threshold-cryptography
---

# Secure Multi-Party Computation

Secure Multi-Party Computation (MPC) is a cryptographic protocol enabling multiple parties to jointly compute functions over their combined private inputs without revealing individual inputs to other participants or third parties. Only the final output is disclosed; intermediate computations remain confidential. Key implementation techniques include secret sharing (Shamir), garbled circuits (Yao), and oblivious transfer primitives.
