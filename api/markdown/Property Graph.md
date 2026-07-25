public:: true

# Property Graph
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:property-graph", "@type":"Page", "title":"Property Graph", "vc:slug":"property-graph", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:property-graph",
  "@type":"Class",
  "label":"Property Graph",
  "definition":"A property graph is a graph data structure in which both nodes and edges carry labels and an arbitrary set of key-value properties. Edges are directed and uniquely identifiable, allowing multiple parallel relationships of different types between the same pair of nodes. It is the data model behind many native graph databases and is queried with traversal languages such as Cypher and Gremlin.",
  "domain":"data",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:graph-data-model","label":"Graph Data Model"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:node","label":"Node"},
      {"@id":"urn:ngm:class:schema","label":"Schema"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:graph-database","label":"Graph Database"},
      {"@id":"urn:ngm:class:knowledge-representation","label":"Knowledge Representation"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:rdf","label":"RDF"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:knowledge-graph","label":"Knowledge Graph"},
      {"@id":"urn:ngm:class:structured-data","label":"Structured Data"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:knowledge-graph-embedding","label":"Knowledge Graph Embedding"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:data-model","label":"Data Model"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:sparql","label":"SPARQL"},
      {"@id":"urn:ngm:class:semantic-web","label":"Semantic Web"},
      {"@id":"urn:ngm:class:ontology","label":"Ontology"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A property graph attaches labels and key-value properties to every [[Node]] and edge.
	- It is the most common concrete [[Graph Data Model]] used by native graph databases.
	- It contrasts with the [[RDF]] triple model by treating edges as rich, identifiable objects.
- ### Overview
	- Nodes represent entities and may bear multiple labels grouping them into categories.
	- Edges are directed, typed and individually addressable, carrying their own properties.
	- Parallel edges of different types can connect the same pair of nodes without ambiguity.
	- The model favours expressive, locally annotated relationships over global statement triples.
- ### Key aspects
	- Properties on edges encode relationship attributes such as weight, timestamp or confidence.
	- Optional [[Schema]] constraints can enforce labels, property types and uniqueness.
	- Index-free adjacency stores neighbours with each node for fast traversal.
	- Traversal languages express variable-length paths and pattern matching directly.
- ### Applications
	- Powering a [[Knowledge Graph]] where relationship metadata is essential.
	- Modelling social, supply-chain and dependency networks as connected [[Structured Data]].
	- Recommendation and fraud analytics that depend on multi-hop relationship traversal.
	- Feeding [[Knowledge Graph Embedding]] pipelines that learn over typed edges.
- ### Relationships
	- subClassOf:: [[Graph Data Model]]
	- hasPart:: [[Node]]
	- hasPart:: [[Schema]]
	- uses:: [[Graph Database]]
	- uses:: [[Knowledge Representation]]
	- contrastsWith:: [[RDF]]
	- enables:: [[Knowledge Graph]]
	- enables:: [[Structured Data]]
	- supports:: [[Knowledge Graph Embedding]]
	- implements:: [[Data Model]]
	- relatedTo:: [[SPARQL]]
	- relatedTo:: [[Semantic Web]]
	- relatedTo:: [[Ontology]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
