- ### Definition
  - A learning paradigm in which a model learns from a stream of tasks or data over time while retaining performance on previously learned tasks.

- ### Semantic Classification
  - owl-class:: machine-learning:ContinualLearning
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Machine Learning Discipline]]
  - bridges-to:: [[Machine Learning Domain]]
  - requires:: [[Online Learning]]
  - enables:: [[Transfer Learning]]

- ### Content
  - Continual learning, also called lifelong or incremental learning, addresses the tendency of neural networks to forget earlier knowledge when trained on new data, a phenomenon known as catastrophic forgetting. The aim is to accumulate knowledge across a sequence of tasks without storing or revisiting all past data.
  - Approaches include regularisation that protects important parameters, rehearsal that replays stored or generated examples, and architectural methods that allocate capacity to new tasks. Continual learning is relevant where data arrives over time or where retraining from scratch is too costly.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z