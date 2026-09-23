---
okf_version: "0.2"
type: Class
title: Scalability Solutions
resource: urn:ngm:class:scalability-solutions
domain: blockchain
description: Scalability solutions are a family of techniques, architectures, and protocols designed to increase the throughput, reduce latency, and lower transaction costs of distributed systems—especially blockchain networks—without sacrificing security or decentralisation. They span both on-chain approaches (sharding, improved consensus algorithms, data availability sampling) and off-chain or layer-2 approa
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:distributed-systems
hasPart:
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:sharding
  - urn:ngm:class:state-channel
  - urn:ngm:class:sidechain
  - urn:ngm:class:data-availability-sampling
  - urn:ngm:class:rollups
  - urn:ngm:class:state-channel
  - urn:ngm:class:sidechain
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:peer-to-peer-network
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:smart-contracts
  - urn:ngm:class:micropayments
  - urn:ngm:class:blockchain-interoperability
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:cryptographic-proofs
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:zero-knowledge-proof
contrastsWith:
  - urn:ngm:class:blockchain-trilemma
  - urn:ngm:class:monolithic-blockchain
bridgesTo:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:cloud-infrastructure
relatedTo:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:ethereum
  - urn:ngm:class:modular-blockchain
  - urn:ngm:class:optimistic-rollup
  - urn:ngm:class:optimistic-rollup
  - urn:ngm:class:zk-rollups
---

# Scalability Solutions

Scalability solutions are a family of techniques, architectures, and protocols designed to increase the throughput, reduce latency, and lower transaction costs of distributed systems—especially blockchain networks—without sacrificing security or decentralisation. They span both on-chain approaches (sharding, improved consensus algorithms, data availability sampling) and off-chain or layer-2 approaches (payment channels, rollups, sidechains) that defer computation or data storage away from the base layer. The discipline also extends beyond blockchains into general distributed-systems engineering, encompassing horizontal scaling, caching strategies, and peer-to-peer load distribution. Together these mechanisms address the fundamental tension between throughput, security, and decentralisation commonly formalised as the Blockchain Trilemma.
