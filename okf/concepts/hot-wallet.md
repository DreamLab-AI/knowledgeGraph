---
okf_version: "0.2"
type: Class
title: Hot Wallet
resource: urn:ngm:class:hot-wallet
domain: blockchain
description: A hot wallet is a cryptocurrency wallet whose private keys are held on an internet-connected device or service, enabling rapid signing and broadcasting of transactions. Its constant connectivity makes it convenient for frequent transfers, exchange operations, and decentralised-application interaction, but also exposes it to remote compromise. It contrasts with cold storage, where keys are kept off
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:crypto-wallet
hasPart:
  - urn:ngm:class:private-key
  - urn:ngm:class:key-management
requires:
  - urn:ngm:class:key-management
contrastsWith:
  - urn:ngm:class:cold-storage
  - urn:ngm:class:hardware-wallet
uses:
  - urn:ngm:class:seed-phrase
supports:
  - urn:ngm:class:cryptocurrency-exchange
  - urn:ngm:class:de-fi
partOf:
  - urn:ngm:class:digital-asset-custody
relatedTo:
  - urn:ngm:class:custodial-wallet
  - urn:ngm:class:multisig-wallet
  - urn:ngm:class:digital-wallet
---

# Hot Wallet

A hot wallet is a cryptocurrency wallet whose private keys are held on an internet-connected device or service, enabling rapid signing and broadcasting of transactions. Its constant connectivity makes it convenient for frequent transfers, exchange operations, and decentralised-application interaction, but also exposes it to remote compromise. It contrasts with cold storage, where keys are kept offline to minimise attack surface. Operators typically hold only operationally necessary balances in hot wallets and sweep surplus funds to cold storage.
