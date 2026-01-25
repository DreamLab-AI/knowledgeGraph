- ### OntologyBlock
  id:: 0390-ai-impact-assessment-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0390
    - preferred-term:: 0390 Ai Impact Assessment
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: AI Impact Assessment is a structured evaluation methodology that systematically identifies, analyzes, and documents potential positive and negative impacts of AI systems on individuals, groups, organizations, society, and the environment, informing risk mitigation and responsible deployment decisions. This assessment process evaluates technical performance, ethical risks, human rights implications, societal consequences, and environmental effects, incorporating stakeholder perspectives and expert analysis to produce comprehensive impact reports. Key assessment dimensions include fairness and discrimination impacts (disparate treatment of protected groups, reinforcement of historical inequalities), privacy and data protection effects (surveillance risks, consent violations, data security), autonomy and human agency implications (erosion of human decision-making, manipulation risks), safety and security risks (system failures, adversarial attacks, unintended consequences), labor and economic impacts (job displacement, skill requirements, economic concentration), social and cultural effects (social cohesion, cultural values, power dynamics), and environmental sustainability (energy consumption, resource requirements, carbon footprint). The assessment methodology follows structured stages: scoping and system characterization, stakeholder identification and engagement, impact identification through workshops and analysis, severity and likelihood evaluation, mitigation measure design, residual risk assessment, and ongoing monitoring protocols. This process shares methodological foundations with Data Protection Impact Assessments (GDPR Article 35), Human Rights Impact Assessments, and Environmental Impact Assessments, adapted for AI-specific contexts. Requirements for impact assessments appear in the EU AI Act Articles 9 and 27, Canada's Algorithmic Impact Assessment, and ISO/IEC 23894:2023 guidance on AI risk management.
    - maturity:: mature
    - source:: [[EU AI Act]], [[ISO/IEC 23894:2023]], [[Canada AIA]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: ai:AIGovernancePrinciple
    - owl:role:: Process
    - owl:inferred-class:: ai:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: 0390-ai-impact-assessment-relationships

  - #### OWL Axioms
    id:: 0390-ai-impact-assessment-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :AIImpactAssessment))
(SubClassOf :AIImpactAssessment :TechnologyImpactAssessment)

(SubClassOf :AIImpactAssessment
  (ObjectSomeValuesFrom :evaluates :AISystem))
(SubClassOf :AIImpactAssessment
  (ObjectSomeValuesFrom :identifies :PotentialImpact))
(SubClassOf :AIImpactAssessment
  (ObjectSomeValuesFrom :analyzes :EthicalRisk))
(SubClassOf :AIImpactAssessment
  (ObjectSomeValuesFrom :assesses :HumanRightsImpact))
(SubClassOf :AIImpactAssessment
  (ObjectSomeValuesFrom :proposes :MitigationMeasure))
(SubClassOf :AIImpactAssessment
  (ObjectSomeValuesFrom :informs :DecisionMaking))

(DisjointWith :AIImpactAssessment :DataProtectionImpactAssessment)
(DisjointWith :AIImpactAssessment :EnvironmentalImpactAssessment)

(SubClassOf :AIImpactAssessment
  (ObjectIntersectionOf
    (ObjectSomeValuesFrom :incorporates :StakeholderInput)
    (ObjectSomeValuesFrom :produces :ImpactReport)))
      ```

- ## About AI Impact Assessment
  id:: 0390-ai-impact-assessment-about

  - 
  -
  
