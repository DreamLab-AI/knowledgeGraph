public:: true

# Model Complexity

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:model-complexity", "@type": "Page", "title": "Model Complexity", "vc:slug": "model-complexity", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-complexity",
  "@type": "Class",
  "label": "Model Complexity",
  "definition": "Model complexity is a measure of the capacity of a machine-learning model to fit varied patterns in data, governed by factors such as the number of parameters, the richness of the hypothesis space, and the flexibility of the functional form. Higher complexity lets a model capture intricate structure but raises the risk of overfitting, while lower complexity risks underfitting. Managing complexity is central to achieving good generalisation on unseen data.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning",
      "label": "Machine Learning"
    },
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:number-of-parameters",
        "label": "Number of Parameters"
      },
      {
        "@id": "urn:ngm:class:vc-dimension",
        "label": "VC Dimension"
      },
      {
        "@id": "urn:ngm:class:model-capacity",
        "label": "Model Capacity"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:number-of-parameters",
        "label": "Number of Parameters"
      },
      {
        "@id": "urn:ngm:class:hyperparameter",
        "label": "Hyperparameter"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-capacity",
        "label": "Model Capacity"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:regularisation",
        "label": "Regularisation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cross-validation",
        "label": "Cross-Validation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:generalisation",
        "label": "Generalisation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:bias-variance-tradeoff",
        "label": "Bias-Variance Tradeoff"
      },
      {
        "@id": "urn:ngm:class:model-interpretability",
        "label": "Model Interpretability"
      },
      {
        "@id": "urn:ngm:class:hyperparameter",
        "label": "Hyperparameter"
      },
      {
        "@id": "urn:ngm:class:occams-razor",
        "label": "Occam's Razor"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:overfitting",
        "label": "Overfitting"
      },
      {
        "@id": "urn:ngm:class:underfitting",
        "label": "Underfitting"
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
  - Model complexity is a measure of the capacity of a machine-learning model to fit varied patterns in data, governed by factors such as the number of parameters, the richness of the hypothesis space, and the flexibility of the functional form. Higher complexity lets a model capture intricate structure but raises the risk of overfitting, while lower complexity risks underfitting. Managing complexity is central to achieving good generalisation on unseen data.
  - Related concepts: [[Machine Learning]] [[Bias-Variance Tradeoff]] [[Overfitting]] [[Regularisation]] [[Generalisation]]
- ### Overview
  - Complexity determines where a model sits on the bias-variance spectrum. A model that is too simple has high bias and underfits, failing to capture the signal; a model that is too complex has high variance and overfits, memorising noise. Practitioners control complexity through architecture choices, the number of parameters, and hyperparameters, then constrain effective complexity with regularisation, early stopping, and cross-validation. The guiding intuition, echoing Occam's razor, is to prefer the simplest model that adequately explains the data.
- ### Key aspects
  - Capacity measures: parameter count, VC dimension, and Rademacher complexity quantifying expressiveness.
  - Bias-variance trade-off: balancing underfitting against overfitting as complexity rises.
  - Effective complexity: regularisation and early stopping reduce a model's usable capacity below its nominal size.
  - Model selection: cross-validation and information criteria choose complexity that generalises best.
  - Interpretability cost: greater complexity typically reduces transparency and explainability.
- ### Applications
  - Choosing network depth and width in deep learning.
  - Tuning regularisation strength to control overfitting.
  - Model selection across candidate algorithms via validation curves.
  - Trading predictive power against interpretability in regulated decisioning.
- ### Relationships
  - partOf:: [[Machine Learning]]
  - hasPart:: [[Number of Parameters]]
  - hasPart:: [[VC Dimension]]
  - hasPart:: [[Model Capacity]]
  - dependsOn:: [[Number of Parameters]]
  - dependsOn:: [[Hyperparameter]]
  - enables:: [[Model Capacity]]
  - requires:: [[Regularisation]]
  - uses:: [[Cross-Validation]]
  - supports:: [[Generalisation]]
  - relatedTo:: [[Bias-Variance Tradeoff]]
  - relatedTo:: [[Model Interpretability]]
  - relatedTo:: [[Hyperparameter]]
  - relatedTo:: [[Occam's Razor]]
  - contrastsWith:: [[Overfitting]]
  - contrastsWith:: [[Underfitting]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
