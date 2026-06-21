- ### Definition
  - [[AI Inference]] is the computational process of applying a trained [[AI Model]] to new input data to produce outputs — text, images, classifications, embeddings, or actions — using learned parameters that are fixed at the end of [[Model Training]]. Unlike training, which requires large compute clusters and gradient computation over datasets, inference can be performed on a wide range of hardware, from data-centre accelerators ([[GPU Acceleration]], TPUs, AI ASICs) to consumer devices (CPUs, NPUs in mobile SoCs). The inference serving stack must balance latency (time to first token, end-to-end response time), throughput (requests per second), cost (compute and memory per token), and accuracy (preserving model quality despite [[Quantisation]] and other compression techniques). AI Inference is the dominant runtime cost for production [[Generative AI]] deployments: by 2026, inference workloads account for approximately two-thirds of all AI compute consumed globally, up from one-third in 2023 and one-half in 2025 — a structural shift driven by the proliferation of deployed [[Large Language Models]] serving billions of daily requests across consumer and enterprise applications. The field has matured to encompass a rich stack of [[Inference Optimisation]] techniques — [[Speculative Decoding]], [[Continuous Batching]], [[KV Cache]] management, [[Prefix Caching]], [[Flash Attention]], and kernel fusion — alongside hardware innovation in purpose-built inference silicon, and a growing ecosystem of open-source serving frameworks (vLLM, SGLang, TGI, llama.cpp) that have democratised high-performance inference deployment from specialised infrastructure teams to individual practitioners.

- ### Semantic Classification
  - owl-class:: machine-learning:AIInference
  - owl-role:: ExecutableProtocol | ProductionWorkload | SystemCapability
  - owl-inferred:: ml:ModelServing, ml:InferenceCompute, ml:ProductionAI, ml:DeploymentPhase
  - belongs-to-domain:: [[Machine Learning]], [[Deep Learning]]
  - implemented-in-layer:: [[Inference Hardware]], [[Inference Runtime]], [[Model Serving]]

