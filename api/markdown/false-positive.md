- ### Definition
  - A false positive is a [[Classification]] outcome where a negative instance is wrongly labelled positive, one cell of the [[Confusion Matrix]].
  - It is a Type I error that lowers [[Precision]] and [[Specificity]] during [[Model Evaluation]].
  - It is traded off against false negatives by adjusting a decision threshold.

- ### Overview
  - Detection and classification systems sort instances into predicted positive and negative classes, then compare against ground truth.
  - A false positive raises a false alarm: the system flags something that is, in fact, benign or absent.
  - Lowering the false-positive rate usually raises the false-negative rate, so the balance is chosen to fit the cost of each error type.

- ### Key aspects
  - Defined relative to ground-truth labels and a fixed positive class.
  - One of true positive, false positive, true negative and false negative.
  - Drives precision and specificity but not recall.
  - Sensitive to class imbalance and threshold placement.

- ### Applications
  - Alert fatigue in an [[Intrusion Detection System]] from excessive false alarms.
  - Tuning [[Anomaly Detection]] to suppress spurious detections.
  - Diagnostic screening where false alarms trigger unnecessary follow-up.
  - Reporting in [[Model Evaluation]] alongside [[Recall]] and [[Precision]].

- ### Relationships
  - subClassOf:: [[Confusion Matrix]]
  - hasPart:: [[Classification]]
  - partOf:: [[Confusion Matrix]]
  - partOf:: [[Model Evaluation]]
  - uses:: [[Classification]]
  - uses:: [[Confusion Matrix]]
  - contrastsWith:: [[Sensitivity]]
  - contrastsWith:: [[Specificity]]
  - dependsOn:: [[Classification]]
  - supports:: [[Model Evaluation]]
  - relatedTo:: [[Precision]]
  - relatedTo:: [[Recall]]
  - relatedTo:: [[Specificity]]
  - relatedTo:: [[Anomaly Detection]]
  - relatedTo:: [[Intrusion Detection System]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation