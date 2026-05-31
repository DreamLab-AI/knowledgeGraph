- ### Definition
  - Model serving is the practice of making a trained machine learning model available to handle inference requests, typically behind an API. It covers loading models, routing requests and returning predictions under latency and throughput constraints.

- ### Semantic Classification
  - owl-class:: machine-learning:ModelServing
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Model Deployment]]
  - bridges-to:: [[MLOps]], [[Latency]]
  - requires:: [[Model Deployment]], [[REST API]]
  - enables:: [[Inference Serving]]

- ### Content
  - Model serving exposes a model so that applications can send inputs and receive predictions, usually over HTTP or a remote procedure interface. The serving layer manages model loading, batching of requests and scaling to meet demand.
  - Serving systems are judged on latency, throughput and reliability, and often include features such as versioned endpoints, autoscaling and monitoring. They draw models from a registry and form the runtime half of an MLOps workflow.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z