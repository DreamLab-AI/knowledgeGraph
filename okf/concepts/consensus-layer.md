---
okf_version: "0.2"
type: Class
title: Consensus Layer
resource: urn:ngm:class:consensus-layer
domain: blockchain
description: The Consensus Layer is the stratum responsible for agreement on a single canonical ordering of events across distributed participants. In the canonical stack it sits directly above the Protocol Layer and below the Data Layer, converting peer-to-peer message exchange into a shared, append-only history. It contains the agreement algorithms, fork-choice rules, and finality conditions that all partici
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:protocol-layer
enables:
  - urn:ngm:class:data-layer
bridgesTo:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:proof-of-stake
---

# Consensus Layer

The Consensus Layer is the stratum responsible for agreement on a single canonical ordering of events across distributed participants. In the canonical stack it sits directly above the Protocol Layer and below the Data Layer, converting peer-to-peer message exchange into a shared, append-only history. It contains the agreement algorithms, fork-choice rules, and finality conditions that all participants follow.
