---
okf_version: "0.2"
type: Class
title: OPC UA
resource: urn:ngm:class:opc-ua
domain: infrastructure
description: "OPC Unified Architecture (OPC UA) is an open, platform-independent, service-oriented communication standard developed by the OPC Foundation for secure and reliable data exchange in industrial automation and the Industrial Internet of Things. It provides a unified information model that merges process data, alarms, historical data, and device metadata into a single addressable namespace accessible "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:interoperability-standard
requires:
  - urn:ngm:class:x-509-certificate
  - urn:ngm:class:tcp-ip
enables:
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:industrial-io-t
  - urn:ngm:class:real-time-monitoring
  - urn:ngm:class:digital-twin
  - urn:ngm:class:smart-manufacturing
implements:
  - urn:ngm:class:service-oriented-architecture
  - urn:ngm:class:publish-subscribe-pattern
contrastsWith:
  - urn:ngm:class:profinet
bridgesTo:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:edge-computing
uses:
  - urn:ngm:class:semantic-interoperability
  - urn:ngm:class:mqtt
  - urn:ngm:class:open-standard
standardizedBy:
  - urn:ngm:class:opc-foundation
  - urn:ngm:class:iec
partOf:
  - urn:ngm:class:industry-4-0
relatedTo:
  - urn:ngm:class:sensor
  - urn:ngm:class:control-system
  - urn:ngm:class:programmable-logic-controller
  - urn:ngm:class:scada
---

# OPC UA

OPC Unified Architecture (OPC UA) is an open, platform-independent, service-oriented communication standard developed by the OPC Foundation for secure and reliable data exchange in industrial automation and the Industrial Internet of Things. It provides a unified information model that merges process data, alarms, historical data, and device metadata into a single addressable namespace accessible via TCP binary or HTTPS transport, replacing the earlier COM/DCOM-based OPC Classic specifications with a cross-platform, scalable architecture.
