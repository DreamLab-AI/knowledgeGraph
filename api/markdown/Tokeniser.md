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
  "definition": "A tokeniser is a preprocessing component that segments raw text into a sequence of discrete tokens — sub-words, words, or characters — and maps each token to an integer identifier in a fixed vocabulary, forming the numerical input representation consumed by language model architectures. Modern sub-word tokenisers such as Byte Pair Encoding (BPE), WordPiece, and SentencePiece balance vocabulary coverage with sequence length efficiency, enabling models to handle arbitrary Unicode text including rare words, multilingual content, and specialised domains without out-of-vocabulary failures. The tokeniser vocabulary and its associated embedding matrix are co-trained with the model and constitute a foundational design decision that governs sequence length, memory footprint, and cross-lingual fairness. Multimodal extensions of tokenisation discretise images, audio, and video frames into token sequences analogous to text tokens, enabling unified cross-modal architectures.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:natural-language-processing",
      "label": "Natural Language Processing"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:lexer",
      "label": "Lexer"
    },
    {
      "@id": "urn:ngm:class:text-tokeniser",
      "label": "Text Tokeniser"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:byte-pair-encoding",
        "label": "Byte Pair Encoding"
      },
      {
        "@id": "urn:ngm:class:word-piece",
        "label": "WordPiece"
      },
      {
        "@id": "urn:ngm:class:sentence-piece",
        "label": "SentencePiece"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing Pipeline"
      },
      {
        "@id": "urn:ngm:class:pre-training",
        "label": "Language Model Pre-Training"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:vocabulary",
        "label": "Vocabulary"
      },
      {
        "@id": "urn:ngm:class:unicode-normalisation",
        "label": "Unicode Normalisation"
      },
      {
        "@id": "urn:ngm:class:text-preprocessing",
        "label": "Text Preprocessing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:language-modeling",
        "label": "Language Modeling"
      },
      {
        "@id": "urn:ngm:class:machine-translation",
        "label": "Machine Translation"
      },
      {
        "@id": "urn:ngm:class:multimodal-ai-architecture-learning",
        "label": "Multimodal Learning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:subword-tokenisation",
        "label": "Subword Tokenisation"
      },
      {
        "@id": "urn:ngm:class:token-embedding",
        "label": "Token Embedding"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:transformer-architecture",
        "label": "Transformer Architecture"
      },
      {
        "@id": "urn:ngm:class:multilingual-models",
        "label": "Multilingual Models"
      },
      {
        "@id": "urn:ngm:class:code-generation",
        "label": "Code Generation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:character-level-model",
        "label": "Character-Level Model"
      },
      {
        "@id": "urn:ngm:class:word-level-tokenisation",
        "label": "Word-Level Tokenisation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:embedding-model",
        "label": "Embedding Model"
      },
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      },
      {
        "@id": "urn:ngm:class:tokeniser-fertility",
        "label": "Tokeniser Fertility"
      },
      {
        "@id": "urn:ngm:class:context-window",
        "label": "Context Window"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:speech-recognition",
        "label": "Speech Recognition"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      }
    ]
  },
  "qualityScore": 0.76,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A tokeniser is a preprocessing component that sits at the boundary between raw text and the numerical representations consumed by [[Neural Networks]] and [[Language Modeling]] architectures. It segments an input string into a sequence of discrete units called tokens — which may be characters, whole words, or sub-word fragments — and maps each token to a unique integer index within a fixed [[Vocabulary]]. The resulting integer sequence (plus optional special boundary markers such as `[CLS]` and `[SEP]`) is then passed to a [[Token Embedding]] lookup table that converts each index into a dense vector for further processing by the model. The choice of tokenisation strategy fundamentally shapes model capacity, [[Context Window]] utilisation, multilingual coverage, and inference cost.

- ### Overview
  - Tokenisation is not merely a mundane preprocessing step; it is a core design decision that determines the granularity at which a model perceives language. Early neural NLP systems operated on whole words, producing large, open vocabularies with severe out-of-vocabulary problems for morphologically rich languages. Character-level approaches avoided OOV failures but produced very long sequences that were difficult for early recurrent models to learn from. The sub-word paradigm, now dominant, achieves a practical balance: common words remain as single tokens, while rare or novel words are decomposed into learned sub-word pieces that often carry morphological or semantic meaning.
  - Modern tokenisation is tightly coupled to the [[Transformer Architecture]], where sequence length directly determines quadratic attention cost. Shorter average token lengths (higher fertility) inflate sequence lengths and increase computational burden; longer average token lengths improve throughput but reduce the model's ability to generalise across morphological variants.
  - Tokenisers are typically trained once on a large corpus and then frozen alongside the model; re-tokenising for a new domain requires retraining or extending the model's embedding matrix.

- ### Key Mechanisms
  - **[[Byte Pair Encoding]] (BPE)** — a bottom-up merge algorithm that starts with a character (or byte) vocabulary and iteratively merges the most frequent adjacent pair, building a sub-word vocabulary of a target size. Used by the [[GPT]] series, [[RoBERTa]], and many open-source models.
  - **[[WordPiece]]** — a variant of BPE used in [[BERT]] that chooses merges to maximise the likelihood of the training corpus under a unigram language model, producing slightly different segmentations that tend to align better with linguistic morphemes.
  - **[[SentencePiece]]** — a language-agnostic tokeniser that treats the input as a raw byte stream without language-specific whitespace pre-tokenisation, making it well-suited to scripts that do not use spaces (Chinese, Japanese, Thai). Used by [[T5]], [[mBART]], and [[LLaMA]].
  - **Unigram Language Model Tokeniser** — trains a probabilistic unigram language model over candidate sub-words and prunes the vocabulary to a target size while maximising corpus likelihood; produces probabilistic segmentations useful for data augmentation.
  - **Tiktoken (BPE variant)** — a fast BPE implementation used by OpenAI's [[GPT-4]] and related models, operating on UTF-8 bytes to guarantee lossless round-trip encoding of any Unicode input.
  - **Special tokens** — `[CLS]`, `[SEP]`, `[PAD]`, `[MASK]`, `<|endoftext|>` are reserved identifiers injected by the tokeniser to convey structural information (sentence boundaries, padding positions, masked positions) to the model.
  - **Vocabulary size** — typically 32,000–200,000 entries for modern models; larger vocabularies reduce average sequence length but increase embedding matrix memory and training data requirements per token.

