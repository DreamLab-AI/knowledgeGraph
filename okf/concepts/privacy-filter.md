---
okf_version: "0.2"
type: Class
title: Privacy Filter
resource: urn:ngm:class:privacy-filter
domain: infrastructure
description: A sidecar service (ADR-008) that sanitises agent outputs before emission to Nostr Relay|Nostr relays or Federation Surface|federation surfaces, redacting personally identifiable information (PII), secrets, and regulated data, whilst maintaining data utility for downstream consumers and le...
maturity: established
quality: 0.87
is-a:
  - urn:ngm:class:infra-security-and-identity
  - urn:ngm:class:security-layer
hasPart:
  - urn:ngm:class:pattern-matching
  - urn:ngm:class:audit-trail
  - urn:ngm:class:policy-enforcement
  - urn:ngm:class:pii-detection
  - urn:ngm:class:redaction-engine
requires:
  - urn:ngm:class:classification-rules
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:privacy-policy
  - urn:ngm:class:regular-expressions
  - urn:ngm:class:machine-learning-discipline
enables:
  - urn:ngm:class:gdpr-compliance
  - urn:ngm:class:privacy-preservation
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:data-minimisation
  - urn:ngm:class:gdpr-compliance
  - urn:ngm:class:compliance-with-ccpa
implements:
  - urn:ngm:class:anonymisation
  - urn:ngm:class:privacy-preserving-data-emission
  - urn:ngm:class:anonymisation
  - urn:ngm:class:redaction-policies
bridgesTo:
  - urn:ngm:class:compliance-framework
  - urn:ngm:class:gdpr-regulation
  - urn:ngm:class:data-protection
---

# Privacy Filter

A sidecar service (ADR-008) that sanitises agent outputs before emission to Nostr Relay|Nostr relays or Federation Surface|federation surfaces, redacting personally identifiable information (PII), secrets, and regulated data, whilst maintaining data utility for downstream consumers and le...
