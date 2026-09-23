---
okf_version: "0.2"
type: Class
title: DDS Middleware
resource: urn:ngm:class:dds-middleware
domain: distributed-systems
description: Data Distribution Service (DDS) Middleware is an OMG-standardised publish-subscribe communication middleware designed for real-time, scalable, and decentralised data exchange in safety-critical and high-performance distributed systems. It defines a Data-Centric Publish-Subscribe (DCPS) model in which participants discover each other automatically and exchange typed data via a global data space, go
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:middleware
hasPart:
  - urn:ngm:class:quality-of-service
  - urn:ngm:class:publish-subscribe-pattern
requires:
  - urn:ngm:class:network-transport
enables:
  - urn:ngm:class:collaborative-systems-modality-robotics
  - urn:ngm:class:robot-kinematics
  - urn:ngm:class:industrial-robot
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:real-time
implements:
  - urn:ngm:class:publish-subscribe-pattern
  - urn:ngm:class:communication-protocol
  - urn:ngm:class:distributed-system-protocol
contrastsWith:
  - urn:ngm:class:message-broker
  - urn:ngm:class:mqtt
bridgesTo:
  - urn:ngm:class:robotics
  - urn:ngm:class:infrastructure
uses:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:embedded-systems
supports:
  - urn:ngm:class:ros-2
  - urn:ngm:class:safety-critical-systems
  - urn:ngm:class:digital-twin
standardizedBy:
  - urn:ngm:class:object-management-group
relatedTo:
  - urn:ngm:class:middleware-layer
  - urn:ngm:class:time-sensitive-networking
---

# DDS Middleware

Data Distribution Service (DDS) Middleware is an OMG-standardised publish-subscribe communication middleware designed for real-time, scalable, and decentralised data exchange in safety-critical and high-performance distributed systems. It defines a Data-Centric Publish-Subscribe (DCPS) model in which participants discover each other automatically and exchange typed data via a global data space, governed by a rich set of Quality of Service (QoS) policies covering reliability, latency, deadline, liveliness, and durability. DDS is the foundational communication layer for ROS 2, NATO's STANAG 4910 tactical networks, and aerospace control systems.
