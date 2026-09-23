---
okf_version: "0.2"
type: Class
title: Multi Sig Governance
resource: urn:ngm:class:multi-sig-governance
domain: blockchain
description: Multi-signature (multi-sig) governance is a cryptographic threshold-signature scheme requiring m-of-n authorised keyholders to co-sign a transaction or message before it executes, eliminating single points of failure in digital-asset control and enabling graduated, committee-based decision-making...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:bc-governance-and-regulation
  - urn:ngm:class:blockchain-governance
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:access-control-system
  - urn:ngm:class:digital-signature
  - urn:ngm:class:threshold-cryptography
  - urn:ngm:class:committee-governance
  - urn:ngm:class:hash-function
hasPart:
  - urn:ngm:class:hardware-wallet
  - urn:ngm:class:script
  - urn:ngm:class:quorum
  - urn:ngm:class:cryptographic-signing
  - urn:ngm:class:timelock
  - urn:ngm:class:transaction
  - urn:ngm:class:policy-engine
  - urn:ngm:class:threshold-cryptography
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-signing
  - urn:ngm:class:script
  - urn:ngm:class:threshold-parameter
  - urn:ngm:class:quorum
  - urn:ngm:class:signer-ceremony
  - urn:ngm:class:transaction
  - urn:ngm:class:guardian-set
  - urn:ngm:class:mpc-key-share
  - urn:ngm:class:timelock
  - urn:ngm:class:nonce-commitment
requires:
  - urn:ngm:class:distributed-key-generation
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:secure-storage
  - urn:ngm:class:coordination-protocol
  - urn:ngm:class:ecdsa
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:secure-storage
  - urn:ngm:class:coordination-protocol
  - urn:ngm:class:schnorr-signatures
enables:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-etf-custody
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:institutional-custody
  - urn:ngm:class:layer-2-security-council
  - urn:ngm:class:social-recovery
  - urn:ngm:class:dao-governance
  - urn:ngm:class:treasury-management
  - urn:ngm:class:emergency-response-governance
  - urn:ngm:class:protocol-upgrade-control
  - urn:ngm:class:cross-chain-bridge
dependsOn:
  - urn:ngm:class:schnorr-signatures
  - urn:ngm:class:bitcoin-script
  - urn:ngm:class:ethereum-smart-contract-platform-smart-contracts
  - urn:ngm:class:bip-340
  - urn:ngm:class:bip-327
  - urn:ngm:class:secp256k1
  - urn:ngm:class:ed-dsa
  - urn:ngm:class:elliptic-curve-discrete-logarithm-problem
  - urn:ngm:class:paillier-cryptosystem
implements:
  - urn:ngm:class:bip-16
  - urn:ngm:class:erc-4337-account-abstraction
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:mpc-wallet
  - urn:ngm:class:mu-sig-2
  - urn:ngm:class:pay-to-script-hash
  - urn:ngm:class:gnosis-safe
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:roast-protocol
  - urn:ngm:class:gnosis-safe
  - urn:ngm:class:gg20-protocol
  - urn:ngm:class:cggmp21-protocol
contrastsWith:
  - urn:ngm:class:on-chain-voting
  - urn:ngm:class:snapshot-voting
  - urn:ngm:class:conviction-voting
  - urn:ngm:class:quadratic-voting
  - urn:ngm:class:timelock-contract
  - urn:ngm:class:single-key-wallet
  - urn:ngm:class:dao
  - urn:ngm:class:delegate-democracy
uses:
  - urn:ngm:class:argent
  - urn:ngm:class:bit-go
  - urn:ngm:class:copper-co
  - urn:ngm:class:fireblocks
  - urn:ngm:class:gnosis-safe
  - urn:ngm:class:hardware-wallet
  - urn:ngm:class:ledger
  - urn:ngm:class:trezor
  - urn:ngm:class:safe-wallet
  - urn:ngm:class:squads-protocol
  - urn:ngm:class:fireblocks
  - urn:ngm:class:argent
  - urn:ngm:class:bit-go
  - urn:ngm:class:copper-co
supports:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-etf-custody
  - urn:ngm:class:de-fi-protocol
  - urn:ngm:class:institutional-digital-asset-custody
  - urn:ngm:class:layer-2-security-council
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:payment-system
  - urn:ngm:class:dao
  - urn:ngm:class:lightning-network
  - urn:ngm:class:de-fi-protocol
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:payment-system
standardizedBy:
  - urn:ngm:class:bip-11
  - urn:ngm:class:bip-16
  - urn:ngm:class:bip-327
  - urn:ngm:class:bip-340
  - urn:ngm:class:bip-341
  - urn:ngm:class:eip-1271
  - urn:ngm:class:eip-4337
  - urn:ngm:class:eip-7702
  - urn:ngm:class:bip-373
  - urn:ngm:class:rfc-9591
  - urn:ngm:class:nist-ir-8214b
relatedTo:
  - urn:ngm:class:access-control-system
  - urn:ngm:class:bitcoin-proof-of-work-protocol-technical-overview
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:cryptography-security-and-privacy
  - urn:ngm:class:digital-signature
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:governance-token
  - urn:ngm:class:lightning-network
  - urn:ngm:class:smart-contract
  - urn:ngm:class:taproot-assets
  - urn:ngm:class:treasury-management
---

# Multi Sig Governance

Multi-signature (multi-sig) governance is a cryptographic threshold-signature scheme requiring m-of-n authorised keyholders to co-sign a transaction or message before it executes, eliminating single points of failure in digital-asset control and enabling graduated, committee-based decision-making...
