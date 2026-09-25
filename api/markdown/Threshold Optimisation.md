Threshold optimisation is the process of selecting the decision boundary applied to a model's continuous scores so that discrete predictions best satisfy a chosen objective. By tuning where a probability or score is converted into a class label, practitioners trade off precision against recall, manage class imbalance, and satisfy fairness or cost constraints. It is a post-hoc technique that adjusts operating points without retraining the underlying model.

### Overview

- Many classifiers emit probabilities or scores; turning these into labels requires a threshold whose default of 0.5 is rarely optimal.
- Optimising the threshold lets practitioners move along the receiver-operating-characteristic or precision-recall curve to the operating point that best matches business or ethical objectives.
- Under class imbalance or asymmetric error costs, threshold tuning can substantially improve practical performance without changing the model.
- Group-specific thresholds are also used as a post-processing fairness intervention to equalise error rates across populations.

### Key aspects

- Choice of objective: precision, recall, F-score, expected cost or fairness.
- Use of validation data to estimate performance at candidate thresholds.
- Handling of class imbalance and asymmetric misclassification costs.
- Single global versus group-specific thresholds.
- Interaction with model calibration of the underlying scores.

### Mechanisms

- Sweeping thresholds and computing metrics across the operating range.
- Selecting points on ROC or precision-recall curves.
- Cost-sensitive selection minimising expected loss.
- Constrained optimisation to meet fairness criteria such as equalised error rates.
- Recalibrating scores before thresholding to improve reliability.

### Applications

- Fraud and anomaly detection with skewed positive rates.
- Medical screening balancing sensitivity and specificity.
- Content moderation and risk scoring with tunable strictness.
- Fair lending and hiring systems with group fairness constraints.
- Alerting systems trading off false alarms against missed events.

### Provenance

