---
okf_version: "0.2"
type: Class
title: Revocation Registry
resource: urn:ngm:class:revocation-registry
domain: security
description: A revocation registry is a data structure or service that maintains the validity status of issued verifiable credentials or digital certificates, allowing verifiers to check whether a credential has been revoked by its issuer before accepting a presentation. In traditional PKI systems this role is fulfilled by Certificate Revocation Lists (CRLs) and OCSP responders; in self-sovereign identity ecos
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:credential-verification
requires:
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:decentralized-identity
  - urn:ngm:class:credential-issuance
  - urn:ngm:class:access-control
  - urn:ngm:class:trust-management
implements:
  - urn:ngm:class:certificate-revocation-list
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:cryptographic-accumulator
  - urn:ngm:class:bitstring-status-list
  - urn:ngm:class:smart-contract
supports:
  - urn:ngm:class:privacy-preserving-protocol
  - urn:ngm:class:zero-knowledge-proof
relatedTo:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:verifiable-credential-standard
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:digital-certificate
  - urn:ngm:class:certificate-transparency
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:cryptographic-infrastructure
---

# Revocation Registry

A revocation registry is a data structure or service that maintains the validity status of issued verifiable credentials or digital certificates, allowing verifiers to check whether a credential has been revoked by its issuer before accepting a presentation. In traditional PKI systems this role is fulfilled by Certificate Revocation Lists (CRLs) and OCSP responders; in self-sovereign identity ecosystems, revocation registries are implemented as privacy-preserving mechanisms including W3C Status List 2021 (bitstring-based), Hyperledger AnonCreds revocation with cryptographic accumulators, and on-chain smart contract registries. A well-designed revocation registry balances timely status updates, verifier privacy (preventing issuers from tracking when credentials are checked), and scalability to large credential populations.
