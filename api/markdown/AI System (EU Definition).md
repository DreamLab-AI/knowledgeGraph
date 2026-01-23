- ### OntologyBlock
  id:: ai-system-(eu-definition)-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: mv-1761742247873
	- preferred-term:: AI System (EU Definition)
	- source-domain:: mv
	- status:: draft
- definition:: A machine-based system that can operate autonomously and adapt after deployment, generating outputs like predictions or decisions.

## Source

**Primary**: EU AI Act Article 3(1)
**Reference**: OECD AI Definition 2024

## Regulatory Context

Foundation definition for all AI regulation under the EU AI Act. This definition establishes the scope of regulatory coverage and determines which systems fall under the Act's requirements.

## Key Characteristics

- **Machine-based**: Operates through computational systems
- **Autonomy**: Can function with varying degrees of independence
- **Adaptability**: Capability to modify behaviour after deployment
- **Output generation**: Produces predictions, decisions, or content

## Scope

Applies to all systems deployed in the EU market, regardless of:
- Location of provider
- Whether provided for payment or free of charge
- Physical or virtual deployment

## Related Concepts

- **General-Purpose AI Model** (AI-0117): Subset with broad capabilities
- **High-Risk AI System** (AI-0118): Classification triggering strict requirements
- **Prohibited AI Practice** (AI-0119): Systems whose use is forbidden

## Legal Implications

Systems meeting this definition are subject to:
- Transparency obligations (Article 50)
- Risk-based classification framework (Articles 5-6)
- Provider and deployer responsibilities (Articles 16, 26)

## Regulatory Updates

The 2024 OECD revision expanded the definition to explicitly address general-purpose and generative AI systems, influencing EU Act interpretation.

## Enforcement

**Effective Date**: 2 August 2024 (entry into force)
**Full Application**: 2 August 2026 (most provisions)

## OWL Formal Ontology

```clojure
;; Class Declaration
(Declaration (Class :AISystem))

;; Subclass Axiom
(SubClassOf :AISystem :TechnologicalSystem)

;; Core Characteristics as Restrictions
(SubClassOf :AISystem
  (ObjectAllValuesFrom :operatesVia :ComputationalMechanism))

(SubClassOf :AISystem
  (ObjectSomeValuesFrom :hasCapability :AutonomousOperation))

(SubClassOf :AISystem
  (ObjectSomeValuesFrom :hasCapability :PostDeploymentAdaptation))

(SubClassOf :AISystem
  (ObjectSomeValuesFrom :generates :AIOutput))

;; EU AI Act Compliance Properties
(SubClassOf :AISystem
  (ObjectSomeValuesFrom :subjectToRegulation :EUAIAct))

(DataPropertyAssertion :hasLegalBasis :AISystem
  "EU Regulation 2024/1689 Article 3(1)"^^xsd:string)

(DataPropertyAssertion :hasRegulatoryScope :AISystem
  "All systems deployed in EU market regardless of provider location"^^xsd:string)

;; OECD Alignment
(SubClassOf :AISystem
  (ObjectSomeValuesFrom :alignsWith :OECDAIDefinition2024))

;; Output Types
(Declaration (Class :AIOutput))
(SubClassOf :Prediction :AIOutput)
(SubClassOf :Decision :AIOutput)
(SubClassOf :GeneratedContent :AIOutput)

;; Capability Classes
(Declaration (Class :AutonomousOperation))
(Declaration (Class :PostDeploymentAdaptation))

;; Regulatory Relationships
(Declaration (ObjectProperty :subjectToRegulation))
(ObjectPropertyDomain :subjectToRegulation :AISystem)
(ObjectPropertyRange :subjectToRegulation :RegulatoryFramework)

;; Data Properties
(Declaration (DataProperty :hasLegalBasis))
(DataPropertyDomain :hasLegalBasis :AISystem)
(DataPropertyRange :hasLegalBasis xsd:string)

(Declaration (DataProperty :hasRegulatoryScope))
(DataPropertyDomain :hasRegulatoryScope :AISystem)
(DataPropertyRange :hasRegulatoryScope xsd:string)

;; Annotations
(AnnotationAssertion rdfs:label :AISystem "AI System (EU Definition)"@en)
(AnnotationAssertion rdfs:comment :AISystem
  "A machine-based system that can operate autonomously and adapt after deployment, generating outputs like predictions or decisions. Foundation definition for EU AI Act regulatory coverage."@en)
(AnnotationAssertion :regulatorySource :AISystem "EU AI Act Article 3(1), OECD AI Definition 2024"^^xsd:string)
(AnnotationAssertion :ontologyID :AISystem "AI-0116"^^xsd:string)
```

