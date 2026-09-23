---
okf_version: "0.2"
type: Class
title: Real-time Processing
resource: urn:ngm:class:real-time-processing
domain: data
description: Real-time Processing is a computational model where data is processed immediately upon arrival or generation, with minimal latency between input and output. Systems respond to events within strict time constraints (typically microseconds to seconds), enabling immediate decision-making through continuous stream-oriented processing rather than deferred batch operations.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:data-processing
  - urn:ngm:class:artificial-intelligence
hasPart:
  - urn:ngm:class:stream-processing
  - urn:ngm:class:complex-event-processing
  - urn:ngm:class:in-memory-computing
requires:
  - urn:ngm:class:low-latency-network
  - urn:ngm:class:message-queue
enables:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:predictive-maintenance
  - urn:ngm:class:real-time-analytics
  - urn:ngm:class:intrusion-detection-system
dependsOn:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:event-driven-architecture
contrastsWith:
  - urn:ngm:class:batch-processing
  - urn:ngm:class:lambda-architecture
bridgesTo:
  - urn:ngm:class:robotics-control
  - urn:ngm:class:real-time-rendering
uses:
  - urn:ngm:class:apache-kafka
  - urn:ngm:class:apache-flink
  - urn:ngm:class:publish-subscribe-pattern
supports:
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:digital-twin
  - urn:ngm:class:high-frequency-trading
partOf:
  - urn:ngm:class:data-processing
relatedTo:
  - urn:ngm:class:time-series-database
  - urn:ngm:class:backpressure
  - urn:ngm:class:fault-tolerance
---

# Real-time Processing

Real-time Processing is a computational model where data is processed immediately upon arrival or generation, with minimal latency between input and output. Systems respond to events within strict time constraints (typically microseconds to seconds), enabling immediate decision-making through continuous stream-oriented processing rather than deferred batch operations.
