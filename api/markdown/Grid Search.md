public:: true

# Grid Search

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:grid-search",
  "@type": "Page",
  "title": "Grid Search",
  "vc:slug": "grid-search",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:grid-search",
  "@type": "Class",
  "label": "Grid Search",
  "definition": "Grid search is a hyperparameter-optimisation method that exhaustively evaluates every combination of values drawn from a predefined discrete grid over the hyperparameter space. Each candidate configuration is trained and scored, typically using cross-validation, and the best-performing combination is selected. Grid search is simple and fully parallelisable but scales exponentially with the number of hyperparameters.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:hyperparameter-optimisation",
      "label": "Hyperparameter Optimisation"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:cross-validation",
        "label": "Cross Validation"
      },
      {
        "@id": "urn:ngm:class:search-space",
        "label": "Search Space"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:random-search",
        "label": "Random Search"
      },
      {
        "@id": "urn:ngm:class:bayesian-optimisation",
        "label": "Bayesian Optimisation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:hyperparameter-optimisation",
        "label": "Hyperparameter Optimisation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:hyperparameter-tuning",
        "label": "Hyperparameter Tuning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-selection",
        "label": "Model Selection"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:search-space",
        "label": "Search Space"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:model-selection",
        "label": "Model Selection"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:random-search",
        "label": "Random Search"
      },
      {
        "@id": "urn:ngm:class:parallel-computing",
        "label": "Parallel Computing"
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
  - Grid search is a hyperparameter-optimisation method that exhaustively evaluates every combination of values drawn from a predefined discrete grid over the hyperparameter space. Each candidate configuration is trained and scored, typically using cross-validation, and the best-performing combination is selected. Grid search is simple and fully parallelisable but scales exponentially with the number of hyperparameters.
  - Related: [[Hyperparameter Optimisation]] [[Cross Validation]] [[Random Search]] [[Model Selection]] [[Search Space]]
- ### Overview
  - In grid search the practitioner specifies a finite set of candidate values for each hyperparameter, and the algorithm forms the Cartesian product of those sets. Every resulting configuration is trained and evaluated, usually with cross-validation to reduce variance, and the configuration with the best validation score is chosen. Because the configurations are independent, the search embarrasingly parallelises; however, the number of evaluations grows multiplicatively with each added hyperparameter, a phenomenon known as the curse of dimensionality.
- ### Mechanisms
  - Forms the Cartesian product of discrete candidate values.
  - Evaluates every configuration, typically via cross-validation.
  - Fully parallelisable since configurations are independent.
  - Cost grows exponentially with the number of hyperparameters.
  - Quality is limited by the resolution of the chosen grid.
- ### Applications
  - Tuning regularisation and learning-rate parameters.
  - Selecting kernel and margin settings for support-vector machines.
  - Optimising tree depth and ensemble size.
  - Small hyperparameter spaces where exhaustive search is feasible.
  - Baseline comparison against smarter search strategies.
- ### Relationships
  - uses:: [[Cross Validation]]
  - uses:: [[Search Space]]
  - contrastsWith:: [[Random Search]]
  - contrastsWith:: [[Bayesian Optimisation]]
  - partOf:: [[Hyperparameter Optimisation]]
  - implements:: [[Hyperparameter Tuning]]
  - enables:: [[Model Selection]]
  - dependsOn:: [[Search Space]]
  - dependsOn:: [[Machine Learning]]
  - supports:: [[Model Selection]]
  - relatedTo:: [[Random Search]]
  - relatedTo:: [[Parallel Computing]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
