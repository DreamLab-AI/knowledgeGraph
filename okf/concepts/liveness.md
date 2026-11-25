---
okf_version: "0.2"
type: Class
title: Liveness
resource: urn:ngm:class:liveness
domain: distributed-systems
description: "Liveness is the class of correctness properties asserting that something good eventually happens: a submitted transaction is eventually finalised, a consensus protocol eventually decides, a requesting process eventually enters its critical section. Formalised in temporal logic and contrasted with safety properties, which assert that nothing bad ever happens, liveness cannot be violated by any fini"
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:temporal-logic
partOf:
  - urn:ngm:class:health-check
relatedTo:
  - urn:ngm:class:quorum
  - urn:ngm:class:transaction-finality
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:byzantine-fault-tolerance
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Liveness

Liveness is the class of correctness properties asserting that something good eventually happens: a submitted transaction is eventually finalised, a consensus protocol eventually decides, a requesting process eventually enters its critical section. Formalised in temporal logic and contrasted with safety properties, which assert that nothing bad ever happens, liveness cannot be violated by any finite execution — only by an infinite one that forever withholds progress — and in asynchronous fault-prone systems it is fundamentally constrained by results such as the FLP impossibility theorem.
