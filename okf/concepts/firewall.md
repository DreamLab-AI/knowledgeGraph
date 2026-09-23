---
okf_version: "0.2"
type: Class
title: Firewall
resource: urn:ngm:class:firewall
domain: security
description: A firewall is a network security control that monitors and filters incoming and outgoing traffic according to a defined rule set, allowing or blocking packets and connections to enforce a security boundary. Firewalls range from stateless packet filters to stateful inspection devices and next-generation appliances that perform deep packet inspection and application awareness. They are a foundationa
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:network-security
hasPart:
  - urn:ngm:class:access-control
  - urn:ngm:class:network-segmentation
requires:
  - urn:ngm:class:access-control
  - urn:ngm:class:tcp-ip
enables:
  - urn:ngm:class:network-segmentation
  - urn:ngm:class:network-security
contrastsWith:
  - urn:ngm:class:intrusion-detection-system
bridgesTo:
  - urn:ngm:class:web-application-firewall
uses:
  - urn:ngm:class:access-control
  - urn:ngm:class:tcp-ip
supports:
  - urn:ngm:class:intrusion-detection-system
  - urn:ngm:class:vpn
partOf:
  - urn:ngm:class:network-security
  - urn:ngm:class:cybersecurity
relatedTo:
  - urn:ngm:class:network-security
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:vpn
---

# Firewall

A firewall is a network security control that monitors and filters incoming and outgoing traffic according to a defined rule set, allowing or blocking packets and connections to enforce a security boundary. Firewalls range from stateless packet filters to stateful inspection devices and next-generation appliances that perform deep packet inspection and application awareness. They are a foundational component for segmenting trusted and untrusted networks.
