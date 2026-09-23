
Monte Carlo simulation is a computational technique that estimates the behaviour of a system or the value of a quantity by repeatedly sampling random inputs from probability distributions and aggregating the resulting outcomes. By running many random trials it approximates expectations, distributions and tail risks that are difficult to derive analytically. It is widely used for numerical integration, risk analysis and uncertainty quantification.

- ### Overview
  - Rather than solving a model analytically, Monte Carlo methods evaluate it on many random inputs and average the results, with accuracy improving as the number of trials grows.
  - The approach is especially valuable for high-dimensional integrals and complex systems where closed-form solutions are intractable.
  - Convergence is governed by the law of large numbers, while the [[Central Limit Theorem]] characterises the error.

- ### Mechanisms
  - Sampling inputs from specified distributions, propagating them through a model and collecting outputs.
  - Estimating means, quantiles and probabilities from the empirical sample.
  - Variance-reduction techniques such as importance sampling and stratification to improve efficiency.
  - Markov chain variants for sampling complex posterior distributions.

- ### Applications
  - Pricing options and stress-testing portfolios in [[Financial Modelling]].
  - Reliability and [[Risk Assessment Methodology]] for engineered systems.
  - Propagating input uncertainty through models in [[Sensitivity Analysis]].
  - Approximate inference in [[Bayesian Inference]].

- ### Provenance

