---
okf_version: "0.2"
type: Class
title: Security Infrastructure
resource: urn:ngm:class:security-infrastructure
domain: security
description: Security infrastructure encompasses the integrated set of hardware, software, processes, and policies that protect an organisation's information systems, networks, and data assets from unauthorised access, disruption, and exploitation. It includes perimeter defences, identity and access management systems, cryptographic key management, endpoint protection, monitoring and detection platforms, and i
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:security-framework
enables:
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:incident-response
uses:
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:authentication
  - urn:ngm:class:access-control
supports:
  - urn:ngm:class:nist
  - urn:ngm:class:audit-trail
relatedTo:
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:vulnerability
---

# Security Infrastructure

Security infrastructure encompasses the integrated set of hardware, software, processes, and policies that protect an organisation's information systems, networks, and data assets from unauthorised access, disruption, and exploitation. It includes perimeter defences, identity and access management systems, cryptographic key management, endpoint protection, monitoring and detection platforms, and incident response capabilities. Effective security infrastructure is layered—applying defence-in-depth principles so that compromise of any single control does not expose the entire system. Modern security infrastructure increasingly adopts zero-trust architectural principles, eliminating implicit trust based on network location and requiring continuous verification of every access request. Security infrastructure must align with regulatory requirements and evolve continuously in response to the changing threat landscape.
