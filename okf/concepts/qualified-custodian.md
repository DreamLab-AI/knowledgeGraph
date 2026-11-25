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
  - urn:ngm:class:know-your-customer
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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Qualified Custodian

A qualified custodian is a regulated financial institution authorised to hold client assets, including digital assets, under fiduciary and supervisory standards set by securities regulators. It provides segregated accounts, independent audit and statutory protections that distinguish it from informal custody arrangements. For institutional investors, using a qualified custodian is often a regulatory precondition for holding crypto assets.
