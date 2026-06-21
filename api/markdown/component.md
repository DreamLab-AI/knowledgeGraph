- ### Definition
  - A Component is a discrete, self-contained, and modular unit within an [[AI Infrastructure]] or broader software ecosystem that encapsulates a specific, well-bounded capability, exposes that capability through a formally defined [[Interface]] or [[API]], and can be independently developed, tested, versioned, deployed, and replaced without disrupting the enclosing system. Components are the fundamental architectural atoms of modern [[AI System (EU Definition)]] design: they range from physical [[Hardware Component]] accelerators such as [[GPU Compute]] clusters, TPUs, and NPUs through logical [[Software Module]] artefacts such as data ingestion connectors, feature transformers, [[Inference Engine]] runtimes, and monitoring sidecars, to structural [[Neural Network]] elements such as [[Neural Network Layer]] blocks, [[Attention Mechanism]] heads, and [[Transformer Architecture]] encoder stacks. The defining properties of a well-designed Component are [[Modularity]] (a single bounded responsibility), [[Reusability]] (deployable across multiple systems or contexts), [[Testability]] (exercisable in isolation with mock dependencies), and replaceability (interchangeable with alternative implementations satisfying the same interface contract). Modern AI component design is governed by the principle of [[Separation of Concerns]]: each Component owns one dimension of a system's behaviour — data ingestion, [[Feature Engineering]], model training, [[Model Serving]], or [[Monitoring]] — and communicates with peer Components only through contracted boundaries, typically REST, gRPC, or message-bus protocols in [[Microservices]] deployments, or language-level abstractions such as PyTorch modules and TensorFlow Keras layers in [[Deep Learning]] frameworks. The [[Machine Learning Pipeline]] is itself a composition of Components wired through [[Data Pipeline]] connectors, orchestrated by workflow engines and lifecycle managers captured under [[MLOps]] practice. Governance standards [[ISO/IEC 23053]] (Machine Learning framework for AI systems) and [[ISO/IEC 25010]] (Software Quality Model) formalise Component-level quality attributes — functional suitability, performance efficiency, reliability, security, and maintainability — as evaluable properties applicable to every Component in a deployed [[AI System (EU Definition)]].

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Component
  - owl-role:: Concept
  - owl-inferred:: ai:ModularUnit, ai:ArchitecturalElement, ai:SoftwareArtifact
  - belongs-to-domain:: [[Artificial Intelligence]], [[AI Infrastructure]], [[Digital Infrastructure]]
  - implemented-in-layer:: [[Software Architecture]]

- ### Relationships
  - is-subclass-of:: [[AI Infrastructure]], [[Digital Infrastructure]], [[Software Architecture]]
  - has-part:: [[Hardware Component]], [[Software Module]], [[Neural Network Layer]], [[Data Pipeline]], [[Inference Engine]], [[Neural Network]], [[Attention Mechanism]], [[Transformer Architecture]], [[Embedding]], [[Model Serving]], [[Monitoring]], [[Feature Engineering]], [[Model Registry]]
  - requires:: [[Interface]], [[API]], [[Modularity]], [[Separation of Concerns]], [[Reusability]], [[Testability]], [[Containerisation]]
  - enables:: [[Reusability]], [[Testability]], [[Fault Tolerance]], [[Model Deployment]], [[Distributed Training]], [[MLOps]], [[Deep Learning]], [[Machine Learning Pipeline]], [[Model Serving]], [[AI System (EU Definition)]]
  - implements:: [[Design Pattern]], [[Separation of Concerns]], [[Dependency Injection]], [[Event-Driven Architecture]], [[Microservices]]
  - depends-on:: [[AI Framework]], [[Containerisation]], [[Kubernetes]], [[Service Mesh]], [[Feature Engineering]], [[GPU Compute]], [[Edge Computing]]
  - supports:: [[Machine Learning Pipeline]], [[Model Serving]], [[Data Governance]], [[Deep Learning]], [[Artificial Intelligence]], [[Embedded Systems]], [[MLOps]], [[Distributed Training]]
  - uses:: [[GPU Compute]], [[Edge Computing]], [[Vector Database]], [[Model Registry]], [[MLOps]], [[Monitoring]], [[API]], [[Kubernetes]], [[Service Mesh]]
  - contrasts-with:: [[Monolithic Architecture]]
  - related-to:: [[AI Framework]], [[Microservices]], [[Embedded Systems]], [[Event-Driven Architecture]], [[Feature Engineering]], [[Transformer Architecture]], [[Monitoring]], [[Neural Network]], [[Attention Mechanism]], [[ISO/IEC 23053]], [[ISO/IEC 25010]], [[Neural Network Layer]], [[Model Registry]], [[Data Pipeline]], [[Inference Engine]], [[Large Language Model]], [[Safety]], [[Explainability]], [[Retrieval-Augmented Generation]], [[Quantisation]], [[Knowledge Distillation]], [[Responsible AI]], [[Benchmark]]
  - standardized-by:: [[ISO/IEC 23053]], [[ISO/IEC 25010]], [[EU AI Act]]

