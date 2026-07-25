public:: true

# Graph Databases
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1b2687c59b1359ab70c161ed1558e0c333cf701bc2179a56c5dbb5daa6b2378b",
  "@type": "Page",
  "vc:slug": "graph-databases",
  "title": "Graph Databases",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:knowledge-graphs",
      "vc:label": "Knowledge Graphs"
    },
    {
      "@id": "urn:visionflow:linked:network-analysis",
      "vc:label": "Network Analysis"
    },
    {
      "@id": "urn:visionflow:linked:database-systems",
      "vc:label": "Database Systems"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-graph-database",
      "vc:label": "https://en.wikipedia.org/wiki/Graph_database"
    },
    {
      "@id": "urn:visionflow:linked:https-neo-4-j-com-developer-graph-database",
      "vc:label": "https://neo4j.com/developer/graph-database/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Graph Databases"
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
  "@id": "urn:ngm:class:graph-databases",
  "@type": "Class",
  "label": "Graph Databases",
  "definition": "Graph databases are database management systems that represent and store data as a network of nodes (entities) and edges (relationships), with both capable of carrying named property sets. Unlike relational models that encode relationships through foreign-key joins, graph databases make adjacency a first-class storage primitive, enabling traversal-based queries that navigate multi-hop paths in near-constant time per hop. They implement the property-graph or RDF triple-store data models, and are queried via languages such as Cypher, Gremlin, or SPARQL. Their native graph storage and index-free adjacency make them especially suited to domains where relationships are as semantically rich as the entities themselves.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:database-systems",
      "label": "Database Systems"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:property-graph-model",
        "label": "Property Graph Model"
      },
      {
        "@id": "urn:ngm:class:rdf-triple-store",
        "label": "RDF Triple Store"
      },
      {
        "@id": "urn:ngm:class:graph-query-language",
        "label": "Graph Query Language"
      },
      {
        "@id": "urn:ngm:class:index-free-adjacency",
        "label": "Index-Free Adjacency"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-graphs",
        "label": "Knowledge Graphs"
      },
      {
        "@id": "urn:ngm:class:semantic-search",
        "label": "Semantic Search"
      },
      {
        "@id": "urn:ngm:class:recommendation-systems",
        "label": "Recommendation Systems"
      },
      {
        "@id": "urn:ngm:class:fraud-detection",
        "label": "Fraud Detection"
      },
      {
        "@id": "urn:ngm:class:network-analysis",
        "label": "Network Analysis"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cypher-query-language",
        "label": "Cypher Query Language"
      },
      {
        "@id": "urn:ngm:class:sparql",
        "label": "SPARQL"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:graph-data-model",
        "label": "Graph Data Model"
      },
      {
        "@id": "urn:ngm:class:graph-algorithms",
        "label": "Graph Algorithms"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:relational-database",
        "label": "Relational Databases"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      },
      {
        "@id": "urn:ngm:class:graph-neural-networks",
        "label": "Graph Neural Networks"
      },
      {
        "@id": "urn:ngm:class:ontology-engineering",
        "label": "Ontology Engineering"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:nosql-database",
        "label": "NoSQL Databases"
      },
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      },
      {
        "@id": "urn:ngm:class:social-network-analysis",
        "label": "Social Network Analysis"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:graph-data-stores",
      "label": "Graph Data Stores"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:graph-databases:78bb4df8a762",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1b2687c59b1359ab70c161ed1558e0c333cf701bc2179a56c5dbb5daa6b2378b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Knowledge Graphs]]",
      "resolved": "urn:visionflow:linked:knowledge-graphs",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Analysis]]",
      "resolved": "urn:visionflow:linked:network-analysis",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Database Systems]]",
      "resolved": "urn:visionflow:linked:database-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Graph_database]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-graph-database",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://neo4j.com/developer/graph-database/]]",
      "resolved": "urn:visionflow:linked:https-neo-4-j-com-developer-graph-database",
      "kind": "StubLink"
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
  - Graph databases are [[Database Systems]] that represent data as a network of typed nodes and labelled edges, each carrying arbitrary property sets. Unlike [[Relational Databases]], which encode relationships through foreign-key joins resolved at query time, graph databases store adjacency directly in the record structure — a design sometimes called index-free adjacency — so multi-hop traversals scale with the number of relationships visited, not the total dataset size. They are foundational infrastructure for [[Knowledge Graphs]], [[Semantic Search]], and any domain where relationships carry as much semantic weight as entities.

