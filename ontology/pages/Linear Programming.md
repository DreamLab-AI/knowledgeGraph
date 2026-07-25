public:: true

# Linear Programming
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:linear-programming",
  "@type": "Page",
  "title": "Linear Programming",
  "vc:slug": "linear-programming",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:linear-programming",
  "@type": "Class",
  "label": "Linear Programming",
  "definition": "Linear Programming is a mathematical optimisation technique for finding the best outcome of a linear objective function subject to a set of linear equality and inequality constraints. The feasible region forms a convex polytope, and the optimum, when it exists, lies at a vertex, which algorithms such as the simplex method and interior-point methods exploit. Linear programming underpins resource allocation, scheduling, and planning problems across operations research and machine learning.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:optimisation",
      "label": "Optimisation"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:operations-research",
        "label": "Operations Research"
      },
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:objective-function",
        "label": "Objective Function"
      },
      {
        "@id": "urn:ngm:class:constraint-satisfaction",
        "label": "Constraint Satisfaction"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:convex-optimisation",
        "label": "Convex Optimisation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:resource-allocation",
        "label": "Resource Allocation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:combinatorial-optimisation",
        "label": "Combinatorial Optimisation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:operations-research",
        "label": "Operations Research"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:convex-optimisation",
        "label": "Convex Optimisation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:numerical-methods",
        "label": "Numerical Methods"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
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
  - Linear Programming is a mathematical optimisation technique for finding the best outcome of a linear objective function subject to a set of linear equality and inequality constraints. The feasible region forms a convex polytope, and the optimum, when it exists, lies at a vertex, which algorithms such as the simplex method and interior-point methods exploit. Linear programming underpins resource allocation, scheduling, and planning problems across operations research and machine learning.
  - Related concepts: [[Optimisation]] [[Operations Research]] [[Objective Function]] [[Convex Optimisation]] [[Linear Algebra]]
- ### Overview
  - Linear Programming formalises a wide class of decision problems where both goals and limits are linear. Because the feasible region is a convex polytope, an optimal solution is found at a vertex, enabling the simplex method to traverse vertices efficiently and interior-point methods to converge through the interior. Duality theory provides bounds, sensitivity analysis, and economic interpretation of constraints, making it a cornerstone of [[Operations Research]].
- ### Mechanisms
  - Linear [[Objective Function]] maximised or minimised over a convex polytope.
  - Linear equality and inequality [[Constraint Satisfaction]].
  - Simplex traversal of polytope vertices toward the optimum.
  - Interior-point methods for large-scale polynomial-time solutions.
  - Duality giving bounds and sensitivity analysis.
- ### Applications
  - Resource allocation and production planning.
  - Transportation and supply-chain scheduling.
  - Portfolio and blending optimisation.
  - Relaxations underpinning integer and [[Combinatorial Optimisation]].
- ### Relationships
  - partOf:: [[Operations Research]]
  - partOf:: [[Optimisation]]
  - hasPart:: [[Objective Function]]
  - hasPart:: [[Constraint Satisfaction]]
  - uses:: [[Linear Algebra]]
  - requires:: [[Convex Optimisation]]
  - enables:: [[Resource Allocation]]
  - contrastsWith:: [[Combinatorial Optimisation]]
  - supports:: [[Operations Research]]
  - dependsOn:: [[Convex Optimisation]]
  - relatedTo:: [[Numerical Methods]]
  - relatedTo:: [[Machine Learning]]
  - relatedTo:: [[Gradient Descent]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
