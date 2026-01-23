- ### OntologyBlock
  id:: 0383-group-vs-individual-fairness-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0383
    - preferred-term:: Group vs Individual Fairness
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: Group vs Individual Fairness represents two distinct paradigms for conceptualizing and operationalizing algorithmic fairness with fundamentally different units of analysis and philosophical foundations. Group Fairness operates at the aggregate level, requiring statistical parity across protected demographic groups such that prediction distributions, error rates, or outcome rates are similar across groups, formalized as P(Ŷ|A=a) being approximately equal for all protected group values a. This paradigm underlies metrics like demographic parity, equalized odds, and predictive parity, and aligns with legal frameworks focused on disparate impact and anti-discrimination compliance. In contrast, Individual Fairness operates at the person level, requiring that similar individuals receive similar predictions regardless of group membership, formalized through a fairness metric d(x₁,x₂) → d(f(x₁),f(f₂)) where the distance between predictions is bounded by the distance between individuals in a task-relevant similarity space. Group fairness is operationally straightforward requiring only protected attribute labels but may permit unfairness to individuals within groups, while individual fairness provides stronger theoretical guarantees but requires defining task-appropriate similarity metrics that avoid encoding prohibited biases. The two paradigms are not necessarily compatible, as satisfying group fairness constraints does not guarantee individual fairness and vice versa, representing a fundamental tension in fair machine learning research explored by Dwork et al. (2012) and subsequent scholarship.
    - maturity:: mature
    - source:: [[Dwork et al. (2012)]], [[Hardt et al. (2016)]], [[Barocas et al. (2019)]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: aigo:GroupVsIndividualFairness
    - owl:physicality:: VirtualEntity
    - owl:role:: Process
    - owl:inferred-class:: aigo:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: 0383-group-vs-individual-fairness-relationships

  - #### OWL Axioms
    id:: 0383-group-vs-individual-fairness-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :FairnessParadigm))
(SubClassOf :FairnessParadigm :EthicalFramework)

;; Group Fairness
(Declaration (Class :GroupFairness))
(SubClassOf :GroupFairness :FairnessParadigm)
(AnnotationAssertion rdfs:comment :GroupFairness
  "Fairness defined over groups: statistical parity across protected groups"@en)
(DataPropertyAssertion :formalDefinition :GroupFairness
  "P(Ŷ|A=a) similar for all protected groups a"^^xsd:string)

;; Individual Fairness
(Declaration (Class :IndividualFairness))
(SubClassOf :IndividualFairness :FairnessParadigm)
(AnnotationAssertion rdfs:comment :IndividualFairness
  "Fairness defined over individuals: similar individuals treated similarly"@en)
(DataPropertyAssertion :formalDefinition :IndividualFairness
  "d(x₁,x₂) small → d(f(x₁),f(x₂)) small"^^xsd:string)

;; Disjointness
(DisjointClasses :GroupFairness :IndividualFairness)

;; Properties
(Declaration (ObjectProperty :operatesOn))
(ObjectPropertyDomain :operatesOn :FairnessParadigm)
(ObjectPropertyRange :operatesOn :AnalysisLevel)

(DataPropertyAssertion :operatesOn :GroupFairness :AggregateLevel)
(DataPropertyAssertion :operatesOn :IndividualFairness :PersonLevel)
      ```

- ## About Group vs Individual Fairness
  id:: 0383-group-vs-individual-fairness-about

  - 
  -
  

