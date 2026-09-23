---
okf_version: "0.2"
type: Class
title: Cross-Chain Bridge
resource: urn:ngm:class:cross-chain-bridge
domain: blockchain
description: A Cross-Chain Bridge is a protocol-level interoperability artefact — comprising on-chain smart contracts on each connected blockchain plus an off-chain attestation, relay, or proving infrastructure — that enables the trust-minimised transfer of fungible tokens, non-fungible tokens, arbitrary mess...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:interoperability-protocol
  - urn:ngm:class:cross-chain-application
  - urn:ngm:class:asset-transfer-mechanism
  - urn:ngm:class:smart-contract-protocol
hasPart:
  - urn:ngm:class:bridge-contract
  - urn:ngm:class:cryptographic-proof-system
  - urn:ngm:class:settlement
  - urn:ngm:class:validator-set
  - urn:ngm:class:light-client
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:relayer
  - urn:ngm:class:message-verification-module
  - urn:ngm:class:settlement
requires:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:destination-chain-execution
  - urn:ngm:class:finality
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:digital-signature
  - urn:ngm:class:smart-contract
  - urn:ngm:class:finality
enables:
  - urn:ngm:class:cross-chain-asset-transfer
  - urn:ngm:class:cross-chain-composability
  - urn:ngm:class:cross-chain-swap
  - urn:ngm:class:multi-chain-de-fi
  - urn:ngm:class:omnichain-application
  - urn:ngm:class:wrapped-token
  - urn:ngm:class:chain-abstraction
dependsOn:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:merkle-proof
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:multi-party-computation
  - urn:ngm:class:optimistic-oracle
  - urn:ngm:class:restaked-validator
implements:
  - urn:ngm:class:burn-and-mint-bridge
  - urn:ngm:class:hash-time-locked-contract
  - urn:ngm:class:bridge
  - urn:ngm:class:lock-and-mint-bridge
  - urn:ngm:class:optimistic-verification
  - urn:ngm:class:light-client
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:liquidity-pool-bridge
  - urn:ngm:class:bridge
  - urn:ngm:class:light-client
contrastsWith:
  - urn:ngm:class:centralised-exchange-bridging
  - urn:ngm:class:custodial-asset-transfer
  - urn:ngm:class:side-chain
  - urn:ngm:class:native-rollup-interop
  - urn:ngm:class:atomic-swap-only-protocol
  - urn:ngm:class:notary-scheme
uses:
  - urn:ngm:class:fraud-proof
  - urn:ngm:class:multi-signature
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:tee
  - urn:ngm:class:zk-snarks
  - urn:ngm:class:zk-snark
  - urn:ngm:class:decentralised-verifier-network
  - urn:ngm:class:solver-network
supports:
  - urn:ngm:class:stablecoin
  - urn:ngm:class:wallet
  - urn:ngm:class:cross-chain-dex
  - urn:ngm:class:cross-chain-governance
  - urn:ngm:class:cross-chain-nft
  - urn:ngm:class:tokenised-real-world-asset-transfer
  - urn:ngm:class:multi-chain-lending
  - urn:ngm:class:stablecoin
  - urn:ngm:class:wallet
standardizedBy:
  - urn:ngm:class:erc-7683
  - urn:ngm:class:ibc-specification
  - urn:ngm:class:iso-20022
  - urn:ngm:class:open-bridge-standard
  - urn:ngm:class:erc-7281
  - urn:ngm:class:chain-agnostic-standards-alliance
relatedTo:
  - urn:ngm:class:across-protocol
  - urn:ngm:class:axelar
  - urn:ngm:class:chainlink-ccip
  - urn:ngm:class:connext
  - urn:ngm:class:hyperlane
  - urn:ngm:class:layer-zero
  - urn:ngm:class:squid-router
  - urn:ngm:class:wormhole
  - urn:ngm:class:stargate
  - urn:ngm:class:synapse-protocol
  - urn:ngm:class:li-fi
  - urn:ngm:class:jumper-exchange
  - urn:ngm:class:nexus-mutual
  - urn:ngm:class:polygon-zkevm-bridge
  - urn:ngm:class:polymer-hub
  - urn:ngm:class:blockchain-interoperability
---

# Cross-Chain Bridge

A Cross-Chain Bridge is a protocol-level interoperability artefact — comprising on-chain smart contracts on each connected blockchain plus an off-chain attestation, relay, or proving infrastructure — that enables the trust-minimised transfer of fungible tokens, non-fungible tokens, arbitrary mess...
