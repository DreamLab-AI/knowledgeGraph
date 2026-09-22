public:: true

# Acquisition Function
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:acquisition-function",
  "@type": "Page",
  "vc:slug": "acquisition-function",
  "title": "Acquisition Function",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:ngm:class:bayesian-optimisation", "vc:label": "Bayesian Optimisation"},
    {"@id": "urn:ngm:class:probabilistic-model", "vc:label": "Probabilistic Model"},
    {"@id": "urn:ngm:class:bayesian-inference", "vc:label": "Bayesian Inference"},
    {"@id": "urn:ngm:class:hyperparameter-tuning", "vc:label": "Hyperparameter Tuning"},
    {"@id": "urn:ngm:class:neural-architecture-search", "vc:label": "Neural Architecture Search"},
    {"@id": "urn:ngm:class:hyperparameter", "vc:label": "Hyperparameter"},
    {"@id": "urn:ngm:class:machine-learning-discipline", "vc:label": "Machine Learning Discipline"},
    {"@id": "urn:ngm:class:gaussian-process", "vc:label": "Gaussian Process"},
    {"@id": "urn:ngm:class:surrogate-model", "vc:label": "Surrogate Model"},
    {"@id": "urn:ngm:class:optimisation-algorithm", "vc:label": "Optimization Algorithm"},
    {"@id": "urn:ngm:class:expected-improvement", "vc:label": "Expected Improvement"},
    {"@id": "urn:ngm:class:exploration-exploitation-tradeoff", "vc:label": "Exploration-Exploitation Trade-off"},
    {"@id": "urn:ngm:class:reinforcement-learning", "vc:label": "Reinforcement Learning"},
    {"@id": "urn:ngm:class:active-learning", "vc:label": "Active Learning"},
    {"@id": "urn:ngm:class:kernel-function", "vc:label": "Kernel Function"},
    {"@id": "urn:ngm:class:drug-discovery", "vc:label": "Drug Discovery"},
    {"@id": "urn:ngm:class:material-science", "vc:label": "Materials Science"},
    {"@id": "urn:ngm:class:auto-ml", "vc:label": "AutoML"},
    {"@id": "urn:ngm:class:multi-objective-optimisation", "vc:label": "Multi-Objective Optimisation"},
    {"@id": "urn:ngm:class:deep-learning", "vc:label": "Deep Learning"},
    {"@id": "urn:ngm:class:machine-learning", "vc:label": "Machine Learning"},
    {"@id": "urn:ngm:class:grid-search", "vc:label": "Grid Search"},
    {"@id": "urn:ngm:class:random-search", "vc:label": "Random Search"},
    {"@id": "urn:ngm:class:gradient-descent", "vc:label": "Gradient Descent"},
    {"@id": "urn:ngm:class:probabilistic-inference", "vc:label": "Probabilistic Inference"},
    {"@id": "urn:ngm:class:monte-carlo", "vc:label": "Monte Carlo"},
    {"@id": "urn:ngm:class:experimental-design", "vc:label": "Experimental Design"},
    {"@id": "urn:ngm:class:robotics", "vc:label": "Robotics"},
    {"@id": "urn:ngm:class:thompson-sampling", "vc:label": "Thompson Sampling"},
    {"@id": "urn:ngm:class:upper-confidence-bound", "vc:label": "Upper Confidence Bound"},
    {"@id": "urn:ngm:class:bandit-algorithm", "vc:label": "Bandit Algorithm"},
    {"@id": "urn:ngm:class:information-theory", "vc:label": "Information Theory"},
    {"@id": "urn:ngm:class:regret-minimisation", "vc:label": "Regret Minimisation"},
    {"@id": "urn:ngm:class:trust-region-method", "vc:label": "Trust Region Method"},
    {"@id": "urn:ngm:class:black-box-optimisation", "vc:label": "Black-Box Optimisation"},
    {"@id": "urn:ngm:class:pareto-optimality", "vc:label": "Pareto Optimality"},
    {"@id": "urn:ngm:class:protein-engineering", "vc:label": "Protein Engineering"},
    {"@id": "urn:ngm:class:transfer-learning", "vc:label": "Transfer Learning"},
    {"@id": "urn:ngm:class:deep-kernel-learning", "vc:label": "Deep Kernel Learning"},
    {"@id": "urn:ngm:class:variance-reduction", "vc:label": "Variance Reduction"}
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:acquisition-function",
  "@type": "Class",
  "label": "Acquisition Function",
  "definition": "An acquisition function is a utility function used in Bayesian optimisation that determines which point in the input space to evaluate next by balancing exploration of uncertain regions against exploitation of known promising areas. It transforms the surrogate model's posterior distribution into a scalar score, guiding the sequential selection of experiments or evaluations. Common forms include Expected Improvement, Upper Confidence Bound, and Probability of Improvement.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:optimisation-algorithm", "label": "Optimization Algorithm"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:probabilistic-model", "label": "Probabilistic Model"},
      {"@id": "urn:ngm:class:bayesian-inference", "label": "Bayesian Inference"},
      {"@id": "urn:ngm:class:gaussian-process", "label": "Gaussian Process"},
      {"@id": "urn:ngm:class:monte-carlo", "label": "Monte Carlo"},
      {"@id": "urn:ngm:class:kernel-function", "label": "Kernel Function"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:bayesian-optimisation", "label": "Bayesian Optimisation"},
      {"@id": "urn:ngm:class:hyperparameter-tuning", "label": "Hyperparameter Tuning"},
      {"@id": "urn:ngm:class:neural-architecture-search", "label": "Neural Architecture Search"},
      {"@id": "urn:ngm:class:multi-objective-optimisation", "label": "Multi-Objective Optimisation"},
      {"@id": "urn:ngm:class:drug-discovery", "label": "Drug Discovery"},
      {"@id": "urn:ngm:class:experimental-design", "label": "Experimental Design"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:surrogate-model", "label": "Surrogate Model"},
      {"@id": "urn:ngm:class:probabilistic-inference", "label": "Probabilistic Inference"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:hyperparameter", "label": "Hyperparameter"},
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning Discipline"},
      {"@id": "urn:ngm:class:active-learning", "label": "Active Learning"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:exploration-exploitation-tradeoff", "label": "Exploration-Exploitation Trade-off"},
      {"@id": "urn:ngm:class:information-theory", "label": "Information Theory"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:grid-search", "label": "Grid Search"},
      {"@id": "urn:ngm:class:random-search", "label": "Random Search"},
      {"@id": "urn:ngm:class:gradient-descent", "label": "Gradient Descent"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:auto-ml", "label": "AutoML"},
      {"@id": "urn:ngm:class:material-science", "label": "Materials Science"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-20T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:acquisition-function:enrichment-2026",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:acquisition-function"
  },
  "vc:resolutions": [
    {"raw": "[[Bayesian Optimisation]]", "resolved": "urn:ngm:class:bayesian-optimisation", "kind": "ResolvedLink"},
    {"raw": "[[Probabilistic Model]]", "resolved": "urn:ngm:class:probabilistic-model", "kind": "ResolvedLink"},
    {"raw": "[[Bayesian Inference]]", "resolved": "urn:ngm:class:bayesian-inference", "kind": "ResolvedLink"},
    {"raw": "[[Hyperparameter Tuning]]", "resolved": "urn:ngm:class:hyperparameter-tuning", "kind": "ResolvedLink"},
    {"raw": "[[Neural Architecture Search]]", "resolved": "urn:ngm:class:neural-architecture-search", "kind": "ResolvedLink"},
    {"raw": "[[Hyperparameter]]", "resolved": "urn:ngm:class:hyperparameter", "kind": "ResolvedLink"},
    {"raw": "[[Machine Learning Discipline]]", "resolved": "urn:ngm:class:machine-learning-discipline", "kind": "ResolvedLink"},
    {"raw": "[[Gaussian Process]]", "resolved": "urn:ngm:class:gaussian-process", "kind": "ResolvedLink"},
    {"raw": "[[Surrogate Model]]", "resolved": "urn:ngm:class:surrogate-model", "kind": "ResolvedLink"},
    {"raw": "[[Optimisation Algorithm]]", "resolved": "urn:ngm:class:optimisation-algorithm", "kind": "ResolvedLink"},
    {"raw": "[[Expected Improvement]]", "resolved": "urn:ngm:class:expected-improvement", "kind": "StubLink"},
    {"raw": "[[Exploration-Exploitation Trade-off]]", "resolved": "urn:ngm:class:exploration-exploitation-tradeoff", "kind": "StubLink"},
    {"raw": "[[Reinforcement Learning]]", "resolved": "urn:ngm:class:reinforcement-learning", "kind": "ResolvedLink"},
    {"raw": "[[Active Learning]]", "resolved": "urn:ngm:class:active-learning", "kind": "ResolvedLink"},
    {"raw": "[[Kernel Function]]", "resolved": "urn:ngm:class:kernel-function", "kind": "ResolvedLink"},
    {"raw": "[[Drug Discovery]]", "resolved": "urn:ngm:class:drug-discovery", "kind": "ResolvedLink"},
    {"raw": "[[Materials Science]]", "resolved": "urn:ngm:class:material-science", "kind": "ResolvedLink"},
    {"raw": "[[AutoML]]", "resolved": "urn:ngm:class:auto-ml", "kind": "ResolvedLink"},
    {"raw": "[[Multi-Objective Optimisation]]", "resolved": "urn:ngm:class:multi-objective-optimisation", "kind": "ResolvedLink"},
    {"raw": "[[Deep Learning]]", "resolved": "urn:ngm:class:deep-learning", "kind": "ResolvedLink"},
    {"raw": "[[Machine Learning]]", "resolved": "urn:ngm:class:machine-learning", "kind": "ResolvedLink"},
    {"raw": "[[Grid Search]]", "resolved": "urn:ngm:class:grid-search", "kind": "ResolvedLink"},
    {"raw": "[[Random Search]]", "resolved": "urn:ngm:class:random-search", "kind": "ResolvedLink"},
    {"raw": "[[Gradient Descent]]", "resolved": "urn:ngm:class:gradient-descent", "kind": "ResolvedLink"},
    {"raw": "[[Probabilistic Inference]]", "resolved": "urn:ngm:class:probabilistic-inference", "kind": "ResolvedLink"},
    {"raw": "[[Monte Carlo]]", "resolved": "urn:ngm:class:monte-carlo", "kind": "StubLink"},
    {"raw": "[[Experimental Design]]", "resolved": "urn:ngm:class:experimental-design", "kind": "ResolvedLink"},
    {"raw": "[[Robotics]]", "resolved": "urn:ngm:class:robotics", "kind": "ResolvedLink"},
    {"raw": "[[Thompson Sampling]]", "resolved": "urn:ngm:class:thompson-sampling", "kind": "StubLink"},
    {"raw": "[[Upper Confidence Bound]]", "resolved": "urn:ngm:class:upper-confidence-bound", "kind": "StubLink"},
    {"raw": "[[Bandit Algorithm]]", "resolved": "urn:ngm:class:bandit-algorithm", "kind": "StubLink"},
    {"raw": "[[Information Theory]]", "resolved": "urn:ngm:class:information-theory", "kind": "StubLink"},
    {"raw": "[[Regret Minimisation]]", "resolved": "urn:ngm:class:regret-minimisation", "kind": "StubLink"},
    {"raw": "[[Trust Region Method]]", "resolved": "urn:ngm:class:trust-region-method", "kind": "StubLink"},
    {"raw": "[[Black-Box Optimisation]]", "resolved": "urn:ngm:class:black-box-optimisation", "kind": "StubLink"},
    {"raw": "[[Pareto Optimality]]", "resolved": "urn:ngm:class:pareto-optimality", "kind": "StubLink"},
    {"raw": "[[Protein Engineering]]", "resolved": "urn:ngm:class:protein-engineering", "kind": "StubLink"},
    {"raw": "[[Transfer Learning]]", "resolved": "urn:ngm:class:transfer-learning", "kind": "ResolvedLink"},
    {"raw": "[[Deep Kernel Learning]]", "resolved": "urn:ngm:class:deep-kernel-learning", "kind": "StubLink"},
    {"raw": "[[Variance Reduction]]", "resolved": "urn:ngm:class:variance-reduction", "kind": "StubLink"}
  ],
  "prov:wasAttributedTo": {"@id": "did:nostr:enrichment-swarm"},
  "prov:generatedAtTime": {"@value": "2026-06-20T00:00:00Z", "@type": "xsd:dateTime"}
}
```

- ### Definition
  - An acquisition function is a mathematical utility function that scores every candidate point in the input space of a [[Black-Box Optimisation]] problem and determines which point should be evaluated next in a [[Bayesian Optimisation]] loop. It operates by translating the [[Probabilistic Model]] surrogate's posterior distribution — typically a [[Gaussian Process]] conditioned on all previously observed input–output pairs — into a single scalar that encodes the trade-off between exploitation of regions known to be near-optimal and exploration of regions with high predictive uncertainty. This formalised [[Exploration-Exploitation Trade-off]] is the defining intellectual contribution of the acquisition function concept: rather than choosing the next evaluation point by myopic optimism (always query the surrogate's current predicted maximum) or random diffusion (uniform exploration), the acquisition function integrates the surrogate's uncertainty estimate into a principled decision criterion grounded in [[Bayesian Inference]] and often in expected utility theory or decision-theoretic [[Information Theory]]. The three canonical families are [[Expected Improvement]] (EI), which queries the point with highest expected gain over the current best observation; [[Upper Confidence Bound]] (UCB), which adds a tunable multiple of the posterior standard deviation to the posterior mean and connects directly to [[Regret Minimisation]] guarantees from [[Bandit Algorithm]] theory; and [[Thompson Sampling]], which draws a sample function from the GP posterior and maximises it, offering natural parallelism and theoretical regret bounds. All families depend on first maximising the [[Surrogate Model]]'s [[Probabilistic Inference]] posterior, most commonly a [[Gaussian Process]] fit with a [[Kernel Function]] encoding prior smoothness assumptions, and then maximising the acquisition function over the input space — a cheap inner optimisation problem solved via multi-start gradient ascent or evolutionary search. Acquisition functions have been extended to batch-parallel settings (q-EI, q-UCB), [[Multi-Objective Optimisation]] (Expected Hypervolume Improvement, [[Pareto Optimality]] indicators), multi-fidelity settings (Cost-aware EI, max-value entropy search), high-dimensional spaces via [[Trust Region Method]] decompositions, and non-Gaussian surrogates including [[Deep Kernel Learning]] and Bayesian neural networks. They underpin [[Hyperparameter Tuning]] in every major AutoML platform and drive automated [[Experimental Design]] in [[Drug Discovery]], [[Materials Science]], [[Protein Engineering]], and [[Robotics]] controller optimisation, making them one of the most practically impactful methodological inventions in computational science of the past three decades.

- ### Semantic Classification
  - owl-class:: machine-learning:AcquisitionFunction
  - owl-role:: Concept | AlgorithmicComponent | ExecutableProtocol
  - owl-inferred:: machine-learning:OptimisationStrategy, machine-learning:DecisionFunction, machine-learning:UtilityFunction
  - belongs-to-domain:: [[Machine Learning Discipline]]
  - implemented-in-layer:: [[AlgorithmLayer]]

- ### Relationships
  - is-subclass-of:: [[Optimisation Algorithm]], [[Black-Box Optimisation]]
  - has-part:: [[Expected Improvement]], [[Upper Confidence Bound]], [[Thompson Sampling]]
  - requires:: [[Surrogate Model]], [[Probabilistic Inference]], [[Gaussian Process]], [[Kernel Function]]
  - enables:: [[Bayesian Optimisation]], [[Hyperparameter Tuning]], [[Neural Architecture Search]], [[Multi-Objective Optimisation]], [[Drug Discovery]], [[Experimental Design]], [[AutoML]]
  - implements:: [[Exploration-Exploitation Trade-off]], [[Regret Minimisation]]
  - depends-on:: [[Probabilistic Model]], [[Bayesian Inference]], [[Monte Carlo]]
  - supports:: [[Machine Learning]], [[AutoML]], [[Materials Science]], [[Protein Engineering]], [[Robotics]]
  - uses:: [[Gaussian Process]], [[Bayesian Inference]], [[Monte Carlo]], [[Kernel Function]], [[Deep Kernel Learning]], [[Variance Reduction]]
  - contrasts-with:: [[Grid Search]], [[Random Search]], [[Gradient Descent]]
  - related-to:: [[Hyperparameter]], [[Machine Learning Discipline]], [[Active Learning]], [[Reinforcement Learning]], [[Exploration-Exploitation Trade-off]], [[Information Theory]], [[Bandit Algorithm]], [[Transfer Learning]], [[Trust Region Method]], [[Pareto Optimality]]
  - standardized-by:: [[BoTorch]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:hasPart ai:ExpectedImprovement))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:hasPart ai:UpperConfidenceBound))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:hasPart ai:ThompsonSampling))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:hasPart ai:ProbabilityOfImprovement))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:hasPart ai:KnowledgeGradient))

  ## Dependency Relationships
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:requires ai:SurrogateModel))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:requires ai:ProbabilisticInference))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:requires ai:GaussianProcess))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:requires ai:KernelFunction))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:dependsOn ai:ProbabilisticModel))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:dependsOn ai:BayesianInference))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:uses ai:MonteCarlo))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:uses ai:VarianceReduction))

  ## Capability Relationships
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:enables ai:BayesianOptimisation))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:enables ai:HyperparameterTuning))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:enables ai:NeuralArchitectureSearch))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:enables ai:MultiObjectiveOptimisation))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:enables ai:DrugDiscovery))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:enables ai:ExperimentalDesign))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:supports ai:AutoML))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:supports ai:MaterialsScience))

  ## Implementation Relationships
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:implements ai:ExplorationExploitationTradeOff))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:implements ai:RegretMinimisation))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:uses ai:DeepKernelLearning))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:relatedTo ai:ActiveLearning))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:relatedTo ai:BanditAlgorithm))

  ## Reduction Relationships
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:reducesTo ai:OptimizationAlgorithm))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:reducesTo ai:UtilityFunction))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:partOf ai:BayesianOptimisation))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:reducesTo ai:DecisionFunction))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:reducesTo ai:InformationCriterion))

  ## Contrast and Extension Relationships
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:contrastsWith ai:GridSearch))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:contrastsWith ai:RandomSearch))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:contrastsWith ai:GradientDescent))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:relatedTo ai:ActiveLearning))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:relatedTo ai:ReinforcementLearning))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:relatedTo ai:InformationTheory))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:supports ai:ProteinEngineering))
      SubClassOf(ai:AcquisitionFunction
        ObjectSomeValuesFrom(ai:supports ai:Robotics))

  ## Historical Development
    The intellectual origins of acquisition functions are intertwined with the broader history of optimal experimental design and statistical decision theory, both of which long predate modern machine learning. The core problem — how to choose the next experiment to maximise information about an unknown quantity — was addressed in the statistical literature as early as the 1950s and 1960s. Fisher's theory of optimal experimental design (1935) focused on fixed designs that minimise estimation error for linear models, but did not consider sequential adaptive designs where each experiment can inform the next. Box and Wilson (1951) introduced response surface methodology, the first systematic sequential experimental strategy for optimising industrial processes, though using classical designs (central composite, Box-Behnken) rather than probabilistic surrogate models. Lindley (1956) established the [[Information Theory]] perspective: an optimal experiment maximises the expected information gain — the expected reduction in Shannon entropy of the posterior distribution over the parameter of interest — providing the foundational framework that information-theoretic acquisition functions (Entropy Search, Max-Value Entropy Search) would formalise three decades later.

    The specific formulation of [[Bayesian Optimisation]] as a sequential strategy using a [[Probabilistic Model]] surrogate and an acquisition function to guide queries was developed by Jonas Mockus and colleagues at the Institute of Mathematics and Informatics in Vilnius, Lithuania, in the early 1970s. Mockus (1975) introduced the concept of "sequential Bayesian methods for seeking the extremum" and proposed using the expected improvement over the current best as the acquisition criterion — the first formal statement of what would become the [[Expected Improvement]] acquisition function. The phrase "acquisition function" itself appears to have entered the machine learning literature through the work of Eric Brochu, Vlad Cora, and Nando de Freitas at UBC (2010 tutorial), where it was used to describe any utility function that translates a posterior distribution into a scalar query criterion, thereby formalising and unifying the field.

    The 1998 EGO paper by Jones, Schonlau, and Welch at the Sandia National Laboratories brought acquisition functions to the engineering design optimisation community, connecting them to Kriging-based surrogate models from geostatistics and demonstrating that EI-based sequential design dramatically outperformed [[Grid Search]] and random factorial designs for aerodynamic shape optimisation and other engineering black-box problems. This paper had approximately 4,000 citations by 2024 and is generally credited with establishing [[Bayesian Optimisation]] as a mature engineering methodology.

    The transition of acquisition functions from engineering optimisation to machine learning [[Hyperparameter Tuning]] was catalysed by Snoek, Larochelle, and Adams's 2012 NeurIPS paper, which demonstrated systematic improvements over [[Grid Search]] and [[Random Search]] for neural network [[Hyperparameter]] optimisation using [[Gaussian Process]] surrogates with EI acquisition. This paper arrived at a moment when [[Deep Learning]] was entering mainstream use (AlexNet won ImageNet in the same year) and hyperparameter sensitivity was a well-known obstacle to reproducibility; the result energised the field and launched a decade of rapid progress in acquisition function design, surrogate model development, and [[AutoML]] platform engineering. The release of Spearmint (Snoek et al., 2014), GPyOpt (Sheffield/GPy, 2014), and subsequently Ax/BoTorch (Meta, 2019) and Optuna (Preferred Networks, 2019) made acquisition-function-based BO accessible to practitioners without deep expertise in Gaussian process inference.

    A second major transition occurred with the adoption of [[Monte Carlo]] acquisition functions in the BoTorch framework (Balandat et al., 2020). The key insight — that the reparameterisation trick from variational autoencoders enables analytic gradient computation through stochastic samples, allowing gradient-based optimisation of the acquisition function expressed as an expectation over the posterior — generalised the EI formalism to arbitrary surrogates, batch queries, multiple objectives, and constrained settings. This unification of acquisition function computation under a single differentiable programming abstraction is arguably the most significant methodological advance in [[Bayesian Optimisation]] infrastructure since the EGO paper.

  ## About
    An acquisition function formalises the question at the heart of every [[Bayesian Optimisation]] iteration: given everything we currently know about an expensive objective function, which point should we evaluate next? The conceptual origin lies in the statistical design-of-experiments literature: response surface methodology developed by Box and Wilson (1951) already advocated sequential experimental strategies, and the Bayesian perspective on optimal experiment design (Lindley, 1956; Chaloner and Verdinelli, 1995) provided the theoretical grounding for information-theoretic acquisition criteria. Jonas Mockus formalised the acquisition function as a distinct component of global optimisation in the 1970s, introducing the idea of expected improvement over a probabilistic model of the objective. The landmark paper by Jones, Schonlau, and Welch (1998) — "Efficient Global Optimisation of Expensive Black-Box Functions" — popularised [[Expected Improvement]] (EI) under the name EGO and brought acquisition functions to the engineering design community; EI remained the dominant acquisition choice for over two decades because it is analytically tractable for [[Gaussian Process]] surrogates, produces a closed-form integral over the improvement random variable, and balances exploration and exploitation without requiring manual tuning of a trade-off parameter.

    Formally, EI is defined as EI(x) = E[max(f(x) − f*, 0)], where f* is the current best observed value and f(x) is modelled as a Gaussian random variable with mean μ(x) and variance σ²(x) under the [[Gaussian Process]] posterior. The integral has a closed form: EI(x) = (μ(x) − f*)Φ(Z) + σ(x)φ(Z), where Z = (μ(x) − f*)/σ(x) and Φ, φ are the standard normal CDF and PDF respectively. This closed-form gradient enables efficient optimisation of the acquisition function via gradient ascent, making EI computationally attractive. The [[Upper Confidence Bound]] (UCB) acquisition function UCB(x) = μ(x) + κσ(x) has a direct theoretical justification through [[Regret Minimisation]] in the Gaussian process bandits framework (Srinivas et al., 2010): with appropriate κ schedule, GP-UCB achieves sub-linear cumulative regret, connecting [[Bayesian Optimisation]] to the [[Bandit Algorithm]] literature and [[Reinforcement Learning]] exploration theory. [[Thompson Sampling]] — drawing a random function f̃ from the [[Gaussian Process]] posterior and returning its argmax — is asymptotically optimal and trivially parallelisable: q independent samples yield q simultaneous query points with no additional computation beyond q independent GP samples, making it the preferred batch acquisition method in large-scale industrial systems.

    The early 2020s saw a significant transition from analytic acquisition functions to Monte Carlo (MC) acquisition functions, driven by the need to handle non-Gaussian surrogates, batched evaluation, and constraints. The MC-EI formulation (Wilson et al., 2018; Balandat et al., 2020 BoTorch) approximates EI via [[Monte Carlo]] sampling with reparameterisation-trick gradients, enabling the same gradient-based optimisation framework to extend to: (a) qEI — the joint expected improvement of a batch of q points, capturing synergies between batch members; (b) qNEI — noisy expected improvement for observations corrupted by heteroscedastic noise; (c) multi-objective qEHVI — joint expected hypervolume improvement for [[Multi-Objective Optimisation]] problems with [[Pareto Optimality]] objectives; and (d) constrained acquisition functions for problems with black-box constraints on feasibility. The LogEI family (Ament et al., NeurIPS 2023) reformulates EI in log space, addressing the numerically vanishing gradient problem that plagues the original EI formulation when the surrogate mean is far below the current best — a common failure mode in moderately high-dimensional search spaces.

    Integration with neural network surrogates is a major active research direction. [[Deep Kernel Learning]] (DKL; Wilson et al., 2016) composes a deep neural network feature extractor with a GP kernel, enabling the [[Gaussian Process]] posterior to leverage learned representations; this substantially improves acquisition function quality in structured domains such as molecular graphs, protein sequences, and image-parameterised designs. Bayesian neural network surrogates offer full posterior uncertainty but require approximate [[Probabilistic Inference]] (variational inference, deep ensembles, or MC Dropout), making acquisition function optimisation more complex. FunBO (Hvarfner et al., 2024) applies large language model search to discover novel acquisition function forms automatically, using FunSearch to evolve acquisition function code against benchmark performance — representing a meta-learning approach to acquisition function design.

  ## Components and Architecture
    - **[[Expected Improvement]] (EI) Family**:
      - Classical EI: analytically tractable for GP surrogates, no manual hyperparameter, closed-form gradient; EI(x) = σn(x)[ZΦ(Z) + φ(Z)] with Z = (μn(x) − f*)/σn(x).
      - LogEI (Ament et al., 2023): reformulation in log-space preventing numerically vanishing gradients in high-confidence regions; default acquisition in BoTorch v0.9+.
      - Noisy EI (NEI): marginalises over observation noise on the current best; robust to stochastic evaluations.
      - qLogEI: batch generalisation via MC sampling with reparameterisation-trick gradients; optimises q simultaneous queries jointly.
    - **[[Upper Confidence Bound]] (UCB) Family**:
      - GP-UCB: selects argmax_x [μn(x) + κn σn(x)]; κn schedule from Srinivas et al. (2010) guarantees sub-linear cumulative regret; connects to OFU principle from [[Bandit Algorithm]] theory.
      - GP-LCB (Lower Confidence Bound): used for minimisation problems; dual to UCB.
      - qUCB: batch UCB via [[Monte Carlo]] fantasy observations; correlates batch members to avoid redundant queries.
    - **[[Thompson Sampling]] (TS)**:
      - Draws a random function f̃ from the [[Gaussian Process]] posterior via pathwise sampling or random Fourier features; returns argmax f̃.
      - Embarrassingly parallel: q independent samples give q simultaneous query points with no inter-sample dependency.
      - Achieves Bayesian regret O(√(n log n)) — asymptotically equivalent to UCB and EI.
      - Preferred for batch asynchronous [[Bayesian Optimisation]] in large-scale systems (Google Vizier, Meta Ax).
    - **Probability of Improvement (PI)**:
      - Earliest acquisition function (Kushner, 1964): PI(x) = Φ(Z).
      - Biased towards exploitation; requires tuning the "improvement threshold" ξ to avoid premature convergence.
      - Largely superseded by EI in practice due to lack of scale-invariance.
    - **Knowledge Gradient (KG)**:
      - One-step Bayes-optimal: selects the point that maximises expected improvement in the posterior maximum after one more observation.
      - KG(x) = E_{y|x, Dn}[max_x' μn+1(x')] − max_x' μn(x').
      - More computationally expensive than EI (requires nested inner maximisation); implemented in BoTorch with MC approximation.
      - Theoretically superior to EI in finite-horizon (one remaining evaluation) settings; empirically similar on standard benchmarks.
    - **Max-Value Entropy Search (MES)**:
      - Information-theoretic criterion: maximises expected reduction in entropy of the distribution over the global optimum value f*.
      - MES(x) ≈ I(y; f* | x, Dn) approximated via Gumbel sampling over the posterior.
      - Competitive with EI on standard benchmarks; particularly strong in noisy and multi-fidelity settings.
      - Connects to [[Information Theory]] via the mutual information gain framework of optimal [[Experimental Design]].
    - **Batch Acquisition (qEI, qUCB, qEHVI)**:
      - qEI: joint expected improvement of a batch X = {x₁,…,xq}, defined as E[max_j(f(xj)) − f*]+; computed via reparameterisation-trick [[Monte Carlo]] with analytic gradients in BoTorch; essential for parallel hardware utilisation.
      - qUCB: batch UCB using fantasised observations to decouple correlated queries; parallelisable and gradient-accessible.
      - qEHVI: Expected Hypervolume Improvement for [[Multi-Objective Optimisation]]; measures improvement in the dominated hypervolume relative to the current [[Pareto Optimality]] front; qLogNoisyEHVI is the numerically stable default in BoTorch for multi-objective [[Drug Discovery]] and [[Materials Science]] applications.
    - **Constrained Acquisition**:
      - Weighted feasibility: α_constrained(x) = α(x) × P(c(x) ≤ 0 | Dn) where c(x) is a black-box constraint; feasibility probability estimated via a separate [[Gaussian Process]] surrogate on constraint observations.
      - Used in [[Robotics]] parameter tuning (safety constraints), clinical trial design (dose-limiting toxicity constraints), and materials synthesis (cost constraints).
    - **Multi-Fidelity Acquisition**:
      - Cost-aware EI: EI(x, m) / cost(m), where m indexes fidelity levels; maximised over (x, m) pairs to find the most information per unit cost.
      - Integrated into BOHB (Bayesian Optimisation + Hyperband) to combine cheap short training runs with expensive full evaluations for [[Hyperparameter Tuning]].
    - **Deep and Neural Acquisition Functions**:
      - [[Deep Kernel Learning]] surrogates compose a neural network feature extractor with a GP kernel, enabling EI over structured inputs (molecular graphs, protein sequences, neural architecture DAGs).
      - Bayesian neural network surrogates with [[Monte Carlo]] Dropout or deep ensembles provide approximate posteriors for EI computation in domains where GP kernels are unnatural.
      - Neural Process-based acquisition: condition a neural process (a meta-learner over function priors) on the current dataset, then compute EI over the neural process predictive distribution; enables [[Transfer Learning]] of acquisition strategies across related tasks.

  ## Convergence, Regret, and Theoretical Properties
    The theoretical analysis of acquisition functions is primarily conducted through the lens of cumulative regret in the Gaussian process bandit setting. Define the simple regret rn = f* − f(x_best) and cumulative regret Rn = Σᵢ₌₁ⁿ (f* − f(xᵢ)). A no-regret algorithm achieves Rn/n → 0 as n → ∞, meaning the average per-step gap to the optimum vanishes. Srinivas et al. (2010) established that GP-UCB is no-regret with the appropriate κ schedule, providing the first rigorous regret bound for [[Bayesian Optimisation]]. The bound depends on γn, the maximum information gain, which measures the intrinsic complexity of the kernel: γn = O((log n)^{d+1}) for the Matérn 5/2 kernel, implying Rn = Õ(√(n γn)) = Õ(n^{(d+1)/2(2d+2)} √n) — polynomial but not logarithmic in n for d > 1. Subsequent improvements (Chowdhury & Gopalan, 2017; Vakili et al., 2021) tightened the analysis and extended it to misspecified kernels and non-stationary objectives.

    For [[Expected Improvement]], theoretical analysis is harder because EI is not directly related to the upper confidence bound used in classical multi-armed [[Bandit Algorithm]] analysis. Bull (2011) proved that EI achieves near-minimax optimal simple regret for the Matérn kernel class: rn = O(n^{-α/(2α+d)}) where α is the kernel smoothness parameter. This is optimal up to logarithmic factors, showing EI is theoretically competitive with UCB. In practice, EI often outperforms UCB because it adapts its exploration rate automatically (through the posterior variance) without requiring manual tuning of κ.

    [[Thompson Sampling]] achieves the same asymptotic Bayesian regret as EI and UCB (Russo & Van Roy, 2014 proved O(√(n log n)) Bayesian regret for TS with GP priors), and has the additional property of being embarrassingly parallelisable: q independent TS samples provide q simultaneously optimal query points with no inter-sample dependency. This makes it the preferred acquisition for batch asynchronous settings where workers complete evaluations at different times.

    A key limitation of all acquisition functions is the inner optimisation problem: maximising α(x) over x ∈ X is itself a non-convex optimisation problem, often solved with multi-start L-BFGS or evolutionary strategies. In high dimensions (d > 20), this inner optimisation becomes unreliable, and the quality of the acquisition-guided search degrades. [[Trust Region Method]] approaches (TuRBO) address this by restricting the acquisition to a trust region around the current best, re-centering and re-scaling as evaluation progresses; this dramatically improves high-dimensional performance at the cost of potential failure to recover from a bad local region.

  ## Use Cases / Major Families
    - **[[Hyperparameter Tuning]] in [[Machine Learning]]**:
      - EI-based acquisition driving [[Gaussian Process]] BO for learning rate, batch size, architecture width/depth, regularisation strength.
      - Implemented in Google Vizier (serving billions of tuning requests), Meta Ax/BoTorch, AWS SageMaker Automatic Model Tuning, Azure Hyperdrive, Optuna (Tree-structured Parzen Estimator as implicit acquisition).
      - BO with EI typically reaches near-optimal hyperparameters in 50–100 evaluations vs 500–1000 for [[Random Search]] at comparable quality.
      - BOHB (Bayesian Optimisation + Hyperband) combines multi-fidelity scheduling with EI-guided candidate selection; reduces wall-clock time for [[Neural Architecture Search]] by 3–5× vs sequential BO.
      - Cost-aware acquisition with heterogeneous evaluation costs (short vs full training runs) is increasingly adopted in production infrastructure where compute billing varies by duration.
    - **[[Neural Architecture Search]]**:
      - Acquisition-guided search over discrete and continuous architecture spaces (number of layers, skip connections, filter sizes, kernel dimensions).
      - DARTS (Differentiable Architecture Search) relaxes the discrete search space to continuous, enabling gradient-based inner optimisation; BO acquisition selects the outer loop configuration.
      - [[Deep Learning]] model NAS reduced search cost for EfficientNet from 800 GPU hours (NASNet) to under 300; Bayesian NAS further reduces cost by modelling architecture performance with a GP surrogate and EI criterion.
      - LoRA rank and learning-rate schedule co-optimisation for foundation model fine-tuning is an emerging high-value application with clear acquisition function framing.
    - **[[Drug Discovery]] and Molecular Optimisation**:
      - Acquisition functions over molecular fingerprint, SMILES string embedding, or graph neural network representation spaces guide sequential experimental campaigns.
      - Recovering 90%+ of the most desirable molecules in a virtual library after evaluating only 6% of candidates (demonstrated in Pareto acquisition benchmarks, 2024).
      - ADMET-aware multi-objective qEHVI acquisition balances binding affinity, selectivity, aqueous solubility, metabolic stability, and toxicity simultaneously.
      - Preferential multi-objective [[Bayesian Optimisation]] (2025) incorporates human pharmacologist preferences via pairwise comparisons, enabling preference-guided molecular design without explicit scalarisation.
    - **[[Materials Science]] and Autonomous Laboratories**:
      - Acquisition-guided synthesis of new alloys, polymers, high-entropy alloys, catalysts, and battery electrolytes.
      - Integrated with robotic laboratory platforms (Ada at CMU, Chemify in Cambridge UK, CAMD at DTU) and density functional theory calculations as cheap-fidelity surrogates.
      - Best practices for multi-fidelity acquisition in materials discovery codified in 2024 community review covering acquisition function selection, kernel design, and infill criteria.
      - Pareto-based acquisition has successfully optimised silver nanoparticle synthesis under multiple constraints (yield, purity, cost) in a fully autonomous laboratory setting.
    - **[[Protein Engineering]]**:
      - Guiding directed evolution — choosing which amino acid variants to synthesise and assay next, maximising fitness improvement per wet-lab experiment.
      - GP surrogates over protein language model (ESM-2, ProtTrans) embeddings combined with EI acquisition demonstrate 3–5× improved sample efficiency over random mutation screening.
      - Multi-fidelity acquisition: computational AlphaFold2 structure predictions serve as low-fidelity surrogates; wet-lab binding assays as high-fidelity ground truth.
    - **[[Robotics]] Controller Optimisation**:
      - Tuning locomotion gaits, manipulation policies, and sim-to-real transfer parameters where each real-world episode is expensive and potentially unsafe.
      - Contextual BO with acquisition functions conditioned on environment state (floor surface, payload) enables adaptive controller tuning.
      - Safe BO with acquisition functions incorporating safety constraints (joint torque limits, fall probability) via chance-constrained EI; directly relevant to physical [[Robotics]] deployment.
    - **A/B Testing and Business Experimentation**:
      - Multi-armed bandit / acquisition hybrid for website conversion optimisation where the "evaluation budget" is limited daily traffic.
      - [[Thompson Sampling]] preferred for its interpretability and frequentist calibration properties; naturally handles the exploration-exploitation trade-off in sequential experimental allocation.
      - BO with EI applied to recommendation system ranking model [[Hyperparameter|hyperparameters]], CDN configuration, and database query planner settings in production infrastructure.

  ## Mathematical Foundations and Formal Derivations
    The formal mathematical treatment of acquisition functions is grounded in Bayesian decision theory and statistical estimation theory. Consider a black-box objective function f: X → ℝ, where X ⊆ ℝ^d, that we wish to maximise. After n evaluations, we have a dataset Dn = {(x₁, y₁), …, (xn, yn)} where yᵢ = f(xᵢ) + εᵢ with εᵢ ~ N(0, σ²_noise). The [[Gaussian Process]] posterior after conditioning on Dn is characterised by predictive mean μn(x) and variance σ²n(x), derived via the GP conjugacy property: μn(x) = kn(x)ᵀ(Kn + σ²_noise I)⁻¹ y and σ²n(x) = k(x, x) − kn(x)ᵀ(Kn + σ²_noise I)⁻¹ kn(x), where kn(x) is the vector of covariances between x and all training points, Kn is the n×n Gram matrix, and k is the [[Kernel Function]].

    **[[Expected Improvement]] (EI)**: The canonical derivation starts from the improvement random variable I(x) = max(f(x) − f*, 0). Under the GP posterior, f(x) ~ N(μn(x), σ²n(x)), so I(x) has a closed-form expectation: EI(x) = σn(x)[ZΦ(Z) + φ(Z)], where Z = (μn(x) − f*)/σn(x), Φ is the standard normal CDF, and φ is the PDF. The two terms have natural interpretations: ZΦ(Z) captures exploitation (positive when μn(x) > f*) and φ(Z) captures exploration (always positive, weighted by the PDF at the current best). The function EI(x) is smooth and differentiable with respect to x, enabling gradient-based inner optimisation. Numerical issues arise when σn(x) ≈ 0 in high-confidence regions, causing Z → ∞ and floating-point overflow; the LogEI transformation log(EI(x)) = log(σn(x)) + log(ZΦ(Z) + φ(Z)) avoids this by keeping computation in log-space throughout, using numerically stable implementations of log(ZΦ(Z) + φ(Z)).

    **[[Upper Confidence Bound]] (UCB)**: The UCB(x) = μn(x) + κn σn(x) form connects to [[Regret Minimisation]] theory: Srinivas et al. (2010) proved that with κn = √(2 log(t²π²/3δ)) at iteration t, the cumulative regret Rn = Σᵢ(f* − f(xᵢ)) grows as O(√(n γn log n)), where γn is the maximum information gain — a kernel-dependent quantity that is O(log²d n) for the RBF kernel and O(n^{d(d+1)/(2d+1)} log n) for the Matérn kernel. This establishes [[Bayesian Optimisation]] with UCB as a no-regret algorithm in the bandit sense, directly analogous to [[Upper Confidence Bound]] algorithms for finite-armed [[Bandit Algorithm|bandit]] problems and connecting to [[Reinforcement Learning]] exploration theory via the optimism-in-the-face-of-uncertainty (OFU) principle.

    **Monte Carlo Acquisition**: When the acquisition function has no analytical form (non-Gaussian surrogate, batched queries, constraints), the MC acquisition α_MC(x) = E_{f~P(f|Dn)}[utility(f, x)] is approximated as (1/S)Σₛ utility(f̃ₛ, x) where f̃ₛ are function samples drawn from the posterior using pathwise sampling or random Fourier features. Crucially, the reparameterisation trick enables gradient computation through the expectation: x̂ = argmax_x α_MC(x) can be found via gradient ascent when f̃ₛ(x) is differentiable in x, which holds for the standard GP with smooth [[Kernel Function]]. The qEI generalisation to batch evaluation defines the joint improvement of a batch X = {x₁,…,xq} as max(max_j f(xj) − f*, 0), captured by the joint predictive distribution over (f(x₁),…,f(xq)); MC estimation with a single joint sample provides an unbiased gradient estimator, enabling practical optimisation of batch acquisition with arbitrarily large q via gradient-based methods implemented in frameworks such as BoTorch.

    **Information-Theoretic Acquisition**: Entropy Search and its successors quantify the expected information gain about the location x* = argmax f(x) from evaluating at point x: IG(x; Dn) = H[p(x*|Dn)] − E_{y~p(y|x,Dn)}[H[p(x*|Dn ∪ {(x,y)})]]. This is intractable for continuous search spaces but is approximated via: (a) discrete approximation of p(x*) over a finite candidate set (Entropy Search, Hennig & Schuler, 2012); (b) conditioning on the optimal value f* rather than its location (Max-Value Entropy Search, Wang & Jegelka, 2017) — computing H[p(f*|Dn)] − E_{y}[H[p(f*|Dn ∪ {(x,y)})]] via Gumbel sampling; or (c) predictive entropy search over the expected information gain at the maximum (Hernández-Lobato et al., 2014). [[Information Theory]] acquisition functions often outperform EI in low-budget regimes and are particularly effective for multi-fidelity and constrained settings.

  ## Software and Tooling Ecosystem
    - **BoTorch** (Meta AI / PyTorch Foundation): The reference implementation for MC acquisition functions; provides GPU-accelerated qLogEI, qLogNEI, qLogNoisyEHVI, qLogNParEGO, and constrained variants; integrates with PyTorch autograd for gradient-based acquisition optimisation; underpins Meta's Ax platform. Version 0.9+ includes LogEI as the default acquisition, replacing numerically unstable vanilla EI.
    - **Ax** (Meta AI): High-level experiment management platform built on BoTorch; supports adaptive and bandit experiments, multi-fidelity BO, multi-objective Pareto search, and enterprise-scale parallel trials. Used internally at Meta for production model tuning.
    - **Optuna** (Preferred Networks, 2019): Tree-structured Parzen Estimator (TPE) — a distinct acquisition strategy that models p(y|x) via kernel density estimation over good and bad observation partitions; computationally lighter than GP-EI; handles categorical and integer [[Hyperparameter|hyperparameters]] natively; widely used in [[Deep Learning]] and [[Neural Architecture Search]] workflows.
    - **SMAC3** (AutoML Freiburg / Hannover): Random forest surrogate with expected improvement criterion; strong on mixed-type and high-dimensional algorithm configuration spaces; underpins Auto-Sklearn and BOHB; incorporates multi-fidelity racing strategies compatible with acquisition-guided search.
    - **GPyOpt** (Sheffield ML Group / GPy): The original GP-based BO library from the group of Neil Lawrence; now largely superseded by BoTorch but remains in use in academic settings and provides accessible reference implementations of EI, UCB, and entropy-search acquisition variants.
    - **Emukit** (Amazon): Modular [[Experimental Design]] toolkit supporting BO, multi-fidelity, and [[Active Learning]]; acquisition functions separated from surrogate models as composable objects, enabling custom combinations.
    - **Dragonfly** (Carnegie Mellon): Supports additive GP surrogates with acquisition in high-dimensional spaces (D > 100); implements domain-adaptive acquisition strategies for structured input spaces.

  ## Regulatory, Ethical, and Reproducibility Dimensions
    Acquisition functions and [[Bayesian Optimisation]] more broadly are gaining regulatory visibility as they underpin automated decision-making in scientific research and drug development. Key dimensions:
    - **EU AI Act (2024)**: Automated experimental design systems that make consequential decisions about which experiments to conduct in clinical drug development are potentially within scope of the Act's Article 6 requirements for high-risk AI systems. Systems that select compounds for synthesis in autonomous laboratory platforms may require conformity assessment if they operate in a safety-critical domain without meaningful human oversight at each step. The Act's requirements for transparency, traceability, and human oversight are broadly compatible with [[Bayesian Optimisation]] workflows where every query point and the acquisition criterion used to select it are logged.
    - **Reproducibility in ML Research**: The use of acquisition functions for [[Hyperparameter Tuning]] creates reproducibility challenges — different BO libraries, surrogate hyperparameters, and random seeds produce different optimal configurations, making it hard to attribute performance differences to architecture choices vs optimisation choices. The HPOBench and YAHPO benchmark suites (2021–2023) specifically address this by providing tabular datasets of pre-computed objective evaluations, enabling deterministic reproducibility of BO algorithm comparisons. The NeurIPS 2021 Black-Box Optimisation competition standardised evaluation protocols.
    - **Fairness in Scientific Automation**: When acquisition functions guide autonomous laboratory platforms that allocate experimental resources (synthesis capacity, assay slots), they implicitly prioritise certain regions of the search space over others. If the surrogate is biased (e.g. trained on historical data that over-represents certain chemical scaffolds), the acquisition function will inherit and amplify those biases. Addressing surrogate bias in autonomous scientific discovery is an emerging research area.
    - **Cost and Environmental Impact**: Large-scale [[Hyperparameter Tuning]] with [[Bayesian Optimisation]] in cloud ML platforms involves significant compute cost and energy consumption. Acquisition functions that are cost-aware — incorporating the compute cost of each evaluation into the acquisition score — can reduce total resource expenditure by 30–50% compared to budget-blind EI, as demonstrated in multi-fidelity BO frameworks. This is increasingly relevant given EU and UK net-zero commitments and the energy consumption of large [[Deep Learning]] training runs.
    - **Safety in Acquisition-Guided Experiments**: When BO selects physical experiments (dosing regimens, robot manoeuvres, reactor conditions), unsafe configurations may harm participants or equipment. Safe BO frameworks (SafeOPT, StageOPT) modify the acquisition criterion to only query points that are provably safe with high probability under the GP posterior, using the predictive variance to construct confidence sets around safety constraints. These frameworks are essential for clinical trial dose-escalation optimisation and [[Robotics]] controller tuning in physical systems.
    - **Open-Weight Acquisition Implementations**: BoTorch (Apache 2.0), Optuna (MIT), SMAC3 (BSD 3-clause), and Emukit (Apache 2.0) are all open-weight libraries with permissive licences, enabling academic and commercial use without restriction. This openness has driven rapid adoption across domains and facilitated the empirical research community's ability to benchmark and improve acquisition functions systematically.

  ## Industry Deployment and Commercial Landscape (2026)
    Acquisition functions are invisible to end-users but ubiquitous in production ML infrastructure and scientific automation platforms:
    - **Google Vizier**: Production Bayesian optimisation service handling billions of experiment requests annually across Google's AI research and product teams; uses GP-UCB and EI acquisition with custom kernel libraries; extended to multi-objective and constrained settings for hardware design optimisation (tensor processing units, custom ASICs).
    - **Meta Ax/BoTorch**: Open-source platform (Apache 2.0) used internally at Meta for production model hyperparameter tuning and externally by the research community; BoTorch v0.11 (2025) standardised on LogEI-family acquisition functions as defaults, deprecating vanilla EI; supports qEHVI multi-objective acquisition for simultaneous optimisation of multiple business metrics.
    - **AWS SageMaker Automatic Model Tuning**: Managed [[Hyperparameter Tuning]] service based on [[Bayesian Optimisation]] with EI acquisition over GP surrogates; scales to parallel trials across multiple EC2 instances; integrated with SageMaker Experiments for experiment tracking and reproducibility.
    - **Azure Hyperdrive**: Microsoft Azure's managed BO [[Hyperparameter Tuning]] service; used across Microsoft Research, OpenAI (Azure partnership), and enterprise customers; integrates with MLflow for experiment tracking.
    - **Optuna**: Open-source (MIT) [[Hyperparameter Tuning]] framework from Preferred Networks (Japan); uses Tree-structured Parzen Estimator (TPE) as default acquisition, with Gaussian Process-based acquisition available via the optuna-integration-botorch package; downloaded 5M+ times per month as of 2025; the most widely used BO framework in academic [[Deep Learning]] research.
    - **Autonomous Laboratory Platforms**: Chemify (Cambridge, UK) integrates BO with acquisition functions into a cloud-connected robotic chemistry platform; Ada (CMU) and the Self-Driving Lab for Photovoltaics (University of Toronto) use acquisition-guided BO for physical material synthesis. The UK's Rosalind Franklin Institute (Harwell, Oxfordshire) operates autonomous structural biology and drug discovery workflows where acquisition functions guide synchrotron beam time allocation across candidate crystallography experiments.
    - **Clinical Trial Optimisation**: Bayesian adaptive design platforms (FACTS by Berry Consultants, EAST by Cytel) incorporate acquisition-function-like logic for sequential dose-escalation and adaptive allocation in Phase I/II clinical trials; these systems are subject to FDA's Adaptive Design guidance (2019) and EMA's reflection paper on adaptive designs, requiring pre-specification of the decision rules — including the acquisition criterion — in the statistical analysis plan.
    - **High Energy Physics**: Acquisition-guided BO is used for detector calibration and hyperparameter tuning in machine learning classifiers for particle physics experiments at CERN; Bayesian Active Search methods using acquisition functions have been applied to BSM (Beyond the Standard Model) parameter space searches.

  ## Academic Context
    The intellectual lineage of acquisition functions spans statistics, operations research, and machine learning. Key foundational contributions:
    - Box, G. E. P., & Wilson, K. B. (1951). "On the experimental attainment of optimum conditions." *Journal of the Royal Statistical Society B*, 13(1), 1–45 — established sequential response surface methodology.
    - Lindley, D. V. (1956). "On a measure of information provided by an experiment." *Annals of Mathematical Statistics*, 27(4), 986–1005 — information-theoretic foundation for optimal experimental design.
    - Mockus, J. (1975). "On Bayesian methods for seeking the extremum." *Proceedings of IFIP Technical Conference on Optimization Techniques*. Springer — first formalisation of acquisition function in global optimisation.
    - Jones, D. R., Schonlau, M., & Welch, W. J. (1998). "Efficient global optimisation of expensive black-box functions." *Journal of Global Optimization*, 13(4), 455–492 — EGO / EI breakthrough paper, 4,000+ citations.
    - Srinivas, N., Krause, A., Kakade, S. M., & Seeger, M. (2010). "Gaussian process optimisation in the bandit setting: No regret and experimental design." *Proceedings of ICML 2010* — GP-UCB and regret bounds.
    - Brochu, E., Cora, V. M., & de Freitas, N. (2010). "A tutorial on Bayesian optimisation of expensive cost functions, with application to active user modelling and hierarchical reinforcement learning." *arXiv:1012.2599* — influential tutorial connecting BO to [[Active Learning]] and [[Reinforcement Learning]].
    - Snoek, J., Larochelle, H., & Adams, R. P. (2012). "Practical Bayesian optimisation of machine learning algorithms." *Advances in Neural Information Processing Systems 25* — systematic BO for DNN [[Hyperparameter Tuning]], launching widespread ML adoption.
    - Hernández-Lobato, J. M., Hoffman, M. W., & Ghahramani, Z. (2014). "Predictive entropy search for efficient global optimisation of black-box functions." *Advances in Neural Information Processing Systems 27* — entropy-search acquisition family.
    - Wilson, J. T., Hutter, F., & Deisenroth, M. P. (2018). "Maximising acquisition functions for Bayesian optimisation." *Advances in Neural Information Processing Systems 31* — MC acquisition with analytic gradients.
    - Balandat, M. et al. (2020). "BoTorch: A framework for efficient Monte-Carlo Bayesian optimisation." *Advances in Neural Information Processing Systems 33* — open-source foundation for modern acquisition function research.
    - Ament, S. et al. (2023). "Unexpected improvements to expected improvement for Bayesian optimisation." *Advances in Neural Information Processing Systems 36* — LogEI resolving numerical pathologies.
    - Yang, Y. et al. (2024). "Accelerating look-ahead in Bayesian optimisation: Multilevel Monte Carlo is all you need." *Proceedings of ICML 2024* — [[Variance Reduction]] in multi-step acquisition look-ahead.

  ## Current Landscape (2026)
    By 2026, acquisition functions are mature components of production ML infrastructure and remain active areas of foundational research. The BoTorch library (Meta/PyTorch Foundation) is the reference implementation, providing GPU-accelerated MC acquisition computation including qLogEI, qLogNoisyExpectedHypervolumeImprovement, qLogNParEGO, and constrained variants; the 2023–2024 LogEI family adoption has effectively resolved the numerical instability issues that plagued vanilla EI in industrial deployments, enabling reliable optimisation in moderately high-dimensional (D = 10–30) spaces.

    Multi-objective acquisition is a rapidly growing deployment area: in [[Drug Discovery]], systems from Evariste, Chemify, and Insilico Medicine routinely apply qEHVI acquisition over 3–6 objectives (binding affinity, selectivity, solubility, synthetic accessibility, toxicity), recovering over 90% of Pareto-optimal molecules after evaluating under 10% of candidate libraries. In [[Materials Science]], multi-fidelity acquisition combining cheap DFT calculations (surrogate evaluations) with expensive experimental measurements is the standard approach in autonomous laboratory platforms — best practices for this multi-fidelity regime were codified in a 2024 community review covering acquisition function selection, kernel design, and infill criteria.

    High-dimensional BO remains an open problem: standard [[Gaussian Process]] scaling is O(n³) in observations, limiting vanilla GP-based acquisition to several hundred evaluations before approximations (sparse GPs, inducing points) are needed. [[Trust Region Method]] approaches such as TuRBO (Eriksson et al., NeurIPS 2019) and LA-MCTS (Wang et al., NeurIPS 2020) decompose the space, enabling acquisition-guided search in D = 100–1000 dimensional spaces encountered in prompt optimisation and combinatorial chemistry. Neural surrogate models with acquisition functions — including deep ensembles, probabilistic networks, and [[Deep Kernel Learning]] composites — are extending BO to structured input spaces (graphs, sequences, images) where GPs are unnatural.

    A new research frontier is meta-learning acquisition functions: learning the acquisition function itself from related tasks using neural processes, transformers, or evolutionary code search. FunBO (2024) demonstrates that LLM-guided search can discover acquisition functions outperforming EI on standard benchmarks, raising the possibility that hand-designed acquisition families will be augmented or replaced by learned utility functions in specialist domains. Cost-aware and asynchronous acquisition (Standard Acquisition is Sufficient for Asynchronous BO, 2025) are increasingly important for large-scale parallel hyperparameter search infrastructure where workers complete at different times, requiring acquisition decisions without waiting for pending observations.

  ## UK Context
    The UK has made substantial contributions to the theory and application of acquisition functions across statistics, machine learning, and the physical sciences. The University of Sheffield's Machine Learning group, historically led by Neil Lawrence (now at the University of Cambridge and Google DeepMind), developed GPy and GPyOpt — among the first widely adopted open-source Bayesian optimisation toolkits — and published extensively on GP inference and acquisition function design. The Sheffield [[Machine Learning]] group's work on automated experimental design contributed to the Academic-Industrial convergence around lab automation and [[Drug Discovery]] that is now a major UK research priority.

    The Alan Turing Institute (ATI), based in London with partnerships across UK universities, has supported significant Bayesian optimisation and experimental design research, particularly in the context of data-centric AI and [[Materials Science]] acceleration — aligned with the UK Government's 2024 AI Opportunities Action Plan, which identified autonomous experimentation in life sciences as a national priority. The Wellcome Sanger Institute and UK Biobank have engaged with acquisition-guided experimental design in genomics, where querying which genetic perturbations to measure next is a direct application of the Bayesian active experiment framework.

    Imperial College London's Statistics department and the University of Oxford's Department of Statistics have contributed to the theoretical foundations of acquisition functions, particularly in the areas of information-theoretic acquisition (entropy search, max-value entropy search) and multi-task Bayesian optimisation — the latter relevant to the UK pharmaceutical industry, where [[Transfer Learning]] across related biological assays is standard practice in drug development campaigns. The Cambridge MLMI group has contributed to multi-fidelity acquisition and GP approximation methods relevant to large-scale BO deployments.

    In Northern England, the University of Manchester's Department of Computer Science has engaged with Bayesian optimisation for materials discovery in collaboration with the Henry Royce Institute (headquartered in Manchester), which supports advanced materials research relevant to aerospace, energy, and manufacturing sectors that are economically significant to the region. Leeds and Sheffield universities have applied acquisition-driven BO to industrial process optimisation in manufacturing, supported by the Made Smarter Innovation challenge — a UK government programme targeting smart manufacturing in the North of England.

  ## Future Directions (2026-2030)
    - **Foundation Model Surrogates with Acquisition Functions**: Replacing [[Gaussian Process]] surrogates with pre-trained transformer-based probabilistic models — neural processes, prior-fitted networks (PFNs), and in-context GP emulators such as TabPFN-BO — that generalise across task families without per-task kernel hyperparameter fitting; acquisition functions operating over these foundation surrogates inherit their representation power and cross-task [[Transfer Learning]] ability, enabling near-zero-shot BO on new domains.
    - **Multi-Fidelity and Multi-Source Acquisition**: Acquisition functions that jointly reason over heterogeneous information sources — cheap computational proxies (DFT, coarse simulation, short training runs), medium-fidelity assays (high-throughput screening), and expensive gold-standard experiments — will be essential for autonomous laboratory platforms; theoretical frameworks for cost-aware acquisition with arbitrary fidelity hierarchies (MFES, MF-MES, BOCA) are maturing and beginning to appear in production scientific automation platforms.
    - **Constrained and Safe Acquisition**: As [[Bayesian Optimisation]] is deployed in safety-critical settings (drug dosing, autonomous [[Robotics]] parameter tuning, clinical trial dose-escalation), acquisition functions incorporating hard constraints (joint torque limits, minimum viable response rate), chance constraints (P(violation) < δ), and safety certificates via GP confidence bounds (SafeOPT, StageOPT, GoSafe frameworks) will become standard; integration with formal verification frameworks for provably safe exploration is an open research direction.
    - **Combinatorial and Mixed-Space Acquisition**: Extending continuous GP-based acquisition to discrete and mixed (continuous + categorical + ordinal + graph-structured) search spaces relevant to [[Neural Architecture Search]], molecular design, and algorithm configuration; surrogate models for these spaces (SMAC, CASMOPOLITAN, BODi, HEBO) need acquisition functions matched to their posterior structure; discrete relaxations and Gumbel-softmax reparameterisation enable gradient-based acquisition optimisation in partially discrete spaces.
    - **Distributed and Asynchronous Acquisition**: Industrial-scale [[Bayesian Optimisation]] on hundreds or thousands of parallel workers (as in Google Vizier production) requires asynchronous acquisition decisions that handle pending (unevaluated) observations without waiting for their results; fantasing (treating pending evaluations as if they had returned the predicted mean) is the current standard; theoretical guarantees for asynchronous EI convergence (Zhan et al., 2025) confirm that standard acquisition functions remain effective in asynchronous settings without modification.
    - **Learned and Meta-Acquisition Functions**: Meta-learning approaches that learn acquisition functions from offline datasets of related tasks (DyBO, MetaBO); evolutionary search approaches (FunBO, 2024) that discover novel acquisition forms using large language model code generation; differentiable bi-level optimisation of the acquisition function itself against benchmark performance; hybrid human-AI acquisition design workflows where domain experts specify structural constraints on the acquisition form.
    - **Integration with [[Active Learning]] for Foundation Models**: Acquisition functions guiding the selection of fine-tuning and instruction data for large language and vision models — choosing which examples to label next to maximise downstream task performance — represents a convergence of Bayesian [[Experimental Design]] and [[Active Learning]] at industrial scale; core-set and diversity-based acquisition criteria are already used in data-centric AI workflows; GP-based acquisition over embedding spaces of unlabelled data is an emerging approach for high-quality data annotation prioritisation.
    - **Neuro-Symbolic and Structured Acquisition**: Incorporating domain knowledge (chemical valence rules, physics constraints, architectural feasibility constraints for [[Neural Architecture Search]]) directly into the acquisition function through structured priors or feasibility classifiers; enables principled exclusion of infeasible regions from the search, dramatically improving sample efficiency in highly constrained domains such as molecular synthesis or microarchitecture design.
    - **Energy-Aware and Cost-Conscious Acquisition**: As environmental sustainability becomes a mandatory consideration in large-scale ML infrastructure (EU Green Deal, UK Net Zero commitments), cost-aware acquisition functions that model the energy consumption (kWh) or carbon footprint of each evaluation as a cost dimension — and balance it against expected improvement — will become standard components of responsible [[AutoML]] platforms.

  ## Research and Literature

  1. Box, G. E. P., & Wilson, K. B. (1951). "On the experimental attainment of optimum conditions." *Journal of the Royal Statistical Society B*, 13(1), 1–45.
  2. Lindley, D. V. (1956). "On a measure of information provided by an experiment." *Annals of Mathematical Statistics*, 27(4), 986–1005.
  3. Mockus, J. (1975). "On Bayesian methods for seeking the extremum." *Proceedings of IFIP Technical Conference on Optimization Techniques*. Springer, Berlin.
  4. Jones, D. R., Schonlau, M., & Welch, W. J. (1998). "Efficient global optimisation of expensive black-box functions." *Journal of Global Optimization*, 13(4), 455–492.
  5. Srinivas, N., Krause, A., Kakade, S. M., & Seeger, M. (2010). "Gaussian process optimisation in the bandit setting: No regret and experimental design." *Proceedings of ICML 2010*, 1015–1022.
  6. Brochu, E., Cora, V. M., & de Freitas, N. (2010). "A tutorial on Bayesian optimisation of expensive cost functions." *arXiv:1012.2599*.
  7. Snoek, J., Larochelle, H., & Adams, R. P. (2012). "Practical Bayesian optimisation of machine learning algorithms." *Advances in Neural Information Processing Systems 25*, 2951–2959.
  8. Hernández-Lobato, J. M., Hoffman, M. W., & Ghahramani, Z. (2014). "Predictive entropy search for efficient global optimisation of black-box functions." *Advances in Neural Information Processing Systems 27*, 918–926.
  9. Hennig, P., & Schuler, C. J. (2012). "Entropy search for information-efficient global optimisation." *Journal of Machine Learning Research*, 13, 1809–1837.
  10. Wang, Z., & Jegelka, S. (2017). "Max-value entropy search for efficient Bayesian optimisation." *Proceedings of ICML 2017*, 3627–3635.
  11. Wilson, J. T., Hutter, F., & Deisenroth, M. P. (2018). "Maximising acquisition functions for Bayesian optimisation." *Advances in Neural Information Processing Systems 31*, 9884–9895.
  12. Wilson, A. G., & Adams, R. P. (2013). "Gaussian process kernels for pattern discovery and extrapolation." *Proceedings of ICML 2013*, 1067–1075.
  13. Wilson, A. G., Hu, Z., Salakhutdinov, R., & Xing, E. P. (2016). "Deep kernel learning." *Proceedings of AISTATS 2016*, 370–378.
  14. Frazier, P. I. (2018). "A tutorial on Bayesian optimisation." *arXiv:1807.02811*.
  15. Eriksson, D., Pearce, M., Gardner, J. R., Turner, R. D., & Poloczek, M. (2019). "Scalable global optimisation via local Bayesian optimisation." *Advances in Neural Information Processing Systems 32*, 5497–5508. (TuRBO)
  16. Balandat, M., Karrer, B., Jiang, D. R., Daulton, S., Letham, B., Wilson, A. G., & Bakshy, E. (2020). "BoTorch: A framework for efficient Monte-Carlo Bayesian optimisation." *Advances in Neural Information Processing Systems 33*, 21524–21538.
  17. Daulton, S., Balandat, M., & Bakshy, E. (2020). "Differentiable expected hypervolume improvement for parallel multi-objective Bayesian optimisation." *Advances in Neural Information Processing Systems 33*, 9851–9864.
  18. Garnett, R. (2023). *Bayesian Optimisation*. Cambridge University Press.
  19. Ament, S., Garg, S., Jacobson, D., Shuaibi, M., Raghunathan, A., Wood, B., Bisk, Y., & Ulissi, Z. (2023). "Unexpected improvements to expected improvement for Bayesian optimisation." *Advances in Neural Information Processing Systems 36*.
  20. Yang, Y., Marsland, S., & Stafford, T. (2024). "Accelerating look-ahead in Bayesian optimisation: Multilevel Monte Carlo is all you need." *Proceedings of ICML 2024*.
  21. Hvarfner, C., Stoll, D., Souza, A., Lindauer, M., Hutter, F., & Nardi, L. (2024). "FunBO: Discovering acquisition functions for Bayesian optimisation with FunSearch." *arXiv:2406.04824*.
  22. Eisenstein, M. et al. (2024). "Best practices for multi-fidelity Bayesian optimisation in materials and molecular research." *arXiv:2410.00544*. (PubMed 40702272)
  23. Zhao, H. et al. (2025). "Preferential multi-objective Bayesian optimisation for drug discovery." *arXiv:2503.16841*.
  24. Archetti, A., & Candelieri, A. (2019). *Bayesian Optimisation and Data Science*. Springer Briefs in Optimization.
  25. Swersky, K., Snoek, J., & Adams, R. P. (2013). "Multi-task Bayesian optimisation." *Advances in Neural Information Processing Systems 26*, 2004–2012.
  26. Springenberg, J. T. et al. (2016). "Bayesian optimisation with robust Bayesian neural networks." *Advances in Neural Information Processing Systems 29*, 4134–4142.
  27. Zhan, D., Meng, H., & Xing, H. (2025). "Standard acquisition is sufficient for asynchronous Bayesian optimisation." *arXiv:2603.13501*.

- ### Standards and Related Frameworks
  - No single standards body governs acquisition function design, but several benchmark and best-practice frameworks have emerged:
    - **HPOBench** (AutoML Freiburg/Hannover, 2021): standardised [[Hyperparameter Tuning]] benchmark suite providing pre-computed tabular results for deterministic BO algorithm comparison; enables reproducible evaluation of acquisition function strategies without re-running expensive training jobs.
    - **YAHPO (Yet Another Hyperparameter Optimisation benchmark, 2022)**: large-scale multi-fidelity HPO benchmark covering 14 benchmark suites and 700+ learning algorithm instances; supports evaluation of multi-fidelity acquisition strategies at scale.
    - **NeurIPS Black-Box Optimisation Competition**: annual benchmark competition (held 2019, 2020, 2021) driving advances in acquisition function design through competition; winning strategies have included custom EI variants, ensembled acquisition functions, and Gaussian process alternatives.
    - **MLflow Integration**: BoTorch experiments are commonly tracked via MLflow, enabling logging of acquisition function evaluations, surrogate fits, and recommended points for reproducibility; W&B (Weights & Biases) provides similar experiment tracking for [[Hyperparameter Tuning]] workflows.
    - **MFPML (Multi-Fidelity and Physics-based ML)**: community standards for multi-fidelity surrogate models in engineering design; informs acquisition function selection for aerospace, materials, and structural engineering BO applications.
    - **EU AI Act Alignment**: Automated experimental design systems using acquisition functions in high-risk domains (clinical trials, safety-critical robotics) require documentation of the acquisition criterion, surrogate model choice, and stopping conditions in system cards and conformity assessments; the principle of human oversight mandates that acquisition-guided autonomous systems provide interpretable justification for each query recommendation.

- ### Provenance
  - sources:: Jones et al. (1998) EGO paper; Balandat et al. (2020) BoTorch; Frazier (2018) tutorial arXiv:1807.02811; Garnett (2023) Bayesian Optimisation Cambridge UP; Ament et al. (2023) NeurIPS; Hvarfner et al. (2024) FunBO arXiv:2406.04824; Yang et al. (2024) ICML; Eisenstein et al. (2024) arXiv:2410.00544; Zhao et al. (2025) arXiv:2503.16841; Zhan et al. (2025) arXiv:2603.13501; botorch.readthedocs.io; botorch.org/docs/multi_objective; link.springer.com/article/10.1007/s41060-026-01037-5
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
