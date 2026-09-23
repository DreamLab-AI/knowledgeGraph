---
okf_version: "0.2"
type: Class
title: Institutional Custody
resource: urn:ngm:class:institutional-custody
domain: finance
description: Institutional custody is the regulated safekeeping of digital assets on behalf of organisations such as funds, exchanges, and corporations, combining cryptographic key-management infrastructure with legal, operational, and insurance controls that meet fiduciary standards. Providers use cold storage, multi-signature and multi-party-computation schemes, hardware security modules, and segregated acco
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:custody
hasPart:
  - urn:ngm:class:cold-storage
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:multi-party-computation
requires:
  - urn:ngm:class:key-management-system
enables:
  - urn:ngm:class:institutional-investment
  - urn:ngm:class:spot-bitcoin-etf
dependsOn:
  - urn:ngm:class:financial-regulation
  - urn:ngm:class:fiduciary-duty
implements:
  - urn:ngm:class:segregation-of-duties
  - urn:ngm:class:audit-trail
contrastsWith:
  - urn:ngm:class:self-custody
  - urn:ngm:class:de-fi
bridgesTo:
  - urn:ngm:class:securities-regulation
uses:
  - urn:ngm:class:multi-signature-wallet
  - urn:ngm:class:threshold-signature-scheme
supports:
  - urn:ngm:class:regulatory-reporting
  - urn:ngm:class:digital-asset-custody
relatedTo:
  - urn:ngm:class:proof-of-reserves
---

# Institutional Custody

Institutional custody is the regulated safekeeping of digital assets on behalf of organisations such as funds, exchanges, and corporations, combining cryptographic key-management infrastructure with legal, operational, and insurance controls that meet fiduciary standards. Providers use cold storage, multi-signature and multi-party-computation schemes, hardware security modules, and segregated accounts to protect client assets against theft, loss, and insider risk while supporting auditability and regulatory reporting. It is a precondition for large-scale institutional participation in crypto markets.
