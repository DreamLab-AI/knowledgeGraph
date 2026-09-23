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
  - urn:ngm:class:decentralized-application
  - urn:ngm:class:blockchain-application
  - urn:ngm:class:decentralised-application
uses:
  - urn:ngm:class:client-server-architecture
relatedTo:
  - urn:ngm:class:single-point-of-failure
---

# Centralised Application

A software application whose logic, state, and data are operated by a single controlling entity on infrastructure it administers, typically following a client-server architecture in which users depend on the operator for availability, data custody, access control, and rule changes, in contrast to decentralised applications whose execution and state are replicated across a permissionless network.
