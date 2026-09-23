---
okf_version: "0.2"
type: Class
title: Solana
resource: urn:ngm:class:solana
domain: blockchain
description: Solana is a high-performance layer-1 blockchain designed by Anatoly Yakovenko and co-founded with Greg Fitzgerald, launched as mainnet-beta in 2020 by Solana Labs and the Solana Foundation. Its defining innovation, Proof of History, embeds a cryptographic clock — a verifiable delay function based on sequential SHA-256 hashing — into the ledger itself, enabling validators to agree on transaction or
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:smart-contract-platform
  - urn:ngm:class:blockchain-network
hasPart:
  - urn:ngm:class:proof-of-history
  - urn:ngm:class:tower-bft
  - urn:ngm:class:sealevel
  - urn:ngm:class:gulf-stream
  - urn:ngm:class:turbine
requires:
  - urn:ngm:class:validator-node
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:nft-marketplace
  - urn:ngm:class:blockchain-gaming
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:web3
implements:
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:parallel-transaction-processing
contrastsWith:
  - urn:ngm:class:ethereum
  - urn:ngm:class:bitcoin
  - urn:ngm:class:avalanche
  - urn:ngm:class:near-protocol
bridgesTo:
  - urn:ngm:class:on-chain-ai-inference
  - urn:ngm:class:decentralised-compute
uses:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:verifiable-delay-function
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:rust-systems-programming-language
  - urn:ngm:class:rust-systems-programming-language
relatedTo:
  - urn:ngm:class:solana-program-library
  - urn:ngm:class:token-standard
  - urn:ngm:class:decentralised-autonomous-organisation
---

# Solana

Solana is a high-performance layer-1 blockchain designed by Anatoly Yakovenko and co-founded with Greg Fitzgerald, launched as mainnet-beta in 2020 by Solana Labs and the Solana Foundation. Its defining innovation, Proof of History, embeds a cryptographic clock — a verifiable delay function based on sequential SHA-256 hashing — into the ledger itself, enabling validators to agree on transaction ordering without peer-to-peer timestamp negotiation. This is complemented by the Sealevel parallel transaction execution runtime, the Gulf Stream mempool-less transaction forwarding protocol, Turbine block propagation, and the Tower BFT consensus algorithm, together enabling sustained throughputs of tens of thousands of transactions per second with sub-second finality at sub-cent fees. Solana underpins major DeFi ecosystems, NFT infrastructure, payments applications, and, more recently, AI-adjacent on-chain compute experiments.
