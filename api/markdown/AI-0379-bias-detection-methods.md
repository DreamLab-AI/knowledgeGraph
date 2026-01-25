- ### OntologyBlock
  id:: 0379-bias-detection-methods-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0379
    - preferred-term:: Bias Detection Methods
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: Bias Detection Methods are systematic approaches and analytical techniques for identifying algorithmic bias in AI systems through statistical testing, fairness audits, counterfactual analysis, and causal inference. These methods examine model predictions across protected groups to detect disparate impacts, unequal error rates, or discriminatory patterns that violate fairness principles. Key techniques include statistical hypothesis testing (chi-square tests, t-tests, permutation tests) to evaluate group differences with defined significance thresholds, fairness auditing that systematically evaluates multiple fairness metrics, counterfactual analysis that tests how predictions change under hypothetical attribute modifications, intersectional analysis examining bias at the intersection of multiple protected attributes, and causal analysis to distinguish legitimate predictive pathways from discriminatory ones. These methods produce bias audit reports documenting detected disparities, their severity, affected populations, and compliance with legal standards. Implementation requires access to protected attribute data, ground truth labels for supervised methods, and statistical expertise to interpret confidence levels and significance thresholds, typically set at p < 0.05 for hypothesis testing as specified in ISO/IEC TR 24027:2021 and NIST SP 1270.
    - maturity:: mature
    - source:: [[ISO/IEC TR 24027]], [[NIST SP 1270]], [[IEEE P7003-2021]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: ai:BiasDetectionMethods
    - owl:role:: Process
    - owl:inferred-class:: ai:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: 0379-bias-detection-methods-relationships

  - #### OWL Axioms
    id:: 0379-bias-detection-methods-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :BiasDetectionMethod))
(SubClassOf :BiasDetectionMethod :AssessmentMethod)
(SubClassOf :BiasDetectionMethod :EthicalAITool)

(AnnotationAssertion rdfs:label :BiasDetectionMethod
  "Bias Detection Method"@en)
(AnnotationAssertion rdfs:comment :BiasDetectionMethod
  "Systematic approaches for identifying algorithmic bias through statistical testing, fairness audits, counterfactual analysis, and causal inference."@en)
(AnnotationAssertion :dcterms:source :BiasDetectionMethod
  "ISO/IEC TR 24027:2021, NIST SP 1270, IEEE P7003-2021")

;; Object Properties
(Declaration (ObjectProperty :detects))
(ObjectPropertyDomain :detects :BiasDetectionMethod)
(ObjectPropertyRange :detects :AlgorithmicBias)

(Declaration (ObjectProperty :appliesStatisticalTest))
(SubObjectPropertyOf :appliesStatisticalTest :uses)
(ObjectPropertyRange :appliesStatisticalTest :StatisticalTest)

(Declaration (ObjectProperty :requiresAttribute))
(ObjectPropertyDomain :requiresAttribute :BiasDetectionMethod)
(ObjectPropertyRange :requiresAttribute :ProtectedAttribute)

(Declaration (ObjectProperty :producesReport))
(ObjectPropertyDomain :producesReport :BiasDetectionMethod)
(ObjectPropertyRange :producesReport :BiasAuditReport)

;; Data Properties
(Declaration (DataProperty :hasConfidenceLevel))
(DataPropertyDomain :hasConfidenceLevel :BiasDetectionMethod)
(DataPropertyRange :hasConfidenceLevel xsd:decimal)

(Declaration (DataProperty :hasSignificanceThreshold))
(DataPropertyAssertion :hasSignificanceThreshold :StatisticalTest
  "0.05"^^xsd:decimal)

(Declaration (DataProperty :requiresGroundTruth))
(DataPropertyDomain :requiresGroundTruth :BiasDetectionMethod)
(DataPropertyRange :requiresGroundTruth xsd:boolean)

(Declaration (DataProperty :isAutomatable))
(DataPropertyDomain :isAutomatable :BiasDetectionMethod)
(DataPropertyRange :isAutomatable xsd:boolean)

;; Method Subclasses
(Declaration (Class :StatisticalTesting))
(SubClassOf :StatisticalTesting :BiasDetectionMethod)
(DataPropertyAssertion :isAutomatable :StatisticalTesting "true"^^xsd:boolean)
(AnnotationAssertion rdfs:comment :StatisticalTesting
  "Hypothesis testing for group differences (chi-square, t-tests, permutation tests)"@en)

(Declaration (Class :FairnessAuditing))
(SubClassOf :FairnessAuditing :BiasDetectionMethod)
(AnnotationAssertion rdfs:comment :FairnessAuditing
  "Systematic evaluation of fairness metrics across protected groups"@en)

(Declaration (Class :CounterfactualAnalysis))
(SubClassOf :CounterfactualAnalysis :BiasDetectionMethod)
(DataPropertyAssertion :requiresGroundTruth :CounterfactualAnalysis
  "false"^^xsd:boolean)
(AnnotationAssertion rdfs:comment :CounterfactualAnalysis
  "What-if analysis testing predictions under counterfactual attribute values"@en)

(Declaration (Class :IntersectionalAnalysis))
(SubClassOf :IntersectionalAnalysis :BiasDetectionMethod)
(AnnotationAssertion rdfs:comment :IntersectionalAnalysis
  "Analysis of bias at intersections of multiple protected attributes"@en)

(Declaration (Class :CausalAnalysis))
(SubClassOf :CausalAnalysis :BiasDetectionMethod)
(AnnotationAssertion rdfs:comment :CausalAnalysis
  "Causal inference to separate legitimate from discriminatory pathways"@en)

;; Axioms
(SubClassOf :BiasDetectionMethod
  (ObjectSomeValuesFrom :detects :AlgorithmicBias))
(SubClassOf :BiasDetectionMethod
  (ObjectSomeValuesFrom :requiresAttribute :ProtectedAttribute))
(SubClassOf :FairnessAuditing
  (ObjectSomeValuesFrom :producesReport :BiasAuditReport))
      ```

- ## About Bias Detection Methods
  id:: 0379-bias-detection-methods-about

  - 
  -
  
