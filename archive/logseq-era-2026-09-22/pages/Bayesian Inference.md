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
  - Bayesian Inference is a principled statistical framework centred on [[Bayes' Theorem]], which states that the posterior probability of a hypothesis is proportional to the product of its prior probability and the likelihood of the observed evidence: P(θ | D) ∝ P(D | θ) × P(θ). Unlike [[Frequentist Statistics]], which treats probability as a long-run frequency and parameters as fixed but unknown constants, Bayesian inference treats probability as a degree of rational belief, allowing domain knowledge and expert opinion to be encoded in a [[Prior Distribution]] P(θ) over model parameters and systematically revised by observed data D into a [[Posterior Distribution]] P(θ | D). The resulting posterior is not a single estimate but a complete probability distribution that quantifies residual uncertainty about the parameter after seeing the data, enabling coherent [[Uncertainty Quantification]] throughout any downstream computation. Predictions are obtained by marginalising the posterior to form a posterior predictive distribution P(y* | x*, D) = ∫ P(y* | x*, θ) P(θ | D) dθ, which automatically averages over parameter uncertainty rather than committing to a single point estimate. The marginal likelihood (model evidence) P(D) = ∫ P(D | θ) P(θ) dθ serves as a principled criterion for [[Model Selection]], embodying Occam's razor by penalising unnecessarily complex models. At the computational level, the framework scales from exact closed-form solutions in conjugate families (e.g. Beta-Binomial, Gaussian-Gaussian) to complex hierarchical models requiring approximate inference via [[Markov Chain Monte Carlo]] (Metropolis-Hastings, Gibbs sampling, Hamiltonian Monte Carlo, NUTS) or [[Variational Inference]] (mean-field, normalising flows, amortised inference). In [[Machine Learning]], Bayesian Inference underpins [[Probabilistic Graphical Model]], [[Gaussian Process]], [[Bayesian Deep Learning]], [[Variational Autoencoder]], and [[Bayesian Optimisation]], and its capacity to incorporate prior knowledge, quantify [[Epistemic Uncertainty]], and enable principled [[Active Learning]] makes it foundational for safety-critical AI in [[Autonomous Vehicles]], [[Medical AI]], [[Robotics]], and sequential decision-making in [[Reinforcement Learning]]. Recognised as a mature paradigm with centuries of theoretical development, Bayesian inference is now experiencing a renaissance driven by GPU-accelerated probabilistic programming frameworks including Stan, PyMC, NumPyro, and TensorFlow Probability, as well as FDA regulatory acceptance for adaptive Bayesian clinical trial designs as of 2024.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:BayesianInference
  - owl-role:: Concept
  - owl-inferred:: artificial-intelligence:ProbabilisticReasoning, artificial-intelligence:StatisticalLearning
  - belongs-to-domain:: [[Artificial Intelligence Domain]]
  - implemented-in-layer:: [[Statistical Foundation Layer]]

- ### Relationships
  - is-subclass-of:: [[Probabilistic Inference]], [[Statistical Inference]], [[AI Technique]]
  - has-part:: [[Prior Distribution]], [[Likelihood Function]], [[Posterior Distribution]], [[Markov Chain Monte Carlo]], [[Variational Inference]], [[Marginal Likelihood]], [[Posterior Predictive Distribution]], [[Conjugate Prior]]
  - requires:: [[Probability Theory]], [[Statistical Model]], [[Conditional Probability]], [[Bayes' Theorem]]
  - implements:: [[Bayes' Theorem]], [[Posterior Approximation]], [[Probabilistic Programming]]
  - enables:: [[Uncertainty Quantification]], [[Active Learning]], [[Model Selection]], [[Anomaly Detection]], [[Sequential Decision-Making]], [[Bayesian Optimisation]], [[Continual Learning]], [[Bayesian Deep Learning]]
  - uses:: [[Variational Inference]], [[Expectation Maximisation]], [[Knowledge Representation]], [[Gaussian Process]], [[Hamiltonian Monte Carlo]], [[Stochastic Gradient Langevin Dynamics]]
  - supports:: [[Machine Learning]], [[Reinforcement Learning]], [[Natural Language Processing]], [[Computer Vision]], [[Scientific Computing]], [[Robotics]]
  - depends-on:: [[Conditional Probability]], [[Probability Theory]], [[Information Theory]]
  - contrasts-with:: [[Frequentist Statistics]], [[Maximum Likelihood Estimation]], [[Maximum A Posteriori Estimation]], [[Deep Learning]]
  - related-to:: [[Probabilistic Graphical Model]], [[Gaussian Process]], [[Deep Learning]], [[Information Theory]], [[Causal Inference]], [[Decision Theory]], [[Normalising Flow]], [[Diffusion Model]]
  - standardized-by:: [[ISO/IEC 22989:2022]], [[NIST AI RMF]]
  - bridges-to:: [[Causal Inference]], [[Decision Theory]], [[Information Theory]], [[Minimum Description Length]]
  - has-implementation:: [[Stan]], [[PyMC]], [[NumPyro]], [[TensorFlow Probability]]
  - evaluated-by:: [[Expected Calibration Error]], [[Negative Log-Likelihood]], [[Bayes Factor]], [[PSIS-LOO-CV]]
  - has-subtype:: [[Empirical Bayes]], [[Hierarchical Bayesian Model]], [[Approximate Bayesian Computation]], [[Simulation-Based Inference]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:hasPart ai:PriorDistribution))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:hasPart ai:LikelihoodFunction))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:hasPart ai:PosteriorDistribution))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:hasPart ai:MarkovChainMonteCarlo))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:hasPart ai:VariationalInference))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:hasPart ai:MarginalLikelihood))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:hasPart ai:PosteriorPredictiveDistribution))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:hasPart ai:ConjugatePrior))
  ## Dependency Relationships
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:requires ai:ProbabilityTheory))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:requires ai:StatisticalModel))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:requires ai:ConditionalProbability))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:requires ai:BayesTheorem))
  ## Capability Relationships
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:enables ai:UncertaintyQuantification))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:enables ai:ActiveLearning))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:enables ai:ModelSelection))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:enables ai:AnomalyDetection))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:enables ai:BayesianOptimisation))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:enables ai:BayesianDeepLearning))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:enables ai:SequentialDecisionMaking))
  ## Implementation Relationships
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:implements ai:BayesTheorem))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:implements ai:PosteriorApproximation))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:implements ai:ProbabilisticProgramming))
  ## Reduction Relationships
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:reducesTo ai:StatisticalInference))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:reducesTo ai:MaximumLikelihoodEstimation))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:reducesTo ai:ProbabilisticProgramming))
  ## Support Relationships
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:supports ai:MachineLearning))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:supports ai:ReinforcementLearning))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:supports ai:NaturalLanguageProcessing))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:supports ai:ComputerVision))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:supports ai:Robotics))
  ## Contrast Relationships
      SubClassOf(ai:BayesianInference
        ObjectAllValuesFrom(ai:contrastsWith ai:FrequentistStatistics))
      SubClassOf(ai:BayesianInference
        ObjectAllValuesFrom(ai:contrastsWith ai:MaximumLikelihoodEstimation))
      SubClassOf(ai:BayesianInference
        ObjectAllValuesFrom(ai:contrastsWith ai:MaximumAPosterioriEstimation))
  ## Uses Relationships
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:uses ai:GaussianProcess))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:uses ai:HamiltonianMonteCarlo))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:uses ai:StochasticGradientLangevinDynamics))
  ## Bridge Relationships
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:bridgesTo ai:CausalInference))
      SubClassOf(ai:BayesianInference
        ObjectSomeValuesFrom(ai:bridgesTo ai:DecisionTheory))
  ## About
    Bayesian inference descends from the 18th-century work of the Reverend Thomas Bayes (1702-1761), whose posthumously published 1763 essay "An Essay towards Solving a Problem in the Doctrine of Chances" (communicated to the Royal Society by Richard Price) first formalised inverse probability — the problem of inferring causes from effects. Bayes was a Nonconformist minister in Tunbridge Wells, England, and his mathematical insight lay dormant until Pierre-Simon Laplace (1749-1827) independently rediscovered and vastly generalised the framework in his monumental 1812 "Théorie Analytique des Probabilités," applying it to celestial mechanics, demography, and the reliability of testimony — anticipating modern [[Causal Inference]] by two centuries. The Laplacian formulation established the rule in the form universally used today: posterior ∝ likelihood × prior. Through the 19th and early 20th centuries, the Bayesian view was eclipsed by the [[Frequentist Statistics]] paradigm championed by Ronald Fisher, Jerzy Neyman, and Egon Pearson, whose p-values, confidence intervals, and hypothesis tests became the dominant inferential vocabulary in scientific practice, codified in textbooks and taught in virtually every statistics curriculum worldwide.

    The Bayesian revival unfolded in several intellectual waves. The 1950s-1960s saw Harold Jeffreys (Cambridge) provide invariant reference priors through the Fisher information, Leonard Savage (Michigan) axiomatise subjective probability in "The Foundations of Statistics" (1954), and Bruno de Finetti prove the exchangeability theorem, which shows that any subjective Bayesian can be represented as having a prior over the data-generating process. Dennis Lindley (UCL, later Southampton) championed the Bayesian cause in British statistics through the 1960s-1980s, famously predicting that statistics would eventually be entirely Bayesian. The second wave, in the 1990s, was computational: the rediscovery of the Gibbs sampler (Geman & Geman, 1984; Gelfand & Smith, 1990), the Metropolis-Hastings algorithm, and the BUGS software (Spiegelhalter et al., 1994) made Bayesian inference practical for realistic statistical models for the first time, enabling the hierarchical modelling revolution in epidemiology, ecology, and social science. Gelman and Rubin's (1992) R-hat convergence diagnostic gave practitioners a principled tool for assessing MCMC convergence, cementing the methodology's reliability.

    The third and current wave is machine learning integration: [[Variational Inference]] (Jordan et al., 1999) recast posterior approximation as optimisation, scaling to high-dimensional models; the [[Evidence Lower Bound]] (ELBO) and the [[Reparameterisation Trick]] (Kingma & Welling, 2014) extended variational methods to neural networks; Stan (Carpenter et al., 2017) provided a general-purpose HMC-NUTS engine with automatic differentiation; NumPyro and TensorFlow Probability enabled GPU-accelerated inference at neural network scale. The 2022-2026 era is characterised by amortised inference — training neural networks to perform approximate Bayesian inference in a single forward pass, dramatically reducing the cost of posterior computation for repeat-inference settings such as scientific parameter estimation, clinical biomarker monitoring, and [[Active Learning]] pipelines.

    The core formal objects of Bayesian inference are four, constituting a complete epistemological cycle: (1) the [[Prior Distribution]] P(θ) encoding pre-data beliefs; (2) the [[Likelihood Function]] P(D | θ) linking parameters to data via a generative model; (3) the [[Posterior Distribution]] P(θ | D) ∝ P(D | θ) × P(θ) encoding post-data beliefs; and (4) the marginal likelihood (model evidence) P(D) = ∫ P(D | θ) P(θ) dθ normalising the posterior and enabling [[Model Selection]]. The posterior predictive distribution P(y* | x*, D) = ∫ P(y* | x*, θ) P(θ | D) dθ propagates full parameter uncertainty into predictions, producing calibrated probability distributions over outputs rather than the overconfident point estimates characteristic of maximum likelihood methods. Bayesian model comparison uses Bayes factors B₁₂ = P(D|M₁)/P(D|M₂) — ratios of marginal likelihoods — to quantify evidence for one model over another without requiring the models to be nested, a capability absent from classical hypothesis testing's p-value framework. This marginal likelihood criterion automatically penalises model complexity (Occam's razor effect), as complex models spread probability mass over more possible datasets, paying a larger normalisation cost even when they fit the observed data better.

    Hierarchical (multi-level) Bayesian models place [[Prior Distribution]] over prior hyperparameters, enabling partial pooling of information across related groups — individuals within studies, schools within districts, clinical sites within trials — simultaneously estimating shared population-level parameters and group-level deviations. This partial pooling shrinks extreme group estimates toward the population mean, naturally avoiding the overfitting that plagues unpooled analysis while retaining more information than fully pooled analysis. Hierarchical models are widely deployed in educational assessment (item-response theory), clinical trials (mixed-effects models), meta-analysis, and [[Natural Language Processing]] (hierarchical Dirichlet process topic models, cross-lingual transfer). The connection to [[Machine Learning]] regularisation is exact: L2 regularisation corresponds to a Gaussian prior in the MAP framework, and the optimal regularisation strength equals the prior precision σ⁻², which in full Bayesian treatment is integrated out rather than tuned via cross-validation.

    The relationship between Bayesian inference and [[Information Theory]] is deep: the KL divergence D_KL[q||p] = ∫ q log(q/p) measures the information lost when q approximates p, forming the foundation of [[Variational Inference]]; the marginal likelihood connects to Shannon's entropy via the negative surprise; and the BALD criterion for [[Active Learning]] uses mutual information I(y;θ|x,D) to select maximally informative data points. The [[Minimum Description Length]] (MDL) principle of Rissanen provides a frequentist interpretation of Bayesian model selection: the best model minimises total code length of model and data, equivalent to minimising the negative log marginal likelihood. These connections ensure that Bayesian inference is not merely a statistical philosophy but a principled framework for optimal information processing, connected to Kolmogorov complexity, Shannon [[Information Theory]], and the algorithmic foundations of [[Machine Learning]].

  ## Components / Architecture
    - **Prior Distribution P(θ)** — encodes beliefs before data; spectrum from uninformative (Jeffreys, reference, flat) to informative (expert knowledge, regularisation); conjugate priors yield analytic posteriors; weakly informative priors (half-Normal, Regularised Horseshoe) balance expressivity and computation.
    - **Likelihood Function P(D | θ)** — probabilistic generative model linking parameters to data; Bernoulli/Binomial for binary outcomes, Gaussian for continuous, Poisson for counts, categorical for classification, mixture models for multi-modal data.
    - **Posterior Distribution P(θ | D)** — primary inferential object; exact only for conjugate models; otherwise approximated by MCMC or variational methods.
    - **Marginal Likelihood P(D)** — normalising constant; computationally expensive but essential for model comparison; approximated by harmonic mean (unstable), WAIC, PSIS-LOO-CV (Vehtari et al., 2017), or Laplace approximation.
    - **Markov Chain Monte Carlo (MCMC)** — gold standard for posterior approximation; algorithms include:
      - *Metropolis-Hastings* — general-purpose accept-reject sampler; scales poorly with dimension.
      - *Gibbs Sampling* — coordinate-wise updates using conditional posteriors; efficient for graphical models.
      - *Hamiltonian Monte Carlo (HMC)* — uses gradient information for efficient exploration of high-dimensional posteriors; No-U-Turn Sampler (NUTS) automates step-size and path-length selection; standard in Stan and PyMC.
      - *Stochastic Gradient MCMC (SGLD, SGHMC)* — injects calibrated noise into mini-batch gradient updates for posterior sampling at neural-network scale.
    - **Variational Inference (VI)** — optimisation-based posterior approximation; minimises KL[q(θ; φ) || P(θ | D)] by maximising the Evidence Lower BOund (ELBO); mean-field VI (independent factorisation) is fast but underestimates covariance; normalising flows and implicit VI improve expressiveness.
    - **Expectation Maximisation (EM)** — alternates between computing soft posteriors over latent variables (E-step) and maximising expected log-likelihood (M-step); connects Bayesian and frequentist estimation for latent variable models.
    - **Probabilistic Programming Languages (PPLs)** — software frameworks that separate model specification from inference; Stan (HMC/NUTS, variational), PyMC (NUTS, ADVI), NumPyro (JAX-accelerated HMC), TensorFlow Probability (TFP), Pyro/NumPyro (PyTorch/JAX), Turing.jl (Julia).
    - **Gaussian Process (GP)** — non-parametric Bayesian prior over functions; specified by mean and kernel (covariance) functions; enables analytic posterior over function values (GP regression) and probability of class membership (GP classification via EP or Laplace); foundational for Bayesian optimisation.

  ## Use Cases / Major Families

    ### Bayesian Optimisation for Hyperparameter Search
    [[Bayesian Optimisation]] (BO) applies Bayesian inference to the problem of finding optimal inputs x* = argmax f(x) when f is a black-box function that is expensive to evaluate — exactly the structure of [[Hyperparameter Tuning]] for [[Deep Learning]]. A [[Gaussian Process]] surrogate P(f | D_obs) is maintained over the space of hyperparameter configurations; the posterior predictive variance identifies regions of high [[Epistemic Uncertainty]] (unexplored space) while the posterior predictive mean identifies promising configurations. Acquisition functions algorithmically balance exploration and exploitation: Expected Improvement EI(x) = E[max(f(x) − f*, 0)] selects points most likely to improve over the current best; Upper Confidence Bound UCB(x) = μ(x) + κσ(x) provides explicit exploration/exploitation trade-off via κ; Thompson Sampling draws a function sample from the posterior and maximises it, enabling parallelism without explicit correlation modelling. BoTorch (Balandat et al., 2020, Meta FAIR) implements GPU-accelerated batch BO with parallel acquisition function optimisation via Monte Carlo integration; Optuna v4.4 (2024) added Gaussian process multi-objective BO targeting Pareto-optimal hyperparameter configurations; Google Vizier (Golovin et al., 2017) deploys BO at Google scale for tuning ML systems across millions of configurations. MLPerf 2024 benchmarks report 40% reduction in total LLM training time for cloud setups using Optuna-based Bayesian hyperparameter search, versus grid/random search baselines.

    ### Clinical Trials and Regulatory Applications
    Bayesian adaptive trial designs represent one of the most consequential applications of Bayesian inference, directly affecting patient outcomes and drug approval timelines. Unlike classical frequentist trials with fixed sample sizes, Bayesian adaptive designs update the posterior over treatment effect δ = μ_treatment − μ_control after each patient cohort, enabling: early stopping for efficacy (P(δ > threshold | data) > 0.95); early stopping for futility (P(δ > threshold | data) < 0.05); adaptive randomisation (allocating more patients to better-performing arms based on posterior probabilities); and sample size re-estimation using posterior predictive power. The US FDA issued revised adaptive trial guidance in January 2024 formally accepting Bayesian methods for rare disease, oncology, and medical device trials, reflecting the superior operating characteristics of Bayesian designs in small patient populations. Posterior probabilities map directly to clinically interpretable risk scores — "73% probability that the treatment effect exceeds the clinically meaningful threshold" — bypassing the notorious misinterpretation of p-values. The arXiv 2601.10615 (2025) paper "A Bayesian Discrete Framework for Enhancing Decision-Making Processes in Clinical Trial Designs" demonstrates a new discrete-state Bayesian framework for complex multi-arm adaptive designs.

    ### Probabilistic Graphical Models and Belief Propagation
    [[Probabilistic Graphical Model]] (PGM) unifies Bayesian inference with [[Knowledge Representation]] by encoding conditional independence assumptions among random variables in graphs. Directed PGMs (Bayesian networks, DAGs) represent causal generative models: the joint distribution factorises as the product of conditional distributions P(X_v | Pa(X_v)) for each node v, enabling both forward simulation and posterior inference via Bayes' theorem. Undirected PGMs (Markov random fields) encode symmetric dependencies via potential functions ψ(X_C) over cliques C; the partition function ∫ ∏_C ψ(X_C) dX normalises the distribution and is typically intractable. Exact inference algorithms include Belief Propagation (sum-product message passing on tree-structured graphs; Pearl, 1988), the Junction Tree algorithm (triangulating graphs and running BP on the resulting clique tree), and Variable Elimination (summing out variables in optimal order). Approximate inference on general graphs uses Loopy Belief Propagation (empirically effective despite lacking convergence guarantees), Variational Message Passing (minimising variational free energy), and MCMC sampling of the Markov chain on the graph. Applications span medical diagnosis (CPCS Bayesian network for chest pain diagnosis; Heckerman et al., 1992), real-time spam filtering (Naive Bayes with Bayesian parameter updates), sensor fusion in [[Robotics]] (factor graph representation), and speech recognition (Hidden Markov Model inference via the Baum-Welch EM algorithm).

    ### Scientific Discovery and Astrophysics
    Bayesian inference is the dominant inferential framework for data-constrained scientific parameter estimation where maximum likelihood is inappropriate due to multi-modal posteriors, parameter degeneracies, or the need to propagate uncertainty into derived quantities. In cosmology, the Planck Collaboration uses MCMC chains (MontePython, CosmoSIS) to estimate 6-parameter ΛCDM cosmological model parameters from CMB power spectra, producing joint posterior distributions that encapsulate all correlations between parameters. LIGO's gravitational wave detection uses Bayesian parameter estimation (LALInference, Bilby) to recover binary merger parameters (masses, spin vectors, sky location) from noisy strain data via matched filtering followed by MCMC. Population genetics tools STRUCTURE and ADMIXTURE use variational Bayesian inference to infer ancestry fractions from genetic data. Phylogenetics software BEAST2 samples the posterior distribution over evolutionary trees and molecular clock parameters using MCMC. Simulation-Based Inference (SBI; Cranmer et al., 2020, PNAS) uses neural posterior estimation to perform Bayesian inference for scientific models where the likelihood is intractable — replacing expensive likelihood evaluations with a learned conditional density estimator trained on simulated data.

    ### Robotics and State Estimation
    Bayesian filtering is the mathematical foundation of all [[Robotics]] state estimation: the Kalman filter computes the exact posterior P(state_t | observations_{1:t}) for linear Gaussian systems using the Predict-Update cycle; the Extended Kalman Filter (EKF) linearises the transition and observation models; the Unscented Kalman Filter (UKF) uses sigma points for better non-linear approximation; particle filters represent the posterior as a weighted set of samples and handle arbitrary non-Gaussian distributions. Simultaneous Localisation and Mapping (SLAM) maintains a joint posterior over robot pose and map landmarks, with efficient factor graph implementations (g2o, GTSAM) enabling real-time operation. Risk-aware motion planning uses the posterior predictive uncertainty over obstacle locations and dynamic agent behaviour to compute uncertainty-aware cost functions: CVaR (Conditional Value-at-Risk) trajectory optimisation selects plans that are robust to the 95th percentile of posterior worst cases. Bayesian Task and Motion Planning (TAMP) integrates symbolic task planning with continuous motion planning using posterior beliefs over task-relevant quantities, enabling robots to reason about partial observability.

    ### Finance, Risk, and Actuarial Applications
    Bayesian methods address fundamental weaknesses of classical frequentist finance: small sample sizes, non-stationary distributions, regime changes, and the need to encode expert views. The Black-Litterman (1990, 1992) model treats market equilibrium returns as a prior and analyst views as a likelihood, producing a blended posterior over expected returns that serves as input to Markowitz portfolio optimisation; implemented in Bloomberg PORT and Barra risk models. Credit scoring via Bayesian logistic regression with conjugate Dirichlet priors enables sequential updating as new payment data arrives, naturally implementing the "experience rating" concept in insurance. Bayesian Hidden Markov Models detect regime changes (bull/bear markets, recession/expansion cycles) by maintaining a posterior over latent economic states and updating it sequentially. Bayesian structural time series (BSTS; Scott & Varian, 2014, Google) decomposes revenue, search trends, and other economic indicators into trend, seasonal, and regression components with posterior uncertainty over each component's contribution. Value-at-Risk estimation using Bayesian GARCH models propagates posterior uncertainty over volatility parameters into risk capital calculations, producing more conservative and better-calibrated risk estimates than point estimates.

    ### Anomaly Detection and Monitoring
    Bayesian change-point detection (Adams & MacKay, 2007) computes P(change at time t | data_{1:t}) sequentially by maintaining a posterior over the run-length (time since last change point) and updating it at each observation via Bayes' theorem; the algorithm is exact, online, and produces calibrated change-point probabilities without requiring threshold tuning. This is deployed in manufacturing (detecting machine degradation in production lines), network security (intrusion detection via traffic anomaly detection), and financial monitoring (detecting unusual trading patterns). Outlier scoring via posterior predictive surprise — computing P(x_new | x_{1:n}) under the fitted Bayesian model — produces principled anomaly scores with false-positive rates controlled by setting probability thresholds rather than ad hoc Z-scores. Bayesian non-parametric models (Dirichlet Process Mixture Models) detect anomalies as points assigned to singleton clusters or low-weight components in the fitted infinite mixture.

    ### Reinforcement Learning and Exploration
    Bayesian [[Reinforcement Learning]] addresses the exploration-exploitation dilemma with principled posterior reasoning: Thompson Sampling (Thompson, 1933; Russo et al., 2018 survey) samples reward model parameters from the posterior and acts optimally under the sample — over time, probability matching ensures optimal exploration rates. PILCO (Deisenroth & Rasmussen, 2011) uses a [[Gaussian Process]] model of environment dynamics, propagating uncertainty analytically through multi-step predictions to enable data-efficient model-based RL. Bayes-Adaptive MDPs (Duff, 2002; Ghavamzadeh et al., 2015) formalise the optimal Bayesian RL solution as a POMDP over augmented state (physical state + sufficient statistic of posterior), enabling optimal exploration via dynamic programming over belief states. Epistemic Neural Networks (Osband et al., 2023, DeepMind) implement efficient uncertainty estimation for deep RL via prior networks and epistemic index sampling, deployed in recommendation systems and drug discovery agents.

  ## Formal Derivation of the Core Update Rule
    The mathematical foundation of Bayesian inference is Bayes' theorem, derived from the definition of conditional probability. For events A and B with P(B) > 0:

    P(A | B) = P(B | A) × P(A) / P(B)

    Substituting A → θ (parameters) and B → D (data), and interpreting each term:
    - P(θ) = **prior** — probability of parameter values before seeing data; encodes all pre-data beliefs
    - P(D | θ) = **likelihood** — probability of the observed data given parameters; determined by the generative model
    - P(D) = **marginal likelihood** (evidence) = ∫ P(D | θ) P(θ) dθ — total probability of data; normalises the posterior
    - P(θ | D) = **posterior** — probability of parameters given data; the primary output of Bayesian inference

    For continuous θ, the posterior is a probability density function (pdf) satisfying ∫ P(θ | D) dθ = 1. For discrete θ, it is a probability mass function (pmf). The posterior predictive distribution for new observations y*:

    P(y* | x*, D) = ∫ P(y* | x*, θ) P(θ | D) dθ

    This integral represents **Bayesian model averaging**: predictions are averaged over all parameter values weighted by their posterior probability, rather than relying on a single best-fit estimate. For conjugate models, this integral is analytic. For general models, it is approximated by Monte Carlo: P(y* | x*, D) ≈ (1/T) Σ_{t=1}^T P(y* | x*, θ^(t)) where θ^(t) ~ P(θ | D).

    **Sequential Bayesian updating** (the online learning property): Given a sequence of data batches D₁, D₂, ..., D_k, the posterior after k batches is:
    P(θ | D₁,...,D_k) ∝ P(D_k | θ) × P(θ | D₁,...,D_{k-1})

    This shows that the posterior after k-1 batches serves as the prior for the k-th batch update — Bayesian inference is automatically an online learning algorithm that processes data in arbitrary order and batching without storing past observations. This property underlies [[Kalman Filter]] (linear Gaussian sequential Bayesian inference), particle filters (non-linear non-Gaussian sequential Bayesian inference), and continual machine learning approaches.

    **Bayesian model comparison** uses the Bayes factor B₁₂ = P(D | M₁) / P(D | M₂) to compare models M₁ and M₂. Jeffreys' (1939) scale for Bayes factor interpretation:
    - B₁₂ < 1: evidence against M₁
    - 1-3: negligible evidence for M₁ over M₂
    - 3-10: substantial evidence
    - 10-30: strong evidence
    - 30-100: very strong evidence
    - > 100: decisive evidence for M₁

    The marginal likelihood P(D | M) automatically implements Occam's razor: a complex model M_complex that fits many possible datasets spreads probability over more data configurations, so P(D_obs | M_complex) is lower than for a simpler model M_simple that concentrates probability near the observed data — even if M_complex fits D_obs equally well by [[Maximum Likelihood Estimation]]. This is the Bayesian complexity penalty, equivalent to the two-part minimum description length code length.

  ## Academic Context
    Bayesian inference has a 260-year academic lineage spanning mathematics, philosophy, and statistics, with modern ML as a fourth major era:
    - **Bayes (1763)** — "An Essay towards Solving a Problem in the Doctrine of Chances," *Phil. Trans. Royal Society*; first statement of inverse probability (communicated posthumously by Richard Price).
    - **Laplace (1812)** — *Théorie Analytique des Probabilités*; independently derived and extended Bayes' rule to continuous parameters; applied to astronomy, biology, and law.
    - **Jeffreys (1939)** — *Theory of Probability*; Oxford University Press; established Jeffreys priors as invariant reference priors under reparameterisation; axiomatised Bayesian inference.
    - **de Finetti (1970)** — *Theory of Probability*; exchangeability theorem proves that any exchangeable sequence of observations can be represented as a mixture of i.i.d. processes, foundational for Bayesian learning.
    - **Geman and Geman (1984)** — "Stochastic relaxation, Gibbs distributions, and the Bayesian restoration of images," *IEEE TPAMI*; Gibbs sampler introduced for image restoration.
    - **Gelfand and Smith (1990)** — "Sampling-based approaches to calculating marginal densities," *JASA*; established Gibbs sampling as general Bayesian computational tool.
    - **Gelman, Carlin, Stern, Rubin (1995/2013)** — *Bayesian Data Analysis* (1st/3rd editions); BDA3 remains the primary graduate textbook.
    - **MacKay (1992/2003)** — *Information Theory, Inference, and Learning Algorithms*; Cambridge University Press; unified Bayesian inference, information theory, and neural networks.
    - **Neal (1995)** — *Bayesian Learning for Neural Networks*; PhD thesis, University of Toronto; HMC for BNNs; GP limit of infinite neural networks.
    - **Bishop (2006)** — *Pattern Recognition and Machine Learning*; Springer; standard ML textbook integrating Bayesian and frequentist methods.
    - **Hoffman and Gelman (2014)** — "The No-U-Turn Sampler," *JMLR*; NUTS algorithm enabling automated HMC without hand-tuning.
    - **Blei, Kucukelbir, McAuliffe (2017)** — "Variational inference: A review for statisticians," *JASA*; authoritative survey.
    - **Vehtari, Gelman, Gabry (2017)** — "Practical Bayesian model evaluation using leave-one-out cross-validation and WAIC," *Statistics and Computing*; PSIS-LOO-CV.
    - **Murphy (2022/2023)** — *Probabilistic Machine Learning* (Vols 1 & 2); MIT Press; comprehensive modern treatment integrating deep learning and Bayesian statistics.
    - **Salvatier, Wiecki, Fonnesbeck (2016)** — "Probabilistic programming in Python using PyMC3," *PeerJ CS*; arXiv:1507.08050.
    - **Bingham et al. (2019)** — "Pyro: Deep universal probabilistic programming," *JMLR*; Uber AI Labs.
    - **Phan, Pradhan, Jankowiak (2019)** — "Composable effects for flexible and accelerated probabilistic programming in NumPyro," arXiv:1912.11554.

  ## Current Landscape (2026)
    By mid-2026, Bayesian inference has achieved deep integration across industry, regulation, and research frontiers. The ecosystem is characterised by four major developments: regulatory institutionalisation, computational maturity, amortisation at scale, and the emergence of post-Bayesian robustness research.

    **Regulatory institutionalisation**: The US FDA formally accepted Bayesian adaptive trial designs in January 2024 for rare disease and oncology applications, formalising a practice that had been growing informally since the FDA's 2019 Adaptive Design Guidance; the EU Medical Device Regulation (MDR 2024) references posterior probability reporting for AI-assisted diagnostics; ISO/IEC 22989:2022 includes [[Uncertainty Quantification]] as a key quality attribute for AI systems; the UK MHRA's AI roadmap (2024) references calibrated Bayesian uncertainty as a prerequisite for AI as a Medical Device (AIaMD) approval. These regulatory endorsements create strong pull for Bayesian methods in commercial AI development, particularly in the life sciences and medical technology sectors.

    **Probabilistic programming ecosystem maturity**: PyMC v5.27.1 (January 2026) is deployed in production at Salesforce for A/B testing and sales forecasting; NumPyro GPU-accelerated HMC achieves 11x speedup over CPU Stan for the same posterior approximation quality; TensorFlow Probability v0.24 (2025) added improved Bayesian neural network layers compatible with Keras 3. The Bayesian Inference Library for Python and R (BioRxiv preprint, January 2026, DOI 10.64898/2026.01.19.700318) unifies APIs across Stan, PyMC, and NumPyro backends, providing a common interface for model specification and inference. Stan's case study library (mc-stan.org) has grown to 50+ documented production use cases across clinical trials, ecology, economics, and engineering.

    **Amortised inference at scale**: Neural posterior estimation (NPE) and simulation-based inference (SBI) frameworks enable [[Bayesian Inference]] for scientific models with intractable likelihoods by training an amortised inference network once on simulations, then running inference at the cost of a single forward pass. BayesFlow (Radev et al., 2022, used at Helmholtz-Zentrum München) and sbi (Tejero-Cantero et al., 2020, JOSS) are the primary Python libraries; deployed for gravitational wave parameter estimation (replacing computationally prohibitive MCMC chains that took weeks), epidemiological modelling for COVID-19 and mpox outbreak responses, protein structure prediction uncertainty, and drug discovery active learning. The AISTATS 2025 paper on amortised Bayesian multilevel models (Habermann et al., arXiv 2408.13230) demonstrated neural amortisation that reduces multilevel Bayesian model fitting from weeks (MCMC) to seconds, enabling routine deployment in large-scale social science and clinical research.

    **MCMC vs. VI comparison (2025)**: A June 2025 arXiv paper (arXiv:2506.09928) provides a systematic empirical comparison of [[Markov Chain Monte Carlo]] and [[Variational Inference]] across 47 statistical models, confirming the expected trade-off: VI is 10-1000x faster but underestimates posterior variance by 20-60% for complex multi-modal posteriors, while HMC-NUTS achieves near-exact posterior samples but requires 10-1000x more compute; the paper recommends NUTS for models with <10⁴ parameters and few inference queries, VI for large data or repeated inference, and Laplace approximation as a practical middle ground.

    **Multi-Task Bayesian In-Context Learning (2026)**: The arXiv 2606.20538 paper (June 2026) demonstrates that maintaining a posterior over task identity during in-context learning — treating the few-shot examples as [[Likelihood Function]] evaluations that update beliefs about which task is being queried — achieves substantially higher accuracy than standard in-context learning across 23 benchmark tasks, showing the continued relevance of Bayesian inference even at the frontier of [[Large Language Models]] research.

    **Post-Bayesian robustness research**: A NeurIPS 2025 satellite workshop at UCL on "Advances in Post-Bayesian Methods" addressed fundamental robustness challenges: Bayesian posteriors can be highly sensitive to prior misspecification and likelihood model errors; generalised Bayesian inference (Bissiri et al., 2016) replaces the likelihood with a general loss function, producing posteriors that are robust to distributional misspecification; PAC-Bayes bounds (McAllester, 1999; Catoni, 2007) provide frequentist generalisation guarantees for Bayesian predictors without assuming the true model lies in the prior support; coarsened ABC approximates the posterior by accepting simulations within a tolerance ε of the observed data, providing robustness to minor model misspecification. This post-Bayesian programme is particularly important for [[Safe AI]] deployment, where model misspecification is the rule rather than the exception.

  ## Connections to Maximum Likelihood and Frequentist Methods
    Understanding how Bayesian inference relates to [[Maximum Likelihood Estimation]] and [[Frequentist Statistics]] clarifies when each approach is preferable:

    **MAP as a Bayesian-frequentist bridge**: Maximum A Posteriori (MAP) estimation — finding the mode of the posterior rather than the full distribution — bridges Bayesian and frequentist approaches. MAP with a uniform prior reduces to MLE; MAP with an L2 Gaussian prior reduces to ridge regression; MAP with an L1 Laplacian prior reduces to Lasso. The key difference from full Bayesian inference is that MAP discards all posterior uncertainty information, retaining only the single most probable parameter value.

    **Confidence intervals vs. credible intervals**: Frequentist 95% confidence intervals (CIs) are intervals that contain the true parameter in 95% of repeated experiments — a statement about the procedure, not the parameter. Bayesian 95% credible intervals are intervals containing the parameter with 95% posterior probability — a direct statement about where the parameter is. For nuanced decision-making (clinical trials, financial risk), credible intervals are more directly interpretable.

    **p-values vs. Bayes factors**: Frequentist p-values measure P(data as or more extreme than observed | H₀ is true) — the probability of the data under the null, not the probability that H₀ is true. Bayes factors measure P(data | H₁) / P(data | H₀), quantifying how much the data shifts beliefs from H₀ to H₁. The American Statistical Association's 2016 and 2019 statements on p-values explicitly warn against their misuse and endorse Bayesian model comparison as an alternative; multiple journals now require Bayes factors or estimation-based reporting alongside p-values.

    **Regularisation as empirical Bayes**: Setting regularisation hyperparameters (λ in ridge regression, depth in decision trees, dropout rate in neural networks) by cross-validation is a form of empirical Bayes: it maximises the marginal likelihood P(D | hyperparameters) using a data-driven estimate rather than a fixed prior. Full Bayesian analysis places a hyperprior on hyperparameters and integrates them out, avoiding the double-dipping of cross-validation on the same data used for training.

    **Asymptotic equivalence**: By the Bernstein–von Mises theorem, under regularity conditions, as n → ∞, the posterior distribution P(θ | D) converges to a Gaussian centred at the MLE with covariance equal to the inverse Fisher information matrix: P(θ | D) → N(θ̂_MLE, I(θ̂_MLE)^{-1}/n). This shows that Bayesian and frequentist methods agree asymptotically — Bayesian inference provides a finite-sample uncertainty quantification advantage, not a different long-run answer.

  ## Comparison of Inference Methods
    Bayesian inference offers multiple computational strategies, each suited to different model types and computational budgets:

    | Method | Posterior quality | Computational cost | Scalability | Best for |
    |--------|------------------|-------------------|-------------|---------- |
    | Exact conjugate | Exact | O(N) | High (N data) | Beta-Binomial, Gaussian-Gaussian, Gamma-Poisson families |
    | Laplace approximation | Gaussian approx. at mode | O(N × p²) | Moderate (p² Hessian) | Smooth unimodal posteriors, BNN last-layer |
    | Metropolis-Hastings | Asymptotically exact | O(N × iter) per step | Low (high correlation) | Any model, prototyping |
    | Gibbs Sampling | Asymptotically exact | O(N) per sweep | Moderate | Graphical models with tractable conditionals |
    | HMC-NUTS | Near-exact (low autocorr) | O(N × L) per sample | Moderate (gradient cost) | 10⁴-10⁶ parameter models |
    | SGLD | Asymptotically exact | O(mini-batch) | High (mini-batch) | Neural network posterior sampling |
    | Mean-Field VI | Gaussian factored approx. | O(N × iter) | Very High | Large data, repeated inference, deep learning |
    | Normalising Flow VI | Expressive approx. | O(N × flow_layers) | High | Complex multi-modal posteriors |
    | Expectation Propagation | Local Gaussian approx. | O(N × factors) | Moderate | Generalised linear models, probit regression |
    | Integrated Nested Laplace (INLA) | Near-exact for latent Gaussian | O(N^{3/2}) | Moderate | Spatial statistics, epidemiology, structured additive models |
    | ABC/SBI (neural) | Amortised posterior samples | O(simulations + training) | Very High | Intractable likelihoods, scientific simulators |

    Key practical guidelines (Murphy, 2022; Gelman et al., 2013):
    - For p < 100 parameters with gradient access: use HMC-NUTS in Stan or PyMC; check R-hat < 1.05 and ESS > 400 per parameter
    - For p < 10⁴ with smooth posterior: use NUTS; consider INLA for structured additive models
    - For p ≥ 10⁵ (neural networks): use SGLD, SWAG, Laplace, or Deep Ensembles; NUTS is impractical
    - For repeated inference over the same model (new observations): use amortised VI or SBI neural posterior estimation
    - For model comparison: use PSIS-LOO-CV (Vehtari et al., 2017) computed from MCMC samples; avoid DIC for hierarchical models
    - For first-time Bayesian analysis: use posterior predictive checks to validate model fit; if the model cannot reproduce key data statistics, revise the generative model rather than the inference algorithm

  ## UK Context
    The United Kingdom has played a disproportionate role in the development and current practice of Bayesian inference:
    - **University of Cambridge** — historically pivotal: Sir Harold Jeffreys (St John's College) developed reference priors in the 1930s-1940s; Dennis Lindley (1923-2013) was a primary advocate of the subjective Bayesian paradigm; Zoubin Ghahramani (now Google DeepMind Chief Scientist) led the Cambridge MLG for two decades, producing foundational work on Gaussian processes, Bayesian non-parametrics, and probabilistic programming. The Departments of Engineering and Computer Science and Technology offer dedicated "Machine Learning and Bayesian Inference" courses (2024-25).
    - **University College London (UCL)** — UCL Centre for Inverse Problems holds EPSRC grants on "Robust Foundations for Bayesian Inference" (2024-25) and "Bayesian Robustness in Filtering Algorithms" (Alan Turing Institute, 2024-25); Prof. Benjamin Guedj leads post-Bayesian and PAC-Bayes research at UCL and INRIA Paris; Dr. Harita Dellaporta contributes to likelihood-free inference; the Alan Turing Institute (co-located in London) funds a probabilistic AI programme and the flagship "Data-Centric Engineering" initiative using Bayesian structural monitoring for infrastructure.
    - **University of Oxford** — Oxford Computer Science offers "Bayesian Statistical Probabilistic Programming" (2024-25); the Oxford Applied and Theoretical Machine Learning Group contributes to variational inference and GP research; Frank Wood's group at UBC (formerly Oxford) developed Probabilistic C and Anglican probabilistic programming languages.
    - **University of Edinburgh** — School of Informatics is home to active probabilistic programming and approximate inference research; links to the Data Science Institute and the Bayes Centre (named in honour of the Edinburgh-associated Bayes); Heriot-Watt University published on Bayesian inverse problems with deep generative priors (2025).
    - **Turing Institute and BridgeAI** — the Alan Turing Institute's BridgeAI programme funds uncertainty quantification adoption for UK SMEs; the Turing's "Uncertainty Quantification for Digital Twins" programme deploys Bayesian emulation for engineering asset management across Northern English industrial sectors including aerospace (Rolls-Royce, Derby), civil infrastructure (Network Rail), and energy (Offshore Renewable Energy Catapult, Blyth).
    - **Northern England industrial context** — the University of Sheffield Centre for Machine Intelligence deploys Bayesian structural health monitoring for steel bridges and railway infrastructure; the University of Leeds contributes Bayesian epidemiological modelling for NHS resource planning; the University of Manchester (formerly home of Dennis Lindley's co-developer Dennis Pratt) hosts probabilistic AI research at the Department of Computer Science.

  ## Future Directions (2026-2030)
    The future trajectory of Bayesian inference is shaped by the convergence of computational scale (trillion-parameter AI systems), regulatory demand (EU AI Act, FDA Bayesian guidance), scientific necessity (inference for complex simulators), and the fundamental challenge of making Bayesian methods robust to the model misspecification that is endemic in real-world deployment.

    **Scalable posterior inference for LLMs** — extending Bayesian methods from [[Gaussian Process]]-scale (thousands of parameters) to trillion-parameter [[Foundation Model]] via low-rank [[Laplace Approximation]], Stochastic Weight Averaging-Gaussian (SWAG), and function-space posteriors; enabling calibrated uncertainty in LLM outputs for hallucination detection; LoRA-Bayesian approaches (arXiv 2602.11171, 2026) apply Bayesian inference over low-rank adapter parameters only, dramatically reducing the parameter dimension of the posterior inference problem. The core challenge is that trillion-parameter weight-space posteriors are completely intractable even with the best approximations, necessitating function-space or output-space approaches that work directly with the model's predictive distribution rather than its parameter distribution.

    **Causal Bayesian inference** — merging directed acyclic graph (DAG) structure learning with posterior inference over causal mechanisms; [[Causal Inference]] structural causal models with Bayesian parameter estimation enable counterfactual prediction (potential outcomes under alternative treatments), transportability (extrapolating effects across populations), and heterogeneous treatment effect estimation from observational data at scale; Bayesian structure learning (Chickering, 2002; Heckerman et al., 1995) provides posterior uncertainty over the causal graph itself, naturally handling uncertainty about which variables cause which. Applications include precision medicine (personalised treatment selection with uncertainty), social policy evaluation (programme effect estimation from administrative data), and fairness-aware AI (causal models of discrimination enabling principled debiasing).

    **Simulation-based inference (SBI) at scientific scale** — neural amortised posterior estimation for: Large Hadron Collider analysis (constraining beyond-standard-model physics parameters from billions of collision events); epidemiological pandemic modelling (real-time outbreak parameter estimation from surveillance data); galaxy formation simulation inference (constraining dark matter and baryon feedback models from galaxy survey data); climate model parameter calibration (quantifying parametric uncertainty in atmospheric model projections). The SBI toolbox is rapidly maturing: BayesFlow, sbi, and likelihood-free inference packages provide neural ratio estimators, neural posterior estimators, and sequential neural posterior estimators with active learning sample efficiency.

    **Post-Bayesian robustness** — generalised Bayesian inference (power posteriors P_β(θ|D) ∝ P(D|θ)^β P(θ), loss-likelihood posteriors) provides robustness to likelihood misspecification by tempering the likelihood update; PAC-Bayes bounds provide non-vacuous frequentist generalisation guarantees for stochastic predictors without assuming the true model lies in the prior support; Bayesian deep learning with misspecified priors (Knoblauch et al., 2019, "Generalized Variational Inference") provides a unified framework for robust Bayesian estimation. These developments are critical for safety-critical deployment where the "true" data-generating process is never exactly known.

    **Neurosymbolic Bayesian reasoning** — combining [[Probabilistic Graphical Model]] knowledge representations with neural [[Likelihood Function]] functions; DeepProbLog (Manhaeve et al., 2018) and Scallop (Li et al., 2023) compile probabilistic logic programs to neural inference, enabling symbolic prior knowledge about object relationships, clinical guidelines, and legal rules to constrain neural posterior inference; probabilistic programming languages that compile to neural approximate inference for hybrid discrete-continuous domains are emerging as the natural representation language for [[Responsible AI]] systems that must explain their reasoning in human-interpretable terms.

    **Federated and private Bayesian inference** — decentralised [[Bayesian Inference]] without sharing raw data; Bayesian federated learning aggregates local posteriors rather than weight gradients, providing natural uncertainty propagation across clients; differentially private MCMC and variational inference algorithms (Geumlek et al., 2017; Li et al., 2019) provide formal privacy guarantees (ε-differential privacy) for Bayesian updates; applications include NHS hospital network analytics, cross-organisational pharmaceutical data sharing, and financial institution collaborative risk modelling where data sharing is prohibited by regulation.

    **Regulatory standardisation of uncertainty metrics** — ISO/IEC JTC 1/SC 42 working groups are actively developing metrics for calibration (ECE, NLL), credible interval coverage, and [[Uncertainty Quantification]] reporting requirements; Bayesian posterior probabilities are primary candidates for standardised AI confidence reporting under the EU AI Act (Regulation 2024/1689) transparency requirements for high-risk AI systems; the UK AI Safety Institute (AISI) is developing evaluation frameworks that include calibration benchmarks, potentially mandating BDL-style uncertainty for high-stakes deployments by 2027.

    **Quantum Bayesian inference** — quantum computing offers exponential speedup for certain Bayesian inference computations; quantum Metropolis-Hastings algorithms (Yung & Aspuru-Guzik, 2012) achieve quadratic speedup over classical variants; quantum variational inference (Benedetti et al., 2019) uses parameterised quantum circuits as variational families; near-term applications may include pharmaceutical parameter estimation and financial portfolio optimisation where classical MCMC is computationally prohibitive.

  ## Formal Algorithm — The Bayesian Update Cycle
    The central computation in Bayesian inference proceeds as follows:
    - **Step 1 — Specify Prior**: Choose P(θ) reflecting prior knowledge; key families include Conjugate priors (Beta, Dirichlet, Gaussian, Gamma), Jeffreys reference priors P(θ) ∝ √det I(θ) (Fisher information invariant), Horseshoe priors for sparsity, Dirichlet Process for non-parametric clustering, and Gaussian Process priors over functions f ~ GP(m(x), k(x,x')).
    - **Step 2 — Specify Likelihood**: Choose P(D | θ) = ∏_{i=1}^n P(x_i | θ) (assuming i.i.d. data) where the product structure connects to the [[Sufficient Statistic]] and exponential family theory.
    - **Step 3 — Compute Posterior**: Apply Bayes' theorem: P(θ | D) = P(D | θ) P(θ) / P(D) where P(D) = ∫ P(D | θ) P(θ) dθ. For conjugate families, this has a closed form; otherwise, employ MCMC or variational methods.
    - **Step 4 — Predict**: Form the posterior predictive: P(ỹ | x̃, D) = ∫ P(ỹ | x̃, θ) P(θ | D) dθ. For regression with GP prior this is analytic; for neural networks this integral is approximated by Monte Carlo.
    - **Step 5 — Compare Models**: Use Bayes factors B_{12} = P(D | M₁) / P(D | M₂) = [∫ P(D | θ₁, M₁) P(θ₁ | M₁) dθ₁] / [∫ P(D | θ₂, M₂) P(θ₂ | M₂) dθ₂] to select between hypotheses M₁ and M₂; values > 10 constitute strong evidence.
    - **Sequential Bayesian updating**: After observing batch D₁, the posterior P(θ | D₁) becomes the prior for the next batch D₂: P(θ | D₁, D₂) ∝ P(D₂ | θ) P(θ | D₁), enabling online learning without storing past data. This is the mechanism underlying [[Kalman Filter]] and particle filter algorithms.

    The No-U-Turn Sampler (NUTS, Hoffman & Gelman, 2014) is the standard practical MCMC algorithm:
    - Augments the parameter space with auxiliary momentum variables p ~ N(0, M).
    - Uses the Hamiltonian H(θ, p) = U(θ) + K(p) where U(θ) = −log P(θ | D) (potential energy) and K(p) = (1/2) p^T M^{-1} p (kinetic energy).
    - Simulates Hamiltonian dynamics via leapfrog integration to produce proposed moves that traverse the posterior landscape efficiently.
    - The "no-U-turn" criterion automatically determines when to stop the trajectory, avoiding the return path that would cancel out the gains; produces samples with very low autocorrelation.
    - Requires gradients of the log-posterior, computed automatically in Stan/PyMC via automatic differentiation.

  ## Connections to Information Theory
    Bayesian inference has deep connections to [[Information Theory]] (Shannon, 1948) that illuminate the structure of learning:
    - The **KL divergence** D_KL[q || p] = ∫ q(θ) log (q(θ)/p(θ)) dθ measures the information lost when q is used to approximate p; variational inference minimises D_KL[q(θ;φ) || P(θ|D)], equivalent to maximising the ELBO.
    - The **marginal likelihood** P(D) = exp(−NL), where L is the cross-entropy between the data distribution and the model's predictive distribution, connecting Bayesian model evidence to [[Cross-Entropy Loss]] in deep learning.
    - **Minimum Description Length (MDL)** — Rissanen's MDL principle provides a frequentist interpretation of Bayesian model selection: the best model minimises the total description length of model and data, equivalent to the negative log marginal likelihood.
    - **Maximum Entropy Principle** — Jaynes (1957) showed that the prior that makes the fewest unwarranted assumptions while satisfying known constraints is the maximum-entropy distribution, connecting Bayesian prior selection to [[Entropy]] maximisation.
    - **Mutual information** I(y; θ | x, D) = H[y | x, D] − E_{p(θ|D)}[H[y | x, θ]] measures the expected reduction in output entropy from knowing θ; this is the Bayesian Active Learning by Disagreement (BALD) criterion for [[Active Learning]].

  ## Benchmark Datasets and Evaluation Metrics
    Bayesian inference methods are evaluated across a range of benchmarks:
    - **UCI Machine Learning Repository** — standard regression datasets (Boston Housing, Concrete, Yacht, Energy, Kin8nm, Naval, Power Plant, Protein) for comparing predictive log-likelihood and RMSE of BNN methods.
    - **MNIST, Fashion-MNIST, CIFAR-10** — classification benchmarks for calibration evaluation using Expected Calibration Error (ECE) and the reliability diagram; testing whether predictive probabilities are calibrated.
    - **BNN Benchmark (Ritter et al., 2018; Ovadia et al., 2019)** — systematic evaluations of MC-Dropout, SGLD, Laplace, and Deep Ensembles; key finding: Deep Ensembles consistently well-calibrated; MCMC most accurate but impractical at scale.
    - **Bayesian Optimisation benchmarks** — HPOBench (Eggensperger et al., 2021) for hyperparameter optimisation; Branin, Hartmann-6, rover trajectory optimisation for acquisition function comparison.
    - **Clinical trial simulation** — Bayesian adaptive trial designs evaluated by operating characteristics (type-I error, power, expected sample size) via simulation; FDA Guidance (2019, updated 2024) provides reference simulations.
    - **Calibration metrics**: ECE (Expected Calibration Error), MCE (Maximum Calibration Error), NLL (Negative Log-Likelihood per sample), Brier Score, reliability diagrams, Proper Scoring Rules (Gneiting & Raftery, 2007).
    - **Model comparison metrics**: Widely-Applicable Information Criterion (WAIC), Pareto-Smoothed Importance Sampling Leave-One-Out Cross-Validation (PSIS-LOO-CV), Bayes factors.

  ## Key Terminology
    - **Prior Distribution P(θ)** — probability distribution encoding beliefs about parameters before observing data; can be uninformative (Jeffreys, flat) or informative (from expert knowledge or previous studies).
    - **Likelihood Function P(D | θ)** — probability of the observed data given parameter values; encodes the generative model assumed to have produced the data.
    - **Posterior Distribution P(θ | D)** — updated belief distribution over parameters after observing data; the central product of Bayesian inference.
    - **Marginal Likelihood P(D)** — total probability of the observed data under the model, integrating out all parameters; used as a Bayesian model comparison criterion; also called model evidence.
    - **Posterior Predictive Distribution** — distribution over new outputs obtained by integrating predictions over the posterior; provides calibrated uncertainty in predictions.
    - **Conjugate Prior** — prior distribution from the same exponential family as the likelihood, yielding a posterior in the same family; enables exact analytic Bayesian updates without numerical integration.
    - **Bayesian Factor** — ratio of marginal likelihoods B₁₂ = P(D|M₁)/P(D|M₂); quantifies evidence for M₁ over M₂; on Jeffreys' scale, values 3-10 are "substantial", 10-30 "strong", >100 "decisive".
    - **Evidence Lower Bound (ELBO)** — the variational lower bound ℒ(φ) = E_{q(θ;φ)}[log P(D|θ)] − KL[q(θ;φ) || P(θ)]; maximising ELBO is equivalent to minimising KL divergence to the posterior.
    - **MCMC Convergence** — assessed via R-hat statistic (Gelman-Rubin, ideal < 1.05), effective sample size (ESS > 400 per parameter), and trace plots; ensures samples are representative of the posterior.
    - **Hierarchical Model** — multi-level Bayesian model placing priors on prior hyperparameters; enables partial pooling across groups, sharing statistical strength while allowing group-level variation.
    - **Empirical Bayes** — estimates prior hyperparameters from data by maximising the marginal likelihood (type-II ML); a frequentist-Bayesian hybrid that avoids full prior specification.
    - **Approximate Bayesian Computation (ABC)** — likelihood-free inference method that simulates data from the model and accepts parameter values whose simulations are close to observed data; used when the likelihood is intractable.

  ## Standards, Software, and Community
    The Bayesian inference ecosystem is one of the richest in computational science, with mature tooling, active standards development, and a substantial academic community:

    **Probabilistic programming languages and inference engines**: Stan (stan-lang.org; HMC-NUTS, ADVI; 10,000+ academic citations) is the gold standard for research inference; PyMC v5.27.1 (pymc.io; January 2026) provides a Pythonic interface with JAX and PyTensor backends; NumPyro (num.pyro.ai; JAX-native; 11x GPU speedup) is the choice for large-scale or repeated inference; TensorFlow Probability (tensorflow.org/probability; v0.24, 2025) integrates with Keras 3 for [[Deep Learning]] applications; Pyro (pyro.ai; PyTorch/JAX-based; Uber AI) enables deep generative models with Bayesian components; Turing.jl (turing.ml; Julia) provides composable probabilistic programming with automatic differentiation; BUGS (WinBUGS, OpenBUGS, JAGS) remain in use for legacy biostatistics and epidemiology applications.

    **Simulation-based inference tools**: BayesFlow (bayesflow.org; TensorFlow/JAX-based neural posterior estimation), sbi (sbi-dev.github.io; PyTorch-based; Tejero-Cantero et al., 2020), lampe (github.com/probabilists/lampe; PyTorch lightning-based SBI) provide likelihood-free inference for scientific models with intractable likelihoods. The Bayesian Inference Library for Python and R (BioRxiv, January 2026) unifies APIs across multiple backends.

    **Calibration and evaluation tools**: uncertainty-toolbox (github.com/uncertainty-toolbox; numpy-based; ECE, Brier, CRPS, reliability diagrams), netcal (github.com/EFS-OpenSource/calibration-framework; scikit-learn compatible calibration), ArviZ (arviz-devs.github.io; Python library for Bayesian workflow visualisation and diagnostics; MCMC convergence R-hat, ESS, PSIS-LOO-CV, posterior predictive checks).

    **Standards and regulation**: ISO/IEC 22989:2022 Section 6.9 (Uncertainty in AI systems); ISO/IEC 23053:2022 (Framework for ML-based AI systems); NIST AI RMF (2023) Measure function includes calibration and uncertainty quantification; EU AI Act (2024/1689) Article 9 (risk management) and Article 15 (accuracy, robustness) mandate uncertainty-aware AI documentation for high-risk systems; FDA Adaptive Design Guidance for Clinical Trials (2019, updated January 2024) formally accepts Bayesian posterior probability for adaptive trial decisions; ICH E9(R1) Addendum on Estimands references Bayesian posterior interval methods as a primary inferential approach for missing data in clinical trials.

    **Annual academic venues**: Bayesian Analysis (journal; International Society for Bayesian Analysis, ISBA); UAI (Conference on Uncertainty in Artificial Intelligence; auai.org; oldest Bayesian AI venue, established 1985); ISBA World Meeting (biennial; ISBA-statistics.org); NeurIPS AABI Workshop (Advances in Approximate Bayesian Inference; aabi.cc); ICML workshops on approximate inference and [[Gaussian Process]]; BayesComp (ISBA section on Bayesian computation, formerly MCMSki); Objective Bayes Section workshops (O-Bayes).

    **Key textbooks and references**: Gelman et al. "Bayesian Data Analysis" (BDA3, CRC Press, 2013); Murphy "Probabilistic Machine Learning" Vols 1 & 2 (MIT Press, 2022/2023); MacKay "Information Theory, Inference, and Learning Algorithms" (CUP, 2003; freely available); Bishop "Pattern Recognition and Machine Learning" (Springer, 2006); Rasmussen & Williams "[[Gaussian Process]] for Machine Learning" (MIT Press, 2006; freely available); Betancourt "A Conceptual Introduction to Hamiltonian Monte Carlo" (2017, arXiv:1701.02434).

  ## Connections to the Broader Ontology
    Bayesian inference occupies a foundational position in the AI and statistics concept graph, with connections to virtually every subfield of computational intelligence:

    Relative to **[[Machine Learning]]** (supported paradigm), Bayesian inference provides the theoretical foundation for Bayesian model selection (marginal likelihood as the principled criterion for choosing between model families), regularisation (priors as regularisers in the MAP limit), and probabilistic prediction (posterior predictive distribution as the gold standard for calibrated uncertainty). Every major [[Machine Learning]] paradigm has a Bayesian interpretation: supervised learning as posterior inference over predictive functions; unsupervised learning as posterior inference over latent structure; [[Reinforcement Learning]] as posterior inference over reward and transition models.

    Relative to **[[Variational Inference]]** (a key algorithmic component and subclass), Bayesian inference is the parent concept that motivates VI as an approximation method: the ELBO is derived from the Bayesian marginal likelihood, VI's KL divergence minimisation is a Bayesian approximation objective, and the [[Reparameterisation Trick]] is a Bayesian gradient estimation technique. The entire [[Variational Autoencoder]] research programme is an application of Bayesian inference to latent variable models with neural likelihoods.

    Relative to **[[Gaussian Process]]** (a related concept and subclass of Bayesian models), Bayesian inference is the inference engine that populates GP models: the GP prior over functions is combined with the observed data likelihood to produce the GP posterior (analytic for Gaussian likelihoods, approximate for non-Gaussian). GP hyperparameter learning uses the Bayesian marginal likelihood (type-II ML), and GP model comparison uses Bayes factors. The connection to [[Bayesian Deep Learning]] is through the infinite-width neural network = GP result, which shows BDL and GP modelling are two points on a spectrum of Bayesian function approximation.

    Relative to **[[Probabilistic Graphical Model]]** (a related concept), Bayesian inference is the algorithm that runs inside PGMs: belief propagation on Bayesian networks implements exact Bayesian updating in tree-structured graphs; the junction tree algorithm extends this to general graphs; variational message passing implements VI in factor graph form. PGMs provide the representational language (conditional independence structure) while Bayesian inference provides the computational procedure.

    Relative to **[[Causal Inference]]** (a bridge concept), Bayesian inference bridges from associational statistics (correlations in data) to causal reasoning (effects of interventions): Bayesian networks that encode causal DAGs combine [[Bayesian Inference]] over parameters with causal do-calculus for intervention prediction; structural causal models with Bayesian parameter estimation enable counterfactual queries; Bayesian model averaging over causal graph structures provides uncertainty about causal structure itself. Pearl's (2000) do-calculus complements Bayesian inference rather than competing with it, with Bayesian methods providing the parameter learning component.

    Relative to **[[Information Theory]]** (a dependency), the deep connections include: KL divergence as the central quantity in both variational inference and information-theoretic data compression; minimum description length (MDL) as a frequentist interpretation of Bayesian model selection; the Bayesian model evidence as the normalisation constant connecting log-probability to Shannon entropy; mutual information I(θ; y | x, D) as the [[Active Learning]] acquisition criterion; and channel capacity as the maximum rate of [[Bayesian Inference]] learning from data.

  ## Conjugate Prior Families — Reference Table
    Conjugate prior-likelihood pairs enable exact closed-form Bayesian updates without numerical integration. This table lists the most important families used across statistics and machine learning:

    | Likelihood | Parameter | Conjugate Prior | Posterior Update |
    |------------|-----------|----------------|-----------------|
    | Bernoulli(θ) | θ ∈ [0,1] | Beta(α, β) | Beta(α + Σy_i, β + n − Σy_i) |
    | Binomial(n, θ) | θ ∈ [0,1] | Beta(α, β) | Beta(α + Σy_i, β + Σ(n_i − y_i)) |
    | Categorical(θ) | θ ∈ Simplex | Dirichlet(α) | Dirichlet(α + count_vector) |
    | Poisson(λ) | λ > 0 | Gamma(α, β) | Gamma(α + Σy_i, β + n) |
    | Gaussian(μ, σ²) | μ (σ² known) | Gaussian(μ₀, τ²) | Gaussian(updated μ, updated τ²) |
    | Gaussian(μ, σ²) | σ² (μ known) | Inverse-Gamma(α, β) | Inverse-Gamma(α + n/2, β + Σ(y_i−μ)²/2) |
    | Gaussian(μ, σ²) | both | Normal-Inverse-Gamma | Normal-Inverse-Gamma (updated) |
    | Exponential(λ) | λ > 0 | Gamma(α, β) | Gamma(α + n, β + Σy_i) |
    | Multinomial(n, θ) | θ ∈ Simplex | Dirichlet(α) | Dirichlet(α + count_vector) |
    | Negative-Binomial(r, θ) | θ ∈ [0,1] | Beta(α, β) | Beta(α + Σy_i, β + nr) |

    **Applications in machine learning**:
    - **[[Natural Language Processing]]** — Dirichlet-Multinomial conjugate pair underlies Latent Dirichlet Allocation (LDA) for topic modelling; Bayesian updates over word-topic and document-topic distributions are exact (Gibbs sampler within the conjugate family).
    - **[[Active Learning]]** — Beta-Bernoulli conjugate enables exact Bayesian updates for binary classification tasks; the posterior predictive gives the Expected Improvement acquisition function analytically.
    - **Multi-armed bandit** — Beta-Bernoulli Thompson Sampling maintains one Beta posterior per arm, samples θ_k ~ Beta(α_k, β_k) for each arm k, and selects argmax_k θ_k; exact posterior updates after each pull.
    - **Naive Bayes** — categorical likelihood with Dirichlet prior enables exact Bayesian parameter estimation for text classification; the Dirichlet-Multinomial marginal likelihood is used for Bayesian model selection between different feature vocabularies.
    - **Online learning** — conjugate updates enable O(1) parameter update after each observation without storing past data; directly implements the sequential Bayesian updating property.

  ## Research & Literature
    1. Bayes, T. (1763). "An essay towards solving a problem in the doctrine of chances." *Phil. Trans. R. Soc. London*, 53, 370-418.
    2. Laplace, P.S. (1812). *Théorie Analytique des Probabilités*. Courcier, Paris.
    3. Jeffreys, H. (1939). *Theory of Probability*. Oxford University Press.
    4. de Finetti, B. (1970). *Theory of Probability* (Vols 1 & 2). Wiley.
    5. Geman, S. & Geman, D. (1984). "Stochastic relaxation, Gibbs distributions, and the Bayesian restoration of images." *IEEE TPAMI*, 6(6), 721-741.
    6. Gelfand, A.E. & Smith, A.F.M. (1990). "Sampling-based approaches to calculating marginal densities." *JASA*, 85(410), 398-409.
    7. Gelman, A., Carlin, J.B., Stern, H.S., Dunson, D.B., Vehtari, A. & Rubin, D.B. (2013). *Bayesian Data Analysis* (3rd ed.). CRC Press.
    8. MacKay, D.J.C. (2003). *Information Theory, Inference, and Learning Algorithms*. Cambridge University Press.
    9. Neal, R.M. (1995). *Bayesian Learning for Neural Networks*. PhD Thesis, University of Toronto. Springer, 1996.
    10. Bishop, C.M. (2006). *Pattern Recognition and Machine Learning*. Springer.
    11. Hoffman, M.D. & Gelman, A. (2014). "The No-U-Turn Sampler: Adaptively setting path lengths in Hamiltonian Monte Carlo." *JMLR*, 15, 1593-1623.
    12. Jordan, M.I., Ghahramani, Z., Jaakkola, T.S. & Saul, L.K. (1999). "An introduction to variational methods for graphical models." *Machine Learning*, 37, 183-233.
    13. Blei, D.M., Kucukelbir, A. & McAuliffe, J.D. (2017). "Variational inference: A review for statisticians." *JASA*, 112(518), 859-877.
    14. Vehtari, A., Gelman, A. & Gabry, J. (2017). "Practical Bayesian model evaluation using leave-one-out cross-validation and WAIC." *Statistics and Computing*, 27(5), 1413-1432.
    15. Blei, D.M., Ng, A.Y. & Jordan, M.I. (2003). "Latent Dirichlet Allocation." *JMLR*, 3, 993-1022.
    16. Salvatier, J., Wiecki, T.V. & Fonnesbeck, C. (2016). "Probabilistic programming in Python using PyMC3." *PeerJ CS*, 2, e55. arXiv:1507.08050.
    17. Carpenter, B., Gelman, A., Hoffman, M.D. et al. (2017). "Stan: A probabilistic programming language." *JOSS*, 76, 1-32.
    18. Phan, D., Pradhan, N. & Jankowiak, M. (2019). "Composable effects for flexible and accelerated probabilistic programming in NumPyro." arXiv:1912.11554.
    19. Bingham, E., Chen, J.P., Jankowiak, M. et al. (2019). "Pyro: Deep universal probabilistic programming." *JMLR*, 20(28), 1-6.
    20. Murphy, K.P. (2022). *Probabilistic Machine Learning: An Introduction*. MIT Press.
    21. Murphy, K.P. (2023). *Probabilistic Machine Learning: Advanced Topics*. MIT Press.
    22. Cranmer, K., Brehmer, J. & Louppe, G. (2020). "The frontier of simulation-based inference." *PNAS*, 117(48), 30055-30062.
    23. Deisenroth, M.P. & Rasmussen, C.E. (2011). "PILCO: A model-based and data-efficient approach to policy search." *ICML 2011*.
    24. Adams, R.P. & MacKay, D.J.C. (2007). "Bayesian online changepoint detection." arXiv:0710.3742.
    25. Russo, D.J., Van Roy, B., Kazerouni, A., Osband, I. & Wen, Z. (2018). "A tutorial on Thompson Sampling." *Foundations and Trends in ML*, 11(1), 1-96.
    26. Habermann, P. et al. (2025). "Amortized Bayesian Multilevel Models." arXiv:2408.13230.
    27. Wu, D., Niu, R., Chinazzi, M. & van der Wilk, M. (2024). "Function-space MCMC for Bayesian neural networks." *ICML 2024*.
    28. Dellaporta, H. et al. (2025). "Advances in post-Bayesian methods." Workshop proceedings, NeurIPS 2025 satellite, UCL.

  ## Glossary of Key Inference Diagnostics
    When deploying Bayesian inference, these diagnostic quantities ensure the inference is reliable:
    - **R-hat (Gelman-Rubin statistic)** — measures convergence of multiple MCMC chains; computed as ratio of between-chain to within-chain variance; values < 1.01 indicate convergence; implemented in ArviZ and Stan.
    - **Effective Sample Size (ESS)** — accounts for autocorrelation in MCMC chains; ESS = n / (1 + 2 Σ_k ρ_k); ESS > 400 per parameter ensures reliable posterior quantile estimates; bulk ESS and tail ESS reported separately in ArviZ.
    - **PSIS-LOO-CV** — Pareto-Smoothed Importance Sampling Leave-One-Out Cross-Validation; estimates the predictive performance of the model without refitting; Pareto k̂ diagnostic flags observations that dominate the LOO estimate; implemented in the `loo` R package and ArviZ.
    - **Posterior Predictive Check (PPC)** — simulates replicated datasets ỹ from the posterior predictive and compares their statistics (mean, variance, extremes) to the observed data statistics; the most direct model fit diagnostic in Bayesian workflow.
    - **Bayes Factor Approximations** — for models where exact marginal likelihoods are intractable: bridge sampling (Meng & Wong, 1996), thermodynamic integration, and Savage-Dickey density ratio (for nested models) provide reliable estimates; harmonic mean estimator is unreliable and should be avoided.

- ### Provenance
  - sources:: https://en.wikipedia.org/wiki/Bayesian_inference; https://www.cl.cam.ac.uk/teaching/2425/MLBayInfer/; https://www.cs.ox.ac.uk/teaching/courses/2024-2025/SPP/; https://www.ucl.ac.uk/engineering/computer-science/research/research-groups-and-centres/ucl-centre-inverse-problems; https://postbayes.github.io/workshop2025/; https://arxiv.org/pdf/2408.13230; https://arxiv.org/pdf/2506.09928; https://www.biorxiv.org/content/10.64898/2026.01.19.700318v1.full.pdf; https://mc-stan.org/learn-stan/case-studies.html; https://pmc.ncbi.nlm.nih.gov/articles/PMC10495961/; Gelman et al. "Bayesian Data Analysis" (3rd ed.); Bishop "Pattern Recognition and Machine Learning"; Murphy "Probabilistic Machine Learning" (Vols 1 & 2); MacKay "Information Theory, Inference, and Learning Algorithms"
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
