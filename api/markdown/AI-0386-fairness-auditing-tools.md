- ### OntologyBlock
  id:: 0386-fairness-auditing-tools-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0386
    - preferred-term:: Fairness Auditing Tools
    - source-domain:: ai
    - status:: complete
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: Fairness Auditing Tools are software libraries, platforms, and frameworks designed to detect, measure, and mitigate algorithmic bias in AI systems through automated analysis, visualization, and intervention capabilities. Leading open-source tools include Fairlearn (Microsoft, MIT license) providing fairness metrics and mitigation algorithms for Python with scikit-learn integration, AIF360 (IBM, Apache-2.0 license) offering comprehensive bias detection and mitigation across the ML pipeline with 70+ fairness metrics, What-If Tool (Google, Apache-2.0) providing interactive visual interfaces for TensorFlow model exploration and counterfactual analysis, Aequitas (University of Chicago, MIT license) focusing on fairness auditing for criminal justice and policy applications, and FairTest (Columbia University, MIT license) enabling statistical fairness testing with association discovery. These tools implement fairness metrics including demographic parity, equalized odds, and predictive parity, provide visualizations such as fairness dashboards, confusion matrices disaggregated by group, and disparity charts, and support mitigation techniques including reweighting, threshold optimization, and adversarial debiasing. Adoption best practices include multi-tool validation to cross-verify findings, integration into CI/CD pipelines for continuous fairness monitoring, documentation of fairness decisions and tradeoffs, and stakeholder engagement in selecting appropriate fairness metrics. These tools operationalize fairness requirements from standards including IEEE P7003-2021, ISO/IEC TR 24027:2021, and the EU AI Act Article 10 on data governance and bias mitigation.
    - maturity:: mature
    - source:: [[Fairlearn]], [[AIF360]], [[IEEE P7003-2021]], [[ISO/IEC TR 24027]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: aigo:FairnessAuditingTools
    - owl:physicality:: VirtualEntity
    - owl:role:: Process
    - owl:inferred-class:: aigo:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: 0386-fairness-auditing-tools-relationships

  - #### OWL Axioms
    id:: 0386-fairness-auditing-tools-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :FairnessAuditingTool))
(SubClassOf :FairnessAuditingTool :SoftwareTool)
(SubClassOf :FairnessAuditingTool :EthicalAIInfrastructure)

(AnnotationAssertion rdfs:label :FairnessAuditingTool
  "Fairness Auditing Tool"@en)
(AnnotationAssertion rdfs:comment :FairnessAuditingTool
  "Software libraries and platforms for detecting, measuring, and mitigating algorithmic bias, including Fairlearn, AIF360, What-If Tool, Aequitas, and FairTest."@en)

;; Object Properties
(Declaration (ObjectProperty :implements))
(ObjectPropertyDomain :implements :FairnessAuditingTool)
(ObjectPropertyRange :implements :FairnessMetric)

(Declaration (ObjectProperty :providesVisualization))
(ObjectPropertyDomain :providesVisualization :FairnessAuditingTool)
(ObjectPropertyRange :providesVisualization :VisualizationType)

(Declaration (ObjectProperty :supportsMitigation))
(ObjectPropertyDomain :supportsMitigation :FairnessAuditingTool)
(ObjectPropertyRange :supportsMitigation :BiasMitigationTechnique)

;; Data Properties
(Declaration (DataProperty :hasLicense))
(DataPropertyDomain :hasLicense :FairnessAuditingTool)
(DataPropertyRange :hasLicense xsd:string)

(Declaration (DataProperty :supportsProgrammingLanguage))
(DataPropertyDomain :supportsProgrammingLanguage :FairnessAuditingTool)
(DataPropertyRange :supportsProgrammingLanguage xsd:string)

(Declaration (DataProperty :hasRepositoryURL))
(DataPropertyDomain :hasRepositoryURL :FairnessAuditingTool)
(DataPropertyRange :hasRepositoryURL xsd:anyURI)

;; Tool Subclasses
(Declaration (Class :Fairlearn))
(SubClassOf :Fairlearn :FairnessAuditingTool)
(DataPropertyAssertion :hasLicense :Fairlearn "MIT"^^xsd:string)
(DataPropertyAssertion :supportsProgrammingLanguage :Fairlearn "Python"^^xsd:string)
(DataPropertyAssertion :hasRepositoryURL :Fairlearn
  "https://github.com/fairlearn/fairlearn"^^xsd:anyURI)

(Declaration (Class :AIF360))
(SubClassOf :AIF360 :FairnessAuditingTool)
(DataPropertyAssertion :hasLicense :AIF360 "Apache-2.0"^^xsd:string)
(DataPropertyAssertion :supportsProgrammingLanguage :AIF360 "Python"^^xsd:string)

(Declaration (Class :WhatIfTool))
(SubClassOf :WhatIfTool :FairnessAuditingTool)
(DataPropertyAssertion :hasLicense :WhatIfTool "Apache-2.0"^^xsd:string)
(AnnotationAssertion rdfs:comment :WhatIfTool
  "Interactive visual interface for TensorFlow models"@en)

(Declaration (Class :Aequitas))
(SubClassOf :Aequitas :FairnessAuditingTool)
(DataPropertyAssertion :hasLicense :Aequitas "MIT"^^xsd:string)

(Declaration (Class :FairTest))
(SubClassOf :FairTest :FairnessAuditingTool)
(DataPropertyAssertion :hasLicense :FairTest "MIT"^^xsd:string)
      ```

- ## About 0386 Fairness Auditing Tools
  id:: 0386-fairness-auditing-tools-about

  - 
  -
    - ### Use Cases
    - **Education**: Teaching fairness concepts interactively
    - **Model Exploration**: Understanding model behavior
    - **Debugging**: Identifying systematic errors
    -
  - ### Best Practices
  - ### 1. Multi-Tool Validation
    Use multiple tools to cross-validate findings:
    - Fairlearn for quick checks
    - AIF360 for comprehensive analysis
    - Aequitas for compliance verification

