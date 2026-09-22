public:: true

# Weighted Graph

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:weighted-graph", "@type": "Page", "title": "Weighted Graph", "vc:slug": "weighted-graph", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:weighted-graph",
  "@type": "Class",
  "label": "Weighted Graph",
  "definition": "A weighted graph is a graph in which each edge carries a numeric weight representing cost, distance, capacity or another quantity relevant to the traversal or connection it models. Weights generalise simple adjacency into a richer structure that supports shortest-path, minimum-spanning-tree and flow algorithms. Search algorithms such as A* use edge weights together with a heuristic to find least-cost paths efficiently.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:graph-theory",
      "label": "Graph Theory"
    }
  ],
  "relations": {
    "uses": [],
    "requires": [],
    "enables": [
      {
        "@id": "urn:ngm:class:a-star-algorithm",
        "label": "A Star Algorithm"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:graph-theory",
        "label": "Graph Theory"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- A weighted graph is a graph in which each edge carries a numeric weight representing cost, distance, capacity or another quantity relevant to the traversal or connection it models. Weights generalise simple adjacency into a richer structure that supports shortest-path, minimum-spanning-tree and flow algorithms. Search algorithms such as A* use edge weights together with a heuristic to find least-cost paths efficiently.
- ### Relationships
	- enables:: [[A Star Algorithm]]
	- partOf:: [[Graph Theory]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
