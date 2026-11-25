---
okf_version: "0.2"
type: Class
title: Perimeter Security
resource: urn:ngm:class:perimeter-security
domain: security
description: Perimeter security is a network defence model that establishes a fortified boundary between a trusted internal network and untrusted external networks, concentrating controls such as firewalls and gateways at that boundary. It treats the network edge as the principal line of defence, inspecting and filtering traffic crossing into or out of the protected zone. The approach assumes that hosts inside
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:network-security
requires:
  - urn:ngm:class:access-control
  - urn:ngm:class:security-architecture
enables:
  - urn:ngm:class:data-loss-prevention
  - urn:ngm:class:secure-communication
dependsOn:
  - urn:ngm:class:authentication
  - urn:ngm:class:network-layer
contrastsWith:
  - urn:ngm:class:zero-trust-architecture
bridgesTo:
  - urn:ngm:class:identity-and-access-management
uses:
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:threat-detection
supports:
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:authorisation
relatedTo:
  - urn:ngm:class:data-breach
  - urn:ngm:class:network-protocol
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Perimeter Security

Perimeter security is a network defence model that establishes a fortified boundary between a trusted internal network and untrusted external networks, concentrating controls such as firewalls and gateways at that boundary. It treats the network edge as the principal line of defence, inspecting and filtering traffic crossing into or out of the protected zone. The approach assumes that hosts inside the perimeter are comparatively trustworthy, an assumption that modern architectures increasingly challenge.
