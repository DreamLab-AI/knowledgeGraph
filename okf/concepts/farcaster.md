---
okf_version: "0.2"
type: Class
title: Farcaster
resource: urn:ngm:class:farcaster
domain: blockchain
description: "Farcaster is a sufficiently decentralised social networking protocol built on Ethereum and Optimism that anchors user identity and account data on-chain while storing social graph content and messages off-chain across a peer-to-peer network of Hubs. It separates identity (Farcaster ID, FID) from the client application layer, enabling permissionless third-party clients such as Warpcast to build on "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:network-component
hasPart:
  - urn:ngm:class:farcaster-hub
  - urn:ngm:class:farcaster-id
  - urn:ngm:class:warpcast
  - urn:ngm:class:farcaster-frames
requires:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:ethereum
  - urn:ngm:class:optimism
enables:
  - urn:ngm:class:web3
  - urn:ngm:class:social-network-graph
  - urn:ngm:class:portable-identity
  - urn:ngm:class:social-network-graph
dependsOn:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:crdt
implements:
  - urn:ngm:class:open-protocol
  - urn:ngm:class:decentralised-social-protocol
contrastsWith:
  - urn:ngm:class:activity-pub
  - urn:ngm:class:nostr
  - urn:ngm:class:bluesky-at-protocol
  - urn:ngm:class:centralised-social-media
bridgesTo:
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:ai-agent
uses:
  - urn:ngm:class:ethereum-smart-contract-platform-name-service
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:content-addressing
relatedTo:
  - urn:ngm:class:lens-protocol
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:data-availability
  - urn:ngm:class:decentralised-identifier
---

# Farcaster

Farcaster is a sufficiently decentralised social networking protocol built on Ethereum and Optimism that anchors user identity and account data on-chain while storing social graph content and messages off-chain across a peer-to-peer network of Hubs. It separates identity (Farcaster ID, FID) from the client application layer, enabling permissionless third-party clients such as Warpcast to build on shared social data without platform lock-in. The protocol specifies message encoding via a data availability layer called Hubs and enforces message ordering through a CRDT-based conflict resolution mechanism, making it a credibly neutral substrate for decentralised social applications.
