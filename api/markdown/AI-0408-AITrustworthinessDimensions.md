- ### OntologyBlock
  id:: 0408-aitrustworthinessdimensions-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0408
    - preferred-term:: AI Trustworthiness Dimensions
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: AI Trustworthiness Dimensions are the seven interdependent assessment criteria that collectively define whether an AI system meets trustworthiness requirements, ensuring ethical, lawful, and robust deployment while protecting fundamental rights and enabling societal benefit. Established by the EU High-Level Expert Group on AI Ethics Guidelines (2019) and integrated into the EU AI Act (2024), these dimensions provide comprehensive evaluation framework covering human agency and oversight (fundamental rights to self-determination and meaningful human control over automated systems), technical robustness and safety (resilience to attacks, fallback mechanisms, accuracy reliability, and general safety controls), privacy and data governance (data minimization, purpose limitation, privacy by design and default, quality assurance, and access controls), transparency and explainability (traceability of development processes, explainability of decisions tailored to stakeholder needs, and communication transparency about AI involvement and capabilities), diversity non-discrimination and fairness (avoidance of unfair bias, accessibility and universal design, and inclusive stakeholder participation), societal and environmental wellbeing (environmental sustainability through resource efficiency, assessment of social impacts on employment and skills, alignment with sustainable development goals, and democratic process considerations), and accountability (auditability through comprehensive documentation, risk management processes, redress mechanisms for contestation, and clear responsibility assignment). Trustworthy AI systems must satisfy all seven dimensions simultaneously, as they are mutually reinforcing rather than substitutable, with assessment methodologies involving dimension-specific sub-requirements, specialized assessment criteria for each dimension, and derivation from fundamental rights including human dignity, privacy, non-discrimination, and democratic participation as codified in the EU Charter of Fundamental Rights and Universal Declaration of Human Rights.
    - maturity:: mature
    - source:: [[EU HLEG AI]], [[EU Charter of Fundamental Rights]], [[EU AI Act]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: ai:AITrustworthinessDimensions
    - owl:role:: Process
    - owl:inferred-class:: ai:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: 0408-aitrustworthinessdimensions-relationships

  - #### OWL Axioms
    id:: 0408-aitrustworthinessdimensions-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :TrustworthinessDimension))
(SubClassOf :TrustworthinessDimension :AssessmentCriterion)
(SubClassOf :TrustworthinessDimension :EthicsRequirement)

;; Seven specific dimensions
(Declaration (Class :HumanAgencyOversight))
(Declaration (Class :TechnicalRobustnessSafety))
(Declaration (Class :PrivacyDataGovernance))
(Declaration (Class :TransparencyRequirement))
(Declaration (Class :DiversityFairnessNonDiscrimination))
(Declaration (Class :SocietalEnvironmentalWellbeing))
(Declaration (Class :AccountabilityRequirement))

(SubClassOf :HumanAgencyOversight :TrustworthinessDimension)
(SubClassOf :TechnicalRobustnessSafety :TrustworthinessDimension)
(SubClassOf :PrivacyDataGovernance :TrustworthinessDimension)
(SubClassOf :TransparencyRequirement :TrustworthinessDimension)
(SubClassOf :DiversityFairnessNonDiscrimination :TrustworthinessDimension)
(SubClassOf :SocietalEnvironmentalWellbeing :TrustworthinessDimension)
(SubClassOf :AccountabilityRequirement :TrustworthinessDimension)

;; Trustworthy AI must satisfy all dimensions
(SubClassOf :TrustworthyAISystem
  (ObjectAllValuesFrom :satisfiesDimension :HumanAgencyOversight))
(SubClassOf :TrustworthyAISystem
  (ObjectAllValuesFrom :satisfiesDimension :TechnicalRobustnessSafety))
(SubClassOf :TrustworthyAISystem
  (ObjectAllValuesFrom :satisfiesDimension :PrivacyDataGovernance))
(SubClassOf :TrustworthyAISystem
  (ObjectAllValuesFrom :satisfiesDimension :TransparencyRequirement))
(SubClassOf :TrustworthyAISystem
  (ObjectAllValuesFrom :satisfiesDimension :DiversityFairnessNonDiscrimination))
(SubClassOf :TrustworthyAISystem
  (ObjectAllValuesFrom :satisfiesDimension :SocietalEnvironmentalWellbeing))
(SubClassOf :TrustworthyAISystem
  (ObjectAllValuesFrom :satisfiesDimension :AccountabilityRequirement))

;; Dimensions have sub-requirements
(SubClassOf :TrustworthinessDimension
  (ObjectSomeValuesFrom :hasSubRequirement :SpecificRequirement))
(SubClassOf :TrustworthinessDimension
  (ObjectSomeValuesFrom :assessedBy :AssessmentCriterion))
(SubClassOf :TrustworthinessDimension
  (DataSomeValuesFrom :derivesFromRight :FundamentalRight))

;; Cardinality: exactly 7 dimensions
(EquivalentClasses :CompleteTrustworthinessAssessment
  (ObjectExactCardinality 7 :assessesDimension :TrustworthinessDimension))

(DisjointClasses :HumanAgencyOversight :TechnicalRobustnessSafety
                :PrivacyDataGovernance :TransparencyRequirement
                :DiversityFairnessNonDiscrimination
                :SocietalEnvironmentalWellbeing :AccountabilityRequirement)
      ```

- ## About AI Trustworthiness Dimensions
  id:: 0408-aitrustworthinessdimensions-about

  - 
  -
  
