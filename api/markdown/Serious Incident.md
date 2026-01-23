- ### OntologyBlock
  id:: serious-incident-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: mv-1761742247968
	- preferred-term:: Serious Incident
	- source-domain:: mv
	- status:: draft
- definition:: An incident or malfunctioning of an AI system that directly or indirectly leads to death, serious health damage, serious disruption of critical infrastructure, or serious fundamental rights infringements.


## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :SeriousIncident))

;; Annotations
(AnnotationAssertion rdfs:label :SeriousIncident "Serious Incident"@en)
(AnnotationAssertion rdfs:comment :SeriousIncident "An incident or malfunctioning of an AI system that directly or indirectly leads to death, serious health damage, serious disruption of critical infrastructure, or serious fundamental rights infringements."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :SeriousIncident "mv-1761742247968"^^xsd:string)
```

## Source

**Primary**: EU AI Act Article 3(44)
**Reference**: Article 73 (Reporting Obligations)

## Regulatory Context

Serious incidents trigger mandatory reporting obligations for providers and deployers of high-risk AI systems and GPAI models with systemic risk. Reporting enables rapid regulatory response and market surveillance.

## Four Categories of Serious Incidents

### 1. Death
AI system malfunction or operation directly or indirectly causing:
- Loss of human life
- Contribution to fatal outcome

**Examples**:
- Autonomous vehicle fatal collision
- Medical diagnosis AI missed critical condition
- Critical infrastructure failure causing casualties

### 2. Serious Health Damage
Injury or health impairment requiring medical intervention:
- Serious physical injury
- Serious psychological harm
- Long-term health consequences

**Examples**:
- Surgical robot malfunction causing injury
- Incorrect medication dosage recommendation
- Mental health crisis from AI-driven content

### 3. Serious Disruption of Critical Infrastructure
Impairment of essential services:
- Energy supply interruption
- Transportation system failure
- Water/sanitation disruption
- Digital infrastructure outage
- Financial system instability

**Examples**:
- AI-managed grid causing blackout
- Air traffic control AI failure
- Banking system AI malfunction

### 4. Serious Fundamental Rights Infringements
Violation of Charter of Fundamental Rights including:
- **Non-discrimination**: Systematic bias causing exclusion
- **Privacy**: Unauthorised data exposure
- **Fair trial**: Wrongful conviction contribution
- **Freedom of expression**: Censorship or manipulation
- **Human dignity**: Degrading treatment

**Examples**:
- Hiring AI discriminating against protected groups
- Biometric system false positives leading to detention
- Social scoring causing service denial
- Emotion recognition causing stigmatisation

## Reporting Obligations

### For High-Risk AI Providers (Article 73(1))
**Timing**: Without undue delay upon awareness

**Recipient**:
- Market surveillance authorities of Member States where incident occurred
- AI Office (for certain categories)

**Content**:
- Incident description
- AI system identification
- Severity and consequences
- Affected persons (anonymised)
- Immediate measures taken
- Root cause analysis (if available)

### For High-Risk AI Deployers (Article 73(2))
**Trigger**: Serious incident during system use

**Recipient**: Provider and market surveillance authority

**Timing**: Without undue delay

### For GPAI Systemic Risk Models (Article 55(1)(c))
**Scope**: Serious incidents related to GPAI model

**Recipient**: AI Office

**Additional requirement**: Possible corrective measures disclosure

## "Without Undue Delay" Interpretation

While not precisely defined, Commission guidance suggests:
- **Initial notification**: Within 24-72 hours of awareness
- **Follow-up report**: Within 15 days with root cause analysis
- **Final report**: Comprehensive analysis within reasonable timeframe

## Information to Be Reported

### Minimum Elements
1. **System identification**: Name, version, CE marking details
2. **Incident description**: What happened, when, where
3. **Consequences**: Impact on health, safety, rights, infrastructure
4. **Affected parties**: Number and categories (anonymised)
5. **Immediate response**: Actions taken to mitigate harm
6. **Preliminary assessment**: Suspected causes

### Follow-Up Information
7. **Root cause analysis**: Technical investigation findings
8. **Corrective measures**: Permanent fixes implemented
9. **Preventive actions**: Steps to avoid recurrence
10. **Lessons learned**: Insights for sector

## Confidentiality and Data Protection

- **Anonymisation**: Personal data of affected persons
- **Confidentiality**: Commercial secrets protection
- **Cybersecurity**: Vulnerability details may be redacted
- **GDPR compliance**: Reporting consistent with data protection rules

## Market Surveillance Response

Upon receiving serious incident reports, authorities may:
- **Investigate**: Technical inspection, document review
- **Corrective measures**: Order product recall, modification
- **Market withdrawal**: Require removal from sale
- **Public warning**: Alert users and deployers
- **Sanctions**: Impose fines for non-compliance

## Non-Reporting Consequences

Failure to report serious incidents:
- **Penalties**: Up to €15 million or 3% of global turnover (Article 99)
- **Increased scrutiny**: Enhanced market surveillance
- **Liability**: Potential civil and criminal liability
- **Reputational damage**: Loss of trust

## Reporting Mechanisms

### National Level
Each Member State designates market surveillance authority with reporting portal.

### EU Level
AI Office coordinates cross-border incidents and GPAI reporting.

### Expected Infrastructure
Commission to establish:
- Standardised reporting templates
- Digital submission system
- Incident database (anonymised for research)

## Relationship to Other Reporting

### Medical Device Incidents (Regulation 2017/745)
AI in medical devices: Dual reporting to:
- AI Act authorities (serious incidents)
- Medical device vigilance systems

### Product Safety (GPSD)
Consumer products with AI: Coordinate with RAPEX alerts.

### Cybersecurity (NIS2 Directive)
Cyber incidents affecting AI: Report under both frameworks.

## Preventive Measures

### Risk Management Integration
Serious incident scenarios inform:
- Risk management system updates (Article 9)
- Post-market monitoring plans (Article 72)
- Testing and validation (Article 15)

### Industry Learning
Aggregated incident data enables:
- Sectoral safety improvements
- Standard development
- Best practice dissemination

## Related Concepts

- **Post-Market Monitoring** (AI-0151): Proactive surveillance
- **Corrective Action** (Provider obligation after incident)
- **Market Surveillance** (AI-0134): Authority enforcement
- **Risk Management System** (AI-0136): Preventive framework

## See Also

- EU AI Act Article 73 (Reporting of Serious Incidents)
- Commission Implementing Act on Reporting Format (expected 2026)
- Market Surveillance Regulation (EU) 2019/1020
	- maturity:: draft
	- owl:class:: mv:SeriousIncident
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
- ## About Serious Incident
	- An incident or malfunctioning of an AI system that directly or indirectly leads to death, serious health damage, serious disruption of critical infrastructure, or serious fundamental rights infringements.

## Source

**Primary**: EU AI Act Article 3(44)
**Reference**: Article 73 (Reporting Obligations)

## Regulatory Context

Serious incidents trigger mandatory reporting obligations for providers and deployers of high-risk AI systems and GPAI models with systemic risk. Reporting enables rapid regulatory response and market surveillance.

## Four Categories of Serious Incidents

### 1. Death
AI system malfunction or operation directly or indirectly causing:
- Loss of human life
- Contribution to fatal outcome

**Examples**:
- Autonomous vehicle fatal collision
- Medical diagnosis AI missed critical condition
- Critical infrastructure failure causing casualties

### 2. Serious Health Damage
Injury or health impairment requiring medical intervention:
- Serious physical injury
- Serious psychological harm
- Long-term health consequences

**Examples**:
- Surgical robot malfunction causing injury
- Incorrect medication dosage recommendation
- Mental health crisis from AI-driven content

### 3. Serious Disruption of Critical Infrastructure
Impairment of essential services:
- Energy supply interruption
- Transportation system failure
- Water/sanitation disruption
- Digital infrastructure outage
- Financial system instability

**Examples**:
- AI-managed grid causing blackout
- Air traffic control AI failure
- Banking system AI malfunction

### 4. Serious Fundamental Rights Infringements
Violation of Charter of Fundamental Rights including:
- **Non-discrimination**: Systematic bias causing exclusion
- **Privacy**: Unauthorised data exposure
- **Fair trial**: Wrongful conviction contribution
- **Freedom of expression**: Censorship or manipulation
- **Human dignity**: Degrading treatment

**Examples**:
- Hiring AI discriminating against protected groups
- Biometric system false positives leading to detention
- Social scoring causing service denial
- Emotion recognition causing stigmatisation

## Reporting Obligations

### For High-Risk AI Providers (Article 73(1))
**Timing**: Without undue delay upon awareness

**Recipient**:
- Market surveillance authorities of Member States where incident occurred
- AI Office (for certain categories)

**Content**:
- Incident description
- AI system identification
- Severity and consequences
- Affected persons (anonymised)
- Immediate measures taken
- Root cause analysis (if available)

### For High-Risk AI Deployers (Article 73(2))
**Trigger**: Serious incident during system use

**Recipient**: Provider and market surveillance authority

**Timing**: Without undue delay

### For GPAI Systemic Risk Models (Article 55(1)(c))
**Scope**: Serious incidents related to GPAI model

**Recipient**: AI Office

**Additional requirement**: Possible corrective measures disclosure

## "Without Undue Delay" Interpretation

While not precisely defined, Commission guidance suggests:
- **Initial notification**: Within 24-72 hours of awareness
- **Follow-up report**: Within 15 days with root cause analysis
- **Final report**: Comprehensive analysis within reasonable timeframe

## Information to Be Reported

### Minimum Elements
1. **System identification**: Name, version, CE marking details
2. **Incident description**: What happened, when, where
3. **Consequences**: Impact on health, safety, rights, infrastructure
4. **Affected parties**: Number and categories (anonymised)
5. **Immediate response**: Actions taken to mitigate harm
6. **Preliminary assessment**: Suspected causes

### Follow-Up Information
7. **Root cause analysis**: Technical investigation findings
8. **Corrective measures**: Permanent fixes implemented
9. **Preventive actions**: Steps to avoid recurrence
10. **Lessons learned**: Insights for sector

## Confidentiality and Data Protection

- **Anonymisation**: Personal data of affected persons
- **Confidentiality**: Commercial secrets protection
- **Cybersecurity**: Vulnerability details may be redacted
- **GDPR compliance**: Reporting consistent with data protection rules

## Market Surveillance Response

Upon receiving serious incident reports, authorities may:
- **Investigate**: Technical inspection, document review
- **Corrective measures**: Order product recall, modification
- **Market withdrawal**: Require removal from sale
- **Public warning**: Alert users and deployers
- **Sanctions**: Impose fines for non-compliance

## Non-Reporting Consequences

Failure to report serious incidents:
- **Penalties**: Up to €15 million or 3% of global turnover (Article 99)
- **Increased scrutiny**: Enhanced market surveillance
- **Liability**: Potential civil and criminal liability
- **Reputational damage**: Loss of trust

## Reporting Mechanisms

### National Level
Each Member State designates market surveillance authority with reporting portal.

### EU Level
AI Office coordinates cross-border incidents and GPAI reporting.

### Expected Infrastructure
Commission to establish:
- Standardised reporting templates
- Digital submission system
- Incident database (anonymised for research)

## Relationship to Other Reporting

### Medical Device Incidents (Regulation 2017/745)
AI in medical devices: Dual reporting to:
- AI Act authorities (serious incidents)
- Medical device vigilance systems

### Product Safety (GPSD)
Consumer products with AI: Coordinate with RAPEX alerts.

### Cybersecurity (NIS2 Directive)
Cyber incidents affecting AI: Report under both frameworks.

## Preventive Measures

### Risk Management Integration
Serious incident scenarios inform:
- Risk management system updates (Article 9)
- Post-market monitoring plans (Article 72)
- Testing and validation (Article 15)

### Industry Learning
Aggregated incident data enables:
- Sectoral safety improvements
- Standard development
- Best practice dissemination

## Related Concepts

- **Post-Market Monitoring** (AI-0151): Proactive surveillance
- **Corrective Action** (Provider obligation after incident)
- **Market Surveillance** (AI-0134): Authority enforcement
- **Risk Management System** (AI-0136): Preventive framework

## See Also

- EU AI Act Article 73 (Reporting of Serious Incidents)
- Commission Implementing Act on Reporting Format (expected 2026)
- Market Surveillance Regulation (EU) 2019/1020
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Serious Incident
		  
		  **Ontology ID**: AI-0123
		  **Category**: Core Definitions
		  **Last Updated**: 2025-10-27
		  
		  ## Definition
		  
		  An incident or malfunctioning of an AI system that directly or indirectly leads to death, serious health damage, serious disruption of critical infrastructure, or serious fundamental rights infringements.
		  
		  ## Source
		  
		  **Primary**: EU AI Act Article 3(44)
		  **Reference**: Article 73 (Reporting Obligations)
		  
		  ## Regulatory Context
		  
		  Serious incidents trigger mandatory reporting obligations for providers and deployers of high-risk AI systems and GPAI models with systemic risk. Reporting enables rapid regulatory response and market surveillance.
		  
		  ## Four Categories of Serious Incidents
		  
		  ### 1. Death
		  AI system malfunction or operation directly or indirectly causing:
		  - Loss of human life
		  - Contribution to fatal outcome
		  
		  **Examples**:
		  - Autonomous vehicle fatal collision
		  - Medical diagnosis AI missed critical condition
		  - Critical infrastructure failure causing casualties
		  
		  ### 2. Serious Health Damage
		  Injury or health impairment requiring medical intervention:
		  - Serious physical injury
		  - Serious psychological harm
		  - Long-term health consequences
		  
		  **Examples**:
		  - Surgical robot malfunction causing injury
		  - Incorrect medication dosage recommendation
		  - Mental health crisis from AI-driven content
		  
		  ### 3. Serious Disruption of Critical Infrastructure
		  Impairment of essential services:
		  - Energy supply interruption
		  - Transportation system failure
		  - Water/sanitation disruption
		  - Digital infrastructure outage
		  - Financial system instability
		  
		  **Examples**:
		  - AI-managed grid causing blackout
		  - Air traffic control AI failure
		  - Banking system AI malfunction
		  
		  ### 4. Serious Fundamental Rights Infringements
		  Violation of Charter of Fundamental Rights including:
		  - **Non-discrimination**: Systematic bias causing exclusion
		  - **Privacy**: Unauthorised data exposure
		  - **Fair trial**: Wrongful conviction contribution
		  - **Freedom of expression**: Censorship or manipulation
		  - **Human dignity**: Degrading treatment
		  
		  **Examples**:
		  - Hiring AI discriminating against protected groups
		  - Biometric system false positives leading to detention
		  - Social scoring causing service denial
		  - Emotion recognition causing stigmatisation
		  
		  ## Reporting Obligations
		  
		  ### For High-Risk AI Providers (Article 73(1))
		  **Timing**: Without undue delay upon awareness
		  
		  **Recipient**:
		  - Market surveillance authorities of Member States where incident occurred
		  - AI Office (for certain categories)
		  
		  **Content**:
		  - Incident description
		  - AI system identification
		  - Severity and consequences
		  - Affected persons (anonymised)
		  - Immediate measures taken
		  - Root cause analysis (if available)
		  
		  ### For High-Risk AI Deployers (Article 73(2))
		  **Trigger**: Serious incident during system use
		  
		  **Recipient**: Provider and market surveillance authority
		  
		  **Timing**: Without undue delay
		  
		  ### For GPAI Systemic Risk Models (Article 55(1)(c))
		  **Scope**: Serious incidents related to GPAI model
		  
		  **Recipient**: AI Office
		  
		  **Additional requirement**: Possible corrective measures disclosure
		  
		  ## "Without Undue Delay" Interpretation
		  
		  While not precisely defined, Commission guidance suggests:
		  - **Initial notification**: Within 24-72 hours of awareness
		  - **Follow-up report**: Within 15 days with root cause analysis
		  - **Final report**: Comprehensive analysis within reasonable timeframe
		  
		  ## Information to Be Reported
		  
		  ### Minimum Elements
		  1. **System identification**: Name, version, CE marking details
		  2. **Incident description**: What happened, when, where
		  3. **Consequences**: Impact on health, safety, rights, infrastructure
		  4. **Affected parties**: Number and categories (anonymised)
		  5. **Immediate response**: Actions taken to mitigate harm
		  6. **Preliminary assessment**: Suspected causes
		  
		  ### Follow-Up Information
		  7. **Root cause analysis**: Technical investigation findings
		  8. **Corrective measures**: Permanent fixes implemented
		  9. **Preventive actions**: Steps to avoid recurrence
		  10. **Lessons learned**: Insights for sector
		  
		  ## Confidentiality and Data Protection
		  
		  - **Anonymisation**: Personal data of affected persons
		  - **Confidentiality**: Commercial secrets protection
		  - **Cybersecurity**: Vulnerability details may be redacted
		  - **GDPR compliance**: Reporting consistent with data protection rules
		  
		  ## Market Surveillance Response
		  
		  Upon receiving serious incident reports, authorities may:
		  - **Investigate**: Technical inspection, document review
		  - **Corrective measures**: Order product recall, modification
		  - **Market withdrawal**: Require removal from sale
		  - **Public warning**: Alert users and deployers
		  - **Sanctions**: Impose fines for non-compliance
		  
		  ## Non-Reporting Consequences
		  
		  Failure to report serious incidents:
		  - **Penalties**: Up to €15 million or 3% of global turnover (Article 99)
		  - **Increased scrutiny**: Enhanced market surveillance
		  - **Liability**: Potential civil and criminal liability
		  - **Reputational damage**: Loss of trust
		  
		  ## Reporting Mechanisms
		  
		  ### National Level
		  Each Member State designates market surveillance authority with reporting portal.
		  
		  ### EU Level
		  AI Office coordinates cross-border incidents and GPAI reporting.
		  
		  ### Expected Infrastructure
		  Commission to establish:
		  - Standardised reporting templates
		  - Digital submission system
		  - Incident database (anonymised for research)
		  
		  ## Relationship to Other Reporting
		  
		  ### Medical Device Incidents (Regulation 2017/745)
		  AI in medical devices: Dual reporting to:
		  - AI Act authorities (serious incidents)
		  - Medical device vigilance systems
		  
		  ### Product Safety (GPSD)
		  Consumer products with AI: Coordinate with RAPEX alerts.
		  
		  ### Cybersecurity (NIS2 Directive)
		  Cyber incidents affecting AI: Report under both frameworks.
		  
		  ## Preventive Measures
		  
		  ### Risk Management Integration
		  Serious incident scenarios inform:
		  - Risk management system updates (Article 9)
		  - Post-market monitoring plans (Article 72)
		  - Testing and validation (Article 15)
		  
		  ### Industry Learning
		  Aggregated incident data enables:
		  - Sectoral safety improvements
		  - Standard development
		  - Best practice dissemination
		  
		  ## Related Concepts
		  
		  - **Post-Market Monitoring** (AI-0151): Proactive surveillance
		  - **Corrective Action** (Provider obligation after incident)
		  - **Market Surveillance** (AI-0134): Authority enforcement
		  - **Risk Management System** (AI-0136): Preventive framework
		  
		  ## See Also
		  
		  - EU AI Act Article 73 (Reporting of Serious Incidents)
		  - Commission Implementing Act on Reporting Format (expected 2026)
		  - Market Surveillance Regulation (EU) 2019/1020
		  
		  ```

