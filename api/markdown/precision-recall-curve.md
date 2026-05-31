- ### Definition
  - A diagnostic plot that traces the trade-off between precision and recall across the decision thresholds of a binary classifier.

- ### Semantic Classification
  - owl-class:: blockchain:PrecisionRecallCurve
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Confusion Matrix]]
  - bridges-to:: [[ROC Curve]], [[F1 Score]]
  - requires:: [[Precision]], [[Recall]]

- ### Content
  - A precision-recall curve plots precision on one axis against recall on the other as the classification threshold is varied. Each point corresponds to a threshold, and the shape of the curve summarises how the model trades correctness of positive predictions against coverage of actual positives.
  - The curve is most informative when the positive class is rare, because it focuses on performance for that class rather than on overall accuracy. Practitioners summarise it with the area under the curve or use it to select an operating threshold appropriate to a given application, often comparing it with the ROC curve and the F1 score.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z