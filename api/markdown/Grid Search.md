
Grid search is a hyperparameter-optimisation method that exhaustively evaluates every combination of values drawn from a predefined discrete grid over the hyperparameter space. Each candidate configuration is trained and scored, typically using cross-validation, and the best-performing combination is selected. Grid search is simple and fully parallelisable but scales exponentially with the number of hyperparameters.

- ### Overview
  - In grid search the practitioner specifies a finite set of candidate values for each hyperparameter, and the algorithm forms the Cartesian product of those sets. Every resulting configuration is trained and evaluated, usually with cross-validation to reduce variance, and the configuration with the best validation score is chosen. Because the configurations are independent, the search embarrasingly parallelises; however, the number of evaluations grows multiplicatively with each added hyperparameter, a phenomenon known as the curse of dimensionality.
- ### Mechanisms
  - Forms the Cartesian product of discrete candidate values.
  - Evaluates every configuration, typically via cross-validation.
  - Fully parallelisable since configurations are independent.
  - Cost grows exponentially with the number of hyperparameters.
  - Quality is limited by the resolution of the chosen grid.
- ### Applications
  - Tuning regularisation and learning-rate parameters.
  - Selecting kernel and margin settings for support-vector machines.
  - Optimising tree depth and ensemble size.
  - Small hyperparameter spaces where exhaustive search is feasible.
  - Baseline comparison against smarter search strategies.
- ### Provenance

