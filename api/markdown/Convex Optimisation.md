public:: true

# Convex Optimisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ad14db76317906bcda2611cf705aa4ee1016c50df25e4af0773da6b97ff54132",
  "@type": "Page",
  "vc:slug": "convex-optimisation",
  "title": "Convex Optimisation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:optimisation",
      "vc:label": "Optimisation"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:numerical-methods",
      "vc:label": "Numerical Methods"
    },
    {
      "@id": "urn:visionflow:linked:functional-analysis",
      "vc:label": "Functional Analysis"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Convex Optimisation"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:convex-optimisation",
  "@type": "Class",
  "label": "Convex Optimisation",
  "definition": "Convex optimisation is the mathematical discipline concerned with minimising convex objective functions over convex feasible sets, exploiting the fundamental property that every local minimum is also a global minimum. This structural guarantee enables the design of polynomial-time algorithms — such as interior-point methods, subgradient descent, and proximal methods — that reliably find exact or near-exact solutions. The field is grounded in convex analysis and duality theory (Lagrangian and Fenchel duality), and underpins a vast range of applications spanning machine learning, signal processing, control systems, finance, and operations research. Canonical problem classes include linear programming, quadratic programming, second-order cone programming, and semidefinite programming.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:optimisation",
      "label": "Optimisation"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:convex-programming",
      "label": "Convex Programming"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:linear-programming",
        "label": "Linear Programming"
      },
      {
        "@id": "urn:ngm:class:quadratic-programming",
        "label": "Quadratic Programming"
      },
      {
        "@id": "urn:ngm:class:semidefinite-programming",
        "label": "Semidefinite Programming"
      },
      {
        "@id": "urn:ngm:class:second-order-cone-programming",
        "label": "Second-Order Cone Programming"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:mathematical-optimisation",
        "label": "Mathematical Optimisation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:convex-analysis",
        "label": "Convex Analysis"
      },
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      },
      {
        "@id": "urn:ngm:class:calculus",
        "label": "Calculus"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:support-vector-machine",
        "label": "Support Vector Machine"
      },
      {
        "@id": "urn:ngm:class:lasso-regression",
        "label": "LASSO Regression"
      },
      {
        "@id": "urn:ngm:class:optimal-control",
        "label": "Optimal Control"
      },
      {
        "@id": "urn:ngm:class:portfolio-optimisation",
        "label": "Portfolio Optimisation"
      },
      {
        "@id": "urn:ngm:class:compressed-sensing",
        "label": "Compressed Sensing"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:duality-theory",
        "label": "Duality Theory"
      },
      {
        "@id": "urn:ngm:class:numerical-methods",
        "label": "Numerical Methods"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:interior-point-method",
        "label": "Interior-Point Method"
      },
      {
        "@id": "urn:ngm:class:proximal-gradient-method",
        "label": "Proximal Gradient Method"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:lagrange-multipliers",
        "label": "Lagrange Multipliers"
      },
      {
        "@id": "urn:ngm:class:kkt-conditions",
        "label": "KKT Conditions"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:non-convex-optimisation",
        "label": "Non-Convex Optimisation"
      },
      {
        "@id": "urn:ngm:class:combinatorial-optimisation",
        "label": "Combinatorial Optimisation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:functional-analysis",
        "label": "Functional Analysis"
      },
      {
        "@id": "urn:ngm:class:stochastic-optimisation",
        "label": "Stochastic Optimisation"
      },
      {
        "@id": "urn:ngm:class:operations-research",
        "label": "Operations Research"
      }
    ]
  },
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:convex-optimisation:cb3112e93094",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ad14db76317906bcda2611cf705aa4ee1016c50df25e4af0773da6b97ff54132"
  },
  "vc:resolutions": [
    {
      "raw": "[[Optimisation]]",
      "resolved": "urn:visionflow:linked:optimisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Numerical Methods]]",
      "resolved": "urn:visionflow:linked:numerical-methods",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Functional Analysis]]",
      "resolved": "urn:visionflow:linked:functional-analysis",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Convex optimisation is the mathematical study of minimising [[Convex Function]]s over [[Convex Set]]s, characterised by the property that any local minimum is automatically a global minimum. This tractability guarantee — absent in general [[Non-Convex Optimisation]] — permits the construction of reliable polynomial-time algorithms grounded in [[Duality Theory]] and [[KKT Conditions]]. The discipline is a pillar of applied mathematics and underpins much of modern [[Machine Learning]], [[Signal Processing]], [[Optimal Control]], and [[Operations Research]].

