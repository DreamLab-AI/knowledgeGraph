---
okf_version: "0.2"
type: Class
title: Snapshot
resource: urn:ngm:class:snapshot
domain: blockchain
description: Snapshot is an off-chain governance platform that lets token holders and decentralised autonomous organisations vote on proposals without paying on-chain transaction fees. Votes are signed cryptographically with a wallet and weighted according to token holdings recorded at a chosen block height, then aggregated and stored on the InterPlanetary File System. Because voting is gasless and non-binding
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:de-fi
  - urn:ngm:class:decentralised-finance-domain
hasPart:
  - urn:ngm:class:voting-systems
  - urn:ngm:class:governance-proposal
requires:
  - urn:ngm:class:ipfs
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:erc-20-token-standard
enables:
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:quadratic-voting
  - urn:ngm:class:token-weighted-voting
dependsOn:
  - urn:ngm:class:blockchain-wallet
  - urn:ngm:class:smart-contract
contrastsWith:
  - urn:ngm:class:on-chain-voting
  - urn:ngm:class:governance
bridgesTo:
  - urn:ngm:class:distributed-storage
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:gnosis-safe
  - urn:ngm:class:governance-domain
uses:
  - urn:ngm:class:multisignature-wallets
  - urn:ngm:class:gnosis-safe
supports:
  - urn:ngm:class:decentralised-governance
partOf:
  - urn:ngm:class:governance
relatedTo:
  - urn:ngm:class:aragon
  - urn:ngm:class:tally
---

# Snapshot

Snapshot is an off-chain governance platform that lets token holders and decentralised autonomous organisations vote on proposals without paying on-chain transaction fees. Votes are signed cryptographically with a wallet and weighted according to token holdings recorded at a chosen block height, then aggregated and stored on the InterPlanetary File System. Because voting is gasless and non-binding at the protocol level, results are typically executed separately by multisignature wallets or on-chain modules.
