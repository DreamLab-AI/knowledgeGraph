---
okf_version: "0.2"
type: Class
title: Cosmos IBC
resource: urn:ngm:class:cosmos-ibc
domain: blockchain
description: Inter-Blockchain Communication protocol that enables sovereign blockchain networks to exchange data and tokens trustlessly, using light clients and Merkle proofs to verify state across chains without centralised intermediaries, providing the foundational interoperability layer of the Cosmos ecosystem.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:cross-chain-communication
  - urn:ngm:class:interoperability-protocol
hasPart:
  - urn:ngm:class:state-channel
  - urn:ngm:class:fungible-token
  - urn:ngm:class:connection-protocol
  - urn:ngm:class:state-channel
  - urn:ngm:class:packet-system
requires:
  - urn:ngm:class:light-client
  - urn:ngm:class:authentication
  - urn:ngm:class:merkle-proof
  - urn:ngm:class:tendermint-consensus
  - urn:ngm:class:light-client
  - urn:ngm:class:authentication
enables:
  - urn:ngm:class:cross-chain-contracts
  - urn:ngm:class:value-transfer
  - urn:ngm:class:interchain-accounts
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:value-transfer
  - urn:ngm:class:cosmos
dependsOn:
  - urn:ngm:class:cosmos-sdk
  - urn:ngm:class:relayer
implements:
  - urn:ngm:class:interoperability-protocol
  - urn:ngm:class:ibc
contrastsWith:
  - urn:ngm:class:polkadot-xcm
  - urn:ngm:class:bridge
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:network-protocol
  - urn:ngm:class:polkadot-xcm
  - urn:ngm:class:layer-2-interop
uses:
  - urn:ngm:class:commitment-scheme
supports:
  - urn:ngm:class:layer-2-interop
  - urn:ngm:class:de-fi
partOf:
  - urn:ngm:class:cosmos
---

# Cosmos IBC

Inter-Blockchain Communication protocol that enables sovereign blockchain networks to exchange data and tokens trustlessly, using light clients and Merkle proofs to verify state across chains without centralised intermediaries, providing the foundational interoperability layer of the Cosmos ecosystem.
