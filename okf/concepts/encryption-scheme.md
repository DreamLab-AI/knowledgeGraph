---
okf_version: "0.2"
type: Class
title: Encryption Scheme
resource: urn:ngm:class:encryption-scheme
domain: security
description: An Encryption Scheme is a cryptographic construction comprising key-generation, encryption, and decryption algorithms that together transform plaintext into ciphertext and back under a key. Schemes are categorised as symmetric (shared key, e.g. AES) or asymmetric (public/private key, e.g. RSA, ECC), and are evaluated by their security definitions such as semantic security. They are the building bl
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-primitive
relatedTo:
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:cryptography
---

# Encryption Scheme

An Encryption Scheme is a cryptographic construction comprising key-generation, encryption, and decryption algorithms that together transform plaintext into ciphertext and back under a key. Schemes are categorised as symmetric (shared key, e.g. AES) or asymmetric (public/private key, e.g. RSA, ECC), and are evaluated by their security definitions such as semantic security. They are the building blocks of confidentiality in cryptographic protocols.
