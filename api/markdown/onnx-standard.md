- ### Definition
  - The ONNX standard defines an open format for representing machine learning models as a computation graph of typed operators, enabling models to move between training and inference frameworks.

- ### Semantic Classification
  - owl-class:: metaverse:ONNXStandard
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Machine Learning Discipline]]
  - bridges-to:: [[Neural Rendering]], [[Open Standards]]
  - requires:: [[ONNX]]
  - enables:: [[Deep Learning]]

- ### Content
  - ONNX captures a model as a directed graph of operators with defined semantics and tensor types, plus an opset version that fixes operator behaviour. Exporters and runtimes target this format so a model trained in one framework can be executed in another.
  - Model interoperability matters for deploying neural networks inside engines and XR runtimes, where the training framework and the inference target differ. ONNX provides a stable intermediate representation for that handoff.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z