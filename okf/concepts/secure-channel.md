---
okf_version: "0.2"
type: Class
title: Secure Channel
resource: urn:ngm:class:secure-channel
domain: security
description: A Secure Channel is a communication path between two parties that protects the confidentiality, integrity and authenticity of exchanged data against eavesdropping and tampering. It is typically established by a key-exchange and authentication handshake that derives session keys, then protects subsequent traffic with authenticated encryption. Secure channels underpin protocols such as TLS and are f
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:secure-communication
requires:
  - urn:ngm:class:key-exchange
  - urn:ngm:class:authentication
  - urn:ngm:class:encryption
enables:
  - urn:ngm:class:data-integrity
  - urn:ngm:class:data-confidentiality
  - urn:ngm:class:end-to-end-encryption
dependsOn:
  - urn:ngm:class:cryptography
  - urn:ngm:class:cryptographic-protocol
implements:
  - urn:ngm:class:tls
bridgesTo:
  - urn:ngm:class:public-key-cryptography
uses:
  - urn:ngm:class:authenticated-encryption
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:message-authentication-code
supports:
  - urn:ngm:class:forward-secrecy
standardizedBy:
  - urn:ngm:class:tls
partOf:
  - urn:ngm:class:secure-communication
relatedTo:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:key-management
  - urn:ngm:class:diffie-hellman-key-exchange
---

# Secure Channel

A Secure Channel is a communication path between two parties that protects the confidentiality, integrity and authenticity of exchanged data against eavesdropping and tampering. It is typically established by a key-exchange and authentication handshake that derives session keys, then protects subsequent traffic with authenticated encryption. Secure channels underpin protocols such as TLS and are foundational to trustworthy communication over untrusted networks.
