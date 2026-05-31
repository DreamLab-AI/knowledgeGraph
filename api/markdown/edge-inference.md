- ### Definition
  - The execution of machine learning model inference on local edge devices rather than in centralised cloud infrastructure, close to where data is generated.

- ### Semantic Classification
  - owl-class:: machine-learning:EdgeInference
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Edge AI]]
  - bridges-to:: [[Edge Computing]]
  - requires:: [[Inference Engine]], [[Knowledge Distillation]]
  - enables:: [[Edge AI]]

- ### Content
  - Edge inference runs models on devices such as phones, sensors, cameras and embedded controllers. Doing so reduces latency, lowers bandwidth use and can improve privacy because raw data need not leave the device.
  - The constraints of edge hardware, limited memory, compute and power, drive the use of model compression techniques including quantisation, pruning and distillation, together with specialised runtimes. These methods trade some accuracy for the ability to meet tight latency and energy budgets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z