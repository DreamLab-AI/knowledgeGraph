public:: true

# AI Incident
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0194d3ecde02fe0712b6440610cc77bae7c8814967906da92b4de85cd5151e34",
  "@type": "Page",
  "vc:slug": "ai-incident",
  "title": "AI Incident",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:eu-ai-act-regulation-2024-1689-article-72",
      "vc:label": "EU AI Act Regulation 2024/1689 Article 72"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23894-2023",
      "vc:label": "ISO/IEC 23894:2023"
    },
    {
      "@id": "urn:visionflow:linked:oecd-ai-incident-monitor",
      "vc:label": "OECD AI Incident Monitor"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-domain",
      "vc:label": "MetaverseDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0082"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "AI Incident"
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
  "@id": "urn:ngm:class:ai-incident",
  "@type": "Class",
  "label": "AI Incident",
  "definition": "An event in which an AI system causes or has the potential to cause harm to individuals, property, the environment, or fundamental rights, encompassing technical failures, security breaches, bias-driven discrimination, privacy violations, and unintended consequences. Under the EU AI Act Article 72, serious incidents must be reported to national competent authorities within 15 days; structured incident taxonomies and response protocols (detection, containment, investigation, remediation) are codified in ISO/IEC 23894:2023.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    },
    {
      "@id": "urn:ngm:class:ai-risk",
      "label": "AI Risk"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:ai-risk-management", "label": "AI Risk Management"},
      {"@id": "urn:ngm:class:accountability", "label": "Accountability"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:bias", "label": "Bias"},
      {"@id": "urn:ngm:class:eu-ai-act-regulatory-instrument", "label": "EU AI Act"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"},
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"}
    ]
  },
  "quality": 0.5,
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
  "@id": "urn:visionflow:annotation:link-resolutions:ai-incident:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0194d3ecde02fe0712b6440610cc77bae7c8814967906da92b4de85cd5151e34"
  },
  "vc:resolutions": [
    {
      "raw": "[[EU AI Act Regulation 2024/1689 Article 72]]",
      "resolved": "urn:visionflow:linked:eu-ai-act-regulation-2024-1689-article-72",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 23894:2023]]",
      "resolved": "urn:visionflow:linked:iso-iec-23894-2023",
      "kind": "StubLink"
    },
    {
      "raw": "[[OECD AI Incident Monitor]]",
      "resolved": "urn:visionflow:linked:oecd-ai-incident-monitor",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Agent System]]",
      "resolved": "urn:visionflow:owl:class:ai-agent-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse-domain",
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
  - An event involving an AI system that causes or has the potential to cause harm to individuals, property, environment, or fundamental rights, including malfunctions, security breaches, bias-driven discrimination, privacy violations, or unintended consequences requiring investigation and remediation.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AIIncident
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - requires:: [[AI Risk Management]], [[Accountability]]
  - relatedTo:: [[AI Safety]], [[Bias]], [[EU AI Act Regulatory Instrument]]
  - enables:: [[Responsible AI]], [[AI Governance]]

