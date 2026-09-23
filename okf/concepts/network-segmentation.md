---
okf_version: "0.2"
type: Class
title: Network Segmentation
resource: urn:ngm:class:network-segmentation
domain: security
description: Network segmentation is the security practice of dividing a computer network into smaller, isolated zones so that traffic between them is controlled, inspected, and restricted by policy. By limiting the blast radius of a compromise, segmentation prevents an attacker who breaches one zone from moving laterally to others. It is a core control in defence-in-depth and a prerequisite for zero-trust net
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:network-security
hasPart:
  - urn:ngm:class:vlan
  - urn:ngm:class:microsegmentation
  - urn:ngm:class:firewall
requires:
  - urn:ngm:class:access-control
  - urn:ngm:class:network-architecture
enables:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:defence-in-depth
dependsOn:
  - urn:ngm:class:firewall
  - urn:ngm:class:software-defined-networking
contrastsWith:
  - urn:ngm:class:network-architecture
uses:
  - urn:ngm:class:firewall
supports:
  - urn:ngm:class:network-security
standardizedBy:
  - urn:ngm:class:iec-62443
partOf:
  - urn:ngm:class:network-security
relatedTo:
  - urn:ngm:class:lateral-movement
  - urn:ngm:class:access-control
---

# Network Segmentation

Network segmentation is the security practice of dividing a computer network into smaller, isolated zones so that traffic between them is controlled, inspected, and restricted by policy. By limiting the blast radius of a compromise, segmentation prevents an attacker who breaches one zone from moving laterally to others. It is a core control in defence-in-depth and a prerequisite for zero-trust network architectures.
