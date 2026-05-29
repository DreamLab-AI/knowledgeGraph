- ### Definition
  - A knowledge base is a structured, machine-readable repository of domain-specific information, factual assertions, and inference rules that software systems—including expert systems, question answering engines, and AI agents—can query, reason over, and update. Knowledge bases range from relational tables and document stores to formal ontologies expressed in OWL/RDF and property graphs, each offering different trade-offs between expressiveness, scalability, and reasoning complexity. In contemporary AI architectures, knowledge bases frequently serve as the external long-term memory component in retrieval-augmented generation pipelines.

- ### Semantic Classification
  - owl-class:: knowledge-base:Knowledge Base
  - owl-role:: Concept

- ### Relationships
  - uses [[Ontology]]
  - uses [[Knowledge Representation]]
  - enables [[Retrieval-Augmented Generation]]
  - enables [[Question Answering]]
  - relatedTo [[Knowledge Graph]]
  - relatedTo [[Expert Systems]]

- ### Content
  - Knowledge bases occupy a central position in the history of AI, originating in expert systems of the 1970s and 1980s such as MYCIN and DENDRAL, which encoded domain expertise as production rules (IF-THEN statements) evaluated by an inference engine. The distinction between the knowledge base (domain facts and rules) and the inference engine (reasoning mechanism) is a canonical separation of concerns in expert system architecture.
  - Modern knowledge bases are often implemented as RDF triple stores (Apache Jena, Virtuoso, Stardog) supporting SPARQL queries, or as property graph databases (Neo4j, Amazon Neptune) enabling path-based and pattern-matching queries. Formal ontologies expressed in OWL 2 provide the schema layer, defining classes, properties, and axioms that constrain the stored facts and enable automated reasoning using Description Logic classifiers such as HermiT or Pellet.
  - In large-scale commercial applications, knowledge graphs such as Google's Knowledge Graph, Microsoft's Satori, and Wikidata serve as the knowledge base underpinning search, question answering, and conversational AI systems. Retrieval-Augmented Generation (RAG) architectures combine a knowledge base (often a vector database storing embeddings of chunked documents) with a large language model: a retriever fetches relevant passages given a user query, and the language model synthesises a grounded answer conditioned on the retrieved context, reducing hallucination and enabling knowledge to be updated without retraining. Knowledge bases are also central to Semantic Search applications and to building structured, queryable views over enterprise information assets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z