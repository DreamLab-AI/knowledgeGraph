---
okf_version: "0.2"
type: Class
title: Iot Security
resource: urn:ngm:class:iot-security
domain: security
description: IoT security is the discipline of protecting Internet of Things devices, the networks they connect to, and the data they generate and exchange. It addresses the constrained compute, intermittent connectivity, and large attack surface characteristic of embedded sensors and actuators, applying authentication, encryption, secure boot, and lifecycle patch management. Because IoT devices are often phys
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:network-security
requires:
  - urn:ngm:class:secure-boot
  - urn:ngm:class:encryption
  - urn:ngm:class:firmware
enables:
  - urn:ngm:class:data-protection
dependsOn:
  - urn:ngm:class:authentication
bridgesTo:
  - urn:ngm:class:network-security
  - urn:ngm:class:edge-computing
uses:
  - urn:ngm:class:mutual-tls
  - urn:ngm:class:mqtt
  - urn:ngm:class:digital-signature
supports:
  - urn:ngm:class:incident-response
standardizedBy:
  - urn:ngm:class:standards
  - urn:ngm:class:iso
relatedTo:
  - urn:ngm:class:threat-model
  - urn:ngm:class:attack-vector
  - urn:ngm:class:vulnerability
  - urn:ngm:class:iot-device
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Iot Security

IoT security is the discipline of protecting Internet of Things devices, the networks they connect to, and the data they generate and exchange. It addresses the constrained compute, intermittent connectivity, and large attack surface characteristic of embedded sensors and actuators, applying authentication, encryption, secure boot, and lifecycle patch management. Because IoT devices are often physically exposed and deployed at scale, weak credentials and unpatched firmware are recurrent risks that can be conscripted into botnets.
