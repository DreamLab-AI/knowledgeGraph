- ### Definition
  - The **NIST AI Risk Management Framework** (AI RMF) is a voluntary, sector-agnostic guidance document published by the [[National Institute of Standards and Technology]] in January 2023, mandated by the National AI Initiative Act of 2020. It provides a structured, flexible approach to managing risks across the full [[AI Lifecycle]] — from design and development through deployment and decommissioning — through four core functions: Govern, Map, Measure, and Manage. The framework aims to cultivate [[Trustworthy AI]] by embedding principles of [[Accountability]], [[Transparency]], [[Fairness]], and [[AI Safety]] into organisational risk culture, and is extended by a companion Playbook and growing library of sector-specific profiles.

- ### Overview
  - The AI RMF emerged from a multi-year, multi-stakeholder development process — spanning government agencies, private industry, academia, and civil society — producing a consensus-based resource rather than a top-down mandate.
  - Its voluntary nature distinguishes it from regulatory instruments such as the [[EU AI Act]], enabling rapid adoption and iteration across a wide range of organisations and AI use cases.
  - The framework is explicitly technology-neutral: it applies equally to traditional [[Machine Learning]] models, [[Large Language Models]], rule-based expert systems, and hybrid [[AI]] approaches.
  - NIST positioned the AI RMF as a companion to its widely-adopted [[Cybersecurity Framework]] (CSF), sharing the same risk-based philosophy and tiered implementation approach.
  - The framework has significant international reach, serving as a reference anchor for aligning US [[AI Governance]] with international counterparts such as [[ISO 42001]] and the [[OECD AI Principles]].

- ### Key Components
  - #### Four Core Functions
    - **Govern** — establishes organisational policies, accountability structures, culture, and processes that enable [[AI Risk Management]] across the enterprise. It is the cross-cutting function that underpins the other three.
    - **Map** — identifies and contextualises AI risks, including categorising the AI system, characterising affected stakeholders, and understanding the sociotechnical context in which the system operates. Feeds directly into [[Algorithmic Impact Assessment]] practice.
    - **Measure** — analyses and evaluates identified risks using quantitative and qualitative methods, including testing, benchmarking, and ongoing monitoring. Connects to [[AI Explainability]] and [[Model Evaluation]] disciplines.
    - **Manage** — prioritises and responds to AI risks through mitigation, transfer, acceptance, or avoidance, and establishes feedback loops for continuous improvement aligned with [[Responsible AI]] goals.
  - #### Trustworthy AI Characteristics
    - The framework anchors risk management to seven properties that society expects from AI: accountable and transparent; explainable and interpretable; fair with harmful [[Algorithmic Bias]] managed; [[Privacy]]-enhanced; reliable and safe; resilient; and secure. These serve as a shared vocabulary connecting [[AI Ethics]] to operational practice.
  - #### AI RMF Playbook
    - The companion Playbook maps each function into Categories and Subcategories, providing suggested actions, informative references, and measurable outcomes. It aligns with the [[NIST Cybersecurity Framework]] structure, easing adoption by organisations already using that standard.
  - #### Profiles and Roadmap
    - NIST has extended the core framework with application-specific profiles. The Generative AI Profile (NIST AI 600-1) addresses risks specific to [[Generative AI]] systems — including hallucination, data provenance, and misuse — and represents an important evolution of the framework for large-scale [[Foundation Models]].
  - #### AI RMF Crosswalk
    - NIST maintains crosswalks mapping AI RMF subcategories to related standards and frameworks, enabling organisations to integrate the framework with existing compliance postures (e.g., [[ISO 27001]], [[NIST SP 800-53]], and sector-specific regulations).

