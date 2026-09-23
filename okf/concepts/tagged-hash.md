---
okf_version: "0.2"
type: Class
title: Tagged Hash
resource: urn:ngm:class:tagged-hash
domain: blockchain
description: A Tagged Hash is a domain-separated hash construction formalised in BIP-340 and used throughout Bitcoin's Taproot/Schnorr signature ecosystem, computed as SHA256(SHA256(tag) || SHA256(tag) || msg), where tag is a human-readable string identifying the protocol context. The double-hashing of the tag prefix creates a unique domain separator that prevents cross-protocol hash collisions — ensuring that
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:cryptographic-primitive
requires:
  - urn:ngm:class:domain-separation
  - urn:ngm:class:hash-function
enables:
  - urn:ngm:class:collision-resistance
  - urn:ngm:class:security-proof
  - urn:ngm:class:protocol-composition
dependsOn:
  - urn:ngm:class:sha-256
  - urn:ngm:class:hash-function
  - urn:ngm:class:cryptography
contrastsWith:
  - urn:ngm:class:hmac
  - urn:ngm:class:hash-function
uses:
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:taproot
supports:
  - urn:ngm:class:key-tweaking
  - urn:ngm:class:bip-342-tapscript
partOf:
  - urn:ngm:class:bip-340-schnorr-keypair
  - urn:ngm:class:taproot
relatedTo:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:commitment-scheme
---

# Tagged Hash

A Tagged Hash is a domain-separated hash construction formalised in BIP-340 and used throughout Bitcoin's Taproot/Schnorr signature ecosystem, computed as SHA256(SHA256(tag) || SHA256(tag) || msg), where tag is a human-readable string identifying the protocol context. The double-hashing of the tag prefix creates a unique domain separator that prevents cross-protocol hash collisions — ensuring that a hash computed in one context (e.g. key tweaking) cannot be misinterpreted or replayed in another context (e.g. signature nonce generation). Tagged hashes improve security proofs and simplify protocol composition by making each domain's hash computationally distinct.
