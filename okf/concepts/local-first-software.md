---
okf_version: "0.2"
type: Class
title: Local-First Software
resource: urn:ngm:class:local-first-software
domain: infrastructure
description: "Local-first software is a design philosophy in which the primary copy of a user's data lives on their own device, with the network used for optional synchronisation rather than as a dependency. It prioritises offline availability, low latency, data ownership, and longevity while still supporting real-time collaboration via conflict-free merging. The approach typically relies on CRDTs to reconcile "
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:software-architecture
relatedTo:
  - urn:ngm:class:crdt
  - urn:ngm:class:distributed-systems
---

# Local-First Software

Local-first software is a design philosophy in which the primary copy of a user's data lives on their own device, with the network used for optional synchronisation rather than as a dependency. It prioritises offline availability, low latency, data ownership, and longevity while still supporting real-time collaboration via conflict-free merging. The approach typically relies on CRDTs to reconcile concurrent edits across devices without a central authority.
