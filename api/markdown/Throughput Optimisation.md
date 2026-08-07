public:: true

# Throughput Optimisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:560e50e82b2a4db79479d47b10de24c55a9f10049e140a7a06a5a93bedb71c0d",
  "@type": "Page",
  "vc:slug": "throughput-optimisation",
  "title": "Throughput Optimisation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:inference-optimisation",
      "vc:label": "Inference Optimisation"
    },
    {
      "@id": "urn:visionflow:linked:batch-inference",
      "vc:label": "Batch Inference"
    },
    {
      "@id": "urn:visionflow:linked:continuous-batching",
      "vc:label": "Continuous Batching"
    },
    {
      "@id": "urn:visionflow:linked:kv-cache",
      "vc:label": "KV Cache"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:throughput-optimisation",
  "@type": "Class",
  "label": "Throughput Optimisation",
  "definition": "The systems discipline of maximising useful work completed per unit time — requests, tokens, or samples per second — on fixed hardware, typically by batching to raise arithmetic intensity, keeping accelerators saturated through scheduling and overlap, and managing memory so that capacity rather than stalls bounds concurrency, usually traded off explicitly against per-request latency.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:inference-optimisation",
    "label": "Inference Optimisation"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:continuous-batching",
        "label": "Continuous Batching"
      },
      {
        "@id": "urn:ngm:class:kv-cache",
        "label": "KV Cache"
      },
      {
        "@id": "urn:ngm:class:batch-inference",
        "label": "Batch Inference"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-serving",
        "label": "Model Serving"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:gpu-acceleration",
        "label": "GPU Acceleration"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The systems discipline of maximising useful work completed per unit time — requests, tokens, or samples per second — on fixed hardware, typically by batching to raise arithmetic intensity, keeping accelerators saturated through scheduling and overlap, and managing memory so that capacity rather than stalls bounds concurrency, usually traded off explicitly against per-request latency."

- ### Semantic Classification
  - owl-class:: machine-learning:ThroughputOptimisation
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Inference Optimisation]]
  - uses:: [[Continuous Batching]]
  - uses:: [[KV Cache]]
  - enables:: [[Model Serving]]

- ### Content

  ## Definition

  **Throughput optimisation** is the pursuit of maximum useful work per unit time from fixed hardware — in modern ML serving, measured as tokens per second, requests per second, or samples per second per GPU. It is one axis of the fundamental serving trade-off: latency-optimised systems run small batches to answer each request quickly, whilst throughput-optimised systems accept queuing delay to amortise fixed costs over larger batches. [[Batch Inference]] represents the throughput extreme, where no interactive deadline exists and the sole objective is cost per processed item.

  The technical core is arithmetic intensity. Accelerators are enormously faster at compute than at memory access, so an operation whose data is reused many times (large-batch matrix multiplication) runs compute-bound near peak FLOPS, whereas the same weights streamed for a single request are memory-bandwidth-bound and leave the ALUs idle. Batching converts memory-bound work into compute-bound work — the reason LLM decode throughput scales dramatically with batch size until memory capacity or compute saturation intervenes. The roofline model formalises this: throughput engineering is largely the craft of moving workloads rightward along the roofline.

  For autoregressive LLMs, the binding constraint becomes memory: each concurrent sequence holds a [[KV Cache]] whose size grows with context length, so achievable batch size — and hence throughput — is set by how efficiently that cache is stored. PagedAttention (vLLM) eliminated fragmentation with block-based cache allocation; [[Continuous Batching]] (Orca-style iteration-level scheduling) keeps the batch full by admitting and retiring sequences every decode step rather than waiting for the slowest request. Together these techniques delivered order-of-magnitude throughput gains over naive serving and now define the baseline for production [[Model Serving]].

  ## Technical Details

  Standard levers, roughly in order of typical impact for LLM serving:

  - **Batching**: continuous/in-flight batching; chunked prefill to interleave long prompt processing with ongoing decodes; separate prefill/decode pools (disaggregated serving) so the compute-bound and bandwidth-bound phases scale independently.
  - **Memory efficiency**: paged and quantised (FP8/INT8) KV caches, grouped-query attention, prefix/KV-cache reuse across requests sharing system prompts, and offload hierarchies for long contexts.
  - **Kernel and precision optimisation**: fused attention kernels (FlashAttention), FP8/INT4 weight quantisation, CUDA graphs to remove launch overhead, and compiler stacks (TensorRT-LLM, torch.compile) — all raising work done per byte moved, complementing raw [[GPU Acceleration]].
  - **Speculative decoding**: a draft model proposes tokens the target model verifies in parallel, converting sequential decode steps into batched verification — raising tokens/s without changing output distribution.
  - **Scheduling and SLOs**: goodput (requests meeting time-to-first-token and inter-token-latency targets) rather than raw tokens/s is the operative production metric; admission control and priority scheduling protect interactive traffic whilst background batch work absorbs spare capacity.

  Beyond ML, the same discipline appears in databases (transactions/s), networking (goodput vs bandwidth), and stream processing — throughput optimisation is ultimately queueing theory plus hardware sympathy applied to a specific pipeline.

  ## Current Landscape

  LLM-serving throughput work in 2025-26 has professionalised around vLLM-class engines:

  - **PagedAttention + continuous batching** deliver the baseline gains: vLLM reports 2-4x throughput over prior serving systems, and continuous (in-flight) batching gives roughly 2-5x over static batching for typical workloads.
  - **Prefill/decode (P/D) disaggregation** is the current architectural frontier — compute-bound prefill and bandwidth-bound decode run on separate worker pools; note that disaggregation itself targets tail-latency control (TTFT/ITL) rather than raw throughput. The **vLLM Router (December 2025)** orchestrates P/D and benchmarked 25-100% higher requests/s than K8s-native and llm-d load balancers.
  - **Kernel and precision advances**: FlashAttention-3 (≈2x over FA2 on H100, FP8 support) is now the default attention path, with FP8/INT4 weight and KV-cache quantisation, CUDA graphs, and torch.compile standard.
  - **Speculative decoding** (n-gram, EAGLE, or a small draft model) yields ~1.5-3x decode speedups that are statistically equivalent to token-by-token autoregressive sampling.
  - **Goodput over raw tokens/s**: production tuning now optimises SLO-meeting requests (time-to-first-token and inter-token-latency targets), using admission control and chunked prefill to protect interactive traffic.

  **Sources**:
  - https://vllm.ai/blog/2025-09-05-anatomy-of-vllm
  - https://vllm.ai/blog/2025-12-13-vllm-router-release
  - https://docs.vllm.ai/en/latest/features/disagg_prefill/
