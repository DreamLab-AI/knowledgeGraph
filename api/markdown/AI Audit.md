public:: true

# AI Audit
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:671e78a943261a09cfc203f08524d77d6692f6f4ed3bc854379780a62a2d6d68",
  "@type": "Page",
  "vc:slug": "ai-audit",
  "title": "AI Audit",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:access-to-systems-and-personnel",
      "vc:label": "access to systems and personnel"
    },
    {
      "@id": "urn:visionflow:linked:ai-documentation",
      "vc:label": "AI documentation"
    },
    {
      "@id": "urn:visionflow:linked:conformity-assessment",
      "vc:label": "Conformity Assessment"
    },
    {
      "@id": "urn:visionflow:linked:internal-audit",
      "vc:label": "Internal Audit"
    },
    {
      "@id": "urn:visionflow:linked:iso-19011",
      "vc:label": "ISO 19011"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23894-2023",
      "vc:label": "ISO/IEC 23894:2023"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-42001-2023",
      "vc:label": "ISO/IEC 42001:2023"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-5338-2023",
      "vc:label": "ISO/IEC 5338:2023"
    },
    {
      "@id": "urn:visionflow:linked:nist-ai-risk-management-framework",
      "vc:label": "NIST AI Risk Management Framework"
    },
    {
      "@id": "urn:visionflow:linked:third-party-certification",
      "vc:label": "Third-Party Certification"
    },
    {
      "@id": "urn:visionflow:owl:class:accountability",
      "vc:label": "Accountability"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance",
      "vc:label": "AI Governance"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-impact-assessment",
      "vc:label": "AI Impact Assessment"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-monitoring",
      "vc:label": "AI Monitoring"
    },
    {
      "@id": "urn:visionflow:owl:class:eu-ai-act",
      "vc:label": "EU AI Act"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:quality-assurance",
      "vc:label": "Quality Assurance"
    },
    {
      "@id": "urn:visionflow:owl:class:risk-management",
      "vc:label": "Risk Management"
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
      "vc:value": "AI-0105"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "AI Audit"
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
  "@id": "urn:ngm:class:ai-audit",
  "@type": "Class",
  "label": "AI Audit",
  "definition": "A systematic, independent examination and evaluation of an artificial intelligence system's design, development processes, deployment procedures, operational performance, documentation, governance arrangements, and compliance with applicable requirements, conducted by qualified assessors to verify conformity with specified standards, regulations, ethical principles, or organisational policies, and to identify deficiencies, risks, or opportunities for improvement, producing documented findings and recommendations that support accountability, transparency, and continuous enhancement of AI system trustworthiness.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:ai-governance-and-ethics",
    "label": "AI Governance and Ethics"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:access-to-systems-and-personnel",
        "label": "Access to Systems and Personnel"
      },
      {
        "@id": "urn:ngm:class:ai-documentation",
        "label": "AI Documentation"
      },
      {
        "@id": "urn:ngm:class:auditor-competence",
        "label": "Auditor Competence"
      },
      {
        "@id": "urn:ngm:class:audit-independence",
        "label": "Audit Independence"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:technical-audit",
        "label": "Technical Audit"
      },
      {
        "@id": "urn:ngm:class:governance-audit",
        "label": "Governance Audit"
      },
      {
        "@id": "urn:ngm:class:compliance-audit",
        "label": "Compliance Audit"
      },
      {
        "@id": "urn:ngm:class:impact-and-fairness-audit",
        "label": "Impact and Fairness Audit"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      },
      {
        "@id": "urn:ngm:class:third-party-certification",
        "label": "Third-Party Certification"
      },
      {
        "@id": "urn:ngm:class:conformity-assessment",
        "label": "Conformity Assessment"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:iso-iec-42001-2023",
        "label": "ISO-IEC 42001 2023"
      },
      {
        "@id": "urn:ngm:class:iso-19011",
        "label": "ISO 19011"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ai-monitoring",
        "label": "AI Monitoring"
      },
      {
        "@id": "urn:ngm:class:ai-impact-assessment",
        "label": "AI Impact Assessment"
      },
      {
        "@id": "urn:ngm:class:fairness-testing",
        "label": "Fairness Testing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:quality-assurance",
        "label": "Quality Assurance"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-iec-23894-2023",
        "label": "ISO-IEC 23894 2023"
      },
      {
        "@id": "urn:ngm:class:iso-iec-5338-2023",
        "label": "ISO-IEC 5338 2023"
      },
      {
        "@id": "urn:ngm:class:nist-ai-risk-management-framework",
        "label": "NIST AI Risk Management Framework"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:internal-audit",
        "label": "Internal Audit"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-agent-system",
        "label": "AI Agent System"
      },
      {
        "@id": "urn:ngm:class:eu-ai-act",
        "label": "EU AI Act"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:algorithmic-accountability",
        "label": "Algorithmic Accountability"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:ai-system-audit",
      "label": "AI System Audit"
    },
    {
      "@id": "urn:ngm:class:algorithmic-audit",
      "label": "Algorithmic Audit"
    }
  ],
  "quality": 0.70,
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
  "@id": "urn:visionflow:annotation:link-resolutions:ai-audit:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:671e78a943261a09cfc203f08524d77d6692f6f4ed3bc854379780a62a2d6d68"
  },
  "vc:resolutions": [
    {
      "raw": "[[access to systems and personnel]]",
      "resolved": "urn:visionflow:linked:access-to-systems-and-personnel",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI documentation]]",
      "resolved": "urn:visionflow:linked:ai-documentation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Conformity Assessment]]",
      "resolved": "urn:visionflow:linked:conformity-assessment",
      "kind": "StubLink"
    },
    {
      "raw": "[[Internal Audit]]",
      "resolved": "urn:visionflow:linked:internal-audit",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 19011]]",
      "resolved": "urn:visionflow:linked:iso-19011",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 23894:2023]]",
      "resolved": "urn:visionflow:linked:iso-iec-23894-2023",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 42001:2023]]",
      "resolved": "urn:visionflow:linked:iso-iec-42001-2023",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 5338:2023]]",
      "resolved": "urn:visionflow:linked:iso-iec-5338-2023",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST AI Risk Management Framework]]",
      "resolved": "urn:visionflow:linked:nist-ai-risk-management-framework",
      "kind": "StubLink"
    },
    {
      "raw": "[[Third-Party Certification]]",
      "resolved": "urn:visionflow:linked:third-party-certification",
      "kind": "StubLink"
    },
    {
      "raw": "[[Accountability]]",
      "resolved": "urn:visionflow:owl:class:accountability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Agent System]]",
      "resolved": "urn:visionflow:owl:class:ai-agent-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Governance]]",
      "resolved": "urn:visionflow:owl:class:ai-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Impact Assessment]]",
      "resolved": "urn:visionflow:owl:class:ai-impact-assessment",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Monitoring]]",
      "resolved": "urn:visionflow:owl:class:ai-monitoring",
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
    },
    {
      "raw": "[[Quality Assurance]]",
      "resolved": "urn:visionflow:owl:class:quality-assurance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Risk Management]]",
      "resolved": "urn:visionflow:owl:class:risk-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transparency]]",
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
  - A systematic, independent examination and evaluation of an artificial intelligence system's design, development processes, deployment procedures, operational performance, documentation, governance arrangements, and compliance with applicable requirements, conducted by qualified assessors to verify conformity with specified standards, regulations, ethical principles, or organisational policies, and to identify deficiencies, risks, or opportunities for improvement, producing documented findings and recommendations that support accountability, transparency, and continuous enhancement of AI system trustworthiness.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AIAudit
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - bridges-to:: [[AI Agent System]]
  - requires:: [[AI documentation]], [[access to systems and personnel]]

- ### Content
  - A systematic, independent examination and evaluation of an artificial intelligence system's design, development processes, deployment procedures, operational performance, documentation, governance arrangements, and compliance with applicable requirements, conducted by qualified assessors to verify conformity with specified standards, regulations, ethical principles, or organisational policies, and to identify deficiencies, risks, or opportunities for improvement, producing documented findings and recommendations that support accountability, transparency, and continuous enhancement of AI system trustworthiness.

  ## Context and Significance

  AI audits provide essential accountability mechanisms, enabling verification of AI system claims, detection of issues before significant harms occur, and independent assessment that can build stakeholder trust. As AI systems increasingly affect consequential decisions and operate in regulated domains, audits serve multiple purposes: compliance demonstration, risk management, quality assurance, stakeholder assurance, and organisational learning.

  The NIST AI Risk Management Framework emphasises measurement, monitoring, and verification activities that audits support. ISO/IEC 42001 requires internal audits as part of AI management systems. The EU AI Act mandates conformity assessments (a form of audit) for high-risk systems before market placement. Growing calls for algorithmic auditing reflect recognition that self-regulation alone is insufficient for complex, high-impact AI systems.

  AI audits differ from traditional IT audits due to AI-specific challenges: probabilistic behaviour, emergent properties, data dependencies, fairness considerations, and potential for subtle biases or failures. Effective AI auditing requires combining technical analysis, process review, governance assessment, and impact evaluation.

  #### Key Characteristics
  - **Independent**: Conducted by parties without conflicts of interest
		  - **Systematic**: Following structured methodology and audit standards
		  - **Evidence-based**: Conclusions grounded in objective findings
		  - **Comprehensive**: Addressing technical, process, governance, and impact dimensions
		  - **Risk-focused**: Prioritising high-risk areas and critical requirements
		  - **Documented**: Formal audit reports with findings and recommendations
		  - **Actionable**: Producing specific improvement recommendations
		  - **Periodic**: Regular audits, not one-time assessments

		  ## Audit Dimensions

		  ### 1. Technical Audit
		  - **Model performance**: Accuracy, reliability, robustness testing
		  - **Data quality**: Training data assessment for quality and representativeness
		  - **Fairness analysis**: Bias testing across demographic groups
		  - **Security review**: Vulnerability assessment and security controls
		  - **Explainability**: Evaluation of interpretation and explanation capabilities
		  - **Safety testing**: Failure mode analysis and safety verification

		  ### 2. Process Audit
		  - **Development processes**: Compliance with development standards and procedures
		  - **Testing and validation**: Adequacy and rigour of testing activities
		  - **Documentation**: Completeness and quality of technical documentation
		  - **Change management**: Controls on system modifications
		  - **Quality management**: Effectiveness of quality assurance processes
		  - **Lifecycle management**: Appropriate processes across AI lifecycle phases

		  ### 3. Governance Audit
		  - **Policies and procedures**: Existence and adequacy of AI governance documents
		  - **Roles and responsibilities**: Clarity and appropriateness of accountability assignments
		  - **Risk management**: Effectiveness of risk identification and mitigation
		  - **Oversight mechanisms**: Human oversight implementation and effectiveness
		  - **Stakeholder engagement**: Quality of consultation and participation processes
		  - **Incident management**: Procedures for addressing failures and harms

		  ### 4. Compliance Audit
		  - **Regulatory compliance**: Conformity with applicable legal requirements
		  - **Standards conformance**: Alignment with relevant technical and management standards
		  - **Contractual obligations**: Fulfilment of customer or partner commitments
		  - **Internal policies**: Adherence to organisational AI policies
		  - **Professional codes**: Compliance with professional ethical standards

		  ### 5. Impact and Fairness Audit
		  - **Actual impacts**: Assessment of real-world effects on users and stakeholders
		  - **Fairness outcomes**: Distributional analysis of benefits and harms across groups
		  - **Discrimination testing**: Empirical evaluation of differential treatment
		  - **Rights impacts**: Effects on fundamental rights and freedoms
		  - **Accessibility**: Usability across diverse user populations

		  ## Audit Process

		  ### 1. Planning
		  - Define audit scope, objectives, and criteria
		  - Identify audit team and required expertise
		  - Develop audit plan and schedule
		  - Communicate with auditee organisation

		  ### 2. Information Gathering
		  - Document review (technical documentation, policies, procedures)
		  - Interviews with developers, operators, users
		  - Technical analysis and testing
		  - Data collection and examination
		  - Observation of operational practices

		  ### 3. Analysis and Evaluation
		  - Compare findings against audit criteria
		  - Identify conformities and non-conformities
		  - Assess risk severity of findings
		  - Evaluate effectiveness of controls and processes
		  - Form audit conclusions

		  ### 4. Reporting
		  - Prepare comprehensive audit report
		  - Document findings, evidence, and conclusions
		  - Provide recommendations for improvement
		  - Present to auditee management
		  - Agree on corrective action plans

		  ### 5. Follow-up
		  - Verify implementation of agreed corrective actions
		  - Assess effectiveness of remediation
		  - Update audit findings and close non-conformities
		  - Inform subsequent audits

		  ## Relationships

		  - **Verifies**: AI Governance implementation, compliance claims
		  - **Assesses**: AI systems, processes, documentation, controls
		  - **Supports**: Accountability, Transparency, Continuous improvement
		  - **Requires**: AI documentation, access to systems and personnel
		  - **Produces**: Audit reports, findings, recommendations
		  - **Informs**: Risk management, governance improvements, regulatory reporting
		  - **Conducted by**: Internal auditors, third-party auditors, regulators
		  - **Follows**: Audit standards, methodologies, protocols
		  - **Triggered by**: Regulatory requirements, governance procedures, incidents
		  - **Uses**: AI Monitoring data, AI Impact Assessments, performance metrics

		  ## Examples and Applications

		  1. **Financial Services Model Risk Audit**: Independent model validation team audits credit scoring AI, reviewing model development documentation, testing model performance on hold-out data, assessing fairness across protected groups, evaluating governance and oversight procedures, examining ongoing monitoring processes, verifying compliance with regulatory guidance (SR 11-7), producing audit report identifying deficiencies in demographic performance monitoring, recommending enhanced fairness testing and expanded model documentation
		  2. **Healthcare AI Conformity Assessment**: Notified body conducts EU MDR conformity assessment of diagnostic AI, reviewing clinical validation evidence, assessing quality management system, evaluating post-market surveillance plans, testing software verification and validation, examining risk management documentation, interviewing development team, issuing conformity certificate after finding compliance with essential safety and performance requirements
		  3. **Public Sector AI Algorithmic Audit**: Government oversight body audits welfare benefits determination algorithm, analyzing code and training data, testing for discriminatory patterns, reviewing human override rates, interviewing caseworkers and applicants, assessing accessibility for limited-English speakers, evaluating transparency and appeal procedures, publishing audit report finding unacceptable demographic disparities, requiring system suspension pending remediation
		  4. **Internal AI Ethics Audit**: Company's AI ethics team conducts internal audit of content recommendation system, reviewing impact assessment documentation, testing algorithm behaviour on various user scenarios, analyzing user feedback and complaints, assessing adequacy of human review processes, evaluating implementation of responsible AI policies, producing confidential audit report for executive leadership identifying risks of amplifying misinformation, recommending algorithmic modifications and enhanced content quality controls

		  ## ISO/IEC Standards Alignment

		  **ISO/IEC 42001:2023** (AI Management Systems):
		  - Clause 9.2: Internal audit requirements for AI management system
		  - Audit programme planning and implementation
		  - Audit criteria, scope, frequency, and methods
		  - Audit reporting and management review

		  **ISO 19011** (Guidelines for Auditing Management Systems):
		  - General audit principles and methodologies applicable to AI audits
		  - Auditor competence requirements
		  - Audit programme management

		  **ISO/IEC 23894:2023** (AI Risk Management):
		  - Audit as verification mechanism for risk management effectiveness
		  - Assessment of risk controls and monitoring processes

		  **ISO/IEC 5338:2023** (AI System Lifecycle Processes):
		  - Audit of lifecycle process implementation and effectiveness

		  ## NIST AI RMF Integration

		  **GOVERN Function**:
		  - Audits verify governance effectiveness
		  - Audit findings inform governance improvements
		  - Internal and external audits as governance mechanisms

		  **MEASURE Function**:
		  - Audits utilize and verify measurement approaches
		  - Audit testing validates measurement accuracy
		  - Metrics audited for appropriateness and reliability

		  **MANAGE Function**:
		  - Audits assess risk management effectiveness
		  - Audit findings trigger risk responses
		  - Corrective actions address audit-identified deficiencies

		  **Trustworthiness Characteristics**:
		  - Audits verify characteristics (fairness, safety, transparency, etc.)
		  - Evidence of trustworthiness validated through audit

		  ## Implementation Considerations

		  **Audit Capacity and Competence**:
		  - Technical AI expertise (ML, data science, software engineering)
		  - Domain knowledge relevant to AI application
		  - Audit methodology and standards knowledge
		  - Understanding of AI ethics and governance
		  - Independence and objectivity

		  **Audit Tools and Methods**:
		  - Automated fairness testing tools (AI Fairness 360, Fairlearn)
		  - Explainability and interpretability tools (LIME, SHAP)
		  - Adversarial testing frameworks
		  - Code review and documentation analysis tools
		  - Data quality assessment tools
		  - Audit trail analysis capabilities

		  **Audit Evidence**:
		  - Technical documentation and records
		  - Test results and validation data
		  - Operational logs and monitoring data
		  - Interview notes and observations
		  - Policy and procedure documents
		  - Incident reports and corrective actions

		  **Challenges**:
		  - Shortage of qualified AI auditors
		  - Proprietary systems limiting audit access
		  - Rapidly evolving AI technology outpacing audit methods
		  - Balancing comprehensive audit with resource constraints
		  - Accessing training data and models for examination
		  - Evaluating complex, black-box systems
		  - Standardisation of AI audit criteria and methods
		  - Ensuring auditor independence from powerful AI providers

		  **Best Practices**:
		  - Establish regular audit schedules, not just incident-triggered
		  - Use risk-based approach to prioritize audit scope
		  - Combine technical testing with process and governance review
		  - Require documentation enabling effective audit
		  - Maintain auditor independence from development and operation
		  - Develop audit competencies through training and collaboration
		  - Share audit methods and lessons learned across field
		  - Adapt audit approaches as AI technology evolves
		  - Verify corrective action implementation, not just identify issues
		  - Consider third-party audits for high-risk systems

		  ## 2024-2025: Professionalisation and Certification Surge

		  The years 2024 and 2025 marked AI auditing's transition from emerging practice to **professionalised discipline**, driven by regulatory mandates, the launch of formal certification programmes, the maturation of audit frameworks, and explosive demand for independent verification of AI systems—whilst simultaneously exposing persistent **methodology fragmentation** and **competence scarcity** challenges.

		  ### ISACA AAIA Certification Launch

		  In 2025, **ISACA** launched the **Advanced in AI Audit (AAIA) certification**, representing the first globally recognised professional credential specifically for AI auditing. The AAIA certification targets professional auditors (CISA, CIA, CPA holders) seeking to expand into AI audit, requiring candidates to demonstrate:

		  - **AI technology comprehension**: Understanding of machine learning, neural networks, data pipelines, and model lifecycle
		  - **AI-specific risk assessment**: Identifying bias, robustness, explainability, and security risks
		  - **Audit methodology adaptation**: Applying traditional audit principles to probabilistic AI systems
		  - **Regulatory landscape knowledge**: EU AI Act, NIST AI RMF, ISO 42001, sector-specific requirements

		  The launch of AAIA reflected recognition that traditional IT auditing skills, whilst foundational, were insufficient for AI systems' unique characteristics: probabilistic behaviour, emergent properties, data dependencies, and fairness considerations requiring specialised competencies.

		  ### The IIA Artificial Intelligence Auditing Framework

		  The **Institute of Internal Auditors (IIA)** released a comprehensive **Artificial Intelligence Auditing Framework** in September 2024, providing structured guidance for internal auditors assessing AI governance, risk, and control environments. The framework aligned with:

		  - **NIST AI Risk Management Framework** (January 2023)
		  - **ISO/IEC 42001:2023** AI management systems standard
		  - **IIA's Global Internal Audit Standards** (January 2024)
		  - **Large language model** considerations

		  The IIA framework established a **four-phase audit approach**:

		  1. **Planning**: Defining audit scope, identifying AI systems and stakeholders, establishing audit criteria
		  2. **Fieldwork**: Technical testing, process review, governance assessment, stakeholder interviews
		  3. **Reporting**: Documenting findings, risk severity classification, recommendations
		  4. **Follow-up**: Verifying corrective action implementation and effectiveness

		  Critically, the framework acknowledged that **AI auditing requires multidisciplinary teams** combining audit professionals, data scientists, domain experts, and ethicists—no single individual possessed all required competencies.

		  ### ISO 42001 Audit Practice Maturation

		  **ISO/IEC 42001:2023**, the AI management systems standard, experienced rapid adoption throughout 2024-2025, with major certification bodies (BSI, TÜV, SGS, CSA) certifying hundreds of organisations. This created substantial demand for **ISO 42001 auditors** capable of conducting certification audits.

		  **IAF MD 4:2023** explicitly included AI under information and communication technology (ICT), establishing that AI systems fell within the scope of conformity assessment and could be audited both locally and remotely. Auditors assessing ISO 42001 compliance evaluated:

		  - **Clause 4**: Organisational context and stakeholder needs understanding
		  - **Clause 5**: Leadership commitment and AI policy establishment
		  - **Clause 6**: Risk and opportunity planning
		  - **Clause 8**: Operational planning and control, including AI system development and deployment
		  - **Clause 9**: Performance evaluation, including internal audits and management review
		  - **Clause 10**: Continuous improvement processes

		  Auditors implementing ISO 42001 discovered significant challenges: organisations frequently possessed inadequate documentation, lacked defined AI governance roles, and demonstrated limited awareness of AI-specific risks, requiring extensive guidance beyond traditional audit verification.

		  ### Third-Party AI Audit Market Emergence

		  Demand for **independent AI audits** surged in 2024-2025, driven by regulatory requirements, procurement specifications, and stakeholder pressure for independent verification. Organisations including **BSI, DEKRA, UL Solutions**, specialist AI audit firms, and Big Four consulting practices (Deloitte, PwC, EY, KPMG) offered AI audit services.

		  However, the field faced **methodology fragmentation**: no consensus emerged on audit procedures, testing protocols, fairness metric selection, or pass/fail criteria. Different auditors applying different methodologies to the same system might reach divergent conclusions, undermining audit credibility.

		  A **2024 study** examining context-specific AI certification in the financial industry highlighted challenges:
		  - **Certification standards** required balancing specificity (industry context) with generalisability (cross-sector applicability)
		  - **Auditor competence** demanded both technical AI expertise and domain knowledge
		  - **Certification scope** tensions between comprehensive assessment and practical feasibility
		  - **Pass/fail thresholds** lacked empirical grounding for many AI risks

		  ### EU AI Act Conformity Assessment Requirements

		  The **EU AI Act**, effective August 2024, mandated **conformity assessments** (formal audits) for high-risk AI systems before market placement. **Article 43** established two conformity assessment procedures:

		  **Internal control** (Article 43(2)): Provider conducts internal conformity assessment for most high-risk systems, verifying compliance with requirements through:
		  - Technical documentation review
		  - Quality management system implementation
		  - Post-market monitoring system establishment
		  - EU declaration of conformity

		  **Third-party assessment** (Article 43(3)): For high-risk AI systems used in biometric identification and critical infrastructure, **notified bodies** (designated third-party conformity assessment bodies) conduct assessments including:
		  - Technical documentation examination
		  - Quality management system audit
		  - Design examination and type-testing where applicable

		  By late 2024, the European Commission began designating **notified bodies** authorised to conduct AI Act conformity assessments, establishing accreditation requirements and audit protocols. However, the number of qualified notified bodies lagged behind anticipated demand, creating potential bottlenecks for market access.

		  ### NYC Bias Audit Law Enforcement

		  **New York City's Local Law 144**, requiring annual **bias audits** of automated employment decision tools, intensified enforcement in 2024. The law mandates:

		  - **Independent auditor** conducts bias audit within one year before use
		  - **Bias audit results** publicly disclosed, including demographic impact ratios
		  - **Audit methodology** specified: disparate impact analysis for hiring rate and selection rate
		  - **Public notice** provided to candidates regarding AI use

		  Enforcement revealed practical challenges: many employers lacked data disaggregated by protected characteristics (race, sex), making bias audits impossible to conduct. Auditors struggled with **small sample sizes** in some demographic groups, producing statistically unreliable metrics. The **methodological prescription** (specific metrics, not alternatives) drew criticism for inflexibility across diverse employment contexts.

		  ### Audit Methodology Debates

		  The AI audit profession grappled with **foundational methodology questions** in 2024-2025:

		  **Black-box vs. white-box auditing**: Should auditors require access to source code, training data, and model parameters (**white-box**), or should audits rely on input-output testing without internal access (**black-box**)? Black-box audits accommodated proprietary concerns but provided limited insight into failure mechanisms. White-box audits enabled deeper analysis but faced intellectual property and security objections.

		  **Fairness metric selection**: With **dozens of mathematically incompatible fairness metrics**, which should auditors apply? Demographic parity, equalised odds, calibration, individual fairness—each metric encoded different fairness philosophies, and systems satisfying one metric frequently violated others. Auditors faced accusations of **fairness gerrymandering** (selecting metrics producing favourable results).

		  **Pass/fail thresholds**: What performance level constituted audit "pass"? Unlike safety-critical engineering with established reliability requirements (e.g., aviation's 10^-9 failure rate), AI systems lacked consensus thresholds. Should a credit model with 5% demographic disparity pass or fail? Auditors' threshold choices profoundly affected outcomes but lacked principled grounding.

		  ### Competence Scarcity and Training Challenges

		  The explosive demand for AI auditors far exceeded supply in 2024-2025. Effective AI auditors required rare skill combinations:

		  - **Audit methodology**: Systematic evidence gathering, independent judgement, risk assessment
		  - **AI technology**: Machine learning architectures, training procedures, performance evaluation
		  - **Domain expertise**: Understanding of healthcare, finance, employment, or other application contexts
		  - **Ethical reasoning**: Fairness principles, rights impacts, stakeholder perspectives
		  - **Standards knowledge**: ISO 42001, NIST AI RMF, EU AI Act, sector-specific regulations

		  Few individuals possessed all competencies, creating two responses: **multidisciplinary audit teams** (combining specialists) or **rapid training programmes** (developing hybrid professionals). Both approaches faced challenges: multidisciplinary teams struggled with coordination and integration, whilst training programmes compressed years of expertise into months, risking superficial competence.

		  ### Audit Tool Automation

		  The complexity and scale of AI auditing drove development of **automated audit tools** in 2024-2025:

		  - **Fairness testing libraries**: AI Fairness 360 (IBM), Fairlearn (Microsoft), Aequitas enabling automated bias detection
		  - **Robustness testing frameworks**: Adversarial Robustness Toolbox, CleverHans for vulnerability assessment
		  - **Explainability tools**: SHAP, LIME, What-If Tool for interpretability analysis
		  - **Model documentation generators**: Automated model card and datasheet production

		  However, automated tools addressed only **technical audit dimensions**. Process audit (development procedures), governance audit (oversight mechanisms), and impact audit (real-world effects) required human judgement resistant to automation.

		  Paradoxically, using AI to audit AI raised **second-order questions**: Were audit tools themselves fair, robust, and transparent? Tool bugs or biases could produce misleading audit findings, creating certification risks.

		  ### Cost and Accessibility Challenges

		  Comprehensive AI audits proved expensive in 2024-2025: third-party audits ranged from tens of thousands (small systems) to millions (complex, high-risk systems) of pounds or dollars. Costs reflected:

		  - **Specialised expertise** commanding premium compensation
		  - **Labour intensity** requiring weeks or months of effort
		  - **Technical infrastructure** for testing and analysis
		  - **Liability insurance** for audit certification

		  High audit costs created **accessibility disparities**: large corporations afforded comprehensive audits, whilst startups and SMEs struggled, potentially excluding them from regulated markets or undermining audit quality through cost-cutting. This raised equity concerns about innovation access and market concentration.

		  ## Regulatory and Policy Context

		  **EU AI Act**: Requires conformity assessments (audits) for high-risk AI systems before market placement, with ongoing compliance monitoring

		  **Financial Services Regulation**: Model risk management guidance requires independent validation (audit) of models

		  **ISO/IEC 42001**: Mandates internal audits of AI management system

		  **Emerging Algorithmic Auditing Requirements**: Various jurisdictions considering mandatory external audits for high-risk AI

		  **Professional Standards**: Audit profession developing AI-specific audit standards and guidance

		  ## Related Terms

		  - **AI Governance**: Framework that audit verifies and strengthens
		  - **Accountability**: Principle that audit mechanisms support
		  - **Transparency**: Audit findings contribute to transparency
		  - **AI Monitoring**: Ongoing observation distinct from periodic audit
		  - **Conformity Assessment**: Regulatory audit verifying compliance
		  - **AI Impact Assessment**: Tool audit may review and verify
		  - **Risk Management**: Process audit assesses and informs
		  - **Quality Assurance**: Audit contributes to quality objectives
		  - **Third-Party Certification**: Formal audit outcome
		  - **Internal Audit**: Organisational self-assessment mechanism

  ## Context and Significance

  AI audits provide essential accountability mechanisms, enabling verification of AI system claims, detection of issues before significant harms occur, and independent assessment that can build stakeholder trust. As AI systems increasingly affect consequential decisions and operate in regulated domains, audits serve multiple purposes: compliance demonstration, risk management, quality assurance, stakeholder assurance, and organisational learning.

  The NIST AI Risk Management Framework emphasises measurement, monitoring, and verification activities that audits support. ISO/IEC 42001 requires internal audits as part of AI management systems. The EU AI Act mandates conformity assessments (a form of audit) for high-risk systems before market placement. Growing calls for algorithmic auditing reflect recognition that self-regulation alone is insufficient for complex, high-impact AI systems.

  AI audits differ from traditional IT audits due to AI-specific challenges: probabilistic behaviour, emergent properties, data dependencies, fairness considerations, and potential for subtle biases or failures. Effective AI auditing requires combining technical analysis, process review, governance assessment, and impact evaluation.

  #### References
  1. ISO/IEC 42001:2023, *Information technology — Artificial intelligence — Management system*
		  2. ISO 19011:2018, *Guidelines for auditing management systems*
		  3. Raji, I.D. et al., *Closing the AI Accountability Gap: Defining an End-to-End Framework for Internal Algorithmic Auditing*, FAT* (2020)
		  4. Metaxa, D. et al., *Auditing Algorithms: Understanding Algorithmic Systems from the Outside In* (2021)
		  5. European Commission, *Proposal for a Regulation on Artificial Intelligence (AI Act)*, Articles 19, 43 (2021)

		  ## See Also

		  - [[AI Governance]]
		  - [[Accountability]]
		  - [[Transparency]]
		  - [[AI Monitoring]]
		  - [[Conformity Assessment]]
		  - [[AI Impact Assessment]]
		  - [[Risk Management]]
		  - [[Quality Assurance]]
		  - [[Third-Party Certification]]
		  - [[Internal Audit]]

		  ```

  - public-access:: true
  - definition:: A systematic, independent examination and evaluation of an artificial intelligence system's design, development processes, deployment procedures, operational performance, documentation, governance arrangements, and compliance with applicable requirements, conducted by qualified assessors to verify conformity with specified standards, regulations, ethical principles, or organisational policies, and to identify deficiencies, risks, or opportunities for improvement, producing documented findings and recommendations that support accountability, transparency, and continuous enhancement of AI system trustworthiness.



  ## Academic Context

  - Brief contextual overview
  - AI auditing has evolved from a niche compliance activity into a core discipline for responsible AI governance, reflecting the growing complexity and societal impact of artificial intelligence systems
  - The field draws on established traditions in financial and IT auditing, adapting methodologies to address the unique challenges posed by AI, such as opacity, bias, and rapid iteration

  - Key developments and current state
  - The academic consensus is that AI audits must be systematic, independent, and evidence-based, covering the full lifecycle of AI systems from design to decommissioning
  - There is increasing emphasis on interdisciplinary approaches, integrating computer science, law, ethics, and organisational theory

  - Academic foundations
  - Foundational work in algorithmic accountability and transparency, notably by Mittelstadt et al. (2016) and Wachter et al. (2017), has shaped the conceptual framework for AI auditing
  - Recent scholarship has focused on operationalising these principles, with particular attention to the role of standards and certification

  ## Current Landscape (2025)

  - Industry adoption and implementations
  - AI auditing is now a mainstream practice, with leading organisations across sectors implementing regular audits to ensure compliance, manage risk, and build stakeholder trust
  - Notable organisations and platforms
		- KPMG, PwC, Deloitte, and EY have all launched dedicated AI auditing services, reflecting the growing market demand for transparency and accountability
		- Specialist platforms such as LumenAlta and DSALTA offer AI-powered audit tools and frameworks, enabling organisations to automate and scale their compliance activities

  - UK and North England examples where relevant
  - In Manchester, the Digital Catapult has established an AI audit lab, supporting local businesses in developing robust governance practices
  - Leeds City Council has implemented an AI audit framework for its smart city initiatives, ensuring that automated decision-making systems are transparent and fair
  - Newcastle University’s Centre for Data Ethics and Innovation has partnered with local authorities to pilot AI audits in public services, focusing on ethical and social impact

  - Technical capabilities and limitations
  - Modern AI auditing tools can process large datasets, identify compliance gaps, and generate comprehensive audit reports in near real-time
  - However, challenges remain in auditing complex, black-box models and ensuring that audit findings are actionable and understandable to non-technical stakeholders

  - Standards and frameworks
  - The publication of BS ISO/IEC 42006:2025 by BSI has set a new benchmark for the certification of AI audit bodies, ensuring that auditors have standardised competencies and methodologies
  - The EU AI Act and NIST AI Risk Management Framework provide additional guidance on risk assessment and compliance, with a focus on transparency and accountability

  ## Research & Literature

  - Key academic papers and sources
  - Mittelstadt, B. D., Allo, P., Taddeo, M., Wachter, S., & Floridi, L. (2016). The ethics of algorithms: Mapping the debate. Big Data & Society, 3(2), 2053951716679679. https://doi.org/10.1177/2053951716679679
  - Wachter, S., Mittelstadt, B., & Floridi, L. (2017). Why a right to explanation of automated decision-making does not exist in the General Data Protection Regulation. International Data Privacy Law, 7(2), 76-99. https://doi.org/10.1093/idpl/ipx005
  - Farley, E. A., & Lansang, C. R. (2024). AI Auditing: First Steps Towards the Effective Regulation of Artificial Intelligence Systems. Harvard Journal of Law & Technology, 37(1), 1-45. https://jolt.law.harvard.edu/digest/ai-auditing-first-steps-towards-the-effective-regulation-of-artificial-intelligence-systems

  - Ongoing research directions
  - Researchers are exploring the use of explainable AI (XAI) techniques to enhance the transparency and interpretability of audit findings
  - There is growing interest in developing dynamic audit frameworks that can adapt to the rapid evolution of AI technologies and regulatory requirements

  ## UK Context

  - British contributions and implementations
  - The UK has been at the forefront of AI auditing, with BSI leading the development of international standards and the FRC publishing guidance on the use of AI in audit
  - The Centre for Data Ethics and Innovation (CDEI) continues to play a key role in shaping the national agenda for AI governance and accountability

  - North England innovation hubs (if relevant)
  - Manchester, Leeds, Newcastle, and Sheffield have emerged as regional innovation hubs, with local universities, businesses, and public sector organisations collaborating on AI audit initiatives
  - These hubs are fostering a culture of responsible innovation, with a focus on practical, real-world applications of AI auditing

  - Regional case studies
  - Manchester’s AI audit lab has supported over 50 local businesses in developing robust governance practices, with a particular focus on ethical and social impact
  - Leeds City Council’s AI audit framework has been adopted by several other local authorities, serving as a model for public sector AI governance

  ## Future Directions

  - Emerging trends and developments
  - The integration of AI auditing into broader organisational risk management frameworks is expected to become more widespread
  - There is a growing trend towards real-time, continuous auditing, enabled by advances in AI and data analytics

  - Anticipated challenges
  - Ensuring that audit findings are actionable and understandable to non-technical stakeholders remains a significant challenge
  - The rapid pace of AI innovation means that audit frameworks must be flexible and adaptable

  - Research priorities
  - Developing more robust methods for auditing complex, black-box models
  - Exploring the use of XAI techniques to enhance the transparency and interpretability of audit findings
  - Investigating the social and ethical implications of AI auditing, particularly in public sector and healthcare settings

  ## References

  1. Mittelstadt, B. D., Allo, P., Taddeo, M., Wachter, S., & Floridi, L. (2016). The ethics of algorithms: Mapping the debate. Big Data & Society, 3(2), 2053951716679679. https://doi.org/10.1177/2053951716679679
  2. Wachter, S., Mittelstadt, B., & Floridi, L. (2017). Why a right to explanation of automated decision-making does not exist in the General Data Protection Regulation. International Data Privacy Law, 7(2), 76-99. https://doi.org/10.1093/idpl/ipx005
  3. Farley, E. A., & Lansang, C. R. (2024). AI Auditing: First Steps Towards the Effective Regulation of Artificial Intelligence Systems. Harvard Journal of Law & Technology, 37(1), 1-45. https://jolt.law.harvard.edu/digest/ai-auditing-first-steps-towards-the-effective-regulation-of-artificial-intelligence-systems
  4. BSI. (2025). Information technology — Artificial intelligence — Requirements for bodies providing audit and certification of artificial intelligence management systems (BS ISO/IEC 42006:2025). https://www.bsigroup.com/en-GB/insights-and-media/media-centre/press-releases/2025/july/bsi-publishes-standard-to-ensure-quality-among-growing-ai-audit-market/
  5. FRC. (2025). Landmark guidance providing clarity to audit profession on the uses of AI. https://www.frc.org.uk/news-and-events/news/2025/06/frc-publishes-landmark-guidance-providing-clarity-to-audit-profession-on-the-uses-of-ai/
  6. Digital Catapult. (2025). AI Audit Lab. https://www.digit.catapult.org.uk/ai-audit-lab
  7. Leeds City Council. (2025). AI Audit Framework for Smart City Initiatives. https://www.leeds.gov.uk/ai-audit-framework
  8. Newcastle University. (2025). Centre for Data Ethics and Innovation. https://www.ncl.ac.uk/cdei
  9. LumenAlta. (2025). AI Audit Checklist (Updated 2025). https://lumenalta.com/insights/ai-audit-checklist-updated-2025
  10. DSALTA. (2025). What is an AI Audit? Complete 2025 Guide. https://www.dsalta.com/resources/articles/what-is-an-ai-audit


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources:: [[NIST AI Risk Management Framework]], [[ISO/IEC 42001:2023]], [[ISO 19011]], [[ISO/IEC 23894:2023]], [[ISO/IEC 5338:2023]], [[EU AI Act Regulatory Instrument]]
  - migration-date:: 2026-04-26T00:00:00Z
  - modified:: 2026-04-26T15:00:00Z
