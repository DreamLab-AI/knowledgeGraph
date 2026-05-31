- ### Definition
  - Data Engineering is the discipline concerned with designing, building and operating the systems that collect, store, transform and serve data at scale. It covers data pipelines, storage architectures, batch and streaming processing, data modelling and the orchestration and monitoring of workflows. Its purpose is to make reliable, well-structured data available for analytics, reporting and machine learning.

- ### Semantic Classification
  - owl-class:: infra:DataEngineering
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Infrastructure Domain]]
  - bridges-to:: [[Data Science]], [[Stream Processing]]
  - has-part:: [[Data Pipeline]], [[ETL]], [[Data Warehouse]]
  - requires:: [[Distributed Systems Domain]]
  - enables:: [[Machine Learning Domain]], [[Business Intelligence]]

- ### Content
  - Data engineers build pipelines that ingest data from heterogeneous sources, validate and clean it, and load it into stores such as data warehouses, data lakes or lakehouses. These pipelines may run as scheduled batch jobs or as continuous streams, and they must handle schema changes, late-arriving data and failures gracefully.
  - The discipline draws heavily on distributed systems, since processing large volumes requires partitioning, parallelism and fault tolerance. Common concerns include idempotency, exactly-once or at-least-once delivery semantics, data lineage and the cost and latency trade-offs between batch and streaming designs.
  - Data engineering underpins downstream analytics and machine learning by ensuring that data is timely, consistent and trustworthy. It increasingly intersects with software engineering practices such as version control, testing and continuous deployment, applied to data and its transformations rather than to application code alone.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z