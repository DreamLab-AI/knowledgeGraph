---
okf_version: "0.2"
type: Class
title: Decentralized Identifiers
resource: urn:ngm:class:decentralized-identifiers
domain: blockchain
description: A W3C-standardised URI scheme (DID Core v1.0 Recommendation 19 July 2022, v1.1 Working Draft progressing through 2024-2025) defining globally unique cryptographically verifiable identifiers of the form did:<mod>:<mod-specific-id> controlled directly by their subjects without dependency on c...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:bc-token-and-asset
  - urn:ngm:class:identifier
  - urn:ngm:class:uri-scheme
  - urn:ngm:class:self-sovereign-identifier
  - urn:ngm:class:cryptographic-identifier
hasPart:
  - urn:ngm:class:did-controller
  - urn:ngm:class:did-document
  - urn:ngm:class:did-method
  - urn:ngm:class:did-resolver
  - urn:ngm:class:did-url
  - urn:ngm:class:service-endpoint
  - urn:ngm:class:verification-method
  - urn:ngm:class:verifiable-data-registry
requires:
  - urn:ngm:class:did-resolution
  - urn:ngm:class:json-ld
  - urn:ngm:class:key-management-system
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:verifiable-data-registry
  - urn:ngm:class:did-resolution
enables:
  - urn:ngm:class:pairwise-pseudonymous-identifiers
  - urn:ngm:class:passwordless-authentication
  - urn:ngm:class:portable-identity
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:verifiable-credentials
dependsOn:
  - urn:ngm:class:w-3-c-did-core-1-0
  - urn:ngm:class:multibase-encoding
  - urn:ngm:class:multicodec
  - urn:ngm:class:json-ld-contexts
  - urn:ngm:class:cryptographic-suites
  - urn:ngm:class:verifiable-data-registry
implements:
  - urn:ngm:class:did-cheqd
  - urn:ngm:class:did-ethr
  - urn:ngm:class:did-indy
  - urn:ngm:class:did-ion
  - urn:ngm:class:did-jwk
  - urn:ngm:class:did-key
  - urn:ngm:class:did-peer
  - urn:ngm:class:did-plc
  - urn:ngm:class:did-web
  - urn:ngm:class:did-webvh
contrastsWith:
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:saml-2-0
  - urn:ngm:class:x-509-public-key-infrastructure
  - urn:ngm:class:keybase
  - urn:ngm:class:centralized-identity-provider
bridgesTo:
  - urn:ngm:class:infra-security-and-identity
uses:
  - urn:ngm:class:bbs-signatures
  - urn:ngm:class:content-addressed-storage
  - urn:ngm:class:ed25519
  - urn:ngm:class:merkle-logs
  - urn:ngm:class:multihash
  - urn:ngm:class:secp256k1
supports:
  - urn:ngm:class:anon-creds
  - urn:ngm:class:didcomm-v2
  - urn:ngm:class:ebsi
  - urn:ngm:class:digital-identity-wallet
  - urn:ngm:class:gov-uk-one-login
  - urn:ngm:class:open-id4-vc
  - urn:ngm:class:trust-over-ip-stack
  - urn:ngm:class:digital-identity-wallet
standardizedBy:
  - urn:ngm:class:decentralized-identity-foundation
  - urn:ngm:class:european-commission
  - urn:ngm:class:ietf
  - urn:ngm:class:iso-iec-jtc-1-sc-27
  - urn:ngm:class:open-id-foundation
  - urn:ngm:class:trust-over-ip-foundation
  - urn:ngm:class:w-3-c-did-working-group
  - urn:ngm:class:w3-c-verifiable-credentials
  - urn:ngm:class:w3-c-verifiable-credentials
  - urn:ngm:class:ietf
relatedTo:
  - urn:ngm:class:decentralized-identity-foundation
  - urn:ngm:class:ens
  - urn:ngm:class:soulbound-tokens
  - urn:ngm:class:trust-over-ip-foundation
  - urn:ngm:class:digital-identity-wallet
  - urn:ngm:class:hyperledger-indy
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:sovrin-network
---

# Decentralized Identifiers

A W3C-standardised URI scheme (DID Core v1.0 Recommendation 19 July 2022, v1.1 Working Draft progressing through 2024-2025) defining globally unique cryptographically verifiable identifiers of the form did:<mod>:<mod-specific-id> controlled directly by their subjects without dependency on c...
