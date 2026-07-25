public:: true

# AI Trustworthiness
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:85fb2266473c3cdf13f2f211c80bf22905a384f5a25fbea9241fd95165aa0f3d",
  "@type": "Page",
  "vc:slug": "ai-trustworthiness",
  "title": "AI Trustworthiness",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-assurance-ai-0102",
      "vc:label": "AI Assurance (AI-0102)"
    },
    {
      "@id": "urn:visionflow:linked:gdpr",
      "vc:label": "GDPR"
    },
    {
      "@id": "urn:visionflow:linked:governance-framework-ai-0035",
      "vc:label": "Governance Framework (AI-0035)"
    },
    {
      "@id": "urn:visionflow:linked:ieee-p7009",
      "vc:label": "IEEE P7009"
    },
    {
      "@id": "urn:visionflow:linked:responsible-ai-ai-0033",
      "vc:label": "Responsible AI (AI-0033)"
    },
    {
      "@id": "urn:visionflow:linked:risk-management-ai-0062",
      "vc:label": "Risk Management (AI-0062)"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
    },
    {
      "@id": "urn:visionflow:owl:class:eu-ai-act",
      "vc:label": "EU AI Act"
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
      "vc:value": "AI-0061"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "AI Trustworthiness"
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
  "@id": "urn:ngm:class:ai-trustworthiness",
  "@type": "Class",
  "label": "AI Trustworthiness",
  "definition": "The degree to which an AI system demonstrates characteristics that warrant confidence and reliance, encompassing transparency, explainability, fairness, accountability, robustness, reliability, safety, security, and privacy throughout its lifecycle.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:ai-governance-and-ethics",
    "label": "AI Governance and Ethics"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:explainability",
        "label": "Explainability"
      },
      {
        "@id": "urn:ngm:class:fairness",
        "label": "Fairness"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:robustness",
        "label": "Robustness"
      },
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:governance-framework",
        "label": "Governance Framework (AI-0035)"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management (AI-0062)"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      },
      {
        "@id": "urn:ngm:class:human-oversight",
        "label": "Human Oversight"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI (AI-0033)"
      },
      {
        "@id": "urn:ngm:class:human-ai-collaboration",
        "label": "Human-AI Collaboration"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:conformity-assessment",
        "label": "Conformity Assessment"
      },
      {
        "@id": "urn:ngm:class:ai-audit",
        "label": "AI Audit"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:nist-ai-risk-management-framework",
        "label": "NIST AI Risk Management Framework"
      },
      {
        "@id": "urn:ngm:class:oecd-ai-principles",
        "label": "OECD AI Principles"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:eu-ai-act-regulatory-instrument",
        "label": "EU AI Act"
      },
      {
        "@id": "urn:ngm:class:iso-iec-tr-24028",
        "label": "ISO/IEC TR 24028"
      },
      {
        "@id": "urn:ngm:class:ieee-p-7009",
        "label": "IEEE P7009"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:algorithmic-bias",
        "label": "Algorithmic Bias"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-ethics",
        "label": "AI Ethics"
      },
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      },
      {
        "@id": "urn:ngm:class:privacy-by-design",
        "label": "Privacy By Design"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-agent-system",
        "label": "AI Agent System"
      },
      {
        "@id": "urn:ngm:class:cybersecurity-framework",
        "label": "Cybersecurity Framework"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:trustworthy-ai",
      "label": "Trustworthy AI"
    },
    {
      "@id": "urn:ngm:class:ai-reliability-and-safety",
      "label": "AI Reliability and Safety"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ai-trustworthiness:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:85fb2266473c3cdf13f2f211c80bf22905a384f5a25fbea9241fd95165aa0f3d"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Assurance (AI-0102)]]",
      "resolved": "urn:visionflow:linked:ai-assurance-ai-0102",
      "kind": "StubLink"
    },
    {
      "raw": "[[GDPR]]",
      "resolved": "urn:visionflow:linked:gdpr",
      "kind": "StubLink"
    },
    {
      "raw": "[[Governance Framework (AI-0035)]]",
      "resolved": "urn:visionflow:linked:governance-framework-ai-0035",
      "kind": "StubLink"
    },
    {
      "raw": "[[IEEE P7009]]",
      "resolved": "urn:visionflow:linked:ieee-p7009",
      "kind": "StubLink"
    },
    {
      "raw": "[[Responsible AI (AI-0033)]]",
      "resolved": "urn:visionflow:linked:responsible-ai-ai-0033",
      "kind": "StubLink"
    },
    {
      "raw": "[[Risk Management (AI-0062)]]",
      "resolved": "urn:visionflow:linked:risk-management-ai-0062",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Agent System]]",
      "resolved": "urn:visionflow:owl:class:ai-agent-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[EU AI Act Regulatory Instrument]]",
      "resolved": "urn:visionflow:owl:class:eu-ai-act",
      "kind": "ResolvedLink"
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
  - The degree to which an AI system demonstrates characteristics that warrant confidence and reliance, encompassing transparency, explainability, fairness, accountability, robustness, reliability, safety, security, and privacy throughout its lifecycle.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AITrustworthiness
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - bridges-to:: [[AI Agent System]]
  - requires:: [[Risk Management (AI-0062)]], [[Governance Framework (AI-0035)]]
  - enables:: [[Responsible AI (AI-0033)]], [[AI Assurance (AI-0102)]]

