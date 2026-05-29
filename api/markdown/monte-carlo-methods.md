- ### Definition
  - Monte Carlo methods are a broad class of computational algorithms that employ repeated random sampling to approximate numerical quantities that are analytically intractable, including high-dimensional integrals, expectations under complex probability distributions, and optimal policies in stochastic decision processes. The core idea is that drawing sufficiently many random samples from an appropriate distribution and averaging a function of those samples converges, by the law of large numbers, to the true expected value. Monte Carlo methods underpin Bayesian inference, reinforcement learning, particle filters, and physics simulation, and are foundational to risk analysis, financial modelling, and scientific computing.

- ### Semantic Classification
  - owl-class:: monte-carlo-methods:Monte Carlo Methods
  - owl-role:: Concept

- ### Relationships
  - enables [[Monte Carlo Tree Search]]
  - enables [[Bayesian Inference]]
  - enables [[Monte Carlo Localization]]
  - uses [[Sampling]]
  - uses [[Stochastic Process]]
  - relatedTo [[Reinforcement Learning]]

- ### Content
  - Monte Carlo integration estimates ∫f(x)p(x)dx ≈ (1/N)∑f(x_i) where x_i ~ p(x), providing convergence at rate O(1/√N) regardless of the dimensionality of the integration domain—a critical advantage over deterministic quadrature methods, which suffer from exponential scaling with dimension (the curse of dimensionality). Variance reduction techniques such as importance sampling, control variates, stratified sampling, and quasi-Monte Carlo (low-discrepancy sequences) improve convergence in practice.
  - Markov Chain Monte Carlo (MCMC) methods—including Metropolis-Hastings, Gibbs sampling, and Hamiltonian Monte Carlo—extend Monte Carlo sampling to situations where direct sampling from the target distribution p(x) is infeasible; a Markov chain is constructed whose stationary distribution equals p(x), and samples are drawn by running the chain. MCMC is the computational backbone of Bayesian posterior inference in probabilistic programming systems such as Stan, PyMC, and Pyro.
  - In reinforcement learning, Monte Carlo tree search (MCTS) combines tree search with Monte Carlo rollouts to estimate the value of game states without a learned value function, famously enabling AlphaGo to defeat world-champion human players. In robotics, Monte Carlo localisation (particle filters) maintains a set of weighted hypothesis particles over robot pose to perform Bayesian state estimation from sensor observations. In model-predictive control, model predictive path integral (MPPI) uses GPU-parallelised Monte Carlo rollouts to optimise control inputs under complex dynamics constraints.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z