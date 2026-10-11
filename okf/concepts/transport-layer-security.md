---
okf_version: "0.2"
type: Class
title: Transport Layer Security
resource: urn:ngm:class:transport-layer-security
domain: security
description: Transport Layer Security (TLS) is an IETF-standardised cryptographic protocol that provides authenticated, confidential, and integrity-protected communication channels over reliable transports such as TCP and QUIC. TLS 1.3 (RFC 8446, 2018) achieves a one-round-trip handshake using ephemeral Diffie-Hellman key exchange with mandatory forward secrecy, encrypting the server certificate within the han
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-protocol
hasPart:
  - urn:ngm:class:tls-handshake
  - urn:ngm:class:session-key
requires:
  - urn:ngm:class:public-key-infrastructure
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:x-509-certificate
  - urn:ngm:class:asymmetric-cryptography
  - urn:ngm:class:digital-certificate
enables:
  - urn:ngm:class:encryption
  - urn:ngm:class:authentication
  - urn:ngm:class:secure-communication
  - urn:ngm:class:data-integrity
  - urn:ngm:class:mutual-authentication
  - urn:ngm:class:http
  - urn:ngm:class:network-security
  - urn:ngm:class:mutual-tls
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
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:federated-learning
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:diffie-hellman-key-exchange
  - urn:ngm:class:digital-signature
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:message-authentication-code
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:hkdf
  - urn:ngm:class:aead-cipher
supports:
  - urn:ngm:class:http
  - urn:ngm:class:secure-email
  - urn:ngm:class:api-security
standardizedBy:
  - urn:ngm:class:internet-engineering-task-force
  - urn:ngm:class:rfc-8446
relatedTo:
  - urn:ngm:class:certificate-revocation
  - urn:ngm:class:forward-secrecy
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:x-509-certificate
  - urn:ngm:class:post-quantum-cryptography
  - urn:ngm:class:quic
  - urn:ngm:class:encrypted-client-hello
---

# Transport Layer Security

Transport Layer Security (TLS) is an IETF-standardised cryptographic protocol that provides authenticated, confidential, and integrity-protected communication channels over reliable transports such as TCP and QUIC. TLS 1.3 (RFC 8446, 2018) achieves a one-round-trip handshake using ephemeral Diffie-Hellman key exchange with mandatory forward secrecy, encrypting the server certificate within the handshake to prevent passive fingerprinting. It is the security foundation of HTTPS, gRPC, MQTT, SMTP-over-TLS, LDAPS, and virtually every application-layer protocol requiring channel security, with mutual TLS (mTLS) extending the model to bidirectional client and server authentication.
