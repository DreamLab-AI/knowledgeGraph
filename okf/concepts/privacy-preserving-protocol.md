---
okf_version: "0.2"
type: Class
title: Privacy-Preserving Protocol
resource: urn:ngm:class:privacy-preserving-protocol
domain: security
description: A privacy-preserving protocol is a cryptographic protocol designed to let parties achieve a useful outcome while revealing as little personal or sensitive data as possible. Such protocols use techniques like zero-knowledge proofs, commitments, blind signatures, secure multiparty computation and differential privacy to prove claims, transact or compute jointly without disclosing the underlying inpu
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:cryptographic-protocol
enables:
  - urn:ngm:class:secure-communication
contrastsWith:
  - urn:ngm:class:kyc
uses:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:pedersen-commitment
  - urn:ngm:class:schnorr-signatures
supports:
  - urn:ngm:class:revocation-registry
  - urn:ngm:class:differential-privacy
partOf:
  - urn:ngm:class:privacy
  - urn:ngm:class:cryptography
relatedTo:
  - urn:ngm:class:zero-knowledge-proof-zkp
  - urn:ngm:class:homomorphic-encryption
  - urn:ngm:class:tor
---

# Privacy-Preserving Protocol

A privacy-preserving protocol is a cryptographic protocol designed to let parties achieve a useful outcome while revealing as little personal or sensitive data as possible. Such protocols use techniques like zero-knowledge proofs, commitments, blind signatures, secure multiparty computation and differential privacy to prove claims, transact or compute jointly without disclosing the underlying inputs. They are central to confidential payments, anonymous credentials, private identity and any system that must reconcile verifiability with data minimisation.
