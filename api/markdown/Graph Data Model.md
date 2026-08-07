public:: true

# Graph Data Model
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:graph-data-model", "@type":"Page", "title":"Graph Data Model", "vc:slug":"graph-data-model", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:graph-data-model",
  "@type": "Class",
  "label": "Graph Data Model",
  "definition": "A graph data model represents information as nodes connected by edges, where edges carry the semantics of relationships between entities. It makes connections first-class, so traversing and querying relationships is direct rather than reconstructed through joins as in tabular models. The two dominant variants are the labelled property graph, which attaches key-value properties to nodes and edges, and the RDF triple model, which expresses facts as subject-predicate-object statements.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-model",
      "label": "Data Model"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:graph-database",
        "label": "Graph Database"
      },
      {
        "@id": "urn:ngm:class:schema",
        "label": "Schema"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:property-graph",
        "label": "Property Graph"
      },
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:node",
        "label": "Node"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:semantic-web",
        "label": "Semantic Web"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sparql",
        "label": "SPARQL"
      },
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:structured-data",
        "label": "Structured Data"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-embedding",
        "label": "Knowledge Graph Embedding"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
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
	- A graph data model represents entities as [[Node]] objects linked by edges that carry relationship meaning.
	- It is a kind of [[Data Model]] that makes connections first-class rather than reconstructed via joins.
	- It is realised as a [[Property Graph]] or as the [[RDF]] triple model.
- ### Overview
	- Nodes hold entities while edges express typed, often directed, relationships between them.
	- Querying follows edges directly, so deep or variable-length relationship questions are natural and efficient.
	- The labelled property graph attaches properties to both nodes and edges for rich attribution.
	- The triple model encodes each fact as subject-predicate-object, aligning with web-scale linked data.
- ### Key aspects
	- Schema may be explicit or emergent, supporting flexible and evolving structures.
	- Indexes on labels and properties accelerate entry-point lookups before traversal.
	- Path and pattern matching let queries express reachability and neighbourhood constraints.
	- Storage engines optimise adjacency so hops avoid expensive set joins.
- ### Applications
	- Building a [[Knowledge Graph]] that integrates heterogeneous entities and relations.
	- Powering recommendation, fraud detection and network analysis over connected [[Structured Data]].
	- Publishing linked data on the [[Semantic Web]] and querying it with [[SPARQL]].
	- Feeding [[Knowledge Graph Embedding]] models for downstream machine learning.
- ### Relationships
	- subClassOf:: [[Data Model]]
	- requires:: [[Graph Database]]
	- requires:: [[Schema]]
	- implements:: [[Property Graph]]
	- implements:: [[RDF]]
	- hasPart:: [[Node]]
	- enables:: [[Knowledge Graph]]
	- enables:: [[Semantic Web]]
	- uses:: [[SPARQL]]
	- uses:: [[Knowledge Representation]]
	- supports:: [[Structured Data]]
	- supports:: [[Knowledge Graph Embedding]]
	- relatedTo:: [[Ontology]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
