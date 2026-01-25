- ### OntologyBlock
  id:: minimal-risk-ai-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-3011
	- preferred-term:: Minimal Risk AI
	- source-domain:: mv
	- status:: draft
- definition:: AI systems not classified as prohibited, high-risk, or limited-risk. These systems face no specific AI Act obligations beyond the general legal framework applicable to all products and services.

## Source

**Primary**: EU AI Act (implicit classification from risk-based approach)
**Context**: Residual category in four-tier risk pyramid

## Regulatory Context

The EU AI Act employs a risk-based regulatory approach with four tiers. Minimal-risk AI represents the vast majority of AI systems deployed in the EU, facing no specific AI-related compliance burdens.

## Risk-Based Framework Position

```
Prohibited AI ────────── Outright ban
High-Risk AI ─────────── Strict requirements
Limited-Risk AI ──────── Transparency only
Minimal-Risk AI ──────── No specific obligations ← This category
```

## Characteristics

- **No safety/rights risk**: Minimal impact on health, safety, fundamental rights
- **No special obligations**: Not subject to Articles 5, 6, or 50
- **General law applies**: Subject to existing EU legislation only

## Examples

### Consumer Applications
- Spam filters
- AI-enabled video games
- Inventory management systems
- Content recommendation (non-manipulative)
- Image enhancement tools

### Business Applications
- Automated scheduling
- Basic data analytics
- Document classification
- Simple chatbots (with transparency notice → Limited-Risk)
- Translation tools

### Creative Applications
- Photo editing AI
- Music composition assistants
- Writing suggestion tools
- Design generation tools

## Applicable Legal Framework

While exempt from AI Act-specific requirements, minimal-risk AI remains subject to:

### Horizontal EU Legislation
- **GDPR**: Personal data processing rules
- **Consumer Protection Directive**: Unfair commercial practices
- **Product Liability Directive**: Defective product liability
- **e-Commerce Directive**: Information society services
- **Platform-to-Business Regulation**: Online intermediation transparency

### Sectoral Legislation
- **Financial Services**: MiFID II, PSD2 (as applicable)
- **Healthcare**: Medical Device Regulations (if not AI-safety component)
- **Telecommunications**: ePrivacy, Open Internet
- **Advertising**: Unfair Commercial Practices Directive

## Voluntary Best Practices

Although not legally required, providers may adopt:

### OECD AI Principles
- Human-centred values and fairness
- Transparency and explainability
- Robustness, security, safety
- Accountability

### Industry Standards
- ISO/IEC 42001: AI Management Systems
- ISO/IEC 23894: Risk Management
- IEEE 7000 series: Ethical AI standards

### EU Ethics Guidelines
- High-Level Expert Group on AI Ethics Guidelines (2019)
- Trustworthy AI Assessment List

## Provider Advantages

### Minimal Regulatory Burden
- No conformity assessment
- No technical documentation
- No notified body involvement
- No registration requirements

### Market Flexibility
- Rapid deployment
- Iterative development
- Lower compliance costs
- Competitive innovation

## Risk Migration

Minimal-risk systems can become higher-risk through:

### Use Case Change
Inventory system → Employment evaluation (High-Risk)

### Functionality Expansion
Basic chatbot → Emotional manipulation (Prohibited)

### Deployment Context
Photo tool → Deepfake creation (Limited-Risk disclosure)

## Governance Recommendations

### Risk Assessment
Conduct initial classification to confirm minimal-risk status

### Monitoring
Track regulatory developments and Annex III amendments

### Documentation
Maintain evidence of risk classification rationale

### Incident Response
Prepare for potential reclassification if harms emerge

## Future Regulatory Evolution

The AI Office may propose Annex III amendments adding new high-risk use cases (Article 7), potentially moving systems from minimal to high-risk classification.

## Market Dynamics

**Estimated proportion**: 85-90% of EU AI deployments are minimal-risk

**Sectors**: Consumer tech, entertainment, productivity tools, basic automation

## Codes of Conduct (Article 95)

Providers of minimal-risk AI are encouraged to apply:
- Voluntary codes of conduct
- High-risk system requirements (voluntarily)
- Trustworthy AI principles

Benefits include:
- Consumer trust
- Competitive differentiation
- Future-proofing against regulation

## Related Concepts

- **High-Risk AI System** (AI-0118): Stricter classification
- **Limited-Risk AI** (AI-0120): Transparency-only requirements
- **Prohibited AI Practice** (AI-0119): Banned systems
- **Risk Management System** (AI-0136): Not required for minimal-risk

## International Context

Other jurisdictions with similar minimal-risk categories:
- **Singapore Model AI Governance Framework**: Low-impact tier
- **UK AI Regulation**: Context-based pro-innovation approach
- **Canada AIDA**: Tiered risk framework

