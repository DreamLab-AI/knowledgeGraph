---
okf_version: "0.2"
type: Class
title: Initialization Vector
resource: urn:ngm:class:initialization-vector
domain: security
description: "An initialization vector (IV) is a fixed-size input to a symmetric encryption mode of operation that randomises the encryption process so that identical plaintexts produce different ciphertexts under the same key. By introducing fresh, unpredictable variation for each message, it prevents an attacker from detecting repetition and defeats certain chosen-plaintext attacks. Depending on the mode, an "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:symmetric-encryption
hasPart:
  - urn:ngm:class:nonce
requires:
  - urn:ngm:class:entropy
enables:
  - urn:ngm:class:data-integrity
dependsOn:
  - urn:ngm:class:entropy
contrastsWith:
  - urn:ngm:class:salt
  - urn:ngm:class:nonce
uses:
  - urn:ngm:class:cryptographic-key
supports:
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:encryption
partOf:
  - urn:ngm:class:cryptography
relatedTo:
  - urn:ngm:class:cryptography
  - urn:ngm:class:message-authentication-code
  - urn:ngm:class:encryption
---

# Initialization Vector

An initialization vector (IV) is a fixed-size input to a symmetric encryption mode of operation that randomises the encryption process so that identical plaintexts produce different ciphertexts under the same key. By introducing fresh, unpredictable variation for each message, it prevents an attacker from detecting repetition and defeats certain chosen-plaintext attacks. Depending on the mode, an IV must be unpredictable, unique, or both, and is typically transmitted in the clear alongside the ciphertext because its secrecy is not required, only its non-repetition. Misusing an IV, such as reusing it, can catastrophically undermine the security of an otherwise sound cipher.
