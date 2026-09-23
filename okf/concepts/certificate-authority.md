---
okf_version: "0.2"
type: Class
title: Certificate Authority
resource: urn:ngm:class:certificate-authority
domain: security
description: A Certificate Authority (CA) is a trusted third-party organisation that issues, signs, and manages the lifecycle of X.509 digital certificates, cryptographically binding a public key to an entity's verified identity within a Public Key Infrastructure (PKI). CAs operate within a hierarchical trust model where offline root CAs delegate signing authority to online intermediate CAs, which in turn issu
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:infra-security-and-identity
hasPart:
  - urn:ngm:class:root-certificate
  - urn:ngm:class:certificate-revocation-list
  - urn:ngm:class:online-certificate-status-protocol
  - urn:ngm:class:certificate-authority
requires:
  - urn:ngm:class:cryptography
  - urn:ngm:class:digital-signature
  - urn:ngm:class:asymmetric-cryptography
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:asymmetric-cryptography
enables:
  - urn:ngm:class:digital-certificate
  - urn:ngm:class:tls
  - urn:ngm:class:code-signing
  - urn:ngm:class:encryption
contrastsWith:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:web-of-trust
  - urn:ngm:class:self-sovereign-identity
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:verifiable-credential-vc
supports:
  - urn:ngm:class:authentication
  - urn:ngm:class:identity-management
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:mutual-tls
  - urn:ngm:class:zero-trust-architecture
standardizedBy:
  - urn:ngm:class:ca-browser-forum
  - urn:ngm:class:rfc-5280
  - urn:ngm:class:webtrust
partOf:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:trust-hierarchy
relatedTo:
  - urn:ngm:class:certificate-transparency
  - urn:ngm:class:key-management
  - urn:ngm:class:acme-protocol
  - urn:ngm:class:domain-validation
---

# Certificate Authority

A Certificate Authority (CA) is a trusted third-party organisation that issues, signs, and manages the lifecycle of X.509 digital certificates, cryptographically binding a public key to an entity's verified identity within a Public Key Infrastructure (PKI). CAs operate within a hierarchical trust model where offline root CAs delegate signing authority to online intermediate CAs, which in turn issue end-entity certificates for servers, users, clients, and devices. The CA's signing operations — governed by RFC 5280, the CA/Browser Forum Baseline Requirements, and WebTrust auditing standards — underpin the TLS handshake, code-signing pipelines, S/MIME email encryption, mutual TLS (mTLS) in service meshes, and document-signing workflows across the internet. Trust propagates via chain-of-trust verification: a relying party validates each certificate against its issuer's signature, tracing back to an implicitly trusted root embedded in OS or browser trust stores.
