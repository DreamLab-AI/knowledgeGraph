---
okf_version: "0.2"
type: Class
title: Digital Identity Wallet
resource: urn:ngm:class:digital-identity-wallet
domain: blockchain
description: A Digital Identity Wallet is a software application — typically running on a smartphone, secure element, or cloud-hosted enclave — that stores, manages, and selectively presents cryptographically signed digital credentials (verifiable credentials, mobile driving licences, electronic identity atte...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:bc-token-and-asset
  - urn:ngm:class:identity-management-system
  - urn:ngm:class:cryptographic-key-container
  - urn:ngm:class:mobile-application
  - urn:ngm:class:personal-data-store
  - urn:ngm:class:self-sovereign-identity-component
hasPart:
  - urn:ngm:class:biometric-authentication
  - urn:ngm:class:secure-enclave
  - urn:ngm:class:decentralized-identifiers
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:private-key-store
  - urn:ngm:class:biometric-authentication
  - urn:ngm:class:credential-schema-registry
  - urn:ngm:class:revocation-status-cache
  - urn:ngm:class:presentation-definition-engine
  - urn:ngm:class:trust-framework-configuration
requires:
  - urn:ngm:class:cryptographic-library
  - urn:ngm:class:network-connectivity
  - urn:ngm:class:secure-element
  - urn:ngm:class:tee
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:mobile-operating-system
  - urn:ngm:class:trust-anchor-list
enables:
  - urn:ngm:class:age-verification
  - urn:ngm:class:credential-portability
  - urn:ngm:class:privacy-preserving-authentication
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:kyc-reuse
  - urn:ngm:class:cross-border-identity-verification
  - urn:ngm:class:offline-authentication
  - urn:ngm:class:pseudonymous-authentication
dependsOn:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:decentralized-identifiers
  - urn:ngm:class:trust-frameworks
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:biometric-authentication
implements:
  - urn:ngm:class:didcomm
  - urn:ngm:class:iso-iec-18013-5-m-dl
  - urn:ngm:class:open-id4-vci
  - urn:ngm:class:open-id4-vp
  - urn:ngm:class:sd-jwt-vc
  - urn:ngm:class:siopv2
  - urn:ngm:class:w-3-c-verifiable-credentials-data-model
  - urn:ngm:class:mdoc-cbor
contrastsWith:
  - urn:ngm:class:federated-identity
  - urn:ngm:class:enterprise-single-sign-on
  - urn:ngm:class:password-manager
  - urn:ngm:class:paper-credential
  - urn:ngm:class:centralized-identity-provider
  - urn:ngm:class:username-password-authentication
bridgesTo:
  - urn:ngm:class:infra-security-and-identity
uses:
  - urn:ngm:class:bbs-signature
  - urn:ngm:class:bluetooth-low-energy
  - urn:ngm:class:ed-dsa
  - urn:ngm:class:near-field-communication
  - urn:ngm:class:qr-code
  - urn:ngm:class:ecdsa
  - urn:ngm:class:deep-linking
  - urn:ngm:class:salted-hash
supports:
  - urn:ngm:class:e-idas-2-0
  - urn:ngm:class:fatf-travel-rule
  - urn:ngm:class:gdpr
  - urn:ngm:class:nist-800-63
  - urn:ngm:class:online-safety-act-2023
  - urn:ngm:class:uk-diatf
  - urn:ngm:class:psd2-strong-customer-authentication
standardizedBy:
  - urn:ngm:class:decentralized-identity-foundation
  - urn:ngm:class:etsi
  - urn:ngm:class:iso-iec-jtc-1-sc-17
  - urn:ngm:class:nist
  - urn:ngm:class:open-id-foundation
  - urn:ngm:class:trust-over-ip-foundation
  - urn:ngm:class:w3-c
  - urn:ngm:class:european-commission-eudi-arf
relatedTo:
  - urn:ngm:class:government-digital-identity
  - urn:ngm:class:mobile-driving-licence
  - urn:ngm:class:open-badges
  - urn:ngm:class:wallet
  - urn:ngm:class:trust-over-ip-foundation
  - urn:ngm:class:digital-identity
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:wallet
---

# Digital Identity Wallet

A Digital Identity Wallet is a software application — typically running on a smartphone, secure element, or cloud-hosted enclave — that stores, manages, and selectively presents cryptographically signed digital credentials (verifiable credentials, mobile driving licences, electronic identity atte...
