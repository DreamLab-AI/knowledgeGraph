public:: true

# Autoregressive Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b6f0cecc5184d5dda9bdea6049fcb6b58ad6cd3e792003f96f57b5f9130c525e",
  "@type": "Page",
  "vc:slug": "autoregressive-model",
  "title": "Autoregressive Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:probabilistic-model",
      "vc:label": "Probabilistic Model"
    },
    {
      "@id": "urn:visionflow:linked:language-model",
      "vc:label": "Language Model"
    },
    {
      "@id": "urn:visionflow:linked:transformer",
      "vc:label": "Transformer"
    },
    {
      "@id": "urn:visionflow:linked:generative-model",
      "vc:label": "Generative Model"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Autoregressive Model"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:autoregressive-model",
  "@type": "Class",
  "label": "Autoregressive Model",
  "definition": "An autoregressive model generates sequences by predicting each element conditioned on all previously generated elements, thereby factorising the joint probability distribution of a sequence into an ordered product of conditional distributions via the chain rule of probability. This approach yields exact log-likelihoods and a straightforward maximum-likelihood training objective, making it the dominant paradigm for large language models, neural audio synthesis, and image generation. Inference is inherently sequential — each token must be sampled before the next can be computed — creating a fundamental latency trade-off relative to parallel decoding strategies. Modern architectures such as the Transformer exploit masked self-attention to parallelise training while preserving the strictly left-to-right conditional structure at inference time.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:generative-model",
      "label": "Generative Model"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:ar-model",
      "label": "AR Model"
    },
    {
      "@id": "urn:ngm:class:causal-language-model",
      "label": "Causal Language Model"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:probabilistic-model",
        "label": "Probabilistic Model"
      },
      {
        "@id": "urn:ngm:class:tokenisation",
        "label": "Tokenisation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:language-model",
        "label": "Language Model"
      },
      {
        "@id": "urn:ngm:class:text-generation",
        "label": "Text Generation"
      },
      {
        "@id": "urn:ngm:class:image-generation",
        "label": "Image Generation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      },
      {
        "@id": "urn:ngm:class:self-attention",
        "label": "Masked Self-Attention"
      },
      {
        "@id": "urn:ngm:class:cross-entropy-loss",
        "label": "Cross-Entropy Loss"
      },
      {
        "@id": "urn:ngm:class:softmax",
        "label": "Softmax"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
      },
      {
        "@id": "urn:ngm:class:variational-autoencoder",
        "label": "Variational Autoencoder"
      },
      {
        "@id": "urn:ngm:class:masked-language-model",
        "label": "Masked Language Model"
      },
      {
        "@id": "urn:ngm:class:flow-based-model",
        "label": "Flow-Based Model"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:maximum-likelihood-estimation",
        "label": "Maximum Likelihood Estimation"
      },
      {
        "@id": "urn:ngm:class:teacher-forcing",
        "label": "Teacher Forcing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:recurrent-neural-network",
        "label": "Recurrent Neural Network"
      },
      {
        "@id": "urn:ngm:class:next-token-prediction",
        "label": "Next-Token Prediction"
      },
      {
        "@id": "urn:ngm:class:beam-search",
        "label": "Beam Search"
      },
      {
        "@id": "urn:ngm:class:speculative-decoding",
        "label": "Speculative Decoding"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:reinforcement-learning-from-human-feedback",
        "label": "Reinforcement Learning from Human Feedback"
      },
      {
        "@id": "urn:ngm:class:multimodal-ai-architecture-ai",
        "label": "Multimodal AI"
      }
    ]
  },
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:autoregressive-model:fcc227515c0f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b6f0cecc5184d5dda9bdea6049fcb6b58ad6cd3e792003f96f57b5f9130c525e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Probabilistic Model]]",
      "resolved": "urn:visionflow:linked:probabilistic-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Language Model]]",
      "resolved": "urn:visionflow:linked:language-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transformer]]",
      "resolved": "urn:visionflow:linked:transformer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative Model]]",
      "resolved": "urn:visionflow:linked:generative-model",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - An autoregressive model is a [[Generative Model]] that produces sequences by predicting each element conditioned on all previously generated elements, factorising the joint probability over a sequence into an ordered product of conditionals via the [[Chain Rule of Probability]]. This is the foundational principle behind [[Language Model]] architectures such as GPT-style [[Transformer]] networks, as well as autoregressive systems for audio and image generation. The approach provides exact log-likelihoods and a tractable [[Maximum Likelihood Estimation]] objective, in contrast to latent-variable generative frameworks such as [[Variational Autoencoder]] or [[Diffusion Model]] which approximate posteriors or reverse stochastic processes.

