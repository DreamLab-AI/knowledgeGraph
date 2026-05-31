- ### Definition
  - The Foundation Model Layer is the stratum that holds large, broadly pretrained models intended for adaptation to many downstream tasks. It sits above the Training Layer that produced it and below the Model and Inference Layers that specialise and serve it. It contains base model weights, pretraining configurations, and adaptation interfaces.

- ### Semantic Classification
  - owl-class:: ml:FoundationModelLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Transfer Learning]], [[Self-Supervised Learning]]
  - requires:: [[Training Layer]], [[Model Architecture Layer]]
  - enables:: [[Model Layer]], [[Inference Layer]]

- ### Content
  - The Foundation Model Layer holds general-purpose models trained on broad data at scale, intended to be adapted rather than used unchanged. Typical members include base weight sets, pretraining objectives and corpora descriptions, and interfaces for fine-tuning, prompting, or adapter insertion. It provides a reusable starting point for many tasks.
  - It requires the Training Layer that performed costly pretraining and the Model Architecture Layer that defined its structure. It enables the Model Layer, which specialises it, and the Inference Layer, which serves derived variants. Capabilities and biases of the base propagate to every adaptation.
  - The layer bridges to transfer learning and self-supervised learning, the techniques that make broad pretraining useful. Documentation of training data and known limitations here is essential for safe downstream reuse.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z