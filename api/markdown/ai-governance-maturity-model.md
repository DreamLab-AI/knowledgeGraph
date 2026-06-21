- ### Definition
  - An AI Governance Maturity Model is a structured assessment framework that defines progressive, ordinal maturity levels for an organisation's AI governance capabilities across multiple functional dimensions, providing a calibrated measurement instrument by which organisations can evaluate their current governance state, identify specific capability gaps, benchmark their practices against sector peers, and generate prioritised improvement roadmaps toward trustworthy and compliant AI deployment at scale. Methodologically, AI governance maturity models inherit the architecture of the Capability Maturity Model Integration ([[CMMI Institute]]) and the [[ISO 21827]] Systems Security Engineering CMM, adapting the five-level ordinal progression — (1) Initial/Ad Hoc, (2) Repeatable/Managed, (3) Defined, (4) Quantitatively Managed, and (5) Optimising — to the distinctive dimensions of AI governance practice. At Level 1, governance is absent or entirely reactive: individual teams apply informal judgements about AI risk without standardisation, documentation is sparse, and compliance is incidental. At Level 2, basic controls exist and are repeatable within projects but are not institutionally standardised; risk assessments are performed inconsistently, and governance artefacts vary in quality. Level 3 marks the transition to organisation-wide standardised processes: a documented [[AI Governance Framework]] is in force, model development follows a defined [[AI Ethics Checklist]] and [[AI Risk Assessment]] procedure, [[Human Oversight]] roles are formally assigned, and an [[AI Ethics Board]] with cross-functional membership exists. Level 4 introduces quantitative management: governance metrics are systematically collected (incident rates, assessment coverage percentages, bias audit pass rates, time-to-remediation), enabling data-driven governance decisions and external benchmarking. Level 5, the optimising stage, is characterised by continuous improvement loops fed by measurement feedback, proactive regulatory anticipation, and contribution to industry best-practice standards. Assessment methodology spans self-assessment questionnaires calibrated to each maturity level, documentary evidence review (policy artefacts, model cards, audit logs, training records), structured interviews with governance role-holders, and optional third-party external validation producing stamped maturity certificates — a pathway institutionalised by ISACA's CMMI AI add-on and the [[Responsible AI]] Institute's certification scheme. Maturity dimensions assessed typically include governance structure and leadership (executive commitment, board-level AI oversight, organisational role clarity), risk management (identification, assessment, treatment, monitoring), ethical practice (principles adoption, ethics review cadence, [[Fairness]] auditing), technical controls (documentation standards, testing protocols, deployment monitoring), [[Regulatory Compliance]] and audit (conformance mapping, evidence collection, audit readiness), [[Stakeholder Engagement]] (consultation processes, transparency reporting, grievance mechanisms), and continuous improvement (lessons-learned integration, metric-driven iteration). The [[Singapore Model AI Governance Framework]] maturity assessment and Databricks' enterprise AI governance maturity matrix represent prominent published instantiations, while the 2024 healthcare-specific HAIRA (Healthcare AI Governance Readiness Assessment) extends the model to clinical deployment contexts. A 2024 Gartner survey found that fewer than half of large organisations could demonstrate measurable governance advancement despite 80% claiming active oversight programmes — a "governance theatre" gap that maturity models, by demanding evidence over assertion, are specifically designed to close.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AIGovernanceMaturityModel
  - owl-role:: AssessmentInstrument
  - owl-inferred:: ai:MaturityFramework, ai:GovernanceCapabilityModel, ai:BenchmarkingTool
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - is-subclass-of:: [[AI Governance Framework]], [[Governance Model]], [[Maturity Model]], [[Assessment Framework]]
  - has-part:: [[Maturity Level]], [[Assessment Dimension]], [[Governance Capability]], [[Gap Analysis]], [[Improvement Roadmap]], [[Evidence Collection]], [[Self-Assessment Tool]], [[Benchmarking Methodology]]
  - is-part-of:: [[AI Governance Framework]], [[AI Governance]], [[Governance Model]]
  - requires:: [[AI Governance Framework]], [[AI Risk Assessment]], [[AI Ethics Board]], [[Regulatory Compliance]], [[Model Documentation]], [[Stakeholder Engagement]]
  - enables:: [[Responsible AI]], [[AI Accountability]], [[Trustworthy AI]], [[Regulatory Compliance]], [[Continuous Improvement]], [[AI Safety]], [[AI Transparency]]
  - implements:: [[CMMI Institute]], [[ISO 21827]], [[ISO/IEC 42001]], [[OECD AI Principles]], [[NIST AI RMF]], [[Singapore Model AI Governance Framework]]
  - depends-on:: [[AI Governance Framework]], [[Data Governance]], [[Risk Management]], [[Regulatory Compliance]]
  - supports:: [[AI Accountability]], [[AI Safety]], [[Ethical AI]], [[Responsible AI]], [[AI Risk Management]]
  - uses:: [[Self-Assessment Tool]], [[Evidence Collection]], [[Algorithmic Auditing]], [[AI Ethics Checklist]], [[AI Risk Assessment]], [[Gap Analysis]], [[Benchmarking Methodology]]
  - contrasts-with:: [[Ad Hoc AI Deployment]], [[Governance Theatre]], [[Unregulated Deployment]]
  - related-to:: [[AI Governance Framework]], [[AI Governance]], [[Responsible AI]], [[AI Ethics]], [[Fairness]], [[Transparency]], [[Human Oversight]], [[AI Risk Management]], [[Algorithmic Accountability]], [[Smart Contract]]
  - standardized-by:: [[CMMI Institute]], [[ISO 21827]], [[ISO/IEC 42001]], [[NIST AI RMF]]
  - bridges-to:: [[Smart Contract]], [[Data Governance Maturity Model]], [[Enterprise Risk Management]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:hasPart ai:MaturityLevel))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:hasPart ai:AssessmentDimension))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:hasPart ai:GapAnalysis))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:hasPart ai:ImprovementRoadmap))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:hasPart ai:EvidenceCollection))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:hasPart ai:SelfAssessmentTool))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:hasPart ai:BenchmarkingMethodology))

  ## Dependency Relationships
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:requires ai:AIGovernanceFramework))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:requires ai:AIRiskAssessment))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:requires ai:ModelDocumentation))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:requires ai:RegulatoryCompliance))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:requires ai:StakeholderEngagement))

  ## Capability Relationships
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:enables ai:ResponsibleAI))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:enables ai:AIAccountability))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:enables ai:TrustworthyAI))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:enables ai:RegulatoryCompliance))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:enables ai:ContinuousImprovement))

  ## Implementation Relationships
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:implements ai:CMMIInstitute))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:implements ai:ISO21827))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:implements ai:ISOiEC42001))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:implements ai:NISTAIRiskManagementFramework))

  ## Reduction Relationships
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:reducesTo ai:AIGovernanceFramework))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:reducesTo ai:GovernanceModel))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:reducesTo ai:AssessmentFramework))

  ## Support Relationships
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:supports ai:AIAccountability))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:supports ai:AISafety))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:supports ai:EthicalAI))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:supports ai:AIRiskManagement))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:supports ai:ResponsibleAI))

  ## Use Relationships
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:uses ai:SelfAssessmentTool))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:uses ai:AlgorithmicAuditing))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:uses ai:AIEthicsChecklist))
      SubClassOf(ai:AIGovernanceMaturityModel
        ObjectSomeValuesFrom(ai:uses ai:GapAnalysis))

  ## About

  The AI Governance Maturity Model emerged as a response to the observation that organisations claiming to practice AI governance often lacked consistent, auditable evidence of their capabilities.
  Maturity models address this by shifting the governance conversation from binary compliance ("do you have a policy?")
  to gradational capability ("how embedded, standardised, and continuously improving is your governance?").
  The intellectual lineage runs through three traditions:
  (1) software process improvement, beginning with Watts Humphrey's Software Engineering Institute (SEI) CMM (1988) and its successor CMMI,
  which demonstrated that process maturity correlates with quality and delivery outcomes;
  (2) information security maturity modelling, codified in [[ISO 21827]] (SSE-CMM, 2008) and ISACA's COBIT frameworks;
  and (3) data governance maturity modelling, exemplified by the DAMA DMBOK Data Management Maturity model and Gartner's Information Management Maturity Framework,
  which provided the template for extending process-maturity concepts to data-intensive AI governance.

  The five-level structure has proven remarkably durable because it maps onto observable organisational states.
  At Level 1, AI governance is characterised by what practitioners call "hero culture" — exceptional individuals applying personal ethical judgement without organisational support.
  At Level 2, basic processes exist on paper and are repeatable within teams that developed them, but institutional memory is fragile.
  The transition from Level 2 to Level 3 is the most consequential:
  it requires the [[AI Ethics Board]] or equivalent governance body to have genuine authority,
  the [[AI Governance Framework]] to be referenced in employment contracts and procurement conditions,
  and [[AI Risk Assessment]] procedures to be mandatory rather than optional.
  Most mature organisations assessed in 2024–2025 cluster at Levels 2–3;
  achieving Level 4's quantitative management requires investment in governance metrics infrastructure —
  dashboards tracking bias audit coverage, [[Algorithmic Auditing]] completion rates, model card publication compliance, and incident response timeliness —
  that many organisations have not yet built.
  Level 5, the optimising stage, is characterised by governance teams contributing to external standards bodies,
  publishing research on governance methods, and anticipating regulatory developments rather than merely reacting to them.

  Assessment methodology is the practical engine of the maturity model.
  Self-assessment questionnaires, typically organised as dimension-by-level grids producing a radar chart of governance maturity,
  provide rapid organisational positioning but are prone to overestimation — the "governance theatre" effect documented by Gartner (2024).
  Evidence-based assessment, where assessors review actual artefacts (policy documents, model cards, audit logs, training completion records, board minutes),
  produces more accurate profiles.
  External validation — formal audit by accredited assessors, producing stamped certificates — is the gold standard
  and aligns with [[ISO/IEC 42001]] Clause 9 (internal audit) and Clause 9.3 (management review) requirements.
  The ISACA CMMI AI add-on (2025) provides a published appraisal methodology specifically for AI governance maturity
  that can be conducted by ISACA-certified appraisers.

  ### Maturity Level Characterisation in Detail

  **Level 1 — Initial/Ad Hoc**: Governance is entirely reactive and person-dependent.
  There is no documented [[AI Governance Framework]]; if an ethical concern arises, it is addressed informally based on the judgement of whoever happens to notice it.
  [[AI Risk Assessment]] is absent or confined to unstructured discussion.
  Model cards and datasheets are not produced systematically.
  [[Regulatory Compliance]] with instruments like the EU AI Act or ISO/IEC 42001 is not systematically tracked.
  Organisations at this level are exposed to significant regulatory, reputational, and ethical risk from their AI deployments.
  The majority of small and medium-sized enterprises and early-stage AI adopters in healthcare, legal services, and education operate at Level 1 as of 2026.

  **Level 2 — Repeatable/Managed**: Basic project-level governance controls exist and are repeatable within the teams that created them.
  An [[AI Ethics Checklist]] may be used in some projects but is not organisation-wide policy.
  Risk assessments are performed at project discretion using inconsistent templates.
  There is no central AI inventory or governance oversight function.
  Individual AI product managers or data scientists have adopted governance practices voluntarily,
  creating "governance islands" that evaporate when key personnel leave.
  At this level, organisations can demonstrate some governance activity to regulators but cannot provide consistent evidence across their AI portfolio.

  **Level 3 — Defined**: The most critical transition in the maturity model.
  Organisation-wide standardised governance processes are active and documented.
  A formal [[AI Governance Framework]] exists, has been approved at board level, and is referenced in engineering policies and third-party supplier contracts.
  The [[AI Ethics Board]] or equivalent body has formal authority, meeting records, and a defined mandate.
  All AI systems above a defined risk threshold require mandatory [[AI Risk Assessment]] before deployment,
  with documented approvals from the review body.
  [[Model Documentation]] (model cards, datasheets for datasets) is required for all systems entering production.
  [[Human Oversight]] roles and escalation pathways are formally defined.
  [[Regulatory Compliance]] mapping covers applicable jurisdictions.
  This level aligns with ISO/IEC 42001 certification readiness and EU AI Act conformity assessment capability.

  **Level 4 — Quantitatively Managed**: Governance moves from qualitative to data-driven.
  Metrics are systematically collected: bias audit pass rates by model and deployment context,
  [[AI Risk Assessment]] completion coverage as a percentage of deployed AI inventory,
  mean time to governance review for new system deployments, incident response timeliness,
  [[Algorithmic Transparency Index]] scores, and stakeholder satisfaction with transparency reporting.
  These metrics are reviewed by the AI Ethics Board on a defined cadence (typically quarterly)
  and used to drive targeted governance improvements.
  External benchmarking against sector peers — using industry surveys, regulatory maturity assessments, or third-party audit comparisons —
  enables the organisation to position its governance maturity in a competitive and regulatory context.

  **Level 5 — Optimising**: Continuous improvement is embedded in the governance function itself.
  Metric feedback drives systematic governance process refinement.
  The organisation contributes to external standards bodies (ISO/IEC JTC 1/SC 42, IEEE, NIST AI Safety Institute workshops).
  Governance innovations — novel risk assessment methodologies, new bias auditing techniques, improved transparency artefacts —
  are published and shared with the broader governance community.
  Regulatory changes are anticipated and prepared for rather than reactively addressed.
  Governance is recognised internally as a competitive advantage enabling faster and more confident AI deployment,
  not merely a cost centre or compliance burden.
  Fewer than 5% of assessed organisations globally reach this level as of 2026.

  ### Dimension Deep-Dive: Technical Controls Maturity

  Technical controls maturity is one of the most operationally complex assessment dimensions because it requires evaluating both the existence and the effectiveness of tooling.
  At Level 1, there are no systematic technical controls: models are deployed without automated bias testing, monitoring dashboards, or explainability tooling.
  At Level 2, some technical controls exist — perhaps a SHAP explainability library is used by a data science team — but they are not integrated into CI/CD pipelines.
  At Level 3, technical controls are standardised: fairness testing suites (e.g., Fairlearn, IBM AI Fairness 360) are mandatory before deployment sign-off;
  explainability outputs are generated for all high-risk systems;
  monitoring dashboards track model performance metrics and drift detection post-deployment;
  [[Access Control]] policies are enforced on training data and model registries.
  At Level 4, technical control metrics are collected and acted upon: drift detection alert rates, false-positive rates from fairness testing, coverage of monitoring across the AI portfolio.
  At Level 5, technical governance tooling is continuously refined based on operational data,
  contributing to open-source fairness and explainability libraries and sharing tooling innovations with the governance community.

  ### Governance Theatre and Assessment Reliability

  The "governance theatre" phenomenon — organisations performing governance activities without genuine capability — is one of the most significant challenges in AI governance maturity assessment.
  It manifests as organisations producing governance artefacts (policies, risk registers, ethics checklists) that are technically present but functionally hollow:
  policies that nobody enforces, risk registers that are never updated, ethics checklists signed off without genuine review.
  The Gartner (2024) finding that self-assessed maturity averages 1.2 levels above externally validated scores provides empirical evidence of systematic optimism bias.
  Evidence-based assessment methodologies counter this by requiring actual artefacts rather than declarations:
  assessors review board minutes for evidence of genuine governance discussion,
  audit logs to verify that [[Audit Mechanism]] procedures were actually executed,
  and interview model developers and affected stakeholders to check whether governance processes feel meaningful or bureaucratic.
  The [[CMMI Institute]] appraisal methodology, which requires a trained lead appraiser to conduct structured interviews and artefact reviews across a representative sample of AI projects,
  is specifically designed to surface governance theatre by triangulating across multiple evidence types.

  ### Integration with Enterprise Risk Management

  A mature AI Governance Maturity Model assessment considers how well AI governance integrates with existing enterprise risk and compliance functions.
  At lower maturity levels, AI governance is typically a siloed function operated by the data science or AI team,
  disconnected from the enterprise's broader risk register, compliance framework, and audit committee oversight.
  At Level 3 and above, AI governance is integrated: the AI risk register feeds into the enterprise risk register;
  AI-related compliance obligations (EU AI Act, GDPR Article 22, sector-specific AI rules) are tracked alongside other regulatory compliance requirements;
  the AI Ethics Board or equivalent has representation from legal, compliance, and internal audit functions;
  and AI incidents trigger the enterprise's standard incident management and reporting procedures.
  This integration is both a marker of governance maturity and a practical enabler of effectiveness —
  isolated AI governance functions lack the authority and resources to enforce policies on product teams under commercial pressure.

  ## Components / Architecture

  - **Maturity Levels (Five-Stage Ladder)**:
    - Level 1 — Initial/Ad Hoc: No standardised governance; reactive, individual-dependent; no documented policies; [[AI Risk Assessment]] absent or informal; compliance incidental.
    - Level 2 — Repeatable/Managed: Basic project-level controls exist; some governance artefacts produced but inconsistently; risk assessment performed at project discretion; [[AI Ethics Checklist]] used in some teams but not mandated organisation-wide.
    - Level 3 — Defined: Organisation-wide standardised [[AI Governance Framework]] active; mandatory [[AI Ethics Board]] review for high-risk systems; documented [[Compliance Policy]] mapped to [[EU AI Act]] and [[ISO/IEC 42001]]; [[Human Oversight]] roles formally assigned; [[Model Documentation]] (model cards, datasheets) required before deployment; [[Stakeholder Engagement]] processes defined.
    - Level 4 — Quantitatively Managed: Governance metrics systematically collected and acted upon; bias audit pass rates, assessment coverage percentages, incident response times tracked and reported to board; external benchmarking against sector peers; statistical process control applied to governance workflows; [[Algorithmic Transparency Index]] scores routinely published.
    - Level 5 — Optimising: Continuous improvement cycles driven by metric feedback; governance innovations fed back to standards bodies; proactive regulatory anticipation; participation in industry coalitions shaping future governance norms; contribution to [[AI Governance Maturity Model]] refinement; governance considered competitive advantage.

  - **Assessment Dimensions**:
    - Governance Structure and Leadership: Executive accountability, board-level AI oversight, role clarity, governance body authority.
    - Risk Management: [[AI Risk Assessment]] methodology, risk register maintenance, treatment and monitoring, integration with enterprise risk.
    - Ethical Practice: Principles articulation, ethics review cadence, [[Fairness]] auditing, bias detection and mitigation.
    - Technical Controls: [[Model Documentation]] standards, testing protocols (including adversarial testing), deployment monitoring, [[Access Control]] over model pipelines.
    - Compliance and Audit: Regulatory mapping ([[EU AI Act]], [[ISO/IEC 42001]], [[GDPR]]), [[Audit Mechanism]] procedures, evidence collection, [[Regulatory Compliance]] attestation.
    - Stakeholder Engagement: Public consultation, transparency reporting, grievance and redress, algorithmic impact registers.
    - Continuous Improvement: Metrics-driven iteration, lessons-learned integration, incident post-mortems, governance R&D.

  - **Assessment Methodology**:
    - Self-assessment questionnaires (dimension-by-level matrices).
    - Documentary evidence review: policy artefacts, model cards, audit logs, training records, board minutes.
    - Structured stakeholder interviews with governance role-holders and affected stakeholders.
    - External validation by accredited third-party appraisers (ISACA CMMI appraisers, [[Responsible AI]] Institute auditors, BSI certification bodies).
    - Outputs: Maturity score per dimension, radar chart visualisation, gap analysis report, prioritised improvement roadmap with estimated effort and impact, benchmarking comparison.

  ## Use Cases / Major Families

  ### Enterprise Technology Sector
  Large technology companies use maturity models for internal governance audit and to demonstrate due diligence to regulators and major customers.
  Microsoft's Responsible AI Standard v2 (2022) implicitly operationalises a maturity progression across its six principles (fairness, reliability and safety, privacy and security, inclusiveness, transparency, accountability),
  with each principle having documented implementation requirements that map to Levels 3–4.
  Google's AI Principles implementation programme has published maturity indicators for each principle.
  IBM's AI Governance framework within Watson Studio maps to a five-level capability model,
  with tooling for model risk scoring, bias detection, and explainability reporting that supports Levels 3–4 technical controls maturity.
  Meta's Responsible AI practice team has developed internal maturity assessment processes covering both model-level and system-level governance.
  Across the enterprise technology sector, Level 3 has emerged as the de facto minimum expectation for organisations deploying AI at scale in customer-facing products.

  ### Healthcare AI Governance
  Healthcare is one of the most governance-critical AI deployment contexts, given the direct patient safety implications of model failures.
  The HAIRA (Healthcare AI Governance Readiness Assessment) five-level model, published as a result of a systematic review of 87 papers in npj Digital Medicine (2026),
  provides sector-specific maturity pathways accounting for clinical risk profiles, MHRA Good Machine Learning Practice (GMLP) requirements,
  and NHS AI Lab governance standards.
  HAIRA dimensions include clinical validation processes, post-market clinical follow-up,
  patient and clinician engagement in AI deployment decisions, and integration with clinical governance structures.
  Healthcare organisations at Level 1–2 lack the governance infrastructure for safe clinical AI deployment;
  the model provides actionable criteria for progression including specific artefact requirements at each level.
  The NHS AI Lab's AI and Digital Regulations Safety Scheme has begun referencing HAIRA-level maturity
  in its guidance for health and care organisations deploying AI.

  ### Financial Services Sector
  Financial regulators (UK FCA, European Banking Authority, US OCC) have begun referencing governance maturity in supervisory expectations.
  The FCA's AI Discussion Paper (DP5/22) signalled that firms deploying AI in regulated financial services activities
  should be able to demonstrate governance capabilities consistent with Level 3 maturity:
  documented risk assessment processes, [[AI Ethics Board]]-equivalent review, model documentation, and ongoing monitoring.
  A Level 3+ maturity is increasingly expected before deploying AI in credit scoring, fraud detection, or trading —
  applications with significant consumer harm potential and which fall within EU AI Act Annex III high-risk categories.
  Level 4 maturity, with quantitative bias monitoring and outcome disparity tracking by demographic group,
  is becoming the expected standard for automated credit decisions,
  where discrimination is both legally prohibited and empirically significant.

  ### Public Sector and Government
  The Alan Turing Institute's AI Regulatory Capability Framework and Self-Assessment Tool (2024),
  co-developed with DSIT, is a maturity model targeted at UK government regulators,
  assessing their capability to oversee AI in their regulated sectors across dimensions of technical capability,
  data access, institutional authority, and stakeholder engagement.
  The tool has been piloted with the FCA, Ofcom, CMA, and ICO,
  enabling each regulator to identify gaps in its AI oversight capability and develop targeted improvement plans.
  CNA's AI Maturity Model for Government Agencies (2025) provides a US federal analogue,
  assessing agency capabilities across acquisition and governance, data management, infrastructure, and workforce dimensions.
  The UK Government AI Playbook (2024) embeds maturity-sensitive guidance for civil service AI adoption,
  linking deployment decisions to demonstrated governance capability.

  ### Higher Education
  CMMI-based AI governance maturity models for higher education institutions have been developed and validated (ResearchGate, 2025),
  recognising that universities are simultaneously deployers of AI (administrative systems, research AI, student-facing tools),
  developers of AI systems (through research and spin-outs), and educators of future AI governance practitioners.
  The 0–5 CMMI-derived level scale is particularly suited to research institutions
  where process discipline must be balanced against academic freedom and research flexibility.
  Higher education-specific assessment dimensions include research ethics integration,
  student data governance, third-party AI tool procurement governance, and AI literacy among academic staff and students.

  ### Small and Medium-Sized Enterprises (SMEs)
  Maturity model frameworks targeted at SMEs have emerged to address the resource constraints of smaller organisations.
  The Responsible AI Institute's lightweight maturity assessment and the European AI Alliance's SME toolkit
  provide simplified assessment instruments that identify the highest-priority governance improvements
  for organisations without dedicated AI governance teams.
  Typical starting point for SMEs: a Level 1 baseline with a roadmap to Level 3 over 12–18 months,
  prioritising the highest-risk AI systems for initial governance investment.
  The UK Government's AI Assurance Ecosystem includes sandboxed regulatory engagement pathways
  designed to help SMEs develop governance capability while continuing to innovate.

  ## Implementation Guide: From Assessment to Improvement

  ### Step 1 — Inventory and Classify
  Before conducting a maturity assessment, organisations must establish a comprehensive AI inventory:
  a register of all AI systems deployed or in development, classified by risk tier, business function, and deployment context.
  This inventory reveals the governance scope — how many systems need assessment, which are highest priority, and where current governance artefacts exist.
  Without an accurate inventory, maturity assessment scores are meaningless because the denominator (total AI portfolio) is unknown.
  The EU AI Act's registration obligations for high-risk AI systems create a regulatory incentive for inventory maintenance from August 2025.

  ### Step 2 — Select Assessment Instrument and Conduct Assessment
  Assessment instrument selection depends on organisational context:
  ISACA CMMI AI add-on for organisations seeking externally certified results;
  Alan Turing Institute's AI Regulatory Capability Framework for UK regulatory bodies;
  Databricks' AI Governance Maturity Model for data-platform-centric organisations;
  HAIRA for healthcare organisations;
  or a custom instrument derived from ISO/IEC 42001 requirements for ISO certification candidates.
  The assessment process typically takes 2–4 weeks for a medium-sized organisation:
  1–2 days of self-assessment questionnaire completion,
  followed by documentary evidence collection and review,
  concluded with structured interviews across business, legal, technical, and compliance stakeholders.

  ### Step 3 — Gap Analysis and Prioritisation
  Assessment outputs are mapped to a gap analysis matrix:
  dimension-by-level table showing current state, target state, and the specific capabilities or artefacts required to advance.
  Gaps are prioritised using a risk-weighted effort-impact matrix:
  high-impact gaps (addressing regulatory exposure or significant safety risk) and low-effort gaps (quick wins requiring minimal resource) are prioritised for immediate action.
  The prioritised gap list feeds directly into a governance improvement roadmap with defined milestones, owners, and timelines.

  ### Step 4 — Implement and Monitor Progress
  Governance improvements follow the roadmap, with progress tracked against defined milestones.
  Each improvement should be documented as an artefact:
  a new policy document, a completed training module, a deployed monitoring dashboard, a Board meeting minute recording the first AI Ethics Board review.
  Progress is reported quarterly to senior leadership.
  At Level 4, metric dashboards replace qualitative progress reports as the primary governance monitoring mechanism.

  ### Step 5 — Validate and Certify
  Organisations seeking third-party validation conduct an external maturity assessment by an accredited appraiser.
  ISO/IEC 42001 certification provides the most widely recognised attestation, requiring a formal audit by an accredited certification body.
  ISACA CMMI appraisals provide a maturity-level score that can be shared with regulators and major customers.
  The Responsible AI Institute's certification scheme and Singapore's AI Verify programme provide alternative attestation pathways
  particularly valuable for organisations operating in multiple regulatory jurisdictions.

  ## Comparison of Major AI Governance Maturity Models

  Multiple AI governance maturity models have been published by standards bodies, industry analysts, and academic researchers.
  They differ in dimension coverage, level granularity, assessment rigour, and intended audience.

  **CMMI AI Add-On (ISACA, 2025)**: The most rigorous externally certified framework, extending the CMMI Development and Services models with AI-specific practice areas covering AI governance structure, data governance for AI, model lifecycle management, and AI risk management. Assessment is conducted by trained Lead Appraisers using structured evidence collection and produces a verified maturity level (1–5) that organisations can share with regulators and customers.

  **Databricks AI Governance Maturity Model (2024)**: Enterprise-oriented, particularly strong for data-platform-centric AI deployments. Five levels assessed across three primary dimensions — data, process, and people — with practical guidance for Unity Catalog-based governance implementations. Widely adopted in financial services, healthcare, and retail.

  **Exceeds.ai AI Governance Maturity Model (2024)**: Five dimensions (Strategy, Risk Management, Processes, Metrics and ROI, Technology and Observability) assessed at five levels. Particularly useful for mid-market organisations seeking a practical self-assessment instrument without the overhead of a formal CMMI appraisal.

  **Alan Turing Institute AI Regulatory Capability Framework (2024)**: Unique in targeting regulators rather than AI deployers. Assesses regulatory bodies' capacity to oversee AI in their sectors, across technical capability, data access, legal authority, and stakeholder engagement. Piloted with UK FCA, Ofcom, CMA, and ICO.

  **HAIRA Healthcare AI Governance Readiness Assessment (2026)**: The most clinically grounded framework, derived from systematic review of 87 published papers. Five levels across healthcare-specific dimensions including clinical validation, patient engagement, and integration with clinical governance structures. Endorsed by NHS AI Lab for health and care organisations.

  **Singapore AI Verify (2024)**: Testing framework and toolkit for AI governance, producing quantitative assessment outputs for eleven governance properties (accountability, human oversight, explainability, robustness, fairness, data governance, transparency, reproducibility, safety, security, inclusiveness). Not strictly a five-level maturity model but provides comparable governance gap analysis outputs. Aligned to OECD AI Principles 2024 and the GPAI Code of Practice.

  The key differentiators across these models are:
  - **Certification pathway**: Only CMMI AI and ISO/IEC 42001 provide externally certified results.
  - **Sector specificity**: HAIRA for healthcare; CMMI and Databricks for enterprise; Alan Turing for regulators.
  - **Assessment rigour**: CMMI requires accredited Lead Appraisers; others support self-assessment.
  - **Tool integration**: Databricks integrates with Unity Catalog; AI Verify provides a testing toolkit.
  - **Regulatory alignment**: All align to OECD principles; EU AI Act alignment is strongest in ISO/IEC 42001 and HAIRA.

  ## Academic Context

  Maturity model methodology as applied to AI governance is a relatively recent specialisation, building on a rich lineage in software quality and information security.
  The Crosby Quality Maturity Grid (1979) and Humphrey's CMM (1988) established the empirical foundation that measurable process maturity correlates with quality and delivery outcomes.
  For AI governance, the translation challenge is that AI systems exhibit emergent behaviours and opacity
  that make traditional software quality assurance insufficient,
  requiring the maturity model to encompass not just development processes but ethical review, stakeholder engagement, and societal impact assessment.
  The critical adaptation from software process maturity to AI governance maturity involves three additions:
  an ethical principles layer that software CMMs do not possess,
  an external stakeholder dimension that goes beyond internal process quality,
  and a societal impact measurement dimension that has no precedent in traditional capability maturity models.

  Key contributions to the academic literature on AI governance maturity include:
  Mäntymäki et al.'s "Defining Organizational AI Governance" (2022, *AI and Society*),
  which identified governance structure, principles, accountability, and review as core dimensions
  through analysis of 56 AI governance frameworks from across sectors and jurisdictions;
  Rakova et al.'s "Where Responsible AI Meets Reality" (2021, *ACM CSCW*),
  which empirically studied how responsible AI practitioners navigate organisational constraints
  and found that maturity of governance structures was the primary predictor of whether ethical principles were implemented in practice;
  the systematic review underlying HAIRA (published 2024–2026 in npj Digital Medicine),
  which synthesised 87 papers on healthcare AI governance into a validated maturity framework with inter-rater reliability testing;
  and Morley et al.'s "From What to How: An Initial Review of Publicly Available AI Ethics Tools, Methods and Research" (2020, *Science and Engineering Ethics*),
  which traced the gap between stated ethical principles and operational implementation — precisely the gap that maturity models address.
  The CMMI Institute's 2025 publication "CMMI in the AI Age" (*ISACA Journal*, Volume 3)
  formally extended the CMMI appraisal methodology to AI governance
  and provided empirical evidence from early implementations that CMMI-assessed organisations achieve lower rates of AI incident escalation.

  The academic literature identifies several recurring tensions in AI governance maturity model design:
  tension between universality (applicable to all sectors and organisation sizes) and specificity (calibrated to sector-specific risk profiles);
  tension between rigour (formal, resource-intensive assessment) and accessibility (lightweight enough for SMEs without dedicated governance teams);
  and tension between standardisation (enabling cross-organisational benchmarking) and adaptability (allowing organisations to address unique context-specific governance challenges).
  These tensions are not fully resolved in any current model, suggesting that the field of AI governance maturity assessment remains in a productive phase of methodological development.

  Research gaps identified in the 2024–2026 literature include:
  lack of longitudinal studies demonstrating that governance maturity improvements reduce AI incident rates over time;
  insufficient evidence on whether governance maturity assessments accurately predict user trust and societal outcomes;
  limited research on AI governance maturity in low- and middle-income country contexts;
  and need for validated measurement instruments for the "optimising" Level 5 stage,
  where existing models rely heavily on qualitative indicators rather than measurable criteria.

  ## Current Landscape (2026)

  By mid-2026, AI governance maturity assessment has transitioned from an academic concept to a market requirement in regulated sectors. The EU AI Act's conformity assessment obligations for high-risk AI systems create a de facto maturity threshold: organisations deploying Annex III systems without documented governance processes, systematic risk assessment, and audit-ready evidence face regulatory sanction. ISO/IEC 42001 certification — which maps closely to a Level 3–4 governance maturity — has become a procurement requirement in several European public sector frameworks and financial services supply chains. Over 400 organisations globally were pursuing or had achieved ISO/IEC 42001 certification by mid-2025, a tenfold increase from end-2023.

  The ISACA CMMI AI add-on (2025) has provided the first industry-standard appraisal methodology specifically for AI governance maturity, enabling organisations to receive externally verified maturity ratings from accredited appraisers. The Responsible AI Institute's certification programme, AI Verify (Singapore's IMDA), and the BSI's Kitemark for AI governance are competing attestation schemes serving organisations seeking third-party validation at varying levels of rigour. The Databricks AI Governance Maturity Model has become a widely referenced enterprise framework, particularly in data-intensive sectors (finance, healthcare, retail), due to its integration with the Unity Catalog data governance platform.

  A 2024 Gartner survey finding — that 80% of large enterprises claimed active AI governance programmes but fewer than half could demonstrate measurable advancement — underscores the ongoing challenge of governance maturity assessment. The survey found that self-assessed maturity scores averaged 1.2 levels above externally validated scores, suggesting systematic optimism bias that formal maturity assessment corrects.

  ## UK Context

  The UK's AI governance maturity landscape is shaped by its distinctive "pro-innovation" regulatory posture — sector-based, principles-driven, without the product-safety overlay of the EU AI Act — which has implications for maturity model adoption. The Alan Turing Institute's AI Regulatory Capability Framework and Self-Assessment Tool (2024), co-developed with DSIT, is the most significant UK contribution to AI governance maturity assessment: it provides a maturity model for UK regulators assessing their own capacity to oversee AI in their domains, across dimensions of technical capability, data access, institutional authority, and stakeholder engagement. The tool has been piloted with the FCA, Ofcom, CMA, and the ICO.

  In Northern England, Manchester has become a regional governance innovation hub. The University of Manchester, as an Alan Turing Institute partner, contributes governance research particularly through the interdisciplinary teams at Manchester Institute for Innovation Research and the Alliance Manchester Business School, focusing on AI governance maturity in healthcare and public services. The Northern Health Science Alliance (NHSA) — covering NHS trusts from Manchester to Newcastle — piloted a healthcare AI governance maturity assessment framework across twelve trusts in 2024–2025, finding that most NHS organisations operated at Level 1–2 maturity despite deploying AI in clinical pathways. Leeds City Council's implementation of the Algorithmic Transparency Recording Standard (ATRS) represented a Level 3 governance milestone for public-sector AI — a repeatable, organisation-wide governance process producing public-facing transparency artefacts. Sheffield's AMRC has applied maturity assessment to industrial AI governance, particularly for robotics and predictive maintenance in aerospace and advanced manufacturing supply chains, where Level 3 maturity is increasingly required by Tier 1 prime contractors (Rolls-Royce, BAE Systems, Airbus UK). Newcastle's National Innovation Centre for Data (NICD) provides maturity assessment tooling and capacity-building for SMEs across the North East energy sector transitioning to AI-augmented operations.

  ## Future Directions (2026–2030)

  The maturity model paradigm will evolve along several vectors through 2030. Regulatory mandates will increasingly specify minimum maturity thresholds — the EU AI Act's conformity assessment obligations already imply Level 3+ maturity for high-risk AI operators, and as the Act's enforcement regime matures, regulators are likely to issue guidance quantifying governance maturity expectations. This will drive demand for standardised, externally verifiable maturity assessments rather than organisation-produced self-assessments. Second, the extension of governance maturity models to [[AI Agent System]] architectures — where multi-agent pipelines execute complex multi-step tasks with limited human oversight — creates new assessment dimensions around agent behavioural constraints, tool authorisation scoping, and multi-principal accountability, none of which are captured in current five-level models. Third, sector-specific maturity models will proliferate: HAIRA for healthcare, emerging models for autonomous vehicles, financial trading AI, generative AI in education, and criminal justice AI each require domain-specific capability definitions calibrated to their risk profiles. Fourth, AI-augmented maturity assessment — using AI systems to automatically review governance artefacts, flag inconsistencies in policy stacks, and generate gap-analysis reports — will reduce the cost and increase the frequency of maturity assessments, potentially enabling continuous maturity monitoring rather than annual point-in-time assessments. Finally, international convergence on a small number of mutually recognised maturity frameworks (analogous to how ISO 9001 converged quality management globally) is a realistic medium-term prospect, driven by the G7 Hiroshima AI Process, the GPAI Code of Practice alignment, and the OECD AI Principles interoperability agenda.

  ## Research & Literature

  1. Humphrey, W. S. (1988). "Characterizing the Software Process: A Maturity Framework." *IEEE Software*, 5(2), 73–79. https://doi.org/10.1109/52.2014
  2. CMMI Institute (2025). "CMMI in the AI Age." *ISACA Journal*, Volume 3. https://www.isaca.org/resources/isaca-journal/issues/2025/volume-3/cmmi-in-the-ai-age
  3. ISO (2008). *ISO/IEC 21827:2008 — Information Technology — Systems Security Engineering — Capability Maturity Model*. https://www.iso.org/standard/44716.html
  4. ISO/IEC JTC 1/SC 42 (2023). *ISO/IEC 42001:2023 — Information technology — Artificial intelligence — Management system*. https://www.iso.org/standard/81234.html
  5. NIST (2023). *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*. NIST AI 100-1. https://doi.org/10.6028/NIST.AI.100-1
  6. Singapore IMDA (2024). *Model AI Governance Framework for Generative AI*. Infocomm Media Development Authority. https://digital.nemko.com/regulations/singapore-ai-regulation
  7. Mäntymäki, M., Minkkinen, M., Birkstedt, T., & Viljanen, M. (2022). "Defining Organizational AI Governance." *AI and Society*, 37, 1–13. https://doi.org/10.1007/s00146-022-01474-5
  8. Morley, J., Cowls, J., Taddeo, M., & Floridi, L. (2020). "From What to How: An Initial Review of Publicly Available AI Ethics Tools, Methods and Research to Translate Principles into Practices." *Science and Engineering Ethics*, 26(4), 2141–2168.
  9. Rakova, B., Yang, J., Cramer, H., & Chowdhury, R. (2021). "Where Responsible AI Meets Reality: Practitioner Perspectives on Enablers for Shifting Organizational Practices." *Proceedings of the ACM on Human-Computer Interaction*, 5(CSCW1), 1–23.
  10. Jobin, A., Ienca, M., & Vayena, E. (2019). "The Global Landscape of AI Ethics Guidelines." *Nature Machine Intelligence*, 1(9), 389–399. https://doi.org/10.1038/s42256-019-0088-2
  11. Mittelstadt, B. D. (2019). "Principles Alone Cannot Guarantee Ethical AI." *Nature Machine Intelligence*, 1(11), 501–507. https://doi.org/10.1038/s42256-019-0114-y
  12. Floridi, L., Cowls, J., Beltrametti, M., et al. (2018). "AI4People — An Ethical Framework for a Good AI Society." *Minds and Machines*, 28(4), 689–707. https://doi.org/10.1007/s11023-018-9482-5
  13. Regan, T., et al. (2024). "Operationalising AI Governance through Ethics-Based Auditing: An Industry Case Study." *arXiv:2407.06232*. https://arxiv.org/abs/2407.06232
  14. Gartner (2024). "AI Governance Survey: Maturity Benchmarking Report." Referenced in Databricks Blog. https://www.databricks.com/blog/ai-governance-maturity-model
  15. Exceeds.ai (2024). "AI Governance Maturity Model: 5-Stage Framework." https://blog.exceeds.ai/ai-governance-maturity-model-guide/
  16. Databricks (2024). "AI Governance Maturity Model: Matrix, Assessment, and Roadmap." https://www.databricks.com/blog/ai-governance-maturity-model
  17. CNA (2025). "Artificial Intelligence (AI) Maturity Model for Government Agencies." https://www.cna.org/analyses/2025/05/artificial-intelligence-maturity-model
  18. Alan Turing Institute (2024). *AI Regulatory Capability Framework and Self-Assessment Tool*. ATI / DSIT.
  19. Alan Turing Institute (2026). *AI Governance around the World — Country Profile: United Kingdom*. https://www.turing.ac.uk/sites/default/files/2026-01/ai_governance_around_the_world_-_uk.pdf
  20. ResearchGate (2025). "Development of an AI Governance Model for Higher Education Using the Capability Maturity Model Integration (CMMI)." https://www.researchgate.net/publication/394926110
  21. Agility at Scale (2024). "AI Governance Maturity Model: Assess, Benchmark, and Advance Your AI." https://agility-at-scale.com/ai/governance/ai-governance-maturity-model/
  22. Dataversity (2024). "Building a Practical Framework for AI Governance Maturity in the Enterprise." https://www.dataversity.net/articles/building-a-practical-framework-for-ai-governance-maturity-in-the-enterprise/
  23. npj Digital Medicine (2026). "Advancing Healthcare AI Governance: A Comprehensive Maturity Model Based on Systematic Review." https://www.nature.com/articles/s41746-026-02418-7
  24. Dignum, V. (2019). *Responsible Artificial Intelligence: How to Develop and Use AI in a Responsible Way*. Springer. https://doi.org/10.1007/978-3-030-30371-6
  25. European Parliament (2024). *EU AI Act*. Regulation (EU) 2024/1689. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689
  26. DSIT (2025). *UK AI Growth Lab Consultation*. Department for Science, Innovation & Technology. https://www.holisticai.com/blog/uk-ai-regulation-strategies
  27. Whittlestone, J., Nyrup, R., Alexandrova, A., & Cave, S. (2019). "The Role and Limits of Principles in AI Ethics: Towards a Focus on Tensions." *Proceedings of the 2019 AAAI/ACM Conference on AI, Ethics, and Society*, 195–200.

- ### Provenance
  - sources:: https://www.databricks.com/blog/ai-governance-maturity-model, https://blog.exceeds.ai/ai-governance-maturity-model-guide/, https://www.nature.com/articles/s41746-026-02418-7, https://www.isaca.org/resources/isaca-journal/issues/2025/volume-3/cmmi-in-the-ai-age, https://www.iso.org/standard/44716.html, https://www.turing.ac.uk/sites/default/files/2026-01/ai_governance_around_the_world_-_uk.pdf, https://digital.nemko.com/regulations/singapore-ai-regulation, https://www.cna.org/analyses/2025/05/artificial-intelligence-maturity-model
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm