A centralised repository for storing, managing, versioning, and serving machine learning features at scale. It ensures point-in-time consistency between training and online inference, prevents training-serving skew, and enables cross-team feature reuse so that features computed once can be shared across multiple models and pipelines.

### Semantic Classification

### Content

A Feature Store acts as the central hub of an ML platform, bridging the gap between data engineering and model development. It typically exposes two interfaces: an offline store (backed by a data lake or warehouse) for batch training jobs, and an online store (backed by a low-latency key-value database) for real-time inference. By materialising and versioning feature transformations centrally, teams avoid duplicating transformation logic across notebooks and services, which is the primary source of training-serving skew.

Modern feature stores also support time-travel queries, allowing models to be trained on the exact feature values that would have been available at a given historical timestamp — a critical safeguard for financial, fraud-detection, and forecasting applications.

### Provenance