- ### Relationships
  - is-subclass-of:: [[Machine Learning]], [[Neural Network]]
  - has-part:: [[KV Cache]], [[Speculative Decoding]], [[Continuous Batching]], [[Prefix Caching]], [[Flash Attention]], [[Batch Inference]]
  - requires:: [[Model Weights]], [[Inference Runtime]], [[Hardware Accelerator]], [[GPU Acceleration]]
  - enables:: [[Real-Time AI Inference]], [[Generative AI]], [[Natural Language Processing]], [[Computer Vision]], [[Autonomous Agents]], [[On-Device AI]], [[Edge Inference]]
  - uses:: [[GPU Acceleration]], [[AI Model]], [[AI Model Architecture]], [[Tensor Parallelism]], [[Quantisation]], [[Flash Attention]], [[ONNX]], [[Mixture-of-Experts]]
  - implements:: [[Model Serving]], [[Distributed Inference]]
  - depends-on:: [[Model Training]], [[Deep Learning]]
  - supports:: [[MLOps]], [[Retrieval-Augmented Generation]], [[AI Governance]]
  - contrasts-with:: [[Model Training]], [[Fine-Tuning]]
  - related-to:: [[Edge Computing]], [[MLOps]], [[Model Serving]], [[On-Device AI]], [[Retrieval-Augmented Generation]], [[Inference Optimisation]], [[Inference Compute]], [[Inference Hardware]], [[Model Compression]], [[Knowledge Distillation]], [[Chain-of-Thought]]
  - bridges-to:: [[Cloud Computing]], [[Distributed Systems]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:hasPart ml:KVCache))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:hasPart ml:SpeculativeDecoding))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:hasPart ml:ContinuousBatching))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:hasPart ml:PrefixCaching))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:hasPart ml:FlashAttention))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:hasPart ml:RequestScheduler))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:hasPart ml:BatchInference))

  ## Dependency Relationships
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:requires ml:ModelWeights))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:requires ml:InferenceRuntime))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:requires ml:HardwareAccelerator))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:requires ml:GPUAcceleration))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:dependsOn ml:ModelTraining))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:dependsOn ml:DeepLearning))

  ## Capability Relationships
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:enables ml:RealTimeAIInference))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:enables ml:GenerativeAI))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:enables ml:NaturalLanguageProcessing))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:enables ml:ComputerVision))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:enables ml:AutonomousAgents))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:enables ml:OnDeviceAI))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:supports ml:MLOps))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:supports ml:RetrievalAugmentedGeneration))

  ## Implementation Relationships
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:uses ml:Quantisation))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:uses ml:TensorParallelism))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:uses ml:FlashAttention))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:uses ml:ONNX))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:uses ml:MixtureOfExperts))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:implements ml:ModelServing))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:implements ml:DistributedInference))

  ## Reduction Relationships
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:reducesTo ml:ForwardPass))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:reduces ml:InferenceCost))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:reduces ml:LatencyPerToken))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:reduces ml:MemoryFootprint))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:relatedTo ml:InferenceOptimisation))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:relatedTo ml:ModelCompression))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:relatedTo ml:KnowledgeDistillation))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:contrastsWith ml:ModelTraining))
      SubClassOf(ml:AIInference
        ObjectSomeValuesFrom(ml:contrastsWith ml:FineTuning))

      ## Annotations
      AnnotationAssertion(rdfs:label ml:AIInference "AI Inference"@en)
      AnnotationAssertion(rdfs:comment ml:AIInference "The operational phase of a machine learning system in which trained model parameters are applied to new input data to produce predictions, embeddings, or generative outputs; encompassing the full serving stack of model loading, request batching, hardware-specific kernel execution, and output post-processing, with optimisation techniques including quantisation, speculative decoding, continuous batching, KV-cache management, and Flash Attention enabling commercially viable large-model deployment."@en)
      AnnotationAssertion(dcterms:identifier ml:AIInference "ML-INFERENCE-001"^^xsd:string)

  ## About
    AI Inference represents the production-time counterpart to [[Model Training]]: once a model's parameters are frozen, every subsequent use of that model is inference. This distinction matters because the engineering constraints are fundamentally different — training is compute-bound and can tolerate high latency over days or weeks, whereas inference must serve many concurrent users with predictable, low-latency responses measured in milliseconds to seconds. The distinction was historically secondary because early ML models were small enough that inference was trivially cheap; the emergence of [[Large Language Models]] with billions to trillions of parameters transformed inference into a primary engineering and economic concern, spawning a dedicated sub-field with its own conferences, hardware vendors, open-source frameworks, and billion-dollar commercial ecosystems.

    The economic magnitude of inference is striking. The AI inference market reached approximately $106 billion in 2025 and is projected to grow at 19.2% CAGR to $255 billion by 2030 (Gartner, 2026). Inference workloads consumed roughly two-thirds of all AI compute in 2026, up from one-third in 2023. The cost dynamics are equally dramatic: GPT-4-level performance cost approximately $20 per million tokens in late 2022 and has fallen to approximately $0.40 per million tokens by early 2026 — a 50× reduction in three years driven by algorithmic efficiency improvements, hardware advances, and economies of scale. Gartner predicts that by 2030, inference on a one-trillion-parameter LLM will cost over 90% less than in 2025. Cloud H100 prices stabilised at $2.85–$3.50/hour in 2025/2026 after a 64–75% decline from 2023 peaks. This rapid commoditisation is enabling a broad class of AI applications that were previously economically non-viable and is simultaneously creating pressure on model providers to invest in inference-time efficiency rather than raw capability.

    The fundamental performance bottleneck in [[Large Language Models]] inference is the memory bandwidth constraint of the decode phase. During autoregressive token generation, each decode step reads the entire [[Model Weights]] tensor from GPU high-bandwidth memory (HBM) to compute a single output token — a ratio of memory read volume (hundreds of gigabytes) to arithmetic operations that is far below GPU peak arithmetic throughput, leaving the GPU arithmetically underutilised. This memory-bandwidth-bound nature of decode contrasts sharply with the prefill phase (processing the input prompt in parallel), which is compute-bound and achieves near-peak arithmetic utilisation. The distinction is quantitatively stark: on an H100 GPU with 3.35 TB/s HBM3 bandwidth and 989 TFLOPS FP16 throughput, the arithmetic intensity of decode for a 70B parameter model is approximately 2 FLOPS per byte of weight memory read — far below the GPU's compute-to-bandwidth ratio (hardware ridge point ≈ 296 FLOPS/byte at FP16), meaning the GPU is memory-bandwidth-limited by a factor of ~150× during decode. All major inference optimisation techniques for [[Large Language Models]] — grouped query attention, [[Speculative Decoding]], [[Continuous Batching]], [[KV Cache]] compression — fundamentally target this memory-bandwidth bottleneck either by reducing the number of memory reads per output token, amortising reads across larger batches, or reducing the size of cached tensors that must be read on each decode step.

    The inference landscape divides broadly into three deployment contexts, each with distinct engineering priorities and economic models: **cloud/data-centre inference** — large GPU or TPU clusters operated by cloud providers (AWS Bedrock, Google Vertex AI, Azure AI Studio, Oracle Cloud) or specialised inference providers (Groq, Cerebras, Together AI, Fireworks AI), serving API requests at high concurrency with pay-per-token pricing; **on-premise inference** — enterprise-owned GPU servers running open-weight models such as Llama, Mistral, Qwen, or Gemma, typically for data-residency compliance, latency control, or cost optimisation at sufficient scale; and **on-device / edge inference** — running [[On-Device AI]] models on consumer hardware (Apple Silicon Neural Engine, Qualcomm Snapdragon NPUs, Intel Arc, MediaTek Dimensity APUs) using runtimes such as llama.cpp, Ollama, or Apple MLX, enabling offline, privacy-preserving, and latency-critical deployments without network round-trips.

  ## Components / Architecture
    - **[[Model Weights]]** — the frozen parameter tensors loaded into accelerator memory. Memory footprint (FP16: 2 bytes per parameter; INT8: 1 byte; INT4: 0.5 bytes) directly determines hardware requirements and deployment options. A 70B parameter model in FP16 requires ~140 GB of GPU memory — four A100 80GB GPUs at minimum — while the same model in INT4 quantisation fits in ~35 GB, enabling single-GPU or consumer hardware deployment.
    - **[[Inference Runtime]]** — the software layer executing model computation. General-purpose runtimes include TensorRT (NVIDIA, production-optimised), ONNX Runtime (multi-vendor interoperability), and OpenVINO (Intel edge). LLM-specific engines include vLLM (PagedAttention, continuous batching; joined PyTorch Foundation 2025), TGI (Hugging Face, safetensors-native), SGLang (structured generation, high-throughput), and llama.cpp (portable CPU/GPU implementation for on-device use).
    - **[[KV Cache]]** — the key-value attention cache storing intermediate attention computations for all tokens in the current sequence. Memory scales as O(batch_size × sequence_length × num_layers × num_heads × head_dim). PagedAttention (vLLM) divides KV cache into fixed-size pages, eliminating fragmentation and enabling memory reuse across requests, achieving 2–4× throughput improvement over naive implementations.
    - **[[Continuous Batching]]** — dynamic insertion of new requests into an in-progress batch without waiting for all batch members to complete (cf. static batching where all must finish before new requests enter). The default scheduling strategy in modern LLM serving; dramatically improves GPU utilisation for autoregressive generation by eliminating idle compute between variable-length requests.
    - **[[Speculative Decoding]]** — a small, fast draft model proposes K candidate tokens that the large target model verifies in a single forward pass, yielding 2–4× throughput improvement with mathematically identical output distribution to standard decoding. NVIDIA demonstrated 3.6× throughput improvement on H200 GPUs using speculative decoding in 2025. Batch speculative decoding (TETRIS, arXiv 2502.15197; AdaServe, arXiv 2501.12162) extends the technique to multi-SLO batch workloads. vLLM, TensorRT-LLM, and SGLang all provide production-ready speculative decoding implementations as of 2025.
    - **[[Quantisation]]** — reduction of weight (and optionally activation) precision below FP32/FP16 to INT8, INT4, FP8, or lower bit-widths, reducing memory footprint and improving throughput. Established LLM quantisation algorithms: GPTQ (post-training, round-to-nearest with Hessian correction), AWQ (activation-aware weight quantisation, preserving outlier channels), SmoothQuant (migrates quantisation difficulty from activations to weights). INT4 weight-only (W4A16) with negligible accuracy loss on most benchmarks; FP8 (W8A8) becoming the standard format for H100 production deployment.
    - **[[Prefix Caching]]** — reuse of KV cache segments for repeated prompt prefixes across requests, critical for RAG workloads where long system prompts or retrieved documents appear in every request. Deployed commercially by Anthropic, OpenAI, and Google Gemini APIs; implemented at the vLLM infrastructure layer via automatic prefix matching.
    - **[[Flash Attention]]** — a memory-efficient transformer attention algorithm (Dao et al. 2022, 2023, 2024) that tiles attention computation to avoid materialising the full N×N attention matrix in GPU HBM, achieving both faster compute and 5–20× reduced memory usage, enabling practical long-context inference (128K–1M token context windows). FlashAttention-3 (2024) achieves 740 TFLOPs/s on H100 — 75% of FP16 theoretical peak.
    - **[[Tensor Parallelism]]** — distribution of model weight tensors across multiple GPUs along hidden dimension (column/row parallelism), enabling inference of models exceeding single-GPU memory capacity. Combined with pipeline parallelism (layer-level distribution) and expert parallelism ([[Mixture-of-Experts]] routing) for very large models.
    - **[[Hardware Accelerator]]** — purpose-built silicon for matrix multiply-accumulate and activation functions: NVIDIA H200/B200 (HBM3E memory, 4.8 TB/s bandwidth), Google TPU v5e/v5p, AMD Instinct MI300X (192 GB unified memory), Intel Gaudi 3, Groq LPUs (deterministic linear processing for ultra-low latency), Cerebras WSE-3 (wafer-scale, 900,000 cores), and Apple Neural Engine (on-device SoC integration). Each has distinct memory bandwidth, FLOPS, and energy profiles suited to different inference deployment patterns.

  ## Use Cases / Major Families
    - **Interactive chat and assistants** — [[Large Language Models]] served for conversational interfaces; TTFT (time-to-first-token) under 200ms and ITL (inter-token latency) under 30ms are common SLO targets for premium consumer products.
    - **[[Retrieval-Augmented Generation]] (RAG)** — embedding models run inference to encode documents and queries into vector space; generative models run inference on retrieved context. Prefix caching is essential for shared system prompts at scale.
    - **[[Computer Vision]]** — object detection, segmentation, OCR deployed via ONNX/TensorRT models; sub-millisecond latency requirements in manufacturing inspection and autonomous vehicle perception pipelines.
    - **Code generation** — developer assistants (GitHub Copilot, Cursor, Codeium) require low-latency streaming responses with fill-in-the-middle (FIM) inference for in-context completion; inference at the IDE latency boundary is a primary engineering constraint.
    - **[[Autonomous Agents]]** — agentic systems calling tools and orchestrating multi-step tasks run many inference calls per user request; per-token cost becomes a dominant concern at agent loop scale, motivating caching across agent steps and small-model routing for simpler sub-tasks.
    - **[[On-Device AI]]** — SLMs (1B–8B parameters) running on smartphones and laptops for privacy-preserving, offline, latency-critical applications. Apple Intelligence (Apple Silicon Neural Engine), Google Gemini Nano (Pixel on-device), Qualcomm AI Hub (Snapdragon NPU) represent the major 2025/2026 on-device inference deployments.
    - **[[Batch Inference]]** — offline processing of large datasets (document classification, embedding generation, synthetic data generation) where throughput rather than latency dominates; GPU utilisation can be maximised to near 100% with large static batches and model parallelism.
    - **Multimodal inference** — vision-language models (GPT-4V, Claude Sonnet Vision, Gemini 1.5 Pro) process interleaved image and text inputs, requiring specialised vision encoders and increased KV cache allocation for image token sequences.

  ## Mechanisms
    - **Prefill phase** — the initial forward pass that processes the entire input prompt in parallel (compute-bound), producing the [[KV Cache]] for all input tokens and the first output token. This phase benefits from large batch sizes and is the primary latency component for short-response workloads; compute-intensive models such as Llama 3.1 405B spend 30–40% of total inference latency in prefill at typical sequence lengths.
    - **Decode phase** — the autoregressive loop generating one token per forward pass by attending over the full [[KV Cache]] (memory-bandwidth-bound). Each decode step reads the entire model weight set and [[KV Cache]] from GPU memory; at 3.35 TB/s HBM3 bandwidth on H100, a 70B model achieves approximately 220 tokens per second per GPU at batch size 1 — hardware-limited, not algorithm-limited. Memory bandwidth, not FLOPS, is the primary bottleneck.
    - **Request scheduling** — PagedAttention (vLLM) divides [[KV Cache]] into fixed pages, eliminating fragmentation and enabling fine-grained memory sharing across requests. The scheduler manages which requests are active, how GPU memory is allocated, and when to preempt or swap requests under memory pressure — analogous to a virtual memory system for GPU HBM.
    - **Disaggregated prefill/decode** — emerging architecture (Splitwise, Sarathi-Serve) that physically separates prefill and decode across different accelerator pools, each optimised for its respective bottleneck type. Prefill instances run high-compute utilisation; decode instances run high-memory-bandwidth utilisation. Cross-instance KV cache transfer via RDMA adds communication overhead that must be amortised against the utilisation gains.
    - **Test-time compute scaling** — reasoning models (DeepSeek-R1, o3 series, extended thinking variants) trade increased inference compute for improved accuracy by generating long internal reasoning traces before the final answer. This creates a configurable quality-cost axis: a 32B reasoning model with 8K reasoning tokens can match a 70B base model on mathematical benchmarks while consuming 5× more inference compute per query — but at lower total hardware cost due to the smaller base model size.
    - **Streaming responses** — incremental token-by-token delivery via server-sent events (SSE) or WebSocket streaming enables perceived latency far below total generation time. Streaming is standard in all major LLM APIs and is essential for interactive user experience: users perceive streaming responses as faster by 40–60% compared to equivalent-latency non-streaming responses in UX studies.
    - **Structured output generation** — inference-time constrained decoding (grammar sampling, JSON schema enforcement via outlines, LM-Format-Enforcer) forces outputs to conform to specified schemas, enabling reliable integration with downstream parsers and tool-calling systems without post-processing correction.
    - **[[Flash Attention]]** — tiles attention computation to avoid materialising the full N×N attention matrix in GPU HBM, achieving 5–20× memory reduction and 2–4× compute speedup. FlashAttention-3 achieves 740 TFLOPS/s on H100 (75% of FP16 peak) via asynchronous pipelining and FP8 support, making long-context inference (128K–1M token windows) practical.

  ## Optimisation Landscape
    - **Batching strategies** — static batching (homogeneous lengths, simple, throughput-optimal for batch inference), dynamic batching (length-bucketing, 20–40% improvement over static), [[Continuous Batching]] (optimal for interactive LLMs, vLLM default).
    - **Memory optimisation** — PagedAttention eliminates KV cache fragmentation; KV cache quantisation (INT8/FP8 KV) reduces memory by 2×; grouped query attention (GQA, multi-query attention MQA) reduces KV cache size by sharing key-value heads across attention groups (Llama 3.1, Mistral, Gemma 2 use GQA); sliding window attention (Mistral) bounds KV cache to fixed window.
    - **Kernel fusion** — combining layer norm + QKV projection + activation into single GPU kernels reduces memory round-trips and improves arithmetic intensity. FlashAttention, custom Triton kernels, and CUTLASS-based kernels achieve near-peak hardware utilisation.
    - **Model compilation** — `torch.compile` (PyTorch 2.x), XLA (TPUs), TensorRT converts dynamic graphs to optimised static kernels for specific accelerator targets; 20–40% throughput improvement on dense inference workloads.
    - **[[Knowledge Distillation]]** — training smaller student [[AI Model]] to mimic larger teacher behaviour, reducing inference cost while retaining capability on target tasks; DeepSeek-R1 distillation to 7B/14B/32B demonstrated that 32B distilled models match performance of 70B base models on reasoning benchmarks.
    - **[[Quantisation]] depth** — INT8 weight-only (W8A16, minimal accuracy impact), INT4 weight-only (W4A16, <1% accuracy loss on MMLU for most models), FP8 activation (W8A8 FP8, becoming standard on H100/H200), sub-4-bit (2-bit GPTQ, increasingly viable with 2025 algorithmic improvements).
    - **[[Mixture-of-Experts]] inference** — sparse activation means only a fraction of parameters are active per token (typically 1/8 to 1/16), reducing per-token compute at cost of total parameter memory and routing overhead. Mixtral 8×7B, DeepSeek-V3, and Qwen-MoE are established production MoE inference workloads.
    - **Test-time compute scaling** — reasoning models (DeepSeek-R1, o3, Claude 3.5 Sonnet extended thinking) trade inference compute for improved accuracy on complex tasks by generating long internal reasoning traces; creates a new axis of inference cost control via reasoning budget parameters.

  ## Model Families and Inference Characteristics
    Different [[AI Model Architecture]] families impose distinct inference requirements and benefit from different optimisation strategies, making model-architecture awareness a prerequisite for inference stack design.

    **Autoregressive [[Large Language Models]]** (GPT-4 class, Llama 3.1, Mistral, Qwen 2.5) are the dominant inference workload by economic value. The prefill/decode split, [[KV Cache]] memory pressure, and memory-bandwidth-bound decode phase are definitional characteristics. Sequence length — the sum of prompt and generated tokens — is the primary memory scaling variable: a 70B model serving 4K-token requests at batch size 32 requires approximately 40 GB just for KV cache (before model weights), while 128K-token long-context requests require 1.2 TB of KV cache memory at FP16, making KV cache compression the most important inference optimisation for long-context workloads.

    **[[Mixture-of-Experts]] (MoE) models** (Mixtral 8×7B, DeepSeek-V3 671B, Qwen-MoE) activate only a fraction of parameters per token, reducing per-token compute cost at the expense of total parameter memory and routing overhead. A 671B-parameter MoE model may activate only 37B parameters per token, providing the quality of a 671B dense model at the compute cost of a 37B model — but requiring enough GPU memory to hold all 671B parameters simultaneously, as the router may activate any expert on any token. Expert parallelism routes different tokens to different GPU groups, with all-to-all communication overhead for routing representing a latency bottleneck at small batch sizes.

    **Vision and multimodal models** (GPT-4V, Claude 3 Sonnet Vision, Gemini 1.5 Pro) extend the autoregressive architecture with image encoders (ViT-based) that convert image patches to token sequences appended to the text prompt. Image encoding is a compute-bound prefill-like operation; the resulting image tokens (typically 256–1024 per image) increase [[KV Cache]] size proportionally, making multimodal inference 2–4× more memory-intensive than equivalent text-only requests.

    **Diffusion models** (Stable Diffusion, FLUX, DALL-E 3) for image generation invert the inference paradigm: rather than autoregressive left-to-right generation, they execute many iterative denoising steps, each a full forward pass through the denoising [[Neural Network]]. Inference latency scales with step count (typically 20–50 steps); distillation techniques (SDXL-Lightning, LCM-LoRA) reduce steps to 4–8 while preserving quality, achieving 5–10× latency reduction. ONNX Runtime and TensorRT compilation achieve 3–4× throughput improvement over PyTorch eager mode for diffusion inference.

    **Embedding models** (BERT-class, sentence-transformers, text-embedding-3-large) are the most computationally efficient inference workload: forward-pass only (no autoregressive decode), fixed output size (embedding vector), and highly batch-parallelisable. Embedding inference runs at near-peak GPU arithmetic utilisation with batch sizes above 128; the dominant use case is [[Retrieval-Augmented Generation]] where millions of documents must be embedded at index time and thousands of queries embedded at serving time.

  ## Infrastructure and Deployment Patterns
    - **Inference-as-a-Service** — cloud-hosted endpoints (AWS Bedrock, Google Vertex AI, Azure AI Studio, Hugging Face Inference Endpoints) abstract hardware management; pay-per-token pricing with automatic scaling. Market growing at 19.2% CAGR to 2030.
    - **Self-hosted open-weight inference** — vLLM + Kubernetes is the dominant 2025/2026 stack for organisations deploying Llama 3.x, Mistral, Gemma, or Qwen on owned or rented GPU infrastructure. Combination of INT4 quantisation + KV cache optimisation + continuous batching + prefix caching achieves 60–80% total cost reduction versus naive FP16 static-batch deployment.
    - **[[Edge Inference]]** / [[Edge Computing]] — inference at network edge (5G MEC, CDN edge nodes) for latency-critical applications; ONNX Runtime Web and TensorFlow Lite serve the embedded edge segment.
    - **Serverless inference** — auto-scaling to zero: Modal, Replicate, cloud-native functions for bursty or low-traffic workloads. Cold-start latency (GPU allocation + model weight loading) remains a challenge; weight caching and warm pool strategies mitigate it.
    - **[[Distributed Inference]]** — tensor parallel + pipeline parallel deployment across multiple nodes for models exceeding single-node memory (DeepSeek-V3 671B, Llama 3.1 405B). Custom RDMA/InfiniBand networking and all-reduce collectives dominate inter-node communication overhead.
    - **Inference proxies and gateways** — middleware layers (LiteLLM, PortKey, Helicone, Kong AI Gateway) add load balancing, rate limiting, caching, logging, and multi-provider routing in front of inference endpoints; forming critical [[MLOps]] infrastructure for production deployments.

  ## Serving Frameworks and Ecosystem
    The open-source inference serving ecosystem has consolidated rapidly around a small number of dominant frameworks, each with distinct design priorities and hardware support matrices.

    **vLLM** (UC Berkeley LMSYS, joined PyTorch Foundation 2025) is the most widely deployed open-source LLM serving engine, distinguished by its PagedAttention [[KV Cache]] management, [[Continuous Batching]], and [[Speculative Decoding]] support. The v0.7 release (2025) added multi-modal support, FP8 quantisation, and structured output via JSON schema enforcement. vLLM's compute ecosystem includes NVIDIA CUDA, AMD ROCm, Google TPU, AWS Neuron Inferentia, Intel Gaudi, and Apple Silicon — the broadest hardware coverage of any open-source LLM engine. The PyTorch Foundation membership (sponsors: Alibaba Cloud, AMD, AWS, Crusoe Cloud, Google Cloud, IBM, Intel, Lambda, NVIDIA, Red Hat, Roblox, RunPod) provides stable compute infrastructure for CI/CD across hardware targets.

    **SGLang** (Stanford, 2024) is optimised for structured generation workloads and high-throughput agent applications. Its RadixAttention cache management enables aggressive [[Prefix Caching]] across multi-turn conversations and [[Retrieval-Augmented Generation]] workloads. SGLang's compilation to CUDA graphs achieves 30–50% higher throughput than eager-mode vLLM on structured output benchmarks.

    **TGI (Text Generation Inference)** by Hugging Face is the standard inference engine for the Hugging Face model hub ecosystem, with `safetensors` weight loading, AWQ/GPTQ [[Quantisation]] integration, and built-in Prometheus metrics. Widely used in production Hugging Face Inference Endpoints.

    **TensorRT-LLM** (NVIDIA) provides the highest throughput on NVIDIA hardware through aggressive CUDA kernel fusion, in-flight batching, and hardware-specific optimisations. NVIDIA demonstrated [[Speculative Decoding]] with 3.6× throughput improvement on H200 GPUs using TensorRT-LLM. The framework supports INT8, FP8, and INT4 quantisation with calibration datasets.

    **llama.cpp** (Georgi Gerganov, 2023) is the canonical portable inference engine, supporting CPU, CUDA, Metal (Apple), Vulkan, and SYCL backends without requiring Python or deep learning framework installation. Its gguf weight format and extreme portability make it the foundation for consumer-facing inference tools: Ollama, LM Studio, Jan, and Kobold.cpp all wrap llama.cpp, collectively enabling [[On-Device AI]] inference across Windows, macOS, and Linux for millions of users without cloud dependency.

    **Ollama** (2023) abstracts llama.cpp and other backends behind a Docker-style CLI and REST API, making local model serving accessible to non-expert users: `ollama run llama3.1` downloads and serves a Llama 3.1 model in a single command. By 2025, Ollama had exceeded 10 million downloads and became the de facto standard for developer-tier local inference.

    **Apple MLX** (2024) provides efficient inference on Apple Silicon Unified Memory architecture, exploiting the shared CPU/GPU/Neural Engine memory pool that eliminates the PCIe bandwidth bottleneck present in discrete GPU systems. MLX achieves 2–3× higher tokens-per-second throughput than llama.cpp Metal backend on equivalent Apple Silicon hardware.

    The framework ecosystem interoperates via the **OpenAI API specification** as a de facto standard: vLLM, Ollama, LM Studio, Together AI, Groq, Fireworks AI, and Cerebras Inference all implement the `/v1/chat/completions` endpoint, enabling application code to switch between local and cloud inference, or between providers, without code changes — a portability property that has driven rapid ecosystem growth and enabled the multi-provider inference routing patterns central to production [[MLOps]] stacks.

  ## Benchmarks and Evaluation
    - **MLPerf Inference** — the primary industry-standard benchmark, published by MLCommons. Defines reference implementations and measurement rules for data-centre, edge, and mobile categories across model families (LLaMA, DLRM, ResNet, Stable Diffusion, Whisper). Vendors submit results semi-annually; competitive benchmark for [[Inference Hardware]] vendors.
    - **Latency metrics** — Time-to-first-token (TTFT) measures prefill latency; inter-token latency (ITL) measures decode throughput; end-to-end latency is the sum of both. P50/P95/P99 percentiles matter more than mean for production SLA planning.
    - **Throughput metrics** — tokens per second (TPS), requests per second (RPS), queries per second (QPS) at specified concurrency levels; typically reported at the P95 latency SLO boundary to reflect real-world serving conditions rather than unconstrained throughput.
    - **Cost metrics** — cost per million tokens (CPMt, input and output separately), GPU-hours per request, and total cost of ownership (TCO) including hardware amortisation, power (~250W per A100, ~700W per H100 at TDP), and networking. Output tokens are 3–8× more expensive than input tokens across commercial APIs (2026 market median output-to-input price ratio: ~4×).
    - **Quality metrics** — inference-time accuracy on standard benchmarks (MMLU, HumanEval, MATH, GSM8K) quantifies accuracy impact of [[Quantisation]], pruning, or other compression applied during inference optimisation.

  ## Economic Analysis and Cost Dynamics
    The economics of AI inference have undergone the most rapid cost deflation of any compute workload in history. From late 2022 to mid-2026, GPT-4-level LLM inference costs declined approximately 50× — from $20 per million tokens to $0.40 per million tokens — driven by three independent but compounding mechanisms: hardware improvements (H100 provides ~10× throughput-per-dollar vs A100; H200 another ~1.5× improvement), algorithmic efficiency improvements ([[Speculative Decoding]], [[Continuous Batching]], [[Quantisation]], [[Flash Attention]] collectively providing another 5–10× throughput improvement on equivalent hardware), and economies of scale (inference providers amortising fixed infrastructure costs over growing request volumes). The a16z "LLMflation" analysis (2025) characterised this as a 10× annual cost reduction from 2021–2025, faster than semiconductor price-performance (Moore's Law ~1.5× per year), internet bandwidth (Nielson's Law ~1.5× per year), or any prior compute commodity.

    The cost asymmetry between input and output tokens reflects the fundamental computational difference between prefill (parallel, compute-bound, cheap per token) and decode (sequential, memory-bandwidth-bound, expensive per token). As of Q1 2026, the market median output-to-input price ratio across commercial LLM APIs is approximately 4× — GPT-4o charges $2.50/M input vs $10/M output; Claude 3.5 Sonnet charges $3/M input vs $15/M output. This pricing structure creates important product design incentives: applications that minimise output token count (asking models to answer "yes/no" rather than explain their reasoning, using structured output formats that are more token-efficient than natural language narration) have meaningfully lower inference costs than those that encourage verbose generation.

    The distinction between input and output token pricing also shapes the economics of [[Retrieval-Augmented Generation]]: RAG workflows prepend retrieved documents (often 1,000–10,000 input tokens per query) to queries, multiplying input token costs relative to context-free generation. [[Prefix Caching]] (Anthropic prompt caching, OpenAI prompt caching, Google Gemini context caching) reduces this cost by reusing KV cache for repeated prefixes — cached input tokens cost 0.10× the price of uncached input tokens, providing 90% cost reduction for the system-prompt and retrieved-document portion of RAG requests. This economic signal is driving product engineering decisions to structure RAG prompts for maximum cache hit rates.

    The inference market's growth trajectory creates significant datacenter power demand pressure. At $344 billion in AI data centre market size (2025), projected to $2 trillion by 2032, the associated electricity consumption is drawing regulatory attention. The UK Government's AI data centre strategy (2025) explicitly addresses the power grid capacity required for inference at scale, connecting [[AI Governance]] frameworks to energy infrastructure planning in a way that positions inference efficiency as a national strategic priority rather than merely a commercial optimisation.

  ## Standards and Context
    - **ONNX (Open Neural Network Exchange)** — open format for representing trained ML models, enabling interoperability between training frameworks (PyTorch, TensorFlow, JAX) and inference runtimes (ONNX Runtime, TensorRT). Governed by the ONNX community under the Linux Foundation AI & Data.
    - **MLPerf Inference** — MLCommons benchmark suite standardising inference performance measurement across hardware platforms and model types. Vendors submit results for data-centre and edge categories; the primary competitive benchmark for [[Inference Hardware]] vendors.
    - **OpenAI API specification** — de facto standard for LLM inference APIs, with `/v1/chat/completions` widely supported by vLLM, Ollama, Together AI, Fireworks AI, and Groq, enabling multi-provider portability.
    - **Hugging Face ecosystem** — `transformers` library and `text-generation-inference` server as standard interfaces for open-weight model inference; `safetensors` as the preferred weight format for safe, fast loading. vLLM joined the PyTorch Foundation in 2025 with compute support from Alibaba Cloud, AMD, AWS, Google Cloud, IBM, Intel, NVIDIA, Red Hat, and others.
    - **Energy and sustainability** — inference at scale consumes significant electrical power; data-centre market growing to $344B in 2025 with projected $2T by 2032 raises power consumption concerns. MLCommons and academic groups developing energy-efficiency metrics (tokens per joule, FLOPS per watt) to complement performance benchmarks.

  ## Performance Measurement and SLOs
    Production AI inference requires disciplined service level objective (SLO) definition and measurement across multiple dimensions that trade off against each other in non-obvious ways.

    **Latency decomposition**: End-to-end latency for a [[Large Language Models]] API request decomposes into queue wait time (request waiting for GPU capacity), prefill latency (TTFT: time to first token), and decode latency (ITL: inter-token latency × number of output tokens). Queue wait time is scheduling infrastructure and can be arbitrarily small with sufficient capacity; TTFT is the dominant component for short responses and varies from 50ms (Groq LPU, optimised for minimal latency) to 2–5s (large models on shared cloud infrastructure under load); ITL varies from 10–30ms per token on modern inference infrastructure. For a 500-token response at 20ms ITL, decode adds 10s to the response — making TTFT optimisation important only for interactivity perception, while ITL optimisation drives total generation time for longer responses.

    **Throughput vs. latency trade-off**: The fundamental serving tension is that batching increases throughput (more tokens per GPU-second) but increases per-request latency (requests wait for batch to be assembled). [[Continuous Batching]] partially dissolves this tension by allowing batches to grow and shrink dynamically, but the underlying arithmetic remains: running inference at P95 latency target < 200ms TTFT requires more GPU capacity than running at P95 < 2s TTFT for equivalent request rate. Production SLO planning uses these curves to determine right-sizing: an application requiring 200ms TTFT may need 3–4× more inference capacity than an application comfortable with 2s TTFT for the same QPS, making latency SLO one of the largest cost levers in inference infrastructure design.

    **Quality vs. cost trade-off for reasoning**: Test-time compute scaling models create a configurable quality-cost axis that is absent from standard base models. DeepSeek-R1, Claude 3.5 Sonnet extended thinking, and o3 allow inference callers to specify a compute budget for reasoning (in tokens or seconds), enabling dynamic quality-cost optimisation: use maximum reasoning budget for high-stakes tasks (medical diagnosis, legal analysis, code architecture review) and minimal budget for low-stakes tasks (sentiment classification, simple Q&A), with the same underlying model. This shifts inference system design from point capacity planning to portfolio capacity planning across multiple quality tiers.

    **Accuracy degradation measurement**: [[Inference Optimisation]] techniques inevitably risk accuracy degradation — [[Quantisation]] to INT4 can cause 1–5% accuracy loss on MMLU depending on model architecture and quantisation algorithm; extreme quantisation to 2-bit causes 5–15% degradation. The accuracy vs. efficiency Pareto frontier must be characterised per model and deployment context: a quantised model that loses 2% MMLU accuracy but costs 60% less may be the right choice for high-volume low-stakes classification, but not for technical advisory systems where accuracy is non-negotiable. Empirical calibration on representative production inputs is essential because benchmark accuracy can diverge significantly from domain-specific production accuracy.

  ## Governance and Security Considerations
    - **Rate limiting and access control** — inference APIs gated by API keys, OAuth tokens, or IAM roles; rate limits (RPM, TPD) enforced at inference gateway level to prevent abuse and manage cost.
    - **Prompt injection** — [[Security]] risk in LLM inference where adversarial instructions embedded in user input or retrieved context manipulate model behaviour; inference-time defences include input sanitisation, instruction hierarchy enforcement, and output filtering.
    - **Data residency and privacy** — inference workloads processing sensitive data (healthcare, legal, financial) face regulatory constraints (GDPR, UK GDPR, HIPAA) on where computation may occur; on-premise and [[On-Device AI]] inference address these constraints at a cost of infrastructure complexity.
    - **Model extraction attacks** — repeated API queries can approximate model weights or behaviour through black-box queries; providers implement output perturbation and query throttling as countermeasures.
    - **Reproducibility and determinism** — inference results may vary due to GPU non-determinism (floating-point associativity in parallel reductions) and sampling randomness; deterministic inference requires fixed seeds and deterministic kernels at throughput cost.
    - **Model cards and transparency** — organisations deploying inference endpoints increasingly required (by AI Act obligations and voluntary commitments) to publish model cards describing capabilities, limitations, training data, and evaluation results, connecting inference serving to [[AI Governance]] frameworks.
    - **Carbon accounting** — inference compute energy footprint material for corporate sustainability reporting; tools such as CodeCarbon and hardware vendor APIs enable per-inference carbon measurement aligned with [[Data]] centre net-zero commitments.

  ## UK Context
    The UK holds a distinctive position in the global AI inference ecosystem, spanning foundational research, hardware investment, sovereign compute policy, and enterprise deployment.

    **University of Edinburgh** is the UK's most prominent inference research institution. In February 2025, Edinburgh researchers published WaferLLM (with Microsoft Research) — a wafer-scale LLM inference system designed exclusively to optimise software for wafer-scale chips such as the Cerebras WSE, delivering 10× inference speed improvements by exploiting massive parallel processing and near-memory computation at wafer scale. Separately, Cerebras Systems expanded its training and inference cluster at the University of Edinburgh in April 2025, installing a CS-3 Wafer Scale Engine cluster — the first such system in Europe — to accelerate both AI research and UK sovereign AI capabilities. A £750 million national AI supercomputer is planned for Edinburgh deployment by 2030 as part of the UK's sovereign compute roadmap targeting a 20× increase in national AI compute from 21 ExaFLOPS (2025) to 420 ExaFLOPS (2030).

    **Imperial College London**, **the University of Oxford**, and **the University of Cambridge** collectively produce a large fraction of the UK's AI researchers, including specialists in [[Neural Network]] architecture and inference optimisation. Imperial's AI research group has contributions across efficient neural network design, model compression, and hardware-aware training — directly feeding the inference optimisation field.

    **UK sovereign AI hardware investment**: The UK Government's £1.1 billion AI hardware plan (2025) includes £150 million as an advance market commitment for novel, high-performance inference chips from British companies — a deliberate attempt to create a domestic inference silicon supply chain. The UK AI Chips Market commitment is part of the broader AI Opportunities Action Plan. A separate £12 million Centre for Doctoral Training in Chip Design and a Scaling Inference Lab (£20 million additional, building on ARIA's £50 million investment) specifically target inference efficiency research.

    **Northern England** industrial context: Sheffield-based Deep Render develops neural video compression using neural network inference for real-time video codec applications; Manchester's Graphcore (now SoftBank-owned) developed the Intelligence Processing Unit (IPU) as an alternative inference accelerator architecture used in UK academic deployments. Leeds and Newcastle universities have active ML deployment research groups with inference application papers in healthcare imaging and edge deployment.

    **ARM Holdings** (Cambridge-based, SoftBank-owned, re-listed on NASDAQ) is a critical UK national technology asset: ARM CPU and NPU IP powers essentially all mobile device on-device inference globally — every Qualcomm Snapdragon, Apple A-series, and MediaTek Dimensity chip runs on ARM architecture, making Cambridge a de facto centre of global [[On-Device AI]] inference infrastructure. ARM's Ethos NPU series and Cortex-A series CPUs both include hardware matrix multiplication units optimised for INT8 and FP16 inference, with ARM Compute Library providing hand-tuned kernels for inference on ARM hardware. The ARM Mali GPU series similarly targets inference workloads in Android devices, with ARM's machine learning team publishing optimisation guides for efficient transformer inference on mobile NPUs.

    The UK's **Oxford University** contributes through the Future of Humanity Institute (until its 2024 closure) and the Centre for Human Values research group, which have published influential work on the safety implications of large-scale inference deployment — connecting inference engineering to AI safety governance. Oxford's CS department has published on efficient neural architecture search for inference-optimised models, contributing to the model compression and [[Knowledge Distillation]] literature that underlies efficient inference.

    **Manchester** hosts several industrial AI inference deployments of note: AstraZeneca's UK AI research centre uses GPU-based inference for drug discovery molecular generation at scale; Co-op Group's digital team has deployed NLP inference for customer service automation; and the Manchester Digital hub supports a cluster of AI inference startups including graph analytics and industrial computer vision companies building on UK-developed models. The NVIDIA DGX deployment at the University of Manchester's advanced computing facility supports both training and inference research across the Faculty of Science and Engineering.

    The **UK National Compute Infrastructure** — spanning ARCHER2 (Edinburgh), Baskerville (Birmingham), Sulis (Warwick), and the proposed AI supercomputer at Edinburgh — increasingly serves inference workloads for UK academic research, providing a shared national resource for experiments requiring GPU inference at scale that individual university compute budgets cannot support. UKRI's DigiHaul and AI Centres for Doctoral Training include inference engineering in their technical curricula, training the next generation of UK inference engineers.

  ## Future Directions (2026-2030)
    - **Disaggregated prefill/decode** — physically separating prefill and decode phases across different accelerators (compute-dense for prefill, memory-bandwidth-dense for decode), enabling independent optimisation of each phase and better hardware utilisation; emerging from academic research into production deployment.
    - **Test-time compute as a primary quality lever** — reasoning models increasingly trade inference FLOPS for quality improvements, creating model families where inference cost is configurable at query time; the optimal compute/quality operating point becomes a product design choice rather than a fixed engineering constraint.
    - **Sub-4-bit and 1-bit quantisation** — BitNet b1.58 (all weights {-1, 0, +1}) demonstrated that ternary-weight models can match FP16 quality on language tasks; hardware support for sub-4-bit is emerging in 2026 silicon roadmaps; 1-bit inference would reduce LLM memory footprint 32× relative to FP16 while enabling CPU-native inference without GPU dependency.
    - **Neuromorphic and in-memory computing** — spiking neural networks and in-memory matrix-vector multiplication bypass the von Neumann bottleneck by computing where data resides; commercial deployments remain limited but UK-backed BrainChip (AKIDA chip) and Intel Loihi research demonstrate the architectural trajectory.
    - **Inference-time scaling laws** — empirical evidence that increasing inference compute (via chain-of-thought, tree-of-thought, best-of-N sampling) yields predictable quality improvements analogous to training scaling laws; this creates principled frameworks for inference budget allocation across diverse task types.
    - **Multi-modal and world model inference** — foundation models encoding video, audio, text, and sensor data jointly will require new inference architectures handling heterogeneous input streams at sub-real-time latency, driving specialised silicon design for tokenisation, cross-attention, and temporal processing.
    - **Energy-aware inference** — carbon-aware inference routing (directing requests to data centres with surplus renewable generation), adaptive precision (dynamically choosing quantisation level based on current power budget), and hardware sleep states between requests as inference-level sustainability controls become regulatory baseline requirements.
    - **Federated and private inference** — homomorphic encryption and trusted execution environments (TEE, Intel TDX, AMD SEV) enabling inference on encrypted inputs without model or data exposure; latency overhead currently 100–1000×, but hardware-accelerated FHE is an active research frontier.

  ## Current Landscape (2026)
    The AI inference market as of mid-2026 is characterised by simultaneous commoditisation of the base capability and intense differentiation at the optimisation and hardware layers. The OpenAI API compatibility standard has created a portability layer that enables rapid provider switching, intensifying price competition: GPT-4 class performance is available from multiple providers at $0.40–$1.00/M tokens (input), with Groq offering near-real-time inference (>500 tokens/second) via custom LPU hardware at competitive pricing. This commoditisation pressure has pushed providers toward differentiation on latency, reliability, specialisation (code-focused, multimodal, long-context), and feature richness (function calling, structured output, prompt caching) rather than base quality, which has converged across top providers.

    **Hardware landscape 2026**: NVIDIA maintains dominant market share (>80%) in data-centre inference acceleration through CUDA ecosystem lock-in, H100/H200/B200 performance leadership, and the TensorRT-LLM optimisation stack. AMD's Instinct MI300X has gained traction for open-weight model inference due to its 192GB unified HBM3 memory (enabling single-GPU deployment of 70B models at FP16 without quantisation), supported by vLLM's ROCm backend. Intel Gaudi 3 has found a niche in European data centres seeking non-NVIDIA supply chain diversification. Custom accelerators — Google TPU v5e/v5p, AWS Trainium/Inferentia, Microsoft Azure Maia — serve captive inference workloads for their operators and have collectively removed significant NVIDIA demand from hyperscaler budgets. XPUs (custom ASICs and FPGAs for specific model families) are projected to lead AI chip growth at 22% in 2026, outpacing GPUs (19%) and CPUs (14%), reflecting the maturation of production inference workloads amenable to hardware specialisation.

    **Software ecosystem 2026**: vLLM has established itself as the de facto open-source standard for production LLM serving, with the PyTorch Foundation membership formalising its governance and multi-vendor compute support. The OpenAI API specification has achieved de facto standardisation status: all major inference providers, open-source engines, and enterprise serving stacks implement the `/v1/chat/completions` endpoint. The [[ONNX]] format dominates non-LLM inference (vision, audio, classification, regression) with ONNX Runtime supporting 17 hardware execution providers as of 2025.

    **Cost trajectory 2026**: Gartner (March 2026) projects that by 2030, inference on a 1-trillion-parameter LLM will cost over 90% less than in 2025. The near-term trajectory (3–5× annual cost reduction through 2027, then 1.5–2× annually) is driven primarily by algorithmic efficiency improvements (test-time compute optimisation, improved quantisation algorithms) rather than hardware scaling, as hardware manufacturing is increasingly constrained by wafer capacity and power density limits. [[Speculative Decoding]] adoption at scale, improved [[Continuous Batching]] scheduling across heterogeneous request mixes, and prefix-sharing at the infrastructure layer represent the three largest near-term algorithmic cost levers.

    **Agentic inference 2026**: The dominant new inference workload category is agentic AI — [[Autonomous Agents]] making many sequential inference calls to plan, tool-call, and verify actions. Agentic workloads create new inference optimisation challenges: (a) long multi-turn context accumulation that stresses [[KV Cache]] memory across many turns, motivating session-level cache management; (b) high concurrency of short individual calls within a single agent session; and (c) reliability requirements — an agent that fails midway through a 50-step workflow wastes all prior inference compute — motivating idempotent, checkpointed inference serving architectures. Frameworks such as LangGraph, LlamaIndex Workflows, and AutoGen have emerged as production agentic orchestration layers that structure inference calls into directed graphs with state management, retry logic, and parallelisation of independent inference branches.

  ## Research & Literature
    1. Kwon, W. et al. (2023). Efficient Memory Management for Large Language Model Serving with PagedAttention. *SOSP 2023*. (vLLM's foundational PagedAttention algorithm; 2–4× throughput improvement.)
    2. Dao, T. et al. (2022). FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness. *NeurIPS 2022*. (Foundational FlashAttention; tiled attention avoiding HBM round-trips.)
    3. Dao, T. (2023). FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning. *ICLR 2024*.
    4. Shah, J. et al. (2024). FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-Precision. arXiv:2407.08608. (740 TFLOPs/s on H100.)
    5. Leviathan, Y. et al. (2023). Fast Inference from Transformers via Speculative Decoding. *ICML 2023*. (Original speculative decoding; 2–4× throughput improvement.)
    6. Kim, S. et al. (2023). Speculative Decoding: Exploiting Speculative Execution for Accelerating Seq2seq Generation. arXiv:2302.01318.
    7. Frantar, E. et al. (2022). GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers. arXiv:2210.17323. (Foundational LLM PTQ algorithm.)
    8. Lin, J. et al. (2024). AWQ: Activation-aware Weight Quantization for LLM Compression and Acceleration. *MLSys 2024*.
    9. Xiao, G. et al. (2023). SmoothQuant: Accurate and Efficient Post-Training Quantization for Large Language Models. *ICML 2023*.
    10. Agrawal, A. et al. (2024). Taming Throughput-Latency Tradeoff in LLM Inference with Sarathi-Serve. *OSDI 2024*. (Continuous batching enhancements for prefill-decode disaggregation.)
    11. Zheng, L. et al. (2024). SGLang: Efficient Execution of Structured Language Model Programs. arXiv:2312.07104. (SGLang structured generation serving engine.)
    12. Patel, P. et al. (2024). Splitwise: Efficient Generative LLM Inference Using Phase Splitting. *ISCA 2024*. (Prefill/decode disaggregation.)
    13. Abdin, M. et al. (2024). Phi-3 Technical Report: A Highly Capable Language Model Locally on Your Phone. arXiv:2404.14219. (On-device SLM inference; NPU deployment.)
    14. Guo, D. et al. (2025). DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning. arXiv:2501.12948. (Test-time compute scaling via chain-of-thought reasoning.)
    15. Ma, S. et al. (2024). The Era of 1-bit LLMs: All Large Language Models are in 1.58 Bits. arXiv:2402.17764. (BitNet b1.58 ternary-weight inference.)
    16. Narayanan, D. et al. (2021). Efficient Large-Scale Language Model Training on GPU Clusters Using Megatron-LM. *SC 2021*. (Pipeline + tensor parallelism for distributed LLM inference.)
    17. Pope, R. et al. (2023). Efficiently Scaling Transformer Inference. *MLSys 2023*. (Google TPU inference scaling; partition strategies for large transformer models.)
    18. Gartner (2026). Predicts: By 2030, Inference on 1T-Parameter LLM Will Cost 90% Less Than in 2025. Gartner Newsroom. March 2026.
    19. MLCommons (2025). MLPerf Inference v4.1 Results. mlcommons.org. (Industry benchmark results; H100 vs H200 vs Gaudi 3 competitive comparison.)
    20. vLLM Project (2025). vLLM Joins PyTorch Foundation; v0.7 Release. vllm.ai. (Compute partners: NVIDIA, AMD, Intel, Google, AWS, Alibaba Cloud, Red Hat, Roblox.)
    21. Liu, Z. et al. (2024). TETRIS: Optimal Draft Token Selection for Batch Speculative Decoding. arXiv:2502.15197. (Batch speculative decoding with optimal draft selection.)
    22. Edinburgh Research (2025). WaferLLM: A Wafer-Scale LLM Inference System. University of Edinburgh / Microsoft Research. (10× inference speed on Cerebras WSE; February 2025.)
    23. Cerebras Systems (2025). Cerebras Expands AI Inference Cluster at University of Edinburgh. Press Release. April 2025. (First CS-3 cluster in Europe; UK sovereign AI compute.)
    24. UK Government DSIT (2025). UK Unveils £1.1 Billion AI Hardware Plan; £150 Million Inference Chip Advance Market Commitment. Policy Paper. 2025.
    25. a16z (2025). LLMflation: LLM Inference Cost is Going Down Fast. Andreessen Horowitz Blog. (10× annual cost reduction 2021–2025; trajectory analysis.)
    26. Zylos Research (2026). LLM Inference Optimization and Quantization 2026: State of the Art. zylos.ai/research/2026-01-15. (2026 survey of production quantisation and batching techniques.)
    27. IntrolBlog (2025). Inference Unit Economics: The True Cost Per Million Tokens. introl.com. (GPT-4 equivalent from $20 to $0.40/M tokens 2022–2026.)
    28. ARM Holdings (2025). ARM Compute Library and Neural Network Inference on Mobile NPUs: Technical Reference. developer.arm.com. (On-device inference architecture; UK-origin technology powering all major mobile NPU implementations.)

- ### Provenance
  - sources:: MLCommons MLPerf Inference benchmarks; vLLM project documentation; ONNX specification; Hugging Face Text Generation Inference documentation; Kwon et al. 2023 PagedAttention (SOSP); Dao et al. 2022–2024 FlashAttention series; Gartner 2026 inference cost predictions; Edinburgh/Microsoft WaferLLM paper February 2025; Cerebras Edinburgh announcement April 2025; UK DSIT AI hardware plan 2025; a16z LLMflation 2025; vLLM PyTorch Foundation announcement 2025; Introl Blog inference unit economics 2025
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm