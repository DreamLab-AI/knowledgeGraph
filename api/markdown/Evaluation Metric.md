public:: true

# Evaluation Metric
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:evaluation-metric",
  "@type": "Page",
  "vc:slug": "evaluation-metric",
  "title": "Evaluation Metric",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:evaluation-metric",
  "@type": "Class",
  "label": "Evaluation Metric",
  "definition": "An evaluation metric is a quantitative or qualitative measure used to assess the performance, quality, or behaviour of a machine learning model, algorithm, or system against a defined objective. Metrics are computed over held-out test data or through human judgement protocols and provide the empirical basis for model comparison, selection, and deployment decisions. The choice of metric directly shapes what properties a model optimises for during training and what trade-offs are made between competing objectives such as accuracy, fairness, and calibration. Metric selection is therefore a first-class design decision whose consequences cascade from training dynamics through to safety, governance, and societal impact.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:performance-metrics",
      "label": "Performance Metrics"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:model-metric",
      "label": "Model Metric"
    },
    {
      "@id": "urn:ngm:class:performance-measure",
      "label": "Performance Measure"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:accuracy",
        "label": "Accuracy"
      },
      {
        "@id": "urn:ngm:class:precision",
        "label": "Precision"
      },
      {
        "@id": "urn:ngm:class:recall",
        "label": "Recall"
      },
      {
        "@id": "urn:ngm:class:f1-score",
        "label": "F1 Score"
      },
      {
        "@id": "urn:ngm:class:loss-function",
        "label": "Loss Function"
      },
      {
        "@id": "urn:ngm:class:auc-roc",
        "label": "AUC-ROC"
      },
      {
        "@id": "urn:ngm:class:fairness-metrics",
        "label": "Fairness Metrics"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ground-truth-labels",
        "label": "Ground Truth Label"
      },
      {
        "@id": "urn:ngm:class:test-dataset",
        "label": "Test Dataset"
      },
      {
        "@id": "urn:ngm:class:evaluation-harness",
        "label": "Evaluation Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-comparison",
        "label": "Model Comparison"
      },
      {
        "@id": "urn:ngm:class:hyperparameter-tuning",
        "label": "Hyperparameter Tuning"
      },
      {
        "@id": "urn:ngm:class:model-selection",
        "label": "Model Selection"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      },
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      },
      {
        "@id": "urn:ngm:class:machine-learning-discipline",
        "label": "Machine Learning Discipline"
      },
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:loss-function",
        "label": "Loss Function"
      },
      {
        "@id": "urn:ngm:class:objective-function",
        "label": "Objective Function"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:model-performance",
        "label": "Model Performance"
      },
      {
        "@id": "urn:ngm:class:benchmark-standard",
        "label": "Benchmark Standard"
      },
      {
        "@id": "urn:ngm:class:model-evaluation-results",
        "label": "Model Evaluation Results"
      },
      {
        "@id": "urn:ngm:class:goodharts-law",
        "label": "Goodhart's Law"
      },
      {
        "@id": "urn:ngm:class:calibration",
        "label": "Calibration"
      },
      {
        "@id": "urn:ngm:class:ai-model-card",
        "label": "Model Card"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-regulation",
        "label": "AI Regulation"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ]
  },
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - An **evaluation metric** is a quantitative or qualitative measure that determines how well a [[Machine Learning]] model, algorithm, or AI system achieves a defined objective, providing the empirical backbone for [[Model Comparison]], selection, and iterative improvement. Metrics are computed over held-out [[Test Dataset]] instances or via human judgement protocols and bridge the gap between a model's mathematical [[Loss Function]] and its real-world utility. The choice of metric is a first-class design decision: a metric encodes what "good" means for a task, and optimising for the wrong measure can produce models that appear strong on paper while failing in deployment. Modern practice favours multi-metric suites and Pareto-front analysis to surface trade-offs across [[Accuracy]], [[Fairness Metrics]], and [[Calibration]].

- ### Overview
  - Evaluation metrics operationalise the notion of model quality. Without well-defined metrics, claims about model superiority are unfalsifiable; with them, competing approaches can be ranked on a common scale and scientific progress tracked over time.
  - Metrics are distinct from [[Loss Function|loss functions]]: a loss function is differentiable and guides gradient-based optimisation during [[Model Training]], while an evaluation metric is computed post-hoc on discrete predictions and need not be differentiable.
  - The relationship between the two is consequential. A model trained with cross-entropy loss is ultimately judged by [[F1 Score]] or [[AUC-ROC]], not by loss value. Misalignment between training objective and evaluation metric is a major source of deployment failure.
  - Evaluation occurs at multiple stages of the ML lifecycle: during development (validation split), at release ([[Benchmark Standard]] comparisons), and in production (monitoring drift and degradation over time).

