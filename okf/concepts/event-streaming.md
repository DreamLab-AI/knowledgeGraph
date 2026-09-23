---
okf_version: "0.2"
type: Class
title: Event Streaming
resource: urn:ngm:class:event-streaming
domain: data
description: "Event streaming is a data-processing paradigm in which records of events are captured, stored as an ordered, append-only log, and continuously delivered to consumers in real time. Platforms such as Apache Kafka and Pulsar implement it to decouple producers from consumers and enable scalable, replayable data pipelines. It underpins real-time analytics, event-driven microservices, and the ingestion "
maturity: established
quality: 0.73
is-a:
  - urn:ngm:class:data-management
hasPart:
  - urn:ngm:class:event-log
  - urn:ngm:class:stream-partition
  - urn:ngm:class:consumer-group
requires:
  - urn:ngm:class:message-broker
  - urn:ngm:class:distributed-storage
  - urn:ngm:class:serialisation-format
enables:
  - urn:ngm:class:real-time-analytics
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:change-data-capture
  - urn:ngm:class:stream-processing
dependsOn:
  - urn:ngm:class:publish-subscribe-pattern
  - urn:ngm:class:data-pipeline
implements:
  - urn:ngm:class:append-only-log
  - urn:ngm:class:at-least-once-delivery
contrastsWith:
  - urn:ngm:class:batch-processing
  - urn:ngm:class:request-response-pattern
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:infrastructure
uses:
  - urn:ngm:class:apache-kafka
  - urn:ngm:class:apache-pulsar
  - urn:ngm:class:schema-registry
supports:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:data-mesh
relatedTo:
  - urn:ngm:class:message-broker
  - urn:ngm:class:metadata-management
  - urn:ngm:class:event-sourcing
---

# Event Streaming

Event streaming is a data-processing paradigm in which records of events are captured, stored as an ordered, append-only log, and continuously delivered to consumers in real time. Platforms such as Apache Kafka and Pulsar implement it to decouple producers from consumers and enable scalable, replayable data pipelines. It underpins real-time analytics, event-driven microservices, and the ingestion side of modern data architectures.
