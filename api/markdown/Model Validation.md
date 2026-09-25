Model validation is the process of assessing whether a trained model meets its intended requirements for accuracy, robustness, fairness and generalisation before it is trusted in practice. It uses held-out data, cross-validation and stress tests to estimate performance on unseen inputs and to detect overfitting, bias or specification gaps. Distinct from evaluation metrics alone, validation judges fitness for purpose within the model lifecycle.

### Overview

- Validation answers the question of whether a model will behave acceptably outside its training distribution. It separates data into training, validation and test partitions, applies resampling such as [[Cross-Validation]], and inspects error patterns to distinguish genuine skill from memorisation.
- Beyond aggregate accuracy, robust validation examines calibration, sensitivity to perturbation, subgroup fairness and behaviour on edge cases. Tools like the [[Confusion Matrix]] and [[Sensitivity Analysis]] expose where and how a model fails, while [[Interpretability]] and [[Explainability]] clarify why.
- Validation gates progression: only models that pass move to [[Model Selection]] and [[Model Deployment]], and validated baselines anchor subsequent [[Model Monitoring]] in production.

### Mechanisms

- Held-out test sets and k-fold [[Cross-Validation]] to estimate generalisation.
- Detection of [[Overfitting]] and [[Underfitting]] through train-test gap analysis.
- Error analysis using a [[Confusion Matrix]] and per-segment breakdowns.
- Robustness and [[Sensitivity Analysis]] under input perturbation and distribution shift.
- Fairness and bias checks across protected and operational subgroups.

### Applications

- Certifying models for release after [[Model Training]] and [[Hyperparameter Tuning]].
- Comparing candidates during [[Model Selection]].
- Establishing baselines that drive [[Model Monitoring]] thresholds.
- Supporting governance and audit by documenting evidence of fitness.

### Provenance

