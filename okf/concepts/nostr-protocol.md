---
okf_version: "0.2"
type: Class
title: Nostr Protocol
resource: urn:ngm:class:nostr-protocol
domain: blockchain
description: Nostr (Notes and Other Stuff Transmitted by Relays) is a minimalist open protocol for censorship-resistant, decentralised messaging and identity, in which clients sign events with Schnorr Signatures|Schnorr signatures over the secp256k1 elliptic curve and broadcast them to any number of s...
maturity: established
quality: 0.7
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain
  - urn:ngm:class:decentralised-communication-protocol
  - urn:ngm:class:identity-system
hasPart:
  - urn:ngm:class:nostr
  - urn:ngm:class:nostr-event
  - urn:ngm:class:nostr-relay
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:web-id-profile
  - urn:ngm:class:nostr
  - urn:ngm:class:nip-architecture
  - urn:ngm:class:schnorr-signatures
requires:
  - urn:ngm:class:json-data-interchange-format-serialisation
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:secp256k1-elliptic-curve
  - urn:ngm:class:web-socket-protocol
  - urn:ngm:class:schnorr-signatures
enables:
  - urn:ngm:class:inter-agent-communication
  - urn:ngm:class:censorship-resistant-messaging
  - urn:ngm:class:data-vending-machine
  - urn:ngm:class:lightning-network
  - urn:ngm:class:inter-agent-communication
  - urn:ngm:class:lightning-network
dependsOn:
  - urn:ngm:class:web-socket-protocol
  - urn:ngm:class:eprosima-fast-dds
  - urn:ngm:class:secp256k1-library
implements:
  - urn:ngm:class:identity-verification
  - urn:ngm:class:identity-system
  - urn:ngm:class:nip-01-core-protocol
  - urn:ngm:class:identity-verification
  - urn:ngm:class:nip-47-wallet-connect
  - urn:ngm:class:nip-90-data-vending-machines
bridgesTo:
  - urn:ngm:class:did-nostr-identity
  - urn:ngm:class:bitcoin-proof-of-work-protocol-lightning-network
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:solid-pod
partOf:
  - urn:ngm:class:bitcoin-proof-of-work-protocol
  - urn:ngm:class:decentralised-web
  - urn:ngm:class:decentralised-web
  - urn:ngm:class:bitcoin-proof-of-work-protocol
---

# Nostr Protocol

Nostr (Notes and Other Stuff Transmitted by Relays) is a minimalist open protocol for censorship-resistant, decentralised messaging and identity, in which clients sign events with Schnorr Signatures|Schnorr signatures over the secp256k1 elliptic curve and broadcast them to any number of s...
