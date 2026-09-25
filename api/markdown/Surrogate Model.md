A surrogate model (or metamodel) is an inexpensive, data-driven approximation of an expensive-to-evaluate function, simulation or experiment, used to predict outcomes without running the full computation. It is fitted to a sample of evaluations and then queried cheaply to explore the design space, drive optimisation or quantify uncertainty. Surrogate models are central to Bayesian optimisation, where a Gaussian process guides where to evaluate next.

### Overview

- When each evaluation of the true objective is costly (a simulation, physical experiment or model training run), a surrogate learns to predict its output from few samples.
- The surrogate is queried cheaply to search the design space, screen candidates and target the next expensive evaluation.
- Probabilistic surrogates, such as Gaussian processes, also quantify predictive uncertainty, enabling principled exploration.
- Surrogates are iteratively refined as new true evaluations are added, improving accuracy where it matters.

### Mechanisms

- Initial design of experiments sampling the input space.
- Fitting a regression surrogate (Gaussian process, random forest, polynomial response surface).
- Uncertainty quantification to balance exploration and exploitation.
- Acquisition functions selecting the next point to evaluate.
- Sequential refinement adding true evaluations to retrain the surrogate.

### Applications

- Bayesian optimisation of machine-learning hyperparameters.
- Engineering design optimisation over costly physics simulations.
- Materials and drug discovery screening.
- Real-time approximation of slow simulators in control and digital twins.

### Provenance

