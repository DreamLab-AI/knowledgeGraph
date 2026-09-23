---
okf_version: "0.2"
type: Class
title: Big Data
resource: urn:ngm:class:big-data
domain: infrastructure
description: Big data denotes datasets whose volume, velocity and variety exceed the capacity of conventional single-machine tools, demanding distributed storage and parallel computation. It is characterised by horizontally scalable architectures, schema-flexible stores, and batch or streaming processing frameworks that move computation to where data resides. The term also names the discipline of extracting va
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-processing
hasPart:
  - urn:ngm:class:batch-processing
  - urn:ngm:class:stream-processing
requires:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:scalability
enables:
  - urn:ngm:class:data-analytics
  - urn:ngm:class:predictive-analytics
dependsOn:
  - urn:ngm:class:cloud-computing
implements:
  - urn:ngm:class:data-pipeline
bridgesTo:
  - urn:ngm:class:data-engineering
uses:
  - urn:ngm:class:apache-spark
  - urn:ngm:class:nosql-database
supports:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:data-mining
relatedTo:
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:data-lake
  - urn:ngm:class:distributed-systems
---

# Big Data

Big data denotes datasets whose volume, velocity and variety exceed the capacity of conventional single-machine tools, demanding distributed storage and parallel computation. It is characterised by horizontally scalable architectures, schema-flexible stores, and batch or streaming processing frameworks that move computation to where data resides. The term also names the discipline of extracting value from such datasets through analytics, mining and machine learning at scale.
