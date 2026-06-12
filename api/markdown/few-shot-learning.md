- ### Definition
  - A learning setting in which a model is required to generalise to a new task or class from only a small number of labelled examples.

- ### Semantic Classification
  - owl-class:: machine-learning:FewShotLearning
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Machine Learning Discipline]]
  - bridges-to:: [[Large-Scale Pretrained Foundation Model]]
  - requires:: [[Transfer Learning]], [[Meta-Learning]]
  - enables:: [[In-Context Learning]]

- ### Content
  - Few-shot learning addresses tasks where labelled data is scarce, contrasting with conventional supervised learning that assumes many examples per class. Approaches include metric learning, optimisation-based meta-learning and the use of pre-trained representations that transfer to new tasks.
  - Large language models exhibit a related capability through in-context learning, where examples supplied in the prompt guide behaviour without parameter updates. Evaluation typically uses episodes that specify a small support set and a query set drawn from previously unseen classes.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z