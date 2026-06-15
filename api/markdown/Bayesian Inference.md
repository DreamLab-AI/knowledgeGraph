```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@type": "Page",
  "@id": "urn:visionflow:page:bayesian-inference",
  "title": "Bayesian Inference",
  "vc:slug": "bayesian-inference",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bayesian-inference",
  "@type": "Class",
  "label": "Bayesian Inference",
  "definition": "Bayesian Inference is a principled statistical framework that updates the probability of a hypothesis as new evidence is observed, using Bayes' theorem to combine a prior distribution over parameters with a likelihood function derived from data to yield a posterior distribution. Unlike frequentist methods, it treats probability as a degree of belief and propagates uncertainty through every step of reasoning, enabling calibrated predictions and natural model comparison via marginal likelihoods. In machine learning, it underpins probabilistic graphical models, Gaussian processes, Bayesian neural networks, variational inference, and Markov Chain Monte Carlo methods. Its capacity to incorporate domain knowledge through priors and to quantify epistemic uncertainty makes it foundational for safety-critical AI, active learning, and sequential decision-making.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:prior-distribution",
        "label": "Prior Distribution"
      },
      {
        "@id": "urn:ngm:class:likelihood-function",
        "label": "Likelihood Function"
      },
      {
        "@id": "urn:ngm:class:posterior-distribution",
        "label": "Posterior Distribution"
      },
      {
        "@id": "urn:ngm:class:markov-chain-monte-carlo",
        "label": "Markov Chain Monte Carlo"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      },
      {
        "@id": "urn:ngm:class:statistical-model",
        "label": "Statistical Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:anomaly-detection",
        "label": "Anomaly Detection"
      },
      {
        "@id": "urn:ngm:class:active-learning",
        "label": "Active Learning"
      },
      {
        "@id": "urn:ngm:class:uncertainty-quantification",
        "label": "Uncertainty Quantification"
      },
      {
        "@id": "urn:ngm:class:model-selection",
        "label": "Model Selection"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      },
      {
        "@id": "urn:ngm:class:variational-inference",
        "label": "Variational Inference"
      },
      {
        "@id": "urn:ngm:class:expectation-maximisation",
        "label": "Expectation Maximisation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:bayes-theorem",
        "label": "Bayes' Theorem"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:maximum-likelihood-estimation",
        "label": "Maximum Likelihood Estimation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:causal-inference",
        "label": "Causal Inference"
      },
      {
        "@id": "urn:ngm:class:decision-theory",
        "label": "Decision Theory"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:graphical-model",
        "label": "Probabilistic Graphical Model"
      },
      {
        "@id": "urn:ngm:class:gaussian-process",
        "label": "Gaussian Process"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:information-theory",
        "label": "Information Theory"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:bayesian-statistics",
      "label": "Bayesian Statistics"
    },
    {
      "@id": "urn:ngm:class:bayesian-learning",
      "label": "Bayesian Learning"
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
  - Bayesian Inference is a principled statistical framework centred on [[Bayes' Theorem]], which states that the posterior probability of a hypothesis is proportional to the product of its prior probability and the likelihood of the observed evidence. Unlike [[Frequentist Statistics]], it treats probability as a degree of rational belief rather than a long-run frequency, allowing domain knowledge to be encoded in a [[Prior Distribution]] and systematically revised as data accumulates into a [[Posterior Distribution]]. The framework naturally handles uncertainty, supports principled [[Model Selection]] via marginal likelihoods, and scales from closed-form conjugate models to complex hierarchical structures approximated by [[Markov Chain Monte Carlo]] or [[Variational Inference]]. It is recognised as a mature cornerstone of both classical statistics and modern [[Machine Learning]].

- ### Overview
  - Bayesian Inference dates to the 18th-century work of Thomas Bayes and Pierre-Simon Laplace, who formalised the idea of inverting probability to reason from effects to causes.
  - The core update rule — posterior ∝ prior × likelihood — is deceptively simple yet encompasses an enormous range of modelling choices:
    - **Prior**: encodes beliefs before observing data; can be uninformative (Jeffreys, flat) or informative (expert knowledge, regularisation).
    - **Likelihood**: the probability of the observed data given the parameters, derived from a generative model.
    - **Posterior**: the updated belief distribution over parameters or hypotheses; the primary output of Bayesian analysis.
    - **Evidence (marginal likelihood)**: the normalising constant; used as a model comparison criterion.
  - The framework is fully probabilistic end-to-end: predictions are made by integrating over the posterior (posterior predictive distribution), avoiding the point-estimate brittleness of frequentist methods.
  - Its adoption across disciplines — from clinical trials to robotics to language modelling — qualifies it as a **mature** paradigm.

- ### Key Mechanisms
  - **Conjugate Priors** — specific prior-likelihood pairs (e.g. Beta–Binomial, Gaussian–Gaussian) yield analytically tractable posteriors, enabling exact closed-form updates without numerical integration.
  - **[[Markov Chain Monte Carlo]] (MCMC)** — algorithms such as Metropolis–Hastings, Gibbs sampling, and Hamiltonian Monte Carlo draw samples from intractable posteriors, enabling inference in high-dimensional and non-conjugate models.
  - **[[Variational Inference]]** — approximates the posterior with a simpler family of distributions (e.g. mean-field Gaussian) by minimising KL divergence, trading exactness for computational efficiency; essential in [[Deep Learning]] applications such as [[Variational Autoencoders]].
  - **[[Expectation Maximisation]]** — an iterative algorithm that alternates between computing a soft posterior over latent variables (E-step) and maximising the expected log-likelihood (M-step); bridges Bayesian and frequentist estimation.
  - **Sequential / Online Updating** — the posterior from one batch becomes the prior for the next, enabling continual learning without storing past data; foundational to [[Kalman Filter]] and particle filter algorithms.
  - **[[Gaussian Process]]** — a non-parametric Bayesian model placing a prior over functions; used in surrogate modelling, hyperparameter optimisation (Bayesian optimisation), and spatial statistics.
  - **Hierarchical Models** — multi-level priors capture population-level and individual-level variation simultaneously; widely used in [[Natural Language Processing]], clinical trials, and meta-analysis.
  - **[[Probabilistic Graphical Model]]** — encodes conditional independence assumptions among random variables using directed (Bayesian networks) or undirected (Markov random fields) graphs; Bayesian inference is the inference engine that populates these graphs.

- ### Bayesian Neural Networks
  - Bayesian Neural Networks (BNNs) place prior distributions over network weights and infer a posterior after seeing data, producing uncertainty-aware predictions.
  - Full posterior inference is computationally prohibitive for large networks; practical approximations include mean-field [[Variational Inference]], Monte Carlo Dropout, and deep ensembles.
  - BNNs are particularly relevant in safety-critical domains: medical diagnosis, autonomous systems, and scientific discovery, where knowing what the model does not know is as important as knowing what it does.
  - Connects [[Deep Learning]] with Bayesian probability theory, forming a bridge between the two dominant paradigms of [[Machine Learning]].

- ### Applications
  - **Medical & Clinical AI** — disease diagnosis, survival modelling, adaptive clinical trial design; posterior probabilities map directly to clinically interpretable risk scores.
  - **[[Natural Language Processing]]** — Bayesian topic models (LDA), probabilistic parsing, Bayesian hyperparameter tuning for large language models.
  - **[[Anomaly Detection]]** — Bayesian change-point detection and outlier scoring with principled false-positive control via posterior probabilities.
  - **Robotics & Autonomous Systems** — state estimation via Bayes filters ([[Kalman Filter]], particle filters), simultaneous localisation and mapping (SLAM), and risk-aware motion planning under [[Uncertainty Quantification]].
  - **[[Active Learning]]** — selecting the most informative data points to label by maximising expected information gain computed from the posterior; reduces annotation cost.
  - **Recommender Systems** — Bayesian matrix factorisation models user and item uncertainties, improving cold-start handling and diversity.
  - **Finance & Risk** — Bayesian portfolio optimisation, credit scoring, and regime-switching models for time-series data.
  - **[[Causal Inference]]** — structural causal models combined with Bayesian posterior inference to estimate treatment effects and counterfactuals.
  - **Scientific Discovery** — parameter estimation in physics, astronomy, and bioinformatics; Bayesian model comparison guides hypothesis selection without p-value dependence.
  - **[[Reinforcement Learning]]** — Bayesian approaches to exploration–exploitation trade-offs (Thompson Sampling), model-based RL with posterior uncertainty over environment dynamics.

- ### Relationships
  - implements:: [[Bayes' Theorem]]
  - hasPart:: [[Prior Distribution]]
  - hasPart:: [[Likelihood Function]]
  - hasPart:: [[Posterior Distribution]]
  - hasPart:: [[Markov Chain Monte Carlo]]
  - requires:: [[Probability Theory]]
  - requires:: [[Statistical Model]]
  - dependsOn:: [[Conditional Probability]]
  - uses:: [[Variational Inference]]
  - uses:: [[Expectation Maximisation]]
  - uses:: [[Knowledge Representation]]
  - enables:: [[Anomaly Detection]]
  - enables:: [[Active Learning]]
  - enables:: [[Uncertainty Quantification]]
  - enables:: [[Model Selection]]
  - enables:: [[Sequential Decision-Making]]
  - supports:: [[Machine Learning]]
  - supports:: [[Reinforcement Learning]]
  - supports:: [[Natural Language Processing]]
  - contrastsWith:: [[Frequentist Statistics]]
  - contrastsWith:: [[Maximum Likelihood Estimation]]
  - relatedTo:: [[Probabilistic Graphical Model]]
  - relatedTo:: [[Gaussian Process]]
  - relatedTo:: [[Deep Learning]]
  - relatedTo:: [[Information Theory]]
  - bridges-to:: [[Causal Inference]]
  - bridges-to:: [[Decision Theory]]

- ### Standards & Context
  - **Stan** — open-source probabilistic programming language and MCMC/variational inference engine; widely adopted in academia and industry for Bayesian modelling.
  - **PyMC** — Python-native Bayesian modelling library built on [[Aesara]]/[[PyTensor]], providing NUTS (No-U-Turn Sampler) and variational inference.
  - **NumPyro / Pyro** — JAX- and PyTorch-based probabilistic programming frameworks enabling GPU-accelerated MCMC and stochastic variational inference.
  - **TensorFlow Probability** — Google's probabilistic modelling library integrated with [[TensorFlow]], enabling Bayesian layers and distributions in neural networks.
  - **JAGS / BUGS** — legacy Gibbs-sampling engines foundational to applied Bayesian statistics in social sciences and biostatistics.
  - **BayesFlow** — simulation-based inference framework for scientific models where likelihoods are intractable (likelihood-free / approximate Bayesian computation).
  - **ISO/IEC AI standards** — emerging frameworks for trustworthy AI increasingly reference uncertainty quantification, a primary deliverable of Bayesian methods.
  - The [[Allen Institute]], [[DeepMind]], and [[Meta AI Research]] have published Bayesian-flavoured architectures; the probabilistic programming community maintains annual venues including AABI (Advances in Approximate Bayesian Inference) and the Probabilistic Graphical Models conference.

- ### Provenance
  - sources:: Gelman et al. "Bayesian Data Analysis" (3rd ed.); Bishop "Pattern Recognition and Machine Learning"; Murphy "Probabilistic Machine Learning" (Vols 1 & 2); MacKay "Information Theory, Inference, and Learning Algorithms"
  - updated:: 2026-06-13
