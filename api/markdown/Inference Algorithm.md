
An inference algorithm is a computational procedure for deriving conclusions about unobserved quantities from a model and observed data, typically by computing or approximating posterior distributions in probabilistic models. Common families include exact methods (variable elimination, belief propagation), sampling methods (Markov chain Monte Carlo, importance sampling), and variational approximations. It is the engine that turns a model specification into actionable estimates or predictions.

- ### Content
  - Exact inference is tractable only for restricted model structures, so practitioners rely on approximate methods such as [[Hamiltonian Monte Carlo]] and variational inference for large or continuous state spaces. The choice trades off bias, variance, and computational cost.

