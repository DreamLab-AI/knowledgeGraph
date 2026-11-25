---
okf_version: "0.2"
type: Class
title: Authenticity Certification
resource: urn:ngm:class:authenticity-certification
domain: security
description: A formal process or credential that attests to the genuine origin, integrity, and provenance of a digital or physical artefact, typically employing cryptographic signing, trusted third-party attestation, or standards-based metadata embedding. Authenticity certification enables recipients to verify that content has not been altered and originated from a claimed source.
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:content-authenticity
enables:
  - urn:ngm:class:provenance-verification
  - urn:ngm:class:trust
uses:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptography
  - urn:ngm:class:hash-function
relatedTo:
  - urn:ngm:class:deepfake-detection
  - urn:ngm:class:data-provenance
  - urn:ngm:class:certificate-authority
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Authenticity Certification

A formal process or credential that attests to the genuine origin, integrity, and provenance of a digital or physical artefact, typically employing cryptographic signing, trusted third-party attestation, or standards-based metadata embedding. Authenticity certification enables recipients to verify that content has not been altered and originated from a claimed source.
