---
okf_version: "0.2"
type: Class
title: Filecoin
resource: urn:ngm:class:filecoin
domain: blockchain
description: "Filecoin is a decentralised storage network and blockchain protocol developed by Protocol Labs that creates a peer-to-peer marketplace for file storage and retrieval, using cryptographic proofs—Proof of Replication (PoRep) and Proof of Spacetime (PoSt)—to verifiably demonstrate that storage providers are dedicating physical disk space to client data over time. Storage providers earn FIL tokens by "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:decentralized-storage
requires:
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:smart-contract
  - urn:ngm:class:staking
enables:
  - urn:ngm:class:decentralized-application
  - urn:ngm:class:dao
  - urn:ngm:class:dao
  - urn:ngm:class:nft-storage
  - urn:ngm:class:web3-storage
implements:
  - urn:ngm:class:token-economics
  - urn:ngm:class:proof-of-work
contrastsWith:
  - urn:ngm:class:arweave
  - urn:ngm:class:storj
  - urn:ngm:class:cloud-storage
  - urn:ngm:class:cloud-storage
bridgesTo:
  - urn:ngm:class:machine-learning-discipline-infrastructure
  - urn:ngm:class:ai-dataset-management
uses:
  - urn:ngm:class:ipfs
  - urn:ngm:class:libp2p
  - urn:ngm:class:content-addressed-storage
  - urn:ngm:class:proof-of-spacetime
  - urn:ngm:class:proof-of-replication
relatedTo:
  - urn:ngm:class:distributed-storage
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:dao
  - urn:ngm:class:blockchain-protocol
  - urn:ngm:class:decentralized-autonomous-organization
---

# Filecoin

Filecoin is a decentralised storage network and blockchain protocol developed by Protocol Labs that creates a peer-to-peer marketplace for file storage and retrieval, using cryptographic proofs—Proof of Replication (PoRep) and Proof of Spacetime (PoSt)—to verifiably demonstrate that storage providers are dedicating physical disk space to client data over time. Storage providers earn FIL tokens by fulfilling storage deals and continuously proving their commitments on-chain, while clients pay FIL to store data with economic guarantees backed by the provider's staked collateral. Built on top of IPFS (InterPlanetary File System) for content-addressed data retrieval, Filecoin provides the economic incentive layer designed to make decentralised storage commercially viable, and has since expanded via the Filecoin Virtual Machine (FVM) to support programmable storage deals and decentralised autonomous organisations governing shared datasets.
