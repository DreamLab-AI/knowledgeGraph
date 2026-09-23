---
okf_version: "0.2"
type: Class
title: Apache Spark
resource: urn:ngm:class:apache-spark
domain: infrastructure
description: Apache Spark is an open-source unified analytics engine for large-scale data processing across clusters of machines. It exposes high-level APIs for batch processing, structured queries, stream processing and machine learning, and accelerates workloads by keeping intermediate data in memory between operations. Spark abstracts distributed datasets as fault-tolerant collections and schedules computat
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:distributed-computing
enables:
  - urn:ngm:class:big-data
  - urn:ngm:class:data-processing
dependsOn:
  - urn:ngm:class:scalability
implements:
  - urn:ngm:class:data-pipeline
contrastsWith:
  - urn:ngm:class:apache-flink
bridgesTo:
  - urn:ngm:class:apache-kafka
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:in-memory-computing
  - urn:ngm:class:distributed-computing
supports:
  - urn:ngm:class:batch-processing
  - urn:ngm:class:stream-processing
partOf:
  - urn:ngm:class:data-engineering
relatedTo:
  - urn:ngm:class:big-data
  - urn:ngm:class:data-engineering
---

# Apache Spark

Apache Spark is an open-source unified analytics engine for large-scale data processing across clusters of machines. It exposes high-level APIs for batch processing, structured queries, stream processing and machine learning, and accelerates workloads by keeping intermediate data in memory between operations. Spark abstracts distributed datasets as fault-tolerant collections and schedules computations as directed acyclic graphs of stages, making it a foundational tool for big-data engineering and analytics.