- public-access:: true
	- definition:: An incident or malfunctioning of an AI system that directly or indirectly leads to death, serious health damage, serious disruption of critical infrastructure, or serious fundamental rights infringements.




## Academic Context

- The concept of a "Serious Incident" in AI systems is grounded in risk management and safety engineering disciplines, focusing on events causing significant harm or disruption.
  - Key developments include formalising definitions aligned with legal and ethical frameworks, emphasising consequences such as death, serious health damage, critical infrastructure disruption, or fundamental rights infringements.
  - Academic foundations draw from safety-critical systems literature, human rights law, and AI ethics, integrating multidisciplinary perspectives to assess incident severity and impact.

## Current Landscape (2025)

- Industry adoption of incident reporting and management frameworks for AI systems has accelerated, driven by regulatory expectations and public trust concerns.
  - Notable organisations such as the UK Information Commissioner's Office (ICO) have introduced statutory codes of practice on AI and automated decision-making, focusing on high-risk applications and serious incidents.
  - UK regulators including the Financial Conduct Authority (FCA) and Competition and Markets Authority (CMA) apply sector-specific principles addressing safety, transparency, and accountability.
  - In North England, innovation hubs in Manchester and Leeds are developing AI safety tools integrated into critical infrastructure monitoring, reflecting regional commitment to mitigating serious incidents.
