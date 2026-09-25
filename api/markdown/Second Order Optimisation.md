Second-order optimisation is a family of optimisation methods that use second-derivative (curvature) information, typically the Hessian matrix or its approximations, to determine search directions and step sizes. By accounting for the curvature of the objective, these methods can converge in far fewer iterations than first-order methods near a minimum, at the cost of higher per-iteration computation and memory. Examples include Newton's method, quasi-Newton methods such as L-BFGS, and conjugate-gradient approaches.

### Overview

- Uses second derivatives (the Hessian) to model local curvature.
- Newton's method takes the inverse-Hessian-scaled gradient step.
- Quasi-Newton methods such as L-BFGS approximate the Hessian to save memory.

### Mechanisms

- Hessian or curvature-matrix estimation.
- Newton and quasi-Newton update rules.
- Trust-region and line-search globalisation strategies.
- Trade-off: fast convergence versus high per-iteration cost.

### Applications

- Training smaller or convex machine-learning models.
- Logistic regression and conditional random fields.
- Scientific computing and numerical optimisation.
- Fine-tuning where second-order curvature aids conditioning.

### Provenance

