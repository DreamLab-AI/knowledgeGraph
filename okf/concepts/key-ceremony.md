---
okf_version: "0.2"
type: Class
title: Key Ceremony
resource: urn:ngm:class:key-ceremony
domain: blockchain
description: A key ceremony is a carefully scripted, audited procedure for generating, distributing, or activating cryptographic keys under strict controls and witnessed participation. It is used when the keys involved are so sensitive that their creation must be verifiably correct, tamper-evident, and resistant to insider compromise. Key ceremonies are common in certificate authorities, threshold-cryptography
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:key-management
requires:
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:secret-sharing
enables:
  - urn:ngm:class:trusted-setup
  - urn:ngm:class:custody
dependsOn:
  - urn:ngm:class:key-management
implements:
  - urn:ngm:class:trusted-setup
bridgesTo:
  - urn:ngm:class:distributed-key-generation
uses:
  - urn:ngm:class:multi-party-computation
supports:
  - urn:ngm:class:custody
partOf:
  - urn:ngm:class:key-management
relatedTo:
  - urn:ngm:class:threshold-cryptography
  - urn:ngm:class:distributed-key-generation
---

# Key Ceremony

A key ceremony is a carefully scripted, audited procedure for generating, distributing, or activating cryptographic keys under strict controls and witnessed participation. It is used when the keys involved are so sensitive that their creation must be verifiably correct, tamper-evident, and resistant to insider compromise. Key ceremonies are common in certificate authorities, threshold-cryptography setups, and high-value custody systems.
