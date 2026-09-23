---
okf_version: "0.2"
type: Class
title: Qualified Custodian
resource: urn:ngm:class:qualified-custodian
domain: blockchain
description: A qualified custodian is a regulated financial institution authorised to hold client assets, including digital assets, under fiduciary and supervisory standards set by securities regulators. It provides segregated accounts, independent audit and statutory protections that distinguish it from informal custody arrangements. For institutional investors, using a qualified custodian is often a regulato
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:digital-asset-custody
requires:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:securities-regulation
  - urn:ngm:class:kyc
dependsOn:
  - urn:ngm:class:compliance
implements:
  - urn:ngm:class:audit-trail
contrastsWith:
  - urn:ngm:class:self-custody
  - urn:ngm:class:custodial-wallet
uses:
  - urn:ngm:class:cold-storage
  - urn:ngm:class:proof-of-reserve
supports:
  - urn:ngm:class:asset-management
  - urn:ngm:class:custody
relatedTo:
  - urn:ngm:class:digital-asset-custody
  - urn:ngm:class:custodial-exchange
---

# Qualified Custodian

A qualified custodian is a regulated financial institution authorised to hold client assets, including digital assets, under fiduciary and supervisory standards set by securities regulators. It provides segregated accounts, independent audit and statutory protections that distinguish it from informal custody arrangements. For institutional investors, using a qualified custodian is often a regulatory precondition for holding crypto assets.
