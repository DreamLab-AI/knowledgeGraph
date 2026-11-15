---
okf_version: "0.2"
type: Class
title: Identifier Layer
resource: urn:ngm:class:identifier-layer
domain: security
description: The Identifier Layer is the stratum that defines and manages the names and references used to denote entities unambiguously. It sits above the data and cryptographic primitives that make identifiers durable and verifiable and below the Identity Layer that binds meaning to them. It contains naming schemes, resolution mechanisms, and uniqueness guarantees.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:infra-security-and-identity
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:data-layer
  - urn:ngm:class:cryptographic-layer
enables:
  - urn:ngm:class:identity-layer
  - urn:ngm:class:custody-layer
bridgesTo:
  - urn:ngm:class:uniform-resource-identifier
  - urn:ngm:class:namespace
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Identifier Layer

The Identifier Layer is the stratum that defines and manages the names and references used to denote entities unambiguously. It sits above the data and cryptographic primitives that make identifiers durable and verifiable and below the Identity Layer that binds meaning to them. It contains naming schemes, resolution mechanisms, and uniqueness guarantees.
