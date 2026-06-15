public:: true

# True Positive
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:true-positive",
  "@type": "Page",
  "title": "True Positive",
  "vc:slug": "true-positive",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:true-positive",
  "@type": "Class",
  "label": "True Positive",
  "definition": "A True Positive is an outcome in binary classification where the model correctly predicts the positive class for an instance that genuinely belongs to that class. It is one of the four cells of the confusion matrix, alongside false positives, true negatives and false negatives. Counts of true positives are central to evaluation metrics such as precision, recall and the F1 score.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:confusion-matrix",
      "label": "Confusion Matrix"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:confusion-matrix",
        "label": "Confusion Matrix"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:false-positive",
        "label": "False Positive"
      },
      {
        "@id": "urn:ngm:class:true-negative",
        "label": "True Negative"
      },
      {
        "@id": "urn:ngm:class:false-negative",
        "label": "False Negative"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:precision",
        "label": "Precision"
      },
      {
        "@id": "urn:ngm:class:recall",
        "label": "Recall"
      },
      {
        "@id": "urn:ngm:class:f1-score",
        "label": "F1 Score"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:classifier",
        "label": "Classifier"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      },
      {
        "@id": "urn:ngm:class:sensitivity",
        "label": "Sensitivity"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:accuracy",
        "label": "Accuracy"
      },
      {
        "@id": "urn:ngm:class:roc-curve",
        "label": "ROC Curve"
      },
      {
        "@id": "urn:ngm:class:specificity",
        "label": "Specificity"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
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
  - A True Positive is an outcome in binary classification where the model correctly predicts the positive class for an instance that genuinely belongs to that class. It is one of the four cells of the confusion matrix, alongside false positives, true negatives and false negatives. Counts of true positives are central to evaluation metrics such as precision, recall and the F1 score.
  - Related concepts: [[Confusion Matrix]] [[False Positive]] [[True Negative]] [[Precision]] [[Recall]]
- ### Overview
  - In a binary decision, each prediction is compared against ground truth to produce one of four outcomes. A true positive arises when both the prediction and the actual label are positive. Aggregating true positives with the other three outcomes yields the confusion matrix, from which precision (true positives over predicted positives) and recall (true positives over actual positives) are derived.
- ### Key aspects
  - **Definition** — predicted positive and actually positive.
  - **Confusion-matrix cell** — one of four mutually exclusive prediction outcomes.
  - **Precision driver** — true positives divided by all predicted positives.
  - **Recall driver** — true positives divided by all actual positives.
  - **Threshold dependence** — counts shift as the decision threshold changes.
- ### Applications
  - Medical screening where correctly detecting disease is critical.
  - Fraud detection counting correctly flagged fraudulent transactions.
  - Information retrieval measuring correctly returned relevant documents.
  - Computing precision, recall and F1 for classifier evaluation.
- ### Relationships
  - subClassOf:: [[Confusion Matrix]]
  - partOf:: [[Confusion Matrix]]
  - contrastsWith:: [[False Positive]]
  - contrastsWith:: [[True Negative]]
  - contrastsWith:: [[False Negative]]
  - enables:: [[Precision]]
  - enables:: [[Recall]]
  - enables:: [[F1 Score]]
  - uses:: [[Classifier]]
  - supports:: [[Model Evaluation]]
  - supports:: [[Sensitivity]]
  - requires:: [[Classification]]
  - relatedTo:: [[Accuracy]]
  - relatedTo:: [[ROC Curve]]
  - relatedTo:: [[Specificity]]
  - bridgesTo:: [[Model Evaluation]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
