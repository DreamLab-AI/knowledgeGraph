Model selection is the process of choosing the most appropriate machine learning model, algorithm family, or configuration for a given task from a set of candidates. It balances predictive performance against constraints such as interpretability, inference cost, and generalisation, typically using validation data and metrics rather than the training error. Techniques include cross-validation, information criteria, and held-out benchmarking, with the goal of selecting the model expected to perform best on unseen data.

### Overview

- Many algorithms and configurations can fit the same data; selection picks the one that performs best on unseen examples.
- Validation strategies estimate out-of-sample performance to avoid optimistic bias from the training set.
- The choice trades off accuracy against interpretability, latency, and operational cost.
- Selection is often interleaved with hyperparameter tuning, producing a joint search over models and settings.

### Key aspects

- Cross-validation provides robust performance estimates under limited data.
- Information criteria penalise complexity to discourage overfitting.
- Held-out and nested validation prevent leakage when tuning and selecting jointly.
- Multi-objective selection weighs accuracy against deployment constraints.

### Applications

- Choosing between algorithm families for a tabular prediction task.
- Selecting a pretrained backbone for transfer learning.
- Picking the smallest model meeting an accuracy threshold for edge deployment.
- Automated machine learning pipelines that search over models and configurations.

### Provenance

