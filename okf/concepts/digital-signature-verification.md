---
okf_version: "0.2"
type: Class
title: Digital Signature Verification
resource: urn:ngm:class:digital-signature-verification
domain: security
description: The cryptographic process of validating the authenticity and integrity of digitally signed data by applying the signer's public key to confirm that the signature was produced by the corresponding private key and that the signed content has not been altered.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-verification
requires:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:signature-algorithm
  - urn:ngm:class:public-key
  - urn:ngm:class:asymmetric-cryptography
  - urn:ngm:class:public-key-infrastructure
  - urn:ngm:class:cryptographic-hash-function
enables:
  - urn:ngm:class:non-repudiation
  - urn:ngm:class:identity-attestation
  - urn:ngm:class:message-authentication
  - urn:ngm:class:transaction-authentication
  - urn:ngm:class:document-integrity
contrastsWith:
  - urn:ngm:class:message-authentication-code
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:post-quantum-cryptography
uses:
  - urn:ngm:class:ecdsa
  - urn:ngm:class:ed-dsa
  - urn:ngm:class:bls-signature
  - urn:ngm:class:schnorr-signature
supports:
  - urn:ngm:class:consensus-mechanism
standardizedBy:
  - urn:ngm:class:nist-fips-186
  - urn:ngm:class:rfc-8032
relatedTo:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:digital-certificate
  - urn:ngm:class:private-key
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Digital Signature Verification

The cryptographic process of validating the authenticity and integrity of digitally signed data by applying the signer's public key to confirm that the signature was produced by the corresponding private key and that the signed content has not been altered.
