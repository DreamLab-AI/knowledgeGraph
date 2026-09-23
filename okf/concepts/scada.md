---
okf_version: "0.2"
type: Class
title: SCADA
resource: urn:ngm:class:scada
domain: infrastructure
description: SCADA (Supervisory Control and Data Acquisition) is a control-system architecture that uses computers, networked data communications and graphical interfaces to monitor and supervise industrial processes across geographically distributed sites. It gathers real-time telemetry from field sensors and controllers, presents it to operators, and issues supervisory commands back to actuators and programm
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:industrial-automation
hasPart:
  - urn:ngm:class:real-time-monitoring
  - urn:ngm:class:data-serialization
  - urn:ngm:class:sensor
  - urn:ngm:class:actuator
requires:
  - urn:ngm:class:sensor
  - urn:ngm:class:network-protocol
enables:
  - urn:ngm:class:building-automation
uses:
  - urn:ngm:class:process-control
  - urn:ngm:class:control-system
supports:
  - urn:ngm:class:smart-grid
  - urn:ngm:class:manufacturing-automation
  - urn:ngm:class:energy-management
standardizedBy:
  - urn:ngm:class:standards-organization
relatedTo:
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:control-system
  - urn:ngm:class:process-control
---

# SCADA

SCADA (Supervisory Control and Data Acquisition) is a control-system architecture that uses computers, networked data communications and graphical interfaces to monitor and supervise industrial processes across geographically distributed sites. It gathers real-time telemetry from field sensors and controllers, presents it to operators, and issues supervisory commands back to actuators and programmable controllers. SCADA underpins critical infrastructure such as power grids, water treatment, manufacturing and pipeline operations.
