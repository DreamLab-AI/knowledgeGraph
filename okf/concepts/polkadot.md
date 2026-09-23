---
okf_version: "0.2"
type: Class
title: Polkadot
resource: urn:ngm:class:polkadot
domain: blockchain
description: Polkadot is a heterogeneous multi-chain blockchain protocol designed by Gavin Wood and developed by Parity Technologies that enables independent application-specific blockchains — called parachains — to connect to a central relay chain, share its pooled security, and exchange messages and assets through the Cross-Consensus Message (XCM) format. Its nominated proof-of-stake consensus mechanism uses
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:blockchain-protocol
hasPart:
  - urn:ngm:class:polkadot-parachains
  - urn:ngm:class:xcm
  - urn:ngm:class:relay-chain
  - urn:ngm:class:xcm-cross-consensus-message-format
  - urn:ngm:class:dot-token
requires:
  - urn:ngm:class:nominated-proof-of-stake
  - urn:ngm:class:validator-set
  - urn:ngm:class:web-assembly
enables:
  - urn:ngm:class:cross-chain-messaging
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:protocol-upgrades
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:shared-security
  - urn:ngm:class:protocol-upgrades
dependsOn:
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:cryptographic-primitive
contrastsWith:
  - urn:ngm:class:cosmos-ibc
  - urn:ngm:class:ethereum
  - urn:ngm:class:avalanche
bridgesTo:
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:decentralised-identity
uses:
  - urn:ngm:class:web-assembly
  - urn:ngm:class:nominated-proof-of-stake
  - urn:ngm:class:substrate-framework
  - urn:ngm:class:babe-consensus
  - urn:ngm:class:grandpa-finality
relatedTo:
  - urn:ngm:class:cross-chain-interoperability
  - urn:ngm:class:web3
  - urn:ngm:class:de-fi
  - urn:ngm:class:smart-contracts
  - urn:ngm:class:kusama
---

# Polkadot

Polkadot is a heterogeneous multi-chain blockchain protocol designed by Gavin Wood and developed by Parity Technologies that enables independent application-specific blockchains — called parachains — to connect to a central relay chain, share its pooled security, and exchange messages and assets through the Cross-Consensus Message (XCM) format. Its nominated proof-of-stake consensus mechanism uses DOT token validators to secure the relay chain whilst parachains benefit from shared security without needing to bootstrap their own validator sets. Polkadot is built on the Substrate framework, which allows developers to construct purpose-built WebAssembly-based runtimes supporting forkless on-chain upgrades. The protocol addresses the 'island of value' problem by providing a unified security and interoperability layer for a heterogeneous ecosystem of sovereign blockchains.
