---
okf_version: "0.2"
type: Class
title: Ipsec
resource: urn:ngm:class:ipsec
domain: security
description: IPsec (Internet Protocol Security) is a suite of protocols that secures IP communications by authenticating and encrypting each packet at the network layer. It provides confidentiality, integrity and origin authentication through the Authentication Header and Encapsulating Security Payload protocols, with keys negotiated via the Internet Key Exchange. IPsec is the foundational technology for site-
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:network-security
hasPart:
  - urn:ngm:class:encryption
  - urn:ngm:class:authentication
requires:
  - urn:ngm:class:internet-protocol
  - urn:ngm:class:key-management
enables:
  - urn:ngm:class:vpn
dependsOn:
  - urn:ngm:class:internet-protocol
implements:
  - urn:ngm:class:authentication
contrastsWith:
  - urn:ngm:class:tls
bridgesTo:
  - urn:ngm:class:vpn
uses:
  - urn:ngm:class:encryption
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:key-management
supports:
  - urn:ngm:class:vpn
  - urn:ngm:class:network-security
standardizedBy:
  - urn:ngm:class:internet-protocol
partOf:
  - urn:ngm:class:network-security
relatedTo:
  - urn:ngm:class:vpn
  - urn:ngm:class:cryptography
  - urn:ngm:class:public-key-cryptography
---

# Ipsec

IPsec (Internet Protocol Security) is a suite of protocols that secures IP communications by authenticating and encrypting each packet at the network layer. It provides confidentiality, integrity and origin authentication through the Authentication Header and Encapsulating Security Payload protocols, with keys negotiated via the Internet Key Exchange. IPsec is the foundational technology for site-to-site and remote-access virtual private networks operating transparently beneath application protocols.
