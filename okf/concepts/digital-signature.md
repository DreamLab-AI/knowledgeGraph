---
okf_version: "0.2"
type: Class
title: Digital Signature
resource: urn:ngm:class:digital-signature
domain: blockchain
description: A Digital Signature is a cryptographic primitive consisting of three probabilistic polynomial-time algorithms (KeyGen, Sign, Verify) operating over an asymmetric keypair (sk, pk) such that, for any message m drawn from the message space M, Sign(sk, m) produces a signature σ that Verify(pk, m,...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:asymmetric-cryptography
  - urn:ngm:class:authentication-mechanism
  - urn:ngm:class:public-key-cryptosystem
hasPart:
  - urn:ngm:class:key-generation-algorithm
  - urn:ngm:class:nonce
  - urn:ngm:class:cryptographic-signing
  - urn:ngm:class:hash-function
  - urn:ngm:class:private-key
  - urn:ngm:class:public-key
  - urn:ngm:class:cryptographic-signing
  - urn:ngm:class:verification-algorithm
  - urn:ngm:class:signature-value
  - urn:ngm:class:nonce
requires:
  - urn:ngm:class:computational-hardness-assumption
  - urn:ngm:class:random-number-generator
  - urn:ngm:class:hash-function
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:random-number-generator
  - urn:ngm:class:trusted-key-distribution
enables:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:code-signing
  - urn:ngm:class:supply-chain
  - urn:ngm:class:transaction-authorisation
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:identity-verification
  - urn:ngm:class:non-repudiation
  - urn:ngm:class:document-signing
  - urn:ngm:class:supply-chain
dependsOn:
  - urn:ngm:class:number-theory
  - urn:ngm:class:elliptic-curve-theory
  - urn:ngm:class:lattice-cryptography
  - urn:ngm:class:computational-complexity-theory
  - urn:ngm:class:random-oracle-model
implements:
  - urn:ngm:class:discrete-logarithm-problem
  - urn:ngm:class:fiat-shamir-heuristic
  - urn:ngm:class:lattice-cryptography
  - urn:ngm:class:existential-unforgeability
  - urn:ngm:class:euf-cma-security
  - urn:ngm:class:integer-factorisation-problem
  - urn:ngm:class:lattice-cryptography
contrastsWith:
  - urn:ngm:class:message-authentication-code
  - urn:ngm:class:hash-based-commitment
  - urn:ngm:class:ring-signature
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:symmetric-authenticator
  - urn:ngm:class:wet-signature
bridgesTo:
  - urn:ngm:class:asymmetric-cryptography
  - urn:ngm:class:authentication-mechanism
uses:
  - urn:ngm:class:blake3
  - urn:ngm:class:curve25519
  - urn:ngm:class:ed25519
  - urn:ngm:class:secp256k1
  - urn:ngm:class:sha-3
  - urn:ngm:class:sha-256
  - urn:ngm:class:base58-encoding
  - urn:ngm:class:der-encoding
supports:
  - urn:ngm:class:nostr
  - urn:ngm:class:sigstore
  - urn:ngm:class:tls
  - urn:ngm:class:bitcoin-proof-of-work-protocol
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:openpgp
  - urn:ngm:class:eidas-qes
  - urn:ngm:class:smart-contract-authorisation
standardizedBy:
  - urn:ngm:class:e-idas-2-0
  - urn:ngm:class:etsi
  - urn:ngm:class:fips-186-5
  - urn:ngm:class:ietf
  - urn:ngm:class:iso-iec
  - urn:ngm:class:itu-t
  - urn:ngm:class:nist
  - urn:ngm:class:rfc-5280
  - urn:ngm:class:rfc-8032
  - urn:ngm:class:ansi-x9
  - urn:ngm:class:fips-204
relatedTo:
  - urn:ngm:class:bls-signature
  - urn:ngm:class:certificate-transparency
  - urn:ngm:class:multi-signature
  - urn:ngm:class:verifiable-random-function
  - urn:ngm:class:zero-knowledge-proof
---

# Digital Signature

A Digital Signature is a cryptographic primitive consisting of three probabilistic polynomial-time algorithms (KeyGen, Sign, Verify) operating over an asymmetric keypair (sk, pk) such that, for any message m drawn from the message space M, Sign(sk, m) produces a signature σ that Verify(pk, m,...