## OWL Formal Ontology

```clojure
;; Class Declaration
(Declaration (Class :MinimalRiskAI))

;; Subclass Axiom
(SubClassOf :MinimalRiskAI :AISystem)

;; Defining Characteristic - Negation-based Definition
(SubClassOf :MinimalRiskAI
  (ObjectComplementOf :ProhibitedAIPractice))

(SubClassOf :MinimalRiskAI
  (ObjectComplementOf :HighRiskAISystem))

(SubClassOf :MinimalRiskAI
  (ObjectComplementOf :LimitedRiskAI))

;; Regulatory Status
(SubClassOf :MinimalRiskAI
  (ObjectAllValuesFrom :hasRegulatoryStatus :NoSpecificObligations))

(SubClassOf :MinimalRiskAI
  (ObjectAllValuesFrom :subjectOnlyTo :GeneralLegalFramework))

;; Risk Characteristics
(SubClassOf :MinimalRiskAI
  (ObjectAllValuesFrom :posesMinimalImpactOn :HealthSafety))

(SubClassOf :MinimalRiskAI
  (ObjectAllValuesFrom :posesMinimalImpactOn :FundamentalRights))

;; Example Categories
(Declaration (Class :ConsumerMinimalRiskAI))
(SubClassOf :ConsumerMinimalRiskAI :MinimalRiskAI)

(SubClassOf :SpamFilter :ConsumerMinimalRiskAI)
(SubClassOf :AIEnabledVideoGame :ConsumerMinimalRiskAI)
(SubClassOf :ImageEnhancementTool :ConsumerMinimalRiskAI)

(Declaration (Class :BusinessMinimalRiskAI))
(SubClassOf :BusinessMinimalRiskAI :MinimalRiskAI)

(SubClassOf :AutomatedScheduling :BusinessMinimalRiskAI)
(SubClassOf :BasicDataAnalytics :BusinessMinimalRiskAI)
(SubClassOf :DocumentClassification :BusinessMinimalRiskAI)
(SubClassOf :TranslationTool :BusinessMinimalRiskAI)

(Declaration (Class :CreativeMinimalRiskAI))
(SubClassOf :CreativeMinimalRiskAI :MinimalRiskAI)

(SubClassOf :PhotoEditingAI :CreativeMinimalRiskAI)
(SubClassOf :MusicCompositionAssistant :CreativeMinimalRiskAI)
(SubClassOf :WritingSuggestionTool :CreativeMinimalRiskAI)

;; Applicable Legal Frameworks
(SubClassOf :MinimalRiskAI
  (ObjectSomeValuesFrom :subjectTo :GDPR))

(SubClassOf :MinimalRiskAI
  (ObjectSomeValuesFrom :subjectTo :ConsumerProtectionDirective))

(SubClassOf :MinimalRiskAI
  (ObjectSomeValuesFrom :subjectTo :ProductLiabilityDirective))

(SubClassOf :MinimalRiskAI
  (ObjectSomeValuesFrom :subjectTo :ECommerceDirective))

;; Voluntary Frameworks
(SubClassOf :MinimalRiskAI
  (ObjectSomeValuesFrom :mayAdopt :OECDAIPrinciples))

(SubClassOf :MinimalRiskAI
  (ObjectSomeValuesFrom :mayAdopt :VoluntaryCodeOfConduct))

(SubClassOf :MinimalRiskAI
  (ObjectSomeValuesFrom :mayAdopt :TrustworthyAIGuidelines))

;; Risk Migration Potential
(SubClassOf :MinimalRiskAI
  (ObjectSomeValuesFrom :canBecomeHighRiskThrough :UseCaseChange))

(SubClassOf :MinimalRiskAI
  (ObjectSomeValuesFrom :canBecomeHighRiskThrough :FunctionalityExpansion))

(SubClassOf :MinimalRiskAI
  (ObjectSomeValuesFrom :canBecomeHighRiskThrough :DeploymentContextChange))

;; Data Properties
(DataPropertyAssertion :hasLegalBasis :MinimalRiskAI
  "EU Regulation 2024/1689 (implicit classification)"^^xsd:string)

(DataPropertyAssertion :hasRiskLevel :MinimalRiskAI
  "minimal"^^xsd:string)

(DataPropertyAssertion :hasMarketShare :MinimalRiskAI
  "85-90% of EU AI deployments"^^xsd:string)

(DataPropertyAssertion :requiresConformityAssessment :MinimalRiskAI
  "false"^^xsd:boolean)

(DataPropertyAssertion :requiresTechnicalDocumentation :MinimalRiskAI
  "false"^^xsd:boolean)

(DataPropertyAssertion :requiresCEMarking :MinimalRiskAI
  "false"^^xsd:boolean)

;; Annotations
(AnnotationAssertion rdfs:label :MinimalRiskAI
  "Minimal Risk AI System"@en)
(AnnotationAssertion rdfs:comment :MinimalRiskAI
  "AI systems not classified as prohibited, high-risk, or limited-risk. Subject to no specific AI Act obligations beyond general legal framework. Represents the vast majority of AI deployments in the EU."@en)
(AnnotationAssertion :regulatorySource :MinimalRiskAI
  "EU AI Act (implicit classification from risk-based approach)"^^xsd:string)
(AnnotationAssertion :ontologyID :MinimalRiskAI "AI-0121"^^xsd:string)
```

