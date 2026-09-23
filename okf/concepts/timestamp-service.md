---
okf_version: "0.2"
type: Class
title: Timestamp Service
resource: urn:ngm:class:timestamp-service
domain: infrastructure
description: A timestamp service issues verifiable evidence that a particular piece of data existed at or before a specific point in time, without revealing the data's contents. It accepts the hash of a document, binds it to a trusted time reference, and returns a signed timestamp token that anyone can later verify. Timestamp services support non-repudiation, intellectual-property priority, regulatory record-k
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:timestamping-service
enables:
  - urn:ngm:class:digital-signature
uses:
  - urn:ngm:class:timestamp-authority
  - urn:ngm:class:hash-function
relatedTo:
  - urn:ngm:class:trusted-timestamping
---

# Timestamp Service

A timestamp service issues verifiable evidence that a particular piece of data existed at or before a specific point in time, without revealing the data's contents. It accepts the hash of a document, binds it to a trusted time reference, and returns a signed timestamp token that anyone can later verify. Timestamp services support non-repudiation, intellectual-property priority, regulatory record-keeping, and long-term signature validation, and may be anchored in a trusted timestamp authority or in a public blockchain for trust-minimised proof of existence.
