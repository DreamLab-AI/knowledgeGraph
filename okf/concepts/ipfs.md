---
okf_version: "0.2"
type: Class
title: IPFS
resource: urn:ngm:class:ipfs
domain: distributed-systems
description: The InterPlanetary File System (IPFS) is a peer-to-peer, content-addressed hypermedia protocol and distributed file system in which each piece of content is identified by a Content Identifier (CID) — a self-describing cryptographic hash derived from the content itself — rather than by its network location. Nodes exchange data blocks via Bitswap and route lookups through a Kademlia-based Distribute
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:peer-to-peer-network
hasPart:
  - urn:ngm:class:ipld
  - urn:ngm:class:multicodec
  - urn:ngm:class:bitswap
requires:
  - urn:ngm:class:content-identifier
  - urn:ngm:class:pinning-service
enables:
  - urn:ngm:class:decentralised-web
  - urn:ngm:class:nft
  - urn:ngm:class:decentralised-file-storage
  - urn:ngm:class:web3
dependsOn:
  - urn:ngm:class:kademlia-dht
  - urn:ngm:class:multihash
contrastsWith:
  - urn:ngm:class:hypertext-transfer-protocol
  - urn:ngm:class:cloud-storage
  - urn:ngm:class:cloud-storage
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:smart-contract
  - urn:ngm:class:decentralised-autonomous-organisation
uses:
  - urn:ngm:class:content-addressing
  - urn:ngm:class:merkle-dag
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:distributed-hash-table
  - urn:ngm:class:libp2p
  - urn:ngm:class:cryptographic-hash
relatedTo:
  - urn:ngm:class:filecoin
  - urn:ngm:class:bittorrent
  - urn:ngm:class:git
  - urn:ngm:class:ens
---

# IPFS

The InterPlanetary File System (IPFS) is a peer-to-peer, content-addressed hypermedia protocol and distributed file system in which each piece of content is identified by a Content Identifier (CID) — a self-describing cryptographic hash derived from the content itself — rather than by its network location. Nodes exchange data blocks via Bitswap and route lookups through a Kademlia-based Distributed Hash Table implemented in libp2p, while the underlying data model (IPLD) structures blocks as a Merkle DAG enabling deduplication and efficient versioning. IPFS operates as the primary off-chain storage layer for Web3 applications, decentralised websites, NFT metadata, and distributed knowledge repositories, complemented by Filecoin's incentive layer for long-term data persistence.
