- ### OntologyBlock
  id:: 0377-fairness-metrics-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0377
    - preferred-term:: Fairness Metrics
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: Fairness Metrics are quantitative measures and mathematical frameworks used to evaluate and ensure equitable treatment across different demographic groups in AI systems. These metrics provide objective, measurable criteria to assess whether an algorithmic system produces disparate impacts, maintains statistical parity, or achieves equalized odds across protected attributes such as race, gender, age, or disability status. Key fairness metrics include demographic parity (equal positive prediction rates across groups), equalized odds (equal true positive and false positive rates), equal opportunity (equal true positive rates), and predictive parity (equal precision across groups). The selection and application of fairness metrics depends on the specific context, stakeholder values, and regulatory requirements, as different metrics can conflict and no single metric satisfies all fairness criteria simultaneously. Implementation requires confusion matrix analysis, statistical testing, and careful consideration of base rate differences between groups, as formalized in IEEE P7003-2021 and NIST SP 1270 guidelines for algorithmic fairness assessment.
    - maturity:: mature
    - source:: [[IEEE P7003-2021]], [[ISO/IEC TR 24027]], [[NIST SP 1270]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: aigo:FairnessMetrics
    - owl:physicality:: VirtualEntity
    - owl:role:: Process
    - owl:inferred-class:: aigo:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: 0377-fairness-metrics-relationships

  - #### OWL Axioms
    id:: 0377-fairness-metrics-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :FairnessMetric))
(SubClassOf :FairnessMetric :EvaluationMetric)
(SubClassOf :FairnessMetric :EthicalAIComponent)

(AnnotationAssertion rdfs:label :FairnessMetric
  "Fairness Metric"@en)
(AnnotationAssertion rdfs:comment :FairnessMetric
  "Quantitative measures for assessing algorithmic fairness across protected groups, including demographic parity, equalized odds, and equality of opportunity."@en)
(AnnotationAssertion :dcterms:source :FairnessMetric
  "IEEE P7003-2021, ISO/IEC TR 24027:2021, NIST SP 1270")

;; Object Properties
(Declaration (ObjectProperty :measures))
(ObjectPropertyDomain :measures :FairnessMetric)
(ObjectPropertyRange :measures :AlgorithmicFairness)

(Declaration (ObjectProperty :detectsBias))
(ObjectPropertyDomain :detectsBias :FairnessMetric)
(ObjectPropertyRange :detectsBias :ProtectedAttribute)

(Declaration (ObjectProperty :appliesTo))
(ObjectPropertyDomain :appliesTo :FairnessMetric)
(ObjectPropertyRange :appliesTo :AIModel)

(Declaration (ObjectProperty :requiresConfusionMatrix))
(SubObjectPropertyOf :requiresConfusionMatrix :dependsOn)

;; Data Properties
(Declaration (DataProperty :hasValueRange))
(DataPropertyAssertion :hasValueRange :FairnessMetric
  "[0,1] for most metrics"^^xsd:string)

(Declaration (DataProperty :hasThreshold))
(DataPropertyDomain :hasThreshold :FairnessMetric)
(DataPropertyRange :hasThreshold xsd:decimal)

(Declaration (DataProperty :requiresGroundTruth))
(DataPropertyAssertion :requiresGroundTruth :FairnessMetric
  "true"^^xsd:boolean)

;; Subclass Definitions
(Declaration (Class :DemographicParity))
(SubClassOf :DemographicParity :FairnessMetric)
(AnnotationAssertion rdfs:comment :DemographicParity
  "P(Ŷ=1|A=0) = P(Ŷ=1|A=1) where A is protected attribute and Ŷ is prediction"@en)

(Declaration (Class :EqualizedOdds))
(SubClassOf :EqualizedOdds :FairnessMetric)
(AnnotationAssertion rdfs:comment :EqualizedOdds
  "P(Ŷ=1|A=0,Y=y) = P(Ŷ=1|A=1,Y=y) for y ∈ {0,1}"@en)

(Declaration (Class :EqualOpportunity))
(SubClassOf :EqualOpportunity :FairnessMetric)
(AnnotationAssertion rdfs:comment :EqualOpportunity
  "P(Ŷ=1|A=0,Y=1) = P(Ŷ=1|A=1,Y=1) - equal true positive rates"@en)

(Declaration (Class :PredictiveParity))
(SubClassOf :PredictiveParity :FairnessMetric)
(AnnotationAssertion rdfs:comment :PredictiveParity
  "P(Y=1|Ŷ=1,A=0) = P(Y=1|Ŷ=1,A=1) - equal precision across groups"@en)

;; Disjoint Classes
(DisjointClasses :DemographicParity :EqualizedOdds :EqualOpportunity)

;; Domain Constraints
(SubClassOf :FairnessMetric
  (ObjectSomeValuesFrom :measures :AlgorithmicFairness))
(SubClassOf :FairnessMetric
  (ObjectSomeValuesFrom :detectsBias :ProtectedAttribute))
(SubClassOf :FairnessMetric
  (DataSomeValuesFrom :hasThreshold xsd:decimal))
      ```

- ## About Fairness Metrics
  id:: 0377-fairness-metrics-about

  - 
  -
  
