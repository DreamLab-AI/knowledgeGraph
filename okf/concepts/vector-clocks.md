---
okf_version: "0.2"
type: Class
title: Vector Clocks
resource: urn:ngm:class:vector-clocks
domain: distributed-systems
description: A mechanism for ordering events in a distributed system by assigning each process a vector of counters. Comparing vectors determines whether one event causally precedes another or whether they are concurrent.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:time-synchronisation
requires:
  - urn:ngm:class:distributed-computing
enables:
  - urn:ngm:class:eventual-consistency
bridgesTo:
  - urn:ngm:class:time-synchronisation
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Vector Clocks

A mechanism for ordering events in a distributed system by assigning each process a vector of counters. Comparing vectors determines whether one event causally precedes another or whether they are concurrent.
