id:: group-vs-individual-fairness-ontology

- ### OntologyBlock
  id:: Group vs Individual Fairness
  - ontology:: true
  - public-access:: true
  - term-id:: DT-0383
  - preferred-term:: Group vs Individual Fairness
  - source-domain:: ai
  - status:: in
  - definition:: Group vs Individual Fairness represents two distinct paradigms for conceptualizing and operationalizing algorithmic fairness with fundamentally different units of analysis and philosophical foundations. Group Fairness operates at the aggregate level, requiring statistical parity across protected demographic groups such that prediction distributions, error rates, or outcome rates are similar across groups, formalized as P(Ŷ|A=a) being approximately equal for all protected group values a. This paradigm underlies metrics like demographic parity, equalized odds, and predictive parity, and aligns with legal frameworks focused on disparate impact and anti-discrimination compliance. In contrast, Individual Fairness operates at the person level, requiring that similar individuals receive similar predictions regardless of group membership, formalized through a fairness metric d(x₁,x₂) → d(f(x₁),f(f₂)) where the distance between predictions is bounded by the distance between individuals in a task-relevant similarity space. Group fairness is operationally straightforward requiring only protected attribute labels but may permit unfairness to individuals within groups, while individual fairness provides stronger theoretical guarantees but requires defining task-appropriate similarity metrics that avoid encoding prohibited biases. The two paradigms are not necessarily compatible, as satisfying group fairness constraints does not guarantee individual fairness and vice versa, representing a fundamental tension in fair machine learning research explored by Dwork et al. (2012) and subsequent scholarship.

### Relationships
- is-subclass-of:: [[AIFairness]]