- Technical capabilities include enhanced monitoring, anomaly detection, and incident response protocols, though limitations remain in predicting indirect or systemic harms.
- Standards and frameworks are evolving, with the UK adopting a principles-based approach supplemented by forthcoming legislation expected in late 2026, contrasting with the EU’s more prescriptive AI Act.

## Research & Literature

- Key academic papers and sources:
  - Amodei, D., Olah, C., Steinhardt, J., Christiano, P., Schulman, J., & Mané, D. (2016). Concrete Problems in AI Safety. *arXiv preprint arXiv:1606.06565*. https://doi.org/10.48550/arXiv.1606.06565
  - Cath, C., Wachter, S., Mittelstadt, B., Taddeo, M., & Floridi, L. (2018). Artificial Intelligence and the ‘Good Society’: The US, EU, and UK Approach. *Science and Engineering Ethics*, 24(2), 505–528. https://doi.org/10.1007/s11948-017-9901-7
  - Veale, M., & Borgesius, F. Z. (2021). Demystifying the Draft EU Artificial Intelligence Act. *Computer Law & Security Review*, 41, 105567. https://doi.org/10.1016/j.clsr.2021.105567
- Ongoing research focuses on refining incident classification, improving detection of indirect harms, and integrating human rights impact assessments into AI safety protocols.

