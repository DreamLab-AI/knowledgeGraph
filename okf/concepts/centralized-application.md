---
okf_version: "0.2"
type: Class
title: Centralised Application
resource: urn:ngm:class:centralized-application
domain: infrastructure
description: A software application whose logic, state, and data are operated by a single controlling entity on infrastructure it administers, typically following a client-server architecture in which users depend on the operator for availability, data custody, access control, and rule changes, in contrast to decentralised applications whose execution and state are replicated across a permissionless network.
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:software-system
dependsOn:
  - urn:ngm:class:cloud-computing
contrastsWith:
  - urn:ngm:class:decentralised-application
  - urn:ngm:class:blockchain-application
  - urn:ngm:class:decentralised-application
uses:
  - urn:ngm:class:client-server-architecture
relatedTo:
  - urn:ngm:class:single-point-of-failure
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Centralised Application

A software application whose logic, state, and data are operated by a single controlling entity on infrastructure it administers, typically following a client-server architecture in which users depend on the operator for availability, data custody, access control, and rule changes, in contrast to decentralised applications whose execution and state are replicated across a permissionless network.
