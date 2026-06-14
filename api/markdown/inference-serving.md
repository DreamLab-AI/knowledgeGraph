- ### Definition
  - Inference serving is the end-to-end runtime discipline of deploying trained [[Machine Learning]] models as production services that respond to prediction requests at controlled [[Latency]] and high [[Throughput]]. It combines a dedicated [[AI Model Inference Engine]] with infrastructure layers—request routing, [[Dynamic Batching]], accelerator scheduling, [[Autoscaling]], and [[Observability]]—to meet [[Service Level Objective]]s under real-world concurrent load. Inference serving is distinct from [[Model Training]]: whereas training maximises hardware utilisation over long batch jobs, serving must satisfy per-request latency budgets while simultaneously maximising accelerator occupancy across many short, heterogeneous requests.

- ### Overview
  - Inference serving emerged as its own engineering discipline when deploying models to production proved far harder than training them. A model exported from a training framework (PyTorch, JAX, TensorFlow) must be compiled or converted to a runtime-optimised format, wrapped in a network-accessible service, protected against overload, and continuously monitored.
  - The fundamental tension in inference serving is between **latency** (keeping individual requests fast) and **throughput** (amortising expensive compute across many requests). [[Dynamic Batching]] resolves this partially—grouping concurrent requests into a single GPU kernel call—but increases tail latency. Serving systems expose configuration knobs that operators tune to meet their [[Service Level Objective]].
  - For [[Large Language Model]]s (LLMs), inference serving adds further complexity: autoregressive decoding is memory-bandwidth-bound, sequences have variable length, and the [[KV Cache]] grows with context. Frameworks such as vLLM introduced [[Paged Attention]] and continuous batching to address these constraints at scale.
  - Cloud providers offer managed inference serving via hosted APIs; enterprises increasingly operate self-hosted serving stacks on [[GPU]] clusters to reduce cost and preserve data privacy.

- ### Key Components
  - **[[AI Model Inference Engine]]** — the core compute kernel (TensorRT, ONNX Runtime, vLLM) that executes the optimised model graph on hardware.
  - **[[Model Runtime]]** — the container or process wrapping the engine with a gRPC/HTTP interface; examples include NVIDIA Triton Inference Server, TorchServe, BentoML.
  - **[[Request Queue]]** — buffers incoming prediction requests and enforces back-pressure; prevents cascade failure under traffic spikes.
  - **[[Dynamic Batching]]** — aggregates multiple concurrent requests into a single forward pass, improving [[GPU]] utilisation while bounding added latency.
  - **[[Autoscaling]]** — scales replica counts in response to request rate or GPU utilisation signals, typically orchestrated via [[Kubernetes]] Horizontal Pod Autoscaler or bespoke controllers.
  - **[[Load Balancer]]** — distributes requests across replicas; for stateful LLM sessions may use session-affinity routing.
  - **[[KV Cache]]** — for transformer models, caches key/value attention tensors across generation steps to avoid recomputing the full context on every token.
  - **[[Tensor Parallelism]]** — shards large model weight tensors across multiple GPUs; required when a single model exceeds a single accelerator's memory.
  - **[[Model Quantisation]]** — reduces weight precision (FP16, INT8, INT4) to lower memory footprint and increase throughput at the cost of marginal accuracy loss.
  - **[[Observability]]** — metrics (tokens/sec, request latency percentiles, error rate, GPU memory), traces, and logs feeding [[Monitoring]] dashboards and alerting.
  - **[[Model Registry]]** — version-controlled store from which the serving stack pulls model artefacts at deployment time.

- ### Mechanisms
  - **Continuous batching** (iteration-level scheduling) — instead of waiting for a full batch to complete before accepting new requests, the scheduler inserts new sequences into in-flight batches at each decode step. This dramatically improves GPU utilisation for LLMs with variable output lengths.
  - **[[Paged Attention]]** — manages the KV cache in fixed-size pages (similar to OS virtual memory), preventing fragmentation and enabling serving many more concurrent sequences per GPU.
  - **Speculative decoding** — a small draft model proposes multiple tokens; the large target model verifies them in parallel, reducing wall-clock time for memory-bound decode.
  - **Pipeline parallelism** — splits model layers across multiple devices, pipelining micro-batches to hide inter-device communication latency.
  - **Prefix caching** — stores KV cache for shared system prompts so repeated identical prefixes are not recomputed for each request.
  - **Disaggregated prefill/decode** — routes the compute-intensive prefill phase to high-throughput hardware and memory-bandwidth-intensive decode to separate nodes.

