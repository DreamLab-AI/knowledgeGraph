public:: true

# Ethical AI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e661e3ab271a4ed9ba95df9403da179bfa12f474a9a39d0d4d6e81618847a61d",
  "@type": "Page",
  "vc:slug": "ethical-ai",
  "title": "Ethical AI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethics-by-design",
      "vc:label": "Ethics by Design"
    },
    {
      "@id": "urn:visionflow:linked:nip-05",
      "vc:label": "NIP-05"
    },
    {
      "@id": "urn:visionflow:linked:stakeholder-engagement",
      "vc:label": "stakeholder engagement"
    },
    {
      "@id": "urn:visionflow:linked:trustworthy-ai",
      "vc:label": "Trustworthy AI"
    },
    {
      "@id": "urn:visionflow:owl:class:accountability",
      "vc:label": "Accountability"
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
      "@id": "urn:visionflow:owl:class:education-and-ai",
      "vc:label": "Education and AI"
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
      "@id": "urn:visionflow:owl:class:privacy",
      "vc:label": "Privacy"
    },
    {
      "@id": "urn:visionflow:owl:class:responsible-ai",
      "vc:label": "Responsible AI"
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
      "vc:value": "AI-0103"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Ethical AI"
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
  "@id": "urn:ngm:class:ethical-ai",
  "@type": "Class",
  "label": "Ethical AI",
  "definition": "The development, deployment, and use of artificial intelligence systems in accordance with moral principles and values that respect human dignity, rights, and wellbeing, incorporating considerations of fairness, transparency, accountability, privacy, safety, and beneficence throughout the AI lifecycle, whilst promoting human flourishing, social justice, and the common good through deliberate design choices, governance mechanisms, and operational practices that embed ethical reasoning into AI system functioning and organisational decision-making.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:fairness",
        "label": "Fairness"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:stakeholder-engagement",
        "label": "Stakeholder Engagement"
      },
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      },
      {
        "@id": "urn:ngm:class:human-rights",
        "label": "Human Rights"
      },
      {
        "@id": "urn:ngm:class:ai-impact-assessment",
        "label": "AI Impact Assessment"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:trustworthy-ai",
        "label": "Trustworthy AI"
      },
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      },
      {
        "@id": "urn:ngm:class:human-oversight",
        "label": "Human Oversight"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:value-alignment",
        "label": "Value Alignment"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:explainable-ai",
        "label": "Explainable AI"
      },
      {
        "@id": "urn:ngm:class:bias-mitigation-techniques",
        "label": "Bias Mitigation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:digital-inclusion",
        "label": "Digital Inclusion"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-iec-42001",
        "label": "ISO/IEC 42001"
      },
      {
        "@id": "urn:ngm:class:oecd-ai-principles",
        "label": "OECD AI Principles"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:autonomous-weapons",
        "label": "Autonomous Weapons"
      },
      {
        "@id": "urn:ngm:class:surveillance-capitalism",
        "label": "Surveillance Capitalism"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-risk-management",
        "label": "AI Risk Management"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:responsible-ai",
      "label": "Responsible AI"
    },
    {
      "@id": "urn:ngm:class:trustworthy-ai",
      "label": "Trustworthy AI"
    }
  ],
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:ethical-ai:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e661e3ab271a4ed9ba95df9403da179bfa12f474a9a39d0d4d6e81618847a61d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethics by Design]]",
      "resolved": "urn:visionflow:linked:ethics-by-design",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIP-05]]",
      "resolved": "urn:visionflow:linked:nip-05",
      "kind": "StubLink"
    },
    {
      "raw": "[[stakeholder engagement]]",
      "resolved": "urn:visionflow:linked:stakeholder-engagement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Trustworthy AI]]",
      "resolved": "urn:visionflow:linked:trustworthy-ai",
      "kind": "StubLink"
    },
    {
      "raw": "[[Accountability]]",
      "resolved": "urn:visionflow:owl:class:accountability",
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
      "raw": "[[Education and AI]]",
      "resolved": "urn:visionflow:owl:class:education-and-ai",
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
      "raw": "[[Privacy]]",
      "resolved": "urn:visionflow:owl:class:privacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Responsible AI]]",
      "resolved": "urn:visionflow:owl:class:responsible-ai",
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
  - The development, deployment, and use of artificial intelligence systems in accordance with moral principles and values that respect human dignity, rights, and wellbeing, incorporating considerations of fairness, transparency, accountability, privacy, safety, and beneficence throughout the AI lifecycle, whilst promoting human flourishing, social justice, and the common good through deliberate design choices, governance mechanisms, and operational practices that embed ethical reasoning into AI system functioning and organisational decision-making.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:EthicalAI
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - requires:: [[AI Governance]], [[stakeholder engagement]]
  - enables:: [[Responsible AI]], [[Trustworthy AI]]

- ### Content
  - The development, deployment, and use of artificial intelligence systems in accordance with moral principles and values that respect human dignity, rights, and wellbeing, incorporating considerations of fairness, transparency, accountability, privacy, safety, and beneficence throughout the AI lifecycle, whilst promoting human flourishing, social justice, and the common good through deliberate design choices, governance mechanisms, and operational practices that embed ethical reasoning into AI system functioning and organisational decision-making.

  ## Context and Significance

  Ethical AI addresses the reality that AI systems embody values through their design, data, objectives, and deployment, making ethical considerations central rather than peripheral to technical development. As AI systems increasingly mediate consequential aspects of human life—from healthcare decisions to criminal justice, employment, education, and civic participation—the ethical dimensions of these systems profoundly affect individual and collective wellbeing, social equity, and democratic values.

  The NIST AI Risk Management Framework incorporates trustworthiness characteristics (valid and reliable, safe, secure and resilient, accountable and transparent, explainable and interpretable, privacy-enhanced, fair) that operationalize ethical principles. The OECD AI Principles establish international consensus on AI ethics, emphasising human-centred values, transparency, robustness, accountability, and human oversight. ISO/IEC standards increasingly integrate ethical requirements into technical specifications, recognizing ethics as essential to AI quality and acceptability.

  Ethical AI is not merely compliance with external requirements but a commitment to doing what is right, particularly when facing novel situations without clear rules, competing values requiring balancing, or long-term consequences that are difficult to foresee.

  ## Key Characteristics

  - **Value-based**: Grounded in explicit moral principles and commitments
  - **Human-centred**: Prioritises human dignity, rights, and wellbeing
  - **Proactive**: Anticipates ethical implications rather than merely reacting to harms
  - **Contextual**: Recognises that ethical requirements vary across applications and cultures
  - **Participatory**: Involves diverse stakeholders in ethical deliberation
  - **Actionable**: Translates principles into concrete design and governance practices
  - **Accountable**: Establishes clear responsibility for ethical outcomes
  - **Iterative**: Continuous ethical reflection and improvement

  ## Core Ethical Principles

  ### 1. Human Dignity and Rights
  - **Respect for persons**: Treating individuals as ends in themselves, not mere means
  - **Human rights protection**: Safeguarding fundamental rights and freedoms
  - **Autonomy**: Preserving meaningful human choice and self-determination
  - **Non-discrimination**: Ensuring equal treatment and protecting against bias
  - **Privacy**: Respecting personal information and informational self-determination

  ### 2. Fairness and Justice
  - **Procedural fairness**: Just processes for AI-mediated decisions
  - **Distributive justice**: Equitable allocation of AI benefits and burdens
  - **Non-discrimination**: Prevention of unfair treatment based on protected characteristics
  - **Inclusion**: Ensuring AI benefits reach all segments of society
  - **Redress**: Access to remedies for those harmed by AI systems

  ### 3. Beneficence and Non-maleficence
  - **Benefit promotion**: Maximising positive contributions to human wellbeing
  - **Harm prevention**: Avoiding or minimising risks of injury or damage
  - **Safety**: Ensuring AI systems operate reliably without undue risk
  - **Security**: Protecting against malicious use or attacks
  - **Wellbeing**: Promoting physical, mental, and social health

  ### 4. Transparency and Explicability
  - **Openness**: Appropriate disclosure of AI use and functioning
  - **Explainability**: Providing understandable accounts of AI decisions
  - **Traceability**: Maintaining records enabling accountability
  - **Communication**: Clear information about capabilities and limitations
  - **Contestability**: Enabling meaningful challenge of AI outputs

  ### 5. Accountability and Responsibility
  - **Clear assignment**: Defined responsibility for AI system outcomes
  - **Oversight**: Human supervision and control mechanisms
  - **Auditability**: Enabling verification of compliance and performance
  - **Liability**: Legal and moral responsibility for harms
  - **Remediation**: Correcting errors and addressing negative impacts

  ### 6. Privacy and Data Governance
  - **Data minimisation**: Collecting only necessary information
  - **Purpose limitation**: Using data only for specified purposes
  - **Consent**: Obtaining informed agreement for data processing
  - **Security**: Protecting data from unauthorized access
  - **Individual rights**: Respecting data subject rights (access, correction, deletion)

  ## Implementing Ethical AI

  ### Governance Mechanisms
  - **Ethics committees**: Bodies reviewing AI ethical implications
  - **Impact assessments**: Systematic evaluation of ethical effects
  - **Ethics by design**: Embedding ethical principles in architecture and development
  - **Codes of ethics**: Professional standards for AI practitioners
  - **Whistleblower protections**: Safe channels for raising ethical concerns

  ### Technical Approaches
  - **Fairness constraints**: Algorithmic techniques ensuring equitable outcomes
  - **Privacy-preserving methods**: Differential privacy, federated learning, encryption
  - **Explainable AI**: Techniques making decisions interpretable
  - **Safety engineering**: Formal verification, testing, monitoring
  - **Value alignment**: Methods ensuring AI objectives match human values

  ### Organizational Practices
  - **Ethical training**: Education on AI ethics for development teams
  - **Diverse teams**: Including varied perspectives in AI development
  - **Stakeholder engagement**: Consulting affected parties
  - **Ethical review**: Assessment before deployment
  - **Continuous monitoring**: Ongoing evaluation of ethical performance

  ### 7. Professional Responsibility
  - **Competence**: Maintaining expertise to make informed ethical judgments
  - **Integrity**: Honesty and adherence to ethical commitments
  - **Duty of care**: Taking reasonable steps to prevent harm
  - **Speaking up**: Raising concerns about ethical issues
  - **Continuous learning**: Staying informed on ethical best practices

  ## Relationships

  - **Enables**: Responsible AI, Trustworthy AI
  - **Requires**: AI Governance, stakeholder engagement
  - **Implemented through**: AI Impact Assessment, ethics by design
  - **Includes principles**: Fairness, Transparency, Accountability, Privacy
  - **Guides**: AI Lifecycle activities (development, deployment, monitoring)
  - **Assessed via**: AI Audit, ethics review processes
  - **Informed by**: Human rights frameworks, professional ethics codes
  - **Supports**: Social licence, public trust in AI
  - **Overlaps with**: Legal compliance, but extends beyond minimum requirements
  - **Challenges**: Automation Bias, value conflicts, cultural differences

  ## Examples and Applications

  1. **Healthcare AI Ethics**: Cancer treatment recommendation AI designed with patient autonomy prioritised—system provides recommendations with uncertainty quantification and alternative options, requires oncologist review and patient consent for final decisions, explains reasoning in clinically meaningful terms, monitors for performance disparities across patient demographics, maintains comprehensive audit trail, and establishes independent ethics board reviewing system impacts on patient care
  2. **Criminal Justice AI Ethics**: Recidivism risk assessment tool developed with fairness constraints ensuring equalized false positive/negative rates across racial groups, provides judges with transparent explanations of risk factors, undergoes independent fairness audit before deployment, includes judicial override capability, monitors for disparate impact, limits use to informing bail decisions (not sentencing), and publishes annual transparency reports on system performance and usage
  3. **Employment AI Ethics**: Hiring screening AI built with anti-discrimination protections removing proxy variables for protected characteristics, tested for adverse impact across demographic groups, provides human recruiters with explainable candidate summaries rather than black-box scores, requires human interview for final decisions, allows candidates to request human review, monitors hiring outcomes for fairness, and conducts regular bias audits with external experts
  4. **Social Media Content Curation Ethics**: Recommendation algorithm designed to limit amplification of misinformation and harmful content, provides users transparency about why content recommended, offers user controls over recommendation preferences, conducts human rights impact assessments for deployment in different countries, implements child safety protections, limits microtargeting of vulnerable populations, and maintains ethics advisory committee including civil society representatives

  ## ISO/IEC Standards Alignment

  **ISO/IEC 42001:2023** (AI Management Systems):
  - Incorporates ethical considerations throughout AI management system
  - Requires consideration of impacts on interested parties (ethical stakeholders)
  - Mandates impact assessment addressing ethical dimensions

  **ISO/IEC 24368** (Overview of Ethical and Societal Concerns):
  - Framework for addressing ethical and societal concerns in AI
  - Ethical principles and their application to AI systems

  **ISO/IEC 24029-1** (Assessment of Robustness of Neural Networks):
  - Technical approaches supporting safety and reliability (ethical requirements)

  **ISO/IEC 25059** (Quality Model for AI Systems):
  - Quality characteristics including ethical dimensions (fairness, transparency)

  ## NIST AI RMF Integration

  **GOVERN Function**:
  - Policies and procedures embed ethical principles
  - Leadership commitment to ethical AI
  - Organisational culture promoting ethical awareness
  - Stakeholder engagement on ethical concerns

  **MAP Function**:
  - Ethical considerations in context mapping
  - Values and principles identified for specific AI application
  - Stakeholder ethical expectations documented

  **MEASURE Function**:
  - Metrics addressing ethical dimensions (fairness, transparency, etc.)
  - Measurement of alignment with ethical commitments
  - Evaluation of ethical performance

  **MANAGE Function**:
  - Ethical risk identification and mitigation
  - Balancing competing ethical considerations
  - Continuous improvement of ethical performance

  **Trustworthiness Characteristics**:
  - Valid and Reliable, Safe, Secure and Resilient, Accountable and Transparent, Explainable and Interpretable, Privacy-Enhanced, Fair—operationalize ethical principles

  ## Implementation Considerations

  **Ethical Deliberation**:
  - Identifying relevant ethical principles and potential conflicts
  - Engaging diverse perspectives in ethical reasoning
  - Balancing competing values (e.g., privacy vs. safety, fairness vs. accuracy)
  - Addressing cultural and contextual variation in ethical priorities
  - Documenting ethical reasoning and trade-offs

  **Challenges**:
  - Translating abstract principles into concrete technical requirements
  - Addressing conflicting ethical principles (e.g., transparency vs. privacy)
  - Navigating cultural differences in ethical values
  - Balancing ethical considerations with business objectives
  - Measuring and verifying ethical compliance
  - Addressing novel ethical questions without established guidance
  - Maintaining ethical commitment under competitive pressure
  - Ensuring ethics is integrated, not cosmetic

  **Best Practices**:
  - Establish explicit ethical commitments and values
  - Involve ethicists and diverse stakeholders in AI development
  - Conduct ethical impact assessments before deployment
  - Implement ethics by design throughout development
  - Provide ethics training for AI practitioners
  - Create safe channels for raising ethical concerns
  - Monitor ethical performance continuously
  - Learn from ethical failures and near-misses
  - Maintain transparency about ethical considerations and trade-offs
  - Prioritise long-term ethical reputation over short-term gains

  ## Regulatory and Policy Context

  **OECD AI Principles**: Internationally agreed ethical framework (human-centred values, transparency, robustness, accountability, human oversight)

  **EU Ethics Guidelines for Trustworthy AI**: Comprehensive ethical framework with requirements and assessment list

  **EU AI Act**: Embeds ethical principles in regulatory requirements (human oversight, transparency, etc.)

  **IEEE Ethically Aligned Design**: Technical standards incorporating ethical principles

  **National AI Strategies**: Many countries include ethical AI as policy pillar

  **Professional Codes**: ACM, IEEE, and other professional societies establish ethical standards for AI practitioners

  ## Related Terms

  - **Responsible AI**: Overlapping concept emphasizing accountability
  - **Trustworthy AI**: Broader concept including ethics, legality, robustness
  - **AI Governance**: Framework implementing ethical AI commitments
  - **Fairness**: Core ethical principle
  - **Transparency**: Core ethical principle
  - **Accountability**: Core ethical principle
  - **Privacy**: Core ethical principle
  - **Human Rights**: Foundation for many ethical AI principles
  - **AI Impact Assessment**: Tool for assessing ethical implications
  - **Ethics by Design**: Approach embedding ethics in development

  ## References

  1. OECD, *Recommendation of the Council on Artificial Intelligence* (2019)
  2. European Commission High-Level Expert Group, *Ethics Guidelines for Trustworthy AI* (2019)
  3. IEEE, *Ethically Aligned Design* (2019)
  4. Floridi, L. et al., *AI4People—An Ethical Framework for a Good AI Society* (2018)
  5. Jobin, A. et al., *The global landscape of AI ethics guidelines*, Nature Machine Intelligence (2019)
  6. ISO/IEC 24368, *Information technology — Artificial intelligence — Overview of ethical and societal concerns*

  ## See Also

  - [[Responsible AI]]
  - [[Trustworthy AI]]
  - [[AI Governance]]
  - [[Fairness]]
  - [[Transparency]]
  - [[Accountability]]
  - [[Privacy]]
  - [[Human Rights]]
  - [[AI Impact Assessment]]
  - [[Ethics by Design]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
