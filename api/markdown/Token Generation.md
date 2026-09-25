Token generation is the autoregressive process by which a language model produces output tokens one at a time, sampling from a probability distribution over the vocabulary conditioned on the input context and all previously generated tokens. Each forward pass through the model produces logits over the vocabulary; a sampling strategy — greedy decoding, temperature sampling, top-k, or nucleus sampling — selects the next token, which is appended to the context for the subsequent step. Token generation is the primary inference workload of large language models and determines output quality, latency, and throughput.

### Overview

- Token generation underlies virtually all modern generative AI outputs: text, code, structured data, and increasingly multi-modal content. The model maintains a context window — a sequence of input and already-generated tokens — and at each step computes a probability distribution over the full vocabulary. The chosen token is appended and the process repeats until an end-of-sequence token or maximum length is reached.
- Serving-level optimisations are crucial because generation is memory-bandwidth-bound on GPUs. KV caching avoids recomputing attention over already-processed tokens. Continuous batching and dynamic batching allow a single GPU to serve multiple concurrent requests by combining their generation steps. Speculative decoding uses a small draft model to propose several tokens at once, which the large model verifies in a single forward pass, increasing effective throughput.

### Key aspects

- **Sampling strategies** — temperature controls distribution sharpness; top-k limits the candidate pool; nucleus (top-p) sampling cuts off the long tail; beam search explores multiple candidates simultaneously.
- **KV cache management** — storing key-value tensors for each past token trades GPU memory for computation; cache eviction strategies matter at long contexts.
- **Speculative decoding** — a small draft model generates candidate tokens; the target model accepts or rejects them in parallel, improving throughput without changing output distribution.
- **Quantisation** — INT8 or INT4 weight quantisation reduces memory bandwidth requirements and increases generation speed with acceptable quality loss.

### Applications

- Interactive chat assistants generating conversational responses token-by-token with streaming display.
- Code completion tools producing multi-line code suggestions in IDEs.
- Retrieval-augmented generation pipelines synthesising answers from retrieved documents.
- AI agent action planning expressed as structured JSON or tool-call tokens.

### Mechanisms

- **Forward pass** — the full decoder stack processes the context to produce logits over the vocabulary.
- **Logit processing** — temperature scaling, repetition penalties, and logit biases are applied before sampling.
- **Incremental decoding** — only the new token's embedding is fed into the next step; the KV cache supplies all prior keys and values.

### Provenance

