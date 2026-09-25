Probabilistic programming is a paradigm in which statistical models are expressed as programs that include random variables and conditioning statements, with inference performed automatically by the language runtime. It lets practitioners specify generative models declaratively while delegating the mechanics of Bayesian inference, such as sampling or variational optimisation, to the system. This separation of model specification from inference enables rapid iteration on complex probabilistic models across science and machine learning.

### Overview

- The central promise of probabilistic programming is to make Bayesian modelling as accessible as ordinary programming: the user writes down how data could have been generated, and the system infers the posterior distribution over unknown quantities given observations.
- By decoupling model specification from inference algorithms, these systems let researchers experiment with model structure quickly and obtain calibrated estimates of uncertainty rather than single point predictions.
- Modern probabilistic programming languages integrate with automatic differentiation and tensor libraries, allowing deep generative models that blend neural networks with explicit probabilistic structure.

### Key aspects

- Random variables and probability distributions are first-class language constructs.
- Conditioning statements assert observed data, defining the posterior to be inferred.
- Inference engines such as Hamiltonian Monte Carlo and stochastic variational inference run automatically over the model.
- Automatic differentiation enables gradient-based inference and scalable optimisation.

### Applications

- Bayesian data analysis and hierarchical modelling in the sciences and econometrics.
- Uncertainty-aware machine-learning models for risk-sensitive decision making.
- Generative modelling that combines structured priors with deep neural components.
- Cognitive and behavioural modelling where interpretable latent structure matters.

### Provenance

