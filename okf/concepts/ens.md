---
okf_version: "0.2"
type: Class
title: ENS
resource: urn:ngm:class:ens
domain: blockchain
description: The Ethereum Name Service (ENS) is a decentralised, on-chain naming system built on Ethereum that maps human-readable names ending in .eth to Ethereum addresses, content hashes, multi-coin addresses, and arbitrary text records via ERC-137 compliant smart contracts and pluggable resolver contracts. It functions as the Web3 analogue of DNS, replacing opaque hexadecimal addresses with memorable, self
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:decentralised-identity
requires:
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
  - urn:ngm:class:on-chain-governance
enables:
  - urn:ngm:class:decentralised-web
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:web3
  - urn:ngm:class:decentralised-application
implements:
  - urn:ngm:class:erc-137
  - urn:ngm:class:eip-3668
  - urn:ngm:class:eip-3668-ccip-read
  - urn:ngm:class:slip-0044
contrastsWith:
  - urn:ngm:class:dns
  - urn:ngm:class:unstoppable-domains
bridgesTo:
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:verifiable-credential-vc
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:nft
  - urn:ngm:class:ethereum
  - urn:ngm:class:erc-721-standard
  - urn:ngm:class:ipfs
partOf:
  - urn:ngm:class:ethereum
  - urn:ngm:class:ethereum
relatedTo:
  - urn:ngm:class:dao
  - urn:ngm:class:wallet-address
  - urn:ngm:class:governance-token
  - urn:ngm:class:name-registry
---

# ENS

The Ethereum Name Service (ENS) is a decentralised, on-chain naming system built on Ethereum that maps human-readable names ending in .eth to Ethereum addresses, content hashes, multi-coin addresses, and arbitrary text records via ERC-137 compliant smart contracts and pluggable resolver contracts. It functions as the Web3 analogue of DNS, replacing opaque hexadecimal addresses with memorable, self-sovereign labels backed by ERC-721 NFTs and governed by the ENS DAO. Off-chain resolution via CCIP-Read (EIP-3668) extends the system to conventional databases with on-chain verification, reducing gas overhead for high-frequency updates whilst preserving trustless resolution semantics.
