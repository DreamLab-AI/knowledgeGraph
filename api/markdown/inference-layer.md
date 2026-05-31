- ### Definition
  - The Inference Layer is the stratum that executes trained models to produce predictions from new inputs. In the canonical stack it sits above the Model Layer and below the Middleware Layer, turning static artefacts into a live serving capability. It contains serving runtimes, batching and caching logic, and the request handling that delivers predictions.

- ### Semantic Classification
  - owl-class:: ml:InferenceLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Model Serving]], [[Quantisation]]
  - requires:: [[Model Layer]]
  - enables:: [[Middleware Layer]], [[Application Layer]]

- ### Content
  - The Inference Layer runs a trained model against fresh inputs and returns outputs within latency and throughput constraints. Typical members include serving runtimes, request batchers, key-value and result caches, and accelerators configured for low-latency execution. Its concern is efficient, reliable prediction rather than learning.
  - It requires the Model Layer for the artefacts it loads and serves, and it enables the Middleware and Application Layers, which consume predictions as a service. Latency, cost, and availability defined here shape the experiences built above.
  - The layer bridges to model serving and to optimisation techniques such as quantisation and distillation. Trade-offs made here between accuracy, speed, and resource use directly affect what applications can promise their users.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z