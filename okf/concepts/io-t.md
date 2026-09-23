---
okf_version: "0.2"
type: Class
title: IoT
resource: urn:ngm:class:io-t
domain: infrastructure
description: The Internet of Things (IoT) is a networked ecosystem of physical devices — sensors, actuators, microcontrollers, and embedded processors — connected via IP-based communication protocols to collect, exchange, and act upon data with minimal direct human intervention. IoT extends digital connectivity into the physical world by binding heterogeneous hardware through standardised messaging protocols s
maturity: established
quality: 0.76
is-a:
  - urn:ngm:class:distributed-systems
hasPart:
  - urn:ngm:class:sensor
  - urn:ngm:class:actuator
  - urn:ngm:class:iot-gateway
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:embedded-system
requires:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:device-identity
  - urn:ngm:class:firmware-update
enables:
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:supply-chain-management
  - urn:ngm:class:digital-twin
  - urn:ngm:class:smart-city
  - urn:ngm:class:precision-agriculture
  - urn:ngm:class:industrial-automation
dependsOn:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:wireless-communication
contrastsWith:
  - urn:ngm:class:cloud-computing
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:blockchain
  - urn:ngm:class:digital-twin
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:mqtt
  - urn:ngm:class:co-ap
  - urn:ngm:class:edge-computing
  - urn:ngm:class:lpwan
standardizedBy:
  - urn:ngm:class:matter-protocol
  - urn:ngm:class:oneM2M
  - urn:ngm:class:ieee-802-15-4
  - urn:ngm:class:matter-protocol
relatedTo:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:time-series-data
  - urn:ngm:class:predictive-maintenance
---

# IoT

The Internet of Things (IoT) is a networked ecosystem of physical devices — sensors, actuators, microcontrollers, and embedded processors — connected via IP-based communication protocols to collect, exchange, and act upon data with minimal direct human intervention. IoT extends digital connectivity into the physical world by binding heterogeneous hardware through standardised messaging protocols such as MQTT and CoAP, gateway middleware for local aggregation, and cloud or on-premises analytics platforms. It spans consumer, industrial, agricultural, and healthcare domains, each imposing distinct constraints on power, latency, security, and regulatory compliance. The discipline integrates edge computing, machine learning inference, and digital twin modelling to close feedback loops between the physical and digital realms.
