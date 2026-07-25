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
  "definition": "Markov Chain Monte Carlo (MCMC) is a family of computational algorithms that generate samples from an arbitrary target probability distribution by constructing a Markov chain whose stationary distribution equals the target, enabling tractable approximate Bayesian inference and numerical integration over high-dimensional parameter spaces that are intractable by exact analytical methods. Foundational algorithms include Metropolis-Hastings, Gibbs sampling, Hamiltonian Monte Carlo (HMC), and the No-U-Turn Sampler (NUTS). MCMC is the standard tool for posterior inference in probabilistic programming and Bayesian statistical modelling across science, engineering, and machine learning.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:monte-carlo-methods",
      "label": "Monte Carlo Methods"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:markov-chain",
        "label": "Markov Chain"
      },
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      },
      {
        "@id": "urn:ngm:class:hamiltonian-dynamics",
        "label": "Hamiltonian Dynamics"
      },
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      },
      {
        "@id": "urn:ngm:class:probabilistic-programming",
        "label": "Probabilistic Programming"
      },
      {
        "@id": "urn:ngm:class:uncertainty-quantification",
        "label": "Uncertainty Quantification"
      },
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      },
      {
        "@id": "urn:ngm:class:ergodicity",
        "label": "Ergodicity"
      },
      {
        "@id": "urn:ngm:class:detailed-balance",
        "label": "Detailed Balance"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:metropolis-hastings",
        "label": "Metropolis-Hastings"
      },
      {
        "@id": "urn:ngm:class:gibbs-sampling",
        "label": "Gibbs Sampling"
      },
      {
        "@id": "urn:ngm:class:no-u-turn-sampler",
        "label": "No-U-Turn Sampler"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:variational-inference",
        "label": "Variational Inference"
      },
      {
        "@id": "urn:ngm:class:normalising-flows",
        "label": "Normalising Flows"
      },
      {
        "@id": "urn:ngm:class:sequential-monte-carlo",
        "label": "Sequential Monte Carlo"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:probabilistic-model",
        "label": "Probabilistic Model"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Bayesian Neural Network"
      },
      {
        "@id": "urn:ngm:class:gaussian-process",
        "label": "Gaussian Process"
      },
      {
        "@id": "urn:ngm:class:convergence",
        "label": "Convergence Diagnostics"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:statistical-physics",
        "label": "Statistical Physics"
      },
      {
        "@id": "urn:ngm:class:computational-biology",
        "label": "Computational Biology"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:mcmc",
      "label": "MCMC"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - [[Markov Chain Monte Carlo]] (MCMC) is a family of algorithms that sample from a target [[Probability Distribution]] by constructing a [[Markov Chain]] whose stationary distribution equals that target, making high-dimensional [[Bayesian Inference]] tractable when the posterior is known only up to a normalising constant. It sits at the intersection of [[Probability Theory]], [[Stochastic Processes]], and computational [[Sampling]] methods. MCMC is the backbone of modern [[Probabilistic Programming]] and has become indispensable across applied statistics, [[Machine Learning]], and scientific simulation.

- ### Overview
  - MCMC solves the fundamental problem of drawing samples from a probability distribution $\pi(\theta)$ that cannot be sampled directly — typically a Bayesian posterior $\pi(\theta \mid \mathbf{x}) \propto p(\mathbf{x} \mid \theta)\,\pi(\theta)$.
  - The core idea is to design a Markov chain over the parameter space such that its unique stationary distribution is the target $\pi$. Running the chain long enough guarantees samples approximate draws from $\pi$.
  - Once the chain reaches stationarity (after a *burn-in* phase), collected samples are used to compute posterior summaries: means, variances, credible intervals, and predictive distributions.
  - MCMC enables exact Bayesian computation (in the limit of infinite samples) in contrast to the approximations of [[Variational Inference]] or [[Normalising Flows]], making it the gold standard for accuracy-critical applications.
  - [[Convergence Diagnostics]] such as the Gelman-Rubin $\hat{R}$ statistic and Effective Sample Size (ESS) assess whether multiple chains have mixed and are sampling reliably.

- ### Key Algorithms
  - **[[Metropolis-Hastings]]** — the foundational MCMC algorithm (Metropolis 1953, Hastings 1970). A proposal distribution $q(\theta' \mid \theta)$ generates candidates accepted with probability $\min\!\left(1,\, \frac{\pi(\theta')\,q(\theta \mid \theta')}{\pi(\theta)\,q(\theta' \mid \theta)}\right)$, guaranteeing [[Detailed Balance]] with respect to $\pi$.
  - **[[Gibbs Sampling]]** — samples each parameter in turn from its conditional distribution $p(\theta_i \mid \theta_{-i}, \mathbf{x})$. Requires tractable conditionals; naturally extends to hierarchical models. Introduced by Geman & Geman (1984) and popularised for Bayesian statistics by Gelfand & Smith (1990).
  - **[[Hamiltonian Monte Carlo]] (HMC)** — augments the parameter space with auxiliary momentum variables and evolves proposals using [[Hamiltonian Dynamics]] (via leapfrog integration). Gradient information from $\log \pi$ enables distant, high-acceptance proposals, reducing random-walk behaviour. Introduced by Duane et al. (1987); adapted to Bayesian computation by Neal (1994).
  - **[[No-U-Turn Sampler]] (NUTS)** — adaptively tunes HMC's trajectory length using a no-U-turn criterion, eliminating manual tuning. Published by Hoffman & Gelman (2014); the default sampler in [[Stan]] and [[PyMC]].
  - **[[Sequential Monte Carlo]] (Particle MCMC)** — combines particle filtering with MCMC kernels for state-space and time-series models; handles non-stationary targets and model comparison.
  - **Riemannian HMC** — uses the Fisher information metric to adapt proposals to local geometry of the parameter space, improving efficiency in curved posteriors.
  - **Langevin Monte Carlo (MALA)** — a gradient-based first-order method using the stochastic gradient of $\log \pi$ to propose moves; computationally cheaper than full HMC but less efficient per sample.

