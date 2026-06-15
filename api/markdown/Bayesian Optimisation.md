public:: true

# Bayesian Optimisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bayesian-optimisation",
  "@type": "Page",
  "vc:slug": "bayesian-optimisation",
  "title": "Bayesian Optimisation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bayesian-optimisation",
  "@type": "Class",
  "label": "Bayesian Optimisation",
  "definition": "Bayesian Optimisation is a sequential, sample-efficient strategy for optimising expensive black-box objective functions by constructing a probabilistic surrogate model — most commonly a Gaussian Process — over the function's input space, then using an acquisition function to select the next evaluation point by trading off exploration of uncertain regions against exploitation of known optima. The method accumulates knowledge about the objective between evaluations, making it uniquely valuable when each function evaluation is computationally or financially costly. It maintains a posterior distribution over the objective that quantifies uncertainty and guides convergence to a global optimum with far fewer evaluations than grid search or random search. Applications span hyperparameter tuning, neural architecture search, drug discovery, materials science, and robotics controller design.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:optimisation",
      "label": "Optimisation"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:gaussian-process",
        "label": "Gaussian Process"
      },
      {
        "@id": "urn:ngm:class:acquisition-function",
        "label": "Acquisition Function"
      },
      {
        "@id": "urn:ngm:class:surrogate-model",
        "label": "Surrogate Model"
      },
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      },
      {
        "@id": "urn:ngm:class:probabilistic-model",
        "label": "Probabilistic Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:neural-architecture-search",
        "label": "Neural Architecture Search"
      },
      {
        "@id": "urn:ngm:class:auto-ml",
        "label": "AutoML"
      },
      {
        "@id": "urn:ngm:class:hyperparameter-tuning",
        "label": "Hyperparameter Tuning"
      },
      {
        "@id": "urn:ngm:class:automated-design",
        "label": "Automated Experiment Design"
      },
      {
        "@id": "urn:ngm:class:multi-objective-optimisation",
        "label": "Multi-Objective Optimisation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:probabilistic-inference",
        "label": "Probabilistic Inference"
      },
      {
        "@id": "urn:ngm:class:kernel-function",
        "label": "Kernel Function"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:drug-discovery",
        "label": "Drug Discovery"
      },
      {
        "@id": "urn:ngm:class:materials-science",
        "label": "Materials Science"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:grid-search",
        "label": "Grid Search"
      },
      {
        "@id": "urn:ngm:class:random-search",
        "label": "Random Search"
      },
      {
        "@id": "urn:ngm:class:evolutionary-algorithm",
        "label": "Evolutionary Algorithm"
      },
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:active-learning",
        "label": "Active Learning"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:kriging",
        "label": "Kriging"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:experimental-design",
        "label": "Experimental Design"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:bayesian-global-optimisation",
      "label": "Bayesian Global Optimisation"
    },
    {
      "@id": "urn:ngm:class:sequential-model-based-optimisation",
      "label": "Sequential Model-Based Optimisation"
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
  - [[Bayesian Optimisation]] is a probabilistic, sample-efficient global optimisation strategy that fits a surrogate model — typically a [[Gaussian Process]] grounded in [[Bayesian Inference]] — to a costly black-box objective function, then selects each successive query point via an [[Acquisition Function]] that balances exploration of uncertain regions with exploitation of known promising areas. It is the method of choice for [[Hyperparameter Tuning]], [[Neural Architecture Search]], and [[Automated Experiment Design]] across [[Machine Learning]] and the physical sciences, offering near-optimal solutions with a fraction of the evaluations required by [[Grid Search]] or [[Random Search]].

- ### Overview
  - Bayesian Optimisation addresses a fundamental problem in applied science and engineering: how to find the optimum of a function that is expensive to evaluate, has no known gradient, and may be noisy. Each evaluation might represent hours of GPU training, a laboratory synthesis, or a clinical experiment.
  - The method exploits two key ideas: (1) a [[Surrogate Model]] — typically a [[Gaussian Process]] — which gives a cheap-to-query probabilistic approximation of the true objective, and (2) an [[Acquisition Function]] that uses the surrogate's predictive mean and uncertainty to decide where to evaluate next.
  - After each evaluation, the surrogate is updated using Bayes' theorem via [[Probabilistic Inference]], incorporating the new data point into the posterior. This iterative loop continues until a budget of evaluations is exhausted.
  - The result is a principled [[Exploration-Exploitation Trade-off]]: the algorithm tries points that look promising (exploitation) whilst also probing uncertain regions where the true function might be better than expected (exploration).
  - Compared to [[Evolutionary Algorithm|evolutionary algorithms]] and random search, Bayesian Optimisation typically reaches good solutions in 10–100× fewer evaluations, making it invaluable when compute or experimental capacity is constrained.

- ### Key Components
  - #### Surrogate Model
    - The [[Surrogate Model]] provides a tractable approximation of the objective function.
    - **[[Gaussian Process]]** (GP): the classical and most widely used surrogate. A GP defines a distribution over functions characterised by a mean function and a covariance ([[Kernel Function]]). It provides both a predictive mean (best guess) and a predictive variance (uncertainty), both updated analytically after each observation.
    - **Random Forests**: used in SMAC and similar tools for high-dimensional, mixed-type (continuous + categorical) search spaces common in algorithm configuration.
    - **Bayesian Neural Networks**: scale to higher dimensions but require approximate inference; used in tools like DNGO and BOHAMIANN.
    - **Tree Parzen Estimators (TPE)**: used by [[Hyperparameter Tuning]] library Optuna; model the distribution of good and bad configurations separately rather than fitting the objective directly.
  - #### Acquisition Function
    - The [[Acquisition Function]] translates the surrogate's posterior into a utility score for each candidate point, guiding the next evaluation.
    - **[[Expected Improvement]] (EI)**: queries the point with the highest expected gain over the current best observation. Analytically tractable for GPs; the most widely used acquisition function.
    - **Upper Confidence Bound (UCB)**: selects points where `mean + κ·std` is highest; κ controls the exploration weight. Connects to [[Reinforcement Learning]] regret bounds.
    - **Thompson Sampling**: draws a sample function from the GP posterior and maximises it; naturally probabilistic and parallelisable.
    - **Probability of Improvement (PI)**: earliest acquisition function; biased towards exploitation in practice, largely superseded by EI.
    - **Knowledge Gradient (KG)**: one-step optimal acquisition that considers the value of information; more computationally expensive.
  - #### Kernel Function
    - The [[Kernel Function]] defines the covariance structure of the [[Gaussian Process]] and encodes prior assumptions about function smoothness and length-scale.
    - **Radial Basis Function (RBF) / Squared Exponential**: infinitely differentiable; assumes very smooth objectives.
    - **Matérn kernels** (ν = 1/2, 3/2, 5/2): allow less smooth functions; ν=5/2 is common in practice.
    - **Automatic Relevance Determination (ARD)**: per-dimension length-scales; effectively learns which input dimensions matter.
    - Kernel choice encodes inductive bias; mismatched kernels degrade performance on discontinuous or multi-modal objectives.
  - #### Optimisation Inner Loop
    - Maximising the [[Acquisition Function]] over the input space is itself an optimisation problem, but typically cheap (no expensive evaluations needed).
    - Standard approach: multi-start gradient ascent with random initialisations, or evolutionary search.
    - In high-dimensional spaces this inner optimisation becomes a bottleneck, motivating methods like trust-region Bayesian Optimisation (TuRBO).

- ### Mechanisms and Algorithm
  - **Initialisation**: sample a small number of points (typically 5–20) via Latin hypercube sampling or random search to seed the surrogate.
  - **Surrogate Fitting**: fit the GP (or alternative surrogate) to all observed (x, y) pairs using maximum likelihood estimation of hyperparameters (e.g. kernel length-scale, noise variance) via optimisation of the marginal log-likelihood.
  - **Acquisition Maximisation**: find the candidate x* that maximises the acquisition function α(x; surrogate).
  - **Objective Evaluation**: evaluate the true (expensive) objective f(x*).
  - **Update**: add (x*, f(x*)) to the dataset; re-fit surrogate hyperparameters.
  - **Termination**: repeat until budget (number of evaluations) is exhausted, then return the best observed point.
  - Computational complexity of GP fitting is O(n³) in the number of observations n, which limits vanilla GPs to a few hundred evaluations before approximations are required.

- ### Scalability and Variants
  - **Sparse GPs**: use inducing points to reduce complexity to O(nm²) where m << n; implemented in GPflow and GPyTorch.
  - **High-Dimensional BO**: random embeddings (REMBO), additive GPs (Add-GP-UCB), and coordinate descent approaches extend BO to hundreds of dimensions.
  - **Parallel / Batch BO**: evaluate multiple points simultaneously using fantasised observations, enabling use on multi-GPU clusters; implemented in BoTorch via the qEI (joint expected improvement) family.
  - **Multi-Task BO**: share information across related tasks (e.g. tuning the same model on different datasets) using multi-output GPs.
  - **Multi-Fidelity BO**: combine cheap low-fidelity evaluations (e.g. short training runs) with expensive high-fidelity ones; BOHB and Hyperband-BO hybrids exploit this.
  - **Trust Region BO (TuRBO)**: maintains local trust regions to scale to high dimensions and avoid the over-exploration problem of global GPs.
  - **[[Multi-Objective Optimisation]]**: EHVI (Expected Hypervolume Improvement) and NSGA-II hybrid approaches discover Pareto fronts across competing objectives.

- ### Applications and Use Cases
  - #### Machine Learning and AI
    - **[[Hyperparameter Tuning]]**: tuning learning rate, weight decay, batch size, network width/depth for [[Deep Learning]] models. Used by Google Vizier, AWS SageMaker AMT, Azure Hyperdrive, and open-source tools GPyOpt, Ax, Optuna, BoTorch.
    - **[[Neural Architecture Search]]**: efficiently exploring architecture spaces (number of layers, filter sizes, skip connections) as part of [[AutoML]] pipelines. NASNet, DARTS-BO, and EfficientNet search used variants.
    - **Prompt Optimisation**: treating prompt templates as discrete/continuous variables and optimising them for LLM performance with limited evaluation budgets.
    - **Adapter and Fine-Tuning Schedules**: optimising LoRA rank, learning-rate schedules, and data mixing ratios for foundation model adaptation.
  - #### Physical and Life Sciences
    - **[[Drug Discovery]]**: guiding molecular synthesis and screening pipelines where each experimental assay is expensive. Platforms like Evariste and Chemify integrate Bayesian Optimisation with robotic chemistry.
    - **[[Materials Science]]**: accelerating discovery of new alloys, polymers, and catalysts with autonomous laboratory platforms (e.g. Ada, CAMD). Combined with density functional theory (DFT) calculations as surrogates.
    - **Clinical Trial Design**: optimising dosing regimens and treatment parameters under tight patient-number constraints.
    - **Protein Engineering**: optimising protein fitness landscapes with directed evolution guided by GP surrogates.
  - #### Engineering and Robotics
    - **[[Robotics]]**: controller parameter tuning for locomotion, manipulation, and sim-to-real transfer. RoBO (Robust Bayesian Optimisation) is designed for noisy robotic feedback.
    - **Aerodynamic Design**: optimising aerofoil shapes and CFD parameters for aircraft and wind turbines.
    - **Integrated Circuit Design**: timing closure and power optimisation in EDA workflows.
  - #### Business and Technology
    - **A/B Testing and Experimentation**: multi-armed bandit / BO hybrids for website optimisation with limited traffic capacity.
    - **Recommendation System Tuning**: optimising ranking model hyperparameters and business-logic parameters.
    - **Network Configuration**: tuning load balancers, CDN parameters, and database query planner settings.

- ### Relationships
  - uses:: [[Gaussian Process]]
  - uses:: [[Acquisition Function]]
  - uses:: [[Surrogate Model]]
  - uses:: [[Bayesian Inference]]
  - uses:: [[Probabilistic Model]]
  - uses:: [[Kernel Function]]
  - enables:: [[Hyperparameter Tuning]]
  - enables:: [[Neural Architecture Search]]
  - enables:: [[AutoML]]
  - enables:: [[Automated Experiment Design]]
  - enables:: [[Multi-Objective Optimisation]]
  - requires:: [[Probabilistic Inference]]
  - supports:: [[Machine Learning]]
  - supports:: [[Deep Learning]]
  - supports:: [[Drug Discovery]]
  - supports:: [[Materials Science]]
  - contrastsWith:: [[Grid Search]]
  - contrastsWith:: [[Random Search]]
  - contrastsWith:: [[Evolutionary Algorithm]]
  - contrastsWith:: [[Gradient Descent]]
  - relatedTo:: [[Exploration-Exploitation Trade-off]]
  - relatedTo:: [[Active Learning]]
  - relatedTo:: [[Reinforcement Learning]]
  - relatedTo:: [[Kriging]]
  - relatedTo:: [[Expected Improvement]]
  - bridges-to:: [[Robotics]]
  - bridges-to:: [[Experimental Design]]

- ### Historical Context
  - Bayesian Optimisation has roots in geostatistics. **[[Kriging]]** — a Gaussian-process interpolation technique developed by Danie Krige in the 1950s and formalised by Georges Matheron — served as the foundational surrogate model long before modern machine learning.
  - Jonas Mockus adapted the framework for global optimisation in the 1970s, introducing the concept of an acquisition function to guide sampling.
  - The method entered the machine learning mainstream through Brochu, Cora, and de Freitas's 2010 tutorial, followed by Snoek, Larochelle, and Adams's 2012 paper applying it systematically to neural network hyperparameter tuning.
  - The release of open-source libraries — Spearmint (2012), GPyOpt (2014), Ax/BoTorch (Facebook, 2019), Optuna (Preferred Networks, 2019) — democratised the technique.
  - Multi-fidelity approaches (Hyperband, BOHB) and neural architecture search integrations in the 2018–2022 period further expanded the method's reach.
  - Current frontiers (2025–2026) include large-scale parallel BO on GPU clusters, integration with foundation models for in-context surrogate learning, and autonomous laboratory platforms combining BO with robotic experimentation.

- ### Software Ecosystem
  - **BoTorch** (Meta/PyTorch Foundation): high-performance, GPU-accelerated BO library with composable acquisition functions; underpins the Ax platform.
  - **Ax** (Meta): experiment management platform built on BoTorch; supports multi-objective, multi-fidelity, and bandit experiments.
  - **Optuna** (Preferred Networks): production-grade hyperparameter optimisation framework using TPE and CMA-ES; widely used in industry.
  - **GPyOpt** (Sheffield ML Group): GP-based BO library; foundational but less actively maintained.
  - **GPflow / GPyTorch**: flexible GP libraries enabling custom surrogate construction within BO loops.
  - **SMAC** (AutoML Freiburg): BO with random forest surrogates; strength in mixed-type and algorithm configuration spaces.
  - **Dragonfly**: supports high-dimensional and multi-fidelity BO with additive GP models.
  - **Emukit** (Amazon): modular BO, multi-fidelity, and experimental design toolkit.
  - **RoBO**: Bayesian Optimisation with a focus on robotics and noisy observations.

- ### Standards and Context
  - No single formal standards body governs Bayesian Optimisation, but several benchmark suites and best-practice frameworks have emerged:
    - **HPOBench** and **YAHPO**: standardised hyperparameter optimisation benchmarks for fair method comparison.
    - **NeurIPS Black-Box Optimisation Competition**: recurring benchmark driving algorithmic advances.
    - **MFPML (Multi-Fidelity and Physics-based ML)**: community standards for multi-fidelity surrogates in engineering design.
  - Bayesian Optimisation is listed as a component methodology in the **DARPA Accelerated Materials Design and Manufacturing** programme and the **European AI Act**'s annexe on automated decision-making tools for scientific research.
  - Integration with **MLflow** and **W&B** logging standards ensures reproducibility of BO-driven experiments in production [[Machine Learning]] pipelines.

- ### Provenance
  - sources:: Mockus (1975) "On Bayesian Methods for Seeking the Extremum"; Snoek, Larochelle & Adams (2012) "Practical Bayesian Optimization of Machine Learning Algorithms"; Frazier (2018) "A Tutorial on Bayesian Optimization"; Garnett (2023) "Bayesian Optimization" (Cambridge University Press)
  - updated:: 2026-06-13
