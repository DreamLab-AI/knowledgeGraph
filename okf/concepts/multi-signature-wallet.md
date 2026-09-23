---
okf_version: "0.2"
type: Class
title: Multi-Signature Wallet
resource: urn:ngm:class:multi-signature-wallet
domain: blockchain
description: A multi-signature wallet is a cryptographic account on a blockchain network that requires M-of-N authorisation — where a minimum of M private key holders out of a total of N authorised signers must collectively sign a transaction before it is considered valid and broadcast to the network. This threshold scheme eliminates single points of failure in asset custody, distributing the risk of key compr
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:digital-wallet
hasPart:
  - urn:ngm:class:quorum
  - urn:ngm:class:timelock-controller
requires:
  - urn:ngm:class:private-key
  - urn:ngm:class:transaction-signing
enables:
  - urn:ngm:class:dao-governance
  - urn:ngm:class:multi-sig-governance
  - urn:ngm:class:treasury-management
  - urn:ngm:class:institutional-custody
  - urn:ngm:class:social-recovery
dependsOn:
  - urn:ngm:class:key-management
  - urn:ngm:class:digital-signature
  - urn:ngm:class:consensus-mechanism
implements:
  - urn:ngm:class:threshold-cryptography
  - urn:ngm:class:bip-11
  - urn:ngm:class:pay-to-script-hash
contrastsWith:
  - urn:ngm:class:single-key-wallet
  - urn:ngm:class:custodial-wallet
bridgesTo:
  - urn:ngm:class:multi-party-computation
  - urn:ngm:class:account-abstraction
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:blockchain
  - urn:ngm:class:bitcoin-script
  - urn:ngm:class:public-key-cryptography
supports:
  - urn:ngm:class:de-fi
  - urn:ngm:class:exchange-custody
relatedTo:
  - urn:ngm:class:multi-signature
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:blockchain-security
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:hardware-security-module
---

# Multi-Signature Wallet

A multi-signature wallet is a cryptographic account on a blockchain network that requires M-of-N authorisation — where a minimum of M private key holders out of a total of N authorised signers must collectively sign a transaction before it is considered valid and broadcast to the network. This threshold scheme eliminates single points of failure in asset custody, distributing the risk of key compromise or loss across multiple independent parties or hardware devices. Multi-signature wallets are widely deployed for treasury management, DAO governance, and exchange hot wallets, and are implemented both as native Bitcoin script constructs and as smart contracts on EVM-compatible chains.
