---
okf_version: "0.2"
type: Class
title: IoT Device
resource: urn:ngm:class:iot-device
domain: infrastructure
description: An IoT device is a networked physical object embedding sensing, processing and communication capabilities that allows it to collect, exchange and act on data over a network. Such devices range from simple sensors and actuators to complex embedded systems, and typically operate under tight power, compute and bandwidth constraints. They form the edge of the Internet of Things, feeding data to gatewa
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:internet-of-things
hasPart:
  - urn:ngm:class:sensor
  - urn:ngm:class:actuator
requires:
  - urn:ngm:class:bandwidth
enables:
  - urn:ngm:class:edge-computing
dependsOn:
  - urn:ngm:class:firewall
implements:
  - urn:ngm:class:embedded-system
bridgesTo:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:cloud-computing
uses:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:mqtt
supports:
  - urn:ngm:class:interoperability
partOf:
  - urn:ngm:class:internet-of-things
relatedTo:
  - urn:ngm:class:internet-protocol
  - urn:ngm:class:embedded-system
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# IoT Device

An IoT device is a networked physical object embedding sensing, processing and communication capabilities that allows it to collect, exchange and act on data over a network. Such devices range from simple sensors and actuators to complex embedded systems, and typically operate under tight power, compute and bandwidth constraints. They form the edge of the Internet of Things, feeding data to gateways, edge nodes and cloud services.
