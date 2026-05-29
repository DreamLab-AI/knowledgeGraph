- ### Definition
  - Centralized repository for storing, managing, and serving machine learning features, ensuring consistency between training and inference while enabling feature reuse across models.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:FeatureStore
  - owl-role:: Object
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
  - bridges-to:: [[Blockchain]], [[Digital Twin]]

- ### Content
  A Feature Store acts as the central hub of an ML platform, bridging the gap between data engineering and model development. It typically exposes two interfaces: an offline store (backed by a data lake or warehouse) for batch training jobs, and an online store (backed by a low-latency key-value database) for real-time inference. By materialising and versioning feature transformations centrally, teams avoid duplicating transformation logic across notebooks and services, which is the primary source of training-serving skew.

  Modern feature stores also support time-travel queries, allowing models to be trained on the exact feature values that would have been available at a given historical timestamp — a critical safeguard for financial, fraud-detection, and forecasting applications.

- ### Provenance
  - sources:: [[MLOps]], [[Data Engineering]]
  - migration-date:: 2026-04-26T00:00:00Z