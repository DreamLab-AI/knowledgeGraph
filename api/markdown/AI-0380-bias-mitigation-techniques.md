- ### OntologyBlock
  id:: 0380-bias-mitigation-techniques-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0380
    - preferred-term:: Bias Mitigation Techniques
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: Bias Mitigation Techniques are methods and interventions designed to reduce algorithmic bias and improve fairness in AI systems through modifications at different stages of the machine learning pipeline. These techniques are categorized into pre-processing methods (data transformation before training, including reweighting samples, resampling underrepresented groups, SMOTE for synthetic minority oversampling, and feature modification), in-processing methods (fairness constraints during model training, including regularization penalties, adversarial debiasing that trains models to be invariant to protected attributes, and constrained optimization), and post-processing methods (prediction adjustment after training, including threshold optimization for different groups and calibration techniques). Each approach involves tradeoffs between fairness improvement and predictive accuracy, with pre-processing methods typically preserving model flexibility but potentially discarding useful data, in-processing methods directly optimizing fairness-accuracy frontiers but requiring specialized algorithms, and post-processing methods being model-agnostic but potentially violating calibration. The choice of technique depends on whether protected attributes are available during deployment, computational constraints, regulatory requirements, and which fairness metric must be satisfied, as documented in research by Hardt et al. (2016) and implemented in libraries like Fairlearn and AIF360.
    - maturity:: mature
    - source:: [[Fairlearn]], [[AIF360]], [[IEEE P7003-2021]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: ai:BiasMitigationTechniques
    - owl:role:: Process
    - owl:inferred-class:: ai:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: 0380-bias-mitigation-techniques-relationships

  - #### OWL Axioms
    id:: 0380-bias-mitigation-techniques-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :BiasMitigationTechnique))
(SubClassOf :BiasMitigationTechnique :FairnessIntervention)
(SubClassOf :BiasMitigationTechnique :EthicalAITool)

(AnnotationAssertion rdfs:label :BiasMitigationTechnique
  "Bias Mitigation Technique"@en)
(AnnotationAssertion rdfs:comment :BiasMitigationTechnique
  "Methods for reducing algorithmic bias through pre-processing (data modification), in-processing (fairness constraints), and post-processing (prediction adjustment)."@en)

;; Object Properties
(Declaration (ObjectProperty :mitigates))
(ObjectPropertyDomain :mitigates :BiasMitigationTechnique)
(ObjectPropertyRange :mitigates :AlgorithmicBias)

(Declaration (ObjectProperty :appliesAt))
(ObjectPropertyDomain :appliesAt :BiasMitigationTechnique)
(ObjectPropertyRange :appliesAt :MLPipelineStage)

(Declaration (ObjectProperty :preservesFairnessMetric))
(ObjectPropertyDomain :preservesFairnessMetric :BiasMitigationTechnique)
(ObjectPropertyRange :preservesFairnessMetric :FairnessMetric)

;; Data Properties
(Declaration (DataProperty :hasAccuracyCost))
(DataPropertyDomain :hasAccuracyCost :BiasMitigationTechnique)
(DataPropertyRange :hasAccuracyCost xsd:decimal)

(Declaration (DataProperty :requiresProtectedAttribute))
(DataPropertyDomain :requiresProtectedAttribute :BiasMitigationTechnique)
(DataPropertyRange :requiresProtectedAttribute xsd:boolean)

;; Subclass Definitions
(Declaration (Class :PreprocessingTechnique))
(SubClassOf :PreprocessingTechnique :BiasMitigationTechnique)
(AnnotationAssertion rdfs:comment :PreprocessingTechnique
  "Data transformation before model training (reweighting, resampling, feature modification)"@en)

(Declaration (Class :InprocessingTechnique))
(SubClassOf :InprocessingTechnique :BiasMitigationTechnique)
(AnnotationAssertion rdfs:comment :InprocessingTechnique
  "Fairness constraints during model training (regularization, adversarial debiasing)"@en)

(Declaration (Class :PostprocessingTechnique))
(SubClassOf :PostprocessingTechnique :BiasMitigationTechnique)
(AnnotationAssertion rdfs:comment :PostprocessingTechnique
  "Prediction adjustment after model training (threshold optimization, calibration)"@en)

;; Specific Techniques
(Declaration (Class :Reweighting))
(SubClassOf :Reweighting :PreprocessingTechnique)

(Declaration (Class :SMOTE))
(SubClassOf :SMOTE :PreprocessingTechnique)

(Declaration (Class :FairConstraints))
(SubClassOf :FairConstraints :InprocessingTechnique)

(Declaration (Class :AdversarialDebiasing))
(SubClassOf :AdversarialDebiasing :InprocessingTechnique)

(Declaration (Class :ThresholdOptimization))
(SubClassOf :ThresholdOptimization :PostprocessingTechnique)

(Declaration (Class :Calibration))
(SubClassOf :Calibration :PostprocessingTechnique)

;; Constraints
(SubClassOf :PreprocessingTechnique
  (ObjectAllValuesFrom :appliesAt :DataPreparation))
(SubClassOf :InprocessingTechnique
  (ObjectAllValuesFrom :appliesAt :ModelTraining))
(SubClassOf :PostprocessingTechnique
  (ObjectAllValuesFrom :appliesAt :Prediction))
      ```

- ## About Bias Mitigation Techniques
  id:: 0380-bias-mitigation-techniques-about

  - 
  -
  

