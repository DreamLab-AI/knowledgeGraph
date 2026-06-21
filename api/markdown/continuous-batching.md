- ### Definition
  - Continuous Batching — also termed in-flight batching, iteration-level scheduling, or dynamic batching — is a technique for high-throughput [[Inference Serving]] of [[Large Language Models]] in which the [[Request Scheduling]] policy operates at the granularity of individual decoding steps rather than waiting for an entire batch of sequences to complete before admitting new work. In the naive static batching regime, all sequences in a batch must run until the longest sequence emits its end-of-sequence token before the next batch can begin; short sequences that finish early leave [[GPU Compute]] slots idle, inflating both [[Latency]] and cost. Continuous batching resolves this by re-evaluating the active batch composition after every forward pass: any slot vacated by a completed sequence is immediately reclaimed and assigned to a queued request, keeping [[GPU]] utilisation close to its theoretical maximum. The mechanism depends critically on efficient [[Memory Management]] of the [[KV Cache]], the per-token key-value tensor store that grows with sequence length during [[Autoregressive Decoding]]. [[Paged Attention]], introduced in the [[vLLM]] system (Kwon et al., SOSP 2023), addresses this by partitioning the cache into fixed-size blocks managed analogously to virtual memory pages, enabling near-zero fragmentation and prefix sharing across concurrent requests. Together, continuous batching and [[Paged Attention]] form the foundational throughput stack of all major open-source [[Inference Optimisation]] engines as of 2026 — including [[vLLM]], [[SGLang]], [[TensorRT-LLM]], and LMDeploy — and have demonstrated [[Throughput]] improvements of up to 23x over naive HuggingFace Transformers serving on the same [[GPU]] hardware. Extensions including [[Chunked Prefill]], [[Speculative Decoding]], and [[Prefill-Decode Disaggregation]] build upon continuous batching's iteration-level scheduling to further reduce time-to-first-token and improve tail [[Latency]] at high concurrency, making continuous batching the architectural cornerstone of modern production [[Model Serving]] for [[Natural Language Processing]] workloads built on [[Transformer Architecture]] backbones.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ContinuousBatching
  - owl-role:: ExecutableProtocol
  - owl-inferred:: artificial-intelligence:InFlightBatching, artificial-intelligence:DynamicBatching, artificial-intelligence:IterationLevelScheduling
  - belongs-to-domain:: [[Model Optimisation and Performance]]
  - implemented-in-layer:: [[Inference Serving]]

- ### Relationships
  - is-subclass-of:: [[Inference Optimisation]], [[Model Serving]]
  - has-part:: [[Request Scheduling]], [[KV Cache]], [[Chunked Prefill]], [[Paged Attention]]
  - requires:: [[GPU Compute]], [[GPU Memory]], [[Transformer Architecture]], [[Autoregressive Decoding]]
  - enables:: [[Throughput]], [[Large Language Models]], [[Inference Serving]], [[Retrieval-Augmented Generation]]
  - implements:: [[Memory Management]], [[Inference Optimisation]]
  - depends-on:: [[Paged Attention]], [[Attention Mechanism]], [[KV Cache]], [[Autoregressive Decoding]]
  - supports:: [[vLLM]], [[SGLang]], [[TensorRT-LLM]], [[Token Generation]], [[Natural Language Processing]]
  - uses:: [[GPU]], [[CUDA]], [[Paged Attention]], [[Flash Attention]], [[Tensor Parallelism]]
  - contrasts-with:: [[Batch Processing]], [[Triton Inference Server]]
  - related-to:: [[Speculative Decoding]], [[Prefill-Decode Disaggregation]], [[Quantisation]], [[Distributed Systems]], [[Pipeline Parallelism]], [[Model Optimisation and Performance]]
  - improves:: [[Latency]], [[Throughput]]
  - standardized-by:: [[vLLM]]

