---
okf_version: "0.2"
type: Class
title: Anonymity
resource: urn:ngm:class:anonymity
domain: security
description: Anonymity is the property of an actor being unidentifiable within a set of potential actors, so that actions cannot be linked to a real-world identity. It is a core privacy goal achieved through techniques that obscure identifying attributes, network paths and metadata. Anonymity contrasts with pseudonymity, where a persistent but non-identifying handle is retained.
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:privacy
requires:
  - urn:ngm:class:cryptography
enables:
  - urn:ngm:class:privacy
  - urn:ngm:class:data-protection
implements:
  - urn:ngm:class:differential-privacy
contrastsWith:
  - urn:ngm:class:pseudonymity
  - urn:ngm:class:identity
  - urn:ngm:class:surveillance
bridgesTo:
  - urn:ngm:class:security
uses:
  - urn:ngm:class:encryption
  - urn:ngm:class:onion-routing
  - urn:ngm:class:anonymisation
supports:
  - urn:ngm:class:zero-knowledge-proof
partOf:
  - urn:ngm:class:privacy
relatedTo:
  - urn:ngm:class:tor
  - urn:ngm:class:vpn
  - urn:ngm:class:metadata
  - urn:ngm:class:authentication
---

# Anonymity

Anonymity is the property of an actor being unidentifiable within a set of potential actors, so that actions cannot be linked to a real-world identity. It is a core privacy goal achieved through techniques that obscure identifying attributes, network paths and metadata. Anonymity contrasts with pseudonymity, where a persistent but non-identifying handle is retained.
