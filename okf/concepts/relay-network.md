---
okf_version: "0.2"
type: Class
title: Relay Network
resource: urn:ngm:class:relay-network
domain: blockchain
description: A Relay Network is a set of intermediary nodes that forward messages, transactions, or data between participants who are not directly connected, improving reach, latency, privacy, or censorship-resistance. Relays do not necessarily originate or consume the content they pass on; they propagate it across the topology so that information reaches its destination efficiently. In blockchain systems, rel
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:overlay-network
  - urn:ngm:class:network-component
hasPart:
  - urn:ngm:class:overlay-network
  - urn:ngm:class:peer-to-peer-network
requires:
  - urn:ngm:class:routing-protocol
  - urn:ngm:class:network-topology
enables:
  - urn:ngm:class:cross-chain-messaging
  - urn:ngm:class:anonymity
dependsOn:
  - urn:ngm:class:node
  - urn:ngm:class:network-infrastructure
implements:
  - urn:ngm:class:onion-routing
contrastsWith:
  - urn:ngm:class:mesh-network
uses:
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:message-passing
supports:
  - urn:ngm:class:tor
  - urn:ngm:class:nostr
partOf:
  - urn:ngm:class:overlay-network
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:cross-chain-bridge
---

# Relay Network

A Relay Network is a set of intermediary nodes that forward messages, transactions, or data between participants who are not directly connected, improving reach, latency, privacy, or censorship-resistance. Relays do not necessarily originate or consume the content they pass on; they propagate it across the topology so that information reaches its destination efficiently. In blockchain systems, relay networks accelerate block and transaction propagation and connect cross-chain messaging; in privacy systems such as Tor and Nostr, relays forward traffic to obscure origin or to disseminate events. Relay networks depend on robust routing, redundancy, and incentive or trust assumptions.
