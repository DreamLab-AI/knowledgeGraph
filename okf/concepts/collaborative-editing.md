---
okf_version: "0.2"
type: Class
title: Collaborative Editing
resource: urn:ngm:class:collaborative-editing
domain: infrastructure
description: Collaborative editing is the capability for multiple people to view and modify a shared document simultaneously, with their changes merged consistently and surfaced to all participants in near real time. It relies on concurrency-control techniques such as operational transformation or conflict-free replicated data types to reconcile concurrent edits without conflicts. Combined with presence and cu
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:real-time-collaboration
  - urn:ngm:class:version-history
requires:
  - urn:ngm:class:conflict-resolution
  - urn:ngm:class:presence-awareness
enables:
  - urn:ngm:class:real-time-collaboration
  - urn:ngm:class:collaboration
implements:
  - urn:ngm:class:conflict-free-replicated-data-type
uses:
  - urn:ngm:class:operational-transformation
  - urn:ngm:class:crdt
  - urn:ngm:class:web-socket
supports:
  - urn:ngm:class:distributed-collaboration
partOf:
  - urn:ngm:class:distributed-collaboration
relatedTo:
  - urn:ngm:class:operational-transformation
  - urn:ngm:class:crdt
  - urn:ngm:class:presence-awareness
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Collaborative Editing

Collaborative editing is the capability for multiple people to view and modify a shared document simultaneously, with their changes merged consistently and surfaced to all participants in near real time. It relies on concurrency-control techniques such as operational transformation or conflict-free replicated data types to reconcile concurrent edits without conflicts. Combined with presence and cursor awareness, it makes co-authoring across distributed users feel immediate and coherent.
