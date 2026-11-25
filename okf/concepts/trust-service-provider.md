---
okf_version: "0.2"
type: Class
title: Trust Service Provider
resource: urn:ngm:class:trust-service-provider
domain: security
description: A trust service provider (TSP) is an entity that issues and manages trust services such as electronic signatures, seals, timestamps and website authentication certificates. Under regimes like the EU eIDAS regulation, qualified TSPs meet stringent audit and security requirements so that the services they provide carry defined legal effect. A TSP operates the cryptographic infrastructure — certifica
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:security
hasPart:
  - urn:ngm:class:timestamp-authority
  - urn:ngm:class:certificate-authority
requires:
  - urn:ngm:class:certificate-authority
enables:
  - urn:ngm:class:qualified-electronic-signature
  - urn:ngm:class:non-repudiation
dependsOn:
  - urn:ngm:class:digital-signature
implements:
  - urn:ngm:class:trust-anchor
bridgesTo:
  - urn:ngm:class:identity
uses:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptography
supports:
  - urn:ngm:class:authentication
standardizedBy:
  - urn:ngm:class:standards
relatedTo:
  - urn:ngm:class:non-repudiation
  - urn:ngm:class:timestamp-authority
  - urn:ngm:class:authentication
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Trust Service Provider

A trust service provider (TSP) is an entity that issues and manages trust services such as electronic signatures, seals, timestamps and website authentication certificates. Under regimes like the EU eIDAS regulation, qualified TSPs meet stringent audit and security requirements so that the services they provide carry defined legal effect. A TSP operates the cryptographic infrastructure — certificate issuance, timestamping authorities and validation services — that lets relying parties trust the authenticity and integrity of electronic transactions. It is a cornerstone of digital identity and electronic trust frameworks.
