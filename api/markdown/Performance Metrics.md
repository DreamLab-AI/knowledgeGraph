public:: true

# Performance Metrics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:972d6c0a2b227792ea58c7c4618b9182bdd22b0dc87b2566e0a5f82f9bd576f7",
  "@type": "Page",
  "vc:slug": "performance-metrics",
  "title": "Performance Metrics",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9182"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Performance Metrics"
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
  "@id": "urn:ngm:class:performance-metrics",
  "@type": "Class",
  "label": "Performance Metrics",
  "definition": "Performance Metrics are quantitative and qualitative measurements used to assess the efficiency, correctness, and resource utilisation of AI models, software systems, distributed platforms, and hardware pipelines. They encompass latency, throughput, accuracy, recall, precision, error rate, memory footprint, and energy consumption, forming the empirical basis for benchmarking, capacity planning, and continuous improvement. In machine learning contexts, performance metrics bridge offline evaluation (held-out test sets) and online monitoring (production dashboards), enabling data-driven decisions about model retraining, architecture changes, and deployment rollback. Standardised metric suites underpin regulatory compliance, SLA enforcement, and comparative research across the field.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-evaluation",
      "label": "Model Evaluation"
    },
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      },
      {
        "@id": "urn:ngm:class:throughput",
        "label": "Throughput"
      },
      {
        "@id": "urn:ngm:class:accuracy",
        "label": "Accuracy"
      },
      {
        "@id": "urn:ngm:class:precision-recall-curve",
        "label": "Precision-Recall"
      },
      {
        "@id": "urn:ngm:class:f1-score",
        "label": "F1 Score"
      },
      {
        "@id": "urn:ngm:class:mean-average-precision",
        "label": "Mean Average Precision"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:benchmarking",
        "label": "Benchmarking"
      },
      {
        "@id": "urn:ngm:class:ground-truth-labels",
        "label": "Ground Truth Labels"
      },
      {
        "@id": "urn:ngm:class:data-collection",
        "label": "Data Collection"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-optimisation-and-performance",
        "label": "Model Optimisation"
      },
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      },
      {
        "@id": "urn:ngm:class:capacity-planning",
        "label": "Capacity Planning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:monitoring-dashboard",
        "label": "Monitoring Dashboard"
      },
      {
        "@id": "urn:ngm:class:machine-learning-discipline-pipeline",
        "label": "Machine Learning Pipeline"
      },
      {
        "@id": "urn:ngm:class:mlops",
        "label": "MLOps"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
      },
      {
        "@id": "urn:ngm:class:audit-logging",
        "label": "Logging"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:performance-benchmarks",
        "label": "Performance Benchmarks"
      },
      {
        "@id": "urn:ngm:class:statistical-testing",
        "label": "Statistical Testing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:model-evaluation-results",
        "label": "Model Evaluation Results"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:service-level-agreement",
        "label": "Service Level Agreement"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:energy-efficiency",
        "label": "Energy Efficiency"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:confusion-matrix",
        "label": "Confusion Matrix"
      },
      {
        "@id": "urn:ngm:class:roc-curve",
        "label": "ROC Curve"
      },
      {
        "@id": "urn:ngm:class:auc",
        "label": "AUC"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:evaluation-metrics",
      "label": "Evaluation Metrics"
    },
    {
      "@id": "urn:ngm:class:system-metrics",
      "label": "System Metrics"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:performance-metrics:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:972d6c0a2b227792ea58c7c4618b9182bdd22b0dc87b2566e0a5f82f9bd576f7"
  },
  "vc:resolutions": [],
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
  - Performance Metrics are quantitative and qualitative measurements that characterise how well an AI model, software system, or hardware platform achieves its intended objectives. They span offline evaluation (test-set [[Accuracy]], [[Precision-Recall]], [[F1 Score]]) and online monitoring ([[Latency]], [[Throughput]], error rates), providing the empirical foundation for [[Benchmarking]], SLA enforcement, and iterative improvement within [[Machine Learning Pipeline]] and [[MLOps]] workflows. A coherent metric suite connects statistical learning theory to operational engineering, enabling teams to detect degradation, justify resource allocation, and satisfy [[Regulatory Compliance]] requirements.

- ### Overview
  - Performance Metrics sit at the intersection of empirical science and engineering practice. Every deployed model or system must be evaluated against well-defined criteria before release and continuously monitored in production.
  - **Why they matter**
    - Provide objective evidence of system behaviour, replacing intuition with measurement.
    - Drive model selection: competing architectures are compared on the same metric suite to guide deployment decisions.
    - Support [[Service Level Agreement]] (SLA) negotiation — latency p99, uptime, and error-rate targets are contractually binding in commercial deployments.
    - Enable regulatory compliance: the EU AI Act and sector-specific regulations (healthcare, finance) mandate documented performance thresholds for high-risk AI systems.
  - **How they work**
    - Metrics are computed over a held-out evaluation set (for ML models) or captured via instrumentation hooks (for running services).
    - Statistical rigour requires careful handling of class imbalance, distribution shift, and confidence intervals — raw numbers without context mislead.
    - Dashboards such as [[Monitoring Dashboard]] aggregate metric time-series and trigger alerts when thresholds are breached.
    - Feedback loops connect production metrics back to retraining pipelines, closing the [[MLOps]] cycle.

