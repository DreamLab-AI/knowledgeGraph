---
okf_version: "0.2"
type: Class
title: Tls Handshake
resource: urn:ngm:class:tls-handshake
domain: security
description: "The TLS handshake is the negotiation phase of the Transport Layer Security protocol in which a client and server agree on protocol version and cipher suite, authenticate via certificates, and establish shared session keys. It combines public-key cryptography for authentication and key agreement with symmetric cryptography for the subsequent record protocol. Modern versions complete in fewer round "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:tls
hasPart:
  - urn:ngm:class:nonce
requires:
  - urn:ngm:class:hash-function
enables:
  - urn:ngm:class:forward-secrecy
dependsOn:
  - urn:ngm:class:cryptography
bridgesTo:
  - urn:ngm:class:mutual-tls
  - urn:ngm:class:network-protocol
uses:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:diffie-hellman-key-exchange
  - urn:ngm:class:elliptic-curve-cryptography
supports:
  - urn:ngm:class:encryption
  - urn:ngm:class:authentication
partOf:
  - urn:ngm:class:tls
relatedTo:
  - urn:ngm:class:security
---

# Tls Handshake

The TLS handshake is the negotiation phase of the Transport Layer Security protocol in which a client and server agree on protocol version and cipher suite, authenticate via certificates, and establish shared session keys. It combines public-key cryptography for authentication and key agreement with symmetric cryptography for the subsequent record protocol. Modern versions complete in fewer round trips and provide forward secrecy through ephemeral key exchange.
