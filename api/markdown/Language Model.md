public:: true

# Language Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:language-model",
  "@type": "Page",
  "vc:slug": "language-model",
  "title": "Language Model",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:language-model",
  "@type": "Class",
  "label": "Language Model",
  "definition": "A language model is a probabilistic model of natural language that assigns a probability distribution over sequences of tokens — words, subwords, or characters — enabling both likelihood estimation of observed text and generation of new text via sampling from learned conditional distributions. Modern large language models are deep neural networks based on the transformer architecture, trained on vast corpora through a self-supervised next-token prediction objective. They acquire implicit representations of syntax, semantics, world knowledge, and reasoning patterns entirely from this training signal, and can be adapted to downstream tasks through fine-tuning, instruction tuning, or prompt engineering. The paradigm has displaced earlier n-gram and recurrent neural network approaches, becoming the dominant framework for natural language processing across virtually all applied domains.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:generative-model", "label": "Generative Model"}],
  "sameAs": [
    {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"},
    {"@id": "urn:ngm:class:neural-language-model", "label": "Neural Language Model"}
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:transformer-architecture", "label": "Transformer Architecture"},
      {"@id": "urn:ngm:class:attention-mechanism", "label": "Attention Mechanism"},
      {"@id": "urn:ngm:class:embeddings", "label": "Embeddings"},
      {"@id": "urn:ngm:class:context-window", "label": "Context Window"},
      {"@id": "urn:ngm:class:tokenisation", "label": "Tokenisation"},
      {"@id": "urn:ngm:class:byte-pair-encoding", "label": "Byte Pair Encoding"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:text-generation", "label": "Text Generation"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:natural-language-understanding", "label": "Natural Language Understanding"},
      {"@id": "urn:ngm:class:code-generation", "label": "Code Generation"},
      {"@id": "urn:ngm:class:machine-translation", "label": "Machine Translation"},
      {"@id": "urn:ngm:class:question-answering", "label": "Question Answering"},
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:pretraining", "label": "Pretraining"},
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"},
      {"@id": "urn:ngm:class:compute-infrastructure", "label": "Compute Infrastructure"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:attention-mechanism", "label": "Attention Mechanism"},
      {"@id": "urn:ngm:class:feed-forward-network", "label": "Feed Forward Network"},
      {"@id": "urn:ngm:class:positional-encoding", "label": "Positional Encoding"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:n-gram-model", "label": "N-Gram Model"},
      {"@id": "urn:ngm:class:recurrent-neural-network", "label": "Recurrent Neural Network"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine Tuning"},
      {"@id": "urn:ngm:class:inference", "label": "Inference"},
      {"@id": "urn:ngm:class:language-modeling", "label": "Language Modeling"},
      {"@id": "urn:ngm:class:reinforcement-learning-from-human-feedback", "label": "Reinforcement Learning from Human Feedback"},
      {"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"},
      {"@id": "urn:ngm:class:mixture-of-experts", "label": "Mixture of Experts"},
      {"@id": "urn:ngm:class:quantisation", "label": "Quantisation"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:ai-agent", "label": "AI Agent"},
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"}
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A [[Language Model]] is a probabilistic model of natural language that assigns a likelihood distribution over token sequences and generates new text by sampling from learned conditional distributions, implemented in modern systems as a deep [[Transformer Architecture]] trained on vast text corpora. Through a self-supervised [[Pretraining]] objective — predicting the next token given all preceding tokens — language models acquire rich implicit representations of [[Natural Language Processing]] competencies, world knowledge, and reasoning without any task-specific supervision. The paradigm spans a spectrum from small domain-specific models to frontier [[Large Language Models]] with hundreds of billions of parameters, and underpins virtually every contemporary [[Natural Language Understanding]] and [[Text Generation]] application.

- ### Overview
  - Language models assign probability P(token_t | token_1 … token_{t-1}) over a vocabulary learned during training and constitute the primary computational abstraction powering modern AI text systems.
  - They have evolved across four generations:
    - **N-gram models** (1980s–2010s): count-based conditional frequency tables; simple, interpretable, but brittle at long range. See [[N-Gram Model]].
    - **Neural feed-forward LMs** (2003–): Bengio et al. introduced [[Embeddings]] and distributed representations, generalising beyond n-gram co-occurrence.
    - **Recurrent models** (2010–2017): [[Recurrent Neural Network]] (RNN) and LSTM variants maintained a hidden state over arbitrary-length context, capturing longer dependencies at the cost of sequential computation.
    - **Transformer-based LMs** (2017–present): the [[Transformer Architecture]] replaced recurrence with parallel [[Attention Mechanism]], enabling orders-of-magnitude larger training runs. GPT, BERT, T5, and their successors define the current era.
  - Why it matters: language is the primary medium of human knowledge; models that can read, produce, and reason over language have extraordinarily broad downstream utility across search, coding, medicine, law, education, and scientific research.

- ### Key Components
  - **[[Tokenisation]]** — Raw text is segmented into integer token IDs drawn from a fixed vocabulary (typically 32k–200k entries) using algorithms such as [[Byte Pair Encoding]] (BPE), WordPiece, or SentencePiece. The vocabulary size governs granularity, coverage, and sequence length.
  - **[[Embeddings]]** — Each token ID is mapped to a dense real-valued vector in an embedding table of dimension d_model (512–32768 depending on model size). These vectors represent the model's latent representation of token identity.
  - **[[Positional Encoding]]** — Because self-attention is permutation-invariant, explicit position information is injected via sinusoidal encodings or learnable positional embeddings (RoPE, ALiBi) to preserve token order.
  - **[[Attention Mechanism]]** — The core computation: for each token, a weighted sum over all other tokens in the sequence is computed, with weights derived from learned query-key dot-products. Multi-head attention applies this in parallel across multiple representation subspaces.
  - **[[Feed-Forward Network]]** — Each transformer layer interleaves attention with a position-wise two-layer MLP that applies non-linear transformations per token, expanding and contracting dimensionality.
  - **[[Context Window]]** — The maximum number of tokens the model can attend over simultaneously. Ranges from 2k (early GPT-2) to 1M+ in recent frontier models, governed by memory and computational constraints.
  - **Vocabulary projection** — The final hidden state at each position is projected onto the vocabulary dimension and normalised with a softmax to produce a probability distribution for the next token. Training minimises cross-entropy against actual next tokens.

- ### Mechanisms

  - #### Pretraining
    - [[Pretraining]] on large text corpora (books, web, code, scientific literature) uses the next-token prediction (autoregressive) objective for decoder-only models (GPT family) or masked-token prediction (BERT family) for encoder models.
    - Scale laws (Chinchilla, 2022) establish that compute-optimal training allocates roughly equal scaling to parameters and training tokens; frontier models now train on trillions of tokens.
    - [[Training Data]] quality, deduplication, and domain mix profoundly affect downstream capability and safety.

  - #### Fine-Tuning and Alignment
    - Supervised [[Fine Tuning]] (SFT) on curated instruction-response pairs adapts a pretrained base model to instruction-following behaviour.
    - [[Reinforcement Learning from Human Feedback]] (RLHF) further aligns outputs to human preferences via a reward model trained on preference data, used to update the policy via proximal policy optimisation (PPO) or direct preference optimisation (DPO).
    - Parameter-efficient methods (LoRA, prefix-tuning, adapters) reduce fine-tuning cost by updating a small fraction of weights.

  - #### [[Inference]]
    - At inference, tokens are generated autoregressively: the model predicts the next token probability distribution, a token is sampled (using temperature, top-p nucleus sampling, or beam search), and the sampled token is appended to the context for the next step.
    - KV-cache stores past key-value pairs to avoid redundant recomputation of attended history, reducing inference cost from O(n²) per step to O(n).
    - [[Quantisation]] (INT8, INT4, GPTQ, AWQ) compresses weight precision to reduce memory and accelerate decoding with modest accuracy loss.

  - #### [[Prompt Engineering]]
    - Zero-shot prompting: a natural language task description in the prompt elicits the desired behaviour without examples.
    - Few-shot in-context learning: examples of input-output pairs in the prompt bootstrap task performance without any weight updates.
    - Chain-of-thought prompting elicits step-by-step reasoning, improving performance on multi-step arithmetic and logical tasks.

- ### Applications and Use Cases
  - **[[Code Generation]]** — Models such as GitHub Copilot, StarCoder, Codestral, and Cursor generate, explain, and refactor code across dozens of languages.
  - **[[Machine Translation]]** — Neural machine translation powered by transformer language models has reached near-human quality for high-resource language pairs (en↔es, en↔zh, en↔de).
  - **[[Question Answering]]** and retrieval — Combined with [[Retrieval Augmented Generation]], language models ground responses in external knowledge bases, reducing hallucination and supporting up-to-date factual recall.
  - **Summarisation and extraction** — Long-document summarisation, information extraction, and structured data generation from unstructured text.
  - **[[AI Agent]] orchestration** — Language models serve as the planning and reasoning backbone for autonomous agents that use tools, call APIs, and execute multi-step tasks. See [[AI Agent]] and [[Knowledge Graph]] integration patterns.
  - **Scientific research assistance** — Protein structure annotation, literature synthesis, hypothesis generation, and experimental design across biology, chemistry, and physics.
  - **Legal and medical document analysis** — Contract review, clinical note summarisation, and medical coding, where specialised fine-tuned models improve precision.
  - **Search and conversational interfaces** — Web-scale search engines augment traditional retrieval with language model re-ranking and generative answer synthesis.

- ### Architectural Variants
  - **Decoder-only (autoregressive)** — GPT family, Llama, Mistral, Qwen, Falcon. Used for generation tasks; attend only to past tokens.
  - **Encoder-only** — BERT, RoBERTa, DeBERTa. Bidirectional attention; optimised for classification and embedding tasks.
  - **Encoder-decoder (seq2seq)** — T5, BART, mT5. Suitable for translation, summarisation, and structured generation.
  - **[[Mixture of Experts]]** — Mixtral, DeepSeek-MoE, Grok. Sparse activation of expert sub-networks per token reduces active parameters at inference while scaling total capacity.
  - **Multimodal extensions** — GPT-4o, Gemini, Claude, LLaVA extend language models with vision encoders (and audio/video), accepting images or audio as additional modalities alongside text.

- ### Relationships
  - subClassOf:: [[Generative Model]]
  - uses:: [[Transformer Architecture]]
  - uses:: [[Attention Mechanism]]
  - uses:: [[Embeddings]]
  - uses:: [[Context Window]]
  - uses:: [[Tokenisation]]
  - uses:: [[Byte Pair Encoding]]
  - enables:: [[Text Generation]]
  - enables:: [[Natural Language Processing]]
  - enables:: [[Natural Language Understanding]]
  - enables:: [[Code Generation]]
  - enables:: [[Machine Translation]]
  - enables:: [[Question Answering]]
  - enables:: [[Retrieval Augmented Generation]]
  - requires:: [[Pretraining]]
  - requires:: [[Training Data]]
  - requires:: [[Compute Infrastructure]]
  - hasPart:: [[Attention Mechanism]]
  - hasPart:: [[Feed-Forward Network]]
  - hasPart:: [[Positional Encoding]]
  - contrastsWith:: [[N-Gram Model]]
  - contrastsWith:: [[Recurrent Neural Network]]
  - relatedTo:: [[Large Language Models]]
  - relatedTo:: [[Fine Tuning]]
  - relatedTo:: [[Inference]]
  - relatedTo:: [[Language Modeling]]
  - relatedTo:: [[Reinforcement Learning from Human Feedback]]
  - relatedTo:: [[Prompt Engineering]]
  - relatedTo:: [[Mixture of Experts]]
  - relatedTo:: [[Quantisation]]
  - bridges-to:: [[AI Agent]]
  - bridges-to:: [[Knowledge Graph]]

- ### Standards & Context
  - No single ISO or IEEE standard governs language model architectures, though the broader field of [[Natural Language Processing]] is informed by ACL, EMNLP, and NAACL proceedings.
  - EU AI Act (2024) classifies general-purpose AI models above compute thresholds as high-impact systems subject to transparency and risk-assessment requirements; frontier language models fall within scope.
  - NIST AI Risk Management Framework (AI RMF 1.0, 2023) provides voluntary guidelines for trustworthy AI development, applied to language model deployment contexts.
  - Model cards (Mitchell et al., 2019) and datasheets for datasets (Gebru et al., 2021) are community norms for documenting intended use, limitations, and training data provenance.
  - The Chinchilla scaling laws (Hoffmann et al., 2022) provide empirical guidance for compute-optimal training, informing responsible resource allocation.

- ### Provenance
  - sources:: NeurIPS, ICLR, ACL proceedings; Vaswani et al. (2017) "Attention Is All You Need"; Radford et al. GPT-2/3; Wei et al. (2022) "Emergent Abilities of Large Language Models"; Hoffmann et al. (2022) Chinchilla; established textbook knowledge in [[Natural Language Processing]] and [[Machine Learning]].
  - updated:: 2026-06-13
