public:: true

# Model Evaluation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:model-evaluation",
  "@type": "Page",
  "vc:slug": "model-evaluation",
  "title": "Model Evaluation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-evaluation",
  "@type": "Class",
  "label": "Model Evaluation",
  "definition": "Model Evaluation is the systematic process of measuring the performance, reliability, safety, and fitness-for-purpose of machine learning models against defined metrics, held-out datasets, and behavioural benchmarks. It spans quantitative metric computation (accuracy, F1, perplexity, BLEU, AUC-ROC), qualitative red-teaming and adversarial probing, and comparative benchmarking across standardised test suites. Evaluation drives deployment decisions, informs architectural iteration, and increasingly underpins regulatory conformity assessments demanded by AI governance frameworks. Both static offline evaluation and dynamic online evaluation in live production environments are within scope.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning",
      "label": "Machine Learning"
    },
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:evaluation-metric",
        "label": "Evaluation Metric"
      },
      {
        "@id": "urn:ngm:class:benchmarks",
        "label": "Benchmarks"
      },
      {
        "@id": "urn:ngm:class:cross-validation",
        "label": "Cross-Validation"
      },
      {
        "@id": "urn:ngm:class:test-dataset",
        "label": "Test Dataset"
      },
      {
        "@id": "urn:ngm:class:confusion-matrix",
        "label": "Confusion Matrix"
      },
      {
        "@id": "urn:ngm:class:statistical-hypothesis-testing",
        "label": "Statistical Hypothesis Testing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-deployment",
        "label": "Model Deployment"
      },
      {
        "@id": "urn:ngm:class:model-selection",
        "label": "Model Selection"
      },
      {
        "@id": "urn:ngm:class:safety-evaluation",
        "label": "AI Safety Evaluation"
      },
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:labelled-data",
        "label": "Labelled Data"
      },
      {
        "@id": "urn:ngm:class:ground-truth-labels",
        "label": "Ground Truth"
      },
      {
        "@id": "urn:ngm:class:empirical-experimental-design-tracking",
        "label": "Experiment Tracking"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:training-data",
        "label": "Training Data"
      },
      {
        "@id": "urn:ngm:class:machine-learning-discipline-pipeline",
        "label": "Machine Learning Pipeline"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      },
      {
        "@id": "urn:ngm:class:overfitting",
        "label": "Overfitting"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:performance-metrics",
        "label": "Performance Metrics"
      },
      {
        "@id": "urn:ngm:class:hyperparameter-tuning",
        "label": "Hyperparameter Tuning"
      },
      {
        "@id": "urn:ngm:class:red-teaming",
        "label": "Red Teaming"
      },
      {
        "@id": "urn:ngm:class:interpretability",
        "label": "Interpretability"
      },
      {
        "@id": "urn:ngm:class:bias-and-fairness",
        "label": "Bias and Fairness"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      },
      {
        "@id": "urn:ngm:class:mlops",
        "label": "MLOps"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-regulation",
        "label": "AI Regulation"
      },
      {
        "@id": "urn:ngm:class:audit-and-compliance",
        "label": "Audit and Compliance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:model-assessment",
      "label": "Model Assessment"
    },
    {
      "@id": "urn:ngm:class:model-testing",
      "label": "Model Testing"
    }
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
  - [[Model Evaluation]] is the disciplined process of assessing how well a trained [[Machine Learning]] model performs its intended function, using quantitative [[Evaluation Metric]] measurements — accuracy, F1 score, perplexity, BLEU, AUC-ROC — and qualitative analyses such as [[Red-Teaming]] and expert review, applied to held-out [[Test Dataset]]s or live production data. It is fundamentally distinct from [[Model Training]]: training minimises a loss function on observed data, whereas evaluation measures generalisation to unseen inputs under realistic conditions. Rigorous model evaluation is a prerequisite for responsible deployment, underpins [[AI Governance]] frameworks, and informs the iterative cycle of [[Hyperparameter Tuning]] and architectural refinement.

