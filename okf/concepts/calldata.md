---
okf_version: "0.2"
type: Class
title: Calldata
resource: urn:ngm:class:calldata
domain: blockchain
description: Calldata is the read-only, immutable byte array supplied with a transaction or message call on the Ethereum Virtual Machine, carrying the function selector and ABI-encoded arguments that tell a smart contract what to execute. Because it lives outside contract storage and is comparatively cheap to include, calldata is the primary channel through which external inputs reach contracts. It is especial
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:transaction
requires:
  - urn:ngm:class:gas
enables:
  - urn:ngm:class:rollup
  - urn:ngm:class:data-availability
dependsOn:
  - urn:ngm:class:ethereum
contrastsWith:
  - urn:ngm:class:eip-4844
uses:
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
  - urn:ngm:class:gas
supports:
  - urn:ngm:class:optimistic-rollup
  - urn:ngm:class:smart-contract
partOf:
  - urn:ngm:class:transaction
relatedTo:
  - urn:ngm:class:transaction
  - urn:ngm:class:data-availability
---

# Calldata

Calldata is the read-only, immutable byte array supplied with a transaction or message call on the Ethereum Virtual Machine, carrying the function selector and ABI-encoded arguments that tell a smart contract what to execute. Because it lives outside contract storage and is comparatively cheap to include, calldata is the primary channel through which external inputs reach contracts. It is especially significant for rollups, which post compressed transaction batches as calldata to the base layer to inherit its data availability and security.
