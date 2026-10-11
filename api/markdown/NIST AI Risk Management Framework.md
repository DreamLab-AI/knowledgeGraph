The NIST AI Risk Management Framework (AI RMF 1.0), published by the National Institute of Standards and Technology in January 2023, is a voluntary, use-case-agnostic guidance document that helps organisations design, develop, deploy, and evaluate AI systems in a manner that is trustworthy and risk-informed. It organises AI risk management activities into four core functions — GOVERN, MAP, MEASURE, and MANAGE — and supports cross-functional integration of safety, reliability, fairness, privacy, and accountability considerations throughout the AI lifecycle. The framework is accompanied by a Playbook of suggested actions and is intended to complement existing risk management practices rather than replace sector-specific regulations or standards.

### Overview

- The NIST AI RMF emerged from a multi-year, community-driven process mandated by the US National AI Initiative Act of 2020, with input from industry, academia, civil society, and government.
- Unlike earlier NIST security frameworks—most notably the [[NIST Cybersecurity Framework]]—the AI RMF was designed from the outset to address harms that are socio-technical in nature: bias, opacity, loss of human agency, and dual-use misuse risks, in addition to conventional security and reliability concerns.
- The framework applies to any organisation that designs, develops, deploys, operates, or evaluates AI systems, regardless of sector, scale, or geography.
- It is intentionally non-prescriptive: organisations select which subcategories and suggested actions from the accompanying [[AI RMF Playbook]] are most relevant to their context and risk appetite.
- The US Executive Order on Safe, Secure, and Trustworthy AI (October 2023) directed federal agencies to align their AI acquisition and deployment practices with the AI RMF, significantly elevating its practical importance.

### Key Components

#### Four Core Functions

- **GOVERN** — Establishes the organisational policies, culture, roles, and accountability structures needed to embed [[AI Risk Assessment]] into enterprise decision-making. Includes assigning roles for [[Stakeholder Engagement]], defining risk tolerance, and setting incident-response expectations.
- **MAP** — Identifies and categorises AI risks in context: who is affected, what harms could arise, what is the intended use, and where in the [[AI Lifecycle Management]] chain risks emerge. Supports structured risk identification before deployment.
- **MEASURE** — Defines quantitative and qualitative methods for analysing, assessing, and tracking identified risks, including technical evaluation of [[Explainable AI]] outputs, performance across demographic subgroups for [[AI Fairness]], and ongoing [[AI Incident Reporting]] processes.
- **MANAGE** — Prioritises and treats identified risks through controls, mitigations, residual-risk acceptance, and response planning. Ensures that risk decisions are documented and revisited as systems evolve or operating contexts change.

#### AI RMF Playbook

- Companion document providing suggested actions and references for each subcategory within the four functions.
- Enables practitioners to translate high-level framework goals into operational checklists without imposing a single methodology.

#### AI RMF Profiles

- Sector- or use-case-specific adaptations of the core framework, developed collaboratively with stakeholder communities.
- Early profiles target domains such as generative AI, financial services, and healthcare, mapping AI RMF subcategories to sector regulations and [[Technical Standard]] requirements.

#### Trustworthy AI Characteristics

- The AI RMF defines trustworthiness through seven properties: accountable, explainable, fair with bias managed, interpretable, privacy-enhanced, reliable and safe, and secure and resilient.
- These properties directly inform the MEASURE function's evaluation criteria and connect to [[Responsible AI]] commitments.

### Applications / Use Cases

