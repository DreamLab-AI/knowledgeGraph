---
okf_version: "0.2"
type: Class
title: Random Oracle Model
resource: urn:ngm:class:random-oracle-model
domain: security
description: "The Random Oracle Model (ROM) is a theoretical framework in cryptography that idealises a cryptographic hash function as a publicly accessible, truly random function: for every distinct input the oracle returns an independent, uniformly random output, while repeated queries return the same value. Introduced formally by Bellare and Rogaway in 1993, the ROM enables security proofs for practical sche"
maturity: mature
quality: 0.75
is-a:
  - urn:ngm:class:infra-security-and-identity
  - urn:ngm:class:cryptographic-proof-model
requires:
  - urn:ngm:class:hash-function
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:provable-security
enables:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:key-derivation-function
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:public-key-encryption
implements:
  - urn:ngm:class:sha-256
  - urn:ngm:class:sha-3
contrastsWith:
  - urn:ngm:class:standard-model
  - urn:ngm:class:generic-group-model
  - urn:ngm:class:ideal-cipher-model
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:smart-contract
  - urn:ngm:class:verifiable-random-function
uses:
  - urn:ngm:class:computational-complexity-theory
  - urn:ngm:class:reduction-proof
  - urn:ngm:class:adversarial-model
  - urn:ngm:class:computational-complexity-theory
relatedTo:
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:fiat-shamir-transform
  - urn:ngm:class:ecdsa
  - urn:ngm:class:post-quantum-cryptography
  - urn:ngm:class:rsa-oaep
  - urn:ngm:class:indistinguishability-obfuscation
---

# Random Oracle Model

The Random Oracle Model (ROM) is a theoretical framework in cryptography that idealises a cryptographic hash function as a publicly accessible, truly random function: for every distinct input the oracle returns an independent, uniformly random output, while repeated queries return the same value. Introduced formally by Bellare and Rogaway in 1993, the ROM enables security proofs for practical schemes such as RSA-OAEP, ECDSA, and Schnorr signatures that cannot currently be proved secure under standard computational assumptions alone. Because no concrete hash function perfectly instantiates a random oracle, ROM proofs are treated as strong heuristic evidence rather than unconditional guarantees, and pathological counterexamples exist that are ROM-secure but concretely insecure under any hash instantiation.