- ### Overview
  - Autoregressive models define a probability distribution over sequences x = (x₁, x₂, …, xₙ) as:
    - P(x) = ∏ᵢ P(xᵢ | x₁, …, xᵢ₋₁)
  - This factorisation is always valid by the chain rule and places no independence assumptions on the data.
  - **Why it matters**
    - Provides exact likelihood evaluation, unlike [[Variational Autoencoder]] (evidence lower bound) or [[Generative Adversarial Network]] (no explicit density).
    - Simple training objective: minimise [[Cross-Entropy Loss]] between predicted and actual next tokens, equivalent to maximising log-likelihood.
    - Scales extremely well — larger models trained on more data consistently improve, as evidenced by GPT-style [[Large Language Model]] scaling laws.
  - **Core trade-off**
    - Training is fully parallelisable via [[Masked Self-Attention]] (each position attends only to past positions).
    - Inference is strictly sequential: token tᵢ cannot be sampled until tᵢ₋₁ is known, limiting throughput for long sequences.
    - Techniques such as [[Speculative Decoding]] and [[Key-Value Cache]] partially mitigate inference latency.

- ### Key Mechanisms
  - **Chain-rule factorisation** — the joint probability is expressed as an ordered product of conditionals; no approximation is introduced.
  - **[[Teacher Forcing]]** — during training, ground-truth tokens are fed as context rather than model-generated predictions, stabilising gradient flow.
  - **[[Masked Self-Attention]]** — in [[Transformer]] decoders, a causal mask prevents each position from attending to future positions, enforcing the autoregressive constraint while preserving full parallelism across the training batch.
  - **[[Tokenisation]]** — raw text (or audio frames, image patches) is first mapped to a discrete vocabulary; the autoregressive model operates over token indices. Choice of [[Byte-Pair Encoding]] or similar tokeniser directly affects model capacity requirements.
  - **[[Softmax]] output head** — the model produces a probability distribution over vocabulary entries at each step; sampling strategies (greedy, top-k, nucleus / top-p) determine which token is selected.
  - **[[Cross-Entropy Loss]]** — the standard training objective; equivalent to minimising the KL divergence between the empirical data distribution and the model distribution.
  - **[[Key-Value Cache]]** — at inference time, previously computed key and value projections are cached so each new token incurs only O(n) rather than O(n²) computation.

- ### Architectures
  - **[[Transformer]] (decoder-only)** — dominant architecture for text (GPT series, LLaMA, Mistral, Falcon). Uses [[Masked Self-Attention]] and [[Feed-Forward Network]] layers. Pre-trained with next-token prediction then fine-tuned with [[Reinforcement Learning from Human Feedback]].
  - **[[Recurrent Neural Network]] (RNN/LSTM)** — historical precursor; processes sequences step-by-step with a hidden state. Superseded by Transformers for most tasks but still used in resource-constrained or streaming settings.
  - **[[WaveNet]]** — convolutional autoregressive model for raw audio waveforms; generates audio sample-by-sample at high fidelity using dilated causal convolutions.
  - **PixelCNN / PixelRNN** — autoregressive models for images, generating pixels in raster-scan order; foundational work demonstrating the viability of autoregressive generation for 2D data.
  - **[[Flow Matching]] with autoregressive priors** — hybrid approaches combining continuous normalising flows with discrete autoregressive token priors.

