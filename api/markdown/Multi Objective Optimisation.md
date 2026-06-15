public:: true

# Multi Objective Optimisation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:multi-objective-optimisation",
  "@type": "Page",
  "title": "Multi Objective Optimisation",
  "vc:slug": "multi-objective-optimisation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:multi-objective-optimisation",
  "@type": "Class",
  "label": "Multi Objective Optimisation",
  "definition": "Multi-objective optimisation is the discipline of optimising two or more conflicting objective functions simultaneously, where improving one objective typically degrades another. Rather than a single optimum it yields a Pareto front of non-dominated trade-off solutions, from which a decision-maker selects according to preferences. It is solved with scalarisation, evolutionary, and gradient-based methods and is pervasive in engineering design, machine learning, and resource allocation.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:optimisation",
      "label": "Optimisation"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:evolutionary-algorithm",
        "label": "Evolutionary Algorithm"
      },
      {
        "@id": "urn:ngm:class:genetic-algorithm",
        "label": "Genetic Algorithm"
      },
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:hyperparameter-optimisation",
        "label": "Hyperparameter Optimisation"
      },
      {
        "@id": "urn:ngm:class:neural-architecture-search",
        "label": "Neural Architecture Search"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:model-comparison",
        "label": "Model Comparison"
      },
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:evaluation-metric",
        "label": "Evaluation Metric"
      },
      {
        "@id": "urn:ngm:class:simulated-annealing",
        "label": "Simulated Annealing"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:genetic-algorithm",
        "label": "Genetic Algorithm"
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
  - [[Multi Objective Optimisation]] simultaneously optimises several conflicting objectives, producing a Pareto front of trade-off solutions rather than one optimum.
  - It is a branch of [[Optimisation]] where no single solution dominates across all goals.
  - Practitioners select a final solution from the front according to declared preferences.
- ### Overview
  - When objectives conflict, the goal becomes finding the set of non-dominated (Pareto-optimal) solutions where no objective can improve without worsening another.
  - Methods either scalarise objectives into a single weighted goal or search the front directly with population-based heuristics such as a [[Genetic Algorithm]].
  - The decision-maker then applies preferences to pick a point on the front.
- ### Key aspects
  - Pareto dominance and the Pareto front as the solution concept.
  - Conflicting objectives with no universally best outcome.
  - Scalarisation versus population-based front approximation.
  - Diversity and convergence as joint quality measures.
- ### Mechanisms
  - Weighted-sum and epsilon-constraint scalarisation.
  - Evolutionary multi-objective algorithms (NSGA-II, MOEA/D) via an [[Evolutionary Algorithm]].
  - Hypervolume and crowding-distance indicators guiding selection.
  - Gradient-based methods for differentiable multi-loss settings.
- ### Applications
  - Engineering design balancing cost, weight, and performance.
  - Tuning accuracy versus latency in [[Hyperparameter Optimisation]].
  - Resource allocation and scheduling under competing constraints.
  - Trade-off analysis informing [[Model Comparison]].
- ### Relationships
  - implements:: [[Optimisation]]
  - requires:: [[Optimisation]]
  - uses:: [[Evolutionary Algorithm]]
  - uses:: [[Genetic Algorithm]]
  - uses:: [[Gradient Descent]]
  - enables:: [[Hyperparameter Optimisation]]
  - enables:: [[Neural Architecture Search]]
  - supports:: [[Model Comparison]]
  - supports:: [[Decision Making]]
  - partOf:: [[Optimisation]]
  - relatedTo:: [[Evaluation Metric]]
  - relatedTo:: [[Simulated Annealing]]
  - dependsOn:: [[Genetic Algorithm]]
- ### Provenance
  - inferenceRule:: GapMaterialisation
  - attributedTo:: did:nostr:ontology-mesh
  - updated:: 2026-06-15
