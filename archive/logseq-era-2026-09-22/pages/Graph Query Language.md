public:: true

# Graph Query Language

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:graph-query-language", "@type":"Page", "title":"Graph Query Language", "vc:slug":"graph-query-language", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:graph-query-language",
  "@type": "Class",
  "label": "Graph Query Language",
  "definition": "A graph query language is a declarative language for expressing queries, traversals, and pattern matches over graph-structured data composed of nodes and edges. Rather than joining tables, it lets users describe paths and subgraph patterns directly, making relationship-centric questions concise. Examples include Cypher and Gremlin, with GQL emerging as an ISO standard that unifies property-graph querying alongside the W3C SPARQL language for RDF.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:graph-database",
      "label": "Graph Database"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:sql",
        "label": "SQL"
      },
      {
        "@id": "urn:ngm:class:sparql",
        "label": "SPARQL"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:data-model",
        "label": "Data Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:graph-database",
        "label": "Graph Database"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:graph-database",
        "label": "Graph Database"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      },
      {
        "@id": "urn:ngm:class:iso",
        "label": "ISO"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:sparql",
        "label": "SPARQL"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:graph-ql",
        "label": "GraphQL"
      },
      {
        "@id": "urn:ngm:class:sql",
        "label": "SQL"
      },
      {
        "@id": "urn:ngm:class:data-model",
        "label": "Data Model"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
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
- A [[Graph Query Language]] declaratively queries a [[Graph Database]] by matching node-and-edge patterns; it contrasts with [[SQL]] and [[SPARQL]] and powers [[Knowledge Graph]] applications.
- ### Overview
- Graph query languages target data where relationships are first-class, not modelled as foreign-key joins.
- Queries describe patterns and paths, which the engine matches against the stored graph.
- Property-graph languages (Cypher, Gremlin, GQL) differ from RDF's SPARQL in data model and syntax.
- ISO GQL standardises property-graph querying to improve portability across vendors.
- ### Mechanisms
- Pattern matching: ASCII-art or step-based descriptions of subgraphs to find.
- Traversal: walking edges to reach related nodes, often with depth and direction controls.
- Aggregation and projection: summarising and shaping matched results.
- Path expressions: variable-length and shortest-path queries.
- Standardisation: GQL (property graphs) and SPARQL (RDF) cover the two main models.
- ### Applications
- Querying social, fraud, and recommendation graphs.
- Navigating knowledge graphs and ontologies.
- Network and dependency analysis over connected data.
- Powering relationship-centric analytics in graph databases.
- ### Relationships
- contrastsWith:: [[SQL]]
- contrastsWith:: [[SPARQL]]
- uses:: [[Data Model]]
- enables:: [[Knowledge Graph]]
- supports:: [[Graph Database]]
- dependsOn:: [[Graph Database]]
- standardizedBy:: [[Standards]]
- standardizedBy:: [[ISO]]
- bridgesTo:: [[SPARQL]]
- relatedTo:: [[GraphQL]]
- relatedTo:: [[SQL]]
- relatedTo:: [[Data Model]]
- relatedTo:: [[Knowledge Graph]]
- ### Provenance
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
- updated:: 2026-06-15
