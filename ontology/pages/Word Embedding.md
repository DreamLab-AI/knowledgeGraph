public:: true

# Word Embedding
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:word-embedding",
  "@type": "Page",
  "title": "Word Embedding",
  "vc:slug": "word-embedding",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:word-embedding",
  "@type": "Class",
  "label": "Word Embedding",
  "definition": "A Word Embedding is a dense, continuous vector representation of a word learned such that semantically or syntactically similar words occupy nearby positions in the vector space. Trained from large text corpora using distributional statistics, embeddings capture relationships through geometric structure, enabling analogical reasoning and similarity computation. They transformed natural language processing by replacing sparse one-hot encodings with low-dimensional features that generalise across vocabulary and feed downstream neural models.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:embedding",
      "label": "Embedding"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:dimensionality-reduction",
        "label": "Dimensionality Reduction"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:feature-engineering",
        "label": "Feature Engineering"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cosine-similarity",
        "label": "Cosine Similarity"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:sentiment-analysis",
        "label": "Sentiment Analysis"
      },
      {
        "@id": "urn:ngm:class:machine-translation",
        "label": "Machine Translation"
      },
      {
        "@id": "urn:ngm:class:named-entity-recognition",
        "label": "Named Entity Recognition"
      },
      {
        "@id": "urn:ngm:class:information-retrieval",
        "label": "Information Retrieval"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:natural-language-understanding",
        "label": "Natural Language Understanding"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:embedding",
        "label": "Embedding"
      },
      {
        "@id": "urn:ngm:class:language-model",
        "label": "Language Model"
      },
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A Word Embedding is a dense, continuous vector representation of a word learned such that semantically or syntactically similar words occupy nearby positions in the vector space. Trained from large text corpora using distributional statistics, embeddings capture relationships through geometric structure, enabling analogical reasoning and similarity computation. They transformed natural language processing by replacing sparse one-hot encodings with low-dimensional features that generalise across vocabulary and feed downstream neural models.
  - Related concepts: [[Embedding]] [[Natural Language Processing]] [[Neural Network]] [[Cosine Similarity]] [[Language Model]]
- ### Overview
  - Word Embeddings emerged from the distributional hypothesis: words appearing in similar contexts carry similar meaning. Models learn a vector per word so that geometric operations approximate semantic relations, the canonical example being king minus man plus woman approximating queen. Embeddings became the input layer of nearly all neural [[Natural Language Processing]] systems before contextual representations from [[Language Model]]s generalised them to context-dependent vectors.
- ### Mechanisms
  - Distributional training that maps co-occurrence statistics to geometry.
  - Dense low-dimensional vectors replacing sparse one-hot encodings.
  - Similarity measured by [[Cosine Similarity]] in the embedding space.
  - Analogical structure capturing syntactic and semantic regularities.
  - Transition from static to contextual embeddings via deep models.
- ### Applications
  - Feature input for text classification and [[Sentiment Analysis]].
  - Semantic search and [[Information Retrieval]] ranking.
  - [[Machine Translation]] and cross-lingual alignment.
  - [[Named Entity Recognition]] and sequence labelling.
- ### Relationships
  - partOf:: [[Natural Language Processing]]
  - hasPart:: [[Dimensionality Reduction]]
  - requires:: [[Neural Network]]
  - requires:: [[Feature Engineering]]
  - uses:: [[Cosine Similarity]]
  - enables:: [[Sentiment Analysis]]
  - enables:: [[Machine Translation]]
  - enables:: [[Named Entity Recognition]]
  - enables:: [[Information Retrieval]]
  - supports:: [[Natural Language Understanding]]
  - relatedTo:: [[Embedding]]
  - relatedTo:: [[Language Model]]
  - relatedTo:: [[Attention Mechanism]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
