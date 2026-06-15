public:: true

# Class Imbalance
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:class-imbalance",
  "@type": "Page",
  "title": "Class Imbalance",
  "vc:slug": "class-imbalance",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:class-imbalance",
  "@type": "Class",
  "label": "Class Imbalance",
  "definition": "Class imbalance is the condition in a classification dataset where the number of examples in one class greatly exceeds that of another, causing learning algorithms to favour the majority class. It is common in problems such as fraud detection, medical diagnosis, and anomaly detection, where the events of interest are rare. Class imbalance undermines naive accuracy as an evaluation metric and motivates remedies such as resampling, cost-sensitive learning, and the use of precision-recall-oriented metrics.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:classification",
      "label": "Classification"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-preprocessing",
        "label": "Data Preprocessing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:resampling",
        "label": "Resampling"
      },
      {
        "@id": "urn:ngm:class:feature-engineering",
        "label": "Feature Engineering"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:anomaly-detection",
        "label": "Anomaly Detection"
      },
      {
        "@id": "urn:ngm:class:fraud-detection",
        "label": "Fraud Detection"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:evaluation-metric",
        "label": "Evaluation Metric"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:overfitting",
        "label": "Overfitting"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:model-performance",
        "label": "Model Performance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:precision-recall-curve",
        "label": "Precision-Recall Curve"
      },
      {
        "@id": "urn:ngm:class:confusion-matrix",
        "label": "Confusion Matrix"
      },
      {
        "@id": "urn:ngm:class:f1-score",
        "label": "F1 Score"
      },
      {
        "@id": "urn:ngm:class:roc-curve",
        "label": "ROC Curve"
      },
      {
        "@id": "urn:ngm:class:recall",
        "label": "Recall"
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
  - Class imbalance is the condition in a classification dataset where the number of examples in one class greatly exceeds that of another, causing learning algorithms to favour the majority class. It is common in problems such as fraud detection, medical diagnosis, and anomaly detection, where the events of interest are rare. Class imbalance undermines naive accuracy as an evaluation metric and motivates remedies such as resampling, cost-sensitive learning, and the use of precision-recall-oriented metrics.
  - Core related concepts: [[Classification]], [[Machine Learning]], [[Precision-Recall Curve]], [[Confusion Matrix]], [[Anomaly Detection]].

- ### Overview
  - Class imbalance is one of the most common practical obstacles in applied classification. When positive cases are rare, a model can achieve high accuracy simply by predicting the majority class, while completely failing at the task that matters. Addressing imbalance therefore requires both appropriate evaluation, focusing on recall, precision, and their trade-offs, and algorithmic or data-level interventions that give the minority class adequate influence.

- ### Key aspects
  - Misleading accuracy: overall accuracy is dominated by the majority class and can mask poor minority-class performance.
  - Data-level remedies: oversampling the minority class, undersampling the majority, or synthesising new minority examples rebalance the training signal.
  - Algorithm-level remedies: cost-sensitive learning and class weighting penalise minority-class errors more heavily during training.
  - Evaluation discipline: precision-recall curves, F1 scores, and confusion-matrix analysis reveal performance that accuracy hides.

- ### Applications
  - Fraud and intrusion detection where malicious events are rare.
  - Medical diagnosis and screening for low-prevalence conditions.
  - Manufacturing defect and anomaly detection on predominantly normal data.
  - Churn, default, and rare-event prediction in finance and operations.

- ### Relationships
  - subClassOf:: [[Classification]]
  - partOf:: [[Classification]]
  - partOf:: [[Machine Learning]]
  - dependsOn:: [[Data Preprocessing]]
  - uses:: [[Resampling]]
  - uses:: [[Feature Engineering]]
  - enables:: [[Anomaly Detection]]
  - enables:: [[Fraud Detection]]
  - requires:: [[Evaluation Metric]]
  - contrastsWith:: [[Overfitting]]
  - supports:: [[Model Performance]]
  - relatedTo:: [[Precision-Recall Curve]]
  - relatedTo:: [[Confusion Matrix]]
  - relatedTo:: [[F1 Score]]
  - relatedTo:: [[ROC Curve]]
  - relatedTo:: [[Recall]]

- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
