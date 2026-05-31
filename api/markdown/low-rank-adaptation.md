- ### Definition
  - Low-Rank Adaptation is a parameter-efficient fine-tuning method that adds small trainable low-rank matrices to a frozen pre-trained model. It reduces the cost of adapting large models.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:LowRankAdaptation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Parameter-Efficient Fine-Tuning]]
  - bridges-to:: [[GPT]]
  - requires:: [[Neural Network]]
  - enables:: [[Transfer Learning]]

- ### Content
  - Low-Rank Adaptation keeps the original weights of a pre-trained model fixed and learns small additional matrices that represent the change needed for a new task. Because these matrices are low rank, the number of trainable parameters is far smaller than full fine-tuning.
  - The method lowers memory and storage requirements, since only the small adapters need to be trained and stored per task. It is widely used to adapt large language models and other large networks to specific applications.

- ### Provenance
  - sources:: [[https://arxiv.org/abs/2106.09685]], [[https://github.com/microsoft/LoRA]]
  - migration-date:: 2026-05-29T00:00:00Z