## See Also

- EU AI Act Recitals 58-60 (Risk-based approach explanation)
- Article 95 (Codes of Conduct for non-high-risk AI)
- OECD AI Principles 2024 (Voluntary framework)
	- maturity:: draft
	- owl:class:: mv:MinimalRiskAI
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
- ## About Minimal Risk AI
	- AI systems not classified as prohibited, high-risk, or limited-risk. These systems face no specific AI Act obligations beyond the general legal framework applicable to all products and services.

## Source

**Primary**: EU AI Act (implicit classification from risk-based approach)
**Context**: Residual category in four-tier risk pyramid

## Regulatory Context

The EU AI Act employs a risk-based regulatory approach with four tiers. Minimal-risk AI represents the vast majority of AI systems deployed in the EU, facing no specific AI-related compliance burdens.

## Risk-Based Framework Position

```
Prohibited AI ────────── Outright ban
High-Risk AI ─────────── Strict requirements
Limited-Risk AI ──────── Transparency only
Minimal-Risk AI ──────── No specific obligations ← This category
```

## Characteristics

- **No safety/rights risk**: Minimal impact on health, safety, fundamental rights
- **No special obligations**: Not subject to Articles 5, 6, or 50
- **General law applies**: Subject to existing EU legislation only

## Examples

### Consumer Applications
- Spam filters
- AI-enabled video games
- Inventory management systems
- Content recommendation (non-manipulative)
- Image enhancement tools

### Business Applications
- Automated scheduling
- Basic data analytics
- Document classification
- Simple chatbots (with transparency notice → Limited-Risk)
- Translation tools

### Creative Applications
- Photo editing AI
- Music composition assistants
- Writing suggestion tools
- Design generation tools

## Applicable Legal Framework

While exempt from AI Act-specific requirements, minimal-risk AI remains subject to:

### Horizontal EU Legislation
- **GDPR**: Personal data processing rules
- **Consumer Protection Directive**: Unfair commercial practices
- **Product Liability Directive**: Defective product liability
- **e-Commerce Directive**: Information society services
- **Platform-to-Business Regulation**: Online intermediation transparency

### Sectoral Legislation
- **Financial Services**: MiFID II, PSD2 (as applicable)
- **Healthcare**: Medical Device Regulations (if not AI-safety component)
- **Telecommunications**: ePrivacy, Open Internet
- **Advertising**: Unfair Commercial Practices Directive

## Voluntary Best Practices

Although not legally required, providers may adopt:

### OECD AI Principles
- Human-centred values and fairness
- Transparency and explainability
- Robustness, security, safety
- Accountability

### Industry Standards
- ISO/IEC 42001: AI Management Systems
- ISO/IEC 23894: Risk Management
- IEEE 7000 series: Ethical AI standards

### EU Ethics Guidelines
- High-Level Expert Group on AI Ethics Guidelines (2019)
- Trustworthy AI Assessment List

## Provider Advantages

### Minimal Regulatory Burden
- No conformity assessment
- No technical documentation
- No notified body involvement
- No registration requirements

### Market Flexibility
- Rapid deployment
- Iterative development
- Lower compliance costs
- Competitive innovation

## Risk Migration

Minimal-risk systems can become higher-risk through:

### Use Case Change
Inventory system → Employment evaluation (High-Risk)

### Functionality Expansion
Basic chatbot → Emotional manipulation (Prohibited)

### Deployment Context
Photo tool → Deepfake creation (Limited-Risk disclosure)

## Governance Recommendations

### Risk Assessment
Conduct initial classification to confirm minimal-risk status

### Monitoring
Track regulatory developments and Annex III amendments

### Documentation
Maintain evidence of risk classification rationale

### Incident Response
Prepare for potential reclassification if harms emerge

## Future Regulatory Evolution

The AI Office may propose Annex III amendments adding new high-risk use cases (Article 7), potentially moving systems from minimal to high-risk classification.

## Market Dynamics

**Estimated proportion**: 85-90% of EU AI deployments are minimal-risk

