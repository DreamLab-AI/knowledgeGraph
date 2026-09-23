---
okf_version: "0.2"
type: Class
title: Signal Protocol
resource: urn:ngm:class:signal-protocol
domain: security
description: Signal Protocol is an open-source cryptographic messaging protocol that provides end-to-end encryption for instant messaging applications, combining the Double Ratchet Algorithm with the X3DH (Extended Triple Diffie-Hellman) key agreement protocol. It achieves forward secrecy and break-in recovery (future secrecy) by continuously rotating encryption keys after each message exchange.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:secure-messaging
requires:
  - urn:ngm:class:cryptographic-infrastructure
enables:
  - urn:ngm:class:secure-messaging
  - urn:ngm:class:asynchronous-communication
dependsOn:
  - urn:ngm:class:cryptography
  - urn:ngm:class:public-key-cryptography
implements:
  - urn:ngm:class:forward-secrecy
contrastsWith:
  - urn:ngm:class:tls
bridgesTo:
  - urn:ngm:class:decentralised-identity
uses:
  - urn:ngm:class:end-to-end-encryption
  - urn:ngm:class:key-exchange
  - urn:ngm:class:diffie-hellman-key-exchange
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:aes-gcm
relatedTo:
  - urn:ngm:class:noise-protocol
---

# Signal Protocol

Signal Protocol is an open-source cryptographic messaging protocol that provides end-to-end encryption for instant messaging applications, combining the Double Ratchet Algorithm with the X3DH (Extended Triple Diffie-Hellman) key agreement protocol. It achieves forward secrecy and break-in recovery (future secrecy) by continuously rotating encryption keys after each message exchange.
