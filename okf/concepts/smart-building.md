---
okf_version: "0.2"
type: Class
title: Smart Building
resource: urn:ngm:class:smart-building
domain: spatial-computing
description: A Smart Building is a facility that integrates networked sensors, actuators, control systems, and analytical software to automatically optimise energy consumption, occupant comfort, security, and operational efficiency in real time. Building systems — HVAC, lighting, access control, fire detection, lifts, and power distribution — are connected through a building management system (BMS) and increas
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:building-automation
hasPart:
  - urn:ngm:class:iot-sensor
  - urn:ngm:class:building-automation
  - urn:ngm:class:io-t-infrastructure
requires:
  - urn:ngm:class:iot-security
  - urn:ngm:class:real-time-data-processing
enables:
  - urn:ngm:class:smart-city-infrastructure
  - urn:ngm:class:io-t-ai-integration
  - urn:ngm:class:real-time-control
dependsOn:
  - urn:ngm:class:io-t-integration
  - urn:ngm:class:industrial-io-t
bridgesTo:
  - urn:ngm:class:smart-city
  - urn:ngm:class:bim-virtual-model
uses:
  - urn:ngm:class:io-t-sensor-network
  - urn:ngm:class:iot-device
  - urn:ngm:class:real-time-analytics
supports:
  - urn:ngm:class:smart-city
  - urn:ngm:class:smart-grid
  - urn:ngm:class:smart-home
relatedTo:
  - urn:ngm:class:smart-home-automation
  - urn:ngm:class:io-t
  - urn:ngm:class:cyber-physical-systems
---

# Smart Building

A Smart Building is a facility that integrates networked sensors, actuators, control systems, and analytical software to automatically optimise energy consumption, occupant comfort, security, and operational efficiency in real time. Building systems — HVAC, lighting, access control, fire detection, lifts, and power distribution — are connected through a building management system (BMS) and increasingly exposed through open protocols such as BACnet, Modbus, MQTT, and OPC-UA to enable data-driven control strategies. Machine learning models analyse sensor streams to predict occupancy, detect anomalies, and schedule maintenance proactively. Smart buildings are fundamental nodes in [[Smart City]] infrastructure, integrating with district energy grids, electric vehicle charging, and urban mobility platforms.
