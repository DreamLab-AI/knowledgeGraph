---
okf_version: "0.2"
type: Class
title: EUDI Wallet
resource: urn:ngm:class:eudi-wallet
domain: security
description: The EUDI Wallet (European Digital Identity Wallet) is a mobile application framework mandated under the revised eIDAS regulation, enabling European citizens and residents to store, present, and selectively disclose identity attributes and credentials across member states. It allows holders to prove identity, sign documents, and share verifiable attestations with public and private services while r
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:digital-identity
requires:
  - urn:ngm:class:trust-framework
enables:
  - urn:ngm:class:identity-verification
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:authentication
dependsOn:
  - urn:ngm:class:e-idas
implements:
  - urn:ngm:class:verifiable-credentials
bridgesTo:
  - urn:ngm:class:digital-identity-wallet
  - urn:ngm:class:verifiable-credentials
uses:
  - urn:ngm:class:decentralized-identifier
  - urn:ngm:class:zero-knowledge-proof
supports:
  - urn:ngm:class:privacy
  - urn:ngm:class:digital-identity
standardizedBy:
  - urn:ngm:class:e-idas
partOf:
  - urn:ngm:class:digital-identity
relatedTo:
  - urn:ngm:class:digital-wallet
  - urn:ngm:class:gdpr
---

# EUDI Wallet

The EUDI Wallet (European Digital Identity Wallet) is a mobile application framework mandated under the revised eIDAS regulation, enabling European citizens and residents to store, present, and selectively disclose identity attributes and credentials across member states. It allows holders to prove identity, sign documents, and share verifiable attestations with public and private services while retaining control over what data is revealed. The wallet is the user-facing instrument of the EU's interoperable cross-border identity scheme.
