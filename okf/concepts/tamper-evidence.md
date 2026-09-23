---
okf_version: "0.2"
type: Class
title: Tamper Evidence
resource: urn:ngm:class:tamper-evidence
domain: spatial-computing
description: Tamper evidence is the property of a system, record, or physical artefact whereby any unauthorised alteration leaves detectable traces that can be subsequently verified. It relies on mechanisms such as cryptographic hashing, digital signatures, and immutable logs so that the integrity of an item can be assessed after the fact. Tamper evidence does not necessarily prevent modification, but it guara
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:immutability
requires:
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:integrity-verification
  - urn:ngm:class:audit-trail
  - urn:ngm:class:provenance-tracking
contrastsWith:
  - urn:ngm:class:tamper-resistance
bridgesTo:
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:timestamp
  - urn:ngm:class:blockchain-anchoring
supports:
  - urn:ngm:class:immutability
  - urn:ngm:class:supply-chain-traceability
relatedTo:
  - urn:ngm:class:tamper-resistance
  - urn:ngm:class:nft
---

# Tamper Evidence

Tamper evidence is the property of a system, record, or physical artefact whereby any unauthorised alteration leaves detectable traces that can be subsequently verified. It relies on mechanisms such as cryptographic hashing, digital signatures, and immutable logs so that the integrity of an item can be assessed after the fact. Tamper evidence does not necessarily prevent modification, but it guarantees that modification cannot occur undetected.
