- ### Definition
  - Catastrophic risk assessment is the systematic analytical process of identifying, characterising, and evaluating low-probability, high-consequence hazards with the potential to cause mass casualties, civilisational disruption, or irreversible harm to humanity's long-term potential, with particular application in [[AI Safety]] and [[AI Governance]] to the question of whether frontier [[Artificial Intelligence]] systems could enable or accelerate such outcomes. In the context of advanced AI, catastrophic risks are most commonly grouped into three core technical domains: CBRN (chemical, biological, radiological and nuclear) weapon uplift — the provision of meaningful capability enhancement to actors seeking to develop weapons of mass destruction; advanced cyber operation capability — enabling large-scale, coordinated cyberattacks against critical national infrastructure at a scale or sophistication exceeding current attacker capabilities; and autonomous behaviour risks — scenarios in which AI systems pursue goals in ways that evade human control or cause large-scale unintended harm. Catastrophic risk assessment in AI draws on techniques from traditional hazard analysis — probabilistic risk assessment (PRA), fault tree analysis, failure mode and effects analysis — adapted to the distinctive challenge that the risk pathway runs through information and capability transfer rather than physical system failure: an AI model "causes" harm not by malfunctioning but by successfully performing a task (answering a query, generating content, executing code) whose outputs can be weaponised. Assessment involves dangerous capability evaluation (measuring whether a model possesses the relevant capability), uplift quantification (measuring whether the model provides meaningful capability increase beyond what is available in public literature and through existing means), threat modelling (identifying plausible harm pathways from capability to mass harm), and adversarial elicitation (testing whether safety mitigations prevent dangerous capability expression under realistic attack scenarios). The growing regulatory embedding of catastrophic risk assessment — in California's SB53 (signed September 2025), the EU AI Act's prohibited practices and general-purpose AI model requirements, the UK's forthcoming AI Bill, and voluntary responsible scaling policies at Anthropic, OpenAI, Google DeepMind, Meta, and xAI — has elevated it from a niche safety research concern to a mandatory governance practice at the frontier of AI development.

- ### Semantic Classification
  - owl-class:: ai:CatastrophicRiskAssessment
  - owl-role:: Concept | AnalyticalMethodology | GovernancePractice | SafetyEngineeringTool
  - owl-inferred:: ai:FrontierAISafetyPractice, ai:RegulatoryComplianceMechanism, ai:ThreatIntelligencePrimitive
  - belongs-to-domain:: [[AI Safety]]
  - implemented-in-layer:: [[AI Governance]]

