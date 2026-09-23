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
  - urn:ngm:class:decentralized-storage
  - urn:ngm:class:replication
contrastsWith:
  - urn:ngm:class:cdn
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
---

# Bittorrent

BitTorrent is a peer-to-peer protocol for distributing files by splitting them into pieces that participants download from and upload to one another rather than from a single server. Each participant who holds the complete file can seed it, while downloaders simultaneously share the pieces they already have, so aggregate capacity grows with demand. The protocol uses content hashing to verify pieces and a tracker or distributed hash table to help peers discover one another.
