---
okf_version: "0.2"
type: Class
title: Hash Function
resource: urn:ngm:class:hash-function
domain: blockchain
description: "A Hash Function is a deterministic computational mapping H: {0,1}* → {0,1}^n from arbitrary-length input strings (preimages, messages) to fixed-length output strings (digests, hashes, fingerprints) of n bits (typically n ∈ {128, 160, 224, 256, 384, 512}), whose security and utility derive fro..."
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:compression-function
  - urn:ngm:class:cryptographic-algorithm
  - urn:ngm:class:one-way-function
  - urn:ngm:class:deterministic-function
  - urn:ngm:class:digital-fingerprint
hasPart:
  - urn:ngm:class:compression-function
  - urn:ngm:class:initialization-vector
  - urn:ngm:class:internal-state
  - urn:ngm:class:padding-scheme
  - urn:ngm:class:round-function
  - urn:ngm:class:output-truncation
requires:
  - urn:ngm:class:avalanche-effect
  - urn:ngm:class:determinism
  - urn:ngm:class:cryptography
  - urn:ngm:class:computational-security
  - urn:ngm:class:pseudo-randomness
enables:
  - urn:ngm:class:blockchain-immutability
  - urn:ngm:class:commitment-scheme
  - urn:ngm:class:data-integrity
  - urn:ngm:class:deduplication
  - urn:ngm:class:key-derivation-function
  - urn:ngm:class:message-authentication-code
  - urn:ngm:class:content-addressing
  - urn:ngm:class:digital-signature
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:password-storage
  - urn:ngm:class:key-derivation-function
dependsOn:
  - urn:ngm:class:boolean-algebra
  - urn:ngm:class:modular-arithmetic
  - urn:ngm:class:finite-field-arithmetic
  - urn:ngm:class:bitwise-operations
  - urn:ngm:class:computational-complexity-theory
  - urn:ngm:class:number-theory
implements:
  - urn:ngm:class:preimage-resistance
  - urn:ngm:class:random-oracle-model
  - urn:ngm:class:collision-resistance
  - urn:ngm:class:pre-image-resistance
  - urn:ngm:class:second-pre-image-resistance
  - urn:ngm:class:indistinguishability
contrastsWith:
  - urn:ngm:class:encryption
  - urn:ngm:class:digital-signature
  - urn:ngm:class:message-authentication-code
  - urn:ngm:class:error-detection-code
  - urn:ngm:class:checksum
bridgesTo:
  - urn:ngm:class:cryptographic-algorithm
uses:
  - urn:ngm:class:merkle-damg-rd-construction
  - urn:ngm:class:sponge-construction
  - urn:ngm:class:haifa-construction
  - urn:ngm:class:davies-meyer-construction
  - urn:ngm:class:wide-pipe-construction
supports:
  - urn:ngm:class:certificate-transparency
  - urn:ngm:class:code-signing
  - urn:ngm:class:git
  - urn:ngm:class:ipfs
  - urn:ngm:class:tls
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:bitcoin-proof-of-work-protocol
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:post-quantum-cryptography
  - urn:ngm:class:zero-knowledge-proof
standardizedBy:
  - urn:ngm:class:nist-fips-202
  - urn:ngm:class:nist-fips-205
  - urn:ngm:class:nist-fips-180-4
  - urn:ngm:class:ietf-rfc-6234
  - urn:ngm:class:ietf-rfc-2104-hmac
  - urn:ngm:class:ietf-rfc-9106-argon2
  - urn:ngm:class:ietf-rfc-8439
  - urn:ngm:class:iso-iec-10118-3
relatedTo:
  - urn:ngm:class:bloom-filter
  - urn:ngm:class:side-channel-attack
  - urn:ngm:class:quantum-computation-paradigm
  - urn:ngm:class:cryptanalysis
  - urn:ngm:class:birthday-attack
  - urn:ngm:class:length-extension-attack
---

# Hash Function

A Hash Function is a deterministic computational mapping H: {0,1}* → {0,1}^n from arbitrary-length input strings (preimages, messages) to fixed-length output strings (digests, hashes, fingerprints) of n bits (typically n ∈ {128, 160, 224, 256, 384, 512}), whose security and utility derive fro...
