---
okf_version: "0.2"
type: Class
title: Digital Asset Custody
resource: urn:ngm:class:digital-asset-custody
domain: blockchain
description: Digital asset custody is the safekeeping and administration of cryptographic private keys that control crypto-assets on behalf of their owners. Custodians use controls such as hardware security modules, multi-party computation, and cold storage to protect keys against theft, loss, and unauthorised use while meeting regulatory and audit requirements. It is the trust and security backbone enabling i
maturity: established
quality: 0.73
is-a:
  - urn:ngm:class:digital-asset
hasPart:
  - urn:ngm:class:cold-storage
  - urn:ngm:class:hot-wallet
  - urn:ngm:class:multi-party-computation
  - urn:ngm:class:multisignature
requires:
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:key-management
  - urn:ngm:class:proof-of-reserves
  - urn:ngm:class:key-ceremony
enables:
  - urn:ngm:class:institutional-adoption
  - urn:ngm:class:staking
  - urn:ngm:class:tokenised-securities
dependsOn:
  - urn:ngm:class:cryptographic-key
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:smart-contract
contrastsWith:
  - urn:ngm:class:self-custody
  - urn:ngm:class:decentralised-exchange
bridgesTo:
  - urn:ngm:class:institutional-custody
  - urn:ngm:class:insurance
  - urn:ngm:class:regulatory-compliance
uses:
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:air-gap
supports:
  - urn:ngm:class:audit-trail
standardizedBy:
  - urn:ngm:class:securities-regulation
relatedTo:
  - urn:ngm:class:institutional-custody
  - urn:ngm:class:securities-regulation
  - urn:ngm:class:custody
  - urn:ngm:class:wallet-infrastructure
---

# Digital Asset Custody

Digital asset custody is the safekeeping and administration of cryptographic private keys that control crypto-assets on behalf of their owners. Custodians use controls such as hardware security modules, multi-party computation, and cold storage to protect keys against theft, loss, and unauthorised use while meeting regulatory and audit requirements. It is the trust and security backbone enabling institutional participation in digital-asset markets.
