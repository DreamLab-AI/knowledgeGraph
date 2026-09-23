---
okf_version: "0.2"
type: Class
title: ICE Protocol
resource: urn:ngm:class:ice-protocol
domain: infrastructure
description: Interactive Connectivity Establishment (ICE) is an IETF framework that enables two peers behind network address translators (NATs) or firewalls to discover and negotiate the best path for direct media and data connections. It gathers candidate transport addresses via STUN and TURN servers, then performs connectivity checks to select a working candidate pair. ICE is a foundational component of real
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:network-protocol
enables:
  - urn:ngm:class:web-rtc
relatedTo:
  - urn:ngm:class:web-rtc
---

# ICE Protocol

Interactive Connectivity Establishment (ICE) is an IETF framework that enables two peers behind network address translators (NATs) or firewalls to discover and negotiate the best path for direct media and data connections. It gathers candidate transport addresses via STUN and TURN servers, then performs connectivity checks to select a working candidate pair. ICE is a foundational component of real-time peer-to-peer communication.
