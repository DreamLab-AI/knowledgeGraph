public:: true

# Combinatorial Optimisation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:combinatorial-optimisation",
  "@type": "Page",
  "title": "Combinatorial Optimisation",
  "vc:slug": "combinatorial-optimisation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:combinatorial-optimisation",
  "@type": "Class",
  "label": "Combinatorial Optimisation",
  "definition": "Combinatorial optimisation is the study of finding an optimal object from a finite but typically enormous set of discrete candidate solutions. Problems are defined over discrete structures such as graphs, permutations and integer assignments, and many are NP-hard, meaning no known algorithm solves all instances efficiently. Practical approaches combine exact methods, approximation algorithms and metaheuristics to obtain good solutions within acceptable time bounds.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:optimisation",
      "label": "Optimisation"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      },
      {
        "@id": "urn:ngm:class:operations-research",
        "label": "Operations Research"
      }
    ],
    "dependsOn": [
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
        "@id": "urn:ngm:class:constraint-satisfaction",
        "label": "Constraint Satisfaction"
      },
      {
        "@id": "urn:ngm:class:logistics",
        "label": "Logistics"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:integer-programming",
        "label": "Integer Programming"
      },
      {
        "@id": "urn:ngm:class:linear-programming",
        "label": "Linear Programming"
      },
      {
        "@id": "urn:ngm:class:genetic-algorithm",
        "label": "Genetic Algorithm"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:convex-optimisation",
        "label": "Convex Optimisation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:mathematical-optimisation",
        "label": "Mathematical Optimisation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
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
  - A branch of [[Optimisation]] over discrete sets
  - Studied within [[Operations Research]]
  - Relies on [[Graph Theory]]
  - Contrasts with [[Convex Optimisation]]
- ### Overview
  - Combinatorial problems have discrete feasible sets that grow combinatorially with problem size.
  - Many canonical problems (TSP, knapsack, graph colouring) are NP-hard.
  - Solution strategies span exact branch-and-bound, approximation and metaheuristic search.
- ### Key aspects
  - Discrete feasible solution spaces
  - Computational complexity and NP-hardness
  - Exact methods: branch-and-bound, cutting planes
  - Approximation algorithms with quality bounds
  - Metaheuristics: local search, genetic algorithms
- ### Applications
  - Vehicle routing and logistics scheduling
  - Network design and facility location
  - Resource allocation and bin packing
  - Portfolio and assignment problems
- ### Relationships
  - partOf:: [[Optimisation]]
  - partOf:: [[Operations Research]]
  - dependsOn:: [[Graph Theory]]
  - dependsOn:: [[Algorithm]]
  - enables:: [[Constraint Satisfaction]]
  - enables:: [[Logistics]]
  - uses:: [[Integer Programming]]
  - uses:: [[Linear Programming]]
  - uses:: [[Genetic Algorithm]]
  - contrastsWith:: [[Convex Optimisation]]
  - relatedTo:: [[Mathematical Optimisation]]
  - requires:: [[Optimisation]]
  - supports:: [[Decision Making]]
- ### Provenance
  - updated:: 2026-06-15
