---
okf_version: "0.2"
type: Class
title: Device Identity
resource: urn:ngm:class:device-identity
domain: security
description: Device identity is a unique, verifiable credential bound to a physical device that allows it to authenticate itself to a network, service, or other devices independently of any human user. It is typically established through a hardware root of trust, such as a TPM or secure element, that stores a cryptographic key pair generated or provisioned at manufacture. In IoT and sensor network deployments,
maturity: established
quality: 0
is-a:
  - urn:ngm:class:digital-identity
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Device Identity

Device identity is a unique, verifiable credential bound to a physical device that allows it to authenticate itself to a network, service, or other devices independently of any human user. It is typically established through a hardware root of trust, such as a TPM or secure element, that stores a cryptographic key pair generated or provisioned at manufacture. In IoT and sensor network deployments, device identity is foundational to zero-trust access control, allowing gateways and platforms to verify which physical device is sending data before admitting it to the network. Without it, spoofed or cloned devices can inject false data or gain unauthorised network access.
