---
okf_version: "0.2"
type: Class
title: Wormhole
resource: urn:ngm:class:wormhole
domain: blockchain
description: "Wormhole is a decentralised, generic cross-chain messaging and asset-transfer protocol that connects heterogeneous blockchain networks by relying on a permissioned guardian network whose supermajority attestations produce signed Verified Action Approval (VAA) messages. On-chain core contracts on each supported network verify VAAs to lock, mint, or burn assets and to route arbitrary data payloads, "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cross-chain-bridge
requires:
  - urn:ngm:class:validator-node
  - urn:ngm:class:quorum-consensus
  - urn:ngm:class:event-log
enables:
  - urn:ngm:class:cross-chain-asset-transfer
  - urn:ngm:class:cross-chain-messaging
  - urn:ngm:class:token-bridging
  - urn:ngm:class:nft-bridging
contrastsWith:
  - urn:ngm:class:layer-zero
  - urn:ngm:class:axelar
  - urn:ngm:class:ibc
  - urn:ngm:class:light-client
  - urn:ngm:class:ibc
  - urn:ngm:class:light-client
bridgesTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:intent-based-bridging
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:multisignature
  - urn:ngm:class:lock-and-mint-mechanism
  - urn:ngm:class:guardian-network
  - urn:ngm:class:multisignature
partOf:
  - urn:ngm:class:multichain-ecosystem
  - urn:ngm:class:multi-chain-ecosystem
relatedTo:
  - urn:ngm:class:cross-chain-interoperability
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:de-fi
  - urn:ngm:class:oracle-network
  - urn:ngm:class:governance-token
---

# Wormhole

Wormhole is a decentralised, generic cross-chain messaging and asset-transfer protocol that connects heterogeneous blockchain networks by relying on a permissioned guardian network whose supermajority attestations produce signed Verified Action Approval (VAA) messages. On-chain core contracts on each supported network verify VAAs to lock, mint, or burn assets and to route arbitrary data payloads, making Wormhole a general-purpose interoperability layer rather than a simple token bridge. Originally launched in 2020 as a Solana–Ethereum wrapped-asset bridge by Certus One, it has expanded to support over 30 layer-1 and layer-2 ecosystems under stewardship of the independent Wormhole Foundation.
