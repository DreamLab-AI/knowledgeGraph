public:: true

# Surrogate Model

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:surrogate-model",
  "@type": "Page",
  "title": "Surrogate Model",
  "vc:slug": "surrogate-model",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:surrogate-model",
  "@type": "Class",
  "label": "Surrogate Model",
  "definition": "A surrogate model (or metamodel) is an inexpensive, data-driven approximation of an expensive-to-evaluate function, simulation or experiment, used to predict outcomes without running the full computation. It is fitted to a sample of evaluations and then queried cheaply to explore the design space, drive optimisation or quantify uncertainty. Surrogate models are central to Bayesian optimisation, where a Gaussian process guides where to evaluate next.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning",
      "label": "Machine Learning"
    },
    {
      "@id": "urn:ngm:class:bayesian-optimisation",
      "label": "Bayesian Optimisation"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:gaussian-process",
        "label": "Gaussian Process"
      },
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      },
      {
        "@id": "urn:ngm:class:regression",
        "label": "Regression"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:bayesian-optimisation",
        "label": "Bayesian Optimisation"
      },
      {
        "@id": "urn:ngm:class:hyperparameter-optimisation",
        "label": "Hyperparameter Optimisation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      },
      {
        "@id": "urn:ngm:class:simulation",
        "label": "Simulation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:feature-engineering",
        "label": "Feature Engineering"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:regression",
        "label": "Regression"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:simulation",
        "label": "Simulation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:gaussian-process",
        "label": "Gaussian Process"
      },
      {
        "@id": "urn:ngm:class:hyperparameter-optimisation",
        "label": "Hyperparameter Optimisation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:gaussian-process",
      "label": "Gaussian Process"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A [[Surrogate Model]] is a cheap approximation of an expensive [[Simulation]] fitted by [[Regression]], using a [[Gaussian Process]] to drive [[Bayesian Optimisation]].
- ### Overview
  - When each evaluation of the true objective is costly (a simulation, physical experiment or model training run), a surrogate learns to predict its output from few samples.
  - The surrogate is queried cheaply to search the design space, screen candidates and target the next expensive evaluation.
  - Probabilistic surrogates, such as Gaussian processes, also quantify predictive uncertainty, enabling principled exploration.
  - Surrogates are iteratively refined as new true evaluations are added, improving accuracy where it matters.
- ### Mechanisms
  - Initial design of experiments sampling the input space.
  - Fitting a regression surrogate (Gaussian process, random forest, polynomial response surface).
  - Uncertainty quantification to balance exploration and exploitation.
  - Acquisition functions selecting the next point to evaluate.
  - Sequential refinement adding true evaluations to retrain the surrogate.
- ### Applications
  - Bayesian optimisation of machine-learning hyperparameters.
  - Engineering design optimisation over costly physics simulations.
  - Materials and drug discovery screening.
  - Real-time approximation of slow simulators in control and digital twins.
- ### Relationships
  - uses:: [[Gaussian Process]]
  - uses:: [[Supervised Learning]]
  - uses:: [[Regression]]
  - partOf:: [[Machine Learning]]
  - supports:: [[Bayesian Optimisation]]
  - supports:: [[Hyperparameter Optimisation]]
  - enables:: [[Optimisation]]
  - enables:: [[Simulation]]
  - requires:: [[Feature Engineering]]
  - implements:: [[Regression]]
  - contrastsWith:: [[Simulation]]
  - relatedTo:: [[Gaussian Process]]
  - relatedTo:: [[Hyperparameter Optimisation]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
