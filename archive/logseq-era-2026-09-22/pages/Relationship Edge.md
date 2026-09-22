public:: true

# Relationship Edge
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:relationship-edge",
  "@type": "Page",
  "vc:slug": "relationship-edge",
  "title": "Relationship Edge",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:relationship-edge",
  "@type": "Class",
  "label": "Relationship Edge",
  "definition": "A relationship edge is a directed or undirected connection in a graph that represents a typed association between two entity nodes, often carrying a label and properties. In knowledge and identity graphs, edges encode facts such as ownership, membership, or similarity that give the graph its semantic structure. Edge type and weight determine how the graph can be queried, traversed, and reasoned over.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-data-structure", "label": "Distributed Data Structure"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:identity-graph", "label": "Identity Graph"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A relationship edge is a typed, often property-bearing connection between nodes, the structural unit that gives a [[Knowledge Graph]] or [[Identity Graph]] its meaning.
- ### Content
  - Edges may be directed (subject to object) or undirected, and carry labels such as "owns" or "knows" plus optional weights and timestamps. Graph databases index edges to support efficient traversal, pattern matching, and inference, making edge design central to query expressiveness and performance.
