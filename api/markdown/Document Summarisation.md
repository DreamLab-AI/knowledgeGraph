public:: true

# Document Summarisation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:document-summarisation",
  "@type": "Page",
  "title": "Document Summarisation",
  "vc:slug": "document-summarisation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:document-summarisation",
  "@type": "Class",
  "label": "Document Summarisation",
  "definition": "Document summarisation is the natural language processing task of producing a concise, faithful representation of the salient information in one or more source documents. It encompasses extractive approaches, which select and concatenate important spans, and abstractive approaches, which generate new text that paraphrases the content. Modern systems are built predominantly on transformer-based large language models and are evaluated for informativeness, coherence, and factual consistency.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:natural-language-processing",
      "label": "Natural Language Processing"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-management",
        "label": "Knowledge Management"
      },
      {
        "@id": "urn:ngm:class:information-retrieval",
        "label": "Information Retrieval"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:question-answering",
        "label": "Question Answering"
      },
      {
        "@id": "urn:ngm:class:semantic-search",
        "label": "Semantic Search"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      },
      {
        "@id": "urn:ngm:class:text-summarisation",
        "label": "Text Summarisation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:content-generation",
        "label": "Content Generation"
      },
      {
        "@id": "urn:ngm:class:document-processing",
        "label": "Document Processing"
      },
      {
        "@id": "urn:ngm:class:generative-ai",
        "label": "Generative AI"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:knowledge-management",
        "label": "Knowledge Management"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Document Summarisation]] condenses source text into faithful, concise summaries using [[Large Language Models]] and [[Transformer]] architectures, a core [[Natural Language Processing]] task related to [[Text Summarisation]].
- ### Overview
  - Document summarisation reduces a document, or a collection of documents, to its essential content while preserving meaning. Extractive methods rank and select existing sentences; abstractive methods generate fresh text that may rephrase, compress, or fuse information across passages.
  - The contemporary state of the art uses pretrained sequence-to-sequence and decoder-only [[Large Language Models]], which excel at fluent abstractive output but require careful evaluation for factual consistency and hallucination.
- ### Key aspects
  - Extractive versus abstractive paradigms and hybrid approaches.
  - Single-document versus multi-document summarisation.
  - Query-focused and aspect-based summarisation.
  - Faithfulness and hallucination as central quality concerns.
  - Evaluation via ROUGE, BERTScore, and factual-consistency metrics.
- ### Mechanisms
  - Sequence-to-sequence generation with attention over the source.
  - Long-context handling through sparse attention or retrieval.
  - Reinforcement and instruction tuning to align summaries with human preferences.
  - Chunking and map-reduce strategies for very long documents.
- ### Applications
  - Executive briefs and report digests in [[Knowledge Management]].
  - Search result snippets and [[Information Retrieval]] previews.
  - Meeting and conversation summaries.
  - Literature review and legal document review acceleration.
- ### Relationships
  - enables:: [[Knowledge Management]]
  - enables:: [[Information Retrieval]]
  - supports:: [[Question Answering]]
  - supports:: [[Semantic Search]]
  - partOf:: [[Natural Language Processing]]
  - uses:: [[Large Language Models]]
  - uses:: [[Transformer]]
  - uses:: [[Text Summarisation]]
  - requires:: [[Model Evaluation]]
  - relatedTo:: [[Content Generation]]
  - relatedTo:: [[Document Processing]]
  - relatedTo:: [[Generative AI]]
  - bridgesTo:: [[Knowledge Management]]
- ### Provenance
  - source:: GapMaterialisation
  - updated:: 2026-06-15
