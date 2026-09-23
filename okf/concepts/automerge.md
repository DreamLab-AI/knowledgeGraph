---
okf_version: "0.2"
type: Class
title: Automerge
resource: urn:ngm:class:automerge
domain: distributed-collaboration
description: Automerge is a library and data format implementing a JSON-like CRDT that enables automatic merging of concurrent changes to shared documents without requiring a central server. It models document history as an append-only log of operations, allowing peers to exchange and apply changes in any order while converging to the same state. Automerge supports rich text, rich data structures, and is desig
maturity: established
quality: 0.7
is-a:
  - urn:ngm:class:dc-protocol-and-infra
enables:
  - urn:ngm:class:crdt
  - urn:ngm:class:local-first-software
relatedTo:
  - urn:ngm:class:yjs-framework
---

# Automerge

Automerge is a library and data format implementing a JSON-like CRDT that enables automatic merging of concurrent changes to shared documents without requiring a central server. It models document history as an append-only log of operations, allowing peers to exchange and apply changes in any order while converging to the same state. Automerge supports rich text, rich data structures, and is designed for local-first software where data lives on the user's device and syncs opportunistically.
