public:: true

# ai policy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:683889669e4aa4989501a92f452ef21f4638aec85a08bf1f788b8edd72d4695c",
  "@type": "Page",
  "vc:slug": "ai-policy",
  "title": "ai policy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-policy",
  "@type": "Class",
  "label": "AI Policy",
  "definition": "AI Policy is the ensemble of government strategies, regulatory instruments, voluntary guidelines, and international agreements through which states and intergovernmental bodies shape the development, deployment, and societal impact of artificial intelligence systems. Policy instruments span public research funding, national AI strategies, procurement standards for government AI use, export controls on frontier hardware and models, and binding requirements for transparency, accountability, and fundamental-rights compliance in high-stakes applications. Effective AI policy must balance national competitiveness, safety assurance, equitable access, and interoperability with allied jurisdictions, making it an inherently multi-stakeholder and multi-domain governance challenge.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "supports": [
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"},
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:digital-sovereignty", "label": "Digital Sovereignty"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-governance-framework", "label": "AI Governance Framework"},
      {"@id": "urn:ngm:class:algorithmic-accountability", "label": "Algorithmic Accountability"},
      {"@id": "urn:ngm:class:ai-audit", "label": "AI Audit"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-regulation", "label": "AI Regulation"},
      {"@id": "urn:ngm:class:ai-ethics", "label": "AI Ethics"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"},
      {"@id": "urn:ngm:class:technology-policy", "label": "Technology Policy"},
      {"@id": "urn:ngm:class:competition-policy", "label": "Competition Policy"},
      {"@id": "urn:ngm:class:intellectual-property", "label": "Intellectual Property"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"},
      {"@id": "urn:ngm:class:impact-assessment", "label": "Impact Assessment"},
      {"@id": "urn:ngm:class:stakeholder-consultation", "label": "Stakeholder Consultation"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:oecd-ai-principles", "label": "OECD AI Principles"},
      {"@id": "urn:ngm:class:iso-iec-42001", "label": "ISO/IEC 42001"},
      {"@id": "urn:ngm:class:eu-ai-act", "label": "EU AI Act"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:self-regulation", "label": "Self-Regulation"},
      {"@id": "urn:ngm:class:laissez-faire-innovation-policy", "label": "Laissez-Faire Innovation Policy"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:cybersecurity-policy", "label": "Cybersecurity Policy"},
      {"@id": "urn:ngm:class:semiconductor-export-controls", "label": "Semiconductor Export Controls"},
      {"@id": "urn:ngm:class:human-rights-law", "label": "Human Rights Law"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:artificial-intelligence-policy", "label": "Artificial Intelligence Policy"},
    {"@id": "urn:ngm:class:national-ai-strategy", "label": "National AI Strategy"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - AI Policy is the ensemble of government strategies, regulatory instruments, voluntary guidelines, and international agreements through which states and intergovernmental bodies shape the development, deployment, and societal impact of [[Artificial Intelligence]] systems. Spanning industrial investment, binding regulation, and multilateral coordination, AI policy is distinguished from broader [[Technology Policy]] by its focus on systems capable of autonomous inference and decision-making. It sits at the intersection of [[AI Governance]], [[AI Ethics]], and [[AI Safety]], aiming to channel innovation toward socially beneficial outcomes while managing systemic and catastrophic risks.

- ### Overview
  - AI policy has evolved rapidly from voluntary ethics guidelines (circa 2017–2019) to comprehensive legislative frameworks (2022–2025), reflecting a global shift in how governments perceive AI risks and opportunities.
  - Three core drivers shape policy agendas:
    - **Economic competitiveness** — states seek to capture productivity gains and global leadership in foundation model development, semiconductor manufacturing, and AI-enabled services.
    - **Safety and risk management** — the potential for AI systems to cause harm in high-stakes domains (healthcare, criminal justice, critical infrastructure) demands accountability mechanisms.
    - **Geopolitical positioning** — technology leadership is increasingly framed as a dimension of national security, driving export controls, industrial subsidies, and allied coordination.
  - AI policy operates across multiple governance levels: national legislatures, executive agencies, standards bodies, and intergovernmental organisations, each with different instruments and enforcement capacities.

- ### Key Components
  - **National AI Strategies**
    - Comprehensive plans that set investment targets, talent priorities, compute infrastructure ambitions, and sector-specific deployment roadmaps.
    - Examples: US Executive Order on the Safe, Secure, and Trustworthy Development and Use of AI (2023); UK AI Opportunities Action Plan; China's New Generation AI Development Plan; EU Coordinated Plan on AI.
    - Typically include funding for [[AI Research]], education reform, and regulatory sandboxes.
  - **Binding Regulation**
    - Legislative instruments that impose legal obligations on AI developers and deployers.
    - The [[EU AI Act]] (2024) establishes a risk-tiered framework: unacceptable-risk applications are banned (e.g. social scoring); high-risk systems (medical devices, recruitment tools) face conformity assessments; general-purpose AI models above a compute threshold face transparency and safety obligations.
    - Sector-specific rules (FDA guidance on AI-enabled medical devices, FTC enforcement on deceptive AI) coexist with horizontal frameworks.
  - **Voluntary Guidelines and Codes of Conduct**
    - Non-binding instruments that set norms ahead of legislation or across jurisdictions where legislation is absent.
    - [[OECD AI Principles]] (2019, revised 2024) provide the most widely adopted voluntary framework, covering transparency, robustness, accountability, and inclusiveness.
    - Frontier AI voluntary commitments (White House Voluntary Commitments 2023, Seoul AI Safety Commitments 2024) address frontier model safety, red-teaming, and incident reporting.
  - **Export Controls and Industrial Policy**
    - Semiconductor export controls (US Bureau of Industry and Security restrictions on advanced GPUs and HBM memory to certain jurisdictions) weaponise supply-chain chokepoints as a policy tool.
    - Industrial subsidies (CHIPS and Science Act, EU Chips Act) aim to reshore semiconductor manufacturing capacity.
    - These instruments bridge AI policy to [[Semiconductor Export Controls]] and [[Supply Chain Security]].
  - **Procurement Standards**
    - Government procurement rules shape AI adoption in the public sector and set de facto standards for private suppliers.
    - Requirements for [[Algorithmic Accountability]], [[Explainability]], and bias auditing in public-sector AI systems create market pull for compliant practices.
  - **International Coordination**
    - The Bletchley Declaration (November 2023) and subsequent AI Safety Summits (Seoul 2024, Paris 2025) established a forum for frontier-risk discussion among major AI-producing states.
    - [[ISO/IEC 42001]] (AI management systems) provides a globally harmonised standard for responsible AI governance in organisations.
    - OECD, ITU, and UNESCO produce non-binding frameworks that inform national legislation.

- ### Applications and Use Cases
  - **Healthcare regulation** — AI policy specifies whether diagnostic AI must be cleared as a medical device, what clinical validation is required, and how liability is allocated when AI-assisted diagnosis errs.
  - **Criminal justice** — restrictions or requirements for algorithmic risk-assessment tools used in bail, sentencing, or predictive policing decisions, typically grounded in [[Algorithmic Accountability]] and [[Human Rights Law]] principles.
  - **Autonomous vehicles** — national frameworks determine testing authorisation, liability regimes, and minimum safety standards for self-driving systems deployed on public roads.
  - **Financial services** — supervisory guidance on model risk management, explainability of credit-scoring algorithms, and systemic risk from AI-driven trading strategies.
  - **Recruitment and HR** — regulations (e.g. NYC Local Law 144, EU AI Act high-risk category) requiring bias audits of automated employment decision tools.
  - **Critical infrastructure** — cybersecurity-adjacent AI policy addressing AI-enabled threats to energy grids, water systems, and communications networks.
  - **Generative AI and copyright** — policy frameworks addressing authorship, licensing, and training-data rights for large language models and image-generation systems, connecting AI policy to [[Intellectual Property]] law.

- ### Mechanisms and Instruments
  - **Risk-based regulation** — differentiating obligations by the severity of potential harm; the EU AI Act's four-tier model is the leading exemplar.
  - **Conformity assessment** — third-party evaluation of AI systems against specified standards before deployment in high-risk contexts, analogous to CE marking in product safety.
  - **Regulatory sandboxes** — controlled environments in which innovators can test AI products under regulatory supervision with relaxed compliance obligations.
  - **Algorithmic impact assessments (AIAs)** — structured processes for identifying, evaluating, and mitigating the potential social harms of an AI system prior to deployment.
  - **Incident reporting obligations** — mandatory disclosure of AI-related harms or near-misses to competent authorities, enabling aggregate risk monitoring.
  - **Compute governance** — emerging policy lever targeting the training of frontier models through compute thresholds (e.g. 10^26 FLOPs in the US EO), above which heightened safety obligations apply.

- ### Relationships
  - supports:: [[AI Governance]]
  - supports:: [[Responsible AI]]
  - supports:: [[AI Safety]]
  - supports:: [[Digital Sovereignty]]
  - enables:: [[AI Governance Framework]]
  - enables:: [[Algorithmic Accountability]]
  - enables:: [[AI Audit]]
  - relatedTo:: [[AI Regulation]]
  - relatedTo:: [[AI Ethics]]
  - relatedTo:: [[Data Governance]]
  - relatedTo:: [[Technology Policy]]
  - relatedTo:: [[Competition Policy]]
  - relatedTo:: [[Intellectual Property]]
  - requires:: [[Risk Assessment]]
  - requires:: [[Impact Assessment]]
  - requires:: [[Stakeholder Consultation]]
  - standardizedBy:: [[OECD AI Principles]]
  - standardizedBy:: [[ISO/IEC 42001]]
  - standardizedBy:: [[EU AI Act]]
  - contrastsWith:: [[Self-Regulation]]
  - bridges-to:: [[Cybersecurity Policy]]
  - bridges-to:: [[Semiconductor Export Controls]]
  - bridges-to:: [[Human Rights Law]]

- ### Standards and Context
  - **ISO/IEC 42001:2023** — AI management system standard; provides auditable requirements for responsible AI governance in organisations; analogous to ISO 27001 for information security.
  - **OECD AI Principles (2019, updated 2024)** — adopted by 46+ countries; cover inclusive growth, human-centred values, transparency, robustness, and accountability.
  - **NIST AI Risk Management Framework (AI RMF 1.0, 2023)** — US voluntary framework organising AI risk governance around Govern, Map, Measure, Manage functions; widely referenced in US federal procurement.
  - **EU AI Act (Regulation (EU) 2024/1689)** — entered into force August 2024; phased applicability through 2027; defines prohibited practices, high-risk system requirements, GPAI model obligations, and national market-surveillance authorities.
  - **UNESCO Recommendation on the Ethics of AI (2021)** — adopted by 193 member states; non-binding but influential in shaping national ethical frameworks, particularly in the Global South.
  - **Bletchley Declaration (2023) / Seoul Commitments (2024)** — international agreements on frontier AI safety testing, red-teaming, and information-sharing between governments and leading AI developers.
  - **Council of Europe Framework Convention on AI (2024)** — first legally binding international treaty on AI, open to non-member states; focuses on human rights, democracy, and rule of law compliance.
  - Relevant bodies: ISO/IEC JTC1 SC42 (AI standards), ITU Focus Group on AI for Good, G7 Hiroshima AI Process, GPAI (Global Partnership on AI).

- ### Challenges and Tensions
  - **Regulatory fragmentation** — divergent national frameworks (EU, US, China, UK) create compliance complexity for multinational AI developers and risk regulatory arbitrage.
  - **Pacing problem** — legislative cycles operate on multi-year timescales; AI capability advances on shorter timescales, generating persistent gaps between policy intent and technological reality.
  - **Definitional instability** — the legal definition of "AI system" varies across jurisdictions, creating uncertainty about which products fall under which obligations.
  - **Extraterritoriality** — the EU AI Act applies to providers placing systems on the EU market regardless of establishment location, creating de facto global compliance pressure (Brussels Effect).
  - **Compute governance limitations** — FLOP-based thresholds become obsolete as algorithmic efficiency improves; future policy may need to target capabilities or deployment contexts rather than training compute.
  - **Dual-use tensions** — AI systems optimised for legitimate commercial or scientific use may also enable harmful applications; policy must calibrate how to regulate capabilities without suppressing beneficial innovation.
  - **Global South inclusion** — most AI policy frameworks are produced by OECD economies; developing nations lack capacity to participate in standard-setting and risk having frameworks imposed rather than co-designed.

- ### Provenance
  - sources:: OECD.AI Policy Observatory; EU AI Act text (EUR-Lex); NIST AI RMF; ISO/IEC 42001; Bletchley Declaration; Council of Europe Framework Convention on AI
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
