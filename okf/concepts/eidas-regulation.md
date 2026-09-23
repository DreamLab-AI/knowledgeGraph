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
requires:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:pki
enables:
  - urn:ngm:class:digital-identity
  - urn:ngm:class:qualified-electronic-signature
implements:
  - urn:ngm:class:digital-signature-verification
  - urn:ngm:class:trust-framework
contrastsWith:
  - urn:ngm:class:gdpr
bridgesTo:
  - urn:ngm:class:qualified-electronic-signature
uses:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-infrastructure
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
---

# eIDAS Regulation

The eIDAS Regulation is the European Union framework on electronic identification and trust services for electronic transactions in the internal market. It establishes legal recognition and cross-border interoperability for electronic identification schemes and for trust services such as electronic signatures, seals, timestamps and website authentication. Its revision introduces the European Digital Identity Wallet, extending qualified trust services to verifiable digital credentials.
