---
okf_version: "0.2"
type: Class
title: Session Key
resource: urn:ngm:class:session-key
domain: security
description: A session key is a temporary symmetric cryptographic key generated for the duration of a single communication session, used to encrypt the data exchanged between parties after an initial key exchange handshake. Session keys have bounded lifetimes and are discarded at the end of the session, limiting the window of vulnerability if the key is compromised. Ephemeral session keys derived from asymmetr
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:cryptography
hasPart:
  - urn:ngm:class:encryption
  - urn:ngm:class:public-key-cryptography
requires:
  - urn:ngm:class:encryption
  - urn:ngm:class:digital-identity
enables:
  - urn:ngm:class:session-management
  - urn:ngm:class:access-control
dependsOn:
  - urn:ngm:class:cryptography
contrastsWith:
  - urn:ngm:class:biometric-data
bridgesTo:
  - urn:ngm:class:externally-owned-account
uses:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:security
supports:
  - urn:ngm:class:policy-information-point
  - urn:ngm:class:privacy
relatedTo:
  - urn:ngm:class:blockchain-identity
  - urn:ngm:class:distributed-ledger
---

# Session Key

A session key is a temporary symmetric cryptographic key generated for the duration of a single communication session, used to encrypt the data exchanged between parties after an initial key exchange handshake. Session keys have bounded lifetimes and are discarded at the end of the session, limiting the window of vulnerability if the key is compromised. Ephemeral session keys derived from asymmetric key exchanges (such as Diffie-Hellman) provide forward secrecy, ensuring past sessions remain private even if long-term private keys are later exposed.
