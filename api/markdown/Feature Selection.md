Feature selection is the process of identifying and retaining the subset of input variables most relevant to a predictive task while discarding redundant or uninformative ones. By reducing dimensionality it can improve model generalisation, lower computational cost, and enhance interpretability without altering the underlying feature values. Methods range from filter approaches based on statistical relevance, through wrapper approaches that evaluate subsets via model performance, to embedded approaches integrated into model training.

### Overview

- Feature selection chooses among existing variables, in contrast to feature extraction which constructs new combined variables.
- Filter methods rank features by univariate statistics such as correlation or mutual information independently of any model.
- Wrapper methods search the space of feature subsets, scoring each by the performance of a model trained on it.
- Embedded methods perform selection as a side effect of training, as with L1 regularisation driving coefficients to zero.

### Key aspects

- Reduces the curse of dimensionality and mitigates [[Overfitting]] by removing noise features.
- Improves model interpretability by yielding a smaller, more meaningful variable set.
- Filter, wrapper, and embedded families trade off computational cost against accuracy of the selection.
- Closely linked to [[Regularisation]], which can perform implicit selection during fitting.
- Distinct from [[Dimensionality Reduction]] techniques that transform rather than subset features.

### Applications

- Selecting predictive genes from high-dimensional genomic expression data.
- Pruning sensor channels in time-series models to reduce inference latency.
- Reducing feature count before training to control [[Overfitting]] on small datasets.
- Producing interpretable models for regulated domains requiring explainable inputs.

### Provenance

