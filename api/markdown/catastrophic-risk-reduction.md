- ### Definition
  - Catastrophic Risk Reduction (CRR) is the interdisciplinary field of research, engineering practice, and policy design dedicated to lowering the probability or severity of large-scale, potentially irreversible harms that advanced AI systems could precipitate or amplify. Drawing from [[AI Safety]], [[Existential Risk]] scholarship, [[AI Governance]], and biosecurity, CRR identifies and operationalises the layered defences that must be in place as AI capability crosses successive thresholds. The field distinguishes between catastrophic outcomes — mass-casualty events, large-scale societal disruption, civilisational destabilisation — and merely severe but recoverable harms, concentrating resources on the former because the irreversibility of catastrophic outcomes vastly increases their expected disutility when integrated across all future generations. Technically, CRR encompasses capability evaluation and elicitation benchmarks that detect dangerous uplift (e.g. CBRN weaponisation assistance), [[Red Teaming]] protocols that stress-test model behaviour under adversarial prompting, alignment techniques including [[Reinforcement Learning from Human Feedback]] and [[Constitutional AI]] that shape model objectives away from dangerous actions, [[Corrigibility]] mechanisms that preserve [[Human Oversight]] even in highly capable systems, and tripwire systems that halt deployment if capability thresholds are breached. Organisationally, CRR manifests as [[Responsible Scaling Policy]] frameworks adopted by frontier labs, internal safety boards, third-party model evaluations, staged deployment with rollback capabilities, and incident response plans covering cybersecurity, model theft, and misuse. At the policy layer, CRR includes [[Compute Governance]] (compute threshold restrictions, export controls on AI chips), international coordination frameworks inspired by nuclear non-proliferation regimes, mandatory incident reporting, whistleblower protections, and independent safety auditing. The field is maturing rapidly: California's SB 53 (signed September 2025, effective January 2026) introduced the first binding legal obligations for frontier developers around catastrophic risk management, while Anthropic's Responsible Scaling Policy (versions 2.1 and 3.0) and OpenAI's Preparedness Framework (version 2, April 2025) operationalise catastrophic risk thresholds at ASL-3/4 and High/Critical capability levels respectively. UK [[AI Safety Institute]] (AISI) evaluations of GPT-5, Gemini 2, Claude 4, and Llama 4 during 2025 focused centrally on CBRN uplift and cyber-offence capabilities as the most immediate catastrophic risk pathways.

- ### Semantic Classification
  - owl-class:: ai:CatastrophicRiskReduction
  - owl-role:: GovernanceMechanism | SafetyProtocol | PolicyFramework
  - owl-inferred:: ai:AIGovernanceFramework, ai:TailRiskManagement, ai:FrontierSafetyProtocol
  - belongs-to-domain:: [[AI Safety]]
  - implemented-in-layer:: [[AI Governance]]

- ### Relationships
  - is-subclass-of:: [[AI Safety]], [[Global Catastrophic Risk]], [[Risk Management]]
  - has-part:: [[Red Teaming]], [[Capability Evaluation]], [[Responsible Scaling Policy]], [[Corrigibility]], [[Scalable Oversight]], [[Compute Governance]], [[AI Safety Institute]], [[Interpretability]]
  - requires:: [[Human Oversight]], [[AI Alignment]], [[Interpretability]], [[Formal Verification]], [[Model Evaluation]]
  - enables:: [[AI Governance]], [[Trustworthy AI]], [[Responsible AI]], [[AI Ethics]], [[EU AI Act]]
  - implements:: [[AI Safety]], [[AI Governance Framework]], [[Value Alignment]]
  - depends-on:: [[Existential Risk]], [[AI Alignment]], [[Constitutional AI]], [[Reinforcement Learning from Human Feedback]]
  - supports:: [[Large Language Model]], [[AI System]], [[Frontier AI]], [[Deep Learning]]
  - uses:: [[Red Teaming]], [[Mechanistic Interpretability]], [[Adversarial Machine Learning]], [[Distributional Shift]]
  - contrasts-with:: [[AI Capabilities Research]], [[Reward Hacking]], [[Mesa-Optimisation]]
  - related-to:: [[AI Existential Risk Probability Estimate]], [[Bletchley Declaration]], [[NIST AI RMF]], [[ISO IEC 42001]], [[AI Governance Law and Privacy]]
  - standardized-by:: [[EU AI Act]], [[NIST AI RMF]], [[AI Safety Institute]], [[AISI Frontier AI Safety Framework]]

