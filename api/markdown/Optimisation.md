public:: true

# Optimisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:optimisation",
  "@type": "Page",
  "vc:slug": "optimisation",
  "title": "Optimisation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:optimisation",
  "@type": "Class",
  "label": "Optimisation",
  "definition": "Optimisation is the mathematical and computational discipline concerned with finding the best solution — maximum or minimum — of an objective function subject to given constraints, across a search space of possible decisions or parameter configurations. It encompasses deterministic methods (linear programming, convex optimisation, gradient-based methods), stochastic methods (simulated annealing, evolutionary algorithms, Monte Carlo), and learned methods (differentiable optimisation, meta-learning). Optimisation is the theoretical core of machine learning training, operations research, control engineering, and resource scheduling. The choice of optimisation algorithm fundamentally determines convergence speed, solution quality, and computational cost.",
  "domain": "science",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:mathematical-foundations", "label": "Mathematical Foundations"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:optimal-control", "label": "Optimal Control"},
      {"@id": "urn:ngm:class:logistics-optimization", "label": "Logistics Optimization"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:optimization-algorithm", "label": "Optimization Algorithm"},
      {"@id": "urn:ngm:class:gradient-descent", "label": "Gradient Descent"},
      {"@id": "urn:ngm:class:bayesian-optimisation", "label": "Bayesian Optimisation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:loss-function", "label": "Loss Function"},
      {"@id": "urn:ngm:class:mathematical-reasoning", "label": "Mathematical Reasoning"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Optimisation]] is the formal discipline of minimising or maximising an objective function over a feasible domain, providing the theoretical and algorithmic backbone of [[Machine Learning Discipline]] training (through [[Gradient Descent]]), [[Optimal Control]], and combinatorial [[Logistics Optimization]] problems.

- ### Relationships
  - [[Optimisation]] sits within [[Mathematical Foundations]] and connects directly to [[Optimization Algorithm]] implementations. Continuous differentiable optimisation — using first and second derivative information — powers deep learning through variants of [[Gradient Descent]] including Adam and RMSProp. [[Bayesian Optimisation]] applies probabilistic surrogate models to optimise expensive black-box functions, widely used for hyperparameter search. The [[Loss Function]] is the objective that machine learning optimisers minimise. [[Optimal Control]] theory applies optimisation to dynamical systems, underpinning robotics, autonomous vehicles, and model predictive control. [[Logistics Optimization]] applies combinatorial and linear programming to supply chain and scheduling problems.

- ### Content
  - The history of optimisation spans antiquity (isoperimetric problems, Fermat's method of adequality) through Newton's calculus, Lagrange multipliers, and the 20th century revolutions of linear programming (Dantzig's simplex method, 1947), convex analysis (Fenchel, Rockafellar), and dynamic programming (Bellman). The post-war explosion of operations research institutionalised optimisation as a practical engineering discipline, applied to logistics, finance, and military resource allocation. The development of interior-point methods by Karmarkar (1984) and the subsequent polynomial-time algorithms for convex programs transformed what was computationally feasible.

  - Modern optimisation subdivides into convex and non-convex problems. Convex problems admit globally optimal solutions efficiently; any local minimum is global, and gradient methods converge reliably. Non-convex problems — which include almost all deep learning training objectives — may have many local minima, saddle points, and plateaus. Empirically, gradient descent finds surprisingly good solutions in overparameterised neural networks due to phenomena studied under the lens of loss landscape geometry and implicit regularisation. Stochastic gradient descent (SGD) and its adaptive variants (Adam, AdamW) are the workhorses of deep learning because they scale to billions of parameters and find flat minima with good generalisation properties.

  - The application landscape of optimisation is vast. In machine learning it determines model convergence and generalisation. In control engineering, model predictive control (MPC) solves constrained real-time optimisation problems to regulate industrial processes and autonomous vehicles. In finance, portfolio optimisation balances risk-return tradeoffs under constraints. In logistics, integer programming schedules routes and allocates resources across global supply chains. In hardware design, placement and routing of circuits are framed as discrete optimisation problems.

  - In 2024–2025, optimisation research is driven by three frontiers: (1) training extremely large foundation models efficiently, motivating distributed and memory-efficient optimisers; (2) combining differentiable optimisation layers inside neural networks to produce end-to-end learnable decision systems; and (3) quantum-classical hybrid algorithms for combinatorial optimisation, where quantum annealing and variational quantum eigensolvers are explored as potential speedups on hard NP problems. The Adam optimiser variants remain dominant in practice despite numerous proposed improvements, reflecting the gap between theoretical guarantees and empirical performance in large-scale deep learning.