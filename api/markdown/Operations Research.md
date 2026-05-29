public:: true

# Operations Research
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:operations-research",
  "@type": "Page",
  "vc:slug": "operations-research",
  "title": "Operations Research",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:operations-research",
  "@type": "Class",
  "label": "Operations Research",
  "definition": "Operations research (OR) is an analytical discipline that applies advanced mathematical and computational methods — including linear programming, integer optimisation, stochastic modelling, and simulation — to support decision-making in complex systems. It originated during World War II to optimise military logistics and has since expanded to industrial, financial, and humanitarian domains. OR provides rigorous frameworks for formulating trade-off problems as constrained optimisation models, then solving them to global or near-global optimality using exact solvers or heuristic methods. Modern OR integrates machine learning for parameter estimation and reinforcement learning for sequential decision problems.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:optimisation", "label": "Optimisation"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:optimization-algorithm", "label": "Optimization Algorithm"},
      {"@id": "urn:ngm:class:constraint-solver", "label": "Constraint Solver"},
      {"@id": "urn:ngm:class:heuristic-methods", "label": "Heuristic Methods"},
      {"@id": "urn:ngm:class:monte-carlo-methods", "label": "Monte Carlo Methods"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:logistics-optimization", "label": "Logistics Optimization"},
      {"@id": "urn:ngm:class:supply-chain-management", "label": "Supply Chain Management"},
      {"@id": "urn:ngm:class:planning-and-scheduling", "label": "Planning and Scheduling"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:decision-support", "label": "Decision Support"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:simulation", "label": "Simulation"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Operations Research]] is the scientific discipline that constructs and solves mathematical models of complex decision problems — using [[Optimization Algorithm]] techniques such as linear programming, integer programming, and stochastic simulation — to prescribe optimal or near-optimal courses of action under resource and [[Constraint]] boundaries.

- ### Relationships
  - Operations research relies on [[Constraint Solver]] tools and [[Heuristic Methods]] to tackle NP-hard combinatorial problems, uses [[Monte Carlo Methods]] for stochastic uncertainty quantification, directly enables [[Logistics Optimization]] and [[Planning and Scheduling]] workflows, and increasingly integrates with [[Reinforcement Learning]] for sequential decision-making problems beyond the reach of classical exact solvers.

- ### Content
  - The discipline crystallised during World War II when Allied forces applied systematic quantitative methods to problems including convoy routing, bombing campaign planning, and supply chain allocation. Post-war, operations researchers formalised linear programming (Dantzig's simplex method, 1947) and extended it to integer, nonlinear, and stochastic variants, founding a mathematical canon that underpins modern industrial optimisation.

  - OR problems are formulated as objective functions subject to constraints: minimise cost, maximise throughput, or balance competing objectives across a feasible solution space. Exact methods such as branch-and-bound, cutting planes, and interior-point algorithms guarantee optimality for tractable problem sizes. Metaheuristics including simulated annealing, genetic algorithms, and tabu search provide good solutions for NP-hard instances where exact methods are computationally prohibitive.

  - Industrial impact spans airline crew scheduling, vehicle routing, hospital bed management, energy grid dispatch, financial portfolio optimisation, and humanitarian aid delivery. Google uses OR to optimise its data centre cooling, airlines save billions annually optimising fleet routing, and food banks apply stochastic OR models to match perishable donations to demand.

  - In 2024-2025, the integration of large language models with OR solvers is enabling natural-language problem specification and automated model construction. Reinforcement learning is proving competitive with classical OR on dynamic and partially observable problems such as real-time traffic routing and adaptive resource allocation in cloud computing. Quantum optimisation algorithms are beginning to address specific OR subclasses, though classical solvers remain dominant at operational scale.
