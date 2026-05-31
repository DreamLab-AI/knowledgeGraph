- ### Definition
  - The engineering process of making a trained machine learning model available for use in a production environment so that it can serve predictions to applications or users.

- ### Semantic Classification
  - owl-class:: machine-learning:ModelDeployment
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[MLOps]]
  - bridges-to:: [[MLOps]]
  - requires:: [[Inference Engine]]
  - enables:: [[Edge Inference]]

- ### Content
  - Model deployment covers packaging a model, exposing it through an interface such as a REST endpoint or embedded library, and integrating it with surrounding systems. Common patterns include online serving for low-latency requests, batch scoring for bulk processing and on-device inference for edge scenarios.
  - Deployment also involves operational concerns such as versioning, scaling, monitoring for drift and the ability to roll back. These concerns connect deployment to the broader practice of MLOps, which treats models as software artefacts subject to continuous delivery and observation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z