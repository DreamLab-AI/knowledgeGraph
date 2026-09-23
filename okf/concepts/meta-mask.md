---
okf_version: "0.2"
type: Class
title: MetaMask
resource: urn:ngm:class:meta-mask
domain: blockchain
description: MetaMask is a self-custodial software cryptocurrency wallet, distributed as a browser extension (Chrome, Firefox, Brave, Edge) and mobile application (iOS and Android), that enables users to manage Ethereum and EVM-compatible blockchain assets directly in the browser without handing custody of private keys to a third party. It implements the EIP-1193 provider standard to expose a JavaScript API th
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:digital-wallet
requires:
  - urn:ngm:class:ethereum
  - urn:ngm:class:evm-compatible-blockchain
  - urn:ngm:class:json-data-interchange-format-rpc
  - urn:ngm:class:bip39
enables:
  - urn:ngm:class:web3
  - urn:ngm:class:decentralised-application
  - urn:ngm:class:nft-trading
  - urn:ngm:class:de-fi
implements:
  - urn:ngm:class:bip-32
  - urn:ngm:class:eip-1193
contrastsWith:
  - urn:ngm:class:custodial-wallet
  - urn:ngm:class:coinbase-wallet
  - urn:ngm:class:trust-wallet
bridgesTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:zero-knowledge-proof
uses:
  - urn:ngm:class:hierarchical-deterministic-wallet
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:seed-phrase
supports:
  - urn:ngm:class:self-custody
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:erc-721-standard
  - urn:ngm:class:hardware-wallet
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:erc-721-standard
relatedTo:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:gas-fee
  - urn:ngm:class:network-rpc-endpoint
---

# MetaMask

MetaMask is a self-custodial software cryptocurrency wallet, distributed as a browser extension (Chrome, Firefox, Brave, Edge) and mobile application (iOS and Android), that enables users to manage Ethereum and EVM-compatible blockchain assets directly in the browser without handing custody of private keys to a third party. It implements the EIP-1193 provider standard to expose a JavaScript API that decentralised applications (dApps) use to request signatures and transactions, making it the de facto gateway through which most users access Web3 services. MetaMask stores an encrypted HD wallet (BIP-32/BIP-39) locally in the browser's secure storage and signs all transactions client-side before broadcasting them to the chosen network via JSON-RPC. Developed by ConsenSys and first released in 2016, it is the most widely adopted non-custodial wallet by active monthly users.
