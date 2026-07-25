public:: true

# Second Order Optimisation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:second-order-optimisation",
  "@type": "Page",
  "title": "Second Order Optimisation",
  "vc:slug": "second-order-optimisation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:second-order-optimisation",
  "@type": "Class",
  "label": "Second Order Optimisation",
  "definition": "Second-order optimisation is a family of optimisation methods that use second-derivative (curvature) information, typically the Hessian matrix or its approximations, to determine search directions and step sizes. By accounting for the curvature of the objective, these methods can converge in far fewer iterations than first-order methods near a minimum, at the cost of higher per-iteration computation and memory. Examples include Newton's method, quasi-Newton methods such as L-BFGS, and conjugate-gradient approaches.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:convex-optimisation",
      "label": "Convex Optimisation"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:convex-optimisation",
        "label": "Convex Optimisation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:stochastic-gradient-descent",
        "label": "Stochastic Gradient Descent"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:loss-function",
        "label": "Loss Function"
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
        "@id": "urn:ngm:class:convergence",
        "label": "Convergence"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:optimiser",
        "label": "Optimiser"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:optimiser",
        "label": "Optimiser"
      },
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:convergence",
        "label": "Convergence"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:optimiser",
        "label": "Optimiser"
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
  - Second-order optimisation uses curvature information to optimise objectives, an approach in [[Convex Optimisation]].
  - It contrasts with first-order [[Gradient Descent]] by exploiting the Hessian.
  - It can accelerate [[Convergence]] near a minimum at higher cost per step.
- ### Overview
  - Uses second derivatives (the Hessian) to model local curvature.
  - Newton's method takes the inverse-Hessian-scaled gradient step.
  - Quasi-Newton methods such as L-BFGS approximate the Hessian to save memory.
- ### Mechanisms
  - Hessian or curvature-matrix estimation.
  - Newton and quasi-Newton update rules.
  - Trust-region and line-search globalisation strategies.
  - Trade-off: fast convergence versus high per-iteration cost.
- ### Applications
  - Training smaller or convex machine-learning models.
  - Logistic regression and conditional random fields.
  - Scientific computing and numerical optimisation.
  - Fine-tuning where second-order curvature aids conditioning.
- ### Relationships
  - partOf:: [[Convex Optimisation]]
  - contrastsWith:: [[Gradient Descent]]
  - contrastsWith:: [[Stochastic Gradient Descent]]
  - uses:: [[Loss Function]]
  - requires:: [[Convex Optimisation]]
  - enables:: [[Convergence]]
  - supports:: [[Optimiser]]
  - supports:: [[Machine Learning]]
  - relatedTo:: [[Optimiser]]
  - relatedTo:: [[Gradient Descent]]
  - relatedTo:: [[Convergence]]
  - dependsOn:: [[Machine Learning]]
  - implements:: [[Optimiser]]
- ### Provenance
  - updated:: 2026-06-15
