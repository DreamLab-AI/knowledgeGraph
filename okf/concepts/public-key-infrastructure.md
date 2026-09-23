---
okf_version: "0.2"
type: Class
title: Public Key Infrastructure
resource: urn:ngm:class:public-key-infrastructure
domain: security
description: Public Key Infrastructure (PKI) is the integrated set of roles, policies, hardware, software, and procedures used to create, manage, distribute, use, store, and revoke digital certificates and manage public-key encryption. PKI binds public keys to verified entity identities through a hierarchical trust chain anchored by Certificate Authorities (CAs), enabling secure authentication, data integrity,
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:cryptographic-infrastructure
hasPart:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:registration-authority
  - urn:ngm:class:certificate-revocation-list
  - urn:ngm:class:online-certificate-status-protocol
  - urn:ngm:class:root-certificate
  - urn:ngm:class:digital-certificate
requires:
  - urn:ngm:class:asymmetric-cryptography
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-keys
  - urn:ngm:class:hash-function
enables:
  - urn:ngm:class:tls
  - urn:ngm:class:digital-identity
  - urn:ngm:class:mutual-authentication
  - urn:ngm:class:non-repudiation
  - urn:ngm:class:code-signing
  - urn:ngm:class:encrypted-email
implements:
  - urn:ngm:class:x509-standard
  - urn:ngm:class:rfc-5280
  - urn:ngm:class:x509-standard
contrastsWith:
  - urn:ngm:class:web-of-trust
  - urn:ngm:class:decentralised-identifier
bridgesTo:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:blockchain-identity
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:verifiable-credential-vc
supports:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:secure-communication
standardizedBy:
  - urn:ngm:class:internet-engineering-task-force
  - urn:ngm:class:ca-browser-forum
  - urn:ngm:class:nist
relatedTo:
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:encryption
  - urn:ngm:class:post-quantum-cryptography
---

# Public Key Infrastructure

Public Key Infrastructure (PKI) is the integrated set of roles, policies, hardware, software, and procedures used to create, manage, distribute, use, store, and revoke digital certificates and manage public-key encryption. PKI binds public keys to verified entity identities through a hierarchical trust chain anchored by Certificate Authorities (CAs), enabling secure authentication, data integrity, and confidential communication across distributed and internet-scale systems. It forms the foundational security layer for TLS/HTTPS, code signing, S/MIME email encryption, VPN access, and emerging decentralised identity frameworks. PKI standards are governed principally by IETF RFCs (X.509, PKIX), NIST guidelines, CA/Browser Forum Baseline Requirements, and ISO/IEC 27001 family controls.
