public:: true

# Support Vector Machine
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:support-vector-machine",
  "@type": "Page",
  "title": "Support Vector Machine",
  "vc:slug": "support-vector-machine",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:support-vector-machine",
  "@type": "Class",
  "label": "Support Vector Machine",
  "definition": "A support vector machine (SVM) is a supervised learning model that finds the hyperplane separating classes with the maximum margin between the nearest training examples, called support vectors. Through the kernel trick it can construct non-linear decision boundaries by implicitly mapping inputs into higher-dimensional feature spaces. SVMs are grounded in statistical learning theory and are effective for classification and regression on small to medium, high-dimensional datasets.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:supervised-learning",
      "label": "Supervised Learning"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
      },
      {
        "@id": "urn:ngm:class:regression",
        "label": "Regression"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:statistical-learning-theory",
        "label": "Statistical Learning Theory"
      },
      {
        "@id": "urn:ngm:class:optimization-algorithm",
        "label": "Optimization Algorithm"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:labelled-dataset",
        "label": "Labelled Dataset"
      },
      {
        "@id": "urn:ngm:class:feature-engineering",
        "label": "Feature Engineering"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:overfitting",
        "label": "Overfitting"
      },
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
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
  - A [[Support Vector Machine]] is a [[Supervised Learning]] model that maximises the margin between classes using support vectors.
  - It performs [[Classification]] and [[Regression]] and is grounded in [[Statistical Learning Theory]].
  - Non-linear decision boundaries arise from the kernel trick over an implicit feature space.
- ### Overview
  - SVMs reframe learning as a convex optimisation problem with a unique global solution.
  - The maximum-margin principle provides good generalisation and resistance to [[Overfitting]] in high dimensions.
  - Kernels (linear, polynomial, RBF) let the same algorithm fit a wide range of decision surfaces.
  - SVMs were dominant before the deep-learning era and remain strong on small, structured datasets.
- ### Mechanisms
  - The optimisation maximises the margin subject to correct (soft) classification of training points.
  - Support vectors are the boundary examples that define the separating hyperplane.
  - The kernel trick computes inner products in feature space without explicit mapping.
  - The soft-margin parameter trades classification errors against margin width.
- ### Applications
  - Text and document classification with high-dimensional sparse features.
  - Bioinformatics tasks such as protein and gene classification.
  - Image recognition before convolutional networks became standard.
  - Anomaly detection via one-class formulations.
- ### Relationships
  - partOf:: [[Supervised Learning]]
  - implements:: [[Classification]]
  - implements:: [[Regression]]
  - uses:: [[Statistical Learning Theory]]
  - uses:: [[Optimization Algorithm]]
  - requires:: [[Labelled Dataset]]
  - requires:: [[Feature Engineering]]
  - enables:: [[Model Evaluation]]
  - supports:: [[Machine Learning]]
  - contrastsWith:: [[Neural Network]]
  - contrastsWith:: [[Deep Learning]]
  - relatedTo:: [[Overfitting]]
  - relatedTo:: [[Classification]]
- ### Provenance
  - updated:: 2026-06-15
