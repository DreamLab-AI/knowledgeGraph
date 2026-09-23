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
  - urn:ngm:class:clock-synchronization
requires:
  - urn:ngm:class:distributed-computing
enables:
  - urn:ngm:class:eventual-consistency
bridgesTo:
  - urn:ngm:class:clock-synchronization
---

# Vector Clocks

A mechanism for ordering events in a distributed system by assigning each process a vector of counters. Comparing vectors determines whether one event causally precedes another or whether they are concurrent.
