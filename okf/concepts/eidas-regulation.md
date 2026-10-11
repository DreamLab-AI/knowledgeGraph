---
okf_version: "0.2"
type: Class
title: eIDAS Regulation
resource: urn:ngm:class:eidas-regulation
domain: security
description: The eIDAS Regulation is the European Union framework on electronic identification and trust services for electronic transactions in the internal market. It establishes legal recognition and cross-border interoperability for electronic identification schemes and for trust services such as electronic signatures, seals, timestamps and website authentication. Its revision introduces the European Digit
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:regulatory-framework
requires:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:public-key-infrastructure
  - urn:ngm:class:pki
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:digital-identity
  - urn:ngm:class:qualified-electronic-signature
  - urn:ngm:class:identity-verification
  - urn:ngm:class:cross-border-authentication
  - urn:ngm:class:timestamp
implements:
  - urn:ngm:class:electronic-signature
  - urn:ngm:class:trust-framework
  - urn:ngm:class:eu-digital-single-market
contrastsWith:
  - urn:ngm:class:gdpr
  - urn:ngm:class:fido2
  - urn:ngm:class:self-sovereign-identity
bridgesTo:
  - urn:ngm:class:qualified-electronic-signature
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:blockchain-identity
  - urn:ngm:class:certificate-authority
uses:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:public-key-infrastructure
  - urn:ngm:class:x-509-certificate
  - urn:ngm:class:qualified-electronic-signature
supports:
  - urn:ngm:class:identity-verification
  - urn:ngm:class:digital-identity
standardizedBy:
  - urn:ngm:class:trust-framework
partOf:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:trust-framework
relatedTo:
  - urn:ngm:class:gdpr
  - urn:ngm:class:digital-identity
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:know-your-customer
---

# eIDAS Regulation

The eIDAS Regulation is the European Union framework on electronic identification and trust services for electronic transactions in the internal market. It establishes legal recognition and cross-border interoperability for electronic identification schemes and for trust services such as electronic signatures, seals, timestamps and website authentication. Its revision introduces the European Digital Identity Wallet, extending qualified trust services to verifiable digital credentials.
