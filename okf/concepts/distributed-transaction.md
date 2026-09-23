---
okf_version: "0.2"
type: Class
title: Distributed Transaction
resource: urn:ngm:class:distributed-transaction
domain: distributed-systems
description: A distributed transaction is a unit of work whose operations span two or more independent data stores, services or network nodes, yet must complete with all-or-nothing atomicity across every participant. Coordinating such a transaction requires protocols that agree on a single outcome despite partial failures, network partitions and concurrent activity at each site. Classical coordination uses ato
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:transaction-processing
requires:
  - urn:ngm:class:consensus
  - urn:ngm:class:two-phase-commit
enables:
  - urn:ngm:class:atomic-settlement
dependsOn:
  - urn:ngm:class:consensus
implements:
  - urn:ngm:class:saga-pattern
bridgesTo:
  - urn:ngm:class:two-phase-commit
  - urn:ngm:class:saga-pattern
uses:
  - urn:ngm:class:consensus
supports:
  - urn:ngm:class:atomic-settlement
partOf:
  - urn:ngm:class:transaction-processing
relatedTo:
  - urn:ngm:class:transaction-processing
  - urn:ngm:class:atomic-settlement
---

# Distributed Transaction

A distributed transaction is a unit of work whose operations span two or more independent data stores, services or network nodes, yet must complete with all-or-nothing atomicity across every participant. Coordinating such a transaction requires protocols that agree on a single outcome despite partial failures, network partitions and concurrent activity at each site. Classical coordination uses atomic commit protocols, while modern systems often relax strict atomicity for availability using compensating workflows.
