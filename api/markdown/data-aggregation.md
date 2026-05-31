- ### Definition
  - Data aggregation is the process of gathering data from multiple sources and combining or summarising it into a consolidated form. It supports analysis, reporting and downstream processing.

- ### Semantic Classification
  - owl-class:: data:DataAggregation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Data Integration]]
  - bridges-to:: [[Knowledge Graph]]
  - requires:: [[Data Integration]]
  - enables:: [[Community Detection]]

- ### Content
  - Data aggregation collects records from disparate sources and combines them, often computing summaries such as counts, sums or averages, to produce a unified view. It may operate in batch or streaming modes and is a common step in analytics, monitoring and reporting pipelines.
  - Aggregation reduces volume and exposes patterns that individual records do not show, but it requires consistent schemas and careful handling of duplicates and missing values. It frequently follows data integration, where heterogeneous sources are first reconciled.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z