---
okf_version: "0.2"
type: Class
title: Warehouse Management System
resource: urn:ngm:class:warehouse-management-system
domain: robotics
description: A warehouse management system (WMS) is the software platform that orchestrates and optimises the day-to-day operations of a warehouse or distribution centre, controlling receiving, putaway, storage location, inventory tracking, order picking, packing, and despatch. It maintains a real-time digital model of stock and locations, directs labour and equipment via task assignment, and integrates with e
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:inventory-management
hasPart:
  - urn:ngm:class:inventory-management
requires:
  - urn:ngm:class:enterprise-resource-planning
enables:
  - urn:ngm:class:warehouse-automation
  - urn:ngm:class:logistics-management
dependsOn:
  - urn:ngm:class:enterprise-resource-planning
implements:
  - urn:ngm:class:inventory-management
bridgesTo:
  - urn:ngm:class:warehouse-automation
  - urn:ngm:class:fleet-management
  - urn:ngm:class:fleet-management
uses:
  - urn:ngm:class:barcode
  - urn:ngm:class:rfid
supports:
  - urn:ngm:class:demand-forecasting
partOf:
  - urn:ngm:class:supply-chain-management
relatedTo:
  - urn:ngm:class:logistics
  - urn:ngm:class:supply-chain-management
  - urn:ngm:class:demand-forecasting
---

# Warehouse Management System

A warehouse management system (WMS) is the software platform that orchestrates and optimises the day-to-day operations of a warehouse or distribution centre, controlling receiving, putaway, storage location, inventory tracking, order picking, packing, and despatch. It maintains a real-time digital model of stock and locations, directs labour and equipment via task assignment, and integrates with enterprise resource planning, transport, and automation layers. As the control plane for intralogistics, the WMS underpins inventory accuracy, fulfilment throughput, and coordination with robotic warehouse automation.
