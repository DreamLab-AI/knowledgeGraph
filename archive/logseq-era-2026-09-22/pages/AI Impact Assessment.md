public:: true

# AI Impact Assessment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9a546ff9090ff84352d8fb08fe4f427b47603d964cca74ae7a8cc264db831a88",
  "@type": "Page",
  "vc:slug": "ai-impact-assessment",
  "title": "AI Impact Assessment",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:dpia",
      "vc:label": "DPIA"
    },
    {
      "@id": "urn:visionflow:linked:eu-ai-act-article-27",
      "vc:label": "EU AI Act Article 27"
    },
    {
      "@id": "urn:visionflow:linked:gdpr",
      "vc:label": "GDPR"
    },
    {
      "@id": "urn:visionflow:linked:informed-decision-making",
      "vc:label": "Informed decision-making"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23894-2023",
      "vc:label": "ISO/IEC 23894:2023"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-24368",
      "vc:label": "ISO/IEC 24368"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-42001-2023",
      "vc:label": "ISO/IEC 42001:2023"
    },
    {
      "@id": "urn:visionflow:linked:nist-ai-risk-management-framework",
      "vc:label": "NIST AI Risk Management Framework"
    },
    {
      "@id": "urn:visionflow:linked:un-guiding-principles-on-business-and-human-rights",
      "vc:label": "UN Guiding Principles on Business and Human Rights"
    },
    {
      "@id": "urn:visionflow:owl:class:accountability",
      "vc:label": "accountability"
    },
    {
      "@id": "urn:visionflow:owl:class:accountability",
      "vc:label": "Accountability"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-audit",
      "vc:label": "AI Audit"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance",
      "vc:label": "AI Governance"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-lifecycle",
      "vc:label": "AI Lifecycle"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:fairness",
      "vc:label": "Fairness"
    },
    {
      "@id": "urn:visionflow:owl:class:human-rights",
      "vc:label": "Human Rights"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:risk-management",
      "vc:label": "Risk Management"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:owl:class:stakeholder",
      "vc:label": "Stakeholder"
    },
    {
      "@id": "urn:visionflow:owl:class:transparency",
      "vc:label": "transparency"
    },
    {
      "@id": "urn:visionflow:owl:class:transparency",
      "vc:label": "Transparency"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0102"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "AI Impact Assessment"
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
  "@id": "urn:ngm:class:ai-impact-assessment",
  "@type": "Class",
  "label": "AI Impact Assessment",
  "definition": "A systematic process for identifying, analysing, evaluating, and documenting the potential positive and negative effects of an artificial intelligence system on individuals, groups, organisations, society, and the environment across multiple dimensions including fundamental rights, ethical principles, safety, fairness, privacy, environmental sustainability, and socioeconomic impacts, conducted prior to deployment and periodically thereafter to inform design decisions, risk mitigation strategies, governance arrangements, and stakeholder communication regarding AI system consequences.",
  "domain": "governance",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:ai-governance-and-ethics",
    "label": "AI Governance and Ethics"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:stakeholder-engagement",
        "label": "Stakeholder Engagement"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:ai-lifecycle",
        "label": "AI Lifecycle"
      },
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:stakeholder",
        "label": "Stakeholder"
      },
      {
        "@id": "urn:ngm:class:fairness",
        "label": "Fairness"
      },
      {
        "@id": "urn:ngm:class:human-rights",
        "label": "Human Rights"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:informed-decision-making",
        "label": "Informed decision-making"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:nist-ai-risk-management-framework",
        "label": "NIST AI Risk Management Framework"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:algorithmic-impact-assessment",
        "label": "Algorithmic Impact Assessment"
      },
      {
        "@id": "urn:ngm:class:human-rights-impact-assessment",
        "label": "Human Rights Impact Assessment"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-audit",
        "label": "AI Audit"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-iec-42001-2023",
        "label": "ISO-IEC 42001 2023"
      },
      {
        "@id": "urn:ngm:class:iso-iec-23894-2023",
        "label": "ISO-IEC 23894 2023"
      },
      {
        "@id": "urn:ngm:class:eu-ai-act-regulatory-instrument",
        "label": "EU AI Act Article 27"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      },
      {
        "@id": "urn:ngm:class:environmental-assessment",
        "label": "Environmental Impact Assessment"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-ethics",
        "label": "AI Ethics"
      },
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:algorithmic-impact-assessment",
      "label": "Algorithmic Impact Assessment"
    },
    {
      "@id": "urn:ngm:class:ai-fundamental-rights-impact-assessment",
      "label": "AI Fundamental Rights Impact Assessment"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ai-impact-assessment:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9a546ff9090ff84352d8fb08fe4f427b47603d964cca74ae7a8cc264db831a88"
  },
  "vc:resolutions": [
    {
      "raw": "[[DPIA]]",
      "resolved": "urn:visionflow:linked:dpia",
      "kind": "StubLink"
    },
    {
      "raw": "[[EU AI Act Article 27]]",
      "resolved": "urn:visionflow:linked:eu-ai-act-article-27",
      "kind": "StubLink"
    },
    {
      "raw": "[[GDPR]]",
      "resolved": "urn:visionflow:linked:gdpr",
      "kind": "StubLink"
    },
    {
      "raw": "[[Informed decision-making]]",
      "resolved": "urn:visionflow:linked:informed-decision-making",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 23894:2023]]",
      "resolved": "urn:visionflow:linked:iso-iec-23894-2023",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 24368]]",
      "resolved": "urn:visionflow:linked:iso-iec-24368",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 42001:2023]]",
      "resolved": "urn:visionflow:linked:iso-iec-42001-2023",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST AI Risk Management Framework]]",
      "resolved": "urn:visionflow:linked:nist-ai-risk-management-framework",
      "kind": "StubLink"
    },
    {
      "raw": "[[UN Guiding Principles on Business and Human Rights]]",
      "resolved": "urn:visionflow:linked:un-guiding-principles-on-business-and-human-rights",
      "kind": "StubLink"
    },
    {
      "raw": "[[Accountability]]",
      "resolved": "urn:visionflow:owl:class:accountability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[accountability]]",
      "resolved": "urn:visionflow:owl:class:accountability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Audit]]",
      "resolved": "urn:visionflow:owl:class:ai-audit",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Governance]]",
      "resolved": "urn:visionflow:owl:class:ai-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Lifecycle]]",
      "resolved": "urn:visionflow:owl:class:ai-lifecycle",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Fairness]]",
      "resolved": "urn:visionflow:owl:class:fairness",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Human Rights]]",
      "resolved": "urn:visionflow:owl:class:human-rights",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Risk Management]]",
      "resolved": "urn:visionflow:owl:class:risk-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stakeholder]]",
      "resolved": "urn:visionflow:owl:class:stakeholder",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transparency]]",
      "resolved": "urn:visionflow:owl:class:transparency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[transparency]]",
      "resolved": "urn:visionflow:owl:class:transparency",
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
  - A systematic process for identifying, analysing, evaluating, and documenting the potential positive and negative effects of an artificial intelligence system on individuals, groups, organisations, society, and the environment across multiple dimensions including fundamental rights, ethical principles, safety, fairness, privacy, environmental sustainability, and socioeconomic impacts, conducted prior to deployment and periodically thereafter to inform design decisions, risk mitigation strategies, governance arrangements, and stakeholder communication regarding AI system consequences.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AIImpactAssessment
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - enables:: [[Informed decision-making]], [[accountability]], [[transparency]], [[Accountability]], [[Transparency]]
  - bridges-to:: [[Smart Contract]] (domain: bc), [[Blockchain]] (domain: bc)

