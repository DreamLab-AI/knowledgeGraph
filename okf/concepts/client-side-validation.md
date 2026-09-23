---
okf_version: "0.2"
type: Class
title: Client-Side Validation
resource: urn:ngm:class:client-side-validation
domain: blockchain
description: Client-Side Validation is the process of verifying user-supplied data within the browser or client application before that data is transmitted to a server, providing immediate feedback to users and reducing unnecessary network requests. In the context of Bitcoin and RGB Protocol, it refers to a distinct validation paradigm where the full state of off-chain assets is verified locally by the recipie
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:data-integrity
hasPart:
  - urn:ngm:class:single-use-seals
  - urn:ngm:class:proof-of-publication
  - urn:ngm:class:state-transition-function
enables:
  - urn:ngm:class:rgb-protocol
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:block-trails
  - urn:ngm:class:web-contracts
dependsOn:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-network
  - urn:ngm:class:utxo-model
contrastsWith:
  - urn:ngm:class:ethereum-smart-contract-platform-smart-contracts
uses:
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:utxo
  - urn:ngm:class:cryptographic-commitment
supports:
  - urn:ngm:class:privacy-preserving-computation
relatedTo:
  - urn:ngm:class:layer-2-solutions
  - urn:ngm:class:zero-knowledge
  - urn:ngm:class:taproot-assets
---

# Client-Side Validation

Client-Side Validation is the process of verifying user-supplied data within the browser or client application before that data is transmitted to a server, providing immediate feedback to users and reducing unnecessary network requests. In the context of Bitcoin and RGB Protocol, it refers to a distinct validation paradigm where the full state of off-chain assets is verified locally by the recipient rather than by all network nodes, enabling scalable, private asset transfers. The two usages share the principle of local verification but differ fundamentally in their security models and scope.
