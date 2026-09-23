---
okf_version: "0.2"
type: Class
title: Confidential Transactions
resource: urn:ngm:class:confidential-transactions
domain: blockchain
description: Confidential Transactions (CT) is a cryptographic protocol for distributed ledgers, designed by Gregory Maxwell in 2015, that conceals the amounts transferred in financial transactions whilst preserving the ability for validators to verify that no value is created or destroyed. It employs Pedersen commitments—homomorphic elliptic-curve constructs—to encode transaction values in a form that is comp
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:cryptographic-primitive
requires:
  - urn:ngm:class:discrete-logarithm-problem
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:range-proof
enables:
  - urn:ngm:class:privacy-preserving-blockchain
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:private-defi
  - urn:ngm:class:confidential-asset
dependsOn:
  - urn:ngm:class:cryptographic-algorithm
  - urn:ngm:class:utxo-model
implements:
  - urn:ngm:class:amount-hiding
  - urn:ngm:class:homomorphic-commitment
contrastsWith:
  - urn:ngm:class:zk-snark
  - urn:ngm:class:blockchain
  - urn:ngm:class:blockchain
bridgesTo:
  - urn:ngm:class:secure-multi-party-computation
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:financial-privacy
uses:
  - urn:ngm:class:pedersen-commitment
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:bulletproofs
  - urn:ngm:class:homomorphic-encryption
standardizedBy:
  - urn:ngm:class:elements-project
  - urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals
  - urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals
relatedTo:
  - urn:ngm:class:liquid-network
  - urn:ngm:class:monero
  - urn:ngm:class:confidential-computing
  - urn:ngm:class:mimblewimble
  - urn:ngm:class:confidential-transactions
---

# Confidential Transactions

Confidential Transactions (CT) is a cryptographic protocol for distributed ledgers, designed by Gregory Maxwell in 2015, that conceals the amounts transferred in financial transactions whilst preserving the ability for validators to verify that no value is created or destroyed. It employs Pedersen commitments—homomorphic elliptic-curve constructs—to encode transaction values in a form that is computationally hiding yet perfectly binding, combined with range proofs (typically Bulletproofs) to ensure committed values are non-negative and thus prevent inflation attacks. CT has been deployed in the Liquid Network sidechain, Monero's RingCT, and the MimbleWimble protocol family, and underpins much of the contemporary research into privacy-preserving decentralised finance.
