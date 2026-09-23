---
okf_version: "0.2"
type: Class
title: Realtime Collaboration
resource: urn:ngm:class:realtime-collaboration
domain: infrastructure
description: Realtime Collaboration is the capability for multiple geographically distributed users to co-create, co-edit, and synchronise shared digital artefacts—documents, 3D scenes, code, or virtual environments—with sub-second latency, such that all participants observe consistent state simultaneously. Technically, it requires low-latency networking, conflict-resolution mechanisms such as CRDTs or operati
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:infra-network-and-comms
requires:
  - urn:ngm:class:network-latency
  - urn:ngm:class:crdt
  - urn:ngm:class:multi-user-systems
enables:
  - urn:ngm:class:virtual-meeting
  - urn:ngm:class:immersive-workspaces
  - urn:ngm:class:distributed-collaboration
relatedTo:
  - urn:ngm:class:metaverse-and-telecollaboration
  - urn:ngm:class:social-presence
---

# Realtime Collaboration

Realtime Collaboration is the capability for multiple geographically distributed users to co-create, co-edit, and synchronise shared digital artefacts—documents, 3D scenes, code, or virtual environments—with sub-second latency, such that all participants observe consistent state simultaneously. Technically, it requires low-latency networking, conflict-resolution mechanisms such as CRDTs or operational transforms, and state-synchronisation protocols to reconcile concurrent edits without data loss.
