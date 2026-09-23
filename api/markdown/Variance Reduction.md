
Variance Reduction is a family of techniques that lower the statistical variance of Monte Carlo and stochastic estimators so that fewer samples are needed to reach a target accuracy. Methods such as importance sampling, control variates, antithetic variates, and stratification reshape how samples are drawn or combined without introducing bias. In machine learning, variance reduction stabilises gradient estimates in stochastic optimisation and accelerates convergence of simulation-based methods.

- ### Overview
  - Variance Reduction makes stochastic estimation efficient by attacking variance rather than bias. Because the error of a Monte Carlo estimator shrinks with the square root of sample count, halving variance is equivalent to doubling samples for free. Techniques range from reweighting draws via [[Importance Sampling]] to subtracting correlated [[Numerical Methods]] approximations as control variates, and they are increasingly applied to stabilise gradient estimators in [[Stochastic Gradient Descent]].
- ### Mechanisms
  - Importance sampling reweighting draws toward high-impact regions.
  - Control variates subtracting correlated known-mean quantities.
  - Antithetic variates inducing negative correlation between samples.
  - Stratification partitioning the domain to reduce within-stratum spread.
  - Application to gradient-estimator stabilisation in learning.
- ### Applications
  - Efficient [[Monte Carlo Integration]] of high-dimensional integrals.
  - Financial risk and pricing [[Simulation]].
  - Reinforcement-learning gradient-variance control.
  - Bayesian inference and rare-event estimation.
- ### Provenance

