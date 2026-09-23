---
okf_version: "0.2"
type: Class
title: Onion Routing
resource: urn:ngm:class:onion-routing
domain: security
description: "Onion routing is an anonymous-communication technique in which messages are wrapped in successive layers of encryption and relayed through a sequence of intermediary nodes, each of which removes one layer to learn only the next hop. Because no single relay knows both the source and destination, onion routing conceals the network path and protects communication metadata. It is the basis of the Tor "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:network-protocol
hasPart:
  - urn:ngm:class:node
requires:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:key-exchange
enables:
  - urn:ngm:class:censorship-resistance
  - urn:ngm:class:privacy
  - urn:ngm:class:anonymous-communication
dependsOn:
  - urn:ngm:class:distributed-trust
  - urn:ngm:class:network-routing
implements:
  - urn:ngm:class:tor
  - urn:ngm:class:lightning-network
contrastsWith:
  - urn:ngm:class:vpn
bridgesTo:
  - urn:ngm:class:payment-channel-network
  - urn:ngm:class:source-routing
uses:
  - urn:ngm:class:encryption
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:diffie-hellman-key-exchange
supports:
  - urn:ngm:class:data-privacy
  - urn:ngm:class:traffic-analysis-resistance
relatedTo:
  - urn:ngm:class:communication-protocol
---

# Onion Routing

Onion routing is an anonymous-communication technique in which messages are wrapped in successive layers of encryption and relayed through a sequence of intermediary nodes, each of which removes one layer to learn only the next hop. Because no single relay knows both the source and destination, onion routing conceals the network path and protects communication metadata. It is the basis of the Tor network and is adapted in systems such as the Lightning Network for private multi-hop payment forwarding.
