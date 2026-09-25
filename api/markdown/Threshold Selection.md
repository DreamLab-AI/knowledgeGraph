Threshold selection is the process of choosing the decision boundary that converts a classifier's continuous scores or probabilities into discrete class labels. The chosen threshold trades off competing error types, moving along the trade-off captured by the ROC and precision-recall curves. Appropriate selection depends on the relative costs of false positives and false negatives and on class prevalence in the deployment setting.

### Overview

- A probabilistic classifier outputs scores; the threshold determines which scores become positive predictions.
- Raising the threshold increases precision but reduces recall, and vice versa, so the optimal point reflects business costs and class balance.
- Methods include maximising F1 or Youden's J, cost-weighted optimisation, and matching a target operating point.

### Mechanisms

- Sweeping thresholds to trace ROC and PR curves.
- Cost-sensitive optimisation weighting false positives and negatives.
- Maximising composite metrics such as F1 or Youden's J.
- Calibration to make scores interpretable as probabilities.

### Applications

- Tuning fraud and anomaly detectors to control alert volume.
- Setting clinical screening cut-offs to favour sensitivity.
- Balancing precision and recall in information retrieval.

### Provenance

