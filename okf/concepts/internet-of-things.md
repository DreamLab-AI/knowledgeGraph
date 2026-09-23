---
okf_version: "0.2"
type: Class
title: Internet of Things
resource: urn:ngm:class:internet-of-things
domain: infrastructure
description: The Internet of Things (IoT) is a distributed computing paradigm in which physical objects embedded with sensors, actuators, microcontrollers, and wireless communication modules collect, exchange, and act upon data autonomously over IP networks. IoT deployments span a layered architecture from resource-constrained end-devices through edge gateways to cloud analytics platforms, relying on lightweig
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:distributed-systems
hasPart:
  - urn:ngm:class:iot-gateway
  - urn:ngm:class:sensor-data
  - urn:ngm:class:actuator
requires:
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:cloud-computing
enables:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:telemetry-and-analytics
  - urn:ngm:class:smart-city
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:predictive-maintenance
  - urn:ngm:class:telemetry-and-analytics
  - urn:ngm:class:industrial-automation
contrastsWith:
  - urn:ngm:class:traditional-scada
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:digital-twin
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:mqtt
  - urn:ngm:class:co-ap
  - urn:ngm:class:sensor
  - urn:ngm:class:wireless-communication
  - urn:ngm:class:microcontroller
  - urn:ngm:class:tls
standardizedBy:
  - urn:ngm:class:etsi
  - urn:ngm:class:ieee
  - urn:ngm:class:itu
relatedTo:
  - urn:ngm:class:cyber-physical-systems
  - urn:ngm:class:5-g
  - urn:ngm:class:fog-computing
  - urn:ngm:class:device-management
---

# Internet of Things

The Internet of Things (IoT) is a distributed computing paradigm in which physical objects embedded with sensors, actuators, microcontrollers, and wireless communication modules collect, exchange, and act upon data autonomously over IP networks. IoT deployments span a layered architecture from resource-constrained end-devices through edge gateways to cloud analytics platforms, relying on lightweight protocols such as MQTT, CoAP, AMQP, and LwM2M designed for low-bandwidth, high-latency, or lossy network environments. The paradigm encompasses consumer IoT (smart home devices, wearables), Industrial IoT (IIoT) for manufacturing and critical infrastructure, and urban-scale deployments in smart cities and precision agriculture. Security, interoperability, and device lifecycle management are defining engineering challenges across all IoT segments.
