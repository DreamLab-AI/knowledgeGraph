public:: true

# Large Language Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:large-language-model",
  "@type": "Page",
  "title": "Large Language Model",
  "vc:slug": "large-language-model",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:large-language-model",
  "@type": "Class",
  "label": "Large Language Model",
  "definition": "A large language model (LLM) is a deep neural network — almost universally based on the [[Transformer Architecture]] — trained via self-supervised next-token prediction on web-scale corpora of text (and often code, mathematics, and structured data), resulting in a system that assigns a probability distribution over token sequences and can generate coherent, contextually appropriate continuations. Scale — both in parameter count (billions to hundreds of billions) and training tokens (trillions) — is the defining characteristic that distinguishes LLMs from earlier, smaller language models, and is the proximate cause of qualitative capability jumps such as in-context learning, instruction following, chain-of-thought reasoning, and emergent generalisation across domains. LLMs are typically released as base pretrained models that are subsequently aligned to human preferences through supervised fine-tuning and reinforcement learning from human feedback, producing the instruction-following assistants widely deployed in consumer and enterprise applications. The paradigm has become the de facto foundation for natural language processing, code synthesis, autonomous agent planning, and multimodal AI systems.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:foundation-model", "label": "Foundation Model"}],
  "sameAs": [
    {"@id": "urn:ngm:class:language-model", "label": "Language Model"},
    {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:transformer-architecture", "label": "Transformer Architecture"},
      {"@id": "urn:ngm:class:attention-mechanism", "label": "Attention Mechanism"},
      {"@id": "urn:ngm:class:context-window", "label": "Context Window"},
      {"@id": "urn:ngm:class:embeddings", "label": "Embeddings"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:pretraining", "label": "Pretraining"},
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"},
      {"@id": "urn:ngm:class:compute-infrastructure", "label": "Compute Infrastructure"},
      {"@id": "urn:ngm:class:gpu-computing", "label": "GPU Computing"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:tokenisation", "label": "Tokenisation"},
      {"@id": "urn:ngm:class:reinforcement-learning-from-human-feedback", "label": "Reinforcement Learning from Human Feedback"},
      {"@id": "urn:ngm:class:instruction-tuning", "label": "Instruction Tuning"},
      {"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:text-generation", "label": "Text Generation"},
      {"@id": "urn:ngm:class:code-generation", "label": "Code Generation"},
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"},
      {"@id": "urn:ngm:class:conversational-ai", "label": "Conversational AI"},
      {"@id": "urn:ngm:class:ai-agent", "label": "AI Agent"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:self-supervised-learning", "label": "Self-Supervised Learning"},
      {"@id": "urn:ngm:class:scaling-laws", "label": "Scaling Laws"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:small-language-model", "label": "Small Language Model"},
      {"@id": "urn:ngm:class:recurrent-neural-network", "label": "Recurrent Neural Network"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine Tuning"},
      {"@id": "urn:ngm:class:mixture-of-experts", "label": "Mixture of Experts"},
      {"@id": "urn:ngm:class:quantisation", "label": "Quantisation"},
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:constitutional-ai-training-methodology", "label": "Constitutional AI Training Methodology"},
      {"@id": "urn:ngm:class:hallucination", "label": "Hallucination"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:multi-agent-system", "label": "Multi-Agent System"},
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:eu-ai-act-regulatory-instrument", "label": "EU AI Act Regulatory Instrument"}
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "GapFillAuthored"
  }
}
```

- ### Definition
  - A [[Large Language Model]] (LLM) is a [[Foundation Model]] trained via self-supervised next-token prediction on web-scale corpora, producing a deep neural network — almost universally a [[Transformer Architecture]] — capable of generating coherent, contextually appropriate text across an extraordinarily broad range of domains.
  - Scale is the defining feature: parameter counts in the billions to hundreds of billions and training on trillions of tokens produce qualitative capability jumps absent in smaller predecessors, including [[In-Context Learning]], instruction following, and emergent reasoning.
  - Base pretrained models are subsequently aligned through [[Instruction Tuning]] and [[Reinforcement Learning from Human Feedback]] to produce the instruction-following assistants deployed widely in consumer and enterprise contexts.
  - The paradigm now underpins virtually all contemporary [[Natural Language Processing]], [[Code Generation]], and [[AI Agent]] architectures.

- ### Overview
  - LLMs represent the convergence of three trends that crossed critical thresholds simultaneously: the [[Transformer Architecture]] providing a parallelisable, scalable compute primitive; massive increases in available training data from the web; and GPU/TPU hardware enabling previously infeasible training runs.
  - The term "large" is relative and has shifted over time — early GPT (2018, 117M parameters) was large by the standards of its era; frontier models as of 2025 operate at the scale of hundreds of billions of parameters and trillions of training tokens.
  - Scaling laws (empirically established by Kaplan et al. 2020 and refined by Hoffmann et al. 2022 — the Chinchilla result) show that model capability scales predictably as a power law with compute, parameter count, and data volume, enabling principled allocation of training budgets.
  - Emergent abilities — capabilities that appear abruptly as scale increases and are absent at smaller scale — have been observed for arithmetic, multi-step reasoning, and code generation, though the mechanism remains debated.
  - LLMs are the canonical instance of [[Foundation Model]]: a single large pretrained model that serves as the starting point for many downstream tasks via [[Fine Tuning]] or prompting.

- ### Key Components
  - **[[Transformer Architecture]]** — The dominant architectural substrate: stacked blocks of multi-head self-attention and feed-forward sub-layers, enabling parallel computation over full sequences and long-range dependency capture.
  - **[[Attention Mechanism]]** — Scaled dot-product attention computes, for each token, a weighted sum over all other tokens in the [[Context Window]], with weights derived from learned query-key interactions across multiple parallel heads.
  - **[[Embeddings]]** — Continuous dense vector representations mapping discrete token IDs into a high-dimensional latent space where geometric relationships encode semantic and syntactic structure.
  - **[[Tokenisation]]** — Byte-pair encoding (BPE) or SentencePiece algorithms decompose raw Unicode text into a fixed vocabulary of subword units, balancing coverage with sequence length; vocabulary sizes typically range from 32,000 to 256,000 tokens.
  - **[[Context Window]]** — The maximum number of tokens the model can attend over in a single forward pass. Has grown from 2,048 (GPT-2) to 128,000+ (GPT-4o, Gemini 1.5) to 1M+ tokens in recent systems via techniques such as RoPE, ALiBi, and sliding-window attention.
  - **Positional encoding** — Since self-attention is permutation-invariant, token order is injected explicitly via sinusoidal embeddings or learnable positional encodings; rotary positional embeddings (RoPE) have become dominant for long-context models.
  - **Vocabulary projection head** — A linear layer projecting the final hidden state of each token onto the vocabulary dimension, followed by softmax normalisation to produce the next-token probability distribution minimised against the training cross-entropy.

- ### Training Pipeline
  - #### Pretraining
    - [[Pretraining]] on a large, diverse [[Training Data]] corpus — typically a blend of web crawl data (Common Crawl), books, code repositories, scientific literature, and curated high-quality sources — using next-token prediction as the self-supervised objective.
    - Decoder-only autoregressive models (GPT family, [[Llama]], Mistral, Qwen) predict each token given all preceding tokens; encoder-only masked models (BERT family) predict masked tokens given bidirectional context.
    - [[Self-Supervised Learning]] removes the need for human annotation at pretraining scale; the model acquires world knowledge, linguistic structure, and reasoning patterns from distributional statistics alone.
    - [[Compute Infrastructure]] demands are extreme: frontier pretraining runs consume tens of thousands of [[GPU Computing]] accelerators over months, with energy consumption measured in gigawatt-hours.
    - [[Scaling Laws]] provide empirical guidance: compute-optimal runs allocate roughly equal scaling to model size and training tokens (Chinchilla: ~20 training tokens per parameter for a compute-optimal base model).

  - #### Alignment and Fine-Tuning
    - **Supervised Fine-Tuning (SFT)** — The pretrained base model is fine-tuned on curated instruction-response demonstrations produced by human annotators or distilled from stronger models, teaching the model to follow instructions and maintain a helpful conversational register.
    - **[[Reinforcement Learning from Human Feedback]] (RLHF)** — A reward model trained on human preference comparisons between model outputs is used to score generations; proximal policy optimisation (PPO) or direct preference optimisation (DPO) updates the language model policy to maximise expected reward, aligning outputs with human values.
    - **[[Constitutional AI]]** — An Anthropic technique that encodes a set of principles into the training loop, allowing the model to critique and revise its own outputs without relying solely on human annotators, improving scalability of alignment.
    - **Parameter-efficient fine-tuning** — LoRA (Low-Rank Adaptation), QLoRA, prefix tuning, and adapter layers reduce fine-tuning cost by updating a small fraction of parameters, enabling adaptation on consumer hardware.

  - #### Inference
    - Tokens are generated autoregressively: the model produces a probability distribution over the vocabulary at each step; a token is sampled via temperature scaling, top-p (nucleus) sampling, or beam search; the sampled token is appended to the context and the process repeats.
    - KV-cache stores previously computed key-value pairs across attention heads, amortising quadratic attention cost over the decoding sequence.
    - [[Quantisation]] (INT8, INT4, GPTQ, AWQ, GGUF) compresses weight precision to reduce memory footprint and increase throughput, enabling deployment on smaller accelerators or consumer GPUs.

- ### Architectural Variants
  - **Decoder-only autoregressive** — The dominant family for open-ended generation: GPT-4, [[Claude]], Llama 3, Mistral, Gemini, Qwen, Falcon, Command R. Attends only to past tokens via a causal mask.
  - **Encoder-only** — BERT, RoBERTa, DeBERTa; bidirectional context enables strong classification and embedding tasks but not open-ended generation. Still widely used for semantic search and [[Retrieval-Augmented Generation]] retrieval encoders.
  - **Encoder-decoder (seq2seq)** — T5, BART, [[mT5]]; suitable for translation, summarisation, and structured prediction; the encoder reads the full input bidirectionally and the decoder generates outputs autoregressively.
  - **[[Mixture of Experts]]** — Mixtral, DeepSeek-MoE, Grok: a router selects a sparse subset of expert sub-networks per token, scaling total parameter count while keeping active parameters (and compute) fixed per token. Enables trillion-parameter models without proportional inference cost.
  - **Multimodal LLMs** — GPT-4o, Gemini, [[Claude]], LLaVA, Qwen-VL extend the text backbone with vision encoders (CLIP, SigLIP) and audio/video tokenisers, enabling image, audio, and video understanding alongside text generation.

- ### Applications and Use Cases
  - **[[Conversational AI]]** — Chat assistants (ChatGPT, Claude, Gemini, Copilot) provide interactive question-answering, drafting, summarisation, and tutoring across consumer and enterprise contexts.
  - **[[Code Generation]]** — GitHub Copilot, Cursor, Codestral, StarCoder, and DeepSeek-Coder generate, complete, explain, and refactor code in dozens of programming languages, substantially accelerating software development workflows.
  - **[[Retrieval-Augmented Generation]]** — LLMs grounded with a retrieval system over a [[Knowledge Graph]] or document corpus reduce hallucination and extend effective knowledge to post-training facts, enabling accurate knowledge-intensive QA.
  - **[[AI Agent]] orchestration** — LLMs serve as the reasoning and planning backbone for autonomous agents that call tools, execute code, browse the web, and coordinate with other agents in [[Multi-Agent System]] architectures.
  - **[[Natural Language Processing]]** — Machine translation, named entity recognition, sentiment analysis, document classification, and information extraction pipelines increasingly rely on LLM feature extraction or fine-tuned heads.
  - **Scientific discovery** — Protein sequence modelling (ESM), drug discovery, literature synthesis, hypothesis generation, and experimental design assistance in biology, chemistry, and materials science.
  - **Legal and medical applications** — Contract review, clinical note summarisation, medical coding, regulatory document analysis; specialist fine-tuned variants (Med-PaLM, BioGPT) optimise for domain accuracy.
  - **Education and tutoring** — Personalised explanations, worked examples, Socratic dialogue, and automated feedback on student writing at scale.

- ### Risks and Limitations
  - **[[Hallucination]]** — LLMs generate plausible-sounding but factually incorrect content because they optimise for coherent token sequences rather than grounded truth; mitigation strategies include [[Retrieval-Augmented Generation]], grounding constraints, and uncertainty calibration.
  - **Bias and toxicity** — Training corpora reflect societal biases; without careful [[Instruction Tuning]] and safety filtering, models may produce harmful, discriminatory, or offensive outputs.
  - **[[AI Safety]]** concerns — Misalignment between model objectives and human values, susceptibility to adversarial prompting (jailbreaking), and potential for misuse in disinformation, cyberattacks, or automated harmful content generation.
  - **Environmental cost** — Frontier pretraining and large-scale inference impose substantial energy and water footprints; the field is investigating efficiency improvements via distillation, [[Quantisation]], and sparse models.
  - **Opacity and interpretability** — The internal representations and reasoning processes of LLMs remain poorly understood, complicating debugging, auditing, and regulatory compliance.
  - **Context window limits** — Despite rapid improvement, very long documents and multi-session memory remain challenges; retrieval and summarisation hierarchies partially compensate.

- ### Relationships
  - subClassOf:: [[Foundation Model]]
  - hasPart:: [[Transformer Architecture]]
  - hasPart:: [[Attention Mechanism]]
  - hasPart:: [[Context Window]]
  - hasPart:: [[Embeddings]]
  - requires:: [[Pretraining]]
  - requires:: [[Training Data]]
  - requires:: [[Compute Infrastructure]]
  - requires:: [[GPU Computing]]
  - uses:: [[Tokenisation]]
  - uses:: [[Reinforcement Learning from Human Feedback]]
  - uses:: [[Instruction Tuning]]
  - uses:: [[Prompt Engineering]]
  - enables:: [[Text Generation]]
  - enables:: [[Code Generation]]
  - enables:: [[Retrieval-Augmented Generation]]
  - enables:: [[Conversational AI]]
  - enables:: [[AI Agent]]
  - enables:: [[Natural Language Processing]]
  - dependsOn:: [[Self-Supervised Learning]]
  - dependsOn:: [[Scaling Laws]]
  - contrastsWith:: [[Small Language Model]]
  - contrastsWith:: [[Recurrent Neural Network]]
  - relatedTo:: [[Fine Tuning]]
  - relatedTo:: [[Mixture of Experts]]
  - relatedTo:: [[Quantisation]]
  - relatedTo:: [[AI Safety]]
  - relatedTo:: [[Constitutional AI]]
  - relatedTo:: [[Hallucination]]
  - bridgesTo:: [[Multi-Agent System]]
  - bridgesTo:: [[Knowledge Graph]]
  - bridgesTo:: [[EU AI Act Regulatory Instrument]]

- ### Standards & Context
  - The [[EU AI Act Regulatory Instrument]] (2024) classifies general-purpose AI models (GPAIs) above a training compute threshold of 10²⁵ FLOPs as "systemic-risk" systems subject to mandatory transparency, incident reporting, and adversarial testing obligations; frontier LLMs fall squarely within scope.
  - NIST AI Risk Management Framework (AI RMF 1.0, 2023) provides voluntary governance guidance applicable to LLM deployment, covering identification, measurement, and mitigation of AI-related risks.
  - Model cards (Mitchell et al.) and datasheets for datasets (Gebru et al.) are community norms for documenting intended use, limitations, evaluation results, and training data provenance, adopted by major LLM providers.
  - The Chinchilla scaling laws (Hoffmann et al., 2022) and Kaplan et al. (2020) power-law scaling results are the empirical foundation for compute-budget allocation decisions in frontier training runs.
  - Responsible Scaling Policies (Anthropic ASL, OpenAI Preparedness Framework) establish voluntary capability thresholds that trigger additional safety evaluations before continued scaling.

- ### Provenance
  - sources:: Vaswani et al. (2017) "Attention Is All You Need"; Radford et al. GPT-2 (2019) and Brown et al. GPT-3 (2020); Hoffmann et al. (2022) "Training Compute-Optimal Large Language Models" (Chinchilla); Ouyang et al. (2022) "Training language models to follow instructions with human feedback"; Touvron et al. Llama 1 & 2 (2023); established knowledge in [[Natural Language Processing]], [[Machine Learning]], and [[AI Safety]] literature; EU AI Act official text (2024).
  - updated:: 2026-06-13