- ### Content
  ## Compositional Relationships (Components)
    ```
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:hasPart ai:RequestScheduling))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:hasPart ai:KVCache))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:hasPart ai:ChunkedPrefill))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:hasPart ai:SlotManagement))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:partOf ai:ModelServing))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:partOf ai:InferenceServing))
    ```
  ## Dependency Relationships
    ```
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:requires ai:GPUCompute))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:requires ai:GPUMemory))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:requires ai:TransformerArchitecture))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:requires ai:AutoregressiveDecoding))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:dependsOn ai:PagedAttention))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:dependsOn ai:AttentionMechanism))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:dependsOn ai:KVCache))
    ```
  ## Capability Relationships
    ```
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:enables ai:Throughput))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:enables ai:LargeLanguageModels))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:enables ai:InferenceServing))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:enables ai:MultiTenantInference))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:supports ai:vLLM))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:supports ai:SGLang))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:supports ai:TensorRTLLM))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:improves ai:Latency))
    ```
  ## Implementation Relationships
    ```
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:uses ai:PagedAttention))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:uses ai:FlashAttention))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:uses ai:TensorParallelism))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:uses ai:CUDA))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:implements ai:MemoryManagement))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:implements ai:InferenceOptimisation))
    ```
  ## Reduction Relationships
    ```
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:reducesTo ai:RequestScheduling))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:contrastsWith ai:StaticBatching))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:contrastsWith ai:BatchProcessing))
    SubClassOf(ai:ContinuousBatching
      ObjectSomeValuesFrom(ai:relatedTo ai:PrefillDecodeDisaggregation))
    ```

  ## About
    Continuous batching is the scheduling mechanism that elevated [[Large Language Model]] serving from a low-efficiency, high-latency operation to a production-grade, economically viable service. The underlying problem it addresses — GPU under-utilisation under heterogeneous request lengths — is structurally fundamental to [[Autoregressive Decoding]]: because each token is generated sequentially and depends on all prior tokens' key-value representations stored in the [[KV Cache]], inference cannot be trivially parallelised across sequence positions. In naive static batching, the scheduler fills a batch, fires a forward pass for every decoding step, and waits until the entire batch completes (i.e., the longest sequence emits its end-of-sequence token) before starting new work. Short requests that finish early simply idle — their slots are allocated but unused — causing effective GPU utilisation to collapse under heterogeneous workloads typical of chat, API, or [[Retrieval-Augmented Generation]] applications where prompt and response lengths vary by orders of magnitude.

    Continuous batching, first described systematically by Orca (Yu et al., OSDI 2022) and rapidly adopted in [[vLLM]] (Kwon et al., SOSP 2023), dissolves this bottleneck by moving [[Request Scheduling]] to the iteration level: after each forward pass (a single decoding step for all sequences currently in flight), the scheduler checks whether any sequence has completed. Completed sequences immediately release their [[KV Cache]] blocks, and pending requests from the queue are admitted to fill those slots in the very next forward pass. The [[GPU]] never waits for a tail sequence to finish; it remains continuously occupied. Anyscale benchmarks demonstrated that the combination of [[Paged Attention]] and continuous batching yields [[Throughput]] improvements of up to 23x over naive HuggingFace Transformers serving on identical hardware. More conservatively, production benchmarks across diverse workloads show 4-8x throughput improvement, with the largest gains under high request concurrency and high variance in request length.

    The technique is now universally adopted in production LLM serving stacks. As of 2026, [[vLLM]], [[SGLang]], [[TensorRT-LLM]] (where it is marketed as "in-flight batching"), and LMDeploy ("persistent batching") all implement continuous batching as their default scheduling strategy. The performance frontier has shifted to optimising the interactions between continuous batching and its extensions: [[Chunked Prefill]], [[Speculative Decoding]], and [[Prefill-Decode Disaggregation]].

  ## Components / Architecture

    **Iteration-Level Scheduler**: the core algorithmic component. After every forward pass, the scheduler evaluates: (1) which sequences have completed (emitted EOS or hit max length), (2) which queued requests can be admitted given current memory availability, and (3) how to reshape the batch tensor accordingly. The scheduler operates on sequence-level metadata — current position, remaining budget, priority — rather than on the raw tensors, keeping scheduling overhead below 1 ms.

    **[[KV Cache]] Manager with [[Paged Attention]]**: the enabling data structure. [[Paged Attention]] partitions the [[KV Cache]] into fixed-size physical blocks (typically 16-32 tokens per block). A per-sequence block table maps logical token positions to physical blocks scattered across [[GPU Memory]], analogously to virtual memory page tables. When a sequence completes, its blocks are returned to a free-block pool; incoming sequences draw from this pool. This eliminates both internal fragmentation (blocks of exactly the right size) and external fragmentation (non-contiguous allocation is fine). Copy-on-write semantics allow identical prefixes — such as shared system prompts in a multi-tenant deployment — to reference the same physical blocks without duplication.

    **Prefill Pipeline**: the initial forward pass that processes the entire input prompt in parallel (one pass, full prompt length), populating the [[KV Cache]] for all input tokens. This is compute-intensive and is distinct from the decode phase. In high-concurrency systems, prefill of long prompts can momentarily stall decode steps for other in-flight sequences; [[Chunked Prefill]] addresses this by breaking prefill computation into smaller chunks and interleaving them with decode steps of other sequences.

    **Admission Control**: the scheduler must enforce a memory budget — attempting to admit a request whose [[KV Cache]] requirements would exhaust [[GPU Memory]] would cause out-of-memory errors. Admission control evaluates the maximum possible cache footprint of a new request (worst-case output length) and only admits it if sufficient free blocks exist. Some implementations support preemption: pausing low-priority sequences (swapping their KV cache to CPU memory or dropping it entirely) to admit higher-priority requests.

    **[[Chunked Prefill]]** (introduced in vLLM v0.3+, SGLang): prefill requests are segmented into equal-sized chunks (e.g., 512 tokens), and each chunk is executed as part of a micro-batch that also includes decode steps for other sequences. This prevents long prompts from monopolising the GPU for an entire forward pass, reducing time-to-first-token variance and improving overall [[Throughput]] when prefill and decode loads are mixed.

    **[[Speculative Decoding]] Integration**: speculative decoding uses a small, fast draft model to propose multiple tokens that the larger target model verifies in a single forward pass, achieving 2-3x token generation speedup without changing output quality. Integrating speculative decoding with continuous batching requires careful scheduler coordination; as of vLLM v0.18.0, NGram speculative decoding supports [[Chunked Prefill]] while draft-model-based speculative decoding does not, representing an active engineering frontier.

    **[[Prefill-Decode Disaggregation]]**: an architectural evolution that runs prefill and decode on separate GPU pools (Mooncake architecture, Kimi/DeepSeek production systems). The prefill pool processes incoming prompts at high compute efficiency; the resulting [[KV Cache]] tensors are streamed to the decode pool, which runs continuous batching over completed-prefill sequences. Disaggregation removes the interference between compute-bound prefill and memory-bandwidth-bound decode, enabling independent scaling of each phase. By 2025, every major production-grade LLM serving framework — NVIDIA Dynamo, llm-d, Ray Serve LLM, [[SGLang]], [[vLLM]], Mooncake — supported disaggregated inference. SGLang with Mooncake on 96 H100 GPUs achieved 52,300 input tokens/second and 22,300 output tokens/second for DeepSeek-R1.

  ## Use Cases / Major Families

    **Chat and API services**: the archetypal continuous batching workload — requests arrive at varying rates, prompt lengths range from a few tokens (continuation prompts) to thousands (document-grounded QA), and response lengths are similarly unpredictable. Continuous batching maximises throughput for this heterogeneous mix and minimises queuing latency for short requests that would otherwise wait behind long ones.

    **[[Retrieval-Augmented Generation]] (RAG)**: RAG pipelines prepend retrieved document chunks to the user query, creating prompt lengths that vary substantially with retrieval results. Under static batching, the padding overhead from aligning RAG prompts to batch-uniform lengths is severe. Continuous batching eliminates padding entirely and allows prefix-sharing of common document chunks via [[Paged Attention]]'s copy-on-write blocks.

    **Multi-tenant inference with shared prefixes**: enterprise deployments serving multiple clients from a single model instance commonly inject per-client system prompts. [[Paged Attention]]'s prefix caching allows these prompts to populate the [[KV Cache]] once and be shared across all requests from that client, saving both computation and memory proportional to system prompt length.

    **Long-context inference**: models with 128K+ context windows generate [[KV Cache]] tensors that dwarf the model weights themselves. Continuous batching with [[Paged Attention]]'s non-contiguous block allocation allows long-context requests to coexist with short ones without pre-reserving contiguous memory regions, dramatically improving memory utilisation at scale.

    **Speculative workloads and structured generation**: applications requiring constrained decoding (JSON schemas, grammar-guided generation) or speculative drafting benefit from continuous batching's flexible batch composition, allowing speculative token proposals to be verified in parallel with other in-flight decode steps.

    **Cost-optimised inference serving**: cloud inference providers including AWS Bedrock, GCP Vertex AI, Azure AI, and UK-based providers (Ori, Aleph Alpha UK partnerships) use continuous batching as the foundational throughput mechanism to reduce per-token serving cost, with measured cost reductions of 4-6x compared to static batching at equivalent quality-of-service levels.

  ## Academic Context

    The intellectual roots of continuous batching lie in operating systems scheduling theory: the analogy between iteration-level LLM scheduling and OS process scheduling (where the CPU switches between processes at each clock interrupt) is explicit in the Orca paper (Yu et al., 2022). The Orca paper (presented at OSDI 2022, University of Washington) is the first formal treatment of iteration-level scheduling for transformer inference, introducing the term and demonstrating 36.9x throughput improvement over existing systems.

    [[vLLM]] (Kwon et al., SOSP 2023) operationalised continuous batching at scale by pairing it with [[Paged Attention]] — the key insight being that continuous batching requires efficient [[Memory Management]] of variable-length [[KV Cache]] allocations, which naive contiguous allocation cannot provide. The [[vLLM]] paper was awarded the SOSP 2023 Best Paper award, reflecting the community's recognition of its practical significance.

    [[Flash Attention]] (Dao et al., NeurIPS 2022; Flash Attention 2, 2023; Flash Attention 3, 2024) is a complementary optimization operating at the kernel level — it restructures attention computation to reduce HBM memory bandwidth requirements — and is orthogonal to but synergistic with continuous batching. Together, they operate at different levels of the inference stack: continuous batching optimises request scheduling and cache utilisation; [[Flash Attention]] optimises the attention kernel arithmetic intensity.

    The Mooncake paper (Qin et al., USENIX FAST 2025) formalised [[Prefill-Decode Disaggregation]] and demonstrated the economic case for separating the two phases onto specialised hardware pools. The architecture was developed at Moonshot AI for the Kimi production service and released as open source, rapidly adopted by SGLang, [[vLLM]], and the LLM serving community.

    FairBatching (arXiv:2510.14392) introduced fairness-aware batch formation for continuous batching systems, addressing the head-of-line blocking problem in which a small number of very long requests can stall other users' short requests even under continuous batching if the scheduler is purely throughput-greedy.

  ## Current Landscape (2026)

    As of mid-2026, continuous batching is the universal baseline for all serious LLM inference deployments. The competitive landscape has shifted to optimising the second-order interactions between continuous batching and its extensions.

    **vLLM vs SGLang**: SGLang has overtaken [[vLLM]] in raw throughput on most benchmarks — delivering approximately 16,200 tokens/second versus [[vLLM]]'s 12,500 tokens/second on H100 GPUs at 70B+ model scale (n1n.ai benchmark, March 2026). SGLang's advantage stems from its RadixAttention prefix-tree caching and optimised [[Chunked Prefill]] scheduling. For smaller (7B-8B) models, the gap is approximately 29% in SGLang's favour. [[vLLM]] retains advantages in hardware compatibility breadth (AMD ROCm, Intel Gaudi, CPU) and community size. TensorRT-LLM, NVIDIA's proprietary implementation, leads on NVIDIA hardware for pure throughput at the cost of a complex deployment model.

    **Zero-bubble scheduling**: vLLM v0.19.0 introduced async scheduling with overlap between CPU-side scheduling and GPU-side computation, reducing scheduling overhead to near zero and contributing to a 4.3x improvement in aggregate throughput metrics on certain workloads.

    **Disaggregation at scale**: [[Prefill-Decode Disaggregation]] has become standard for large-scale deployments. NVIDIA Dynamo, Ray Serve LLM, and llm-d all ship with disaggregation support. The economics are compelling: prefill is compute-bound (benefits from high-FLOP chips) while decode is memory-bandwidth-bound (benefits from high-HBM-bandwidth chips), enabling workload-specific hardware selection.

    **Data residency deployments**: UK and EU organisations subject to data residency requirements under GDPR and the Data Protection Act 2018 increasingly deploy [[vLLM]] and [[SGLang]] on private GPU infrastructure. The open-source nature of both engines eliminates data leakage to external inference APIs, with continuous batching ensuring economically viable throughput on on-premises hardware. UK cloud providers including Ori Cloud (Oxford-founded) and Fascia Labs offer managed [[vLLM]]-based inference services under UK jurisdiction.

  ## UK Context

    The UK has developed a notable presence in LLM inference infrastructure, driven by regulatory (GDPR, UK Data Protection Act 2018), commercial, and academic interests. The Alan Turing Institute's LLM serving research programme has explored continuous batching and prefix caching for constrained-access research models, publishing efficiency analyses relevant to academic compute allocation at ARCHER2 (Edinburgh) and Baskerville (Birmingham) national computing facilities.

    Oxford-founded Ori Cloud and Edinburgh-based Epigram AI have both deployed [[vLLM]]-based inference stacks with continuous batching as UK-jurisdiction alternatives to US-based cloud AI APIs, marketing specifically to healthcare (NHS Digital) and legal sector clients who cannot route data through US-based inference endpoints.

    The University of Edinburgh's School of Informatics, through collaborations with the Edinburgh International Data Facility (EIDF), has used [[vLLM]] with continuous batching to serve open-weight models for the Scottish Government's public-sector AI pilots, exploring throughput-cost trade-offs for multi-tenant academic deployments serving diverse [[Natural Language Processing]] tasks.

    Manchester's National Graphene Institute has explored inference serving for materials-science LLMs on NGI GPU clusters, with continuous batching enabling multi-user sharing of specialised chemistry models — directly relevant to Northern England's advanced materials manufacturing base in Manchester, Sheffield (steel/advanced alloys), and Teesside (chemicals). Imperial College London's AI lab has published on fairness-aware scheduling for shared inference infrastructure, building on the FairBatching academic literature.

  ## Future Directions (2026-2030)

    **Chiplet and disaggregated memory architectures**: next-generation GPU architectures (NVIDIA Blackwell Ultra, AMD MI400) feature CXL-attached memory pooling and chiplet disaggregation. Continuous batching schedulers will need to manage heterogeneous memory tiers (HBM, CXL-DRAM, NVMe) for [[KV Cache]], enabling sequences longer than any single chip's HBM capacity.

    **Multi-model and mixture-of-experts serving**: future inference systems will serve multiple models or [[Large Language Models]] with sparse mixture-of-experts architectures concurrently on a single GPU cluster. Continuous batching across models — routing different requests to different expert subsets without GPU idle time — is an open research problem.

    **AI inference energy efficiency standards**: the EU AI Act's forthcoming inference efficiency provisions and the UK government's AI Opportunities Action Plan (January 2026) both include references to compute efficiency reporting. Continuous batching's throughput gains directly translate to energy efficiency improvements per token, making it a policy-relevant technology for AI carbon footprint reduction.

    **Sparse and adaptive computation**: future models with adaptive computation depth (early exit layers, token skipping) will require continuous batching schedulers that can handle sequences of varying effective depth in the same batch, creating new scheduling complexity.

    **Agentic inference**: multi-step agentic workloads generating tool calls, sub-agent prompts, and structured outputs mid-sequence require the scheduler to handle sequence forking and merging, extending continuous batching beyond simple sequence completion semantics.

  ## Key Terminology

    - **Static Batching**: the naive scheduling approach where all sequences in a batch run to completion before the next batch starts; wastes GPU capacity under heterogeneous request lengths.
    - **Continuous Batching (In-Flight Batching)**: iteration-level scheduling that admits new requests as existing ones complete, keeping GPU utilisation constant.
    - **KV Cache**: the per-sequence memory store of key-value tensors computed for past tokens, enabling [[Autoregressive Decoding]] without recomputing attention over the full history at each step.
    - **Paged Attention**: block-based [[KV Cache]] management that eliminates fragmentation by decoupling logical token positions from physical memory layout.
    - **Prefill Phase**: the initial forward pass that processes the full input prompt, populating the [[KV Cache]]; compute-intensive.
    - **Decode Phase**: the autoregressive generation loop producing one token per forward pass; memory-bandwidth-intensive.
    - **Chunked Prefill**: splitting the prefill phase into smaller chunks interleaved with decode steps of other sequences, reducing time-to-first-token variance.
    - **Prefill-Decode Disaggregation**: running prefill and decode on separate GPU pools, enabling independent scaling and hardware specialisation for each phase.
    - **Speculative Decoding**: using a small draft model to propose multiple tokens that the target model verifies in one forward pass, improving effective token generation rate.
    - **Admission Control**: the scheduling policy that decides when a queued request can be admitted to the active batch given current [[GPU Memory]] availability.
    - **Head-of-Line Blocking**: the problem where long requests stall shorter ones even under continuous batching if the scheduler does not account for fairness.
    - **Slot**: the conceptual unit of KV cache capacity assigned to one sequence in the active batch.
    - **Iteration**: one forward pass through the model, producing one output token per active sequence; the granularity at which continuous batching operates.
    - **Throughput (tokens/second)**: the primary throughput metric for continuous batching systems; typically reported as output tokens per second across all concurrent requests.
    - **Time-to-First-Token (TTFT)**: the [[Latency]] from request submission to receipt of the first output token; dominated by prefill time.
    - **Time-per-Output-Token (TPOT)**: the [[Latency]] of generating each subsequent token after the first; dominated by decode step time and active batch size.

  ## Research & Literature

    1. Yu, G., et al. (2022). Orca: A distributed serving system for transformer-based generative models. *OSDI 2022*. University of Washington.
    2. Kwon, W., et al. (2023). Efficient memory management for large language model serving with PagedAttention. *SOSP 2023* (Best Paper). UC Berkeley. https://arxiv.org/abs/2309.06180
    3. Dao, T., Fu, D.Y., Ermon, S., Rudra, A., & Ré, C. (2022). FlashAttention: Fast and memory-efficient exact attention with IO-awareness. *NeurIPS 2022*. https://arxiv.org/abs/2205.14135
    4. Dao, T. (2023). FlashAttention-2: Faster attention with better parallelism and work partitioning. *ICLR 2024*. https://arxiv.org/abs/2307.08691
    5. Shah, J., et al. (2024). FlashAttention-3: Fast and accurate attention for H100 GPUs. *arXiv:2407.08608*.
    6. Qin, Y., et al. (2025). Mooncake: A KVCache-centric disaggregated architecture for LLM serving. *USENIX FAST 2025*. https://arxiv.org/abs/2407.00079
    7. Holmes, C., et al. (2024). Disaggregated serving: 18 months later. Hao AI Lab, UCSD. https://haoailab.com/blogs/distserve-retro/
    8. Zheng, L., et al. (2024). SGLang: Efficient execution of structured language model programs. *NeurIPS 2024*. https://arxiv.org/abs/2312.07104
    9. NVIDIA. (2023). TensorRT-LLM: Optimizing inference for large language models. NVIDIA Technical Blog.
    10. vLLM Team. (2024). vLLM: Easy, fast, and cheap LLM serving for everyone. vLLM documentation. https://docs.vllm.ai
    11. AI21 Labs. (2024). What is continuous batching? AI21 Glossary. https://www.ai21.com/glossary/foundational-llm/what-is-continuous-batching/
    12. Anyscale. (2023). Continuous batching: How to achieve 23x LLM inference throughput. Anyscale Blog. https://www.anyscale.com/blog/continuous-batching-llm-inference
    13. Spheron Network. (2026). LLM serving optimization: Continuous batching, PagedAttention, and chunked prefill on H100. https://www.spheron.network/blog/llm-serving-optimization-continuous-batching-paged-attention/
    14. n1n.ai. (2026). vLLM vs SGLang vs LMDeploy: Fastest LLM inference engine in 2026. https://explore.n1n.ai/blog/vllm-vs-sglang-vs-lmdeploy-fastest-inference-2026-2026-03-05
    15. Chen, B., et al. (2023). Towards efficient generative large language model serving: A survey from algorithms to systems. *arXiv:2312.15234*.
    16. Zhong, Y., et al. (2024). DistServe: Disaggregating prefill and decoding for goodput-optimized large language model serving. *OSDI 2024*.
    17. Agrawal, A., et al. (2024). Sarathi-Serve: Efficient LLM inference by piggybacking decodes with chunked prefills. *OSDI 2024*. https://arxiv.org/abs/2308.16369
    18. Liu, Z., et al. (2024). FlowKV: A disaggregated inference framework with low-latency KV cache transfer and load-aware scheduling. *arXiv:2504.03775*.
    19. Li, B., et al. (2024). Towards high-goodput LLM serving with prefill-decode multiplexing. *arXiv:2504.14489*.
    20. FairBatching authors. (2024). FairBatching: Fairness-aware batch formation for LLM inference. *arXiv:2510.14392*.
    21. RunPod. (2024). vLLM explained: PagedAttention and continuous batching. https://www.runpod.io/articles/guides/vllm-pagedattention-continuous-batching
    22. BentoML. (2024). Static, dynamic and continuous batching. *LLM Inference Handbook*. https://bentoml.com/llm/inference-optimization/static-dynamic-continuous-batching
    23. Particula Tech. (2026). SGLang vs vLLM in 2026: Benchmarks, architecture, and when to use each. https://particula.tech/blog/sglang-vs-vllm-inference-engine-comparison
    24. Hivenet Compute. (2024). A practical guide to continuous batching for LLM inference. https://compute.hivenet.com/post/continuous-batching-explained
    25. Patterson, D., et al. (2021). Carbon emissions and large neural network training. *arXiv:2104.10350*. [Motivates efficiency via throughput.]
    26. Micikevicius, P., et al. (2018). Mixed precision training. *ICLR 2018*. [Enables higher-throughput continuous batching via reduced memory footprint per token.]
    27. Sheng, Y., et al. (2023). FlexGen: High-throughput generative inference of large language models with a single GPU. *ICML 2023*.
    28. Yotta Labs. (2026). vLLM vs SGLang in 2026: Speed, throughput, and cost compared. https://www.yottalabs.ai/post/vllm-vs-sglang-which-inference-engine-should-you-use-in-2026

- ### Provenance
  - sources:: Kwon et al. 2023 (vLLM/PagedAttention, SOSP), Yu et al. 2022 (Orca, OSDI), Qin et al. 2025 (Mooncake, FAST 2025), Zhong et al. 2024 (DistServe, OSDI), Agrawal et al. 2024 (Sarathi-Serve), Zheng et al. 2024 (SGLang, NeurIPS), Anyscale blog 23x throughput, n1n.ai 2026 benchmarks, Spheron 2026 H100 serving guide, FairBatching arXiv:2510.14392, BentoML LLM Inference Handbook, vLLM docs.vllm.ai
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm