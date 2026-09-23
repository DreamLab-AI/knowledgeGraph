---
okf_version: "0.2"
type: Class
title: Nostr
resource: urn:ngm:class:nostr
domain: infrastructure
description: "Nostr (Notes and Other Stuff Transmitted by Relays) is an open, censorship-resistant social-messaging protocol in which user identity is a secp256k1 cryptographic key pair and all user activity consists of signed JSON events published to one or more relay servers over WebSocket connections. The protocol has no central authority: identity is purely the public key, relays are interchangeable infrast"
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:infra-network-and-comms
hasPart:
  - urn:ngm:class:nostr-event
  - urn:ngm:class:nostr-relay
  - urn:ngm:class:nostr-improvement-proposal
requires:
  - urn:ngm:class:relay-server
  - urn:ngm:class:event-signing
enables:
  - urn:ngm:class:censorship-resistance
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:social-network-graph
  - urn:ngm:class:decentralised-web
  - urn:ngm:class:micropayment
dependsOn:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:bitcoin
implements:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:open-protocol
contrastsWith:
  - urn:ngm:class:activity-pub
  - urn:ngm:class:matrix-protocol
  - urn:ngm:class:federated-social-networks
  - urn:ngm:class:federated-social-networks
bridgesTo:
  - urn:ngm:class:inter-agent-communication
  - urn:ngm:class:decentralised-ai
  - urn:ngm:class:did-nostr
  - urn:ngm:class:block-trails
  - urn:ngm:class:web-contracts
  - urn:ngm:class:javascript-solid-server
  - urn:ngm:class:inter-agent-communication
uses:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:web-socket
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:secp256k1
  - urn:ngm:class:json-data-interchange-format
  - urn:ngm:class:json-data-interchange-format
relatedTo:
  - urn:ngm:class:did-nostr-identity
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:value-for-value
---

# Nostr

Nostr (Notes and Other Stuff Transmitted by Relays) is an open, censorship-resistant social-messaging protocol in which user identity is a secp256k1 cryptographic key pair and all user activity consists of signed JSON events published to one or more relay servers over WebSocket connections. The protocol has no central authority: identity is purely the public key, relays are interchangeable infrastructure that store and forward events without requiring account registration, and clients subscribe using filter objects to receive matching events. Nostr Improvement Proposals (NIPs) extend the core event-kind system to cover short-form notes, long-form articles, encrypted direct messages, Lightning Network zap payments, community moderation, and decentralised identity verification. Its radical simplicity, cryptographic self-sovereignty, and tight integration with the Bitcoin and Lightning ecosystem have made Nostr the dominant open social layer for value-aligned decentralised communication.
