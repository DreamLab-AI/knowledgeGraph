---
okf_version: "0.2"
type: Class
title: Token Standard
resource: urn:ngm:class:token-standard
domain: blockchain
description: Technical specification defining rules, interfaces, and functions that smart contract tokens must implement to ensure interoperability within a blockchain ecosystem, exemplified by ERC-20 (fungible tokens), ERC-721 (NFTs), and ERC-1155 (multi-token), establishing common APIs for transfers, balance queries, approvals, and metadata across wallets, exchanges, and decentralised applications.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:bc-token-and-asset
  - urn:ngm:class:blockchain
hasPart:
  - urn:ngm:class:erc-20
  - urn:ngm:class:erc-721
  - urn:ngm:class:erc-1155
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:application-binary-interface
enables:
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:decentralised-finance
  - urn:ngm:class:token-interoperability
  - urn:ngm:class:smart-contract
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
implements:
  - urn:ngm:class:fungibility
contrastsWith:
  - urn:ngm:class:native-token
  - urn:ngm:class:central-bank-digital-currency
bridgesTo:
  - urn:ngm:class:digital-asset-standards
  - urn:ngm:class:data-schema
uses:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:event-log
  - urn:ngm:class:decentralised-exchange
supports:
  - urn:ngm:class:nft
  - urn:ngm:class:stablecoin
  - urn:ngm:class:governance-token
standardizedBy:
  - urn:ngm:class:ethereum-improvement-proposal
partOf:
  - urn:ngm:class:blockchain-protocol
  - urn:ngm:class:decentralised-finance
relatedTo:
  - urn:ngm:class:wallet
  - urn:ngm:class:token-metadata
  - urn:ngm:class:nft
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Token Standard

Technical specification defining rules, interfaces, and functions that smart contract tokens must implement to ensure interoperability within a blockchain ecosystem, exemplified by ERC-20 (fungible tokens), ERC-721 (NFTs), and ERC-1155 (multi-token), establishing common APIs for transfers, balance queries, approvals, and metadata across wallets, exchanges, and decentralised applications.
