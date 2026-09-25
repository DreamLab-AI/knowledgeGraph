Random search is a hyperparameter-optimisation method that samples hyperparameter configurations at random from specified distributions over the search space, rather than evaluating a fixed grid. For a given evaluation budget it often outperforms grid search because it explores more distinct values of the most influential hyperparameters. It is simple, parallelisable, and a strong baseline for automated tuning.

### Overview

- Random search draws configurations independently from user-specified distributions, for example uniform over an interval or log-uniform for scale parameters. Because real hyperparameter landscapes are typically dominated by a few influential parameters, random sampling tends to cover the important dimensions more thoroughly than a grid given the same budget, which wastes evaluations on unimportant combinations. The method is trivially parallel and frequently used as a competitive baseline before more sophisticated optimisers.

### Mechanisms

- Samples configurations independently from chosen distributions.
- Covers influential hyperparameters more densely than a fixed grid.
- Decouples the evaluation budget from the number of hyperparameters.
- Supports continuous and log-scaled parameter ranges.
- Embarrassingly parallel and easy to implement.

### Applications

- Efficient tuning under a fixed compute budget.
- Tuning high-dimensional hyperparameter spaces.
- Strong baseline against grid and Bayesian methods.
- Neural-network architecture and training hyperparameters.
- Warm-starting more advanced search procedures.

### Provenance

