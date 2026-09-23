
Probabilistic reasoning is the process of drawing conclusions under uncertainty by representing beliefs as probability distributions and updating them with evidence according to the rules of probability. It uses models such as graphical models and applies inference procedures, often grounded in Bayesian updating, to compute the likelihood of hypotheses given observations. By quantifying uncertainty explicitly, it supports robust decision-making where deterministic logic would be brittle.

- ### Overview
  - Probabilistic reasoning treats unknowns as random variables and beliefs as probability distributions over their values.
  - Evidence is incorporated by conditioning, updating prior beliefs into posteriors according to the rules of probability.
  - Graphical models compactly encode dependencies among variables, making large joint distributions tractable to reason about.
  - Inference procedures, exact or approximate, compute marginals and posteriors that drive predictions and decisions.
- ### Mechanisms
  - Bayesian updating: revising priors into posteriors as new evidence arrives.
  - Graphical model representation: encoding conditional independence to factor joint distributions.
  - Marginalisation and conditioning: summing out variables and fixing observed evidence.
  - Approximate inference: sampling and variational methods when exact computation is infeasible.
  - Uncertainty propagation: carrying distributions through computations rather than point estimates.
- ### Applications
  - Diagnosis and prediction systems that reason from noisy or incomplete evidence.
  - Probabilistic machine learning models and their training and inference.
  - Robotics and perception where sensor noise demands explicit uncertainty handling.
  - Decision support that weighs outcomes by their estimated likelihoods.
- ### Provenance

