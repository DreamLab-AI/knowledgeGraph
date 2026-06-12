public:: true

# GraphRAG
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:graph-rag",
  "@type": "Page",
  "vc:slug": "graph-rag",
  "title": "GraphRAG",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:graph-rag",
  "@type": "Class",
  "label": "GraphRAG",
  "definition": "GraphRAG (Graph Retrieval-Augmented Generation) is an architecture that extends standard retrieval-augmented generation by structuring the indexed knowledge corpus as a knowledge graph of entities and relationships rather than as a flat collection of text chunks, enabling the retrieval system to answer questions that require multi-hop reasoning over connected facts — such as 'what do entities A and B have in common' — which naive vector similarity search over disconnected chunks cannot reliably resolve. Microsoft Research's GraphRAG implementation, open-sourced in 2024, uses an LLM to extract entity-relationship triples from a document corpus, builds a community-detected hierarchical graph, generates community summaries at multiple granularities, and retrieves relevant subgraphs and summaries at query time to ground the LLM's response in structured relational context.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:knowledge-graph-construction", "label": "Knowledge Graph Construction"},
      {"@id": "urn:ngm:class:graph-neural-network", "label": "Graph Neural Network"},
      {"@id": "urn:ngm:class:graph-database", "label": "Graph Database"},
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:knowledge-base", "label": "Knowledge Base"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ontology-in-llm-operations", "label": "Ontology in LLM Operations"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:semantic-web-linked-data-standard", "label": "Semantic Web"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[GraphRAG]] is an architecture extending [[Retrieval-Augmented Generation]] by structuring the indexed knowledge corpus as a [[Knowledge Graph]] of entities and relations, enabling multi-hop reasoning over connected facts that naive chunk-level vector retrieval cannot address, using [[Large Language Models]] to extract and query relational context and grounding responses in hierarchical community summaries generated from [[Knowledge Graph Construction]] pipelines.

- ### Relationships
  - GraphRAG is a direct architectural extension of [[Retrieval-Augmented Generation]], adding graph-structured indexing to the retrieval component. The [[Knowledge Graph]] it constructs stores typed entities and labelled relations, drawing on [[Knowledge Graph Construction]] techniques for entity extraction and coreference resolution. At query time, community detection algorithms (applied to the graph) identify thematically related entity clusters, and the retriever fetches subgraphs and pre-generated community summaries rather than raw text chunks. [[Graph Database]] systems (Neo4j, Neptune, Kùzu) may store the graph, while [[Graph Neural Network]] encoders can embed node and edge features for semantic retrieval. The [[Ontology]] layer provides schema constraints on entity types and relation vocabularies. [[Large Language Models]] serve as both the extraction engine (building the graph) and the synthesis engine (generating answers from retrieved subgraphs), and the pattern enables [[Ontology in LLM Operations]] and supports [[Semantic Web Linked Data Standard]] integration goals.

- ### Content
  - Retrieval-augmented generation in its original form (Lewis et al., 2020 at Facebook AI Research) concatenated relevant retrieved text chunks to an LLM prompt to ground generation in external knowledge, reducing hallucination. However, practitioners quickly identified that questions requiring synthesis across many documents — "global" queries over a corpus — produced poor results because no single retrieved chunk contained sufficient context, and the LLM could not reason across multiple disconnected fragments. Knowledge graph-enhanced retrieval had been studied in academic NLP for years (e.g., KGQA systems for Freebase and Wikidata), but integrating it with modern LLM-based generation pipelines was not productised until 2023-2024.

  - Microsoft Research's GraphRAG system, introduced in their 2024 paper "From Local to Global: A Graph RAG Approach to Query-Focused Summarisation," operationalised the concept as a production pipeline. The indexing phase applies an LLM to every document chunk to extract entity mentions and relation triples, deduplicates and links entities using coreference resolution, then runs hierarchical community detection (Leiden algorithm) on the resulting graph to identify communities at multiple granularity levels. For each community, a summary is generated by the LLM describing its key entities and their relationships. At query time, a global search retrieves relevant community summaries and constructs a map-reduce chain where partial answers from multiple community contexts are synthesised into a final response. Local search retrieves entity subgraphs plus their associated source chunks for question types requiring precise factual lookup.

  - The significance of GraphRAG is that it makes LLM question-answering viable for corpus-wide analytical queries: "What are the main themes across this collection of 10,000 news articles?" or "How do the regulatory approaches of the EU and US differ across all policy documents?" — query types that elude naive RAG because no single retrieved chunk spans the entire corpus. This enables applications in competitive intelligence, scientific literature synthesis, legal discovery, and knowledge management for large document repositories. The graph structure also provides citation trails — answers are traceable to specific entities and source documents — supporting auditability requirements in enterprise and regulated contexts.

  - In 2024-2025, GraphRAG has rapidly become a standard architectural pattern for enterprise RAG deployments. Microsoft integrated it into Azure AI Search and the GraphRAG open-source toolkit. Community extensions have added temporal reasoning (tracking how entity attributes change over time), multi-modal knowledge graphs (incorporating image and table extraction), and hybrid retrieval combining dense vector search with graph traversal. Research frontiers include self-updating graph indexes that incrementally integrate new documents without full re-indexing, and personal knowledge graph construction from individual document collections enabling personalised AI assistants with deep contextual memory.

- ### Content
  - LlamaIndex and LangChain have both developed GraphRAG integrations, reducing implementation friction. Neo4j and other graph database vendors have positioned their platforms as the natural persistence layer, creating a growing ecosystem of tooling. The pattern is also being applied to codebases (code knowledge graphs with function call graphs and dependency relations) and to scientific knowledge bases (disease-gene-drug interaction graphs for biomedical question answering).