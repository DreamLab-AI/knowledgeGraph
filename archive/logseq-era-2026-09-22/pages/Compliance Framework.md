public:: true

# Compliance Framework
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b12d961c5ae98c9926de74a0e32ac0a2dc54fed1819d469711aa6fe319e6e38c",
  "@type": "Page",
  "vc:slug": "compliance-framework",
  "title": "Compliance Framework",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9529"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Compliance Framework"
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
  "@id": "urn:ngm:class:compliance-framework",
  "@type": "Class",
  "label": "Compliance Framework",
  "definition": "A Compliance Framework is a structured set of policies, controls, procedures, and audit mechanisms that organisations implement to satisfy regulatory obligations and industry standards governing the design, development, and deployment of systems — especially AI and data-intensive systems. It systematically maps external legal requirements (such as the EU AI Act, GDPR, ISO 42001, and NIST AI RMF) onto internal risk registers, technical documentation, accountability chains, and monitoring pipelines. A compliance framework defines the scope of applicability, assigns ownership of controls, establishes evidence-collection workflows, and mandates review cycles so that organisations can continuously demonstrate conformance to auditors, regulators, and stakeholders. It bridges governance intent with operational practice by providing a traceable path from regulatory obligation through implemented control to verified outcome.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-ethics",
        "label": "AI Ethics"
      },
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      },
      {
        "@id": "urn:ngm:class:information-security",
        "label": "Information Security"
      },
      {
        "@id": "urn:ngm:class:privacy-engineering",
        "label": "Privacy Engineering"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      },
      {
        "@id": "urn:ngm:class:eu-ai-act-regulatory-instrument",
        "label": "EU AI Act"
      },
      {
        "@id": "urn:ngm:class:nist-ai-rmf",
        "label": "NIST AI RMF"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-42001",
        "label": "ISO 42001"
      },
      {
        "@id": "urn:ngm:class:iso-27001",
        "label": "ISO 27001"
      },
      {
        "@id": "urn:ngm:class:nist-cybersecurity-framework",
        "label": "NIST Cybersecurity Framework"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      },
      {
        "@id": "urn:ngm:class:corporate-governance",
        "label": "Corporate Governance"
      },
      {
        "@id": "urn:ngm:class:ai-model-card",
        "label": "Model Card"
      },
      {
        "@id": "urn:ngm:class:algorithmic-impact-assessment",
        "label": "Algorithmic Impact Assessment"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:explainable-ai",
        "label": "Explainable AI"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:regulatory-compliance-framework",
      "label": "Regulatory Compliance Framework"
    },
    {
      "@id": "urn:ngm:class:governance-and-compliance-framework",
      "label": "Governance and Compliance Framework"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:compliance-framework:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b12d961c5ae98c9926de74a0e32ac0a2dc54fed1819d469711aa6fe319e6e38c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
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
  - A Compliance Framework is a structured set of policies, controls, procedures, and audit mechanisms that organisations implement to satisfy regulatory obligations and industry standards governing the design, development, and deployment of systems — particularly AI and data-intensive systems. It maps external legal requirements such as the [[EU AI Act]], [[GDPR]], and [[NIST AI RMF]] onto internal [[Risk Management]] processes, technical documentation, and monitoring pipelines, enabling organisations to demonstrate [[Accountability]] and [[Transparency]] to regulators and stakeholders. The framework bridges governance intent with operational practice by providing a traceable path from regulatory obligation through implemented [[Policy Management]] to verified outcome.

- ### Overview
  - A Compliance Framework is not a single document or tool but a systemic approach to managing regulatory obligations as an integrated operational discipline. Organisations face a growing and heterogeneous body of law — data protection statutes, sector-specific safety mandates, cross-border transfer restrictions, algorithmic accountability requirements — and a compliance framework provides the architecture to satisfy those obligations coherently rather than ad hoc.
  - The framework typically covers:
    - Identification and scoping of applicable regulations across jurisdictions
    - Mapping legal obligations to specific organisational controls and process owners
    - Maintenance of a living control catalogue with implementation evidence
    - Continuous monitoring to detect non-conformance before it becomes reportable breach
    - A review and update cycle tied to regulatory change, product changes, and audit findings
  - For AI systems specifically, compliance frameworks must additionally address risks unique to machine-learning pipelines: data quality and provenance, model explainability, bias and fairness assessments, and the behaviour of models in production under distributional shift.
  - Compliance frameworks distinguish themselves from mere checklists through their lifecycle orientation. They are not satisfied once at deployment and forgotten; they demand ongoing evidence accumulation, periodic internal audits, and external conformity assessments for regulated product categories.

- ### Key Components
  - **Risk Classification Layer**
    - Determines which regulations apply and at what level of stringency
    - For AI, the [[EU AI Act]] imposes tiered obligations based on risk category (unacceptable, high, limited, minimal)
    - Outcome: a scoped obligations register per product or service
  - **Control Catalogue**
    - An enumerated set of technical and organisational measures (TOMs) mapped to each obligation
    - Technical controls: access control, [[Data Encryption]], logging, differential privacy, model version control
    - Organisational controls: training programmes, role-based responsibilities, change-management procedures
    - Referenced standards: [[ISO 27001]], [[ISO 42001]], [[NIST Cybersecurity Framework]]
  - **Evidence Collection and Documentation**
    - [[Audit Trail]] mechanisms (immutable logs, timestamped model cards)
    - [[Model Card]] and system cards documenting AI component behaviour
    - [[Algorithmic Impact Assessment]] for high-risk deployment decisions
    - Data processing records required under [[GDPR]] Article 30
    - Conformity assessment files for [[EU AI Act]] Annex IV high-risk systems
  - **Accountability and Ownership Assignment**
    - Designated Data Protection Officer (DPO) under GDPR
    - AI System Owner responsible for post-market monitoring
    - Board-level sign-off for high-risk AI deployment decisions
    - Links into [[Corporate Governance]] and organisational accountability chains
  - **Monitoring and Incident Response**
    - Continuous monitoring pipelines for model performance drift and data-quality degradation
    - Incident classification and mandatory notification timelines (e.g., 72-hour GDPR breach notification)
    - Corrective action tracking tied to root-cause analysis
  - **Review and Update Cycle**
    - Triggered by: new regulation or guidance, product feature changes, audit findings, incident post-mortems
    - Annual review at minimum; continuous for high-risk AI systems under [[EU AI Act]] post-market obligations

- ### Mechanisms
  - **Regulatory Mapping Tables**
    - Cross-reference matrices linking specific legislative articles to control identifiers
    - Used by compliance teams to quickly locate applicable obligations when requirements change
  - **Risk Register Integration**
    - Compliance controls feed into and draw from the organisational [[Risk Management]] function
    - Residual risk acceptance decisions are recorded and owned at appropriate authority levels
  - **Automated Compliance Monitoring**
    - Policy-as-code tools (e.g., Open Policy Agent) translate control requirements into machine-evaluable rules
    - Integration with CI/CD pipelines enables compliance checks at build time rather than retrospectively
  - **Third-Party and Supply-Chain Controls**
    - Vendor assessments and contractual obligations to extend compliance requirements to [[Data Processor]] partners
    - Relevant to [[AI Supply Chain]] integrity and model provenance tracking
  - **Immutable Audit Logs via Distributed Ledger**
    - [[Blockchain]] and distributed ledger technologies provide tamper-evident audit trails
    - [[Smart Contract]] logic can enforce and record compliance events automatically
    - Particularly relevant for cross-jurisdictional evidence sharing where no single party is trusted custodian

- ### Applications and Use Cases
  - **AI System Deployment in Regulated Sectors**
    - Healthcare organisations deploying diagnostic AI must satisfy both Medical Device Regulation and [[EU AI Act]] high-risk requirements, including clinical evaluation and post-market surveillance integration into the compliance framework
    - Financial services firms apply compliance frameworks to credit-scoring models under Fair Lending laws and [[GDPR]] profiling restrictions
  - **GDPR and Data Privacy Compliance**
    - Organisations map GDPR obligations (lawful basis, data subject rights, DPIA requirements) through a compliance framework to ensure every data processing activity has documented controls and ownership
  - **EU AI Act Conformity Assessment**
    - High-risk AI system providers use compliance frameworks to maintain the Annex IV technical documentation file and demonstrate ongoing conformance to notified body assessors
  - **Information Security Compliance**
    - [[ISO 27001]] certification programmes are structured as compliance frameworks: ISMS scope, Statement of Applicability, risk treatment plans, and annual surveillance audits
  - **Cross-Jurisdictional Operations**
    - Multinational organisations use unified compliance frameworks with jurisdiction-specific annexes to satisfy EU, US, UK, and APAC regulatory requirements without managing entirely separate programmes
  - **Responsible AI Programmes**
    - Technology companies implement internal [[Responsible AI]] compliance frameworks (often referencing [[NIST AI RMF]] Govern/Map/Measure/Manage functions) to operationalise ethics commitments into enforceable controls
  - **Government and Public Sector**
    - Public bodies deploying AI in benefits administration or law enforcement are required in many jurisdictions to conduct [[Algorithmic Impact Assessment]] as part of a statutory compliance framework

- ### Relationships
  - requires:: [[Risk Management]]
  - requires:: [[Data Governance]]
  - requires:: [[Audit Trail]]
  - requires:: [[Policy Management]]
  - enables:: [[Regulatory Compliance]]
  - enables:: [[Accountability]]
  - enables:: [[Transparency]]
  - enables:: [[Organisational Trust]]
  - supports:: [[AI Ethics]]
  - supports:: [[Responsible AI]]
  - supports:: [[Information Security]]
  - supports:: [[Privacy Engineering]]
  - implements:: [[GDPR]]
  - implements:: [[EU AI Act]]
  - implements:: [[NIST AI RMF]]
  - standardizedBy:: [[ISO 42001]]
  - standardizedBy:: [[ISO 27001]]
  - standardizedBy:: [[NIST Cybersecurity Framework]]
  - relatedTo:: [[AI Governance]]
  - relatedTo:: [[Corporate Governance]]
  - relatedTo:: [[Model Card]]
  - relatedTo:: [[Algorithmic Impact Assessment]]
  - contrastsWith:: [[Voluntary Guidelines]]
  - bridges-to:: [[Blockchain]]
  - bridges-to:: [[Smart Contract]]
  - bridges-to:: [[Explainable AI]]

- ### Standards and Regulatory Context
  - **EU AI Act (2024)**
    - First comprehensive AI-specific regulation imposing mandatory compliance obligations on providers and deployers of high-risk AI systems in the EU market
    - Requires: conformity assessment, technical documentation, post-market monitoring plans, serious incident reporting, and human oversight measures
    - Compliance frameworks for AI must incorporate the Act's risk tiers as a primary classification criterion
  - **GDPR (2018, EU)**
    - Data protection framework with direct bearing on AI systems that process personal data
    - Key compliance obligations: lawful basis for processing, Data Protection Impact Assessment (DPIA), data subject rights fulfilment, breach notification, Data Protection Officer appointment
  - **ISO/IEC 42001:2023 — AI Management System**
    - First international standard providing a management system framework specifically for responsible AI
    - Certifiable standard; enables organisations to demonstrate AI governance maturity through independent audit
    - Directly cited as a reference standard within [[EU AI Act]] technical documentation guidance
  - **ISO/IEC 27001:2022 — Information Security Management**
    - Widely adopted certifiable compliance framework for information security
    - Provides the template pattern (scope, Statement of Applicability, risk treatment, surveillance audits) that many AI compliance frameworks emulate
  - **NIST AI Risk Management Framework (2023)**
    - Voluntary but widely adopted US framework providing a structured approach to AI risk (Govern, Map, Measure, Manage)
    - Heavily referenced in US executive orders on AI and by sector regulators (FDA, financial regulators)
  - **SOC 2 Type II**
    - US auditing standard for technology service providers covering security, availability, processing integrity, confidentiality, and privacy
    - Often required by enterprise customers; compliance frameworks frequently integrate SOC 2 as a workstream
  - **UK AI Safety Institute Guidance**
    - Provides evaluation frameworks for frontier AI systems; increasingly influencing organisational compliance framework design in the UK post-Brexit regulatory context
  - **COBIT and ITIL**
    - IT governance and service management frameworks that underpin the process-layer components of compliance programmes, particularly for operational controls and change management

- ### Provenance
  - sources:: EU AI Act (2024), ISO 42001:2023, NIST AI RMF (2023), GDPR (2018), ISO 27001:2022
  - updated:: 2026-06-13
