public:: true

# Mean Squared Error
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ccbef70a9a1d70e093884a49ffc460301b65d3825c7d0fd0a7523430da44d315",
  "@type": "Page",
  "vc:slug": "mean-squared-error",
  "title": "Mean Squared Error",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:statistics",
      "vc:label": "Statistics"
    },
    {
      "@id": "urn:visionflow:linked:probability-theory",
      "vc:label": "Probability Theory"
    },
    {
      "@id": "urn:visionflow:linked:supervised-learning",
      "vc:label": "Supervised Learning"
    },
    {
      "@id": "urn:visionflow:linked:gradient-descent",
      "vc:label": "Gradient Descent"
    },
    {
      "@id": "urn:visionflow:linked:loss-function",
      "vc:label": "Loss Function"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Mean Squared Error"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mean-squared-error",
  "@type": "Class",
  "label": "Mean Squared Error",
  "definition": "A measure of the average squared difference between predicted values and observed values, widely used to quantify estimation and prediction error in regression and statistical learning.",
  "domain": "machine-learning",
  "maturity": "mature",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:loss-function",
      "label": "Loss Function"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:statistics",
        "label": "Statistics"
      },
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      },
      {
        "@id": "urn:ngm:class:regression",
        "label": "Regression"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      },
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      },
      {
        "@id": "urn:ngm:class:hyperparameter-tuning",
        "label": "Hyperparameter Tuning"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:backpropagation",
        "label": "Backpropagation"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:bias-variance-tradeoff",
        "label": "Bias-Variance Tradeoff"
      },
      {
        "@id": "urn:ngm:class:residual",
        "label": "Residual"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:mean-absolute-error",
        "label": "Mean Absolute Error"
      },
      {
        "@id": "urn:ngm:class:cross-entropy-loss",
        "label": "Cross-Entropy Loss"
      },
      {
        "@id": "urn:ngm:class:huber-loss",
        "label": "Huber Loss"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:root-mean-squared-error",
        "label": "Root Mean Squared Error"
      },
      {
        "@id": "urn:ngm:class:r-squared",
        "label": "R-Squared"
      },
      {
        "@id": "urn:ngm:class:regularisation",
        "label": "Regularisation"
      },
      {
        "@id": "urn:ngm:class:overfitting",
        "label": "Overfitting"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      },
      {
        "@id": "urn:ngm:class:data",
        "label": "Data"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:mse",
      "label": "MSE"
    },
    {
      "@id": "urn:ngm:class:l2-loss",
      "label": "L2 Loss"
    },
    {
      "@id": "urn:ngm:class:quadratic-loss",
      "label": "Quadratic Loss"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:mean-squared-error:299c0b5f7107",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ccbef70a9a1d70e093884a49ffc460301b65d3825c7d0fd0a7523430da44d315"
  },
  "vc:resolutions": [
    {
      "raw": "[[Statistics]]",
      "resolved": "urn:visionflow:linked:statistics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Probability Theory]]",
      "resolved": "urn:visionflow:linked:probability-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Supervised Learning]]",
      "resolved": "urn:visionflow:linked:supervised-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Gradient Descent]]",
      "resolved": "urn:visionflow:linked:gradient-descent",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Loss Function]]",
      "resolved": "urn:visionflow:linked:loss-function",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A measure of the average squared difference between predicted values and observed values, widely used to quantify estimation and prediction error.

- ### Semantic Classification
  - owl-class:: mathematics:MeanSquaredError
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Loss Function]]
  - bridges-to:: [[Gradient Descent]]
  - requires:: [[Statistics]], [[Probability Theory]]
  - enables:: [[Supervised Learning]]

- ### Content
  - Mean squared error averages the squared residuals between predictions and targets, penalising larger errors disproportionately. It decomposes into bias and variance components, linking it directly to statistical learning theory.
  - As a differentiable loss function it is convenient for optimisation by gradient descent and is a default choice for regression tasks in supervised learning.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
