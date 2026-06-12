public:: true

# Transformer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:695e15dfc8ba55fcdf2e9ff51f22547244c6b9499a1ca2889c186d4b46e6e6a2",
  "@type": "Page",
  "vc:slug": "transformer",
  "title": "Transformer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:aigrounded-domain",
      "vc:label": "AIGroundedDomain"
    },
    {
      "@id": "urn:visionflow:linked:foundation-model",
      "vc:label": "Foundation Model"
    },
    {
      "@id": "urn:visionflow:linked:foundation-model",
      "vc:label": "Foundation Model"
    },
    {
      "@id": "urn:visionflow:linked:hugging-face",
      "vc:label": "Hugging Face"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-22989",
      "vc:label": "ISO/IEC 22989"
    },
    {
      "@id": "urn:visionflow:linked:large-language-model",
      "vc:label": "Large Language Model"
    },
    {
      "@id": "urn:visionflow:linked:large-language-model",
      "vc:label": "Large Language Model"
    },
    {
      "@id": "urn:visionflow:linked:nist-ai-600-1",
      "vc:label": "NIST AI 600-1"
    },
    {
      "@id": "urn:visionflow:linked:py-torch",
      "vc:label": "PyTorch"
    },
    {
      "@id": "urn:visionflow:linked:tensor-flow",
      "vc:label": "TensorFlow"
    },
    {
      "@id": "urn:visionflow:linked:vaswani-et-al-2017",
      "vc:label": "Vaswani et al. 2017"
    },
    {
      "@id": "urn:visionflow:owl:class:attention-mechanism",
      "vc:label": "Attention Mechanism"
    },
    {
      "@id": "urn:visionflow:owl:class:bert",
      "vc:label": "BERT"
    },
    {
      "@id": "urn:visionflow:owl:class:convolutional-neural-network",
      "vc:label": "Convolutional Neural Network"
    },
    {
      "@id": "urn:visionflow:owl:class:eu-ai-act",
      "vc:label": "EU AI Act"
    },
    {
      "@id": "urn:visionflow:owl:class:gpt",
      "vc:label": "GPT"
    },
    {
      "@id": "urn:visionflow:owl:class:recurrent-neural-network",
      "vc:label": "Recurrent Neural Network"
    },
    {
      "@id": "urn:visionflow:owl:class:self-attention",
      "vc:label": "Self Attention"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0037"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Transformer"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:transformer",
  "@type": "Class",
  "label": "Transformer",
  "definition": "A neural network architecture that relies on self-attention mechanisms rather than recurrence or convolution to process sequential data in parallel, serving as the foundation for modern large language models including GPT, BERT, and their successors.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-model-architecture",
      "label": "AI Model Architecture"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:large-scale-pretrained-foundation-model",
        "label": "Foundation Model"
      },
      {
        "@id": "urn:ngm:class:bert",
        "label": "BERT"
      },
      {
        "@id": "urn:ngm:class:gpt",
        "label": "GPT"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:large-scale-pretrained-foundation-model",
        "label": "Foundation Model"
      },
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      },
      {
        "@id": "urn:ngm:class:self-attention",
        "label": "Self Attention"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:transformers",
      "label": "Transformers"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:transformer:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:695e15dfc8ba55fcdf2e9ff51f22547244c6b9499a1ca2889c186d4b46e6e6a2"
  },
  "vc:resolutions": [
    {
      "raw": "[[AIGroundedDomain]]",
      "resolved": "urn:visionflow:linked:aigrounded-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Foundation Model]]",
      "resolved": "urn:visionflow:linked:foundation-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[Foundation Model|Foundation models]]",
      "resolved": "urn:visionflow:linked:foundation-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[Hugging Face]]",
      "resolved": "urn:visionflow:linked:hugging-face",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 22989]]",
      "resolved": "urn:visionflow:linked:iso-iec-22989",
      "kind": "StubLink"
    },
    {
      "raw": "[[Large Language Model]]",
      "resolved": "urn:visionflow:linked:large-language-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[Large Language Model|LLMs]]",
      "resolved": "urn:visionflow:linked:large-language-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST AI 600-1]]",
      "resolved": "urn:visionflow:linked:nist-ai-600-1",
      "kind": "StubLink"
    },
    {
      "raw": "[[PyTorch]]",
      "resolved": "urn:visionflow:linked:py-torch",
      "kind": "StubLink"
    },
    {
      "raw": "[[TensorFlow]]",
      "resolved": "urn:visionflow:linked:tensor-flow",
      "kind": "StubLink"
    },
    {
      "raw": "[[Vaswani et al. 2017]]",
      "resolved": "urn:visionflow:linked:vaswani-et-al-2017",
      "kind": "StubLink"
    },
    {
      "raw": "[[Attention Mechanism]]",
      "resolved": "urn:visionflow:owl:class:attention-mechanism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[BERT]]",
      "resolved": "urn:visionflow:owl:class:bert",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Convolutional Neural Network]]",
      "resolved": "urn:visionflow:owl:class:convolutional-neural-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[EU AI Act Regulatory Instrument]]",
      "resolved": "urn:visionflow:owl:class:eu-ai-act",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[GPT]]",
      "resolved": "urn:visionflow:owl:class:gpt",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Recurrent Neural Network]]",
      "resolved": "urn:visionflow:owl:class:recurrent-neural-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Self Attention]]",
      "resolved": "urn:visionflow:owl:class:self-attention",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A neural network architecture that relies on self-attention mechanisms rather than recurrence or convolution to process sequential data in parallel, serving as the foundation for modern large language models including GPT, BERT, and their successors.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Transformer
  - owl-role:: Concept
  - belongs-to-domain:: [[AIGroundedDomain]]

