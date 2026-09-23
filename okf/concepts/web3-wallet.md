---
okf_version: "0.2"
type: Class
title: Web3 Wallet
resource: urn:ngm:class:web3-wallet
domain: blockchain
description: A Web3 wallet is a software or hardware tool that manages a user's cryptographic key material and lets them hold blockchain assets, sign transactions and authenticate to decentralised applications. Unlike a custodial account, it places control of the private key with the user, who proves ownership and authorises state changes by signing locally. Web3 wallets typically expose an injected provider o
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cryptocurrency-wallet
requires:
  - urn:ngm:class:key-management
  - urn:ngm:class:self-custody
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:nft
  - urn:ngm:class:smart-contract
contrastsWith:
  - urn:ngm:class:custodial-exchange
uses:
  - urn:ngm:class:private-key
  - urn:ngm:class:public-key
  - urn:ngm:class:seed-phrase
supports:
  - urn:ngm:class:ethereum
  - urn:ngm:class:multisig-wallet
relatedTo:
  - urn:ngm:class:non-custodial-wallet
  - urn:ngm:class:hardware-wallet
  - urn:ngm:class:wallet
---

# Web3 Wallet

A Web3 wallet is a software or hardware tool that manages a user's cryptographic key material and lets them hold blockchain assets, sign transactions and authenticate to decentralised applications. Unlike a custodial account, it places control of the private key with the user, who proves ownership and authorises state changes by signing locally. Web3 wallets typically expose an injected provider or connection protocol that bridges a browser or mobile app to one or more blockchain networks.
