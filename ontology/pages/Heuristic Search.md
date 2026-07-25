public:: true

# Heuristic Search

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:heuristic-search",
  "@type": "Page",
  "title": "Heuristic Search",
  "vc:slug": "heuristic-search",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:heuristic-search",
  "@type": "Class",
  "label": "Heuristic Search",
  "definition": "Heuristic search is a family of search algorithms that use a problem-specific evaluation function to estimate the cost or promise of candidate states, focusing exploration on the most promising regions of a search space. By trading exhaustive coverage for informed guidance, heuristic methods such as A* and best-first search solve large combinatorial problems that are intractable for uninformed search. The quality of the heuristic determines both efficiency and, in admissible cases, optimality.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:search-algorithm",
      "label": "Search Algorithm"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:search-algorithm",
        "label": "Search Algorithm"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:a-star-algorithm",
        "label": "A Star Algorithm"
      },
      {
        "@id": "urn:ngm:class:informed-search",
        "label": "Informed Search"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:graph-search",
        "label": "Graph Search"
      },
      {
        "@id": "urn:ngm:class:dijkstra-algorithm",
        "label": "Dijkstra Algorithm"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:classical-planning",
        "label": "Classical Planning"
      },
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:state-space-search",
        "label": "State Space Search"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:pathfinding",
        "label": "Pathfinding"
      },
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:game-playing",
        "label": "Game Playing"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:constraint-satisfaction",
        "label": "Constraint Satisfaction"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
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
  - [[Heuristic Search]] guides exploration of a [[State Space Search]] using an estimate of remaining cost, underpinning [[A Star Algorithm]], [[Informed Search]] and [[Pathfinding]].
- ### Overview
  - Heuristic search algorithms expand states in an order determined by an evaluation function f(n) that combines known cost and estimated future cost. The defining example, A*, uses f(n) = g(n) + h(n), where g is the path cost so far and h is a heuristic estimate to the goal. When h is admissible (never overestimates), A* returns optimal solutions while expanding far fewer nodes than uninformed methods.
  - The discipline studies how to derive heuristics automatically, how admissibility and consistency affect optimality, and how to bound memory through iterative-deepening and memory-bounded variants.
- ### Key aspects
  - Admissibility (h never overestimates) guarantees optimality; consistency guarantees no re-expansion.
  - The open and closed lists (frontier and explored set) structure the search.
  - Memory-bounded variants: IDA*, SMA*, and weighted A* for bounded-suboptimal speed.
  - Heuristic accuracy versus computation cost trade-off.
- ### Mechanisms
  - Best-first expansion ordered by f-value using a priority queue.
  - Relaxation-based heuristic derivation (ignore constraints to compute a lower bound).
  - Pattern databases and abstraction heuristics for large state spaces.
  - Tie-breaking and weighting to trade optimality for speed.
- ### Applications
  - Route and [[Pathfinding]] in maps, games, and networks.
  - Action planning in [[Classical Planning]] and [[Robotics]].
  - [[Game Playing]] and combinatorial puzzles.
  - Resource scheduling and [[Optimisation]] problems.
- ### Relationships
  - partOf:: [[Search Algorithm]]
  - hasPart:: [[A Star Algorithm]]
  - hasPart:: [[Informed Search]]
  - contrastsWith:: [[Graph Search]]
  - contrastsWith:: [[Dijkstra Algorithm]]
  - bridgesTo:: [[Classical Planning]]
  - bridgesTo:: [[Motion Planning]]
  - uses:: [[State Space Search]]
  - enables:: [[Pathfinding]]
  - enables:: [[Optimisation]]
  - supports:: [[Game Playing]]
  - supports:: [[Robotics]]
  - relatedTo:: [[Constraint Satisfaction]]
  - relatedTo:: [[Reinforcement Learning]]
  - relatedTo:: [[Artificial Intelligence]]
- ### Provenance
  - source:: GapMaterialisation
  - updated:: 2026-06-15
