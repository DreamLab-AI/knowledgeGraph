---
okf_version: "0.2"
type: Class
title: Encryption
resource: urn:ngm:class:encryption
domain: security
description: Encryption is the cryptographic process of transforming plaintext data into ciphertext using a defined algorithm and secret key, rendering the data unintelligible to any party that does not possess the corresponding decryption key, thereby ensuring confidentiality. Symmetric schemes such as AES-GCM use a single shared secret for both encryption and decryption, providing authenticated encryption wi
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:cryptography
requires:
  - urn:ngm:class:key-management
  - urn:ngm:class:cryptography
  - urn:ngm:class:random-number-generation
  - urn:ngm:class:cryptographic-infrastructure
enables:
  - urn:ngm:class:data-protection
  - urn:ngm:class:confidential-computing
  - urn:ngm:class:end-to-end-encryption
  - urn:ngm:class:privacy
  - urn:ngm:class:secure-communication
implements:
  - urn:ngm:class:aes
  - urn:ngm:class:rsa
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:post-quantum-cryptography
contrastsWith:
  - urn:ngm:class:steganography
  - urn:ngm:class:obfuscation
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:federated-learning
uses:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:hash-function
  - urn:ngm:class:key-exchange
supports:
  - urn:ngm:class:tls
  - urn:ngm:class:secure-multi-party-computation
  - urn:ngm:class:secure-multi-party-computation
standardizedBy:
  - urn:ngm:class:nist
  - urn:ngm:class:iso-iec-18033
relatedTo:
  - urn:ngm:class:zero-knowledge
  - urn:ngm:class:access-control
  - urn:ngm:class:homomorphic-encryption
---

# Encryption

Encryption is the cryptographic process of transforming plaintext data into ciphertext using a defined algorithm and secret key, rendering the data unintelligible to any party that does not possess the corresponding decryption key, thereby ensuring confidentiality. Symmetric schemes such as AES-GCM use a single shared secret for both encryption and decryption, providing authenticated encryption with associated data (AEAD) in a single pass; asymmetric schemes such as RSA-OAEP and ECDH use mathematically linked key pairs where the public key encrypts and the private key decrypts. Hybrid constructions combine both paradigms — using asymmetric key exchange to establish a shared session key and then symmetric ciphers for bulk data — as exemplified by TLS 1.3. Encryption is foundational to data-at-rest protection, data-in-transit security, end-to-end encrypted messaging, confidential computing, and post-quantum cryptography.
