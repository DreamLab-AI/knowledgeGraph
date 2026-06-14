public:: true

# speculative decoding
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:33101ee3e206175fb9388bed6ad13a288affc1bda40a77ae76f9606e7e249ffd",
  "@type": "Page",
  "vc:slug": "speculative-decoding",
  "title": "speculative decoding",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:speculative-decoding",
  "@type": "Class",
  "label": "Speculative Decoding",
  "definition": "Speculative decoding is an inference acceleration technique for autoregressive language models in which a smaller, faster draft model proposes multiple candidate tokens that a larger target model verifies in a single parallel forward pass. Accepted tokens are committed to the output sequence; rejected tokens trigger a corrected sample from the residual distribution, ensuring the final output is statistically identical to sampling from the target model alone. Because modern GPU accelerators are memory-bandwidth-bound during autoregressive generation, batching verification of several candidate tokens substantially increases arithmetic utilisation and can raise effective throughput two to four times without altering the model's output distribution. The technique is now integrated into mainstream inference frameworks and sits at the intersection of model efficiency, hardware utilisation, and production LLM serving.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:autoregressive-generation", "label": "Autoregressive Generation"},
      {"@id": "urn:ngm:class:transformer-architecture", "label": "Transformer Architecture"},
      {"@id": "urn:ngm:class:kv-cache", "label": "KV Cache"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:low-latency-inference", "label": "Low-Latency Inference"},
      {"@id": "urn:ngm:class:real-time-text-generation", "label": "Real-Time Text Generation"},
      {"@id": "urn:ngm:class:llm-serving", "label": "LLM Serving"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:draft-model", "label": "Draft Model"},
      {"@id": "urn:ngm:class:inference-hardware", "label": "Inference Hardware"},
      {"@id": "urn:ngm:class:shared-vocabulary", "label": "Shared Vocabulary"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:token-verification", "label": "Token Verification"},
      {"@id": "urn:ngm:class:rejection-sampling", "label": "Rejection Sampling"},
      {"@id": "urn:ngm:class:acceptance-criterion", "label": "Acceptance Criterion"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:parallel-computation", "label": "Parallel Computation"},
      {"@id": "urn:ngm:class:gpu-accelerated-inference", "label": "GPU Accelerated Inference"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:autoregressive-decoding", "label": "Autoregressive Decoding"},
      {"@id": "urn:ngm:class:beam-search", "label": "Beam Search"},
      {"@id": "urn:ngm:class:greedy-decoding", "label": "Greedy Decoding"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:model-quantisation", "label": "Model Quantisation"},
      {"@id": "urn:ngm:class:model-distillation", "label": "Model Distillation"},
      {"@id": "urn:ngm:class:continuous-batching", "label": "Continuous Batching"},
      {"@id": "urn:ngm:class:context-window", "label": "Context Window"},
      {"@id": "urn:ngm:class:sampling-strategies", "label": "Sampling Strategies"},
      {"@id": "urn:ngm:class:model-compression-for-edge", "label": "Model Compression for Edge"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:rejection-sampling", "label": "Rejection Sampling"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:edge-ai", "label": "Edge AI"},
      {"@id": "urn:ngm:class:real-time-systems", "label": "Real-Time Systems"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:assisted-decoding", "label": "Assisted Decoding"},
    {"@id": "urn:ngm:class:draft-and-verify", "label": "Draft and Verify"}
  ],
  "qualityScore": 0.76,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Speculative decoding is a [[Large Language Models]] inference acceleration technique in which a small, fast [[Draft Model]] proposes a sequence of candidate tokens that a larger target model verifies in a single parallel forward pass using [[Rejection Sampling]]. Accepted tokens are appended to the output; rejected tokens trigger a corrected sample, ensuring the output distribution is provably identical to that of [[Autoregressive Generation]] from the target model alone. By batching multi-token verification rather than producing one token per forward pass, speculative decoding converts idle [[GPU Accelerated Inference]] memory-bandwidth capacity into meaningful throughput gains, typically achieving two to four times the effective tokens-per-second rate without changing model weights or output quality.

- ### Overview
  - **The core problem addressed**
    - Autoregressive language model inference is memory-bandwidth-bound: each forward pass through a large [[Transformer Architecture]] produces exactly one output token, yet the GPU can execute far more arithmetic operations per second than the memory bus can supply activations. This mismatch leaves hardware utilisation low and keeps per-token latency high.
  - **The speculative decoding solution**
    - A lightweight [[Draft Model]] — often orders of magnitude smaller than the target — generates K candidate tokens autoregressively at low cost. The target model then consumes the original context plus all K candidates in one batched forward pass, computing logits at each position simultaneously. An [[Acceptance Criterion]] based on probability ratios determines how many leading tokens to accept. Any token for which the draft probability exceeds the target probability is accepted with probability one; otherwise it is stochastically accepted with probability proportional to the ratio, and the remainder of the draft sequence is discarded. A final corrected token is always sampled from the residual distribution to restore exact target statistics.
  - **Why output distribution equivalence matters**
    - Because the acceptance/rejection scheme is a form of [[Rejection Sampling]] applied position-by-position, the mathematical guarantee is that the resulting token sequence is drawn from exactly the same distribution as if the target model had generated every token autoregressively. This property is critical for safety-sensitive and capability-evaluated deployments where distribution shift would invalidate evaluation results.
  - **Adoption trajectory**
    - Originally introduced in research papers circa 2022–2023, speculative decoding moved rapidly into production: it is now a first-class feature of [[vLLM]], TensorRT-LLM, Hugging Face [[Transformers]] (via `assisted_generation`), and Apple's MLX framework. Its maturity has risen from emerging research to an established production optimisation.

- ### Key Mechanisms
  - **Draft model**
    - A smaller model — sharing the same [[Shared Vocabulary]] and often the same tokeniser as the target — generates K candidate tokens via standard autoregressive decoding. The draft can be: a separately trained small model (e.g. a 7B draft for a 70B target), a set of extra prediction heads attached to the target ([[Medusa]] variant), or a subset of the target's own layers (self-speculative / draft-on-skip variant).
  - **Parallel verification pass**
    - The target model performs one forward pass over the concatenated input `[context, draft_token_1, ..., draft_token_K]`. Because transformer attention over a sequence of K+1 tokens can be executed as a single batched operation, the verification cost grows sub-linearly with K when the batch is short relative to the context length.
  - **Token-by-token acceptance**
    - For each position i ∈ {1…K}: let p_i = target probability of draft token, q_i = draft probability. Accept with probability min(1, p_i / q_i). If accepted, move to i+1. If rejected, sample the corrected token from max(0, p_i − q_i) (normalised), discard remaining draft tokens, and resume.
  - **[[KV Cache]] reuse**
    - The key-value cache from the original context is reused across both the draft model and the target model's verification pass, preserving the efficiency gains from incremental decoding.
  - **Tree-based speculation ([[SpecInfer]])**
    - Rather than a linear candidate sequence, multiple draft paths are organised into a tree and verified simultaneously using masked attention, increasing the expected number of accepted tokens per verification call.
  - **Self-speculative decoding**
    - Early layers of the target model are used as the draft, so no separate model weights are needed. The full model still performs verification over later layers. This sacrifices some speed uplift relative to a dedicated small draft but eliminates deployment complexity.

- ### Variants and Extensions
  - **[[Medusa]]** — adds multiple decoding heads to the target model, each predicting a different offset token position simultaneously. No separate draft model is required; training is needed for the extra heads.
  - **SpecInfer** — extends speculation to a token tree, enabling verification of exponentially many draft candidates in one pass via tree attention masking.
  - **Lookahead Decoding** — uses a Jacobi iteration-based approach to generate candidate tokens without a separate model, suitable when no small auxiliary model is available.
  - **REST (Retrieval-based Speculative Decoding)** — retrieves draft candidates from a datastore of pre-existing text rather than generating them with a model.
  - **Cascade Speculation** — chains more than two model sizes (small → medium → large) for multi-stage verification.
  - **Draft model fine-tuning** — aligning the draft model on the same distribution as the target improves acceptance rates and thus throughput.

- ### Applications and Use Cases
  - **Interactive chat systems** — reducing per-turn latency in products such as AI assistants, where user-perceived responsiveness depends on time-to-first-token and streaming rate.
  - **Code generation** — highly structured, predictable outputs such as code or structured data have high draft acceptance rates, making speculative decoding especially effective for [[Code Generation]] tasks.
  - **RAG pipelines** — [[Retrieval-Augmented Generation]] systems benefit from faster generation of grounded responses within latency budgets for end-user search products.
  - **[[Edge AI]] deployment** — self-speculative decoding variants allow single-device deployment on devices such as the Apple M-series where memory bandwidth is the primary constraint.
  - **Batch inference at scale** — combined with [[Continuous Batching]], speculative decoding raises the effective requests-per-second of large inference clusters, reducing [[LLM Serving]] cost per token.
  - **Agentic and multi-step reasoning** — long reasoning chains (used in chain-of-thought and agent loops) benefit from the cumulative latency reduction across many generation steps.

- ### Relationships
  - uses:: [[Large Language Models]]
  - uses:: [[Autoregressive Generation]]
  - uses:: [[Transformer Architecture]]
  - uses:: [[KV Cache]]
  - enables:: [[Low-Latency Inference]]
  - enables:: [[Real-Time Text Generation]]
  - enables:: [[LLM Serving]]
  - requires:: [[Draft Model]]
  - requires:: [[Inference Hardware]]
  - requires:: [[Shared Vocabulary]]
  - hasPart:: [[Rejection Sampling]]
  - hasPart:: [[Token Verification]]
  - hasPart:: [[Acceptance Criterion]]
  - dependsOn:: [[Parallel Computation]]
  - dependsOn:: [[GPU Accelerated Inference]]
  - contrastsWith:: [[Autoregressive Decoding]]
  - contrastsWith:: [[Beam Search]]
  - contrastsWith:: [[Greedy Decoding]]
  - relatedTo:: [[Model Quantisation]]
  - relatedTo:: [[Model Distillation]]
  - relatedTo:: [[Continuous Batching]]
  - relatedTo:: [[Context Window]]
  - relatedTo:: [[Sampling Strategies]]
  - relatedTo:: [[Model Compression for Edge]]
  - implements:: [[Rejection Sampling]]
  - bridges-to:: [[Edge AI]]
  - bridges-to:: [[Real-Time Systems]]

- ### Standards and Ecosystem Context
  - Speculative decoding is not yet governed by a formal standards body, but several de-facto reference implementations serve as the community baseline:
    - **Hugging Face `generate()` API** — the `assisted_generation` parameter enables speculative decoding with any compatible draft model.
    - **vLLM** — open-source, production-grade LLM serving engine with native speculative decoding support including Medusa and ngram-based drafts.
    - **NVIDIA TensorRT-LLM** — production inference library for NVIDIA GPUs with speculative decoding as a first-class optimisation path.
    - **Apple MLX** — open-source framework for Apple Silicon that uses speculative decoding for on-device [[Large Language Models]] inference.
  - The technique's statistical guarantees are grounded in classical [[Rejection Sampling]] theory; the key theoretical papers (Leviathan et al. 2022; Chen et al. 2023) established the acceptance criterion and distribution equivalence proofs that all subsequent variants inherit.
  - Acceptance rate — the fraction of draft tokens accepted on average — is the key tuning metric. It depends on: draft model quality relative to the target, task predictability, the value of K (lookahead width), and temperature settings.
  - Integration with [[Continuous Batching]] and paged [[KV Cache]] management (as in vLLM) requires careful scheduling to avoid draft/target divergence across batch items.

- ### Related Concepts
  - [[Inference Optimisation]] — the parent category; speculative decoding is one of several complementary optimisation strategies.
  - [[Model Distillation]] — draft models are often distilled versions of the target; the two techniques are frequently deployed together.
  - [[Model Quantisation]] — quantisation reduces memory footprint; speculative decoding addresses the bandwidth utilisation problem; combined they produce compound gains.
  - [[Flash Attention]] — an attention kernel optimisation that accelerates both the draft's generation and the target's verification pass.
  - [[Tensor Parallelism]] — multi-GPU strategies interact with speculative decoding scheduling; the draft may run on fewer devices than the target.
  - [[Sampling Strategies]] — temperature, top-p, and top-k sampling all interact with the acceptance criterion; lower temperatures produce higher acceptance rates.

- ### Provenance
  - sources:: Leviathan et al. (2022) "Fast Inference from Transformers via Speculative Decoding"; Chen et al. (2023) "Accelerating Large Language Model Decoding with Speculative Sampling"; vLLM documentation; Hugging Face Transformers assisted generation documentation
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
