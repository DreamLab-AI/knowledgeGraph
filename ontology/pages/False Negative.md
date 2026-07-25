public:: true

# False Negative

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:false-negative", "@type": "Page", "title": "False Negative", "vc:slug": "false-negative", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:false-negative",
  "@type": "Class",
  "label": "False Negative",
  "definition": "A false negative is a classification error in which a model incorrectly predicts the negative class for an instance that actually belongs to the positive class. It is a fundamental cell of the confusion matrix, often denoted FN, and directly reduces recall (sensitivity). In high-stakes domains such as medical screening or fraud detection, false negatives represent missed true cases and frequently carry asymmetric cost relative to false positives.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-evaluation",
      "label": "Model Evaluation"
    },
    {
      "@id": "urn:ngm:class:model-evaluation-results",
      "label": "Model Evaluation Results"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:confusion-matrix",
        "label": "Confusion Matrix"
      },
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:false-positive",
        "label": "False Positive"
      },
      {
        "@id": "urn:ngm:class:true-positive",
        "label": "True Positive"
      },
      {
        "@id": "urn:ngm:class:true-negative",
        "label": "True Negative"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:recall",
        "label": "Recall"
      },
      {
        "@id": "urn:ngm:class:sensitivity",
        "label": "Sensitivity"
      },
      {
        "@id": "urn:ngm:class:precision",
        "label": "Precision"
      },
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
      },
      {
        "@id": "urn:ngm:class:f1-score",
        "label": "F1 Score"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:loss-function",
        "label": "Loss Function"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:anomaly-detection",
        "label": "Anomaly Detection"
      },
      {
        "@id": "urn:ngm:class:fraud-detection",
        "label": "Fraud Detection"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:specificity",
        "label": "Specificity"
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
  - A false negative is a classification error in which a model incorrectly predicts the negative class for an instance that actually belongs to the positive class. It is a fundamental cell of the confusion matrix, often denoted FN, and directly reduces recall (sensitivity). In high-stakes domains such as medical screening or fraud detection, false negatives represent missed true cases and frequently carry asymmetric cost relative to false positives.
  - [[Confusion Matrix]] [[Recall]] [[Classification]] [[Sensitivity]]
- ### Overview
  - A false negative arises when a classifier assigns the negative label to an instance whose ground-truth label is positive. Within the confusion matrix it sits opposite the true positive cell, and the count of false negatives appears in the denominator of recall: recall = TP / (TP + FN). A model that minimises false negatives is described as having high sensitivity. The relative cost of a false negative versus a false positive depends entirely on the application: missing a malignant tumour or a fraudulent transaction is typically far more damaging than raising a false alarm, which motivates threshold tuning that trades precision for recall.
- ### Key aspects
  - Occupies the FN cell of the confusion matrix, opposite the true positive.
  - Lowers recall and sensitivity without affecting precision directly.
  - Cost is application-dependent and often asymmetric relative to false positives.
  - Reduced by lowering the decision threshold or rebalancing class weights.
  - Tracked alongside true positives, false positives and true negatives for full evaluation.
- ### Applications
  - Medical screening where a missed diagnosis is a false negative.
  - Fraud and intrusion detection where undetected attacks are false negatives.
  - Spam and content moderation pipelines balancing miss rate against over-blocking.
  - Quality control and defect detection on production lines.
- ### Relationships
  - subClassOf:: [[Model Evaluation]]
  - partOf:: [[Confusion Matrix]]
  - partOf:: [[Model Evaluation]]
  - contrastsWith:: [[False Positive]]
  - contrastsWith:: [[True Positive]]
  - contrastsWith:: [[True Negative]]
  - relatedTo:: [[Recall]]
  - relatedTo:: [[Sensitivity]]
  - relatedTo:: [[Precision]]
  - relatedTo:: [[Classification]]
  - relatedTo:: [[F1 Score]]
  - uses:: [[Loss Function]]
  - supports:: [[Anomaly Detection]]
  - supports:: [[Fraud Detection]]
  - enables:: [[Specificity]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