## See Also

- EU AI Act Regulation (EU) 2024/1689
- OECD AI Principles 2024 Recommendation
- AI System Lifecycle (AI-0180)
	- maturity:: draft
	- owl:class:: mv:AISystem(EUDefinition)
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
- ## About AI System (EU Definition)
	- A machine-based system that can operate autonomously and adapt after deployment, generating outputs like predictions or decisions.

## Source

**Primary**: EU AI Act Article 3(1)
**Reference**: OECD AI Definition 2024

## Regulatory Context

Foundation definition for all AI regulation under the EU AI Act. This definition establishes the scope of regulatory coverage and determines which systems fall under the Act's requirements.

## Key Characteristics

- **Machine-based**: Operates through computational systems
- **Autonomy**: Can function with varying degrees of independence
- **Adaptability**: Capability to modify behaviour after deployment
- **Output generation**: Produces predictions, decisions, or content

## Scope

Applies to all systems deployed in the EU market, regardless of:
- Location of provider
- Whether provided for payment or free of charge
- Physical or virtual deployment

## Related Concepts

- **General-Purpose AI Model** (AI-0117): Subset with broad capabilities
- **High-Risk AI System** (AI-0118): Classification triggering strict requirements
- **Prohibited AI Practice** (AI-0119): Systems whose use is forbidden

## Legal Implications

Systems meeting this definition are subject to:
- Transparency obligations (Article 50)
- Risk-based classification framework (Articles 5-6)
- Provider and deployer responsibilities (Articles 16, 26)

## Regulatory Updates

The 2024 OECD revision expanded the definition to explicitly address general-purpose and generative AI systems, influencing EU Act interpretation.

## Enforcement

**Effective Date**: 2 August 2024 (entry into force)
**Full Application**: 2 August 2026 (most provisions)

## OWL Formal Ontology

```clojure
;; Class Declaration
(Declaration (Class :AISystem))

;; Subclass Axiom
(SubClassOf :AISystem :TechnologicalSystem)

;; Core Characteristics as Restrictions
(SubClassOf :AISystem
  (ObjectAllValuesFrom :operatesVia :ComputationalMechanism))

(SubClassOf :AISystem
  (ObjectSomeValuesFrom :hasCapability :AutonomousOperation))

(SubClassOf :AISystem
  (ObjectSomeValuesFrom :hasCapability :PostDeploymentAdaptation))

(SubClassOf :AISystem
  (ObjectSomeValuesFrom :generates :AIOutput))

;; EU AI Act Compliance Properties
(SubClassOf :AISystem
  (ObjectSomeValuesFrom :subjectToRegulation :EUAIAct))

(DataPropertyAssertion :hasLegalBasis :AISystem
  "EU Regulation 2024/1689 Article 3(1)"^^xsd:string)

(DataPropertyAssertion :hasRegulatoryScope :AISystem
  "All systems deployed in EU market regardless of provider location"^^xsd:string)

;; OECD Alignment
(SubClassOf :AISystem
  (ObjectSomeValuesFrom :alignsWith :OECDAIDefinition2024))

;; Output Types
(Declaration (Class :AIOutput))
(SubClassOf :Prediction :AIOutput)
(SubClassOf :Decision :AIOutput)
(SubClassOf :GeneratedContent :AIOutput)

;; Capability Classes
(Declaration (Class :AutonomousOperation))
(Declaration (Class :PostDeploymentAdaptation))

;; Regulatory Relationships
(Declaration (ObjectProperty :subjectToRegulation))
(ObjectPropertyDomain :subjectToRegulation :AISystem)
(ObjectPropertyRange :subjectToRegulation :RegulatoryFramework)

;; Data Properties
(Declaration (DataProperty :hasLegalBasis))
(DataPropertyDomain :hasLegalBasis :AISystem)
(DataPropertyRange :hasLegalBasis xsd:string)

(Declaration (DataProperty :hasRegulatoryScope))
(DataPropertyDomain :hasRegulatoryScope :AISystem)
(DataPropertyRange :hasRegulatoryScope xsd:string)

;; Annotations
(AnnotationAssertion rdfs:label :AISystem "AI System (EU Definition)"@en)
(AnnotationAssertion rdfs:comment :AISystem
  "A machine-based system that can operate autonomously and adapt after deployment, generating outputs like predictions or decisions. Foundation definition for EU AI Act regulatory coverage."@en)
(AnnotationAssertion :regulatorySource :AISystem "EU AI Act Article 3(1), OECD AI Definition 2024"^^xsd:string)
(AnnotationAssertion :ontologyID :AISystem "AI-0116"^^xsd:string)
```

