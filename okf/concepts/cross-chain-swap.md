---
okf_version: "0.2"
type: Class
title: Cross-Chain Swap
resource: urn:ngm:class:cross-chain-swap
domain: blockchain
description: "A cross-chain swap is the exchange of a token or asset held on one blockchain network for a different asset held on another network, without relying on a centralised exchange as intermediary. It is typically executed via a cross-chain bridge that locks or burns the source asset and mints or releases an equivalent representation on the destination chain, or via atomic swap protocols that guarantee "
maturity: emerging
quality: 0.55
is-a:
  - urn:ngm:class:cross-chain-bridge
requires:
  - urn:ngm:class:cross-chain-bridge
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Cross-Chain Swap

A cross-chain swap is the exchange of a token or asset held on one blockchain network for a different asset held on another network, without relying on a centralised exchange as intermediary. It is typically executed via a cross-chain bridge that locks or burns the source asset and mints or releases an equivalent representation on the destination chain, or via atomic swap protocols that guarantee both legs settle or neither does. Cross-chain swaps are a core primitive for multi-chain liquidity, enabling decentralised exchanges such as Osmosis to route trades across ecosystems.
