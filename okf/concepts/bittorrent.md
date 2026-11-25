---
okf_version: "0.2"
type: Class
title: Bittorrent
resource: urn:ngm:class:bittorrent
domain: distributed-systems
description: BitTorrent is a peer-to-peer protocol for distributing files by splitting them into pieces that participants download from and upload to one another rather than from a single server. Each participant who holds the complete file can seed it, while downloaders simultaneously share the pieces they already have, so aggregate capacity grows with demand. The protocol uses content hashing to verify piece
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:peer-to-peer-network
requires:
  - urn:ngm:class:bandwidth
  - urn:ngm:class:network-protocol
enables:
  - urn:ngm:class:decentralised-storage
  - urn:ngm:class:replication
contrastsWith:
  - urn:ngm:class:content-delivery-network
uses:
  - urn:ngm:class:distributed-hash-table
  - urn:ngm:class:content-addressing
  - urn:ngm:class:overlay-network
supports:
  - urn:ngm:class:file-sharing
  - urn:ngm:class:data-distribution
  - urn:ngm:class:distributed-storage
relatedTo:
  - urn:ngm:class:ipfs
  - urn:ngm:class:gossip-protocol
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Bittorrent

BitTorrent is a peer-to-peer protocol for distributing files by splitting them into pieces that participants download from and upload to one another rather than from a single server. Each participant who holds the complete file can seed it, while downloaders simultaneously share the pieces they already have, so aggregate capacity grows with demand. The protocol uses content hashing to verify pieces and a tracker or distributed hash table to help peers discover one another.
