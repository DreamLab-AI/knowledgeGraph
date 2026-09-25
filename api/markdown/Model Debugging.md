Model debugging is the systematic process of diagnosing, isolating and correcting faults in the behaviour of a machine-learning model, such as poor accuracy, biased predictions, brittleness to distribution shift, or unexpected outputs on specific inputs. Unlike conventional software debugging, it must reason about statistical behaviour, training data, feature representations and learned parameters rather than deterministic control flow. Practitioners combine error analysis, interpretability tooling, slice-based evaluation and counterfactual probing to trace failures back to data, model architecture or the training procedure.

- Model debugging is the disciplined practice of finding and fixing why a [[Machine Learning Model]] behaves incorrectly. It draws on [[Error Analysis]], [[Explainable AI]] and [[Model Interpretability]] to convert opaque statistical failures into actionable diagnoses, and it sits inside the broader practice of [[Model Evaluation]].

### Overview

- Where traditional [[Software Debugging]] traces deterministic control flow, model debugging must reason over data distributions, learned weights and feature representations. A model can pass aggregate metrics yet fail badly on important sub-populations, so debugging emphasises slicing the evaluation set, surfacing high-loss examples and explaining individual predictions.
- The workflow typically begins by reproducing the failure, then attributing it to one of three layers: the data (label noise, sampling bias, leakage), the model (capacity, architecture, regularisation) or the training procedure (optimisation, hyperparameters, objective).

### Mechanisms

- Slice-based and disaggregated evaluation to locate where performance collapses.
- Feature attribution and saliency methods from [[Explainable AI]] to see what the model attends to.
- Counterfactual and perturbation probing to test sensitivity and spurious correlations.
- Data inspection for leakage, mislabelling and [[Data Drift]] using [[Data Quality]] checks.
- Logging and tracing of inputs, intermediate activations and outputs via [[Logging]] and [[Observability]].
- [[Root Cause Analysis]] to separate symptom from cause.

### Applications

- Pre-deployment hardening as part of [[Model Validation]] gates.
- Continuous diagnosis in production via [[Model Monitoring]] and [[MLOps]] pipelines.
- Fairness and robustness audits before release.
- Iterative dataset curation guided by discovered failure modes.

### Provenance

