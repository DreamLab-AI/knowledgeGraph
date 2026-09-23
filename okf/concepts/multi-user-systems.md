---
okf_version: "0.2"
type: Class
title: Multi User Systems
resource: urn:ngm:class:multi-user-systems
domain: spatial-computing
description: Multi User Systems are networked software platforms designed to support two or more simultaneous participants sharing a common computational environment, enabling real-time interaction, cooperative task execution, and mutual awareness of other participants' actions and presence. They encompass the full technology stack required for shared state management, including session management, authority a
maturity: established
quality: 0
is-a:
  - urn:ngm:class:distributed-systems
hasPart:
  - urn:ngm:class:session-management
  - urn:ngm:class:avatar
  - urn:ngm:class:access-control
  - urn:ngm:class:authority-arbitration
requires:
  - urn:ngm:class:networking-technology
  - urn:ngm:class:latency
  - urn:ngm:class:state-synchronisation
  - urn:ngm:class:real-time-communication
enables:
  - urn:ngm:class:metaverse
  - urn:ngm:class:mixed-reality-platform
  - urn:ngm:class:virtual-environment
  - urn:ngm:class:social-vr
  - urn:ngm:class:virtual-environment
dependsOn:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:network-quality-metric
  - urn:ngm:class:identity-and-access-management
implements:
  - urn:ngm:class:client-server-architecture
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:peer-to-peer-network
contrastsWith:
  - urn:ngm:class:single-user-application
bridgesTo:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:edge-computing
uses:
  - urn:ngm:class:web-socket
  - urn:ngm:class:web-rtc
  - urn:ngm:class:conflict-free-replicated-data-type
supports:
  - urn:ngm:class:telepresence
  - urn:ngm:class:collaborative-systems-modality
relatedTo:
  - urn:ngm:class:game-engine
  - urn:ngm:class:presence
---

# Multi User Systems

Multi User Systems are networked software platforms designed to support two or more simultaneous participants sharing a common computational environment, enabling real-time interaction, cooperative task execution, and mutual awareness of other participants' actions and presence. They encompass the full technology stack required for shared state management, including session management, authority arbitration, conflict resolution, and low-latency communication protocols. In spatial and immersive computing contexts, multi-user systems coordinate avatar representation, object ownership, physics synchronisation, and access control across geographically distributed clients. The category spans a wide range of instantiations, from traditional time-sharing operating systems and online multiplayer game engines to collaborative XR environments and cloud-hosted virtual workspaces.
