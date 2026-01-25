- ### OntologyBlock
  id:: attentionmechanism-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: NGM-7006
	- preferred-term:: AttentionMechanism
	- source-domain:: ngm
	- status:: active
	- public-access:: true
	- definition:: A machine learning technique that enables deep learning models to dynamically focus on the most relevant parts of input data by computing attention weights that reflect the relative importance of each element in a sequence. Central to the Transformer architecture introduced in the seminal 2017 paper "Attention Is All You Need," attention mechanisms replaced recurrence with parallel self-attention layers, revolutionizing natural language processing and enabling modern large language models.
	- maturity:: complete
	- owl:class:: ngm:Attentionmechanism
	- owl:role:: Concept
	- belongsToDomain:: [[Artificial Intelligence]]

### Relationships
- is-subclass-of:: [[Deep Learning]]
- related-to:: [[Transformer Architecture]], [[NaturalLanguageProcessing]], [[Large language models]]
- enables:: [[Self-Attention]], [[Multi-Head Attention]], [[Contextual Embeddings]]
- used-by:: [[GPT]], [[BERT]], [[Stable Diffusion]], [[DALL-E]]

## Technical Details

### Self-Attention Mechanism
Self-attention enables a model to attend to different positions within its own input sequence to compute a representation. Each element computes query, key, and value vectors, with attention weights determined by the dot product of queries and keys. This allows the model to capture global dependencies regardless of distance between tokens.

### Multi-Head Attention
Multi-head attention runs multiple self-attention operations in parallel, each with separate learned query, key, and value matrices. This enables the model to attend to information from different representation subspaces at different positions, capturing richer semantic relationships. The outputs are concatenated and linearly transformed.

### Scaled Dot-Product Attention
The core computation: Attention(Q,K,V) = softmax(QK^T / sqrt(d_k)) * V, where scaling by sqrt(d_k) prevents softmax saturation for large dimension values.

### Advantages Over RNNs
- No sequential dependencies enabling full parallelization
- Equal access to any position in the sequence (no information decay)
- Reduced training time compared to LSTMs
- Better capture of long-range dependencies

## Applications

- **Large Language Models**: GPT-4, Claude, Gemini, LLaMA all use transformer attention
- **Image Generation**: DALL-E, Stable Diffusion 3, Sora use attention for visual understanding
- **Speech Recognition**: Whisper and modern ASR systems
- **Computer Vision**: Vision Transformers (ViT) apply attention to image patches
- **Multimodal AI**: Cross-attention enables fusion of text, image, and audio modalities

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched from research
- **References**: 9 pages reference this concept
- **Sources**: [IBM](https://www.ibm.com/think/topics/attention-mechanism), [Wikipedia](https://en.wikipedia.org/wiki/Attention_(machine_learning)), [Sebastian Raschka](https://sebastianraschka.com/blog/2023/self-attention-from-scratch.html)
