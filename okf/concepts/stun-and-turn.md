---
okf_version: "0.2"
type: Class
title: STUN and TURN
resource: urn:ngm:class:stun-and-turn
domain: distributed-collaboration
description: "STUN (Session Traversal Utilities for NAT) and TURN (Traversal Using Relays around NAT) are complementary protocols used to establish peer-to-peer connectivity across Network Address Translators and firewalls. STUN allows a client to discover its public IP address and port mapping, while TURN provides a relay server as a fallback when direct connectivity cannot be achieved. Together they form the "
maturity: established
quality: 0.7
is-a:
  - urn:ngm:class:dc-protocol-and-infra
enables:
  - urn:ngm:class:web-rtc
  - urn:ngm:class:signaling-server
relatedTo:
  - urn:ngm:class:peer-to-peer-network
---

# STUN and TURN

STUN (Session Traversal Utilities for NAT) and TURN (Traversal Using Relays around NAT) are complementary protocols used to establish peer-to-peer connectivity across Network Address Translators and firewalls. STUN allows a client to discover its public IP address and port mapping, while TURN provides a relay server as a fallback when direct connectivity cannot be achieved. Together they form the ICE (Interactive Connectivity Establishment) framework used by WebRTC.
