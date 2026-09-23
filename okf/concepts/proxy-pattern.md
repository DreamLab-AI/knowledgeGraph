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
  - urn:ngm:class:eip
contrastsWith:
  - urn:ngm:class:smart-contract
uses:
  - urn:ngm:class:solidity
  - urn:ngm:class:ethereum
supports:
  - urn:ngm:class:gas-optimization
standardizedBy:
  - urn:ngm:class:eip
partOf:
  - urn:ngm:class:smart-contract
relatedTo:
  - urn:ngm:class:token-standard
  - urn:ngm:class:erc-20-token-standard
---

# Proxy Pattern

The Proxy Pattern is a smart-contract design technique that separates a contract's persistent storage and address from its executable logic, allowing the logic to be upgraded without migrating state or changing the public address. A lightweight proxy contract holds the state and forwards calls via delegatecall to a swappable implementation contract. The pattern enables upgradeable contracts but introduces storage-layout, initialisation and access-control hazards that must be managed carefully.
