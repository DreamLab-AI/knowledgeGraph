public:: true

# Heuristic Function

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:heuristic-function",
  "@type": "Page",
  "title": "Heuristic Function",
  "vc:slug": "heuristic-function",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:heuristic-function",
  "@type": "Class",
  "label": "Heuristic Function",
  "definition": "A heuristic function is an estimating function used in search and optimisation that approximates the cost or distance from a given state to a goal state. It guides informed search algorithms by prioritising the exploration of states that appear most promising, trading guaranteed optimality for improved efficiency. A heuristic is admissible when it never overestimates the true cost, and consistent when it satisfies the triangle inequality, properties that determine the optimality guarantees of algorithms that use it.",
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
        "@id": "urn:ngm:class:informed-search",
        "label": "Informed Search"
      },
      {
        "@id": "urn:ngm:class:search-algorithm",
        "label": "Search Algorithm"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:pathfinding",
        "label": "Pathfinding"
      },
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cost-function",
        "label": "Cost Function"
      },
      {
        "@id": "urn:ngm:class:algorithm",
        "label": "Algorithm"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:task-planning",
        "label": "Task Planning"
      },
      {
        "@id": "urn:ngm:class:planning",
        "label": "Planning"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      },
      {
        "@id": "urn:ngm:class:state-space",
        "label": "State Space"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:constraint-satisfaction",
        "label": "Constraint Satisfaction"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:graph-theory",
        "label": "Graph Theory"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Estimates cost to a goal in [[Search Algorithm]]
  - Drives [[Informed Search]]
  - Enables efficient [[Pathfinding]]
  - Builds on a [[Cost Function]]
- ### Overview
  - Heuristics encode domain knowledge that ranks candidate states by estimated remaining cost.
  - Admissibility and consistency determine whether algorithms such as A* return optimal solutions.
  - Well-designed heuristics dramatically prune the search space while preserving solution quality.
- ### Key aspects
  - Admissibility (never overestimates true cost)
  - Consistency (monotonic, triangle inequality)
  - Dominance and informedness comparisons
  - Heuristic design: relaxation, pattern databases
  - Trade-off between accuracy and computation cost
- ### Applications
  - A* and best-first search pathfinding
  - Automated [[Task Planning]] and scheduling
  - Game tree evaluation and move ordering
  - Routing and navigation systems
- ### Relationships
  - partOf:: [[Informed Search]]
  - partOf:: [[Search Algorithm]]
  - enables:: [[Pathfinding]]
  - enables:: [[Decision Making]]
  - uses:: [[Cost Function]]
  - uses:: [[Algorithm]]
  - supports:: [[Task Planning]]
  - supports:: [[Planning]]
  - dependsOn:: [[Optimisation]]
  - dependsOn:: [[State Space]]
  - contrastsWith:: [[Constraint Satisfaction]]
  - requires:: [[Artificial Intelligence]]
  - relatedTo:: [[Graph Theory]]
- ### Provenance
  - updated:: 2026-06-15
