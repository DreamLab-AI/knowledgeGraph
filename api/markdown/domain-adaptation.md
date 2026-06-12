- ### Definition
  - Domain adaptation is a sub-field of transfer learning concerned with reducing the performance degradation that occurs when a model trained on a labelled source domain is applied to a target domain whose data distribution differs. Adaptation methods range from feature alignment (learning domain-invariant representations via adversarial training or maximum mean discrepancy minimisation) to instance re-weighting and self-training on unlabelled target data. It is applied extensively in NLP, computer vision, and speech recognition when labelled target data is scarce or costly to acquire.

- ### Semantic Classification
  - owl-class:: domain-adaptation:Domain Adaptation
  - owl-role:: Concept

- ### Relationships
  - requires [[Pre Training]]
  - requires [[Training Data]]
  - enables [[Fine Tuning]]
  - relatedTo [[Knowledge Distillation]]
  - relatedTo [[Machine Learning Discipline]]

- ### Content
  - Domain adaptation addresses the domain shift problem: a model trained on abundant, labelled data from a source distribution (e.g., newswire text) degrades when evaluated on a target distribution (e.g., social media text) because the statistical properties of the input space differ. The severity of shift may be in feature marginals (covariate shift), label conditionals (concept drift), or both.
  - The field broadly divides into unsupervised domain adaptation (UDA), where no labelled target data is available, and semi-supervised domain adaptation, where a small labelled target set exists alongside a larger unlabelled one. UDA methods include domain-adversarial neural networks (DANN), which learn a feature extractor that fools a domain discriminator into treating source and target representations as indistinguishable. Optimal transport-based methods such as DeepJDOT align source and target feature distributions in a geometrically principled manner.
  - In large language models, domain adaptation is commonly achieved through continued pre-training on domain-specific corpora (e.g., biomedical or legal text), followed by supervised fine-tuning or LoRA-based parameter-efficient adaptation. Techniques such as instruction tuning and RLHF further steer model behaviour toward target-domain requirements. Domain adaptation is closely related to knowledge distillation when a large source-domain teacher is used to transfer representations to a smaller target-domain student model.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z