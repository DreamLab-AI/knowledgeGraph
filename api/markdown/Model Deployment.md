public:: true

# Model Deployment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:09e213b77b433bf238eb34f574a342ef37d2f3eb4eb90d8acf50727c63026516",
  "@type": "Page",
  "vc:slug": "model-deployment",
  "title": "Model Deployment",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:inference-engine",
      "vc:label": "Inference Engine"
    },
    {
      "@id": "urn:visionflow:linked:edge-inference",
      "vc:label": "Edge Inference"
    },
    {
      "@id": "urn:visionflow:linked:mlops",
      "vc:label": "MLOps"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Model Deployment"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-deployment",
  "@type": "Class",
  "label": "Model Deployment",
  "definition": "Model Deployment is the engineering discipline of transitioning a trained machine learning model from a development or research environment into a production system where it can serve real-time or batch predictions to users and downstream applications. It encompasses model packaging, serving infrastructure, API exposure, versioning, scaling, and monitoring, ensuring that the model behaves reliably and efficiently under operational conditions. Deployment strategies range from synchronous online endpoints for low-latency inference to batch scoring pipelines, edge device embedding, and serverless function invocations. The discipline is tightly coupled with MLOps practices that treat models as first-class software artefacts subject to continuous integration, delivery, observation, and rollback.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:mlops",
      "label": "MLOps"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:inference-engine",
        "label": "Inference Engine"
      },
      {
        "@id": "urn:ngm:class:model-serialisation",
        "label": "Model Serialisation"
      },
      {
        "@id": "urn:ngm:class:containerisation",
        "label": "Containerisation"
      },
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:edge-inference",
        "label": "Edge Inference"
      },
      {
        "@id": "urn:ngm:class:real-time-prediction",
        "label": "Real-Time Prediction"
      },
      {
        "@id": "urn:ngm:class:batch-inference",
        "label": "Batch Inference"
      },
      {
        "@id": "urn:ngm:class:model-monitoring",
        "label": "Model Monitoring"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      },
      {
        "@id": "urn:ngm:class:model-registry",
        "label": "Model Registry"
      },
      {
        "@id": "urn:ngm:class:feature-store",
        "label": "Feature Store"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:docker-containerisation-platform",
        "label": "Docker"
      },
      {
        "@id": "urn:ngm:class:kubernetes",
        "label": "Kubernetes"
      },
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      },
      {
        "@id": "urn:ngm:class:g-rpc",
        "label": "gRPC"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ab-testing",
        "label": "A/B Testing"
      },
      {
        "@id": "urn:ngm:class:canary-deployment",
        "label": "Canary Deployment"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      },
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:continuous-delivery",
        "label": "Continuous Delivery"
      },
      {
        "@id": "urn:ngm:class:data-drift",
        "label": "Data Drift"
      },
      {
        "@id": "urn:ngm:class:model-versioning",
        "label": "Model Versioning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:serverless-architecture",
        "label": "Serverless Computing"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:model-serving",
      "label": "Model Serving"
    },
    {
      "@id": "urn:ngm:class:ml-model-release",
      "label": "ML Model Release"
    }
  ],
  "quality": 0.75,
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
  "@id": "urn:visionflow:annotation:link-resolutions:model-deployment:6cd70ff8b58f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:09e213b77b433bf238eb34f574a342ef37d2f3eb4eb90d8acf50727c63026516"
  },
  "vc:resolutions": [
    {
      "raw": "[[Inference Engine]]",
      "resolved": "urn:visionflow:linked:inference-engine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Edge Inference]]",
      "resolved": "urn:visionflow:linked:edge-inference",
      "kind": "StubLink"
    },
    {
      "raw": "[[MLOps]]",
      "resolved": "urn:visionflow:linked:mlops",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Model Deployment is the engineering discipline of transitioning a trained [[Machine Learning]] model from a research or development environment into a live production system where it can serve predictions to real users, devices, or downstream applications at scale. It is a core stage within the [[MLOps]] lifecycle, treating models as first-class software artefacts that must be packaged, versioned, exposed via stable interfaces, monitored for performance degradation, and rolled back when necessary. Effective deployment bridges the gap between [[Model Training]] and operational value delivery, encompassing everything from [[Containerisation]] of the model runtime to latency budgeting, autoscaling policies, and [[Data Drift]] detection in serving traffic.

- ### Overview
  - Model Deployment addresses one of the most practically challenging phases of the machine learning lifecycle: ensuring that a model which performs well on held-out test data also performs reliably and efficiently when serving real-world inputs at production scale.
  - Unlike traditional software releases, model deployments contend with a dual source of risk: code-level failures (bugs in serving logic, API contract breaks) and model-level failures (distributional shift, concept drift, stale features). This dual risk makes deployment governance more complex than conventional continuous delivery.
  - Deployment is typically preceded by [[Model Evaluation]] and [[Model Registry]] promotion, and is followed immediately by [[Model Monitoring]] and observability pipelines. The full round-trip — train, evaluate, deploy, monitor, retrain — constitutes the [[ML Pipeline]] or [[Continuous Training]] loop.
  - Why it matters:
    - A model that is never deployed produces no business or scientific value.
    - Poor deployment practices are the primary cause of production ML incidents, including silent prediction failures, latency regressions, and cascading service errors.
    - Standardised deployment patterns (blue-green, canary, shadow) reduce risk and enable rapid iteration without service downtime.

- ### Key Components
  - **[[Model Serialisation]]** — persisting trained weights and computation graphs in a portable format (e.g. ONNX, SavedModel, TorchScript, Pickle) that can be loaded by a separate serving process independently of the training framework.
  - **[[Inference Engine]]** — the runtime that executes forward passes of the serialised model; may include hardware-specific optimisations (TensorRT, OpenVINO, ONNX Runtime) to maximise throughput and minimise latency.
  - **[[Containerisation]]** — wrapping the model, its dependencies, and its serving logic in a reproducible container image (typically [[Docker]]) so that the deployment unit is environment-agnostic.
  - **[[Model Registry]]** — a versioned catalogue of trained model artefacts from which a deployment pipeline fetches approved model versions, enabling traceability and auditability.
  - **[[API Gateway]]** — the network boundary through which client applications send inference requests; may enforce authentication, rate limiting, and request routing across model versions.
  - **[[Feature Store]]** — a shared repository of pre-computed feature values that the deployed model reads at inference time, ensuring feature consistency between training and serving.
  - **[[Kubernetes]]** / Orchestration — container orchestration platforms that manage replica scaling, health checks, rolling updates, and resource allocation for model serving pods.
  - **[[REST API]]** and [[gRPC]] — the dominant transport protocols for model serving endpoints; REST suits broad compatibility, gRPC suits high-throughput and streaming use cases.
  - **[[Model Versioning]]** — systematic naming and tagging of deployed model versions, enabling simultaneous multi-version serving for [[A/B Testing]] and gradual rollouts.

- ### Deployment Strategies
  - **Online (real-time) serving** — the model is hosted as a persistent service that responds synchronously to individual inference requests with low latency (typically sub-100 ms); used for recommendation systems, fraud detection, and language model APIs.
  - **[[Batch Inference]]** — the model processes large datasets asynchronously on a schedule or triggered by an event; optimises throughput over latency and is suited to nightly scoring pipelines, report generation, and large-scale content moderation.
  - **[[Edge Inference]]** — the model is compiled and embedded directly on a device (mobile phone, IoT sensor, AR headset) using runtimes such as TensorFlow Lite, Core ML, or TensorRT, eliminating network round-trips and enabling offline operation.
  - **[[Serverless Computing]] deployment** — the model is wrapped in a function-as-a-service handler (AWS Lambda, Google Cloud Functions, Azure Functions) that scales to zero when idle, reducing operational cost for infrequent inference workloads.
  - **[[Canary Deployment]]** — a new model version is released to a small fraction of production traffic before full promotion, allowing comparison of live metrics against the incumbent before committing to a full rollout.
  - **[[Shadow Mode Deployment]]** — a new model receives a copy of live traffic in parallel with the incumbent but its outputs are not served to users; enables risk-free comparison of model behaviour on real data before promotion.
  - **Blue-Green Deployment** — two identical production environments (blue = current, green = new) are maintained; traffic is switched atomically from blue to green, enabling instant rollback by switching back.
  - **Multi-Armed Bandit serving** — traffic is dynamically routed across model variants in proportion to their observed performance, combining exploration of new models with exploitation of the best-performing one, a form of online [[A/B Testing]].

- ### Applications / Use Cases
  - **Recommendation engines** — e-commerce and streaming platforms deploy ranking models in real-time serving clusters that score candidate items for each user request within strict latency budgets.
  - **Natural language processing APIs** — large language models and embedding models are deployed as microservices (e.g. via [[vLLM]], TGI, or Triton Inference Server) to power chatbots, search, and document analysis.
  - **Computer vision pipelines** — object detection and image classification models are deployed at the edge on surveillance cameras, autonomous vehicles, and quality-inspection robots, requiring [[Edge Computing]] infrastructure.
  - **Financial risk scoring** — credit scoring and fraud detection models are deployed as low-latency REST services integrated into payment processing pipelines, subject to regulatory audit trails.
  - **Healthcare AI** — diagnostic assistance models are deployed within hospital information systems under strict governance requiring version locking, explainability logs, and human oversight hooks.
  - **Autonomous agents** — reinforcement learning policies and planning models are deployed as embedded runtimes within robotic control loops and [[Robotics]] stacks, demanding deterministic latency and fail-safe fallbacks.
  - **Scientific computing** — surrogate models for physics simulation are deployed as callable services consumed by optimisation workflows in climate modelling, drug discovery, and materials science.

- ### Relationships
  - partOf:: [[MLOps]]
  - dependsOn:: [[Model Training]]
  - dependsOn:: [[Model Registry]]
  - dependsOn:: [[Feature Store]]
  - requires:: [[Inference Engine]]
  - requires:: [[Model Serialisation]]
  - requires:: [[Containerisation]]
  - requires:: [[API Gateway]]
  - enables:: [[Edge Inference]]
  - enables:: [[Real-Time Prediction]]
  - enables:: [[Batch Inference]]
  - enables:: [[Model Monitoring]]
  - uses:: [[Docker]]
  - uses:: [[Kubernetes]]
  - uses:: [[REST API]]
  - uses:: [[gRPC]]
  - supports:: [[A/B Testing]]
  - supports:: [[Canary Deployment]]
  - supports:: [[Shadow Mode Deployment]]
  - contrastsWith:: [[Model Training]]
  - contrastsWith:: [[Model Evaluation]]
  - relatedTo:: [[Continuous Delivery]]
  - relatedTo:: [[Data Drift]]
  - relatedTo:: [[Model Versioning]]
  - bridges-to:: [[Serverless Computing]]
  - bridges-to:: [[Edge Computing]]

- ### Operational Concerns
  - **Latency and throughput budgeting** — serving SLAs must be defined before selecting deployment topology; online serving typically targets P99 latency under 200 ms, whilst edge deployments may target single-digit milliseconds.
  - **Autoscaling** — horizontal pod autoscalers in [[Kubernetes]] or managed scaling in cloud ML platforms (SageMaker, Vertex AI, Azure ML) respond to request volume, preventing over-provisioning at idle and under-provisioning at peak.
  - **[[Data Drift]] and concept drift detection** — production input distributions frequently diverge from training data over time; monitoring pipelines must track statistical properties of incoming features and model output distributions to trigger retraining alerts.
  - **Model rollback** — deployment pipelines must support rapid rollback to a previously validated model version when quality regressions are detected; this relies on the [[Model Registry]] retaining versioned artefacts.
  - **Logging and [[Explainability]]** — production inference logs (inputs, outputs, latencies, errors) are essential for debugging, compliance, and retraining data collection; explainability metadata (SHAP values, attention weights) supports regulated sectors.
  - **Shadow traffic and load testing** — synthetic or replayed production traffic is used to validate serving infrastructure before go-live, stress-testing autoscaling, cold-start times, and error-handling paths.
  - **Cost management** — GPU and accelerator costs dominate model serving budgets; quantisation, batching, caching of repeated inputs, and model distillation are the principal levers for cost reduction without sacrificing accuracy.

- ### Standards & Context
  - **ONNX (Open Neural Network Exchange)** — an open interchange format for ML model graphs that enables deployment of models trained in one framework (PyTorch, TensorFlow) onto inference runtimes targeting different hardware backends.
  - **MLflow** — an open-source [[MLOps]] platform providing model packaging (MLflow Models), model registry, and deployment plugins for diverse serving targets.
  - **KServe / Seldon Core** — Kubernetes-native model serving frameworks that implement the V2 Inference Protocol (KFServing), standardising request/response schemas across serving runtimes.
  - **NVIDIA Triton Inference Server** — an open-source multi-framework inference server that supports concurrent model execution, dynamic batching, and ensemble pipelines.
  - **BentoML** — a framework for packaging ML models with their serving logic into portable Bento artefacts deployable to cloud and on-premise targets.
  - **ISO/IEC 42001** — the AI management system standard that includes governance requirements relevant to AI model deployment, covering risk assessment, transparency, and operational monitoring.
  - **EU AI Act** — European regulation imposing conformity assessments and technical documentation requirements on high-risk AI systems, directly governing how models may be deployed in sensitive domains.

- ### Provenance
  - sources:: ONNX specification; MLflow documentation; KServe V2 Inference Protocol; Sculley et al. "Hidden Technical Debt in Machine Learning Systems" (NeurIPS 2015); Google ML Engineering best practices
  - updated:: 2026-06-13
