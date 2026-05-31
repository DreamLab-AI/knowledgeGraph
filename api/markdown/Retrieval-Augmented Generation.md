public:: true
alias:: Retrieval Augmented Generation

# retrieval-augmented generation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:26c5d8275d14b776ab7a6a85de4b2eeced577fa6d63f5924aef875dcb4be10f3",
  "@type": "Page",
  "vc:slug": "retrieval-augmented-generation",
  "title": "retrieval-augmented generation",
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
  "@id": "urn:ngm:class:retrieval-augmented-generation",
  "@type": "Class",
  "label": "Retrieval-Augmented Generation",
  "definition": "Retrieval-Augmented Generation (RAG) is an AI inference architecture that grounds large language model responses by dynamically fetching semantically relevant passages from an external knowledge store at query time. A retriever—typically backed by a vector database using dense embeddings—identifies the most relevant document chunks, which are concatenated into the model's context window before generation. RAG reduces hallucination, enables up-to-date knowledge without costly retraining, and allows fine-grained attribution of generated claims to source documents, making it the dominant pattern for enterprise knowledge-intensive question answering.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:vector-database", "label": "Vector Database"},
      {"@id": "urn:ngm:class:embedding-model", "label": "Embedding Model"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:question-answering", "label": "Question Answering"},
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:knowledge-base", "label": "Knowledge Base"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Retrieval-Augmented Generation (RAG) is an AI inference architecture that grounds large language model responses by dynamically fetching semantically relevant passages from an external knowledge store at query time. A retriever—typically backed by a vector database using dense embeddings—identifies the most relevant document chunks, which are concatenated into the model's context window before generation. RAG reduces hallucination, enables up-to-date knowledge without costly retraining, and allows fine-grained attribution of generated claims to source documents, making it the dominant pattern for enterprise knowledge-intensive question answering.

- ### Semantic Classification
  - owl-class:: retrieval-augmented-generation:Retrieval-Augmented Generation
  - owl-role:: Concept

- ### Relationships
  - requires [[Vector Database]]
  - requires [[Embedding Model]]
  - enables [[Question Answering]]
  - enables [[Semantic Search]]
  - uses [[Knowledge Base]]
  - uses [[Large Language Models]]

- ### Content
  - Retrieval-Augmented Generation decouples the storage of world knowledge from the parametric knowledge frozen in model weights. At query time, a user question is embedded into a dense vector and compared against a pre-built index of document chunk embeddings in a vector database; the top-k most similar chunks are retrieved and prepended to the prompt as grounding context. The language model then generates a response conditioned on both the retrieved passages and the query.
  - RAG architectures vary along several dimensions: sparse retrieval (BM25), dense retrieval (bi-encoder or cross-encoder re-ranking), hybrid approaches, and multi-hop retrieval where the model iteratively queries the knowledge base to resolve complex questions. Chunking strategy, embedding model choice, and context window management critically affect retrieval quality and generation fidelity.
  - Advanced RAG variants include Corrective RAG (which filters low-confidence retrievals), Graph RAG (which uses knowledge graph structure to guide retrieval), and agentic RAG (which lets the model decide when and what to retrieve). RAG is especially effective for enterprise applications where knowledge changes frequently, factual precision is required, and source attribution must be auditable—use cases such as legal research, medical information systems, and technical documentation assistants.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
