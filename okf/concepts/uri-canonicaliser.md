---
okf_version: "0.2"
type: Class
title: URI Canonicaliser
resource: urn:ngm:class:uri-canonicaliser
domain: infrastructure
description: "The canonical URI minting and resolution engine implementing the VisionClaw Agentic Container|VisionClaw urn:visionclaw: grammar (ADR-013, R1–R3 rules) for stable, content-addressed, and scope-bearing identifiers, enabling deterministic roundtrip serialisation and cryptographic verification o..."
maturity: established
quality: 0.89
is-a:
  - urn:ngm:class:infra-network-and-comms
  - urn:ngm:class:identity-systems
hasPart:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:content-addressing
  - urn:ngm:class:scope-bearer
  - urn:ngm:class:slug-derivation
  - urn:ngm:class:cryptographic-hash-function
requires:
  - urn:ngm:class:bip-340
  - urn:ngm:class:json-data-interchange-format-serialisation
  - urn:ngm:class:sha-256
  - urn:ngm:class:sha-256
  - urn:ngm:class:json-data-interchange-format-serialisation
  - urn:ngm:class:bip-340
  - urn:ngm:class:uri-rfc-8141
enables:
  - urn:ngm:class:deterministic-serialisation
  - urn:ngm:class:tamper-detection
  - urn:ngm:class:content-addressing
  - urn:ngm:class:decentralised-resolution
implements:
  - urn:ngm:class:w3-c-did-core
  - urn:ngm:class:rfc-8141-urn-syntax
  - urn:ngm:class:ietf-content-addressable-architecture
bridgesTo:
  - urn:ngm:class:blockchain-hash-function
  - urn:ngm:class:content-addressed-storage
---

# URI Canonicaliser

The canonical URI minting and resolution engine implementing the VisionClaw Agentic Container|VisionClaw urn:visionclaw: grammar (ADR-013, R1–R3 rules) for stable, content-addressed, and scope-bearing identifiers, enabling deterministic roundtrip serialisation and cryptographic verification o...
