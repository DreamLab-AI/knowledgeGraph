public:: true

# Batch Inference

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:batch-inference",
  "@type": "Page",
  "title": "Batch Inference",
  "vc:slug": "batch-inference",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:machine-learning", "vc:label": "Machine Learning"},
    {"@id": "urn:visionflow:linked:model-serving", "vc:label": "Model Serving"},
    {"@id": "urn:visionflow:linked:neural-network", "vc:label": "Neural Network"},
    {"@id": "urn:visionflow:linked:gpu-computing", "vc:label": "GPU Computing"},
    {"@id": "urn:visionflow:linked:tensor-processing", "vc:label": "Tensor Processing"},
    {"@id": "urn:visionflow:linked:embedding-generation", "vc:label": "Embedding Generation"},
    {"@id": "urn:visionflow:linked:data-pipeline", "vc:label": "Data Pipeline"},
    {"@id": "urn:visionflow:linked:mlops", "vc:label": "MLOps"},
    {"@id": "urn:visionflow:linked:online-inference", "vc:label": "Online Inference"},
    {"@id": "urn:visionflow:linked:streaming-inference", "vc:label": "Streaming Inference"},
    {"@id": "urn:visionflow:linked:throughput-optimisation", "vc:label": "Throughput Optimisation"},
    {"@id": "urn:visionflow:linked:model-quantisation", "vc:label": "Model Quantisation"},
    {"@id": "urn:visionflow:linked:distributed-training", "vc:label": "Distributed Training"},
    {"@id": "urn:visionflow:linked:machine-learning-infrastructure", "vc:label": "Machine Learning Infrastructure"},
    {"@id": "urn:visionflow:linked:scalability", "vc:label": "Scalability"},
    {"@id": "urn:visionflow:linked:inference-pipeline", "vc:label": "Inference Pipeline"},
    {"@id": "urn:visionflow:linked:deep-learning-framework", "vc:label": "Deep Learning Framework"},
    {"@id": "urn:visionflow:linked:distributed-inference", "vc:label": "Distributed Inference"},
    {"@id": "urn:visionflow:linked:flash-attention", "vc:label": "Flash Attention"},
    {"@id": "urn:visionflow:linked:large-language-models", "vc:label": "Large Language Models"},
    {"@id": "urn:visionflow:linked:transformer-architecture", "vc:label": "Transformer Architecture"},
    {"@id": "urn:visionflow:linked:neural-network-quantisation", "vc:label": "Neural Network Quantisation"},
    {"@id": "urn:visionflow:linked:edge-inference", "vc:label": "Edge Inference"},
    {"@id": "urn:visionflow:linked:gpu-architecture", "vc:label": "GPU Architecture"},
    {"@id": "urn:visionflow:linked:tensor-parallelism", "vc:label": "Tensor Parallelism"},
    {"@id": "urn:visionflow:linked:model-deployment", "vc:label": "Model Deployment"},
    {"@id": "urn:visionflow:linked:kv-cache", "vc:label": "KV Cache"},
    {"@id": "urn:visionflow:linked:speculative-decoding", "vc:label": "Speculative Decoding"},
    {"@id": "urn:visionflow:linked:continuous-batching", "vc:label": "Continuous Batching"},
    {"@id": "urn:visionflow:linked:cost-optimisation", "vc:label": "Cost Optimisation"},
    {"@id": "urn:visionflow:linked:latency", "vc:label": "Latency"},
    {"@id": "urn:visionflow:linked:ai-grounded-domain", "vc:label": "AI-GroundedDomain"},
    {"@id": "urn:visionflow:linked:machine-learning-infrastructure-layer", "vc:label": "MachineLearningInfrastructureLayer"}
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:batch-inference",
  "@type": "Class",
  "label": "Batch Inference",
  "definition": "The process of applying a trained machine learning model to a collection of inputs simultaneously rather than processing each input individually in real time. Batch inference amortises per-request overhead by grouping inputs into tensors that saturate GPU or accelerator memory bandwidth, significantly reducing per-sample latency at scale. It is the dominant serving pattern for offline analytics, embedding generation, and large-scale data enrichment pipelines where latency deadlines are relaxed. Contrast with online inference, which prioritises low single-request latency over throughput.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning",
      "label": "Machine Learning"
    },
    {
      "@id": "urn:ngm:class:model-serving",
      "label": "Model Serving"
    },
    {
      "@id": "urn:ngm:class:ai-infrastructure",
      "label": "AI Infrastructure"
    }
  ],
  "relations": {
    "isSubclassOf": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:model-serving",
        "label": "Model Serving"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:continuous-batching",
        "label": "Continuous Batching"
      },
      {
        "@id": "urn:ngm:class:kv-cache",
        "label": "KV Cache"
      },
      {
        "@id": "urn:ngm:class:inference-pipeline",
        "label": "Inference Pipeline"
      },
      {
        "@id": "urn:ngm:class:flash-attention",
        "label": "Flash Attention"
      },
      {
        "@id": "urn:ngm:class:speculative-decoding",
        "label": "Speculative Decoding"
      },
      {
        "@id": "urn:ngm:class:throughput-optimisation",
        "label": "Throughput Optimisation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-serving",
        "label": "Model Serving"
      },
      {
        "@id": "urn:ngm:class:embedding-generation",
        "label": "Embedding Generation"
      },
      {
        "@id": "urn:ngm:class:data-pipeline",
        "label": "Data Pipeline"
      },
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      },
      {
        "@id": "urn:ngm:class:cost-optimisation",
        "label": "Cost Optimisation"
      },
      {
        "@id": "urn:ngm:class:throughput-optimisation",
        "label": "Throughput Optimisation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gpu-computing",
        "label": "GPU Computing"
      },
      {
        "@id": "urn:ngm:class:tensor-processing",
        "label": "Tensor Processing"
      },
      {
        "@id": "urn:ngm:class:machine-learning-discipline-infrastructure",
        "label": "Machine Learning Infrastructure"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:deep-learning-framework",
        "label": "Deep Learning Framework"
      },
      {
        "@id": "urn:ngm:class:transformer-architecture",
        "label": "Transformer Architecture"
      },
      {
        "@id": "urn:ngm:class:flash-attention",
        "label": "Flash Attention"
      },
      {
        "@id": "urn:ngm:class:kv-cache",
        "label": "KV Cache"
      },
      {
        "@id": "urn:ngm:class:gpu-architecture",
        "label": "GPU Architecture"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:inference-pipeline",
        "label": "Inference Pipeline"
      },
      {
        "@id": "urn:ngm:class:model-deployment",
        "label": "Model Deployment"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:machine-learning-discipline-infrastructure",
        "label": "Machine Learning Infrastructure"
      },
      {
        "@id": "urn:ngm:class:gpu-computing",
        "label": "GPU Computing"
      },
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      },
      {
        "@id": "urn:ngm:class:mlops",
        "label": "MLOps"
      },
      {
        "@id": "urn:ngm:class:distributed-training",
        "label": "Distributed Training"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:online-inference",
        "label": "Online Inference"
      },
      {
        "@id": "urn:ngm:class:streaming-inference",
        "label": "Streaming Inference"
      },
      {
        "@id": "urn:ngm:class:edge-inference",
        "label": "Edge Inference"
      },
      {
        "@id": "urn:ngm:class:distributed-inference",
        "label": "Distributed Inference"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:throughput-optimisation",
        "label": "Throughput Optimisation"
      },
      {
        "@id": "urn:ngm:class:model-quantization",
        "label": "Model Quantisation"
      },
      {
        "@id": "urn:ngm:class:distributed-training",
        "label": "Distributed Training"
      },
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      },
      {
        "@id": "urn:ngm:class:neural-network-quantisation",
        "label": "Neural Network Quantisation"
      },
      {
        "@id": "urn:ngm:class:tensor-parallelism",
        "label": "Tensor Parallelism"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:mlops",
        "label": "MLOps"
      }
    ]
  },
  "quality": 0.93,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "OntologyEnrichment"
  }
}
```

- ### Definition
  - Batch inference is a [[Machine Learning]] serving strategy that groups multiple inputs into a single forward pass through a [[Neural Network]], thereby saturating [[GPU Computing]] memory bandwidth and arithmetic throughput to maximise the number of predictions produced per unit of compute cost. Unlike [[Online Inference]], which processes each request individually to achieve minimal single-request [[Latency]], batch inference deliberately accumulates a queue of inputs — ranging from tens to millions of examples — before dispatching them together as a single tensor operation. The technique exploits the parallelism of modern [[GPU Architecture]] and [[Tensor Processing]] hardware, where the marginal cost of processing N inputs simultaneously is far lower than the sum of N sequential individual costs: the model weights need only be loaded once into GPU SRAM, and the matrix-multiply operations that dominate [[Transformer Architecture]] forward passes become highly efficient GEMM (General Matrix Multiply) kernels when operating on wide input tensors. Batch inference is the dominant serving pattern for offline analytics tasks — nightly [[Embedding Generation]] for semantic search indices, bulk document classification, video content moderation, recommendation pre-computation, and scientific data enrichment — where a relaxed latency deadline of seconds to hours permits accumulation of large input queues. The relationship between batch size and hardware utilisation follows a characteristic saturation curve: small batches leave GPU arithmetic units idle while waiting for memory transfers, and increasing batch size improves arithmetic intensity (the ratio of compute to memory bandwidth) until the GPU reaches compute-bound saturation. Modern production systems implement dynamic batching, where requests arriving within a configurable time window are aggregated into micro-batches that balance latency guarantees against [[Throughput Optimisation]]. For [[Large Language Models]] with autoregressive decoding, the innovation of continuous batching (pioneered by vLLM's PagedAttention, UC Berkeley 2023) allows new requests to be inserted into a running decode batch mid-generation rather than waiting for the entire batch to complete, achieving 2–4x throughput over static batching with equivalent hardware. Batch inference is a core operational primitive within [[MLOps]], underpinning [[Data Pipeline]] architectures from Apache Spark ML serving to AWS SageMaker Batch Transform and Google Vertex AI Batch Prediction. Its contrast with [[Streaming Inference]] and [[Edge Inference]] defines the latency-throughput trade-off space that architects must navigate when selecting a serving strategy for production [[Model Deployment]].

- ### Semantic Classification
  - owl-class:: ai:BatchInference
  - owl-role:: ServingStrategy | MLOpsProtocol | ThroughputOptimisationMechanism
  - owl-inferred:: ai:OfflineServingPattern, ai:GPUUtilisationStrategy, ai:ScalableInferencePrimitive
  - belongs-to-domain:: [[Machine Learning]]
  - implemented-in-layer:: [[MachineLearningInfrastructureLayer]]

- ### Relationships
  - is-subclass-of:: [[Machine Learning]], [[Model Serving]]
  - has-part:: [[Continuous Batching]], [[KV Cache]], [[Inference Pipeline]], [[Flash Attention]], [[Speculative Decoding]], [[Throughput Optimisation]]
  - requires:: [[GPU Computing]], [[Tensor Processing]], [[Machine Learning Infrastructure]]
  - enables:: [[Model Serving]], [[Embedding Generation]], [[Data Pipeline]], [[Scalability]], [[Cost Optimisation]], [[Throughput Optimisation]]
  - implements:: [[Inference Pipeline]], [[Model Deployment]]
  - depends-on:: [[Machine Learning Infrastructure]], [[GPU Computing]], [[Large Language Models]]
  - supports:: [[Scalability]], [[MLOps]], [[Distributed Training]]
  - uses:: [[Neural Network]], [[Deep Learning Framework]], [[Transformer Architecture]], [[Flash Attention]], [[KV Cache]], [[GPU Architecture]]
  - contrasts-with:: [[Online Inference]], [[Streaming Inference]], [[Edge Inference]], [[Distributed Inference]]
  - related-to:: [[Throughput Optimisation]], [[Model Quantisation]], [[Distributed Training]], [[Latency]], [[Neural Network Quantisation]], [[Tensor Parallelism]]
  - part-of:: [[MLOps]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:hasPart ai:ContinuousBatching))
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:hasPart ai:KVCache))
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:hasPart ai:InferencePipeline))
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:hasPart ai:FlashAttention))
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:hasPart ai:SpeculativeDecoding))
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:hasPart ai:ThroughputOptimisation))
  ## Dependency Relationships
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:dependsOn ai:GPUComputing))
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:dependsOn ai:MachinelearningInfrastructure))
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:requires ai:TensorProcessing))
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:requires ai:GPUArchitecture))
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:uses ai:TransformerArchitecture))
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:uses ai:DeepLearningFramework))
  ## Capability Relationships
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:enables ai:ModelServing))
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:enables ai:EmbeddingGeneration))
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:enables ai:DataPipeline))
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:enables ai:Scalability))
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:enables ai:CostOptimisation))
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:supports ai:MLOps))
  ## Implementation Relationships
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:implements ai:InferencePipeline))
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:implements ai:ModelDeployment))
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:partOf ai:MLOps))
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:isSubclassOf ai:ModelServing))
  ## Reduction Relationships
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:reducesTo ai:TensorForwardPass))
      SubClassOf(ai:BatchInference
        ObjectSomeValuesFrom(ai:reducesTo ai:GEMMKernelExecution))
  ## About
    Batch inference has been a fundamental operational pattern since the earliest days of neural network deployment, predating the deep learning era. In classical machine learning, batch scoring — applying a trained model to a fixed dataset to produce predictions — was a straightforward extension of the batch processing paradigm inherited from database computing. When deep neural networks began replacing classical models in production pipelines around 2013–2016, the same batch paradigm carried forward, but the hardware requirements changed dramatically: GPUs rather than CPUs became the primary compute substrate, and the interaction between batch size, memory bandwidth, and arithmetic throughput became the central engineering problem.

    The core insight is that modern GPU accelerators — NVIDIA A100, H100, and the 2025 Blackwell B200 — are designed for high-throughput parallel arithmetic on dense tensors. A GPU can perform thousands of multiply-accumulate operations simultaneously, but it is memory-bandwidth bound when processing a single small input: loading model weights from HBM2e memory for a single input wastes most of the achievable bandwidth. Batch inference amortises this cost by loading weights once and multiplying them against a matrix of N inputs simultaneously. The arithmetic intensity (FLOPs per byte) of a batched forward pass scales with batch size, eventually reaching the compute-bound regime where the GPU is limited by arithmetic throughput rather than memory bandwidth. For a typical [[Transformer Architecture]] with billions of parameters, this compute-bound saturation occurs at batch sizes of hundreds to thousands on current hardware.

  ## Historical Development Timeline
    **1980s–2000s (Classical Batch Processing)**
    - Batch processing of ML models originates in database computing: apply a trained model (logistic regression, SVM, decision tree) to a batch of records from a database table. No GPU involvement; CPU-bound matrix operations over feature vectors.
    - Scikit-learn (2007–): predict() method implicitly batches all rows of a data matrix; no explicit GPU use but efficient NumPy BLAS matrix operations.

    **2012–2015 (GPU Deep Learning Batch Training)**
    - AlexNet (Krizhevsky et al., 2012): trained on 2 GPUs with batch size 128; established GPU batch processing as the dominant paradigm for deep learning.
    - Batch normalisation (Ioffe & Szegedy, 2015): introduced as a training regulariser but fundamentally tied to batch statistics; inference with mini-batches required.
    - TensorFlow 1.x (2015): graph-based framework supporting batched inference via Session.run(); static computation graphs compiled for batch execution.

    **2016–2019 (Frameworks and Production Serving)**
    - TensorFlow Serving (2016): first production ML model serving framework with configurable batching (MaxBatchSize, BatchTimeoutMicros parameters).
    - ONNX Runtime (2018): cross-framework inference with hardware acceleration backends; batch processing via numpy arrays.
    - TensorRT (2016–present): NVIDIA's inference optimisation framework; builds optimised engines for specific batch sizes with profile-based optimisation.
    - NVIDIA Triton Inference Server (2018, then open-sourced 2020): multi-model serving with dynamic batching; becomes the production standard.

    **2020–2022 (LLM Serving Challenges)**
    - GPT-3 (Brown et al., 2020): 175B parameters; serving at scale requires model parallelism and careful KV cache management.
    - Naive LLM serving: complete one request before starting the next; GPU utilisation ~10–20% due to sequential decode steps.
    - FlashAttention (Dao et al., NeurIPS 2022): fused attention kernel; 2–4x speedup for batch inference of transformer models.

    **2023 (Continuous Batching Revolution)**
    - Orca (Yu et al., OSDI 2022): first continuous batching system for LLM serving; demonstrates 36x throughput improvement over static batching.
    - vLLM / PagedAttention (Kwon et al., SOSP 2023): KV cache as virtual memory pages; enables continuous batching at production scale; becomes the dominant open-source LLM serving framework.
    - SGLang (Zheng et al., 2023): structured generation with efficient batching via RadixAttention for prefix sharing.

    **2024–2026 (Optimisation Stack Maturity)**
    - FlashAttention-3 (2024): asynchronous tensor core pipeline for H100; near-theoretical-peak attention throughput.
    - FP8 inference (NVIDIA H100 native): 2x throughput over FP16 with acceptable quality degradation.
    - Speculative decoding integrated into production frameworks (vLLM ≥ 0.3, TRT-LLM SpecDecoding).
    - Chunked prefill / disaggregated prefill-decode (Microsoft, 2025): separating prefill and decode phases for independent scaling.
    - NVIDIA Blackwell B200 (2025): FP4 tensor cores, 10 PetaFLOP/s peak throughput; enables 2x larger batch sizes versus H100 for same GPU memory budget.

    The landscape shifted significantly with the rise of [[Large Language Models]] (LLMs), where autoregressive text generation introduces a sequential dependency that fundamentally conflicts with batching: token N cannot be generated until token N-1 is known. The naive approach — completing each request in full before beginning the next — wastes GPU capacity between token generation steps. The PagedAttention mechanism (Kwon et al., 2023, vLLM) addressed this by managing [[KV Cache]] as non-contiguous pages (analogous to virtual memory), enabling continuous batching: new requests join an in-flight decode batch as slots become available, keeping GPU utilisation near 100% even with variable-length generations. Continuous batching is now the production standard for LLM serving, implemented in vLLM, NVIDIA TRT-LLM, and TensorFlow Serving v3.

  ## Components / Architecture
    **1. Batching Scheduler**
    The component responsible for assembling individual inputs into batches. In static batch inference, the scheduler waits for a fixed number of inputs (e.g., 32, 64, 128) before dispatching. In dynamic batching, the scheduler uses a timeout-plus-size policy: accumulate inputs for up to T milliseconds or until N inputs arrive, whichever comes first. In continuous batching (LLM serving), the scheduler maintains a pool of in-flight decode sequences and inserts new prefill requests when decode-step compute headroom is available.

    **2. Tensor Assembly and Padding**
    Variable-length inputs (sentences, documents, audio clips) must be padded to a common length before tensor operations can batch them. For [[Transformer Architecture]] models, variable-length sequences are padded to the maximum length in the batch, with attention masks preventing padded positions from contributing to the attention computation. Efficient padding strategies — grouping by similar lengths, using [[Flash Attention]]'s unpadded input support — reduce wasted compute on padding tokens significantly.

    **3. KV Cache Management**
    For [[Large Language Models]] with autoregressive decoding, the [[KV Cache]] stores key-value attention tensors from previously generated tokens, avoiding recomputation. In batch inference, the KV cache is the dominant memory consumer: each sequence in the batch requires O(L × D × H) memory for L layers, D model dimension, and H attention heads. PagedAttention partitions KV cache into pages allocated dynamically, enabling the cache to be shared across requests with common prefixes and reclaimed as requests complete.

    **4. Compute Kernel Execution**
    The actual neural network forward pass executes as a sequence of GPU kernel launches — matrix multiplications, layer normalisations, activation functions, attention operations. [[Flash Attention]] (Dao et al., 2022) implements the attention computation in fused CUDA kernels that keep activations in fast SRAM rather than round-tripping through HBM, achieving 2–4x speedup over standard attention. [[Neural Network Quantisation]] (INT8, FP8, INT4) reduces weight and activation memory footprint, enabling larger batch sizes within GPU memory limits.

    **5. Model Parallelism for Large Models**
    When a model is too large for a single GPU's memory, [[Tensor Parallelism]] splits individual layer weight matrices across multiple GPUs, while pipeline parallelism assigns consecutive layer groups to different devices. Batch inference in this regime coordinates across the parallel device mesh, adding communication overhead that must be amortised over sufficiently large batch sizes to maintain efficiency. [[Distributed Inference]] addresses the multi-device coordination problem.

    **6. Post-Processing and Output Assembly**
    After the batch forward pass, outputs are de-batched: predictions are split, post-processed (softmax, argmax, top-k sampling), and matched back to their originating requests. For asynchronous batch jobs, results are written to a storage sink (S3 bucket, database, message queue) for downstream consumption.

  ## Use Cases / Major Families
    **Nightly Embedding Re-Indexing**
    A dominant use case in production. Large document corpora — knowledge bases, product catalogues, customer support tickets, academic papers — require periodic re-indexing when their [[Embedding Generation]] model is updated or when documents are added or revised. Batch inference runs nightly or weekly, processing millions of documents through an embedding model (BERT-family, E5, text-embedding-3) at maximum throughput with relaxed latency. Cloud batch prediction services (AWS SageMaker Batch Transform, Google Vertex AI Batch Prediction, Azure ML Batch Endpoints) are purpose-built for this pattern.

    **Bulk Sentiment and Classification**
    Financial institutions, brand monitoring services, and market research firms run batch inference over millions of social media posts, news articles, or product reviews to produce sentiment scores, topic classifications, or entity extractions at scale. Throughput measured in millions of documents per hour is achievable with optimised batch sizes and INT8-quantised transformer models on H100 GPUs.

    **Recommendation Pre-Computation**
    Recommendation systems generate personalised candidate lists for all users during off-peak hours. Rather than computing recommendations at request time (which would impose tight latency requirements), batch inference generates user-item scores for the entire user base overnight, storing results in a low-latency cache (Redis, DynamoDB) for real-time retrieval. This pattern decouples the heavy model computation from the latency-sensitive user-facing serving layer.

    **Offline Video and Image Processing**
    Video archives, surveillance footage review, medical imaging analysis (radiology backlogs, pathology slide scoring), and satellite imagery interpretation all rely on batch inference to process large collections of visual data without real-time pressure. Object detection, segmentation, and classification models run against entire datasets overnight, producing structured annotations for human review or downstream analytics.

    **LLM Batch APIs for Data Enrichment**
    Anthropic, OpenAI, and Google offer batch inference APIs for LLMs at significantly reduced cost compared to real-time APIs — Anthropic's Batch API provides 50% cost reduction for asynchronous requests. These APIs are used for large-scale data enrichment: annotating training datasets, generating synthetic training examples, translating content libraries, summarising document corpora, and performing structured information extraction across millions of records.

    **Scientific and Research Computing**
    Protein structure prediction (AlphaFold2/3 batch jobs), molecular property prediction for drug discovery, climate model post-processing, and genomic variant classification all use batch inference to apply trained neural networks to large scientific datasets. The UK's Hartree Centre AI supercomputer ("Britannia", 12 exaflops as of mid-2025) and the NVIDIA Blackwell deployment by Nebius UK serve this research segment.

  ## Academic Context
    The foundational theory of batch processing efficiency on GPU hardware was established in the parallel computing literature and carried into deep learning through the early CUDA-based neural network implementations (Ciresan et al., 2011; Krizhevsky et al., 2012). The AlexNet paper (Krizhevsky et al., 2012 NeurIPS) implicitly demonstrated batch training efficiency on GPU clusters, establishing the template for batch-oriented deep learning workloads that extended naturally to inference.

    The attention mechanism's quadratic complexity in sequence length (Vaswani et al., 2017) created a memory bottleneck that constrained batch sizes for [[Transformer Architecture]] models. FlashAttention (Dao, Fu, Ermon, Rudra, 2022 NeurIPS) resolved this with IO-aware attention computation, fusing the attention kernel and keeping intermediates in SRAM. FlashAttention-2 (2023) and FlashAttention-3 (2024) extended the technique to the H100 hardware architecture's asynchronous operations and tensor core capabilities, achieving near-peak GPU utilisation for attention-heavy inference.

    Continuous batching for LLM serving was formalised by Kwon et al. "Efficient Memory Management for Large Language Model Serving with PagedAttention" (SOSP 2023, UC Berkeley), which proved that treating the KV cache as a paged virtual memory system enables 3.5x throughput improvement over naive static batching while preserving latency SLOs. This paper is the most influential systems paper in the LLM serving space and forms the theoretical foundation of vLLM.

    Speculative decoding (Leviathan et al., 2023; Chen et al., 2023) introduced a parallelism strategy for autoregressive decoding: a small draft model proposes K future tokens in parallel, the primary model verifies them in a single forward pass, and any mismatch causes rollback. This technique achieves 2–3x latency reduction for single-request serving and has been integrated into vLLM's continuous batching for combined throughput-and-latency improvements.

    The theoretical basis for optimal batch size selection was examined in "Mind the Memory Gap: Unveiling GPU Bottlenecks in Large-Batch LLM Inference" (arXiv:2503.08311, 2025), which characterised the transition between memory-bandwidth-bound and compute-bound regimes as a function of model size, batch size, and hardware specifications, enabling principled batch size selection.

  ## Current Landscape (2026)
    Batch inference in 2025–2026 is dominated by two converging trends: the commoditisation of batch APIs for [[Large Language Models]] and the maturation of open-source serving frameworks. Anthropic, OpenAI (Batch API), and Google (Vertex AI Batch Prediction) all offer asynchronous batch APIs at 50% cost reduction compared to real-time APIs, making batch inference economically compelling for large-scale data processing tasks.

    vLLM has emerged as the most widely adopted open-source LLM serving framework with over 2,000 contributors (as of 2025), implementing PagedAttention and continuous batching for production LLM serving. NVIDIA Triton Inference Server remains the production standard for multi-model serving, supporting backends including TensorRT, PyTorch, ONNX, and vLLM, with request batching controls and concurrency management. SGLang (Stanford, 2024–2025) offers structured generation and constrained decoding with competitive throughput to vLLM.

    The 2025 inference stack has consolidated around FlashAttention-3, FP8/INT8 quantisation (via [[Neural Network Quantisation]]), PagedAttention-based KV cache management, and speculative decoding as the core components. UELLM (2025) reports 72–90% latency reduction and 4.1x better GPU utilisation versus naive schedulers through combined batching and resource profiling. Microsoft's chunked prefill interleaving technique (2025) prevents prefill computation from monopolising GPU resources and blocking decode steps in mixed-traffic batch serving.

    In the UK, the Nebius AI Cloud UK deployment (November 2025) of NVIDIA Blackwell Ultra infrastructure provides the first UK-based hyperscale NVIDIA GPU cluster available to UK startups, enterprises, and academic institutions. The UK government's "Britannia" AI supercomputer at the Hartree Centre (12 exaflops, Daresbury, Cheshire) supports research batch inference workloads across academic institutions. AWS, Azure, and Google Cloud all operate UK regions offering managed batch inference services including Amazon Bedrock Batch, Azure ML Batch Endpoints, and Vertex AI Batch Prediction.

    Manchester's £120 million AI hub (2024) and UCL's NVIDIA partnership for sovereign AI infrastructure support UK-based batch inference research and production deployments. The NHS Long Term Plan's digital transformation initiatives increasingly rely on batch inference for medical imaging analysis, clinical decision support pre-computation, and genomic data annotation at scale.

  ## UK Context
    The UK has a distinctive role in the batch inference ecosystem, both as a research originator and as an industrial adopter. DeepMind (London, Alphabet subsidiary) pioneered large-scale batch inference for protein structure prediction with AlphaFold, processing 200 million protein sequences in batch jobs that ran over weeks on TPU pods. DeepMind's AlphaFold2 batch inference pipeline represents the largest scientific batch inference workload ever run, demonstrating that batch processing at genomic-database scale is operationally feasible.

    ARM Holdings (Cambridge), a UK-headquartered company, designs the processor architecture used in mobile and edge inference deployments. ARM's ML IP (Ethos NPU family) targets efficient batch inference at the edge, where power constraints limit batch size but the fundamental batching efficiency principles still apply at smaller scale. ARM's Cambridge headquarters is surrounded by an AI cluster including the Cambridge AI Lab (Microsoft Research), Wayve (autonomous vehicles), and Darktrace (cybersecurity AI inference at scale).

    The University of Edinburgh's School of Informatics (largest CS school in Europe) contributes to inference systems research through its work on ML compilers (XLA, Triton), hardware-software co-design, and automated optimisation of inference pipelines. The Alan Turing Institute (London, British Library) coordinates cross-university AI research including ML serving efficiency and responsible AI deployment at scale.

    Manchester's Northern quarter has attracted significant AI infrastructure investment. The BBC (Salford) and ITV Studios run batch inference for media content classification, automatic closed captioning, and content recommendation pre-computation at scale. Sheffield's Advanced Manufacturing Research Centre uses batch inference for quality inspection in manufacturing, processing images from production lines overnight against defect detection models. Leeds-based Marks & Spencer and ASDA use batch inference for inventory forecasting and personalised offer generation.

    The UK AI Opportunities Action Plan (2025) explicitly targets sovereign AI compute capacity, with the £120 million Manchester AI hub and the Hartree Centre Britannia supercomputer providing national batch inference infrastructure outside the US cloud hyperscalers. Spärck AI scholarships (opening Spring 2026, funded by UKRI) at Edinburgh, Imperial, UCL, Cambridge, Oxford, Manchester, Newcastle, and Southampton will train the next generation of AI systems researchers with batch inference and ML serving as core curriculum topics.

  ## Future Directions (2026–2030)
    **Disaggregated Prefill and Decode Serving** — separating the prefill phase (processing the input prompt) from the decode phase (generating tokens) onto different hardware pools, enabling independent scaling and eliminating the compute interference between long-prompt prefill and decode-step batching. Experimental in 2025, expected to become standard practice by 2027.

    **Speculative Decoding at Scale** — combining speculative decoding with continuous batching to achieve simultaneous throughput and latency improvement for LLM batch workloads. Current implementations sacrifice batch throughput for latency; next-generation schedulers will dynamically select between batching strategies based on real-time demand patterns.

    **Hardware-Specific Batch Kernels** — NVIDIA Blackwell's FP4 tensor cores (2025) and AMD's MI350X support ultra-low-precision batch inference. FP4 quantisation combined with batch inference enables 2x the batch size versus FP8 at equivalent GPU memory, enabling cost reductions for offline workloads. Research at Edinburgh and Manchester on ML compilation (MLIR, Triton dialect) will automate kernel generation for new hardware backends.

    **Heterogeneous Batch Scheduling** — mixing GPU, CPU, and NPU compute within a single batch job, routing simpler inputs (short sequences, confident predictions) to lower-cost compute and reserving GPU capacity for inputs requiring full-precision forward passes. Cost-aware scheduling frameworks are emerging in 2026 that optimise the cost-per-prediction across heterogeneous fleets.

    **Green Inference** — the UK Net Zero commitment (2050, with 2030 milestones) is driving research into energy-efficient batch inference: scheduling batch jobs to coincide with renewable energy surplus periods, using model pruning and quantisation to reduce FLOPs per token, and designing datacentre cooling systems optimised for the bursty power profile of large GPU batch workloads.

    **Federated Batch Inference** — running batch inference across multiple organisational data silos without centralising the data, using federated compute frameworks. Relevant for NHS patient data processing, financial institution fraud scoring, and cross-border regulatory compliance analytics.

  ## Major Families and Serving Strategies
    **Static Batch Inference**
    The simplest form: a fixed-size batch of inputs is assembled, sent through the model in a single forward pass, and the results are collected. Batch size is determined at configuration time and never changes at runtime. Used in offline batch prediction jobs where all inputs are known in advance (nightly reindexing, end-of-day scoring). Frameworks: Apache Spark ML predict(), scikit-learn batch_predict(), simple PyTorch DataLoader loops.

    **Dynamic Batching**
    The serving system assembles batches at runtime based on request arrival patterns. A configurable time window (e.g., 10ms) and maximum batch size (e.g., 64) define the batching policy: dispatch when either the time window elapses or the maximum size is reached. Reduces latency versus waiting for a full static batch while still achieving GPU utilisation gains over single-sample serving. Implemented in NVIDIA Triton Inference Server (max_batch_size + max_queue_delay_microseconds parameters) and TensorFlow Serving.

    **Continuous Batching (In-Flight Batching)**
    The defining innovation for LLM serving (2023–present). Rather than waiting for all sequences in a batch to complete before starting new ones, new prefill requests are inserted into the decode batch as generation slots become free. Each "step" of the decode loop processes a heterogeneous micro-batch containing some sequences mid-generation and some newly inserted prompts. Pioneered by vLLM (PagedAttention, SOSP 2023); implemented in NVIDIA TRT-LLM (In-Flight Batching), SGLang, and TGI (Text Generation Inference by Hugging Face). Throughput improvement: 2–4x over static batching for realistic LLM workloads.

    **Chunked Prefill Batching (Microsoft, 2025)**
    A refinement of continuous batching that splits long input prompts into fixed-size chunks and interleaves their processing with decode steps. Prevents long-prompt prefill computation from monopolising GPU resources and delaying ongoing decode sequences. Construct a hybrid micro-batch with a single prefill chunk filling the compute headroom left by a maximal set of decode requests. Reduces time-to-first-token variance for short prompts when long prompts are being processed concurrently.

    **Speculative Decoding with Batching**
    Combines speculative decoding (small draft model proposes K tokens; main model verifies in parallel) with continuous batching. For each in-flight sequence, the draft model generates K candidate tokens per step; the main model verifies all candidates for all sequences simultaneously in a batch. If verification acceptance rate is high, the effective throughput per step increases by a factor approaching K. Implemented in vLLM ≥ 0.3 (SpecDecoding integration) and NVIDIA TRT-LLM (draft-verify pipeline).

    **Disaggregated Prefill-Decode Serving (Emerging, 2025–2026)**
    Assigns prefill (prompt processing) and decode (token generation) to separate hardware pools, enabling independent scaling of each phase. Prefill is compute-bound (benefits from dense tensor operations on few requests); decode is memory-bandwidth-bound (benefits from large batches of concurrent sequences). Disaggregation enables optimal hardware assignment for each phase and eliminates prefill-decode interference. Research prototype demonstrated at Microsoft Research (2025); expected to reach production in 2026–2027.

    **Offline Batch Job Scheduling**
    For pure offline workloads (no latency SLO), batch inference is scheduled as a job in a cluster compute framework. Apache Spark MLlib, Amazon SageMaker Batch Transform, and Google Vertex AI Batch Prediction provide managed offline batch scoring at petabyte scale. Jobs run asynchronously, consuming idle GPU capacity during off-peak hours. Outputs are written to distributed storage (S3, GCS, Azure Blob) for downstream consumption.

    **Serverless Batch Inference**
    Cloud providers offer serverless batch inference where GPUs are provisioned on-demand for the duration of a batch job and released immediately after completion. Eliminates the cost of maintaining always-on inference instances for intermittent offline workloads. AWS Lambda (CPU-only, small models), Google Cloud Run (GPU, 2025), and Azure Container Instances support serverless inference with batch queuing via SQS or Pub/Sub.

  ## Formal Analysis: Batch Size Optimisation and Throughput Modelling
    Selecting the optimal batch size for production batch inference requires understanding the hardware roofline model and the arithmetic intensity of the target model forward pass.

    **The Roofline Model for Batch Inference**
    For a GPU with peak arithmetic throughput A_peak (FLOP/s) and peak memory bandwidth B_peak (bytes/s), the achievable throughput for an operation with arithmetic intensity I = FLOPs / bytes is:
    - Attainable FLOP/s = min(A_peak, I × B_peak)
    - Memory-bandwidth-bound regime: I < A_peak / B_peak (the "ridge point")
    - Compute-bound regime: I ≥ A_peak / B_peak

    For a [[Transformer Architecture]] linear layer of shape [d_model, d_model] applied to a batch of N inputs:
    - FLOPs = 2 × N × d_model² (matrix multiply)
    - Bytes = d_model² × bytes_per_weight + N × d_model × bytes_per_activation (weight load + activation I/O)
    - Arithmetic intensity I(N) = 2 × N × d_model² / (d_model² × w + N × d_model × a) ≈ 2N/a for large N, w=2 bytes (FP16), a=2 bytes
    - Ridge point: I = A_peak / B_peak. For H100 SXM5: A_peak = 989 TFLOP/s (FP16), B_peak = 3.35 TB/s → ridge ≈ 295 FLOP/byte → N_ridge ≈ 147 tokens per batch per layer

    This analysis shows that for typical [[Large Language Models]] with d_model = 4096:
    - At batch size 1: I ≈ 2 FLOP/byte (deeply memory-bandwidth-bound; GPU utilisation < 1%)
    - At batch size 32: I ≈ 64 FLOP/byte (still memory-bound but improving)
    - At batch size 256: I ≈ 512 FLOP/byte (compute-bound; near-peak GPU utilisation)
    - At batch size 1024: I ≈ 2048 FLOP/byte (compute-bound saturation; diminishing returns)

    **Latency-Throughput Trade-Off**
    For a batch serving system with request arrival rate λ (requests/second) and service time T(N) for batch size N:
    - Maximum throughput: λ_max = N / T(N) (tokens per second)
    - End-to-end latency: L(N) = T(N) + W(N) where W(N) is wait time to assemble batch of size N
    - At steady state with Poisson arrivals: W(N) ≈ N / (2λ) — linear in batch size
    - Optimal N balances throughput gain against added wait: dλ/dN = 0 gives N_opt

    **Dynamic Batching with Latency SLO Constraint**
    Given an SLO of maximum latency L_max:
    - Maximum permissible wait: W_max = L_max - T_min (T_min = single-sample latency)
    - Maximum batch size from wait constraint: N_wait ≤ λ × W_max
    - Maximum batch size from memory constraint: N_mem = floor(GPU_memory / per_sample_memory)
    - Optimal N = min(N_wait, N_mem)
    - Frameworks (NVIDIA Triton, vLLM) implement this as a configurable max_batch_size + max_queue_delay policy

    **KV Cache Memory Sizing for LLM Batch Inference**
    For a [[Large Language Models]] with L layers, H heads, d_head head dimension, precision P bytes:
    - Per-sequence KV cache memory: M_kv = 2 × L × H × d_head × S_max × P
    - For Llama-3 70B (L=80, H=64, d_head=128, S_max=8192, P=2): M_kv ≈ 80 × 64 × 128 × 8192 × 2 × 2 / 10^9 ≈ 21 GB per sequence
    - For H100 (80 GB HBM3), model weights consume ~140 GB (FP16, doesn't fit on 1 GPU — requires Tensor Parallelism)
    - With FP8 quantisation: model ~70 GB, leaving ~10 GB for KV cache → max batch size ≈ 0 without PagedAttention
    - With PagedAttention (dynamic allocation, 16-token pages): KV cache is allocated only for active tokens, sharing unused capacity across requests — enables batch sizes of 4–8 with 80 GB GPU and 8k context

    **Continuous Batching State Machine**
    The vLLM continuous batching scheduler operates as a state machine:
    - State WAITING: request queued; waiting for a decode slot
    - State RUNNING: request has a KV cache allocation and is being decoded
    - State PREEMPTED: request's KV cache was swapped out due to memory pressure; request returns to WAITING
    - State FINISHED: request completed; KV cache pages returned to free pool
    - Scheduling policy: at each decode step, the scheduler selects a batch of RUNNING requests plus any WAITING requests whose prefill can be chunked into available compute headroom
    - Priority: FCFS by default; priority queues, deadline scheduling available in production deployments

    **Throughput Scaling Empirics (2025 Benchmarks)**
    Published MLPerf Inference v4.1 results (2025) for Llama 2 70B Offline scenario on NVIDIA H100 SXM5 × 8:
    - Static batching: ~4,200 tokens/second
    - Continuous batching (vLLM backend): ~15,800 tokens/second (3.76× improvement)
    - Continuous batching + FP8 quantisation: ~28,400 tokens/second (6.76× improvement over static)
    - Continuous batching + FP8 + speculative decoding: ~41,200 tokens/second (9.8× improvement)

  ## Production Frameworks and Configuration
    **NVIDIA Triton Inference Server**
    The dominant production framework for multi-model batch inference serving. Triton runs multiple model backends (TensorRT, PyTorch TorchScript, ONNX Runtime, vLLM, Python) in a single server process, handles concurrent request routing across models, and exposes gRPC and HTTP/REST APIs. Configured via model repository directories with `config.pbtxt` files specifying batching parameters.
    - `max_batch_size`: Maximum batch size; 0 disables dynamic batching
    - `dynamic_batching.preferred_batch_size`: Target batch sizes for dynamic batching scheduler
    - `dynamic_batching.max_queue_delay_microseconds`: Maximum wait time before dispatching a partial batch
    - `instance_group`: Number of model instances per GPU (for small models running multiple instances per GPU)
    - `rate_limiter`: Limits requests per second to prevent overload
    - Supports: ensemble pipelines (preprocessing → model → postprocessing) as a single request

    **vLLM (UC Berkeley / Open Source)**
    The standard open-source LLM serving framework. Implements PagedAttention for KV cache management and continuous batching for LLM inference. Exposes an OpenAI-compatible REST API.
    - `--max-model-len`: Maximum sequence length (controls KV cache memory per sequence)
    - `--max-num-seqs`: Maximum number of concurrent sequences in a batch
    - `--block-size`: PagedAttention block size in tokens (default 16)
    - `--quantization`: Enable INT8/INT4/FP8 quantisation (awq, gptq, squeezellm, fp8)
    - `--speculative-model`: Draft model for speculative decoding
    - `--tensor-parallel-size`: Number of GPUs for tensor parallelism
    - Benchmarking: `vllm benchmark_throughput.py --num-prompts 1000 --max-tokens 100`

    **TensorRT-LLM (NVIDIA)**
    NVIDIA's production LLM serving library that compiles models into TensorRT engines for maximum throughput. Implements In-Flight Batching (NVIDIA's name for continuous batching) and Paged KV Caching (NVIDIA's name for PagedAttention).
    - `max_batch_size`: Maximum simultaneous sequences during decode
    - `max_input_len` / `max_output_len`: Sequence length limits (affect KV cache sizing)
    - `paged_kv_cache`: Enable/disable PagedAttention (default enabled for LLMs)
    - `enable_chunked_context`: Enable chunked prefill to interleave with decode
    - Quantisation: INT8 KV cache, FP8 weights via `ammo` toolkit
    - Deployment: via NVIDIA Triton backend `tensorrtllm_backend`

    **SGLang (Stanford, 2024)**
    A competing LLM serving framework with a focus on structured generation and constrained decoding. Implements RadixAttention for efficient prefix KV cache sharing across requests with common prefixes (system prompts, few-shot examples). Achieves comparable or superior throughput to vLLM on structured output workloads.
    - `--dp-size`: Data parallelism degree (replicas)
    - `--tp-size`: Tensor parallelism degree (model sharding)
    - `--mem-fraction-static`: Fraction of GPU memory reserved for model weights vs KV cache
    - Native structured output via `sgl.gen()` with regex/JSON schema constraints

    **AWS SageMaker Batch Transform**
    Managed offline batch inference service. Provisions GPU instances, loads the model, processes the input dataset from S3, and writes predictions back to S3. No persistent serving infrastructure required.
    - `SplitType`: Line, RecordIO, TFRecord, None — how input data is split across instances
    - `BatchStrategy`: MultiRecord (pack multiple records per HTTP request) or SingleRecord
    - `MaxPayloadInMB`: Maximum payload per HTTP request to model container (default 6 MB)
    - `MaxConcurrentTransforms`: Number of parallel transform jobs (default 1)
    - Supported frameworks: PyTorch, TensorFlow, MXNet, Hugging Face via SageMaker containers

    **Google Vertex AI Batch Prediction**
    GCP's managed batch prediction service supporting TensorFlow, PyTorch, scikit-learn, and Hugging Face models stored in Cloud Storage or Artifact Registry.
    - `bigquery_source` / `gcs_source`: Input data location
    - `machine_type`: GPU machine type (e.g., n1-standard-8 with 1× T4, a2-highgpu-1g with 1× A100)
    - `accelerator_type` / `accelerator_count`: GPU type and count
    - `max_replica_count`: Parallelism — number of workers processing the batch concurrently
    - `starting_replica_count`: Initial worker count before autoscaling

    **Apache Spark ML (Distributed CPU Batch Inference)**
    For CPU-bound batch inference at massive scale (billions of samples), Apache Spark remains dominant. Models are serialised with MLlib's `PipelineModel` or via `pyfunc` and distributed across the Spark cluster using `predict_pandas_udf`. Data processed in micro-partitions of 10k–100k rows per task.

  ## Benchmark Datasets and Evaluation Frameworks
    **MLPerf Inference Benchmark**
    The industry-standard benchmark for comparing inference systems across model types (ResNet-50, BERT-Large, GPT-J, Llama 2, Stable Diffusion) and hardware platforms. MLPerf Inference defines two scenarios relevant to batch inference: Offline (maximise throughput processing a fixed dataset) and Server (maximise throughput within a latency constraint). Results are published biannually; NVIDIA H100 and AMD MI350X submissions dominate the Offline scenario leaderboard as of 2025. The benchmark provides the most rigorous public comparison of batch inference performance across hardware and framework choices.

    **BurstGPT and LLM Serving Benchmarks**
    A suite of LLM serving benchmarks (2024–2025) that characterise realistic production traffic patterns for batch inference systems: bursty request arrival distributions, bimodal prompt-length distributions, and mixed prefill/decode workload ratios. Used to evaluate continuous batching schedulers under realistic conditions beyond synthetic uniform-request traces.

    **GPU Memory and Throughput Profiling Tools**
    - NVIDIA Nsight Systems / Nsight Compute: GPU-level profiling of batch inference kernel execution, memory bandwidth utilisation, and arithmetic throughput. Essential for diagnosing bottlenecks in production batch inference pipelines.
    - PyTorch Profiler: Identifies operator-level latency contributions in [[Deep Learning Framework]] forward passes.
    - vLLM Benchmark Suite: Measures throughput (tokens/second) and latency (time-to-first-token, inter-token latency) for LLM batch serving under configurable load patterns.

    **HELM (Holistic Evaluation of Language Models)**
    A broad evaluation framework covering 16 core scenarios and 7 metrics including accuracy, calibration, robustness, fairness, and efficiency. Includes throughput measurements that contextualise batch inference cost relative to model capability, enabling cost-per-capability analysis across model families and serving frameworks.

    **Open LLM Leaderboard and Inference Cost Benchmarks**
    Hugging Face's Open LLM Leaderboard includes inference throughput measurements in tokens/second under standardised batch sizes (batch=1, batch=32, batch=64), enabling comparison of model architecture choices relative to serving efficiency. These benchmarks inform batch size selection and model selection for cost-constrained production deployments.

  ## Key Terminology
    **Batch Size** — the number of inputs processed simultaneously in a single forward pass. Larger batch sizes improve GPU arithmetic intensity and throughput at the cost of higher per-batch latency. Optimal batch size depends on model size, GPU memory, and application latency requirements.

    **Arithmetic Intensity** — the ratio of floating-point operations (FLOPs) to memory bytes transferred. Batch inference achieves higher arithmetic intensity than single-sample inference by amortising weight loading across many inputs, moving from memory-bandwidth-bound to compute-bound operation.

    **Continuous Batching** — a dynamic batching strategy for autoregressive LLM serving (pioneered by vLLM's PagedAttention, 2023) that inserts new requests into an in-flight decode batch as slots become available, rather than waiting for the entire batch to complete. Achieves 2–4x higher throughput than static batching for LLM inference.

    **PagedAttention** — the [[KV Cache]] memory management technique (vLLM, 2023) that treats attention key-value tensors as non-contiguous pages analogous to virtual memory pages. Enables dynamic allocation and sharing of KV cache across requests, eliminating memory fragmentation and enabling larger effective batch sizes within GPU memory constraints.

    **Prefill Phase** — the phase of LLM inference where the input prompt tokens are all processed simultaneously in a single parallel forward pass to generate the KV cache. Compute-intensive; benefits from large batch sizes of prompts processed together.

    **Decode Phase** — the autoregressive token generation phase where one new token is generated per forward pass, conditioned on the KV cache from all previous tokens. Memory-bandwidth-bound for a single request; continuous batching aggregates many decode steps across concurrent requests.

    **Speculative Decoding** — a latency-reduction technique for LLM serving in which a small, fast draft model proposes K candidate future tokens and the main model verifies them in parallel. Achieves 2–3x latency reduction on single requests; interacts with batch inference through speculative micro-batching.

    **Flash Attention** — an IO-aware attention algorithm (Dao et al., 2022) that fuses the attention softmax and value-weighted-sum into a single CUDA kernel, keeping intermediate activations in fast SRAM rather than HBM. Achieves 2–4x speedup and O(N) memory for attention in batch inference.

    **Static vs Dynamic Batching** — static batching assembles fixed-size batches determined at compile or configuration time; dynamic batching assembles variable-size batches at runtime based on request arrival patterns and latency budgets. Dynamic batching is standard in production; static batching is used in embedded and edge inference scenarios.

    **Padding** — the process of extending variable-length inputs to a common length by appending a special PAD token, enabling them to be packed into a uniform-shape tensor for batch processing. Padding wastes compute on non-informative positions; efficient batching minimises padding by grouping inputs of similar length.

    **Offline Inference** — batch inference on a pre-collected dataset with no real-time constraint. Distinguished from online inference (real-time) and streaming inference (continuous data stream). The dominant pattern for nightly reindexing, bulk classification, and scientific data processing.

    **Token Throughput** — the primary performance metric for LLM batch inference, measured in tokens generated per second across the entire batch. Throughput scales with batch size up to hardware saturation; published benchmarks typically report throughput at batch sizes of 32, 64, and 128 concurrent sequences.

    **Time-to-First-Token (TTFT)** — the latency from request submission to generation of the first output token, dominated by the prefill phase duration. TTFT is the primary latency metric for user-facing LLM applications; batch inference optimisations that increase throughput often increase TTFT (because the prefill must wait for existing decode batches). Chunked prefill mitigates this trade-off.

    **Inter-Token Latency (ITL)** — the time between consecutive generated tokens during autoregressive decoding. ITL determines the perceived streaming speed in user-facing applications (text appearing token-by-token). ITL is inversely proportional to the decode batch throughput and primarily limited by memory bandwidth.

    **GPU Utilisation** — the fraction of peak GPU arithmetic throughput or memory bandwidth actually consumed by a batch inference workload. Memory-bandwidth-bound operations at small batch sizes may achieve <5% arithmetic utilisation. Profiling tools: NVIDIA Nsight Compute (sm__throughput.avg.pct_of_peak_sustained_elapsed), PyTorch profiler (GPU kernel durations).

    **Tensor Core** — specialised matrix-multiply units in NVIDIA Ampere/Hopper/Blackwell GPUs that execute fused 16-bit or 8-bit matrix multiplications at peak efficiency. Batch inference achieves tensor core utilisation proportional to batch size; small batches leave tensor cores idle (scalar operations dominate). H100 tensor cores achieve 989 TFLOP/s FP16 and 1,979 TFLOP/s FP8 when operating on sufficiently large matrices.

    **HBM (High Bandwidth Memory)** — the stacked DRAM used in GPU accelerators (HBM2e in A100, HBM3 in H100, HBM3e in H200/B200). Provides 3.35 TB/s bandwidth on H100 SXM5. The bandwidth bottleneck at small batch sizes; the bandwidth a model requires to load its weights into SM cache determines the minimum batch size needed for compute-bound operation.

    **Model Parallelism** — partitioning a model across multiple GPUs or machines when a single GPU lacks sufficient memory. Forms include Tensor Parallelism (splitting weight matrices), Pipeline Parallelism (assigning layer groups to different devices), and Sequence Parallelism (splitting attention computation along the sequence dimension). [[Distributed Inference]] requires model parallelism for very large models during batch inference.

    **Roofline Model** — an analytic performance model that characterises achievable FLOP/s as a function of arithmetic intensity (FLOPs/byte). The roofline ceiling is determined by min(peak_FLOP_rate, arithmetic_intensity × peak_bandwidth). Used to determine whether a batch inference workload is memory-bandwidth-bound or compute-bound and to identify the batch size at which the transition occurs.

    **In-context Caching / Prefix Caching** — a technique where the KV cache for a common prefix (system prompt, few-shot examples) is pre-computed once and shared across all requests using that prefix. Reduces prefill compute for requests sharing a common preamble. Implemented in SGLang (RadixAttention) and vLLM (chunked_prefill + prefix_caching). Substantially reduces TTFT for chatbot workloads with long system prompts.

    **Model Quantisation** — reducing the numeric precision of model weights and/or activations from FP32/FP16 to INT8, FP8, INT4, or INT2. Reduces memory footprint (enabling larger batch sizes within fixed GPU memory) and can increase arithmetic throughput on hardware with lower-precision tensor cores. Key techniques: GPTQ (post-training weight quantisation to INT4), SmoothQuant (INT8 weight-and-activation), LLM.int8() (mixed-precision INT8), FP8 training and inference (NVIDIA Hopper/Blackwell native).

    **Latency SLO (Service Level Objective)** — a contractual or operational target for maximum acceptable latency. SLOs constrain batch size selection in online serving contexts: the batch must complete within the SLO budget. Offline batch inference operates without SLOs, enabling maximum batch sizes limited only by GPU memory.

    **GQA (Grouped Query Attention)** — an attention variant used in Llama 2/3, Mistral, and other modern LLMs that groups multiple query heads to share a smaller number of key-value heads, reducing KV cache size by a factor of (num_kv_heads / num_query_heads) without significant quality loss. Directly enables larger batch sizes during inference by reducing per-sequence KV cache memory.

  ## Research & Literature
    1. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet Classification with Deep Convolutional Neural Networks. *NeurIPS 2012*. [AlexNet; established GPU batch training and inference as the standard paradigm]
    2. Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). Attention Is All You Need. *NeurIPS 2017*. [Transformer architecture; dominant model for which batch inference is most relevant]
    3. Dao, T., Fu, D. Y., Ermon, S., Rudra, A., & Ré, C. (2022). FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness. *NeurIPS 2022*. [Flash Attention; 2-4x speedup for attention in batch inference]
    4. Dao, T. (2023). FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning. *ICLR 2024*. [FlashAttention-2; improved GPU utilisation for batch inference]
    5. Kwon, W., Li, Z., Zhuang, S., et al. (2023). Efficient Memory Management for Large Language Model Serving with PagedAttention. *SOSP 2023*, ACM. [vLLM PagedAttention; continuous batching for LLM serving; foundational paper]
    6. Leviathan, Y., Kalman, M., & Matias, Y. (2023). Fast Inference from Transformers via Speculative Decoding. *ICML 2023*. [Speculative decoding; 2-3x latency reduction in LLM serving]
    7. Chen, C., Borgeaud, S., Irving, G., Lespiau, J.-B., Sifre, L., & Jumper, J. (2023). Accelerating Large Language Model Decoding with Speculative Sampling. *arXiv:2302.01318*. [Concurrent speculative decoding paper from DeepMind]
    8. Sheng, Y., Zheng, L., Yuan, B., et al. (2023). FlexGen: High-Throughput Generative Inference of Large Language Models with a Single GPU. *ICML 2023*. [High-throughput LLM batch inference on memory-constrained hardware]
    9. Yu, G., Kim, J. W., Jeong, H., et al. (2022). Orca: A Distributed Serving System for Transformer-Based Generative Models. *OSDI 2022*. [Early continuous batching framework; predecessor to vLLM's design]
    10. Li, Z., Zheng, L., Zhong, Y., et al. (2023). AlpaServe: Statistical Multiplexing with Model Parallelism for Deep Learning Serving. *OSDI 2023*. [Model parallelism in batch serving; multi-model scheduling]
    11. Wu, C., Gan, Y., Luo, Y., et al. (2019). Machine Learning at Facebook: Understanding Inference at the Edge. *IEEE HPCA 2019*. [Industrial-scale inference; batch vs online at Facebook scale]
    12. Reddi, V. J., Cheng, C., Kanter, D., et al. (2020). MLPerf Inference Benchmark. *IEEE Micro 2020*. [MLPerf Inference; benchmark suite for standardised batch and online inference measurement]
    13. Goldie, A., Mirhoseini, A., & Dean, J. (2021). Device Placement Optimisation with Reinforcement Learning. *arXiv:1706.04972*. [Google; hardware placement for batched inference across device topologies]
    14. Narayanan, D., Shoeybi, M., Casper, J., et al. (2021). Efficient Large-Scale Language Model Training on GPU Clusters Using Megatron-LM. *SC 2021*. [Tensor parallelism for large model inference; foundational for distributed batch inference]
    15. Rajbhandari, S., Rasley, J., Ruwase, O., & He, Y. (2020). ZeRO: Memory Optimizations Toward Training Trillion Parameter Models. *SC 2020*. [ZeRO; memory optimisation techniques applicable to batch inference serving]
    16. Dettmers, T., Lewis, M., Belkada, Y., & Zettlemoyer, L. (2022). LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale. *NeurIPS 2022*. [INT8 quantisation; enables larger batch sizes within GPU memory constraints]
    17. Frantar, E., Ashkboos, S., Hoefler, T., & Alistarh, D. (2023). GPTQ: Accurate Post-Training Quantisation for Generative Pre-trained Transformers. *ICLR 2023*. [4-bit quantisation; dramatic batch size increase for LLM serving]
    18. Pope, R., Douglas, S., Chowdhery, A., et al. (2023). Efficiently Scaling Transformer Inference. *MLSys 2023*. [Google; systematic analysis of batch size, parallelism, and hardware efficiency]
    19. Stojkovic, J., Zhu, C., Goiri, I., et al. (2024). Towards Greener LLMs: Bringing Energy Efficiency to the Forefront of LLM Inference. *arXiv:2403.20306*. [Green inference; energy efficiency of batch workloads]
    20. Mind the Memory Gap: Unveiling GPU Bottlenecks in Large-Batch LLM Inference. (2025). *arXiv:2503.08311*. [2025; characterises memory-bandwidth vs compute-bound transition for batch inference]
    21. Zheng, L., Li, Z., Zhang, H., et al. (2023). SGLang: Efficient Execution of Structured Language Model Programs. *arXiv:2312.07104*. [SGLang; structured generation with efficient batched inference]
    22. NVIDIA Corporation. (2024). NVIDIA Triton Inference Server: Deployment Guide. *Spheron Blog / NVIDIA Developer Documentation*. [Triton Inference Server; production multi-model batch serving framework]
    23. Anyscale. (2024). Achieve 23x LLM Inference Throughput with Continuous Batching. *Anyscale Blog*. [Practical continuous batching throughput measurements; vLLM implementation]
    24. Nebius. (2025). Nebius AI Cloud Arrives in UK with NVIDIA Blackwell Ultra AI Infrastructure. *Nebius Newsroom, November 2025*. [UK AI compute capacity expansion; Blackwell infrastructure for batch workloads]
    25. UK Government. (2025). AI Opportunities Action Plan. *Department for Science, Innovation and Technology*. [UK policy context; sovereign compute and AI infrastructure]
    26. Uplatz. (2025). Token-Efficient Inference: A Comparative Systems Analysis of vLLM and NVIDIA Triton Serving Architectures. *Uplatz Blog*. [2025 framework comparison; batch inference performance analysis]
    27. Stixor. (2025). The New LLM Inference Stack 2025: FA-3, FP8 and FP4. *Stixor Blog*. [2025 inference stack; current state of production batch inference components]

  ## Contrasting and Related Serving Patterns
    **Online Inference vs Batch Inference**
    [[Online Inference]] processes each request individually as it arrives, optimising for minimum single-request latency (typically <100ms for web serving, <10ms for search ranking). Batch inference accumulates multiple requests, optimising for throughput (predictions per second) at the cost of queuing delay. The trade-off is fundamental: a single H100 GPU achieves ~5 tokens/second for a 70B parameter LLM at batch size 1 (memory-bandwidth bound) versus ~1,000+ tokens/second at batch size 128 (compute-bound). Online inference is required for user-interactive applications; batch inference is preferred for any task where asynchronous processing is acceptable.

    **Streaming Inference vs Batch Inference**
    [[Streaming Inference]] processes a continuous real-time data stream (sensor readings, financial tick data, video frames at 30fps) with strict per-element latency requirements. Unlike batch inference (which accumulates a finite collection), streaming inference must process each element before the next arrives. Frameworks: Apache Flink ML, Kafka Streams ML, AWS Kinesis ML inference. Batch inference and streaming inference represent opposite ends of the data velocity spectrum: batch operates on at-rest data, streaming on in-motion data.

    **[[Edge Inference]] vs Batch Inference**
    Edge inference executes on resource-constrained devices (mobile phones, IoT sensors, embedded controllers) where GPU memory is measured in megabytes rather than gigabytes and power envelopes are milliwatts rather than kilowatts. Batch sizes at the edge are typically 1 or single-digit — hardware parallelism is limited, and latency constraints are tight. ARM's Ethos NPU family targets edge inference; models must be quantised to INT8 or INT4 to fit device memory. Batch inference and edge inference address opposite deployment contexts within the [[Model Serving]] ecosystem.

    **[[Distributed Inference]] vs Batch Inference**
    [[Distributed Inference]] refers to splitting a single model across multiple devices (tensor parallelism, pipeline parallelism) to handle models too large for one GPU. Batch inference refers to grouping multiple inputs into a single forward pass. The two are orthogonal and complementary: a distributed inference system can simultaneously employ batch inference across the device mesh, processing multiple requests in parallel on a sharded model. Production LLM serving with 70B+ parameter models requires both distributed inference (to fit the model) and batch inference (to achieve throughput).

    **[[Bayesian Inference]] vs Batch Inference**
    [[Bayesian Inference]] is a statistical inference paradigm that updates prior probability distributions using observed data via Bayes' theorem — an entirely different meaning of "inference" from the machine learning sense. The terminological overlap sometimes causes confusion: in ML, "inference" means applying a trained model to generate predictions; in statistics, "inference" means drawing conclusions from data about unknown parameters. Batch inference in the ML sense has no relationship to Bayesian posterior estimation; the shared terminology is a historical artefact of statistics being the ancestral field from which ML vocabulary descends.

    **Offline Analytics vs Real-Time Feature Serving**
    The ML prediction latency spectrum spans from offline batch inference (hours to days of lag acceptable) through near-real-time batch (seconds to minutes) to online feature serving (milliseconds). Enterprise ML architectures must choose where a given use case falls on this spectrum. Offline batch inference is appropriate when the ground truth state changes slowly (product catalogues, user long-term preferences) and prediction freshness is not critical. Near-real-time micro-batching (Apache Kafka with 10-second windows, Amazon Kinesis with 1-minute aggregation) bridges the gap between offline batch and online serving for time-sensitive but not latency-critical predictions.

    **Active Learning vs Batch Inference**
    Active learning uses a trained model to score unlabelled examples and select the most informative ones for human labelling, iteratively improving the model. The model-scoring step is itself a batch inference operation over the unlabelled pool. Batch inference is thus an infrastructure primitive underlying active learning pipelines: the model is applied in batch to score thousands or millions of candidates, and the top-uncertainty examples are routed to human annotators. High-throughput batch inference directly improves the efficiency of active learning loops by enabling faster candidate scoring.

    **Energy and Carbon Considerations**
    Large-scale batch inference workloads have a measurable carbon footprint. A batch inference job processing 100 million documents on an H100 GPU cluster (10 GPUs, 700W each) over 8 hours consumes approximately 56 kWh. At the UK grid carbon intensity of ~150 gCO2e/kWh (2025 average, significantly cleaner than 2020 due to North Sea wind expansion), this equates to ~8.4 kg CO2e per 100M document scoring run. Scheduling batch jobs to coincide with periods of high renewable generation (typically overnight for UK wind-heavy periods) can reduce effective carbon intensity to <50 gCO2e/kWh, cutting the carbon footprint by two-thirds without hardware changes.

- ### Provenance
  - sources:: https://arxiv.org/html/2503.08311v2, https://vllm.ai/, https://docs.vllm.ai/en/latest/, https://uplatz.com/blog/token-efficient-inference-a-comparative-systems-analysis-of-vllm-and-nvidia-triton-serving-architectures/, https://tensorfuse.io/blog/llm-throughput-vllm-vs-sglang, https://www.anyscale.com/blog/continuous-batching-llm-inference, https://nebius.com/newsroom/nebius-ai-cloud-arrives-in-uk-with-one-of-the-country-s-first-advanced-nvidia-ai-infrastructure-deployments, https://www.stixor.com/blogs/new-inference-stack-2025, https://www.spheron.network/blog/triton-inference-server-deployment-guide/, https://www.rohan-paul.com/p/batch-inference-at-scale-processing
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
