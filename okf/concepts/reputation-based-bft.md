---
okf_version: "0.2"
type: Class
title: Reputation-Based BFT
resource: urn:ngm:class:reputation-based-bft
domain: blockchain
description: "Reputation-Based BFT is a variant of Byzantine Fault Tolerance in which each consensus participant is assigned a dynamic reputation score derived from its historical behaviour—vote accuracy, uptime, and honest message propagation—so that nodes with strong track records carry greater weight in the consensus outcome. This design allows the protocol to tolerate Byzantine actors more efficiently than "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:byzantine-fault-tolerance
requires:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:blockchain-governance
contrastsWith:
  - urn:ngm:class:proof-of-stake
uses:
  - urn:ngm:class:validator-node
  - urn:ngm:class:consensus-algorithm
relatedTo:
  - urn:ngm:class:proof-of-authority
  - urn:ngm:class:validator-set
  - urn:ngm:class:blockchain-protocol
---

# Reputation-Based BFT

Reputation-Based BFT is a variant of Byzantine Fault Tolerance in which each consensus participant is assigned a dynamic reputation score derived from its historical behaviour—vote accuracy, uptime, and honest message propagation—so that nodes with strong track records carry greater weight in the consensus outcome. This design allows the protocol to tolerate Byzantine actors more efficiently than pure stake-weighted schemes by penalising misbehaving validators through reputation decay rather than requiring slashing of locked collateral. It is commonly deployed in permissioned or consortium blockchain networks where participants are identified and accountable.
