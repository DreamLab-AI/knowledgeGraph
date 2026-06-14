public:: true

# monte carlo methods
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9423be33ec352eb5190a1923005f3c7a8d1159c1e436422061b2c75039366d38",
  "@type": "Page",
  "vc:slug": "monte-carlo-methods",
  "title": "monte carlo methods",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:monte-carlo-methods",
  "@type": "Class",
  "label": "Monte Carlo Methods",
  "definition": "Monte Carlo methods are a broad class of computational algorithms that employ repeated random sampling to approximate numerical quantities that are analytically intractable, including high-dimensional integrals, expectations under complex probability distributions, and optimal policies in stochastic decision processes. The fundamental principle holds that averaging a function over sufficiently many independent samples drawn from an appropriate distribution converges, by the law of large numbers, to the true expected value at a rate of O(1/√N) independent of dimensionality. Monte Carlo methods underpin Bayesian inference, reinforcement learning, sequential Monte Carlo particle filters, and physics simulation, and are foundational to risk analysis, financial modelling, and scientific computing. Variance reduction techniques — including importance sampling, control variates, stratified sampling, and quasi-Monte Carlo sequences — substantially improve practical convergence.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:probabilistic-methods",
      "label": "Probabilistic Methods"
    }
  ],
  "sameAs": [
    {"@id": "urn:ngm:class:stochastic-simulation", "label": "Stochastic Simulation"},
    {"@id": "urn:ngm:class:random-sampling-methods", "label": "Random Sampling Methods"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:markov-chain-monte-carlo", "label": "Markov Chain Monte Carlo"},
      {"@id": "urn:ngm:class:monte-carlo-tree-search", "label": "Monte Carlo Tree Search"},
      {"@id": "urn:ngm:class:sequential-monte-carlo", "label": "Sequential Monte Carlo"},
      {"@id": "urn:ngm:class:importance-sampling", "label": "Importance Sampling"},
      {"@id": "urn:ngm:class:quasi-monte-carlo", "label": "Quasi-Monte Carlo"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:random-number-generation", "label": "Random Number Generation"},
      {"@id": "urn:ngm:class:probability-theory", "label": "Probability Theory"},
      {"@id": "urn:ngm:class:law-of-large-numbers", "label": "Law of Large Numbers"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:bayesian-inference", "label": "Bayesian Inference"},
      {"@id": "urn:ngm:class:monte-carlo-localization", "label": "Monte Carlo Localisation"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:risk-analysis", "label": "Risk Analysis"},
      {"@id": "urn:ngm:class:probabilistic-programming", "label": "Probabilistic Programming"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:sampling", "label": "Sampling"},
      {"@id": "urn:ngm:class:stochastic-process", "label": "Stochastic Process"},
      {"@id": "urn:ngm:class:variance-reduction", "label": "Variance Reduction"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:numerical-integration", "label": "Numerical Integration"},
      {"@id": "urn:ngm:class:optimisation", "label": "Optimisation"},
      {"@id": "urn:ngm:class:uncertainty-quantification", "label": "Uncertainty Quantification"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:deterministic-algorithms", "label": "Deterministic Algorithms"},
      {"@id": "urn:ngm:class:numerical-quadrature", "label": "Numerical Quadrature"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:financial-modelling", "label": "Financial Modelling"},
      {"@id": "urn:ngm:class:physics-simulation", "label": "Physics Simulation"},
      {"@id": "urn:ngm:class:drug-discovery", "label": "Drug Discovery"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:particle-filter", "label": "Particle Filter"},
      {"@id": "urn:ngm:class:statistical-inference", "label": "Statistical Inference"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"}
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Monte Carlo methods are a family of computational algorithms that use repeated [[Random Sampling]] to approximate numerical results that resist closed-form analytical solutions, including high-dimensional [[Numerical Integration]], expectations under complex [[Probability Theory]] distributions, and optimal policies in [[Stochastic Process]] environments. The core convergence guarantee — provided by the [[Law of Large Numbers]] — holds that sample averages converge to true expected values at a dimension-independent rate of O(1/√N), making Monte Carlo uniquely suited to the [[Curse of Dimensionality]] that defeats deterministic [[Numerical Quadrature]] in high-dimensional spaces. The family encompasses [[Markov Chain Monte Carlo]] for posterior sampling, [[Sequential Monte Carlo]] for dynamic state estimation, [[Monte Carlo Tree Search]] for combinatorial planning, and [[Importance Sampling]] for variance-efficient estimation, collectively spanning [[Bayesian Inference]], [[Reinforcement Learning]], robotics, finance, and scientific computing.

- ### Overview
  - Named after the Casino de Monte-Carlo, the technique was formalised during the Manhattan Project in the 1940s by Stanislaw Ulam and John von Neumann to study neutron diffusion — a problem with extremely high-dimensional integrals. The method has since become one of the most widely deployed computational paradigms across science, engineering, and artificial intelligence.
  - **Why it matters**: Many real-world problems involve integrals or expectations over high-dimensional spaces where analytical solutions are unavailable and deterministic methods scale exponentially with dimension. Monte Carlo escapes this trap by trading exact answers for statistical approximations that improve with compute, enabling tractable inference in [[Probabilistic Programming]], optimisation in [[Reinforcement Learning]], and simulation in [[Physics Simulation]] and [[Financial Modelling]].
  - **Convergence**: The canonical Monte Carlo estimator for E[f(X)] is (1/N)∑f(xᵢ) where xᵢ ~ p(x). Convergence rate is O(1/√N) — slow in absolute terms but crucially independent of dimension d, unlike deterministic quadrature which scales as O(N^{-k/d}) for k-th order rules in d dimensions.
  - **Variance reduction** is the practical art of Monte Carlo: [[Importance Sampling]] reweights a proposal distribution to concentrate samples in high-probability regions; [[Control Variates]] subtract a correlated known-expectation term; [[Stratified Sampling]] partitions the sample space; [[Quasi-Monte Carlo]] replaces pseudo-random points with low-discrepancy sequences (e.g., Halton, Sobol) for faster O((log N)^d / N) convergence on smooth integrands.

- ### Key Mechanisms
  - **Direct Monte Carlo (crude estimator)**: Draw N i.i.d. samples from p(x), compute (1/N)∑f(xᵢ). Suitable when p(x) is easy to sample.
  - **[[Importance Sampling]]**: Draw from an alternative proposal q(x), weight by w(x) = p(x)/q(x). Reduces variance when q concentrates on regions where f(x)p(x) is large. Essential in [[Sequential Monte Carlo]] and off-policy [[Reinforcement Learning]].
  - **[[Markov Chain Monte Carlo]] (MCMC)**: Construct a Markov chain with stationary distribution p(x); draw correlated samples by running the chain. Sub-methods include:
    - *Metropolis-Hastings*: accept/reject proposals to maintain detailed balance.
    - *Gibbs Sampling*: cycle through conditional distributions; requires tractable conditionals.
    - *Hamiltonian Monte Carlo (HMC)*: exploits gradient information to propose distant moves efficiently; backbone of Stan and NumPyro.
    - *No-U-Turn Sampler (NUTS)*: adaptive HMC that auto-tunes step size and trajectory length.
  - **[[Sequential Monte Carlo]] (Particle Filters)**: Maintains a weighted particle set propagated through time steps; the [[Particle Filter]] implements Bayesian state estimation for non-linear, non-Gaussian dynamical systems. Used in [[Monte Carlo Localisation]] for robot position tracking.
  - **[[Monte Carlo Tree Search]] (MCTS)**: Combines tree traversal (selection, expansion) with Monte Carlo rollouts (simulation) and backpropagation to estimate action values in combinatorial search spaces. The Upper Confidence Bound for Trees (UCT) algorithm balances exploration/exploitation. Underpins AlphaGo, AlphaZero, and general game playing.
  - **[[Quasi-Monte Carlo]] (QMC)**: Replaces pseudo-random samples with deterministic low-discrepancy sequences to achieve faster convergence on smooth, low-effective-dimension integrands. Popular in [[Financial Modelling]] and rendering.
  - **Model Predictive Path Integral (MPPI)**: GPU-parallelised Monte Carlo rollouts of a dynamics model to optimise control inputs under complex constraints; used in high-speed autonomous driving and robotics.

- ### Applications
  - **[[Bayesian Inference]] and [[Probabilistic Programming]]**: MCMC and variational inference are the twin engines of Bayesian posterior computation. Systems such as Stan, PyMC, Pyro, and NumPyro rely on HMC/NUTS to sample from posterior distributions over model parameters, enabling uncertainty-aware prediction in medicine, ecology, and social science.
  - **[[Reinforcement Learning]]**: Monte Carlo policy evaluation estimates state or action values by averaging returns from complete episodes, without requiring a model. MCTS is the core planner in AlphaGo, AlphaZero, MuZero, and open-source game-playing agents. Distributional RL uses Monte Carlo returns to model the full return distribution.
  - **[[Financial Modelling]] and [[Risk Analysis]]**: Option pricing (Black-Scholes, stochastic volatility models), Value-at-Risk (VaR), CVA computation, and portfolio stress testing are dominated by Monte Carlo simulation. The method handles path-dependent payoffs and high-dimensional baskets that closed-form formulae cannot handle.
  - **[[Physics Simulation]]**: Neutron transport, radiation dosimetry (GEANT4, MCNP), quantum chromodynamics (lattice QCD), and stellar atmosphere modelling all rely on Monte Carlo integration over phase space. The Monte Carlo method is the reference standard for radiative transfer in global illumination rendering (path tracing, photon mapping).
  - **Robotics and [[Simultaneous Localisation and Mapping]]**: [[Monte Carlo Localisation]] (Adaptive Particle Filter) estimates robot pose from sensor observations; FastSLAM uses Rao-Blackwellised particle filters to simultaneously estimate map and trajectory.
  - **[[Drug Discovery]] and Computational Chemistry**: Markov-state models for protein folding, docking score estimation, and free-energy perturbation calculations use MCMC to explore conformational spaces intractable by molecular dynamics alone.
  - **[[Uncertainty Quantification]]**: Forward propagation of parameter uncertainty through complex simulation codes (CFD, climate models, nuclear safety) is performed via ensembles of Monte Carlo runs, providing confidence intervals and sensitivity indices (Sobol indices).
  - **[[Optimisation]]**: Simulated annealing, cross-entropy method, and CMA-ES use Monte Carlo sampling over the solution space to escape local optima in non-convex landscapes.

- ### Relationships
  - hasPart:: [[Markov Chain Monte Carlo]]
  - hasPart:: [[Monte Carlo Tree Search]]
  - hasPart:: [[Sequential Monte Carlo]]
  - hasPart:: [[Importance Sampling]]
  - hasPart:: [[Quasi-Monte Carlo]]
  - requires:: [[Random Number Generation]]
  - requires:: [[Probability Theory]]
  - requires:: [[Law of Large Numbers]]
  - enables:: [[Bayesian Inference]]
  - enables:: [[Monte Carlo Localisation]]
  - enables:: [[Reinforcement Learning]]
  - enables:: [[Risk Analysis]]
  - enables:: [[Probabilistic Programming]]
  - uses:: [[Sampling]]
  - uses:: [[Stochastic Process]]
  - uses:: [[Variance Reduction]]
  - supports:: [[Numerical Integration]]
  - supports:: [[Optimisation]]
  - supports:: [[Uncertainty Quantification]]
  - contrastsWith:: [[Deterministic Algorithms]]
  - contrastsWith:: [[Numerical Quadrature]]
  - bridges-to:: [[Financial Modelling]]
  - bridges-to:: [[Physics Simulation]]
  - bridges-to:: [[Drug Discovery]]
  - relatedTo:: [[Particle Filter]]
  - relatedTo:: [[Statistical Inference]]
  - relatedTo:: [[Deep Learning]]

- ### Standards & Context
  - **Reference implementations**: Stan (HMC/NUTS in C++), PyMC (Theano/JAX backend), Pyro/NumPyro (PyTorch/JAX), JAGS, OpenBUGS for Bayesian MCMC; Scipy, numpy for basic Monte Carlo integration.
  - **Rendering standards**: IEEE 754 floating-point arithmetic and the Physically Based Rendering (PBR) specification underpin path-tracing Monte Carlo renderers (PBRT, Mitsuba, Arnold, Cycles).
  - **Risk standards**: Basel III (banking capital requirements) and Solvency II (insurance) mandate Monte Carlo simulation for internal models computing VaR and CVA. ISDA publishes standardised credit exposure Monte Carlo frameworks.
  - **Safety-critical simulation**: MCNP (Monte Carlo N-Particle Transport) is licensed by Los Alamos National Laboratory; GEANT4 is the CERN-maintained reference for particle physics and medical dosimetry simulation.
  - **Quasi-Monte Carlo**: NIST Handbook of Mathematical Functions documents low-discrepancy sequences; Joe-Kuo Sobol direction numbers are the de facto standard for financial QMC.
  - **Connections to standards bodies**: ISO/IEC standards for pseudo-random number generators (e.g., Mersenne Twister in C++11 `<random>`) underpin reproducible Monte Carlo computation.

- ### Provenance
  - sources:: Ulam & Von Neumann (1947 Los Alamos report); Robert & Casella "Monte Carlo Statistical Methods"; Andrieu et al. "An Introduction to MCMC for Machine Learning"; Sutton & Barto "Reinforcement Learning: An Introduction"; Silver et al. AlphaGo (2016 Nature); Glasserman "Monte Carlo Methods in Financial Engineering"
  - updated:: 2026-06-13
