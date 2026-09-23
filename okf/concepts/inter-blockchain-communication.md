---
okf_version: "0.2"
type: Class
title: Inter-Blockchain Communication
resource: urn:ngm:class:inter-blockchain-communication
domain: blockchain
description: Inter-Blockchain Communication (IBC) is a standardised protocol that enables independent, sovereign blockchains to exchange data and transfer tokens trustlessly by verifying each other's consensus state. It defines transport, authentication and ordering semantics in which light clients on each chain verify the counterparty's headers, and relayers carry packets and acknowledgements between them. Or
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cross-chain-interoperability
hasPart:
  - urn:ngm:class:light-client
  - urn:ngm:class:message-passing
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:light-client
enables:
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:de-fi
  - urn:ngm:class:de-fi
implements:
  - urn:ngm:class:cross-chain-interoperability
bridgesTo:
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:polkadot
uses:
  - urn:ngm:class:tendermint
  - urn:ngm:class:cosmos-sdk
supports:
  - urn:ngm:class:validator-set
partOf:
  - urn:ngm:class:cosmos
  - urn:ngm:class:interoperability
relatedTo:
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:digital-signature
---

# Inter-Blockchain Communication

Inter-Blockchain Communication (IBC) is a standardised protocol that enables independent, sovereign blockchains to exchange data and transfer tokens trustlessly by verifying each other's consensus state. It defines transport, authentication and ordering semantics in which light clients on each chain verify the counterparty's headers, and relayers carry packets and acknowledgements between them. Originating in the Cosmos ecosystem, IBC provides a general-purpose interoperability layer for token transfers, cross-chain messaging and composable multi-chain applications.
