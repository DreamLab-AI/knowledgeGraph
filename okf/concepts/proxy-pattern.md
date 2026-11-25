---
okf_version: "0.2"
type: Class
title: Proxy Pattern
resource: urn:ngm:class:proxy-pattern
domain: blockchain
description: The Proxy Pattern is a smart-contract design technique that separates a contract's persistent storage and address from its executable logic, allowing the logic to be upgraded without migrating state or changing the public address. A lightweight proxy contract holds the state and forwards calls via delegatecall to a swappable implementation contract. The pattern enables upgradeable contracts but in
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:design-pattern
requires:
  - urn:ngm:class:access-control
enables:
  - urn:ngm:class:smart-contract
dependsOn:
  - urn:ngm:class:ethereum
implements:
  - urn:ngm:class:ethereum-improvement-proposal
contrastsWith:
  - urn:ngm:class:smart-contract
uses:
  - urn:ngm:class:solidity
  - urn:ngm:class:ethereum
supports:
  - urn:ngm:class:gas-optimization
standardizedBy:
  - urn:ngm:class:ethereum-improvement-proposal
partOf:
  - urn:ngm:class:smart-contract
relatedTo:
  - urn:ngm:class:token-standard
  - urn:ngm:class:erc-20
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Proxy Pattern

The Proxy Pattern is a smart-contract design technique that separates a contract's persistent storage and address from its executable logic, allowing the logic to be upgraded without migrating state or changing the public address. A lightweight proxy contract holds the state and forwards calls via delegatecall to a swappable implementation contract. The pattern enables upgradeable contracts but introduces storage-layout, initialisation and access-control hazards that must be managed carefully.
