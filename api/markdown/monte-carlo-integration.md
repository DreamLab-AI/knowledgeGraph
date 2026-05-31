- ### Definition
  - Monte Carlo integration estimates the value of an integral by averaging the integrand over randomly sampled points, with error that decreases with the square root of the sample count regardless of dimension.

- ### Semantic Classification
  - owl-class:: metaverse:MonteCarloIntegration
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Numerical Methods]]
  - bridges-to:: [[Importance Sampling]], [[Sequential Monte Carlo]]
  - requires:: [[Random Number Generation]]
  - enables:: [[Volume Rendering]]

- ### Content
  - By drawing samples from a chosen distribution and averaging the integrand divided by the sampling density, Monte Carlo integration approximates high-dimensional integrals where deterministic quadrature is infeasible. Variance, not dimension, governs accuracy, motivating variance-reduction schemes.
  - In rendering it underlies path tracing and volume rendering, where light transport integrals are estimated by sampling many ray paths. Importance sampling reduces noise by concentrating samples where the integrand is large.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z