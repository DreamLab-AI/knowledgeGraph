public:: true

# Random Forest

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:random-forest",
  "@type": "Page",
  "title": "Random Forest",
  "vc:slug": "random-forest",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:random-forest",
  "@type": "Class",
  "label": "Random Forest",
  "definition": "A random forest is an ensemble learning method that constructs many decision trees and aggregates their predictions, typically by majority vote for classification or averaging for regression. Each tree is trained on a bootstrap sample of the data and considers a random subset of features at each split, which decorrelates the trees and reduces variance. The resulting model is robust, resistant to overfitting, and provides built-in estimates of feature importance.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decision-tree",
      "label": "Decision Tree"
    },
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:decision-tree",
        "label": "Decision Tree"
      },
      {
        "@id": "urn:ngm:class:feature-importance",
        "label": "Feature Importance"
      },
      {
        "@id": "urn:ngm:class:cross-validation",
        "label": "Cross Validation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:decision-tree",
        "label": "Decision Tree"
      },
      {
        "@id": "urn:ngm:class:bagging",
        "label": "Bagging"
      },
      {
        "@id": "urn:ngm:class:feature-selection",
        "label": "Feature Selection"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:feature-importance",
        "label": "Feature Importance"
      },
      {
        "@id": "urn:ngm:class:interpretability",
        "label": "Interpretability"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:boosting",
        "label": "Boosting"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:feature-engineering",
        "label": "Feature Engineering"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cross-validation",
        "label": "Cross Validation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
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
  - A random forest is an ensemble learning method that constructs many decision trees and aggregates their predictions, typically by majority vote for classification or averaging for regression. Each tree is trained on a bootstrap sample of the data and considers a random subset of features at each split, which decorrelates the trees and reduces variance. The resulting model is robust, resistant to overfitting, and provides built-in estimates of feature importance.
  - Related concepts: [[Decision Tree]] [[Bagging]] [[Feature Importance]] [[Supervised Learning]] [[Boosting]]
- ### Overview
  - Random forests combine bootstrap aggregation (bagging) with random feature selection to build a diverse collection of decision trees whose errors are largely uncorrelated. Averaging the trees cancels much of the variance inherent in a single deep tree, yielding strong out-of-the-box accuracy with little tuning. The out-of-bag samples left out of each bootstrap provide an unbiased internal estimate of generalisation error.
- ### Key aspects
  - Bootstrap aggregation: each tree trained on a resampled subset of the data
  - Random feature subsetting at each split to decorrelate trees
  - Majority voting or averaging across the ensemble
  - Out-of-bag error estimation without a separate validation set
  - Permutation-based and impurity-based feature importance measures
- ### Applications
  - Tabular classification and regression across science and industry
  - Feature selection and ranking in high-dimensional datasets
  - Credit scoring and risk modelling
  - Baseline models against which deeper architectures are compared
- ### Relationships
  - subClassOf:: [[Decision Tree]]
  - partOf:: [[Supervised Learning]]
  - relatedTo:: [[Decision Tree]]
  - relatedTo:: [[Feature Importance]]
  - relatedTo:: [[Cross Validation]]
  - uses:: [[Decision Tree]]
  - uses:: [[Bagging]]
  - uses:: [[Feature Selection]]
  - enables:: [[Feature Importance]]
  - enables:: [[Interpretability]]
  - contrastsWith:: [[Boosting]]
  - contrastsWith:: [[Neural Network]]
  - requires:: [[Model Training]]
  - supports:: [[Feature Engineering]]
  - dependsOn:: [[Cross Validation]]
  - bridgesTo:: [[Supervised Learning]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
