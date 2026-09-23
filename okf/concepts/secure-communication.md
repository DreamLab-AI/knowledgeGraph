---
okf_version: "0.2"
type: Class
title: Secure Communication
resource: urn:ngm:class:secure-communication
domain: security
description: Secure communication is the practice and set of technologies that protect the confidentiality, integrity, and authenticity of information exchanged between parties over potentially adversarial networks, ensuring that eavesdroppers cannot read message content, tamperers cannot alter it undetected, and impersonators cannot forge the identity of legitimate participants. The discipline encompasses tra
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:cryptographic-protocol
requires:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:authentication
  - urn:ngm:class:forward-secrecy
enables:
  - urn:ngm:class:privacy
  - urn:ngm:class:confidential-computing
  - urn:ngm:class:zero-trust-architecture
dependsOn:
  - urn:ngm:class:post-quantum-cryptography
implements:
  - urn:ngm:class:end-to-end-encryption
  - urn:ngm:class:signal-protocol
  - urn:ngm:class:vpn
bridgesTo:
  - urn:ngm:class:data-governance
  - urn:ngm:class:iot-security
uses:
  - urn:ngm:class:encryption
  - urn:ngm:class:tls
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:authenticated-encryption
  - urn:ngm:class:key-exchange
standardizedBy:
  - urn:ngm:class:ietf
  - urn:ngm:class:nist
relatedTo:
  - urn:ngm:class:network-security
  - urn:ngm:class:tls-encryption
  - urn:ngm:class:cryptographic-security
---

# Secure Communication

Secure communication is the practice and set of technologies that protect the confidentiality, integrity, and authenticity of information exchanged between parties over potentially adversarial networks, ensuring that eavesdroppers cannot read message content, tamperers cannot alter it undetected, and impersonators cannot forge the identity of legitimate participants. The discipline encompasses transport-layer security protocols (TLS, DTLS, QUIC with TLS), end-to-end encryption protocols (Signal Protocol, MLS, Matrix), secure messaging standards (S/MIME, PGP), VPN tunnelling (IPsec, WireGuard), and the cryptographic primitives—asymmetric key exchange, symmetric cipher suites, authenticated encryption, and digital signatures—that underpin them. Security properties are formally analysed through cryptographic protocol proofs and verified implementations.
