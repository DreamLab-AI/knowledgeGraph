- ### Definition
  - A text encoder is a neural network component that maps raw text—after tokenisation—into dense, contextualised vector representations that capture semantic, syntactic, and relational information for use in downstream tasks. Transformer-based encoders such as BERT, RoBERTa, and ALBERT produce bidirectional contextual embeddings via masked language model pre-training, whilst CLIP's text tower produces contrastively aligned embeddings shared with a visual encoder. In generative image and video pipelines, the text encoder translates natural language prompts into conditioning vectors that guide the diffusion denoising process via cross-attention.

- ### Semantic Classification
  - owl-class:: text-encoder:Text Encoder
  - owl-role:: Concept

- ### Relationships
  - requires [[Tokeniser]]
  - requires [[Attention Mechanism]]
  - enables [[Image Generation]]
  - enables [[Video Generation]]
  - relatedTo [[Embedding Model]]
  - relatedTo [[CLIP]]
  - relatedTo [[Token Embedding]]

- ### Content
  A text encoder is the component of an NLP or multimodal AI system responsible for converting raw text into a continuous vector representation suitable for downstream neural processing. After tokenisation—which segments text into subword or word-piece units using algorithms such as Byte-Pair Encoding (BPE) or WordPiece—each token is embedded into a learned vector space and passed through one or more transformer encoder layers that apply self-attention to produce contextualised representations where each token's embedding reflects its meaning in context.

  BERT and its derivatives (RoBERTa, ALBERT, mBERT) are bidirectional encoders trained on masked language modelling and next sentence prediction objectives, producing representations widely used for sentence classification, named entity recognition, and semantic similarity. In contrastive multimodal models such as CLIP and ALIGN, a text encoder is jointly trained with a vision encoder so that semantically similar image-text pairs have nearby representations, enabling zero-shot image classification and cross-modal retrieval.

  In diffusion-based generative pipelines—including Stable Diffusion, DALL-E, and video generation models—the text encoder is the conduit through which natural language prompts influence image synthesis. Prompt tokens are encoded into a sequence of vectors that are passed as the key and value inputs to cross-attention layers within the diffusion U-Net or DiT backbone, allowing the model to attend to different aspects of the textual description at different spatial locations in the generated image. The quality and specificity of the text encoder significantly determines prompt adherence and the semantic accuracy of generated outputs.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z