- ### Content

  ## Compositional Relationships (Components)
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:hasPart ai:HardwareComponent))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:hasPart ai:SoftwareModule))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:hasPart ai:NeuralNetworkLayer))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:hasPart ai:DataPipeline))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:hasPart ai:InferenceEngine))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:hasPart ai:MonitoringSidecar))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:hasPart ai:AttentionHead))

  ## Dependency Relationships
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:requires ai:Interface))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:requires ai:API))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:requires ai:Modularity))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:dependsOn ai:AIFramework))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:dependsOn ai:Containerisation))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:dependsOn ai:Kubernetes))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:dependsOn ai:ServiceMesh))

  ## Capability Relationships
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:enables ai:Reusability))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:enables ai:Testability))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:enables ai:FaultTolerance))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:enables ai:ModelDeployment))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:enables ai:DistributedTraining))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:supports ai:MachineLearningPipeline))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:supports ai:ModelServing))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:supports ai:DataGovernance))

  ## Implementation Relationships
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:implements ai:SeparationOfConcerns))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:implements ai:DesignPattern))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:implements ai:DependencyInjection))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:uses ai:GPUCompute))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:uses ai:EdgeComputing))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:uses ai:VectorDatabase))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:uses ai:ModelRegistry))

  ## Reduction Relationships
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:reducesTo ai:SoftwareModule))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:reducesTo ai:NeuralNetworkLayer))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:contrastsWith ai:MonolithicArchitecture))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:relatedTo ai:Microservices))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:relatedTo ai:EventDrivenArchitecture))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:relatedTo ai:FeatureEngineering))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:relatedTo ai:TransformerArchitecture))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:standardizedBy ai:ISOIEC23053))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:standardizedBy ai:ISOIEC25010))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:standardizedBy ai:EUAIAct))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:partOf ai:AISystemEUDefinition))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:uses ai:Monitoring))
      SubClassOf(ai:Component
        ObjectSomeValuesFrom(ai:uses ai:Kubernetes))

  ## About
  The concept of a Component traces its lineage to the earliest modular programming traditions of the 1970s — David Parnas's seminal work on information hiding (1972) established that software should be decomposed into modules, each encapsulating a single design decision behind a stable interface. Parnas argued that the criterion for modularisation should not be the temporal sequence of execution steps but rather the isolation of likely changes: a module's interface should expose only what is necessary, hiding its internal representation so that it can be changed without rippling effects through the rest of the system. This principle — now so axiomatic that it appears in virtually every software engineering curriculum — was profoundly non-obvious at the time, when monolithic batch programmes were the norm. Component-Based Software Engineering (CBSE) emerged as a distinct discipline in the late 1990s through the work of Clemens Szyperski (Component Software: Beyond Object-Oriented Programming, 1997), which formalised the notion of binary components as deployable, composable units distinct from object classes. A component in Szyperski's definition is a unit of composition with contractually specified interfaces and explicit context dependencies only; it can be deployed independently and is subject to composition by third parties. This definition deliberately separated the component concept from object-oriented implementation: a component need not be a class hierarchy; it can be any executable artefact — a shared library, a COM object, a Java bean, a Docker image — provided it exposes a formal interface contract and can be deployed without modification. The discipline was further institutionalised through standards bodies and industry consortia such as the Object Management Group (OMG) and the Common Object Request Broker Architecture (CORBA), which defined interoperability contracts for distributed component systems. Enterprise JavaBeans (EJB), Microsoft's Component Object Model (COM/DCOM), and Sun's JavaBeans brought component concepts to mainstream enterprise software development through the late 1990s and 2000s.

  In the contemporary [[Artificial Intelligence]] landscape, the Component concept has undergone a significant expansion in scope and granularity. A single AI system now routinely involves dozens of heterogeneous Components operating across multiple layers: physical compute Components ([[GPU Compute]], [[Edge Computing]] devices, TPUs), data Components ([[Data Pipeline]], [[Feature Engineering]] stores, [[Vector Database]] indices), model Components ([[Neural Network]] architectures, individual [[Neural Network Layer]] stacks, [[Attention Mechanism]] blocks, [[Transformer Architecture]] encoders and decoders), serving Components ([[Inference Engine]], [[Model Serving]] runtimes, [[Model Registry]]), and operational Components ([[MLOps]] toolchains, [[Monitoring]] sidecars, [[Data Governance]] policy engines). Each of these Component categories operates under distinct engineering constraints — compute Components prioritise throughput and energy efficiency; data Components prioritise latency and freshness; model Components prioritise accuracy, calibration, and inference speed; serving Components prioritise availability, scalability, and SLA compliance.

  A crucial insight from the "Hidden Technical Debt in Machine Learning Systems" paper (Sculley et al., NeurIPS 2015) is that ML Components accumulate debt in ways invisible to conventional software engineering audits. Unlike classical components whose behaviour is fully determined by their code, an ML model Component's behaviour is jointly determined by its code (architecture, training procedure) and its data (training corpus, preprocessing pipeline). Changing any upstream data Component — even in ostensibly unrelated ways — can silently alter the behaviour of downstream model Components. This data dependency, sometimes called "unstable data dependencies," creates implicit coupling between Components that [[Interface]] contracts alone cannot capture. The solution, operationalised by the [[MLOps]] movement, is to treat data schemas, feature distributions, and model calibration curves as first-class elements of the Component contract — what Breck et al. (2017) formalised as the ML Test Score, a rubric scoring the completeness of a system's Component-level testing and monitoring.

  The rise of [[Microservices]] and [[Containerisation]] with [[Kubernetes]] orchestration has made component boundaries explicit at the infrastructure level: each logical Component is packaged as one or more container images, deployed as a Kubernetes Deployment or StatefulSet, and exposed through a [[Service Mesh]] (Istio, Linkerd) that enforces traffic policies, mutual TLS, and observability. [[Event-Driven Architecture]] patterns such as the Saga and Event Sourcing enable Components to collaborate asynchronously without tight runtime coupling, dramatically improving [[Fault Tolerance]] and independent scalability. The Circuit Breaker pattern — implemented by Components such as Netflix Hystrix, Resilience4j, and Istio's outlier detection — prevents cascading failures across Component boundaries when a downstream Component degrades or becomes unavailable, automatically routing traffic around failed Components and resuming normal operation once the downstream recovers.

  ### The Component Interface Contract

  The interface contract is the binding specification between a Component and its consumers. In classical software engineering, interface contracts encompass: the syntactic signature (function names, parameter types, return types), the semantic specification (preconditions, postconditions, invariants), and performance characteristics (latency bounds, throughput limits, resource consumption profiles). For AI Components, the contract must additionally encompass:

  - **Input distribution specification**: the statistical properties of valid inputs — supported token vocabularies, image resolution ranges, expected feature value distributions, out-of-distribution handling behaviour.
  - **Output calibration guarantees**: whether the Component's confidence scores are calibrated (i.e., P(Y=1 | score=0.7) ≈ 0.70), essential for downstream Components that use scores as decision inputs.
  - **Fairness constraints**: documented demographic parity, equalised odds, or counterfactual fairness guarantees that downstream Components may rely upon for regulatory compliance.
  - **Versioning and backward compatibility**: semantic versioning (SemVer) conventions adapted for model artefacts — a major version increment signals a breaking change in output distribution, a minor increment signals accuracy improvement within the same distribution, a patch increment signals bug fix with no behavioural change.
  - **Lineage metadata**: provenance of training data, preprocessing transformations, and evaluation conditions, required for EU AI Act Article 11 technical documentation compliance.

  ### Design Patterns for AI Component Systems

  Several [[Design Pattern]]s have emerged for structuring interactions between AI Components:

  - **Strangler Fig Pattern**: incrementally replace a monolithic ML system by routing a growing fraction of traffic to new modular Components while the legacy system handles the remainder. Used at scale in transitioning from single-model serving to multi-model ensemble serving.
  - **Sidecar Pattern**: deploy operational Components (logging, monitoring, service mesh proxies, secret management) as co-located sidecars alongside primary model serving Components, avoiding invasive modifications to model code. The [[Monitoring]] sidecar pattern is now standard in Kubernetes-based AI deployments.
  - **Ambassador Pattern**: a proxy Component that handles outbound communication from a service Component, implementing retries, circuit breaking, and observability without modifying the service itself.
  - **Anti-Corruption Layer**: an adapter Component that translates between the domain models of two systems, preventing the concepts of one Component's bounded context from corrupting the domain model of another — particularly important when integrating legacy data pipeline Components with modern ML serving Components.
  - **Bulkhead Pattern**: isolate Components into pools so that overload or failure in one Component (e.g., a high-latency inference call) does not deplete shared resources and cascade to unrelated Components.
  - **[[Dependency Injection]]**: inject Component dependencies (feature stores, model registries, inference runtimes) as constructor or configuration parameters rather than hardcoding them, enabling testing with mock Components and reconfiguration without code changes.

  ## Components / Architecture

  ### Hardware Components
  - **GPU Accelerator**: NVIDIA H100/A100, AMD MI300X — primary training and inference compute; connected via NVLink or PCIe; characterised by thousands of CUDA/ROCm cores and high-bandwidth memory (HBM3, up to 3.35 TB/s on H100 SXM).
  - **TPU / AI ASIC**: Google TPUv4/v5, AWS Trainium/Inferentia, Intel Gaudi — application-specific silicon optimised for matrix multiply-accumulate at large batch sizes; typically more energy-efficient than general-purpose GPUs for specific workloads.
  - **NPU / Edge Chip**: Apple Neural Engine, Qualcomm Hexagon, Arm Ethos — low-power inference accelerators for mobile, wearable, and IoT [[Edge Computing]] deployment.
  - **Memory Subsystem**: HBM3 on-package DRAM, CXL-attached memory expansion — a first-class Component constraint for [[Large Language Model]] inference where KV-cache footprint determines achievable context length.

  ### Software Module Components
  - **Data Ingestion Connector**: adapters for structured databases, object stores (S3, GCS), streaming brokers (Kafka, Pulsar), and API endpoints; implements [[Data Pipeline]] ingress.
  - **Feature Transform Module**: performs normalisation, tokenisation, embedding lookup, and augmentation; exposes a stateless transform interface consumed by training and serving Components.
  - **Model Artefact Component**: a versioned bundle of serialised weights (PyTorch state_dict, SafeTensors, ONNX, TensorRT engine) plus metadata (architecture, training provenance, evaluation metrics) stored in a [[Model Registry]].
  - **Inference Engine Component**: runtimes such as NVIDIA Triton Inference Server, vLLM, TorchServe, TF Serving, and llama.cpp that load model artefacts and expose prediction endpoints; implement batching, quantisation (INT8, FP8, GPTQ, AWQ), and caching.
  - **Monitoring Sidecar**: collects latency, throughput, drift metrics, and logs; exports to OpenTelemetry collectors; signals [[Fault Tolerance]] circuit breakers on threshold breaches.

  ### Neural Network Components
  - **[[Neural Network Layer]]**: the elemental computational unit — linear transformation followed by activation; weight matrices W ∈ R^(d_out × d_in) constitute the trainable parameters; stacked layers compose [[Deep Learning]] architectures.
  - **[[Attention Mechanism]] Head**: in [[Transformer Architecture]] models, each head computes Q = XW_Q, K = XW_K, V = XW_V then Attention(Q,K,V) = softmax(QK^T / √d_k)V; multi-head attention concatenates H parallel heads.
  - **Encoder/Decoder Block**: composed of multi-head attention, feed-forward sublayer, layer normalisation, and residual skip connections; the repeating structural block of [[Transformer Architecture]] architectures (BERT encoders, GPT decoders).
  - **Embedding Component**: maps discrete tokens or entities to continuous dense vectors in R^d; positional embeddings, learned embeddings, and pre-trained embeddings (word2vec, GloVe, fastText) are distinct Component variants.

  ### Orchestration Components
  - **Container Image**: OCI-compliant bundle of filesystem layers encapsulating Component runtime and dependencies; built via Dockerfile or Buildpacks; stored in container registries (Docker Hub, GCR, ECR).
  - **Kubernetes Operator**: custom controller that extends the Kubernetes API to manage AI workload lifecycle — e.g., the Kubeflow Training Operator manages distributed [[Distributed Training]] jobs with gang scheduling.
  - **Service Mesh Proxy**: Envoy-based sidecars (Istio) intercept all inter-Component traffic, enforcing mTLS, rate limiting, circuit breaking, and distributed tracing without modifying Component code.

  ## Use Cases / Major Families

  ### AI System Component Families
  Component composition patterns in deployed AI systems cluster into several recognisable families:

  **Foundation Model Serving Stack**: a [[Transformer Architecture]] model artefact Component (e.g., Llama-3.1-70B, Mistral-7B) paired with a vLLM or TGI inference engine Component implementing paged attention for efficient KV-cache management, fronted by a load-balancing gateway Component and a [[Monitoring]] Component exporting token-per-second throughput and per-request latency metrics. Increasingly, these stacks also include a [[Vector Database]] Component for Retrieval-Augmented Generation context injection, a guardrail Component (Nvidia NeMo Guardrails, Llama Guard) enforcing content policy, and a tracing Component (LangSmith, Arize Phoenix) capturing prompt-response pairs for debugging. The KV-cache manager — responsible for allocating and evicting cached attention key-value tensors during multi-turn conversations — is an increasingly critical Component, with PagedAttention (vLLM) achieving 24x higher throughput than naive implementations on equivalent hardware.

  **Autonomous Agent Pipelines**: multi-Component architectures orchestrating planning, tool-use, memory retrieval, and action execution Components in a loop. Frameworks such as LangChain, LlamaIndex, and AutoGen formalise these Component boundaries. Each agent step — intent classification, tool routing, response generation, result parsing — maps to an independent Component with a defined contract. The Model Context Protocol (MCP, 2025) standardises the [[API]] between orchestrator and tool Components, enabling cross-vendor composition: an orchestrator Component from one provider can invoke tool Components (web search, code execution, database query, file system access) from any MCP-compliant server, treating each tool as a stateless Component with a JSON Schema-typed interface.

  **Edge AI Inference**: NPU-accelerated Components running quantised (INT4/INT8) model artefacts on-device, typically packaged as platform-specific libraries (Core ML, TFLite, ONNX Runtime Mobile). Components communicate with cloud [[Data Pipeline]] Components for periodic model update delivery and telemetry upload. The on-device Component architecture must accommodate strict constraints: memory envelope (typically 512 MB–4 GB on mobile), thermal budget (preventing chip throttling under sustained inference), and battery draw (INT4 quantised models achieve 4–8x power reduction over FP16 equivalents on equivalent NPU hardware). Apple's Neural Engine Components (ANE) in the M-series chips execute 35+ trillion operations per second (TOPS) at sub-2W power draw, enabling on-device inference of 3B–7B parameter models without server round-trips.

  **Data-Centric ML Pipelines**: [[Machine Learning Pipeline]] architectures composed of ingestion, validation (Great Expectations, Deequ), transformation (Apache Beam, dbt), training orchestration (Kubeflow Pipelines, Metaflow), evaluation, and push Components — each independently versioned and testable. The Feast feature store Component enforces training-serving consistency across offline and online stores. A particularly critical Component in production data pipelines is the **schema validator** — a stateless Component that checks that incoming data conforms to the expected schema and rejects or quarantines records that violate it. Schema drift between training and serving data (a common cause of model degradation) can be detected automatically by comparing serving-time schema statistics against training-time baselines, with the drift detector Component triggering retraining jobs when statistical tests (KL divergence, Population Stability Index) exceed configured thresholds.

  **Multimodal Processing Stacks**: modern AI systems processing text, images, audio, and structured data must compose domain-specific encoder Components — a vision encoder Component (CLIP ViT-L/14, DINOv2), an audio encoder Component (Whisper large-v3, EnCodec), and a text encoder Component (LLaMA-3.1-8B backbone) — through a cross-attention fusion Component or a projection MLP Component into a shared embedding space. Each encoder Component is independently pre-trained, versioned, and potentially replaceable with a newer model without modifying the fusion Component's interface, provided the output embedding dimensionality contract is maintained.

  **Federated Learning Components**: in federated settings, each participating data-holder device runs a local training Component that computes model updates on local data and sends gradient aggregations to a central aggregation Component. The differential privacy Component applies DP-SGD noise calibrated to a privacy budget ε, ensuring the aggregated update does not reveal individual participant data. The aggregation Component (Flower, TensorFlow Federated, PySyft) implements FedAvg or FedProx and coordinates the training rounds. Each of these is a distinct, independently deployable Component with a precisely specified interface and privacy guarantee.

  ## Academic Context

  Component-Based Software Engineering (CBSE) as a formal discipline originated with Brad Cox's Objective-C work on software ICs (1986), David Parnas's information hiding (1972), and Szyperski's synthesis (1997). The architectural description language (ADL) community — Shaw & Garlan's Software Architecture (1996), the Rapide, Wright, and Darwin ADLs — provided formal notation for Component connector specifications. In the Rapide ADL, a Component is modelled as a named unit with provided and required interface ports connected by typed, causal event connectors; architectural constraints are expressed as partial orders on event patterns. The Wright ADL (Allen & Garlan, 1997) uses a process-algebraic connector style based on CSP (Communicating Sequential Processes) to specify synchronisation protocols between Component ports, enabling architectural-level deadlock analysis without implementation. In the AI domain, the component abstraction became central with the emergence of modular [[Deep Learning]] frameworks: Theano (2010), Torch (2011), Caffe (2014), TensorFlow (2015), and PyTorch (2016) all expose component-like [[Neural Network Layer]] APIs. PyTorch's nn.Module class is the canonical AI-domain Component abstraction: a Module has a forward() method implementing the computation, parameters() returning trainable weight tensors, and named_children() exposing sub-Module Components, enabling recursive composition of arbitrarily nested Component hierarchies.

  Research on component interaction fidelity in AI systems accelerated with the publication of "Hidden Technical Debt in Machine Learning Systems" (Sculley et al., NeurIPS 2015), which catalogued the non-obvious coupling that emerges when ML Components share data schemas, feature representations, and calibration assumptions. The paper identified nine anti-patterns — entanglement, correction cascades, undeclared consumers, data dependencies, feedback loops — that emerge when Component boundary contracts are insufficiently specified. The subsequent [[MLOps]] movement operationalised this insight: Component boundary contracts must encompass not only functional correctness but statistical properties of input distributions and output calibrations. Breck et al. (2017) "The ML Test Score" formalised a scoring rubric covering 28 test categories across data validation, feature validation, model validation, and integration testing — providing a principled framework for Component-level quality assurance in ML systems.

  Formal verification of Component compositions has been addressed through interface automata (de Alfaro & Henzinger, 2001), contract-based design (Benveniste et al., 2012), and assume-guarantee reasoning frameworks. Interface automata generalise I/O automata by explicitly modelling both input and output actions, enabling game-theoretic compatibility checking: two Components are compatible if there exists a parallel composition strategy under which no illegal transitions are forced — a stronger condition than simple signature matching. Assume-guarantee reasoning (Pnueli 1985, Clarke et al. 1989) enables compositional verification by allowing each Component to be verified against its local specification while assuming the environment satisfies a contract; verified components can then be safely composed. The EU AI Act (Regulation 2024/1689, in force August 2024) introduced a regulatory obligation on component-level documentation: Article 11 mandates technical documentation covering the overall system architecture, a description of the main components, and their interaction — codifying CBSE practices into binding legal requirements for high-risk [[AI System (EU Definition)]] deployments. Article 17 mandates a quality management system specifying component testing and validation procedures, traceability, and change management protocols applicable to each Component in the system.

  ### Key Terminology Glossary
  - **Component**: a deployable, independently testable unit of software or hardware providing a specific capability through a formally defined interface.
  - **Interface**: the contract boundary between a Component and its consumers, specifying functional signatures, preconditions, postconditions, and performance characteristics.
  - **[[Modularity]]**: the property of a system wherein it can be decomposed into Components with minimal inter-Component coupling and maximal intra-Component cohesion.
  - **[[Reusability]]**: the degree to which a Component can be used in contexts other than the one for which it was originally designed, typically measured by the number of distinct deployments and the effort required for reuse.
  - **[[Testability]]**: the degree to which a Component can be exercised in isolation, typically by replacing its dependencies with mock or stub Components, enabling unit tests that run independently of the full system.
  - **[[Fault Tolerance]]**: the ability of a system to continue operating correctly (possibly with degraded performance) in the presence of Component failures, achieved through redundancy, circuit breaking, graceful degradation, and health monitoring.
  - **Compositionality**: the property that the behaviour of a Component composition can be determined from the behaviours of its constituent Components and the structure of their composition — the fundamental property that makes CBSE reasoning tractable.
  - **[[Separation of Concerns]]**: the design principle that each Component should address exactly one system concern, minimising the amount of information any one Component needs to know about others.
  - **Cohesion**: a measure of how closely related the responsibilities within a Component are; high cohesion indicates that a Component does one thing well; low cohesion suggests the Component should be further decomposed.
  - **Coupling**: a measure of the degree of inter-dependence between Components; low coupling is desirable, enabling independent evolution and deployment; high coupling creates fragility and deployment constraints.

  ## Benchmark Datasets and Evaluation Frameworks

  Component quality assessment in AI systems is supported by several established evaluation frameworks, benchmark suites, and quality scoring rubrics that have become de facto standards across the industry:

  **ML Test Score (Breck et al., 2017)**: a rubric scoring the completeness of an AI system's component-level testing infrastructure across 28 test categories — data validation (schema tests, distribution tests), [[Feature Engineering]] validation (range checks, distribution shift tests), model validation (accuracy thresholds, calibration tests, fairness metrics), and integration testing (end-to-end pipeline tests, performance regression tests, shadow deployment comparison). Organisations scoring above 12 on the 28-point scale demonstrate production-grade component quality practices; most production ML systems score between 0 and 4, indicating substantial technical debt in component boundary specification. The test score framework directly motivates investment in component-level [[Testability]] infrastructure as a first-class engineering concern.

  **MLflow Model Registry evaluation metrics**: the [[Model Registry]] component in [[MLOps]] platforms (MLflow, Kubeflow Model Registry, SageMaker Model Registry, Vertex AI Model Registry) maintains per-version evaluation metrics — accuracy, precision, recall, F1, AUC-ROC, calibration error, fairness metrics by protected group — that serve as component quality contracts. Version promotion gates enforce that a new model component version must meet or exceed the predecessor's metrics on a held-out evaluation dataset before it can be deployed. This implements [[Fault Tolerance]] at the component selection level: a regressing model Component is automatically blocked from deployment.

  **MLPerf Inference benchmarks**: the MLCommons MLPerf Inference benchmark suite provides standardised performance measurement for [[Inference Engine]] components across hardware platforms — evaluating throughput (queries per second), latency (single-stream and multi-stream scenarios), and energy efficiency (inferences per Joule) for standard model component types (image classification: ResNet-50, object detection: YOLO, language model: BERT, LLM: Llama-2-70B). Hardware vendors (NVIDIA, Intel, AMD, Qualcomm, ARM, Google) submit official results enabling direct component-level performance comparison. ARM Holdings' Ethos-U NPU Components and NVIDIA H100/B200 [[GPU Compute]] Components have both achieved MLPerf top-tier results in their respective deployment envelopes.

  **HELM (Holistic Evaluation of Language Models)**: Stanford's HELM framework provides standardised evaluation of language model components across 42 scenarios, 7 metrics (accuracy, calibration, robustness, fairness, bias, toxicity, efficiency), and multiple model component variants. HELM results enable head-to-head comparison of foundation model components under equivalent evaluation conditions, informing component selection for downstream application systems.

  **ISO/IEC 25010:2023 Quality Characteristics**: the Software Product Quality Model provides a systematic framework for Component quality attribute specification and measurement: functional suitability (completeness, correctness, appropriateness), performance efficiency (time behaviour, resource utilisation, capacity), compatibility (co-existence, interoperability), usability, [[Fault Tolerance|reliability]] (maturity, availability, fault tolerance, recoverability), security (confidentiality, integrity, non-repudiation, accountability, authenticity), maintainability ([[Modularity]], [[Reusability]], analysability, modifiability, [[Testability]]), and portability (adaptability, installability, replaceability). For AI-specific components, [[ISO/IEC 25010]] 2023 revision added accuracy, autonomy, adaptability, and interaction capability as AI-specific quality sub-characteristics applicable at the individual Component level.

  **Hugging Face Open LLM Leaderboard**: tracks performance of over 5,000 model components on standardised benchmarks (MMLU, HellaSwag, ARC, TruthfulQA, GSM8K, HumanEval, MATH), providing a community-governed reference for foundation model component selection. The Leaderboard 2.0 (2024) added multi-task reasoning benchmarks and reduced sensitivity to dataset contamination. As of June 2026, the leaderboard additionally includes efficiency metrics (parameters, context length, inference cost per thousand tokens) enabling holistic component selection decisions that balance capability against deployment cost.

  **GreenAI Component Metrics**: following the publication of "Energy and Policy Considerations for Deep Learning in NLP" (Strubell et al., 2019) and Patterson et al. (2021) "Carbon Footprint of Machine Learning", component-level energy and carbon footprint metrics have become standard reporting elements for major model components. Hugging Face's Model Hub includes CO2 emissions estimates per model component (derived from training flop counts, hardware efficiency curves, and grid carbon intensity). The MLPerf Power benchmark (2023) provides formal measurement methodology for component energy efficiency in inference workloads.

  ## Formal Component Models and Interface Specification Languages

  The academic and engineering communities have developed multiple formal notations for specifying Component interfaces and verifying composition correctness. These formalisms are increasingly applied to AI component systems, particularly in safety-critical applications where composition correctness guarantees are a regulatory requirement under the EU AI Act Article 17 quality management system provisions:

  **Architectural Description Languages (ADLs)**: formal notations for component-and-connector architecture specification. The Wright ADL (Allen & Garlan, 1997) uses CSP-based connectors to specify inter-component synchronisation protocols, enabling deadlock analysis at the architectural level without requiring implementation. The Acme ADL (Garlan et al., 2000) provides a generic component-connector-system ontology that serves as a neutral representation for architecture interchange between ADL tools. These formalisms directly implement [[Separation of Concerns]] at the architectural specification level, separating component behaviour specification from connector interaction specification.

  **Interface automata**: de Alfaro and Henzinger (2001) extended I/O automata with an interface automata model where each Component has input, output, and internal actions; the compatibility relation between Components is defined game-theoretically — two components are compatible if there exists a strategy by which their legal interactions never produce illegal states. Interface automata support compositional reasoning: if A is compatible with B and B is compatible with C under specific interface contracts, the three-way composition is verifiable from the pairwise compatibility proofs. This is particularly important for [[AI System (EU Definition)]] components where the full system composition cannot be exhaustively tested but pairwise interface compatibility can be formally verified using automated model checking tools (SPIN, UPPAAL, nuXmv).

  **Contract-Based Design (Benveniste et al., 2012)**: the assume-guarantee contract framework formalises each Component's interface as a pair (A, G) where A is the assumption about the environment and G is the guarantee the Component provides given that assumption. Component compositions are valid if each component's assumptions are entailed by the guarantees of its context — directly implementing [[Dependency Injection]] semantics at the formal level. The AGREE (Assume-Guarantee REasoning Environment) tool implements contract-based compositional verification for safety-critical system architectures (aviation, automotive), with AI component verification emerging as an application domain relevant to the UK MHRA's [[Software Architecture|SaMD]] guidance for AI medical devices.

  **Protocol Buffer / gRPC schemas**: in contemporary [[Microservices]] and AI serving architectures, Protocol Buffer (protobuf) schema definitions serve as the machine-enforceable Component interface contract. Protobuf schemas enforce type safety, required field constraints, and versioning compatibility across component boundaries — providing runtime enforcement of interface contracts that ADL-based static analysis cannot alone achieve. gRPC streaming enables bidirectional data flow between Components with defined message types and service method signatures. The [[Inference Engine]] [[API]] in most major serving frameworks (NVIDIA Triton, TorchServe, KServe) is defined in Protocol Buffers, standardising the [[Interface]] between model Components and serving infrastructure Components.

  **OpenAPI Specification**: for HTTP-based component APIs, the OpenAPI Specification (v3.1) provides a machine-readable contract format for REST APIs that enables automated client generation, mock Component creation for [[Testability|testing]], contract testing (Pact, Dredd), and [[API]] gateway configuration — implementing interface contract enforcement at the HTTP boundary. The EU AI Act's conformity assessment documentation requirements (Article 11) include technical documentation of component APIs and interaction protocols, making OpenAPI a natural documentation format for AI system Component interfaces.

  ## Current Landscape (2026)

  The dominant trend in AI Component design as of 2026 is the shift from hand-crafted monolithic models to **composition of pre-trained modular Components** governed by standard interfaces. Several forces drive this:

  **Model routing and mixture-of-experts (MoE)**: architectures like Mixtral 8x22B and DeepSeek-V3 decompose monolithic [[Transformer Architecture]] forward passes into router-gated expert Components, each specialised for a subdomain of the input space. This represents a Component-level architectural pattern within a single model artefact.

  **Multi-agent frameworks as component orchestrators**: OpenAI Swarm, Anthropic's agentic scaffolding, Google's Vertex AI Agent Builder, and the open-source LangGraph framework treat individual LLM calls, tool invocations, and memory retrievals as independent Components connected by an orchestration graph. The Model Context Protocol (MCP, 2025) standardises the [[API]] boundary between orchestrator and tool Components, enabling cross-vendor Component interoperability.

  **ISO/IEC 23053 adoption**: the 2023 Machine Learning framework standard, specifying how ML Components (dataset, training pipeline, model, serving layer, feedback loop) map onto an AI system architecture, has been widely adopted as a compliance reference for EU AI Act audits. [[ISO/IEC 25010]] (2023 revision) extended the Software Product Quality Model with AI-specific quality characteristics — accuracy, adaptability, autonomy — applicable at the Component level.

  **Open-source Component ecosystems**: Hugging Face Hub hosts over 900,000 model Components (as of June 2026), each a versioned, downloadable artefact with a standardised card format documenting intended use, training data, and evaluation results. This represents the largest public Component repository in software history. The Open Neural Network Exchange (ONNX) format provides a cross-framework Component portability layer: model Components trained in PyTorch can be exported to ONNX and then compiled by TensorRT, DirectML, or ONNX Runtime into accelerated native code for GPU, NPU, or CPU inference, separating the training Component from the deployment Component at the artefact boundary.

  **Composition via streaming and reactive patterns**: event-driven Component orchestration using Apache Kafka, Pulsar, or Kinesis as the inter-Component bus enables Components to react to data events rather than being polled. This pattern — popularised in streaming ML pipelines by Kafka Streams, Apache Flink, and RisingWave — allows Components to update incrementally as new data arrives without reprocessing entire datasets, dramatically reducing inference latency and compute cost in online learning deployments.

  **Standards for AI Component interoperability (2024-2026)**: beyond [[ISO/IEC 23053]] and [[ISO/IEC 25010]], emerging standards include NIST AI Risk Management Framework (AI RMF 1.0, 2023) which maps risk management requirements to AI Component types; IEEE P2840 (Standard for Responsible AI Licensing) governing Component intellectual property; and the MLCommons MLPerf benchmarking suite providing standard Component-level performance benchmarks (inference latency, throughput, accuracy) enabling objective comparison of competing [[Inference Engine]] and hardware Components. The EU AI Act's standardisation mandate has driven CEN/CENELEC to commence work on harmonised standards for AI Component documentation, testing, and monitoring — expected to be published in 2026-2027.

  ## UK Context

  The UK has significant academic and industrial strength in Component-based AI systems:

  **Academic research**: the University of Edinburgh's Informatics department — Europe's largest — runs research groups on dependable systems and verified component composition. Cambridge's Computer Laboratory has produced influential work on component interaction models through the Pict and Links programming language lines. Imperial College London's software reliability group investigates fault-tolerant Component design for safety-critical AI. University of Manchester's Advanced Processor Technologies group researches hardware Component design for neural inference.

  **Industrial ecosystem**: ARM Holdings (Cambridge) designs the NPU/ML processor Components (Ethos, Mali) that power mobile AI inference in billions of devices. DeepMind (London, now part of Google) develops modular RL and world-model architectures operationalised as composable Components. Graphcore (Bristol) produces the Intelligence Processing Unit (IPU) — a hardware Component specifically architected around the BSP (Bulk Synchronous Parallel) model for graph-structured neural network computation. Wayve (London) builds modular end-to-end autonomous driving systems composed of perception, prediction, and planning Components.

  **Northern England industrial context**: the Advanced Manufacturing Research Centre (AMRC, Sheffield) and National Robotics Innovation Centre (Liverpool) integrate AI perception and planning Components into manufacturing robotics systems. Manchester's MediaCity ecosystem hosts Component-level AI deployments for broadcast media production. The Henry Royce Institute (Manchester) applies modular AI Components in materials science discovery pipelines. The Digital Catapult (Newcastle office) supports Northern England scale-ups in developing and deploying modular AI Components for industrial process automation, with its PETRAS IoT Hub embedding AI sensor Components into connected manufacturing environments. University of Leeds's Institute for Data Analytics applies Component-based design to health data pipelines, where privacy-preserving federated Components process NHS patient records under GDPR and NHS Digital governance frameworks.

  **Regulatory context for UK Component deployment**: following the UK's post-Brexit approach to AI regulation, the AI Safety Institute (AISI) — established 2023 and expanded 2024 — focuses on evaluating frontier AI system Components for safety risks, particularly the emergent properties of large foundation model Components. AISI's evaluation framework assesses individual model Components for dangerous capabilities (CBRN, cyberoffence) through a structured Component-level testing protocol separate from system-level assessment. The UK DSIT Pro-Innovation Approach to AI Regulation positions component-level documentation as a sector-specific obligation rather than a cross-cutting legal requirement, in contrast to the EU AI Act's horizontal mandate — creating divergence in [[AI System (EU Definition)]] Component documentation standards between UK and EU deployments.

  ## Key Terminology Glossary

  - **Component**: a deployable, independently testable unit of [[Software Module|software]] or [[Hardware Component|hardware]] providing a specific capability through a formally defined [[Interface]], developed and maintained independently of the enclosing system.
  - **[[Interface]]**: the contract boundary between a Component and its consumers, specifying functional signatures, semantic preconditions and postconditions, performance characteristics, and — for AI Components — statistical input distribution and output calibration guarantees.
  - **[[Modularity]]**: the property of a system wherein it can be decomposed into Components with minimal inter-Component coupling and maximal intra-Component cohesion; the primary design principle enabling independent development, testing, and deployment.
  - **[[Reusability]]**: the degree to which a Component can be employed in contexts other than the one for which it was originally designed; maximised by abstract [[Interface]] specification, parameterisation, and minimal external dependencies.
  - **[[Testability]]**: the degree to which a Component can be exercised in isolation via [[Dependency Injection]] of mock dependencies, enabling unit tests that run independently of the full system deployment environment.
  - **[[Fault Tolerance]]**: the ability of a system to continue operating correctly in the presence of Component failures, achieved through redundancy, circuit breaking, graceful degradation, [[Monitoring]] sidecars, and Component health management.
  - **[[Separation of Concerns]]**: the design principle that each Component should address exactly one system concern, minimising the knowledge any one Component requires about others; implemented through [[Microservices]] decomposition and [[Neural Network Layer]] abstractions.
  - **[[Dependency Injection]]**: the practice of injecting Component dependencies (feature stores, model registries, inference runtimes) as constructor or configuration parameters rather than hardcoding them, enabling substitution of mock Components for testing and reconfiguration without code changes.
  - **Component contract**: the complete specification of a Component's interface encompassing: syntactic signature; semantic pre/post-conditions; performance characteristics; for ML Components, statistical input distribution specification, output calibration guarantees, and fairness constraints.
  - **[[Containerisation]]**: the packaging of a Component and its runtime dependencies into an OCI container image, enabling reproducible deployment across environments and forming the deployment unit boundary in [[Kubernetes]]-orchestrated AI systems.
  - **[[Service Mesh]]**: infrastructure layer (Istio, Linkerd) deploying sidecar proxy Components alongside service Components to enforce mutual TLS, traffic policy, observability, and circuit breaking without modifying Component application code.
  - **[[GPU Compute]]**: the class of parallel processing hardware Components (NVIDIA H100/B200, AMD MI300X) providing the dense matrix-multiply throughput required for [[Deep Learning]] training and inference; characterised by high-bandwidth memory (HBM3) and thousands of CUDA/ROCm cores.
  - **[[Edge Computing]]**: deployment of Component instances on devices close to the data source (IoT sensors, mobile phones, industrial PLCs) rather than centralised cloud, reducing latency and network dependency for inference Components.
  - **[[Model Registry]]**: a versioned repository Component storing serialised model artefact Components with metadata (architecture, training provenance, evaluation metrics), enabling governance, rollback, and deployment lifecycle management for [[MLOps]] pipelines.
  - **[[Vector Database]]**: a specialised storage Component optimised for approximate nearest-neighbour search over high-dimensional embedding vectors; used as a retrieval Component in [[Transformer Architecture]] Retrieval-Augmented Generation (RAG) architectures.
  - **Compositionality**: the property that the behaviour of a Component composition can be determined from the behaviours of its constituent Components and the connector structure — the foundational property enabling Component-Based Software Engineering reasoning to scale to large system assemblies.

  ## Future Directions (2026-2030)

  **Neuromorphic Components**: Intel Loihi 3 and IBM NorthPole neuromorphic chips implement spiking neural network (SNN) Components that process temporal spike patterns with sub-milliwatt power envelopes — promising for always-on edge AI sensing Components deployed in industrial IoT and wearable health monitoring contexts. The SNN Component's event-driven computation model avoids the continuous power draw of [[GPU Compute]] inference, achieving sub-1mW inference for sensor fusion workloads — directly enabling battery-powered [[Edge Computing]] Component deployments previously impractical with conventional [[Neural Network]] inference.

  **Self-assembling component graphs**: systems that dynamically compose Components from a registry in response to a task specification, without hand-coded wiring — emergent from multi-agent planning systems that treat tool Components as discoverable resources via the Model Context Protocol (MCP, 2025). An orchestrator Component discovers available tool Components at runtime from a registry, selects and chains them based on task requirements, and monitors their outputs for quality assurance — implementing a capability-driven Component composition model rather than a pre-specified topology. This approach enables [[AI System (EU Definition)]] designs that can adapt to changing tool Component availability without system-level reconfiguration, improving [[Fault Tolerance]] through dynamic rerouting around unavailable Components.

  **Verified component contracts**: applying formal methods (Lean 4, Coq, Isabelle proofs) to AI system Component interface contracts, enabling machine-checkable guarantees about Component composition correctness, data type safety, and distribution shift detection. Early work applies type-theoretic Component interface specifications to [[Neural Network Layer]] compositions, verifying that tensor shapes and dtype constraints are satisfied through the entire forward pass without requiring runtime shape checking — enabling zero-overhead composition verification. For [[AI System (EU Definition)]] safety cases under the EU AI Act, formal Component contract verification provides evidence of systematic specification and testing that traditional empirical testing alone cannot supply.

  **Quantum co-processor Components**: as quantum hardware matures, hybrid classical-quantum Component pairs will appear in AI pipelines for specific sub-tasks (variational quantum circuit Components for optimisation, quantum sampling Components for generative modelling). The classical Component handles data preparation, post-processing, and system integration while the quantum Component executes the quantum circuit — communicating via the QASM or OpenQASM [[Interface]] standard. Near-term quantum Components (NISQ era, 50-1000 qubits) show promise for specific sub-problems: variational quantum eigensolvers for drug discovery [[Data Pipeline]] Components, quantum approximate optimisation for combinatorial sub-problems in logistics planning pipelines.

  **Federated Component updates**: differential privacy-preserving protocols (DP-SGD, PATE) applied at the Component granularity, allowing model Components to be updated across federated participants without centralising raw training data. Each federated participant runs a local training Component computing gradient updates on local data; a central aggregation Component combines updates using FedAvg or FedProx while a differential privacy Component adds calibrated noise to the aggregated update. The [[Distributed Training]] Component architecture enables participation by NHS trusts, financial institutions, and telecommunications providers whose data cannot leave their premises — expanding the effective training data available to [[Deep Learning]] model Components without privacy compromise.

  **Component-native observability**: the convergence of OpenTelemetry's logging, metrics, and tracing specifications into a unified observability standard is creating Component-native observability infrastructure where each Component automatically emits structured telemetry through a standardised [[API]] — enabling [[Monitoring]] Components to automatically discover and instrument new AI Components without manual configuration, and enabling drift detection Components to alert on statistical anomalies in Component output distributions without application-level instrumentation changes.

  ## Research & Literature

  1. Parnas, D.L. (1972). "On the Criteria to be Used in Decomposing Systems into Modules." *Communications of the ACM*, 15(12), 1053-1058. https://dl.acm.org/doi/10.1145/361598.361623
  2. Szyperski, C. (1997). *Component Software: Beyond Object-Oriented Programming*. Addison-Wesley. ISBN 0-201-17888-5.
  3. Sculley, D. et al. (2015). "Hidden Technical Debt in Machine Learning Systems." *Advances in Neural Information Processing Systems (NeurIPS)*, 28. https://proceedings.neurips.cc/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html
  4. de Alfaro, L. & Henzinger, T.A. (2001). "Interface Automata." *Proceedings of ESEC/FSE*, 109-120. https://dl.acm.org/doi/10.1145/503209.503226
  5. Shaw, M. & Garlan, D. (1996). *Software Architecture: Perspectives on an Emerging Discipline*. Prentice Hall.
  6. Benveniste, A. et al. (2012). "Contracts for System Design." *Foundations and Trends in Electronic Design Automation*, 12(2-3). https://doi.org/10.1561/1000000053
  7. Cox, B.J. (1986). *Object-Oriented Programming: An Evolutionary Approach*. Addison-Wesley.
  8. ISO/IEC 25010:2023. *Systems and Software Engineering — Systems and Software Quality Requirements and Evaluation (SQuaRE): Product Quality Model*. ISO. https://www.iso.org/standard/35733.html
  9. ISO/IEC 23053:2022. *Framework for Artificial Intelligence (AI) Systems Using Machine Learning (ML)*. ISO. https://www.iso.org/standard/74438.html
  10. European Parliament (2024). *Regulation (EU) 2024/1689 — Artificial Intelligence Act*. Official Journal of the European Union. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689
  11. Serafini, L. et al. (2022). "Logic Tensor Networks." *Artificial Intelligence*, 303, 103649. https://doi.org/10.1016/j.artint.2021.103649
  12. Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep Learning*. MIT Press. https://www.deeplearningbook.org/
  13. Abadi, M. et al. (2016). "TensorFlow: A System for Large-Scale Machine Learning." *USENIX OSDI*, 265-283. https://www.usenix.org/conference/osdi16/technical-sessions/presentation/abadi
  14. Paszke, A. et al. (2019). "PyTorch: An Imperative Style, High-Performance Deep Learning Library." *NeurIPS*, 32. https://proceedings.neurips.cc/paper/2019/hash/bdbca288fee7f92f2bfa9f7012727740-Abstract.html
  15. Vaswani, A. et al. (2017). "Attention Is All You Need." *NeurIPS*, 30. https://proceedings.neurips.cc/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html
  16. Burns, B. et al. (2016). "Borg, Omega, and Kubernetes." *ACM Queue*, 14, 10-21. https://dl.acm.org/doi/10.1145/2898442.2898444
  17. Richardson, C. (2018). *Microservices Patterns*. Manning Publications. https://www.manning.com/books/microservices-patterns
  18. Kleppmann, M. (2017). *Designing Data-Intensive Applications*. O'Reilly Media.
  19. Kreuzberger, D. et al. (2022). "MLOps: Overview, Definition, and Architecture." *IEEE Access*, 11, 31866-31879. https://doi.org/10.1109/ACCESS.2023.3262138
  20. Hugging Face (2024). *Model Cards and the Hugging Face Hub: A Component Registry for AI*. https://huggingface.co/docs/hub/model-cards
  21. NVIDIA (2024). *NVIDIA Triton Inference Server Documentation*. https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/index.html
  22. OpenAI (2025). *Model Context Protocol (MCP) Specification v1.0*. https://modelcontextprotocol.io/specification
  23. Leanware (2026). *Enterprise AI Architecture: Key Components and Best Practices 2026*. https://www.leanware.co/insights/enterprise-ai-architecture
  24. ARM Holdings (2024). *Arm Ethos-U85 NPU Technical Reference Manual*. ARM DDI0603. https://developer.arm.com/documentation/ddi0603/
  25. Graphcore (2024). *IPU Architecture and Poplar SDK Programming Guide*. https://docs.graphcore.ai/projects/ipu-programmers-guide/
  26. Wayve (2025). "LINGO-2: Driving with Natural Language." *arXiv*, 2503.xxxxx.
  27. UK Research and Innovation (2024). *AI Infrastructure Investment Strategy: Modular Design Principles for National AI Compute*. UKRI Technical Report.
  28. Breck, E. et al. (2017). "The ML Test Score: A Rubric for ML Production Readiness and Technical Debt Reduction." *IEEE Big Data*, 1123-1132. https://research.google/pubs/the-ml-test-score-a-rubric-for-ml-production-readiness-and-technical-debt-reduction/
  29. MLCommons (2024). *MLPerf Inference v4.0 Results*. https://mlcommons.org/benchmarks/inference-edge/
  30. Gijsbers, P. et al. (2024). "AMLB: an AutoML Benchmark." *Journal of Machine Learning Research*, 25(101), 1-65. https://jmlr.org/papers/v25/22-0493.html
  31. Allen, R. & Garlan, D. (1997). "A Formal Basis for Architectural Connection." *ACM Transactions on Software Engineering and Methodology*, 6(3), 213-249. https://dl.acm.org/doi/10.1145/258077.258078
  32. Patterson, D. et al. (2021). "Carbon Footprint of Machine Learning Training Will Plateau, Then Shrink." *IEEE Micro*, 42(4), 18-28. https://arxiv.org/abs/2104.10350
  33. Strubell, E., Ganesh, A., & McCallum, A. (2019). "Energy and Policy Considerations for Deep Learning in NLP." *ACL 2019*. https://arxiv.org/abs/1906.02243

- ### Provenance
  - sources:: Szyperski 1997 Component Software; Parnas 1972 ACM Communications; Sculley et al. 2015 NeurIPS; ISO/IEC 23053:2022; ISO/IEC 25010:2023; EU AI Act 2024/1689; Leanware Enterprise AI Architecture 2026 (https://www.leanware.co/insights/enterprise-ai-architecture); NVIDIA Triton documentation; Hugging Face Hub; ARM Ethos documentation; Graphcore IPU documentation; Burns et al. 2016 Kubernetes; Vaswani et al. 2017 Attention Is All You Need
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm