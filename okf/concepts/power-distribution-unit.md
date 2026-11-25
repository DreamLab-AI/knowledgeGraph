---
okf_version: "0.2"
type: Class
title: Power Distribution Unit
resource: urn:ngm:class:power-distribution-unit
domain: infrastructure
description: A power distribution unit (PDU) is a device that delivers and manages electrical power to multiple pieces of equipment within a data centre rack or row. It takes input from an upstream supply such as a UPS or the building electrical feed and distributes regulated, often metered, power across many outlets. Modern intelligent PDUs add remote monitoring, per-outlet switching and environmental sensing
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:computing-infrastructure
hasPart:
  - urn:ngm:class:power-supply
  - urn:ngm:class:monitoring
requires:
  - urn:ngm:class:redundancy
  - urn:ngm:class:high-availability
enables:
  - urn:ngm:class:observability
  - urn:ngm:class:fault-tolerance
dependsOn:
  - urn:ngm:class:energy-and-power
  - urn:ngm:class:power-supply
contrastsWith:
  - urn:ngm:class:power-supply
supports:
  - urn:ngm:class:data-centre
  - urn:ngm:class:high-availability
  - urn:ngm:class:energy-efficiency
partOf:
  - urn:ngm:class:data-centre
  - urn:ngm:class:computing-infrastructure
relatedTo:
  - urn:ngm:class:cooling-system
  - urn:ngm:class:sustainability
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Power Distribution Unit

A power distribution unit (PDU) is a device that delivers and manages electrical power to multiple pieces of equipment within a data centre rack or row. It takes input from an upstream supply such as a UPS or the building electrical feed and distributes regulated, often metered, power across many outlets. Modern intelligent PDUs add remote monitoring, per-outlet switching and environmental sensing to support availability and energy-efficiency goals.
