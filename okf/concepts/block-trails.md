---
okf_version: "0.2"
type: Class
title: Block Trails
resource: urn:ngm:class:block-trails
domain: blockchain
description: Block Trails is a minimal Bitcoin-native state-anchoring primitive that records an evolving sequence of states as a cryptographic chain of key tweaks mirroring a Bitcoin spend chain. Each state transition derives a tweak t_i = SHA256(state_i) mod n which is scalar-added to the previous key (d_i = d_(i-1) + t_i), producing a fresh pay-to-Taproot (P2TR) key-path output; spending that output to creat
maturity: emerging
quality: 0.74
is-a:
  - urn:ngm:class:client-side-validation
hasPart:
  - urn:ngm:class:single-use-seals
enables:
  - urn:ngm:class:provenance-tracking
  - urn:ngm:class:fungible-token
  - urn:ngm:class:asset-tokenisation
dependsOn:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-network
  - urn:ngm:class:utxo-model
  - urn:ngm:class:proof-of-publication
implements:
  - urn:ngm:class:client-side-validation
  - urn:ngm:class:single-use-seals
contrastsWith:
  - urn:ngm:class:rgb-protocol
  - urn:ngm:class:taproot-assets
bridgesTo:
  - urn:ngm:class:nostr
  - urn:ngm:class:content-addressed-storage
  - urn:ngm:class:git
uses:
  - urn:ngm:class:taproot
  - urn:ngm:class:secp256k1
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:sha-256
  - urn:ngm:class:cryptographic-commitment
relatedTo:
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:decentralised-application
  - urn:ngm:class:rgb-and-client-side-validation
---

# Block Trails

Block Trails is a minimal Bitcoin-native state-anchoring primitive that records an evolving sequence of states as a cryptographic chain of key tweaks mirroring a Bitcoin spend chain. Each state transition derives a tweak t_i = SHA256(state_i) mod n which is scalar-added to the previous key (d_i = d_(i-1) + t_i), producing a fresh pay-to-Taproot (P2TR) key-path output; spending that output to create the next commitment makes every UTXO a single-use seal. The state bytes themselves live off-chain on IPFS, Git, or Nostr relays, while Bitcoin's UTXO model supplies ordering and double-spend protection so that exactly one valid history can exist. Because trails use full secp256k1 keys, existing Nostr identities can own and advance a trail without key conversion. Application semantics are defined by Profiles such as MRC20 (a fungible-token ledger) and Git-mark (anchoring Git commits).
