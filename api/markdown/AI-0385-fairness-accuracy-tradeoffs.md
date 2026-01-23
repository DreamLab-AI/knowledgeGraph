- ### OntologyBlock
  id:: 0385-fairness-accuracy-tradeoffs-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0385
    - preferred-term:: Fairness Accuracy Tradeoffs
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: Fairness Accuracy Tradeoffs represent the fundamental tension in machine learning between maximizing predictive accuracy and satisfying fairness constraints, characterized by the Pareto frontier of achievable (accuracy, fairness) pairs where improving one objective typically requires sacrificing the other. This tradeoff arises because fairness constraints restrict the hypothesis space of permissible models, excluding solutions that achieve maximum accuracy through reliance on correlations between protected attributes and outcomes, even when those correlations reflect genuine statistical relationships in the data. The magnitude of accuracy cost depends on several factors: the strength of correlation between protected attributes and outcomes, which fairness constraint is enforced (with independence constraints typically more costly than separation constraints), the flexibility of the model class, and base rate differences between groups. Implementation typically involves multi-objective optimization with a tradeoff parameter λ balancing accuracy loss L_accuracy and fairness violation L_fairness in the combined objective L = L_accuracy + λ·L_fairness, where varying λ traces out the Pareto frontier. While some contexts permit minimal accuracy costs for fairness improvements, others involve substantial tradeoffs requiring normative judgment about acceptable accuracy sacrifices for fairness gains. Research by Corbett-Davies et al. (2017) demonstrates that fairness constraints can sometimes improve accuracy for disadvantaged groups while reducing overall accuracy, and that the tradeoff is context-dependent based on deployment objectives and stakeholder priorities.
    - maturity:: mature
    - source:: [[Corbett-Davies et al. (2017)]], [[Kleinberg et al. (2017)]], [[Chouldechova (2017)]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: aigo:FairnessAccuracyTradeoffs
    - owl:physicality:: VirtualEntity
    - owl:role:: Process
    - owl:inferred-class:: aigo:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: 0385-fairness-accuracy-tradeoffs-relationships

  - #### OWL Axioms
    id:: 0385-fairness-accuracy-tradeoffs-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :FairnessAccuracyTradeoff))
(SubClassOf :FairnessAccuracyTradeoff :OptimisationConstraint)
(AnnotationAssertion rdfs:comment :FairnessAccuracyTradeoff
  "Tension between maximising predictive accuracy and satisfying fairness constraints; Pareto frontier of achievable (accuracy, fairness) pairs"@en)

;; Object Properties
(Declaration (ObjectProperty :involvesObjective))
(ObjectPropertyDomain :involvesObjective :FairnessAccuracyTradeoff)
(ObjectPropertyRange :involvesObjective :OptimisationObjective)

(Declaration (ObjectProperty :constrainedBy))
(ObjectPropertyDomain :constrainedBy :FairnessAccuracyTradeoff)
(ObjectPropertyRange :constrainedBy :FairnessConstraint)

;; Data Properties
(Declaration (DataProperty :hasAccuracyCost))
(DataPropertyDomain :hasAccuracyCost :FairnessAccuracyTradeoff)
(DataPropertyRange :hasAccuracyCost xsd:decimal)
(AnnotationAssertion rdfs:comment :hasAccuracyCost
  "Decrease in accuracy when enforcing fairness constraint"@en)

(Declaration (DataProperty :hasParetoOptimality))
(DataPropertyDomain :hasParetoOptimality :FairnessAccuracyTradeoff)
(DataPropertyRange :hasParetoOptimality xsd:boolean)

(Declaration (DataProperty :hasTradeoffParameter))
(AnnotationAssertion rdfs:comment :hasTradeoffParameter
  "Lambda parameter balancing accuracy and fairness: L = L_accuracy + λ·L_fairness"@en)
      ```

- ## About 0385 Fairness Accuracy Tradeoffs
  id:: 0385-fairness-accuracy-tradeoffs-about

  - 
  -
  
