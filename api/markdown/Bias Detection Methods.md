id:: bias-detection-methods-ontology

- ### OntologyBlock
  id:: Bias Detection Methods
  - ontology:: true
  - public-access:: true
  - term-id:: DT-0379
  - preferred-term:: Bias Detection Methods
  - source-domain:: ai
  - status:: in
  - definition:: Bias Detection Methods are systematic approaches and analytical techniques for identifying algorithmic bias in AI systems through statistical testing, fairness audits, counterfactual analysis, and causal inference. These methods examine model predictions across protected groups to detect disparate impacts, unequal error rates, or discriminatory patterns that violate fairness principles. Key techniques include statistical hypothesis testing (chi-square tests, t-tests, permutation tests) to evaluate group differences with defined significance thresholds, fairness auditing that systematically evaluates multiple fairness metrics, counterfactual analysis that tests how predictions change under hypothetical attribute modifications, intersectional analysis examining bias at the intersection of multiple protected attributes, and causal analysis to distinguish legitimate predictive pathways from discriminatory ones. These methods produce bias audit reports documenting detected disparities, their severity, affected populations, and compliance with legal standards. Implementation requires access to protected attribute data, ground truth labels for supervised methods, and statistical expertise to interpret confidence levels and significance thresholds, typically set at p < 0.05 for hypothesis testing as specified in ISO/IEC TR 24027:2021 and NIST SP 1270.

### Relationships
- validates:: [[SmartContract]]
- validates:: [[Machine Learning]]
- is-subclass-of:: [[AlgorithmicBias]]
