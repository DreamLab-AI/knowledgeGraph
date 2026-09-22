public:: true

# Dynamic Batching

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:dynamic-batching",
  "@type": "Page",
  "title": "Dynamic Batching",
  "vc:slug": "dynamic-batching",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:dynamic-batching",
  "@type": "Class",
  "label": "Dynamic Batching",
  "definition": "Dynamic batching is a serving-system technique that aggregates multiple independently arriving inference requests into a single batch for joint GPU execution, without requiring a fixed batch size determined at service startup. Requests are collected over a short time window or until a target batch size is reached, then processed together in one forward pass, amortising the fixed overhead of GPU kernel launches and memory transfers across requests. This substantially increases GPU utilisation and throughput compared with processing each request independently, at the cost of a small, controllable increase in per-request latency.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"}, {"@id": "urn:ngm:class:inference-optimisation", "label": "Inference Optimisation"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:batch-scheduler", "label": "Batch Scheduler"},
      {"@id": "urn:ngm:class:request-queue", "label": "Request Queue"},
      {"@id": "urn:ngm:class:padding-strategy", "label": "Padding Strategy"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:gpu-acceleration", "label": "Gpu Acceleration"},
      {"@id": "urn:ngm:class:inference-engine", "label": "Inference Engine"},
      {"@id": "urn:ngm:class:continuous-batching", "label": "Continuous Batching"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:high-throughput-serving", "label": "High Throughput Serving"},
      {"@id": "urn:ngm:class:cost-efficient-inference", "label": "Cost Efficient Inference"},
      {"@id": "urn:ngm:class:token-generation", "label": "Token Generation"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"},
      {"@id": "urn:ngm:class:model-serving", "label": "Model Serving"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"},
      {"@id": "urn:ngm:class:kv-cache", "label": "Kv Cache"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:speculative-decoding", "label": "Speculative Decoding"},
      {"@id": "urn:ngm:class:tensor-parallelism", "label": "Tensor Parallelism"},
      {"@id": "urn:ngm:class:latency-throughput-tradeoff", "label": "Latency Throughput Tradeoff"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:static-batching", "label": "Static Batching"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:request-scheduling", "label": "Request Scheduling"}
    ]
  },
  "sameAs": [],
  "quality": 0.91,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-20T00:00:00Z",
    "inferenceRule": "OntologyEnrichment"
  }
}
```

- ### Definition
  - Dynamic batching is a [[Model Serving]] optimisation technique that aggregates multiple independently arriving inference requests into a single batched tensor operation for joint execution on [[GPU Acceleration]] hardware, dramatically increasing throughput and hardware utilisation compared with naive request-at-a-time processing. Rather than fixing the batch size as a static deployment hyperparameter at model compilation time, a [[Batch Scheduler]] component continuously monitors a [[Request Queue]] and assembles batches according to configurable run-time policies — waiting up to a maximum time window of T milliseconds for additional requests to arrive, accumulating up to N requests before dispatch, or using adaptive hybrid policies that respond dynamically to arrival-rate fluctuations, current queue depth, and per-request service-level objective (SLO) deadlines — before dispatching the assembled batch as a single GPU forward pass. This run-time batching amortises the substantial fixed overhead of GPU kernel launches, PCIe bus memory transfers, driver dispatch latency, and CUDA scheduling overhead across all requests in the batch simultaneously, dramatically improving the arithmetic intensity of the computation and enabling GPU tensor cores to operate close to their theoretical peak throughput. When variable-length sequences must be batched together — as is universal in natural language processing, code generation, and other sequential token-generation workloads — a [[Padding Strategy]] component aligns shorter sequences to the length of the longest sequence in the batch using special padding tokens and attention mask tensors, or sequence packing techniques eliminate padding waste entirely by concatenating multiple short sequences into a single model input slot with a block-diagonal attention mask preventing cross-sequence information leakage. The evolution of dynamic batching for autoregressive [[Transformer]] generation workloads has produced [[Continuous Batching]] (also termed iteration-level scheduling or in-flight batching in different framework terminologies), which solves the specific scheduling challenge of autoregressive text generation by allowing new requests to enter and completed sequences to exit the running batch at each individual decoding step — between each generated token — rather than forcing all sequences in a batch to complete their full generation before the batch is released and new requests are accepted. This iteration-level scheduling is the most impactful optimisation in the history of production LLM serving: frameworks implementing [[Continuous Batching]] including vLLM, TensorRT-LLM, SGLang, and NVIDIA Triton Inference Server have demonstrated throughput improvements of 3 to 10 times over static single-request serving, reducing the cost per generated token by equivalent factors, and a 2025 survey of ML practitioners found that 94% of vLLM users achieve at least a 2x throughput improvement while the MLPerf 2025 inference benchmark demonstrates 60 or more tokens per second per user on A100 GPUs compared with 15–20 tokens per second under traditional static approaches, making high-volume [[Large Language Model]] API services economically viable at the pricing tiers consumers and enterprises expect.

- ### Semantic Classification
  - owl-class:: ai:DynamicBatching
  - owl-role:: ServingOptimisation | SchedulingStrategy | InferenceAcceleration
  - owl-inferred:: ai:BatchProcessing, ai:GPUOptimisation, ai:InferenceSystem, ai:MLOps
  - belongs-to-domain:: [[Machine Learning Systems]]
  - implemented-in-layer:: [[Inference Layer]]

- ### Relationships
  - is-subclass-of:: [[Model Serving]], [[Batch Processing]], [[Inference Optimisation]], [[Request Scheduling]]
  - has-part:: [[Batch Scheduler]], [[Request Queue]], [[Padding Strategy]], [[Continuous Batching]], [[Priority Queue]], [[Sequence Packing]], [[KV Cache]]
  - uses:: [[GPU Acceleration]], [[Inference Engine]], [[Continuous Batching]], [[KV Cache]], [[PagedAttention]], [[CUDA Kernel]], [[Attention Mechanism]]
  - enables:: [[High Throughput Serving]], [[Cost Efficient Inference]], [[Token Generation]], [[Multi-Tenant Serving]], [[GPU Utilisation]], [[LLM API]]
  - implements:: [[Request Scheduling]], [[Iteration-Level Scheduling]], [[In-Flight Batching]], [[Chunked Prefill]]
  - depends-on:: [[Transformer]], [[KV Cache]], [[GPU Acceleration]], [[Attention Mechanism]], [[CUDA]]
  - supports:: [[Large Language Model]], [[Model Serving]], [[Embedding Generation]], [[Computer Vision]], [[Retrieval Augmented Generation]], [[Agentic AI]]
  - contrasts-with:: [[Static Batching]], [[Request-At-A-Time Serving]], [[Sequential Processing]]
  - related-to:: [[Speculative Decoding]], [[Tensor Parallelism]], [[Latency-Throughput Tradeoff]], [[PagedAttention]], [[Prefill-Decode Disaggregation]], [[Chunked Prefill]], [[SLO-Aware Scheduling]], [[MLOps]], [[Quantisation]]
  - standardized-by:: [[NVIDIA Triton Inference Server]], [[vLLM]], [[TensorRT-LLM]], [[SGLang]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:hasPart ai:BatchScheduler))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:hasPart ai:RequestQueue))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:hasPart ai:PaddingStrategy))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:hasPart ai:ContinuousBatching))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:hasPart ai:PriorityQueue))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:hasPart ai:SequencePacking))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:hasPart ai:KVCache))
  ## Dependency Relationships
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:dependsOn ai:Transformer))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:dependsOn ai:KVCache))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:dependsOn ai:GPUAcceleration))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:dependsOn ai:AttentionMechanism))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:dependsOn ai:CUDA))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:uses ai:InferenceEngine))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:uses ai:PagedAttention))
  ## Capability Relationships
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:enables ai:HighThroughputServing))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:enables ai:CostEfficientInference))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:enables ai:TokenGeneration))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:enables ai:GPUUtilisation))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:enables ai:MultiTenantServing))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:enables ai:LLMAPIService))
  ## Implementation Relationships
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:implements ai:RequestScheduling))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:implements ai:IterationLevelScheduling))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:implements ai:InFlightBatching))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:implements ai:ChunkedPrefill))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:supports ai:LargeLanguageModel))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:supports ai:ModelServing))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:supports ai:EmbeddingGeneration))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:implements ai:KVCacheManagement))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:implements ai:SLOAwareScheduling))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:implements ai:PrefillDecodeDisaggregation))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:implements ai:SequencePacking))
  ## Reduction Relationships
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:reducesTo ai:BatchScheduling))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:reducesTo ai:RequestAggregation))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:reducesTo ai:QueuingTheory))
      SubClassOf(ai:DynamicBatching
        ObjectSomeValuesFrom(ai:reducesTo ai:GPUUtilisationOptimisation))

  ## About
    Dynamic batching addresses one of the most fundamental tensions in GPU-accelerated machine learning inference: modern GPU hardware achieves peak arithmetic throughput only when processing large, regular matrices of data across thousands of parallel CUDA cores and tensor cores simultaneously, but real-world inference workloads arrive as individual, asynchronously generated requests with variable sequence lengths and highly irregular inter-arrival times driven by unpredictable user behaviour and bursty traffic patterns. Serving each request individually leaves the vast majority of GPU compute capacity idle between the relatively small matrix multiplications of a single-sample forward pass, resulting in GPU utilisation rates of 5–20% on otherwise fully provisioned hardware — a catastrophic economic waste when H100 GPU time costs USD 2–4 per hour and production services must serve millions of requests daily. Dynamic batching resolves this inefficiency by interposing an intelligent scheduling layer between arriving client requests and the GPU execution pipeline, accumulating requests into groups and dispatching them as a single batched forward pass that achieves the high arithmetic intensity for which GPU tensor cores are optimised, transforming the economics of deep learning inference from a per-request sequential processing model to a highly parallelised batch processing model that mirrors how training workloads — always processed in large batches — efficiently utilise GPU hardware.

    The technique emerged from classical deep learning serving practice where batch size was a fixed deployment hyperparameter, selected at model compilation or configuration time to balance throughput and latency for an anticipated load level. This static batching forces a binary choice that cannot be adapted to variable real-world traffic: small static batch sizes yield acceptable latency for individual requests but waste GPU capacity when the workload is sparse; large static batch sizes saturate GPU compute and achieve high throughput but introduce queuing delay proportional to the time required to accumulate enough requests to fill each batch, producing unacceptable tail latency for users whose requests arrive while the batch is being assembled. Dynamic batching dissolves this binary by making batch size a real-time decision that adapts continuously to measured arrival rates and queue depth without operator intervention: when requests arrive densely, the scheduler assembles batches approaching the maximum configured size that fully saturate GPU compute; when requests arrive sparsely, the scheduler dispatches smaller batches or singletons after a configurable timeout, bounding worst-case queuing latency even at low traffic volumes. This adaptive behaviour means a single deployment configuration remains efficient across orders-of-magnitude variation in traffic rate, from overnight low-traffic periods to peak-hour bursts, without requiring manual parameter retuning.

    For autoregressive [[Transformer]] generation workloads — the dominant use case for LLM inference as of 2026, encompassing conversational AI, code generation, document summarisation, and agentic task execution — classical dynamic batching encounters a structural challenge that distinguishes generation tasks from classification or embedding tasks where all requests complete in a single, fixed-cost forward pass. Text generation requires a variable and unpredictable number of sequential decoding steps per request (one forward pass per generated output token), with different sequences terminating at different lengths determined by model-generated end-of-sequence tokens and maximum-length constraints. Under static batch assembly, a batch of N generation requests cannot release a GPU batch slot until all N sequences have completed, meaning the GPU idles on partially-complete slots waiting for slow or long sequences to finish — a phenomenon that degrades throughput severely when the distribution of output lengths is heavy-tailed (as it is for open-ended chat workloads where some queries elicit single-sentence responses and others multi-page essays). [[Continuous Batching]], introduced by the vLLM team at UC Berkeley in their 2023 OSDI-successor paper and subsequently implemented across all major serving frameworks, solves this by treating each individual decoding iteration — each single-token generation step — as the natural scheduling boundary: after every forward pass completes a decoding step for all currently active sequences, the scheduler immediately checks for completed sequences (those that generated an EOS token or reached maximum length) and fills those vacated batch slots with new requests from the queue before the next forward pass begins. This iteration-level scheduling, also referred to as in-flight batching by NVIDIA in their TensorRT-LLM documentation, keeps the GPU batch dimension continuously populated with active generation work at every forward pass, eliminating the idle time that plagued static batching approaches and enabling the 3 to 10 times throughput improvements now routinely measured in production deployments.

    The economic impact of dynamic batching on the AI inference industry cannot be overstated. Without it, the GPU compute costs of serving frontier large language models would be 5–10 times higher, making commercial API pricing at the USD 0.0001–0.001 per thousand tokens level economically infeasible on current hardware. By collapsing idle GPU time from 80% to under 20% of wall clock time in production deployments, continuous batching enables AI companies to serve exponentially more users per GPU-dollar, a efficiency improvement that has directly enabled the democratisation of LLM access through low-cost commercial APIs. The 2025 MLPerf Inference benchmark, the industry's most authoritative public benchmark for AI inference performance, documents this concretely: continuous batching-enabled systems achieve 60+ tokens per second per user on A100 GPUs for long-context LLM workloads, compared with 15–20 tokens per second for traditional static serving baselines — a 3–4x throughput improvement at the same hardware cost. Multiplied across the global fleet of tens of thousands of H100 and A100 GPUs serving commercial LLM APIs, this efficiency differential represents billions of dollars of annual compute cost avoidance and equivalent carbon emissions reduction.

    The scheduling theory underlying dynamic batching draws on decades of queueing theory research from operations research and telecommunications. The Pollaczek-Khinchine (P-K) formula for the M/G/1 queue provides the theoretical foundation for optimal batch timeout and size parameter selection: given a Poisson arrival process with rate λ and general service time distribution with mean E[S] and second moment E[S^2], the mean waiting time in queue is E[W] = λ × E[S^2] / (2 × (1 - ρ)) where ρ = λ × E[S] is the server utilisation. This formula reveals that queuing delay grows quadratically with service time variability and diverges as utilisation approaches 1 — the fundamental trade-off between high GPU utilisation (ρ → 1) and bounded queuing delay that dynamic batching navigates through adaptive batch size and timeout policies. Modern SLO-aware schedulers treat this as a constrained optimisation: maximise GPU utilisation ρ subject to the constraint that P99 queuing delay remains below the SLO budget, adjusting batch parameters dynamically as the arrival rate and service time distribution shift with traffic patterns.

  ## Components / Architecture

    **Batch Scheduler**
    - Central decision-making component operating in a tight loop: poll [[Request Queue]] → evaluate batching policy → assemble batch → dispatch to GPU → process completions → return results to clients.
    - Time-based policy: dispatch whatever has accumulated after waiting at most T milliseconds, bounding queuing latency regardless of traffic volume.
    - Count-based policy: wait until exactly N requests have arrived before dispatching, maximising GPU utilisation at the cost of variable queue delay.
    - Adaptive hybrid policy: dynamically adjusts effective wait window and target batch size based on real-time queue depth, GPU utilisation (NVML), arrival rate (exponential moving average), and per-request SLO deadline proximity.
    - SLO-aware scheduling: models each request's latency budget from its service tier and assigns requests in earliest-deadline-first order, preventing high-priority requests from starvation.
    - Memory-aware scheduling: estimates KV cache memory demand per pending request (proportional to input context length + anticipated generation length) and enforces GPU HBM constraints on batch composition.
    - Pre-emption mechanisms in advanced schedulers eject low-priority sequences from running batches when high-priority requests arrive with imminent deadlines, accepting re-prefill cost on pre-empted requests.

    **Request Queue and Priority Management**
    - The [[Request Queue]] is the input buffer decoupling request arrival from batch execution, storing requests until the [[Batch Scheduler]] dequeues them for batch assembly.
    - Simple FIFO queues suffice for single-tier workloads with uniform SLAs; multi-tenant platforms require priority queue implementations with multiple SLA classes and numerical priority weights.
    - Priority inheritance ensures requests that have waited beyond their expected batch latency are elevated in priority to prevent tail-latency explosion.
    - Backpressure mechanisms signal capacity exhaustion to upstream load balancers (HTTP 503 responses, rate-limit headers) when queue depth exceeds sustainable limits, preventing unbounded latency accumulation.
    - Priority inversion — low-priority bulk requests blocking high-priority interactive requests — managed through pre-emption in advanced schedulers.

    **Padding Strategy and Sequence Packing**
    - Variable-length sequences in a batch must be reconciled to a common tensor shape because GPU operations work on rectangular matrices with fixed dimensions across the batch dimension.
    - Naive [[Padding Strategy]]: append padding tokens to shorter sequences until all reach the longest-sequence length; attention masks prevent padded positions from contributing to output computations.
    - Padding waste is severe for heterogeneous-length batches: a batch of one 2048-token sequence and fifteen 64-token sequences wastes ~84% of compute on padding for the short sequences.
    - Sequence packing (concatenation packing, document attention): concatenate multiple short sequences into a single model input slot using block-diagonal or segmented attention masks preventing cross-sequence information leakage; eliminates padding waste entirely.
    - Bucket-based batching: partition sequences into length buckets (0–64, 65–128, 129–256 tokens) and form batches only within buckets, bounding padding overhead to at most one bucket width while preserving simpler attention implementations.
    - BucketServe (arXiv 2507.17120, 2025) formalises bucket-based dynamic batching, demonstrating improved throughput-latency Pareto profiles for heterogeneous-length workloads versus naive padding or full packing.
    - Packing-aware attention implementations (e.g. FlashAttention with varlen support, xFormers) efficiently execute packed batches with block-diagonal masks without manual per-sequence forward pass decomposition.

    **KV Cache Management and PagedAttention**
    - Each active sequence requires GPU HBM memory proportional to its generation length to store key-value attention tensors retained across forward passes for causal attention correctness.
    - Static contiguous allocation reserves maximum-length KV cache per batch slot, causing severe internal fragmentation (unused pre-allocated memory) and external fragmentation (inability to fit requests despite sufficient total memory).
    - Static allocation limits concurrent sequences to ~50% of theoretical maximum given available HBM, wasting expensive GPU memory capacity on fragmentation overhead.
    - [[PagedAttention]] (vLLM, Kwon et al. SOSP 2023): divides KV cache into fixed-size pages (~16 tokens' worth of KV tensors per page) allocated non-contiguously from a global page pool, with per-sequence page tables mapping logical token positions to physical page locations.
    - PagedAttention eliminates internal fragmentation (no pre-allocation beyond current length) and effectively eliminates external fragmentation (any pages totalling sufficient size can be allocated regardless of fragmentation pattern).
    - Result: near-100% GPU HBM utilisation and 2–4x more concurrent sequences per GPU compared with static allocation, enabling proportional throughput gains under continuous batching.
    - SGLang RadixAttention: extends PagedAttention with a trie-indexed cache of KV pages for shared request prefixes (system prompts, few-shot examples, tool definitions), enabling reuse of expensive prefill computation across requests sharing common context.
    - vAttention (2024): alternative approach managing KV cache using OS-level virtual memory primitives (mmap, madvise) without the custom page table overhead of PagedAttention, enabling dynamic growth without pre-allocation.
    - Cross-layer KV cache compression (Multi-Query Attention, Grouped Query Attention) reduces KV cache memory per sequence, enabling larger effective batch sizes for a given HBM budget.

    **Continuous Batching and Iteration-Level Scheduling**
    - [[Continuous Batching]] changes scheduling granularity from request-level (batch released when all sequences complete) to iteration-level (batch modified between every token generation step).
    - After each forward pass, the scheduler: checks all active sequences for completion events (EOS token, max length, client cancellation) → removes completed sequences → releases their KV cache pages → admits new requests from the queue fitting within available HBM → initialises new sequences' KV cache state → composes the next batch.
    - This micro-scheduling cycle repeats at every token generation step (hundreds to thousands of times per second in busy serving), keeping GPU batch dimension continuously populated.
    - Theoretical throughput gain = ratio of average to minimum output length in the request distribution; for Zipfian-distributed chat workloads (most responses brief, tail long), this ratio is 5–15x.
    - Orca (Yu et al., OSDI 2022) formally characterised iteration-level scheduling and demonstrated systematic superiority over request-level batching as the first rigorous analysis.
    - vLLM combined continuous batching with [[PagedAttention]] to produce the first complete open-source implementation achieving near-zero memory waste and maximum GPU occupancy simultaneously.
    - MLPerf 2025 benchmark: continuous batching achieves 60+ tokens/second per user on A100 vs 15–20 tokens/second for static baselines — a 3–4x measured throughput improvement in a standardised benchmark.
    - 2025 survey of ML practitioners: 94% of vLLM users achieve at least 2x throughput improvement versus their previous serving baseline.

    **Chunked Prefill and Prefill-Decode Disaggregation**
    - Prefill phase (parallel input prompt processing): compute-bound, benefits from high parallelism and large batch sizes.
    - Decode phase (autoregressive one-token-per-step generation): memory-bandwidth-bound, dominated by loading full model weights to GPU per step.
    - Long-context prefill requests in a continuous batching scheduler create pipeline stalls, monopolising the GPU for many milliseconds and delaying decode steps for other concurrently active sequences.
    - Chunked prefill (SARATHI, Agrawal et al. 2023): splits long prompts into smaller chunks interleaved with decode steps, bounding maximum latency spike from any single prefill at cost of slightly increased total prefill time.
    - Prefill-decode disaggregation: routes prefill and decode work to separate specialised GPU pools — high-parallelism prefill GPUs and high-bandwidth decode GPUs — with KV cache tensors transferred between pools over NVLink or InfiniBand.
    - SPAD (arXiv 2025): proposes specialised ASIC hardware separating prefill and decode execution units at silicon level, achieving superior efficiency versus monolithic GPU.
    - Nexus (arXiv 2507.06608, July 2025): proactive intra-GPU disaggregation managing prefill/decode allocation within a single GPU dynamically based on real-time workload.
    - Arrow (arXiv 2505.11916, 2025): adaptive scheduling mechanisms for disaggregated architectures optimising goodput under heterogeneous traffic patterns.
    - DOPO (arXiv 2511.20982, 2025): dynamic PD-disaggregation architecture maximising goodput by auto-tuning prefill/decode pool sizes to observed workload characteristics.

    **Speculative Decoding Integration**
    - [[Speculative Decoding]]: small draft model generates speculative future tokens in parallel; large target model verifies or rejects them in a single forward pass, achieving 2–3x decode speedup when draft acceptance rate is high (>70%).
    - In continuous batching context, the scheduler must compose batches containing both draft sequences and verification sequences for the target model simultaneously.
    - Rejected speculative tokens require generation rollback to the last accepted token; the scheduler manages KV cache state consistency between draft and target model across partial rejections.
    - vLLM speculative execution mode, SGLang's verifier, and TensorRT-LLM speculative decoding support integrate speculation within the iteration-level scheduling loop.
    - Dynamic speculation depth adaptation: scheduler adjusts the number of draft tokens per verification step based on measured draft acceptance rates per sequence type to maximise net throughput.
    - DSDE (Dynamic Speculative Decoding with KLD Stability, arXiv 2509.01083, 2025): adaptively selects speculation depth per request based on KL-divergence stability between draft and target model distributions.
    - Medusa (Cai et al., 2024): head-based speculative decoding adding multiple prediction heads to the target model, eliminating draft model overhead for improved latency in continuous batching deployments.

  ## Use Cases / Major Families

    **High-Traffic LLM API Services**
    - Production LLM APIs (OpenAI, Anthropic, Google, Cohere, Mistral, DeepSeek) rely entirely on continuous batching to achieve the USD 0.0001–0.001 per thousand tokens pricing structures users expect.
    - Without continuous batching, marginal GPU cost per inference request is 3–10x higher, making commercial API pricing economically infeasible on current GPU hardware.
    - Production fleets run across hundreds to thousands of GPUs behind load balancers routing requests by queue depth, model size tier, and geographic proximity for latency SLA compliance.
    - Multi-model serving: different model sizes (e.g. 7B, 70B, 405B parameter models) served by dedicated GPU pools with intelligent routing matching request complexity to appropriate model tier.
    - Auto-scaling infrastructure dynamically provisions additional serving instances as queue depth exceeds thresholds, scaling down during off-peak hours to minimise idle GPU cost.

    **Embedding Generation and Retrieval-Augmented Generation**
    - [[Retrieval Augmented Generation]] pipelines generate dense vector embeddings for millions of document chunks indexed in vector databases (Pinecone, Weaviate, Qdrant, pgvector) to enable semantic retrieval.
    - Embedding workloads are optimally suited to dynamic batching: each request completes in a single encoder forward pass, no autoregressive complexity, no variable output length, homogeneous sequence lengths within a domain.
    - Production embedding services routinely achieve GPU utilisation above 90% through dynamic batching alone, without requiring continuous batching complexity.
    - High-throughput embedding indexing pipelines process millions of documents per hour using maximum-size dynamic batches on GPU clusters, enabling daily full-corpus re-indexing for rapidly changing document collections.
    - Multi-model embedding pipelines (text, image, multimodal) dynamically batch across modalities within a shared GPU fleet using modality-specific batching policies.

    **Computer Vision Inference**
    - Image classification, object detection (YOLO, DETR), image segmentation, and multimodal VLM inference aggregate image requests through dynamic batching.
    - Variable input resolutions handled by image preprocessing pipelines resizing inputs to network-standard dimensions (224×224, 640×640) before batching, or by multi-scale bucket batching grouping images by resolution.
    - Real-time video surveillance requires time-based dispatch policies with strict latency bounds to ensure frame processing keeps pace with video capture rate.
    - Batch size selection for vision models trades off GPU memory (each image occupies W×H×C activation memory) versus throughput (larger batches improve GPU utilisation up to memory limits).
    - Medical imaging AI services (radiology, pathology) apply dynamic batching to process DICOM study queues with priority scheduling for urgent/emergency cases.

    **Multi-Tenant Model Serving Platforms**
    - Cloud ML serving (AWS SageMaker, Google Vertex AI, Azure ML, Hugging Face Inference Endpoints) and serving providers (Baseten, Modal, Replicate, Together AI) expose shared GPU infrastructure to hundreds of simultaneous customers.
    - Priority-aware dynamic batching separates customer SLA tiers (premium real-time vs. bulk-processing) while maximising aggregate throughput across the shared GPU pool.
    - Resource isolation within the batch scheduler ensures traffic bursts from one tenant do not cause SLA violations for co-located tenants, implementing fair-share queuing.
    - Cost allocation in multi-tenant serving: compute costs attributed per request or per token, with dynamic batching efficiency gains translating into lower effective cost per token billed.
    - Spot instance arbitrage: multi-tenant serving systems dynamically migrate serving loads between on-demand and preemptible GPU instances to reduce infrastructure cost.

    **Agentic and Multi-Step AI Workloads**
    - Agentic AI systems generate bursty, correlated inference traffic where a single user-facing action triggers tens to hundreds of sequential or parallel LLM calls within seconds.
    - Continuous batching handles heterogeneous sequence lengths, variable planning-step call volumes, and irregular inter-call timing of agentic workloads without manual configuration.
    - RAG embedding calls, planning LLM calls, tool-execution calls, and synthesis calls within a single agentic pipeline interleave across multiple serving systems, each independently maximising throughput.
    - Agent orchestration frameworks (LangGraph, AutoGen, CrewAI) integrate with continuous batching serving endpoints via async HTTP clients that naturally aggregate concurrent calls into batches server-side.
    - Multi-agent deployments where hundreds of agents share serving infrastructure benefit from continuous batching providing near-linear throughput scaling with agent count until GPU memory saturation.

    **Scientific Inference at Scale**
    - Virtual drug discovery screening: millions of molecular candidates scored per day using [[Graph Neural Network]] property models on GPU clusters with maximum-size dynamic batches.
    - Protein structure prediction: ESMFold, ColabFold, AlphaFold inference wrappers process tens of thousands of protein sequences overnight using batched inference on HPC GPU clusters.
    - Genomic variant effect prediction: deep learning models classify variant impact across whole-genome sequencing data for millions of variants, leveraging large batch sizes for throughput.
    - Materials science property prediction: surrogate models for DFT-computed material properties screen millions of crystal structures in silico using batched inference.
    - Scientific workloads are delay-tolerant, enabling maximum-size static or dynamic batches with long wait windows — the inverse of interactive workloads — maximising GPU utilisation at the cost of higher queue waiting time.

  ## Formal Algorithm and Scheduling Analysis

    **Dynamic Batching Scheduler: Formal Model**
    - Let Q(t) = {r_i} denote the queue of pending requests at time t, each request r_i characterised by:
      - Arrival time a_i
      - Input token count n_i
      - Maximum output token count bound m_i
      - SLO deadline d_i = a_i + L_i (L_i = maximum acceptable total latency for request i)
    - Scheduler selects batch B_k ⊆ Q(t) to dispatch at time t_k subject to three constraints:
      - **Memory feasibility**: Σ_{r ∈ B_k} (n_i + m_i) · C_kv ≤ M_gpu (where C_kv is per-token KV cache cost, M_gpu is available HBM)
      - **Batch size**: |B_k| ≤ N_max (maximum configured batch size)
      - **Time constraint**: t_k - min_{r ∈ Q(t)} a_i ≤ T_max (maximum queuing delay)
    - Objective function (multi-criteria): maximise Σ tokens/second subject to P99(TTFT) ≤ L_ttft_slo and P99(TPOT) ≤ L_tpot_slo

    **Continuous Batching: Iteration-Level Scheduler**
    - Batch state at decode step s: B^(s) = (B^(s-1) \ {completed sequences at step s-1}) ∪ {newly admitted sequences}
    - Admission condition for new sequence r': memory(B^(s-1) \ completions + {r'}) ≤ M_gpu
    - Each decode step generates one token per active sequence; TPOT = decode_time / |B^(s)|
    - Effective throughput T_eff = E[|B^(s)|] × (1 / TPOT) tokens per second
    - Throughput gain over static batching ≈ E[output_length] / min(output_length) for Zipfian-distributed output lengths

    **Complexity and Performance Analysis**
    - GPU kernel dispatch overhead: O(1) per batch (amortised across batch dimension)
    - Scheduling decision overhead: O(|Q(t)|) per step for priority-aware SLO scheduling
    - Memory management overhead: O(|B^(s)|) per step for PagedAttention page table updates
    - Practical scaling: continuous batching achieves near-linear throughput scaling with concurrent requests up to GPU HBM saturation; thereafter, throughput plateaus and TPOT increases
    - GPU utilisation formula: utilisation = (useful compute time) / (total GPU time) = 1 - (idle time + padding fraction)

    **Latency Decomposition**
    - Total request latency = queuing delay + prefill time + (num_output_tokens × TPOT)
    - Queuing delay: determined by P-K formula: E[W] = ρ/(1-ρ) × E[S^2]/(2×E[S]) where ρ = arrival_rate × E[S] (server utilisation), S = service time
    - Prefill time = n_i / prefill_throughput_per_sequence (typically 1–10ms per 1000 input tokens on H100)
    - TPOT = decode_latency / batch_size (typically 20–50ms/token at batch=1, 1–5ms/token at batch=32+ on H100)
    - TTFT = queuing_delay + prefill_time; TPOT = decode_step_time / |B^(s)| per generated token

  ## Academic Context
    - Theoretical foundations: Pollaczek-Khinchine (P-K) mean value analysis of M/G/1 queues characterises arrival rate, service time variance, and mean queuing delay relationships — analytical basis for batch timeout and size parameter selection.
    - **Pre-2010**: Batch processing in HPC and database systems establishes the paradigm of aggregating independent requests for amortised computational overhead; GPU batching for convolutional neural networks emerges in academic vision research.
    - **2012**: Krizhevsky et al. (AlexNet, NeurIPS 2012) demonstrates that large-batch GPU training is essential for deep network convergence — the conceptual foundation for batch-parallel inference follows naturally from the training regime.
    - **2015–2016**: TensorFlow (Abadi et al., OSDI 2016) and MXNet introduce serving-oriented graph execution; early experiments with fixed-size batching in TensorFlow Serving reveal GPU utilisation problems with fixed batch sizes under variable traffic.
    - **2017**: Olston et al. (TensorFlow Serving, NIPS 2017 Workshop on ML Systems) formalise dynamic batching for production deep learning serving with configurable batch window and maximum batch size — the template for serving framework configuration across the industry.
    - **2018**: NVIDIA open-sources TensorRT Inference Server (now Triton) applying dynamic batching across TensorRT, TensorFlow SavedModel, and ONNX Runtime backends, making the technique accessible to production infrastructure teams.
    - **2019**: Crankshaw et al. (Clipper, NSDI 2017) and INFaaS (2021) systems formalise model-level query batching with SLO-aware admission control; academic literature establishes queuing theory vocabulary for LLM serving.
    - **2020**: Rising commercial interest in Transformer serving creates pressure for throughput optimisation; FlexFlow (Jia et al., 2019) introduces parallel execution strategies for transformer inference that interact with batch scheduling.
    - **2021**: OPT-175B, GPT-NeoX, and Bloom open-weight LLM releases motivate academic serving research; Hugging Face text generation pipeline adds naive dynamic batching support.
    - **2022**: Yu et al. (Orca, OSDI 2022) formally characterise iteration-level scheduling as a distinct scheduling primitive for autoregressive generation, demonstrating 36.9x throughput improvement over baseline serving at 98th-percentile SLA compliance.
    - **2022**: DeepSpeed-Inference (Rajbhandari et al., SC22) scales transformer inference to hundreds of GPUs with tensor/pipeline parallelism; demonstrates interplay of model parallelism strategies with batch scheduling efficiency.
    - **2023**: Kwon et al. (vLLM PagedAttention, SOSP 2023) combine iteration-level scheduling with virtual-memory-inspired KV cache management, achieving 24x higher throughput than HuggingFace Transformers and 3.5x higher throughput than static serving systems.
    - **2023**: Agrawal et al. (SARATHI) introduce chunked prefill, demonstrating TTFT variance reduction of up to 12x and goodput improvement under tight latency SLAs.
    - **2023**: Leviathan et al. (ICML 2023) and Chen et al. (arXiv 2302.01318) independently propose speculative decoding integration with continuous batching, adding complexity to the scheduling problem.
    - **2024**: Zheng et al. (SGLang, NeurIPS 2024) contribute RadixAttention for prefix-aware KV caching, achieving 4.4x throughput improvement over vLLM on prefix-heavy workloads.
    - **2024**: Patel et al. (Splitwise, ISCA 2024) formalise prefill-decode disaggregation as a production architecture, providing the first large-scale empirical analysis of disaggregated serving efficiency.
    - **2025**: BucketServe (arXiv 2507.17120) formalises bucket-based length partitioning for heterogeneous-length workloads, improving throughput-latency Pareto profiles versus naive padding.
    - **2025**: Arrow, Nexus, SPAD, and DOPO papers advance disaggregated serving theory, adaptive scheduling mechanisms, and ASIC hardware co-design for prefill-decode separation.
    - **2025**: DSDE (arXiv 2509.01083) introduces KLD-stability-based dynamic speculative decoding depth adaptation for real-world continuous batching deployments.
    - **2026**: NVIDIA Dynamo production deployment at hyperscale cloud providers marks full mainstreaming of disaggregated, multi-node continuous batching; academic research attention shifts to heterogeneous model batching, multi-modal scheduling, and RL-based adaptive policies.

  ## Current Landscape (2026)
    - [[Continuous Batching]] is the universal standard for all production LLM serving by mid-2026; naive static batching effectively deprecated for autoregressive generation workloads.
    - **vLLM** (UC Berkeley Sky Computing Lab, open-source, first stable release June 2023): millions of monthly downloads; LangChain, LlamaIndex, Hugging Face, AWS SageMaker integrations; MLPerf 2025: 60+ tokens/second on A100 vs 15–20 for static baselines (3–4x improvement).
    - **TensorRT-LLM** (NVIDIA, open-sourced 2023): similar/marginally superior throughput at high concurrency (50–100 requests) for pre-compiled models; in-flight batching at C++ runtime level for minimal scheduling overhead; slightly exceeds vLLM on H100 for well-compiled configurations.
    - **SGLang** (Stanford LMSYS group, 2024): differentiates through RadixAttention prefix caching; 4–6x throughput gains over vLLM on prefix-heavy workloads (system prompts, few-shot examples, RAG passages).
    - **NVIDIA Dynamo** (announced 2025, successor to Triton serving stack): disaggregated multi-node serving with automatic prefill-decode pool management, GPU heterogeneity support, SLO-aware routing across mixed H100/H200/B200 clusters.
    - Prefill-decode disaggregation: moved from research prototype (DistServe 2024) to early production deployment at major inference providers in 2025–2026.
    - Model quantisation (FP8 native on H100/H200; INT4 via GPTQ/AWQ): reduces per-token KV cache memory footprint and attention computation cost, enabling larger effective batch sizes per GPU.
    - Cloud providers (AWS, Google Cloud, Microsoft Azure): 80–90% GPU utilisation on LLM serving fleets with continuous batching, vs 15–30% under static batching — 3–5x efficiency improvement directly reducing cost per token delivered to users.
    - 2026 roadmap items: quantum-inspired sparse attention for ultra-long contexts (>1M tokens); heterogeneous batching across multiple model variants; multi-modal unified scheduling for text/image/audio.
    - Open-source ecosystem: vLLM v0.7+, SGLang v0.4+, and TGI v2.x all implement continuous batching as default; HuggingFace TGI adoption has accelerated among users preferring Python-first deployment stacks.
    - **Groq LPU** (Language Processing Unit): deterministic batch-free streaming inference at fixed throughput with microsecond-level token latency; demonstrates that purpose-built silicon can achieve low latency without dynamic batching overhead through compiler-scheduled execution, challenging GPU+batching assumptions for latency-critical workloads.
    - **AWS Trainium2 and Inferentia3** (2025): purpose-built AWS inference ASICs optimised for transformer workloads; support dynamic batching via NeuronSD (Neuron Serving Daemon); provide cost-per-token advantages over GPU-based serving for specific model sizes and concurrency levels.
    - **Model size trend**: growing adoption of reasoning models (o1, DeepSeek-R1, QwQ-32B) that generate very long chain-of-thought sequences before producing a final answer increases average output token count from ~200 to 2,000–10,000 tokens per request, dramatically increasing KV cache memory pressure and the importance of KV cache management in continuous batching systems.
    - **Multi-modal LLM serving**: GPT-4o, Gemini 1.5 Pro, LLaVA, and PaliGemma image-text models require batching schedulers to handle variable-size image token sequences (256–1,024 vision tokens per image) alongside text tokens, requiring extended KV cache management and scheduling logic for heterogeneous token types.
    - **Structured output generation** (JSON schema adherence, constrained decoding): production deployments increasingly require structured output; SGLang's and Guidance's constrained decoding integration with continuous batching adds per-token overhead from FSM state tracking; scheduling theory must account for variable per-token compute cost under structured generation.

  ## UK Context
    - **DeepMind** (London, Alphabet): pre-eminent UK AI research laboratory; foundational work on speculative decoding, distillation for inference efficiency, and Gemini model serving architecture; operates production LLM serving from European data centres.
    - **Alan Turing Institute** (London): national institute for data science and AI; published research on sustainable AI computation and carbon implications of LLM inference; advocates dynamic batching as 3–8x energy reduction mechanism per inference request.
    - **UCL Machine Learning group**: efficient NLP inference research including model compression, knowledge distillation, and efficient attention approximations interacting with dynamic batching to extend per-GPU throughput.
    - **University of Edinburgh** (Institute for Language, Cognition and Computation): multilingual NLP inference research; efficient transformer deployment for low-resource language models relevant to UK public sector applications.
    - **Arm Holdings** (Cambridge HQ): transformer inference optimisation for next-generation data centre GPU and NPU architectures; batching-aware memory subsystem design to support larger effective batch sizes within on-chip memory constraints.
    - **Stability AI** (London): large-scale diffusion model and LLM inference infrastructure; contributions to open-source serving framework development; deployed EU-region GPU fleets with continuous batching.
    - **Wayve** (London/Cambridge): applies continuous batching to autonomous vehicle sensor fusion and planning model inference in real-time latency-critical environments.
    - UK AI infrastructure cluster (Shoreditch/King's Cross, London EC1/EC2): growing AI API companies deploying LLM serving on AWS eu-west-2 London, Google europe-west2, Azure uksouth regions where continuous batching is essential to meet commercial SLAs within region-constrained GPU allocations.
    - **ARCHER2** (Edinburgh) and **Dawn cluster** (Cambridge): national HPC infrastructure for UK academic groups running batched inference for protein sequence analysis, genomics variant calling, materials property prediction, and climate model emulation — high-throughput batch efficiency workloads.
    - **Baskerville HPC** (University of Birmingham): GPU cluster providing batched deep learning inference for UK biomedical and engineering research groups.
    - **University of Manchester**: Advanced Research Computing group and NLP/ML research groups applying efficient LLM inference to healthcare AI workloads requiring on-premises deployment without public cloud dependency.
    - **University of Sheffield** (NLP research group): published on efficient inference for multilingual models; relevant to UK public sector and defence applications requiring regional-sovereign AI serving infrastructure.

  ## Future Directions (2026-2030)
    - Tighter hardware-software co-design: NVIDIA Blackwell (GB200 NVL72, 2025) — 5th-gen NVLink at 1.8 TB/s, dedicated Transformer Engine for FP8, reducing KV cache page transfer overhead in disaggregated serving.
    - Custom ASIC inference accelerators (Groq LPU, Tenstorrent Wormhole, Cerebras Wafer-Scale Engine, SambaNova DataScale) expose deterministic, compiler-scheduled execution — hardware-native continuous batching with zero scheduling latency, achieving low latency and high throughput simultaneously.
    - Heterogeneous model batching: single scheduler routing requests dynamically across full-precision, quantised, distilled, and draft model variants based on real-time quality requirements and SLO tier — expected standard practice by 2027.
    - Per-request quality adaptation: model quality adaptively selected per request to minimise inference cost while meeting per-request quality thresholds, enabling tiered economics within a single GPU pool.
    - Multi-modal batching: unified scheduling framework coordinating image, text, audio, and video inference within shared GPU resources, requiring extended scheduling theory for radically different arithmetic intensity profiles per modality.
    - Edge-cloud disaggregated serving: prefill on high-memory datacenter GPUs (H200, B200), decode offloaded to edge hardware co-located with users — reducing TTFT network latency contributions for sub-100ms interactive voice AI applications.
    - RL-based scheduling policy optimisation: training a scheduling agent to adapt batch composition policies in real time based on observed SLO compliance rates, queue dynamics, GPU utilisation, and traffic distribution — enabling fully autonomous serving system adaptation without manual parameter tuning.
    - Sparse and mixture-of-experts (MoE) model serving: dynamic expert routing in MoE models (Mixtral, DeepSeek-MoE) requires extended batching theory to handle variable expert activation patterns across requests, preventing expert starvation in heterogeneous batches.
    - Latency-aware prefix compression: learned methods for compressing shared prefix KV caches below full precision without accuracy loss, extending RadixAttention's prefix reuse benefits to longer and more diverse shared context patterns.
    - LLM serving for private/sovereign AI: on-premises deployment on sovereign national compute infrastructure (UK Isambard AI, EU LUMI supercomputer, US NAIRR) using continuous batching without public cloud dependency.
    - Long-context serving (1M+ tokens): ultra-long context windows requiring linear attention approximations (Mamba, RWKV, RetNet), ring attention for multi-GPU sequence parallelism, and hierarchical KV cache tiering across HBM/DRAM/NVMe — extending continuous batching to regimes beyond current transformer attention scaling.
    - Cognitive architecture integration: batching schedulers for compound AI systems (LLM reasoning + tool execution + external memory retrieval + code interpretation) coordinating heterogeneous compute across GPU, CPU, storage, and external API resources within unified SLO constraints.
    - Zero-copy inter-process KV cache sharing: operating-system-level shared memory primitives (POSIX shared memory, Linux io_uring) enabling KV cache pages to be shared between serving process instances without serialisation overhead, reducing duplication in multi-process disaggregated deployments.
    - Federated LLM serving: distributing batching and inference across geographically dispersed GPU clusters with differential privacy guarantees for healthcare, finance, and government workloads prohibited from centralised cloud inference, requiring new scheduling theory for latency heterogeneity across WAN links.
    - Quantum-classical hybrid serving: speculative use of quantum annealers for batch optimisation sub-problems (optimal batch composition under multi-dimensional constraints) as quantum hardware matures toward practical advantage in combinatorial optimisation regimes.

  ## Major Serving Framework Comparison

    **vLLM (UC Berkeley Sky Computing Lab, 2023)**
    - Architecture: PagedAttention + continuous batching + CUDA graph-based execution
    - Throughput: 60+ tokens/second per user on A100, 3–4x over static baselines (MLPerf 2025)
    - Strengths: Python-first API, extensive ecosystem integrations (LangChain, LlamaIndex, Hugging Face, AWS SageMaker), active open-source community
    - KV cache: PagedAttention with configurable page size (default 16 tokens per page)
    - Speculative decoding: supported with configurable draft model and speculation length
    - Prefix caching: supported (LRU-evicted prefix cache, less advanced than SGLang RadixAttention)
    - Quantisation: GPTQ, AWQ, FP8, INT4 supported through various backends

    **TensorRT-LLM (NVIDIA, 2023)**
    - Architecture: in-flight batching at C++ TensorRT runtime level; model pre-compiled with TensorRT graph optimiser
    - Throughput: matches or slightly exceeds vLLM at high concurrency (50–100 requests) for well-compiled models on H100
    - Strengths: optimised CUDA kernels, FP8 native support on H100/H200, tightest hardware-software integration
    - Weaknesses: requires TensorRT model compilation (model-specific); less flexible Python API
    - Integration: paired with NVIDIA Triton Inference Server for production deployment and multi-model management

    **SGLang (Stanford LMSYS group, 2024)**
    - Architecture: RadixAttention (trie-indexed prefix caching) + continuous batching + structured generation optimisations
    - Throughput: 4–6x gains over vLLM on prefix-heavy workloads; competitive on diverse workloads
    - Strengths: best-in-class prefix caching for system-prompt-heavy or few-shot-heavy workloads; efficient structured output generation (JSON schema adherence)
    - KV cache: RadixAttention — shared prefix pages cached across requests sharing common prefixes
    - Use case: agentic AI serving, RAG pipelines with fixed retrieved passages, chatbot deployments with long fixed system prompts

    **HuggingFace Text Generation Inference (TGI, 2022)**
    - Architecture: continuous batching (iteration-level scheduling) + flash attention; Rust-based server core
    - Deployment: most widely used in academic and startup contexts; native Hugging Face Hub model loading
    - Strengths: easiest setup, largest model format coverage, native transformers integration
    - Throughput: competitive with vLLM for most workloads; slightly lower peak throughput at very high concurrency
    - Community: reference implementation for many custom model deployments

    **NVIDIA Triton Inference Server (2018, continually updated)**
    - Architecture: framework-agnostic model serving (TensorRT, TensorFlow, PyTorch, ONNX, custom backends) with configurable dynamic batching per model
    - Dynamic batching configuration: per-model batch window (timeout) and maximum batch size; supports preferred batch sizes, delay thresholds, and queue policy
    - Role: serves as the production-grade serving frontend; pairs with TensorRT-LLM backend for state-of-the-art LLM serving
    - Multi-model management: simultaneous serving of multiple model versions across GPU instances with load balancing

    **NVIDIA Dynamo (announced 2025)**
    - Architecture: next-generation disaggregated serving successor to Triton; automatic prefill-decode pool management
    - Capabilities: heterogeneous GPU support (mixed H100/H200/B200); SLO-aware routing; multi-node disaggregated serving
    - Status: production deployment at major cloud providers as of mid-2026; positions NVIDIA as the end-to-end inference stack for hyperscale LLM serving

  ## Benchmark Datasets and Performance Standards

    **MLPerf Inference Benchmarks**
    - **MLPerf Inference v4.0 / v4.1 (2024–2025)**: The primary industry benchmark suite for production LLM inference throughput and latency, including the Llama 2 70B and Mixtral 8x7B server-mode tests that specifically evaluate throughput under continuous batching. Results are submitted by NVIDIA, Intel, AMD, Qualcomm, and accelerator startups, with results validated by MLCommons. Continuous batching-enabled systems (vLLM, TensorRT-LLM) achieve 60+ tokens/second per user on A100 versus 15–20 tokens/second for static baselines.
    - **HELM** (Holistic Evaluation of Language Models, Stanford): While primarily an accuracy benchmark, HELM's large-scale evaluation across 30+ scenarios generates substantial inference workloads that serving teams use to evaluate end-to-end throughput.
    - **BenchServing (2024)**: Standardised LLM serving benchmark from the SGLang team measuring TTFT, TPOT, and throughput under varying concurrency levels, request length distributions, and prefix sharing scenarios.
    - **MLPerf Mobile v3.0 (2024)**: Edge inference counterpart measuring dynamic batching throughput on on-device accelerators (Apple ANE, Qualcomm Hexagon, MediaTek APU) for compact transformer models, establishing mobile reference points for batch efficiency at constrained memory budgets.
    - **MLPerf Power**: Co-submission with MLPerf Inference measuring energy-per-inference token under dynamic batching; key sustainability benchmark as AI data centres face power capacity constraints globally.

    **Framework-Specific Benchmarks**
    - **vLLM Benchmark Suite**: Open-source benchmarking scripts measuring throughput (tokens/second at batch saturation), TTFT (time-to-first-token, P50/P90/P99), and TPOT (time-per-output-token) across model sizes and GPU types; widely used as the community reference for continuous batching performance comparison.
    - **TensorRT-LLM Perf Benchmark**: NVIDIA's official benchmark for in-flight batching performance on H100, H200, and A100 GPUs, with results published in NVIDIA NGC model cards; includes batch efficiency curves showing throughput vs. latency Pareto frontier at different batch policies.
    - **SGLang RadixAttention Benchmark**: Benchmarks measuring the additional throughput gain from prefix caching under varying prefix sharing ratios, demonstrating 4–6x throughput improvement over vLLM on workloads with high shared prefix fractions.
    - **LMDeploy Benchmark**: MMLab's efficient serving framework benchmarks covering both chat and API serving modes; publishes throughput vs. concurrency curves for Llama 3, Mistral, and Qwen model families under continuous batching on A100/H100.
    - **Ollama Community Benchmarks**: Community-maintained performance tracking for local (consumer GPU) LLM serving without dynamic batching; provides comparative baseline revealing the throughput ceiling imposed by absence of dynamic batching in single-user deployments.
    - **Deepspeed-MII Benchmark**: Microsoft's serving-optimised benchmark comparing static and dynamic batching for DeepSpeed-Inference deployments; reports 30–40x throughput gains from dynamic batching on optimised model configurations.

    **Production Traffic Benchmarks**
    - **ShareGPT conversation dataset**: Widely used proxy for real-world LLM API traffic in batch scheduling research; 53,000 multi-turn conversations with Zipfian-distributed input/output lengths representing the heavy-tailed distribution characteristic of production LLM workloads.
    - **LMSYS Chatbot Arena traffic logs**: Anonymised production traffic traces from the LMSYS Chatbot Arena used in scheduling research to evaluate policies under realistic arrival rate distributions.
    - **Alpaca dataset**: 52,000 instruction-following examples with varying instruction and response lengths; used in throughput benchmarks representing single-turn instruction workloads.
    - **WildChat (2024)**: 1 million real-user ChatGPT conversation traces collected with user consent; more diverse and realistic than ShareGPT; used in 2025 scheduling papers for accurate arrival-rate and length-distribution modelling.
    - **LMSYS-Chat-1M**: Public release of 1 million chatbot conversations from 25 LLMs; multi-turn length distribution analysis used in continuous batching batch-size parameter optimisation studies.
    - **AzureTrace-LLM (2025)**: Microsoft Research public release of anonymised Azure OpenAI Service traffic traces; characterises inter-arrival time distributions, session length patterns, and token count distributions at hyperscale production traffic volumes.

  ## Economic and Sustainability Analysis

    **Cost Efficiency Impact**
    - GPU cost dominates LLM serving economics: H100 SXM5 retail pricing approximately USD 2–4/hour on cloud; A100 40GB approximately USD 1–2/hour; cost per million output tokens inversely proportional to tokens-per-second throughput.
    - Static batching at 15–20 tokens/second (A100) yields cost of approximately USD 0.08–0.13 per 1,000 output tokens at cloud spot pricing.
    - Continuous batching at 60+ tokens/second (A100) reduces cost to approximately USD 0.02–0.03 per 1,000 output tokens at same hardware cost — 3–4x cost reduction directly from scheduling technique.
    - Commercial LLM API pricing (GPT-4o: USD 0.0025/1K output tokens as of mid-2025) is viable only because dynamic batching enables near-100% GPU utilisation across the serving fleet.
    - Estimated annual GPU compute savings from industry-wide adoption of continuous batching: USD 5–15 billion (based on 2025 global AI inference compute expenditure estimates of USD 50–150 billion/year and 3–5x efficiency multiplier).

    **Energy Efficiency and Carbon**
    - Higher GPU utilisation from batching reduces idle power consumption (H100 idle ~200W vs full load ~700W); batching effectively reduces energy per output token by concentrating useful computation.
    - Alan Turing Institute analysis (2024): dynamic batching reduces energy per 1,000 inference tokens by 3–8x compared with request-by-request serving — critical as global data centre power consumption approaches 1% of total electricity generation.
    - Data centre PUE (Power Usage Effectiveness) for hyperscale LLM serving clusters: 1.1–1.2 for modern facilities (Google, Microsoft, AWS); GPU utilisation improvement from batching translates proportionally to reduced facility-level energy demand.
    - Scope 3 carbon emissions from AI inference: dynamic batching reduces embodied carbon amortised per useful computation unit by same throughput multiplier as throughput gain, reducing AI's lifecycle carbon footprint at scale.
    - Green AI research (Schwartz et al. 2020 framework applied to serving): continuous batching improves the efficiency ratio (useful computation / total energy consumed) by 3–8x compared with static serving baselines.

    **Operational and Scaling Economics**
    - Autoscaling integration: dynamic batching metrics (queue depth, GPU utilisation, TTFT P99) feed into Kubernetes HPA (Horizontal Pod Autoscaler) to trigger GPU instance provisioning before SLO violations; batching efficiency determines how aggressively autoscaling kicks in.
    - Cold-start latency cost: each new GPU instance takes 30–120 seconds to load model weights from cloud object storage before processing requests; continuous batching's GPU efficiency reduces provisioning frequency and cold-start cost.
    - Multi-tenancy economics: continuous batching enables multiple customer workloads to share GPU resources with per-tenant SLO isolation, enabling GPU fractional billing models and higher revenue-per-GPU for cloud providers.
    - Spot instance viability: batch-efficient serving maintains throughput targets with 20–30% fewer GPUs; enables increased use of spot/preemptible GPU instances (50–70% cheaper than on-demand) with graceful degradation protocols on interruption.

  ## Key Terminology

  - **Dynamic Batching**: Run-time assembly of multiple concurrently arriving inference requests into a single batched GPU forward pass, adapting batch size to current traffic without static pre-configuration.
  - **Continuous Batching** (Iteration-Level Scheduling): Scheduling approach for autoregressive generation where completed sequences are replaced by new requests between every decoding step, keeping GPU batch slots continuously populated.
  - **In-Flight Batching**: NVIDIA's TensorRT-LLM terminology for continuous batching; semantically identical to iteration-level scheduling — new requests join and old ones leave while other sequences are still being generated.
  - **Static Batching**: Legacy approach where batch size is fixed at deployment time and the batch must be filled before dispatch, causing GPU idle time when traffic is sparse and queuing delay when traffic is dense.
  - **Time-To-First-Token (TTFT)**: Latency from request submission to generation of the first output token; dominated by queuing delay and prefill computation; the primary user-perceived latency metric for interactive LLM applications.
  - **Time-Per-Output-Token (TPOT)**: Latency per generated output token after the first token; determined by decode step throughput divided by batch size; the primary metric for sustained generation quality.
  - **Prefill Phase**: The initial computation phase of a generation request where the entire input prompt is processed in a single parallel forward pass, creating the initial KV cache; compute-bound.
  - **Decode Phase**: The autoregressive token generation phase following prefill, where one output token is generated per forward pass; memory-bandwidth-bound due to full model weight loading per step.
  - **KV Cache**: Key-Value attention cache storing computed key and value tensors for all previously generated tokens in each active sequence; must be retained in GPU HBM between decode steps; the primary memory bottleneck for LLM serving.
  - **PagedAttention**: Virtual-memory-inspired KV cache management dividing the cache into fixed-size pages allocated non-contiguously, eliminating fragmentation and enabling near-100% GPU HBM utilisation.
  - **RadixAttention**: SGLang's extension of PagedAttention using a trie-indexed shared prefix cache, enabling reuse of KV pages across requests with common prefixes (system prompts, few-shot examples).
  - **Sequence Packing**: Batching optimisation that concatenates multiple short sequences into a single model input slot with a block-diagonal attention mask, eliminating padding waste for heterogeneous-length workloads.
  - **Chunked Prefill**: Splitting long input prompts into smaller chunks interleaved with decode steps to reduce prefill pipeline stalls and bound worst-case TTFT under continuous batching.
  - **Prefill-Decode Disaggregation**: Architecture separating prefill and decode work onto different GPU pools optimised for their respective compute vs. memory-bandwidth-bound characteristics.
  - **SLO** (Service-Level Objective): Performance target (e.g. P99 TTFT < 200ms, P99 TPOT < 50ms) that the serving system must meet; drives scheduler policy decisions on batch size, timeout, and priority.
  - **Arithmetic Intensity**: Ratio of floating-point operations to memory bytes transferred; high arithmetic intensity is required for GPU peak throughput; batching increases arithmetic intensity by amortising memory access overhead across multiple requests.
  - **Speculative Decoding**: Inference acceleration using a small draft model to generate speculative future tokens verified by the large target model; 2–3x decode speedup when draft acceptance rate is high; integrated within continuous batching schedulers.
  - **Batch Scheduler**: The system component making real-time batch assembly decisions based on queue depth, request priorities, GPU memory availability, and SLO deadline proximity.
  - **GPU Utilisation**: Fraction of GPU compute capacity actively processing useful work (as opposed to idle, waiting, or running on padding tokens); dynamic batching aims to maximise utilisation, with continuous batching achieving 70–90% in production LLM deployments.
  - **HBM** (High-Bandwidth Memory): The stacked DRAM technology providing 80–192 GB of extremely high-bandwidth (3.2–4.8 TB/s) GPU memory on H100/H200 GPUs; KV cache and model weights compete for HBM capacity in LLM serving.
  - **Effective Batch Size**: The average number of sequences processed simultaneously by the GPU across a measurement window; under continuous batching, effective batch size is substantially higher than the minimum batch size at any given instant.
  - **Goodput**: The fraction of total GPU compute throughput producing useful output (non-padding, non-speculative-rejected tokens); the primary metric for serving efficiency optimisation, as opposed to raw throughput which may include wasted computation.
  - **Backpressure**: Mechanism by which the serving system signals overload to upstream load balancers or clients by returning 503 Too Busy or rate-limit responses when queue depth exceeds sustainable limits, preventing unbounded latency accumulation.
  - **Multi-Tenant Serving**: Serving configuration where GPU resources are shared across multiple customers or workloads, requiring priority-aware scheduling and resource isolation to maintain per-tenant SLA compliance.
  - **Flash Attention**: Memory-efficient attention implementation (Dao et al., 2022) that tiles attention computation into SRAM-resident blocks to avoid materialising the full O(N^2) attention matrix in HBM, reducing memory bandwidth requirements and enabling larger effective batch sizes per GPU.
  - **Grouped Query Attention (GQA)**: Attention variant (Ainslie et al., 2023) using fewer key-value heads than query heads (e.g. 8 KV heads for 64 query heads), reducing KV cache memory by the grouping ratio and enabling proportionally larger batch sizes; now standard in Llama 3, Gemma, Mistral, and most frontier models.
  - **Multi-Query Attention (MQA)**: Extreme case of GQA where all query heads share a single key-value pair; maximum KV cache reduction (by number of query heads) at cost of slight attention quality reduction; used in Falcon, PaLM, and early Gemini models.
  - **CUDA Graph**: NVIDIA feature capturing a sequence of GPU kernel invocations as a compiled execution graph that can be replayed with lower driver overhead than individual kernel dispatch; used in vLLM and TensorRT-LLM for decode steps where batch composition is stable between forward passes.
  - **Request Preemption**: Advanced scheduling capability allowing the serving system to remove a running sequence from the active batch when a higher-priority request arrives with an imminent deadline, storing the preempted sequence's KV cache in CPU RAM for later resumption.
  - **KV Cache Offloading**: Technique storing less-recently-used KV cache pages in CPU DRAM or NVMe storage when GPU HBM is full, enabling serving of longer sequences or more concurrent requests at the cost of PCIe bandwidth for page retrieval on access.
  - **Tensor Parallelism**: Model parallelism strategy that splits individual weight matrices across multiple GPUs (e.g. splitting the attention head dimension), requiring all-reduce communication at each layer; complements dynamic batching by enabling larger model serving on single requests while maintaining batch efficiency.
  - **Pipeline Parallelism**: Model parallelism strategy splitting the model by layer groups across multiple GPUs; requires careful batch scheduling to fill the pipeline stages and avoid pipeline stalls; interacts with dynamic batching through micro-batch formation at each pipeline stage.
  - **Batch Window (Timeout)**: The maximum time the batch scheduler waits to accumulate requests before dispatching a batch regardless of batch size; configurable per-model in Triton; typically 1–10ms for interactive workloads; bounding worst-case queuing delay at low traffic.
  - **Admission Control**: The serving system mechanism deciding whether to accept or reject an incoming request based on current queue depth, GPU memory availability, and projected SLO feasibility; prevents overload cascades under traffic spikes.
  - **Working Set Size**: The total GPU HBM memory occupied by active model weights plus all live KV cache pages for currently running sequences; determines the maximum concurrency achievable on a given GPU before out-of-memory errors.
  - **LRU Eviction**: Least-Recently-Used page replacement policy applied to prefix KV cache entries (e.g. in vLLM prefix caching and SGLang RadixAttention); evicts cached prefix pages with the oldest last-access timestamp when HBM pressure exceeds capacity threshold.
  - **E2E Latency**: End-to-end request latency measured from client request submission to receipt of the final output token, encompassing queuing delay, prefill time, and total decode time (num_tokens × TPOT); the complete user-facing latency budget including network round-trip.
  - **Saturation Point**: The request arrival rate at which the serving system reaches steady-state GPU utilisation of ~90–95%; above this point queuing delay diverges (per the P-K formula) and SLOs become unachievable without additional GPU resources.
  - **Token Budget**: Per-request maximum generation length constraint; constrains maximum KV cache allocation per sequence; schedulers use token budget estimates during batch composition to enforce memory feasibility constraints.
  - **Swap (KV Cache Swap)**: Movement of KV cache pages between GPU HBM and CPU DRAM when GPU memory is exhausted; enables more sequences to be live simultaneously at cost of PCIe bandwidth for swap-out/swap-in operations.
  - **Iteration**: One complete forward pass of the transformer model through all layers for the currently active batch; the atomic unit of continuous batching scheduling; duration typically 10–50ms for 70B parameter models on A100.
  - **Throughput-Latency Pareto Frontier**: The achievable (throughput, P99 TTFT) pairs under a given scheduling policy; batching policies that expand throughput typically increase P99 TTFT; the Pareto frontier characterises optimal policy parameter settings.

  ## Deployment and Operations Considerations

    **Monitoring and Observability**
    - Essential metrics to instrument in a dynamic batching serving system: queue depth (P50/P99), batch fill rate (actual vs. maximum batch size), TTFT (P50/P90/P99), TPOT (P50/P90/P99), tokens per second, GPU HBM usage, KV cache page utilisation, and request rejection rate.
    - OpenTelemetry tracing captures per-request spans across queuing, prefill, and decode phases, enabling latency breakdown analysis and SLO attribution between scheduling overhead and model compute time.
    - Prometheus metrics exported by vLLM, SGLang, and TensorRT-LLM enable standard Grafana dashboards; production teams build alerting on P99 TTFT > SLO threshold and HBM usage > 90% as primary operational signals.
    - GPU NVML monitoring: nvidia-smi and NVML API expose GPU utilisation, memory footprint, temperature, and power consumption at per-second resolution; batch efficiency analysis requires correlating NVML GPU utilisation with serving system queue metrics.
    - Shadow mode testing: new scheduler policy variants can be evaluated in shadow mode against production traffic before cutover, comparing metrics without impacting real user SLOs.

    **Configuration and Tuning**
    - Batch window (timeout) parameter tuning: set timeout = target_P99_queuing_latency × safety_margin; typically 1–10ms for interactive chat, 50–200ms for batch API workloads.
    - Maximum batch size tuning: empirically determined by profiling GPU HBM usage at peak concurrency; set 10–15% below OOM threshold to provide memory headroom for variability in sequence lengths.
    - KV cache page size tuning: larger pages (32–64 tokens) reduce page table overhead; smaller pages (8–16 tokens) reduce internal fragmentation; default 16 tokens (vLLM) is well-calibrated for most workloads.
    - Chunked prefill chunk size: set to balance prefill stall reduction (smaller chunks) against prefill throughput overhead (larger chunks); typical range 512–2,048 tokens depending on target TTFT SLO.
    - Speculative decoding draft model selection: draft model must be small enough that draft generation overhead plus verification latency is less than saved main model decode latency at the expected acceptance rate.
    - SLO tier configuration: production systems define multiple SLO tiers (interactive: P99 TTFT < 100ms; standard API: P99 TTFT < 500ms; batch: P99 TTFT < 5s) with per-tier queue priority and batch timeout, allowing a single GPU pool to serve heterogeneous customer types.
    - Rolling restart strategy for model version updates: vLLM and TGI support graceful draining (stop accepting new requests, finish in-flight sequences) before restarting with a new model weight checkpoint, minimising SLO impact during version upgrades.

  ## Limitations and Trade-offs

    - **Queuing latency cost**: dynamic batching unavoidably adds queuing delay (typically 10–100ms at low load) to amortise GPU kernel overhead; poorly configured timeout parameters cause excessive latency at low traffic or wasted GPU capacity at high traffic.
    - **Head-of-line blocking**: without pre-emption, a single very long generation request can block batch slots needed by short, time-sensitive requests, causing SLO violations; mitigated by continuous batching and SLO-aware scheduling but not entirely eliminated.
    - **Memory pressure under load spikes**: sudden arrival of many long-context requests can exhaust GPU HBM KV cache capacity, causing requests to be rejected or queued; graceful degradation requires careful memory budget management.
    - **Draft model rejection overhead**: speculative decoding integration adds complexity when draft tokens are frequently rejected; the overhead of draft generation plus verification plus rollback can exceed simple autoregressive decode latency if acceptance rate falls below ~50%.
    - **Prefix cache cold start**: RadixAttention/SGLang prefix caching only benefits requests after the first request populating a given prefix; cold-start workloads or highly diverse prefixes receive no benefit.
    - **Heterogeneous model batching complexity**: batching requests for different model variants or sizes in a single scheduler requires per-model KV cache page pools and scheduling policies, significantly increasing scheduler implementation complexity.
    - **CPU scheduling overhead at scale**: at very high concurrency (thousands of simultaneous sequences), the per-iteration scheduling decision O(|Q(t)|) cost on CPU becomes a bottleneck unless the scheduler is highly optimised or partially offloaded to GPU.
    - **Measurement complexity**: benchmarking dynamic batching serving systems requires careful workload replay with realistic request arrival distributions (Poisson, Pareto, or measured production traces); synthetic fixed-concurrency benchmarks can mislead by underrepresenting queuing dynamics.
    - **KV cache swap performance degradation**: when active sequences exceed GPU HBM capacity and KV pages must be swapped to CPU DRAM, PCIe bandwidth (typically 32–64 GB/s) becomes the bottleneck; swap latency can increase per-step decode time by 5–20x, degrading TPOT substantially.
    - **Multi-GPU communication overhead**: tensor and pipeline parallelism introduce all-reduce or point-to-point communication at each forward pass; at small batch sizes, inter-GPU communication latency can dominate compute time, reducing the benefit of dynamic batching.
    - **Priority inversion risk**: in multi-tenant deployments, batch timeout policies that prioritise throughput can accidentally starve urgent, low-traffic-tier requests when high-volume lower-priority traffic fills batch windows before urgent requests are served.
    - **Accuracy-throughput interaction**: aggressive quantisation (INT4) to increase batch sizes per GPU introduces model accuracy degradation; the throughput-accuracy Pareto trade-off must be evaluated per deployment use case and cannot be optimised independently.
    - **Debug complexity**: debugging scheduling bugs (e.g. incorrect SLO deadline calculation, KV cache page table corruption, speculative decoding rollback state errors) in continuous batching systems is substantially harder than in static request-response serving due to concurrent, interleaved state changes across hundreds of simultaneously active sequences.

  ## Research & Literature
    1. Olston, C. et al. (2017). TensorFlow-Serving: Flexible, high-performance ML serving. *NIPS 2017 Workshop on ML Systems*.
    2. Yu, G. et al. (2022). Orca: A distributed serving system for Transformer-based generative models. *OSDI 2022*, 521–537.
    3. Kwon, W. et al. (2023). Efficient memory management for large language model serving with PagedAttention. *SOSP 2023*. https://arxiv.org/abs/2309.06180
    4. Agrawal, A. et al. (2023). SARATHI: Efficient LLM inference by piggybacking decodes with chunked prefills. *arXiv:2308.16369*.
    5. Zheng, L. et al. (2024). SGLang: Efficient execution of structured language model programs. *NeurIPS 2024*. https://arxiv.org/abs/2312.07104
    6. Leviathan, Y. et al. (2023). Fast inference from transformers via speculative decoding. *ICML 2023*. https://arxiv.org/abs/2211.17192
    7. Chen, C. et al. (2023). Accelerating large language model decoding with speculative sampling. *arXiv:2302.01318*.
    8. Sheng, Y. et al. (2023). FlexGen: High-throughput generative inference of large language models with a single GPU. *ICML 2023*. https://arxiv.org/abs/2303.06865
    9. Pope, R. et al. (2023). Efficiently scaling transformer inference. *MLSys 2023*.
    10. Rajbhandari, S. et al. (2022). DeepSpeed-Inference: Enabling efficient inference of transformer models at unprecedented scale. *SC22*.
    11. Kim, S. et al. (2023). Full stack optimization of transformer inference: a survey. *arXiv:2302.14017*.
    12. Dettmers, T. et al. (2022). LLM.int8(): 8-bit matrix multiplication for transformers at scale. *NeurIPS 2022*.
    13. Frantar, E. et al. (2023). GPTQ: Accurate post-training quantization for generative pre-trained transformers. *ICLR 2023*.
    14. Ning, A. et al. (2025). SPAD: Specialized prefill and decode hardware for disaggregated LLM inference. *arXiv 2025*. https://augustning.com/assets/papers/spad-arxiv-2025.pdf
    15. BucketServe (2025). Bucket-based dynamic batching for smart and efficient LLM inference serving. *arXiv:2507.17120*. https://arxiv.org/html/2507.17120v1
    16. Arrow (2025). Arrow: Adaptive scheduling mechanisms for disaggregated LLM inference architecture. *arXiv:2505.11916*. https://arxiv.org/pdf/2505.11916
    17. Nexus (2025). Nexus: Proactive intra-GPU disaggregation of prefill and decode in LLM serving. *arXiv:2507.06608*. https://arxiv.org/pdf/2507.06608
    18. DSDE (2025). Dynamic speculative decoding with KLD stability for real-world serving. *arXiv:2509.01083*. https://arxiv.org/pdf/2509.01083
    19. Li, Y. et al. (2025). SLO-Aware compute resource allocation for prefill-decode disaggregated LLM inference. *arXiv:2603.04716*.
    20. Patel, P. et al. (2024). Splitwise: Efficient generative LLM inference using phase splitting. *ISCA 2024*.
    21. Kwon, W. (2025). vLLM: An efficient inference engine for large language models. *UC Berkeley EECS Technical Report* EECS-2025-192. https://www2.eecs.berkeley.edu/Pubs/TechRpts/2025/EECS-2025-192.pdf
    22. Spheron Network (2026). vLLM vs TensorRT-LLM vs SGLang: H100 benchmarks 2026. https://www.spheron.network/blog/vllm-vs-tensorrt-llm-vs-sglang-benchmarks/
    23. Baseten (2024). Continuous vs dynamic batching for AI inference. https://www.baseten.co/blog/continuous-vs-dynamic-batching-for-ai-inference/
    24. RunPod (2024). vLLM Explained: PagedAttention and Continuous Batching. https://www.runpod.io/articles/guides/vllm-pagedattention-continuous-batching
    25. Aleksa Gordic (2025). Inside vLLM: Anatomy of a High-Throughput LLM Inference System. *vLLM Blog* September 2025. https://vllm.ai/blog/2025-09-05-anatomy-of-vllm
    26. NVIDIA (2024). TensorRT-LLM in-flight batching documentation. NVIDIA Developer Documentation. https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/user_guide/batcher.html
    27. Chen, S. et al. (2024). Comparative analysis of LLM inference serving systems: vLLM and HuggingFace TGI performance study. *arXiv:2511.17593*. https://arxiv.org/html/2511.17593v1
    28. Crankshaw, D. et al. (2017). Clipper: A low-latency online prediction serving system. *NSDI 2017*. https://www.usenix.org/conference/nsdi17/technical-sessions/presentation/crankshaw
    29. Dao, T. et al. (2022). FlashAttention: Fast and memory-efficient exact attention with IO-awareness. *NeurIPS 2022*. https://arxiv.org/abs/2205.14135
    30. Ainslie, J. et al. (2023). GQA: Training generalised multi-query transformer models from multi-head checkpoints. *EMNLP 2023*. https://arxiv.org/abs/2305.13245
    31. Shazeer, N. (2019). Fast transformer decoding: One write-head is all you need. *arXiv:1911.02150*. (Multi-Query Attention original paper.)
    32. Li, Y. et al. (2024). AlpaServe: Statistical multiplexing with model parallelism for deep learning serving. *OSDI 2023*.
    33. Fang, J. et al. (2021). TurboTransformers: An efficient GPU serving system for transformer models. *PPoPP 2021*.
    34. Hu, Q. et al. (2024). Inference without interference: Disaggregate LLM inference for mixed downstream workloads. *arXiv:2401.11181*.
    35. Lu, Y. et al. (2025). DOPO: Dynamic and predictive prefill-decode orchestration for LLM serving. *arXiv:2511.20982*. https://arxiv.org/pdf/2511.20982
    36. Schwartz, R. et al. (2020). Green AI. *Communications of the ACM*, 63(12), 54–63. https://dl.acm.org/doi/10.1145/3381831
    37. Alan Turing Institute (2024). Energy efficiency of AI inference systems: Dynamic batching impact analysis. *ATI Technical Report 2024-07*.

- ### Provenance
  - sources:: https://dasroot.net/posts/2026/04/how-continuous-batching-works-vllm-fast/ ; https://www.baseten.co/blog/continuous-vs-dynamic-batching-for-ai-inference/ ; https://arxiv.org/html/2511.17593v1 ; https://www.spheron.network/blog/vllm-vs-tensorrt-llm-vs-sglang-benchmarks/ ; https://arxiv.org/html/2507.17120v1 ; https://arxiv.org/pdf/2412.04504 ; https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/user_guide/batcher.html ; https://vllm.ai/blog/2025-09-05-anatomy-of-vllm ; https://python.plainenglish.io/pagedattention-vs-continuous-batching-vs-vllm-vs-sglang-a-practical-breakdown-4c19cc9e21c0 ; https://arxiv.org/pdf/2507.06608 ; https://arxiv.org/pdf/2505.11916 ; https://arxiv.org/pdf/2509.01083 ; https://augustning.com/assets/papers/spad-arxiv-2025.pdf
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
