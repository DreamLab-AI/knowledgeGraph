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
  - urn:ngm:class:decentralised-storage
requires:
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:smart-contract
  - urn:ngm:class:staking
enables:
  - urn:ngm:class:decentralised-application
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:decentralised-autonomous-organisation
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
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:blockchain-protocol
  - urn:ngm:class:decentralised-autonomous-organisation
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Filecoin

Filecoin is a decentralised storage network and blockchain protocol developed by Protocol Labs that creates a peer-to-peer marketplace for file storage and retrieval, using cryptographic proofs—Proof of Replication (PoRep) and Proof of Spacetime (PoSt)—to verifiably demonstrate that storage providers are dedicating physical disk space to client data over time. Storage providers earn FIL tokens by fulfilling storage deals and continuously proving their commitments on-chain, while clients pay FIL to store data with economic guarantees backed by the provider's staked collateral. Built on top of IPFS (InterPlanetary File System) for content-addressed data retrieval, Filecoin provides the economic incentive layer designed to make decentralised storage commercially viable, and has since expanded via the Filecoin Virtual Machine (FVM) to support programmable storage deals and decentralised autonomous organisations governing shared datasets.
