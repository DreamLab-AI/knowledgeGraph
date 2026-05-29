public:: true

# Causal Language Modelling
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:causal-language-modelling",
  "@type": "Page",
  "vc:slug": "causal-language-modelling",
  "title": "Causal Language Modelling",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:causal-language-modelling",
  "@type": "Class",
  "label": "Causal Language Modelling",
  "definition": "Causal language modelling is a self-supervised pre-training objective in which a neural network learns to predict the next token in a sequence given all preceding tokens, modelling the joint probability of text as an autoregressive product of conditional distributions. The term 'causal' refers to the unidirectional (left-to-right) attention mask that enforces the temporal ordering of tokens, preventing the model from attending to future context. This objective is the foundation of decoder-only transformer architectures such as GPT, LLaMA, and Claude, which power the majority of state-of-the-art large language models.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:large-language-model-training", "label": "Large Language Model Training"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:attention-mechanism", "label": "Attention Mechanism"},
      {"@id": "urn:ngm:class:causal-attention", "label": "Causal Attention"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:gpt", "label": "GPT"},
      {"@id": "urn:ngm:class:chain-of-thought-prompting", "label": "Chain-of-Thought Prompting"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:in-context-learning", "label": "In-Context Learning"},
      {"@id": "urn:ngm:class:instruction-tuning", "label": "Instruction Tuning"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Causal language modelling is an autoregressive pre-training objective that trains a model to predict each token given only the tokens to its left. The "causal" label distinguishes this from masked (bidirectional) objectives like BERT, in which future and past context is available simultaneously. The model is trained by minimising negative log-likelihood over each token in the sequence using [[Causal Attention]], which applies a triangular mask to the [[Attention Mechanism]] to prevent information leakage. The resulting models — decoder-only transformers — become the backbone of modern [[Large Language Models]].

- ### Relationships
  - Causal language modelling is a sub-objective within the broader domain of [[Large Language Model Training]]. It relies on [[Causal Attention]] and the [[Attention Mechanism]] for efficient sequence modelling. Models trained with this objective, such as [[GPT]], naturally support [[In-Context Learning]] and can be further adapted via [[Instruction Tuning]]. The autoregressive nature of these models makes them the substrate for [[Chain-of-Thought Prompting]], where step-by-step reasoning is generated token-by-token.

- ### Content
  - Language modelling as a probabilistic objective predates deep learning, with n-gram models and feedforward neural language models (Bengio et al., 2003) establishing the core formulation. The shift to transformer architectures (Vaswani et al., 2017) dramatically improved the scalability of causal language modelling. GPT-1 (OpenAI, 2018) demonstrated that a large decoder-only transformer pre-trained with a causal objective could be fine-tuned to achieve strong performance across diverse NLP tasks, establishing the paradigm. GPT-2 and GPT-3 subsequently showed that scaling alone — without architectural changes — produced remarkable emergent capabilities.

  - The causal attention mask is the defining implementation detail. In a standard self-attention layer, every token can attend to every other token. The causal mask zeros out attention weights for positions j > i, so token i can only attend to tokens 0 through i. This enforces the autoregressive factorisation P(x₁,...,xₙ) = ∏ P(xᵢ | x₁,...,xᵢ₋₁). Training is computationally efficient because teacher forcing allows all next-token predictions to be computed in a single forward pass over the full sequence. The cross-entropy loss over all positions is averaged to yield the training objective, equivalent to minimising perplexity.

  - Causal language models have become the dominant paradigm for general-purpose AI assistants, code generation, and reasoning systems. The architecture is preferred over encoder-decoder or encoder-only designs because it supports open-ended generation without a fixed output length. Instruction tuning (fine-tuning on instruction–response pairs) and reinforcement learning from human feedback (RLHF) are applied on top of causal language model pre-training to align model behaviour with human preferences. Models such as LLaMA, Mistral, Falcon, and the Claude family all use decoder-only architectures trained with causal language modelling.

  - In 2024–2025, causal language modelling continues to be the standard pre-training objective for frontier models, though research explores hybrid objectives that combine causal and masked learning (e.g., fill-in-the-middle for code). Efficiency improvements — flash attention, grouped query attention, sliding window attention — have extended context lengths to hundreds of thousands of tokens while preserving the causal structure. Speculation about alternative architectures (state-space models, linear transformers) continues, but causal language modelling on transformer decoders remains entrenched as the industrial standard for [[Large Language Models]].

