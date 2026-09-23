---
okf_version: "0.2"
type: Class
title: IP Addressing
resource: urn:ngm:class:ip-addressing
domain: infrastructure
description: IP addressing is the scheme by which every host and interface on an Internet Protocol network is assigned a numeric identifier used to locate and route datagrams to it. It encompasses the structure of IPv4 and IPv6 address spaces, the partition of addresses into network and host portions via subnet masks and prefixes, and the assignment mechanisms that allocate addresses to devices. Correct addres
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:internet-protocol
  - urn:ngm:class:network-infrastructure
hasPart:
  - urn:ngm:class:ipv4
  - urn:ngm:class:ipv6
requires:
  - urn:ngm:class:subnet-mask
enables:
  - urn:ngm:class:routing-protocol
  - urn:ngm:class:packet-switching
dependsOn:
  - urn:ngm:class:network-protocol
contrastsWith:
  - urn:ngm:class:domain-name-system
bridgesTo:
  - urn:ngm:class:routing-protocol
uses:
  - urn:ngm:class:dns
supports:
  - urn:ngm:class:domain-name-system
standardizedBy:
  - urn:ngm:class:ietf-rfc
partOf:
  - urn:ngm:class:internet-protocol
  - urn:ngm:class:tcp-ip
relatedTo:
  - urn:ngm:class:osi-model
  - urn:ngm:class:network-communication
---

# IP Addressing

IP addressing is the scheme by which every host and interface on an Internet Protocol network is assigned a numeric identifier used to locate and route datagrams to it. It encompasses the structure of IPv4 and IPv6 address spaces, the partition of addresses into network and host portions via subnet masks and prefixes, and the assignment mechanisms that allocate addresses to devices. Correct addressing is the precondition for routing decisions and end-to-end delivery across interconnected networks.
