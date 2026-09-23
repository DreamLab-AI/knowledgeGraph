---
okf_version: "0.2"
type: Class
title: TLS
resource: urn:ngm:class:tls
domain: security
description: Transport Layer Security (TLS) is an IETF-standardised cryptographic protocol that provides authenticated, confidential, and integrity-protected communication channels over reliable transports such as TCP and QUIC. TLS 1.3 (RFC 8446, 2018) achieves a one-round-trip handshake using ephemeral Diffie-Hellman key exchange with mandatory forward secrecy, encrypting the server certificate within the han
maturity: mature
quality: 0.76
is-a:
  - urn:ngm:class:cryptographic-protocol
requires:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:digital-certificate
enables:
  - urn:ngm:class:http
  - urn:ngm:class:network-security
  - urn:ngm:class:mutual-tls
  - urn:ngm:class:secure-communication
  - urn:ngm:class:http
  - urn:ngm:class:secure-communication
implements:
  - urn:ngm:class:forward-secrecy
  - urn:ngm:class:encryption
  - urn:ngm:class:authentication
contrastsWith:
  - urn:ngm:class:ssl
  - urn:ngm:class:ipsec
  - urn:ngm:class:wireguard
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:diffie-hellman-key-exchange
  - urn:ngm:class:hkdf
  - urn:ngm:class:aead-cipher
supports:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:service-mesh
  - urn:ngm:class:api-security
  - urn:ngm:class:zero-trust-architecture
relatedTo:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:x-509-certificate
  - urn:ngm:class:post-quantum-cryptography
  - urn:ngm:class:quic
  - urn:ngm:class:encrypted-client-hello
---

# TLS

Transport Layer Security (TLS) is an IETF-standardised cryptographic protocol that provides authenticated, confidential, and integrity-protected communication channels over reliable transports such as TCP and QUIC. TLS 1.3 (RFC 8446, 2018) achieves a one-round-trip handshake using ephemeral Diffie-Hellman key exchange with mandatory forward secrecy, encrypting the server certificate within the handshake to prevent passive fingerprinting. It is the security foundation of HTTPS, gRPC, MQTT, SMTP-over-TLS, LDAPS, and virtually every application-layer protocol requiring channel security, with mutual TLS (mTLS) extending the model to bidirectional client and server authentication.
