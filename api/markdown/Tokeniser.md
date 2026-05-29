public:: true

# tokeniser
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:91361dd85595bcd8a240f49ad7ab509f1a684650317bd1a5b24e14c62189a271",
  "@type": "Page",
  "vc:slug": "tokeniser",
  "title": "tokeniser",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tokeniser",
  "@type": "Class",
  "label": "Tokeniser",
  "definition": "A tokeniser is a preprocessing component that segments raw text into a sequence of discrete tokens — sub-words, words, or characters — and maps each token to an integer index in a fixed vocabulary, forming the input representation consumed by language model architectures. Modern tokenisers such as Byte Pair Encoding (BPE), WordPiece, and SentencePiece operate at the sub-word level to balance vocabulary coverage with sequence length, enabling models to handle arbitrary text including rare words and multiple languages without out-of-vocabulary failures.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:byte-pair-encoding", "label": "Byte Pair Encoding"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:language-modeling", "label": "Language Modeling"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:subword-tokenisation", "label": "Subword Tokenisation"},
      {"@id": "urn:ngm:class:token-embedding", "label": "Token Embedding"},
      {"@id": "urn:ngm:class:embedding-model", "label": "Embedding Model"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


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