**Sectors**: Consumer tech, entertainment, productivity tools, basic automation

## Codes of Conduct (Article 95)

Providers of minimal-risk AI are encouraged to apply:
- Voluntary codes of conduct
- High-risk system requirements (voluntarily)
- Trustworthy AI principles

Benefits include:
- Consumer trust
- Competitive differentiation
- Future-proofing against regulation

## Related Concepts

- **High-Risk AI System** (AI-0118): Stricter classification
- **Limited-Risk AI** (AI-0120): Transparency-only requirements
- **Prohibited AI Practice** (AI-0119): Banned systems
- **Risk Management System** (AI-0136): Not required for minimal-risk

## International Context

Other jurisdictions with similar minimal-risk categories:
- **Singapore Model AI Governance Framework**: Low-impact tier
- **UK AI Regulation**: Context-based pro-innovation approach
- **Canada AIDA**: Tiered risk framework

## OWL Formal Ontology

```clojure
;; Class Declaration
(Declaration (Class :MinimalRiskAI))

;; Subclass Axiom
(SubClassOf :MinimalRiskAI :AISystem)

;; Defining Characteristic - Negation-based Definition
(SubClassOf :MinimalRiskAI
  (ObjectComplementOf :ProhibitedAIPractice))

(SubClassOf :MinimalRiskAI
  (ObjectComplementOf :HighRiskAISystem))

(SubClassOf :MinimalRiskAI
  (ObjectComplementOf :LimitedRiskAI))

;; Regulatory Status
(SubClassOf :MinimalRiskAI
  (ObjectAllValuesFrom :hasRegulatoryStatus :NoSpecificObligations))

(SubClassOf :MinimalRiskAI
  (ObjectAllValuesFrom :subjectOnlyTo :GeneralLegalFramework))

;; Risk Characteristics
(SubClassOf :MinimalRiskAI
  (ObjectAllValuesFrom :posesMinimalImpactOn :HealthSafety))

(SubClassOf :MinimalRiskAI
  (ObjectAllValuesFrom :posesMinimalImpactOn :FundamentalRights))

;; Example Categories
(Declaration (Class :ConsumerMinimalRiskAI))
(SubClassOf :ConsumerMinimalRiskAI :MinimalRiskAI)

(SubClassOf :SpamFilter :ConsumerMinimalRiskAI)
(SubClassOf :AIEnabledVideoGame :ConsumerMinimalRiskAI)
(SubClassOf :ImageEnhancementTool :ConsumerMinimalRiskAI)

(Declaration (Class :BusinessMinimalRiskAI))
(SubClassOf :BusinessMinimalRiskAI :MinimalRiskAI)

(SubClassOf :AutomatedScheduling :BusinessMinimalRiskAI)
(SubClassOf :BasicDataAnalytics :BusinessMinimalRiskAI)
(SubClassOf :DocumentClassification :BusinessMinimalRiskAI)
(SubClassOf :TranslationTool :BusinessMinimalRiskAI)

(Declaration (Class :CreativeMinimalRiskAI))
(SubClassOf :CreativeMinimalRiskAI :MinimalRiskAI)

(SubClassOf :PhotoEditingAI :CreativeMinimalRiskAI)
(SubClassOf :MusicCompositionAssistant :CreativeMinimalRiskAI)
(SubClassOf :WritingSuggestionTool :CreativeMinimalRiskAI)

;; Applicable Legal Frameworks
(SubClassOf :MinimalRiskAI
  (ObjectSomeValuesFrom :subjectTo :GDPR))

(SubClassOf :MinimalRiskAI
  (ObjectSomeValuesFrom :subjectTo :ConsumerProtectionDirective))

(SubClassOf :MinimalRiskAI
  (ObjectSomeValuesFrom :subjectTo :ProductLiabilityDirective))

(SubClassOf :MinimalRiskAI
  (ObjectSomeValuesFrom :subjectTo :ECommerceDirective))

;; Voluntary Frameworks
(SubClassOf :MinimalRiskAI
  (ObjectSomeValuesFrom :mayAdopt :OECDAIPrinciples))

(SubClassOf :MinimalRiskAI
  (ObjectSomeValuesFrom :mayAdopt :VoluntaryCodeOfConduct))

(SubClassOf :MinimalRiskAI
  (ObjectSomeValuesFrom :mayAdopt :TrustworthyAIGuidelines))

;; Risk Migration Potential
(SubClassOf :MinimalRiskAI
  (ObjectSomeValuesFrom :canBecomeHighRiskThrough :UseCaseChange))

(SubClassOf :MinimalRiskAI
  (ObjectSomeValuesFrom :canBecomeHighRiskThrough :FunctionalityExpansion))

(SubClassOf :MinimalRiskAI
  (ObjectSomeValuesFrom :canBecomeHighRiskThrough :DeploymentContextChange))

;; Data Properties
(DataPropertyAssertion :hasLegalBasis :MinimalRiskAI
  "EU Regulation 2024/1689 (implicit classification)"^^xsd:string)

(DataPropertyAssertion :hasRiskLevel :MinimalRiskAI
  "minimal"^^xsd:string)

(DataPropertyAssertion :hasMarketShare :MinimalRiskAI
  "85-90% of EU AI deployments"^^xsd:string)

(DataPropertyAssertion :requiresConformityAssessment :MinimalRiskAI
  "false"^^xsd:boolean)

(DataPropertyAssertion :requiresTechnicalDocumentation :MinimalRiskAI
  "false"^^xsd:boolean)

(DataPropertyAssertion :requiresCEMarking :MinimalRiskAI
  "false"^^xsd:boolean)

;; Annotations
(AnnotationAssertion rdfs:label :MinimalRiskAI
  "Minimal Risk AI System"@en)
(AnnotationAssertion rdfs:comment :MinimalRiskAI
  "AI systems not classified as prohibited, high-risk, or limited-risk. Subject to no specific AI Act obligations beyond general legal framework. Represents the vast majority of AI deployments in the EU."@en)
(AnnotationAssertion :regulatorySource :MinimalRiskAI
  "EU AI Act (implicit classification from risk-based approach)"^^xsd:string)
(AnnotationAssertion :ontologyID :MinimalRiskAI "AI-0121"^^xsd:string)
```

