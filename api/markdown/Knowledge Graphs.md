public:: true

# Knowledge Graphs
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b93ee167b182e4b1a4e6a340599c8ddd0bf3e9169cd3e71267e1181d4c66c14c",
  "@type": "Page",
  "vc:slug": "knowledge-graphs",
  "title": "Knowledge Graphs",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:knowledge-representation",
      "vc:label": "Knowledge Representation"
    },
    {
      "@id": "urn:visionflow:linked:rdf",
      "vc:label": "RDF"
    },
    {
      "@id": "urn:visionflow:linked:inference",
      "vc:label": "Inference"
    },
    {
      "@id": "urn:visionflow:linked:semantic-web",
      "vc:label": "Semantic Web"
    },
    {
      "@id": "urn:visionflow:linked:graph-database",
      "vc:label": "Graph Database"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Knowledge Graphs"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:knowledge-graphs",
  "@type": "Class",
  "label": "Knowledge Graphs",
  "definition": "Structured representations of knowledge as entities and the typed relationships between them, expressed as a graph of nodes and labelled edges grounded in an ontology, enabling querying, reasoning, and inference over heterogeneous data.",
  "domain": "data",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:knowledge-representation",
    "label": "Knowledge Representation"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      },
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      },
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:graph-database",
        "label": "Graph Database"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      },
      {
        "@id": "urn:ngm:class:question-answering",
        "label": "Question Answering"
      },
      {
        "@id": "urn:ngm:class:semantic-search",
        "label": "Semantic Search"
      },
      {
        "@id": "urn:ngm:class:recommendation-systems",
        "label": "Recommendation Systems"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:entity",
        "label": "Entity"
      },
      {
        "@id": "urn:ngm:class:relation",
        "label": "Relation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sparql",
        "label": "SPARQL"
      },
      {
        "@id": "urn:ngm:class:owl",
        "label": "OWL"
      },
      {
        "@id": "urn:ngm:class:property-graph",
        "label": "Property Graph"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      },
      {
        "@id": "urn:ngm:class:entity-linking",
        "label": "Entity Linking"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:schema",
        "label": "Schema"
      },
      {
        "@id": "urn:ngm:class:named-entity-recognition",
        "label": "Named Entity Recognition"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:relational-database",
        "label": "Relational Database"
      },
      {
        "@id": "urn:ngm:class:document-store",
        "label": "Document Store"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:semantic-web-linked-data-standard",
        "label": "Semantic Web"
      },
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:knowledge-base",
        "label": "Knowledge Base"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-embedding",
        "label": "Knowledge Graph Embedding"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:semantic-graph",
      "label": "Semantic Graph"
    },
    {
      "@id": "urn:ngm:class:knowledge-network",
      "label": "Knowledge Network"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:knowledge-graphs:5223e4eab135",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b93ee167b182e4b1a4e6a340599c8ddd0bf3e9169cd3e71267e1181d4c66c14c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Knowledge Representation]]",
      "resolved": "urn:visionflow:linked:knowledge-representation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[RDF]]",
      "resolved": "urn:visionflow:linked:rdf",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Inference]]",
      "resolved": "urn:visionflow:linked:inference",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Semantic Web Linked Data Standard]]",
      "resolved": "urn:visionflow:linked:semantic-web",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Graph Database]]",
      "resolved": "urn:visionflow:linked:graph-database",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Structured representations of knowledge as entities and the relationships between them, typically expressed as a graph of nodes and labelled edges to support querying and inference.

- ### Semantic Classification
  - owl-class:: general:KnowledgeGraphs
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Knowledge Representation]]
  - bridges-to:: [[Semantic Web Linked Data Standard]], [[Graph Database]]
  - requires:: [[Knowledge Representation]], [[RDF]]
  - enables:: [[Inference]]