- ### Relationships
  - related-to:: [[Large Language Model]], [[Attention Mechanism]], [[Foundation Model]], [[Self Attention]]
  - preceded-by:: [[Recurrent Neural Network]], [[Convolutional Neural Network]]
  - enables:: [[BERT]], [[GPT]], [[Foundation Model]]
  - implemented-in:: [[PyTorch]], [[TensorFlow]], [[Hugging Face]]

- ### Content

  ## Definition

  A Transformer is a neural network architecture introduced in the 2017 paper "Attention Is All You Need" (Vaswani et al.) that relies entirely on self-attention mechanisms rather than recurrence or convolution to process entire sequences in parallel. The architecture enables efficient training on large datasets and serves as the foundation for most modern large language models.

  ## Core Architecture

  ### Self-Attention Mechanism

  Self-attention allows each position in a sequence to attend to all other positions, capturing long-range dependencies without the sequential processing bottleneck of recurrent networks. For each element in the input sequence, the mechanism computes:

  - **Query (Q)**: What the current position is looking for
  - **Key (K)**: What each position offers to other positions
  - **Value (V)**: The actual content to aggregate based on attention scores

  Attention scores are computed as: `Attention(Q, K, V) = softmax(QK^T / sqrt(d_k)) V`

  ### Multi-Head Attention

  Multiple attention heads operate in parallel, each learning different relationship patterns across the sequence. Outputs from all heads are concatenated and projected, allowing the model to jointly attend to information from different representational subspaces.

  ### Encoder-Decoder Structure

  The original Transformer uses a symmetric encoder-decoder design:

  **Encoder**: Processes the input sequence through stacked self-attention and feed-forward layers, producing contextual representations. Each encoder layer contains:
  - Multi-head self-attention sublayer
  - Position-wise feed-forward network
  - Layer normalisation and residual connections

  **Decoder**: Generates output tokens autoregressively, attending to both prior output tokens (masked self-attention) and encoder representations (cross-attention). Each decoder layer contains:
  - Masked multi-head self-attention
  - Multi-head cross-attention over encoder output
  - Position-wise feed-forward network
  - Layer normalisation and residual connections

  ### Positional Encoding

  Because the architecture processes all positions simultaneously, positional information must be injected explicitly via positional encodings (sinusoidal in the original design, or learned embeddings in later variants).

  ## Key Variants

  ### Encoder-Only (BERT-style)
  - Processes entire input sequence bidirectionally
  - Optimal for classification, named entity recognition, question answering
  - Examples: BERT, RoBERTa, DeBERTa, ALBERT

  ### Decoder-Only (GPT-style)
  - Generates tokens autoregressively, attending only to prior tokens (causal masking)
  - Optimal for text generation, completion, instruction following
  - Examples: GPT-2, GPT-3, GPT-4, LLaMA, Mistral, Claude

  ### Encoder-Decoder (T5-style)
  - Full encoder-decoder architecture for sequence-to-sequence tasks
  - Optimal for translation, summarisation, dialogue
  - Examples: T5, BART, mT5

  ## Relationship to Large Language Models

  [[Large Language Model|LLMs]] are built on the Transformer decoder-only or encoder-decoder architecture trained at scale on massive text corpora. The Transformer's ability to parallelise training across entire sequences (unlike RNNs) made it possible to scale to billions of parameters. Key scaling properties:

  - **Parameter count**: Scales with model depth and width (attention head dimension × heads × layers)
  - **Compute**: Training compute scales as O(n^2 d) per layer where n is sequence length and d is model dimension
  - **Emergent capabilities**: Sufficiently large Transformers exhibit in-context learning, chain-of-thought reasoning, and multi-step instruction following not present in smaller models

  ## Relationship to Foundation Models

  [[Foundation Model|Foundation models]] use the Transformer architecture pre-trained on broad data as a generalised base for downstream tasks. The Transformer enables foundation modelling because:
  - Unified architecture applicable across modalities (text, image, audio, video, protein sequences)
  - Self-supervised pre-training objectives (masked language modelling, next-token prediction) can leverage unlabelled data at internet scale
  - Fine-tuning and prompt-based adaptation transfer pre-trained representations to specialised tasks efficiently

  ## Standards Alignment

  - **ISO/IEC 22989:2022**: AI concepts and terminology, covering neural network architectures
  - **NIST AI 600-1**: GenAI Profile, technical foundation for Transformer-based LLM systems
  - **EU AI Act Articles 52-53**: Transparency requirements for Transformer-based generative AI systems
  - **EU AI Act Article 51**: General-purpose AI model classification relevant to large Transformer models

  ## Comparison to Predecessor Architectures

  | Aspect | RNN/LSTM | CNN | Transformer |
  |--------|----------|-----|-------------|
  | Sequence processing | Sequential | Local windows | Parallel (full sequence) |
  | Long-range dependencies | Degrades with distance | Limited by kernel size | Direct via attention |
  | Training parallelism | Poor | Moderate | Excellent |
  | Computational complexity | O(n) per step | O(n log n) | O(n^2) per layer |
  | Dominant use case (2025) | Legacy systems | Computer vision (partial) | NLP, multimodal, science |

  ## Current Landscape (2025)

  Transformers dominate research and industry applications across domains:
  - **Natural language**: GPT-4, Claude, Gemini, LLaMA 3 all use decoder-only Transformer architectures
  - **Vision**: Vision Transformers (ViT) apply the architecture to image patch sequences
  - **Multimodal**: Unified Transformer architectures process text, images, audio, and video jointly
  - **Science**: AlphaFold uses Transformers for protein structure prediction; similar approaches apply in drug discovery and materials science
  - **Robotics**: Transformer-based policies (RT-2, Pi0) enable generalised robot manipulation

  Alternatives such as state-space models (Mamba) show promise for efficiency at long sequence lengths but have not displaced Transformers as the dominant architecture for capability-critical applications as of 2025.

  ## Challenges and Limitations

  - **Quadratic attention complexity**: O(n^2) with sequence length limits context windows without approximations (sparse attention, linear attention variants)
  - **Computational cost**: Large-scale training requires significant GPU cluster resources and energy
  - **Interpretability**: Attention patterns are not reliably interpretable as explanations of model reasoning
  - **Data requirements**: High-quality pre-training data at scale required for capable models

  ## References

  1. Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, L., & Polosukhin, I. (2017). Attention Is All You Need. *Advances in Neural Information Processing Systems*, 30.
  2. Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2019). BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding. *NAACL-HLT 2019*.
  3. Brown, T. B., et al. (2020). Language Models are Few-Shot Learners. *Advances in Neural Information Processing Systems*, 33.
  4. NIST AI 600-1: Artificial Intelligence Risk Management Framework for Generative AI.
  5. ISO/IEC 22989:2022: Information technology — Artificial intelligence — AI concepts and terminology.

- ### Provenance
  - sources:: [[Vaswani et al. 2017]], [[ISO/IEC 22989]], [[NIST AI 600-1]], [[EU AI Act Regulatory Instrument]]
  - migration-date:: 2026-04-26T00:00:00Z
