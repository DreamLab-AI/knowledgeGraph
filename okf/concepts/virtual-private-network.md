---
okf_version: "0.2"
type: Class
title: Virtual Private Network
resource: urn:ngm:class:virtual-private-network
domain: security
description: A virtual private network (VPN) is a technology that establishes an encrypted tunnel over a shared or public network, allowing devices to communicate as if they were directly connected to a private network. It authenticates endpoints, encrypts traffic in transit, and encapsulates packets so that data confidentiality and integrity are preserved across untrusted links. VPNs are used for secure remot
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:network-security
hasPart:
  - urn:ngm:class:encryption
  - urn:ngm:class:tunneling
requires:
  - urn:ngm:class:cryptography
  - urn:ngm:class:authentication
enables:
  - urn:ngm:class:remote-access
  - urn:ngm:class:privacy
contrastsWith:
  - urn:ngm:class:zero-trust
uses:
  - urn:ngm:class:encryption
  - urn:ngm:class:ipsec
  - urn:ngm:class:transport-layer-security
  - urn:ngm:class:authentication
supports:
  - urn:ngm:class:security
relatedTo:
  - urn:ngm:class:firewall
  - urn:ngm:class:access-control
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Virtual Private Network

A virtual private network (VPN) is a technology that establishes an encrypted tunnel over a shared or public network, allowing devices to communicate as if they were directly connected to a private network. It authenticates endpoints, encrypts traffic in transit, and encapsulates packets so that data confidentiality and integrity are preserved across untrusted links. VPNs are used for secure remote access to corporate resources, site-to-site connectivity, and privacy-preserving internet use. Common implementations rely on protocols such as IPsec, TLS, and WireGuard, though zero-trust architectures increasingly complement or supersede perimeter VPN models.
