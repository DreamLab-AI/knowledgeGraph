public:: true

# Depth-First Search
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:depth-first-search",
  "@type": "Page",
  "title": "Depth-First Search",
  "vc:slug": "depth-first-search",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:depth-first-search",
  "@type": "Class",
  "label": "Depth-First Search",
  "definition": "Depth-first search (DFS) is a graph and tree traversal algorithm that explores as far as possible along each branch before backtracking, following one path to its end before considering alternatives. It is naturally expressed through recursion or an explicit last-in-first-out stack and runs in time linear in the number of vertices and edges. DFS underpins many algorithms including topological sorting, cycle detection, finding connected components and solving maze and constraint problems through systematic backtracking.",
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
        "@id": "urn:ngm:class:breadth-first-search",
        "label": "Breadth-First Search"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:search-algorithms",
        "label": "Search Algorithms"
      },
      {
        "@id": "urn:ngm:class:dijkstra-algorithm",
        "label": "Dijkstra Algorithm"
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
  - Depth-first search (DFS) is a graph and tree traversal algorithm that explores as far as possible along each branch before backtracking, following one path to its end before considering alternatives. It is naturally expressed through recursion or an explicit last-in-first-out stack and runs in time linear in the number of vertices and edges. DFS underpins many algorithms including topological sorting, cycle detection, finding connected components and solving maze and constraint problems through systematic backtracking.
  - Related core concepts: [[Graph Algorithms]] [[Search Algorithm]] [[Graph Theory]] [[Pathfinding]]
- ### Overview
  - DFS dives down one branch of a graph until it can go no further, then backtracks to explore alternative branches.
  - It is implemented with recursion or an explicit stack and a visited set to prevent cycles.
  - DFS produces a spanning forest and classifies edges, enabling many derived algorithms.
- ### Mechanisms
  - Stack-driven exploration: the most recently discovered node is expanded first via recursion or an explicit stack.
  - Backtracking: when a branch is exhausted the algorithm returns to the last decision point.
  - Linear complexity: DFS runs in O(V+E) time and O(V) space for the recursion stack and markers.
  - Edge classification: tree, back, forward and cross edges support cycle and structure detection.
- ### Applications
  - Topological sorting of directed acyclic graphs.
  - Cycle detection and strongly connected component analysis.
  - Maze solving and constraint-satisfaction backtracking.
  - Finding connected components and articulation points.
- ### Relationships
  - partOf:: [[Graph Algorithms]]
  - implements:: [[Search Algorithm]]
  - implements:: [[Graph Search]]
  - requires:: [[Data Structure]]
  - uses:: [[Graph Theory]]
  - uses:: [[Algorithm]]
  - enables:: [[Pathfinding]]
  - contrastsWith:: [[Breadth-First Search]]
  - relatedTo:: [[Search Algorithms]]
  - relatedTo:: [[Dijkstra Algorithm]]
  - relatedTo:: [[AI Search]]
  - relatedTo:: [[Computer Science]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - attributedTo:: did:nostr:ontology-mesh
