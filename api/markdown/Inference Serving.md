public:: true

# Inference Serving
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4f2264cd683228e4854430d164c6b389f0a433a282887119aa5678a502b459d6",
  "@type": "Page",
  "vc:slug": "inference-serving",
  "title": "Inference Serving",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-model-inference-engine",
      "vc:label": "AI Model Inference Engine"
    },
    {
      "@id": "urn:visionflow:linked:model-serving",
      "vc:label": "Model Serving"
    },
    {
      "@id": "urn:visionflow:linked:latency",
      "vc:label": "Latency"
    },
    {
      "@id": "urn:visionflow:linked:gpu",
      "vc:label": "GPU"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Inference Serving"
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
  "@id": "urn:ngm:class:inference-serving",
  "@type": "Class",
  "label": "Inference Serving",
  "definition": "Inference serving is the end-to-end runtime discipline of deploying trained machine learning models as production services that respond to prediction requests at scale, with controlled latency and high throughput. It encompasses the inference engine, request routing, dynamic batching, accelerator scheduling, autoscaling, and observability infrastructure needed to meet service-level objectives. Unlike model training, inference serving must optimise for request-level latency, cost-per-query, and concurrent user load simultaneously. Modern inference serving platforms add specialised techniques such as continuous batching, quantisation, and KV-cache management to sustain high GPU utilisation across large language models and other deep neural network workloads.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-serving",
      "label": "Model Serving"
    },
    {
      "@id": "urn:ngm:class:cat-ai-infrastructure",
      "label": "AI Infrastructure (Artificial Intelligence)"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ai-model-inference-engine",
        "label": "AI Model Inference Engine"
      },
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      },
      {
        "@id": "urn:ngm:class:container-orchestration",
        "label": "Container Orchestration"
      },
      {
        "@id": "urn:ngm:class:load-balancer",
        "label": "Load Balancer"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:dynamic-batching",
        "label": "Dynamic Batching"
      },
      {
        "@id": "urn:ngm:class:autoscaling",
        "label": "Autoscaling"
      },
      {
        "@id": "urn:ngm:class:model-runtime",
        "label": "Model Runtime"
      },
      {
        "@id": "urn:ngm:class:request-queue",
        "label": "Request Queue"
      },
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:mlops",
        "label": "MLOps"
      },
      {
        "@id": "urn:ngm:class:ai-infrastructure",
        "label": "AI Infrastructure"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:real-time-inference",
        "label": "Real-Time Inference"
      },
      {
        "@id": "urn:ngm:class:batch-inference",
        "label": "Batch Inference"
      },
      {
        "@id": "urn:ngm:class:llm-deployment",
        "label": "LLM Deployment"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:model-registry",
        "label": "Model Registry"
      },
      {
        "@id": "urn:ngm:class:distributed-computing",
        "label": "Distributed Computing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:neural-network-quantisation",
        "label": "Model Quantisation"
      },
      {
        "@id": "urn:ngm:class:tensor-parallelism",
        "label": "Tensor Parallelism"
      },
      {
        "@id": "urn:ngm:class:kv-cache",
        "label": "KV Cache"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      },
      {
        "@id": "urn:ngm:class:offline-batch-processing",
        "label": "Offline Batch Processing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      },
      {
        "@id": "urn:ngm:class:throughput",
        "label": "Throughput"
      },
      {
        "@id": "urn:ngm:class:service-level-objective",
        "label": "Service Level Objective"
      },
      {
        "@id": "urn:ngm:class:triton-inference-server",
        "label": "Triton Inference Server"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:model-inference-serving",
      "label": "Model Inference Serving"
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
  "@id": "urn:visionflow:annotation:link-resolutions:inference-serving:b7a26fd99630",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4f2264cd683228e4854430d164c6b389f0a433a282887119aa5678a502b459d6"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Model Inference Engine]]",
      "resolved": "urn:visionflow:linked:ai-model-inference-engine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Model Serving]]",
      "resolved": "urn:visionflow:linked:model-serving",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Latency]]",
      "resolved": "urn:visionflow:linked:latency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[GPU]]",
      "resolved": "urn:visionflow:linked:gpu",
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

