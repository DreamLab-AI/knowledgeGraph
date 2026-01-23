- ### OntologyBlock
  id:: ai-risk-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0076
	- preferred-term:: AI Risk
	- source-domain:: mv
	- status:: draft
	- public-access:: true
	- definition:: The potential for AI systems to cause adverse effects on individuals, groups, organizations, communities, or society, arising from technical failures, security vulnerabilities, biased outcomes, privacy violations, or unintended consequences of system design, deployment, or operation.
	- maturity:: draft
	- owl:class:: mv:AIRisk
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]

- ## Definition and Scope

Artificial Intelligence Risk refers to the potential for AI systems to cause adverse effects on individuals, groups, organizations, communities, or society at large. These risks arise from technical failures, security vulnerabilities, biased outcomes, privacy violations, or unintended consequences during AI system design, deployment, or operation.

The academic foundations of AI risk management draw from computer science, ethics, cybersecurity, and social sciences, emphasizing interdisciplinary approaches to understand and mitigate harm. According to the NIST AI Risk Management Framework (AI RMF 1.0, January 2023), AI risk is defined as the composite measure of an event's probability of occurring and the magnitude or degree of the consequences of the corresponding event.

- ## Formal Specification

### Ontological Structure
- AI Risk is a subclass of general Risk with specific characteristics unique to artificial intelligence systems
- Core components include likelihood (probability of risk occurring), impact (severity of consequences), and context (domain and stakeholders affected)
- Risk types encompass technical, ethical, social, legal, security, and operational categories
- Standards alignment includes ISO/IEC 23894:2023, NIST AI RMF 1.0, EU AI Act (Regulation 2024/1689)

### Risk Properties
- AI risks require assessment of posesRiskTo, hasLikelihood, hasImpact, managedBy, and manifestsAs relationships
- Risk scoring ranges from 0.0 (no risk) to 1.0 (critical risk) based on composite assessment
- Risk levels categorized as unacceptable, high, limited, or minimal per EU AI Act framework

- ## Authoritative References

### Primary Standards and Frameworks

#### ISO/IEC 23894:2023 - AI Risk Management
Published February 2023, this comprehensive international standard for [[AI Risk Management]] adapts traditional risk management practices (ISO 31000) to AI's unique characteristics including opacity, complexity, autonomy, and data dependency. The standard gained widespread adoption throughout 2024-2025 as organizations sought structured risk management methodologies. Implementation requires cross-functional collaboration between data scientists, security professionals, legal counsel, and business leaders.

#### NIST AI Risk Management Framework (AI RMF 1.0)
Released January 2023, updated with Generative AI Profile (NIST-AI-600-1) on July 26, 2024. The Profile added over 200 specific actions addressing unique risks including CBRN information risks, confabulation (hallucinations), dangerous or hateful content generation, data privacy violations, information integrity issues (deepfakes), intellectual property infringement, and obscene content generation. This framework became essential for organizations deploying [[Large Language Models]], image generators, and multimodal systems.

#### EU AI Act (Regulation 2024/1689)
Finalized June 2024, entered into force August 1, 2024. The risk-based regulatory framework categorizes AI systems as unacceptable, high, limited, or minimal risk, establishing the global template for risk-proportionate regulation. **[Updated 2025]** Implementation proceeds on schedule with phased obligations. Prohibited practices became effective February 2, 2025. Major provisions including GPAI models, governance, and penalties apply from August 2, 2025. Full high-risk AI system requirements take effect August 2, 2026. Non-compliance penalties reach up to €35 million or 7% of worldwide annual turnover, whichever is higher.

- ## See Also
- [[AI Risk Management]]
- [[NIST AI RMF]]
- [[EU AI Act]]
- [[ISO/IEC 23894]]
- [[Algorithmic Bias]]
- [[AI Ethics]]
- [[AI Governance]]