- ### Overview
  - Convex optimisation studies the canonical problem: minimise f(x) subject to x ∈ C, where f is a convex function and C is a convex set.
  - The key structural insight is that convexity guarantees a single bowl-shaped loss landscape: any locally optimal solution is globally optimal, which removes the search complexity endemic to [[Non-Convex Optimisation]].
  - The field emerged from linear programming in the 1940s (Dantzig's Simplex Method) and matured through the development of interior-point methods (Karmarkar, 1984; Nesterov and Nemirovskii, 1994), which established polynomial-time solvability for broad problem families.
  - Practical solvers (CVXPY, MOSEK, Gurobi, SCS) allow practitioners to specify problems in disciplined convex form and automatically select appropriate algorithms.
  - Convex optimisation is considered a mature field with textbook foundations (Boyd & Vandenberghe, *Convex Optimization*, 2004) and production-grade open-source tooling.

- ### Key Components
  - #### Convexity Fundamentals
    - **[[Convex Set]]**: a set C ⊆ ℝⁿ where for any two points x, y ∈ C and λ ∈ [0,1], the point λx + (1−λ)y ∈ C (closed under convex combinations).
    - **[[Convex Function]]**: a function f where f(λx + (1−λ)y) ≤ λf(x) + (1−λ)f(y) — the chord lies above the curve.
    - **[[Epigraph]]**: the epigraph of f (the set of points above the graph) is convex iff f is convex, linking geometric and analytical definitions.
    - **[[Subdifferential]]**: generalisations of the gradient to non-smooth convex functions, enabling optimality conditions without differentiability.
  - #### Problem Classes
    - **[[Linear Programming]] (LP)**: minimise cᵀx subject to Ax = b, x ≥ 0. The foundation of [[Operations Research]]; solved by Simplex or interior-point methods.
    - **[[Quadratic Programming]] (QP)**: convex quadratic objective with linear constraints. Encompasses [[Support Vector Machine]] training.
    - **[[Second-Order Cone Programming]] (SOCP)**: generalises LP and QP; includes robust linear programming and portfolio problems with uncertainty.
    - **[[Semidefinite Programming]] (SDP)**: optimise a linear objective over the cone of positive semidefinite matrices; powerful for relaxations of combinatorial problems and control.
    - **[[Geometric Programming]]**: minimise posynomial objectives over monomial equality constraints; arises in circuit design and engineering.
  - #### Duality and Optimality
    - **[[Lagrange Multipliers]]**: dual variables associated with constraints; encode shadow prices and feasibility certificates.
    - **[[KKT Conditions]]**: Karush-Kuhn-Tucker conditions provide necessary and (under convexity and constraint qualifications) sufficient conditions for global optimality.
    - **[[Duality Theory]] (Lagrangian / Fenchel)**: every convex problem has a dual; strong duality (zero duality gap) holds under [[Slater's Condition]], enabling dual-based algorithms.
    - **[[Conjugate Function]]**: Fenchel conjugate f*(y) = sup_x{⟨y,x⟩ − f(x)}; central to proximal methods and splitting algorithms.
  - #### Algorithms
    - **[[Gradient Descent]]**: iterative first-order method; converges at O(1/k) for smooth convex objectives; O(1/k²) with Nesterov acceleration ([[Accelerated Gradient Descent]]).
    - **[[Interior-Point Method]]**: barrier and primal-dual methods traverse the interior of the feasible set; polynomial-time complexity; industry standard for medium-scale problems.
    - **[[Proximal Gradient Method]]**: handles composite objectives f(x) = g(x) + h(x) where h is non-smooth but proximal-tractable (e.g., ℓ₁ norm); includes ISTA, FISTA.
    - **[[Alternating Direction Method of Multipliers]] (ADMM)**: decomposes large problems into smaller subproblems; favoured for distributed and large-scale settings.
    - **[[Ellipsoid Method]]**: theoretically polynomial but practically slow; historically important for establishing polynomial-time solvability of LP.
    - **[[Subgradient Method]]**: extends gradient descent to non-differentiable convex functions at the cost of slower convergence.
    - **[[Frank-Wolfe Algorithm]]**: projection-free conditional gradient method; useful for problems with expensive projections (e.g., matrix factorisation).

- ### Applications and Use Cases
  - #### Machine Learning
    - **[[Support Vector Machine]]**: the SVM training problem is a quadratic programme; convexity guarantees the unique maximum-margin separator.
    - **[[LASSO Regression]]** and Ridge Regression: ℓ₁ and ℓ₂ regularised regression are convex problems enabling sparse solution recovery.
    - **[[Logistic Regression]]**: maximising log-likelihood under a sigmoid model is a strictly convex problem.
    - **[[Sparse Coding]]** / Dictionary Learning: basis pursuit and LASSO sub-problems are convex; enables compressed signal representations.
    - Hyperparameter search via [[Bayesian Optimisation]] often fits a convex surrogate model.
  - #### Signal Processing and Imaging
    - **[[Compressed Sensing]]**: ℓ₁-minimisation recovers sparse signals from under-determined measurements (Basis Pursuit Denoising).
    - Total Variation denoising and image reconstruction formulate image priors as convex regularisers.
    - [[Beamforming]] in antenna arrays uses SOCP to optimise signal-to-noise while satisfying interference constraints.
  - #### Control and Robotics
    - **[[Optimal Control]]** via convex relaxations: Model Predictive Control (MPC) solves a QP at each time step.
    - **[[Lyapunov Stability Analysis]]**: constructing Lyapunov functions through SDP.
    - Trajectory optimisation in [[Robotics]] (e.g., convex formulations of motion planning).
  - #### Finance and Economics
    - **[[Portfolio Optimisation]]**: Markowitz mean-variance optimisation is a QP balancing expected return against risk.
    - Risk measures such as CVaR (Conditional Value at Risk) are convex in portfolio weights.
    - Arbitrage-free option pricing via linear programmes over martingale measures.
  - #### Network and Infrastructure
    - Network flow problems (minimum cost flow) are linear programmes; ubiquitous in logistics and [[Supply Chain]] optimisation.
    - Power systems: optimal power flow (OPF) can be relaxed to an SDP for global bounds.
    - Resource allocation in wireless networks via geometric and second-order cone programmes.

- ### Relationships
  - partOf:: [[Mathematical Optimisation]]
  - hasPart:: [[Linear Programming]]
  - hasPart:: [[Quadratic Programming]]
  - hasPart:: [[Semidefinite Programming]]
  - hasPart:: [[Second-Order Cone Programming]]
  - requires:: [[Convex Analysis]]
  - requires:: [[Linear Algebra]]
  - requires:: [[Calculus]]
  - dependsOn:: [[Duality Theory]]
  - dependsOn:: [[Numerical Methods]]
  - implements:: [[Gradient Descent]]
  - implements:: [[Interior-Point Method]]
  - implements:: [[Proximal Gradient Method]]
  - uses:: [[Lagrange Multipliers]]
  - uses:: [[KKT Conditions]]
  - enables:: [[Support Vector Machine]]
  - enables:: [[LASSO Regression]]
  - enables:: [[Optimal Control]]
  - enables:: [[Portfolio Optimisation]]
  - enables:: [[Compressed Sensing]]
  - contrastsWith:: [[Non-Convex Optimisation]]
  - contrastsWith:: [[Combinatorial Optimisation]]
  - bridges-to:: [[Deep Learning]]
  - bridges-to:: [[Reinforcement Learning]]
  - bridges-to:: [[Signal Processing]]
  - relatedTo:: [[Functional Analysis]]
  - relatedTo:: [[Stochastic Optimisation]]
  - relatedTo:: [[Operations Research]]

- ### Standards and Context
  - The canonical textbook is Boyd & Vandenberghe, *Convex Optimization* (Cambridge University Press, 2004), freely available online and the de facto standard reference.
  - **CVXPY**: open-source Python modelling language for convex problems; implements Disciplined Convex Programming (DCP) to verify convexity automatically before dispatching to solvers.
  - **Disciplined Convex Programming (DCP)**: a ruleset that guarantees a composed expression is convex if its sub-expressions follow convexity-preserving rules (affine, convex, concave combinations with appropriate monotone functions).
  - Key commercial solvers: MOSEK (conic problems), Gurobi (LP/QP/MIP), CPLEX (LP/MIP).
  - Key open-source solvers: SCS (splitting conic solver), ECOS (SOCP/GP), GLPK (LP), OSQP (QP).
  - [[ADMM]] and splitting methods are increasingly standard for distributed and large-scale convex problems in [[Distributed Systems]] and federated settings.
  - Convex relaxations are a standard technique in [[Combinatorial Optimisation]] (semidefinite relaxations of MAX-CUT, QCQP).

- ### Connections to Non-Convex Settings
  - **[[Deep Learning]]** training is explicitly non-convex, yet convex analysis concepts (loss landscape geometry, [[Gradient Descent]] convergence, regularisation) transfer directly.
  - **[[Reinforcement Learning]]**: policy optimisation is generally non-convex, but value function approximation and linear function approximation rely on convex sub-problems.
  - **[[Stochastic Optimisation]]**: stochastic gradient methods extend convex guarantees to the noisy-gradient setting (SGD, Adam); convergence theory leverages convex analysis even when objectives are non-convex.
  - Convex relaxation paradigm: a non-convex problem is relaxed to a convex surrogate, solved exactly, and the solution is rounded or used as a lower bound — central in combinatorial, mixed-integer, and robust optimisation.

- ### Provenance
  - sources:: Boyd & Vandenberghe (2004), *Convex Optimization*; Nesterov & Nemirovskii (1994), *Interior-Point Polynomial Algorithms*; Rockafellar (1970), *Convex Analysis*
  - updated:: 2026-06-13
