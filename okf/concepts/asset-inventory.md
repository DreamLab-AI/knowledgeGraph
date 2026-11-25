---
okf_version: "0.2"
type: Class
title: Asset Inventory
resource: urn:ngm:class:asset-inventory
domain: security
description: Asset Inventory is the systematic, continuously maintained catalogue of all hardware, software, data stores, network devices and cloud resources within an organisation's environment. It establishes the authoritative record of what must be protected, forming the foundation for vulnerability management, configuration control and incident response. An accurate inventory enables defenders to scope att
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:vulnerability-management
requires:
  - urn:ngm:class:configuration-management
  - urn:ngm:class:monitoring
enables:
  - urn:ngm:class:vulnerability-management
  - urn:ngm:class:incident-response
  - urn:ngm:class:threat-intelligence
dependsOn:
  - urn:ngm:class:monitoring
contrastsWith:
  - urn:ngm:class:threat-intelligence
bridgesTo:
  - urn:ngm:class:cybersecurity
uses:
  - urn:ngm:class:monitoring
supports:
  - urn:ngm:class:threat-model
  - urn:ngm:class:cybersecurity
partOf:
  - urn:ngm:class:vulnerability-management
relatedTo:
  - urn:ngm:class:configuration-management
  - urn:ngm:class:vulnerability
  - urn:ngm:class:network-security
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Asset Inventory

Asset Inventory is the systematic, continuously maintained catalogue of all hardware, software, data stores, network devices and cloud resources within an organisation's environment. It establishes the authoritative record of what must be protected, forming the foundation for vulnerability management, configuration control and incident response. An accurate inventory enables defenders to scope attack surfaces, prioritise patching and detect unauthorised or rogue assets.
