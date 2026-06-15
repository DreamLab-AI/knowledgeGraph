- ### Definition
  - [[Token Generation]] is the step-by-step autoregressive process by which a [[Large Language Model]] produces output, sampling one token at a time from a probability distribution over its vocabulary.
  - Each step executes a full [[Transformer]] forward pass; a [[Decoding Algorithm]] such as top-p nucleus sampling selects the next token; the [[Kv Cache]] stores past key-value pairs to avoid redundant computation.
  - Throughput (tokens/second) and latency to first token are the primary performance metrics, driven by [[Gpu Acceleration]] and serving systems that implement [[Dynamic Batching]].

- ### Overview
  - Token generation underlies virtually all modern generative AI outputs: text, code, structured data, and increasingly multi-modal content. The model maintains a context window — a sequence of input and already-generated tokens — and at each step computes a probability distribution over the full vocabulary. The chosen token is appended and the process repeats until an end-of-sequence token or maximum length is reached.
  - Serving-level optimisations are crucial because generation is memory-bandwidth-bound on GPUs. KV caching avoids recomputing attention over already-processed tokens. Continuous batching and dynamic batching allow a single GPU to serve multiple concurrent requests by combining their generation steps. Speculative decoding uses a small draft model to propose several tokens at once, which the large model verifies in a single forward pass, increasing effective throughput.

- ### Key aspects
  - **Sampling strategies** — temperature controls distribution sharpness; top-k limits the candidate pool; nucleus (top-p) sampling cuts off the long tail; beam search explores multiple candidates simultaneously.
  - **KV cache management** — storing key-value tensors for each past token trades GPU memory for computation; cache eviction strategies matter at long contexts.
  - **Speculative decoding** — a small draft model generates candidate tokens; the target model accepts or rejects them in parallel, improving throughput without changing output distribution.
  - **Quantisation** — INT8 or INT4 weight quantisation reduces memory bandwidth requirements and increases generation speed with acceptable quality loss.

- ### Applications
  - Interactive chat assistants generating conversational responses token-by-token with streaming display.
  - Code completion tools producing multi-line code suggestions in IDEs.
  - Retrieval-augmented generation pipelines synthesising answers from retrieved documents.
  - AI agent action planning expressed as structured JSON or tool-call tokens.

- ### Mechanisms
  - **Forward pass** — the full decoder stack processes the context to produce logits over the vocabulary.
  - **Logit processing** — temperature scaling, repetition penalties, and logit biases are applied before sampling.
  - **Incremental decoding** — only the new token's embedding is fed into the next step; the KV cache supplies all prior keys and values.

- ### Relationships
  - supports:: [[Large Language Model]]
  - supports:: [[Text Generation]]
  - supports:: [[Code Generation]]
  - uses:: [[Autoregressive Model]]
  - uses:: [[Sampling Strategy]]
  - uses:: [[Kv Cache]]
  - dependsOn:: [[Transformer]]
  - dependsOn:: [[Tokenisation]]
  - dependsOn:: [[Gpu Acceleration]]
  - hasPart:: [[Logit Computation]]
  - hasPart:: [[Decoding Algorithm]]
  - enables:: [[Conversational Ai]]
  - enables:: [[Ai Agent]]
  - relatedTo:: [[Inference Engine]]
  - relatedTo:: [[Dynamic Batching]]
  - relatedTo:: [[Speculative Decoding]]
  - contrastsWith:: [[Encoder Model]]

- ### Provenance
  - updated:: 2026-06-15