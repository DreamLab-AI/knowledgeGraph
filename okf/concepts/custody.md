---
okf_version: "0.2"
type: Class
title: Custody
resource: urn:ngm:class:custody
domain: blockchain
description: The holding and safekeeping of assets and the keys that control them, defining who has the authority to move funds on behalf of an owner.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bc-token-and-asset
  - urn:ngm:class:custody-infrastructure
hasPart:
  - urn:ngm:class:self-custody
  - urn:ngm:class:institutional-custody
  - urn:ngm:class:multi-signature
requires:
  - urn:ngm:class:private-key
  - urn:ngm:class:wallet
  - urn:ngm:class:key-management
  - urn:ngm:class:hardware-security-module
enables:
  - urn:ngm:class:asset-transfer
  - urn:ngm:class:transaction-signing
  - urn:ngm:class:regulatory-compliance
dependsOn:
  - urn:ngm:class:cryptographic-key-pair
  - urn:ngm:class:access-control
contrastsWith:
  - urn:ngm:class:non-custodial-wallet
  - urn:ngm:class:counterparty-risk
bridgesTo:
  - urn:ngm:class:digital-asset-management
  - urn:ngm:class:financial-asset-custody
  - urn:ngm:class:data-sovereignty
  - urn:ngm:class:self-custody
  - urn:ngm:class:institutional-custody
partOf:
  - urn:ngm:class:custody-infrastructure
  - urn:ngm:class:digital-asset-management
relatedTo:
  - urn:ngm:class:cold-storage
  - urn:ngm:class:hot-wallet
  - urn:ngm:class:asset-recovery
---

# Custody

The holding and safekeeping of assets and the keys that control them, defining who has the authority to move funds on behalf of an owner.