- ### Overview
  - Model evaluation occupies a central role in the [[Machine Learning Pipeline]], bridging the gap between a trained model and confident deployment. Its purposes span multiple layers:
    - **Generalisation measurement** — determining whether a model has learned transferable patterns or merely memorised training examples ([[Overfitting]])
    - **Comparative selection** — providing a principled basis for [[Model Selection]] among candidate architectures or training configurations
    - **Safety and alignment assessment** — verifying that model behaviour conforms to safety specifications, especially for large [[Foundation Model]]s
    - **Regulatory compliance** — satisfying conformity assessment requirements under frameworks such as the EU AI Act and guidelines from the UK [[AI Safety Institute]]
  - Evaluation is not a single-shot step but a continuous discipline. Pre-deployment evaluation on static benchmarks gives way to post-deployment monitoring (online evaluation) that tracks distributional drift and real-world performance over time within an [[MLOps]] workflow.

- ### Key Components
  - #### Evaluation Protocols
    - **Train/validation/test split** — partitioning labelled data to ensure the test partition is never used during development; the gold-standard guard against information leakage
    - **[[Cross-Validation]]** — k-fold and stratified variants that maximise data utility while yielding variance estimates of performance
    - **Holdout benchmark evaluation** — independent test sets, including community benchmarks, where models are assessed after locking weights; critical for unbiased comparison
    - **Online A/B evaluation** — live traffic splitting to compare model variants in production via business metrics and user engagement signals
  - #### Quantitative Metrics
    - **Classification** — accuracy, precision, recall, F1, Matthews Correlation Coefficient, AUC-ROC, log-loss; captured compactly in the [[Confusion Matrix]]
    - **Regression** — MAE, MSE, RMSE, R²
    - **Generation and NLP** — BLEU, ROUGE, METEOR, BERTScore, perplexity; increasingly supplemented by model-based evaluators (LLM-as-judge)
    - **Ranking and retrieval** — NDCG, MAP, MRR
    - **Calibration** — Expected Calibration Error (ECE) measuring alignment between confidence and accuracy
    - All metrics referenced via the [[Evaluation Metric]] class hierarchy
  - #### Qualitative and Adversarial Methods
    - **[[Red-Teaming]]** — structured adversarial probing by human testers or automated red-teaming pipelines to elicit failure modes, jailbreaks, and unsafe outputs
    - **Human preference evaluation** — Elo-style ranking and pairwise preference judgements collected via platforms such as LMSYS Chatbot Arena
    - **[[Interpretability]]-based probing** — activation analysis, saliency maps, and feature attribution to understand what drives model predictions
    - **Behavioural test suites** — CheckList and similar frameworks testing model robustness via perturbation, negation, and edge-case templates
  - #### [[Benchmarks]] and Leaderboards
    - Task-specific benchmarks: ImageNet (vision), SQuAD / SQuAD2 (reading comprehension), WMT (translation), CodeContests (code generation)
    - Aggregate capability suites: GLUE, SuperGLUE, BIG-Bench, MMLU, HELM, LMEH (LM Evaluation Harness)
    - Safety and alignment benchmarks: TruthfulQA, ToxiGen, HarmBench, WMDP
    - Leaderboards: Hugging Face Open LLM Leaderboard, LMSYS Arena, BIG-bench results tracker
  - #### Infrastructure and Tooling
    - **[[Experiment Tracking]]** — MLflow, Weights & Biases (W&B), Neptune.ai for logging metrics, hyperparameters, and artefacts across evaluation runs
    - **Evaluation frameworks** — EleutherAI LM Evaluation Harness, Stanford HELM, BIG-bench evaluation suite
    - **Monitoring platforms** — Evidently AI, WhyLabs, Arize AI for production drift detection and data quality monitoring

