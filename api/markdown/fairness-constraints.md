- ### Definition
  - Fairness Constraints are mathematical formalizations of equitable treatment in AI systems, expressed as conditions that predictions must satisfy relative to protected attributes. These constraints are categorized into three fundamental types based on independence criteria: Independence (demographic parity) requires predictions to be independent of protected attributes (Ŷ ⊥ A), meaning P(Ŷ|A=0) = P(Ŷ|A=1); Separation (equalized odds) requires predictions to be independent of protected attributes conditional on true labels (Ŷ ⊥ A | Y), ensuring equal true positive and false positive rates across groups; and Sufficiency (predictive parity) requires true labels to be independent of protected attributes conditional on predictions (Y ⊥ A | Ŷ), ensuring equal precision and calibration across groups. These constraints formalize fairness concepts like demographic parity, equalized odds, equal opportunity (separation for positive class only), and calibration into optimization problems during model training. However, impossibility theorems (Chouldechova 2017, Kleinberg et al. 2017) prove that when base rates differ between groups, certain combinations of fairness constraints cannot be simultaneously satisfied, necessitating context-dependent tradeoffs. Implementation typically involves constrained optimization with Lagrange multipliers, where accuracy loss is balanced against fairness violations through tunable regularization parameters, as formalized in foundational research by Hardt et al. (2016) and Barocas et al. (2019).

- ### Semantic Classification
  - owl-class:: artificial-intelligence:FairnessConstraints
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - requires:: [[Model Training]], [[Bias]]
  - enables:: [[Responsible AI]], [[AI Ethics Checklist]]
  - hasPart:: [[Fairness Metrics]], [[Fairness Accuracy Tradeoffs]]
  - relatedTo:: [[Fairness]], [[Bias Detection Methods]], [[Bias Mitigation Techniques]], [[Fairness Auditing Tools]], [[Explainability]]
  - uses:: [[Fairness (OECD)]], [[Gradient Descent]]
  - supports:: [[Accountability]], [[Transparency]]
  - contrastsWith:: [[Model Performance]]

- ### Content
  Fairness constraints operationalise the intuitive social value of equitable treatment into computable mathematical objects that can be incorporated into machine learning training and evaluation pipelines. The foundational taxonomy, formalised in Hardt et al. (2016) and surveyed extensively in Barocas et al. (2019), distinguishes three mutually exclusive constraint families: Independence, Separation, and Sufficiency — each encoding a different moral intuition about what fairness between groups requires.

  The Independence criterion (demographic parity) demands that a model's predictions be statistically uncorrelated with protected group membership. A hiring algorithm satisfying demographic parity would accept the same proportion of applicants from each demographic group. This is intuitive as a baseline equality measure but can require predicting outcomes that contradict ground-truth base rate differences, potentially undermining predictive accuracy. The Separation criterion (equalized odds) conditions on the true label: it requires that true positive rates and false positive rates be equal across groups. This is appropriate when the ground truth labels are considered reliable and unbiased — a condition rarely fully satisfied in practice. The Sufficiency criterion (calibration across groups) requires that a model's predicted probabilities be equally well-calibrated for all groups, so that a prediction of 70% risk means the same actual risk regardless of group membership.

  The Chouldechova (2017) impossibility theorem proves mathematically that when base rates differ between groups, it is impossible for a predictor to simultaneously satisfy separation and sufficiency unless it has zero error. This has profound practical implications: regulators and practitioners must choose which fairness criterion to prioritise based on domain context and stakeholder values, accepting that other criteria will be violated.

  Implementation of fairness constraints in model training typically uses constrained optimisation with Lagrange multipliers, adversarial debiasing (training an auxiliary adversary to prevent a model from encoding protected attribute information), or post-processing threshold adjustments (calibrating decision thresholds separately per group after training). Each approach carries accuracy costs and requires empirical validation using dedicated fairness auditing tools to verify that constraints are met not just in aggregate but across intersectional subgroups.

- ### Provenance
  - sources:: [[Hardt et al. (2016)]], [[Barocas et al. (2019)]], [[Chouldechova (2017)]]
  - migration-date:: 2026-04-26T00:00:00Z