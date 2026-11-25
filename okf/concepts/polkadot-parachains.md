---
okf_version: "0.2"
type: Class
title: Polkadot Parachains
resource: urn:ngm:class:polkadot-parachains
domain: blockchain
description: Application-specific sovereign blockchains that lease a slot on the Polkadot Relay Chain, inheriting its shared security model and cross-chain messaging infrastructure. Parachains can have custom runtime logic, consensus rules, and token economics whilst relying on the relay chain's validator set for finalisation, enabling heterogeneous specialised chains to interoperate without sacrificing securi
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:blockchain
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:nominated-proof-of-stake
  - urn:ngm:class:validator-node
  - urn:ngm:class:web-assembly
enables:
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:cross-chain-messaging
  - urn:ngm:class:blockchain-scalability
partOf:
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:blockchain-protocol
  - urn:ngm:class:blockchain-governance
  - urn:ngm:class:smart-contract
  - urn:ngm:class:proof-of-stake
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Polkadot Parachains

Application-specific sovereign blockchains that lease a slot on the Polkadot Relay Chain, inheriting its shared security model and cross-chain messaging infrastructure. Parachains can have custom runtime logic, consensus rules, and token economics whilst relying on the relay chain's validator set for finalisation, enabling heterogeneous specialised chains to interoperate without sacrificing security or decentralisation.
