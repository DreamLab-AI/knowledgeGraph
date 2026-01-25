- ### OntologyBlock
  id:: 0382-fairness-constraints-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0382
    - preferred-term:: Fairness Constraints
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: Fairness Constraints are mathematical formalizations of equitable treatment in AI systems, expressed as conditions that predictions must satisfy relative to protected attributes. These constraints are categorized into three fundamental types based on independence criteria: Independence (demographic parity) requires predictions to be independent of protected attributes (Ŷ ⊥ A), meaning P(Ŷ|A=0) = P(Ŷ|A=1); Separation (equalized odds) requires predictions to be independent of protected attributes conditional on true labels (Ŷ ⊥ A | Y), ensuring equal true positive and false positive rates across groups; and Sufficiency (predictive parity) requires true labels to be independent of protected attributes conditional on predictions (Y ⊥ A | Ŷ), ensuring equal precision and calibration across groups. These constraints formalize fairness concepts like demographic parity, equalized odds, equal opportunity (separation for positive class only), and calibration into optimization problems during model training. However, impossibility theorems (Chouldechova 2017, Kleinberg et al. 2017) prove that when base rates differ between groups, certain combinations of fairness constraints cannot be simultaneously satisfied, necessitating context-dependent tradeoffs. Implementation typically involves constrained optimization with Lagrange multipliers, where accuracy loss is balanced against fairness violations through tunable regularization parameters, as formalized in foundational research by Hardt et al. (2016) and Barocas et al. (2019).
    - maturity:: mature
    - source:: [[Hardt et al. (2016)]], [[Barocas et al. (2019)]], [[Chouldechova (2017)]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: ai:FairnessConstraints
    - owl:role:: Process
    - owl:inferred-class:: ai:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: 0382-fairness-constraints-relationships

  - #### OWL Axioms
    id:: 0382-fairness-constraints-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :FairnessConstraint))
(SubClassOf :FairnessConstraint :MathematicalConstraint)
(SubClassOf :FairnessConstraint :EthicalRequirement)

(AnnotationAssertion rdfs:label :FairnessConstraint
  "Fairness Constraint"@en)
(AnnotationAssertion rdfs:comment :FairnessConstraint
  "Mathematical definitions of algorithmic fairness including independence (demographic parity), separation (equalized odds), and sufficiency (predictive parity) constraints."@en)
(AnnotationAssertion :dcterms:source :FairnessConstraint
  "Barocas et al. (2019), Hardt et al. (2016), Chouldechova (2017)")

;; Object Properties
(Declaration (ObjectProperty :constrainsModel))
(ObjectPropertyDomain :constrainsModel :FairnessConstraint)
(ObjectPropertyRange :constrainsModel :MLModel)

(Declaration (ObjectProperty :requiresIndependence))
(ObjectPropertyDomain :requiresIndependence :FairnessConstraint)
(ObjectPropertyRange :requiresIndependence :RandomVariable)

(Declaration (ObjectProperty :enforcesSeparation))
(ObjectPropertyDomain :enforcesSeparation :FairnessConstraint)
(ObjectPropertyRange :enforcesSeparation :ConditionalDistribution)

;; Data Properties
(Declaration (DataProperty :hasMathematicalFormulation))
(DataPropertyDomain :hasMathematicalFormulation :FairnessConstraint)
(DataPropertyRange :hasMathematicalFormulation xsd:string)

(Declaration (DataProperty :isRelaxable))
(DataPropertyDomain :isRelaxable :FairnessConstraint)
(DataPropertyRange :isRelaxable xsd:boolean)

(Declaration (DataProperty :hasAccuracyTradeoff))
(DataPropertyDomain :hasAccuracyTradeoff :FairnessConstraint)
(DataPropertyRange :hasAccuracyTradeoff xsd:boolean)

;; Subclass Definitions
(Declaration (Class :IndependenceConstraint))
(SubClassOf :IndependenceConstraint :FairnessConstraint)
(DataPropertyAssertion :hasMathematicalFormulation :IndependenceConstraint
  "Ŷ ⊥ A | X"^^xsd:string)
(AnnotationAssertion rdfs:comment :IndependenceConstraint
  "Predictions independent of protected attribute: P(Ŷ|A=0) = P(Ŷ|A=1)"@en)

(Declaration (Class :SeparationConstraint))
(SubClassOf :SeparationConstraint :FairnessConstraint)
(DataPropertyAssertion :hasMathematicalFormulation :SeparationConstraint
  "Ŷ ⊥ A | Y"^^xsd:string)
(AnnotationAssertion rdfs:comment :SeparationConstraint
  "Predictions independent of protected attribute given true label: P(Ŷ|Y,A=0) = P(Ŷ|Y,A=1)"@en)

(Declaration (Class :SufficiencyConstraint))
(SubClassOf :SufficiencyConstraint :FairnessConstraint)
(DataPropertyAssertion :hasMathematicalFormulation :SufficiencyConstraint
  "Y ⊥ A | Ŷ"^^xsd:string)
(AnnotationAssertion rdfs:comment :SufficiencyConstraint
  "True labels independent of protected attribute given predictions: P(Y|Ŷ,A=0) = P(Y|Ŷ,A=1)"@en)

;; Specific Metrics as Constraints
(Declaration (Class :DemographicParityConstraint))
(SubClassOf :DemographicParityConstraint :IndependenceConstraint)

(Declaration (Class :EqualizedOddsConstraint))
(SubClassOf :EqualizedOddsConstraint :SeparationConstraint)

(Declaration (Class :EqualOpportunityConstraint))
(SubClassOf :EqualOpportunityConstraint :SeparationConstraint)

(Declaration (Class :PredictiveParityConstraint))
(SubClassOf :PredictiveParityConstraint :SufficiencyConstraint)

(Declaration (Class :CalibrationConstraint))
(SubClassOf :CalibrationConstraint :SufficiencyConstraint)

;; Impossibility Theorems
(Declaration (Class :ImpossibilityTheorem))
(AnnotationAssertion rdfs:comment :ImpossibilityTheorem
  "Theorems showing certain fairness constraints cannot be simultaneously satisfied"@en)

(Declaration (Class :ChouldechovaImpossibility))
(SubClassOf :ChouldechovaImpossibility :ImpossibilityTheorem)
(AnnotationAssertion rdfs:comment :ChouldechovaImpossibility
  "Cannot satisfy calibration, balance for positive class, and balance for negative class simultaneously when base rates differ"@en)

;; Constraints
(SubClassOf :FairnessConstraint
  (DataSomeValuesFrom :hasMathematicalFormulation xsd:string))
      ```

- ## About Fairness Constraints
  id:: 0382-fairness-constraints-about

  - 
  -
  