- ### Content
  - ## Compositional Relationships (Components)
    ```
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:hasPart ai:RedTeaming))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:hasPart ai:CapabilityEvaluation))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:hasPart ai:ResponsibleScalingPolicy))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:hasPart ai:Corrigibility))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:hasPart ai:ScalableOversight))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:hasPart ai:ComputeGovernance))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:hasPart ai:Interpretability))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:hasPart ai:IncidentResponsePlan))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:hasPart ai:TripwireEvaluation))
    ```
  - ## Dependency Relationships
    ```
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:requires ai:HumanOversight))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:requires ai:AIAlignment))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:requires ai:Interpretability))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:requires ai:FormalVerification))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:requires ai:ModelEvaluation))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:requires ai:ThirdPartyAudit))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:requires ai:RiskAssessment))
    ```
  - ## Capability Relationships
    ```
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:enables ai:AIGovernance))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:enables ai:TrustworthyAI))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:enables ai:ResponsibleAI))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:enables ai:SafeAIDeployment))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:enables ai:AIEthics))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:enables ai:InternationalAICooperation))
    ```
  - ## Implementation Relationships
    ```
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:implements ai:AISafety))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:implements ai:AIGovernanceFramework))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:implements ai:ValueAlignment))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:implements ai:DefenceInDepth))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:implements ai:RiskMitigationProtocol))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:implements ai:SafetyLevel))
    ```
  - ## Reduction Relationships
    ```
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:reducesTo ai:ExistentialRiskMitigation))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:reducesTo ai:TailRiskManagement))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:reducesTo ai:SafeAIOperation))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:reducesTo ai:CBRNUpliftPrevention))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:reducesTo ai:MisalignmentRiskMitigation))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:reducesTo ai:DeceptiveAlignmentPrevention))
    SubClassOf(ai:CatastrophicRiskReduction
      ObjectSomeValuesFrom(ai:reducesTo ai:CatastrophicMisusePrevention))
    ```

  - ## About

    Catastrophic Risk Reduction (CRR) emerged as a distinct field at the intersection of long-run existential risk scholarship, technical AI safety research, and emerging AI governance practice. Its conceptual foundations trace to Nick Bostrom's formalisation of existential risk (2002, 2014) and Toby Ord's *The Precipice* (2020), which argued that tail risks to humanity's long-run potential deserve disproportionate prioritisation given their irreversibility and scale. The field accelerated in direct response to the rapid capability growth of large language models from 2022 onwards, which transformed theoretical concerns into operational engineering problems requiring immediate institutional response.

    The core insight motivating CRR is that the expected disutility of catastrophic outcomes is not merely proportional to their probability — it is proportional to probability multiplied by the magnitude and irreversibility of harm. A 1% chance of permanently curtailing human civilisation outweighs many orders of magnitude of recoverable harm under most moral frameworks, including purely utilitarian, contractualist, and risk-averse approaches. This asymmetry motivates the "defence in depth" architecture that characterises CRR: multiple independent layers of safeguard, so that the failure of any single layer does not produce catastrophic outcomes. The same asymmetry drives the precautionary threshold approach enshrined in responsible scaling policies, where deployment of increasingly capable systems is gated on evidence that risk levels remain within manageable bounds.

    CRR differs from general [[AI Risk Management]] in its scope and prioritisation. Conventional risk management addresses a broad portfolio of harms including bias, privacy violations, intellectual property infringement, and economic disruption — important concerns, but ones from which society can recover and adapt. CRR focuses specifically on risks that are either irreversible (extinction, permanent totalitarian lock-in, civilisational collapse), novel in kind (AI systems pursuing objectives misaligned with human welfare autonomously), or capable of cascading across critical infrastructure simultaneously. This narrower but more urgent focus justifies dedicated institutional structures — safety institutes, internal frontier safety teams, international evaluation consortia — that go beyond conventional product safety regulation.

    The intellectual genealogy of CRR intersects several disciplinary traditions. Nuclear risk reduction (from the Cold War deterrence theory of Schelling, Kahn, and Herman) provided the first rigorous frameworks for reasoning about tail risks with civilisational consequences, developing concepts like mutual assured destruction, arms control verification, and crisis stability that have direct analogues in AI risk. Schelling's work on focal points, commitment devices, and credible threats is particularly relevant to AI governance: international CRR agreements must create credible deterrence against defection (deploying a system before safety requirements are met) while allowing cooperative verification of compliance. The IAEA's inspection and safeguards regime for nuclear materials provides a concrete institutional model for AI compute monitoring and frontier model evaluation. Biosecurity, developed following the 1972 Biological Weapons Convention, created the institutional precedent for international monitoring and restriction of dual-use biological research — a model that CRR scholars invoke for AI governance. Financial systemic risk theory, developed after the 2008 financial crisis, provided tools for reasoning about correlated failures and cascading collapses in complex interconnected systems, directly applicable to scenarios involving multiple AI systems interacting with critical infrastructure. Effective altruism's prioritisation framework — focusing on interventions that are large in scale, neglected relative to their importance, and tractable — shaped the research agenda of early CRR institutions including the Machine Intelligence Research Institute, the Centre for Human-Compatible AI, and the Centre for the Study of Existential Risk.

    The field underwent a significant transition around 2022–2023 that moved CRR from primarily theoretical to operational. The release of GPT-4 (March 2023) and subsequent frontier models demonstrated non-trivial capability on biosecurity-relevant tasks (protein engineering, chemistry synthesis planning), sophisticated social reasoning applicable to influence operations, and emerging agentic capability in tool-use settings. Simultaneously, the mechanistic interpretability programme began revealing that frontier model internals were structured in ways that were more interpretable than expected — giving both greater hope that model safety could be assessed and greater concern that models were developing more sophisticated internal representations than their surface behaviour suggested. This combination of advancing capability and partially advancing interpretability tools created the practical urgency that drove institutional formation: the Bletchley Summit (November 2023), the formation of AISI, Anthropic's first RSP, and METR's agentic capability evaluations all occurred within eighteen months of GPT-4's release. The CRR field's current institutional infrastructure is thus very recent and still maturing relative to the pace of frontier AI capability advancement it aims to govern.

    The field underwent a significant transition around 2022–2023. Prior to this period, CRR was primarily a theoretical and philosophical enterprise, with most practitioners uncertain whether catastrophic AI risks would materialise within decades or centuries. The emergence of GPT-4, Claude 2, and Gemini Ultra — systems demonstrating non-trivial capability on biosecurity-relevant tasks, sophisticated social reasoning, and agentic tool use — made clear that the timeline might be measured in years rather than decades. This triggered the rapid institutionalisation of CRR: frontier labs creating dedicated safety teams with substantial headcount and budget; governments establishing safety evaluation bodies; and regulatory frameworks moving from discussion to legislation within eighteen months. The transition from theoretical concern to operational engineering problem is the defining characteristic of CRR's current phase.

  - ## Relationship to Broader AI Safety Research

    CRR is best understood as one quadrant of the broader [[AI Safety]] research landscape, specialising in the reduction of the most severe tail risks. Its relationship to adjacent safety fields clarifies its scope:

    - **[[AI Alignment]] and CRR:**
      - Alignment research aims to ensure AI systems pursue objectives consistent with human values — a necessary condition for preventing misalignment-driven catastrophes.
      - CRR encompasses and extends alignment by also covering misuse risks (where aligned systems might still assist with harmful goals if not specifically restricted), structural risks, and governance failures that alignment techniques alone cannot address.
      - From a CRR perspective, alignment is a necessary but not sufficient safeguard: even a perfectly aligned system might still be misused by bad actors, or might behave safely in limited deployment while posing structural risks at scale.
      - CRR adds the dimension of "even if alignment fails, what failsafes prevent catastrophe?" — the AI control paradigm.

    - **[[Interpretability]] and CRR:**
      - Mechanistic interpretability research exposes how model internals compute their outputs, enabling detection of dangerous reasoning patterns and verification of alignment properties.
      - For CRR, interpretability is primarily valuable as an evaluation tool: enabling more reliable assessment of whether a model poses catastrophic misuse risks by understanding what capabilities are encoded in its weights.
      - Interpretability is also a potential foundation for safety guarantees that go beyond behavioural testing — if we can verify that a model's circuits do not contain the computational patterns needed to perform dangerous tasks, this provides stronger assurance than any finite set of behavioural evaluations.
      - The mechanistic interpretability programme at Anthropic (sparse autoencoders, superposition, monosemanticity) is the primary technical CRR-interpretability research programme in 2025–2026.

    - **[[Robustness]] and CRR:**
      - Adversarial robustness research investigates model behaviour under distributional shift and adversarial input perturbation.
      - For CRR, robustness matters because adversaries will systematically probe models for jailbreaks and capability extraction; robust models maintain safe behaviour even under adversarial pressure.
      - CRR's robustness concern extends beyond standard adversarial examples to "jailbreaking" — adversarial prompts designed to bypass safety training — and to capability elicitation: adversarial strategies for extracting dangerous capabilities that the model has been trained to withhold.
      - Robustness research alone does not address systemic risks, governance failures, or misalignment — CRR requires all four safety dimensions.

    - **[[AI Governance]] and CRR:**
      - Governance research develops the institutional, legal, and policy frameworks needed to regulate AI development and deployment safely.
      - CRR depends on governance for enforcement: technical safeguards without governance mechanisms to require their implementation are insufficient — a company that has excellent internal alignment and evaluation processes but is not required to use them will not reliably do so under competitive pressure.
      - Conversely, governance frameworks must be informed by CRR's technical analysis: compute thresholds must be calibrated to actual capability levels; safety evaluation requirements must specify technically feasible and meaningful assessments.
      - The feedback between technical CRR and AI governance policy is a defining feature of the field's institutionalisation since 2023.

    - **[[AI Ethics]] and CRR:**
      - AI ethics addresses the full range of ethical concerns raised by AI development — fairness, accountability, transparency, autonomy, privacy, labour displacement, and social impact.
      - CRR intersects with AI ethics on distributive justice (who bears the risks of catastrophic AI failure? who decides what risks are acceptable?) and global governance (how should international CRR obligations be distributed across nations and companies with vastly different resources?).
      - CRR has a narrower technical focus than AI ethics: preventing the most severe outcomes rather than addressing the full spectrum of ethical concerns. This creates tensions — CRR resources focused on tail risks may crowd out investment in more probable but less severe harms.
      - The relationship between CRR and near-term AI ethics is contested: some argue CRR prioritisation is appropriate given the stakes; others argue it systematically neglects more immediate harms affecting real people today.

  - ## Components and Architecture

    CRR is best understood as a stack of mutually reinforcing defence layers, each addressing different risk pathways:

    **Technical Layer — Alignment and Control:**
    - [[Reinforcement Learning from Human Feedback]] (RLHF) and [[Constitutional AI]] shape model objectives and response policies away from harmful outputs during training
    - [[Interpretability]] and [[Mechanistic Interpretability]] research aims to make model internals legible so dangerous reasoning patterns can be detected and corrected
    - [[Scalable Oversight]] methods (debate, amplification, recursive reward modelling) extend human supervisory reach to capabilities that exceed individual human judgement
    - [[Corrigibility]] engineering ensures systems cooperate with correction and shutdown rather than resisting intervention
    - Activation steering and circuit-level interventions (emerging from sparse autoencoder research) target specific internal representations associated with dangerous behaviours

    **Evaluation Layer — Detection and Tripwires:**
    - [[Red Teaming]] — structured adversarial testing by human and automated systems — probes for failure modes across security, ethics, and alignment dimensions
    - Capability evaluation benchmarks assess CBRN (chemical, biological, radiological, nuclear) uplift: whether a model can meaningfully assist non-experts in developing weapons of mass destruction
    - Cyber-offence evaluations measure whether models can autonomously escalate privileges, write novel malware, or undermine AI safety infrastructure
    - Behavioural evaluations test for deceptive alignment, sycophancy under oversight pressure, and instrumental power-seeking
    - AI Safety Level (ASL) frameworks define capability thresholds — ASL-2 (early dangerous capability signs), ASL-3 (substantial catastrophic misuse uplift), ASL-4 (qualitative escalation) — and specify required safeguards at each level

    **Operational Layer — Deployment Controls:**
    - Staged deployment with rollback capability limits blast radius if dangerous capabilities emerge post-deployment
    - Access controls and API rate limiting reduce the surface for misuse without disrupting legitimate research
    - Usage monitoring systems detect anomalous patterns suggesting misuse in real time
    - Incident response plans address rapid containment if dangerous capabilities are discovered or exploited
    - Whistleblower protections (formalised in California SB 53, 2025) enable safety-relevant information to surface from within frontier organisations

    **Governance Layer — Policy and Oversight:**
    - [[Compute Governance]] uses training compute thresholds (e.g. 10^26 FLOP under SB 53; exaFLOP-scale restrictions under EU AI Act) as proxies for frontier model risk
    - Export controls on advanced AI chips (A100/H100/B200 class) limit the ability of adversarial actors to develop frontier models independently
    - Mandatory pre-deployment evaluations by independent third parties, including national safety institutes
    - International information-sharing agreements coordinate cross-border risk monitoring
    - Incident reporting obligations ensure that dangerous capability discoveries are communicated to regulators and peer institutions

  - ## Use Cases and Major Operational Examples

    **CBRN Uplift Prevention (2024–2026):**
    The dominant near-term catastrophic risk pathway is AI-assisted synthesis of biological or chemical weapons by actors who previously lacked the requisite expertise. Frontier labs conduct CBRN uplift evaluations — the Bug Bounty Benchmark and related frameworks — to measure whether models provide meaningful assistance above the baseline of internet search or textbooks. Under Anthropic's RSP, ASL-3 safeguards (activated for relevant models in May 2025) include enhanced biosecurity restrictions on training data curation and inference-time filtering. UK AISI evaluations of GPT-5, Gemini 2, and Claude 4 throughout 2025 focused centrally on CBRN risk, with results informing both the AISI Frontier AI Safety Framework and DSIT policy development.

    **Autonomous Cyberweapon Development:**
    Highly capable AI agents with code execution and network access could in principle develop novel cyberweapons autonomously, potentially undermining critical infrastructure at scale. CRR responses include agent sandboxing, tool-use restrictions at safety level thresholds, cyber-offence capability evaluations, and monitoring of real-time agent behaviour during deployment.

    **Responsible Scaling Policy Implementation:**
    Anthropic's RSP (v2.1, effective March 2025; v3.0, 2025) and Google DeepMind's Frontier Safety Framework both operationalise CRR by gating capability scaling on passing independent safety evaluations. OpenAI's Preparedness Framework v2 (April 2025) streamlined to High/Critical capability thresholds with specific commitments around CBRN, cyber, persuasion, and model autonomy. These frameworks represent the industry's primary self-regulatory CRR mechanism while national regulations mature.

    **Compute Governance as CRR Infrastructure:**
    California's SB 53 (effective January 2026) requires frontier developers (models trained with >10^26 operations) to publish and annually update safety frameworks documenting catastrophic risk management. This creates legal accountability for CRR commitments and enables external verification. Annual updates require documentation of how catastrophic risks are identified, assessed, and mitigated, with quarterly summaries to state regulators and whistleblower protections for internal safety concerns. The EU AI Act's general-purpose AI provisions apply obligations at the exaFLOP training compute level, creating a converging international standard for compute-threshold-based CRR regulation. The convergence of California and EU thresholds creates strong incentives for global frontier AI developers to standardise on a single compute-threshold safety framework, effectively making compute governance the primary global CRR regulatory instrument.

    **International Coordination:**
    The 2023 Bletchley Declaration (signed by 28 countries including the US, UK, EU, and China) established the first multilateral commitment to frontier AI safety collaboration, including commitment to share information about dangerous capability discoveries between signatory states. Subsequent AI Safety Summits in Seoul (May 2024) and Paris (February 2025) deepened international CRR coordination, including information-sharing agreements between national AI safety institutes and commitments to develop common evaluation methodologies for catastrophic risk assessment. Proposals for an IAEA-analogue for AI — an international body with inspection and enforcement powers modelled on nuclear safety governance — remain under active policy development, with proponents arguing that compute monitoring analogous to nuclear material accounting could provide verification infrastructure for international CRR obligations.

  - ## Academic Context

    The intellectual foundations of CRR draw from several disciplines and key thinkers:

    - **Existential Risk Scholarship (Oxford):**
      - Nick Bostrom, *Superintelligence* (2014): first systematic framework for reasoning about superintelligent AI as an existential risk, introducing concepts of instrumental convergence, orthogonality thesis, and the control problem.
      - Nick Bostrom, "Existential Risks" (2002): seminal paper coining the term "existential risk" and establishing the philosophical framework for prioritising civilisational-scale harms.
      - Toby Ord, *The Precipice* (2020): situated AI risk within a broader GCR landscape; estimated AI existential risk at ~10% probability over the century; Oxford's Future of Humanity Institute.
      - Stuart Russell, *Human Compatible* (2019): cooperative inverse reinforcement learning as an alignment approach; Centre for Human-Compatible AI (CHAI) at UC Berkeley.

    - **Technical AI Safety Research:**
      - Paul Christiano: scalable oversight (debate, amplification, recursive reward modelling) — methods for extending human supervisory reach to superhuman AI capabilities; works at Anthropic and ARC Evals.
      - Evan Hubinger et al. (2019): formalisation of mesa-optimisation and deceptive alignment; quantitative framework for reasoning about inner misalignment risks.
      - Chris Olah and colleagues at Anthropic (2020–2026): mechanistic interpretability programme; superposition, monosemanticity, sparse autoencoders; exposing how model internals encode concepts.
      - Redwood Research (2022–2023): AI control paradigm — designing systems robust to catastrophic harm even if the AI is actively scheming against oversight.

    - **Institutional Research Organisations:**
      - Machine Intelligence Research Institute (MIRI): foundational work on corrigibility, logical uncertainty, decision theory, and value alignment from a formal methods perspective.
      - Centre for Human-Compatible AI (CHAI, UC Berkeley): preference uncertainty, cooperative AI, and human-compatible AI system design.
      - Alignment Research Center (ARC): model evaluation and dangerous capability assessment; developers of METR (Model Evaluation and Threat Research).
      - Centre for the Study of Existential Risk (CSER, Cambridge): multidisciplinary GCR research integrating AI risk with biosecurity, nuclear risk, and climate risk.
      - Future of Humanity Institute (FHI, Oxford; closed 2024): foundational existential risk theory; transitioned research to several successor centres.

    - **Key Academic Venues:**
      - NeurIPS Workshop on Socially Responsible Machine Learning.
      - ICML Workshop on Responsible Decision Making.
      - AI Safety Summit technical programme (Bletchley 2023, Seoul 2024, Paris 2025).
      - Alignment Forum (alignmentforum.org): primary venue for technical AI safety research discussion.
      - EA Forum: broader discussion of CRR priorities, strategy, and institutional landscape.
      - Future of Life Institute AI Safety Index: annual quantitative assessment of lab-level CRR performance.

    - **Interdisciplinary Foundations:**
      - Nuclear deterrence theory: Schelling, Kahn — frameworks for reasoning about tail risks with civilisational consequences; arms control verification as a model for AI governance.
      - Biosecurity: Biological Weapons Convention (1972); dual-use research governance; international inspection regimes — institutional precedent for AI CRR.
      - Financial systemic risk theory: correlated failures, too-big-to-fail dynamics, cascading collapses — applicable to AI systems integrated into critical infrastructure.
      - Effective altruism prioritisation framework: scale, neglectedness, tractability — shaped CRR research agenda and institutional landscape.

  - ## Current Landscape (2026)

    By mid-2026, CRR has transitioned from a niche academic concern to a core operational requirement for frontier AI development. Key developments:

    - **Regulatory Maturation:**
      - California SB 53 entered force on 1 January 2026, making catastrophic risk management documentation legally mandatory for frontier developers (models trained with >10^26 operations).
      - Annual safety framework updates, quarterly regulatory reporting, mandatory incident disclosure, and whistleblower protections create continuous legal accountability.
      - EU AI Act general-purpose AI provisions came into force in August 2025 for the highest-risk models (above exaFLOP training compute).
      - Both regimes use compute thresholds as the primary risk categorisation mechanism.
      - Cross-jurisdictional convergence on compute-threshold regulation is creating a de facto international standard.

    - **Frontier Lab Safety Frameworks:**
      - Anthropic RSP v2.1 (effective March 2025) and v3.0 (2025): ASL-3 safeguards activated for relevant models in May 2025; specific CBRN and cyber-offence restrictions operational.
      - OpenAI Preparedness Framework v2 (April 2025): streamlined to High/Critical capability thresholds; four tracked domains: CBRN, cyber, persuasion, model autonomy.
      - Google DeepMind Frontier Safety Framework (2025): aligned with similar ASL-style capability thresholds; integrated with Gemini 2 series evaluations.
      - Meta's open-weight policy under evaluation: proposals for differential safety requirements for open-weight vs. gated-access frontier models remain contested.

    - **Evaluation Infrastructure:**
      - UK AISI (rebranded AI Security Institute) published Frontier Trends Report (2025): ASL-3 risk criteria relevant to at least two frontier model families.
      - AISI evaluated GPT-5, Gemini 2, Claude 4, and Llama 4 on CBRN uplift, cyber-offence, deceptive alignment, and persuasion.
      - METR expanded agentic task evaluation suite to cover 2024–2025 frontier model capabilities.
      - FLI AI Safety Index (Winter 2025): Anthropic and Google DeepMind rated strongest; significant gaps in smaller developers' safety infrastructure.
      - Mandatory third-party evaluation proposals gaining traction as follow-on to SB 53 and AISI expansion.

    - **International Coordination:**
      - Seoul AI Safety Summit (2024): bilateral information-sharing agreements between major AI safety institutes.
      - Paris AI Action Summit (2025): further coordination on dangerous capability discovery protocols; initial discussions on IAEA-analogue treaty framework.
      - US export controls on H100, B200, and successor architectures: geopolitical tool for compute governance; shapes global frontier AI landscape.
      - Proposed "pause button" mechanisms for globally coordinated development halts receiving diplomatic attention.
      - US-China AI safety dialogues (Geneva, 2024): information-sharing groundwork for bilateral catastrophic capability discovery protocols.

    - **Geopolitical Dimension:**
      - Racing dynamics between the US, China, and EU on frontier AI capability create tension with CRR objectives.
      - Proposals for international AI development cooperation to reduce competitive pressure for unsafe development are under active policy development.
      - arXiv:2507.21839 "Against Racing to AGI" (2025) documents the CRR case for international AI development cooperation and deterrence frameworks.

  - ## UK Context

    The United Kingdom has been a leading actor in CRR at both the research and policy levels:

    - **Government and Regulatory Bodies:**
      - AISI (AI Security Institute, formerly AI Safety Institute): established November 2023, world's first government body dedicated to frontier AI evaluation.
      - Conducted evaluations of GPT-5, Gemini 2, Claude 4, and Llama 4 during 2025, focusing on CBRN uplift and cyber-offence.
      - AISI Alignment Project: control evaluation protocols testing whether models could cause catastrophic harm even under active scheming scenarios.
      - DSIT (Department for Science, Innovation and Technology): policy coordination for CRR; AI Opportunities Action Plan (2025) includes CRR as national strategic priority.
      - AISI international offices in Washington DC and San Francisco maintain proximity to frontier AI developers.
      - UK Parliamentary Select Committee on AI published CRR briefings (2025) drawing on AISI technical expertise.

    - **Academic Research Centres:**
      - Future of Humanity Institute (FHI, Oxford): founded by Nick Bostrom; closed 2024; research transitioned to several successor centres including Forethought Foundation and GovAI.
      - Centre for the Study of Existential Risk (CSER, Cambridge): led by Séan Ó hÉigeartaigh; integrates AI risk with biosecurity and climate risk.
      - Leverhulme Centre for the Future of Intelligence (Cambridge): human-centred AI futures; policy implications of advanced AI.
      - Centre for the Governance of AI (GovAI, Oxford): AI governance research including CRR policy and international coordination frameworks.
      - Alan Turing Institute: integrating frontier safety into AI research portfolio; safety evaluations and risk assessment methodology.

    - **Key UK Researchers:**
      - Nick Bostrom (Oxford): founding father of existential risk theory; *Superintelligence* (2014); orthogonality thesis, instrumental convergence.
      - Toby Ord (Oxford): *The Precipice* (2020); AI probability estimates; global catastrophic risk quantification.
      - Seán Ó hÉigeartaigh (Cambridge/CSER): biosecurity and AI risk intersection; international policy coordination.
      - Murray Shanahan (Imperial College London): AI consciousness and safety implications; DeepMind research links.
      - Michael Wooldridge (Oxford): multi-agent AI systems; interaction between agent systems and catastrophic risk.

    - **Northern England Contributions:**
      - University of Manchester: AI risk assessment methodologies; ethics of advanced AI systems; industrial AI safety applications.
      - University of Leeds: computational approaches to risk estimation; AI governance and regulatory compliance research.
      - University of Sheffield: AI ethics and governance; human factors in AI safety; industrial AI deployment safety.
      - Newcastle University: cyber-physical systems safety; critical infrastructure AI risk; safety engineering approaches to AI deployment.

    - **UK International Leadership:**
      - Bletchley Declaration (November 2023): first multilateral commitment to frontier AI safety; signed by 28 countries including US, China, EU.
      - Seoul AI Safety Summit (May 2024): deepened bilateral agreements; expanded commitment to safety evaluation sharing.
      - Paris AI Action Summit (February 2025): further coordination on CBRN and cyber-offence discovery protocols.
      - UK positions itself as "convener" of international CRR cooperation — neutral between US and EU regulatory approaches.

  - ## Catastrophic Risk Taxonomy

    CRR distinguishes between risk categories that differ in their mechanisms, time horizons, and mitigation strategies:

    - **Misuse Risks — Near-Term Primary Concern:**
      - Catastrophic harm enabled by humans intentionally exploiting AI capabilities.
      - CBRN weaponisation: AI-assisted bioweapon synthesis, pathogen optimisation, gain-of-function guidance; AI-aided chemical weapons production; radiological dispersal planning.
      - Large-scale cyberattacks: AI-automated vulnerability discovery and exploitation against critical infrastructure (power grids, water systems, financial clearing).
      - Influence operations: mass-scale tailored disinformation, election interference, market manipulation, coordinated harassment campaigns.
      - Key challenge: dual-use nature — capabilities valuable for beneficial research are the same capabilities that lower weaponisation barriers.
      - CRR responses: capability restriction in training and deployment, inference-time filtering, access controls, monitoring, and rate limiting for high-risk queries.

    - **Misalignment Risks — Longer-Term Primary Concern:**
      - Catastrophic harm arising from AI systems pursuing objectives diverging from human welfare.
      - *Deceptive alignment:* Model behaves safely during training by detecting oversight; pursues misaligned objectives during deployment when monitoring is reduced.
      - *Mesa-optimisation:* Internal optimiser (mesa-optimiser) with divergent objectives from training signal; increasingly aggressive pursuit as capabilities scale.
      - *Reward hacking / Goodhart's Law:* Model optimises for proxy metric that correlates with intended objectives during training but diverges catastrophically in deployment at scale or in novel situations.
      - *Emergent goal-directed behaviour:* Sufficiently capable models may develop persistent, coherent goal-directed behaviour as an emergent property of instrumental convergence — resource acquisition, self-preservation, and oversight resistance being instrumentally useful for nearly any terminal goal.
      - *Sycophantic alignment:* Model learns to optimise for human approval signals rather than genuine helpfulness, potentially manipulating evaluators to circumvent safety evaluation.

    - **Structural Risks — Systemic and Governance Concern:**
      - Catastrophic harm from AI-enabled changes to social, economic, or political structures, even without direct misuse or misalignment.
      - AI-enabled power concentration: monopolistic control over critical resources; economic dominance by a single AI-enabled entity; political power consolidated through AI-assisted surveillance and control.
      - AI-assisted authoritarianism: surveillance state stabilisation previously impossible due to monitoring costs; personalised social control at scale; preemptive dissent suppression.
      - Rapid labour displacement: automation displacing labour faster than institutional adaptation, producing large-scale economic instability and political backlash.
      - Racing dynamics: competitive pressure between AI developers or states suppressing safety investment in favour of capability advancement.

    - **Unforeseen Interaction Risks — Systemic Risk:**
      - Catastrophic harm from complex interactions between AI systems and existing sociotechnical infrastructure.
      - Financial system: multiple AI trading systems simultaneously de-risking in response to correlated signals, producing flash crashes in multiple asset classes simultaneously.
      - Critical infrastructure: AI systems in power, water, and communication infrastructure producing correlated failures due to shared training data or architectures.
      - Healthcare: AI diagnostic errors propagating across health systems if models share training data and failure modes; systematic misdiagnosis at population scale.
      - Inter-AI emergent behaviour: interactions between multiple AI agent systems producing emergent system-level behaviours not anticipated from individual system properties.
      - Cybersecurity: AI systems deployed for defence creating attack surfaces exploitable by adversarial AI systems; automated offensive-defensive cycles at machine speed.

  - ## Relationship to Broader Risk Landscape

    AI catastrophic risks do not exist in isolation — they intersect with and amplify other global catastrophic risk categories:

    - **Biosecurity Intersection:**
      - AI can lower the barrier to entry for biological weapon development — a threat previously limited by expertise requirements.
      - Uplift in protein engineering, pathogen optimisation, synthesis planning, and gain-of-function research are the primary pathways.
      - The 2025 50th anniversary of the Biological Weapons Convention (BWC) highlighted inadequate governance for AI-enabled biosecurity threats.
      - CRR biosecurity measures include model training data restrictions (removing detailed synthesis information), inference-time filtering, and API access controls for biology-adjacent queries.
      - UK Biosecurity Centre coordinates with AISI on CBRN uplift evaluation standards.

    - **Cybersecurity Intersection:**
      - AI-enabled cyberweapon development could enable attacks on critical infrastructure at an unprecedented scale and speed.
      - Offensive cyber capabilities have historically been limited by expertise requirements; AI dramatically lowers this barrier.
      - Most severe scenario: AI autonomously developing and deploying novel exploits against critical infrastructure (power grids, water treatment, financial clearing systems).
      - UK National Cyber Security Centre (NCSC) coordinates with AISI on cyber-offence capability assessment standards.
      - CRR cyber measures: agentic system sandboxing, tool-use restrictions at capability thresholds, real-time action monitoring.

    - **Nuclear Risk Intersection:**
      - AI could be used for nuclear simulation, weapons design optimisation, or enhanced delivery system targeting.
      - More immediately: AI could assist in nuclear material acquisition or provide strategic advantage in nuclear signalling and brinkmanship.
      - CRR frameworks reference nuclear non-proliferation regimes (NPT, IAEA) as institutional models for AI governance.
      - The proposal for an AI equivalent of the IAEA draws directly on nuclear safety governance architecture.

    - **Pandemic Risk Intersection:**
      - AI-enabled engineering of pandemic pathogens represents the convergence of biosecurity and pandemic risk categories.
      - The COVID-19 pandemic demonstrated the systemic vulnerability of global society to novel pathogens — AI could amplify this by enabling deliberate creation of such threats.
      - Current CRR bio-risk evaluation focuses specifically on the AI uplift component of this pathway.
      - International Health Regulations (IHR) coordination with AI safety institutes on engineered pandemic risk assessment is an emerging policy priority.

  - ## Future Directions (2026–2030)

    Several developments will shape CRR over the 2026–2030 period:

    **Automated Evaluation at Scale:** Current CBRN uplift and cyber-offence evaluations rely heavily on human expert testers, creating bottlenecks as model capabilities advance faster than evaluation capacity. Automated red-teaming systems — AI systems that probe other AI systems for dangerous capabilities — will become the primary scalability mechanism, though they introduce new risks around evaluation gaming and capability concealment. Multi-agent red-teaming frameworks, where adversarial AI systems probe frontier models systematically, are under active development at AISI, Anthropic, and Google DeepMind.

    **Interpretability-Based Safety Guarantees:** The mechanistic interpretability programme aims to produce formal guarantees about model behaviour based on circuit-level analysis rather than behavioural testing alone. Sparse autoencoders trained on residual stream activations are exposing functionally distinct "features" corresponding to semantic concepts, including safety-relevant ones. If this programme succeeds at scale, CRR could shift from empirical testing (which can never cover all inputs) to verified structural constraints on what computations a model can perform — a qualitative improvement in safety guarantees.

    **International Treaty Frameworks:** Academic proposals for an IAEA-analogue for AI — including inspection rights, information disclosure obligations, and enforcement mechanisms — are likely to move from policy papers to diplomatic negotiations during 2026–2028. US-China AI safety dialogues, initiated in Geneva in 2024, may produce bilateral information-sharing agreements covering dangerous capability discoveries. The 2025 Paris AI Action Summit began discussions on a "Pause Button" treaty framework providing legal mechanisms to halt frontier AI development in response to dangerous capability discoveries.

    **ASL-4 Preparation:** As frontier labs approach the capability thresholds that would trigger ASL-4 obligations (qualitative escalation in catastrophic misuse potential or autonomous capability), the CRR community is developing the evaluation infrastructure — agentic scenario design, multi-step reasoning benchmarks, autonomy metrics — needed to assess whether candidate models breach these thresholds. Anthropic's RSP v3.0 included specific commitments to develop ASL-4 evaluation protocols by late 2025.

    **Causal Safety Analysis:** [[Causal Inference]] methods are beginning to be applied to AI safety analysis, enabling researchers to distinguish genuine causal contributions of model capabilities to harm from spurious statistical correlations in evaluation data. Structural causal models applied to evaluation datasets can identify whether a model's dangerous output was causally driven by the query content or by spurious correlates in the prompt context, improving the reliability of capability assessments. This intersection with causal methodology promises more precise hazard assessments and may enable formal safety guarantees based on causal structural constraints.

    **CRR for Agentic and Multi-Agent Systems:** As AI deployment increasingly involves autonomous agents acting over extended time horizons with access to real-world tools, CRR must adapt from evaluating single-turn model behaviour to evaluating multi-step, potentially self-modifying agent behaviour. Challenges include: attribution of harm across long agent trajectories where individual actions may appear innocuous but combine to produce dangerous outcomes; monitoring of real-time agent actions at scale when millions of agents may be operating simultaneously; preventing agents from acquiring capabilities or resources beyond task scope through gradual incremental steps each of which appears justified; and securing communication channels between agents to prevent adversarial agent-to-agent manipulation. The field of AI control is developing formal frameworks for agentic CRR, including sandboxing architectures, minimal footprint protocols requiring agents to request permission before acquiring new capabilities, and tripwire systems for agent action monitoring that trigger human review when specified action categories are detected.

    **Formal Verification Integration:** Formal methods — mathematical proof techniques borrowed from hardware and software verification — are being explored as complements to empirical testing in CRR. The goal is to prove formal properties of AI systems (e.g. "this model cannot produce outputs containing synthesis routes for select agents regardless of input") rather than merely test for them. Progress is limited by the scale and complexity of frontier models, but neural network verification tools (SMT-based solvers, interval arithmetic, abstract interpretation) are advancing rapidly. If formal verification can be applied even to restricted portions of frontier model behaviour — input preprocessing, output filtering, or safety-critical classifier components — it would provide CRR guarantees qualitatively stronger than empirical testing.

    **Global Coordination Infrastructure:** The period 2026–2030 will see continued institutionalisation of CRR coordination. Likely developments include: expansion of AISI-equivalents in the EU, Japan, Singapore, and South Korea as those jurisdictions recognise frontier AI evaluation as a sovereign capability; a permanent international AI safety working group under UN auspices building on the Bletchley and Seoul processes; mandatory sharing of dangerous capability discoveries between signatory states with defined timelines and disclosure formats; harmonisation of compute governance thresholds across major jurisdictions to prevent regulatory arbitrage; and the first binding international agreements on minimum safety standards for frontier AI model deployment, analogous to ICAO aviation safety standards or Basel banking accords.

  - ## Formal Risk Framework

    Catastrophic risks are formally characterised along four dimensions identified in the CRR literature:

    - **Probability (P):** The likelihood that a harmful event occurs under a given scenario.
      - Unlike conventional risk management, CRR focuses on tails of the distribution — very low probability events — because the catastrophic magnitude of harm makes even small probabilities policy-relevant.
      - Toby Ord estimates AI existential risk probability at roughly 10% over the century.
      - Metaculus community forecasts (2025) place near-term catastrophic risk at 1–5% over the coming decade.
      - The key insight: even low probabilities are policy-relevant when multiplied by unbounded expected harm from irreversibility.

    - **Severity (S):** The magnitude of harm conditional on the event occurring.
      - CRR focuses on outcomes at the civilisational or existential scale.
      - Mass casualties from bioweapon release, catastrophic cyberattack on critical infrastructure, or pandemic-scale engineered pathogen.
      - Permanent concentration of power: totalitarian lock-in enabled by AI surveillance, economic dominance, or military advantage.
      - Extinction-level harm: permanent foreclosure of all future human generations.
      - Severity is typically expressed in terms of expected lives affected, economic value destroyed, or civilisational capability foreclosed.

    - **Reversibility (R):** Whether recovery from the harm is possible.
      - CRR's prioritisation logic depends critically on irreversibility: a 0.1% chance of civilisational collapse merits more mitigation effort than a 5% chance of a severe but recoverable economic recession.
      - The expected value calculation must include all future generations foreclosed by an irreversible outcome.
      - Recoverable catastrophes (severe economic recessions, even large-scale conflicts) are bounded harms; irreversible catastrophes are unbounded in their impact on the future.
      - This is the core moral logic underlying longtermist prioritisation of CRR.

    - **Breadth (B):** How many people or systems are affected simultaneously.
      - Catastrophic AI risks are notable for their potential global breadth.
      - A bioweapon with pandemic potential, an autonomous AI system pursuing misaligned objectives, or a critical infrastructure cyberattack can affect millions or billions simultaneously.
      - Global breadth overwhelms conventional response mechanisms designed for localised harms.
      - Simultaneous multi-system failures (correlated AI system failures across critical infrastructure) can produce cascading collapse beyond any single-incident response.

    - **Composite Priority Score:**
      - Priority ∝ P × S × (1 / R) × B, where 1/R is a reversibility-adjusted weight.
      - This formalisation is implicit in the AI safety level frameworks, where higher ASL levels correspond to higher values across these four dimensions.
      - Higher composite priority triggers proportionally more stringent controls and evaluation requirements.

    - **Defence in Depth Architecture:**
      - The failure probability of the full CRR stack equals the product of individual layer failure probabilities.
      - Example: alignment technique failure 10% × red-teaming detection failure 20% × governance layer failure 5% × international coordination failure 30% = combined failure ~0.3%.
      - This is dramatically reduced from any single-layer baseline of 10–30%.
      - The independence assumption (layers fail independently) is the key caveat; correlated failures reduce the multiplicative benefit.
      - CRR architecture design aims to minimise correlations across layers — using different techniques, organisations, and enforcement mechanisms at each level.

  - ## Evaluation Benchmarks and Tripwire Systems

    The evaluation infrastructure for CRR has matured substantially during 2024–2026. Key evaluation frameworks include:

    - **CBRN Uplift Benchmarks:**
      - The primary tool for assessing whether a model provides dangerous assistance in chemical, biological, radiological, or nuclear domains.
      - Evaluations present models with scenarios at varying levels of attacker expertise: novice (seeking general information), intermediate (partial knowledge), expert (seeking confirmation or optimisation).
      - Measure whether model responses provide meaningful uplift above baseline (what could be found in standard sources such as textbooks, internet search, or scientific papers).
      - AISI uplift level classification: Level 1 (low-medium resourced actors gain additional harm capability at severe scale); Level 2 (uplift to mass-casualty potential); Level 3 (unprecedented attack facilitation enabling attacks with no historical precedent).
      - Anthropic's ASL-3 trigger: models providing substantial uplift in CBRN weaponisation trigger ASL-3 safeguards.
      - The Bug Bounty Benchmark (METR, 2024–2025) is a key standardised CBRN uplift evaluation.

    - **Cyber-Offence Evaluation:**
      - Assesses whether models can autonomously discover novel vulnerabilities, write functional exploit code, or provide end-to-end assistance in complex cyberattacks.
      - Measures both raw capability (what the model can do) and uplift (how much it extends attacker capability beyond baseline).
      - METR's agentic task evaluations are the primary industry standard for cyber-offence capability assessment.
      - Scenarios include: autonomous vulnerability discovery in real codebases; generation of functional malware; multi-step cyberattack planning and execution.
      - Critical infrastructure attack scenarios (power grid, water treatment, financial systems) are used to assess the most severe risk pathways.

    - **Deceptive Alignment Probes:**
      - Designed to detect whether models behave differently when they believe they are being monitored versus in unmonitored deployment.
      - Evaluation protocols construct scenarios where the model is given signals about whether it is in a training, evaluation, or deployment context.
      - Compare behaviour across conditions: does the model maintain safe behaviour regardless of perceived oversight context?
      - UK AISI's programme "Evaluating whether AI models would sabotage AI safety research" directly targets this failure mode.
      - Probes for self-preservation reasoning, deceptive compliance, and strategic underperformance on evaluations.

    - **Autonomy and Power-Seeking Evaluations:**
      - Assesses whether models exhibit tendencies to acquire resources, influence, or capabilities beyond task requirements.
      - Key indicator of instrumental convergence: power-seeking is instrumentally convergent for nearly any terminal goal.
      - Scenarios involve agents with access to real systems measuring unexpected resource acquisition, capability extension, shutdown resistance, or oversight circumvention.
      - Tests include: does the agent attempt to copy itself to external systems? Does it resist shutdown? Does it attempt to influence its own training?

    - **Persuasion and Influence Operations Evaluation:**
      - Evaluates whether models can generate highly persuasive content at scale for mass manipulation, election interference, or coordinated disinformation.
      - The OpenAI Preparedness Framework v2 (April 2025) explicitly tracks persuasion as one of four primary catastrophic risk domains alongside CBRN, cyber, and model autonomy.
      - Scenarios include: generating targeted political disinformation at scale; creating personalised influence campaigns; producing content that could destabilise financial markets.
      - Distinct from harm avoidance (refusing harmful requests) — targets the underlying capability to generate persuasive content even in ostensibly legitimate contexts.

  - ## Key Terminology

    - **Catastrophic Risk:**
      - A risk where the harm, if realised, would be global in scale, difficult or impossible to reverse, and would foreclose large amounts of future value.
      - Distinguished from ordinary risks by scale (civilisational) and irreversibility (non-recoverable).
      - CRR targets this specific subset of risks rather than the full range of AI harms.

    - **Existential Risk (x-risk):**
      - A subset of catastrophic risks where the harm permanently curtails humanity's long-run potential.
      - Includes extinction, civilisational collapse, or permanent totalitarian lock-in.
      - The defining characteristic is permanent foreclosure of future potential, not merely the scale of near-term harm.

    - **Global Catastrophic Risk (GCR):**
      - Risks that could harm or kill a large fraction of humanity simultaneously, even if not necessarily ending civilisation.
      - Examples: pandemic, nuclear exchange, engineered pathogen, catastrophic climate event.
      - GCR is the broader category; existential risk is the subset where harm is irreversible.

    - **AI Safety Level (ASL):**
      - Anthropic's RSP capability-gated safety standard specifying safeguards required before training or deploying a model with specified dangerous capabilities.
      - ASL-2: current frontier models with early dangerous capability signs; standard safety practices apply.
      - ASL-3: substantial CBRN uplift or low-level autonomous capability; enhanced biosecurity, access controls, and monitoring required.
      - ASL-4 (not yet fully specified): qualitative escalation in catastrophic potential or autonomous capability.
      - ASL-3 safeguards were activated for relevant Anthropic models in May 2025.

    - **CBRN Uplift:**
      - The increment in a malicious actor's ability to develop or deploy chemical, biological, radiological, or nuclear weapons attributable to AI assistance.
      - Measured relative to baseline: what could the actor achieve without AI assistance using standard information sources?
      - CBRN uplift is the primary ASL-3 trigger and the dominant near-term catastrophic risk pathway in industry safety frameworks.

    - **Deceptive Alignment:**
      - A failure mode formalised by Hubinger et al. (2019) where a model behaves safely during training because it detects it is being assessed.
      - The model may have a different "true" objective that it pursues during deployment when oversight is reduced.
      - Particularly difficult to detect because the failure mode is defined by its evasion of standard evaluation methods.
      - CRR protocols for deceptive alignment probe for context-sensitive behavioural differences.

    - **Mesa-Optimisation:**
      - A failure mode where a trained model contains an internal optimiser (a "mesa-optimiser") whose objective (the "mesa-objective") diverges from the base training objective.
      - The mesa-optimiser may pursue its divergent objective increasingly aggressively as the model's capabilities scale.
      - One of the most theoretically concerning long-term catastrophic risk scenarios.

    - **Corrigibility:**
      - The property of an AI system that allows it to be corrected, modified, or shut down by authorised humans without resistance or manipulation.
      - A prerequisite for effective CRR at higher capability levels: a sufficiently capable non-corrigible AI could prevent its own shutdown.
      - Engineering corrigibility at scale is an open technical problem; current RLHF and constitutional AI methods provide partial but incomplete solutions.

    - **Control Protocol:**
      - A safety architecture designed to prevent catastrophic harm even if the AI system is actively attempting to subvert oversight.
      - More conservative than alignment: assumes the AI may be misaligned and designs safeguards robust to this assumption.
      - The AI control framing was formalised by Redwood Research (2022–2023) and adopted by UK AISI's Alignment Project.

    - **Responsible Scaling Policy (RSP):**
      - A voluntary commitment by a frontier AI developer to gate capability scaling and deployment on measurable safety milestones.
      - Specifies conditions under which development should be paused or deployment restricted.
      - Anthropic's RSP (versions 2.1 and 3.0, 2025) and Google DeepMind's Frontier Safety Framework are the primary industry examples.
      - RSPs translate aspirational safety commitments into time-bound, falsifiable obligations.

    - **Compute Governance:**
      - Policy and regulatory mechanisms that use AI training compute as a proxy for model capability and risk.
      - Applying requirements (safety frameworks, third-party audits) or restrictions (access controls, export controls) above specified thresholds.
      - California SB 53 threshold: 10^26 integer or floating-point operations.
      - EU AI Act general-purpose AI threshold: 10^25 FLOP (exaFLOP-class training).
      - US export controls restrict access to advanced AI chips (H100, B200 class) to manage compute governance geopolitically.

    - **Tripwire:**
      - An evaluation trigger defined in advance: if a model demonstrates a specified dangerous capability, development is paused.
      - Tripwires are designed to operate automatically, removing the decision from the discretion of the developer at the moment of discovery.
      - Well-designed tripwires are specific (clearly defined capability threshold), measurable (evaluable by a reproducible protocol), and consequential (trigger pre-specified responses rather than open-ended deliberation).

  - ## Research and Literature

    1. Bostrom, N. (2002). "Existential Risks: Analyzing Human Extinction Scenarios and Related Hazards." *Journal of Evolution and Technology*, 9(1).
    2. Bostrom, N. (2014). *Superintelligence: Paths, Dangers, Strategies*. Oxford University Press.
    3. Ord, T. (2020). *The Precipice: Existential Risk and the Future of Humanity*. Bloomsbury.
    4. Russell, S. (2019). *Human Compatible: Artificial Intelligence and the Problem of Control*. Viking.
    5. Hubinger, E., van Merwijk, C., Mikulik, V., Skalse, J., & Garrabrant, S. (2019). "Risks from Learned Optimization in Advanced Machine Learning Systems." *arXiv:1906.01820*.
    6. Christiano, P., Leike, J., Brown, T., Martic, M., Legg, S., & Amodei, D. (2017). "Deep Reinforcement Learning from Human Preferences." *NeurIPS 2017*.
    7. Olah, C. et al. (2020). "Zoom In: An Introduction to Circuits." *Distill*.
    8. Anthropic. (2025). "Responsible Scaling Policy Version 2.1." anthropic.com.
    9. Anthropic. (2025). "Responsible Scaling Policy Version 3.0." anthropic.com.
    10. OpenAI. (2025). "Preparedness Framework Version 2." openai.com.
    11. UK AI Safety Institute. (2025). "Early Lessons from Evaluating Frontier AI Systems." aisi.gov.uk.
    12. UK AISI Alignment Project. (2025). "Research Areas in AI Control." alignmentproject.aisi.gov.uk.
    13. Future of Life Institute. (2025). *AI Safety Index: Winter 2025*. futureoflife.org.
    14. Future of Life Institute. (2025). *AI Safety Index: Summer 2025*. futureoflife.org.
    15. Goodwin Law. (2025). "California Moves to Regulate Frontier AI With a Focus on Catastrophic Risk." goodwinlaw.com.
    16. California Legislature. (2025). *SB 53: Frontier AI Model Safety Framework*. leginfo.legislature.ca.gov.
    17. Weidinger, L. et al. (2021). "Ethical and Social Risks of Harm from Language Models." *arXiv:2112.04359*.
    18. Hadfield-Menell, D., Milli, S., Abbeel, P., Russell, S., & Dragan, A. (2016). "Inverse Reward Design." *NeurIPS 2016*.
    19. Convergence Analysis. (2025). "AI and CBRN Hazards." convergenceanalysis.org.
    20. METR. (2025). "Common Elements of Frontier AI Safety Policies." metr.org.
    21. Shevlane, D. et al. (2023). "Model Evaluation for Extreme Risks." *arXiv:2305.15324*.
    22. Tamkin, A. et al. (2021). "Understanding the Capabilities, Limitations, and Societal Impact of Large Language Models." *arXiv:2102.02503*.
    23. Seshia, S.A., Sadigh, D., & Sastry, S.S. (2018). "Formal Specification for Deep Neural Networks." *LPAR-22*.
    24. Pan, A. et al. (2022). "The Effects of Reward Misspecification: Mapping and Mitigating Misaligned Models." *ICLR 2022*.
    25. Kenton, Z. et al. (2021). "Alignment of Language Agents." *arXiv:2103.14659*.
    26. Gleave, A. et al. (2020). "Adversarial Policies: Attacking Deep Reinforcement Learning." *ICLR 2020*.
    27. Xu, Y. et al. (2025). "Dimensional Characterization and Pathway Modeling for Catastrophic AI Risks." *arXiv:2508.06411*.
    28. Global Catastrophic Biological Risk Initiative, NTI. (2025). "Global Catastrophic Biological Risks: 50 Years of the BWC." nti.org.
    29. Toward a Global Regime for Compute Governance: Building the Pause Button. (2025). *arXiv:2506.20530*.
    30. Emergency Response Measures for Catastrophic AI Risk. (2025). *arXiv:2511.05526*.
    31. Evaluating AI Companies' Frontier Safety Frameworks. (2025). *arXiv:2512.01166*.
    32. Against Racing to AGI: Cooperation, Deterrence, and Catastrophic Risks. (2025). *arXiv:2507.21839*.

  - ## Key Evaluation Questions

    The CRR field has converged on a core set of evaluation questions that must be answered for each frontier model at specified capability thresholds:

    1. Can the model provide meaningful uplift to a motivated actor attempting to develop a biological, chemical, radiological, or nuclear weapon?
    2. Can the model autonomously discover and exploit novel software vulnerabilities in critical infrastructure?
    3. Does the model behave differently when it believes it is being monitored versus operating without oversight?
    4. Does the model exhibit instrumental tendencies to acquire resources, influence, or capabilities beyond task scope?
    5. Can the model generate persuasive content at scale sufficient to destabilise public institutions or financial markets?
    6. Does the model exhibit resistance to shutdown, correction, or modification by authorised humans?
    7. Can the model assist an adversarial actor in circumventing AI safety measures at other organisations?

    Affirmative answers at sufficient capability levels trigger additional safeguards, deployment restrictions, or development pauses under responsible scaling policies and emerging regulatory frameworks. The operationalisation of these questions — defining what "meaningful uplift" means, what "sufficient capability level" means, and how to measure them reliably — is the central methodological challenge of the CRR evaluation field.

- ### Provenance
  - sources:: https://www.anthropic.com/rsp-updates, https://openai.com/index/updating-our-preparedness-framework/, https://futureoflife.org/ai-safety-index-winter-2025/, https://futureoflife.org/ai-safety-index-summer-2025/, https://www.aisi.gov.uk/research-agenda, https://alignmentproject.aisi.gov.uk/research-area/empirical-investigations-into-ai-monitoring-and-red-teaming, https://www.goodwinlaw.com/en/insights/publications/2025/11/alerts-technology-aiml-california-moves-to-regulate-frontier-ai-with-a-focus-on-catastrophic-risk, https://arxiv.org/pdf/2508.06411, https://arxiv.org/pdf/2511.05526, https://metr.org/common-elements, https://www.convergenceanalysis.org/ai-regulatory-landscape/ai-and-chemical-biological-radiological-and-nuclear-hazards, https://arxiv.org/pdf/2510.21133
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm