---
okf_version: "0.2"
type: Class
title: Trusted Setup
resource: urn:ngm:class:trusted-setup
domain: security
description: A trusted setup is a one-time procedure that generates the public parameters (a common reference string) required by certain cryptographic protocols, notably succinct zero-knowledge proof systems. The procedure produces secret randomness, often called toxic waste, that must be irrecoverably destroyed; if it leaks, an adversary can forge proofs. Multi-party ceremonies distribute trust so that the s
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cryptography
requires:
  - urn:ngm:class:multi-party-computation
  - urn:ngm:class:hash-function
enables:
  - urn:ngm:class:zk-snark
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:verifiable-computation
dependsOn:
  - urn:ngm:class:commitment-scheme
  - urn:ngm:class:elliptic-curve-cryptography
contrastsWith:
  - urn:ngm:class:forward-secrecy
uses:
  - urn:ngm:class:polynomial-commitment
  - urn:ngm:class:kzg-commitment
supports:
  - urn:ngm:class:blockchain
partOf:
  - urn:ngm:class:cryptography
relatedTo:
  - urn:ngm:class:plonk
  - urn:ngm:class:public-key-cryptography
---

# Trusted Setup

A trusted setup is a one-time procedure that generates the public parameters (a common reference string) required by certain cryptographic protocols, notably succinct zero-knowledge proof systems. The procedure produces secret randomness, often called toxic waste, that must be irrecoverably destroyed; if it leaks, an adversary can forge proofs. Multi-party ceremonies distribute trust so that the setup remains sound as long as a single participant behaves honestly.