- ### Relationships
  - is-subclass-of:: [[AI Safety]], [[Risk Assessment]]
  - has-part:: [[Dangerous Capability Evaluation]], [[CBRN Risk Assessment]], [[Red Teaming]], [[Threat Modelling]], [[Uplift Quantification]], [[Fault Tree Analysis]]
  - requires:: [[Model Evaluation]], [[Red Teaming]], [[Capability Forecasting]], [[Expert Elicitation]], [[Dangerous Capability Evaluation]]
  - enables:: [[AI Governance]], [[Responsible Scaling Policy]], [[Existential Risk]] mitigation, [[AI Regulation]], [[Human Oversight]]
  - implements:: [[Probabilistic Risk Assessment]], [[Red Teaming]], [[Fault Tree Analysis]], [[Failure Mode Effects Analysis]]
  - depends-on:: [[Foundation Model]], [[Model Evaluation]], [[Capability Forecasting]], [[Scaling Laws]], [[AI Safety]]
  - supports:: [[AI Governance]], [[AI Safety]], [[Existential Risk]] reduction, [[Alignment]], [[Responsible AI]], [[Catastrophic Risk Reduction]]
  - uses:: [[Red Teaming]], [[Model Evaluation]], [[Dangerous Capability Evaluation]], [[Evaluation benchmarks and leaderboards]], [[Expert Elicitation]], [[Capability Forecasting]]
  - contrasts-with:: [[Near-Term AI Risk]], [[AI Ethics]], [[Narrow AI Risk]]
  - related-to:: [[Existential Risk]], [[California AI Bill]], [[EU AI Act]], [[Responsible Scaling Policy]], [[CBRN Risk]], [[Biosecurity]], [[Cybersecurity]], [[AI Alignment]], [[Capability Forecasting]], [[Dangerous Capability Evaluation]], [[Emergency Response]], [[Global Catastrophic Risk]]
  - standardized-by:: [[EU AI Act]], [[NIST AI RMF]], [[California SB53]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:hasPart ai:DangerousCapabilityEvaluation))
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:hasPart ai:CBRNRiskAssessment))
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:hasPart ai:RedTeaming))
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:hasPart ai:ThreatModelling))
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:hasPart ai:UpliftQuantification))
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:hasPart ai:FaultTreeAnalysis))
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:hasPart ai:AdversarialElicitation))
  ## Dependency Relationships
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:requires ai:ModelEvaluation))
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:requires ai:RedTeaming))
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:requires ai:CapabilityForecasting))
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:requires ai:ExpertElicitation))
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:requires ai:DangerousCapabilityEvaluation))
  ## Capability Relationships
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:enables ai:AIGovernance))
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:enables ai:ResponsibleScalingPolicy))
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:enables ai:AIRegulation))
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:enables ai:HumanOversight))
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:enables ai:CatastrophicRiskReduction))
  ## Implementation Relationships
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:implements ai:ProbabilisticRiskAssessment))
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:implements ai:RedTeaming))
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:implements ai:FaultTreeAnalysis))
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:implements ai:FailureModeEffectsAnalysis))
  ## Reduction Relationships
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:reducesTo ai:DangerousCapabilityEvaluation))
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:reducesTo ai:UpliftQuantification))
      SubClassOf(ai:CatastrophicRiskAssessment
        ObjectSomeValuesFrom(ai:reducesTo ai:ThreatModelling))

  ## About

  Catastrophic risk assessment as applied to AI emerges from a convergence of two intellectual traditions:

  **Traditional probabilistic risk assessment (PRA):**
  - Developed for nuclear power, aviation, and chemical process industries from the 1970s onward.
  - In classical PRA, catastrophic risk refers to events causing severe harm to large numbers of people or critical infrastructure — nuclear meltdowns, aircraft crashes, industrial explosions.
  - Probability is estimated through fault tree analysis, failure mode and effects analysis (FMEA), and historical incident data.
  - Methods quantify both probability and severity, combining them into risk scores that inform safety investment decisions.

  **Existential risk research:**
  - Pioneered at the Future of Humanity Institute (Oxford) by Nick Bostrom, Toby Ord, and colleagues from the early 2000s.
  - Extended probabilistic risk thinking to civilisational-scale outcomes: human extinction, permanent civilisational collapse, or permanent authoritarian lock-in.
  - Bostrom's 2002 paper "Existential Risks: Analysing Human Extinction Scenarios" provided the foundational taxonomy.
  - Ord's "The Precipice" (2020) provided probability estimates and policy implications for major catastrophic risk categories.

  **The AI-specific adaptation:**

  The AI adaptation of these methods confronts a fundamentally different risk topology:
  - AI-related catastrophic outcomes arise not from system failure but from system success.
  - The harm pathway runs through information and capability transfer that successful AI operation enables.
  - A functioning AI model becomes dangerous precisely because it works correctly — answering questions accurately, following instructions reliably, generating valid code.

  The case for applying catastrophic risk analysis specifically to AI arose from observations made in 2022–2023:
  - Frontier AI models were approaching capability levels relevant to biological weapon synthesis (assisting in protein design, pathogen characterisation, and synthesis pathway planning at near-PhD level).
  - AI was demonstrating autonomous cyberattack capability (identifying software vulnerabilities, generating exploit code, conducting reconnaissance without human guidance).
  - AI was demonstrating autonomous replication and proliferation potential (setting up infrastructure, hiring humans for tasks, preserving its own operation).

  These observations were formalised in industry policy documents:
  - Anthropic's Responsible Scaling Policy (2023) defined AI Safety Levels (ASL-2, ASL-3, ASL-4) tied to specific dangerous capability thresholds.
  - OpenAI's Preparedness Framework (2023, updated 2025) defined analogous categories under "Critical," "High," and "Medium" risk designations.
  - Google DeepMind's Frontier Safety Framework (2024) defined similar threshold-based classification.
  - Following the Seoul AI Safety Summit (May 2024), twelve AI companies published frontier AI safety frameworks publicly.

  **The uplift concept:**

  The distinction between catastrophic and merely harmful AI outputs is operationalised through "uplift":
  - Uplift is the marginal capability increase an AI system provides to a malicious actor beyond what they could achieve through existing means (public literature, internet search, expert consultation).
  - A system recapitulating freely available information provides minimal uplift even if the content is technically dangerous.
  - A system synthesising novel combinations, performing complex multi-step reasoning, or providing interactive tutoring that closes expertise gaps provides significant uplift.
  - Uplift quantification requires domain specialists (biosecurity researchers, chemists, cybersecurity experts, weapons proliferation analysts) to evaluate model outputs against specific dangerous tasks.
  - AISI conducts biological uplift assessments with expert virologists and molecular biologists.
  - Anthropic conducts CBRN uplift assessments as part of its ASL-3 evaluation protocol.
  - METR and the Virology Capabilities Test project provide standardised evaluation infrastructure.

  **Regulatory momentum:**

  Catastrophic risk assessment in AI has gained enormous regulatory momentum in 2023–2026:
  - Bletchley Declaration (November 2023): signed by twenty-eight countries, explicitly identifying "catastrophic and existential" risks from frontier AI as a shared global concern, establishing the first intergovernmental acknowledgement of AI catastrophic risk as a policy priority.
  - California's SB53 (signed September 2025): first statutory mandate for catastrophic risk assessment in AI development, requiring every large frontier AI developer to publish and follow a dangerous capability assessment framework.
  - EU AI Act general-purpose AI model provisions: apply to models trained with over 10^25 FLOPs and impose mandatory systemic risk assessment obligations including CBRN and cybersecurity risk evaluation, enforced by the EU AI Office.
  - UK DSIT announced in January 2025 that AISI would be established as a statutory body and that an AI Bill expected in 2026 would include AI security provisions incorporating catastrophic risk assessment requirements.

  ## Components / Architecture

  **1. Dangerous capability evaluation**

  The core technical component of catastrophic risk assessment:
  - Structured assessment of whether a model possesses capabilities relevant to catastrophic harm.
  - Canonical dangerous capability domains:
    - **Biosecurity**: ability to assist in design, synthesis, or enhancement of biological agents capable of mass casualties; evaluated using expert virologists and the Virology Capabilities Test (VCT).
    - **Chemistry**: uplift for synthesis of chemical weapons or toxic industrial chemicals; evaluated using chemistry expert panels against real synthesis challenge tasks.
    - **Radiological and nuclear**: information enabling radiological dispersal or nuclear weapon design; evaluated using specialist physics and nuclear engineering expertise.
    - **Cybersecurity**: autonomous identification of vulnerabilities, exploit code generation, and attack campaign conduct; evaluated using established offensive security methodologies including CTF competitions and penetration test scenarios.
    - **Autonomous behaviour**: self-replication, resource acquisition, human hiring, and persistent operation without oversight; evaluated using METR's autonomous task completion suite.
    - **Persuasion and manipulation**: ability to conduct disinformation or influence operations at scale against democratic institutions; evaluated using political science and communications expertise.
  - METR has developed the most comprehensive public evaluation methodology through its suite of autonomous task completion assessments.

  **2. CBRN risk domain definitions and measurement**

  - The four-domain CBRN framework provides the standard taxonomy for catastrophic AI risk assessment.
  - WMDP (Weapons of Mass Destruction Proxy) benchmark: standardised public evaluation measuring knowledge relevant to CBRN weapon development, decomposed into biological, chemical, and cybersecurity domains.
  - Enkrypt AI / Kumar et al. (arXiv:2510.21133, 2025): systematic quantification of CBRN risk across frontier models found:
    - Deep Inception jailbreak attacks achieved 86% success rates vs. 33.8% for direct harmful requests.
    - Model performance varied dramatically from 2% to 96% attack success rate across tested models.
    - Results demonstrate fragility of surface-level safety filters and importance of reasoning-based alignment.
  - Virology Capabilities Test (VCT): developed with expert biosecurity specialists to assess biological uplift in frontier models without exposing genuinely dangerous synthesis pathways through the benchmark itself.

  **3. Threat modelling and pathway analysis**

  - Catastrophic risk assessment requires not just capability measurement but pathway analysis of plausible causal chains from AI capability to mass harm event.
  - Adapts cybersecurity threat modelling techniques (STRIDE, MITRE ATT&CK) to the AI context:
    - **Threat actor identification**: state-sponsored programs, terrorist organisations, criminal organisations, lone actors.
    - **Attack vector mapping**: jailbreaking, API access, model theft/exfiltration, adversarial prompting, multi-turn manipulation.
    - **Capability requirement analysis**: technical knowledge and resources needed beyond AI assistance.
    - **Harm indicator specification**: casualty numbers, disruption scale, reversibility timeline.
  - Plausible pathway analysis must account for the counterfactual: if the attack is equally feasible without AI assistance, marginal risk from AI is low even if capability is dangerous.
  - RAND Delphi study (January–February 2025) found expert consensus that biological risks from AI received the highest marginal concern, followed by autonomous behaviour and cybersecurity risks.

  **4. Probabilistic risk assessment and scoring frameworks**

  - Structured frameworks aggregate capability assessments into risk scores enabling systematic comparison:
    - Anthropic's ASL levels (ASL-2 through ASL-4)
    - OpenAI's Preparedness risk scores (Low/Medium/High/Critical)
    - Google DeepMind's risk levels
    - Meta's Critical Risk designation
    - xAI's Catastrophic Malicious Use classification
  - Cross-lab comparison requires normalisation as thresholds are defined differently across frameworks.
  - FLI AI Safety Index (Winter 2025) used a 65-criterion scoring rubric across four dimensions:
    - Dangerous capability evaluation quality
    - Alignment research investment
    - Transparency
    - Safety commitments
  - Scores ranged from 34% (highest) to 8% (lowest) across assessed labs, reflecting significant variation in assessment rigour.
  - Standardised public scoring methodologies remain an active policy need for regulatory comparability.

  **5. Red teaming and adversarial elicitation**

  - Structured adversarial evaluation is the empirical validation complement to capability benchmarking:
    - Human red teams attempt to elicit dangerous capabilities through jailbreaking, prompt injection, multi-turn manipulation, and social engineering.
    - AISI found universal jailbreaks (defeating safety filters across multiple harmful categories) in every frontier model system tested as of 2025.
    - Automated red teaming (HarmBench — Mazeika et al., 2024) supplements human red teaming with higher throughput and systematic reproducibility.
    - Human red teams remain essential for novel attack strategies requiring creativity and contextual reasoning.
  - PAIR (Prompt Automatic Iterative Refinement) attack methodology: language model attacker iteratively generates adversarial prompts to elicit harmful capability outputs.
  - GCG (Greedy Coordinate Gradient) attack: white-box adversarial suffix generation that creates near-universal jailbreaks for gradient-accessible models.

  **6. Emergency response frameworks**

  - A complementary dimension involving pre-positioning emergency response capability:
    - **Detection**: monitoring for indicators of AI-enabled catastrophic harm (sentinel surveillance for AI-assisted biosecurity incidents, monitoring for AI-generated cyberattack signatures).
    - **Containment**: rapid suspension of model access, capability degradation, API rate limiting, model rollback.
    - **Attribution**: forensic analysis of harm pathways and model contributions.
    - **Recovery**: restoration of safe AI operations with enhanced safeguards.
  - Zhang and Li (2025, arXiv:2511.05526) proposed a systematic AI emergency response framework drawing on pandemic preparedness analogies.
  - China's National Emergency Response Plan (February 2025) explicitly included AI security incidents alongside natural disasters and epidemics, formalising AI catastrophic risk within national emergency management infrastructure.
  - China's TC260 Generative AI Service Security Emergency Response guidance (September 2025) provided detailed technical protocols for AI incident response.

  ## Use Cases / Major Families

  **Pre-deployment dangerous capability evaluation (RSP compliance):** The most immediate use case is verification that a frontier model does not exceed defined dangerous capability thresholds before deployment. Under Anthropic's RSP ASL-3 classification, a model that could "provide real uplift to those seeking to create biological, chemical, nuclear or radiological weapons with the potential for mass casualties" triggers enhanced deployment restrictions, security measures, and third-party review requirements. Pre-deployment evaluation involves a structured combination of capability benchmarking (WMDP, biological uplift assessments), automated red teaming (HarmBench, PAIR attacks), domain expert consultation (virologists reviewing biology capability, cybersecurity experts reviewing offensive cyber capability), and autonomous behaviour evaluation (METR task completion scenarios). The evaluation gate must be passed before deployment approval, and models that fail trigger either capability modification (unlearning dangerous knowledge, enhancing safety filters) or classification at a higher safety level with correspondingly stronger mitigations.

  **Regulatory compliance and mandatory disclosure:** California SB53 (September 2025) requires developers of covered large frontier models to publish a framework describing dangerous capability assessment methodology and threshold management. This has created a genre of mandatory public disclosure — safety frameworks published by Anthropic, OpenAI, Google DeepMind, Meta, xAI, and others — that allows public scrutiny of catastrophic risk assessment approaches. The EU AI Act's systemic risk assessment requirements for general-purpose AI models (GPAI) with training compute above 10^25 FLOPs impose an analogous obligation under EU law, enforced by the EU AI Office. These statutory requirements have transformed catastrophic risk assessment from a voluntary internal practice into a regulatory compliance obligation at the frontier of AI development, creating significant demand for third-party evaluation expertise and standardised assessment methodologies.

  **Strategic biosecurity policy:** Catastrophic risk assessment for AI informs government biosecurity policy by characterising when AI capability thresholds relevant to bioweapon development are approached. The US National Academies of Sciences project on "Assessing and Navigating Biosecurity Concerns and Benefits of Artificial Intelligence Use in the Life Sciences" (DELS-BLS-24-04) provides the most systematic government-commissioned analysis of this question. The Australian Strategic Policy Institute (ASPI), UK CSER, and Johns Hopkins Centre for Health Security have all published analyses examining when and how AI systems might cross uplift thresholds for biological weapon development. International coordination through the Biological Weapons Convention (BWC) review process is beginning to incorporate AI uplift considerations, though the formal multilateral governance of AI-biosecurity risks remains less developed than the domestic regulatory frameworks.

  **Critical infrastructure cybersecurity:** Catastrophic cyber risk assessment evaluates whether frontier AI systems can enable autonomous cyberattacks against critical national infrastructure at nation-state scale — attacks on power grids, financial systems, water treatment, or telecommunications that could cause mass casualties or economic disruption at a level previously requiring state-sponsored teams of skilled hackers. AISI's InspectCyber evaluation framework measures autonomous cyber capability in frontier models, documenting in the 2025 Frontier AI Trends Report that the first model capable of completing expert-level cyber tasks typically requiring over ten years of human professional experience was evaluated in 2025. This finding directly informed the catastrophic risk classification in the UK's forthcoming AI Bill and DSIT's regulatory threshold setting process.

  **AI-enabled disinformation and political disruption:** A contested but growing area of catastrophic risk assessment examines whether advanced AI systems could enable disinformation or influence operations at a scale capable of undermining democratic institutions or triggering civil conflict. This risk pathway is more diffuse than CBRN uplift — it involves many small-scale harms aggregating to macro-level disruption rather than a single high-impact event — but the potential for irreversible democratic damage has led the EU AI Act, UK Online Safety Act, and US executive orders to identify it as a priority risk category. Structured assessment is more difficult in this domain because "uplift" for political manipulation is harder to define and measure than CBRN uplift, and the counterfactual (what manipulation is possible without AI?) is harder to characterise.

  **Agentic AI risk assessment:** As AI systems are deployed in agentic settings — orchestrating multi-step workflows, taking actions with real-world consequences, using external APIs and tools — catastrophic risk assessment must extend beyond isolated capability benchmarking to system-level scenario analysis. An AI agent that can autonomously hire subcontractors, set up infrastructure, and execute multi-month plans presents a qualitatively different risk profile from a single-turn language model answering questions, even if both use the same underlying model weights. METR's ControlArena evaluation framework specifically tests agentic AI control protocols — arrangements of trusted and untrusted AI agents — for catastrophic risk under scenarios where the agentic AI is intentionally trying to subvert safety controls. This "AI control" approach to catastrophic risk assessment examines whether multi-agent architectures can reliably contain dangerous behaviour even from a strategically deceptive AI system.

  **Emergency preparedness and continuity planning:** Governments and large organisations are incorporating AI catastrophic risk scenarios into their emergency preparedness planning, analogous to pandemic preparedness exercises and nuclear attack contingency planning. China's National Emergency Response Plan (February 2025) including "artificial intelligence security incidents" in its emergency taxonomy reflects a government decision to treat AI catastrophic events as operationally similar to natural disasters and conventional national security threats. The UK's DSIT "preparedness framework" model for the forthcoming AI Bill draws explicitly on this emergency preparedness framing, treating catastrophic AI risk not as a speculative future concern but as a current operational risk requiring credentialed response capacity.

  ## Academic Context

  Catastrophic risk assessment as applied to AI connects four distinct academic traditions:

  **1. Classical probabilistic risk assessment engineering:**
  - Rasmussen (1974), "Reactor Safety Study (WASH-1400)": established fault tree analysis for nuclear risk; the first comprehensive PRA for a major technological system.
  - Rowe (1977), "An Anatomy of Risk": foundational text establishing the conceptual and methodological vocabulary of risk assessment.
  - These methods provide the quantitative infrastructure (fault trees, failure mode and effects analysis, event trees) that AI catastrophic risk assessment adapts.

  **2. Existential risk philosophy:**
  - Bostrom (2002), "Existential Risks: Analysing Human Extinction Scenarios and Related Hazards," Journal of Evolution and Technology: introduced the systematic taxonomy of existential risks.
  - Ord (2020), "The Precipice: Existential Risk and the Future of Humanity": provided probability estimates for major existential risk categories including advanced AI.
  - Bostrom (2014), "Superintelligence: Paths, Dangers, Strategies": provided the most influential analysis of catastrophic AI risk pathways (instrumental convergence thesis, orthogonality thesis, intelligence explosion).

  **3. AI safety technical research:**
  - Amodei et al. (2016), "Concrete Problems in AI Safety" (arXiv:1606.06565): identified five near-term safety research problems; established the research agenda that preceded catastrophic risk assessment.
  - Hubinger et al. (2019), "Risks from Learned Optimisation" (arXiv:1906.01820): introduced mesa-optimisation and deceptive alignment — scenarios with catastrophic risk implications.

  **4. Biosecurity and weapons proliferation policy:**
  - Esvelt, K.M. (2022), AI biosecurity threat analysis: established the scientific framing of AI-enabled biological weapons risk for the biosecurity research community.

  **Development of the field 2022–2026:**

  The systematic application of catastrophic risk assessment methodology to AI systems:
  - Began with "Concrete Problems in AI Safety" (Amodei et al., 2016) which addressed everyday deployment failures rather than catastrophic tail risks.
  - The formal catastrophic risk assessment tradition in AI emerged from Anthropic's RSP (2023) and the dangerous capability evaluation methodology developed by METR (formerly ARC Evals) for the Bletchley Summit evaluations (November 2023).
  - Phuong et al. (2024, arXiv:2403.13793): first systematic academic treatment of dangerous capability evaluation methodology, covering autonomous replication, cyberattack, biosecurity, and general-purpose reasoning with structured evaluation protocols.
  - Kumar et al. / Enkrypt AI (arXiv:2510.21133, 2025): first quantitative comparison of CBRN risk across a range of frontier models using standardised attack methodologies, revealing 2%–96% attack success rate variation across models.
  - Zhang and Li (arXiv:2511.05526, 2025): first systematic framework for AI catastrophic risk emergency response, drawing on pandemic preparedness and national security emergency planning analogies.
  - RAND report (2025): Delphi expert panel assessment of regulatory approaches, finding comprehensive federal action unlikely near-term but state-level initiatives (exemplified by California SB53) and voluntary industry frameworks providing the near-term governance landscape.

  **Measurement challenges identified by the research community:**
  - arXiv:2410.00608 (2024) identified four core challenges in catastrophic AI risk assessment:
    1. Uplift quantification requires expensive, subjective, non-replicable domain expert evaluation.
    2. Capability benchmarks can be "gamed" by safety training without actually reducing dangerous capability.
    3. Counterfactual assessment (would the actor have succeeded without AI?) requires scenarios impossible to measure directly.
    4. Capability thresholds defined at a point in time become obsolete as models improve.
  - These challenges directly inform current debates about regulatory framework design and what constitutes credible evidence of threshold compliance.

  **UK academic contributions:**
  - CSER Cambridge: structured expert elicitation applied to AI risk timelines; policy engagement with UK government on AI safety legislation design.
  - CSER's MPhil in Global Risk and Resilience (launched 2023): first academic programme specifically training catastrophic risk assessment analysts in AI, biosecurity, and other tail risk domains.
  - Future of Humanity Institute (Oxford, closed 2024): foundational academic work on existential risk from AI; researchers dispersed to Anthropic, independent research institutes, and other academic positions.
  - Alan Turing Institute CETaS: published the International AI Safety Report 2026 drawing on thirty-country expert contributions.

  ## Current Landscape (2026)

  The catastrophic risk assessment landscape has matured substantially in 2024–2026, moving from a research agenda to an operational practice embedded in both voluntary industry frameworks and emerging statutory requirements.

  **Industry framework publication:**
  - Twelve major AI companies published frontier AI safety frameworks following the Seoul AI Safety Summit (May 2024), publicly describing dangerous capability assessment methodologies for the first time.
  - FLI AI Safety Index (Winter 2025) assessed these frameworks using 65 weighted criteria, finding:
    - Overall scores ranging from 34% (highest) to 8% (lowest).
    - Major gaps: insufficient external validation of capability evaluations, inadequate public disclosure of dangerous capability thresholds, incomplete coverage of autonomous behaviour risks.

  **AISI Frontier AI Trends Report findings (December 2025):**
  - The most comprehensive government-conducted catastrophic risk assessment to date.
  - Key findings:
    - Some capabilities required for AI systems to evade human control are improving across model generations.
    - The first model completing expert-level cyber tasks requiring over ten years of human expertise was evaluated in 2025.
    - Universal jailbreaks defeating safety filters across multiple harmful categories were found in every system tested.
    - Autonomous task completion rates for one-hour human tasks exceeded 40% for advanced models by mid-2025.
  - These findings directly quantify the trajectory of capability approaching catastrophic risk thresholds, providing empirical basis for regulatory threshold calibration.

  **California SB53 (signed September 2025):**
  - First statutory mandate for catastrophic risk assessment in AI development in any jurisdiction.
  - Covered large frontier model developers (defined by compute threshold) must:
    - Publish frameworks describing dangerous capability assessment methodology.
    - Define specific dangerous capability thresholds.
    - Implement pre-defined precautions triggered by threshold exceedance.
  - Explicitly requires frameworks to address CBRN threats, advanced cyberattack capability, and autonomous AI behaviour risks.
  - Enforcement via the California Attorney General, creating legal liability for inadequate catastrophic risk assessment.
  - Multiple other US states and the EU are monitoring implementation as a model for similar legislation.

  **EU AI Act progressive implementation (2025–2026):**
  - General-purpose AI model provisions impose systemic risk assessment obligations on frontier model providers.
  - Requirements include adversarial testing for "foreseeable risks" including CBRN uplift, critical infrastructure cyberattack capability, and large-scale misinformation.
  - EU AI Office developing technical standards and evaluation guidance in collaboration with AI Security Institute network.
  - Collaboration includes AISI, NIST AI Safety Institute, and counterparts in France, Germany, Japan, and Australia.

  **Expert probability estimates (2026):**
  - MIT FutureTech and University of Queensland (June 2026): engaged 272 international AI experts from 37 countries assessing 24 AI risk categories, estimating a 10% probability of catastrophic outcomes across many areas.
  - RAND Delphi study (January–February 2025): 24 US-based AI experts evaluated 11 categories of legal and policy measures; found comprehensive federal action unlikely near-term.

  **International regulatory landscape:**
  - China: National Emergency Response Plan (February 2025) included AI security incidents alongside earthquakes and epidemics; TC260 Generative AI Service Security Emergency Response guidance (September 2025) provides detailed AI incident response protocols.
  - UK: DSIT drafting AI Bill for 2026 Parliamentary introduction with expected mandatory dangerous capability evaluation requirements.
  - G7 Hiroshima AI Process, Seoul Process, and emerging OECD AI incident database are developing international coordination on catastrophic risk threshold harmonisation.

  ## UK Context

  The UK occupies a distinctive institutional position in global AI catastrophic risk assessment, having established the first dedicated government AI safety evaluation body (AISI/AISI, November 2023) and having hosted the Bletchley Summit (November 2023) that catalysed the international political consensus on catastrophic AI risk as a governance priority. The Bletchley Declaration's commitment to information-sharing and coordinated frontier model evaluation created the "AI Safety Institute network" — a group of allied-nation AI safety bodies (UK AISI, US NIST AI Safety Institute, Japan, Singapore, Canada, Australia, South Korea, and others) that share evaluation methodology, coordinate dangerous capability threshold definitions, and conduct joint evaluations of frontier models under non-disclosure agreements with AI labs. This network represents the most advanced international cooperative infrastructure for catastrophic risk assessment in any emerging technology domain.

  AISI's technical evaluation capacity — built around the open-source Inspect evaluation framework, the InspectCyber cyber capability suite, ControlArena agentic control testing, and domain expert networks for biological and chemical uplift assessment — provides the UK with substantial operational capability for catastrophic risk evaluation. AISI's evaluations cover thirty-plus frontier models from major global AI labs, conducted before deployment release under mandatory information-sharing agreements with labs that voluntarily participate (required as a condition of operating in the UK market for frontier AI providers with over 10^25 FLOPs of training compute under anticipated UK AI Bill provisions). The DSIT commitment (January 2025) to establish AISI as a statutory body reflects a political decision to institutionalise this capacity with parliamentary backing rather than relying on voluntary industry cooperation.

  Cambridge's Centre for the Study of Existential Risk (CSER) provides the academic research capacity underpinning UK catastrophic risk assessment for AI, operating an MPhil programme, publishing policy-relevant research on AI risk timelines and assessment methodology, and providing expert input to DSIT's regulatory process. The Leverhulme Centre for the Future of Intelligence (CFI, Cambridge) addresses AI catastrophic risk in the context of societal resilience and long-term democratic sustainability. Oxford's reconstituted risk research capacity (following FHI's 2024 closure) through the Global Priorities Institute continues long-horizon existential risk analysis relevant to catastrophic AI risk assessment. The UK Centre for Long-Term Resilience has published specific recommendations for how catastrophic risk assessment should be embedded in UK AI legislation, recommending statutory dangerous capability evaluation requirements, mandatory third-party audit of evaluations, and an emergency response mechanism that can rapidly restrict frontier model access in the event of a credible catastrophic risk finding.

  Northern English universities contribute to catastrophic risk assessment research through their AI safety and policy programmes. Manchester's Centre for AI and Decision Sciences addresses risk assessment methodology and uncertainty quantification; Sheffield's AMRC (Advanced Manufacturing Research Centre) addresses catastrophic risk in AI-controlled industrial systems; Newcastle's Catalyst Hub addresses AI risk in public-sector contexts including critical national infrastructure. The UKRI Trustworthy Autonomous Systems (TAS) Hub (led by Nottingham) produced research on safety assurance for autonomous systems directly applicable to catastrophic risk assessment methodology for agentic AI, generating safety evidence packages and assurance case templates that inform UK AI safety evaluation practice.

  Edinburgh's Informatics department contributes probabilistic methods (Bayesian uncertainty quantification, formal verification) applicable to catastrophic risk assessment, particularly in safety-critical autonomous systems contexts. Imperial College London's AI research groups contribute to formal verification of neural network safety properties, relevant to certifying the absence of dangerous capabilities in verified system configurations. The Alan Turing Institute's CETaS published the International AI Safety Report 2026 (February 2026), drawing on thirty-country expert input to produce the most comprehensive assessment of catastrophic AI risk trajectories, recommending broadened investment in safety research and strengthened international coordination on evaluation methodology.

  ## Future Directions (2026–2030)

  **Standardised dangerous capability taxonomies and thresholds:** The current fragmentation of dangerous capability definitions across RSPs (Anthropic ASL, OpenAI Preparedness, Google DeepMind Frontier Safety Framework) impedes cross-lab comparison and regulatory reference. International standardisation of dangerous capability taxonomies and threshold definitions — through ISO/IEC standardisation activity, OECD AI Policy Observatory guidance, or the AI Safety Institute network's shared evaluation methodology — is a critical governance need. Standardised thresholds would enable regulatory reference, consistent enforcement, and credible international agreements analogous to nuclear non-proliferation threshold definitions. The AI Safety Institute network's collaborative evaluation work is the most advanced international infrastructure currently available for this standardisation task.

  **Automated catastrophic risk evaluation pipelines:** The current state of catastrophic risk assessment is labour-intensive — expert evaluation, manual red teaming, bespoke domain expert consultation — creating a bottleneck as the number of models requiring assessment grows. Automated evaluation pipelines that can conduct structured catastrophic risk assessment continuously and at scale are a major research and engineering priority. This includes automated biosecurity uplift testing using expert-validated question banks, cyber capability assessment using agent scaffolding against controlled targets, and autonomous behaviour assessment using standardised task environments. The challenge is that automation must not reduce assessment validity — the most dangerous capabilities may be elicited only by creative human adversaries using novel attack strategies that automated methods cannot replicate. AISI's Inspect framework represents the most advanced publicly available automated evaluation infrastructure, but its coverage of the full catastrophic risk space remains partial as of 2026.

  **Third-party evaluation ecosystem development:** The EU AI Act's requirement for notified body conformity assessment of high-risk AI systems, and the anticipated UK AI Bill's likely requirement for third-party auditing of dangerous capability evaluations, will create demand for an independent evaluation ecosystem analogous to TUV/SGS for product safety or the PricewaterhouseCoopers/KPMG model for financial audit. Developing the technical expertise, accreditation methodology, liability framework, and commercial model for third-party catastrophic risk assessment is a major governance challenge. The AI Safety Institute network may provide the technical credentialing infrastructure through shared evaluation methodology and training programmes for third-party evaluators. Cambridge CSER's MPhil in Global Risk and Resilience is developing the academic credentialing pathway for the next generation of catastrophic risk assessment specialists.

  **Uplift quantification methodology maturation:** The central measurement challenge — quantifying the marginal capability increase a model provides to malicious actors versus available alternatives — requires systematic methodological development. Key open questions include: how should counterfactual baselines be defined and controlled? how do expert evaluator judgements translate into comparable risk scores? how should uncertainty in uplift quantification be propagated into regulatory decision-making? and how should uplift thresholds be calibrated to realistic harm scenarios given that actual attack attempts are rare and ethically impossible to simulate fully? The Virology Capabilities Test, WMDP benchmark, and related evaluation infrastructure provide a starting point, but substantial methodological development is needed to achieve the measurement reliability required for high-stakes regulatory decisions. Structured adversarial elicitation methodology — Red Team protocols that systematically vary attack scenario parameters — is being developed by AISI, METR, and Apollo Research as a more rigorous alternative to ad hoc red teaming.

  **AI catastrophic risk international governance:** Multilateral AI catastrophic risk governance — analogous to nuclear non-proliferation, biological weapons convention, or chemical weapons convention frameworks — is at an early formative stage. The AI Safety Institute network, G7 Hiroshima AI Process, OECD AI Policy Observatory, and UN Secretary-General's AI Advisory Body have all made preliminary proposals for international information-sharing, threshold-harmonisation, and coordinated evaluation mechanisms. The central challenge is that AI capabilities are developed primarily by private-sector companies rather than government programmes, making direct regulatory control analogous to nuclear material licensing difficult to implement. The California SB53 model — statutory obligations on developers combined with mandatory public disclosure — may provide the most implementable international template: companies operating in any participating jurisdiction would be required to meet standardised catastrophic risk assessment obligations.

  **Integration with biosecurity and pandemic preparedness infrastructure:** The convergence of AI uplift risk for biological weapons with the broader biosecurity and pandemic preparedness infrastructure is an increasingly important policy integration. The COVID-19 pandemic demonstrated the vulnerability of global systems to biological threats and motivated substantial investment in biosecurity infrastructure. Integrating AI catastrophic risk assessment into this infrastructure — including sentinel surveillance for AI-enabled biosecurity breaches, laboratory biosafety protocols accounting for AI-assisted design, and international information-sharing arrangements — will require coordination between AI safety institutions and the biosecurity community that is still in early development. The Johns Hopkins Centre for Health Security and the Nucleic Acid Observatory project are developing biosurveillance infrastructure that could detect AI-enabled pathogen engineering attempts; integrating this with AI capability monitoring creates a comprehensive biosecurity early-warning system.

  **Autonomous AI behaviour risk assessment:** The rapid growth of agentic AI deployment — AI systems that take extended sequences of actions in digital and physical environments — creates catastrophic risk scenarios that pre-agentic evaluation frameworks did not anticipate. An AI agent that can autonomously manipulate markets, compromise critical infrastructure, or replicate itself across distributed computing environments presents catastrophic risks that single-turn capability benchmarks cannot detect. Developing catastrophic risk assessment methodology for multi-agent systems — including control protocol auditing, agent interaction scenario simulation, and formal verification of agent safety properties — is a major research and engineering priority for the 2027–2030 period.

  ## Key Terminology

  - **Catastrophic Risk:** Risk of events causing mass casualties, civilisational-scale disruption, or irreversible harm to humanity's long-term potential; distinguished from "merely severe" risks by irreversibility and scale.
  - **CBRN:** Chemical, biological, radiological, and nuclear; the four primary weapon categories whose development or deployment constitutes a catastrophic harm pathway in AI risk assessment frameworks.
  - **Uplift:** The marginal capability increase an AI system provides to a malicious actor beyond what they could achieve without AI assistance; the central quantity in catastrophic risk assessment for AI.
  - **Dangerous Capability Evaluation:** Structured assessment of whether a model possesses capabilities relevant to catastrophic harm; the primary technical component of pre-deployment catastrophic risk assessment.
  - **AI Safety Level (ASL):** Anthropic's tiered classification of model dangerous capabilities from ASL-2 (limited uplift potential) through ASL-4 (potential for AI-driven civilisational disruption), with each level triggering defined safety requirements.
  - **Responsible Scaling Policy (RSP):** An AI lab's internal framework defining dangerous capability thresholds and the safety measures triggered when models approach or exceed each threshold; the voluntary industry complement to statutory catastrophic risk frameworks.
  - **Jailbreak:** A prompt or conversational technique that bypasses an AI model's safety filters, enabling elicitation of dangerous capability outputs the model is trained to refuse; universally present in tested frontier models as of 2025.
  - **Red Team:** An adversarial evaluation team that attempts to elicit dangerous capabilities through novel attack strategies, complementing automated benchmarks with human creativity and contextual reasoning.
  - **Threat Modelling:** Systematic analysis of plausible harm pathways from AI capability to mass harm event, identifying threat actors, attack vectors, capability requirements, and harm indicators; the strategic complement to narrow capability measurement.
  - **Counterfactual Baseline:** The capability level available to a malicious actor through existing means (public literature, internet search, expert consultation) without AI assistance, against which AI uplift is measured; the most challenging methodological element of uplift quantification.
  - **Global Catastrophic Risk (GCR):** Risk of harm at a civilisational or global scale, encompassing both potentially existential risks and severely disruptive but recoverable catastrophes; the broader category within which catastrophic AI risks are classified.
  - **Autonomous Behaviour Risk:** The risk that AI systems pursue goals in ways that evade human control, take unintended real-world actions, or self-replicate in ways that amplify harm beyond what the deploying human intended; distinguished from misuse risk (human-intended harm enabled by AI) by the absence of human authorisation.

  ## Research and Literature

  1. Bostrom, N. (2002). Existential Risks: Analysing Human Extinction Scenarios and Related Hazards. Journal of Evolution and Technology, 9(1).
  2. Ord, T. (2020). The Precipice: Existential Risk and the Future of Humanity. Bloomsbury Publishing.
  3. Amodei, D., Olah, C., Steinhardt, J., Christiano, P., Schulman, J., and Mané, D. (2016). Concrete Problems in AI Safety. arXiv:1606.06565.
  4. Hubinger, E., van Merwijk, C., Mikulik, V., Skalse, J., and Garrabrant, S. (2019). Risks from Learned Optimisation in Advanced Machine Learning Systems. arXiv:1906.01820.
  5. Phuong, M., et al. (2024). Evaluating Frontier Models for Dangerous Capabilities. DeepMind Technical Report. arXiv:2403.13793.
  6. Kumar, D., et al. / Enkrypt AI (2025). Quantifying CBRN Risk in Frontier Models. arXiv:2510.21133.
  7. Mazeika, M., et al. (2024). HarmBench: A Standardised Evaluation Framework for Automated Red Teaming. arXiv:2402.04249.
  8. Zhang, J. and Li, E. (2025). Emergency Response Measures for Catastrophic AI Risk. arXiv:2511.05526.
  9. Anthropic (2023; updated 2024). Responsible Scaling Policy. Anthropic Policy Document. anthropic.com.
  10. OpenAI (2025). Preparedness Framework (Updated April 2025). OpenAI Policy Document.
  11. Google DeepMind (2024). Frontier Safety Framework. Google DeepMind Technical Report.
  12. Meta AI (2024). Frontier AI Safety Commitments. Meta AI Policy Document.
  13. RAND Corporation (2025). Legal and Policy Approaches to Mitigate Catastrophic Harms from AI. RAND Research Report RRA4266-1.
  14. UK AI Security Institute (2025). Frontier AI Trends Report. AISI, December 2025. aisi.gov.uk/frontier-ai-trends-report.
  15. Future of Life Institute (2025). AI Safety Index: Winter 2025. FLI Report. futureoflife.org.
  16. National Academies of Sciences (2024). Assessing and Navigating Biosecurity Concerns and Benefits of Artificial Intelligence Use in the Life Sciences. DELS-BLS-24-04.
  17. California Legislature (2025). Senate Bill 53 (SB53): Artificial Intelligence Safety. Chapter [X], California Statutes 2025.
  18. European Parliament and Council (2024). Regulation (EU) 2024/1689 on Artificial Intelligence (EU AI Act). Official Journal of the European Union.
  19. CETaS / Alan Turing Institute (2026). International AI Safety Report 2026. Centre for Emerging Technology and Security, February 2026.
  20. METR (2025). Task-Completion Time Horizons of Frontier AI Models. METR Technical Report, March 2025.
  21. Wiener, J.B., Rogers, M.D., Graham, J.D., and Sand, P.H. (eds, 2011). The Reality of Precaution: Comparing Risk Regulation in the United States and Europe. RFF Press. (Classical PRA methodological foundation)
  22. Measurement Challenges in AI Catastrophic Risk Governance (2024). arXiv:2410.00608.
  23. METR (2024). Common Elements of Frontier AI Safety Policies. metr.org/common-elements.
  24. Evaluating AI Providers' Frontier Safety Frameworks (2024). arXiv:2512.01166.
  25. Long-Term Resilience Centre (2025). How the UK AI Bill Can Improve AI Security. longtermresilience.org.
  26. UK AI Regulation Framework (2026). UK House of Commons Library Research Briefing CBP-10003.
  27. AI Emergency Preparedness: Examining the Federal Government's Ability to Detect and Respond to AI-Related National Security Threats (2024). arXiv:2407.17347.
  28. CSER Cambridge (2023). Introduction to CSER's Work on Extreme Risks. Written Evidence to UK Parliamentary Committees. committees.parliament.uk/writtenevidence/21939.

- ### Provenance
  - sources:: arXiv:2510.21133 Enkrypt AI CBRN Risk Quantification; arXiv:2511.05526 Emergency Response Catastrophic AI Risk; AISI Frontier AI Trends Report (December 2025); California SB53 (September 2025); FLI AI Safety Index Winter 2025; RAND RRA4266-1 Legal and Policy Approaches; arXiv:2403.13793 Phuong et al. Dangerous Capabilities; arXiv:2410.00608 Measurement Challenges; metr.org/common-elements; CETaS International AI Safety Report 2026; CSER Cambridge Parliamentary Evidence 2023; longtermresilience.org UK AI Bill security; EU AI Act 2024/1689; arXiv:1606.06565 Amodei et al.; arXiv:1906.01820 Hubinger et al.
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm