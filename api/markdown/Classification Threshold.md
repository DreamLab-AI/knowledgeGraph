public:: true

# Classification Threshold

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:classification-threshold",
  "@type": "Page",
  "title": "Classification Threshold",
  "vc:slug": "classification-threshold",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:classification-threshold",
  "@type": "Class",
  "label": "Classification Threshold",
  "definition": "A Classification Threshold is a decision boundary applied to the probabilistic output of a classifier to assign discrete class labels. By default set at 0.5 for binary classification, the threshold can be adjusted to trade off precision against recall, or sensitivity against specificity, depending on application requirements. Threshold selection is a critical model calibration step that directly affects downstream decision quality and fairness properties.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"}],
  "relations": {
    "dependsOn": [
      {"@id": "urn:ngm:class:classifier", "label": "Classifier"},
      {"@id": "urn:ngm:class:probability-calibration", "label": "Probability Calibration"},
      {"@id": "urn:ngm:class:model-evaluation", "label": "Model Evaluation"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:roc-curve", "label": "ROC Curve"},
      {"@id": "urn:ngm:class:precision-recall-curve", "label": "Precision-Recall Curve"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:binary-classification", "label": "Binary Classification"},
      {"@id": "urn:ngm:class:confusion-matrix", "label": "Confusion Matrix"},
      {"@id": "urn:ngm:class:f1-score", "label": "F1 Score"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decision-system", "label": "Decision System"},
      {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:supervised-learning", "label": "Supervised Learning"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:regression", "label": "Regression"},
      {"@id": "urn:ngm:class:hard-label", "label": "Hard Label"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-fairness", "label": "AI Fairness"},
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"}
    ],
    "relatedTo_2": [
      {"@id": "urn:ngm:class:anomaly-detection", "label": "Anomaly Detection"},
      {"@id": "urn:ngm:class:fraud-detection", "label": "Fraud Detection"}
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
  - A [[Classification Threshold]] converts the continuous probability output of a [[Classifier]] into a discrete class label.
  - Typically 0.5 by default but tuned using [[ROC Curve]] analysis or [[Precision-Recall Curve]] optimisation.
  - Adjusting the threshold shifts the trade-off between false positives and false negatives (Type I vs Type II errors).
  - Central to [[Model Evaluation]] and directly affects [[AI Fairness]] properties across demographic groups.

- ### Overview
  - Most [[Binary Classification]] models output a score in [0,1] representing the posterior probability of the positive class.
  - The threshold maps this score to {0,1}: predictions above the threshold are labelled positive.
  - Lowering the threshold increases recall (sensitivity) at the cost of precision; raising it does the reverse.
  - [[Confusion Matrix]] metrics (TP, FP, TN, FN) are all derived downstream of the threshold decision.

- ### Key Aspects
  - **ROC-AUC**: threshold-agnostic metric; specific operating points on the ROC curve correspond to specific thresholds.
  - **Precision-Recall trade-off**: especially relevant for imbalanced datasets common in fraud and medical screening.
  - **Cost-sensitive learning**: asymmetric misclassification costs can be encoded directly into threshold selection.
  - **Calibration**: [[Probability Calibration]] ensures the raw score accurately reflects true probability before thresholding.

- ### Mechanisms
  - The [[ROC Curve]] plots true positive rate vs false positive rate as the threshold sweeps from 0 to 1.
  - Youden's J statistic (TPR − FPR) identifies the threshold maximising balanced performance.
  - Multi-class classification extends to one-vs-rest thresholds or softmax argmax selection.
  - [[AI Governance]] frameworks may mandate threshold documentation for high-stakes decisions.

- ### Applications
  - [[Fraud Detection]] systems balancing catch rate against false alarm load on investigators.
  - Medical diagnosis classifiers tuned to minimise false negatives (missed diagnoses).
  - [[Anomaly Detection]] in network security with asymmetric alert costs.
  - Spam filtering with user-configurable sensitivity levels.
  - [[AI Fairness]] audits ensuring equal false positive rates across protected groups.

- ### Relationships
  - dependsOn:: [[Classifier]]
  - dependsOn:: [[Probability Calibration]]
  - dependsOn:: [[Model Evaluation]]
  - hasPart:: [[ROC Curve]]
  - hasPart:: [[Precision-Recall Curve]]
  - relatedTo:: [[Binary Classification]]
  - relatedTo:: [[Confusion Matrix]]
  - relatedTo:: [[F1 Score]]
  - enables:: [[Decision System]]
  - enables:: [[Risk Management]]
  - requires:: [[Machine Learning]]
  - requires:: [[Supervised Learning]]
  - contrastsWith:: [[Regression]]
  - supports:: [[AI Fairness]]
  - supports:: [[AI Governance]]
  - relatedTo:: [[Anomaly Detection]]
  - relatedTo:: [[Fraud Detection]]

- ### Provenance
  - updated:: 2026-06-15
