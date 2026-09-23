---
okf_version: "0.2"
type: Class
title: Decentralised file storage
resource: urn:ngm:class:decentralised-file-storage
domain: infrastructure
description: Decentralised file storage denotes a class of infrastructure protocols and networks that disaggregate object/blob persistence across geographically distributed, mutually untrusting node operators using content-addressing, cryptographic accountability, and (in most implementations) crypto-economic...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:data-management
  - urn:ngm:class:content-addressed-storage
  - urn:ngm:class:distributed-storage
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:web-3-infrastructure
  - urn:ngm:class:permissionless-protocol
hasPart:
  - urn:ngm:class:content-identifier
  - urn:ngm:class:distributed-hash-table
  - urn:ngm:class:erasure-coding
  - urn:ngm:class:pinning-service
  - urn:ngm:class:storage-provider
  - urn:ngm:class:retrieval-market
  - urn:ngm:class:storage-proof
requires:
  - urn:ngm:class:bandwidth
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:libp2p
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:disk-storage
enables:
  - urn:ngm:class:data-sovereignty
  - urn:ngm:class:censorship-resistance
  - urn:ngm:class:nft-metadata-persistence
  - urn:ngm:class:verifiable-storage
  - urn:ngm:class:permaweb
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:distributed-hash-table
  - urn:ngm:class:zk-snark
  - urn:ngm:class:merkle-tree
implements:
  - urn:ngm:class:kademlia-dht
  - urn:ngm:class:proof-of-replication
  - urn:ngm:class:proof-of-spacetime
  - urn:ngm:class:reed-solomon-erasure-coding
  - urn:ngm:class:bitswap-protocol
contrastsWith:
  - urn:ngm:class:object-storage
  - urn:ngm:class:cdn
  - urn:ngm:class:centralised-file-server
  - urn:ngm:class:network-attached-storage
uses:
  - urn:ngm:class:cid
  - urn:ngm:class:ipld
  - urn:ngm:class:multihash
  - urn:ngm:class:car-file
  - urn:ngm:class:ucan
supports:
  - urn:ngm:class:decentralized-application
  - urn:ngm:class:decentralised-web
  - urn:ngm:class:nft
  - urn:ngm:class:decentralized-storage
  - urn:ngm:class:decentralized-web
  - urn:ngm:class:ai-dataset-distribution
standardizedBy:
  - urn:ngm:class:ietf
  - urn:ngm:class:ipld
  - urn:ngm:class:multiformats
  - urn:ngm:class:ipld
  - urn:ngm:class:ucan-working-group
relatedTo:
  - urn:ngm:class:decentralized-identity
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:smart-contract
  - urn:ngm:class:tokenomics
---

# Decentralised file storage

Decentralised file storage denotes a class of infrastructure protocols and networks that disaggregate object/blob persistence across geographically distributed, mutually untrusting node operators using content-addressing, cryptographic accountability, and (in most implementations) crypto-economic...