## See Also

- EU AI Act Regulation (EU) 2024/1689
- OECD AI Principles 2024 Recommendation
- AI System Lifecycle (AI-0180)
	-
	- ### Original Content
	  collapsed:: true
		- ```
# AI System (EU Definition)
		  
		  **Ontology ID**: AI-0116
		  **Category**: Core Definitions
		  **Last Updated**: 2025-10-27
		  
		  ## Definition
		  
		  A machine-based system that can operate autonomously and adapt after deployment, generating outputs like predictions or decisions.
		  
		  ## Source
		  
		  **Primary**: EU AI Act Article 3(1)
		  **Reference**: OECD AI Definition 2024
		  
		  ## Regulatory Context
		  
		  Foundation definition for all AI regulation under the EU AI Act. This definition establishes the scope of regulatory coverage and determines which systems fall under the Act's requirements.
		  
		  ## Key Characteristics
		  
		  - **Machine-based**: Operates through computational systems
		  - **Autonomy**: Can function with varying degrees of independence
		  - **Adaptability**: Capability to modify behaviour after deployment
		  - **Output generation**: Produces predictions, decisions, or content
		  
		  ## Scope
		  
		  Applies to all systems deployed in the EU market, regardless of:
		  - Location of provider
		  - Whether provided for payment or free of charge
		  - Physical or virtual deployment
		  
		  ## Related Concepts
		  
		  - **General-Purpose AI Model** (AI-0117): Subset with broad capabilities
		  - **High-Risk AI System** (AI-0118): Classification triggering strict requirements
		  - **Prohibited AI Practice** (AI-0119): Systems whose use is forbidden
		  
		  ## Legal Implications
		  
		  Systems meeting this definition are subject to:
		  - Transparency obligations (Article 50)
		  - Risk-based classification framework (Articles 5-6)
		  - Provider and deployer responsibilities (Articles 16, 26)
		  
		  ## Regulatory Updates
		  
		  The 2024 OECD revision expanded the definition to explicitly address general-purpose and generative AI systems, influencing EU Act interpretation.
		  
		  ## Enforcement
		  
		  **Effective Date**: 2 August 2024 (entry into force)
		  **Full Application**: 2 August 2026 (most provisions)
		  
		  ## OWL Formal Ontology
		  
		  ```clojure
		  ;; Class Declaration
		  (Declaration (Class :AISystem))
		  
		  ;; Subclass Axiom
		  (SubClassOf :AISystem :TechnologicalSystem)
		  
		  ;; Core Characteristics as Restrictions
		  (SubClassOf :AISystem
		    (ObjectAllValuesFrom :operatesVia :ComputationalMechanism))
		  
		  (SubClassOf :AISystem
		    (ObjectSomeValuesFrom :hasCapability :AutonomousOperation))
		  
		  (SubClassOf :AISystem
		    (ObjectSomeValuesFrom :hasCapability :PostDeploymentAdaptation))
		  
		  (SubClassOf :AISystem
		    (ObjectSomeValuesFrom :generates :AIOutput))
		  
		  ;; EU AI Act Compliance Properties
		  (SubClassOf :AISystem
		    (ObjectSomeValuesFrom :subjectToRegulation :EUAIAct))
		  
		  (DataPropertyAssertion :hasLegalBasis :AISystem
		    "EU Regulation 2024/1689 Article 3(1)"^^xsd:string)
		  
		  (DataPropertyAssertion :hasRegulatoryScope :AISystem
		    "All systems deployed in EU market regardless of provider location"^^xsd:string)
		  
		  ;; OECD Alignment
		  (SubClassOf :AISystem
		    (ObjectSomeValuesFrom :alignsWith :OECDAIDefinition2024))
		  
		  ;; Output Types
		  (Declaration (Class :AIOutput))
		  (SubClassOf :Prediction :AIOutput)
		  (SubClassOf :Decision :AIOutput)
		  (SubClassOf :GeneratedContent :AIOutput)
		  
		  ;; Capability Classes
		  (Declaration (Class :AutonomousOperation))
		  (Declaration (Class :PostDeploymentAdaptation))
		  
		  ;; Regulatory Relationships
		  (Declaration (ObjectProperty :subjectToRegulation))
		  (ObjectPropertyDomain :subjectToRegulation :AISystem)
		  (ObjectPropertyRange :subjectToRegulation :RegulatoryFramework)
		  
		  ;; Data Properties
		  (Declaration (DataProperty :hasLegalBasis))
		  (DataPropertyDomain :hasLegalBasis :AISystem)
		  (DataPropertyRange :hasLegalBasis xsd:string)
		  
		  (Declaration (DataProperty :hasRegulatoryScope))
		  (DataPropertyDomain :hasRegulatoryScope :AISystem)
		  (DataPropertyRange :hasRegulatoryScope xsd:string)
		  
		  ;; Annotations
		  (AnnotationAssertion rdfs:label :AISystem "AI System (EU Definition)"@en)
		  (AnnotationAssertion rdfs:comment :AISystem
		    "A machine-based system that can operate autonomously and adapt after deployment, generating outputs like predictions or decisions. Foundation definition for EU AI Act regulatory coverage."@en)
		  (AnnotationAssertion :regulatorySource :AISystem "EU AI Act Article 3(1), OECD AI Definition 2024"^^xsd:string)
		  (AnnotationAssertion :ontologyID :AISystem "AI-0116"^^xsd:string)
		  ```
		  
		  ## See Also
		  
		  - EU AI Act Regulation (EU) 2024/1689
		  - OECD AI Principles 2024 Recommendation
		  - AI System Lifecycle (AI-0180)
		  
		  ```

