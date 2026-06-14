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
  "vc:outboundWikilinks": [],
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
  "subClassOf": [{"@id": "urn:ngm:class:optimization-algorithm", "label": "Optimization Algorithm"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:probabilistic-model", "label": "Probabilistic Model"},
      {"@id": "urn:ngm:class:bayesian-inference", "label": "Bayesian Inference"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:bayesian-optimisation", "label": "Bayesian Optimisation"},
      {"@id": "urn:ngm:class:hyperparameter-tuning", "label": "Hyperparameter Tuning"},
      {"@id": "urn:ngm:class:neural-architecture-search", "label": "Neural Architecture Search"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:hyperparameter", "label": "Hyperparameter"},
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning Discipline"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - An acquisition function is a mathematical utility that scores candidate evaluation points by balancing [[Bayesian Optimisation]] exploration against exploitation, guiding sequential experimental design using a [[Probabilistic Model]] surrogate.

- ### Relationships
  - Acquisition functions sit at the heart of [[Bayesian Optimisation]], using a [[Probabilistic Model]] (typically a Gaussian process) as the surrogate that captures uncertainty over the objective landscape. They directly drive [[Hyperparameter Tuning]] workflows and [[Neural Architecture Search]] by identifying the next configuration to trial. The choice of acquisition function shape is a hyperparameter itself, connecting to [[Hyperparameter]] selection, and the broader methodology belongs firmly within [[Machine Learning Discipline]] experimental design.

- ### Content
  - Acquisition functions emerged from the statistical design of experiments literature and were formalised in the context of response surface methodology in the 1970s. They became central to the modern Bayesian optimisation framework following Jones et al.'s 1998 Efficient Global Optimisation paper, which popularised Expected Improvement (EI). The core intuition is that evaluating a black-box function is expensive, so a cheap-to-evaluate surrogate should decide where to query next.

  - A typical workflow fits a Gaussian process to observed input–output pairs, producing a mean and variance estimate over the input space. The acquisition function then combines these estimates into a single scalar—EI integrates the probability-weighted improvement over the current best; UCB (Upper Confidence Bound) adds a tunable multiple of the standard deviation to the mean; Thompson sampling draws a random function from the posterior and returns its maximiser. The acquisition function is maximised (cheaply, using gradient methods or grid search) to yield the next evaluation point.

  - Acquisition functions are significant because they make Bayesian optimisation sample-efficient, requiring far fewer evaluations than random search or grid search to find near-optimal configurations. This is critical in [[Machine Learning Discipline]] when objective evaluation is expensive—training large models, running physical simulations, or conducting drug-screening assays. They underpin AutoML systems and are the default strategy for [[Hyperparameter Tuning]] in frameworks such as Optuna, SMAC, and BoTorch.

  - By 2024–2025 acquisition functions are being extended to handle parallel batched evaluation (batch EI, batch UCB), multi-objective settings (Pareto-aware acquisition), and high-dimensional spaces through additive or trust-region decompositions. Integration with deep neural surrogate models (deep kernel learning, Bayesian neural networks) is broadening applicability beyond the small-to-medium dimensional regimes where Gaussian processes traditionally dominate. Cost-aware acquisition that accounts for heterogeneous evaluation costs is an active research frontier.