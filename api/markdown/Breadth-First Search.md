public:: true

# Breadth-First Search
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:breadth-first-search",
  "@type": "Page",
  "title": "Breadth-First Search",
  "vc:slug": "breadth-first-search",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:breadth-first-search",
  "@type": "Class",
  "label": "Breadth-First Search",
  "definition": "Breadth-first search (BFS) is a graph and tree traversal algorithm that explores all neighbours of a node before moving to nodes at the next depth level, expanding the search frontier in order of increasing distance from the source. It is implemented with a first-in-first-out queue and, on unweighted graphs, finds the shortest path in terms of edge count from the start vertex to every reachable vertex. BFS runs in time linear in the number of vertices and edges and is foundational to pathfinding, connectivity analysis and level-order processing.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:graph-algorithms",
      "label": "Graph Algorithms"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:graph-algorithms",
        "label": "Graph Algorithms"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:search-algorithm",
        "label": "Search Algorithm"
      },
      {
        "@id": "urn:ngm:class:graph-search",
        "label": "Graph Search"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-structure",
        "label": "Data Structure"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:graph-theory",
        "label": "Graph Theory"
      },
      {
        "@id": "urn:ngm:class:algorithm",
        "label": "Algorithm"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:pathfinding",
        "label": "Pathfinding"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:depth-first-search",
        "label": "Depth-First Search"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:dijkstra-algorithm",
        "label": "Dijkstra Algorithm"
      },
      {
        "@id": "urn:ngm:class:search-algorithms",
        "label": "Search Algorithms"
      },
      {
        "@id": "urn:ngm:class:node",
        "label": "Node"
      },
      {
        "@id": "urn:ngm:class:ai-search",
        "label": "AI Search"
      },
      {
        "@id": "urn:ngm:class:computer-science",
        "label": "Computer Science"
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
  - Breadth-first search (BFS) is a graph and tree traversal algorithm that explores all neighbours of a node before moving to nodes at the next depth level, expanding the search frontier in order of increasing distance from the source. It is implemented with a first-in-first-out queue and, on unweighted graphs, finds the shortest path in terms of edge count from the start vertex to every reachable vertex. BFS runs in time linear in the number of vertices and edges and is foundational to pathfinding, connectivity analysis and level-order processing.
  - Related core concepts: [[Graph Algorithms]] [[Search Algorithm]] [[Pathfinding]] [[Graph Theory]]
- ### Overview
  - BFS explores a graph layer by layer, visiting all nodes at distance k before any at distance k+1 from the source.
  - It uses a FIFO queue to manage the frontier and a visited set to avoid revisiting nodes.
  - On unweighted graphs BFS yields shortest paths in terms of number of edges from the start vertex.
- ### Mechanisms
  - Queue-driven frontier: nodes are dequeued in discovery order, ensuring level-by-level expansion.
  - Shortest paths: distances recorded during traversal are optimal for unweighted graphs.
  - Linear complexity: BFS runs in O(V+E) time and O(V) space for the frontier and visited markers.
  - Completeness: BFS will find a solution if one exists, exploring the shallowest goals first.
- ### Applications
  - Shortest-path routing in unweighted networks.
  - Connectivity and reachability analysis.
  - Web crawling and social-network neighbourhood exploration.
  - Level-order processing of trees and state-space search.
- ### Relationships
  - partOf:: [[Graph Algorithms]]
  - implements:: [[Search Algorithm]]
  - implements:: [[Graph Search]]
  - requires:: [[Data Structure]]
  - uses:: [[Graph Theory]]
  - uses:: [[Algorithm]]
  - enables:: [[Pathfinding]]
  - contrastsWith:: [[Depth-First Search]]
  - relatedTo:: [[Dijkstra Algorithm]]
  - relatedTo:: [[Search Algorithms]]
  - relatedTo:: [[Node]]
  - relatedTo:: [[AI Search]]
  - relatedTo:: [[Computer Science]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - attributedTo:: did:nostr:ontology-mesh