- **Federal Agency Compliance** — US agencies use the AI RMF to structure internal governance boards, conduct AI impact assessments, and document risk decisions in procurements involving [[MLOps]] pipelines.
- **Enterprise AI Governance** — Large enterprises in finance, healthcare, and telecommunications adopt the GOVERN function to embed AI oversight into existing board-level risk committees, linking to [[Data Governance]] programmes.
- **Generative AI Deployment** — The NIST Generative AI Profile (NIST AI 600-1) extends the AI RMF to address risks specific to large language models and diffusion models, covering hallucination, provenance, and content safety alongside standard risk categories.
- **Procurement and Vendor Assessment** — Buyers use MAP and MEASURE functions to evaluate vendor AI systems against trustworthiness criteria prior to acquisition, complementing contractual obligations derived from the [[EU AI Act]] or national equivalents.
- **Research and Development Governance** — Academic and industrial research teams use the framework's MAP function to document intended use, foreseeable misuse, and societal impact during the early stages of [[AI Safety]] research programmes.
- **Interoperability with ISO Standards** — Organisations holding or pursuing [[ISO/IEC 42001]] certification use the AI RMF as a supplementary layer, mapping GOVERN/MAP/MEASURE/MANAGE to ISO clauses on AI management systems.
- **Model Cards and Documentation** — Teams align MEASURE outputs with structured artefacts such as [[Model Card]] and datasheets, creating auditable evidence trails for internal review boards and external regulators.

### Standards & Context

- **Issuing body**: [[National Institute of Standards and Technology]] (NIST), US Department of Commerce
- **Publication**: NIST AI 100-1, January 2023 (AI RMF 1.0)
- **Mandate**: Directed by the US National AI Initiative Act of 2020; referenced by the 2023 Executive Order on AI
- **Companion publications**:
  - NIST AI 100-1 — Core framework document
  - NIST AI 600-1 — Generative AI Profile extending AI RMF to foundation models
  - NIST SP 1270 — Towards a Standard for Identifying and Managing Bias in Artificial Intelligence
- **Related international standards**:
  - [[ISO/IEC 42001]] — AI Management System Standard (provides certification path complementing AI RMF)
  - [[ISO/IEC 23894]] — AI risk management guidance aligned with ISO 31000
  - [[IEEE 7000]] series — Ethically aligned design standards
- **Regulatory interoperability**:
  - The [[EU AI Act]] and the AI RMF share overlapping risk-tier concepts; NIST has published cross-walking guidance
  - The UK AI Safety Institute references AI RMF principles in its evaluations framework
  - Singapore's AI Governance Framework draws on the same trustworthiness characteristics
- **Sector profiles in development** (as of knowledge cutoff):
  - Generative AI (NIST AI 600-1, published July 2024)
  - Financial services, healthcare, and autonomous vehicles profiles under community development

### Semantic Classification

### Current Landscape (2026)

- NIST published NIST AI 600-1, the Generative AI Profile, on 26 July 2024 as the first cross-sectoral companion to AI RMF 1.0, defining 12 GenAI-specific risk categories (CBRN information, confabulation, data privacy, information integrity, value chain and others) and over 200 suggested actions mapped to the GOVERN, MAP, MEASURE and MANAGE functions.
- The framework's political anchor shifted sharply: President Trump's EO 14148 (20 January 2025) rescinded EO 14110, and EO 14179 (23 January 2025) reoriented federal AI policy toward deregulation and competitiveness, though AI RMF 1.0 itself was not rescinded and remains the operational baseline.
- America's AI Action Plan (23 July 2025) names NIST in over 25 actions and directs the AI RMF to be revised to eliminate references to misinformation, diversity/equity/inclusion and climate change; the RMF is now formally in revision for a future version.
- Institutional rebranding continued: the US AI Safety Institute became the Center for AI Standards and Innovation (CAISI) in June 2025 under Commerce Secretary Lutnick, and on 29 May 2026 NIST renamed the AI Safety Institute Consortium (over 280 members) the NIST Artificial Intelligence Consortium via Federal Register notice, dropping "safety" and broadening scope to measurement, innovation and adoption.
- NIST is expanding the profile family: the Cyber AI Profile (NIST IR 8596) preliminary draft landed 16 December 2025 bridging CSF 2.0 and the AI RMF, NIST AI 800-4 on post-deployment monitoring appeared in March 2026, and an AI RMF Profile for Trustworthy AI in Critical Infrastructure reached concept-note stage on 7 April 2026.
- Implementation scaffolding is maturing alongside the core: NIST is developing SP 800-53 Control Overlays for Securing AI Systems (COSAiS), while the Cloud Security Alliance published crosswalks (AICM to AI 600-1, August 2025) and a draft NIST AI RMF Agentic Profile (27 March 2026) to extend governance to autonomous, tool-using agents not contemplated by the original documents.
- Open challenges as of 2026 include reconciling the de-emphasis of societal-risk language (misinformation, equity, environmental impact) with enterprises that still rely on those categories, the absence of binding federal enforcement, and gaps in governing agentic autonomy, continuous post-deployment drift and third-party model supply chains.

