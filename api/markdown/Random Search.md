public:: true

# Random Search

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:random-search",
  "@type": "Page",
  "title": "Random Search",
  "vc:slug": "random-search",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:random-search",
  "@type": "Class",
  "label": "Random Search",
  "definition": "Random search is a hyperparameter-optimisation method that samples hyperparameter configurations at random from specified distributions over the search space, rather than evaluating a fixed grid. For a given evaluation budget it often outperforms grid search because it explores more distinct values of the most influential hyperparameters. It is simple, parallelisable, and a strong baseline for automated tuning.",
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
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      },
      {
        "@id": "urn:ngm:class:search-space",
        "label": "Search Space"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:grid-search",
        "label": "Grid Search"
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
    "relatedTo": [
      {
        "@id": "urn:ngm:class:stochastic-optimisation",
        "label": "Stochastic Optimisation"
      },
      {
        "@id": "urn:ngm:class:monte-carlo-methods",
        "label": "Monte Carlo Method"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:model-selection",
        "label": "Model Selection"
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
  - Random search is a hyperparameter-optimisation method that samples hyperparameter configurations at random from specified distributions over the search space, rather than evaluating a fixed grid. For a given evaluation budget it often outperforms grid search because it explores more distinct values of the most influential hyperparameters. It is simple, parallelisable, and a strong baseline for automated tuning.
  - Related: [[Hyperparameter Optimisation]] [[Sampling]] [[Grid Search]] [[Search Space]] [[Model Selection]]
- ### Overview
  - Random search draws configurations independently from user-specified distributions, for example uniform over an interval or log-uniform for scale parameters. Because real hyperparameter landscapes are typically dominated by a few influential parameters, random sampling tends to cover the important dimensions more thoroughly than a grid given the same budget, which wastes evaluations on unimportant combinations. The method is trivially parallel and frequently used as a competitive baseline before more sophisticated optimisers.
- ### Mechanisms
  - Samples configurations independently from chosen distributions.
  - Covers influential hyperparameters more densely than a fixed grid.
  - Decouples the evaluation budget from the number of hyperparameters.
  - Supports continuous and log-scaled parameter ranges.
  - Embarrassingly parallel and easy to implement.
- ### Applications
  - Efficient tuning under a fixed compute budget.
  - Tuning high-dimensional hyperparameter spaces.
  - Strong baseline against grid and Bayesian methods.
  - Neural-network architecture and training hyperparameters.
  - Warm-starting more advanced search procedures.
- ### Relationships
  - uses:: [[Sampling]]
  - uses:: [[Search Space]]
  - contrastsWith:: [[Grid Search]]
  - contrastsWith:: [[Bayesian Optimisation]]
  - partOf:: [[Hyperparameter Optimisation]]
  - implements:: [[Hyperparameter Tuning]]
  - enables:: [[Model Selection]]
  - dependsOn:: [[Search Space]]
  - dependsOn:: [[Machine Learning]]
  - relatedTo:: [[Stochastic Optimisation]]
  - relatedTo:: [[Monte Carlo Method]]
  - supports:: [[Model Selection]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
