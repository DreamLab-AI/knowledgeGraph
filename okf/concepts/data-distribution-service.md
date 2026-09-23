---
okf_version: "0.2"
type: Class
title: Data Distribution Service
resource: urn:ngm:class:data-distribution-service
domain: robotics
description: The Data Distribution Service is a middleware standard for real-time, data-centric publish-subscribe communication between distributed system components. It defines a global data space in which publishers and subscribers exchange typed data samples without direct knowledge of one another, governed by configurable quality-of-service policies for reliability, latency, and durability. It is widely us
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:middleware
requires:
  - urn:ngm:class:real-time-systems
  - urn:ngm:class:quality-of-service
enables:
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:distributed-systems
implements:
  - urn:ngm:class:middleware
bridgesTo:
  - urn:ngm:class:robotics
uses:
  - urn:ngm:class:quality-of-service
  - urn:ngm:class:message-broker
supports:
  - urn:ngm:class:real-time-communication
  - urn:ngm:class:ros
  - urn:ngm:class:interoperability
partOf:
  - urn:ngm:class:distributed-systems
relatedTo:
  - urn:ngm:class:ros
  - urn:ngm:class:robot-control
  - urn:ngm:class:sensor-fusion
---

# Data Distribution Service

The Data Distribution Service is a middleware standard for real-time, data-centric publish-subscribe communication between distributed system components. It defines a global data space in which publishers and subscribers exchange typed data samples without direct knowledge of one another, governed by configurable quality-of-service policies for reliability, latency, and durability. It is widely used in robotics, autonomous vehicles, and other systems requiring deterministic machine-to-machine messaging.
