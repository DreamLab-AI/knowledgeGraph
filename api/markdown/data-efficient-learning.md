- ### Definition
  - Data Efficient Learning encompasses machine learning techniques that achieve strong generalisation from limited labelled training examples, including transfer learning, few-shot learning, semi-supervised learning, data augmentation, and self-supervised pretraining. These methods address real-world constraints where large annotated datasets are impractical to obtain, making AI deployable in specialised or resource-constrained domains.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:DataEfficientLearning
  - owl-role:: concept

- ### Relationships
  - uses [[Transfer Learning]]
  - uses [[Synthetic Data]]
  - enables [[Active Learning]]
  - enables [[Federated Learning]]
  - relatedTo [[Curriculum Learning]]
  - relatedTo [[Contrastive Learning]]

- ### Content

  ## Overview

  Data Efficient Learning encompasses machine learning techniques that achieve strong generalisation from limited labelled training examples. Core strategies include transfer learning (reusing representations from pretrained models), self-supervised pretraining (learning from unlabelled data through auxiliary tasks), active learning (querying informative samples), data augmentation (artificially expanding training distributions), and curriculum learning (ordering examples by difficulty). Synthetic data generation via generative models further reduces the dependency on expensive human annotation. These approaches are foundational in specialised domains such as medical imaging, rare event detection, and robotics, where large labelled corpora are unavailable. Federated learning extends data-efficient principles to distributed settings by training across decentralised data without centralisation. Contrastive learning methods like SimCLR and MoCo have demonstrated that powerful representations can emerge with minimal supervision, narrowing the gap between supervised and self-supervised performance benchmarks.

  #### Related Concepts
  - [[Transfer Learning]]
  - [[Synthetic Data]]
  - [[Active Learning]]
  - [[Federated Learning]]
  - [[Curriculum Learning]]
  - [[Contrastive Learning]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z