---
okf_version: "0.2"
type: Class
title: Trusted Timestamping
resource: urn:ngm:class:trusted-timestamping
domain: security
description: Trusted timestamping is the process of securely recording the time at which a piece of data existed, using a trusted third party that cryptographically binds a hash of the data to an authoritative time and signs the result. Standardised by RFC 3161, it produces a timestamp token that proves data integrity and existence-by-time without revealing the data, and is used in digital signatures, legal re
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:timestamping-service
uses:
  - urn:ngm:class:timestamp-authority
  - urn:ngm:class:hash-function
  - urn:ngm:class:digital-signature
relatedTo:
  - urn:ngm:class:public-key-cryptography
---

# Trusted Timestamping

Trusted timestamping is the process of securely recording the time at which a piece of data existed, using a trusted third party that cryptographically binds a hash of the data to an authoritative time and signs the result. Standardised by RFC 3161, it produces a timestamp token that proves data integrity and existence-by-time without revealing the data, and is used in digital signatures, legal record-keeping, intellectual-property protection, and regulatory compliance. It establishes a verifiable temporal ordering that survives even after signing keys expire.
