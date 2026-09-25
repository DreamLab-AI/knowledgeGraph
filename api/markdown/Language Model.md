A language model is a probabilistic model of natural language that assigns a probability distribution over sequences of tokens — words, subwords, or characters — enabling both likelihood estimation of observed text and generation of new text via sampling from learned conditional distributions. Modern large language models are deep neural networks based on the transformer architecture, trained on vast corpora through a self-supervised next-token prediction objective. They acquire implicit representations of syntax, semantics, world knowledge, and reasoning patterns entirely from this training signal, and can be adapted to downstream tasks through fine-tuning, instruction tuning, or prompt engineering. The paradigm has displaced earlier n-gram and recurrent neural network approaches, becoming the dominant framework for natural language processing across virtually all applied domains.

### Overview

- Language models assign probability P(token_t | token_1 … token_{t-1}) over a vocabulary learned during training and constitute the primary computational abstraction powering modern AI text systems.
- They have evolved across four generations:
  - **N-gram models** (1980s–2010s): count-based conditional frequency tables; simple, interpretable, but brittle at long range. See [[N-Gram Model]].
  - **Neural feed-forward LMs** (2003–): Bengio et al. introduced [[Embeddings]] and distributed representations, generalising beyond n-gram co-occurrence.
  - **Recurrent models** (2010–2017): [[Recurrent Neural Network]] (RNN) and LSTM variants maintained a hidden state over arbitrary-length context, capturing longer dependencies at the cost of sequential computation.
  - **Transformer-based LMs** (2017–present): the [[Transformer Architecture]] replaced recurrence with parallel [[Attention Mechanism]], enabling orders-of-magnitude larger training runs. GPT, BERT, T5, and their successors define the current era.
- Why it matters: language is the primary medium of human knowledge; models that can read, produce, and reason over language have extraordinarily broad downstream utility across search, coding, medicine, law, education, and scientific research.

### Key Components

- **[[Tokenisation]]** — Raw text is segmented into integer token IDs drawn from a fixed vocabulary (typically 32k–200k entries) using algorithms such as [[Byte Pair Encoding]] (BPE), WordPiece, or SentencePiece. The vocabulary size governs granularity, coverage, and sequence length.
- **[[Embeddings]]** — Each token ID is mapped to a dense real-valued vector in an embedding table of dimension d_model (512–32768 depending on model size). These vectors represent the model's latent representation of token identity.
- **[[Positional Encoding]]** — Because self-attention is permutation-invariant, explicit position information is injected via sinusoidal encodings or learnable positional embeddings (RoPE, ALiBi) to preserve token order.
- **[[Attention Mechanism]]** — The core computation: for each token, a weighted sum over all other tokens in the sequence is computed, with weights derived from learned query-key dot-products. Multi-head attention applies this in parallel across multiple representation subspaces.
- **[[Feed-Forward Network]]** — Each transformer layer interleaves attention with a position-wise two-layer MLP that applies non-linear transformations per token, expanding and contracting dimensionality.
- **[[Context Window]]** — The maximum number of tokens the model can attend over simultaneously. Ranges from 2k (early GPT-2) to 1M+ in recent frontier models, governed by memory and computational constraints.
- **Vocabulary projection** — The final hidden state at each position is projected onto the vocabulary dimension and normalised with a softmax to produce a probability distribution for the next token. Training minimises cross-entropy against actual next tokens.

### Mechanisms

#### Pretraining

- [[Pretraining]] on large text corpora (books, web, code, scientific literature) uses the next-token prediction (autoregressive) objective for decoder-only models (GPT family) or masked-token prediction (BERT family) for encoder models.
- Scale laws (Chinchilla, 2022) establish that compute-optimal training allocates roughly equal scaling to parameters and training tokens; frontier models now train on trillions of tokens.
- [[Training Data]] quality, deduplication, and domain mix profoundly affect downstream capability and safety.

#### Fine-Tuning and Alignment

- Supervised [[Fine Tuning]] (SFT) on curated instruction-response pairs adapts a pretrained base model to instruction-following behaviour.
- [[Reinforcement Learning from Human Feedback]] (RLHF) further aligns outputs to human preferences via a reward model trained on preference data, used to update the policy via proximal policy optimisation (PPO) or direct preference optimisation (DPO).
- Parameter-efficient methods (LoRA, prefix-tuning, adapters) reduce fine-tuning cost by updating a small fraction of weights.

#### [[Inference]]

- At inference, tokens are generated autoregressively: the model predicts the next token probability distribution, a token is sampled (using temperature, top-p nucleus sampling, or beam search), and the sampled token is appended to the context for the next step.
- KV-cache stores past key-value pairs to avoid redundant recomputation of attended history, reducing inference cost from O(n²) per step to O(n).
- [[Quantisation]] (INT8, INT4, GPTQ, AWQ) compresses weight precision to reduce memory and accelerate decoding with modest accuracy loss.

#### [[Prompt Engineering]]

- Zero-shot prompting: a natural language task description in the prompt elicits the desired behaviour without examples.
- Few-shot in-context learning: examples of input-output pairs in the prompt bootstrap task performance without any weight updates.
- Chain-of-thought prompting elicits step-by-step reasoning, improving performance on multi-step arithmetic and logical tasks.

### Applications and Use Cases

