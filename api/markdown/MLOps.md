public:: true

# MLOps
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mlops",
  "@type": "Page",
  "vc:slug": "mlops",
  "title": "MLOps",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mlops",
  "@type": "Class",
  "label": "MLOps",
  "definition": "MLOps (Machine Learning Operations) is the set of practices, tools, and cultural norms that operationalise machine learning models at production scale by applying DevOps and Site Reliability Engineering principles to the full ML lifecycle. It covers end-to-end automation of ML pipelines — data ingestion, feature engineering, model training, evaluation, deployment, serving, and continuous retraining — and addresses the unique challenge that code, data, and model weights all evolve independently and must be versioned, tested, and governed together. MLOps introduces specialised artefacts such as model registries, feature stores, and experiment trackers that have no direct analogue in traditional software delivery. The discipline bridges the organisational gap between data science teams and production engineering, enabling reliable, auditable, and scalable model delivery at the pace business demands.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning-discipline",
      "label": "Machine Learning Discipline"
    },
    {
      "@id": "urn:ngm:class:cat-ai-infrastructure",
      "label": "AI Infrastructure (Artificial Intelligence)"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:model-registry",
        "label": "Model Registry"
      },
      {
        "@id": "urn:ngm:class:feature-store",
        "label": "Feature Store"
      },
      {
        "@id": "urn:ngm:class:empirical-experimental-design-tracking",
        "label": "Experiment Tracking"
      },
      {
        "@id": "urn:ngm:class:machine-learning-discipline-pipeline",
        "label": "Machine Learning Pipeline"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:ai-lifecycle",
        "label": "AI Lifecycle"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      },
      {
        "@id": "urn:ngm:class:data-versioning",
        "label": "Data Versioning"
      },
      {
        "@id": "urn:ngm:class:data-pipeline",
        "label": "Data Pipeline"
      },
      {
        "@id": "urn:ngm:class:feature-engineering",
        "label": "Feature Engineering"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ai-deployment",
        "label": "AI Deployment"
      },
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      },
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      },
      {
        "@id": "urn:ngm:class:continuous-training",
        "label": "Continuous Training"
      },
      {
        "@id": "urn:ngm:class:model-monitoring",
        "label": "Model Monitoring"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      },
      {
        "@id": "urn:ngm:class:kubernetes",
        "label": "Kubernetes"
      },
      {
        "@id": "urn:ngm:class:container",
        "label": "Container"
      },
      {
        "@id": "urn:ngm:class:workflow-orchestration",
        "label": "Workflow Orchestration"
      },
      {
        "@id": "urn:ngm:class:ci-cd-automation",
        "label": "CI/CD"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:explainability",
        "label": "Model Explainability"
      },
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      },
      {
        "@id": "urn:ngm:class:reproducibility",
        "label": "Reproducibility"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:ai-monitoring",
        "label": "AI Monitoring"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:devops",
        "label": "DevOps"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data-engineering",
        "label": "Data Engineering"
      },
      {
        "@id": "urn:ngm:class:platform-engineering",
        "label": "Platform Engineering"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-drift",
        "label": "Data Drift"
      },
      {
        "@id": "urn:ngm:class:a-b-testing",
        "label": "A/B Testing"
      },
      {
        "@id": "urn:ngm:class:model-serving",
        "label": "Model Serving"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:machine-learning-operations",
      "label": "Machine Learning Operations"
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
  - MLOps (Machine Learning Operations) is the discipline that applies [[DevOps]], [[CI/CD]], and [[Site Reliability Engineering]] principles to the full [[AI Lifecycle]] — from data collection and [[Feature Engineering]] through model training, evaluation, deployment, and continuous retraining in production. It addresses the fundamental challenge that [[Machine Learning]] systems have three independently evolving axes (code, data, and model weights), all of which must be versioned, tested, and governed together to deliver reliable, auditable, and scalable ML products. By introducing specialised tooling such as [[Model Registry]], [[Feature Store]], and [[Experiment Tracking]], MLOps closes the gap between experimental research and production-grade software delivery.

- ### Overview
  - MLOps emerged as a named discipline around 2017–2018 in response to the "last mile" problem of machine learning: teams found it straightforward to train promising models in notebooks but extremely difficult to deploy, maintain, and improve them in production. The term borrowed directly from [[DevOps]] and [[Site Reliability Engineering]], recognising that ML systems require not just continuous integration and delivery (CI/CD) but also continuous training (CT) — a third loop that has no equivalent in traditional software.
  - A central insight is that ML systems are uniquely fragile because accuracy degrades silently without any code change. If the statistical distribution of incoming data shifts — a phenomenon called [[Data Drift]] or concept drift — a model that performed well at deployment time may degrade arbitrarily. MLOps practice therefore mandates monitoring pipelines that evaluate model performance on fresh production data, detect degradation, trigger retraining, validate the new model, and promote it automatically.
  - Organisational maturity in MLOps is characterised on a capability ladder. At level 0, data scientists manually train and deploy models. At level 1, the training pipeline is automated but deployment remains manual. At level 2, the full CI/CD/CT loop is automated, with changes to data or code triggering automated testing, validation, and deployment without human intervention. Reaching level 2 requires sustained investment in [[Platform Engineering]], cultural alignment between data scientists and production engineers, and governance frameworks that satisfy regulatory requirements around [[Model Explainability]] and audit trails.

- ### Key Components
  - **[[Experiment Tracking]]** — records hyperparameters, metrics, and artefacts for every training run (tools: MLflow, Weights & Biases, Neptune), enabling reproducibility and systematic comparison of model candidates.
  - **[[Model Registry]]** — a versioned repository of model artefacts with promotion gates (development → staging → production); provides audit trail of which model version is live at any time and who approved it.
  - **[[Feature Store]]** — a shared repository (e.g. Feast, Tecton, Hopsworks) that ensures the feature transformations applied at training time exactly match those computed at inference time, eliminating training-serving skew — one of the most common sources of silent model degradation.
  - **[[Machine Learning Pipeline]]** — an orchestrated, reproducible sequence of steps (data validation, preprocessing, training, evaluation) executed by workflow orchestrators such as [[Kubeflow]], Apache Airflow, or Prefect.
  - **[[Model Monitoring]]** — continuous evaluation of live model outputs, including data distribution checks ([[Data Drift]]), prediction distribution monitoring, and business metric tracking; triggers retraining when degradation exceeds thresholds.
  - **[[CI/CD]] for ML** — automated pipelines that build, test, and validate ML components; extends classical [[CI/CD]] with ML-specific steps such as data validation, model evaluation gates, and shadow deployment.
  - **[[Continuous Training]]** — the CT loop: automated retraining triggered by data drift alerts, scheduled data freshness windows, or upstream data pipeline updates; replaces the manual "train-once-deploy" anti-pattern.
  - **[[Model Serving]] and inference infrastructure** — REST/gRPC endpoints backed by model servers (TorchServe, TensorFlow Serving, Triton Inference Server) deployed on [[Kubernetes]]; supports both real-time online serving and batch inference.
  - **[[Data Versioning]]** — tracking of dataset snapshots alongside model versions so any historical experiment is fully reproducible; tools include DVC and LakeFS.
  - **[[Version Control]]** — standard SCM (Git) applied not just to training code but to pipeline definitions, configuration, and environment specifications.

- ### Applications / Use Cases
  - **Online fraud detection** — models retrained daily on fresh transaction patterns and served at sub-millisecond latency via online endpoints; [[Model Monitoring]] detects shifts in fraud patterns that indicate concept drift and triggers retraining.
  - **Recommender systems** — large-scale feature pipelines updated in near-real time; [[Feature Store]]s decouple feature computation from model serving, enabling multiple model variants to share the same feature infrastructure.
  - **Natural language processing pipelines** — fine-tuned [[Large Language Model]]s managed through the model registry with version gating; [[Model Explainability]] tools audit safety before promotion to production.
  - **Medical imaging diagnostics** — strict audit trail requirements satisfied through experiment tracking and model registry; [[Data Governance]] and [[AI Governance]] frameworks enforce PHI handling and regulatory compliance (e.g. MDR in the EU).
  - **Industrial predictive maintenance** — sensor-stream data pipelines feed time-series models; [[Data Drift]] monitors detect sensor degradation or process changes before they affect model accuracy.
  - **Search ranking** — shadow deployment and [[A/B Testing]] frameworks compare candidate ranking models against the incumbent on live traffic before full rollout.
  - **Autonomous vehicle perception** — [[Data Versioning]] tracks which annotated driving scenarios each model was trained on; the model registry records each deployed firmware version per vehicle fleet.

- ### Relationships
  - partOf:: [[AI Lifecycle]]
  - hasPart:: [[Model Registry]]
  - hasPart:: [[Feature Store]]
  - hasPart:: [[Experiment Tracking]]
  - hasPart:: [[Machine Learning Pipeline]]
  - requires:: [[Version Control]]
  - requires:: [[Data Versioning]]
  - requires:: [[Data Pipeline]]
  - requires:: [[Feature Engineering]]
  - enables:: [[AI Deployment]]
  - enables:: [[Inference]]
  - enables:: [[Model Training]]
  - enables:: [[Continuous Training]]
  - enables:: [[Model Monitoring]]
  - uses:: [[Cloud Computing]]
  - uses:: [[Kubernetes]]
  - uses:: [[Container]]
  - uses:: [[Workflow Orchestration]]
  - uses:: [[CI/CD]]
  - supports:: [[Model Explainability]]
  - supports:: [[AI Governance]]
  - supports:: [[Reproducibility]]
  - dependsOn:: [[Data Governance]]
  - dependsOn:: [[AI Monitoring]]
  - contrastsWith:: [[DevOps]]
  - bridges-to:: [[Data Engineering]]
  - bridges-to:: [[Platform Engineering]]
  - relatedTo:: [[Data Drift]]
  - relatedTo:: [[A/B Testing]]
  - relatedTo:: [[Model Serving]]

- ### Standards & Context
  - **Google's MLOps whitepaper (2020)** established the three-level maturity model (levels 0, 1, 2) that became the de facto reference for organisational capability assessment.
  - **CD Foundation MLOps SIG** — a working group under the Continuous Delivery Foundation developing vendor-neutral MLOps interoperability standards.
  - **EU AI Act** (2024) introduces risk-tier requirements for ML systems in production, making MLOps governance practices (audit trails, [[Model Explainability]], version management) a legal necessity for high-risk AI systems.
  - **ISO/IEC 42001** (AI Management Systems) and **ISO/IEC 5338** (AI lifecycle processes) define process requirements that align closely with MLOps practices around traceability, testing, and monitoring.
  - **NIST AI RMF** (Risk Management Framework, 2023) provides a governance overlay that MLOps tooling must support, particularly around documentation, testing, and deployment safeguards.
  - Platform ecosystems: AWS SageMaker, Google Vertex AI, Azure ML, and Databricks MLflow all provide integrated MLOps stacks implementing the full CI/CD/CT lifecycle; open-source alternatives include Kubeflow (CNCF), MLflow, and ZenML.

- ### Current Landscape (2026)
  - The 2024–2026 period saw MLOps split into a mature core stack (version everything, promotion gates, drift monitoring) and a fast-growing LLMOps layer for foundation models, adding prompt/version control, embedding freshness, RAG orchestration, hallucination/factuality metrics and token-cost management as first-class operational signals.
  - MLflow 3.0 (Databricks, June 2025) made GenAI artefacts first-class with prompt tracing, LLM-as-judge quality scoring, expert feedback and production monitoring; the line has since advanced to MLflow 3.10 (integrated into Amazon SageMaker AI in May 2026) adding multi-turn tracing and built-in latency, token-use and quality dashboards.
  - Kubeflow pushed further into LLM territory: 1.10 revamped the model registry and added KServe integration, and 1.11 (December 2025) shipped KServe 0.15.2 with vLLM support for reasoning models, tool calling, Llama 4 and Qwen 3, a governed Model Catalog, and KEDA event-driven autoscaling.
  - The market consolidated around a handful of credible platforms — Databricks (Mosaic AI, MLflow, Unity Catalog governance), the three hyperscalers (AWS SageMaker, Azure ML, Google Vertex AI), plus Microsoft Fabric emerging as a fourth end-to-end contender in 2026 — while open-source cores MLflow, Kubeflow, W&B and ZenML remain the standard for teams with engineering depth.
  - Estimates put the MLOps market at roughly 4.4–5.8 billion USD in 2026 with 38–46% CAGR forecasts through the early 2030s; the LLMOps-specific segment reached about 3.2 billion USD in 2025, growing at ~24% CAGR toward tens of billions by 2034.
  - Governance and compliance shifted from optional to mandatory in enterprise evaluations, driven by the EU AI Act and sector rules in finance and healthcare; end-to-end lineage from raw source to prediction (e.g. Databricks Unity Catalog) is now a purchasing prerequisite, and platforms lacking audit trails, bias detection and explainability are being phased out.
  - Open frontiers as of 2026 remain unsettled: agent harnesses and long-running-agent memory systems are in active flux, "context engineering" has emerged as a distinct discipline, MCP has stabilised as integration infrastructure, and evaluation-first development with full multi-step agent tracing is displacing "ship and pray" deployment.

- ### References
  - 1. ZenML (2025). What 1,200 Production Deployments Reveal About LLMOps in 2025. https://www.zenml.io/blog/what-1200-production-deployments-reveal-about-llmops-in-2025
  - 2. ZenML (2025). Kubeflow vs MLflow vs ZenML: Which MLOps Platform Is the Best? (updated November 2025). https://www.zenml.io/blog/kubeflow-vs-mlflow
  - 3. Mordor Intelligence (2026). Machine Learning Operations (MLOps) Market Size & Share. https://www.mordorintelligence.com/industry-reports/machine-learning-operations-mlops-market
  - 4. Azumo (2026). MLOps Platform Comparison 2026: Databricks vs. SageMaker vs. Vertex AI. https://azumo.com/artificial-intelligence/ai-insights/mlops-platform-comparison-2026
  - 5. Braintrust (2026). Best LLMOps platforms in 2026 compared. https://www.braintrust.dev/articles/best-llmops-platforms-2025
  - 6. Kolekar, R. (2026). MLOps in 2026 — The Definitive Guide: tools, cloud platforms, architectures and a practical playbook. https://rahulkolekar.com/mlops-in-2026-the-definitive-guide-tools-cloud-platforms-architectures-and-a-practical-playbook/

- ### Provenance
  - sources:: Google MLOps whitepaper (practitioners.google/guides/mlops); CD Foundation MLOps SIG; Sculley et al. "Hidden Technical Debt in Machine Learning Systems" (NIPS 2015); Kreuzberger et al. "Machine Learning Operations: A Survey" (2023); NIST AI RMF 1.0 (2023)
  - updated:: 2026-06-13
