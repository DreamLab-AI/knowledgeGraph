- ### OntologyBlock
  id:: 0448-unescorecommendationethicsai-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0448
    - preferred-term:: UNESCO Recommendation on the Ethics of AI
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: The UNESCO Recommendation on the Ethics of Artificial Intelligence is the first global normative framework establishing ethical principles and policy actions for responsible AI development and deployment, adopted by UNESCO's 193 Member States in November 2021. This comprehensive instrument provides shared values, principles, and actionable policy recommendations to ensure AI technologies respect human rights, protect human dignity, promote diversity and inclusion, and contribute to peaceful and just societies living in harmony with the environment. The Recommendation establishes four core values (human rights and dignity, living in peaceful just and interconnected societies, ensuring diversity and inclusiveness, environment and ecosystem flourishing) and ten foundational principles including proportionality, safety and security, fairness and non-discrimination, sustainability, right to privacy and data protection, human oversight and determination, transparency and explainability, responsibility and accountability, awareness and literacy, and multi-stakeholder and adaptive governance. Unlike legally binding treaties, UNESCO Recommendations establish normative standards that guide national legislation, institutional policies, and international cooperation, providing a foundation for ethical AI governance frameworks worldwide.
    - maturity:: mature
    - source:: [[UNESCO Recommendation on the Ethics of AI (2021)]]
    - authority-score:: 0.98

  - **Semantic Classification**
    - owl:class:: ai:UNESCORecommendationEthicsAI
    - owl:role:: Process
    - owl:inferred-class:: ai:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: 0448-unescorecommendationethicsai-relationships

  - #### OWL Axioms
    id:: 0448-unescorecommendationethicsai-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :UNESCORecommendationEthicsAI))
(SubClassOf :UNESCORecommendationEthicsAI :InternationalInstrument)
(SubClassOf :UNESCORecommendationEthicsAI :EthicsFramework)
(SubClassOf :UNESCORecommendationEthicsAI :GlobalStandard)

;; Values and principles
(Declaration (Class :UNESCOValue))
(Declaration (Class :HumanRightsDignity))
(Declaration (Class :LivingHarmonyEnvironment))
(Declaration (Class :DiversityInclusion))
(Declaration (Class :PeacefulJustSocieties))

(SubClassOf :HumanRightsDignity :UNESCOValue)
(SubClassOf :LivingHarmonyEnvironment :UNESCOValue)
(SubClassOf :DiversityInclusion :UNESCOValue)
(SubClassOf :PeacefulJustSocieties :UNESCOValue)

(SubClassOf :UNESCORecommendationEthicsAI
  (ObjectAllValuesFrom :basedOnValue :UNESCOValue))

;; Principles
(Declaration (Class :UNESCOPrinciple))
(Declaration (Class :Proportionality))
(Declaration (Class :SafetySecurityPrevention))
(Declaration (Class :FairnessNonDiscrimination))
(Declaration (Class :Sustainability))
(Declaration (Class :RightToPrivacy))
(Declaration (Class :HumanOversight))
(Declaration (Class :TransparencyExplainability))
(Declaration (Class :ResponsibilityAccountability))
(Declaration (Class :Awareness))
(Declaration (Class :MultiStakeholderGovernance))

(SubClassOf :Proportionality :UNESCOPrinciple)
(SubClassOf :SafetySecurityPrevention :UNESCOPrinciple)
(SubClassOf :FairnessNonDiscrimination :UNESCOPrinciple)
(SubClassOf :Sustainability :UNESCOPrinciple)
(SubClassOf :RightToPrivacy :UNESCOPrinciple)
(SubClassOf :HumanOversight :UNESCOPrinciple)
(SubClassOf :TransparencyExplainability :UNESCOPrinciple)
(SubClassOf :ResponsibilityAccountability :UNESCOPrinciple)
(SubClassOf :Awareness :UNESCOPrinciple)
(SubClassOf :MultiStakeholderGovernance :UNESCOPrinciple)

;; Policy action areas
(Declaration (Class :PolicyActionArea))
(SubClassOf :UNESCORecommendationEthicsAI
  (ObjectSomeValuesFrom :definesPolicyArea :PolicyActionArea))

;; Ethical Impact Assessment
(Declaration (Class :EthicalImpactAssessment))
(SubClassOf :EthicalImpactAssessment :PolicyActionArea)
(SubClassOf :UNESCORecommendationEthicsAI
  (ObjectSomeValuesFrom :requires :EthicalImpactAssessment))

;; Member State adoption
(SubClassOf :UNESCORecommendationEthicsAI
  (DataHasValue :adoptedByMemberStates 193))
(SubClassOf :UNESCORecommendationEthicsAI
  (DataHasValue :adoptionDate "2021-11-24"^^xsd:date))
      ```

- ## About UNESCO Recommendation on the Ethics of AI
  id:: 0448-unescorecommendationethicsai-about

  - 
  -
  
