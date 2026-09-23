---
okf_version: "0.2"
type: Class
title: Nostr Relay Endpoint Registry
resource: urn:ngm:class:nostr-relay-endpoint-registry
domain: blockchain
description: "A Nostr relay list is a curated or automatically discovered list of WebSocket relay server endpoints that a Nostr client uses to publish and subscribe to signed events. Because Nostr has no centralised routing, a client's relay list determines its social graph reach: events are broadcast to all listed relays, and the client pulls its feed from the same set. Relay lists are stored as NIP-65 kind:10"
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:network-component
uses:
  - urn:ngm:class:web-socket
  - urn:ngm:class:gossip-protocol
partOf:
  - urn:ngm:class:nostr-protocol
relatedTo:
  - urn:ngm:class:did-nostr-identity
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:decentralized-storage
  - urn:ngm:class:relayer
---

# Nostr Relay Endpoint Registry

A Nostr relay list is a curated or automatically discovered list of WebSocket relay server endpoints that a Nostr client uses to publish and subscribe to signed events. Because Nostr has no centralised routing, a client's relay list determines its social graph reach: events are broadcast to all listed relays, and the client pulls its feed from the same set. Relay lists are stored as NIP-65 kind:10002 events on the network itself, enabling portable relay preferences that travel with the user's public key across clients.