- ### Key Components
  - **Classification Metrics**
    - [[Accuracy]] — fraction of correct predictions; misleading under class imbalance.
    - [[Precision-Recall]] — precision (true positives / predicted positives) and recall (true positives / actual positives); trade-off visualised as a PR curve.
    - [[F1 Score]] — harmonic mean of precision and recall; balanced summary for imbalanced datasets.
    - [[Area Under the Curve]] (AUC-ROC) — discrimination ability across all classification thresholds; threshold-independent summary.
    - [[Confusion Matrix]] — full cross-tabulation of predicted vs actual classes; reveals class-specific failure modes.
  - **Regression and Generation Metrics**
    - Mean Absolute Error (MAE), Root Mean Squared Error (RMSE) — magnitude of prediction errors.
    - [[BLEU Score]] — n-gram overlap for machine translation and text generation quality.
    - ROUGE — recall-oriented summarisation quality.
    - FID (Fréchet Inception Distance) — distributional similarity for generative image models.
  - **Retrieval Metrics**
    - [[Mean Average Precision]] (mAP) — standard for information retrieval and object detection.
    - NDCG (Normalised Discounted Cumulative Gain) — ranking quality weighted by position.
    - MRR (Mean Reciprocal Rank) — relevant for question-answering and search systems.
  - **System and Infrastructure Metrics**
    - [[Latency]] — time from request to response; expressed as mean, p50, p95, p99 percentiles.
    - [[Throughput]] — requests or tokens processed per unit time; throughput-latency trade-offs constrain deployment topology.
    - Memory Footprint — RAM and GPU VRAM consumed; determines feasibility on target hardware.
    - [[Energy Efficiency]] — FLOPs per watt or tokens per joule; increasingly regulated and commercially relevant.
    - Error Rate — fraction of failed or anomalous requests; feeds SLA computations.
  - **Fairness and Robustness Metrics**
    - Demographic Parity, Equalised Odds — group-level performance consistency; required by EU AI Act Article 10.
    - Adversarial Robustness — accuracy under distributional shift or adversarial attack.
    - Calibration — alignment between predicted probabilities and empirical frequencies.

- ### Applications and Use Cases
  - **Model Development and Selection**
    - During [[Hyperparameter Tuning]], each candidate configuration is scored on a validation metric (e.g. validation loss, AUC) to guide search.
    - [[Neural Architecture Search]] relies on proxy metrics (e.g. parameter count, latency on target hardware) to prune the architecture space efficiently.
    - [[Transfer Learning]] workflows compare fine-tuned downstream task metrics against base-model baselines to assess adaptation quality.
  - **Production Monitoring and MLOps**
    - [[Observability]] platforms (e.g. Prometheus, Grafana) scrape service metrics and trigger alerts on SLA violations.
    - Data drift detection compares feature distribution statistics over time; metric degradation signals the need for retraining.
    - [[A/B Testing]] uses online metrics (click-through rate, conversion) to compare model variants under live traffic.
  - **Benchmarking and Research**
    - Standardised benchmarks (ImageNet, GLUE, SuperGLUE, BIG-Bench, HELM) define canonical metric suites enabling reproducible comparison across research publications.
    - [[Hardware Benchmarking]] uses MLPerf metrics (samples/s, time-to-train) to compare accelerator performance.
  - **Compliance and Auditing**
    - High-risk AI systems require documented performance thresholds for accuracy, fairness, and robustness under the EU AI Act and sector regulators (FDA for medical devices, EBA for financial models).
    - Model cards and [[Data Sheets]] publish standardised metric summaries to support external audits.
  - **Spatial Computing and Real-Time Systems**
    - In [[Spatial Computing]] and XR applications, metrics such as frames per second (FPS), motion-to-photon latency, and reprojection rate directly govern user experience and presence.
    - Computer vision pipelines in robotics use mAP and inference latency jointly to meet real-time constraints.

- ### Relationships
  - hasPart:: [[Latency]]
  - hasPart:: [[Throughput]]
  - hasPart:: [[Accuracy]]
  - hasPart:: [[Precision-Recall]]
  - hasPart:: [[F1 Score]]
  - hasPart:: [[Mean Average Precision]]
  - requires:: [[Benchmarking]]
  - requires:: [[Ground Truth Labels]]
  - requires:: [[Data Collection]]
  - enables:: [[Model Optimisation]]
  - enables:: [[Continuous Integration]]
  - enables:: [[Capacity Planning]]
  - supports:: [[Monitoring Dashboard]]
  - supports:: [[Machine Learning Pipeline]]
  - supports:: [[MLOps]]
  - dependsOn:: [[Observability]]
  - dependsOn:: [[Logging]]
  - uses:: [[Performance Benchmarks]]
  - uses:: [[Statistical Testing]]
  - contrastsWith:: [[Model Evaluation Results]]
  - contrastsWith:: [[Qualitative Assessment]]
  - bridges-to:: [[Service Level Agreement]]
  - bridges-to:: [[Regulatory Compliance]]
  - bridges-to:: [[Energy Efficiency]]
  - relatedTo:: [[Confusion Matrix]]
  - relatedTo:: [[ROC Curve]]
  - relatedTo:: [[Area Under the Curve]]