- ### Content
  - Knowledge graphs model a domain as interconnected entities linked by typed relationships, often grounded in an ontology that defines the permitted classes and properties. They allow heterogeneous data to be integrated and queried in terms of meaningful connections rather than isolated records.
  - Built on standards such as RDF and stored in graph databases or triplestores, knowledge graphs support reasoning, question answering and search, and they are used in semantic web applications, enterprise data integration and recommendation systems.

- ### Current Landscape (2026)
  - GraphRAG has become the dominant enterprise pattern for grounding LLMs, popularised by Microsoft Research's April 2024 paper (arXiv:2404.16130); by 2026 vendors and analysts frame the knowledge graph as an "enterprise knowledge layer" that externalises knowledge for accuracy, explainability and governance rather than baking it into the model.
  - Cost and latency of graph-backed retrieval have collapsed through 2025: Microsoft's LazyGraphRAG (June 2025) cut full-index cost to roughly 0.1%, its January 2026 Dynamic Community Selection reduced token usage by around 79%, and open-source HippoRAG 2 and LightRAG reach comparable quality at 10-30x lower cost via Personalised PageRank over LLM-extracted graphs.
  - LLM-driven construction has removed the historic bottleneck of manual schema and entity extraction, with reported ~95% semantic alignment to human-crafted schemas; new entrants such as Lovelace AI's Elemental (led by former Google Cloud AI head Andrew Moore) pitch AI-assisted graph building directly against Palantir and Neo4j.
  - Standards matured sharply: ISO/IEC 39075 (GQL), the first standardised property-graph query language, was published in April 2024, and the W3C RDF & SPARQL Working Group (2025-2027 charter) is advancing RDF 1.2 and SPARQL 1.2, folding in RDF-star statement-level annotations, with a SPARQL 1.2 Query working draft dated June 2026.
  - Key players span Neo4j (dominant in enterprise but with licensing friction at scale), Amazon Neptune, FalkorDB, Graphwise/Ontotext GraphDB (versions 11/11.1 adding GraphRAG, broad LLM support and MCP integration), plus embedded engines Kuzu, Memgraph and DuckDB for lightweight and per-session ephemeral graphs.
  - Regulation is a live driver: the EU AI Act's high-risk transparency, auditability and accuracy requirements taking effect through 2026 favour graph-based reasoning traces, and independent benchmarks (UK National Innovation Centre for Data; Diffbot KG-LM) report GraphRAG agents markedly more truthful than vector-only retrieval.
  - Frontier and open challenges as of 2026 include the absence of stable benchmarks for evaluating LLM-generated graphs (GraphRAG-Bench at ICLR 2026 found only +4.5% on HotpotQA at 2.3x latency, i.e. it helps relational not factoid queries), real-time graph freshness, federated cross-departmental graphs, and multimodal graphs integrating image, video and audio nodes alongside triples.

- ### References
  - 1. SiliconANGLE (2026). Enterprise knowledge layer powers modern gen AI. https://siliconangle.com/2026/07/29/enterprise-knowledge-layer-powers-modern-gen-ai-neo4jgraphtalk/
  - 2. SigmaJunction (2026). GraphRAG in 2026: Why Knowledge Graphs Are the Missing Piece. https://sigmajunction.com/blog/graphrag-knowledge-graphs-enterprise-ai-2026
  - 3. Tech with Colonel (2026). RAG in 2025-2026: State of the Art. https://www.techwithcolonel.com/artifact/rag-state-of-the-art-2026.html
  - 4. ISO/IEC (2024). ISO/IEC 39075:2024 Information technology — Database languages — GQL. https://www.iso.org/standard/76120.html
  - 5. W3C (2026). SPARQL 1.2 Query Language (Working Draft). https://www.w3.org/TR/sparql12-query/
  - 6. Graphwise (2026). How GraphDB 11 & 11.1 Let Organizations Unlock AI-powered Knowledge Graphs. https://graphwise.ai/blog/how-graphdb-11-lets-organizations-unlock-ai-powerd-knowledge-graphs/

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
