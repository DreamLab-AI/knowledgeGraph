---
okf_version: "0.2"
type: Class
title: Trezor
resource: urn:ngm:class:trezor
domain: blockchain
description: Trezor is a line of hardware wallets developed by SatoshiLabs that store cryptocurrency private keys in a tamper-resistant, air-gapped physical device, preventing key exposure to internet-connected hosts. Transactions are signed entirely within the secure element of the device, meaning the private key never leaves the hardware even during active use. Trezor devices implement BIP32 hierarchical det
maturity: mature
quality: 0.75
is-a:
  - urn:ngm:class:cold-storage
hasPart:
  - urn:ngm:class:secure-element
  - urn:ngm:class:seed-phrase
  - urn:ngm:class:pin-protection
requires:
  - urn:ngm:class:private-key
  - urn:ngm:class:bip39
  - urn:ngm:class:usb-interface
  - urn:ngm:class:bip39
enables:
  - urn:ngm:class:self-custody
  - urn:ngm:class:transaction-signing
  - urn:ngm:class:multi-currency-support
  - urn:ngm:class:passphrase-encryption
dependsOn:
  - urn:ngm:class:key-derivation-function
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:key-derivation-function
implements:
  - urn:ngm:class:bip44
  - urn:ngm:class:open-source-firmware
  - urn:ngm:class:bip32
contrastsWith:
  - urn:ngm:class:ledger
  - urn:ngm:class:hot-wallet
  - urn:ngm:class:custodial-wallet
bridgesTo:
  - urn:ngm:class:tee
  - urn:ngm:class:supply-chain-security
uses:
  - urn:ngm:class:shamir-secret-sharing
  - urn:ngm:class:hierarchical-deterministic-wallet
supports:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:ethereum
  - urn:ngm:class:de-fi
partOf:
  - urn:ngm:class:hardware-wallet
  - urn:ngm:class:self-custody
relatedTo:
  - urn:ngm:class:key-management
  - urn:ngm:class:cryptographic-signing
  - urn:ngm:class:wallet-connect
  - urn:ngm:class:walletconnect
---

# Trezor

Trezor is a line of hardware wallets developed by SatoshiLabs that store cryptocurrency private keys in a tamper-resistant, air-gapped physical device, preventing key exposure to internet-connected hosts. Transactions are signed entirely within the secure element of the device, meaning the private key never leaves the hardware even during active use. Trezor devices implement BIP32 hierarchical deterministic (HD) wallet derivation, BIP39 mnemonic seed phrases, and BIP44 multi-account structures, making them a foundational reference implementation for open-source hardware wallet design. As a mature consumer product launched in 2014, Trezor represents the established category of cold-storage self-custody devices that underpin non-custodial asset management in decentralised finance.
