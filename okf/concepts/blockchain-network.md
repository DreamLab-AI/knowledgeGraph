---
okf_version: "0.2"
type: Class
title: Blockchain Network
resource: urn:ngm:class:blockchain-network
domain: blockchain
description: A Blockchain Network is a permissionless or permissioned peer-to-peer (P2P) overlay network through which participating nodes collectively maintain, validate, and propagate a shared append-only ledger (the blockchain) without relying on any central coordinator, achieving agreement through a deter...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:distributed-system
  - urn:ngm:class:fault-tolerance-system
  - urn:ngm:class:overlay-network
  - urn:ngm:class:byzantine-fault-tolerant-system
hasPart:
  - urn:ngm:class:archive-node
  - urn:ngm:class:finality
  - urn:ngm:class:mining-node
  - urn:ngm:class:peer-discovery
  - urn:ngm:class:validator
  - urn:ngm:class:bootstrap-node
  - urn:ngm:class:fork-choice-rule
  - urn:ngm:class:full-node
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:light-client
  - urn:ngm:class:mempool
  - urn:ngm:class:peer-discovery
  - urn:ngm:class:finality
requires:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:transport-protocol
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:digital-signature
  - urn:ngm:class:peer-discovery
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:transport-protocol
enables:
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:trustless-settlement
  - urn:ngm:class:censorship-resistance
  - urn:ngm:class:decentralized-finance-de-fi
  - urn:ngm:class:immutability
  - urn:ngm:class:smart-contract
  - urn:ngm:class:tokenization
dependsOn:
  - urn:ngm:class:tcp-ip
  - urn:ngm:class:quic
  - urn:ngm:class:cryptography
  - urn:ngm:class:game-theory
  - urn:ngm:class:distributed-systems-theory
  - urn:ngm:class:network-theory
implements:
  - urn:ngm:class:casper-ffg
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:kademlia-dht
  - urn:ngm:class:lmd-ghost
  - urn:ngm:class:nakamoto-consensus
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:gossip-protocol
contrastsWith:
  - urn:ngm:class:client-server-architecture
  - urn:ngm:class:centralised-database
  - urn:ngm:class:federated-network
  - urn:ngm:class:traditional-financial-network
uses:
  - urn:ngm:class:libp2p
  - urn:ngm:class:nat-traversal
  - urn:ngm:class:noise-protocol
  - urn:ngm:class:tls-encryption
  - urn:ngm:class:devp2p
  - urn:ngm:class:discv5
  - urn:ngm:class:dns-seed-bootstrap
supports:
  - urn:ngm:class:cosmos
  - urn:ngm:class:layer-2-solutions
  - urn:ngm:class:polkadot
  - urn:ngm:class:bitcoin-proof-of-work-protocol
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:hyperledger-fabric
  - urn:ngm:class:lightning-network
  - urn:ngm:class:solana
standardizedBy:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals
  - urn:ngm:class:ieee-blockchain-initiative
  - urn:ngm:class:iso-tc-307
  - urn:ngm:class:nist-sp-800-188
  - urn:ngm:class:ethereum-foundation-eips
relatedTo:
  - urn:ngm:class:fork
  - urn:ngm:class:sharding
  - urn:ngm:class:validator
  - urn:ngm:class:blockchain
  - urn:ngm:class:eclipse-attack
  - urn:ngm:class:finality
  - urn:ngm:class:mining
  - urn:ngm:class:network-topology
  - urn:ngm:class:node
  - urn:ngm:class:sybil-attack
---

# Blockchain Network

A Blockchain Network is a permissionless or permissioned peer-to-peer (P2P) overlay network through which participating nodes collectively maintain, validate, and propagate a shared append-only ledger (the blockchain) without relying on any central coordinator, achieving agreement through a deter...
