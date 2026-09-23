---
okf_version: "0.2"
type: Class
title: Verifiable Credentials
resource: urn:ngm:class:verifiable-credentials
domain: blockchain
description: Cryptographically secured, tamper-evident digital credentials standardised by the W3C Verifiable Credentials Data Model v2.0 (May 2025 REC) that encode machine-verifiable claims about subjects — enabling a holder/issuer/verifier triangle in which issuers sign claims with DIDs, holders selectively...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:digital-identity
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:distributed-identity
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:w-3-c-standard
hasPart:
  - urn:ngm:class:credential-schema
  - urn:ngm:class:credential-status
  - urn:ngm:class:credential-subject
  - urn:ngm:class:verifiable-presentation
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:proof-method
requires:
  - urn:ngm:class:decentralized-identifiers
  - urn:ngm:class:did-document
  - urn:ngm:class:cryptography-security-and-privacy
  - urn:ngm:class:digital-signature
  - urn:ngm:class:trust-framework
  - urn:ngm:class:did
enables:
  - urn:ngm:class:offline-verification
  - urn:ngm:class:privacy-preserving-identity
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:cross-border-identity-recognition
dependsOn:
  - urn:ngm:class:did
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:w3c-data-integrity
  - urn:ngm:class:cbor
implements:
  - urn:ngm:class:bbs-signature
  - urn:ngm:class:bitstring-status-list
  - urn:ngm:class:json-ld
  - urn:ngm:class:json-data-interchange-format-web-token
  - urn:ngm:class:iso-iec-18013-5-m-dl
  - urn:ngm:class:open-id4-vc
  - urn:ngm:class:sd-jwt
  - urn:ngm:class:iso-iec-18013-5-m-dl
contrastsWith:
  - urn:ngm:class:x-509-certificate
  - urn:ngm:class:saml-assertion
  - urn:ngm:class:federated-identity
  - urn:ngm:class:centralized-identity-provider
  - urn:ngm:class:oauth2-token
bridgesTo:
  - urn:ngm:class:w-3-c-standard
  - urn:ngm:class:cryptographic-proof
uses:
  - urn:ngm:class:didcomm
  - urn:ngm:class:ed-dsa
  - urn:ngm:class:json-ld
  - urn:ngm:class:open-id4-vci
  - urn:ngm:class:open-id4-vp
  - urn:ngm:class:ecdsa
  - urn:ngm:class:elliptic-curve-cryptography
supports:
  - urn:ngm:class:eudi-wallet
  - urn:ngm:class:gov-uk-one-login
  - urn:ngm:class:aml-kyc-compliance
  - urn:ngm:class:digital-identity-wallet
  - urn:ngm:class:healthcare-data-interoperability
standardizedBy:
  - urn:ngm:class:e-idas
  - urn:ngm:class:ietf
  - urn:ngm:class:iso
  - urn:ngm:class:open-id-foundation
  - urn:ngm:class:w3-c
  - urn:ngm:class:e-idas
relatedTo:
  - urn:ngm:class:access-control-system
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:digital-signature
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:hash-function
---

# Verifiable Credentials

Cryptographically secured, tamper-evident digital credentials standardised by the W3C Verifiable Credentials Data Model v2.0 (May 2025 REC) that encode machine-verifiable claims about subjects — enabling a holder/issuer/verifier triangle in which issuers sign claims with DIDs, holders selectively...
