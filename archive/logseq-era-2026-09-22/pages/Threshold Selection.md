public:: true

# Threshold Selection

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:threshold-selection",
  "@type": "Page",
  "title": "Threshold Selection",
  "vc:slug": "threshold-selection",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:threshold-selection",
  "@type": "Class",
  "label": "Threshold Selection",
  "definition": "Threshold selection is the process of choosing the decision boundary that converts a classifier's continuous scores or probabilities into discrete class labels. The chosen threshold trades off competing error types, moving along the trade-off captured by the ROC and precision-recall curves. Appropriate selection depends on the relative costs of false positives and false negatives and on class prevalence in the deployment setting.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-evaluation",
      "label": "Model Evaluation"
    },
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "partOf": {
      "@id": "urn:ngm:class:model-evaluation",
      "label": "Model Evaluation"
    },
    "enables": [
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
      },
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:roc-curve",
        "label": "ROC Curve"
      },
      {
        "@id": "urn:ngm:class:precision-recall-curve",
        "label": "Precision-Recall Curve"
      },
      {
        "@id": "urn:ngm:class:confusion-matrix",
        "label": "Confusion Matrix"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:precision",
        "label": "Precision"
      },
      {
        "@id": "urn:ngm:class:recall",
        "label": "Recall"
      },
      {
        "@id": "urn:ngm:class:specificity",
        "label": "Specificity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:sensitivity",
        "label": "Sensitivity"
      },
      {
        "@id": "urn:ngm:class:f1-score",
        "label": "F1 Score"
      },
      {
        "@id": "urn:ngm:class:evaluation-metric",
        "label": "Evaluation Metric"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:statistical-inference",
        "label": "Statistical Inference"
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
  - Threshold selection is part of [[Model Evaluation]] for [[Classification]] systems.
  - It uses the [[ROC Curve]] and [[Precision-Recall Curve]] to visualise trade-offs.
  - The choice balances [[Precision]] against [[Recall]] and reads from the [[Confusion Matrix]].
- ### Overview
  - A probabilistic classifier outputs scores; the threshold determines which scores become positive predictions.
  - Raising the threshold increases precision but reduces recall, and vice versa, so the optimal point reflects business costs and class balance.
  - Methods include maximising F1 or Youden's J, cost-weighted optimisation, and matching a target operating point.
- ### Mechanisms
  - Sweeping thresholds to trace ROC and PR curves.
  - Cost-sensitive optimisation weighting false positives and negatives.
  - Maximising composite metrics such as F1 or Youden's J.
  - Calibration to make scores interpretable as probabilities.
- ### Applications
  - Tuning fraud and anomaly detectors to control alert volume.
  - Setting clinical screening cut-offs to favour sensitivity.
  - Balancing precision and recall in information retrieval.
- ### Relationships
  - partOf:: [[Model Evaluation]]
  - enables:: [[Classification]]
  - enables:: [[Inference]]
  - uses:: [[ROC Curve]]
  - uses:: [[Precision-Recall Curve]]
  - uses:: [[Confusion Matrix]]
  - dependsOn:: [[Precision]]
  - dependsOn:: [[Recall]]
  - dependsOn:: [[Specificity]]
  - relatedTo:: [[Sensitivity]]
  - relatedTo:: [[F1 Score]]
  - relatedTo:: [[Evaluation Metric]]
  - supports:: [[Supervised Learning]]
  - bridgesTo:: [[Statistical Inference]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
