---
okf_version: "0.2"
type: Class
title: Pure Proof of Stake
resource: urn:ngm:class:pure-proof-of-stake
domain: blockchain
description: A proof-of-stake consensus variant, exemplified by Algorand, that randomly selects block proposers and committee members from all token holders proportional to their stake weight using cryptographic sortition, without delegation mechanisms, enabling high decentralisation and Byzantine fault tolerance with immediate finality.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:proof-of-stake
enables:
  - urn:ngm:class:deterministic-finality
  - urn:ngm:class:proof-of-stake-sustainability
  - urn:ngm:class:validator-node
contrastsWith:
  - urn:ngm:class:proof-of-work
partOf:
  - urn:ngm:class:bc-protocol-and-consensus
relatedTo:
  - urn:ngm:class:delegated-proof-of-stake
  - urn:ngm:class:liquid-proof-of-stake
  - urn:ngm:class:nominated-proof-of-stake
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:byzantine-fault-tolerance
---

# Pure Proof of Stake

A proof-of-stake consensus variant, exemplified by Algorand, that randomly selects block proposers and committee members from all token holders proportional to their stake weight using cryptographic sortition, without delegation mechanisms, enabling high decentralisation and Byzantine fault tolerance with immediate finality.
