A test dataset is a partition of data held out from model training and used exclusively to provide an unbiased estimate of a trained model's performance on unseen examples. Unlike the training and validation sets, it is touched only once final hyperparameters are fixed, preventing the leakage that would inflate reported accuracy. Its disjointness from training data is what makes it a credible measure of generalisation.

- A [[Test Dataset]] is the held-out partition used to estimate generalisation after a model has been trained. It must remain disjoint from the [[Training Dataset]] and is consumed during [[Model Evaluation]] to report honest [[Model Performance]] in [[Machine Learning]].

### Overview

- The classic train/validation/test split separates three concerns: fitting parameters, tuning hyperparameters, and final unbiased assessment. The test set serves only the third concern.
- A core discipline is that the test set is examined exactly once, at the very end. Repeatedly querying it to guide design choices effectively turns it into a validation set and reintroduces optimistic bias.
- Representativeness matters as much as size: a test set drawn from the same distribution as deployment data yields the most trustworthy estimate, while distribution shift undermines the measurement.

### Key aspects

- Disjointness: no example or near-duplicate may appear in both training and test partitions, avoiding data leakage.
- Single use: the set is evaluated once final hyperparameters are locked, contrasting with the iterative use of validation data.
- Representativeness: stratified or domain-balanced sampling preserves class proportions and edge cases.
- Metric computation: accuracy, precision, recall, and task-specific scores are computed here to characterise [[Model Performance]].

### Applications

- Benchmark reporting where leaderboard scores are computed on a fixed test split.
- Detecting [[Overfitting]] by comparing training accuracy against test accuracy.
- Comparing candidate models selected through [[Cross-Validation]] or [[Hyperparameter Tuning]].
- Regulatory and audit contexts requiring an attestable, untouched evaluation set.

### Provenance

