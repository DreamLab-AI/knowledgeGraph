- ### Definition
  - The Model Architecture Layer is the stratum that specifies the structural design of a machine learning model: its operators, connectivity, and parameterisation. It sits above the Algorithm Layer, which supplies the primitives it composes, and below the Model Layer, which holds trained instances of these architectures. It contains layer definitions, network topologies, and architectural hyperparameters.

- ### Semantic Classification
  - owl-class:: ml:ModelArchitectureLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Transformer]], [[Neural Network]]
  - requires:: [[Algorithm Layer]]
  - enables:: [[Model Layer]], [[Training Layer]]

- ### Content
  - The Model Architecture Layer describes how computational primitives are wired together into a function with learnable parameters. Typical members include attention blocks, convolutional and recurrent units, normalisation and residual connections, and the topology that joins them. It defines structure independent of any particular set of trained weights.
  - It requires the Algorithm Layer for the differentiable operations and optimisation routines it composes, and it enables the Model Layer and Training Layer above, which instantiate and fit concrete weights. The architecture chosen here fixes the inductive biases and capacity available to those layers.
  - The layer bridges to specific designs such as the transformer and to the wider concept of neural networks. Architectural choices made here, depth, width, and connectivity, determine compute cost and the representational power inherited by inference.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z