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
  "definition": "Bayesian Optimisation is a sequential, sample-efficient strategy for optimising expensive black-box objective functions by building a probabilistic surrogate model — most commonly a Gaussian process — over the function's input space, then using an acquisition function to decide which point to evaluate next by trading off exploration of uncertain regions against exploitation of known optima. Unlike grid search or random search, it accumulates knowledge about the objective between evaluations, making it particularly valuable when each evaluation is computationally or financially costly, such as neural architecture search, hyperparameter tuning, and laboratory experiment design. The method produces a posterior distribution over the objective that quantifies uncertainty and guides efficient convergence.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:optimisation", "label": "Optimisation"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:bayesian-inference", "label": "Bayesian Inference"},
      {"@id": "urn:ngm:class:acquisition-function", "label": "Acquisition Function"},
      {"@id": "urn:ngm:class:hyperparameter-tuning", "label": "Hyperparameter Tuning"},
      {"@id": "urn:ngm:class:optimization-algorithm", "label": "Optimization Algorithm"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:neural-architecture-search", "label": "Neural Architecture Search"},
      {"@id": "urn:ngm:class:auto-ml", "label": "AutoML"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:machine-learning-model", "label": "Machine Learning Model"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Bayesian Optimisation]] is a probabilistic, sample-efficient global optimisation strategy that fits a surrogate model (typically a Gaussian process grounded in [[Bayesian Inference]]) to a costly objective function and selects the next query point via an [[Acquisition Function]] that balances exploration and exploitation, making it the method of choice for [[Hyperparameter Tuning]] and [[Neural Architecture Search]] in [[Machine Learning]].

- ### Relationships
  - Bayesian Optimisation sits within the broader class of [[Optimisation]] methods and is distinguished from gradient-based optimisers by its reliance on probabilistic models rather than derivative information. It applies [[Bayesian Inference]] to maintain a posterior belief over the objective, updated after each expensive evaluation. The [[Acquisition Function]] — expected improvement, upper confidence bound, or Thompson sampling — translates this posterior into a sampling decision. The technique directly enables [[Auto-ML]] pipelines and [[Neural Architecture Search]] workflows, and supports [[Machine Learning]] practitioners who need to tune [[Machine Learning Model]] configurations with limited compute budgets.

- ### Content
  - Bayesian Optimisation has roots in the geostatistics community, where kriging — a Gaussian-process interpolation technique developed by Danie Krige in the 1950s — served as the foundational surrogate model. The method was adapted for global optimisation by Jonas Mockus in the 1970s and formalised in its modern machine-learning form by Brochu, Cora, and de Freitas in their influential 2010 tutorial. Its adoption in machine learning accelerated once researchers recognised that training large neural networks made objective evaluations prohibitively expensive, creating an ideal use case for sample-efficient optimisation.

  - The algorithm proceeds in a loop: (1) fit a surrogate probabilistic model — usually a Gaussian process, though random forests and Bayesian neural networks are also used — to all previous objective evaluations; (2) maximise an acquisition function over the input space to select the next candidate point; (3) evaluate the true objective at that point; (4) update the surrogate with the new observation and repeat. The acquisition function encodes the exploration–exploitation trade-off: expected improvement queries points where the expected gain over the current best is highest, while upper confidence bound weights both the predictive mean and uncertainty. In high-dimensional spaces, the surrogate becomes computationally expensive to fit, motivating variants such as random embeddings, sparse Gaussian processes, and factorised multi-task models.

  - Bayesian Optimisation's significance lies in its ability to find near-optimal solutions with far fewer evaluations than alternative search strategies, typically reducing hyperparameter search time by one to two orders of magnitude compared to random search for well-chosen priors. Tools such as GPyOpt, Ax, Optuna, and BoTorch have made it accessible to practitioners. Beyond machine learning, the technique is applied in drug discovery (where each synthesis is expensive), materials science, robotics controller design, and A/B testing frameworks where experiment capacity is limited.

  - In 2024-2025, Bayesian Optimisation continues to evolve with integration into large-scale neural architecture search pipelines and multi-objective extensions for Pareto-front discovery. The rise of foundation models has created new use cases in prompt optimisation and adapter fine-tuning schedules. Research frontiers include combining Bayesian Optimisation with reinforcement learning, scaling to thousands of dimensions through deep kernel methods, and incorporating domain knowledge via structured priors. Despite the growth of gradient-based AutoML alternatives, Bayesian Optimisation retains a unique role wherever evaluation budgets are severely constrained.