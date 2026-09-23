---
okf_version: "0.2"
type: Class
title: End-to-End Encryption
resource: urn:ngm:class:end-to-end-encryption
domain: security
description: End-to-end encryption (E2EE) is a communication security model in which data is encrypted on the sender's device and can only be decrypted by the intended recipient's device, ensuring that no intermediate party—including service providers, network operators, or infrastructure owners—can access the plaintext content. It combines asymmetric key exchange with symmetric session encryption to provide c
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:encryption
requires:
  - urn:ngm:class:digital-certificate
  - urn:ngm:class:hardware-security-module
enables:
  - urn:ngm:class:privacy
  - urn:ngm:class:privacy-by-design
  - urn:ngm:class:forward-secrecy
  - urn:ngm:class:secure-messaging
dependsOn:
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:authentication
  - urn:ngm:class:tee
contrastsWith:
  - urn:ngm:class:tls
bridgesTo:
  - urn:ngm:class:post-quantum-cryptography
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:secure-multi-party-computation
uses:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:key-management
  - urn:ngm:class:signal-protocol
  - urn:ngm:class:asymmetric-cryptography
  - urn:ngm:class:diffie-hellman-key-exchange
supports:
  - urn:ngm:class:zero-knowledge
  - urn:ngm:class:data-sovereignty
standardizedBy:
  - urn:ngm:class:nist-post-quantum-cryptography
  - urn:ngm:class:ietf
relatedTo:
  - urn:ngm:class:digital-rights
  - urn:ngm:class:data-protection-regulation
---

# End-to-End Encryption

End-to-end encryption (E2EE) is a communication security model in which data is encrypted on the sender's device and can only be decrypted by the intended recipient's device, ensuring that no intermediate party—including service providers, network operators, or infrastructure owners—can access the plaintext content. It combines asymmetric key exchange with symmetric session encryption to provide confidentiality, integrity, and authenticity without trusting intermediaries.
