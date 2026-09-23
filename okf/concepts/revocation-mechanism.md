---
okf_version: "0.2"
type: Class
title: Revocation Mechanism
resource: urn:ngm:class:revocation-mechanism
domain: security
description: A revocation mechanism is a cryptographic or registry-based procedure for invalidating a previously issued credential, certificate, or access token before its natural expiry, allowing issuers to withdraw trust following compromise, policy change, or holder misconduct. In digital identity systems, revocation mechanisms range from Certificate Revocation Lists and OCSP for X.509 certificates to Bitst
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:cryptographic-infrastructure
enables:
  - urn:ngm:class:self-sovereign-identity-ssi
  - urn:ngm:class:decentralized-identity-did
uses:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:bitstring-status-list
  - urn:ngm:class:cryptographic-accumulator
relatedTo:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:credential-definition
---

# Revocation Mechanism

A revocation mechanism is a cryptographic or registry-based procedure for invalidating a previously issued credential, certificate, or access token before its natural expiry, allowing issuers to withdraw trust following compromise, policy change, or holder misconduct. In digital identity systems, revocation mechanisms range from Certificate Revocation Lists and OCSP for X.509 certificates to Bitstring Status Lists and cryptographic accumulators for verifiable credentials. The privacy characteristics and scalability of each approach differ substantially, making mechanism selection a critical design decision.
