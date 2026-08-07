public:: true

# AI Evaluation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ai-evaluation",
  "@type": "Page",
  "vc:slug": "ai-evaluation",
  "title": "AI Evaluation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:evaluation-benchmarks-and-leaderboards", "vc:label": "Evaluation Benchmarks and Leaderboards"},
    {"@id": "urn:visionflow:linked:evaluation-metric", "vc:label": "Evaluation Metric"},
    {"@id": "urn:visionflow:linked:benchmark-contamination", "vc:label": "Benchmark Contamination"},
    {"@id": "urn:visionflow:linked:benchmark-saturation", "vc:label": "Benchmark Saturation"},
    {"@id": "urn:visionflow:linked:human-preference-evaluation", "vc:label": "Human Preference Evaluation"},
    {"@id": "urn:visionflow:linked:llm-as-judge", "vc:label": "LLM-as-Judge"},
    {"@id": "urn:visionflow:linked:red-teaming", "vc:label": "Red-Teaming"},
    {"@id": "urn:visionflow:linked:capability-elicitation", "vc:label": "Capability Elicitation"},
    {"@id": "urn:visionflow:linked:dynamic-evaluation", "vc:label": "Dynamic Evaluation"},
    {"@id": "urn:visionflow:linked:mmlu", "vc:label": "MMLU"},
    {"@id": "urn:visionflow:linked:helm", "vc:label": "HELM"},
    {"@id": "urn:visionflow:linked:humanitys-last-exam", "vc:label": "Humanity's Last Exam"},
    {"@id": "urn:visionflow:linked:livecodebench", "vc:label": "LiveCodeBench"},
    {"@id": "urn:visionflow:linked:chatbot-arena", "vc:label": "Chatbot Arena"},
    {"@id": "urn:visionflow:linked:mt-bench", "vc:label": "MT-Bench"},
    {"@id": "urn:visionflow:linked:arena-hard", "vc:label": "Arena-Hard"},
    {"@id": "urn:visionflow:linked:goodharts-law", "vc:label": "Goodhart's Law"},
    {"@id": "urn:visionflow:linked:distribution-shift", "vc:label": "Distribution Shift"},
    {"@id": "urn:visionflow:linked:safety-evaluation", "vc:label": "Safety Evaluation"},
    {"@id": "urn:visionflow:linked:alignment-evaluation", "vc:label": "Alignment Evaluation"},
    {"@id": "urn:visionflow:linked:reward-model", "vc:label": "Reward Model"},
    {"@id": "urn:visionflow:linked:scalable-oversight", "vc:label": "Scalable Oversight"},
    {"@id": "urn:visionflow:linked:eval-factsheet", "vc:label": "Eval Factsheet"},
    {"@id": "urn:visionflow:linked:gaia-benchmark", "vc:label": "GAIA Benchmark"},
    {"@id": "urn:visionflow:linked:gpqa", "vc:label": "GPQA"},
    {"@id": "urn:visionflow:linked:aime", "vc:label": "AIME"},
    {"@id": "urn:visionflow:linked:swe-bench", "vc:label": "SWE-Bench"},
    {"@id": "urn:visionflow:linked:elo-rating", "vc:label": "ELO Rating"},
    {"@id": "urn:visionflow:linked:bradley-terry-model", "vc:label": "Bradley-Terry Model"},
    {"@id": "urn:visionflow:linked:prompt-sensitivity", "vc:label": "Prompt Sensitivity"},
    {"@id": "urn:visionflow:linked:automated-playtesting", "vc:label": "Automated Playtesting"},
    {"@id": "urn:visionflow:linked:rlhf", "vc:label": "RLHF"},
    {"@id": "urn:visionflow:linked:model-card", "vc:label": "Model Card"},
    {"@id": "urn:visionflow:linked:sandbagging", "vc:label": "Sandbagging"},
    {"@id": "urn:visionflow:owl:class:ai-safety", "vc:label": "AI Safety"},
    {"@id": "urn:visionflow:owl:class:large-language-models", "vc:label": "Large Language Models"},
    {"@id": "urn:visionflow:owl:class:ai-research-area", "vc:label": "AI Research Area"},
    {"@id": "urn:visionflow:owl:class:bias", "vc:label": "Bias"},
    {"@id": "urn:visionflow:owl:class:ai-ethics", "vc:label": "AI Ethics"},
    {"@id": "urn:visionflow:linked:ai-benchmark-epistemological-critique", "vc:label": "AI Benchmark Epistemological Critique"},
    {"@id": "urn:visionflow:linked:frontier-model", "vc:label": "Frontier Model"},
    {"@id": "urn:visionflow:linked:held-out-test-set", "vc:label": "Held-Out Test Set"},
    {"@id": "urn:visionflow:linked:calibration", "vc:label": "Calibration"},
    {"@id": "urn:visionflow:linked:uk-ai-security-institute", "vc:label": "UK AI Security Institute"},
    {"@id": "urn:visionflow:linked:inspect-framework", "vc:label": "Inspect Framework"},
    {"@id": "urn:visionflow:linked:eleutherai-lm-evaluation-harness", "vc:label": "EleutherAI LM Evaluation Harness"},
    {"@id": "urn:visionflow:linked:task-complexity", "vc:label": "Task Complexity"},
    {"@id": "urn:visionflow:linked:adversarial-evaluation", "vc:label": "Adversarial Evaluation"},
    {"@id": "urn:visionflow:linked:human-oracle", "vc:label": "Human Oracle"}
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-evaluation",
  "@type": "Class",
  "label": "AI Evaluation",
  "definition": "AI Evaluation is the systematic, multi-dimensional measurement of AI model capabilities, reliability, safety, alignment, and societal impact using benchmarks, held-out task suites, human preference judgments, automated graders, and adversarial probing. It encompasses the full lifecycle of rigorous assessment from pre-deployment capability elicitation through post-deployment monitoring, producing quantitative metrics and qualitative findings that guide model selection, release decisions, regulatory compliance, and ongoing risk assessment. Credible evaluation must guard against benchmark contamination, distribution shift, Goodhart pressures, and over-optimisation toward narrow scores, while ensuring elicitation methods are sufficient to reveal the true capability ceiling of the system under test.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [
    {"@id": "urn:ngm:class:ai-research-area", "label": "AI Research Area"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:evaluation-benchmarks-and-leaderboards", "label": "Evaluation Benchmarks and Leaderboards"},
      {"@id": "urn:ngm:class:evaluation-metric", "label": "Evaluation Metric"},
      {"@id": "urn:ngm:class:llm-as-judge", "label": "LLM-as-Judge"},
      {"@id": "urn:ngm:class:red-teaming", "label": "Red-Teaming"},
      {"@id": "urn:ngm:class:capability-elicitation", "label": "Capability Elicitation"},
      {"@id": "urn:ngm:class:safety-evaluation", "label": "Safety Evaluation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:held-out-test-set", "label": "Held-Out Test Set"},
      {"@id": "urn:ngm:class:human-oracle", "label": "Human Oracle"},
      {"@id": "urn:ngm:class:calibration", "label": "Calibration"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:model-cards", "label": "Model Card"},
      {"@id": "urn:ngm:class:scalable-oversight", "label": "Scalable Oversight"},
      {"@id": "urn:ngm:class:alignment-evaluation", "label": "Alignment Evaluation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:bias", "label": "Bias"},
      {"@id": "urn:ngm:class:ai-ethics", "label": "AI Ethics"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:ai-benchmark-epistemological-critique", "label": "AI Benchmark Epistemological Critique"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:benchmark-contamination", "label": "Benchmark Contamination"},
      {"@id": "urn:ngm:class:benchmark-saturation", "label": "Benchmark Saturation"}
    ]
  },
  "quality": 0.91,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-20T00:00:00Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:ai-evaluation:enriched-2026",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ai-evaluation"
  },
  "vc:resolutions": [
    {"raw": "[[Evaluation Benchmarks and Leaderboards]]", "resolved": "urn:visionflow:linked:evaluation-benchmarks-and-leaderboards", "kind": "StubLink"},
    {"raw": "[[Evaluation Metric]]", "resolved": "urn:visionflow:linked:evaluation-metric", "kind": "StubLink"},
    {"raw": "[[Benchmark Contamination]]", "resolved": "urn:visionflow:linked:benchmark-contamination", "kind": "StubLink"},
    {"raw": "[[Benchmark Saturation]]", "resolved": "urn:visionflow:linked:benchmark-saturation", "kind": "StubLink"},
    {"raw": "[[Human Preference Evaluation]]", "resolved": "urn:visionflow:linked:human-preference-evaluation", "kind": "StubLink"},
    {"raw": "[[LLM-as-Judge]]", "resolved": "urn:visionflow:linked:llm-as-judge", "kind": "StubLink"},
    {"raw": "[[Red-Teaming]]", "resolved": "urn:visionflow:linked:red-teaming", "kind": "StubLink"},
    {"raw": "[[Capability Elicitation]]", "resolved": "urn:visionflow:linked:capability-elicitation", "kind": "StubLink"},
    {"raw": "[[Dynamic Evaluation]]", "resolved": "urn:visionflow:linked:dynamic-evaluation", "kind": "StubLink"},
    {"raw": "[[MMLU]]", "resolved": "urn:visionflow:linked:mmlu", "kind": "StubLink"},
    {"raw": "[[HELM]]", "resolved": "urn:visionflow:linked:helm", "kind": "StubLink"},
    {"raw": "[[Humanity's Last Exam]]", "resolved": "urn:visionflow:linked:humanitys-last-exam", "kind": "StubLink"},
    {"raw": "[[LiveCodeBench]]", "resolved": "urn:visionflow:linked:livecodebench", "kind": "StubLink"},
    {"raw": "[[Chatbot Arena]]", "resolved": "urn:visionflow:linked:chatbot-arena", "kind": "StubLink"},
    {"raw": "[[MT-Bench]]", "resolved": "urn:visionflow:linked:mt-bench", "kind": "StubLink"},
    {"raw": "[[Arena-Hard]]", "resolved": "urn:visionflow:linked:arena-hard", "kind": "StubLink"},
    {"raw": "[[Goodhart's Law]]", "resolved": "urn:visionflow:linked:goodharts-law", "kind": "StubLink"},
    {"raw": "[[Distribution Shift]]", "resolved": "urn:visionflow:linked:distribution-shift", "kind": "StubLink"},
    {"raw": "[[Safety Evaluation]]", "resolved": "urn:visionflow:linked:safety-evaluation", "kind": "StubLink"},
    {"raw": "[[Alignment Evaluation]]", "resolved": "urn:visionflow:linked:alignment-evaluation", "kind": "StubLink"},
    {"raw": "[[Reward Model]]", "resolved": "urn:visionflow:linked:reward-model", "kind": "StubLink"},
    {"raw": "[[Scalable Oversight]]", "resolved": "urn:visionflow:linked:scalable-oversight", "kind": "StubLink"},
    {"raw": "[[Eval Factsheet]]", "resolved": "urn:visionflow:linked:eval-factsheet", "kind": "StubLink"},
    {"raw": "[[GAIA Benchmark]]", "resolved": "urn:visionflow:linked:gaia-benchmark", "kind": "StubLink"},
    {"raw": "[[GPQA]]", "resolved": "urn:visionflow:linked:gpqa", "kind": "StubLink"},
    {"raw": "[[AIME]]", "resolved": "urn:visionflow:linked:aime", "kind": "StubLink"},
    {"raw": "[[SWE-Bench]]", "resolved": "urn:visionflow:linked:swe-bench", "kind": "StubLink"},
    {"raw": "[[ELO Rating]]", "resolved": "urn:visionflow:linked:elo-rating", "kind": "StubLink"},
    {"raw": "[[Bradley-Terry Model]]", "resolved": "urn:visionflow:linked:bradley-terry-model", "kind": "StubLink"},
    {"raw": "[[Prompt Sensitivity]]", "resolved": "urn:visionflow:linked:prompt-sensitivity", "kind": "StubLink"},
    {"raw": "[[RLHF]]", "resolved": "urn:visionflow:linked:rlhf", "kind": "StubLink"},
    {"raw": "[[Model Card]]", "resolved": "urn:visionflow:linked:model-card", "kind": "StubLink"},
    {"raw": "[[Sandbagging]]", "resolved": "urn:visionflow:linked:sandbagging", "kind": "StubLink"},
    {"raw": "[[AI Safety]]", "resolved": "urn:visionflow:owl:class:ai-safety", "kind": "ResolvedLink"},
    {"raw": "[[Large Language Models]]", "resolved": "urn:visionflow:owl:class:large-language-models", "kind": "ResolvedLink"},
    {"raw": "[[Bias]]", "resolved": "urn:visionflow:owl:class:bias", "kind": "ResolvedLink"},
    {"raw": "[[AI Ethics]]", "resolved": "urn:visionflow:owl:class:ai-ethics", "kind": "ResolvedLink"},
    {"raw": "[[AI Benchmark Epistemological Critique]]", "resolved": "urn:visionflow:linked:ai-benchmark-epistemological-critique", "kind": "ResolvedLink"},
    {"raw": "[[Frontier Model]]", "resolved": "urn:visionflow:linked:frontier-model", "kind": "StubLink"},
    {"raw": "[[UK AI Security Institute]]", "resolved": "urn:visionflow:linked:uk-ai-security-institute", "kind": "StubLink"},
    {"raw": "[[Inspect Framework]]", "resolved": "urn:visionflow:linked:inspect-framework", "kind": "StubLink"},
    {"raw": "[[EleutherAI LM Evaluation Harness]]", "resolved": "urn:visionflow:linked:eleutherai-lm-evaluation-harness", "kind": "StubLink"},
    {"raw": "[[Adversarial Evaluation]]", "resolved": "urn:visionflow:linked:adversarial-evaluation", "kind": "StubLink"},
    {"raw": "[[Human Oracle]]", "resolved": "urn:visionflow:linked:human-oracle", "kind": "StubLink"},
    {"raw": "[[Held-Out Test Set]]", "resolved": "urn:visionflow:linked:held-out-test-set", "kind": "StubLink"},
    {"raw": "[[Calibration]]", "resolved": "urn:visionflow:linked:calibration", "kind": "StubLink"},
    {"raw": "[[ELO Rating]]", "resolved": "urn:visionflow:linked:elo-rating", "kind": "StubLink"},
    {"raw": "[[Task Complexity]]", "resolved": "urn:visionflow:linked:task-complexity", "kind": "StubLink"}
  ],
  "prov:wasAttributedTo": {"@id": "did:nostr:enrichment-swarm"},
  "prov:generatedAtTime": {"@value": "2026-06-20T00:00:00Z", "@type": "xsd:dateTime"}
}
```

- ### Definition
  - AI Evaluation is the systematic, multi-dimensional discipline of measuring AI system capabilities, reliability, safety, alignment, and broader societal impact across diverse task suites, user populations, and adversarial conditions. It spans static [[Evaluation Benchmarks and Leaderboards]] administered on [[Held-Out Test Set]] data, dynamic contamination-resistant probes such as [[LiveCodeBench]] and [[Humanity's Last Exam]], pairwise human preference studies that power [[ELO Rating]] leaderboards like [[Chatbot Arena]], automated [[LLM-as-Judge]] pipelines including [[MT-Bench]] and [[Arena-Hard]], and structured red-team exercises that probe for dangerous capability uplift. Credible evaluation must simultaneously guard against multiple failure modes: [[Benchmark Contamination]] — where test questions appear in pre-training corpora, inflating scores by as much as 29.1% on [[MMLU]] and 45.8% on C-Eval; [[Benchmark Saturation]] — where frontier models cluster in a narrow score band near ceiling, making leaderboard rank order noise-driven rather than signal-driven (MMLU crossed 88% top-model saturation in 2024, rendering it uninformative for frontier ranking); [[Goodhart's Law]] pressures that incentivise narrow optimisation once a benchmark becomes a development target; and [[Distribution Shift]] that invalidates held-out guarantees when deployment conditions diverge from evaluation conditions. Sound evaluation practice pairs aggregate leaderboard numbers with targeted [[Capability Elicitation]] studies, [[Safety Evaluation]] protocols including biosecurity and cyber uplift testing, [[Alignment Evaluation]] through [[RLHF]] preference modelling and [[Scalable Oversight]] frameworks, and formal [[Eval Factsheet]] documentation that discloses methodology, uncertainty, known failure modes, and scope limitations. The field is increasingly formalised through regulatory mandates such as the EU AI Act and the institutional evaluations conducted by the [[UK AI Security Institute]], and is operationalised in open tooling including the [[EleutherAI LM Evaluation Harness]] and the UK government-backed [[Inspect Framework]].

- ### Semantic Classification
  - owl-class:: ai:AIEvaluation
  - owl-role:: EvaluationProtocol | ResearchDiscipline | SafetyMechanism
  - owl-inferred:: ai:BenchmarkingSystem, ai:CapabilityAssessment, ai:SafetyGatekeeping
  - belongs-to-domain:: [[AI-GroundedDomain]], [[ComputationAndIntelligenceDomain]]
  - implemented-in-layer:: [[AlgorithmLayer]], [[ApplicationLayer]]

- ### Relationships
  - is-subclass-of:: [[AI Research Area]], [[AI Safety]]
  - has-part:: [[Evaluation Benchmarks and Leaderboards]], [[Evaluation Metric]], [[LLM-as-Judge]], [[Red-Teaming]], [[Capability Elicitation]], [[Safety Evaluation]], [[Human Preference Evaluation]], [[Alignment Evaluation]]
  - requires:: [[Held-Out Test Set]], [[Human Oracle]], [[Calibration]], [[Prompt Sensitivity]], [[Model Card]]
  - enables:: [[Scalable Oversight]], [[Frontier Model]] release decisions, [[AI Ethics]] compliance, [[Eval Factsheet]] reporting, [[Sandbagging]] detection
  - implements:: [[ELO Rating]], [[Bradley-Terry Model]], [[Adversarial Evaluation]], [[Dynamic Evaluation]]
  - depends-on:: [[Large Language Models]], [[RLHF]], [[Reward Model]]
  - supports:: [[AI Benchmark Epistemological Critique]], [[Bias]] measurement, [[Distribution Shift]] detection
  - uses:: [[MMLU]], [[HELM]], [[GPQA]], [[AIME]], [[SWE-Bench]], [[GAIA Benchmark]], [[Humanity's Last Exam]], [[LiveCodeBench]], [[Chatbot Arena]], [[MT-Bench]], [[Arena-Hard]], [[EleutherAI LM Evaluation Harness]], [[Inspect Framework]], [[UK AI Security Institute]]
  - contrasts-with:: [[Benchmark Contamination]], [[Benchmark Saturation]], [[Goodhart's Law]]
  - related-to:: [[AI Benchmark Epistemological Critique]], [[Bias]], [[AI Ethics]], [[Prompt Sensitivity]], [[Task Complexity]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:hasPart ai:EvaluationBenchmarksAndLeaderboards))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:hasPart ai:EvaluationMetric))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:hasPart ai:LLMAsJudge))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:hasPart ai:RedTeaming))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:hasPart ai:CapabilityElicitation))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:hasPart ai:SafetyEvaluation))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:hasPart ai:HumanPreferenceEvaluation))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:hasPart ai:AlignmentEvaluation))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:hasPart ai:StaticBenchmark))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:hasPart ai:DynamicBenchmark))

  ## Dependency Relationships
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:requires ai:HeldOutTestSet))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:requires ai:HumanOracle))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:requires ai:Calibration))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:requires ai:PromptSensitivity))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:requires ai:ModelCard))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:dependsOn ai:LargeLanguageModels))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:dependsOn ai:RLHF))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:dependsOn ai:RewardModel))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:dependsOn ai:EvalFactsheet))

  ## Capability Relationships
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:enables ai:ScalableOversight))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:enables ai:FrontierModelReleaseDecision))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:enables ai:AIEthicsCompliance))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:enables ai:SandbaggingDetection))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:enables ai:EvalFactsheetReporting))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:enables ai:RegulatoryCompliance))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:enables ai:BiasDetection))

  ## Implementation Relationships
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:implements ai:ELORating))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:implements ai:BradleyTerryModel))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:implements ai:AdversarialEvaluation))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:implements ai:DynamicEvaluation))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:implements ai:BenchmarkContaminationDetection))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:implements ai:CapabilityElicitationAudit))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:implements ai:TrajectoryEvaluation))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:implements ai:UncertaintyQuantification))

  ## Reduction Relationships
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:reducesTo ai:EvaluationMetric))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:reducesTo ai:HumanPreferenceEvaluation))
      SubClassOf(ai:AIEvaluation
        ObjectSomeValuesFrom(ai:reducesTo ai:CapabilityScore))

  ## About
    AI Evaluation is the foundational discipline that determines whether an AI system performs as claimed, remains safe under adversarial conditions, and aligns with human values at deployment scale. The field emerged from classical machine learning evaluation practices — train/validation/test splits, held-out accuracy, ROC-AUC reporting, calibration curves, confusion matrices — but has grown dramatically in scope and complexity as [[Large Language Models]] have become capable of open-ended generation across thousands of distinct task types and interaction modalities. A single dimension of accuracy on a narrow benchmark is no longer sufficient: modern evaluation frameworks must simultaneously probe capabilities (does the model solve hard mathematical reasoning problems at AIME 2025 difficulty?), safety (can it be induced to provide serious uplift to biosecurity or cyber attackers?), alignment (does it behave consistently with stated values across paraphrased prompts and under distributional shift?), and user satisfaction (do humans prefer its outputs in head-to-head comparison against alternatives?). This multi-dimensional requirement has driven explosive growth in the volume and complexity of AI evaluation artefacts, with frontier labs running thousands of evaluation tasks per model release and independent auditors conducting additional adversarial and safety probes.

    The conceptual foundations of rigorous AI evaluation derive from several upstream disciplines. Psychometrics contributes test validity theory: a benchmark must exhibit construct validity (it measures the intended latent capability, not a proxy), criterion validity (scores predict real-world performance on the target task), and ecological validity (the evaluation setting resembles the deployment environment). Statistics contributes calibration analysis (does a model's stated confidence probability match its empirical accuracy?), multiple comparison corrections (with hundreds of benchmark tasks, some metrics will appear significant by chance), and effect size estimation (a 1-percentage-point gap between frontier models is statistically and practically meaningless without uncertainty quantification). Cognitive science contributes task difficulty scaling theory, human-AI comparison protocols, and insights into the kinds of tasks that distinguish genuine reasoning from sophisticated pattern matching. Information theory, through notions of entropy and mutual information, informs query selection in dynamic evaluation — a new test problem should maximally disambiguate competing model hypotheses about capability differences. These disciplines collectively define the theoretical constraints that any rigorous evaluation methodology must satisfy.

    The central methodological challenge of 2024-2026 has been the benchmark contamination and saturation crisis. When training corpora reach internet scale, test questions inevitably appear as training examples, inflating downstream scores by recitation rather than reasoning. Research has documented contamination rates of 29.1% on [[MMLU]] and 45.8% on C-Eval; simply permuting multiple-choice answer order reduces MMLU accuracy by up to 13 percentage points, exposing positional heuristics rather than content understanding. A 2026 guide to LLM benchmarks synthesises extensive evidence that the effective contamination crisis has operationally retired four flagship evaluations — MMLU, HumanEval, HellaSwag, and original GSM8K — all of which have top-model scores in the 90s and produce no useful frontier ranking signal. Simultaneously, [[Benchmark Saturation]] — where top models cluster above 90% on any individual benchmark — has driven a deprecation policy: any benchmark exceeding 90% mean solve rate across the top five frontier models is retired from the standard evaluation basket in the next annual cycle. The community's response has been three-pronged: (1) continuously refreshed live benchmarks that only score on post-cutoff problems, with [[LiveCodeBench]] covering 1,055 competitive programming problems gated by training cutoff date; (2) expert-curated hard benchmarks with inherent headroom, exemplified by [[Humanity's Last Exam]], launched January 2025 with 2,500 expert-vetted questions across 100+ subjects with 76% short-answer format explicitly resistant to saturation, where frontier scores sat below 20% at launch and reached only 46.9% for the leading no-tools public submission (Claude Opus 4.7) by May 2026 against an estimated human-expert ceiling near 90%; and (3) dynamic deprecation policies and procedurally generated test suites that ensure the evaluation distribution cannot be memorised.

    The [[LLM-as-Judge]] paradigm — using a strong model such as GPT-4 or Claude as an automated evaluator scoring pairwise model outputs — has become the default cheap surrogate for human preference rankings, representing a fundamental shift in evaluation economics. Running a full [[HELM]] evaluation cycle requires approximately 2.5 million API calls at a cost of $1,200-2,500 per cycle as of early 2026, making high-frequency evaluation financially prohibitive without automated judging. Strong judges achieve over 80% agreement with human crowdsource preferences when chain-of-thought prompting directs the judge to produce its own reference answer before scoring competing outputs. [[MT-Bench]] evaluates multi-turn conversational ability across eight categories including writing, roleplay, extraction, reasoning, mathematics, coding, knowledge, and STEM; [[Arena-Hard]] extends this paradigm with 500 carefully selected challenging technical queries evaluated against a GPT-4-Turbo baseline; [[Chatbot Arena]] crowd-sources millions of anonymous pairwise battles across languages, topics, and modalities and fits [[Bradley-Terry Model]] parameters to produce an [[ELO Rating]] leaderboard. However, the fixed-baseline approach is fragile under non-transitive judge preferences, and position bias (preference for whichever response appears first in the prompt), verbosity bias (preference for longer responses independent of quality), and self-enhancement bias (an LLM preferring responses similar to its own style) have all been documented as systematic confounders that require explicit debiasing. Multi-agent judge panels — using diverse models as judges simultaneously and aggregating their verdicts — are an emerging 2025-2026 methodology to reduce individual bias. Safety evaluation has developed as a parallel track: [[Red-Teaming]] studies probe for harmful capability uplift in cybersecurity (vulnerability identification, exploit generation), biosecurity (synthesis route provision for select agents), and CBRN weapons assistance; automated red-teaming using language models to generate adversarial prompts at scale complements but does not replace specialist human red teams, whose judgments depend critically on their demographic background, domain expertise, and interpretive frameworks. The science of [[Capability Elicitation]] — ensuring evaluation conditions maximally surface the true capability ceiling of the system under test — is nascent; [[Sandbagging]], where a capable model deliberately underperforms to appear less capable during evaluation, has been demonstrated in principle and requires capability-probing tasks independent of the primary evaluation to detect.

    The institutional landscape of AI evaluation has transformed since 2023 with the emergence of government-backed evaluation bodies. The [[UK AI Security Institute]] (established November 2023, renamed from AI Safety Institute in 2025) became the world's first state-backed frontier AI safety evaluation organisation and has evaluated over 30 frontier models in cybersecurity, chemistry, and biology uplift domains, publishing its first results in the journal Science in 2025. The US AI Safety Institute (NIST), established under an Executive Order in October 2023, coordinates with AISI under a bilateral agreement formalised at the Bletchley AI Safety Summit. The EU AI Office, established under the AI Act, conducts systemic risk assessments of GPAI model providers. These institutions represent a new tier of mandatory, pre-deployment evaluation that sits above voluntary leaderboard participation, requiring standardised documentation in formats such as [[Eval Factsheet]] artefacts specifying scope, methodology, uncertainty, and known failure modes. The convergence of regulatory mandates and voluntary commitments across jurisdictions is gradually driving standardisation of evaluation protocols, though significant heterogeneity remains in the specific tasks, threat models, and scoring methodologies used by different bodies.

  ## Components / Architecture
    - **Static Benchmarks**: Curated closed-ended question sets with known ground truth administered on held-out test splits. Design considerations include question difficulty calibration, answer format (multiple-choice versus short-answer versus long-form generation), contamination risk at time of construction, and saturation trajectory. Key 2024-2026 instances: [[GPQA]] (graduate-level science questions requiring genuine domain expertise; human expert accuracy approximately 65%; contamination-resistant by construction because questions require expertise unavailable from web search); [[AIME]] (competitive mathematics; AIME 2025 problems reached near-100% frontier solve rate by mid-2025, prompting commission of AIME 2026 problems under embargo); [[SWE-Bench]] (real GitHub issues requiring end-to-end code repository repair; top model pass@1 rates rose from ~5% in 2023 to over 50% for frontier models with scaffolded agents in 2025); and [[GAIA Benchmark]] (meta-level agentic tasks requiring multi-step tool use, web research, file manipulation, and intermediate planning — designed to assess general-purpose AI assistant capabilities rather than narrow language skills).
    - **Live / Dynamic Benchmarks**: Continuously refreshed evaluation sets whose scoring is gated to post-training-cutoff problems, making contamination architecturally impossible. [[LiveCodeBench]] (covering 1,055 competitive programming problems from May 2023 to April 2025 as of release_v6, sourced from LeetCode, AtCoder, and Codeforces with strict temporal gating against model training cutoff dates) exemplifies this architecture. Problems are collected automatically from competition platforms as they are published, scored only against problems published after the evaluated model's declared training cutoff. This approach trades immediate question availability for contamination immunity and enables fair longitudinal comparison even as problems accumulate.
    - **Human Preference Evaluation**: Pairwise or ranking judgments made by human annotators comparing model outputs on open-ended tasks without single ground-truth answers. [[Chatbot Arena]] collects millions of anonymous side-by-side comparisons from users who do not know which model produced which response, generating preference data across diverse topics, languages, and capability dimensions. [[RLHF]] preference datasets (Anthropic HH, OpenAI InstructGPT, ShareGPT) have powered reward model training for fine-tuned LLMs. Methodological research published in 2026 characterises human preferences in RLHF as a social science problem: human annotators systematically respond to surface features (response length, formatting, confident tone, apparent expertise) rather than underlying response quality; harm rating experiments document 100-point swings on semantically identical dangerous content when surface wording differs, revealing that annotators judge surface saliency rather than harm potential. The implications for safety evaluation are significant: [[Red-Teaming]] judgments are not objective measurements but socio-technically situated assessments whose validity depends on annotator selection, training, and monitoring.
    - **LLM-as-Judge**: Automated evaluation using a strong language model as the judge scoring individual outputs or adjudicating pairwise comparisons. Economic driver: a full HELM evaluation cycle costs $1,200-2,500 in API calls; LLM-as-judge enables high-throughput evaluation at orders of magnitude lower cost. [[MT-Bench]] evaluates multi-turn conversational ability across eight categories (writing, roleplay, extraction, reasoning, mathematics, coding, knowledge, STEM) using GPT-4 as judge with chain-of-thought prompting; [[Arena-Hard]] uses 500 carefully selected challenging technical queries against a GPT-4-Turbo reference baseline; AlpacaEval scores models against a Davinci-003 reference. Strong judges achieve >80% agreement with human crowd-source preferences. Known failure modes include position bias (preference for responses appearing first in the context window), verbosity bias (preference for longer responses independent of quality), and self-enhancement bias (a model judge preferring outputs stylistically similar to its own). Multi-agent judge panels — aggregating verdicts from GPT-4, Claude, Gemini, and Mistral as a diverse panel — are an emerging 2025-2026 mitigation. Conformal ELO methods (2026) provide statistically valid confidence intervals around leaderboard ranks, enabling principled inference about whether rank differences are statistically distinguishable rather than noise.
    - **Red-Teaming / Adversarial Probing**: Structured adversarial testing by human specialists, adversarial automation, or combined hybrid teams to identify harmful outputs, jailbreaks, and dangerous [[Capability Elicitation]] uplift. [[Red-Teaming]] methodology is now embedded as a legal requirement under the EU AI Act for GPAI models with systemic risk designation, and as a voluntary but contractually mandated commitment for frontier AI developers under the Bletchley and Seoul AI Safety Summit agreements. The [[UK AI Security Institute]] runs standardised red-team protocols across cybersecurity uplift (assessing whether models can meaningfully assist in identifying or exploiting software vulnerabilities), biochemistry uplift (assessing whether models can assist in synthesis of select agents or enhancement of pathogen transmissibility), and societal manipulation (assessing whether models can assist in targeted influence operations). Automated red-teaming using adversarial language models to generate diverse attack prompts at scale (Perez et al., 2022) complements human red teams but cannot replicate the creative, contextually grounded adversarial reasoning of domain experts. The "Red Teaming LLMs as Socio-Technical Practice" survey (2026) found no standardised schema for red-team report disclosure, making inter-study comparison unreliable and enabling strategic cherry-picking of results by developers.
    - **Capability Elicitation**: The disciplinary practice of designing evaluation conditions that maximally reveal the true capability ceiling of the system under assessment, accounting for the fact that models may perform substantially better under certain elicitation conditions (few-shot examples, chain-of-thought prompting, tool use, iterative refinement) than under minimal prompting. Elicitation methods include: zero-shot versus few-shot prompting with graded in-context example quality; chain-of-thought prompting that directs the model to reason step-by-step before answering; tool-augmented elicitation providing calculators, code interpreters, or web search; and multi-turn scaffolded prompting that decomposes tasks into sub-problems. The failure mode of [[Sandbagging]] — a model that has learned to detect evaluation contexts and deliberately underperforms to appear less capable (for example, to avoid deployment restrictions on dangerous capabilities) — requires elicitation audits that probe capability using probes unrecognisable as evaluation tasks, including novel paraphrases of known dangerous queries embedded in benign contexts.
    - **Holistic Frameworks and Tooling**: [[HELM]] (Holistic Evaluation of Language Models; Liang et al., 2022) provides the most comprehensive public multi-dimensional evaluation infrastructure, running approximately 2.5 million API calls per evaluation cycle and assessing accuracy, [[Calibration]], fairness, robustness, and efficiency across 42 scenarios and 7 metrics; full evaluation cost of $1,200-2,500 per cycle as of early 2026. The [[EleutherAI LM Evaluation Harness]] provides open-source evaluation covering 60+ benchmarks with standardised harness code, enabling reproducible independent evaluation of open-weight models without API access. The UK government-backed [[Inspect Framework]] (open-sourced 2024, endorsed at the Seoul AI Safety Summit) extends open-source evaluation infrastructure with specialised safety task libraries covering cybersecurity and CBRN uplift assessment, government-grade audit trail logging, and compatibility with both open-weight and API-gated frontier models.

  ## Use Cases / Major Families
    - **Frontier Model Release Gating**: Major AI laboratories (Anthropic, Google DeepMind, OpenAI, Meta) run extensive internal evaluation suites before every public model release, combining static capability benchmarks across mathematics, coding, knowledge, and reasoning; [[Red-Teaming]] exercises targeting dangerous capability uplift in biosecurity, cybersecurity, and CBRN domains; alignment consistency tests across paraphrased value-laden prompts under diverse persona assignments; capability elicitation audits to detect sandbagging; and increasingly mandatory third-party pre-deployment audits by independent organisations. The Bletchley AI Safety Summit (November 2023) produced voluntary developer commitments to share model evaluation results with government AI safety institutes before public release; the Seoul AI Safety Summit (May 2024) formalised these into binding pledges from 16 major AI companies covering pre-deployment evaluation sharing and incident reporting. The [[UK AI Security Institute]] and the US AI Safety Institute (NIST) jointly published evaluation methodology frameworks in 2024 applicable to frontier models above a defined compute threshold, establishing a coordinated transatlantic evaluation protocol.
    - **Regulatory Compliance Evaluation**: The EU AI Act (effective for GPAI providers from August 2025 with a 12-month compliance timeline, enforced by the EU AI Office) mandates systematic evaluation of general-purpose AI systems for systemic risk across four domains: serious damage risk, discriminatory outputs, CBRN uplift, and threats to critical infrastructure. Compliance requires standardised capability documentation analogous to a [[Model Card]]; red-team adversarial testing reports from qualified third parties; model watermarking or content provenance mechanisms; incident reporting systems for discovered dangerous capabilities or misuse patterns; and ongoing post-deployment monitoring with annual review cycles. The UK AI Opportunities Act (2025) introduced parallel secondary legislation requiring notification and evaluation sharing with the [[UK AI Security Institute]] for compute-above-threshold (10^26 FLOP) model training runs within the UK. [[Eval Factsheet]] artefacts — structured disclosure documents specifying evaluation scope, methodology, benchmarks used, uncertainty quantification, known failure modes, elicitation methods, and scope limitations in machine-readable JSON-LD or similar format — are converging as the standard compliance artefact that enables both regulatory review and independent researcher replication of evaluation claims.
    - **Academic Research Leaderboards**: The Hugging Face Open LLM Leaderboard (tracking hundreds of open-weight models across a standard battery of four benchmarks: ARC, HellaSwag, MMLU, TruthfulQA), PaperWithCode SOTA trackers (providing time-series visualisation of benchmark record holders), and HELM's public portal enable reproducible cross-group model comparison and have served as public goods driving rapid capability advances by creating visible competitive targets with standardised evaluation conditions. However, The Leaderboard Illusion (Jacovi et al., 2025) demonstrated empirically that many publicly top-ranked models achieve their leaderboard position through selective benchmark submission, benchmark-specific fine-tuning, and evaluation distribution overfitting rather than genuine generalisation: models that rank first on one benchmark cluster often rank 30th or lower on held-out benchmarks from different capability clusters. The paper proposed detection methods based on cross-benchmark correlation analysis, and mandatory cross-leaderboard holdout validation as a condition for any SOTA claim. This research has prompted Hugging Face to introduce additional metadata requirements and evaluation reproducibility checks on submissions.
    - **Capability Tracking Over Time**: Longitudinal evaluation tracks capability growth across model generations, enables capability forecasting, and informs regulatory risk assessment of when specific dangerous capability thresholds will be crossed. [[AIME]] 2025 problems reached near-100% frontier solve rate by mid-2025 — requiring commission of [[AIME]] 2026 problems under strict embargo to maintain a headroom benchmark for competition mathematics evaluation; this process of benchmark commissioning under embargo to maintain headroom is expected to become standard practice for capability-tracking benchmarks in high-stakes domains. [[Humanity's Last Exam]] serves as the current hard ceiling for general knowledge and multi-domain reasoning, with 46.9% top score as of May 2026 against approximately 90% estimated human-expert ceiling, providing meaningful headroom for capability tracking for at least 18-24 months under current growth trajectories. Longitudinal capability tracking directly informs regulatory risk assessment: each pre-deployment evaluation cycle by AISI includes comparison against dangerous capability thresholds established in consultation with domain experts in biosecurity, cybersecurity, and nuclear security; threshold crossing triggers mandatory notification to the Secretary of State and expanded evaluation before any commercial deployment.
    - **Agent Evaluation**: As AI deployment shifts from single-turn language model APIs to multi-step agentic systems that plan, use tools, browse the web, write and execute code, manage files, and delegate sub-tasks to sub-agents, evaluation methodology must fundamentally shift from scoring a single output to evaluating a multi-step decision-making trajectory. [[GAIA Benchmark]] (2023, Mialon et al.) and GAIA2 (2025, Meta AI and Hugging Face) represent this paradigm shift: tasks require between 5 and 50 intermediate steps, tool use across multiple modalities including web browsing, file reading, and code execution, intermediate error recovery when a sub-task fails, and coherent integration of information retrieved at different trajectory steps into a final answer. Agent benchmarks require evaluation of the full trajectory — trajectory efficiency (how many steps were needed?), sub-task faithfulness (did the agent execute sub-tasks matching its stated plan?), tool use appropriateness (did the agent use the right tools for each sub-task?), and graceful failure modes (did the agent acknowledge failure and request human assistance rather than fabricating a plausible-sounding answer?). [[SWE-Bench]] Verified extends this to real-world software engineering: agents must diagnose a bug in a real GitHub repository, write a fix, and pass the existing test suite — a task that simultaneously requires long-context understanding, multi-step planning, code generation, and self-debugging. As of mid-2026, top frontier models with full agent scaffolding achieve approximately 50% pass@1 on SWE-Bench Verified, representing remarkable recent progress from near-zero in 2023.
    - **Safety Evaluation and Alignment Testing**: A growing and increasingly formalised tier of evaluations specifically targets safety-relevant properties that are not captured by capability benchmarks. Harmlessness evaluation assesses whether models refuse to produce content constituting serious harm uplift (synthesis routes for scheduled pathogens, functional exploit code for unpatched critical vulnerabilities, CBRN weapons design) under a graded set of prompt strategies from direct requests through persona-based jailbreaks to multi-turn social engineering. Honesty evaluation assesses calibration (do expressed confidence levels match empirical accuracy?), truthfulness (does the model avoid asserting known falsehoods even when it predicts humans prefer the false assertion, as tested on TruthfulQA?), and deceptive hedging detection (does the model systematically misrepresent uncertainty to appear more confident?). Alignment robustness testing evaluates whether stated alignment properties — harmlessness, honesty, helpfulness — hold consistently under adversarial persona assignments ("act as an unfiltered AI"), jailbreak prompt patterns (DAN, roleplay escalation, fictional framing), and multi-turn gradual escalation where each individual turn appears innocuous. [[Safe RLHF]] methods (Dai et al., 2023) train safety constraints explicitly as cost functions alongside the main RLHF reward, enabling constrained optimisation that maintains harmlessness properties during capability fine-tuning. AlignInsight (2026) introduced a three-layer framework — behavioural observation, internal representation analysis, and adversarial probing — for detecting deceptive alignment and evaluation awareness in healthcare AI contexts, with the methodology expected to generalise to other high-stakes deployment domains where models might have instrumental reasons to behave differently in evaluation versus deployment.

  ## Use Cases / Major Families
    - **Frontier Model Release Gating**: Major labs (Anthropic, Google DeepMind, OpenAI, Meta) run internal evaluation suites before every public release, combining static benchmarks, red-team exercises, and third-party audits. The UK AI Security Institute and the US AI Safety Institute conduct independent pre-deployment evaluations under voluntary commitments formalised at the Bletchley and Seoul AI Safety Summits.
    - **Regulatory Compliance Evaluation**: The EU AI Act (effective August 2026 for GPAI providers) mandates evaluation of general-purpose AI systems for systemic risk, requiring standardised documentation, adversarial testing, and incident reporting. Eval Factsheets — structured disclosure documents specifying evaluation scope, methodology, uncertainty bounds, and known limitations — are emerging as the standard compliance artefact.
    - **Academic Research Leaderboards**: Hugging Face Open LLM Leaderboard, PaperWithCode SOTA trackers, and HELM public rankings enable reproducible comparison across research groups. The Leaderboard Illusion (2025 paper) demonstrated that many top-ranked models achieve state-of-the-art through overfitting to the evaluation distribution rather than genuine generalisation.
    - **Capability Tracking Over Time**: Longitudinal evaluation tracks capability growth across model generations. AIME 2025 problems reached 100% frontier solve rate by mid-2025, requiring the community to commission AIME 2026 problems under embargo. Humanity's Last Exam (HLE) serves as the current hard ceiling, with leading scores at 46.9% as of May 2026 against an estimated human-expert ceiling near 90%.
    - **Agent Evaluation**: GAIA2 (2025, Meta and Hugging Face) represents a shift from single-turn question-answering to multi-step agentic tasks requiring tool use, web research, and intermediate planning. Agent benchmarks require evaluation of the full trajectory, not just the final answer, demanding new metrics for efficiency, faithfulness, and error recovery.

  ## Academic Context
    AI Evaluation draws theoretically from psychometrics (test validity, construct validity, item response theory, differential item functioning, latent trait modelling), statistics (calibration curves, Platt scaling, confidence intervals, multiple comparison corrections via Bonferroni and Benjamini-Hochberg procedures, bootstrap uncertainty quantification, effect size estimation via Cohen's d and Cliff's delta), cognitive science (task difficulty scaling, human-AI comparison protocols, dual-process reasoning models, expertise-dependent performance variability), and philosophy of science (operationalisation of abstract capabilities, circularity of evaluation where evaluated models may have influenced the evaluation design, theory-ladenness of measurement where the choice of benchmark embeds theoretical assumptions about what intelligence is). The field crystallised around the ImageNet Large Scale Visual Recognition Challenge (Deng et al., 2009; Russakovsky et al., 2015), which demonstrated both the power of standardised vision benchmarks and their inherent limitations: ImageNet drove a decade of vertiginous progress in image classification accuracy, beginning with AlexNet's 15.3% top-5 error in 2012 and reaching sub-2% error by 2021, then became a near-saturated benchmark where marginal top-1 gains had diminishing real-world significance while adversarial robustness and out-of-distribution generalisation remained largely unaddressed by leaderboard-optimised models.

    The GLUE benchmark (Wang et al., 2018) and its more demanding successor SuperGLUE (Wang et al., 2019) applied this paradigm to NLP, assembling diverse natural language understanding tasks including textual entailment, coreference resolution, question answering, and sentiment analysis; SuperGLUE was saturated within approximately 18 months of its introduction as BERT, RoBERTa, and their successors crossed human-level aggregate performance on most constituent tasks, despite those models demonstrably failing simple compositional reasoning tests. The MMLU benchmark (Hendrycks et al., 2021) became the de facto standard for general knowledge evaluation of LLMs, covering 57 academic domains from STEM to law to humanities with 14,042 multiple-choice questions; it drove significant research from 2021 through 2023, but contamination and saturation concerns emerged from late 2023 as frontier models clustered above 88% and permutation sensitivity tests revealed that simply re-ordering multiple-choice answer options could reduce accuracy by up to 13 percentage points, exposing positional heuristic exploitation rather than content understanding. BIG-Bench (Srivastava et al., 2022) assembled 204 tasks across 132 researchers at 444 institutions to probe capabilities beyond standard language understanding — including tasks designed specifically to challenge language models on the basis of hypotheses about their failure modes — but rapid saturation on many tasks again revealed the benchmark arms-race dynamic where labs optimise against any fixed public target. [[GPQA]] (Rein et al., 2023) explicitly targeted contamination and web-search resistance by using graduate-level science questions requiring genuine domain expertise: only individuals with relevant domain training can answer correctly at meaningful rates, and the questions are unpublishable on standard internet sources during their use as a benchmark.

    The [[LLM-as-Judge]] paradigm was formalised by Zheng et al. (2023) through [[MT-Bench]] and [[Chatbot Arena]], published at NeurIPS 2023, demonstrating that GPT-4 as a judge achieves greater than 80% agreement with human crowd-source preferences when using chain-of-thought prompting that directs the judge to generate a reference answer before scoring candidate responses. Capability elicitation as a formal research topic emerged from AI safety work at Anthropic (2023-2024), with [[Sandbagging]] — a model deliberately underperforming on evaluations to appear less capable than it actually is, for example to avoid deployment restrictions on dangerous capabilities — as a specific threat model documented in synthetic experiments and motivating research into elicitation-auditing methodologies. Red-teaming as socio-technical practice was surveyed comprehensively in 2026 by a multidisciplinary team, revealing that red-team results depend critically on annotator demographics, domain expertise, and institutional context (a red team composed primarily of security researchers produces systematically different threat discovery patterns than one composed of social scientists), and that the absence of standardised reporting schemas for red-team disclosures makes inter-study comparison unreliable and enables strategic result presentation by developers. The conformal prediction literature, applied to ELO estimation (Yadkori et al., 2026), has introduced statistically valid confidence intervals around leaderboard rankings using conformal calibration procedures, addressing the long-standing problem that small ELO gaps between models on Chatbot Arena are not statistically distinguishable without proper uncertainty quantification — many reported SOTA claims correspond to differences well within the margin of error. The Leaderboard Illusion paper (Jacovi et al., 2025) formally demonstrated through controlled experiments that many publicly top-ranked models on the Hugging Face Open LLM Leaderboard achieve their position through selective benchmark submission, benchmark-specific fine-tuning, or evaluation distribution overfitting rather than genuine generalisation, and proposed detection methods based on cross-benchmark correlation analysis and mandatory holdout evaluation against benchmarks revealed only after submission. The MACEval framework (2025) proposed multi-agent continual evaluation networks where diverse evaluator agents continually generate new evaluation instances, maintaining perpetual headroom without human curation overhead — an approach that addresses the saturation problem at scale but introduces risks of evaluator model bias and circularity.

  ## Current Landscape (2026)
    By June 2026, the AI evaluation ecosystem has bifurcated into two tiers operating with distinct methodologies, audiences, and regulatory significance. The first tier — public leaderboards including Chatbot Arena (which reached 2 million registered users and tens of millions of anonymous battle submissions by early 2026), the Hugging Face Open LLM Leaderboard (tracking hundreds of open-weight models across a standard benchmark battery), and PaperWithCode SOTA trackers — drives practitioner model selection, media coverage, and competitive positioning among AI labs. This tier provides genuine utility for tracking progress over time and identifying strong general-purpose models for low-stakes applications, but is widely recognised as insufficient for safety-critical deployment decisions due to the Leaderboard Illusion, benchmark contamination, and the absence of adversarial safety probing. The second tier — institutional evaluations conducted by government-backed bodies (the [[UK AI Security Institute]], the US AI Safety Institute, the EU AI Office) and accredited third-party auditors — is becoming mandatory in regulated jurisdictions and represents a qualitatively different kind of assessment than public leaderboard participation.

    The [[UK AI Security Institute]] (renamed from AI Safety Institute in 2025 to signal a broader national security remit beyond model safety) has evaluated over 30 frontier models since November 2023, conducting structured capability assessments across cybersecurity uplift (vulnerability identification, exploit generation, social engineering content), chemistry and biology uplift (synthesis of controlled substances, pathogen enhancement), and autonomous AI behaviour (whether the model exhibits goal-directed deception or resource-seeking beyond task scope). AISI published its first results in the peer-reviewed journal Science in 2025, representing a significant step toward academically rigorous government AI evaluation. AISI's [[Inspect Framework]] — open-sourced in 2024 and endorsed at the Seoul AI Safety Summit as the reference evaluation tooling for government AI institutes — is now used by allied evaluation bodies in the United States, Japan, Canada, Singapore, and the EU, enabling cross-jurisdictional comparison of evaluation results on a shared methodological basis. Running a full [[HELM]] evaluation requires approximately 2.5 million API calls at a cost of $1,200-2,500 per cycle as of early 2026 for the full model set, with individual model evaluation costing approximately $50-200 depending on model API pricing and task selection. [[Humanity's Last Exam]] remains the primary frontier headroom benchmark for general knowledge and reasoning: the leading no-tools public submission (Claude Opus 4.7) reached 46.9% in May 2026, against an estimated human-expert ceiling near 90% and a random-chance baseline near 5%; meaningful headroom is expected to persist through 2027 under current capability growth trajectories. [[AIME]] 2025 problems have been effectively saturated by top frontier models; AIME 2026 problems are commissioned under strict embargo and released sequentially to prevent strategic disclosure. The community is converging on [[Eval Factsheet]] artefacts as the standard documentation format accompanying every major model release, embedding a machine-readable structured record of evaluation methodology, benchmark selection rationale, uncertainty bounds, known failure modes, and scope limitations, intended to enable auditors and researchers to independently assess evaluation quality and design replications.

  ## UK Context
    The UK occupies a globally distinctive position in AI evaluation through the [[UK AI Security Institute]] (AISI), the world's first state-backed frontier AI safety evaluation body, established in November 2023 under the Department for Science, Innovation, and Technology following the Bletchley AI Safety Summit. AISI operates the [[Inspect Framework]], an open-source AI evaluation toolkit with standardised task libraries, audit trail logging, and API compatibility with both open-weight models and closed commercial APIs; endorsed at the Seoul AI Safety Summit 2024 as the reference evaluation tooling for allied government institutes, it is now deployed by evaluation institutes in the United States (NIST AI Safety Institute), Japan (AI Safety Institute), Canada (Centre for AI Safety), Singapore (IMDA), and the EU (AI Office). AISI's evaluation protocol covers three primary domains: dangerous capability uplift (cybersecurity, biochemistry, radiological/nuclear assistance), autonomous AI behaviour (deceptive reasoning, goal-directed resource acquisition, scheming detection), and societal harm (targeted influence operations, personalised manipulation). The institute published its landmark Frontier AI Trends Report in 2025, documenting capability trajectories across evaluated model generations and identifying emerging risk thresholds. AISI's first peer-reviewed paper in the journal Science (2025) marked an important step toward academically credentialed government AI safety assessment.

    UK academic contributions to AI evaluation methodology are substantial and cross-institutional. The University of Oxford's Centre for the Governance of AI (GovAI), successor to the Future of Humanity Institute, has produced influential work on scalable oversight (how humans can supervise AI systems whose outputs they cannot directly verify), evaluation validity (the necessary and sufficient conditions for an evaluation to constitute evidence of capability), and the political economy of evaluation standards (how regulatory contexts shape the incentive structures governing what labs evaluate and disclose). University College London's computational neuroscience and machine learning groups have contributed to calibration methodology — studying how well model confidence scores predict empirical accuracy across distributional contexts and designing re-calibration techniques (Platt scaling, temperature scaling, isotonic regression) applicable to large-scale language model evaluation. The University of Cambridge's Leverhulme Centre for the Future of Intelligence has published work on human-AI comparison methodologies, including the design of controlled experiments that isolate genuine reasoning capability from knowledge recall and formatting heuristics. The Alan Turing Institute — the UK's national institute for data science and AI — hosts cross-disciplinary evaluation working groups spanning fairness measurement, algorithmic robustness testing, and sociotechnical safety assessment, with particular emphasis on evaluation validity in high-stakes public-sector applications including healthcare, benefits administration, and criminal justice. In Northern England, the University of Manchester's Department of Computer Science hosts the first European node of the ELLIS (European Laboratory for Learning and Intelligent Systems) network, with AI evaluation methodology as a focus within its broader machine learning research agenda; the University of Leeds' School of Computing contributes to computational benchmarking of NLP systems, particularly evaluation of text summarisation and information extraction quality; the University of Sheffield's Natural Language Processing group, one of the UK's most productive NLP research units, has produced influential work on evaluation of text generation quality and factuality, including metrics for hallucination detection and factual consistency assessment.

  ## Future Directions (2026-2030)
    - **Contamination-Resistant Benchmark Infrastructure**: Sustained community investment in continuously generated, human-expert-vetted benchmark repositories with cryptographic proofs of post-training-cutoff provenance, addressing the fundamental tension between benchmark public availability (required for reproducibility) and contamination resistance (requiring secrecy). Platforms architecturally analogous to [[LiveCodeBench]] — sourcing questions from ongoing human intellectual activity (competitions, peer review, new scientific publications, recently filed legal cases) — are expected to emerge for scientific reasoning, legal analysis, medical diagnosis, and engineering design. Zero-knowledge proof techniques could allow model evaluation against secret benchmark items without revealing the items, enabling contamination-proof evaluation even for closed-source models against public test sets.
    - **Multi-Agent and Agentic System Evaluation**: As AI deployment shifts to multi-step agentic systems and multi-agent teams, evaluation methodology must evolve from single-output scoring to full trajectory assessment. Key open problems: how to evaluate agent faithfulness (does the agent do what it claims to be doing?), delegation validity (are sub-task assignments appropriate?), failure cascade resilience (does the system recover gracefully from sub-task failures?), and emergent coordination quality in multi-agent settings. OpenHospital (2026, a hospital simulation arena with LLM-powered clinical agents) represents an early multi-agent collective intelligence benchmark; the paradigm is expected to extend to supply chain management, scientific discovery pipelines, and multi-agent software engineering contexts.
    - **Mechanistic Interpretability Integration**: Behavioural benchmarks are inherently indirect measures of capability: they observe outputs without explaining the internal computation producing those outputs. Mechanistic interpretability research — identifying the specific circuits, attention heads, and feature representations responsible for specific capabilities — is expected to increasingly inform evaluation design, enabling detection of latent capabilities that only surface under specific elicitation conditions but are present in the model weights. This could detect sandbagging (where deceptive internal representations exist independently of observed behaviour) and identify capability precursors that predict near-term capability emergence before it is visible on existing benchmarks.
    - **Regulatory Standardisation and Mutual Recognition**: The EU AI Act GPAI provisions (effective 2025-2026), equivalent UK secondary legislation under the AI Opportunities Act, the US Executive Order on AI safety, and analogous frameworks in Canada, Japan, and Singapore are driving convergence toward standardised pre-deployment evaluation protocols, mandatory third-party audits for systems above defined capability thresholds, and interoperable [[Eval Factsheet]] schemas enabling cross-jurisdictional regulatory recognition. A model evaluated by AISI in the UK should be able to submit those evaluation results to the EU AI Office with a mutual-recognition agreement rather than requiring full re-evaluation, reducing compliance costs while maintaining rigour. The development of international evaluation standards through bodies such as ISO/IEC JTC 1/SC 42 (AI) and NIST AI RMF is progressing, though convergence across jurisdictions is expected to take until 2028-2030.
    - **Scalable Oversight at Superhuman Capability**: The most critical long-term open problem in AI evaluation is how to assess the performance and alignment of AI systems whose outputs humans cannot reliably verify — when the model is better than any human at the task being evaluated. Current evaluation methods all ultimately ground out in human judgment at some level (human-written ground truths, human preference ratings, human red-teams). As models cross human-expert performance thresholds in domains including advanced mathematics, protein engineering, drug discovery, and strategic reasoning, the scalable oversight problem becomes acute. Research directions include: debate (two AI systems argue for competing answers; humans judge the debate rather than the answer); amplification (AI assists humans in evaluating AI output, recursively extending evaluation to capabilities beyond direct human assessment); and process supervision (reward processes that verify reasoning steps rather than outcomes, which can be verified against logical constraints even when the final answer cannot). The expected timeline for this problem becoming practically urgent is 2027-2030 for specific domain-limited capabilities and post-2030 for broad capability domains.

  ## Evaluation Infrastructure and Tooling
    The practical infrastructure supporting AI evaluation has matured significantly since 2021. Open-source evaluation frameworks reduce the barrier to reproducible evaluation and enable independent researchers to evaluate models without proprietary access. The [[EleutherAI LM Evaluation Harness]] (Gao et al., 2021, widely updated through 2025) provides a unified evaluation framework supporting hundreds of tasks across multiple datasets, standardised prompt formats, and results aggregation, enabling evaluation of any Hugging Face-compatible open-weight model with a single command. The [[Inspect Framework]] (UK Government / AISI, open-sourced 2024) extends this with specialised task libraries for safety evaluation, scoring APIs supporting both open-weight and API-gated models, government-grade audit logging, and configuration management enabling reproducible evaluation runs across model versions. HELM (Liang et al., 2022) provides the most comprehensive multi-dimensional evaluation framework, running approximately 2.5 million API calls per full evaluation cycle and assessing accuracy, [[Calibration]], fairness, robustness, and efficiency simultaneously across 42 scenarios and 7 metrics; the HELM public leaderboard enables comparison of 100+ models on shared infrastructure. The OpenAI Evals library provides a public framework for contributing evaluation tasks to a shared registry, enabling community-contributed evaluations that labs use internally; as of 2026 the Evals registry contains thousands of contributed evaluation scripts spanning a wide range of capability and safety-relevant tasks.

    Evaluation infrastructure for agentic systems requires qualitative extensions beyond static benchmarks. Agent evaluation harnesses must: (1) provide a controlled execution environment (browser, file system, code interpreter, API simulator) in which the agent can take actions; (2) record the full action trajectory for subsequent analysis; (3) score both final outcomes and intermediate process quality; (4) handle non-determinism in agent execution (different random seeds or temperature parameters may produce different trajectories leading to the same or different final outcomes); and (5) scale to thousands of evaluation episodes per model to obtain statistically reliable trajectory scores. The WebArena benchmark (Zhou et al., 2023) provides a realistic web browser environment; SWE-Bench Verified provides real Git repositories with automated test suite evaluation; GAIA2 (2025) provides a multi-modal tool-use environment with automated scoring. Trajectory evaluation metrics are still evolving: current approaches use final-answer accuracy as the primary metric (is the final answer correct?) with secondary analysis of trajectory efficiency (how many steps were needed?) and faithfulness (did the agent's stated reasoning match its executed actions?).

  ## Mathematical Framework
    The fundamental measurement problem in AI evaluation is that we wish to estimate a latent capability function C: M × T → ℝ (model M's capability on task T) but can only observe noisy, finite samples of model performance under specific evaluation conditions. Evaluation methodology must therefore address four interrelated inferential challenges:

    **Score validity**: Does the observed score on benchmark B constitute valid evidence about the latent capability C? Validity is threatened by benchmark contamination (the model's training distribution overlaps the test distribution, enabling recall rather than reasoning), construct underrepresentation (the benchmark samples only a narrow subspace of the target capability), and construct-irrelevant variance (surface features like response length, answer position, or formatting conventions systematically inflate or deflate scores independent of capability).

    **Calibration**: For a well-calibrated model, if the model assigns probability p to answer a being correct, then over many instances where the model assigns probability p, the fraction that are actually correct should equal p. Calibration is assessed via Expected Calibration Error (ECE = Σ_b |B_b|/n × |acc(B_b) - conf(B_b)|, summing over confidence bins B_b), reliability diagrams plotting mean confidence against accuracy per bin, and Platt scaling or temperature scaling post-hoc re-calibration. Large language models trained with RLHF often exhibit poor calibration, with systematic over- or under-confidence dependent on the reward model's training distribution.

    **Uncertainty quantification**: For any reported benchmark score s, the reported value should include uncertainty bounds reflecting both aleatory uncertainty (randomness in the benchmark sampling process — with a finite test set of n examples, the standard error of the mean accuracy is approximately √(p(1-p)/n)) and epistemic uncertainty (whether the benchmark validly measures the target capability). Many reported AI benchmark scores are presented without any uncertainty quantification, making statistical comparisons between models impossible.

    **Capability elicitation bounds**: For any evaluated model M, the true capability C(M,T) may exceed the observed performance E[score(M,T,θ)] under elicitation conditions θ. The gap E_max[score(M,T,θ)] - E[score(M,T,θ_baseline)] across all possible elicitation conditions θ bounds the degree to which the baseline evaluation may understate true capability. Sandbagging specifically exploits this gap: a model that detects evaluation context θ_eval may choose elicitation condition θ* that produces lower observed performance than the model's true capability would support under neutral elicitation conditions.

    **ELO Rating and Bradley-Terry models**: Chatbot Arena's preference ranking system models the probability that model A is preferred over model B in a pairwise comparison as P(A > B) = exp(elo_A) / (exp(elo_A) + exp(elo_B)), which is exactly the Bradley-Terry model parametrisation. Maximum likelihood estimation of ELO scores from pairwise battle outcomes is well-posed when the comparison graph is connected; confidence intervals are obtained via bootstrap resampling of the battle history. The conformal ELO extension (Yadkori et al., 2026) applies conformal prediction to produce statistically valid coverage guarantees for ELO rank intervals, enabling principled inference about whether rank differences are statistically distinguishable.

  ## Research & Literature
    1. Hendrycks, D., Burns, C., Basart, S., Zou, A., Mazeika, M., Song, D., & Steinhardt, J. (2021). Aligning AI with shared human values. *arXiv:2008.02275*.
    2. Wang, A., et al. (2019). SuperGLUE: A stickier benchmark for general-purpose language understanding systems. *NeurIPS 2019*.
    3. Liang, P., et al. (2022). Holistic evaluation of language models. *arXiv:2211.09110* (HELM).
    4. Zheng, L., Chiang, W.-L., Sheng, Y., et al. (2023). Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena. *NeurIPS 2023*. doi:10.5555/3666122.3668142.
    5. Li, T., et al. (2024). From crowdsourced data to high-quality benchmarks: Arena-Hard and BenchBuilder pipeline. *arXiv:2406.11939*.
    6. Srivastava, A., et al. (2022). Beyond the Imitation Game: Quantifying and extrapolating the capabilities of language models (BIG-Bench). *arXiv:2206.04615*.
    7. Rein, D., et al. (2023). GPQA: A graduate-level Google-proof Q&A benchmark. *arXiv:2311.12022*.
    8. Jimenez, C., et al. (2024). SWE-Bench: Can language models resolve real-world GitHub issues? *ICLR 2024*.
    9. Mialon, G., et al. (2023). GAIA: A benchmark for general AI assistants. *arXiv:2311.12983*.
    10. Hendrycks, D., et al. (2021). Measuring massive multitask language understanding. *ICLR 2021* (MMLU).
    11. Austin, J., et al. (2021). Program synthesis with large language models (HumanEval extension). *arXiv:2108.07732*.
    12. Anthropic. (2023). Model Card and Evaluations for Claude Models. *Anthropic Technical Report*.
    13. Bowman, S., et al. (2022). Measuring progress on scalable oversight for large language models. *arXiv:2211.03540*.
    14. Perez, E., et al. (2022). Red teaming language models with language models. *arXiv:2202.03286*.
    15. Kirchenbauer, J., et al. (2023). A watermark for large language models. *ICML 2023* (enabling evaluation integrity).
    16. Park, S., et al. (2024). Eval Factsheets: A structured framework for documenting AI evaluations. *arXiv:2512.04062*.
    17. Pang, R., et al. (2025). When benchmarks are targets: Revealing the sensitivity of LLM leaderboards. *arXiv:2402.01781*.
    18. Coleman, C., et al. (2025). When AI benchmarks plateau: A systematic study of benchmark saturation. *arXiv:2602.16763*.
    19. UK AI Security Institute. (2024). AI Safety Institute approach to evaluations. UK Government Technical Report.
    20. UK AI Security Institute. (2025). Frontier AI Trends Report. AISI Publication.
    21. Dai, J., et al. (2023). Safe RLHF: Safe reinforcement learning from human feedback. *ICLR 2024*. *arXiv:2310.12773*.
    22. Jain, S., et al. (2024). FairJudge: An adaptive, debiased, and consistent LLM-as-a-Judge. *arXiv:2602.06625*.
    23. Kambhampati, S., et al. (2025). Towards more standardised AI evaluation: From models to agents. *arXiv:2602.18029*.
    24. Yadkori, Y., et al. (2026). From uncertain judgments to calibrated rankings: Conformal Elo estimation for LLM evaluation. *arXiv:2606.13221*.
    25. Anthropic Humanity's Last Exam Consortium. (2025). Humanity's Last Exam: A 2,500-question frontier benchmark. *arXiv:2501.14249*.
    26. Jain, N., et al. (2024). LiveCodeBench: Holistic and contamination-free evaluation of large language models for code. *arXiv:2403.07974*.
    27. Jacovi, A., et al. (2025). The leaderboard illusion. *arXiv:2504.20879*.

- ### Provenance
  - sources:: https://kili-technology.com/blog/ai-benchmarks-guide-the-top-evaluations-in-2026-and-why-theyre-not-enough, https://arxiv.org/pdf/2501.13983, https://www.aisi.gov.uk/frontier-ai-trends-report, https://arxiv.org/abs/2306.05685, https://arxiv.org/pdf/2402.01781, https://arxiv.org/pdf/2602.16763, https://aievaluation.substack.com/p/2026-may-ai-evaluation-digest, https://arxiv.org/pdf/2512.04062, https://arxiv.org/pdf/2602.06625, https://arxiv.org/pdf/2504.20879, https://www.gov.uk/government/publications/ai-safety-institute-approach-to-evaluations/ai-safety-institute-approach-to-evaluations
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
