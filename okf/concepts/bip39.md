---
okf_version: "0.2"
type: Class
title: BIP-39
resource: urn:ngm:class:bip39
domain: blockchain
description: BIP-39 is a Bitcoin Improvement Proposal that defines how to encode wallet entropy as a human-readable mnemonic seed phrase and how to derive a binary seed from it. It maps random entropy plus a checksum onto words drawn from a fixed wordlist, then stretches the phrase and an optional passphrase into a seed via a key derivation function. The resulting seed feeds hierarchical deterministic wallets,
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:seed-phrase
requires:
  - urn:ngm:class:entropy
  - urn:ngm:class:hash-function
enables:
  - urn:ngm:class:hierarchical-deterministic-wallet
dependsOn:
  - urn:ngm:class:private-key
implements:
  - urn:ngm:class:seed-phrase
  - urn:ngm:class:key-derivation-function
uses:
  - urn:ngm:class:key-derivation-function
supports:
  - urn:ngm:class:hardware-wallet
  - urn:ngm:class:cryptocurrency-wallet
relatedTo:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:bitcoin
  - urn:ngm:class:wallet
---

# BIP-39

BIP-39 is a Bitcoin Improvement Proposal that defines how to encode wallet entropy as a human-readable mnemonic seed phrase and how to derive a binary seed from it. It maps random entropy plus a checksum onto words drawn from a fixed wordlist, then stretches the phrase and an optional passphrase into a seed via a key derivation function. The resulting seed feeds hierarchical deterministic wallets, making secrets easier to back up and transcribe.
