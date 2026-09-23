---
okf_version: "0.2"
type: Class
title: Soft Fork
resource: urn:ngm:class:soft-fork
domain: blockchain
description: A Soft Fork is a backward-compatible change to a blockchain's consensus rules in which the set of valid blocks is tightened so that newly produced blocks remain acceptable to non-upgraded nodes. Because old nodes still recognise the stricter blocks as valid, the network does not split provided a majority of hash power or stake enforces the new rules. Soft forks are commonly used to deploy protocol
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:backward-compatibility
  - urn:ngm:class:validation-rules
enables:
  - urn:ngm:class:taproot
  - urn:ngm:class:bip-342
dependsOn:
  - urn:ngm:class:node-software
  - urn:ngm:class:full-node
implements:
  - urn:ngm:class:user-activated-soft-fork
contrastsWith:
  - urn:ngm:class:hard-fork
uses:
  - urn:ngm:class:validation-rules
  - urn:ngm:class:block-validation
supports:
  - urn:ngm:class:backward-compatibility
partOf:
  - urn:ngm:class:blockchain-governance
relatedTo:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:blockchain-governance
---

# Soft Fork

A Soft Fork is a backward-compatible change to a blockchain's consensus rules in which the set of valid blocks is tightened so that newly produced blocks remain acceptable to non-upgraded nodes. Because old nodes still recognise the stricter blocks as valid, the network does not split provided a majority of hash power or stake enforces the new rules. Soft forks are commonly used to deploy protocol upgrades such as new script types without requiring every participant to update.
