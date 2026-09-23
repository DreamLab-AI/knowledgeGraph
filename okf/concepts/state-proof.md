---
okf_version: "0.2"
type: Class
title: State Proof
resource: urn:ngm:class:state-proof
domain: blockchain
description: A compact cryptographic attestation that a particular state — an account balance, storage slot, or block commitment — is part of a blockchain's canonical history, verifiable by anyone without replaying the chain or trusting an intermediary; ranging from Merkle inclusion proofs against a state root to Algorand-style aggregate-signature certificates, state proofs are the primitive that lets light cl
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:cryptographic-proof
enables:
  - urn:ngm:class:light-client-verification
  - urn:ngm:class:cross-chain-interoperability
uses:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:vector-commitment
  - urn:ngm:class:digital-signature
relatedTo:
  - urn:ngm:class:algorand
  - urn:ngm:class:light-client
---

# State Proof

A compact cryptographic attestation that a particular state — an account balance, storage slot, or block commitment — is part of a blockchain's canonical history, verifiable by anyone without replaying the chain or trusting an intermediary; ranging from Merkle inclusion proofs against a state root to Algorand-style aggregate-signature certificates, state proofs are the primitive that lets light clients and cross-chain bridges verify one chain's state from another vantage point trustlessly.
