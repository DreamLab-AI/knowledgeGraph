---
okf_version: "0.2"
type: Class
title: Apache Kafka
resource: urn:ngm:class:apache-kafka
domain: infrastructure
description: Apache Kafka is an open-source distributed event streaming platform originally developed at LinkedIn and donated to the Apache Software Foundation in 2011. It provides a high-throughput, low-latency, fault-tolerant publish-subscribe messaging system built around an immutable, ordered, partitioned commit log. Kafka decouples producers and consumers of data streams, enabling real-time data pipelines
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:distributed-system
enables:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:data-lake
  - urn:ngm:class:etl-pipeline
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:real-time
dependsOn:
  - urn:ngm:class:distributed-architecture
  - urn:ngm:class:software-infrastructure
uses:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:batch-processing
  - urn:ngm:class:data-processing
supports:
  - urn:ngm:class:cloud-infrastructure
  - urn:ngm:class:monitoring-dashboard
relatedTo:
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:data-integration
  - urn:ngm:class:real-time-processing
---

# Apache Kafka

Apache Kafka is an open-source distributed event streaming platform originally developed at LinkedIn and donated to the Apache Software Foundation in 2011. It provides a high-throughput, low-latency, fault-tolerant publish-subscribe messaging system built around an immutable, ordered, partitioned commit log. Kafka decouples producers and consumers of data streams, enabling real-time data pipelines, event-driven architectures, and stream processing applications at scale across thousands of nodes handling trillions of events per day.
