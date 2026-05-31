- ### Definition
  - A model registry is a system for cataloguing trained machine learning models with their versions, metadata and lifecycle stage. It provides a central record that links a model to its training data, metrics and deployment status.

- ### Semantic Classification
  - owl-class:: machine-learning:ModelRegistry
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[MLOps]]
  - bridges-to:: [[MLOps]], [[Feature Store]]
  - requires:: [[Data Versioning]]
  - enables:: [[Model Deployment]], [[Model Serving]]

- ### Content
  - A model registry stores model artefacts alongside metadata such as version number, training run, evaluation metrics and approval state. Teams use it to track which model is staged, in production or archived, and to promote models between stages under review.
  - The registry supports governance and reproducibility by recording lineage from data and code to the deployed model. It is a standard component of MLOps platforms and feeds model serving systems with the approved versions.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z