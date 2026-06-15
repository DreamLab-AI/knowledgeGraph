public:: true

# A Star Algorithm

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:a-star-algorithm",
  "@type": "Page",
  "title": "A Star Algorithm",
  "vc:slug": "a-star-algorithm",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:a-star-algorithm",
  "@type": "Class",
  "label": "A Star Algorithm",
  "definition": "The A Star algorithm is an informed graph-search method that finds a least-cost path between nodes by combining the accumulated cost from the start with a heuristic estimate of the remaining cost to the goal. By expanding the node with the lowest combined estimate, it guarantees an optimal path when the heuristic is admissible. A Star generalises Dijkstra's algorithm by adding goal-directed guidance.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:search-algorithm",
      "label": "Search Algorithm"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:informed-search",
        "label": "Informed Search"
      },
      {
        "@id": "urn:ngm:class:graph-search",
        "label": "Graph Search"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:cost-function",
        "label": "Cost Function"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cost-function",
        "label": "Cost Function"
      },
      {
        "@id": "urn:ngm:class:graph-search",
        "label": "Graph Search"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:search-algorithm",
        "label": "Search Algorithm"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:dijkstra-algorithm",
        "label": "Dijkstra Algorithm"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:pathfinding",
        "label": "Pathfinding"
      },
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:pathfinding",
        "label": "Pathfinding"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:graph-search",
        "label": "Graph Search"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:game-ai",
        "label": "Game AI"
      },
      {
        "@id": "urn:ngm:class:dijkstra-algorithm",
        "label": "Dijkstra Algorithm"
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
  - The A Star algorithm is an informed graph-search method that finds a least-cost path between nodes by combining the accumulated cost from the start with a heuristic estimate of the remaining cost to the goal. By expanding the node with the lowest combined estimate, it guarantees an optimal path when the heuristic is admissible. A Star generalises Dijkstra's algorithm by adding goal-directed guidance.
  - Related: [[Search Algorithm]] [[Pathfinding]] [[Dijkstra Algorithm]] [[Cost Function]]
- ### Overview
  - A Star maintains a priority queue ordered by the evaluation function f(n) = g(n) + h(n), where g is the cost so far and h is the heuristic estimate to the goal. Admissibility of the heuristic ensures optimality, while consistency additionally guarantees that nodes are never re-expanded.
- ### Mechanisms
  - Evaluation function combining path cost and heuristic estimate
  - Admissible heuristics guaranteeing optimal solutions
  - Priority queue expansion of the most promising node
  - Reduction to Dijkstra's algorithm when the heuristic is zero
  - Trade-off between heuristic accuracy and nodes expanded
- ### Applications
  - Pathfinding in robotics and autonomous navigation
  - Route planning in maps and logistics
  - Movement and navigation in game artificial intelligence
  - General least-cost search over weighted graphs
- ### Relationships
  - subClassOf:: [[Search Algorithm]]
  - implements:: [[Informed Search]]
  - implements:: [[Graph Search]]
  - hasPart:: [[Cost Function]]
  - uses:: [[Cost Function]]
  - uses:: [[Graph Search]]
  - partOf:: [[Search Algorithm]]
  - contrastsWith:: [[Dijkstra Algorithm]]
  - supports:: [[Pathfinding]]
  - supports:: [[Autonomous Navigation]]
  - enables:: [[Pathfinding]]
  - requires:: [[Graph Search]]
  - relatedTo:: [[Optimisation]]
  - relatedTo:: [[Robotics]]
  - relatedTo:: [[Game AI]]
  - relatedTo:: [[Dijkstra Algorithm]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