- ### Standards and Context
  - **MLPerf** (MLCommons) — industry consortium defining standardised training and inference benchmarks across hardware and software stacks; results published in public rounds.
  - **HELM** (Holistic Evaluation of Language Models, Stanford CRFM) — multi-metric benchmark covering accuracy, calibration, robustness, fairness, bias, and efficiency for large language models.
  - **ISO/IEC 25010** — software product quality model defining performance efficiency (time behaviour, resource utilisation, capacity) as a first-class quality characteristic.
  - **IEEE 7010** — recommended practice for assessing the impact of autonomous and intelligent systems on human wellbeing, incorporating metric frameworks.
  - **EU AI Act (2024)** — Article 9 requires risk management systems with performance documentation; Annex IV mandates metric-backed technical documentation for high-risk AI.
  - **NIST AI RMF** (AI Risk Management Framework) — MAP, MEASURE, MANAGE functions explicitly require quantitative performance measurement and monitoring.
  - **OpenTelemetry** — vendor-neutral observability framework defining trace, metric, and log data models; the de facto standard for [[Observability]] instrumentation in production ML systems.
  - **Prometheus / OpenMetrics** — open-source metric exposition and collection standards widely used in Kubernetes-based [[MLOps]] deployments.

- ### Current Landscape (2026)
  - MLPerf Inference v5.1 (results published 9 September 2025) shifted system-level metrics toward generative and reasoning workloads, adding the suite's first reasoning benchmark (DeepSeek-R1), a small-LLM benchmark (Llama 3.1 8B, replacing GPT-J), and Whisper Large V3 for speech, with a record 27 submitters.
  - Latency has been formalised into standard serving metrics: Time To First Token (TTFT) and Time Per Output Token (TPOT) reported per-percentile, with v5.1 introducing an aggressive interactive scenario (TTFT under 0.5s, TPOT under 30ms) alongside conversational targets, reflecting agent and coding-assistant use.
  - MLCommons broadened measurement to the edge with MLPerf Client v1.0 (July 2025), standardising on-device LLM throughput and latency across AMD, Intel, NVIDIA, Qualcomm and Apple accelerators via runtimes such as ONNX Runtime GenAI, OpenVINO, Ryzen AI and MLX.
  - Static accuracy benchmarks are visibly saturating: the Stanford HAI AI Index 2025 highlights that frontier systems still score only single digits on Humanity's Last Exam (~8.8%) and FrontierMath (~2%), pushing evaluation toward harder, long-context suites (Stanford's HELM Long Context leaderboard, HELMET, RULER).
  - Benchmark contamination has become the central reliability problem: a 2026 systematic review of 55 studies (GEM/aclanthology) reports inflation estimates of roughly 6-40% and finds no detection method reliable across contamination tiers, motivating contamination-resistant and dynamically refreshed evaluations (MathArena, SWE-bench Live, LLMEval-3).
  - Human-preference and model-judged metrics now sit alongside traditional scores: LMArena (formerly LMSYS Chatbot Arena) had passed ~5 million pairwise votes by January 2026, while LLM-as-Judge methods reach 80-90% agreement with humans at a fraction of the cost, though position bias and overlapping confidence intervals undermine naive leaderboard rankings.
  - Open frontier challenges as of 2026 include harness sensitivity (identical weights differing 10-20 points on SWE-bench depending on scaffold), construct validity, and the move from single-metric accuracy toward multi-axis reporting that folds in latency, cost, efficiency (EffiBench-X), safety and calibration.

- ### References
  - 1. MLCommons (2025). MLPerf Inference v5.1 Results. https://mlcommons.org/2025/09/mlperf-inference-v5-1-results/
  - 2. MLCommons (2025). MLPerf Client v1.0: A New Standard for AI PC Benchmarking. https://mlcommons.org/2025/07/mlperf-client-v1-0/
  - 3. Stanford HAI (2025). AI Index Report 2025, Chapter 2: Technical Performance. https://hai.stanford.edu/assets/files/hai_ai-index-report-2025_chapter2_final.pdf
  - 4. Nourbakhsh, E. et al. (2026). Are LLM Benchmarks Already Contaminated? A Systematic Literature Review. https://aclanthology.org/2026.gem-main.50/
  - 5. Stanford CRFM (2025). HELM Long Context Leaderboard. https://crfm.stanford.edu/2025/09/29/helm-long-context.html

- ### Provenance
  - sources:: MLCommons MLPerf specification; Stanford HELM benchmark documentation; ISO/IEC 25010:2023; EU AI Act (2024); NIST AI Risk Management Framework (2023)
  - updated:: 2026-06-13
