- ### Definition
  - An ONNX operator set is a versioned collection of the computational operators defined by the Open Neural Network Exchange format, fixing the operators and their semantics that a model may use.

- ### Semantic Classification
  - owl-class:: machine-learning:ONNXOperatorSet
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[ONNX]]
  - bridges-to:: [[Machine Learning]]
  - requires:: [[ONNX]]

- ### Content
  - ONNX defines models as computation graphs whose nodes are operators such as convolution, matrix multiplication, and activation functions. The operator set, identified by an opset version, specifies exactly which operators exist and how each behaves.
  - A model declares the opset version it targets, and runtimes implement the corresponding operators. Versioning the operator set allows the format to add or change operators over time while keeping older models reproducible.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z