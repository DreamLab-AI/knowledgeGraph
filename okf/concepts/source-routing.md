---
okf_version: "0.2"
type: Class
title: Source Routing
resource: urn:ngm:class:source-routing
domain: blockchain
description: Source routing is a packet-forwarding technique in which the sender, rather than intermediate routers, specifies all or part of the path a packet must traverse, embedding the route as a list of hops within the packet itself. By moving path selection to the originator it enables explicit path control, multipath delivery, and privacy-preserving forwarding, at the cost of overhead and forwarding-tabl
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:routing-protocol
requires:
  - urn:ngm:class:network-protocol
enables:
  - urn:ngm:class:onion-routing
  - urn:ngm:class:overlay-network
dependsOn:
  - urn:ngm:class:routing-protocol
implements:
  - urn:ngm:class:routing-protocol
contrastsWith:
  - urn:ngm:class:routing-protocol
bridgesTo:
  - urn:ngm:class:tor
  - urn:ngm:class:overlay-network
uses:
  - urn:ngm:class:packet-switching
  - urn:ngm:class:network-protocol
supports:
  - urn:ngm:class:privacy
partOf:
  - urn:ngm:class:network-layer
relatedTo:
  - urn:ngm:class:networking
  - urn:ngm:class:onion-routing
  - urn:ngm:class:packet-switching
---

# Source Routing

Source routing is a packet-forwarding technique in which the sender, rather than intermediate routers, specifies all or part of the path a packet must traverse, embedding the route as a list of hops within the packet itself. By moving path selection to the originator it enables explicit path control, multipath delivery, and privacy-preserving forwarding, at the cost of overhead and forwarding-table-bypass security considerations. It underpins onion-routing anonymity networks and payment-channel networks, where the sender constructs and conceals an end-to-end route across an overlay before any hop sees the full path.
