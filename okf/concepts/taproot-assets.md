---
okf_version: "0.2"
type: Class
title: Taproot Assets
resource: urn:ngm:class:taproot-assets
domain: blockchain
description: Taproot Assets (formerly Taro, renamed mid-2022) is a Bitcoin-native asset-issuance and transfer protocol developed by Lightning Labs, formally specified in BIPs 327-330, that enables arbitrary fungible tokens, non-fungible tokens, and stablecoins to be issued on the Bitcoin base layer using ...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:bc-token-and-asset
  - urn:ngm:class:bitcoin-proof-of-work-protocol
  - urn:ngm:class:bitcoin-protocol
  - urn:ngm:class:asset-issuance-protocol
  - urn:ngm:class:client-side-validation
  - urn:ngm:class:lightning-network-extension
  - urn:ngm:class:commitment-scheme
hasPart:
  - urn:ngm:class:merkle-sum-sparse-merkle-tree
  - urn:ngm:class:universe-registry
  - urn:ngm:class:asset-witness-proof
  - urn:ngm:class:taproot-script-leaf
  - urn:ngm:class:asset-group-key
  - urn:ngm:class:rfq-market
  - urn:ngm:class:tapd-daemon
  - urn:ngm:class:lightning-asset-channel
requires:
  - urn:ngm:class:bip-341
  - urn:ngm:class:bip-342
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:taproot
  - urn:ngm:class:tlv-encoding
  - urn:ngm:class:lightning-network
  - urn:ngm:class:utxo-model
  - urn:ngm:class:taproot
  - urn:ngm:class:schnorr-signatures
enables:
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:machine-to-machine-payments
  - urn:ngm:class:tokenised-securities
  - urn:ngm:class:multi-asset-lightning-payments
  - urn:ngm:class:bitcoin-native-stablecoins
  - urn:ngm:class:tokenised-securities
  - urn:ngm:class:nfts-on-bitcoin
  - urn:ngm:class:atomic-swap
dependsOn:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-network
  - urn:ngm:class:lightning-network
  - urn:ngm:class:taproot
  - urn:ngm:class:schnorr-signatures
  - urn:ngm:class:mast
  - urn:ngm:class:merkle-sum-tree
  - urn:ngm:class:sparse-merkle-tree
implements:
  - urn:ngm:class:bip-327
  - urn:ngm:class:bip-328
  - urn:ngm:class:bip-329
  - urn:ngm:class:bip-330
  - urn:ngm:class:client-side-validation
  - urn:ngm:class:commitment-scheme
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:commitment-scheme
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:rfq-multi-asset-routing
contrastsWith:
  - urn:ngm:class:rgb-protocol
  - urn:ngm:class:ordinals
  - urn:ngm:class:brc-20-tokens
  - urn:ngm:class:runes-protocol
  - urn:ngm:class:liquid-network
  - urn:ngm:class:ethereum-erc-20
  - urn:ngm:class:omni-layer
bridgesTo:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:ai-agent-economies
  - urn:ngm:class:stable-coins
  - urn:ngm:class:usdt
  - urn:ngm:class:atomic-swap
uses:
  - urn:ngm:class:htlc
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:tlv-encoding
  - urn:ngm:class:utxo-model
  - urn:ngm:class:taproot-transactions
  - urn:ngm:class:schnorr-signatures
  - urn:ngm:class:lightning-channels
  - urn:ngm:class:universe-servers
supports:
  - urn:ngm:class:decentralized-exchange
  - urn:ngm:class:machine-to-machine-payments
  - urn:ngm:class:stablecoins-on-bitcoin
  - urn:ngm:class:tether-usdt-on-lightning
  - urn:ngm:class:ai-agent-economies
  - urn:ngm:class:programmable-assets
  - urn:ngm:class:decentralised-exchange
standardizedBy:
  - urn:ngm:class:bip-327
  - urn:ngm:class:bip-328
  - urn:ngm:class:bip-329
  - urn:ngm:class:bip-330
  - urn:ngm:class:bip-341
  - urn:ngm:class:bip-342
  - urn:ngm:class:lightning-network-specification
relatedTo:
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:l-402-protocol
  - urn:ngm:class:lightning-labs
  - urn:ngm:class:x402-and-l402-payment-protocols
  - urn:ngm:class:bitcoin-proof-of-work-protocol-technical-overview
  - urn:ngm:class:btc-layer-3
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:x402-and-l402-payment-protocols
  - urn:ngm:class:joltz-wallet
  - urn:ngm:class:lightning-terminal
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:client-side-validation
  - urn:ngm:class:lightning-network
  - urn:ngm:class:rgb-protocol
  - urn:ngm:class:ordinals
---

# Taproot Assets

Taproot Assets (formerly Taro, renamed mid-2022) is a Bitcoin-native asset-issuance and transfer protocol developed by Lightning Labs, formally specified in BIPs 327-330, that enables arbitrary fungible tokens, non-fungible tokens, and stablecoins to be issued on the Bitcoin base layer using ...
