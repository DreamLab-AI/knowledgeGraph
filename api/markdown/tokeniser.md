- ### Definition
  - A tokeniser is a preprocessing component that segments raw text into a sequence of discrete tokens — sub-words, words, or characters — and maps each token to an integer index in a fixed vocabulary, forming the input representation consumed by language model architectures. Modern tokenisers such as Byte Pair Encoding (BPE), WordPiece, and SentencePiece operate at the sub-word level to balance vocabulary coverage with sequence length, enabling models to handle arbitrary text including rare words and multiple languages without out-of-vocabulary failures.

- ### Semantic Classification
  - owl-class:: tokeniser:Tokeniser
  - owl-role:: Concept

- ### Relationships
  - requires [[Byte Pair Encoding]]
  - enables [[Large Language Models]]
  - enables [[Language Modeling]]
  - relatedTo [[Subword Tokenisation]]
  - relatedTo [[Token Embedding]]
  - relatedTo [[Embedding Model]]

- ### Content
  Tokenisation is the critical boundary between raw text and the numerical representations consumed by neural language models. The choice of tokenisation algorithm determines the vocabulary size, average token length, cross-lingual coverage, and downstream model performance. Byte Pair Encoding (BPE), introduced for neural machine translation and adopted by GPT-series models, greedily merges the most frequent byte or character pairs to build a fixed-size sub-word vocabulary. WordPiece, used in BERT, applies a similar strategy with a likelihood-maximisation objective. SentencePiece operates directly on raw Unicode without language-specific pre-tokenisation, making it language-agnostic and well-suited to multilingual models.

  Tokeniser vocabulary size is a key hyperparameter: small vocabularies produce long sequences that strain transformer attention windows, while large vocabularies increase embedding matrix size and reduce the frequency of sub-word training examples. Tying the tokeniser vocabulary to the model embedding layer is standard practice. Tokeniser fertility — the average number of tokens per word for a given language — varies substantially across scripts and directly affects multilingual model fairness.

  Specialised tokenisers have been developed for code (e.g. preserving indentation semantics) and mathematics (preserving operator precedence). Multimodal tokenisation — discretising images, audio, or video into token sequences analogous to text tokens — is an active research direction enabling unified cross-modal language model architectures.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z