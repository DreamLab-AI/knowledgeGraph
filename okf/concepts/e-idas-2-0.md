---
okf_version: "0.2"
type: Class
title: eIDAS 2.0
resource: urn:ngm:class:e-idas-2-0
domain: governance
description: "eIDAS 2.0 (Regulation EU 2024/1183) is the amended EU framework for electronic identification, authentication, and trust services, entered into force in May 2024 as a successor to the original eIDAS Regulation (EU 910/2014). Its cornerstone is the European Digital Identity Wallet (EUDIW), a mandatory public-infrastructure obligation requiring each EU member state to offer citizens, residents, and "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:digital-identity-framework
hasPart:
  - urn:ngm:class:digital-identity-wallet
  - urn:ngm:class:qualified-electronic-signature
  - urn:ngm:class:digital-identity-wallet
  - urn:ngm:class:qualified-electronic-attestation-of-attributes
  - urn:ngm:class:architecture-and-reference-framework
requires:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:standards-conformance-testing
  - urn:ngm:class:standards-conformance-testing
enables:
  - urn:ngm:class:digital-identity-management
  - urn:ngm:class:cross-border-authentication
  - urn:ngm:class:attribute-based-access-control
  - urn:ngm:class:self-sovereign-identity
dependsOn:
  - urn:ngm:class:trust-service-provider
  - urn:ngm:class:digital-infrastructure
implements:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:did
  - urn:ngm:class:open-id-connect
contrastsWith:
  - urn:ngm:class:federated-identity
  - urn:ngm:class:social-login
  - urn:ngm:class:centralized-identity-provider
  - urn:ngm:class:centralized-identity-provider
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:artificial-intelligence-act
uses:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:iso-iec-18013-5-m-dl
  - urn:ngm:class:iso-iec-18013-5-m-dl
supports:
  - urn:ngm:class:data-protection-regulation
  - urn:ngm:class:gdpr
  - urn:ngm:class:digital-markets-act
standardizedBy:
  - urn:ngm:class:european-commission
  - urn:ngm:class:etsi
  - urn:ngm:class:w3-c
partOf:
  - urn:ngm:class:eu-digital-single-market
  - urn:ngm:class:digital-regulation
relatedTo:
  - urn:ngm:class:digital-identity-standards
  - urn:ngm:class:authentication-standards
  - urn:ngm:class:nis2-directive
  - urn:ngm:class:digital-identity-wallet
---

# eIDAS 2.0

eIDAS 2.0 (Regulation EU 2024/1183) is the amended EU framework for electronic identification, authentication, and trust services, entered into force in May 2024 as a successor to the original eIDAS Regulation (EU 910/2014). Its cornerstone is the European Digital Identity Wallet (EUDIW), a mandatory public-infrastructure obligation requiring each EU member state to offer citizens, residents, and businesses a certified wallet for storing qualified electronic attestations of attributes, verifiable credentials, and qualified electronic signatures. The regulation obliges online platforms with more than 45 million EU users to accept the wallet as an authentication mechanism, dismantling private-sector identity lock-in and creating a public-interest counterweight to data concentration. eIDAS 2.0 aligns with W3C Verifiable Credentials, Decentralised Identifiers, OpenID for Verifiable Credential Issuance (OID4VCI), and OpenID for Verifiable Presentations (OID4VP), embedding open interoperability requirements and selective-disclosure privacy protections into binding EU law.
