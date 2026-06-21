public:: true

# Capability Forecasting

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:capability-forecasting",
  "@type": "Page",
  "title": "Capability Forecasting",
  "vc:slug": "capability-forecasting",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:capability-forecasting",
  "@type": "Class",
  "label": "Capability Forecasting",
  "definition": "Capability forecasting is the practice of predicting the future capabilities of AI systems before they are built or deployed, typically by extrapolating from scaling laws, benchmark trends, and historical progress. It aims to anticipate when models will reach particular performance thresholds so that safety, governance, and deployment decisions can be made proactively. Forecasts are inherently uncertain because of emergent behaviour and discontinuous jumps in capability.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance",
      "label": "AI Governance"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:scaling-laws",
        "label": "Scaling Laws"
      },
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:scaling-laws",
        "label": "Scaling Laws"
      },
      {
        "@id": "urn:ngm:class:evaluation-benchmarks-and-leaderboards",
        "label": "Evaluation benchmarks and leaderboards"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      },
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      },
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:emergent-capabilities",
        "label": "Emergent Capabilities"
      },
      {
        "@id": "urn:ngm:class:capability-evaluation",
        "label": "Capability Evaluation"
      },
      {
        "@id": "urn:ngm:class:foundation-model",
        "label": "Foundation Model"
      },
      {
        "@id": "urn:ngm:class:alignment",
        "label": "Alignment"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:emergent-capabilities",
        "label": "Emergent Capabilities"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Capability forecasting is the systematic practice of predicting the future performance, behaviours, and transformative threshold events of [[Artificial Intelligence]] systems before they are built or deployed, enabling proactive preparation by safety researchers, policymakers, and governance institutions. The discipline draws primarily on [[Scaling Laws]] — empirical power-law relationships between model parameters, training compute, training data, and resulting performance losses — to extrapolate likely capability levels at future compute scales. It is complemented by [[Benchmark Trend Analysis]], expert elicitation, biological anchors modelling, prediction market aggregation, and [[Model Evaluation]] of current systems as leading indicators of near-future capability. Capability forecasting treats AI progress as partly predictable: within a smooth scaling regime, held-out cross-entropy loss decreases as a predictable function of training compute and data volume following Kaplan et al. (2020) and Hoffmann et al. (2022) Chinchilla-style power-law fits, allowing practitioners to project loss and downstream performance across training budgets not yet executed. These extrapolations inform anticipatory [[AI Governance]] — estimating when capability thresholds relevant to [[Catastrophic Risk Assessment]], [[AI Safety]] policy, and regulatory intervention are likely to be crossed. Critical complications arise from [[Emergent Capabilities]] — discontinuous, non-linear jumps in performance that appear at sufficiently large scales on specific task families but cannot be predicted by smooth loss extrapolation — and from benchmark saturation, where frontier models exhaust the discriminatory power of existing evaluation suites faster than new benchmarks can be constructed and validated. By 2025–2026 the field had largely shifted from training-time compute scaling as the primary forecasting variable to a dual-axis framework also incorporating test-time compute (inference-time reasoning, sampling, tool use, and search), which permits capability gains without additional pre-training but does not appear in conventional scaling law fits. The uncertainty quantification component of capability forecasting — communicating confidence intervals, failure modes, and tail-risk scenarios — is increasingly regarded as co-equal in importance with point forecasts, because policymakers and safety engineers require not just central estimates but calibrated distributions over possible capability trajectories.

- ### Semantic Classification
  - owl-class:: ai:CapabilityForecasting
  - owl-role:: Concept | AnalyticalMethodology | GovernanceTool
  - owl-inferred:: ai:RiskAnticipationTool, ai:SafetyPlanningPrimitive, ai:FrontierModelAssessment
  - belongs-to-domain:: [[AI Governance]]
  - implemented-in-layer:: [[Model Evaluation]]

- ### Relationships
  - is-subclass-of:: [[AI Governance]], [[Risk Assessment]]
  - has-part:: [[Scaling Laws]], [[Benchmark Trend Analysis]], [[Emergent Capabilities]], [[Expert Elicitation]], [[Uncertainty Quantification]]
  - requires:: [[Scaling Laws]], [[Evaluation benchmarks and leaderboards]], [[Model Evaluation]], [[Training Data]], [[Compute Budget]]
  - enables:: [[Risk Assessment]], [[AI Safety]], [[Catastrophic Risk Assessment]], [[AI Regulation]], [[Responsible Scaling Policy]]
  - implements:: [[Biological Anchors Model]], [[Expert Elicitation]], [[Prediction Markets]]
  - depends-on:: [[Foundation Model]], [[Scaling Laws]], [[Evaluation benchmarks and leaderboards]], [[Compute Budget]]
  - supports:: [[AI Governance]], [[AI Safety]], [[Catastrophic Risk Assessment]], [[AI Alignment]], [[Human Oversight]]
  - uses:: [[Scaling Laws]], [[Model Evaluation]], [[Evaluation benchmarks and leaderboards]], [[Expert Elicitation]], [[Prediction Markets]], [[Benchmark Trend Analysis]]
  - contrasts-with:: [[Emergent Capabilities]], [[Benchmark Saturation]]
  - related-to:: [[Emergent Capabilities]], [[Capability Evaluation]], [[Foundation Model]], [[Alignment]], [[Responsible Scaling Policy]], [[Dangerous Capability Evaluation]], [[Transformative AI]], [[AI Timelines]], [[EpochAI]], [[Metaculus]]
  - standardized-by:: [[NIST AI RMF]], [[EU AI Act]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:hasPart ai:ScalingLaws))
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:hasPart ai:BenchmarkTrendAnalysis))
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:hasPart ai:EmergentCapabilities))
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:hasPart ai:ExpertElicitation))
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:hasPart ai:UncertaintyQuantification))
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:hasPart ai:PredictionMarkets))
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:hasPart ai:ThresholdEstimation))
  ## Dependency Relationships
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:requires ai:ScalingLaws))
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:requires ai:ModelEvaluation))
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:requires ai:EvaluationBenchmarks))
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:requires ai:ComputeBudget))
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:requires ai:TrainingData))
  ## Capability Relationships
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:enables ai:RiskAssessment))
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:enables ai:AISafety))
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:enables ai:CatastrophicRiskAssessment))
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:enables ai:AIRegulation))
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:enables ai:HumanOversight))
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:enables ai:AnticipatorGovernance))
  ## Implementation Relationships
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:implements ai:BiologicalAnchorsModel))
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:implements ai:ExpertElicitation))
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:implements ai:PredictionMarkets))
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:implements ai:BenchmarkTrendExtrapolation))
  ## Reduction Relationships
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:reducesTo ai:ScalingLaws))
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:reducesTo ai:ThresholdEstimation))
      SubClassOf(ai:CapabilityForecasting
        ObjectSomeValuesFrom(ai:reducesTo ai:UncertaintyQuantification))

  ## About

  Capability forecasting emerged as a recognised sub-discipline of [[AI Safety]] and [[AI Governance]] in response to the practical question: when will AI systems become capable enough to cross safety-relevant thresholds, and what can policymakers and safety engineers do to prepare?

  The discipline draws its technical foundations from empirical [[Scaling Laws]] research:
  - The OpenAI Kaplan et al. (2020) scaling laws paper established smooth power-law relationships between training compute and held-out language modelling loss across five orders of magnitude.
  - The DeepMind Hoffmann et al. (2022) Chinchilla paper corrected earlier over-parameterised models, establishing the compute-optimal training formula (equal scaling of model parameters and training tokens).
  - Together these relationships provide the quantitative backbone for extrapolating: if loss follows L(C) ≈ A/C^α across many orders of magnitude, then given planned training compute budgets, loss at future training runs can be predicted.
  - If downstream task performance is well-calibrated against loss, downstream capability can be forecast from planned training runs before those runs are executed.

  The practical difficulty is that "downstream capability" at the task level does not always scale smoothly with loss:
  - [[Emergent Capabilities]] appear as discontinuous jumps on specific benchmarks at sufficient scale, defying smooth extrapolation from training loss metrics.
  - Wei et al. (2022) documented more than 100 emergent abilities in large language models — from multi-step reasoning to chain-of-thought problem solving — appearing abruptly above threshold compute scales.
  - Schaeffer et al. (2023) countered that apparent emergence is an artefact of discrete evaluation metrics; continuous metrics reveal smooth scaling throughout.
  - This debate remains fundamental: if emergence is real and discontinuous, forecasting is inherently limited by the impossibility of predicting phase transitions; if it is metric-artefactual, reliable extrapolation is in principle achievable.

  The institutional infrastructure for capability forecasting developed significantly from 2022 onwards:
  - **EpochAI**: a non-profit research institute funded by Open Philanthropy and Jaan Tallinn, maintains the most comprehensive public database of AI training runs, tracking compute trends, parameter counts, and benchmark performance trajectories.
  - **Epoch's direct approach**: uses observed scaling laws and empirical measurements to directly predict performance improvements, complementing Ajeya Cotra's biological anchors framework.
  - **Biological anchors (Cotra 2020/2022)**: treats computational cost of evolution or a human lifetime as upper bounds on training compute required for transformative AI.
  - **EpochAI GATE model**: as of late 2025, places the median transformative AI estimate around 2033 under baseline compute scaling.
  - **Samotsvety superforecasters**: assigned a 28% probability of AGI by 2030 as of early 2026, following significant timeline compression in 2024–2025.
  - **Metaculus community**: as of early 2026, assigned 25% probability of AGI by 2029 and 50% by 2033 — compressed from a 50-year median in 2020.
  - **METR (Model Evaluation and Threat Research)**: constructed a particularly influential empirical approach using task completion time horizons, measuring the longest autonomous task frontier models can reliably complete, then tracking how this time horizon grew across model generations.
  - METR's March 2025 analysis found this time horizon growing exponentially from 2019 to 2025, suggesting the ability to complete one-month-long autonomous software tasks may arrive in the 2027–2030 range.

  The policy use of capability forecasting has accelerated in 2024–2026:
  - AI lab responsible scaling policies (Anthropic's RSP, OpenAI's Preparedness Framework, Google DeepMind's Frontier Safety Framework) all include capability threshold definitions operationalised through evaluation benchmarks.
  - Capability forecasting enables labs and regulators to project when these thresholds might be reached, informing proactive preparation for required safety measures.
  - The UK AI Security Institute (AISI) incorporated capability trend extrapolation in its Frontier AI Trends Report (December 2025), noting that cyber autonomy tasks requiring over 10 years of human experience were successfully completed by AI for the first time in 2025.
  - AISI also documented that autonomy task completion rates above one hour exceeded 40% for advanced models by mid-2025.
  - These empirical trajectory findings directly enable [[Catastrophic Risk Assessment]] by grounding regulatory threshold definitions in observed capability growth rates.

  ## Components / Architecture

  **1. Scaling-law extrapolation**

  The primary quantitative method, fitting power-law models to observed loss-versus-compute curves:
  - Standard form: L(C) ≈ A·C^(-α), where α is the estimated scaling exponent typically in the range 0.05–0.30 for language models.
  - Uncertainty in extrapolation grows with extrapolation distance; forecast error distributions widen substantially beyond the range of observed training runs.
  - Requires accurate accounting of training [[Compute Budget]] in floating-point operations (FLOPs), careful standardisation of evaluation conditions, and domain-specific exponent estimation.
  - Multi-axis fits across model parameters (N), training tokens (D), and compute (C = 6ND for standard transformers) decompose contributions from each axis.
  - Architecture improvements (Mixtures of Experts, attention variants, improved tokenisation) can shift the power-law coefficient, introducing discontinuities into naive compute extrapolation.
  - The Chinchilla compute-optimal frontier identifies the Pareto-optimal (N, D) allocation for each compute budget, enabling forecast of the optimal model configuration at future compute scales.

  **2. Benchmark trend extrapolation**

  Tracks performance trajectories on standardised evaluation benchmarks across model generations:
  - ForecastBench (ICLR 2025) provides a systematic framework for benchmark trend extrapolation methodology.
  - Benchmark saturation is a critical constraint: by early 2025, benchmarks that were frontier challenges in early 2024 — including GPQA (graduate-level scientific reasoning) — were being saturated within months of introduction.
  - METR's RE-Bench (Research Engineering Benchmark) and SWE-Bench (software engineering) are canonical examples: forecasts placed SWE-Bench saturation in 2026.
  - Benchmark saturation dynamics require forecasters to simultaneously project model performance improvement and benchmark discrimination lifetime — a two-dimensional forecasting problem.
  - The "Forecasting Frontier Language Model Agent Capabilities" paper (arXiv:2502.15850, 2025) demonstrated that aggregated benchmark performance can be predicted with reasonable accuracy but individual task performance cannot.

  **3. Expert elicitation and prediction markets**

  Structured aggregation of expert judgements complements quantitative extrapolation:
  - **Metaculus**: community forecasting aggregating predictions from thousands of registered forecasters with calibration tracking; assigned 25% probability AGI by 2029 as of early 2026.
  - **Samotsvety**: high-accuracy superforecasting group specialising in technology timelines; 28% probability AGI by 2030 as of early 2026.
  - **Kalshi, Polymarket, Manifold**: prediction markets providing incentive-aligned probability estimates for specific capability events.
  - **AI Impacts survey**: annual survey of machine learning researchers on capability timeline expectations.
  - **RAND AI Expert Panel**: structured expert elicitation using Delphi methodology for catastrophic risk probability estimation.
  - The diversity of methodology across sources, and their partial agreement and disagreement, provides calibration of forecast uncertainty.

  **4. Biological anchors modelling**

  Cotra's biological anchors framework (2020, updated 2022) anchors transformative AI compute requirements in biological estimates:
  - **Evolution anchor**: number of floating-point operations performed by evolution to produce a human brain.
  - **Lifetime anchor**: number performed by a human brain over a lifetime of learning.
  - **Neural network anchors**: scale model sizes to match brain parameter counts using observed scaling law relationships.
  - The approach provides reference class forecasting — grounding uncertain AI timelines in biological facts better understood than AI R&D trajectories.
  - Key limitation: uncertainty about how computational efficiency of biological evolution relates to deep learning training efficiency spans many orders of magnitude.

  **5. Test-time compute forecasting**

  An emerging extension addressing the shift from training-compute-dominated to test-time-compute-dominated progress:
  - Chain-of-thought reasoning (Wei et al., 2022), tree-of-thought search (Yao et al., 2023), and formally verified reasoning (DeepSeek-R1, 2025; Gemini 2.5, 2025) showed that inference-time compute allocation substantially improves performance on reasoning tasks.
  - METR's task completion time horizon framework naturally incorporates test-time compute effects because the metric measures what a model can achieve with arbitrary compute during generation.
  - Forecasting test-time compute scaling requires modelling not just model weights but inference serving infrastructure and economic feasibility of extended compute-intensive inference.
  - METR's 2026 analysis found exponential growth in time horizon from 2019 to 2025, with preliminary model suggesting 99% AI R&D automation around 2032.

  **6. Threshold estimation and dangerous capabilities evaluation**

  Operationalises capability forecasting for safety policy:
  - Involves estimating when specific dangerous capabilities will be reached — "provides serious uplift to CBRN weapon synthesis" or "can conduct autonomous cyberattacks at nation-state level."
  - Anthropic's Responsible Scaling Policy defines thresholds as AI Safety Levels (ASL-2, ASL-3, ASL-4).
  - Operationalised via [[Dangerous Capability Evaluation]] benchmarks including WMDP (Weapons of Mass Destruction Proxy), HarmBench, and biological uplift assessments with domain expert consultants.
  - Capability forecasting enables labs to project when ASL-3 or ASL-4 thresholds might be approached and to prepare required safety measures in advance.
  - California SB53 (September 2025) legislated analogous framework requirements for all large frontier AI developers.

  ## Use Cases / Major Families

  **Responsible scaling policies (RSPs):** AI labs use internal capability forecasting to set the schedule and criteria for upgrading their safety measures as capability thresholds are approached. Anthropic's RSP defines training-run triggers (compute scale approaching a threshold) and evaluation triggers (benchmark performance approaching a dangerous-capability threshold) that activate additional safety evaluation requirements. Capability forecasting enables calculation of: "given planned compute scaling, when will the next training run plausibly hit the ASL-3 threshold?" — providing lead time to prepare the required safety mitigations before deployment. OpenAI's Preparedness Framework (updated April 2025) similarly uses capability forecasts to schedule ahead of evaluations against "critical" thresholds (defined as capabilities enabling mass casualties or billions of dollars in economic damage). California's SB53 (signed September 2025) requires all large frontier AI developers to publish and adhere to frameworks describing how dangerous capabilities are assessed and what precautions trigger when thresholds are crossed — effectively legislating the capability forecasting and threshold-management function that RSPs implement voluntarily.

  **Regulatory compute thresholds:** The EU AI Act uses compute-based capability thresholds (originally set at 10^25 floating-point operations) as a proxy for frontier model status that triggers enhanced regulatory requirements. Capability forecasting informs where to set these thresholds and how they should evolve as the capability frontier advances, ensuring they remain calibrated to actual capability levels rather than becoming obsolete. The UK AI Security Institute has worked with DSIT to inform the forthcoming UK AI Bill's approach to capability thresholds, expected to draw on AISI's empirical evaluation findings and trend extrapolations from the Frontier AI Trends Report.

  **Export control and compute governance:** US Bureau of Industry and Security (BIS) rules restricting export of high-performance AI accelerators to adversarial nations use compute thresholds that require capability forecasting to calibrate. If the threshold is set too high relative to capability, controls are ineffective; too low and they impede legitimate research. EpochAI's compute tracking database is a key input to these calibrations. International discussions on AI compute governance through the G7 Hiroshima AI Process, the OECD AI Policy Observatory, and emerging multilateral AI governance bodies all reference capability forecasting to justify and calibrate compute control proposals.

  **Red-teaming scheduling and evaluation prioritisation:** Safety engineering teams use capability forecasts to prioritise which capability domains require red-teaming before the next training run. If a capability forecast indicates biological synthesis assistance will cross an uplift threshold within two training generations, this domain receives priority evaluation resources. METR's evaluation pipeline operationalises this by tracking capability growth in domains including autonomous cyberattack, biological synthesis assistance, and long-horizon autonomous action, providing trend data that informs where to concentrate safety evaluation effort.

  **Academic and philanthropic resource allocation:** Foundations including Open Philanthropy, Survival and Flourishing Fund, and the Arc Institute use capability forecasting as an input to grant-making strategies for AI safety research. If capability forecasts suggest transformative AI within ten years, safety research funding urgency is correspondingly high. The major AI safety funding surge of 2023–2025 (Anthropic $7.3B Series E, 2024; UK government £100M AI Safety Research Grant programme; US AI Safety Institute budget expansion) reflects institutions acting on capability forecasts that compressed expected timelines substantially.

  **Insurance, financial risk, and scenario planning:** Financial institutions, re-insurance companies, and national risk registries are beginning to incorporate AI capability forecasts into scenario planning. The potential for AI to rapidly automate large fractions of knowledge work, enable sophisticated cyber fraud, or accelerate technology competition creates economic risks that require forward-looking capability assessment. Lloyd's of London and Swiss Re have begun developing AI risk modelling frameworks that incorporate capability forecasting as a core input, analogous to climate scenario analysis under TCFD recommendations.

  ## Academic Context

  The intellectual foundations of AI capability forecasting trace to I.J. Good's (1965) concept of an "intelligence explosion" — the feedback loop by which a sufficiently intelligent machine could improve its own design, triggering recursive capability growth — which introduced the idea that AI capability trajectories might be discontinuous and difficult to forecast from gradual extrapolation.

  **Foundational scaling law work:**
  - Kaplan et al. (2020, "Scaling Laws for Neural Language Models," arXiv:2001.08361) demonstrated power-law scaling across five orders of magnitude in compute, parameter count, and data — the quantitative backbone of capability extrapolation.
  - The surprise finding that smooth power laws held so reliably motivated the subsequent scaling-law research programme.
  - Hoffmann et al. (2022, "Training Compute-Optimal Large Language Models," arXiv:2203.15556 — Chinchilla) refined the compute allocation formula, revealing that earlier GPT-3-scale models were massively undertrained, and providing a practical framework for predicting compute-optimal model configurations at future compute budgets.

  **Emergence debate:**
  - Wei et al. (2022, "Emergent Abilities of Large Language Models," Transactions on Machine Learning Research) documented more than 100 task families where models gained ability to solve problems only above a threshold scale, with near-zero performance below and high performance above.
  - Schaeffer et al. (2023, "Are Emergent Abilities of Large Language Models a Mirage?", NeurIPS 2023) argued that apparent emergence is an artefact of discrete metrics; continuous metrics reveal smooth scaling throughout.
  - Arora and Goyal (2023, arXiv:2307.15936) provided a theory of emergence grounded in the geometry of feature learning in high-dimensional spaces.
  - This debate remains unresolved and constitutes the central epistemological challenge for smooth-extrapolation capability forecasting.

  **Transformative AI timelines research:**
  - Cotra (2020; updated 2022, Open Philanthropy) provided the first systematic probabilistic forecast of transformative AI timelines using biological anchors, with the 2022 update compressing the median timeline substantially.
  - The paper is notable for explicit uncertainty quantification and scenario modelling, establishing structured AI capability forecasting as a formal analytical practice.
  - Epoch AI's "Literature Review of Transformative Artificial Intelligence Timelines" (2023) systematically catalogued prior forecasting approaches, their assumptions, and their disagreements.

  **Autonomy evaluation and forecasting:**
  - Kinniment et al. (2023, arXiv:2312.11671) established foundational methodology for autonomy evaluation using realistic task scenarios; METR's subsequent work refined and scaled this approach.
  - METR (2025) introduced the task completion time horizon as the canonical empirical metric for AI autonomy capability, finding exponential growth in time horizon from 2019 to 2025.
  - Phuong et al. (2024, arXiv:2403.13793) established the methodology for dangerous capability evaluations that bridge capability forecasting with [[Catastrophic Risk Assessment]], defining evaluation protocols for autonomous replication, cyberattack capability, and CBRN uplift.
  - "Forecasting Frontier Language Model Agent Capabilities" (arXiv:2502.15850, 2025) synthesised benchmark trend extrapolation and autonomy forecasting, demonstrating that aggregated benchmark performance can be predicted but individual task performance cannot.
  - ForecastBench (Dahl et al., ICLR 2025) provided standardised methodology and evaluation criteria for AI forecasting capability, enabling systematic comparison of forecasting approaches.

  **UK academic contributions:**
  - Cambridge Centre for the Study of Existential Risk (CSER): applies structured expert elicitation to AI risk timelines and has contributed to UK government capability assessment methodology.
  - Oxford Future of Humanity Institute (closed 2024, with key researchers dispersing to Anthropic, new independent institutes, and academia): produced foundational early work on AI timelines under Nick Bostrom, Toby Ord, and Carl Shulman.
  - Toby Ord's "The Precipice" (2020) provided the most systematic public-facing analysis of AI existential risk probability estimates, including capability forecasting inputs.
  - Oxford's Global Priorities Institute continues AI policy and long-term risk research following FHI's closure.

  ## Current Landscape (2026)

  The capability forecasting landscape in 2026 is characterised by three defining features: rapid benchmark saturation, a paradigm shift from training-time to test-time compute, and growing institutional formalisation of forecasting as a governance input.

  **Benchmark saturation acceleration:**
  - Benchmarks posing frontier challenges in early 2024 — GPQA Diamond, AIME competition mathematics, PhD-level chemistry reasoning — were largely saturated by leading models within twelve to eighteen months.
  - This saturation race has driven development of increasingly difficult evaluation suites as of mid-2026:
    - METR's RE-Bench: research engineering tasks requiring weeks of expert work
    - Long-Horizon Tasks: tasks taking humans days to months
    - FRONTIER-Bench: frontier scientific research tasks requiring graduate-level expertise
  - The Frontier AI Trends Report (AISI, December 2025) noted that by mid-2025, advanced models could complete software autonomy tasks taking a human at least one hour in over 40% of cases.
  - The first model to successfully complete expert-level cyber tasks requiring more than ten years of human professional experience was evaluated in 2025.

  **Test-time compute paradigm shift:**
  - Catalysed by o1-series models (OpenAI, 2024), DeepSeek-R1 (2025), and Gemini 2.5 Ultra (2025), which achieve task performance substantially above what pre-training loss alone would predict.
  - Complicated training-compute-based capability forecasting by adding a second scaling dimension not captured in pre-training loss curves.
  - METR's time-horizon forecasting framework adapts to this by measuring task completion capability empirically rather than deriving it from loss metrics.
  - Requires comprehensive empirical evaluation of each new model generation rather than pure extrapolation, increasing the cost and frequency of required assessments.
  - METR's February 2026 analysis suggested that under current trends, 99% AI R&D automation may arrive around 2032.

  **Forecast estimate current state (early 2026):**
  - EpochAI GATE model: median transformative AI date approximately 2033 under baseline compute scaling, earlier under accelerated or breakthrough scenarios.
  - Samotsvety superforecasters: 28% probability of AGI by 2030, revised substantially earlier following 2024–2025 capability jumps.
  - Metaculus: 25% probability of AGI by 2029, 50% by 2033 — compressed from a 50-year median in 2020.
  - Kalshi contributors: approximately 40% probability of OpenAI achieving AGI by 2030 (January 2026).
  - Polymarket: 9% probability of AGI by 2027 (early 2026).

  **Regulatory incorporation:**
  - California SB53 (September 2025): requires all large frontier AI developers to publish frameworks describing dangerous capability assessment and threshold management.
  - EU AI Act progressive implementation: mandatory framework publication requirements made previously internal capability forecasting methodology externally visible and subject to public scrutiny.
  - UK AI Bill (expected Parliamentary introduction 2026–2027): expected to include statutory capability evaluation requirements, drawing on AISI's evaluation methodology and capability trend data.
  - The DSIT committed in January 2025 to establishing AISI as a statutory body with permanent institutional footing for capability assessment.

  ## UK Context

  The UK has positioned capability forecasting as a core function of frontier AI governance through a combination of institutional investment, evaluation methodology development, and regulatory integration.

  **AI Security Institute (AISI):**
  - The primary UK government capability assessment institution, established November 2023 as AI Safety Institute, rebranded to AI Security Institute February 2025.
  - Has conducted systematic capability evaluations across more than thirty frontier models since establishment.
  - Published the most comprehensive public capability trend assessment by any government body: the Frontier AI Trends Report (December 2025).
  - Coverage includes dangerous capability trajectories in: autonomous cyber operation, biological synthesis assistance, long-horizon task autonomy, and manipulation and persuasion.
  - Evaluation frameworks used: Inspect (open-source Python evaluation harness), InspectCyber (cyber capability evaluation), ControlArena (control protocol testing).
  - DSIT committed in January 2025 to establishing AISI as a statutory body, with the UK AI Bill expected to include statutory capability evaluation requirements.

  **Cambridge academic infrastructure:**
  - **Centre for the Study of Existential Risk (CSER)**: produces academic research on AI risk timelines and risk assessment methodology; applies structured expert elicitation and scenario analysis; contributed written evidence to Parliamentary committees on AI risk.
  - **Leverhulme Centre for the Future of Intelligence (CFI)**: addresses capability forecasting in the context of societal impact analysis, examining when AI systems reach thresholds relevant to labour market disruption, democratic integrity, and information ecosystem health.

  **Oxford research capacity:**
  - **Former Future of Humanity Institute (closed 2024)**: produced the key early academic work on AI timelines under Nick Bostrom, Toby Ord, and Carl Shulman; Toby Ord's "The Precipice" (2020) provided the most systematic public-facing analysis of AI existential risk probability including capability forecasting inputs.
  - **Global Priorities Institute (Oxford)**: continues AI policy and long-term risk research following FHI's closure.

  **Northern English and Scottish universities:**
  - Edinburgh's machine learning research group contributes to uncertainty quantification methods and Bayesian approaches to extrapolation under model uncertainty — directly applicable to capability forecast confidence interval estimation.
  - Manchester's Data Science Institute contributes to benchmark design and evaluation methodology.
  - The UKRI Trustworthy Autonomous Systems (TAS) Hub (led by Nottingham) produced research on safety assurance for autonomous systems applicable to capability assessment frameworks.

  **National AI research infrastructure:**
  - The Alan Turing Institute, as the UK's national AI research body, has published analyses of AI capability trends through its Centre for Emerging Technology and Security (CETaS).
  - CETaS produced the International AI Safety Report 2026 — a landmark synthesis drawing on contributions from researchers across thirty countries, with major findings on capability trajectories and their safety implications.
  - The UK's Long-Term Resilience Centre has published specific recommendations for how the UK AI Bill should incorporate capability forecasting into its regulatory framework, recommending a "preparedness framework" structure analogous to Anthropic's RSP.

  ## Future Directions (2026–2030)

  **Automated benchmark generation and evaluation:** The benchmark saturation problem — evaluation suites being exhausted by frontier models faster than they can be constructed — motivates automated benchmark generation methods that can produce novel, calibrated evaluation tasks at scale. Language-model-assisted benchmark creation (using AI to generate new evaluation tasks in validated formats) and adversarial evaluation design (creating tasks specifically targeting current model weaknesses) are active research directions. The goal is evaluation infrastructure that can maintain discriminatory power indefinitely, rather than requiring constant manual benchmark development. Key challenges include ensuring that AI-generated benchmark tasks are valid, not contaminated by training data, and at the appropriate difficulty level — all of which are easy to verify for human-constructed benchmarks but harder for automated generation.

  **Integrating test-time compute into scaling forecasts:** The transition to test-time compute as a primary capability driver requires new forecasting frameworks that model both pre-training compute and inference budget jointly. Theoretical work on the computation-capability relationship under extended inference-time compute (including Markov chain Monte Carlo search, tree-of-thought, and tool-augmented reasoning) is needed to provide principled scaling laws for the inference-time compute dimension. Empirical data from the o1/o3/Gemini 2.5 generation is beginning to enable systematic study of test-time scaling relationships. METR's 2026 analysis suggesting 99% AI R&D automation by approximately 2032 reflects these accelerated trajectories when test-time compute scaling is incorporated alongside training-time scaling.

  **Dangerous capability threshold calibration:** As capability evaluations mature, the specific thresholds defined in RSPs and regulatory frameworks require empirical calibration against actual harm potential. The question "does capability X provide serious uplift to CBRN weapon development?" requires domain expert input (from biosecurity specialists, chemists, cyber security researchers) combined with empirical evaluation methodology. WMDP and the biological uplift assessments conducted by AISI and Anthropic represent the current state of this calibration; the 2027–2030 period is likely to see significant refinement of threshold definitions as evaluation methodology matures and as models demonstrate more complex and novel dangerous capabilities not anticipated in initial threshold definitions.

  **Forecast aggregation and calibration science:** The proliferation of capability forecasting sources — scaling law extrapolation, biological anchors, expert elicitation, prediction markets, empirical task measurement — creates an aggregation problem: how should these sources be combined to produce well-calibrated probability distributions over capability milestones? The Forecasting Research Institute and Epoch AI are developing systematic aggregation methodologies, drawing on Bayesian model averaging and superforecasting ensemble methods. Well-calibrated aggregate forecasts are essential for governance use cases where decision-makers need reliable confidence intervals rather than point estimates. Structured deliberation — the process of sharing information and reasoning across forecaster groups before individual forecasts are made — has been shown to improve calibration in human forecasting teams and is being explored as a methodology for AI capability forecast aggregation.

  **Agent capability forecasting:** As AI increasingly operates in agentic settings — orchestrating multi-step workflows, taking actions with real-world consequences, using tools and APIs — capability forecasting must extend from single-model performance on isolated tasks to agent-system performance on extended, multi-step, real-world tasks. This requires new evaluation frameworks, new theoretical models of agent capability scaling, and new empirical data on how agent capabilities scale with component model capabilities. METR's task time horizon framework is the leading approach to date but requires substantial extension for compound AI system architectures that combine multiple models with tool use, memory, and external knowledge retrieval.

  **Societal impact capability thresholds:** Alongside safety-critical capability thresholds (CBRN uplift, cyberattack autonomy), governance bodies increasingly need capability forecasts for socio-economic thresholds: when will AI automate 10%, 50%, 90% of software engineering tasks? When will AI systems be capable of autonomous scientific research at PhD level or above? When will AI-generated media reach the point where synthetic and authentic content are indistinguishable at population scale? These thresholds are relevant to labour market policy, education system design, and democratic integrity, requiring capability forecasting to engage with social science methodology alongside its technical toolkit.

  ## Key Terminology

  - **Scaling Law:** A power-law relationship between model training resources (compute, parameters, data) and performance metrics (typically cross-entropy loss), forming the primary quantitative tool of capability forecasting.
  - **Compute Budget (C):** The total floating-point operations used in training a model, typically measured in FLOPs (floating-point operations) or FLOP equivalents; the primary axis along which training-time capability forecasts are made.
  - **Emergent Capability:** A task performance that appears only above a threshold model scale, potentially posing a discontinuous prediction challenge for smooth-extrapolation forecasting.
  - **Uplift:** The capability increase an AI system provides to a malicious actor beyond what they could achieve through existing means without AI assistance; the primary harm-relevance criterion in dangerous capability evaluation.
  - **AI Safety Level (ASL):** Anthropic's classification system for AI models based on their dangerous capabilities, from ASL-1 (no meaningful capability uplift) through ASL-4 (autonomous civilisational-scale harm potential), operationalising capability thresholds as deployment triggers.
  - **Transformative AI (TAI):** AI with sufficiently broad capabilities and autonomous reasoning to cause transformative changes in economic productivity, scientific progress, and societal organisation, typically used as the target event in long-range capability forecasting.
  - **Benchmark Saturation:** The state in which a model's performance on a benchmark reaches the performance ceiling (maximum possible score), ending the benchmark's discriminatory value for capability assessment.
  - **Test-Time Compute:** Compute used during inference (generation) rather than training, including extended chain-of-thought reasoning, tree-of-thought search, and tool use; increasingly important as a capability growth driver independent of pre-training scale.
  - **Biological Anchors:** A reference class forecasting approach to AI timelines that grounds compute requirement estimates in biological facts about brains and evolution, providing an alternative to pure trend extrapolation.
  - **Task Completion Time Horizon:** METR's empirical metric measuring the longest autonomous task a frontier model can reliably complete without human intervention, used as a leading indicator of AI autonomy capability and tracked as a proxy for capability level across model generations.

  ## Research and Literature

  1. Kaplan, J., McCandlish, S., Henighan, T., Brown, T.B., Chess, B., Child, R., Gray, S., Radford, A., Wu, J., and Amodei, D. (2020). Scaling Laws for Neural Language Models. arXiv:2001.08361.
  2. Hoffmann, J., Borgeaud, S., Mensch, A., Buchatskaya, E., Cai, T., Rutherford, E., de Las Casas, D., Hendrycks, D., Welbl, J., Clark, A., Hennigan, T., Noland, E., Millican, J., van den Driessche, G., Damoc, B., Guy, A., Osindero, S., Simonyan, K., Elsen, E., Rae, J.W., Vinyals, O., and Sifre, L. (2022). Training Compute-Optimal Large Language Models. arXiv:2203.15556.
  3. Wei, J., Tay, Y., Bommasani, R., Raffel, C., Zoph, B., Borgeaud, S., Yogatama, D., Bosma, M., Zhou, D., Miculivicius, V., Narang, S., Chowdhery, A., Le, Q., Sutton, C., and Fedus, W. (2022). Emergent Abilities of Large Language Models. Transactions on Machine Learning Research.
  4. Schaeffer, R., Miranda, B., and Koyejo, S. (2023). Are Emergent Abilities of Large Language Models a Mirage? NeurIPS 2023.
  5. Cotra, A. (2020, updated 2022). Forecasting Transformative AI with Biological Anchors. Open Philanthropy Technical Report.
  6. METR (2025). Task-Completion Time Horizons of Frontier AI Models. METR Technical Report, March 2025. metr.org/time-horizons.
  7. Kinniment, M., Shlegeris, B., Denison, C., Perez, E., Schneider, J., Lim, S., Bai, Y., and Irving, G. (2023). Evaluating Language-Model Agents on Realistic Autonomous Tasks. arXiv:2312.11671.
  8. Dahl, M., et al. (2025). ForecastBench: A Dynamic Benchmark of AI Forecasting Capability. ICLR 2025.
  9. Phuong, M., Aitchison, M., Catt, E., Dziedzic, A., Farquhar, S., Elinas, P., Fokkens, A., Fortunato, M., Freeman, R., Hawkins, R., He, C., Holte, C., Hutter, F., Iyer, S., Koëter, S., Loos, A., Maddison, C.J., March, T., Mathewson, K., Muelling, K., Ramapuram, J., Rowley, J., Sherwood, D., Siddiqui, A., Slatyer, T., Spoelstra, E., Stasinopoulos, M., Sullivan, K., Szepesvari, C., and Voth, J. (2024). Evaluating Frontier Models for Dangerous Capabilities. DeepMind Technical Report. arXiv:2403.13793.
  10. Epoch AI (2025). GATE: Generative AI Timeline Estimation. Epoch AI Research. epoch.ai/topics/future-of-ai.
  11. Epoch AI (2023). Literature Review of Transformative Artificial Intelligence Timelines. epoch.ai/blog.
  12. OpenAI (2025). Preparedness Framework (Updated April 2025). OpenAI Policy Document.
  13. Anthropic (2023; updated 2024). Responsible Scaling Policy. Anthropic Policy Document.
  14. Google DeepMind (2024). Frontier Safety Framework. Google DeepMind Technical Report.
  15. UK AI Security Institute (2025). Frontier AI Trends Report. AISI, December 2025. aisi.gov.uk/frontier-ai-trends-report.
  16. Zhang, J., and Li, E. (2025). Emergency Response Measures for Catastrophic AI Risk. arXiv:2511.05526.
  17. Ruan, Y., et al. (2024). Identifying the Risks of LM Agents with an LM-Emulated Sandbox. arXiv:2309.15817.
  18. Samotsvety Forecasting Group (2026). AI Timelines Update: January 2026. AI Futures Model blog.aifutures.org.
  19. Bostrom, N. (2014). Superintelligence: Paths, Dangers, Strategies. Oxford University Press.
  20. Ord, T. (2020). The Precipice: Existential Risk and the Future of Humanity. Bloomsbury.
  21. Bommasani, R., et al. (2021). On the Opportunities and Risks of Foundation Models. arXiv:2108.07258.
  22. Ganguli, D., et al. (2022). Predictability and Surprise in Large Generative Models. ACM FAccT 2022.
  23. Muennighoff, N., et al. (2023). Scaling Data-Constrained Language Models. NeurIPS 2023.
  24. DeepSeek (2025). DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning. DeepSeek Technical Report.
  25. Arora, S. and Goyal, A. (2023). A Theory for Emergence of Complex Skills in Language Models. arXiv:2307.15936.
  26. METR (2026). A Simpler AI Timelines Model Predicts 99% AI R&D Automation in ~2032. METR Notes, February 2026. metr.org/notes.
  27. CETaS / Alan Turing Institute (2026). International AI Safety Report 2026. Centre for Emerging Technology and Security.
  28. Shulman, C. (2022). Forecasting AI Progress: Perspectives on Timelines to Transformative AI. Open Philanthropy Discussion.

- ### Provenance
  - sources:: Kaplan et al. 2020 Scaling Laws (arXiv:2001.08361); Hoffmann et al. 2022 Chinchilla (arXiv:2203.15556); Wei et al. 2022 Emergent Abilities; Cotra 2022 Biological Anchors (Open Philanthropy); METR Time Horizons Report (March 2025); AISI Frontier AI Trends Report (December 2025); EpochAI epoch.ai/topics/future-of-ai; arXiv:2502.15850 Forecasting Frontier LM Agent Capabilities; Samotsvety AI Futures Update (January 2026); CETaS International AI Safety Report 2026; arxiv.org/abs/2511.05526 Emergency Response Catastrophic AI Risk; arxiv.org/pdf/2505.21664 AI Reliability Research Priorities
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