- ### Key Components
  - #### Classification Metrics
    - **[[Accuracy]]** — proportion of correctly classified instances; misleading under class imbalance.
    - **[[Precision]]** — fraction of positive predictions that are truly positive; relevant when false positives are costly.
    - **[[Recall]]** (Sensitivity) — fraction of actual positives correctly retrieved; relevant when false negatives are costly.
    - **[[F1 Score]]** — harmonic mean of [[Precision]] and [[Recall]]; preferred summary for imbalanced tasks.
    - **[[AUC-ROC]]** — area under the receiver operating characteristic curve; threshold-independent measure of discriminative power.
    - **Matthews Correlation Coefficient (MCC)** — balanced measure for binary classification, accounting for all four confusion matrix cells.
  - #### Regression Metrics
    - **Mean Absolute Error (MAE)** — average absolute deviation; robust to outliers.
    - **Mean Squared Error (MSE)** — penalises large errors quadratically; sensitive to outliers.
    - **Root Mean Squared Error (RMSE)** — MSE in the units of the target variable; widely reported.
    - **R-squared (R²)** — proportion of variance explained; scale-independent.
  - #### Natural Language Generation Metrics
    - **BLEU** — n-gram precision against reference translations; standard for [[Machine Translation]].
    - **ROUGE** — recall-oriented n-gram overlap; standard for [[Text Summarisation]].
    - **METEOR** — alignment-based metric incorporating synonymy and stemming.
    - **BERTScore** — token-level semantic similarity using [[BERT]] embeddings; better correlates with human judgement than n-gram metrics.
    - **Perplexity** — measures how well a [[Language Model]] predicts a held-out corpus; lower is better.
  - #### Generative Image & Multimodal Metrics
    - **Fréchet Inception Distance (FID)** — distribution-level similarity between generated and real images using [[Inception Network]] embeddings; lower is better.
    - **CLIP Score** — cosine similarity between image and text embeddings from a [[CLIP]] model; evaluates text-image alignment.
    - **IS (Inception Score)** — measures quality and diversity of generated images; largely superseded by FID.
  - #### Ranking & Retrieval Metrics
    - **Mean Reciprocal Rank (MRR)** — average reciprocal rank of the first relevant result.
    - **Normalised Discounted Cumulative Gain (NDCG)** — graded relevance with position discount; standard for [[Information Retrieval]].
    - **Precision@K, Recall@K** — precision and recall truncated at top-K retrieved items.
  - #### Fairness & Robustness Metrics
    - **[[Fairness Metrics]]** — demographic parity, equalised odds, and disparate impact ratios; essential for bias audits.
    - **[[Calibration]]** — reliability of predicted probabilities; well-calibrated models report accurate confidence levels.
    - **Adversarial Robustness Score** — performance under distributional shift or adversarial perturbations.

