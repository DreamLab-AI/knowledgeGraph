public:: true

# Decision Tree
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:decision-tree",
  "@type": "Page",
  "title": "Decision Tree",
  "vc:slug": "decision-tree",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:decision-tree",
  "@type": "Class",
  "label": "Decision Tree",
  "definition": "A decision tree is a supervised learning model that predicts an outcome by recursively partitioning the feature space into regions, represented as a tree of decision nodes and leaf nodes. Each internal node tests a feature against a threshold and routes an instance down a branch, while leaves assign a class label or numeric value. Decision trees are valued for their interpretability and form the building blocks of ensemble methods such as random forests and gradient boosting.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:supervised-learning",
      "label": "Supervised Learning"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
      }
    ],
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
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ensemble-methods",
        "label": "Ensemble Methods"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:interpretability",
        "label": "Interpretability"
      },
      {
        "@id": "urn:ngm:class:explainability",
        "label": "Explainability"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:evaluation-metric",
        "label": "Evaluation Metric"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ensemble-methods",
        "label": "Ensemble Methods"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
      },
      {
        "@id": "urn:ngm:class:ensemble-methods",
        "label": "Ensemble Methods"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
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
  - A decision tree is a supervised learning model that predicts an outcome by recursively partitioning the feature space into regions, represented as a tree of decision nodes and leaf nodes. Each internal node tests a feature against a threshold and routes an instance down a branch, while leaves assign a class label or numeric value. Decision trees are valued for their interpretability and form the building blocks of ensemble methods such as random forests and gradient boosting.
  - Related: [[Supervised Learning]] [[Classification]] [[Ensemble Methods]] [[Interpretability]]
- ### Overview
  - A decision tree is grown by greedily selecting, at each node, the feature and split that best separate the training data according to a purity criterion such as Gini impurity or information gain. The process repeats until a stopping condition is met, after which pruning may reduce overfitting. The resulting model is transparent — each prediction corresponds to a readable path of conditions — but a single deep tree can be unstable and prone to overfitting, which motivates ensembles that aggregate many trees.
- ### Mechanisms
  - Splitting criteria: Gini impurity, information gain
  - Recursive partitioning of the feature space
  - Pruning and depth control to limit overfitting
  - Handling categorical and numeric features
  - Intrinsic interpretability of decision paths
  - Foundation for bagged and boosted ensembles
- ### Applications
  - Classification and regression on tabular data
  - Interpretable models for regulated domains
  - Feature importance and exploratory analysis
  - Base learners in random forests and boosting
  - Rule extraction for decision support
- ### Relationships
  - subClassOf:: [[Supervised Learning]]
  - hasPart:: [[Classification]]
  - partOf:: [[Supervised Learning]]
  - implements:: [[Classification]]
  - uses:: [[Supervised Learning]]
  - enables:: [[Ensemble Methods]]
  - supports:: [[Interpretability]]
  - supports:: [[Explainability]]
  - requires:: [[Evaluation Metric]]
  - dependsOn:: [[Supervised Learning]]
  - contrastsWith:: [[Ensemble Methods]]
  - relatedTo:: [[Classification]]
  - relatedTo:: [[Ensemble Methods]]
  - bridgesTo:: [[Machine Learning]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
