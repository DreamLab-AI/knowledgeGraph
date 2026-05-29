public:: true

# Markov Chain Monte Carlo
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:markov-chain-monte-carlo",
  "@type": "Page",
  "vc:slug": "markov-chain-monte-carlo",
  "title": "Markov Chain Monte Carlo",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:markov-chain-monte-carlo",
  "@type": "Class",
  "label": "Markov Chain Monte Carlo",
  "definition": "Markov Chain Monte Carlo (MCMC) is a class of algorithms that generate samples from a target probability distribution by constructing a Markov chain whose stationary distribution equals the target, enabling approximate Bayesian inference and integration over high-dimensional spaces that are intractable by exact methods. Core algorithms include Metropolis-Hastings, Gibbs sampling, Hamiltonian Monte Carlo, and No-U-Turn Sampler.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [
    {"@id": "urn:ngm:class:monte-carlo-methods", "label": "Monte Carlo Methods"},
    {"@id": "urn:ngm:class:probabilistic-inference", "label": "Probabilistic Inference"}
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:markov-chain", "label": "Markov Chain"},
      {"@id": "urn:ngm:class:sampling", "label": "Sampling"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:bayesian-inference", "label": "Bayesian Inference"},
      {"@id": "urn:ngm:class:probabilistic-model", "label": "Probabilistic Model"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:probability-theory", "label": "Probability Theory"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Markov Chain Monte Carlo]] is a family of [[Probabilistic Inference]] algorithms that sample from complex target distributions via ergodic [[Markov Chain]] construction, enabling tractable [[Bayesian Inference]] in statistical models where the posterior is known only up to a normalising constant.

- ### Relationships
  - MCMC builds on [[Markov Chain]] theory and [[Sampling]] mathematics, enables practical [[Bayesian Inference]] and fitting of complex [[Probabilistic Model]] structures, and is grounded in [[Probability Theory]] governing convergence guarantees and mixing times.

- ### Content
  - The Metropolis algorithm, the first MCMC method, was published in 1953 by Nicholas Metropolis and colleagues for computing equations of state in statistical mechanics. Wilfred Hastings generalised it in 1970. Gibbs sampling was introduced by Geman and Geman in 1984 for image restoration and popularised in Bayesian statistics by Gelfand and Smith in 1990. Hamiltonian Monte Carlo (HMC), using gradient information to propose distant moves, was introduced by Duane et al. in 1987 and adapted to Bayesian computation by Neal in 1994. The No-U-Turn Sampler (NUTS), which automates HMC's step-size tuning, was published by Hoffman and Gelman in 2014 and forms the core of Stan and PyMC.
  - MCMC algorithms work by constructing a Markov chain over the parameter space whose transition kernel satisfies detailed balance with respect to the target posterior. Starting from an initial state, the chain is run for many iterations: proposals are generated (e.g., by perturbing current parameters), and accepted or rejected according to an acceptance ratio that ensures the chain eventually samples from the target. After a burn-in phase, collected samples are used to estimate posterior means, variances, credible intervals, and marginal distributions. Convergence diagnostics (R-hat, effective sample size) assess whether chains have mixed.
  - MCMC is the workhorse of Bayesian data analysis in fields from epidemiology to astrophysics to clinical trial design. It enables researchers to quantify uncertainty in model parameters, propagate uncertainty through predictions, and perform model comparison via Bayes factors or leave-one-out cross-validation. Probabilistic programming languages (Stan, PyMC, Pyro, NumPyro, Turing.jl) expose MCMC to practitioners without requiring manual algorithm implementation. In machine learning, MCMC underpins Bayesian neural networks, Gaussian process inference, and uncertainty-aware deep learning research.
  - As of 2024–2025, MCMC methods are being complemented and in some settings replaced by variational inference and normalising flows for large-scale models, but remain the gold standard for exact posterior sampling when computation permits. Sequential Monte Carlo (particle MCMC) and Riemannian HMC extend the framework to time-series and curved parameter spaces. Integration with deep learning—using neural networks to propose moves or learn energy functions—is an active research direction. Distributed MCMC on GPU clusters and black-box variational methods continue to push the frontier of tractable Bayesian computation.