- ### Current Landscape (2026)
  - Prefill/decode (P/D) disaggregation — splitting the compute-bound prefill phase and the memory-bandwidth-bound decode phase onto separate GPU pools — has moved from research (DistServe, 2023) to the standard production playbook, with vLLM, SGLang, TensorRT-LLM, LMCache and MoonCake all shipping first-class support by 2025.
  - NVIDIA announced Dynamo at GTC in March 2025 as an open-source datacentre-scale orchestration layer (disaggregated serving, KV-aware smart routing, tiered KVBM cache offload across HBM/DRAM/SSD/remote, and the NIXL transfer library); it reported up to 30x more requests served on DeepSeek-R1 over GB200 NVL72, and reached v1.3.1 by August 2026.
  - llm-d, a Kubernetes-native distributed inference stack built on vLLM, launched in May 2025 with Red Hat, Google Cloud, IBM Research, CoreWeave and NVIDIA as founding contributors, and was accepted as a CNCF Sandbox project in March 2026, standardising disaggregation and prefix-cache-aware routing via the Gateway API Inference Extension (GAIE).
  - The serving stack consolidated sharply around vLLM and SGLang: Hugging Face put TGI into maintenance mode and, as of December 2025, officially recommends vLLM or SGLang instead; SGLang reports running on 400,000+ GPUs across xAI, NVIDIA, AMD and the major clouds.
  - Reported production gains from disaggregation reached roughly 6.4x throughput improvement, ~20x reduction in latency variance and 15-40% infrastructure cost savings; SGLang demonstrated DeepSeek-R1 P/D on 96 H100s and, in September 2025, up to 3.8x prefill and 4.8x decode gains on GB200 NVL72.
  - Tooling to tame configuration complexity emerged, including NVIDIA AIConfigurator (Pareto-frontier sizing for aggregated vs disaggregated deployments without burning GPU-hours) and the Rust-built vLLM Router (December 2025) for state-aware load balancing across NIXL and NCCL disaggregation backends.
  - Open challenges as of 2026 centre on rate-matching prefill and decode worker pools, the cost and latency of cross-node KV-cache transfer (requiring RDMA fabrics such as InfiniBand/RoCE), expert-parallelism token-routing skew for large MoE models, and interoperability, which the CNCF AI Conformance programme and GAIE are attempting to standardise.

- ### References
  - 1. Hao AI Lab, UC San Diego (2025). Disaggregated Inference: 18 Months Later. https://haoailab.com/blogs/distserve-retro/
  - 2. NVIDIA (2025). Introducing NVIDIA Dynamo, A Low-Latency Distributed Inference Framework for Scaling Reasoning AI Models. https://developer.nvidia.com/blog/introducing-nvidia-dynamo-a-low-latency-distributed-inference-framework-for-scaling-reasoning-ai-models/
  - 3. Google Cloud / Red Hat (2025). Enhancing vLLM for distributed inference with llm-d. https://cloud.google.com/blog/products/ai-machine-learning/enhancing-vllm-for-distributed-inference-with-llm-d
  - 4. Cloud Native Computing Foundation (2026). Welcome llm-d to the CNCF: Evolving Kubernetes into SOTA AI Infrastructure. https://www.cncf.io/blog/2026/03/24/welcome-llm-d-to-the-cncf-evolving-kubernetes-into-sota-ai-infrastructure/
  - 5. Arumugam, J. (2026). The LLM Serving Stack Just Consolidated. https://www.linkedin.com/pulse/llm-serving-stack-just-consolidated-jothiswaran-arumugam-t9yme
  - 6. NVIDIA (2026). Removing the Guesswork from Disaggregated Serving (AIConfigurator). https://developer.nvidia.com/blog/removing-the-guesswork-from-disaggregated-serving/

- ### Provenance
  - sources:: NVIDIA Triton documentation; vLLM project; Hugging Face TGI; KServe project; MLCommons MLPerf Inference benchmark; Ray Serve documentation
  - updated:: 2026-06-13