- ### Applications and Use Cases
  - **Conversational AI and chatbots** — LLM inference serving underpins products like Claude, ChatGPT, and Gemini, where thousands of concurrent streaming responses must be generated with sub-second time-to-first-token.
  - **Search and recommendation** — embedding models and ranking models served at low latency to personalise results in real time.
  - **Computer vision APIs** — object detection, image classification, and OCR models served via REST APIs for document processing or content moderation pipelines.
  - **Speech-to-text and text-to-speech** — streaming audio transcription and synthesis requiring tight latency bounds for interactive applications.
  - **Code generation** — IDE integrations (e.g. GitHub Copilot) serving code completion with latency targets in the tens of milliseconds.
  - **Edge inference** — on-device or edge-server inference serving for applications where data must not leave a facility, using quantised models on NPUs or embedded GPUs.
  - **Multi-modal pipelines** — chains of vision encoders, text models, and audio decoders served in sequence or in parallel, coordinated by a serving orchestration layer.

- ### Relationships
  - partOf:: [[MLOps]], [[AI Infrastructure]]
  - requires:: [[AI Model Inference Engine]], [[GPU]], [[Container Orchestration]], [[Load Balancer]]
  - hasPart:: [[Dynamic Batching]], [[Autoscaling]], [[Model Runtime]], [[Request Queue]], [[Observability]]
  - dependsOn:: [[Model Registry]], [[Distributed Computing]]
  - enables:: [[Real-Time Inference]], [[Batch Inference]], [[LLM Deployment]]
  - uses:: [[Model Quantisation]], [[Tensor Parallelism]], [[KV Cache]]
  - contrastsWith:: [[Model Training]], [[Offline Batch Processing]]
  - relatedTo:: [[Latency]], [[Throughput]], [[Service Level Objective]], [[Triton Inference Server]], [[Ray Serve]]
  - bridges-to:: [[API Gateway]], [[Edge Computing]]
  - sameAs:: [[Model Inference Serving]]

- ### Notable Frameworks and Systems
  - **NVIDIA Triton Inference Server** — open-source multi-framework [[Model Runtime]] supporting TensorRT, ONNX, PyTorch, TensorFlow backends with concurrent model execution and [[Dynamic Batching]].
  - **vLLM** — high-throughput LLM inference engine using [[Paged Attention]] and continuous batching; widely adopted for open-weight model serving.
  - **TGI (Text Generation Inference)** — Hugging Face's LLM serving framework with tensor parallelism and quantisation support.
  - **Ray Serve** — distributed Python-native serving framework built on the [[Ray]] actor model, supporting arbitrary Python logic in the serving path.
  - **TorchServe** — PyTorch's reference serving framework for classification, detection, and NLP models.
  - **BentoML** — framework-agnostic serving layer with support for multi-model pipelines and cloud deployment targets.
  - **KServe** — Kubernetes-native [[Model Serving]] platform (formerly KFServing) providing a standard Inference API across frameworks.
  - **Ollama** — lightweight local inference serving tool for running open-weight LLMs on consumer hardware.

- ### Standards and Context
  - The **Open Inference Protocol** (formerly KServe V2 Inference Protocol) defines a standard HTTP/gRPC API for prediction requests, enabling portability across serving backends.
  - **ONNX (Open Neural Network Exchange)** standardises the model interchange format, ensuring models trained in one framework can be served by optimised runtimes.
  - Cloud providers (AWS SageMaker, Google Vertex AI, Azure ML) each publish managed inference serving APIs; the [[MLCommons]] organisation runs the **MLPerf Inference** benchmark suite to standardise throughput and latency measurement across hardware and software stacks.
  - [[Kubernetes]] has become the de-facto orchestration substrate for inference serving at scale, with ecosystem tooling (KEDA, GPU Operator, KServe) extending it for ML workloads.
  - Cost and carbon efficiency are increasingly tracked alongside latency/throughput: operators measure tokens-per-watt and cost-per-million-tokens as first-class metrics.

- ### Provenance
  - sources:: NVIDIA Triton documentation; vLLM project; Hugging Face TGI; KServe project; MLCommons MLPerf Inference benchmark; Ray Serve documentation
  - updated:: 2026-06-13