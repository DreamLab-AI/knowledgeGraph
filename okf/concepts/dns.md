---
okf_version: "0.2"
type: Class
title: DNS
resource: urn:ngm:class:dns
domain: infrastructure
description: The Domain Name System (DNS) is a hierarchical, distributed naming system and directory service that translates human-readable domain names into IP addresses and other resource records required for locating internet services. Operating as a global, federated database partitioned into zones, DNS uses a delegation tree rooted at thirteen authoritative root-server clusters and propagates queries recu
maturity: mature
quality: 0.75
is-a:
  - urn:ngm:class:application-layer
hasPart:
  - urn:ngm:class:dns-resolver
  - urn:ngm:class:authoritative-name-server
  - urn:ngm:class:dns-zone
  - urn:ngm:class:dns-record
requires:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:udp
  - urn:ngm:class:tcp
  - urn:ngm:class:ip-addressing
enables:
  - urn:ngm:class:http
  - urn:ngm:class:tls
  - urn:ngm:class:cdn
  - urn:ngm:class:service-discovery
  - urn:ngm:class:email-delivery
implements:
  - urn:ngm:class:dnssec
  - urn:ngm:class:dns-over-https
  - urn:ngm:class:dns-over-tls
contrastsWith:
  - urn:ngm:class:decentralised-naming
  - urn:ngm:class:blockchain-naming
bridgesTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:distributed-systems
standardizedBy:
  - urn:ngm:class:ietf
  - urn:ngm:class:icann
relatedTo:
  - urn:ngm:class:load-balancing
  - urn:ngm:class:anycast-routing
  - urn:ngm:class:network-security
  - urn:ngm:class:caching
---

# DNS

The Domain Name System (DNS) is a hierarchical, distributed naming system and directory service that translates human-readable domain names into IP addresses and other resource records required for locating internet services. Operating as a global, federated database partitioned into zones, DNS uses a delegation tree rooted at thirteen authoritative root-server clusters and propagates queries recursively through top-level domain, second-level domain, and sub-domain name servers. It is defined in RFC 1034 and RFC 1035 and extended by DNSSEC (RFC 4033-4035) to provide cryptographic integrity verification of responses, mitigating cache poisoning, spoofing, and man-in-the-middle attacks against the resolution chain.
