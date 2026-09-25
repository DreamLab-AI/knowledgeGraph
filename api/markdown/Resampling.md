Resampling is a family of statistical and machine-learning techniques that repeatedly draw samples from observed data to estimate the variability of a statistic, validate a model, or rebalance a dataset. It includes methods such as bootstrapping, cross-validation, permutation testing, and over- and under-sampling for class imbalance. By substituting computation for restrictive distributional assumptions, resampling provides robust estimates of error, confidence and generalisation.

- [[Resampling]] is a family of techniques that repeatedly draw samples from observed data to estimate variability, validate models, or rebalance datasets. It is a practical instrument of [[Statistical Inference]].
- It includes [[Cross-Validation]], bootstrapping, permutation testing, and over- and under-sampling, and it underpins reliable [[Model Evaluation]] in [[Machine Learning]].

### Overview

- Resampling trades analytical derivation for computation: rather than assuming a closed-form sampling distribution, it generates many resampled datasets and observes how a statistic behaves across them.
- The bootstrap draws with replacement to estimate standard errors and confidence intervals; cross-validation partitions data into folds to estimate out-of-sample error; permutation tests shuffle labels to build null distributions.
- For imbalanced classification, resampling rebalances classes by oversampling minorities or undersampling majorities, improving learning on rare events.

### Mechanisms

- Bootstrap: sample with replacement to approximate the sampling distribution.
- Cross-validation: rotate held-out folds to estimate generalisation error.
- Permutation testing: randomly reassign labels to construct a null hypothesis.
- Class rebalancing: over- or under-sample to mitigate imbalance.
- Aggregation: bagging averages models trained on bootstrap samples to reduce variance.

### Applications

- Estimating confidence intervals without strong distributional assumptions.
- Model selection and hyperparameter tuning via cross-validation.
- Reducing variance through bagging and ensemble methods.
- Handling imbalanced datasets in fraud, medical and anomaly detection.

### Provenance

