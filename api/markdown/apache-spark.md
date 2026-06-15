- ### Definition
  - Apache Spark is an open-source [[Distributed Computing]] engine for large-scale [[Data Processing]]. It uses [[In-Memory Computing]] to speed up workloads and supports both [[Batch Processing]] and [[Stream Processing]] over fault-tolerant distributed datasets, anchoring much of modern [[Data Engineering]].

- ### Overview
  - Spark provides a single engine and a coherent set of APIs for the major shapes of data work: batch transformations, SQL-style structured queries, near-real-time streaming and distributed machine learning.
  - Its performance advantage comes largely from keeping intermediate results in memory across operations rather than writing them to disk between every step, which suits iterative algorithms and interactive analytics.
  - Computations are represented as directed acyclic graphs of transformations on resilient distributed datasets, allowing the scheduler to optimise execution and recover lost partitions by recomputation rather than replication.

- ### Key aspects
  - Resilient distributed datasets and DataFrames model partitioned, fault-tolerant collections spread across a cluster.
  - A lazy execution model builds a logical plan that is optimised before any computation runs.
  - In-memory caching accelerates iterative and interactive workloads.
  - Built-in libraries cover SQL, structured streaming, graph processing and machine learning.

- ### Applications
  - Large-scale ETL and data-pipeline construction over data lakes and warehouses.
  - Interactive analytics and ad-hoc querying across very large datasets.
  - Near-real-time stream processing for event and log analytics.
  - Distributed feature engineering and model training for machine learning.

- ### Relationships
  - subClassOf:: [[Distributed Computing]]
  - uses:: [[In-Memory Computing]]
  - uses:: [[Distributed Computing]]
  - enables:: [[Big Data]]
  - enables:: [[Data Processing]]
  - supports:: [[Batch Processing]]
  - supports:: [[Stream Processing]]
  - implements:: [[Data Pipeline]]
  - dependsOn:: [[Scalability]]
  - partOf:: [[Data Engineering]]
  - bridgesTo:: [[Apache Kafka]]
  - bridgesTo:: [[Machine Learning]]
  - contrastsWith:: [[Apache Flink]]
  - relatedTo:: [[Big Data]]
  - relatedTo:: [[Data Engineering]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation