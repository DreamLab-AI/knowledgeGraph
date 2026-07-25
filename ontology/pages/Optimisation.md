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
  "definition": "Optimisation is the mathematical and computational discipline concerned with finding the best solution — maximum or minimum — of an objective function subject to given constraints, across a search space of possible decisions or parameter configurations. It encompasses deterministic methods (linear programming, convex optimisation, gradient-based search), stochastic methods (simulated annealing, evolutionary algorithms, Monte Carlo sampling), and learned methods (differentiable optimisation, meta-learning, neural combinatorial solvers). Optimisation is the theoretical core of machine learning training, operations research, control engineering, signal processing, and resource scheduling. The choice of optimisation algorithm fundamentally determines convergence speed, solution quality, and computational cost across all application domains.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:mathematical-foundations",
      "label": "Mathematical Foundations"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:optimization",
      "label": "Optimization"
    },
    {
      "@id": "urn:ngm:class:mathematical-optimisation",
      "label": "Mathematical Optimisation"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:optimal-control",
        "label": "Optimal Control"
      },
      {
        "@id": "urn:ngm:class:operations-research",
        "label": "Operations Research"
      },
      {
        "@id": "urn:ngm:class:hyperparameter-tuning",
        "label": "Hyperparameter Tuning"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:convex-optimisation",
        "label": "Convex Optimisation"
      },
      {
        "@id": "urn:ngm:class:bayesian-optimisation",
        "label": "Bayesian Optimisation"
      },
      {
        "@id": "urn:ngm:class:evolutionary-algorithm",
        "label": "Evolutionary Algorithm"
      },
      {
        "@id": "urn:ngm:class:linear-programming",
        "label": "Linear Programming"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:loss-function",
        "label": "Loss Function"
      },
      {
        "@id": "urn:ngm:class:objective-function",
        "label": "Objective Function"
      },
      {
        "@id": "urn:ngm:class:constraint",
        "label": "Constraint"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:calculus",
        "label": "Calculus"
      },
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      },
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:neural-network-training",
        "label": "Neural Network Training"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:portfolio-optimisation",
        "label": "Portfolio Optimisation"
      },
      {
        "@id": "urn:ngm:class:supply-chain-management",
        "label": "Supply Chain Management"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:satisfiability",
        "label": "Satisfiability"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:quantum-computation-paradigm",
        "label": "Quantum Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:numerical-methods",
        "label": "Numerical Methods"
      },
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      },
      {
        "@id": "urn:ngm:class:information-theory",
        "label": "Information Theory"
      }
    ]
  },
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - [[Optimisation]] is the formal discipline of finding the best element from a set of candidates according to some criterion, encompassing both continuous problems (minimising a [[Loss Function]] over real-valued parameters) and discrete problems (selecting an optimal combination from a finite feasible set). It forms the theoretical backbone of [[Machine Learning]] training — every model learns by solving an optimisation problem — as well as [[Operations Research]], [[Optimal Control]], finance, and engineering design. The discipline bridges [[Mathematical Foundations]] (calculus, [[Linear Algebra]], [[Probability Theory]]) with practical algorithms that must scale to high-dimensional, noisy, or black-box problem settings. Modern optimisation research increasingly blends classical theory with learned heuristics, producing hybrid approaches that outperform either paradigm alone.

- ### Overview
  - Optimisation asks: given an objective function f(x) and a feasible set X, find x* ∈ X such that f(x*) ≤ f(x) for all x ∈ X (minimisation) or ≥ (maximisation).
  - The structure of f and X determines which algorithms are applicable and what guarantees they offer.
  - When f is convex and X is a convex set, any local minimum is a global minimum; polynomial-time algorithms exist for the most common convex problem classes.
  - When f is non-convex — the generic case in [[Deep Learning]] — theoretical guarantees weaken, but empirical performance of [[Gradient Descent]] variants is remarkably good in practice.
  - The computational complexity of an optimisation problem is classified by whether it falls into P, NP, or harder classes; many combinatorial problems are NP-hard, motivating approximation algorithms and metaheuristics.
  - The history of optimisation spans Fermat's method of adequality, Newton's calculus, Lagrange multipliers, Dantzig's simplex method (1947), Karmarkar's interior-point method (1984), and the deep learning era's stochastic first-order methods.

