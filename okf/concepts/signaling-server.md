---
okf_version: "0.2"
type: Class
title: Signaling Server
resource: urn:ngm:class:signaling-server
domain: distributed-collaboration
description: A signaling server is an intermediary service used in WebRTC and peer-to-peer systems to exchange session control messages between peers before a direct connection is established. It transmits session descriptions (SDP offers and answers) and ICE candidates so that peers can negotiate codec capabilities, network addresses, and connection parameters. Once the direct peer connection is set up, the s
maturity: established
quality: 0.7
is-a:
  - urn:ngm:class:dc-protocol-and-infra
enables:
  - urn:ngm:class:web-rtc
  - urn:ngm:class:stun-and-turn
relatedTo:
  - urn:ngm:class:peer-to-peer-network
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Signaling Server

A signaling server is an intermediary service used in WebRTC and peer-to-peer systems to exchange session control messages between peers before a direct connection is established. It transmits session descriptions (SDP offers and answers) and ICE candidates so that peers can negotiate codec capabilities, network addresses, and connection parameters. Once the direct peer connection is set up, the signaling server is no longer involved in data transfer.
