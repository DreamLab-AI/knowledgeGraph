---
okf_version: "0.2"
type: Class
title: Tor
resource: urn:ngm:class:tor
domain: security
description: A free overlay network and software that provides anonymous communication by routing traffic through a series of volunteer-operated relays using layered encryption, enabling censorship resistance, traffic-analysis resistance, and onion service hosting.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:onion-routing
requires:
  - urn:ngm:class:onion-routing
  - urn:ngm:class:encryption
  - urn:ngm:class:relay-network
  - urn:ngm:class:public-key-cryptography
enables:
  - urn:ngm:class:privacy
  - urn:ngm:class:anonymity
  - urn:ngm:class:censorship-resistance
  - urn:ngm:class:traffic-analysis-resistance
  - urn:ngm:class:onion-services
implements:
  - urn:ngm:class:onion-routing
contrastsWith:
  - urn:ngm:class:vpn
  - urn:ngm:class:i2p
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:infrastructure
  - urn:ngm:class:network-security
uses:
  - urn:ngm:class:tls
relatedTo:
  - urn:ngm:class:network-security
  - urn:ngm:class:dark-web
  - urn:ngm:class:surveillance
---

# Tor

A free overlay network and software that provides anonymous communication by routing traffic through a series of volunteer-operated relays using layered encryption, enabling censorship resistance, traffic-analysis resistance, and onion service hosting.
