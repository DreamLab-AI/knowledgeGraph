public:: true

# Dynamic Programming
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:dynamic-programming",
  "@type": "Page",
  "title": "Dynamic Programming",
  "vc:slug": "dynamic-programming",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:dynamic-programming",
  "@type": "Class",
  "label": "Dynamic Programming",
  "definition": "Dynamic programming is an algorithmic technique for solving problems by breaking them into overlapping subproblems whose solutions are stored and reused rather than recomputed. It applies to problems exhibiting optimal substructure, combining subproblem solutions to construct an optimal whole. By memoising or tabulating intermediate results it converts exponential brute-force searches into polynomial-time algorithms.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:programming-paradigm",
      "label": "Programming Paradigm"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:programming-paradigm",
        "label": "Programming Paradigm"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:optimization-algorithm",
        "label": "Optimization Algorithm"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:algorithm",
        "label": "Algorithm"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:markov-decision-process",
        "label": "Markov Decision Process"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:algorithm",
        "label": "Algorithm"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:optimization-algorithm",
        "label": "Optimization Algorithm"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:markov-decision-process",
        "label": "Markov Decision Process"
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
  - [[Dynamic Programming]] solves problems by decomposing them into overlapping subproblems and reusing stored solutions.
  - It is an algorithmic [[Programming Paradigm]] applicable to problems with optimal substructure.
  - It underlies many [[Optimization Algorithm]] designs and the value computations in [[Reinforcement Learning]].
- ### Overview
  - Dynamic programming exploits two structural properties: optimal substructure and overlapping subproblems.
  - It avoids the exponential blow-up of naive recursion by caching results (memoisation) or building tables bottom-up.
  - The technique trades memory for time, turning intractable searches into efficient computations.
  - It is a foundation for sequential decision problems and the Bellman equation in [[Markov Decision Process]] settings.
- ### Mechanisms
  - Top-down memoisation recurses while caching solved subproblems.
  - Bottom-up tabulation fills a table of subproblem solutions in dependency order.
  - State definition and transition recurrence capture how subproblems compose.
  - Reconstruction recovers the optimal solution from the stored decisions.
- ### Applications
  - Shortest-path and graph optimisation algorithms.
  - Sequence alignment and edit-distance problems in bioinformatics and text.
  - Resource allocation, knapsack and scheduling optimisation.
  - Policy and value iteration in [[Reinforcement Learning]] and control.
- ### Relationships
  - partOf:: [[Programming Paradigm]]
  - implements:: [[Optimization Algorithm]]
  - uses:: [[Algorithm]]
  - enables:: [[Reinforcement Learning]]
  - supports:: [[Markov Decision Process]]
  - contrastsWith:: [[Algorithm]]
  - requires:: [[Optimization Algorithm]]
  - relatedTo:: [[Gradient Descent]]
  - relatedTo:: [[Reinforcement Learning]]
  - relatedTo:: [[Markov Decision Process]]
- ### Provenance
  - updated:: 2026-06-15