- ### Theoretical Foundations
  - **[[Ergodicity]]** — MCMC correctness requires the chain be ergodic: irreducible (every state reachable from every other) and aperiodic. Ergodicity guarantees the empirical sample average converges to the true expectation under $\pi$.
  - **[[Detailed Balance]]** — a sufficient (though not necessary) condition for $\pi$ to be stationary: $\pi(\theta)\,T(\theta' \mid \theta) = \pi(\theta')\,T(\theta \mid \theta')$. Metropolis-Hastings is constructed to satisfy this.
  - **Mixing Time** — the number of steps before the chain distribution is close to stationarity. Poor mixing (slow diffusion, high autocorrelation) inflates variance of estimates and requires longer runs.
  - **Burn-in and Thinning** — early samples (burn-in) are discarded to remove dependence on the starting state. Thinning (keeping every $k$-th sample) can reduce autocorrelation but is generally inefficient compared to using all post-burn-in samples.
  - **Central Limit Theorem for Markov Chains** — under regularity conditions, sample averages from ergodic chains satisfy a CLT, enabling asymptotically valid uncertainty quantification.

- ### Applications
  - **[[Bayesian Inference]] in statistics** — fitting hierarchical models, mixed-effects models, and latent variable models in clinical trials, epidemiology, and social science.
  - **[[Probabilistic Programming]]** — frameworks such as [[Stan]], [[PyMC]], Pyro, NumPyro, and Turing.jl use MCMC (primarily NUTS) as their core inference engine, exposing posterior computation to practitioners via model specification languages.
  - **[[Bayesian Neural Network]]s** — MCMC provides exact posterior inference over network weights, enabling calibrated uncertainty in deep learning; computationally expensive but increasingly feasible via Stochastic Gradient MCMC.
  - **[[Gaussian Process]] regression and classification** — MCMC is used for hyperparameter marginalisation and latent function inference in GP models.
  - **Astrophysics and cosmology** — parameter estimation for cosmological models (e.g. CMB power spectrum fitting), exoplanet characterisation, and gravitational-wave source inference (LIGO uses MCMC extensively).
  - **Computational biology and bioinformatics** — phylogenetic tree inference (MrBayes, BEAST), protein structure prediction, and molecular dynamics enhanced sampling.
  - **Statistical physics** — simulation of lattice models (Ising model), computation of partition functions, and free-energy estimation.
  - **Finance and actuarial science** — Bayesian calibration of stochastic volatility models, option pricing, and risk quantification.
  - **Reinforcement learning** — Bayesian model-based RL uses MCMC for posterior inference over environment dynamics.

- ### Relationships
  - uses:: [[Markov Chain]]
  - uses:: [[Sampling]]
  - uses:: [[Hamiltonian Dynamics]]
  - uses:: [[Gradient Descent]]
  - enables:: [[Bayesian Inference]]
  - enables:: [[Probabilistic Programming]]
  - enables:: [[Uncertainty Quantification]]
  - enables:: [[Posterior Inference]]
  - requires:: [[Probability Theory]]
  - requires:: [[Ergodicity]]
  - requires:: [[Detailed Balance]]
  - implements:: [[Metropolis-Hastings]]
  - implements:: [[Gibbs Sampling]]
  - implements:: [[No-U-Turn Sampler]]
  - contrastsWith:: [[Variational Inference]]
  - contrastsWith:: [[Normalising Flows]]
  - contrastsWith:: [[Sequential Monte Carlo]]
  - relatedTo:: [[Probabilistic Model]]
  - relatedTo:: [[Bayesian Neural Network]]
  - relatedTo:: [[Gaussian Process]]
  - relatedTo:: [[Convergence Diagnostics]]
  - bridges-to:: [[Statistical Physics]]
  - bridges-to:: [[Computational Biology]]

- ### Standards & Ecosystem
  - **[[Stan]]** — a probabilistic programming language and MCMC platform with NUTS as default sampler, widely adopted in applied statistics and social sciences.
  - **[[PyMC]]** (formerly PyMC3) — Python-based Bayesian modelling framework backed by Aesara/PyTensor; uses NUTS, with JAX backends for GPU acceleration.
  - **Pyro / NumPyro** — deep probabilistic programming frameworks from Uber AI / Google DeepMind; NumPyro leverages JAX for vectorised MCMC.
  - **Turing.jl** — Julia-based probabilistic programming language with composable MCMC samplers including HMC, NUTS, and particle MCMC.
  - **MrBayes / BEAST** — domain-specific MCMC tools for Bayesian phylogenetics and molecular clock estimation.
  - No single governing standards body; convergence and reporting practices are guided by community best practices (e.g. [[Andrew Gelman]]'s "Bayesian Workflow" recommendations and the BDA3 textbook).

- ### Diagnostics & Best Practices
  - Run **multiple chains** (typically 4) from dispersed starting points; divergence between chains signals non-convergence.
  - Monitor **$\hat{R}$ (R-hat)**: values $<1.01$ indicate convergence; values $>1.1$ indicate problems.
  - Monitor **Effective Sample Size (ESS)**: bulk and tail ESS $>100$ per chain per parameter recommended.
  - Diagnose **divergent transitions** in HMC/NUTS (proposals that violate energy conservation), which indicate pathological geometry requiring reparameterisation.
  - Use **posterior predictive checks** to validate model fit.
  - **Reparameterisation** (e.g. non-centred parameterisations for hierarchical models) dramatically improves mixing in nested models.

- ### Provenance
  - sources:: Metropolis et al. (1953) "Equations of State Calculations by Fast Computing Machines"; Hastings (1970); Gelfand & Smith (1990); Neal (1994) "Bayesian Learning for Neural Networks"; Hoffman & Gelman (2014) "The No-U-Turn Sampler"; Gelman et al. "Bayesian Data Analysis" (3rd ed.)
  - updated:: 2026-06-13
