---
okf_version: "0.2"
type: Class
title: Decentralized Key Storage
resource: urn:ngm:class:decentralized-key-storage
domain: security
description: Decentralized key storage is the practice of distributing a cryptographic key across multiple independent holders or locations so that no single party ever possesses the whole key, and no single point of compromise or failure can expose or destroy it. Typically realised with Shamir secret sharing or threshold cryptography, the key is split into shares such that a defined quorum reconstructs or joi
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:key-management
requires:
  - urn:ngm:class:cryptographic-key
contrastsWith:
  - urn:ngm:class:decentralized-storage
uses:
  - urn:ngm:class:shamir-secret-sharing
  - urn:ngm:class:threshold-cryptography
---

# Decentralized Key Storage

Decentralized key storage is the practice of distributing a cryptographic key across multiple independent holders or locations so that no single party ever possesses the whole key, and no single point of compromise or failure can expose or destroy it. Typically realised with Shamir secret sharing or threshold cryptography, the key is split into shares such that a defined quorum reconstructs or jointly uses it while any smaller subset reveals nothing. This is distinct from decentralised data storage — which spreads arbitrary files across a network such as IPFS — because the object being protected is the secret itself and the security goal is quorum-controlled reconstruction rather than content availability.