- ### Key Components and Methods
  - #### Continuous Optimisation
    - **[[Gradient Descent]]**: iteratively moves in the direction of steepest descent; the dominant paradigm in [[Neural Network Training]].
      - Stochastic gradient descent (SGD): estimates gradient on mini-batches, enabling large-scale training.
      - Adaptive methods: Adam, AdamW, RMSProp — adjust learning rates per-parameter using gradient moment statistics.
      - Second-order methods: Newton's method, L-BFGS — use Hessian or its approximation for faster convergence but higher memory cost.
    - **[[Convex Optimisation]]**: problems where the feasible set and objective are both convex.
      - [[Linear Programming]] (LP): optimise a linear objective over a polyhedral feasible set; solved efficiently by simplex or interior-point methods.
      - Quadratic programming (QP): quadratic objective, linear constraints; ubiquitous in [[Reinforcement Learning]] (policy optimisation) and support vector machines.
      - Semidefinite programming (SDP): matrix variable constrained to be positive semidefinite; key in robust control and relaxations of combinatorial problems.
      - Disciplined convex programming frameworks (CVX, CVXPY) automate verification of convexity.
    - **[[Bayesian Optimisation]]**: builds a probabilistic surrogate model (typically a Gaussian process) of the objective and balances exploration and exploitation via acquisition functions (EI, UCB).
      - Ideal for [[Hyperparameter Tuning]] and expensive black-box experiments with few evaluations.
    - **Differentiable Optimisation**: embeds an optimisation solver as a differentiable layer inside a neural network, enabling end-to-end learning of decision-making pipelines.

  - #### Discrete and Combinatorial Optimisation
    - **Integer programming (IP / MIP)**: extends LP with integrality constraints; solved via branch-and-bound, cutting planes, or branch-and-cut.
    - **Constraint programming**: declarative specification of constraints; inference-based solving via propagation.
    - **Graph algorithms**: shortest paths (Dijkstra, Bellman-Ford), minimum spanning trees, network flows — closed-form polynomial-time solutions for structured problems.
    - **Dynamic programming**: exploits optimal substructure; decomposes problems into overlapping sub-problems (Bellman equation in [[Reinforcement Learning]]).

  - #### Metaheuristics and Stochastic Methods
    - **[[Evolutionary Algorithm]]s**: population-based search inspired by natural selection; genetic algorithms, CMA-ES, NSGA-II for multi-objective problems.
    - **Simulated annealing**: probabilistic hill-climbing that accepts worse solutions with decreasing probability, escaping local optima.
    - **Particle swarm optimisation (PSO)**: swarm-based continuous search with social and cognitive velocity updates.
    - **Monte Carlo methods**: random sampling to approximate integrals and expectations; underpins MCMC-based inference and [[Reinforcement Learning]] policy evaluation.

  - #### Multi-Objective Optimisation
    - When multiple conflicting objectives must be balanced simultaneously, the solution is a Pareto frontier rather than a single point.
    - Scalarisation (weighted sum, epsilon-constraint) converts multi-objective to single-objective.
    - Evolutionary multi-objective algorithms (NSGA-II, MOEA/D) approximate the Pareto set.
    - Applications: engineering design trade-offs, [[Portfolio Optimisation]] (risk vs return), [[Reinforcement Learning]] reward shaping.

- ### Applications and Use Cases
  - #### Machine Learning and AI
    - Training every modern neural network — from CNNs to transformers — is solved as an unconstrained non-convex optimisation problem via stochastic first-order methods.
    - [[Hyperparameter Tuning]] for model selection uses [[Bayesian Optimisation]] or random search over the hyperparameter space.
    - Neural architecture search (NAS) applies discrete and continuous optimisation to find efficient network topologies.
    - [[Reinforcement Learning]] frames sequential decision-making as policy optimisation via policy gradient or temporal difference methods.
  - #### Operations Research and Logistics
    - [[Supply Chain Management]]: vehicle routing, warehouse location, inventory management — all framed as integer programmes.
    - Airline scheduling: crew pairing and aircraft assignment solved as large-scale MIP problems daily by airlines.
    - Telecommunications: network flow optimisation for bandwidth allocation and routing.
  - #### Finance
    - [[Portfolio Optimisation]]: Markowitz mean-variance framework minimises portfolio variance subject to expected return constraints.
    - Algorithmic trading: execution optimisation minimises market impact; option pricing uses stochastic optimisation (stochastic control).
    - Risk management: VaR and CVaR minimisation via convex methods.
  - #### Engineering and Control
    - [[Optimal Control]]: computes control inputs to minimise a performance criterion over a trajectory (LQR, MPC).
    - Model predictive control (MPC): solves a constrained QP at each time step in real-time for industrial processes and autonomous vehicles.
    - Structural design: topology optimisation finds optimal material distributions for mechanical components under stress constraints.
    - VLSI design: placement and routing of circuits are formulated as discrete optimisation problems.
  - #### Scientific Computing
    - Parameter estimation and curve fitting: least-squares optimisation via Gauss-Newton or Levenberg-Marquardt.
    - Molecular dynamics: energy minimisation finds stable molecular conformations for drug discovery.
    - [[Quantum Computing]]: variational quantum eigensolvers (VQE) and QAOA apply hybrid quantum-classical optimisation to combinatorial problems.
  - #### Spatial Computing and Rendering
    - Real-time rendering uses optimised rasterisation pipelines and GPU-parallelised shaders.
    - 3D reconstruction (SLAM, NeRF training) requires non-linear least-squares optimisation over scene parameters.
    - Mesh decimation and UV parameterisation in [[Spatial Computing]] workflows are formulated as geometric optimisation problems.

