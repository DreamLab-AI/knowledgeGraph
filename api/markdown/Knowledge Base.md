public:: true

# knowledge base
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e6684f6c66b56af3aee16ee130769ce8e3faa4e8aa23c55e3693e8bfd31d0ec2",
  "@type": "Page",
  "vc:slug": "knowledge-base",
  "title": "knowledge base",
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
  "@id": "urn:ngm:class:knowledge-base",
  "@type": "Class",
  "label": "Knowledge Base",
  "definition": "A knowledge base is a structured, machine-readable repository of domain-specific information, factual assertions, and inference rules that software systems—including expert systems, question answering engines, and AI agents—can query, reason over, and update. Knowledge bases range from relational tables and document stores to formal ontologies expressed in OWL/RDF and property graphs, each offering different trade-offs between expressiveness, scalability, and reasoning complexity. In contemporary AI architectures, knowledge bases frequently serve as the external long-term memory component in retrieval-augmented generation pipelines.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-application",
      "label": "AI Application"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"},
      {"@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"},
      {"@id": "urn:ngm:class:question-answering", "label": "Question Answering"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:expert-systems", "label": "Expert Systems"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


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