- ### Applications and Use Cases
  - #### Research and Development
    - Comparing proposed architectures against prior art on shared benchmarks to validate novelty claims in publications
    - Ablation studies isolating the contribution of individual model components
    - Neural architecture search where evaluation metrics guide automated exploration of design spaces via [[Hyperparameter Tuning]]
  - #### Enterprise Deployment
    - Acceptance testing gates in [[MLOps]] CI/CD pipelines, preventing regressions before model promotion to production
    - Business KPI alignment — mapping technical metrics to downstream revenue, conversion, and retention metrics
    - Ongoing monitoring of production models with alerting on performance drift or distributional shift
  - #### AI Safety and Alignment
    - Pre-deployment evaluation of [[Foundation Model]]s for dangerous capability thresholds (CBRN, cyberoffence uplift)
    - Alignment scoring against human preference data via RLHF reward models or Constitutional AI classifiers
    - [[Red-Teaming]] exercises mandated by responsible scaling policies at major AI laboratories
  - #### Regulatory and Audit Contexts
    - Conformity assessments under the EU AI Act for high-risk AI systems, requiring documented performance baselines and ongoing monitoring
    - Third-party independent evaluation by bodies such as the UK AISI, US AISI, and commercial AI auditors
    - [[Bias and Fairness]] audits assessing disparate impact across demographic groups under anti-discrimination law

