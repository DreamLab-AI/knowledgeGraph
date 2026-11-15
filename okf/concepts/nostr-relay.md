---
okf_version: "0.2"
type: Class
title: Nostr Relay
resource: urn:ngm:class:nostr-relay
domain: infrastructure
description: "A Nostr Relay is a server that implements the Nostr protocol, accepting signed event objects from clients, storing them, and forwarding them to subscribed clients according to filter criteria. Relays are the infrastructure backbone of the Nostr decentralised social network: because there is no central server or consensus chain, the network's availability and censorship-resistance derive entirely f"
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:nostr-protocol
enables:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:did-nostr-identity
uses:
  - urn:ngm:class:web-socket-protocol
  - urn:ngm:class:public-key-cryptography
relatedTo:
  - urn:ngm:class:nostr
  - urn:ngm:class:relayer
  - urn:ngm:class:federated-identity
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Nostr Relay

A Nostr Relay is a server that implements the Nostr protocol, accepting signed event objects from clients, storing them, and forwarding them to subscribed clients according to filter criteria. Relays are the infrastructure backbone of the Nostr decentralised social network: because there is no central server or consensus chain, the network's availability and censorship-resistance derive entirely from the federated mesh of independently operated relays. Relays communicate with clients over persistent WebSocket connections using a simple JSON message format.
