---
okf_version: "0.2"
type: Class
title: Blockchain Wallet
resource: urn:ngm:class:blockchain-wallet
domain: blockchain
description: A blockchain wallet is software or hardware that manages the cryptographic keys used to control assets and identities on a blockchain. Rather than storing assets directly, a wallet stores private keys, derives public addresses, and signs transactions that authorise the movement of on-chain assets. Wallets range from custodial services that hold keys on a user's behalf to self-custody solutions whe
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:key-management
requires:
  - urn:ngm:class:private-key
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:digital-signature
  - urn:ngm:class:seed-phrase
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:transaction-signing
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:smart-contract
supports:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:asset-management
partOf:
  - urn:ngm:class:de-fi
relatedTo:
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:hardware-wallet
  - urn:ngm:class:self-custody
  - urn:ngm:class:custody
  - urn:ngm:class:digital-asset
---

# Blockchain Wallet

A blockchain wallet is software or hardware that manages the cryptographic keys used to control assets and identities on a blockchain. Rather than storing assets directly, a wallet stores private keys, derives public addresses, and signs transactions that authorise the movement of on-chain assets. Wallets range from custodial services that hold keys on a user's behalf to self-custody solutions where the user retains exclusive control.