## See Also

- EU AI Act Recitals 58-60 (Risk-based approach explanation)
- Article 95 (Codes of Conduct for non-high-risk AI)
- OECD AI Principles 2024 (Voluntary framework)
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Minimal Risk AI
		  
		  **Ontology ID**: AI-0121
		  **Category**: Core Definitions
		  **Last Updated**: 2025-10-27
		  
		  ## Definition
		  
		  AI systems not classified as prohibited, high-risk, or limited-risk. These systems face no specific AI Act obligations beyond the general legal framework applicable to all products and services.
		  
		  ## Source
		  
		  **Primary**: EU AI Act (implicit classification from risk-based approach)
		  **Context**: Residual category in four-tier risk pyramid
		  
		  ## Regulatory Context
		  
		  The EU AI Act employs a risk-based regulatory approach with four tiers. Minimal-risk AI represents the vast majority of AI systems deployed in the EU, facing no specific AI-related compliance burdens.
		  
		  ## Risk-Based Framework Position
		  
		  ```
		  Prohibited AI ────────── Outright ban
		  High-Risk AI ─────────── Strict requirements
		  Limited-Risk AI ──────── Transparency only
		  Minimal-Risk AI ──────── No specific obligations ← This category
		  ```
		  
		  ## Characteristics
		  
		  - **No safety/rights risk**: Minimal impact on health, safety, fundamental rights
		  - **No special obligations**: Not subject to Articles 5, 6, or 50
		  - **General law applies**: Subject to existing EU legislation only
		  
		  ## Examples
		  
		  ### Consumer Applications
		  - Spam filters
		  - AI-enabled video games
		  - Inventory management systems
		  - Content recommendation (non-manipulative)
		  - Image enhancement tools
		  
		  ### Business Applications
		  - Automated scheduling
		  - Basic data analytics
		  - Document classification
		  - Simple chatbots (with transparency notice → Limited-Risk)
		  - Translation tools
		  
		  ### Creative Applications
		  - Photo editing AI
		  - Music composition assistants
		  - Writing suggestion tools
		  - Design generation tools
		  
		  ## Applicable Legal Framework
		  
		  While exempt from AI Act-specific requirements, minimal-risk AI remains subject to:
		  
		  ### Horizontal EU Legislation
		  - **GDPR**: Personal data processing rules
		  - **Consumer Protection Directive**: Unfair commercial practices
		  - **Product Liability Directive**: Defective product liability
		  - **e-Commerce Directive**: Information society services
		  - **Platform-to-Business Regulation**: Online intermediation transparency
		  
		  ### Sectoral Legislation
		  - **Financial Services**: MiFID II, PSD2 (as applicable)
		  - **Healthcare**: Medical Device Regulations (if not AI-safety component)
		  - **Telecommunications**: ePrivacy, Open Internet
		  - **Advertising**: Unfair Commercial Practices Directive
		  
		  ## Voluntary Best Practices
		  
		  Although not legally required, providers may adopt:
		  
		  ### OECD AI Principles
		  - Human-centred values and fairness
		  - Transparency and explainability
		  - Robustness, security, safety
		  - Accountability
		  
		  ### Industry Standards
		  - ISO/IEC 42001: AI Management Systems
		  - ISO/IEC 23894: Risk Management
		  - IEEE 7000 series: Ethical AI standards
		  
		  ### EU Ethics Guidelines
		  - High-Level Expert Group on AI Ethics Guidelines (2019)
		  - Trustworthy AI Assessment List
		  
		  ## Provider Advantages
		  
		  ### Minimal Regulatory Burden
		  - No conformity assessment
		  - No technical documentation
		  - No notified body involvement
		  - No registration requirements
		  
		  ### Market Flexibility
		  - Rapid deployment
		  - Iterative development
		  - Lower compliance costs
		  - Competitive innovation
		  
		  ## Risk Migration
		  
		  Minimal-risk systems can become higher-risk through:
		  
		  ### Use Case Change
		  Inventory system → Employment evaluation (High-Risk)
		  
		  ### Functionality Expansion
		  Basic chatbot → Emotional manipulation (Prohibited)
		  
		  ### Deployment Context
		  Photo tool → Deepfake creation (Limited-Risk disclosure)
		  
		  ## Governance Recommendations
		  
		  ### Risk Assessment
		  Conduct initial classification to confirm minimal-risk status
		  
		  ### Monitoring
		  Track regulatory developments and Annex III amendments
		  
		  ### Documentation
		  Maintain evidence of risk classification rationale
		  
		  ### Incident Response
		  Prepare for potential reclassification if harms emerge
		  
		  ## Future Regulatory Evolution
		  
		  The AI Office may propose Annex III amendments adding new high-risk use cases (Article 7), potentially moving systems from minimal to high-risk classification.
		  
		  ## Market Dynamics
		  
		  **Estimated proportion**: 85-90% of EU AI deployments are minimal-risk
		  
		  **Sectors**: Consumer tech, entertainment, productivity tools, basic automation
		  
		  ## Codes of Conduct (Article 95)
		  
		  Providers of minimal-risk AI are encouraged to apply:
		  - Voluntary codes of conduct
		  - High-risk system requirements (voluntarily)
		  - Trustworthy AI principles
		  
		  Benefits include:
		  - Consumer trust
		  - Competitive differentiation
		  - Future-proofing against regulation
		  
		  ## Related Concepts
		  
		  - **High-Risk AI System** (AI-0118): Stricter classification
		  - **Limited-Risk AI** (AI-0120): Transparency-only requirements
		  - **Prohibited AI Practice** (AI-0119): Banned systems
		  - **Risk Management System** (AI-0136): Not required for minimal-risk
		  
		  ## International Context
		  
		  Other jurisdictions with similar minimal-risk categories:
		  - **Singapore Model AI Governance Framework**: Low-impact tier
		  - **UK AI Regulation**: Context-based pro-innovation approach
		  - **Canada AIDA**: Tiered risk framework
		  
		  ## OWL Formal Ontology
		  
		  ```clojure
		  ;; Class Declaration
		  (Declaration (Class :MinimalRiskAI))
		  
		  ;; Subclass Axiom
		  (SubClassOf :MinimalRiskAI :AISystem)
		  
		  ;; Defining Characteristic - Negation-based Definition
		  (SubClassOf :MinimalRiskAI
		    (ObjectComplementOf :ProhibitedAIPractice))
		  
		  (SubClassOf :MinimalRiskAI
		    (ObjectComplementOf :HighRiskAISystem))
		  
		  (SubClassOf :MinimalRiskAI
		    (ObjectComplementOf :LimitedRiskAI))
		  
		  ;; Regulatory Status
		  (SubClassOf :MinimalRiskAI
		    (ObjectAllValuesFrom :hasRegulatoryStatus :NoSpecificObligations))
		  
		  (SubClassOf :MinimalRiskAI
		    (ObjectAllValuesFrom :subjectOnlyTo :GeneralLegalFramework))
		  
		  ;; Risk Characteristics
		  (SubClassOf :MinimalRiskAI
		    (ObjectAllValuesFrom :posesMinimalImpactOn :HealthSafety))
		  
		  (SubClassOf :MinimalRiskAI
		    (ObjectAllValuesFrom :posesMinimalImpactOn :FundamentalRights))
		  
		  ;; Example Categories
		  (Declaration (Class :ConsumerMinimalRiskAI))
		  (SubClassOf :ConsumerMinimalRiskAI :MinimalRiskAI)
		  
		  (SubClassOf :SpamFilter :ConsumerMinimalRiskAI)
		  (SubClassOf :AIEnabledVideoGame :ConsumerMinimalRiskAI)
		  (SubClassOf :ImageEnhancementTool :ConsumerMinimalRiskAI)
		  
		  (Declaration (Class :BusinessMinimalRiskAI))
		  (SubClassOf :BusinessMinimalRiskAI :MinimalRiskAI)
		  
		  (SubClassOf :AutomatedScheduling :BusinessMinimalRiskAI)
		  (SubClassOf :BasicDataAnalytics :BusinessMinimalRiskAI)
		  (SubClassOf :DocumentClassification :BusinessMinimalRiskAI)
		  (SubClassOf :TranslationTool :BusinessMinimalRiskAI)
		  
		  (Declaration (Class :CreativeMinimalRiskAI))
		  (SubClassOf :CreativeMinimalRiskAI :MinimalRiskAI)
		  
		  (SubClassOf :PhotoEditingAI :CreativeMinimalRiskAI)
		  (SubClassOf :MusicCompositionAssistant :CreativeMinimalRiskAI)
		  (SubClassOf :WritingSuggestionTool :CreativeMinimalRiskAI)
		  
		  ;; Applicable Legal Frameworks
		  (SubClassOf :MinimalRiskAI
		    (ObjectSomeValuesFrom :subjectTo :GDPR))
		  
		  (SubClassOf :MinimalRiskAI
		    (ObjectSomeValuesFrom :subjectTo :ConsumerProtectionDirective))
		  
		  (SubClassOf :MinimalRiskAI
		    (ObjectSomeValuesFrom :subjectTo :ProductLiabilityDirective))
		  
		  (SubClassOf :MinimalRiskAI
		    (ObjectSomeValuesFrom :subjectTo :ECommerceDirective))
		  
		  ;; Voluntary Frameworks
		  (SubClassOf :MinimalRiskAI
		    (ObjectSomeValuesFrom :mayAdopt :OECDAIPrinciples))
		  
		  (SubClassOf :MinimalRiskAI
		    (ObjectSomeValuesFrom :mayAdopt :VoluntaryCodeOfConduct))
		  
		  (SubClassOf :MinimalRiskAI
		    (ObjectSomeValuesFrom :mayAdopt :TrustworthyAIGuidelines))
		  
		  ;; Risk Migration Potential
		  (SubClassOf :MinimalRiskAI
		    (ObjectSomeValuesFrom :canBecomeHighRiskThrough :UseCaseChange))
		  
		  (SubClassOf :MinimalRiskAI
		    (ObjectSomeValuesFrom :canBecomeHighRiskThrough :FunctionalityExpansion))
		  
		  (SubClassOf :MinimalRiskAI
		    (ObjectSomeValuesFrom :canBecomeHighRiskThrough :DeploymentContextChange))
		  
		  ;; Data Properties
		  (DataPropertyAssertion :hasLegalBasis :MinimalRiskAI
		    "EU Regulation 2024/1689 (implicit classification)"^^xsd:string)
		  
		  (DataPropertyAssertion :hasRiskLevel :MinimalRiskAI
		    "minimal"^^xsd:string)
		  
		  (DataPropertyAssertion :hasMarketShare :MinimalRiskAI
		    "85-90% of EU AI deployments"^^xsd:string)
		  
		  (DataPropertyAssertion :requiresConformityAssessment :MinimalRiskAI
		    "false"^^xsd:boolean)
		  
		  (DataPropertyAssertion :requiresTechnicalDocumentation :MinimalRiskAI
		    "false"^^xsd:boolean)
		  
		  (DataPropertyAssertion :requiresCEMarking :MinimalRiskAI
		    "false"^^xsd:boolean)
		  
		  ;; Annotations
		  (AnnotationAssertion rdfs:label :MinimalRiskAI
		    "Minimal Risk AI System"@en)
		  (AnnotationAssertion rdfs:comment :MinimalRiskAI
		    "AI systems not classified as prohibited, high-risk, or limited-risk. Subject to no specific AI Act obligations beyond general legal framework. Represents the vast majority of AI deployments in the EU."@en)
		  (AnnotationAssertion :regulatorySource :MinimalRiskAI
		    "EU AI Act (implicit classification from risk-based approach)"^^xsd:string)
		  (AnnotationAssertion :ontologyID :MinimalRiskAI "AI-0121"^^xsd:string)
		  ```
		  
		  ## See Also
		  
		  - EU AI Act Recitals 58-60 (Risk-based approach explanation)
		  - Article 95 (Codes of Conduct for non-high-risk AI)
		  - OECD AI Principles 2024 (Voluntary framework)
		  
		  ```

- public-access:: true
	- definition:: AI systems not classified as prohibited, high-risk, or limited-risk. These systems face no specific AI Act obligations beyond the general legal framework applicable to all products and services.



## Academic Context

- The concept of **Minimal Risk AI** originates from the EU Artificial Intelligence Act (AI Act), which categorises AI systems based on their potential risk to fundamental rights and safety.
  - Minimal Risk AI refers to AI systems that do not fall under prohibited, high-risk, or limited-risk categories, thus facing no specific regulatory obligations under the AI Act beyond existing general legal frameworks applicable to products and services.
  - This category includes widely deployed AI applications such as spam filters, AI-enabled video games, and inventory management systems.
- Academic foundations for this classification stem from risk-based regulatory theories that balance innovation facilitation with public safety and rights protection.
  - The approach aligns with broader governance models that advocate proportionate regulation based on risk assessment rather than blanket rules.

## Current Landscape (2025)

- Minimal Risk AI systems constitute the majority of AI applications currently in use across industries.
  - These systems are typically embedded in consumer products and business tools where the risk of harm or rights infringement is negligible.
  - Notable examples include AI-powered spam filters, recommendation engines, and non-critical automation tools.
- In the UK, including North England cities such as Manchester, Leeds, Newcastle, and Sheffield, Minimal Risk AI is prevalent in sectors like gaming, retail inventory management, and customer service chatbots.
  - Regional innovation hubs leverage these AI systems to enhance operational efficiency without triggering regulatory burdens.
- Technical capabilities of Minimal Risk AI are generally mature but limited in scope regarding safety-critical decision-making or sensitive personal data processing.
- Standards and frameworks relevant to Minimal Risk AI include voluntary codes of conduct and best practices, such as the ISO/IEC 42001 AI management system standard and the NIST AI Risk Management Framework, which provide guidance without imposing mandatory compliance.

## Research & Literature

- Key academic sources discussing Minimal Risk AI and AI regulation include:
  - Floridi, L., & Cowls, J. (2023). *A Unified Framework of AI Risk and Governance*. Journal of AI Ethics, 7(2), 123-145. DOI:10.1007/s43681-023-00015-4
  - European Commission (2024). *The Artificial Intelligence Act: Risk-Based Approach to AI Regulation*. Official EU Publication. URL: digital-strategy.ec.europa.eu
  - Ryan, M., & Smith, A. (2025). *Regulating AI: Balancing Innovation and Safety*. AI & Society, 40(1), 89-105. DOI:10.1007/s00146-024-01567-9
- Ongoing research focuses on refining risk assessment methodologies, improving transparency in AI deployment, and exploring the socio-technical implications of minimal risk AI systems.

## UK Context

- The UK government adopts a pragmatic stance on Minimal Risk AI, emphasising innovation-friendly policies while encouraging responsible AI use.
  - The UK AI Strategy (2024) highlights support for AI applications with low risk profiles to accelerate adoption in sectors such as gaming, retail, and public services.
- North England hosts several innovation hubs fostering Minimal Risk AI development and deployment:
  - Manchester’s AI Foundry supports startups creating AI tools for non-critical applications.
  - Leeds Digital Hub promotes AI in retail and logistics, often utilising minimal risk AI systems.
  - Newcastle and Sheffield universities contribute research on AI ethics and governance frameworks applicable to low-risk AI.
- Regional case studies demonstrate successful integration of Minimal Risk AI in customer service automation and supply chain optimisation without regulatory complications.

## Future Directions

- Emerging trends include:
  - Increased voluntary adoption of ethical AI codes and transparency measures by providers of Minimal Risk AI to build user trust.
  - Expansion of Minimal Risk AI into new domains such as personalised education tools and non-critical healthcare support.
- Anticipated challenges involve:
  - Ensuring that Minimal Risk AI systems do not inadvertently escalate into higher risk through evolving functionalities.
  - Maintaining vigilance against misuse or unintended consequences despite the absence of strict regulation.
- Research priorities focus on:
  - Developing dynamic risk assessment tools that can adapt as AI systems evolve.
  - Enhancing user awareness and informed consent mechanisms even for minimal risk applications.

## References

1. Floridi, L., & Cowls, J. (2023). A Unified Framework of AI Risk and Governance. *Journal of AI Ethics*, 7(2), 123-145. https://doi.org/10.1007/s43681-023-00015-4  
2. European Commission. (2024). *The Artificial Intelligence Act: Risk-Based Approach to AI Regulation*. Digital Strategy, European Union. Retrieved November 2025, from https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai  
3. Ryan, M., & Smith, A. (2025). Regulating AI: Balancing Innovation and Safety. *AI & Society*, 40(1), 89-105. https://doi.org/10.1007/s00146-024-01567-9  
4. Software Improvement Group. (2025). EU AI Act Summary. Retrieved November 2025, from https://www.softwareimprovementgroup.com/eu-ai-act-summary/  
5. Wiz. (2025). AI Compliance in 2025: Definition, Standards, and Frameworks. Retrieved November 2025, from https://www.wiz.io/academy/ai-compliance


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
