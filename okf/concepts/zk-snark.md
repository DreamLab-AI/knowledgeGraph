---
okf_version: "0.2"
type: Class
title: ZK-SNARK
resource: urn:ngm:class:zk-snark
domain: security
description: A ZK-SNARK (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge) is a cryptographic proof system that allows a prover to convince a verifier that a computational statement is true without revealing any information beyond the validity of the statement itself. The proof is succinct — its size and verification time are sub-linear (often constant or logarithmic) relative to the underlying co
maturity: established
quality: 0.76
is-a:
  - urn:ngm:class:zero-knowledge-proof
requires:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:trusted-setup
  - urn:ngm:class:arithmetic-circuit
  - urn:ngm:class:bilinear-pairing
enables:
  - urn:ngm:class:groth-16
  - urn:ngm:class:rollup
  - urn:ngm:class:private-transaction
  - urn:ngm:class:verifiable-computation
implements:
  - urn:ngm:class:succinct-argument
  - urn:ngm:class:non-interactive-proof
contrastsWith:
  - urn:ngm:class:zk-starks
  - urn:ngm:class:interactive-proof
  - urn:ngm:class:zk-starks
  - urn:ngm:class:bulletproof
bridgesTo:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:de-fi
  - urn:ngm:class:machine-learning-privacy
uses:
  - urn:ngm:class:polynomial-commitment
  - urn:ngm:class:fiat-shamir-heuristic
  - urn:ngm:class:rank-1-constraint-system
supports:
  - urn:ngm:class:blockchain
  - urn:ngm:class:privacy-preserving-computation
  - urn:ngm:class:identity-verification
relatedTo:
  - urn:ngm:class:plonk
  - urn:ngm:class:groth-16
  - urn:ngm:class:zcash
---

# ZK-SNARK

A ZK-SNARK (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge) is a cryptographic proof system that allows a prover to convince a verifier that a computational statement is true without revealing any information beyond the validity of the statement itself. The proof is succinct — its size and verification time are sub-linear (often constant or logarithmic) relative to the underlying computation — and non-interactive, requiring no back-and-forth messages between prover and verifier. Most constructions rely on bilinear pairings over elliptic curves and require a one-time trusted setup ceremony to generate a structured reference string.