- ### Applications and Use Cases
  - **[[Large Language Model]] pre-training** — GPT-style models are trained autoregressively on internet-scale text corpora; the resulting representations transfer to downstream tasks via [[Prompt Engineering]] or fine-tuning.
  - **[[Text Generation]]** — story generation, code completion (GitHub Copilot, Claude Code), summarisation, translation; all use autoregressive decoding at inference.
  - **[[Neural Audio Synthesis]]** — WaveNet and its successors (WaveGlow, SoundStream) use autoregressive or semi-autoregressive decoding to produce high-fidelity speech and music.
  - **[[Image Generation]]** — PixelCNN-based models, and more recently autoregressive transformers operating on discrete image tokens (DALL-E v1, VQ-VAE + transformer), produce images by predicting tokens in sequence.
  - **[[Protein Structure Prediction]]** — autoregressive models generate amino-acid sequences with specific structural properties; used in directed protein evolution.
  - **[[Code Generation]]** — decoder-only transformer models (Codex, StarCoder, CodeLlama) autoregressively generate syntactically valid code by conditioning on a prompt.
  - **[[Time Series Forecasting]]** — classical ARIMA models are linear autoregressive; deep autoregressive networks (DeepAR, Temporal Fusion Transformer) extend this to non-linear high-dimensional forecasting.
  - **[[Multimodal AI]]** — autoregressive transformers that jointly model text and image tokens (GPT-4V, Gemini, LLaVA) unify vision and language understanding under a single next-token prediction objective.

- ### Decoding Strategies
  - **Greedy decoding** — select the highest-probability token at each step; fast but prone to repetition and suboptimal global sequences.
  - **[[Beam Search]]** — maintain k candidate sequences simultaneously, pruning at each step; improves quality for structured outputs such as translation.
  - **Top-k sampling** — sample from the k most probable tokens; controls diversity vs coherence.
  - **Nucleus (top-p) sampling** — sample from the smallest set of tokens whose cumulative probability exceeds p; adaptive equivalent of top-k.
  - **Temperature scaling** — divide logits by temperature T before softmax; T<1 sharpens the distribution, T>1 flattens it.
  - **[[Speculative Decoding]]** — a small draft model proposes multiple tokens, which a larger verifier model accepts or rejects in parallel; achieves near-lossless speedup of 2–4× on long-context generation.

- ### Relationships
  - subClassOf:: [[Generative Model]]
  - requires:: [[Probabilistic Model]]
  - requires:: [[Chain Rule of Probability]]
  - requires:: [[Tokenisation]]
  - enables:: [[Language Model]]
  - enables:: [[Text Generation]]
  - enables:: [[Neural Audio Synthesis]]
  - enables:: [[Image Generation]]
  - uses:: [[Transformer]]
  - uses:: [[Masked Self-Attention]]
  - uses:: [[Cross-Entropy Loss]]
  - uses:: [[Softmax]]
  - implements:: [[Maximum Likelihood Estimation]]
  - implements:: [[Teacher Forcing]]
  - contrastsWith:: [[Diffusion Model]]
  - contrastsWith:: [[Variational Autoencoder]]
  - contrastsWith:: [[Masked Language Model]]
  - contrastsWith:: [[Flow-Based Model]]
  - relatedTo:: [[Recurrent Neural Network]]
  - relatedTo:: [[Next-Token Prediction]]
  - relatedTo:: [[Beam Search]]
  - relatedTo:: [[Speculative Decoding]]
  - bridges-to:: [[Reinforcement Learning from Human Feedback]]
  - bridges-to:: [[Multimodal AI]]

- ### Standards and Context
  - No formal standards body governs autoregressive model design; practice is established through reproducible research published at NeurIPS, ICML, ICLR, and ACL.
  - Key foundational papers include the original [[Transformer]] paper (Vaswani et al., 2017) and the GPT series from OpenAI, which established the paradigm of large-scale autoregressive pre-training followed by task-specific adaptation.
  - [[Responsible AI]] considerations are significant: autoregressive models can reproduce training-data memorisation, generate harmful content, and exhibit [[Hallucination]] — motivating alignment work via [[Reinforcement Learning from Human Feedback]] and [[Constitutional AI]].
  - Evaluation benchmarks include perplexity on held-out text (intrinsic), and downstream benchmarks (MMLU, HellaSwag, HumanEval for code, MT-Bench for instruction-following).
  - Efficiency research addresses the sequential inference bottleneck: [[Flash Attention]], [[Key-Value Cache]], grouped-query attention, and [[Speculative Decoding]] are now standard components in production deployments.

- ### Provenance
  - sources:: Vaswani et al. (2017) "Attention Is All You Need"; Brown et al. (2020) "Language Models are Few-Shot Learners"; van den Oord et al. (2016) "WaveNet"; van den Oord et al. (2016) "Pixel Recurrent Neural Networks"
  - updated:: 2026-06-13
