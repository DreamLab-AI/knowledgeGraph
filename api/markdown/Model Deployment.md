
Model Deployment is the engineering discipline of transitioning a trained machine learning model from a development or research environment into a production system where it can serve real-time or batch predictions to users and downstream applications. It encompasses model packaging, serving infrastructure, API exposure, versioning, scaling, and monitoring, ensuring that the model behaves reliably and efficiently under operational conditions. Deployment strategies range from synchronous online endpoints for low-latency inference to batch scoring pipelines, edge device embedding, and serverless function invocations. The discipline is tightly coupled with MLOps practices that treat models as first-class software artefacts subject to continuous integration, delivery, observation, and rollback.

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
  - **[[Model Versioning]]** — systematic naming and tagging of deployed model versions, enabling simultaneous multi-version serving for [[A-B Testing]] and gradual rollouts.

- ### Deployment Strategies
  - **Online (real-time) serving** — the model is hosted as a persistent service that responds synchronously to individual inference requests with low latency (typically sub-100 ms); used for recommendation systems, fraud detection, and language model APIs.
  - **[[Batch Inference]]** — the model processes large datasets asynchronously on a schedule or triggered by an event; optimises throughput over latency and is suited to nightly scoring pipelines, report generation, and large-scale content moderation.
  - **[[Edge Inference]]** — the model is compiled and embedded directly on a device (mobile phone, IoT sensor, AR headset) using runtimes such as TensorFlow Lite, Core ML, or TensorRT, eliminating network round-trips and enabling offline operation.
  - **[[Serverless Computing]] deployment** — the model is wrapped in a function-as-a-service handler (AWS Lambda, Google Cloud Functions, Azure Functions) that scales to zero when idle, reducing operational cost for infrequent inference workloads.
  - **[[Canary Deployment]]** — a new model version is released to a small fraction of production traffic before full promotion, allowing comparison of live metrics against the incumbent before committing to a full rollout.
  - **[[Shadow Mode Deployment]]** — a new model receives a copy of live traffic in parallel with the incumbent but its outputs are not served to users; enables risk-free comparison of model behaviour on real data before promotion.
  - **Blue-Green Deployment** — two identical production environments (blue = current, green = new) are maintained; traffic is switched atomically from blue to green, enabling instant rollback by switching back.
  - **Multi-Armed Bandit serving** — traffic is dynamically routed across model variants in proportion to their observed performance, combining exploration of new models with exploitation of the best-performing one, a form of online [[A-B Testing]].

- ### Applications / Use Cases
  - **Recommendation engines** — e-commerce and streaming platforms deploy ranking models in real-time serving clusters that score candidate items for each user request within strict latency budgets.
  - **Natural language processing APIs** — large language models and embedding models are deployed as microservices (e.g. via [[vLLM]], TGI, or Triton Inference Server) to power chatbots, search, and document analysis.
  - **Computer vision pipelines** — object detection and image classification models are deployed at the edge on surveillance cameras, autonomous vehicles, and quality-inspection robots, requiring [[Edge Computing]] infrastructure.
  - **Financial risk scoring** — credit scoring and fraud detection models are deployed as low-latency REST services integrated into payment processing pipelines, subject to regulatory audit trails.
  - **Healthcare AI** — diagnostic assistance models are deployed within hospital information systems under strict governance requiring version locking, explainability logs, and human oversight hooks.
  - **Autonomous agents** — reinforcement learning policies and planning models are deployed as embedded runtimes within robotic control loops and [[Robotics]] stacks, demanding deterministic latency and fail-safe fallbacks.
  - **Scientific computing** — surrogate models for physics simulation are deployed as callable services consumed by optimisation workflows in climate modelling, drug discovery, and materials science.

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

- ### Current Landscape (2026)
  - By 2026 the deployment stack has fractured into distinct layers — full-lifecycle platforms (Amazon SageMaker AI, Vertex AI/Gemini Enterprise, Azure ML), inference servers (NVIDIA Triton, ONNX Runtime), and purpose-built LLM engines (vLLM, TensorRT-LLM, SGLang) — with inference servers increasingly acting as the runtime inside broader platforms rather than standalone products.
  - vLLM has become the de facto open-source LLM serving engine, exceeding one million installs per week and averaging 200-250 commits per week (Red Hat and IBM contributing ~25%); release 0.10.0 (mid-2025) deprecated the legacy "V0" engine and prioritised MoE cluster-scale serving, NVIDIA Blackwell FP4, and faster start-up.
  - NVIDIA Dynamo, launched March 2025 as an open-source datacentre-scale orchestration layer above vLLM/SGLang/TensorRT-LLM, popularised disaggregated prefill/decode serving, KV-aware routing and multi-tier KV-cache offloading, claiming up to 30x more requests served on DeepSeek-R1 on Blackwell; by 2026 it ships SLA-driven Kubernetes deployment (DynamoGraphDeploymentRequest) and an AI Configurator for offline tuning.
  - Kubernetes-native serving matured sharply: KServe v0.15 (May 2025), now a CNCF incubating project, added first-class vLLM backend support, distributed KV cache via LMCache, KEDA autoscaling on LLM-specific metrics and initial Envoy AI Gateway support; Triton 25.12 added multi-LoRA for the TensorRT-LLM backend.
  - Cost and efficiency now dominate the agenda — disaggregated serving, speculative decoding (e.g. Eagle3 draft models), FP8/FP4 quantisation, prefix-cache-aware routing, and scale-to-zero serverless GPUs; ByteDance reported ~50% cost reduction serving multimodal LLMs on AWS Inferentia2 with INT8 quantisation and tensor parallelism.
  - EU AI Act GPAI provider obligations (Articles 53/55) have applied since 2 August 2025, and from 2 August 2026 the Commission's enforcement and fining powers (up to 3% of global turnover or EUR 15m) plus Article 50 transparency duties for deployers take effect, making documentation, training-data summaries and synthetic-content marking hard deployment requirements.
  - Open challenges as of 2026 include there being no single best serving stack (teams must benchmark per workload), reliable long-context and MoE serving at cluster scale, LLM-specific fault tolerance and fast cold-starts, KV-cache memory pressure, and governing variable token-level cost and compliance across agentic, multi-model production pipelines.

- ### References
  - 1. Anaconda (2026). AI Model Deployment Platforms: The 2026 Landscape. https://www.anaconda.com/guides/ai-model-deployment-platforms
  - 2. NVIDIA (2025). Introducing NVIDIA Dynamo, A Low-Latency Distributed Inference Framework for Scaling Reasoning AI Models. https://developer.nvidia.com/blog/introducing-nvidia-dynamo-a-low-latency-distributed-inference-framework-for-scaling-reasoning-ai-models/
  - 3. DataFormatHub (2026). MLOps 2026: Why KServe and Triton are Dominating Model Inference. https://dev.to/dataformathub/mlops-2026-why-kserve-and-triton-are-dominating-model-inference-577m
  - 4. InferenceOps (2025). State of the Model Serving Communities - October 2025. https://inferenceops.substack.com/p/state-of-the-model-serving-communities-269
  - 5. European Commission (2025). Guidelines for providers of general-purpose AI models under the AI Act. https://digital-strategy.ec.europa.eu/en/policies/guidelines-gpai-providers

- ### Provenance

