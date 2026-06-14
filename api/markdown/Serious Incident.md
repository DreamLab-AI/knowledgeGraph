public:: true

# Serious Incident
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:21846605cb82bfe4fa5343122f04a5b484623bbacfbdf762e6235f4d08698154",
  "@type": "Page",
  "vc:slug": "serious-incident",
  "title": "Serious Incident",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-3062"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Serious Incident"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:serious-incident",
  "@type": "Class",
  "label": "Serious Incident",
  "definition": "Under EU AI Act Article 3(44), a Serious Incident is any incident or malfunctioning of an AI system that directly or indirectly causes death, serious health damage, serious disruption of critical infrastructure, or serious infringement of fundamental rights. Such incidents trigger mandatory reporting obligations for providers and deployers of high-risk AI systems and GPAI models with systemic risk, enabling rapid regulatory response and market surveillance under Article 73.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    },
    {
      "@id": "urn:ngm:class:spatial-embodiment-harm-taxonomy",
      "label": "Spatial Embodiment Harm Taxonomy"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:market-surveillance-authority", "label": "Market Surveillance Authority"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:high-risk-ai-system", "label": "High Risk AI System"},
      {"@id": "urn:ngm:class:ai-incident", "label": "AI Incident"},
      {"@id": "urn:ngm:class:safety-oecd", "label": "Safety (OECD)"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:ai-risk-management", "label": "AI Risk Management"}
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:serious-incident:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:21846605cb82bfe4fa5343122f04a5b484623bbacfbdf762e6235f4d08698154"
  },
  "vc:resolutions": [
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - An incident or malfunctioning of an AI system that directly or indirectly leads to death, serious health damage, serious disruption of critical infrastructure, or serious fundamental rights infringements.

- ### Semantic Classification
  - owl-class:: spatial-computing:SeriousIncident
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - **requires**: Market Surveillance Authority — upon detecting a serious incident, providers must notify the relevant market surveillance authority without undue delay.
  - **relatedTo**: High Risk AI System — serious incident reporting obligations are primarily triggered by high-risk AI system deployments; AI Incident — Serious Incident is a legally defined severe subclass of AI Incident; Safety (OECD) — the OECD safety principle aims to prevent conditions that would cause serious incidents.
  - **enables**: AI Governance — incident reporting feeds the regulatory feedback loop that refines AI governance frameworks.
  - **dependsOn**: AI Risk Management — robust risk management is the primary mechanism for reducing the probability of serious incidents.

- ### Content
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

  #### Related Concepts
  - **Post-Market Monitoring** (AI-0151): Proactive surveillance
  - **Corrective Action** (Provider obligation after incident)
  - **Market Surveillance** (AI-0134): Authority enforcement
  - **Risk Management System** (AI-0136): Preventive framework

  ## See Also

  - EU AI Act Article 73 (Reporting of Serious Incidents)
  - Commission Implementing Act on Reporting Format (expected 2026)
  - Market Surveillance Regulation (EU) 2019/1020
  - ### Original Content
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

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
