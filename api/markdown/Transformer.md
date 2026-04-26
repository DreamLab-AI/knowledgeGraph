iri:: http://narrativegoldmine.com/artificial-intelligence#Transformer
uri:: urn:visionclaw:concept:artificial-intelligence:transformer
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:artificial-intelligence:transformer
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: artificial-intelligence
preferred-term:: Transformer
content-hash:: sha256-12-cacdeecf1964
legacy-term-id:: AI-0037
status:: draft
maturity:: draft
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - A neural network architecture that relies on self-attention mechanisms rather than recurrence or convolution to process sequential data in parallel, serving as the foundation for modern large language models including GPT, BERT, and their successors.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Transformer
  - owl-role:: Concept
  - belongs-to-domain:: [[AIGroundedDomain]]

- ### Relationships
  - related-to:: [[Large Language Model]], [[Attention Mechanism]], [[Foundation Model]], [[Self-Attention]]
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
  - sources:: [[Vaswani et al. 2017]], [[ISO/IEC 22989]], [[NIST AI 600-1]], [[EU AI Act]]
  - migration-date:: 2026-04-26T00:00:00Z
