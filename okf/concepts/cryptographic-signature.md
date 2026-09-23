---
okf_version: "0.2"
type: Class
title: Cryptographic Signature
resource: urn:ngm:class:cryptographic-signature
domain: security
description: A cryptographic signature is a mathematical scheme that allows a private-key holder to produce an unforgeable, publicly-verifiable proof that a specific message or data item was authorised by them, delivering both authenticity and non-repudiation. The signing algorithm combines a cryptographic hash of the message with the signer's private key to produce a compact signature value; any party holding
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:asymmetric-cryptography
requires:
  - urn:ngm:class:key-management
  - urn:ngm:class:cryptographic-infrastructure
enables:
  - urn:ngm:class:blockchain
  - urn:ngm:class:smart-contract
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:code-signing
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:non-repudiation
  - urn:ngm:class:verifiable-credential-vc
implements:
  - urn:ngm:class:ecdsa
  - urn:ngm:class:ed25519
  - urn:ngm:class:rsa-pss
  - urn:ngm:class:schnorr-signature
contrastsWith:
  - urn:ngm:class:message-authentication-code
  - urn:ngm:class:symmetric-encryption
bridgesTo:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:provenance
  - urn:ngm:class:supply-chain-traceability
  - urn:ngm:class:provenance
  - urn:ngm:class:supply-chain-traceability
uses:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:hash-function
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:private-key
  - urn:ngm:class:public-key
supports:
  - urn:ngm:class:tls
  - urn:ngm:class:secure-email
  - urn:ngm:class:zero-knowledge-proof
standardizedBy:
  - urn:ngm:class:nist
  - urn:ngm:class:ietf
  - urn:ngm:class:nist-fips-186
  - urn:ngm:class:nist-fips-186
relatedTo:
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:blind-signatures
  - urn:ngm:class:multi-signature
  - urn:ngm:class:post-quantum-cryptography
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:blind-signatures
---

# Cryptographic Signature

A cryptographic signature is a mathematical scheme that allows a private-key holder to produce an unforgeable, publicly-verifiable proof that a specific message or data item was authorised by them, delivering both authenticity and non-repudiation. The signing algorithm combines a cryptographic hash of the message with the signer's private key to produce a compact signature value; any party holding the corresponding public key can verify the signature without accessing the private key. Dominant schemes include ECDSA (Bitcoin, Ethereum), Ed25519 (Solana, Cosmos, OpenSSH), RSA-PSS (TLS, S/MIME), and Schnorr (BIP-340). Cryptographic signatures are a foundational primitive underpinning transaction authorisation, code signing, verifiable credentials, and authenticated key exchange across virtually all secure digital infrastructure.
