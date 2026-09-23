---
okf_version: "0.2"
type: Class
title: Decentralised Trust
resource: urn:ngm:class:decentralised-trust
domain: blockchain
description: Decentralised trust is an architectural property of a system in which confidence in the correctness of data, identity claims, or transaction outcomes is derived from cryptographic proofs, distributed consensus, and transparent protocol rules rather than from reliance on any single central authority or intermediary. Rather than placing faith in a bank, government registry, or certificate authority,
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:trust
requires:
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:byzantine-fault-tolerance
enables:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:trustless-settlement
  - urn:ngm:class:de-fi
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:permissionless-participation
dependsOn:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:hash-function
contrastsWith:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:cryptographic-infrastructure
bridgesTo:
  - urn:ngm:class:digital-governance
  - urn:ngm:class:supply-chain-provenance
uses:
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:distributed-consensus
  - urn:ngm:class:cryptographic-verification
  - urn:ngm:class:trust-anchor
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:merkle-proof
  - urn:ngm:class:digital-signature
relatedTo:
  - urn:ngm:class:decentralisation
  - urn:ngm:class:blockchain
  - urn:ngm:class:oracle-problem
  - urn:ngm:class:web-of-trust
---

# Decentralised Trust

Decentralised trust is an architectural property of a system in which confidence in the correctness of data, identity claims, or transaction outcomes is derived from cryptographic proofs, distributed consensus, and transparent protocol rules rather than from reliance on any single central authority or intermediary. Rather than placing faith in a bank, government registry, or certificate authority, participants in a decentralised trust model verify claims independently using public-key cryptography, Merkle proofs, or zero-knowledge proofs enforced by a distributed network. The result is a system where trust is a computable property of the protocol rather than a social or legal delegation to an institution.
