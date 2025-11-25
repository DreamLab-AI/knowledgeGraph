id:: bias-mitigation-techniques-ontology

- ### OntologyBlock
  id:: Bias Mitigation Techniques
  - ontology:: true
  - public-access:: true
  - term-id:: DT-0380
  - preferred-term:: Bias Mitigation Techniques
  - source-domain:: ai
  - status:: in
  - definition:: Bias Mitigation Techniques are methods and interventions designed to reduce algorithmic bias and improve fairness in AI systems through modifications at different stages of the machine learning pipeline. These techniques are categorized into pre-processing methods (data transformation before training, including reweighting samples, resampling underrepresented groups, SMOTE for synthetic minority oversampling, and feature modification), in-processing methods (fairness constraints during model training, including regularization penalties, adversarial debiasing that trains models to be invariant to protected attributes, and constrained optimization), and post-processing methods (prediction adjustment after training, including threshold optimization for different groups and calibration techniques). Each approach involves tradeoffs between fairness improvement and predictive accuracy, with pre-processing methods typically preserving model flexibility but potentially discarding useful data, in-processing methods directly optimizing fairness-accuracy frontiers but requiring specialized algorithms, and post-processing methods being model-agnostic but potentially violating calibration. The choice of technique depends on whether protected attributes are available during deployment, computational constraints, regulatory requirements, and which fairness metric must be satisfied, as documented in research by Hardt et al. (2016) and implemented in libraries like Fairlearn and AIF360.

### Relationships
- is-subclass-of:: [[AIFairness]]
