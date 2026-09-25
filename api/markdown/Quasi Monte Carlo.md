Quasi-Monte Carlo (QMC) is a family of numerical integration and sampling methods that replace the pseudo-random points of classical Monte Carlo with deterministic low-discrepancy sequences. By spreading sample points more evenly across the integration domain, QMC achieves faster asymptotic convergence than standard Monte Carlo for many smooth, moderate-dimensional integrals. It is widely used in computational finance, computer graphics, and uncertainty quantification.

### Overview

- The motivating insight is that the slow convergence of Monte Carlo arises partly from the clustering and gaps that random points exhibit. Low-discrepancy (or "quasi-random") sequences such as Sobol, Halton, and Faure sequences are constructed to fill the unit hypercube as evenly as possible.
- The Koksma–Hlawka inequality bounds QMC error by the product of the integrand's variation and the discrepancy of the point set, formalising why more uniform points reduce error. The advantage degrades gracefully as dimension and integrand roughness increase.
- Randomised QMC blends the two paradigms by applying random shifts or scrambles to a low-discrepancy set, recovering unbiased error estimates while retaining most of the convergence benefit.

### Mechanisms

- Generates deterministic low-discrepancy sequences (Sobol, Halton, Faure, lattice rules) rather than independent pseudo-random draws.
- Measures point-set quality by discrepancy, a uniformity metric tied to the worst-case integration error.
- Achieves near-linear convergence for smooth integrands of moderate effective dimension.
- Combines with [[Variance Reduction]] and dimension-reduction transforms to extend its effective reach.
- Supports randomised scrambling for unbiased confidence intervals.

### Applications

- Pricing of high-dimensional financial derivatives and risk integrals where many correlated factors must be integrated.
- Light-transport and rendering integrals in computer graphics, where QMC reduces visible noise.
- Uncertainty quantification and sensitivity analysis in engineering and the physical sciences.
- Bayesian computation and expectation estimation as a faster alternative to plain [[Importance Sampling]].

### Provenance

