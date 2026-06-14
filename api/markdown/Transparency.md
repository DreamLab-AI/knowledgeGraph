public:: true

# Transparency
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:492e9a425d67ce3cad65eae7dde6be8ddb547c38c920e3325e827bf1be3facc8",
  "@type": "Page",
  "vc:slug": "transparency",
  "title": "Transparency",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:accountability-ai-0068",
      "vc:label": "Accountability (AI-0068)"
    },
    {
      "@id": "urn:visionflow:linked:explainability-ai-0064",
      "vc:label": "Explainability (AI-0064)"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0062"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Transparency"
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
  "@id": "urn:ngm:class:transparency",
  "@type": "Class",
  "label": "Transparency",
  "definition": "The property of an AI system whereby relevant information about the system's design, operation, capabilities, limitations, and decision-making processes is accessible and understandable to appropriate stakeholders, enabling informed oversight, trust, and accountability.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:ai-governance-and-ethics",
    "label": "AI Governance and Ethics"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:accountability-ai-0068",
        "label": "Accountability (AI-0068)"
      },
      {
        "@id": "urn:ngm:class:explainability-ai-0064",
        "label": "Explainability (AI-0064)"
      },
      {
        "@id": "urn:ngm:class:ai-audit",
        "label": "AI Audit"
      },
      {
        "@id": "urn:ngm:class:informed-consent",
        "label": "Informed Consent"
      },
      {
        "@id": "urn:ngm:class:stakeholder-trust",
        "label": "Stakeholder Trust"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-documentation",
        "label": "Data Documentation"
      },
      {
        "@id": "urn:ngm:class:model-card",
        "label": "Model Card"
      },
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-trustworthiness",
        "label": "AI Trustworthiness"
      },
      {
        "@id": "urn:ngm:class:conformity-assessment",
        "label": "Conformity Assessment"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:data-transparency",
        "label": "Data Transparency"
      },
      {
        "@id": "urn:ngm:class:algorithmic-transparency",
        "label": "Algorithmic Transparency"
      },
      {
        "@id": "urn:ngm:class:operational-transparency",
        "label": "Operational Transparency"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:interpretability",
        "label": "Interpretability"
      },
      {
        "@id": "urn:ngm:class:explainability-ai-0064",
        "label": "Explainability (AI-0064)"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:opacity",
        "label": "Opacity"
      },
      {
        "@id": "urn:ngm:class:black-box-model",
        "label": "Black-Box Model"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:eu-ai-act",
        "label": "EU AI Act"
      },
      {
        "@id": "urn:ngm:class:ieee-7001-2021",
        "label": "IEEE 7001-2021"
      },
      {
        "@id": "urn:ngm:class:nist-ai-rmf",
        "label": "NIST AI Risk Management Framework"
      },
      {
        "@id": "urn:ngm:class:iso-iec-tr-24028",
        "label": "ISO/IEC TR 24028"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:open-source-software",
        "label": "Open-Source Software"
      },
      {
        "@id": "urn:ngm:class:blockchain-auditability",
        "label": "Blockchain Auditability"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:fairness",
        "label": "Fairness"
      },
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:human-oversight",
        "label": "Human Oversight"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:openness",
      "label": "Openness"
    },
    {
      "@id": "urn:ngm:class:discoverability",
      "label": "Discoverability"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:transparency:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:492e9a425d67ce3cad65eae7dde6be8ddb547c38c920e3325e827bf1be3facc8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Accountability (AI-0068)]]",
      "resolved": "urn:visionflow:linked:accountability-ai-0068",
      "kind": "StubLink"
    },
    {
      "raw": "[[Explainability (AI-0064)]]",
      "resolved": "urn:visionflow:linked:explainability-ai-0064",
      "kind": "StubLink"
    },
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
  - The property of an AI system whereby relevant information about the system's design, operation, capabilities, limitations, and decision-making processes is accessible and understandable to appropriate stakeholders.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Transparency
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - enables:: [[Explainability (AI-0064)]], [[Accountability (AI-0068)]]