- public-access:: true
	- definition:: A machine-based system that can operate autonomously and adapt after deployment, generating outputs like predictions or decisions.



## Academic Context

- The EU Artificial Intelligence Act (AI Act), finalised in 2024, provides the first comprehensive legal definition and regulatory framework for AI systems within the European Union.
  - The Act defines an AI system as a **machine-based system** designed to operate with varying levels of autonomy, capable of adaptiveness post-deployment, and generating outputs such as predictions, content, recommendations, or decisions that influence physical or virtual environments[1][5][7].
  - This definition builds on academic foundations in AI autonomy, adaptiveness, and inferential capabilities, distinguishing AI systems from traditional software by their ability to learn and reason autonomously[5].
  - The Act’s definition reflects consensus from international bodies including OECD, NIST, and ISO, emphasising reasoning and learning as core AI traits[5].

## Current Landscape (2025)

- Industry adoption of AI systems under the EU AI Act is accelerating, with regulatory compliance becoming a key focus for developers and users.
  - Notable organisations such as IBM and Meta have adapted their general-purpose AI models (e.g., IBM’s Granite, Meta’s Llama 3) to meet the Act’s requirements[3].
  - The Act categorises AI applications by risk: unacceptable risk (banned), high risk (strictly regulated), and low/minimal risk (largely unregulated)[4][6].
  - High-risk AI systems include those used in critical infrastructure, education, employment, law enforcement, and healthcare, requiring pre-market assessment and ongoing monitoring[6].
