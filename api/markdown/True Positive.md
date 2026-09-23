
A True Positive is an outcome in binary classification where the model correctly predicts the positive class for an instance that genuinely belongs to that class. It is one of the four cells of the confusion matrix, alongside false positives, true negatives and false negatives. Counts of true positives are central to evaluation metrics such as precision, recall and the F1 score.

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
- ### Provenance