- ### Content
  - The property of an AI system whereby relevant information about the system's design, operation, capabilities, limitations, and decision-making processes is accessible and understandable to appropriate stakeholders.

							- #### Providing Transparency
								- Offering human-readable reports and data access to relevant authorities.

  - ### Key Benefits of Bitcoin
  - **Permissionless Nature**: Bitcoin allows transactions without needing permission from any authority, enhancing financial independence.
  - **Immunity to Seizure**: Being decentralized, Bitcoin assets are less susceptible to seizure by governments or other entities.
  - **Censorship Resistance**: Bitcoin transactions cannot be censored, ensuring freedom of transactions.
  - **Decentralization**: Bitcoin operates on a decentralized network, reducing reliance on central authorities.
  - **Limited Supply**: Bitcoin has a capped supply of 21 million coins, safeguarding against inflation.
  - **Open Source**: The open-source nature of Bitcoin fosters transparency and collective development.
  - **Anonymity and Privacy**: Bitcoin provides a degree of anonymity in transactions.
  - **Promoting Democracy**: By decentralizing control over money, Bitcoin can potentially support democratic movements.
  - **Push System for Transactions**: Bitcoin operates on a push system, giving users control over their transactions.
  - **Real Money Qualities**: Bitcoin exhibits properties of real money like divisibility, portability, and durability.
  - **Accessibility**: Bitcoin is accessible to anyone with an internet connection.
  - **Transparency**: The blockchain technology behind Bitcoin offers transparency in transactions.
  - **Freedom**: Overall, Bitcoin is presented as a tool for financial and personal freedom.

  - ### Example applications
  - It’s handy here to get a feel for what this looks like. These aren’tthings that this book wishes to contribute to, or even have a firmopinion on, they’re just representative of current activity in thedecentralised web space.

  - ### Open-Source Focus
		- Meta's release of the LLaMA-3 weights and code under a non-commercial license fosters transparency and encourages research collaboration.
  - ![1713640453190.jpeg](assets/1713640453190_1713644111547_0.jpeg)

  - ### Feedback and Transparency
		- Users often fear “death by a thousand cuts.”
		- Real-time spending breakdowns by category—in a single dashboard—alleviate anxiety and foster trust.
		- Intuitive visual cues, such as logos or icons for merchants, reduce confusion when reviewing microtransactions.

							- #### Providing Transparency
								- Offering human-readable reports and data access to relevant authorities.

  - ### Key Benefits of Bitcoin
  - **Permissionless Nature**: Bitcoin allows transactions without needing permission from any authority, enhancing financial independence.
  - **Immunity to Seizure**: Being decentralized, Bitcoin assets are less susceptible to seizure by governments or other entities.
  - **Censorship Resistance**: Bitcoin transactions cannot be censored, ensuring freedom of transactions.
  - **Decentralization**: Bitcoin operates on a decentralized network, reducing reliance on central authorities.
  - **Limited Supply**: Bitcoin has a capped supply of 21 million coins, safeguarding against inflation.
  - **Open Source**: The open-source nature of Bitcoin fosters transparency and collective development.
  - **Anonymity and Privacy**: Bitcoin provides a degree of anonymity in transactions.
  - **Promoting Democracy**: By decentralizing control over money, Bitcoin can potentially support democratic movements.
  - **Push System for Transactions**: Bitcoin operates on a push system, giving users control over their transactions.
  - **Real Money Qualities**: Bitcoin exhibits properties of real money like divisibility, portability, and durability.
  - **Accessibility**: Bitcoin is accessible to anyone with an internet connection.
  - **Transparency**: The blockchain technology behind Bitcoin offers transparency in transactions.
  - **Freedom**: Overall, Bitcoin is presented as a tool for financial and personal freedom.

  - ### Example applications
  - It’s handy here to get a feel for what this looks like. These aren’tthings that this book wishes to contribute to, or even have a firmopinion on, they’re just representative of current activity in thedecentralised web space.

  - ### Open-Source Focus
		- Meta's release of the LLaMA-3 weights and code under a non-commercial license fosters transparency and encourages research collaboration.
  - ![1713640453190.jpeg](assets/1713640453190_1713644111547_0.jpeg)

  - ### Feedback and Transparency
		- Users often fear “death by a thousand cuts.”
		- Real-time spending breakdowns by category—in a single dashboard—alleviate anxiety and foster trust.
		- Intuitive visual cues, such as logos or icons for merchants, reduce confusion when reviewing microtransactions.

  - ### Example applications
  - It’s handy here to get a feel for what this looks like. These aren’tthings that this book wishes to contribute to, or even have a firmopinion on, they’re just representative of current activity in thedecentralised web space.

  - ### Open-Source Focus
		- Meta's release of the LLaMA-3 weights and code under a non-commercial license fosters transparency and encourages research collaboration.
		- Prohibits:
			- Law violations.
			- Infringement of third-party rights.
			- Misuse of sensitive information.
		- Emphasizes compliance across jurisdictions.
		- Lacks specifics on consequences for policy violations.
  - **Intellectual Property Rights**
		- Grants non-exclusive, worldwide, non-transferable, royalty-free license.
		- Licensees own derivative works but with commercial use restrictions.
  - **Legal Implications**
		- Unilateral updates to AUP by Meta.
		- Compliance with extensive laws and regulations required.
		- Significant operational constraints implied.

  - ### Trust and Transparency Mechanisms

		- ### Chaps Vision
			- Chaps Vision brands itself as a leader in geolocation solutions and automated video surveillance. Their technology is designed to enhance situational awareness through precise geolocation tracking and advanced video analytics. Chaps Vision employs sophisticated AI algorithms to transform ordinary surveillance footage into actionable intelligence. They focus on creating value from data by integrating various data points, such as location, movement patterns, and behavioural analysis, to provide comprehensive monitoring solutions.
				- **Transparency and Accountability:** Despite the legal changes, there are significant concerns regarding the transparency of data usage and the accountability of both the government and private entities involved. The extent to which these measures comply with the European Union's General Data Protection Regulation (GDPR) is a major point of contention.

  - ### Example applications
  - It’s handy here to get a feel for what this looks like. These aren’tthings that this book wishes to contribute to, or even have a firmopinion on, they’re just representative of current activity in thedecentralised web space.

  - ### Open-Source Focus
		- Meta's release of the LLaMA-3 weights and code under a non-commercial license fosters transparency and encourages research collaboration.
		- Prohibits:
			- Law violations.
			- Infringement of third-party rights.
			- Misuse of sensitive information.
  - **Intellectual Property Rights**
		- Grants non-exclusive, worldwide, non-transferable, royalty-free license.

  - ### Trust and Transparency Mechanisms

  - #### 2.4 Example applications
  It's handy here to get a feel for what this looks like. These aren't things that this book wishes to contribute to, or even have a firm opinion on, they're just representative of current activity in the decentralised web space.

  - ### Writing a Plain Language Summary of Research Findings

   Writing a plain language summary of research findings is crucial for making health and social care research accessible to the general public, health professionals, and policymakers. The Health Research Authority (HRA) emphasizes the importance of transparency by requiring research sponsors to include a plain language summary in their final reports, which are then published on the HRA website alongside the study research summaries.

   Key principles for writing a good plain language summary include:
  - **Accuracy, clarity, and conciseness**
  - **Avoiding prior knowledge assumptions**
  - **Using appropriate language**
  - **Short sentences (up to 20 words) and paragraphs (up to 3 sentences)**
  - **Neutral language**
  - **Considering infographics with explanatory text**
  - **Involving patients, patient representatives, or members of the public in the development and/or review of the summary**

  - #### 2.4 Example applications
  It's handy here to get a feel for what this looks like. These aren't things that this book wishes to contribute to, or even have a firm opinion on, they're just representative of current activity in the decentralised web space.

  - ### Writing a Plain Language Summary of Research Findings

   Writing a plain language summary of research findings is crucial for making health and social care research accessible to the general public, health professionals, and policymakers. The Health Research Authority (HRA) emphasizes the importance of transparency by requiring research sponsors to include a plain language summary in their final reports, which are then published on the HRA website alongside the study research summaries.

   Key principles for writing a good plain language summary include:
  - **Accuracy, clarity, and conciseness**
  - **Avoiding prior knowledge assumptions**
  - **Using appropriate language**
  - **Short sentences (up to 20 words) and paragraphs (up to 3 sentences)**
  - **Neutral language**
  - **Considering infographics with explanatory text**
  - **Involving patients, patient representatives, or members of the public in the development and/or review of the summary**

  - #### 2.4 Example applications
  It's handy here to get a feel for what this looks like. These aren't things that this book wishes to contribute to, or even have a firm opinion on, they're just representative of current activity in the decentralised web space.

  ## Formal Specification

  ```yaml
  term: Transparency
  definition: "Accessibility and comprehensibility of relevant AI system information to stakeholders"
  domain: AI Governance
  type: Quality Attribute
  scope:
  - system_design
  - training_data
  - algorithms
  - decision_processes
  - limitations
  - performance_metrics
  levels:
  - disclosure
  - comprehensibility
  - verifiability
  ```

  ## Formal Ontology

  #### Key Characteristics
  ### Dimensions of Transparency

		  1. **Data Transparency**
		     - Training data sources and characteristics
		     - Data collection methods
		     - Data quality and representativeness
		     - Data preprocessing steps
		     - Labelling procedures

		  2. **Model Transparency**
		     - Algorithm selection rationale
		     - Architecture and design choices
		     - Hyperparameter configurations
		     - Training procedures
		     - Optimization methods

		  3. **Performance Transparency**
		     - Evaluation metrics and results
		     - Accuracy across subgroups
		     - Known failure modes
		     - Uncertainty estimates
		     - Limitations and boundaries

		  4. **Operational Transparency**
		     - Deployment context and conditions
		     - Intended use cases
		     - Human oversight mechanisms
		     - Update and maintenance procedures
		     - Incident reporting processes

		  5. **Governance Transparency**
		     - Organisational accountability
		     - Decision-making authorities
		     - Ethical review processes
		     - Stakeholder engagement
		     - Compliance mechanisms

		  ## Levels of Transparency

		  ### IEEE 7001 Competency Levels

		  1. **Level 1: Purposeful**
		     - Basic disclosure of system purpose
		     - Intended functionality
		     - General application domain

		  2. **Level 2: Trustworthy**
		     - Evidence of reliability
		     - Validation and verification
		     - Quality assurance processes

		  3. **Level 3: Accountable**
		     - Clear responsibility assignment
		     - Audit trails
		     - Redress mechanisms

		  4. **Level 4: Contextual**
		     - Situation-specific adaptation
		     - Environmental awareness
		     - Context-dependent behaviour

		  5. **Level 5: Understandable**
		     - Comprehensible explanations
		     - Appropriate detail for audience
		     - Effective communication

		  ## Relationships

		  - **Component Of**: AI Trustworthiness (AI-0061)
		  - **Enables**: Explainability (AI-0064), Accountability (AI-0068)
		  - **Supports**: AI Audit (AI-0104), Conformity Assessment (AI-0103)
		  - **Required For**: Informed Consent (AI-0042), Stakeholder Engagement (AI-0036)

		  ## Implementation Approaches

		  ### Documentation Methods

		  1. **Model Cards**
		     - Standardised model documentation
		     - Performance characteristics
		     - Intended use and limitations
		     - Reference: Mitchell et al. (2019)

		  2. **Datasheets for Datasets**
		     - Dataset composition and collection
		     - Preprocessing and cleaning
		     - Uses and distribution
		     - Reference: Gebru et al. (2018)

		  3. **FactSheets**
		     - Comprehensive AI system documentation
		     - Trust and safety information
		     - Reference: IBM Research (Arnold et al., 2019)

		  4. **System Cards**
		     - End-to-end system documentation
		     - Deployment context
		     - Stakeholder information

		  ### Technical Implementation

		  1. **Logging and Traceability**
		     ```yaml
		     transparency_log:
		       data_lineage: true
		       model_versioning: true
		       decision_records: true
		       configuration_tracking: true
		       performance_monitoring: true
		     ```

		  2. **Access Mechanisms**
		     - API endpoints for metadata
		     - Documentation repositories
		     - Interactive dashboards
		     - Public disclosure reports

		  3. **Automated Reporting**
		     - Continuous documentation generation
		     - Real-time performance dashboards
		     - Automated compliance reports

		  ## Transparency vs. Other Properties

		  ### Transparency vs. Explainability

		  | Transparency | Explainability |
		  |--------------|----------------|
		  | What information is disclosed | How decisions are made |
		  | System-level properties | Instance-level justifications |
		  | Passive accessibility | Active interpretation |
		  | Structural information | Causal relationships |

		  ### Transparency vs. Interpretability

		  | Transparency | Interpretability |
		  |--------------|------------------|
		  | Information disclosure | Human comprehension |
		  | Documentation focus | Understanding focus |
		  | External communication | Internal comprehension |
		  | Process-oriented | Mechanism-oriented |

		  ## Stakeholder-Specific Transparency

		  ### For Regulators

		  - Compliance documentation
		  - Risk assessments
		  - Audit trails
		  - Incident reports
		  - Validation evidence

		  ### For Users

		  - System capabilities
		  - Limitations and risks
		  - Privacy implications
		  - Decision-making basis
		  - Redress mechanisms

		  ### For Developers

		  - Technical specifications
		  - Training procedures
		  - Performance metrics
		  - Known issues
		  - Update history

		  ### For Affected Individuals

		  - Data usage
		  - Decision impact
		  - Rights and recourse
		  - Explanation availability
		  - Contact information

		  ## Challenges and Limitations

		  ### Trade-offs

		  1. **Transparency vs. Security**
		     - Disclosure may reveal vulnerabilities
		     - Intellectual property protection
		     - Adversarial exploitation risks

		  2. **Transparency vs. Privacy**
		     - Training data disclosure
		     - Membership inference risks
		     - Model inversion attacks

		  3. **Transparency vs. Complexity**
		     - Information overload
		     - Technical comprehension barriers
		     - Appropriate level of detail

		  ### Practical Constraints

		  1. **Commercial Sensitivity**
		     - Proprietary algorithms
		     - Competitive advantage
		     - Trade secrets

		  2. **Comprehension Barriers**
		     - Technical expertise required
		     - Cognitive limitations
		     - Communication challenges

		  3. **Dynamic Systems**
		     - Continuous learning systems
		     - Evolving capabilities
		     - Real-time updates

		  ## Regulatory Requirements

		  ### EU AI Act

		  **Article 13: Transparency for High-Risk Systems**
		  - Instructions for use
		  - Technical capabilities
		  - Performance metrics
		  - Known limitations
		  - Human oversight mechanisms

		  **Article 50: General Transparency Obligations**
		  - AI-generated content labelling
		  - Deepfake disclosure
		  - Chatbot identification

		  ### Sector-Specific Requirements

		  1. **Healthcare** (EU MDR, FDA)
		     - Clinical validation documentation
		     - Intended use specifications
		     - Performance characteristics

		  2. **Finance** (SR 11-7, MiFID II)
		     - Algorithm documentation
		     - Risk disclosures
		     - Model governance

		  3. **Employment** (GDPR Article 22)
		     - Automated decision-making disclosure
		     - Logic involved
		     - Significance and consequences

		  ## Best Practices

		  1. **Adopt Layered Transparency**
		     - Summary for general public
		     - Detailed documentation for experts
		     - Technical specifications for auditors

		  2. **Use Standardised Formats**
		     - Model cards, datasheets, factsheets
		     - Consistent structure
		     - Machine-readable metadata

		  3. **Maintain Living Documentation**
		     - Version control
		     - Update history
		     - Current status

		  4. **Tailor to Audience**
		     - Stakeholder-specific information
		     - Appropriate technical level
		     - Relevant concerns addressed

		  5. **Balance Competing Interests**
		     - Maximum disclosure without harm
		     - Protect legitimate interests
		     - Prioritise public safety

		  6. **Enable Verification**
		     - Provide evidence
		     - Support independent audit
		     - Allow testing and validation

		  ## Measurement and Metrics

		  ### Quantitative Metrics

		  1. **Documentation Coverage**
		     - Percentage of required information provided
		     - Completeness score

		  2. **Accessibility**
		     - Time to access information
		     - Ease of navigation
		     - Format availability

		  3. **Comprehensibility**
		     - Readability scores
		     - Technical complexity measures
		     - User comprehension testing

		  ### Qualitative Assessment

		  1. **Stakeholder Satisfaction**
		     - User surveys
		     - Expert reviews
		     - Regulator feedback

		  2. **Audit Results**
		     - Independent verification
		     - Compliance assessments
		     - Gap analysis

  ## 2024-2025: Regulatory Mandates and Standardised Documentation Frameworks

  The period from 2024-2025 witnessed transparency evolve from voluntary best practice to **legally mandated requirement**, with comprehensive regulatory frameworks and standardised documentation practices emerging across jurisdictions.

  ### EU AI Act Transparency Requirements

  The **EU AI Act**, entering force on 1st August 2024, established the world's first comprehensive legal framework requiring transparency for high-risk AI systems. **Article 13** mandated that providers ensure high-risk systems are designed and developed with transparency sufficient for users to interpret outputs and use them appropriately. Systems must include instructions for use containing: identity and contact details of the provider, characteristics and performance of the system, intended purpose, level of accuracy, and foreseeable unintended outcomes and sources of risk.

  For **general-purpose AI models** (GPAIs), Article 53 required providers to draw up technical documentation including training process details, data provenance, computational resources used, testing procedures, and results of internal and external evaluations.

  ### Model Card and Datasheet Proliferation

  **Model cards** and **datasheets** became de facto standards for AI system documentation in 2024-2025. Model cards provided standardised reporting of model characteristics, intended use, performance across demographic groups, and known limitations. Datasheets documented dataset composition, collection process, preprocessing steps, and recommended uses, enabling reproducibility and informed reuse.

  These documentation frameworks addressed transparency at multiple levels: technical specifications for practitioners, regulatory compliance for auditors, and accessibility summaries for general users, implementing the **layered transparency** approach recommended by standards bodies.

  ### Real-Time Explainability Tools

  New developments in 2024-2025 transformed transparency from static documentation to dynamic, real-time capabilities. Tools enabling **interactive explanations**, **counterfactual generation**, and **confidence interval visualisation** allowed users to interrogate AI systems during operation rather than relying solely on pre-deployment documentation.

  ### Sector-Specific Transparency Standards

  Healthcare, finance, and employment sectors developed domain-specific transparency requirements. The FDA's guidance on AI/ML-enabled medical devices (December 2024 and January 2025) established lifecycle transparency requirements including **predetermined change control plans**, enabling continuous learning whilst maintaining regulatory oversight and user awareness of system updates.

		  ## Related Terms

		  - **AI Trustworthiness** (AI-0061)
		  - **Explainability** (AI-0064)
		  - **Interpretability** (AI-0065)
		  - **Accountability** (AI-0068)
		  - **Documentation** (AI-0105)
		  - **AI Audit** (AI-0104)

		  ## Version History

		  - **1.0** (2025-10-27): Initial definition based on ISO/IEC TR 24028:2020 and IEEE 7001-2021

		  ---

		  *This definition aligns with international transparency standards and regulatory requirements for AI systems.*

		  ```

  - public-access:: true
  - definition:: The property of an AI system whereby relevant information about the system's design, operation, capabilities, limitations, and decision-making processes is accessible and understandable to appropriate stakeholders.


  ## Academic Context

  - Transparency in AI refers to the property of AI systems that ensures relevant information about their design, operation, capabilities, limitations, and decision-making processes is accessible and understandable to appropriate stakeholders.
  - This concept is foundational to responsible AI deployment, promoting trust, fairness, accountability, and ethical alignment.
  - Academic foundations draw from explainable AI (XAI), human-centred AI ethics, and governance frameworks that emphasise clarity in data provenance, algorithmic logic, user interaction, and societal impact.
  - Key developments include the formalisation of transparency into multiple dimensions: data transparency, algorithmic transparency, interaction transparency, and social transparency[1][4].

  ## Current Landscape (2025)

  - Industry adoption of AI transparency has accelerated, driven by regulatory pressures, ethical imperatives, and stakeholder demand for accountability.
  - Notable organisations such as IBM, Salesforce, and Sendbird provide frameworks and tools to enhance transparency through documentation, explainability, and auditability[1][4][5].
  - Transparency policies now commonly formalise commitments to explainability (plain-language descriptions of AI behaviour), interpretability (understanding internal model mechanics), and accountability (clear ownership of AI outcomes)[2].
  - In the UK, transparency is increasingly embedded in AI governance, with frameworks encouraging organisations to disclose AI use and decision logic to build trust.
  - Technical capabilities include advanced explainable AI methods, model documentation standards, and interactive user interfaces that clarify AI reasoning.
  - Limitations persist due to the complexity of some AI models (e.g., deep learning), potential trade-offs between transparency and performance, and challenges in communicating technical details to non-expert stakeholders.
  - Standards and frameworks such as the NIST AI Risk Management Framework and internal ethical AI principles guide responsible transparency practices[6].

  ## Research & Literature

  - Key academic sources include:
  - Doshi-Velez, F., & Kim, B. (2017). "Towards A Rigorous Science of Interpretable Machine Learning." *arXiv preprint arXiv:1702.08608*. https://arxiv.org/abs/1702.08608
  - Lipton, Z. C. (2018). "The Mythos of Model Interpretability." *Communications of the ACM*, 61(10), 36-43. https://doi.org/10.1145/3233231
  - Rudin, C. (2019). "Stop Explaining Black Box Models for High Stakes Decisions and Use Interpretable Models Instead." *Nature Machine Intelligence*, 1(5), 206-215. https://doi.org/10.1038/s42256-019-0048-x
  - Ongoing research explores balancing transparency with privacy, improving user-centric explanations, and developing standards for transparency measurement and auditing.

  ## UK Context

  - The UK has been proactive in AI transparency through initiatives by the Alan Turing Institute and government-backed AI ethics guidelines.
  - North England innovation hubs such as Manchester, Leeds, Newcastle, and Sheffield are fostering AI transparency research and applications, particularly in healthcare, finance, and public services.
  - For example, Manchester’s AI Centre for Doctoral Training integrates transparency principles in medical AI systems.
  - Leeds and Sheffield have collaborative projects focusing on explainable AI in industrial automation and smart city applications.
  - Regional case studies highlight the importance of stakeholder engagement and transparency in public sector AI deployments to build trust and ensure fairness[6].

  ## Future Directions

  - Emerging trends include:
  - Increased regulatory mandates for AI transparency, including public disclosure of AI decision-making processes.
  - Development of standardised transparency metrics and certification schemes.
  - Integration of transparency with other responsible AI principles such as fairness, privacy, and robustness.
  - Anticipated challenges:
  - Managing the complexity of AI models while maintaining understandable explanations.
  - Avoiding transparency fatigue among stakeholders overwhelmed by technical detail.
  - Balancing transparency with intellectual property and security concerns.
  - Research priorities focus on human-centred transparency, automated documentation tools, and transparency in multi-agent and adaptive AI systems.

  ## References

  1. Sendbird. (2025). *AI transparency: Definition and comprehensive guide*. Retrieved November 2025, from https://sendbird.com/blog/ai-transparency-guide  
  2. Fairnow. (2025). *What is an AI Transparency Policy? A Practical Guide for Enterprises*. Retrieved November 2025, from https://fairnow.ai/ai-transparency-policy-guide/  
  3. Doshi-Velez, F., & Kim, B. (2017). *Towards A Rigorous Science of Interpretable Machine Learning*. arXiv preprint arXiv:1702.08608. https://arxiv.org/abs/1702.08608  
  4. IBM. (2025). *What Is AI Transparency?* Retrieved November 2025, from https://www.ibm.com/think/topics/ai-transparency  
  5. Salesforce. (2025). *What Is AI Transparency?* Retrieved November 2025, from https://www.salesforce.com/artificial-intelligence/ai-transparency/  
  6. World Economic Forum. (2025). *Why transparency is key to unlocking AI's full potential*. Retrieved November 2025, from https://www.weforum.org/stories/2025/01/why-transparency-key-to-unlocking-ai-full-potential/  
  7. Lipton, Z. C. (2018). *The Mythos of Model Interpretability*. Communications of the ACM, 61(10), 36-43. https://doi.org/10.1145/3233231  
  8. Rudin, C. (2019). *Stop Explaining Black Box Models for High Stakes Decisions and Use Interpretable Models Instead*. Nature Machine Intelligence, 1(5), 206-215. https://doi.org/10.1038/s42256-019-0048-x  

  *Transparency: because even AI deserves to be an open book — preferably one that’s not written in hieroglyphics.*


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

  ## Formal Specification

  ```yaml
  term: Transparency
  definition: "Accessibility and comprehensibility of relevant AI system information to stakeholders"
  domain: AI Governance
  type: Quality Attribute
  scope:
  - system_design
  - training_data
  - algorithms
  - decision_processes
  - limitations
  - performance_metrics
  levels:
  - disclosure
  - comprehensibility
  - verifiability
  ```

  ## Formal Ontology

  #### References
  ### Primary Sources

		  1. **ISO/IEC TR 24028:2020** - Information technology — Artificial intelligence — Overview of trustworthiness in artificial intelligence
		     - Section 5.3: "Transparency"
		     - Defines transparency as disclosure of information about AI systems
		     - Source: ISO/IEC JTC 1/SC 42

		  2. **NIST AI Risk Management Framework (AI RMF 1.0)**, January 2023
		     - Section 2.2: "Accountable and Transparent"
		     - "Documentation is provided in a manner that is understandable to appropriate stakeholders"
		     - Source: National Institute of Standards and Technology

		  3. **EU AI Act** (Regulation 2024/1689), June 2024
		     - Article 13: "Transparency and provision of information to deployers"
		     - Article 50: "Transparency obligations for providers and users"
		     - Source: European Parliament and Council

		  ### Supporting Standards

		  4. **ISO/IEC 23894:2023** - Information technology — Artificial intelligence — Guidance on risk management
		     - Section 7.4.2: "Transparency of AI systems"
		     - Integration with risk management

		  5. **IEEE 7001-2021** - Transparency of Autonomous Systems
		     - Comprehensive transparency framework
		     - Five competency groups for transparency

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
