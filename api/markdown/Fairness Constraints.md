id:: fairness-constraints-ontology

- ### OntologyBlock
  id:: Fairness Constraints
  - ontology:: true
  - public-access:: true
  - term-id:: DT-0382
  - preferred-term:: Fairness Constraints
  - source-domain:: ai
  - status:: in
  - definition:: Fairness Constraints are mathematical formalizations of equitable treatment in AI systems, expressed as conditions that predictions must satisfy relative to protected attributes. These constraints are categorized into three fundamental types based on independence criteria: Independence (demographic parity) requires predictions to be independent of protected attributes (Ŷ ⊥ A), meaning P(Ŷ|A=0) = P(Ŷ|A=1); Separation (equalized odds) requires predictions to be independent of protected attributes conditional on true labels (Ŷ ⊥ A | Y), ensuring equal true positive and false positive rates across groups; and Sufficiency (predictive parity) requires true labels to be independent of protected attributes conditional on predictions (Y ⊥ A | Ŷ), ensuring equal precision and calibration across groups. These constraints formalize fairness concepts like demographic parity, equalized odds, equal opportunity (separation for positive class only), and calibration into optimization problems during model training. However, impossibility theorems (Chouldechova 2017, Kleinberg et al. 2017) prove that when base rates differ between groups, certain combinations of fairness constraints cannot be simultaneously satisfied, necessitating context-dependent tradeoffs. Implementation typically involves constrained optimization with Lagrange multipliers, where accuracy loss is balanced against fairness violations through tunable regularization parameters, as formalized in foundational research by Hardt et al. (2016) and Barocas et al. (2019).

### Relationships
- is-subclass-of:: [[AlgorithmicBias]]
