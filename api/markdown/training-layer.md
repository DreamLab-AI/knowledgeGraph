- ### Definition
  - The Training Layer is the stratum that fits model parameters from data using optimisation procedures. It sits above the Compute and Data strata it consumes and below the Model and Foundation Model strata that hold its results. It contains training loops, optimisers, loss functions, and the orchestration of large-scale learning runs.

- ### Semantic Classification
  - owl-class:: ml:TrainingLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Gradient Descent]], [[Backpropagation]]
  - requires:: [[Compute Layer]], [[Data Layer]]
  - enables:: [[Model Layer]], [[Foundation Model Layer]]

- ### Content
  - The Training Layer is where learning happens: parameters are adjusted to minimise a loss over data. Typical members include training loops, optimisers, loss and regularisation functions, learning-rate schedules, and the distributed orchestration that scales runs across many devices. It is concerned with producing models rather than serving them.
  - It requires the Compute Layer for the substantial resources learning demands and the Data Layer for the examples it learns from. It enables the Model and Foundation Model Layers, which hold the resulting weights. Data quality and optimisation choices here determine what those models can do.
  - The layer bridges to gradient descent and backpropagation, the mechanisms that make large-scale learning tractable. Reproducibility of training, including seeds and data versions, is essential for trustworthy downstream artefacts.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z