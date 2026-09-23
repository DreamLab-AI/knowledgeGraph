---
okf_version: "0.2"
type: Class
title: Forward Secrecy
resource: urn:ngm:class:forward-secrecy
domain: security
description: Forward secrecy, also called perfect forward secrecy, is a property of key-agreement protocols ensuring that the compromise of long-term private keys does not allow an attacker to decrypt previously recorded session traffic. It is achieved by deriving ephemeral session keys for each connection through a fresh key exchange and discarding them afterwards, so that no single persistent secret can retr
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cryptographic-protocol
requires:
  - urn:ngm:class:cryptography
  - urn:ngm:class:key-exchange
enables:
  - urn:ngm:class:secure-communication
  - urn:ngm:class:data-protection
implements:
  - urn:ngm:class:key-exchange
  - urn:ngm:class:cryptographic-protocol
supports:
  - urn:ngm:class:tls-encryption
  - urn:ngm:class:tls
partOf:
  - urn:ngm:class:information-security
relatedTo:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:encryption
---

# Forward Secrecy

Forward secrecy, also called perfect forward secrecy, is a property of key-agreement protocols ensuring that the compromise of long-term private keys does not allow an attacker to decrypt previously recorded session traffic. It is achieved by deriving ephemeral session keys for each connection through a fresh key exchange and discarding them afterwards, so that no single persistent secret can retroactively unlock past communications. The property is a cornerstone of modern transport-layer security.