### References

- 1. National Institute of Standards and Technology (2024). Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1). https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
- 2. National Institute of Standards and Technology (2026). AI Risk Management Framework. https://www.nist.gov/itl/ai-risk-management-framework
- 3. The White House (2025). America's AI Action Plan. https://www.whitehouse.gov/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf
- 4. National Institute of Standards and Technology (2025). Cybersecurity Framework Profile for Artificial Intelligence (NIST IR 8596, preliminary draft). https://nvlpubs.nist.gov/nistpubs/ir/2025/NIST.IR.8596.iprd.pdf
- 5. Cloud Security Alliance (2026). NIST AI Consortium Expansion: Enterprise Security Governance. https://labs.cloudsecurityalliance.org/research/csa-research-note-nist-ai-consortium-expansion-governance-20/
- 6. Akin Gump (2025). White House Issues Long-Awaited AI Action Plan and Accompanying Executive Orders. https://www.akingump.com/en/insights/alerts/white-house-issues-long-awaited-ai-action-plan-and-accompanying-executive-orders

### Provenance

## Merged from NIST AI RMF (needs reconciliation)
The NIST AI Risk Management Framework (AI RMF) is a voluntary, technology-agnostic guidance document published by the National Institute of Standards and Technology in January 2023 that helps organisations identify, assess, and manage risks arising from the design, development, deployment, and operation of AI systems. It structures AI risk management practice through four core functions — Govern, Map, Measure, and Manage — forming a continuous lifecycle cycle applicable across sectors and organisational sizes. The framework explicitly promotes seven trustworthy-AI characteristics (accountable, explainable, fair, privacy-enhanced, reliable, resilient, and secure) as unifying goals, and is supported by a companion Playbook and a growing library of sector-specific profiles, including one for generative AI.

### Overview

- The AI RMF emerged from a multi-year, multi-stakeholder development process — spanning government agencies, private industry, academia, and civil society — producing a consensus-based resource rather than a top-down mandate.
- Its voluntary nature distinguishes it from regulatory instruments such as the [[EU AI Act]], enabling rapid adoption and iteration across a wide range of organisations and AI use cases.
- The framework is explicitly technology-neutral: it applies equally to traditional [[Machine Learning]] models, [[Large Language Model]], rule-based expert systems, and hybrid [[AI]] approaches.
- NIST positioned the AI RMF as a companion to its widely-adopted [[Cybersecurity Framework]] (CSF), sharing the same risk-based philosophy and tiered implementation approach.
- The framework has significant international reach, serving as a reference anchor for aligning US [[AI Governance]] with international counterparts such as [[ISO 42001]] and the [[OECD AI Principles]].

### Key Components

#### Four Core Functions

- **Govern** — establishes organisational policies, accountability structures, culture, and processes that enable [[AI Risk Management]] across the enterprise. It is the cross-cutting function that underpins the other three.
- **Map** — identifies and contextualises AI risks, including categorising the AI system, characterising affected stakeholders, and understanding the sociotechnical context in which the system operates. Feeds directly into [[Algorithmic Impact Assessment]] practice.
- **Measure** — analyses and evaluates identified risks using quantitative and qualitative methods, including testing, benchmarking, and ongoing monitoring. Connects to [[AI Explainability]] and [[Model Evaluation]] disciplines.
- **Manage** — prioritises and responds to AI risks through mitigation, transfer, acceptance, or avoidance, and establishes feedback loops for continuous improvement aligned with [[Responsible AI]] goals.

