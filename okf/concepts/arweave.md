---
okf_version: "0.2"
type: Class
title: Arweave
resource: urn:ngm:class:arweave
domain: blockchain
description: Arweave is a decentralised, blockweave-based storage protocol that enables permanent, censorship-resistant archival of data through a proof-of-access consensus mechanism, where miners must demonstrate retention of a randomly selected historic block to produce new blocks. It introduces the 'permaweb' — a permanent, publicly accessible layer of the web sustained by a one-time payment model where a p
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:decentralized-storage
hasPart:
  - urn:ngm:class:smartweave
  - urn:ngm:class:ao-compute
  - urn:ngm:class:bundlr-network
  - urn:ngm:class:blockweave
requires:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:ar-token
enables:
  - urn:ngm:class:data-persistence
  - urn:ngm:class:digital-archive
  - urn:ngm:class:censorship-resistance
  - urn:ngm:class:decentralised-application
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:smart-contract
contrastsWith:
  - urn:ngm:class:ipfs
  - urn:ngm:class:filecoin
  - urn:ngm:class:bittorrent
  - urn:ngm:class:object-storage
  - urn:ngm:class:object-storage
bridgesTo:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:data-provenance
uses:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:token-economics
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:content-addressing
  - urn:ngm:class:merkle-dag
  - urn:ngm:class:proof-of-access
relatedTo:
  - urn:ngm:class:distributed-storage
  - urn:ngm:class:web3
  - urn:ngm:class:de-fi
---

# Arweave

Arweave is a decentralised, blockweave-based storage protocol that enables permanent, censorship-resistant archival of data through a proof-of-access consensus mechanism, where miners must demonstrate retention of a randomly selected historic block to produce new blocks. It introduces the 'permaweb' — a permanent, publicly accessible layer of the web sustained by a one-time payment model where a portion of each storage fee accrues to an endowment that compensates miners across an indefinite time horizon. The network's economic model assumes that declining hardware costs will be outpaced by AR token appreciation, funding perpetual content replication across an open, permissionless peer set. Beyond raw storage, Arweave hosts SmartWeave lazy-evaluation contracts and the AO actor-oriented compute environment, extending it into a foundation for permanent, verifiable decentralised computation.
