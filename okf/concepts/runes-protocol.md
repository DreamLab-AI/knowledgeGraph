---
okf_version: "0.2"
type: Class
title: Runes Protocol
resource: urn:ngm:class:runes-protocol
domain: blockchain
description: Runes Protocol is a fungible token standard for the Bitcoin blockchain, introduced by Casey Rodarmor in 2024, that encodes token creation and transfer instructions directly into transaction outputs using the UTXO model. Unlike account-based token systems, Runes attaches a OP_RETURN-stored protocol message (a Runestone) to each transaction, assigning token balances to specific outputs so that owner
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:token-standard
requires:
  - urn:ngm:class:utxo
  - urn:ngm:class:bitcoin-transaction
  - urn:ngm:class:op-return
enables:
  - urn:ngm:class:fungible-token
  - urn:ngm:class:minting
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:minting
implements:
  - urn:ngm:class:token-standard
contrastsWith:
  - urn:ngm:class:brc-20
  - urn:ngm:class:ordinals
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:ordinals
  - urn:ngm:class:colored-coins
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:smart-contract
uses:
  - urn:ngm:class:bitcoin-proof-of-work-protocol
  - urn:ngm:class:blockchain-transaction
relatedTo:
  - urn:ngm:class:bitcoin-script
  - urn:ngm:class:digital-asset
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:tokenization
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:neural-network-text-tokenisation
---

# Runes Protocol

Runes Protocol is a fungible token standard for the Bitcoin blockchain, introduced by Casey Rodarmor in 2024, that encodes token creation and transfer instructions directly into transaction outputs using the UTXO model. Unlike account-based token systems, Runes attaches a OP_RETURN-stored protocol message (a Runestone) to each transaction, assigning token balances to specific outputs so that ownership is tracked through spendable transaction outputs rather than a separate ledger. The protocol is designed to be more on-chain efficient than earlier Bitcoin-native token conventions such as BRC-20 and Ordinals-based token schemes, minimising UTXO proliferation while remaining fully compatible with the base-layer Bitcoin settlement mechanism. It reached significant ecosystem traction following its mainnet launch at the Bitcoin halving block in April 2024.
