- ### Definition
  - The set of techniques and engineering practices that reduce the energy consumed by training and running artificial intelligence systems while preserving acceptable task performance.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AIEnergyOptimisation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
  - bridges-to:: [[Edge Computing]]
  - requires:: [[Hardware Acceleration]], [[Knowledge Distillation]]
  - enables:: [[Edge AI]]

- ### Content
  - AI energy optimisation addresses the electricity and cooling costs of large models by acting at several levels, including model architecture, training schedules, hardware selection and data centre operation. Methods such as quantisation, pruning and distillation reduce the compute required per inference, while scheduling work to match low-carbon grid periods lowers the associated emissions.
  - The motivation is both economic and environmental. Training large models can consume substantial energy, and inference at scale dominates lifetime cost for widely deployed systems. Measuring energy use accurately, rather than relying on theoretical floating-point counts, is a precondition for meaningful optimisation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z