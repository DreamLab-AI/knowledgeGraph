---
okf_version: "0.2"
type: Class
title: Bitcoin Fungible Token Protocols
resource: urn:ngm:class:bitcoin-proof-of-work-protocol-fungible-token-protocols
domain: infrastructure
description: "Runes and Glyphs refers to two complementary Bitcoin token protocols: Runes, which encodes fungible token balances directly in Bitcoin transaction outputs using OP_RETURN data, and Glyphs, a related protocol developed by Melvin Carvalho that encodes token metadata as on-chain inscriptions compatible with the Ordinals framework. Together they extend Bitcoin's base layer with native fungible asset i"
maturity: emerging
quality: 0.35
is-a:
  - urn:ngm:class:software-engineering
enables:
  - urn:ngm:class:digital-asset
  - urn:ngm:class:asset-tokenisation
uses:
  - urn:ngm:class:digital-objects
  - urn:ngm:class:nft
partOf:
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:decentralised-autonomous-organisation
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Bitcoin Fungible Token Protocols

Runes and Glyphs refers to two complementary Bitcoin token protocols: Runes, which encodes fungible token balances directly in Bitcoin transaction outputs using OP_RETURN data, and Glyphs, a related protocol developed by Melvin Carvalho that encodes token metadata as on-chain inscriptions compatible with the Ordinals framework. Together they extend Bitcoin's base layer with native fungible asset issuance without requiring a separate blockchain, enabling DAOs, project tokens, and programmable digital objects on Bitcoin testnet and mainnet.