## UK Context

- The UK has adopted a cross-sectoral AI regulatory framework underpinned by five core principles: safety, security and robustness, transparency and availability, fairness and accountability, and contestability and redress.
- British contributions include the ICO’s AI and Biometrics Strategy (2025), which prioritises scrutiny of large-scale AI systems, recruitment algorithms, and police use of facial recognition.
- North England innovation hubs in Manchester, Leeds, Newcastle, and Sheffield are active in developing AI safety technologies, particularly for critical infrastructure and public service applications.
- Regional case studies include Leeds City Council’s pilot of AI-driven infrastructure monitoring systems designed to detect and mitigate serious incidents before escalation.

## Future Directions

- Emerging trends include the establishment of the UK AI Authority (pending legislation), increased regulatory sandboxes, and enhanced statutory codes of practice for serious AI incidents.
- Anticipated challenges involve balancing innovation with risk mitigation, addressing systemic and indirect harms, and harmonising UK regulations with international frameworks, especially post-Brexit divergences.
- Research priorities focus on incident reporting standards, transparency mechanisms, and embedding human rights considerations into AI system design and deployment.

## References

1. Amodei, D., Olah, C., Steinhardt, J., Christiano, P., Schulman, J., & Mané, D. (2016). Concrete Problems in AI Safety. *arXiv preprint arXiv:1606.06565*. https://doi.org/10.48550/arXiv.1606.06565
2. Cath, C., Wachter, S., Mittelstadt, B., Taddeo, M., & Floridi, L. (2018). Artificial Intelligence and the ‘Good Society’: The US, EU, and UK Approach. *Science and Engineering Ethics*, 24(2), 505–528. https://doi.org/10.1007/s11948-017-9901-7
3. Veale, M., & Borgesius, F. Z. (2021). Demystifying the Draft EU Artificial Intelligence Act. *Computer Law & Security Review*, 41, 105567. https://doi.org/10.1016/j.clsr.2021.105567
4. UK Information Commissioner's Office. (2025). AI and Biometrics Strategy. Published June 5, 2025.
5. UK Government. (2025). Data (Use and Access) Act 2025.
6. Moore Barlow LLP. (2025). AI Regulation in the UK - September 2025 Update.
7. King & Spalding. (2025). EU & UK AI Round-up – July 2025.
8. Osborne Clarke. (2025). Artificial Intelligence | UK Regulatory Outlook October 2025.


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