- ### Content

  ## Context and Significance

  AI impact assessment provides a structured approach to anticipating and understanding the far-reaching consequences of AI systems before they materialize, enabling proactive risk management and responsible innovation. Unlike traditional technology assessments focused primarily on technical performance or safety, AI impact assessment encompasses broader ethical, social, legal, and environmental dimensions reflecting AI's potential to affect fundamental aspects of human life and social organization.

  The NIST AI Risk Management Framework emphasises impact assessment as part of the MAP function, enabling organisations to understand AI system contexts and potential consequences. ISO/IEC 42001 requires organisations to conduct impact assessments for AI systems, considering effects on interested parties and compliance obligations. The EU AI Act mandates fundamental rights impact assessments for certain high-risk AI systems, establishing impact assessment as a regulatory requirement in some jurisdictions.

  Effective impact assessment is prospective (conducted before deployment), iterative (updated as systems and contexts evolve), participatory (involving affected stakeholders), and action-oriented (leading to concrete risk mitigation measures and governance arrangements).

  #### Key Characteristics
  - **Comprehensive scope**: Multiple impact dimensions beyond technical performance
		  - **Prospective orientation**: Conducted before deployment to enable proactive mitigation
		  - **Systematic methodology**: Structured process with defined steps and criteria
		  - **Stakeholder involvement**: Engagement with affected parties and experts
		  - **Context-specific**: Tailored to particular AI system and deployment setting
		  - **Risk and benefit assessment**: Evaluation of both positive and negative impacts
		  - **Mitigation planning**: Identification of measures to address negative impacts
		  - **Documentation requirement**: Formal records of assessment process and findings
		  - **Periodic review**: Regular updates as systems and contexts change
		  - **Decision-informing**: Results shape design, deployment, and governance choices

		  ## Impact Assessment Dimensions

		  ### 1. Fundamental Rights Impacts
		  - **Privacy and data protection**: Effects on personal information and surveillance
		  - **Non-discrimination and equality**: Potential for biased or unfair treatment
		  - **Freedom of expression and assembly**: Impacts on speech and association
		  - **Human dignity**: Respect for inherent worth of persons
		  - **Due process**: Procedural fairness in consequential decisions
		  - **Access to justice**: Ability to challenge AI-driven outcomes

		  ### 2. Ethical Impacts
		  - **Autonomy**: Effects on individual choice and self-determination
		  - **Human agency**: Preservation of meaningful human control
		  - **Justice and fairness**: Equitable distribution of benefits and burdens
		  - **Explicability**: Ability to understand and contest AI decisions
		  - **Beneficence**: Promotion of wellbeing and prevention of harm
		  - **Respect for persons**: Protection of dignity and individual rights

		  ### 3. Safety and Security Impacts
		  - **Physical safety**: Risks of injury or harm from AI operations
		  - **Cybersecurity**: Vulnerabilities to attacks or manipulation
		  - **System reliability**: Failure modes and their consequences
		  - **Adversarial robustness**: Resilience to intentional misuse
		  - **Emergency response**: Capabilities in crisis situations

		  ### 4. Socioeconomic Impacts
		  - **Employment effects**: Job displacement, creation, transformation
		  - **Economic distribution**: Concentration or diffusion of economic benefits
		  - **Access and inclusion**: Digital divide and participation barriers
		  - **Market competition**: Effects on competitive dynamics
		  - **Public services**: Impacts on access to essential services
		  - **Community cohesion**: Effects on social relationships and trust

		  ### 5. Environmental Impacts
		  - **Energy consumption**: Computational resource requirements
		  - **Carbon footprint**: Greenhouse gas emissions from AI infrastructure
		  - **Resource depletion**: Use of raw materials for hardware
		  - **Electronic waste**: End-of-life disposal challenges
		  - **Environmental applications**: Positive contributions to sustainability

		  ### 6. Psychological and Social Impacts
		  - **Mental health and wellbeing**: Effects on stress, anxiety, self-esteem
		  - **Social relationships**: Impacts on human interactions and communities
		  - **Manipulation and persuasion**: Risks of exploiting psychological vulnerabilities
		  - **Information quality**: Effects on knowledge and truth
		  - **Cultural impacts**: Influences on values, norms, and practices

		  ## Assessment Process

		  ### 1. Scoping and Planning
		  - Define AI system and its intended purposes
		  - Identify relevant impact dimensions and stakeholders
		  - Establish assessment methodology and resources
		  - Set timeline and responsibilities

		  ### 2. Stakeholder Engagement
		  - Identify affected parties and rights holders
		  - Conduct consultations and gather perspectives
		  - Incorporate domain expert input
		  - Address power imbalances in participation

		  ### 3. Impact Identification
		  - Systematically examine potential effects across dimensions
		  - Consider both intended and unintended consequences
		  - Identify both positive and negative impacts
		  - Address direct, indirect, and cumulative effects

		  ### 4. Impact Analysis and Evaluation
		  - Assess likelihood and severity of identified impacts
		  - Evaluate impact significance using defined criteria
		  - Prioritise impacts requiring mitigation
		  - Consider distributional effects across groups

		  ### 5. Mitigation Planning
		  - Identify measures to prevent or reduce negative impacts
		  - Design safeguards and oversight mechanisms
		  - Establish monitoring and response procedures
		  - Allocate responsibilities for mitigation implementation

		  ### 6. Documentation and Communication
		  - Prepare comprehensive impact assessment report
		  - Communicate findings to stakeholders and decision-makers
		  - Make assessment accessible to affected parties (subject to confidentiality)
		  - Maintain audit trail of assessment process

		  ### 7. Review and Update
		  - Monitor actual impacts post-deployment
		  - Conduct periodic reassessment
		  - Update assessment for significant system or context changes
		  - Incorporate lessons learned into future assessments

		  ## Relationships

		  - **Required by**: AI Governance, regulatory frameworks (EU AI Act)
		  - **Informs**: Risk Management, design decisions, deployment planning
		  - **Involves**: Stakeholders, affected parties, domain experts
		  - **Part of**: AI Lifecycle activities (development, deployment phases)
		  - **Produces**: Assessment reports, mitigation plans, documentation
		  - **Enables**: Informed decision-making, accountability, transparency
		  - **Overlaps with**: Human Rights Impact Assessment, DPIA, EIA
		  - **Inputs to**: AI Audit, compliance demonstration
		  - **Triggered by**: New AI system development, significant system changes
		  - **Supported by**: Assessment frameworks, methodologies, tools

		  ## Examples and Applications

		  1. **Facial Recognition Surveillance AIIA**: City government assesses proposed public space facial recognition system, consulting civil liberties groups, minority communities, security experts, and legal advisors, evaluating impacts on privacy, freedom of movement, discrimination risks for minorities, public safety benefits, and chilling effects on assembly and protest, resulting in restrictions on use cases, enhanced oversight requirements, transparency measures, and community review board with ongoing monitoring authority
		  2. **Healthcare Diagnostic AI AIIA**: Hospital conducts impact assessment for cancer screening AI, engaging patient advocates, clinicians, ethicists, and disability rights groups, evaluating effects on diagnostic accuracy, clinician workflow, patient anxiety, healthcare equity across demographics, liability and insurance implications, data privacy, and resource allocation, leading to decision for human-in-the-loop implementation, enhanced patient communication protocols, demographic performance monitoring, and annual reassessment requirements
		  3. **Automated Benefits Determination AIIA**: Government agency assesses AI system for welfare eligibility decisions, consulting beneficiaries, social workers, legal aid organisations, and technology experts, examining impacts on access to essential services, procedural fairness, discrimination risks, administrative efficiency, appeal rights, dignity of applicants, and technology barriers for vulnerable populations, resulting in human review requirements for adverse decisions, enhanced explanation capabilities, accessibility accommodations, and independent ombudsperson oversight
		  4. **Generative AI Content Platform AIIA**: Social media company assesses generative AI features for content creation and recommendation, engaging content creators, researchers studying online harms, child safety organisations, misinformation experts, and user communities, evaluating impacts on creative industries, misinformation propagation, child safety, mental health, content moderation challenges, and cultural representation, implementing provenance labelling, content authentication, safety filters, user controls, and ongoing impact monitoring

		  ## ISO/IEC Standards Alignment

		  **ISO/IEC 42001:2023** (AI Management Systems):
		  - Clause 8.2: Impact assessment requirements
		  - Clause 4.1: Understanding organisational context including impacts
		  - Clause 4.2: Understanding interested party needs and expectations
		  - Clause 6.1: Actions to address risks based on impact assessment

		  **ISO/IEC 23894:2023** (AI Risk Management):
		  - Impact assessment as component of risk management process
		  - Consideration of impacts on stakeholders and society
		  - Documentation of impact analysis

		  **ISO/IEC 24368** (Overview of Ethical and Societal Concerns):
		  - Framework for assessing ethical impacts
		  - Societal consideration in AI systems

		  ## NIST AI RMF Integration

		  **MAP Function**:
		  - MAP-1: Context established including impacts on stakeholders
		  - MAP-2: Categorization considering impact severity
		  - MAP-3: AI capabilities and consequences documented
		  - MAP-5: Impact on individuals and communities assessed

		  **MEASURE Function**:
		  - Metrics addressing identified impact dimensions
		  - Measurement of actual impacts against predictions
		  - Ongoing monitoring of impact-related indicators

		  **MANAGE Function**:
		  - Risk responses addressing identified impacts
		  - Mitigation measures for negative impacts
		  - Communication to affected parties about impacts

		  **GOVERN Function**:
		  - Governance processes incorporate impact assessment
		  - Stakeholder engagement in impact assessment
		  - Accountability for managing identified impacts

		  ## Implementation Considerations

		  **Methodological Approaches**:
		  - Algorithmic Impact Assessment (AIA) frameworks
		  - Human Rights Impact Assessment (HRIA) methodologies
		  - Data Protection Impact Assessment (DPIA) processes
		  - Environmental Impact Assessment (EIA) methods adapted for AI
		  - Ethical impact assessment tools and checklists

		  **Assessment Tools and Resources**:
		  - Impact assessment frameworks and templates
		  - Stakeholder consultation protocols
		  - Evaluation criteria and scoring systems
		  - Documentation templates and reporting standards
		  - Case study repositories and lessons learned

		  **Organisational Capabilities**:
		  - Trained impact assessment practitioners
		  - Cross-functional assessment teams (technical, legal, ethical, domain experts)
		  - Stakeholder engagement processes and relationships
		  - Integration with decision-making and governance structures
		  - Documentation and knowledge management systems

		  **Challenges**:
		  - Predicting impacts of novel AI capabilities
		  - Identifying indirect and long-term consequences
		  - Engaging marginalized or hard-to-reach stakeholders
		  - Balancing comprehensiveness with feasibility
		  - Addressing uncertainty in impact predictions
		  - Preventing assessment becoming box-ticking exercise
		  - Maintaining assessment currency as systems evolve
		  - Ensuring assessment genuinely influences decisions

		  **Best Practices**:
		  - Conduct assessment early in AI lifecycle
		  - Adopt participatory approaches with stakeholder involvement
		  - Use structured methodologies while remaining context-sensitive
		  - Document assessment process transparently
		  - Ensure assessment informs actual design and deployment decisions
		  - Establish ongoing monitoring of predicted impacts
		  - Update assessments when systems or contexts change significantly
		  - Learn from assessment experience and refine approaches
		  - Make assessments accessible to affected parties (subject to legitimate confidentiality)
		  - Integrate with broader risk management and governance

		  ## Regulatory and Policy Context

		  **EU AI Act**: Mandates fundamental rights impact assessments for specified high-risk AI systems under Article 27; these requirements apply from August 2026, and organisations should now be adapting internal processes accordingly

		  **GDPR**: Requires Data Protection Impact Assessments (DPIAs) for high-risk data processing, often applicable to AI

		  **Canada: Directive on Automated Decision-Making**: Requires Algorithmic Impact Assessments for government AI

		  **UN Guiding Principles on Business and Human Rights**: Imply human rights impact assessment for AI affecting rights

		  **Growing Jurisdictional Requirements**: Increasing regulatory mandates for AI impact assessment

		  ## Related Terms

		  - **Risk Management**: Related process focusing on risk identification and mitigation
		  - **AI Governance**: Framework incorporating impact assessment requirements
		  - **Stakeholder**: Parties consulted and considered in impact assessment
		  - **Human Rights**: Key dimension of impact assessment
		  - **Fairness**: Impact dimension addressing equitable treatment
		  - **Transparency**: Principle supporting impact assessment disclosure
		  - **Accountability**: Outcome enabled by impact assessment
		  - **AI Lifecycle**: Process incorporating impact assessment activities
		  - **AI Audit**: Related verification process using impact assessment documentation

  #### References
  1. European Commission, *Proposal for a Regulation on Artificial Intelligence (AI Act)*, Article 27 (2021)
  2. ISO/IEC 42001:2023, *Information technology — Artificial intelligence — Management system*
  3. Government of Canada, *Algorithmic Impact Assessment Tool* (2020)
  4. BSI, *Identifying and managing AI bias* (2023)
  5. Moss, E. et al., *Assembling Accountability: Algorithmic Impact Assessment for the Public Interest* (2021)

  ## See Also

  - [[Risk Management]]
  - [[AI Governance]]
  - [[Stakeholder]]
  - [[Human Rights]]
  - [[Fairness]]
  - [[Transparency]]
  - [[Accountability]]
  - [[AI Lifecycle]]
  - [[AI Audit]]
  - [[DPIA]]

- ### Provenance
  - sources:: [[NIST AI Risk Management Framework]], [[ISO/IEC 42001:2023]], [[ISO/IEC 23894:2023]], [[ISO/IEC 24368]], [[EU AI Act Article 27]], [[GDPR]], [[UN Guiding Principles on Business and Human Rights]]
  - migration-date:: 2026-04-26T00:00:00Z
  - modified:: 2026-04-26T15:00:00Z
