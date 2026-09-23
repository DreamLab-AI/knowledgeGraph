---
okf_version: "0.2"
type: Class
title: Ethereum Name Service
resource: urn:ngm:class:ethereum-smart-contract-platform-name-service
domain: blockchain
description: The Ethereum Name Service (ENS) is a decentralised, open-source naming protocol deployed on Ethereum that maps human-readable names (e.g. 'alice.eth') to machine-readable identifiers including wallet addresses, content hashes, and arbitrary metadata stored on-chain. It operates through a hierarchy of smart contracts — a central registry recording ownership and resolver assignments, and resolver co
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:network-component
requires:
  - urn:ngm:class:ethereum
  - urn:ngm:class:smart-contract
  - urn:ngm:class:non-fungible-token
enables:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:decentralised-application
  - urn:ngm:class:web3-wallet
  - urn:ngm:class:human-readable-address
implements:
  - urn:ngm:class:erc-137
  - urn:ngm:class:erc-721-standard
contrastsWith:
  - urn:ngm:class:domain-name-system
  - urn:ngm:class:unstoppable-domains
  - urn:ngm:class:handshake-protocol
bridgesTo:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:verifiable-credential-vc
uses:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:namehash-algorithm
  - urn:ngm:class:ethereum-transaction
standardizedBy:
  - urn:ngm:class:ethereum-smart-contract-platform-foundation
relatedTo:
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:ipfs
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:eip
  - urn:ngm:class:reverse-resolution
---

# Ethereum Name Service

The Ethereum Name Service (ENS) is a decentralised, open-source naming protocol deployed on Ethereum that maps human-readable names (e.g. 'alice.eth') to machine-readable identifiers including wallet addresses, content hashes, and arbitrary metadata stored on-chain. It operates through a hierarchy of smart contracts — a central registry recording ownership and resolver assignments, and resolver contracts that translate names to resources according to standardised ERC specifications. ENS names are minted as ERC-721 non-fungible tokens, granting cryptographic ownership without reliance on a centralised registrar, and extending DNS-compatible reverse resolution so on-chain addresses can be presented as readable identities. The protocol has become the dominant blockchain naming infrastructure on Ethereum, with millions of registered names and integrations across wallets, browsers, and decentralised applications.
