---
okf_version: "0.2"
type: Class
title: Privilege Escalation
resource: urn:ngm:class:privilege-escalation
domain: security
description: Privilege escalation is the act of gaining rights beyond those originally granted, allowing an attacker or process to perform actions reserved for higher-trust principals. Vertical escalation moves from a lower to a higher privilege level, while horizontal escalation moves laterally to another principal at the same level. It is a pivotal phase in attack chains, typically exploiting misconfiguratio
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:security
requires:
  - urn:ngm:class:vulnerability
enables:
  - urn:ngm:class:penetration-testing
dependsOn:
  - urn:ngm:class:authentication
contrastsWith:
  - urn:ngm:class:least-privilege
relatedTo:
  - urn:ngm:class:authorisation
  - urn:ngm:class:authentication
  - urn:ngm:class:observability
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Privilege Escalation

Privilege escalation is the act of gaining rights beyond those originally granted, allowing an attacker or process to perform actions reserved for higher-trust principals. Vertical escalation moves from a lower to a higher privilege level, while horizontal escalation moves laterally to another principal at the same level. It is a pivotal phase in attack chains, typically exploiting misconfiguration, flawed access control or software vulnerabilities.
