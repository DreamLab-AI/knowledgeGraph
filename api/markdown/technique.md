- ### Definition
  A Technique is a specific, repeatable method or procedure applied within a domain to achieve a defined outcome, distinguishing it from broader algorithms or frameworks by its focus on concrete application steps. In artificial intelligence, techniques encompass approaches such as supervised learning, fine-tuning, and prompt engineering that are composed into pipelines and evaluated against benchmarks. Techniques may be realised by models or algorithms, and their effectiveness is assessed through empirical evaluation on datasets.

- ### Relationships
  - hasPart:: [[Algorithm]], [[Machine Learning Technique]]
  - requires:: [[Model Training]], [[Training Data]]
  - enables:: [[Inference]], [[Model Performance]]
  - uses:: [[Deep Learning]], [[Neural Network]]
  - relatedTo:: [[Machine Learning Discipline]], [[Model]], [[Algorithmic Framework]]
  - contrastsWith:: [[Architecture]]

- ### Content
  A Technique denotes the most granular level of methodological specificity in the AI knowledge hierarchy — situated below paradigms (such as machine learning) and frameworks (such as deep learning), but above individual hyperparameter choices. Techniques are distinguished by having named procedures with defined inputs, transformations, and outputs that can be reproduced independently of a particular implementation.

  Common AI techniques include gradient descent for optimisation, attention mechanisms within transformer architectures, and retrieval-augmented generation for grounding language model outputs. Each technique has a characteristic scope: some techniques (e.g., backpropagation) are foundational and applicable across many architectures, while others (e.g., LoRA fine-tuning) are specialised to particular model families or deployment constraints.

  Techniques are evaluated through empirical benchmarks that measure task performance, computational efficiency, and generalisation. A technique's maturity is indicated by its adoption across multiple independent implementations, the existence of ablation studies, and community consensus on best-practice configurations.

  The selection of an appropriate technique depends on data availability, computational budget, domain constraints, and target performance metrics. Practitioners typically compose multiple techniques into pipelines, requiring careful attention to interactions between steps such as preprocessing, training, and inference.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z