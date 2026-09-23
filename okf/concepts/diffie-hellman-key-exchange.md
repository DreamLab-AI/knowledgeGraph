---
okf_version: "0.2"
type: Class
title: Diffie-Hellman Key Exchange
resource: urn:ngm:class:diffie-hellman-key-exchange
domain: security
description: Diffie-Hellman Key Exchange is a cryptographic method by which two parties establish a shared secret over an insecure channel without ever transmitting the secret itself. Each party combines its private value with the other party's public value such that both arrive at the same key, which an eavesdropper cannot feasibly compute. Its security rests on the difficulty of the discrete logarithm proble
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:key-exchange
hasPart:
  - urn:ngm:class:public-key
  - urn:ngm:class:private-key
enables:
  - urn:ngm:class:perfect-forward-secrecy
  - urn:ngm:class:secure-channel
dependsOn:
  - urn:ngm:class:asymmetric-cryptography
implements:
  - urn:ngm:class:key-agreement
contrastsWith:
  - urn:ngm:class:symmetric-encryption
uses:
  - urn:ngm:class:discrete-logarithm-problem
  - urn:ngm:class:modular-arithmetic
supports:
  - urn:ngm:class:tls
  - urn:ngm:class:tls-handshake
relatedTo:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:cryptography
---

# Diffie-Hellman Key Exchange

Diffie-Hellman Key Exchange is a cryptographic method by which two parties establish a shared secret over an insecure channel without ever transmitting the secret itself. Each party combines its private value with the other party's public value such that both arrive at the same key, which an eavesdropper cannot feasibly compute. Its security rests on the difficulty of the discrete logarithm problem, with elliptic-curve variants offering equivalent strength at smaller key sizes. It underpins forward-secret session establishment in protocols such as Transport Layer Security.
