---
okf_version: "0.2"
type: Class
title: Industrial IoT
resource: urn:ngm:class:industrial-io-t
domain: infrastructure
description: Industrial IoT (IIoT) is the application of Internet of Things technologies to industrial operational environments, connecting sensors, actuators, programmable logic controllers, and edge gateways to analytics platforms and supervisory control systems to enable real-time operational visibility, process optimisation, predictive maintenance, and remote asset management. IIoT bridges historically iso
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:internet-of-things
hasPart:
  - urn:ngm:class:sensor
  - urn:ngm:class:actuator
  - urn:ngm:class:programmable-logic-controller
  - urn:ngm:class:edge-gateway
requires:
  - urn:ngm:class:operational-technology
  - urn:ngm:class:scada
  - urn:ngm:class:cybersecurity
enables:
  - urn:ngm:class:predictive-maintenance
  - urn:ngm:class:digital-twin
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:condition-monitoring
  - urn:ngm:class:industrial-automation
dependsOn:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:network-protocol
contrastsWith:
  - urn:ngm:class:consumer-iot
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:opc-ua
  - urn:ngm:class:mqtt
  - urn:ngm:class:time-sensitive-networking
standardizedBy:
  - urn:ngm:class:iec-62443
  - urn:ngm:class:iec-62541
relatedTo:
  - urn:ngm:class:cyber-physical-systems
  - urn:ngm:class:industry-4-0
---

# Industrial IoT

Industrial IoT (IIoT) is the application of Internet of Things technologies to industrial operational environments, connecting sensors, actuators, programmable logic controllers, and edge gateways to analytics platforms and supervisory control systems to enable real-time operational visibility, process optimisation, predictive maintenance, and remote asset management. IIoT bridges historically isolated operational technology (OT) networks—including SCADA systems, distributed control systems (DCS), and fieldbus networks—with IT infrastructure, creating a converged cyber-physical stack requiring rigorous security governance under frameworks such as IEC 62443. Key application-layer standards include OPC UA (IEC 62541), MQTT (ISO/IEC 20922), AMQP, and time-sensitive networking extensions (IEEE 802.1 TSN) for deterministic Ethernet.