- ### Overview
  - Graph databases emerged in the mid-2000s as practitioners encountered the impedance mismatch between highly connected domain models and the tabular structure of [[Relational Databases]].
  - The central insight is that relationships are first-class data: rather than computing a join between two tables, the database follows a pointer already embedded in the node record.
  - Two dominant data models exist side by side:
    - **Property Graph** — nodes and directed edges, both with key-value property bags and type labels. The model used by Neo4j, TigerGraph, Amazon Neptune (PG mode), and SAP HANA Graph.
    - **RDF / Triple Store** — data expressed as subject-predicate-object triples conforming to W3C standards. Used by Stardog, GraphDB, Blazegraph, and Neptune (RDF mode).
  - These models are complementary: property graphs excel at operational workloads and exploratory traversal; RDF stores excel at formal [[Ontology Engineering]] and interoperability via [[Linked Data]] standards.
  - Graph databases sit within the broader [[NoSQL Databases]] movement but differ from document stores and key-value stores by treating the schema of relationships as semantically meaningful.

- ### Key Components
  - **Nodes (Vertices)**
    - Represent entities: people, products, documents, concepts, events.
    - Carry one or more type labels (e.g. `Person`, `Account`).
    - Hold a property map (string → scalar or list).
  - **Edges (Relationships)**
    - Directed, typed arcs connecting two nodes (e.g. `KNOWS`, `TRANSFERRED_TO`).
    - Also carry property maps enabling temporal, weighted, or annotated edges.
    - Directionality can be traversed in either direction at query time.
  - **[[Index-Free Adjacency]]**
    - Each node stores a direct pointer (or linked list) to its incident edges.
    - Traversal cost is O(degree) per hop, independent of total graph size — contrast with a relational join whose cost scales with table cardinality.
  - **[[Graph Query Language]]**
    - [[Cypher Query Language]] (openCypher / ISO GQL draft) — declarative, pattern-matching syntax native to Neo4j and adopted broadly.
    - [[Gremlin Traversal Language]] — imperative, functional traversal API from Apache TinkerPop; vendor-neutral.
    - [[SPARQL]] — W3C standard for querying RDF triple stores; path extensions in SPARQL 1.1 support graph traversal.
    - GQL (ISO/IEC 39075, published 2024) — international standard unifying property-graph query.
  - **Graph Storage Engine**
    - Native graph storage serialises node and edge records in adjacency-list format, optimising pointer chasing.
    - Non-native stores (e.g. graph layer over a relational or key-value engine) trade traversal performance for storage flexibility.
  - **[[Graph Algorithms]]**
    - Shortest path (Dijkstra, A*), community detection (Louvain, Label Propagation), centrality (PageRank, Betweenness), similarity (Jaccard, cosine via embeddings).
    - Typically exposed via a Graph Data Science library alongside the query engine.

- ### Applications / Use Cases
  - **[[Knowledge Graphs]]**
    - Enterprise knowledge graphs (Google Knowledge Graph, Microsoft Satori, Meta TAO) integrate heterogeneous facts and support question-answering, entity disambiguation, and [[Semantic Search]].
  - **[[Fraud Detection]]**
    - Financial institutions model accounts, transactions, devices, and IP addresses as graphs; circular payment rings and synthetic identity clusters emerge as unusual subgraph patterns invisible to row-level analytics.
  - **[[Recommendation Systems]]**
    - Collaborative filtering over bipartite user-product graphs or session graphs; graph traversal replaces matrix factorisation for cold-start and real-time scenarios.
  - **[[Social Network Analysis]]**
    - Influence propagation, community structure, shortest path between users, and churn prediction modelled directly on the social graph.
  - **Identity and Access Management**
    - Role-permission-resource graphs enable recursive group membership resolution and policy impact analysis that would require complex recursive CTEs in SQL.
  - **Supply Chain and Logistics**
    - Multi-tier supplier dependency graphs expose single points of failure; path queries answer "what would a disruption at node X affect downstream?"
  - **Life Sciences**
    - Drug-target interaction networks, protein-protein interaction graphs, and clinical pathway modelling stored as [[Knowledge Graphs]] for biomedical research.
  - **[[Network Analysis]] and IT Operations**
    - Infrastructure topology graphs (servers, switches, services) accelerate root-cause analysis by graph-walking dependency chains.
  - **[[Ontology Engineering]] and the Semantic Web**
    - RDF triple stores are the canonical storage backend for OWL2 ontologies, enabling reasoners (HermiT, Pellet, ELK) to derive implicit class membership and detect inconsistencies.