- ### Mechanisms
  - #### Metric Computation Pipeline
    - Metrics require a [[Ground Truth Label|ground truth]] dataset and a set of model predictions. Predictions are compared to labels via a scoring function that reduces the comparison to a scalar (or vector for multi-objective evaluation).
    - For [[Supervised Learning]] tasks the test split is held out from training and validation; for few-shot or zero-shot evaluations the entire dataset may serve as the evaluation set.
    - Aggregate metrics (e.g. macro vs. micro averaging) determine how per-class scores are combined; the choice affects results substantially on imbalanced datasets.
  - #### Human Evaluation Protocols
    - For tasks without a unique correct output — dialogue, creative writing, visual question answering — automatic metrics are supplemented by structured human rating via crowdsourcing platforms or expert panels.
    - Raters assess fluency, coherence, relevance, and factual accuracy using Likert scales or pairwise preference judgements (A/B testing).
    - **Inter-annotator agreement** (Cohen's Kappa, Krippendorff's Alpha) quantifies rating reliability and is reported alongside metric scores.
  - #### Goodhart's Law & Metric Gaming
    - Once an evaluation metric becomes a training target, models may learn to optimise the proxy measure without improving the underlying quality it was meant to represent — a manifestation of [[Goodhart's Law]].
    - This drives demand for diverse metric suites, adversarial benchmarks, and held-out evaluation sets decoupled from the training signal.
    - Red-teaming and contamination detection (checking whether benchmark data appears in training corpora) are defensive practices that guard the validity of reported metrics.

- ### Applications / Use Cases
  - #### Research Benchmarking
    - Academic leaderboards (SuperGLUE, HELM, BIG-bench, MMLU) use standardised metric suites to rank models; metric choice defines what the community treats as progress.
    - Benchmark saturation — when state-of-the-art models exceed human performance on a metric — signals the need for harder benchmarks and better metrics, not that AI is "solved".
  - #### Model Selection & Hyperparameter Tuning
    - Validation-set metrics guide [[Hyperparameter Tuning]] and architecture search; the chosen metric must reflect deployment requirements, not just training convenience.
    - Bayesian optimisation and neural architecture search (NAS) frameworks optimise directly against evaluation metrics.
  - #### Production Monitoring
    - After deployment, evaluation metrics are logged continuously to detect data drift, model degradation, and distributional shift. Automated alerting triggers retraining when metrics drop below thresholds.
    - A/B testing in production uses [[Model Comparison|metric-based comparisons]] between champion and challenger models.
  - #### Regulatory & Governance Compliance
    - The EU AI Act and related frameworks require risk-level-appropriate evaluation evidence recorded in [[Model Card|model cards]] and datasheets.
    - Sector regulators (financial services, healthcare, criminal justice) mandate specific metrics — e.g. fairness gap thresholds, calibration curves — as part of conformity assessments.
    - Audit trails that document metric values, dataset versions, and evaluation conditions are becoming a legal requirement for high-risk AI systems under [[AI Governance]] frameworks.

- ### Relationships
  - hasPart:: [[Accuracy]]
  - hasPart:: [[Precision]]
  - hasPart:: [[Recall]]
  - hasPart:: [[F1 Score]]
  - hasPart:: [[Loss Function]]
  - hasPart:: [[AUC-ROC]]
  - hasPart:: [[Fairness Metrics]]
  - requires:: [[Ground Truth Label]]
  - requires:: [[Test Dataset]]
  - requires:: [[Evaluation Protocol]]
  - enables:: [[Model Comparison]]
  - enables:: [[Hyperparameter Tuning]]
  - enables:: [[Model Selection]]
  - supports:: [[Model Training]]
  - supports:: [[AI Safety]]
  - supports:: [[AI Governance]]
  - supports:: [[Machine Learning]]
  - supports:: [[Responsible AI]]
  - contrastsWith:: [[Loss Function]]
  - contrastsWith:: [[Objective Function]]
  - relatedTo:: [[Model Performance]]
  - relatedTo:: [[Benchmark Standard]]
  - relatedTo:: [[Model Evaluation Results]]
  - relatedTo:: [[Goodhart's Law]]
  - relatedTo:: [[Calibration]]
  - relatedTo:: [[Model Card]]
  - bridges-to:: [[AI Regulation]]
  - bridges-to:: [[Data Governance]]

- ### Standards & Context
  - **ISO/IEC 22989:2022** (Artificial Intelligence — Concepts and Terminology) provides standardised definitions for AI performance measures and evaluation criteria.
  - **ISO/IEC TR 24030** addresses use cases and their evaluation requirements across AI application domains.
  - **NIST AI RMF (AI Risk Management Framework)** incorporates evaluation metrics as part of the MEASURE function, requiring organisations to document and report performance evidence.
  - **EU AI Act (2024)** — high-risk AI systems must demonstrate performance across defined metric thresholds; conformity assessment bodies verify metric claims.
  - **MLCommons / MLPerf** benchmarks provide open, reproducible evaluation protocols with standardised metrics across inference and training tasks.
  - **Hugging Face Evaluate** and **EleutherAI LM Evaluation Harness** are widely adopted open-source toolkits that standardise metric computation and reduce inconsistencies across reported results.
  - The [[Model Card]] specification (Mitchell et al., 2019) institutionalised the practice of documenting evaluation metrics, dataset conditions, and disaggregated results as part of responsible AI documentation.

- ### Provenance
  - sources:: ISO/IEC 22989:2022; NIST AI RMF (2023); EU AI Act (2024); MLPerf; Hugging Face Evaluate documentation; Papers With Code benchmark documentation
  - updated:: 2026-06-13
