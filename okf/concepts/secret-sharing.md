---
okf_version: "0.2"
type: Class
title: Secret Sharing
resource: urn:ngm:class:secret-sharing
domain: security
description: "Secret sharing is a cryptographic technique that splits a secret into multiple shares distributed among participants such that only an authorised subset, meeting a defined threshold, can reconstruct the secret, while any smaller subset learns nothing about it. The canonical construction, Shamir's secret sharing, uses polynomial interpolation over a finite field. Secret sharing underpins threshold "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cryptography
hasPart:
  - urn:ngm:class:shamir-secret-sharing
requires:
  - urn:ngm:class:cryptographic-protocol
enables:
  - urn:ngm:class:multi-party-computation
  - urn:ngm:class:key-management
  - urn:ngm:class:privacy-preserving-computation
dependsOn:
  - urn:ngm:class:encryption
implements:
  - urn:ngm:class:threshold-cryptography
supports:
  - urn:ngm:class:multisignature
  - urn:ngm:class:custody
  - urn:ngm:class:wallet
  - urn:ngm:class:access-control
partOf:
  - urn:ngm:class:cryptography
relatedTo:
  - urn:ngm:class:security
  - urn:ngm:class:distributed-systems
---

# Secret Sharing

Secret sharing is a cryptographic technique that splits a secret into multiple shares distributed among participants such that only an authorised subset, meeting a defined threshold, can reconstruct the secret, while any smaller subset learns nothing about it. The canonical construction, Shamir's secret sharing, uses polynomial interpolation over a finite field. Secret sharing underpins threshold cryptography, distributed key management and secure multi-party computation.