- **[[Code Generation]]** — Models such as GitHub Copilot, StarCoder, Codestral, and Cursor generate, explain, and refactor code across dozens of languages.
- **[[Machine Translation]]** — Neural machine translation powered by transformer language models has reached near-human quality for high-resource language pairs (en↔es, en↔zh, en↔de).
- **[[Question Answering]]** and retrieval — Combined with [[Retrieval Augmented Generation]], language models ground responses in external knowledge bases, reducing hallucination and supporting up-to-date factual recall.
- **Summarisation and extraction** — Long-document summarisation, information extraction, and structured data generation from unstructured text.
- **[[AI Agent]] orchestration** — Language models serve as the planning and reasoning backbone for autonomous agents that use tools, call APIs, and execute multi-step tasks. See [[AI Agent]] and [[Knowledge Graph]] integration patterns.
- **Scientific research assistance** — Protein structure annotation, literature synthesis, hypothesis generation, and experimental design across biology, chemistry, and physics.
- **Legal and medical document analysis** — Contract review, clinical note summarisation, and medical coding, where specialised fine-tuned models improve precision.
- **Search and conversational interfaces** — Web-scale search engines augment traditional retrieval with language model re-ranking and generative answer synthesis.

### Architectural Variants

- **Decoder-only (autoregressive)** — GPT family, Llama, Mistral, Qwen, Falcon. Used for generation tasks; attend only to past tokens.
- **Encoder-only** — BERT, RoBERTa, DeBERTa. Bidirectional attention; optimised for classification and embedding tasks.
- **Encoder-decoder (seq2seq)** — T5, BART, mT5. Suitable for translation, summarisation, and structured generation.
- **[[Mixture of Experts]]** — Mixtral, DeepSeek-MoE, Grok. Sparse activation of expert sub-networks per token reduces active parameters at inference while scaling total capacity.
- **Multimodal extensions** — GPT-4o, Gemini, Claude, LLaVA extend language models with vision encoders (and audio/video), accepting images or audio as additional modalities alongside text.

### Standards & Context

- No single ISO or IEEE standard governs language model architectures, though the broader field of [[Natural Language Processing]] is informed by ACL, EMNLP, and NAACL proceedings.
- EU AI Act (2024) classifies general-purpose AI models above compute thresholds as high-impact systems subject to transparency and risk-assessment requirements; frontier language models fall within scope.
- NIST AI Risk Management Framework (AI RMF 1.0, 2023) provides voluntary guidelines for trustworthy AI development, applied to language model deployment contexts.
- Model cards (Mitchell et al., 2019) and datasheets for datasets (Gebru et al., 2021) are community norms for documenting intended use, limitations, and training data provenance.
- The Chinchilla scaling laws (Hoffmann et al., 2022) provide empirical guidance for compute-optimal training, informing responsible resource allocation.

### Current Landscape (2026)

- The frontier has consolidated around a handful of closed reasoning-native families: OpenAI shipped GPT-5 in August 2025 and moved to the GPT-5.6 Sol/Terra/Luna tiers (GA 9 July 2026), while Anthropic's Claude line progressed from Opus 4 (May 2025) to Opus 4.5 (Nov 2025) and Opus 5 (24 July 2026), and Google released Gemini 3 in November 2025.
- Reasoning has become table stakes rather than a differentiator: since OpenAI's o1 and DeepSeek-R1 (Jan 2025), almost every major lab now trains chain-of-thought models using reinforcement learning with verifiable rewards (RLVR) and inference-time (test-time) compute scaling.
- Mixture-of-experts is now the dominant frontier architecture, with total parameters exceeding one trillion while only tens of billions activate per token; open-weight MoE models such as DeepSeek and Qwen have largely closed the benchmark gap with GPT-4-class proprietary systems.
- The "DeepSeek moment" reshaped the market: capable open-weight releases from DeepSeek, Qwen, Moonshot (Kimi) and Mistral, plus OpenAI's own gpt-oss (120B/20B, Apache 2.0, August 2025 — its first open weights since GPT-2), have driven token prices down sharply.
- The centre of gravity is shifting from chatbots to agents: models are post-trained for tool use, long-horizon autonomy, structured outputs and coding, with benchmarks moving from the now-saturated SWE-bench Verified towards SWE-bench Pro and Terminal-Bench.
- Regulation has arrived: the EU AI Act's general-purpose AI obligations entered application on 2 August 2025, backed by the GPAI Code of Practice (published 10 July 2025), with the Commission's enforcement powers (including fines) commencing 2 August 2026 and systemic-risk duties triggered above the 10^25 FLOP training threshold.
- Reliability remains the frontier's open problem: reasoning models paradoxically hallucinate more, with every reasoning system tested on Vectara's dataset in May 2026 exceeding a 10% hallucination rate, keeping output grounding, verification layers and continual learning as unsolved challenges.

### References

- 1. IBM (2026). A list of large language models (LLMs). https://www.ibm.com/think/topics/large-language-models-list
- 2. OpenAI (2026). GPT-5.6: Frontier intelligence that scales with your ambition. https://openai.com/index/gpt-5-6/
- 3. European Commission (2025). EU rules on general-purpose AI models start to apply. https://digital-strategy.ec.europa.eu/en/news/eu-rules-general-purpose-ai-models-start-apply-bringing-more-transparency-safety-and-accountability
- 4. ByteByteGo (2026). What's Next in AI: Five Trends to Watch in 2026. https://blog.bytebytego.com/p/whats-next-in-ai-five-trends-to-watch
- 5. Build Fast with AI (2026). Best AI Models June 2026: Every Major LLM Ranked & Compared. https://www.buildfastwithai.com/blogs/latest-ai-models-all-companies-2026

### Provenance