- ### Applications / Use Cases
  - **Federal Agency Compliance** — US federal departments and agencies increasingly reference the AI RMF in procurement and internal AI programme oversight, particularly following Executive Orders on AI safety and trustworthiness.
  - **Enterprise AI Governance Programmes** — large corporations use the four-function structure to build internal AI governance committees, risk registers, and model auditing workflows aligned with [[Organisational Governance]] principles.
  - **AI Procurement & Vendor Assessment** — procurement teams use the AI RMF as a checklist for evaluating AI vendors and third-party model providers on trustworthiness criteria, aligning with supply-chain [[AI Risk]] management.
  - **Regulated Sector Adoption** — financial services, healthcare, and critical infrastructure operators adapt the framework alongside sector-specific guidance (e.g., FDA's AI/ML action plan and financial regulator guidance) to address domain-specific risk profiles.
  - **Research & Academia** — universities and AI research institutes use the AI RMF as a teaching scaffold for [[AI Ethics]], [[Responsible AI]] curricula, and risk-focused [[AI Policy]] research programmes.
  - **International Harmonisation** — policy bodies in allied nations reference the AI RMF when designing national frameworks, facilitating interoperability with US partners and alignment with [[ISO 42001]] certification pathways.
  - **MLOps Integration** — [[Machine Learning Operations]] (MLOps) teams incorporate Measure and Manage function practices into model monitoring, drift detection, and retraining pipelines to operationalise risk management.

- ### Relationships
  - hasPart:: [[AI RMF Govern Function]], [[AI RMF Map Function]], [[AI RMF Measure Function]], [[AI RMF Manage Function]], [[AI RMF Playbook]]
  - partOf:: [[US AI Policy]]
  - requires:: [[Risk Assessment]], [[Stakeholder Engagement]], [[Organisational Governance]]
  - enables:: [[AI Risk Management]], [[Accountability]], [[Trustworthy AI]], [[AI Governance Maturity Model]]
  - supports:: [[AI Safety]], [[Fairness]], [[Transparency]], [[Reliability]], [[AI Explainability]], [[Privacy]]
  - standardizedBy:: [[NIST]]
  - contrastsWith:: [[EU AI Act]], [[ISO 42001]]
  - bridgesTo:: [[AI Risk]], [[Responsible AI]], [[Machine Learning Operations]]
  - relatedTo:: [[AI Governance]], [[Cybersecurity Framework]], [[Risk Management]], [[Algorithmic Impact Assessment]]
  - sameAs:: [[AI Risk Management Framework]], [[NIST AI 600-1]]

- ### Standards & Context
  - **Mandating Legislation** — the National AI Initiative Act of 2020 (Section 22A) directed NIST to develop a voluntary risk management framework for AI. The resulting 2023 document (NIST AI 100-1) is the primary artefact.
  - **Companion Standards** — the AI RMF crosswalks to [[ISO 42001]] (AI Management Systems), [[ISO 31000]] (Risk Management), [[ISO/IEC 27001]] (Information Security), and the [[OECD AI Principles]].
  - **NIST AI 600-1** — the Generative AI Profile extends the core framework with 12 unique risks specific to [[Large Language Models]] and related [[Foundation Models]], including content provenance, hallucination, and homogenisation risks.
  - **Executive Order Alignment** — US Executive Order 14110 (October 2023) on Safe, Secure, and Trustworthy AI directed agencies to use the NIST AI RMF as a baseline, elevating it from voluntary guidance to a de facto standard within the federal ecosystem.
  - **Global Alignment** — the AI RMF informs transatlantic dialogue on [[AI Regulation]], including the US-EU Trade and Technology Council's joint roadmap for trustworthy AI and interoperability discussions with the [[EU AI Act]] conformity framework.
  - **Sector Profiles Under Development** — NIST is developing additional profiles for critical infrastructure, finance, healthcare, and generative AI extensions, reflecting the framework's living, iterative design philosophy.

- ### Provenance
  - sources:: NIST AI 100-1 (January 2023); NIST AI 600-1 (July 2024); National AI Initiative Act of 2020; NIST AI RMF Playbook
  - updated:: 2026-06-13