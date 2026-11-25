---
okf_version: "0.2"
type: Class
title: Logical Clock
resource: urn:ngm:class:logical-clock
domain: infrastructure
description: A logical clock is a mechanism for ordering events in a distributed system without relying on synchronised physical time. It assigns monotonically increasing counters to events so that causal relationships between them can be inferred, supporting the happened-before relation. Logical clocks underpin consistency, coordination and debugging in systems where no global wall-clock can be trusted.
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:distributed-systems-theory
hasPart:
  - urn:ngm:class:vector-clock
requires:
  - urn:ngm:class:concurrency
enables:
  - urn:ngm:class:consensus
contrastsWith:
  - urn:ngm:class:timestamp
  - urn:ngm:class:time-synchronisation
bridgesTo:
  - urn:ngm:class:consensus
uses:
  - urn:ngm:class:concurrency
supports:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:distributed-systems
partOf:
  - urn:ngm:class:distributed-systems-theory
relatedTo:
  - urn:ngm:class:timestamp
  - urn:ngm:class:vector-clock
  - urn:ngm:class:distributed-systems
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Logical Clock

A logical clock is a mechanism for ordering events in a distributed system without relying on synchronised physical time. It assigns monotonically increasing counters to events so that causal relationships between them can be inferred, supporting the happened-before relation. Logical clocks underpin consistency, coordination and debugging in systems where no global wall-clock can be trusted.
