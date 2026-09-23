---
okf_version: "0.2"
type: Class
title: Sovereign Mesh
resource: urn:ngm:class:sovereign-mesh
domain: blockchain
description: A peer-to-peer agent network where each node is identified by a DID Nostr Identity|did:nostr:<pubkey> DIDs and communicates via Nostr Relay|Nostr relays, enabling decentralised agent discovery, gossip, and work distribution without a centralised broker or coordinator, whilst respecting ea...
maturity: established
quality: 0.87
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:peer-to-peer-network
hasPart:
  - urn:ngm:class:nostr-relay
  - urn:ngm:class:did-nostr-identity
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:peer-discovery
  - urn:ngm:class:agent-beacon
requires:
  - urn:ngm:class:bip-340-schnorr-keypair
  - urn:ngm:class:message-signing
  - urn:ngm:class:network-connectivity
  - urn:ngm:class:nostr-protocol
enables:
  - urn:ngm:class:decentralised-agent-coordination-initiative
  - urn:ngm:class:federation
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:decentralised-agent-coordination-initiative
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:work-distribution
implements:
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:nostr-protocol
  - urn:ngm:class:w3-c-did-core
  - urn:ngm:class:nostr-protocol
  - urn:ngm:class:gossip-protocol
bridgesTo:
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:distributed-system
  - urn:ngm:class:decentralised-autonomous-organisation
---

# Sovereign Mesh

A peer-to-peer agent network where each node is identified by a DID Nostr Identity|did:nostr:<pubkey> DIDs and communicates via Nostr Relay|Nostr relays, enabling decentralised agent discovery, gossip, and work distribution without a centralised broker or coordinator, whilst respecting ea...
