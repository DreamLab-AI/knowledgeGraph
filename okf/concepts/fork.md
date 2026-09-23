---
okf_version: "0.2"
type: Class
title: Fork
resource: urn:ngm:class:fork
domain: blockchain
description: "A Fork in the context of blockchain and distributed systems is a divergence in the protocol rules or chain history that results in two or more distinct execution paths from a common ancestor state. Hard forks introduce backward-incompatible rule changes requiring all participants to upgrade, potentially creating a permanently divergent chain. Soft forks introduce backward-compatible tightening of "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:bc-protocol-and-consensus
hasPart:
  - urn:ngm:class:hard-fork
  - urn:ngm:class:soft-fork
requires:
  - urn:ngm:class:social-consensus
enables:
  - urn:ngm:class:protocol-upgrade
  - urn:ngm:class:network-partition
dependsOn:
  - urn:ngm:class:peer-to-peer-network
contrastsWith:
  - urn:ngm:class:merge
  - urn:ngm:class:backward-compatibility
bridgesTo:
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:cryptographic-hash
relatedTo:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:governance
  - urn:ngm:class:blockchain-data
  - urn:ngm:class:distributed-ledger
---

# Fork

A Fork in the context of blockchain and distributed systems is a divergence in the protocol rules or chain history that results in two or more distinct execution paths from a common ancestor state. Hard forks introduce backward-incompatible rule changes requiring all participants to upgrade, potentially creating a permanently divergent chain. Soft forks introduce backward-compatible tightening of rules. Forks can be planned governance events (protocol upgrades) or unintended consequences of network partitions or competing miner/validator behaviour.
