public:: true

# Tokenizer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:tokenizer",
  "@type": "Page",
  "vc:slug": "tokenizer",
  "title": "Tokenizer",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tokenizer",
  "@type": "Class",
  "label": "Tokenizer",
  "definition": "A tokenizer is the component that converts raw text into the discrete units (tokens) a language model processes, and back again. Modern tokenizers use subword algorithms such as byte-pair encoding, WordPiece, or unigram language models to balance vocabulary size against sequence length, representing common words as single tokens and rare words as compositions of smaller pieces. The tokenizer defines the model's vocabulary and directly affects context-window usage, multilingual fairness, handling of code and numbers, and ultimately the cost and capability of the system.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:tokenization", "label": "Tokenization"}],
  "relations": {
    "supports": [
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A tokenizer converts raw text into the discrete tokens a language model processes and back again, using subword algorithms to balance vocabulary size against sequence length.

- ### Relationships
  - Tokenizer is a subclass of [[Tokenization]] and supports the [[Transformer]] architecture by producing the integer sequences it consumes. It enables practical [[Natural Language Processing]] and relates to the broader fields of [[Deep Learning]] and [[Machine Learning]] in which learned and rule-based tokenisation schemes coexist.

- ### Content
  - The tokenizer sits at the boundary between human text and the numerical world a neural network inhabits. Language models do not operate on characters or words directly; they operate on integer token IDs drawn from a fixed vocabulary. The tokenizer's job is to segment arbitrary input into those tokens deterministically and reversibly, and the choices it embodies ripple through every aspect of the model's behaviour and economics.

  - Subword tokenisation resolves a fundamental tension. A word-level vocabulary cannot represent words it never saw in training and would need to be enormous; a character-level vocabulary is tiny but makes sequences very long and forces the model to relearn spelling. Byte-pair encoding and its relatives strike a balance by merging frequently co-occurring character sequences into tokens, so common words become single tokens while rare or novel words decompose into reusable subword pieces — giving open-vocabulary coverage at a manageable sequence length.

  - The tokenizer has subtle but far-reaching effects. Because context windows and pricing are measured in tokens, a tokenizer that fragments a language into many tokens makes that language more expensive and effectively shrinks the usable context for its speakers, raising fairness concerns for under-represented scripts. Tokenisation also explains characteristic model weaknesses: difficulty with arithmetic and character-level tasks often traces to how numbers and letters are grouped into tokens rather than to reasoning failures per se.

  - In practice the tokenizer is trained once, before the model, by learning merge rules or a unigram vocabulary from a representative corpus, and is then frozen for the life of the model since changing it would invalidate all learned embeddings. This makes tokenizer design a consequential, hard-to-reverse decision. Recent work explores byte-level and tokeniser-free approaches that push segmentation into the model itself, but subword tokenizers remain the standard interface between text and transformers.