- ### Challenges and Limitations
  - **Benchmark saturation and contamination** — state-of-the-art models approaching ceiling performance on established benchmarks, with risk that training data contains test examples (data contamination)
  - **[[Goodhart's Law]] dynamics** — optimising for a proxy metric (benchmark score) diverges from the true goal as the metric becomes a target
  - **Distribution shift** — static benchmark performance is a poor predictor of real-world performance when deployment data differs from the benchmark distribution
  - **Evaluation cost for large models** — running comprehensive evaluations on frontier [[Large Language Model]]s is computationally expensive and slow, creating pressure to cut corners
  - **Multidimensional trade-offs** — no single metric captures all relevant dimensions; safety vs. capability, accuracy vs. calibration, and fairness vs. accuracy involve inherent tension
  - **Gaming and p-hacking** — multiple comparison problems when evaluating many model variants against many metrics without pre-registration

- ### Relationships
  - uses:: [[Evaluation Metric]]
  - uses:: [[Benchmarks]]
  - uses:: [[Cross-Validation]]
  - uses:: [[Test Dataset]]
  - uses:: [[Confusion Matrix]]
  - uses:: [[Statistical Hypothesis Testing]]
  - enables:: [[Model Deployment]]
  - enables:: [[Model Selection]]
  - enables:: [[AI Safety Evaluation]]
  - enables:: [[AI Governance]]
  - requires:: [[Labelled Data]]
  - requires:: [[Ground Truth]]
  - requires:: [[Experiment Tracking]]
  - dependsOn:: [[Training Data]]
  - dependsOn:: [[Machine Learning Pipeline]]
  - contrastsWith:: [[Model Training]]
  - contrastsWith:: [[Overfitting]]
  - relatedTo:: [[Performance Metrics]]
  - relatedTo:: [[Hyperparameter Tuning]]
  - relatedTo:: [[Red-Teaming]]
  - relatedTo:: [[Interpretability]]
  - relatedTo:: [[Bias and Fairness]]
  - supports:: [[Responsible AI]]
  - supports:: [[MLOps]]
  - bridges-to:: [[AI Regulation]]
  - bridges-to:: [[Audit and Compliance]]

- ### Standards and Context
  - **ISO/IEC 42001** (AI Management Systems) — requires documented model performance evaluation as part of the management system lifecycle
  - **ISO/IEC 23053** — framework for ML model evaluation, covering performance metrics and test dataset requirements
  - **NIST AI RMF (AI Risk Management Framework)** — the MEASURE function maps directly to model evaluation activities including performance measurement and bias testing
  - **EU AI Act (2024)** — Articles 9 and 72 require accuracy, robustness, and cybersecurity evaluation for high-risk systems; Annex IV mandates technical documentation of evaluation results
  - **UK AI Safety Institute evaluations** — pre-deployment evaluation protocol published for frontier models, covering dangerous capability assessment and alignment testing
  - **IEEE 7003** — standard for algorithmic bias considerations, which feeds into fairness-focused model evaluation
  - **MLflow Model Registry** and **ONNX** provide standardised artefact interchange enabling reproducible evaluation across environments

- ### Current Landscape (2026)
  - Classic static benchmarks have saturated: by 2026 frontier models cluster at 88-94% on MMLU and 95-99% on HumanEval, so both have been retired from serious comparison and evaluation has shifted to harder discriminators such as GPQA Diamond, MMLU-Pro, AIME 2025, ARC-AGI-2 and Humanity's Last Exam (HLE).
  - Abstract-reasoning evaluation moved fast: ARC-AGI-2 (2025) still separates models (GPT-5.5 around 85%, Gemini 3.1 Pro around 77% by May 2026), while ARC-AGI-3, launched 25 March 2026 as an interactive no-instructions game suite, left all frontier systems below 1% against a 100% human baseline.
  - Agentic software-engineering evals became the headline signal, but contamination pushed the field from SWE-bench Verified (OpenAI's 500-task set, August 2024) to the multi-language SWE-bench Pro; scores collapse across the two (e.g. Claude Opus 4.5 around 80.9% Verified versus about 45.9% Pro), exposing how much the older set had leaked.
  - Methodology maturity is the defining shift: practitioners now triangulate a static academic eval, a human-preference arena (LMArena, formerly LMSYS Chatbot Arena, with roughly 5 million votes and Bradley-Terry rating) and an agentic suite, and account for the "harness effect" where identical weights swing 10-20 points on SWE-bench purely from the agent scaffold.
  - Contamination-resistant and dynamic benchmarks are now standard practice: LiveBench and LiveCodeBench refresh questions monthly from post-cutoff sources, and 2026 research such as the GEM systematic review formalised a four-tier contamination taxonomy and a Contamination Transparency Card for future releases.
  - LLM-as-judge went mainstream for bespoke evaluation, reporting 80-90% agreement with human judgement at 500-5000x lower cost, productised through frameworks like DeepEval (G-Eval), Langfuse, Arize Phoenix and Amazon Bedrock Model Evaluation; meanwhile Hugging Face's Open LLM Leaderboard v2 was deprecated and cross-model indices such as the Artificial Analysis Intelligence Index took its place.
  - Regulation hardened evaluation into a legal obligation: the EU AI Act's Article 55 requires providers of systemic-risk GPAI models to perform model evaluation under standardised protocols with documented adversarial testing, with the GPAI Code of Practice applying from 2 August 2025 and enforcement from 2 August 2026, prompting proposals (e.g. RAND's EU GPAI Model Evaluation Standards Task Force) to codify internal validity, external validity, reproducibility and portability as evaluation desiderata.

- ### References
  - 1. EU Artificial Intelligence Act (2025). Article 55: Obligations for Providers of General-Purpose AI Models with Systemic Risk. https://artificialintelligenceact.eu/article/55/
  - 2. EU Artificial Intelligence Act (2025). Overview of the Code of Practice (GPAI). https://artificialintelligenceact.eu/code-of-practice-overview/
  - 3. RAND Corporation (2025). Toward Best Practices for AI Evaluation and Governance: A Proposal for a European Union General-Purpose AI Model Evaluation Standards Task Force. https://www.rand.org/content/dam/rand/pubs/perspectives/PEA3600/PEA3624-1/RAND_PEA3624-1.pdf
  - 4. Digital Applied (2026). LLM Benchmark Methodology 2026: Contamination and Reading Leaderboards. https://www.digitalapplied.com/blog/llm-benchmark-methodology-2026-contamination-leaderboard-guide
  - 5. posttrainllm (2026). LLM Quality Benchmark Landscape, May 2026. https://posttrainllm.com/docs/research/quality_benchmarks_may_2026/
  - 6. GEM Workshop, ACL Anthology (2026). Are LLM Benchmarks Already Contaminated? A Systematic Review. https://aclanthology.org/2026.gem-main.50/

- ### Provenance
  - sources:: ISO/IEC 42001; NIST AI RMF; EU AI Act (2024); HELM (Liang et al. 2022); BIG-Bench (Srivastava et al. 2023); EleutherAI LM Evaluation Harness; Hugging Face Open LLM Leaderboard documentation; UK AISI pre-deployment evaluation framework
  - updated:: 2026-06-13
