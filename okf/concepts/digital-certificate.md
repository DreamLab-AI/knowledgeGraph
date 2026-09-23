---
okf_version: "0.2"
type: Class
title: Digital Certificate
resource: urn:ngm:class:digital-certificate
domain: security
description: A cryptographic credential issued by a Certificate Authority that binds a public key to an identified entity, authenticates users, and secures transactions across networks, metaverse platforms, and blockchain systems through public key infrastructure and verifiable attestations.
maturity: draft
quality: 0.7
is-a:
  - urn:ngm:class:digital-security
hasPart:
  - urn:ngm:class:public-key
  - urn:ngm:class:certificate-revocation-list
requires:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:cryptographic-keys
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:secure-communication
  - urn:ngm:class:trust-establishment
  - urn:ngm:class:identity-verification
  - urn:ngm:class:mutual-authentication
  - urn:ngm:class:non-repudiation
implements:
  - urn:ngm:class:x509-standard
  - urn:ngm:class:tls
contrastsWith:
  - urn:ngm:class:self-signed-certificate
  - urn:ngm:class:decentralized-identifier
bridgesTo:
  - urn:ngm:class:did-nostr-identity
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:blockchain-identity
uses:
  - urn:ngm:class:asymmetric-encryption
  - urn:ngm:class:hash-function
supports:
  - urn:ngm:class:tls
  - urn:ngm:class:code-signing
standardizedBy:
  - urn:ngm:class:ietf
  - urn:ngm:class:web-standards
relatedTo:
  - urn:ngm:class:certificate-transparency
  - urn:ngm:class:online-certificate-status-protocol
---

# Digital Certificate

A cryptographic credential issued by a Certificate Authority that binds a public key to an identified entity, authenticates users, and secures transactions across networks, metaverse platforms, and blockchain systems through public key infrastructure and verifiable attestations.