- Technical capabilities of AI systems continue to evolve, with increasing autonomy and adaptiveness balanced against limitations in transparency and explainability.
- Standards and frameworks are emerging to support compliance, including EU guidelines clarifying the seven elements of the AI system definition and risk management protocols[1][5].

## Research & Literature

- Key academic sources underpinning the EU AI Act’s definition and regulatory approach include:
  - European Commission (2025). *Guidelines on the Definition of an AI System*. Global Policy Watch. DOI: Not available; URL: https://www.globalpolicywatch.com/2025/06/european-commission-guidelines-on-the-definition-of-an-ai-system/[1]
  - Deloitte (2024). *Defining AI under the EU AI Act: Clarity for Compliance and Innovation*. Deloitte Insights. URL: https://www.deloitte.com/lu/en/Industries/technology/perspectives/defining-ai-under-the-eu-ai-act.html[5]
  - European Parliament (2023). *EU AI Act: First Regulation on Artificial Intelligence*. URL: https://www.europarl.europa.eu/topics/en/article/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence[6]
- Ongoing research focuses on improving AI transparency, mitigating bias, and enhancing adaptive learning while ensuring compliance with evolving legal standards.

## UK Context

- Although the UK is no longer an EU member, it closely monitors and often aligns with EU AI regulatory developments to maintain trade and innovation synergies.
- Northern England, including innovation hubs in Manchester, Leeds, Newcastle, and Sheffield, is actively developing AI systems that balance autonomy with ethical considerations.
  - Manchester’s AI research centres collaborate with industry to develop adaptive AI for healthcare diagnostics and urban planning.
  - Leeds and Sheffield focus on AI applications in manufacturing and logistics, emphasising compliance with emerging standards akin to the EU AI Act.
  - Newcastle’s AI initiatives include smart city projects utilising AI systems that adapt to real-time environmental data, mindful of privacy and ethical constraints.
- UK academic institutions contribute to AI governance research, often referencing the EU AI Act as a benchmark for responsible AI development.

## Future Directions

- Emerging trends include the refinement of general-purpose AI models under stricter regulatory scrutiny and the integration of AI literacy requirements for users.
- Anticipated challenges involve balancing innovation with risk mitigation, particularly in high-risk sectors such as law enforcement and healthcare.
- Research priorities focus on explainability, robustness against adversarial attacks, and harmonising international AI regulations to avoid a patchwork of conflicting standards.
- A subtle reminder: as AI systems become more autonomous, one hopes they don’t develop a sense of humour—lest they start rewriting their own regulations!

## References

1. European Commission. (2025). *Guidelines on the Definition of an AI System*. Global Policy Watch. Retrieved June 2025, from https://www.globalpolicywatch.com/2025/06/european-commission-guidelines-on-the-definition-of-an-ai-system/

2. Deloitte. (2024). *Defining AI under the EU AI Act: Clarity for Compliance and Innovation*. Deloitte Insights. Retrieved 2024, from https://www.deloitte.com/lu/en/Industries/technology/perspectives/defining-ai-under-the-eu-ai-act.html

3. IBM. (2024). *What is the EU AI Act?* IBM Think. Retrieved 2024, from https://www.ibm.com/think/topics/eu-ai-act

4. European Parliament. (2023). *EU AI Act: First Regulation on Artificial Intelligence*. European Parliament Topics. Retrieved 2023, from https://www.europarl.europa.eu/topics/en/article/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence

5. Artificial Intelligence Act. (n.d.). *Article 3: Definitions*. Retrieved 2025, from https://artificialintelligenceact.eu/article/3/

6. FeedbackFruits. (2024). *What is the EU AI Act? A comprehensive overview*. Retrieved 2024, from https://feedbackfruits.com/blog/from-regulation-to-innovation-what-the-eu-ai-act-means-for-edtech


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
