---
okf_version: "0.2"
type: Class
title: Event Emission
resource: urn:ngm:class:event-emission
domain: blockchain
description: Event emission is the act by which a smart contract or software component publishes a structured log entry recording that something notable occurred during execution. On blockchains, emitted events are written to transaction logs that off-chain applications and indexers subscribe to, since contracts cannot push data outward directly. Events provide a cheap, queryable record of state changes and ar
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:smart-contract
relatedTo:
  - urn:ngm:class:agent-event-stream
  - urn:ngm:class:smart-contract
---

# Event Emission

Event emission is the act by which a smart contract or software component publishes a structured log entry recording that something notable occurred during execution. On blockchains, emitted events are written to transaction logs that off-chain applications and indexers subscribe to, since contracts cannot push data outward directly. Events provide a cheap, queryable record of state changes and are the primary bridge between on-chain logic and external systems.
