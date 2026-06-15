public:: true

# Objective Function
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:objective-function",
  "@type": "Page",
  "title": "Objective Function",
  "vc:slug": "objective-function",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:objective-function",
  "@type": "Class",
  "label": "Objective Function",
  "definition": "An objective function is a scalar-valued function that quantifies the quality of a candidate solution, which an optimisation or learning process seeks to minimise or maximise. In machine learning it formalises the goal of training — for example minimising prediction error or maximising likelihood — so that algorithms can adjust parameters to improve it. The choice of objective function determines what a model is rewarded for, shaping its behaviour, biases and generalisation.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:optimisation",
      "label": "Optimisation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:optimization-algorithm",
        "label": "Optimization Algorithm"
      },
      {
        "@id": "urn:ngm:class:evaluation-metric",
        "label": "Evaluation Metric"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:learning-algorithm",
        "label": "Learning Algorithm"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:hyperparameter-tuning",
        "label": "Hyperparameter Tuning"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      },
      {
        "@id": "urn:ngm:class:evaluation-metric",
        "label": "Evaluation Metric"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:evaluation-metric",
        "label": "Evaluation Metric"
      },
      {
        "@id": "urn:ngm:class:loss-function",
        "label": "Loss Function"
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
        "@id": "urn:ngm:class:convex-optimisation",
        "label": "Convex Optimisation"
      },
      {
        "@id": "urn:ngm:class:optimization-algorithm",
        "label": "Optimization Algorithm"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:loss-function",
      "label": "Loss Function"
    },
    {
      "@id": "urn:ngm:class:reward-function",
      "label": "Reward Function"
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
  - An objective function is a scalar-valued function that quantifies the quality of a candidate solution, which an optimisation or learning process seeks to minimise or maximise. In machine learning it formalises the goal of training — for example minimising prediction error or maximising likelihood — so that algorithms can adjust parameters to improve it. The choice of objective function determines what a model is rewarded for, shaping its behaviour, biases and generalisation.
  - Related: [[Optimisation]] [[Loss Function]] [[Gradient Descent]] [[Evaluation Metric]]
- ### Overview
  - The objective function encodes, in a single number, what success means for an optimisation problem. Optimisers search the parameter or decision space to drive this value toward an optimum, often using gradient information where the function is differentiable. In supervised learning the objective is typically a loss to be minimised; in reinforcement learning it is a return to be maximised; in classical optimisation it may be cost, profit or risk subject to constraints. Properties such as convexity, smoothness and the presence of regularisation strongly affect tractability.
- ### Key aspects
  - Minimisation versus maximisation conventions
  - Convex versus non-convex landscapes
  - Differentiability and gradient availability
  - Regularisation terms and constraints
  - Surrogate objectives versus true evaluation metrics
  - Multi-objective and weighted formulations
- ### Applications
  - Defining training loss for supervised models
  - Specifying returns in reinforcement learning
  - Cost minimisation in operations research
  - Guiding hyperparameter optimisation
  - Formulating constrained engineering optimisation
- ### Relationships
  - subClassOf:: [[Optimisation]]
  - requires:: [[Optimization Algorithm]]
  - requires:: [[Evaluation Metric]]
  - uses:: [[Gradient Descent]]
  - enables:: [[Learning Algorithm]]
  - supports:: [[Hyperparameter Tuning]]
  - dependsOn:: [[Optimisation]]
  - dependsOn:: [[Evaluation Metric]]
  - implements:: [[Optimisation]]
  - contrastsWith:: [[Evaluation Metric]]
  - contrastsWith:: [[Loss Function]]
  - partOf:: [[Optimisation]]
  - relatedTo:: [[Convex Optimisation]]
  - relatedTo:: [[Optimization Algorithm]]
  - bridgesTo:: [[Machine Learning]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
