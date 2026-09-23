---
okf_version: "0.2"
type: Class
title: VPN
resource: urn:ngm:class:vpn
domain: security
description: A Virtual Private Network (VPN) is a security technology that establishes an encrypted tunnel between a user's device and a remote server, routing traffic through it so that data confidentiality and integrity are preserved across untrusted networks. By encapsulating and encrypting packets, a VPN conceals the user's originating address and protects communications from interception on shared or publ
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:network-security
requires:
  - urn:ngm:class:network-transport
  - urn:ngm:class:network-protocol
implements:
  - urn:ngm:class:encryption
  - urn:ngm:class:secure-communication
  - urn:ngm:class:tls
contrastsWith:
  - urn:ngm:class:tor
  - urn:ngm:class:onion-routing
bridgesTo:
  - urn:ngm:class:network-layer
uses:
  - urn:ngm:class:cryptographic-protocols
  - urn:ngm:class:authentication
supports:
  - urn:ngm:class:privacy
  - urn:ngm:class:data-privacy
  - urn:ngm:class:access-control
relatedTo:
  - urn:ngm:class:firewall
  - urn:ngm:class:network-security
  - urn:ngm:class:privacy-preserving-computation
---

# VPN

A Virtual Private Network (VPN) is a security technology that establishes an encrypted tunnel between a user's device and a remote server, routing traffic through it so that data confidentiality and integrity are preserved across untrusted networks. By encapsulating and encrypting packets, a VPN conceals the user's originating address and protects communications from interception on shared or public infrastructure. VPNs are widely used for secure remote access to private networks, for privacy on public Wi-Fi, and for circumventing network-level filtering.
