---
okf_version: "0.2"
type: Class
title: DID Controller
resource: urn:ngm:class:did-controller
domain: security
description: The entity—person, organisation, or autonomous system—authorised to make changes to a DID document, as defined by the W3C DID Core specification. The DID controller proves its authority by controlling the cryptographic keys or verification methods designated in the DID document, and may be the DID subject itself (self-sovereign control), a guardian acting for a subject such as a child or an IoT de
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:entity
requires:
  - urn:ngm:class:cryptographic-key
  - urn:ngm:class:key-management
partOf:
  - urn:ngm:class:decentralised-identifier
relatedTo:
  - urn:ngm:class:did-document
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:digital-identity
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# DID Controller

The entity—person, organisation, or autonomous system—authorised to make changes to a DID document, as defined by the W3C DID Core specification. The DID controller proves its authority by controlling the cryptographic keys or verification methods designated in the DID document, and may be the DID subject itself (self-sovereign control), a guardian acting for a subject such as a child or an IoT device, or a set of parties sharing control. It is unrelated to the PID controller of control engineering, with which it shares only a surface string.
