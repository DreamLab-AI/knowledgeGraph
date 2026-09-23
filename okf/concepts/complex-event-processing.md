---
okf_version: "0.2"
type: Class
title: Complex Event Processing
resource: urn:ngm:class:complex-event-processing
domain: infrastructure
description: Complex event processing is a paradigm that continuously analyses streams of discrete events to detect meaningful patterns, correlations and derived higher-level events in near real time. Rather than querying stored data after the fact, it evaluates standing pattern queries over moving event streams, recognising temporal sequences, aggregates over windows and absence-of-event conditions. It enable
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:stream-processing
hasPart:
  - urn:ngm:class:stream-processing
requires:
  - urn:ngm:class:message-queue
enables:
  - urn:ngm:class:real-time-analytics
  - urn:ngm:class:event-driven-architecture
dependsOn:
  - urn:ngm:class:stream-processing
bridgesTo:
  - urn:ngm:class:message-queue
uses:
  - urn:ngm:class:stream-processing
  - urn:ngm:class:message-queue
supports:
  - urn:ngm:class:real-time-analytics
partOf:
  - urn:ngm:class:event-driven-architecture
relatedTo:
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:real-time-analytics
---

# Complex Event Processing

Complex event processing is a paradigm that continuously analyses streams of discrete events to detect meaningful patterns, correlations and derived higher-level events in near real time. Rather than querying stored data after the fact, it evaluates standing pattern queries over moving event streams, recognising temporal sequences, aggregates over windows and absence-of-event conditions. It enables systems to react to situations as they emerge rather than discovering them in later batch analysis.
