- ### Definition
  - Extract, Transform, Load pipeline that automates the process of moving data from source systems, transforming it for analysis, and loading it into target data stores.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ETLPipeline
  - owl-role:: Process
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
  - bridges-to:: [[Blockchain]], [[Digital Twin]]

- ### Content
  ETL pipelines orchestrate three sequential phases: extraction pulls raw data from heterogeneous sources (databases, APIs, files, streaming systems) into a staging area; transformation applies cleaning, normalisation, deduplication, schema mapping, and enrichment rules; and loading writes the prepared data into target stores such as data warehouses, data lakes, or feature stores.

  Modern ETL architectures increasingly adopt ELT patterns (extract-load-transform) that leverage the compute power of cloud data warehouses for transformation, and support streaming ingestion alongside batch processing. In AI/ML contexts, ETL pipelines are foundational to model training data preparation, feature engineering workflows, and production monitoring data collection.

- ### Provenance
  - sources:: [[Data Engineering]]
  - migration-date:: 2026-04-26T00:00:00Z