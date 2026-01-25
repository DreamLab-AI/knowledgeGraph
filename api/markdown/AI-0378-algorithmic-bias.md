- ### OntologyBlock
  id:: 0378-algorithmic-bias-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0378
    - preferred-term:: Algorithmic Bias
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: Algorithmic Bias refers to systematic and repeatable errors in AI systems that create unfair outcomes favoring or discriminating against particular groups or individuals. This bias manifests through multiple pathways including historical bias (reflecting past societal inequalities in training data), representation bias (unrepresentative or incomplete data samples), measurement bias (flawed proxy variables), aggregation bias (combining heterogeneous groups inappropriately), and feedback loops (where system outputs influence future inputs, amplifying initial biases). Algorithmic bias affects protected groups based on attributes such as race, gender, age, disability, or socioeconomic status, potentially resulting in discriminatory decisions in critical domains like hiring, lending, criminal justice, and healthcare. Detection requires statistical analysis, fairness auditing, and counterfactual testing, while mitigation involves pre-processing data corrections, in-processing fairness constraints, and post-processing prediction adjustments. The severity and legal implications of algorithmic bias are governed by anti-discrimination frameworks including the EU Anti-Discrimination Directives, UK Equality Act 2010, and US civil rights legislation.
    - maturity:: mature
    - source:: [[ISO/IEC TR 24027]], [[NIST SP 1270]], [[IEEE P7003-2021]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: ai:AlgorithmicBias
    - owl:role:: Process
    - owl:inferred-class:: ai:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: 0378-algorithmic-bias-relationships

  - #### OWL Axioms
    id:: 0378-algorithmic-bias-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :AlgorithmicBias))
(SubClassOf :AlgorithmicBias :EthicalConcern)
(SubClassOf :AlgorithmicBias :AIRisk)

(AnnotationAssertion rdfs:label :AlgorithmicBias
  "Algorithmic Bias"@en)
(AnnotationAssertion rdfs:comment :AlgorithmicBias
  "Systematic and repeatable errors in AI systems that create unfair outcomes, including historical bias, representation bias, measurement bias, and feedback loops."@en)
(AnnotationAssertion :dcterms:source :AlgorithmicBias
  "ISO/IEC TR 24027:2021, NIST SP 1270, IEEE P7003-2021")

;; Object Properties
(Declaration (ObjectProperty :affectsGroup))
(ObjectPropertyDomain :affectsGroup :AlgorithmicBias)
(ObjectPropertyRange :affectsGroup :ProtectedGroup)

(Declaration (ObjectProperty :originatesFrom))
(ObjectPropertyDomain :originatesFrom :AlgorithmicBias)
(ObjectPropertyRange :originatesFrom :BiasSource)

(Declaration (ObjectProperty :manifestsIn))
(ObjectPropertyDomain :manifestsIn :AlgorithmicBias)
(ObjectPropertyRange :manifestsIn :AISystemComponent)

(Declaration (ObjectProperty :amplifiedBy))
(ObjectPropertyDomain :amplifiedBy :AlgorithmicBias)
(ObjectPropertyRange :amplifiedBy :FeedbackMechanism)

(Declaration (ObjectProperty :detectedBy))
(ObjectPropertyDomain :detectedBy :AlgorithmicBias)
(ObjectPropertyRange :detectedBy :BiasDetectionMethod)

(Declaration (ObjectProperty :mitigatedBy))
(ObjectPropertyDomain :mitigatedBy :AlgorithmicBias)
(ObjectPropertyRange :mitigatedBy :BiasMitigationTechnique)

;; Data Properties
(Declaration (DataProperty :hasSeverity))
(DataPropertyDomain :hasSeverity :AlgorithmicBias)
(DataPropertyRange :hasSeverity xsd:string)
(AnnotationAssertion rdfs:comment :hasSeverity
  "Severity level: low, medium, high, critical"@en)

(Declaration (DataProperty :hasImpactScope))
(DataPropertyDomain :hasImpactScope :AlgorithmicBias)
(DataPropertyRange :hasImpactScope xsd:string)

(Declaration (DataProperty :isSystematic))
(DataPropertyDomain :isSystematic :AlgorithmicBias)
(DataPropertyRange :isSystematic xsd:boolean)

(Declaration (DataProperty :hasLegalImplication))
(DataPropertyDomain :hasLegalImplication :AlgorithmicBias)
(DataPropertyRange :hasLegalImplication xsd:boolean)

;; Bias Type Subclasses
(Declaration (Class :HistoricalBias))
(SubClassOf :HistoricalBias :AlgorithmicBias)
(AnnotationAssertion rdfs:comment :HistoricalBias
  "Bias arising from historical societal inequalities reflected in training data"@en)

(Declaration (Class :RepresentationBias))
(SubClassOf :RepresentationBias :AlgorithmicBias)
(AnnotationAssertion rdfs:comment :RepresentationBias
  "Bias from unrepresentative or incomplete training data samples"@en)

(Declaration (Class :MeasurementBias))
(SubClassOf :MeasurementBias :AlgorithmicBias)
(AnnotationAssertion rdfs:comment :MeasurementBias
  "Bias from flawed measurement or proxy variables for ground truth"@en)

(Declaration (Class :AggregationBias))
(SubClassOf :AggregationBias :AlgorithmicBias)
(AnnotationAssertion rdfs:comment :AggregationBias
  "Bias from combining heterogeneous groups into single model"@en)

(Declaration (Class :EvaluationBias))
(SubClassOf :EvaluationBias :AlgorithmicBias)
(AnnotationAssertion rdfs:comment :EvaluationBias
  "Bias in benchmarks or test sets used for model evaluation"@en)

(Declaration (Class :DeploymentBias))
(SubClassOf :DeploymentBias :AlgorithmicBias)
(AnnotationAssertion rdfs:comment :DeploymentBias
  "Bias from misalignment between development and deployment contexts"@en)

(Declaration (Class :FeedbackLoopBias))
(SubClassOf :FeedbackLoopBias :AlgorithmicBias)
(AnnotationAssertion rdfs:comment :FeedbackLoopBias
  "Bias amplified through system outputs influencing future inputs"@en)

;; Complexity Constraints
(SubClassOf :AlgorithmicBias
  (ObjectSomeValuesFrom :affectsGroup :ProtectedGroup))
(SubClassOf :AlgorithmicBias
  (ObjectSomeValuesFrom :originatesFrom :BiasSource))
(SubClassOf :AlgorithmicBias
  (DataSomeValuesFrom :hasSeverity xsd:string))

;; Disjoint Unions
(DisjointUnion :BiasSource
  :DataSource :AlgorithmDesign :HumanDecision :SystemicFactors)
      ```

- ## About Algorithmic Bias
  id:: 0378-algorithmic-bias-about

  - 
  -
  