- ### Content
  - The degree to which an AI system demonstrates characteristics that warrant confidence and reliance, encompassing transparency, explainability, fairness, accountability, robustness, reliability, safety, security, and privacy throughout its lifecycle.

  ## Formal Specification

  ```yaml
  term: AI Trustworthiness
  definition: "Composite property of AI systems encompassing technical, ethical, and operational characteristics that justify stakeholder confidence"
  domain: AI Ethics and Governance
  type: Quality Attribute
  dimensions:
  - transparency
  - explainability
  - fairness
  - accountability
  - robustness
  - reliability
  - safety
  - security
  - privacy
  measurement: Multi-dimensional assessment framework
  ```

  ## Academic Context

  - Trustworthiness in AI refers to the extent an AI system exhibits qualities that justify confidence and reliance by users and stakeholders.
  - These qualities include transparency, explainability, fairness, accountability, robustness, reliability, safety, security, and privacy throughout the AI system’s lifecycle.
  - The concept is grounded in ethical, legal, and technical frameworks that ensure AI operates lawfully, ethically, and robustly.
  - Key developments include the formalisation of trustworthiness principles by international bodies such as the European Commission’s High-Level Expert Group on AI, the OECD, and national standards organisations.
  - The EU’s Ethics Guidelines for Trustworthy AI and the EU AI Act (effective August 2024) have been pivotal in defining legal and ethical expectations.
  - Academic foundations draw from interdisciplinary fields including computer science, law, ethics, and social sciences, focusing on mitigating AI risks and fostering human-centric AI design.

  ## Current Landscape (2025–2026)

  - Industry adoption of trustworthy AI principles is widespread, with organisations implementing governance frameworks, continuous monitoring, and risk management to uphold trustworthiness.
  - Notable platforms and companies globally and in the UK emphasise transparency and fairness in AI deployment.
  - In the UK, especially in North England cities such as Manchester, Leeds, Newcastle, and Sheffield, AI trustworthiness is a focus within innovation hubs and academic institutions, integrating ethical AI research with practical applications.
  - Technical capabilities have advanced in explainability and robustness, though challenges remain in fully demystifying complex models like deep learning “black boxes.”
  - Standards and frameworks continue to evolve, with the EU AI Act setting a comprehensive regulatory baseline and organisations adopting OECD AI Principles to guide responsible AI stewardship.

  ## Research & Literature

  - Key academic sources include:
  - Goisauf, M. (2025). "Trust, Trustworthiness, and the Future of Medical AI." *Journal of Medical Internet Research*, 27(1), e71236. DOI: 10.2196/71236.
  - The University of Melbourne & KPMG International (2025). "Trust, attitudes and use of artificial intelligence: A global study 2025." DOI: 10.26188/28822919.
  - Smuha, S., et al. (2024). "Legally Trustworthy AI: Pillars and Frameworks." *European AI Law Review*, 3(2), 45-67.
  - Ongoing research explores improving AI transparency, accountability mechanisms, fairness metrics, and integrating human oversight to address emerging ethical and technical challenges.

  ## UK Context

  - The UK has been proactive in AI ethics and trustworthiness, with government initiatives and research centres promoting responsible AI.
  - North England hosts several innovation hubs focusing on trustworthy AI:
  - Manchester’s AI research institutes collaborate with industry to develop transparent and fair AI systems.
  - Leeds and Sheffield contribute through interdisciplinary projects linking AI ethics with social impact.
  - Newcastle is notable for work on AI robustness and safety in critical infrastructure.
  - Regional case studies include public sector AI deployments in healthcare and transport, emphasising accountability and privacy compliance in line with UK and EU regulations.

  ## Future Directions

  - Emerging trends include:
  - Greater integration of AI trustworthiness into regulatory frameworks beyond the EU, influencing UK policy post-Brexit.
  - Advances in explainable AI (XAI) techniques to reduce opacity in complex models.
  - Enhanced AI lifecycle governance incorporating continuous risk assessment and stakeholder engagement.
  - Anticipated challenges:
  - Balancing innovation speed with rigorous trustworthiness standards.
  - Addressing biases embedded in training data and algorithms.
  - Ensuring equitable AI benefits across diverse populations.
  - Research priorities focus on scalable transparency methods, legal accountability frameworks, and socio-technical approaches to embed trustworthiness in AI design and deployment.

  ## References

  1. Goisauf, M. (2025). Trust, Trustworthiness, and the Future of Medical AI. *Journal of Medical Internet Research*, 27(1), e71236. https://doi.org/10.2196/71236  
  2. The University of Melbourne & KPMG International. (2025). Trust, attitudes and use of artificial intelligence: A global study 2025. https://doi.org/10.26188/28822919  
  3. Smuha, S., et al. (2024). Legally Trustworthy AI: Pillars and Frameworks. *European AI Law Review*, 3(2), 45-67.  
  4. European Commission. (2024). Ethics Guidelines for Trustworthy AI.  
  5. OECD. (2024). OECD AI Principles. Organisation for Economic Co-operation and Development.  
  6. UK Government Office for AI. (2025). AI Strategy and Ethics Framework.  
  7. Regional AI Innovation Hubs Reports: Manchester, Leeds, Newcastle, Sheffield (2025).


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

  #### References
  ### Primary Sources

		  1. **ISO/IEC TR 24028:2020** - Information technology — Artificial intelligence — Overview of trustworthiness in artificial intelligence
		     - Section 5: "Trustworthiness properties"
		     - Defines core dimensions of AI trustworthiness
		     - Source: ISO/IEC JTC 1/SC 42

		  2. **NIST AI Risk Management Framework (AI RMF 1.0)**, January 2023
		     - Section 2.2: "Trustworthy AI"
		     - Characteristics: valid and reliable, safe, secure and resilient, accountable and transparent, explainable and interpretable, privacy-enhanced, fair with harmful bias managed
		     - Source: National Institute of Standards and Technology

		  3. **EU AI Act** (Regulation 2024/1689), June 2024
		     - Article 3(20): Definition of trustworthy AI
		     - Recital 48: Trustworthiness requirements
		     - Source: European Parliament and Council

		  ### Supporting Standards

		  4. **ISO/IEC 23894:2023** - Information technology — Artificial intelligence — Guidance on risk management
		     - Section 6.4: "Trustworthiness considerations"
		     - Integration with risk management processes

		  5. **IEEE 7000-2021** - Model Process for Addressing Ethical Concerns During System Design
		     - Trust as foundational ethical value
		     - Stakeholder trust requirements

- ### Provenance
  - sources:: [[EU AI Act Regulatory Instrument]], [[GDPR]], [[IEEE P7009]]
  - migration-date:: 2026-04-26T00:00:00Z
  - modified:: 2026-04-26T15:00:00Z
