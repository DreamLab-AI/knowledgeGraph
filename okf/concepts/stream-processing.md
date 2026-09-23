---
okf_version: "0.2"
type: Class
title: Stream Processing
resource: urn:ngm:class:stream-processing
domain: infrastructure
description: Stream processing is a data processing paradigm in which computations are performed continuously on unbounded sequences of records as they arrive, rather than on static stored datasets, enabling low-latency analytics, transformations, and reactions to events within milliseconds to seconds of their occurrence. It is characterised by windowing operations, stateful operators, time-based semantics (ev
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:real-time-processing
requires:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:state-management
  - urn:ngm:class:fault-tolerance
enables:
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:behavioural-analytics
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:real-time-analytics
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:complex-event-processing
contrastsWith:
  - urn:ngm:class:agent-event-stream
  - urn:ngm:class:batch-processing
bridgesTo:
  - urn:ngm:class:online-learning
uses:
  - urn:ngm:class:apache-kafka
  - urn:ngm:class:message-broker
  - urn:ngm:class:message-queue
  - urn:ngm:class:apache-flink
  - urn:ngm:class:apache-spark
relatedTo:
  - urn:ngm:class:etl-pipeline
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:lambda-architecture
  - urn:ngm:class:event-sourcing
---

# Stream Processing

Stream processing is a data processing paradigm in which computations are performed continuously on unbounded sequences of records as they arrive, rather than on static stored datasets, enabling low-latency analytics, transformations, and reactions to events within milliseconds to seconds of their occurrence. It is characterised by windowing operations, stateful operators, time-based semantics (event time versus processing time), and exactly-once or at-least-once delivery guarantees.
