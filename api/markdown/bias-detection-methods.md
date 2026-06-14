- ### Definition
  - Bias Detection Methods are systematic approaches and analytical techniques for identifying algorithmic bias in AI systems through statistical testing, fairness audits, counterfactual analysis, and causal inference. These methods examine model predictions across protected groups to detect disparate impacts, unequal error rates, or discriminatory patterns that violate fairness principles. Key techniques include statistical hypothesis testing (chi-square tests, t-tests, permutation tests) to evaluate group differences with defined significance thresholds, fairness auditing that systematically evaluates multiple fairness metrics, counterfactual analysis that tests how predictions change under hypothetical attribute modifications, intersectional analysis examining bias at the intersection of multiple protected attributes, and causal analysis to distinguish legitimate predictive pathways from discriminatory ones. These methods produce bias audit reports documenting detected disparities, their severity, affected populations, and compliance with legal standards. Implementation requires access to protected attribute data, ground truth labels for supervised methods, and statistical expertise to interpret confidence levels and significance thresholds, typically set at p < 0.05 for hypothesis testing as specified in ISO/IEC TR 24027:2021 and NIST SP 1270.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:BiasDetectionMethods
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - hasPart:: [[Fairness Metrics]]
  - hasPart:: [[Disparate Impact]]
  - hasPart:: [[Fairness Auditing Tools]]
  - hasPart:: [[Algorithmic Bias]]
  - hasPart:: [[Statistical Hypothesis Testing]]
  - hasPart:: [[Counterfactual Analysis]]
  - hasPart:: [[Intersectional Analysis]]
  - requires:: [[Protected Attribute Data]]
  - requires:: [[Ground Truth Labels]]
  - requires:: [[Statistical Significance Testing]]
  - enables:: [[Bias Mitigation]]
  - enables:: [[AI Fairness Certification]]
  - enables:: [[Regulatory Compliance Reporting]]
  - uses:: [[Causal Inference]]
  - uses:: [[Machine Learning Model Evaluation]]
  - uses:: [[Confusion Matrix]]
  - supports:: [[AI Fairness]]
  - supports:: [[Responsible AI]]
  - supports:: [[Explainable AI]]
  - supports:: [[AI Audit]]
  - standardizedBy:: [[IEEE P7003-2021]]
  - standardizedBy:: [[ISO/IEC TR 24027]]
  - standardizedBy:: [[NIST SP 1270]]
  - contrastsWith:: [[Bias Amplification]]
  - bridgesTo:: [[Data Governance]]
  - bridgesTo:: [[Regulatory Compliance]]
  - relatedTo:: [[Algorithmic Accountability]]
  - relatedTo:: [[AI Ethics]]
  - relatedTo:: [[Bias in Large Language Models]]

- ### Content
  Bias Detection Methods — content pending enrichment.

- ### Provenance
  - sources:: [[ISO/IEC TR 24027]], [[NIST SP 1270]], [[IEEE P7003-2021]]
  - migration-date:: 2026-04-26T00:00:00Z