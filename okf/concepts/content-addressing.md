---
okf_version: "0.2"
type: Class
title: Content Addressing
resource: urn:ngm:class:content-addressing
domain: blockchain
description: The fundamental principle (R1 in ADR-013) that derives a resource's URI deterministically from its Content Hash|cryptographic content hash (SHA-256), ensuring immutability, tamper-detection, and deduplication, enabling VisionClaw Agentic Container|VisionClaw artefacts (credentials, receip...
maturity: established
quality: 0.92
is-a:
  - urn:ngm:class:network-component
hasPart:
  - urn:ngm:class:content-identifier
  - urn:ngm:class:deterministic-serialisation
  - urn:ngm:class:sha-256-hashing
  - urn:ngm:class:content-identifier
  - urn:ngm:class:hash-minting
requires:
  - urn:ngm:class:canonical-json
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:deterministic-encoding
enables:
  - urn:ngm:class:decentralized-storage
  - urn:ngm:class:deduplication
  - urn:ngm:class:tamper-detection
  - urn:ngm:class:immutability
  - urn:ngm:class:permanent-referenceability
  - urn:ngm:class:decentralised-storage
implements:
  - urn:ngm:class:content-addressed-storage
  - urn:ngm:class:ipfs-content-addressing
  - urn:ngm:class:git-object-addressing
  - urn:ngm:class:content-addressed-storage
bridgesTo:
  - urn:ngm:class:data-layer
  - urn:ngm:class:blockchain-hash-functions
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:distributed-hash-table
---

# Content Addressing

The fundamental principle (R1 in ADR-013) that derives a resource's URI deterministically from its Content Hash|cryptographic content hash (SHA-256), ensuring immutability, tamper-detection, and deduplication, enabling VisionClaw Agentic Container|VisionClaw artefacts (credentials, receip...
