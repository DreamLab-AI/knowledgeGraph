---
okf_version: "0.2"
type: Class
title: Centralised Identifier
resource: urn:ngm:class:centralised-identifier
domain: security
description: "An identifier issued, controlled, and resolvable only through a central authority—such as an email address bound to a provider, a username on a platform, a government-issued number, or a domain name under registry control. Centralised identifiers are the architectural opposite of decentralised identifiers: the issuing authority can revoke, reassign, surveil, or lose them, creating single points of"
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:identifier
dependsOn:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:domain-name-system
contrastsWith:
  - urn:ngm:class:decentralised-identifier
relatedTo:
  - urn:ngm:class:single-point-of-failure
  - urn:ngm:class:digital-identity
  - urn:ngm:class:identity-management
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Centralised Identifier

An identifier issued, controlled, and resolvable only through a central authority—such as an email address bound to a provider, a username on a platform, a government-issued number, or a domain name under registry control. Centralised identifiers are the architectural opposite of decentralised identifiers: the issuing authority can revoke, reassign, surveil, or lose them, creating single points of failure and lock-in, but also offering simple governance, accountability, and recovery paths that self-sovereign schemes must engineer explicitly.
