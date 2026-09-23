
Gaussian process regression is a non-parametric Bayesian method that models an unknown function as a distribution over functions defined by a mean and a covariance (kernel) function. Given observations, it produces a posterior that yields predictions together with calibrated uncertainty estimates. It is widely used where data is scarce and quantified uncertainty matters, such as Bayesian optimisation and surrogate modelling.

- ### Content
  - The kernel encodes assumptions about smoothness and length scale, and its hyperparameters are typically learned by maximising the marginal likelihood. Predictions are closed-form, but exact inference costs cubic time in the number of points, motivating sparse and inducing-point approximations for scale. Its uncertainty estimates make it a natural surrogate model in Bayesian optimisation and active learning.

