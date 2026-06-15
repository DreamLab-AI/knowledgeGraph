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