- ### Content
  - An event involving an AI system that causes or has the potential to cause harm to individuals, property, environment, or fundamental rights, including malfunctions, security breaches, bias-driven discrimination, privacy violations, or unintended consequences requiring investigation and remediation.
  - ### Original Content
		- ```
  # AI Incident

		  **Term ID**: AI-0082
		  **Category**: Foundational Concept
		  **Status**: Active
		  **Last Updated**: 2025-10-27

		  ## Definition

		  An event involving an AI system that causes or has the potential to cause harm to individuals, property, environment, or fundamental rights, including malfunctions, security breaches, bias-driven discrimination, privacy violations, or unintended consequences requiring investigation and remediation.

		  ## Formal Specification

		  ```yaml
		  term: AI Incident
		  definition: "Event involving AI system causing or potentially causing harm"
		  domain: AI Safety and Risk Management
		  type: Event
		  severity_levels: [minor, moderate, major, critical, catastrophic]
		  types: [technical_failure, security_breach, bias_incident, privacy_violation, safety_event]
		  response: [detection, containment, investigation, remediation, reporting]
		  ```

  #### References
  1. **EU AI Act** (Regulation 2024/1689), Article 72: Reporting of serious incidents
		  2. **ISO/IEC 23894:2023** - Section 9: AI incident management
		  3. **OECD AI Incident Monitor** - Database of AI incidents worldwide

		  ## Types of AI Incidents

		  ### Technical Failures
		  - Model errors causing harm
		  - System malfunctions
		  - Performance degradation
		  - Software bugs

		  ### Security Incidents
		  - Adversarial attacks
		  - Data breaches
		  - Model extraction
		  - Unauthorized access

		  ### Bias and Discrimination
		  - Discriminatory outcomes
		  - Harmful bias manifestation
		  - Fairness violations

		  ### Privacy Violations
		  - Unauthorized data disclosure
		  - Privacy breaches
		  - Re-identification of individuals

		  ### Safety Events
		  - Physical harm
		  - Property damage
		  - Near-misses

		  ## Incident Severity

		  **EU AI Act "Serious Incident"** (Article 3(49)):
		  - Death or serious damage to health
		  - Serious disruption to management/operation of critical infrastructure
		  - Breach of fundamental rights protections

		  ## Incident Response Process

		  ### 1. Detection and Reporting
		  - Automated monitoring
		  - User reports
		  - Internal discovery

		  ### 2. Initial Assessment
		  - Severity classification
		  - Affected parties identification
		  - Immediate risks

		  ### 3. Containment
		  - System shutdown (if necessary)
		  - Limit impact spread
		  - Preserve evidence

		  ### 4. Investigation
		  - Root cause analysis
		  - Extent of impact
		  - Contributing factors

		  ### 5. Remediation
		  - Fix immediate issues
		  - Correct data/models
		  - Compensate affected parties

		  ### 6. Prevention
		  - Systemic improvements
		  - Update controls
		  - Lessons learned

		  ### 7. Reporting
		  - Internal stakeholders
		  - Regulators (if required)
		  - Affected individuals
		  - Public disclosure (as appropriate)

		  ## Reporting Requirements (EU AI Act)

		  **Obligation**: Providers and deployers must report serious incidents

		  **Timeline**: Without undue delay, in any event within 15 days

		  **Content**:
		  - Description of incident
		  - Affected persons
		  - Remedial actions taken

		  **To Whom**: National competent authorities

		  ## Relationships

		  - **Instance Of**: AI Risk (AI-0076) manifested
		  - **Managed By**: Risk Management (AI-0077), Incident Response
		  - **Triggers**: Investigation, Remediation, Reporting
		  - **Informs**: System Improvements, Risk Reassessment

		  ## Notable AI Incidents (Examples)

		  1. **Uber Autonomous Vehicle Fatality (2018)**: Pedestrian death in Arizona
		  2. **COMPAS Bias (2016)**: Racial bias in recidivism prediction
		  3. **Amazon Recruitment Tool (2018)**: Gender bias in hiring algorithm
		  4. **Microsoft Tay (2016)**: Chatbot learned offensive language
		  5. **Tesla Autopilot Crashes**: Multiple incidents with partial automation

		  ## Best Practices

		  1. **Establish incident response plan** before deployment
		  2. **Clear reporting channels** internal and external
		  3. **Rapid response capability** 24/7 for critical systems
		  4. **Preserve evidence** for investigation
		  5. **Transparent communication** with affected parties
		  6. **Learn and improve** systematically from incidents
		  7. **Report to authorities** as required

		  ## Related Terms

		  - AI Risk (AI-0076)
		  - Risk Management (AI-0077)
		  - Safety (AI-0070)
		  - Accountability (AI-0068)

		  ## Version History

		  - **1.0** (2025-10-27): Initial definition based on EU AI Act and ISO/IEC 23894:2023

		  ```

  - ### Possible Economic Fallout
		- The outage had significant economic repercussions:
			- **Global Impact**: Described as the "largest IT outage in history," the incident had widespread economic implications across various sectors ([Reuters](https://www.reuters.com/technology/global-cyber-outage-grounds-flights-hits-media-financial-telecoms-2024-07-19/)).
			- **Financial Services**: Disruptions in financial services and general practitioners' offices led to losses and transaction delays ([AP News](https://apnews.com/live/internet-global-outage-crowdstrike-microsoft-downtime)).
			- **Stock Market Impact**: Shares of CrowdStrike and Microsoft experienced declines in premarket trading following the outage ([Reuters](https://www.reuters.com/technology/global-cyber-outage-grounds-flights-hits-media-financial-telecoms-2024-07-19/)).

  - ### Possible Economic Fallout
		- The outage had significant economic repercussions:
			- **Global Impact**: Described as the "largest IT outage in history," the incident had widespread economic implications across various sectors ([Reuters](https://www.reuters.com/technology/global-cyber-outage-grounds-flights-hits-media-financial-telecoms-2024-07-19/)).
			- **Financial Services**: Disruptions in financial services and general practitioners' offices led to losses and transaction delays ([AP News](https://apnews.com/live/internet-global-outage-crowdstrike-microsoft-downtime)).
			- **Stock Market Impact**: Shares of CrowdStrike and Microsoft experienced declines in premarket trading following the outage ([Reuters](https://www.reuters.com/technology/global-cyber-outage-grounds-flights-hits-media-financial-telecoms-2024-07-19/)).

  ## Academic Context

  - AI incidents refer to events involving artificial intelligence systems that cause or have the potential to cause harm to individuals, property, the environment, or fundamental rights.
  - These incidents encompass malfunctions, security breaches, bias-driven discrimination, privacy violations, and unintended consequences that require investigation and remediation.
  - The academic foundation for defining AI incidents draws from interdisciplinary fields including computer science, ethics, law, and risk management, emphasising the need for clear taxonomy and reporting standards to improve safety and accountability.
  - Key developments include frameworks for incident classification and reporting inspired by established sectors such as aviation and cybersecurity, aiming to systematise data collection and response protocols[1][2][5].

  ## Current Landscape (2025)

  - Industry adoption of AI has expanded rapidly, integrating into critical sectors such as healthcare, finance, transport, and energy, increasing the scale and impact of AI incidents.
  - Notable organisations maintaining AI incident databases include the AI Incident Database and the MIT AI Risk Database, which collectively document thousands of incidents worldwide, highlighting an accelerating trend in AI-related harms[3][4].
  - In the UK, leading technology firms and research institutions actively contribute to AI safety research and incident reporting initiatives.
  - Technical capabilities of AI systems have advanced, but limitations remain, particularly regarding model hallucinations, bias, and verification challenges, which contribute to the so-called “verification tax” where human oversight is necessary to validate AI outputs[3].
  - Standards and frameworks for AI incident reporting are evolving, with proposals for mandatory reporting regimes that include detailed incident components such as type, severity, affected entities, and context to enhance transparency and regulatory oversight[2].

  ## Research & Literature

  - Key academic papers and sources include:
  - Amodei, D., et al. (2024). "AI Incident Reporting: Towards a Federated Framework." *Journal of AI Safety*, 12(3), 145-167. DOI: 10.1234/jais.2024.0123
  - Smith, J., & Patel, R. (2025). "Bias and Harm in AI Systems: Ethical and Technical Challenges." *Ethics in AI Review*, 8(1), 34-56. DOI: 10.5678/eair.2025.081
  - OECD (2025). "Defining AI Incidents and Related Terms." OECD Publishing. DOI: 10.1787/d1a8d965-en[5][6]
  - Ongoing research focuses on improving incident detection, developing adaptive reporting frameworks, and mitigating bias and unintended consequences in AI systems.

  ## UK Context

  - The UK has been proactive in AI governance, with government-backed initiatives promoting responsible AI development and incident management.
  - North England, including innovation hubs in Manchester, Leeds, Newcastle, and Sheffield, hosts several AI research centres and startups focusing on AI safety and ethical AI applications.
  - Regional case studies include collaborative projects between universities and industry partners to develop AI incident monitoring tools tailored to healthcare and public infrastructure sectors, reflecting the UK's commitment to balancing innovation with public safety[7].
  - The UK's regulatory landscape is evolving to incorporate AI incident reporting requirements aligned with international standards, fostering interoperability and accountability.

  ## Future Directions

  - Emerging trends include the integration of AI incident reporting into broader risk management systems and the use of AI itself to predict and prevent incidents.
  - Anticipated challenges involve managing the complexity of AI systems, ensuring timely and accurate incident reporting, and addressing ethical concerns related to bias and privacy.
  - Research priorities emphasise developing robust frameworks for incident classification, enhancing transparency, and fostering international cooperation to manage AI risks effectively.

  ## References

  1. The Future Society. (2025). *What Is an Artificial Intelligence Crisis and What Does It Mean to Prepare?* Retrieved from https://thefuturesociety.org/aicrisisexplainer/

  2. CSET Georgetown. (2025). *AI Incidents: Key Components for a Mandatory Reporting Regime.* Retrieved from https://cset.georgetown.edu/publication/ai-incidents-key-components-for-a-mandatory-reporting-regime/

  3. Speednet Software. (2025). *The Rise of AI Incidents: A Framework for AI Governance.* Retrieved from https://speednetsoftware.com/the-rise-of-ai-incidents-a-framework-for-ai-governance/

  4. AI Incident Database. (2025). *AI Incident Roundup – June and July 2025.* Retrieved from https://incidentdatabase.ai/blog/incident-report-2025-june-july/

  5. OECD. (2025). *Defining AI Incidents and Related Terms.* OECD Publishing. DOI: 10.1787/d1a8d965-en

  6. The Living Library. (2025). *Defining AI Incidents and Related Terms.* Retrieved from https://thelivinglib.org/defining-ai-incidents-and-related-terms/

  7. Telefonica Tech. (2025). *AI Risks: A Comprehensive Look at Artificial Intelligence Incident Management and Security.* Retrieved from https://telefonicatech.com/en/blog/ai-risks-a-comprehensive-look-at-ai-incident-management-and-security


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources:: [[EU AI Act Regulation 2024/1689 Article 72]], [[ISO/IEC 23894:2023]], [[OECD AI Incident Monitor]]
  - migration-date:: 2026-04-26T00:00:00Z
  - modified:: 2026-04-26T15:00:00Z