- ### Relationships
  - subClassOf:: [[Database Systems]]
  - hasPart:: [[Property Graph Model]]
  - hasPart:: [[RDF Triple Store]]
  - hasPart:: [[Graph Query Language]]
  - hasPart:: [[Index-Free Adjacency]]
  - enables:: [[Knowledge Graphs]]
  - enables:: [[Semantic Search]]
  - enables:: [[Recommendation Systems]]
  - enables:: [[Fraud Detection]]
  - enables:: [[Network Analysis]]
  - uses:: [[Cypher Query Language]]
  - uses:: [[SPARQL]]
  - uses:: [[Gremlin Traversal Language]]
  - requires:: [[Graph Data Model]]
  - requires:: [[Graph Algorithms]]
  - contrastsWith:: [[Relational Databases]]
  - contrastsWith:: [[Document Stores]]
  - contrastsWith:: [[Columnar Databases]]
  - bridgesTo:: [[Knowledge Representation]]
  - bridgesTo:: [[Graph Neural Networks]]
  - bridgesTo:: [[Ontology Engineering]]
  - relatedTo:: [[NoSQL Databases]]
  - relatedTo:: [[Linked Data]]
  - relatedTo:: [[Social Network Analysis]]

- ### Standards & Context
  - **W3C RDF / SPARQL stack** — Resource Description Framework (RDF 1.1), SPARQL 1.1, OWL2, SHACL, and ShEx form the normative standards for triple-store graph databases; governed by the W3C RDF Working Group.
  - **ISO/IEC 39075:2024 — GQL** — the first international standard for property-graph query languages, consolidating Cypher, PGQL, and G-CORE proposals. Parallel to ISO SQL which gained SQL/PGQ (property graph query) extensions in SQL:2023.
  - **openCypher** — open-source specification of the Cypher query language maintained by the openCypher project; basis for GQL standardisation.
  - **Apache TinkerPop** — vendor-neutral graph computing framework providing [[Gremlin Traversal Language]]; adopted by Amazon Neptune, JanusGraph, TigerGraph, and others.
  - **Linked Data Principles** — Tim Berners-Lee's four rules (use URIs, use HTTP URIs, provide useful data, include links) underpin [[Linked Data]] and the RDF triple-store ecosystem.
  - **SHACL / ShEx** — constraint languages for validating RDF graphs against structural shapes; analogous to JSON Schema for property graphs.
  - **Property Graph Schema (PG-Schema)** — emerging ISO supplement defining schema and type constraints for property graphs.

- ### Notable Implementations
  - **Neo4j** — dominant native property graph database; Cypher query language; enterprise and AuraDB cloud editions.
  - **Amazon Neptune** — managed cloud service supporting both property graph (Gremlin/openCypher) and RDF (SPARQL) in a single engine.
  - **TigerGraph** — massively parallel native graph analytics at scale; GSQL query language.
  - **JanusGraph** — open-source distributed graph over pluggable storage backends (Cassandra, HBase, BerkeleyDB); Apache TinkerPop.
  - **Stardog** — enterprise [[Knowledge Graphs]] and reasoning platform; strong OWL2 and SHACL support.
  - **GraphDB** — RDF triple store with OWL2 reasoning; popular in life sciences and government [[Linked Data]] portals.
  - **Wikidata** — the world's largest open property-graph knowledge base, queryable via SPARQL at query.wikidata.org.
  - **Azure Cosmos DB for Apache Gremlin** — serverless graph over Microsoft's multi-model Cosmos DB.

- ### Connections to Machine Learning
  - [[Graph Neural Networks]] (GNNs) operate directly on graph-structured data; graph databases serve as the storage and feature-extraction layer feeding GNN pipelines.
  - [[Knowledge Graphs]] stored in graph databases act as structured external memory for large language models via retrieval-augmented generation (RAG).
  - Node embedding methods (Node2Vec, GraphSAGE, TransE) produce vector representations of graph entities, bridging graph databases and [[Semantic Search]] via vector indices.

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Graph_database]], [[https://neo4j.com/developer/graph-database/]]
  - updated:: 2026-06-13
