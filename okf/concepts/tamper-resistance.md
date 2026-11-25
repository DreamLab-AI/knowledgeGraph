---
okf_version: "0.2"
type: Class
title: Tamper Resistance
resource: urn:ngm:class:tamper-resistance
domain: security
description: The property of a device or system that makes unauthorised physical access, modification, or extraction of its protected contents actively difficult, achieved through measures such as hardened enclosures, potted or shielded circuitry, mesh sensors that detect penetration, and logic that zeroises cryptographic keys when intrusion is sensed. Tamper resistance aims to prevent or frustrate an attack i
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:hardware-security
enables:
  - urn:ngm:class:trusted-platform-module
  - urn:ngm:class:secure-element
contrastsWith:
  - urn:ngm:class:tamper-evidence
relatedTo:
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:physical-security
  - urn:ngm:class:side-channel-attack
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Tamper Resistance

The property of a device or system that makes unauthorised physical access, modification, or extraction of its protected contents actively difficult, achieved through measures such as hardened enclosures, potted or shielded circuitry, mesh sensors that detect penetration, and logic that zeroises cryptographic keys when intrusion is sensed. Tamper resistance aims to prevent or frustrate an attack in progress, in contrast to tamper evidence, which merely ensures that interference leaves a detectable trace. It is a defining requirement for secure hardware including trusted platform modules, hardware security modules, smartcards, and payment terminals, and is graded by certification schemes such as FIPS 140-3 physical security levels and Common Criteria evaluations.