#### Trustworthy AI Characteristics

- The framework anchors risk management to seven properties that society expects from AI: accountable and transparent; explainable and interpretable; fair with harmful [[Algorithmic Bias]] managed; [[Privacy]]-enhanced; reliable and safe; resilient; and secure. These serve as a shared vocabulary connecting [[AI Ethics]] to operational practice.

#### AI RMF Playbook

- The companion Playbook maps each function into Categories and Subcategories, providing suggested actions, informative references, and measurable outcomes. It aligns with the [[NIST Cybersecurity Framework]] structure, easing adoption by organisations already using that standard.

#### Profiles and Roadmap

- NIST has extended the core framework with application-specific profiles. The Generative AI Profile (NIST AI 600-1) addresses risks specific to [[Generative AI]] systems — including hallucination, data provenance, and misuse — and represents an important evolution of the framework for large-scale [[Foundation Model]].

#### AI RMF Crosswalk

- NIST maintains crosswalks mapping AI RMF subcategories to related standards and frameworks, enabling organisations to integrate the framework with existing compliance postures (e.g., [[ISO 27001]], [[NIST SP 800-53]], and sector-specific regulations).

### Applications / Use Cases

- **Federal Agency Compliance** — US federal departments and agencies increasingly reference the AI RMF in procurement and internal AI programme oversight, particularly following Executive Orders on AI safety and trustworthiness.
- **Enterprise AI Governance Programmes** — large corporations use the four-function structure to build internal AI governance committees, risk registers, and model auditing workflows aligned with [[Organisational Governance]] principles.
- **AI Procurement & Vendor Assessment** — procurement teams use the AI RMF as a checklist for evaluating AI vendors and third-party model providers on trustworthiness criteria, aligning with supply-chain [[AI Risk]] management.
- **Regulated Sector Adoption** — financial services, healthcare, and critical infrastructure operators adapt the framework alongside sector-specific guidance (e.g., FDA's AI/ML action plan and financial regulator guidance) to address domain-specific risk profiles.
- **Research & Academia** — universities and AI research institutes use the AI RMF as a teaching scaffold for [[AI Ethics]], [[Responsible AI]] curricula, and risk-focused [[AI Policy]] research programmes.
- **International Harmonisation** — policy bodies in allied nations reference the AI RMF when designing national frameworks, facilitating interoperability with US partners and alignment with [[ISO 42001]] certification pathways.
- **MLOps Integration** — [[MLOps]] (MLOps) teams incorporate Measure and Manage function practices into model monitoring, drift detection, and retraining pipelines to operationalise risk management.

### Standards & Context

- **Mandating Legislation** — the National AI Initiative Act of 2020 (Section 22A) directed NIST to develop a voluntary risk management framework for AI. The resulting 2023 document (NIST AI 100-1) is the primary artefact.
- **Companion Standards** — the AI RMF crosswalks to [[ISO 42001]] (AI Management Systems), [[ISO 31000]] (Risk Management), [[ISO/IEC 27001]] (Information Security), and the [[OECD AI Principles]].
- **NIST AI 600-1** — the Generative AI Profile extends the core framework with 12 unique risks specific to [[Large Language Model]] and related [[Foundation Model]], including content provenance, hallucination, and homogenisation risks.
- **Executive Order Alignment** — US Executive Order 14110 (October 2023) on Safe, Secure, and Trustworthy AI directed agencies to use the NIST AI RMF as a baseline, elevating it from voluntary guidance to a de facto standard within the federal ecosystem.
- **Global Alignment** — the AI RMF informs transatlantic dialogue on [[AI Regulation]], including the US-EU Trade and Technology Council's joint roadmap for trustworthy AI and interoperability discussions with the [[EU AI Act]] conformity framework.
- **Sector Profiles Under Development** — NIST is developing additional profiles for critical infrastructure, finance, healthcare, and generative AI extensions, reflecting the framework's living, iterative design philosophy.

### Provenance

