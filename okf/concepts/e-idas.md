---
okf_version: "0.2"
type: Class
title: eIDAS
resource: urn:ngm:class:e-idas
domain: governance
description: A European Union regulation establishing a framework for electronic identification and trust services for electronic transactions across the internal market, defining assurance levels, legal effects for electronic signatures, seals, timestamps and certificates, and mandating mutual recognition of notified national identity schemes.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:regulatory-framework
requires:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:certificate-authority
enables:
  - urn:ngm:class:digital-identity
  - urn:ngm:class:identity-verification
  - urn:ngm:class:cross-border-authentication
  - urn:ngm:class:timestamp
implements:
  - urn:ngm:class:eu-digital-single-market
contrastsWith:
  - urn:ngm:class:fido2
  - urn:ngm:class:self-sovereign-identity
bridgesTo:
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:blockchain-identity
  - urn:ngm:class:certificate-authority
uses:
  - urn:ngm:class:x-509-certificate
  - urn:ngm:class:qualified-electronic-signature
supports:
  - urn:ngm:class:gdpr
  - urn:ngm:class:digital-identity-wallet
  - urn:ngm:class:open-banking
standardizedBy:
  - urn:ngm:class:european-commission
  - urn:ngm:class:etsi
relatedTo:
  - urn:ngm:class:kyc
---

# eIDAS

A European Union regulation establishing a framework for electronic identification and trust services for electronic transactions across the internal market, defining assurance levels, legal effects for electronic signatures, seals, timestamps and certificates, and mandating mutual recognition of notified national identity schemes.