- ### Tokeniser Fertility and Multilingual Fairness
  - Tokeniser fertility is the average number of tokens per word for a given language or script; models trained predominantly on English typically show high fertility for non-Latin scripts, meaning those languages consume more context window per unit of meaning.
  - High fertility disproportionately disadvantages speakers of morphologically rich languages (Finnish, Turkish, Arabic) and logographic scripts (Chinese, Japanese) in tasks where context window length is a binding constraint.
  - Multilingual tokenisers such as those used in [[Multilingual Models]] attempt to allocate vocabulary capacity proportionally to training data composition, but biases persist in practice.
  - [[Tokeniser Fertility]] is now recognised as a fairness metric alongside model benchmark performance.

- ### Applications and Use Cases
  - **[[Large Language Models]]** — every modern LLM (GPT-4, Claude, Gemini, LLaMA, Mistral) requires a tokeniser to convert user prompts into integer sequences before inference.
  - **[[Machine Translation]]** — sub-word tokenisation was first popularised for neural machine translation to handle open vocabularies across language pairs with different morphological typologies.
  - **[[Code Generation]]** — specialised tokenisers for programming languages preserve indentation semantics, string literals, and operator sequences that differ structurally from natural language.
  - **[[Speech Recognition]]** — models such as Whisper apply tokenisation to output text, while audio tokenisers (e.g. EnCodec, SoundStream) discretise audio waveforms into token sequences enabling language-model-style generation of speech.
  - **[[Multimodal Learning]]** — vision tokenisers (VQ-VAE, VQGAN patches, ViT patch embeddings) discretise image regions into token sequences, enabling unified [[Transformer Architecture]] models over text and images.
  - **[[Retrieval-Augmented Generation]]** — accurate token counts are required for chunking documents to fit within context windows and for billing token-priced API calls.
  - **[[Embedding Model]]** training — sentence and document embedding models share tokenisers with their backbone LLMs, ensuring consistent vocabulary alignment.
  - **Toxicity and safety filtering** — tokeniser representations interact with safety classifiers; adversarial prompt injections often exploit tokenisation artefacts.

- ### Relationships
  - hasPart:: [[Byte Pair Encoding]]
  - hasPart:: [[WordPiece]]
  - hasPart:: [[SentencePiece]]
  - partOf:: [[Natural Language Processing Pipeline]]
  - partOf:: [[Language Model Pre-Training]]
  - requires:: [[Vocabulary]]
  - requires:: [[Unicode Normalisation]]
  - requires:: [[Text Preprocessing]]
  - enables:: [[Large Language Models]]
  - enables:: [[Language Modeling]]
  - enables:: [[Machine Translation]]
  - enables:: [[Multimodal Learning]]
  - uses:: [[Subword Tokenisation]]
  - uses:: [[Token Embedding]]
  - supports:: [[Transformer Architecture]]
  - supports:: [[Multilingual Models]]
  - supports:: [[Code Generation]]
  - contrastsWith:: [[Character-Level Model]]
  - contrastsWith:: [[Word-Level Tokenisation]]
  - relatedTo:: [[Embedding Model]]
  - relatedTo:: [[Attention Mechanism]]
  - relatedTo:: [[Tokeniser Fertility]]
  - relatedTo:: [[Context Window]]
  - bridges-to:: [[Speech Recognition]]
  - bridges-to:: [[Computer Vision]]

- ### Standards and Context
  - Tokenisation algorithms are not formally standardised by ISO or IEEE; de facto standards have emerged through open-source library adoption.
  - The **HuggingFace Tokenizers** library (Rust-backed, Python API) implements BPE, WordPiece, SentencePiece, and Unigram in a unified interface and is the dominant production implementation across open-source [[Large Language Models]].
  - **SentencePiece** (Google) is the reference implementation for the Unigram and SentencePiece BPE algorithms, used in T5, ALBERT, and XLM-R.
  - **Tiktoken** (OpenAI, open-sourced 2023) provides fast BPE for the GPT-3.5/GPT-4 family and is the reference for OpenAI API token counting.
  - Vocabulary files are typically distributed as `vocab.json` + `merges.txt` (BPE) or `sentencepiece.model` (SentencePiece) and are a mandatory component of any reproducible model release.
  - [[Retrieval-Augmented Generation]] systems must use the same tokeniser as the target model to produce accurate context-window chunk sizes.
  - The [[Model Card]] and [[AI Transparency]] literature increasingly require disclosure of tokeniser type, vocabulary size, and fertility statistics for major language groups.

- ### Provenance
  - sources:: HuggingFace Tokenizers documentation; Sennrich et al. (2016) BPE for NMT; Schuster & Nakamura (2012) WordPiece; Kudo & Richardson (2018) SentencePiece; Kudo (2018) Unigram LM tokenisation
  - updated:: 2026-06-13