- ### Landscape of Optimisation Algorithms
  - | Category | Examples | Best for |
  - | First-order gradient | SGD, Adam, AdaGrad | Large-scale ML training |
  - | Second-order | L-BFGS, Newton-CG | Medium-scale, convex or smooth problems |
  - | Zeroth-order / black-box | Bayesian Opt, CMA-ES | Expensive evaluations, non-differentiable objectives |
  - | Linear programming | Simplex, interior-point | Linear objectives and constraints |
  - | Mixed-integer | Branch-and-cut, CPLEX | Combinatorial, scheduling, routing |
  - | Evolutionary | Genetic algorithms, NSGA-II | Multi-objective, rugged landscapes |
  - | Quantum | QAOA, VQE | Combinatorial (research stage) |

- ### Relationships
  - partOf:: [[Mathematical Foundations]]
  - enables:: [[Machine Learning]]
  - enables:: [[Deep Learning]]
  - enables:: [[Optimal Control]]
  - enables:: [[Operations Research]]
  - enables:: [[Hyperparameter Tuning]]
  - hasPart:: [[Gradient Descent]]
  - hasPart:: [[Convex Optimisation]]
  - hasPart:: [[Bayesian Optimisation]]
  - hasPart:: [[Evolutionary Algorithm]]
  - hasPart:: [[Linear Programming]]
  - requires:: [[Loss Function]]
  - requires:: [[Objective Function]]
  - requires:: [[Constraint]]
  - uses:: [[Calculus]]
  - uses:: [[Linear Algebra]]
  - uses:: [[Probability Theory]]
  - supports:: [[Neural Network Training]]
  - supports:: [[Reinforcement Learning]]
  - supports:: [[Portfolio Optimisation]]
  - supports:: [[Supply Chain Management]]
  - contrastsWith:: [[Satisfiability]]
  - contrastsWith:: [[Simulation]]
  - bridges-to:: [[Quantum Computing]]
  - bridges-to:: [[Distributed Computing]]
  - relatedTo:: [[Numerical Methods]]
  - relatedTo:: [[Game Theory]]
  - relatedTo:: [[Information Theory]]

- ### Standards and Context
  - **Software frameworks**: SciPy (`scipy.optimize`), CVXPY (disciplined convex programming), Optuna and Ray Tune ([[Hyperparameter Tuning]]), OR-Tools (Google, combinatorial).
  - **Benchmark suites**: BBOB (black-box optimisation benchmarking), MIPLIB (mixed-integer problem library), CUTEst (nonlinear optimisation).
  - **Academic foundations**: SIAM Journal on Optimization, Mathematical Programming, Journal of Optimization Theory and Applications.
  - **Industry standards**: ISO/IEC standards for numerical computation; BLAS/LAPACK for dense [[Linear Algebra]] kernels underpinning most solvers.
  - **Quantum optimisation**: NIST, IBM Quantum, and Google Quantum AI publish results on quantum advantage for combinatorial optimisation; QAOA circuits target MaxCut and related graph problems.
  - **Hardware acceleration**: GPU-parallel optimisation (CUDA kernels for [[Gradient Descent]]) and tensor cores for matrix operations are now standard in ML training infrastructure.

- ### Provenance
  - sources:: Nocedal & Wright — "Numerical Optimization" (2nd ed.); Boyd & Vandenberghe — "Convex Optimization"; Sutton & Barto — "Reinforcement Learning: An Introduction"; Goodfellow, Bengio & Courville — "Deep Learning"
  - updated:: 2026-06-13
