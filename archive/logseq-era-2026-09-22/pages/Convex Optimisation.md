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
    },
    {
      "@id": "urn:visionflow:linked:linear-programming",
      "vc:label": "Linear Programming"
    },
    {
      "@id": "urn:visionflow:linked:quadratic-programming",
      "vc:label": "Quadratic Programming"
    },
    {
      "@id": "urn:visionflow:linked:semidefinite-programming",
      "vc:label": "Semidefinite Programming"
    },
    {
      "@id": "urn:visionflow:linked:gradient-descent",
      "vc:label": "Gradient Descent"
    },
    {
      "@id": "urn:visionflow:linked:support-vector-machine",
      "vc:label": "Support Vector Machine"
    },
    {
      "@id": "urn:visionflow:linked:deep-learning",
      "vc:label": "Deep Learning"
    },
    {
      "@id": "urn:visionflow:linked:duality-theory",
      "vc:label": "Duality Theory"
    },
    {
      "@id": "urn:visionflow:linked:kkt-conditions",
      "vc:label": "KKT Conditions"
    },
    {
      "@id": "urn:visionflow:linked:lasso-regression",
      "vc:label": "LASSO Regression"
    },
    {
      "@id": "urn:visionflow:linked:portfolio-optimisation",
      "vc:label": "Portfolio Optimisation"
    },
    {
      "@id": "urn:visionflow:linked:compressed-sensing",
      "vc:label": "Compressed Sensing"
    },
    {
      "@id": "urn:visionflow:linked:operations-research",
      "vc:label": "Operations Research"
    },
    {
      "@id": "urn:visionflow:linked:stochastic-optimisation",
      "vc:label": "Stochastic Optimisation"
    },
    {
      "@id": "urn:visionflow:linked:reinforcement-learning",
      "vc:label": "Reinforcement Learning"
    },
    {
      "@id": "urn:visionflow:linked:signal-processing",
      "vc:label": "Signal Processing"
    },
    {
      "@id": "urn:visionflow:linked:optimal-control",
      "vc:label": "Optimal Control"
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
        "@id": "urn:ngm:class:optimisation",
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
  "quality": 0.90,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
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
    },
    {
      "raw": "[[Linear Programming]]",
      "resolved": "urn:visionflow:linked:linear-programming",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Quadratic Programming]]",
      "resolved": "urn:visionflow:linked:quadratic-programming",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Semidefinite Programming]]",
      "resolved": "urn:visionflow:linked:semidefinite-programming",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Gradient Descent]]",
      "resolved": "urn:visionflow:linked:gradient-descent",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Support Vector Machine]]",
      "resolved": "urn:visionflow:linked:support-vector-machine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deep Learning]]",
      "resolved": "urn:visionflow:linked:deep-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Duality Theory]]",
      "resolved": "urn:visionflow:linked:duality-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[KKT Conditions]]",
      "resolved": "urn:visionflow:linked:kkt-conditions",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[LASSO Regression]]",
      "resolved": "urn:visionflow:linked:lasso-regression",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Portfolio Optimisation]]",
      "resolved": "urn:visionflow:linked:portfolio-optimisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Compressed Sensing]]",
      "resolved": "urn:visionflow:linked:compressed-sensing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Operations Research]]",
      "resolved": "urn:visionflow:linked:operations-research",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stochastic Optimisation]]",
      "resolved": "urn:visionflow:linked:stochastic-optimisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reinforcement Learning]]",
      "resolved": "urn:visionflow:linked:reinforcement-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Signal Processing]]",
      "resolved": "urn:visionflow:linked:signal-processing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Optimal Control]]",
      "resolved": "urn:visionflow:linked:optimal-control",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:enrichment-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-06-21T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Convex optimisation is the mathematical discipline concerned with minimising [[Convex Function]]s over [[Convex Set]]s, grounded in the fundamental structural property that every local minimum of a convex objective over a convex feasible region is simultaneously a global minimum — a tractability guarantee entirely absent in general [[Non-Convex Optimisation]]. This single property licenses a rich class of provably efficient algorithms — including [[Interior-Point Method]]s (polynomial-time barrier methods due to Karmarkar, 1984, and Nesterov–Nemirovskii, 1994), [[Gradient Descent]] and its Nesterov-accelerated variant achieving O(1/k²) convergence, [[Proximal Gradient Method]]s for composite non-smooth objectives, and the [[Alternating Direction Method of Multipliers]] (ADMM) for distributed large-scale settings — all of which can certify or approximate globally optimal solutions. The theory is grounded in [[Convex Analysis]] (Rockafellar, 1970), [[Duality Theory]] (Lagrangian and Fenchel duality), and [[KKT Conditions]] (Karush, 1939; Kuhn–Tucker, 1951), providing both algorithmic guarantees and dual certificates of optimality. Canonical problem families — [[Linear Programming]], [[Quadratic Programming]], [[Second-Order Cone Programming]], and [[Semidefinite Programming]] — form a hierarchy of increasing expressive power, with well-understood complexity and production-grade solvers (MOSEK, Gurobi, CVXPY/SCS, OSQP). Convex optimisation is foundational to [[Machine Learning]] (training [[Support Vector Machine]]s, [[LASSO Regression]], [[Logistic Regression]]), [[Signal Processing]] ([[Compressed Sensing]], total variation denoising), [[Optimal Control]] (Model Predictive Control), finance ([[Portfolio Optimisation]]), and [[Operations Research]] (network flow, resource allocation). Its relationship to [[Deep Learning]] and [[Reinforcement Learning]] is indirect but profound: while neural network training operates in a non-convex landscape, convergence analysis, regularisation theory, and optimisation algorithm design all borrow heavily from the convex toolkit. The field is considered mathematically mature, with the Boyd–Vandenberghe textbook (2004) serving as the universal reference, and active research frontiers in 2024-2026 centring on stochastic interior-point methods for large-scale ML, distributed convex optimisation for federated learning, differentiable convex programming for end-to-end learning, and embedded real-time solvers for autonomous systems.

- ### Semantic Classification
  - owl-class:: math:ConvexOptimisation
  - owl-role:: MathematicalDiscipline | ComputationalMethod | OptimisationFramework
  - owl-inferred:: math:NumericalOptimisation, math:AppliedMathematics, ai:MachineLearningFoundation
  - belongs-to-domain:: [[ComputationAndIntelligenceDomain]], [[AI-GroundedDomain]]
  - implemented-in-layer:: [[AlgorithmLayer]], [[DataLayer]], [[ApplicationLayer]]

- ### Relationships
  - is-subclass-of:: [[Mathematical Optimisation]], [[Applied Mathematics]], [[Numerical Methods]]
  - has-part:: [[Linear Programming]], [[Quadratic Programming]], [[Semidefinite Programming]], [[Second-Order Cone Programming]], [[Geometric Programming]], [[Convex Analysis]], [[Duality Theory]], [[KKT Conditions]]
  - uses:: [[Lagrange Multipliers]], [[KKT Conditions]], [[Convex Function]], [[Convex Set]], [[Subdifferential]], [[Conjugate Function]], [[Epigraph]], [[Slater's Condition]]
  - requires:: [[Convex Analysis]], [[Linear Algebra]], [[Calculus]], [[Real Analysis]], [[Functional Analysis]]
  - implements:: [[Gradient Descent]], [[Interior-Point Method]], [[Proximal Gradient Method]], [[Alternating Direction Method of Multipliers]], [[Subgradient Method]], [[Frank-Wolfe Algorithm]], [[Ellipsoid Method]], [[Accelerated Gradient Descent]]
  - enables:: [[Support Vector Machine]], [[LASSO Regression]], [[Logistic Regression]], [[Optimal Control]], [[Portfolio Optimisation]], [[Compressed Sensing]], [[Bayesian Optimisation]], [[Sparse Coding]], [[Model Predictive Control]], [[Beamforming]]
  - depends-on:: [[Duality Theory]], [[Numerical Methods]], [[Linear Algebra]], [[Real Analysis]]
  - supports:: [[Machine Learning]], [[Deep Learning]], [[Reinforcement Learning]], [[Signal Processing]], [[Operations Research]], [[Federated Learning]], [[Robotics]]
  - contrasts-with:: [[Non-Convex Optimisation]], [[Combinatorial Optimisation]], [[Stochastic Optimisation]], [[Integer Programming]]
  - related-to:: [[Functional Analysis]], [[Stochastic Optimisation]], [[Operations Research]], [[Information Theory]], [[Statistics]], [[Control Theory]]
  - standardized-by:: [[IEEE Computational Intelligence Society]], [[SIAM]], [[Mathematical Programming Society]]

- ### Content
  ## Compositional Relationships (Components)
    ```
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:hasPart math:LinearProgramming))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:hasPart math:QuadraticProgramming))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:hasPart math:SemidefiniteProgramming))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:hasPart math:SecondOrderConeProgramming))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:hasPart math:ConvexAnalysis))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:hasPart math:DualityTheory))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:hasPart math:KKTConditions))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:hasPart math:GeometricProgramming))
    ```
  ## Dependency Relationships
    ```
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:requires math:ConvexAnalysis))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:requires math:LinearAlgebra))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:requires math:Calculus))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:requires math:RealAnalysis))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:dependsOn math:DualityTheory))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:dependsOn math:NumericalMethods))
    ```
  ## Capability Relationships
    ```
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:enables ai:SupportVectorMachine))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:enables ai:LASSORegression))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:enables ai:LogisticRegression))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:enables eng:OptimalControl))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:enables fin:PortfolioOptimisation))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:enables sig:CompressedSensing))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:enables eng:ModelPredictiveControl))
    ```
  ## Implementation Relationships
    ```
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:implements math:GradientDescent))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:implements math:InteriorPointMethod))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:implements math:ProximalGradientMethod))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:implements math:ADMM))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:implements math:SubgradientMethod))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:implements math:FrankWolfeAlgorithm))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:implements math:AcceleratedGradientDescent))
    ```
  ## Reduction Relationships
    ```
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:reducesTo math:LinearProgramming))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:reducesTo math:MathematicalOptimisation))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:reducesTo math:ConvexAnalysis))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:reducesTo math:DualityTheory))
    ```
  ## Contrast and Bridge Relationships
    ```
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:contrasts math:NonConvexOptimisation))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:contrasts math:CombinatorialOptimisation))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:bridges ai:DeepLearning))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:bridges ai:ReinforcementLearning))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:bridges eng:SignalProcessing))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:relatesTo math:StochasticOptimisation))
    SubClassOf(math:ConvexOptimisation
      ObjectSomeValuesFrom(math:relatesTo math:OperationsResearch))
    ```

  ## About
    Convex optimisation addresses the canonical problem: minimise f(x) subject to x ∈ C, where f is a convex function and C is a convex feasible set. The decisive structural insight — that convexity guarantees a single bowl-shaped loss landscape devoid of spurious local minima — transforms optimisation from a combinatorially hard search problem into one admitting efficient, certifiable algorithms. This distinguishes the convex regime sharply from the [[Non-Convex Optimisation]] problems that arise in neural network training, where gradient methods may converge to arbitrary local optima or saddle points.

    The field emerged from linear programming. George Dantzig's Simplex Method (1947) provided the first practical algorithm for linear programmes; its exponential worst-case complexity was later superseded by Leonid Khachiyan's Ellipsoid Method (1979), which established polynomial-time solvability in theory, and Narendra Karmarkar's interior-point method (1984), which was polynomial and practical. The landmark work of Nesterov and Nemirovskii, *Interior-Point Polynomial Algorithms in Convex Programming* (SIAM, 1994), unified interior-point methods within a general self-concordant barrier framework applicable to the full hierarchy of conic programmes (LP, SOCP, SDP), establishing the modern theoretical foundation. Stephen Boyd and Lieven Vandenberghe's *Convex Optimization* (Cambridge, 2004) codified the field for applied practitioners, and remains the universal reference — freely available online and the most-cited textbook in the field.

    The relationship between convex optimisation and [[Machine Learning]] is foundational. Classical supervised learning algorithms with convex loss functions and convex regularisers — [[Logistic Regression]], [[Support Vector Machine]], [[LASSO Regression]], ridge regression — admit global optimality guarantees and efficient solvers. Even as [[Deep Learning]] displaced these methods for many perception tasks, convex sub-problems remain embedded throughout modern ML: the dual SVM QP, the basis pursuit LP in [[Compressed Sensing]], the SDP relaxation in combinatorial problems, the convex surrogate losses (cross-entropy, hinge) used to train neural networks. Moreover, the theoretical understanding of gradient methods in convex settings informs the design and analysis of stochastic gradient descent and Adam used in [[Deep Learning]], even though formal convex guarantees no longer hold.

  ## Key Mathematical Components
    - **[[Convex Set]]**: A set C ⊆ ℝⁿ is convex if for any x, y ∈ C and λ ∈ [0,1], the point λx + (1−λ)y ∈ C. Convex sets are closed under convex combinations; examples include halfspaces, ellipsoids, the positive semidefinite cone, and ℓp balls for p ≥ 1.
    - **[[Convex Function]]**: A function f: ℝⁿ → ℝ is convex if for any x, y in its domain and λ ∈ [0,1], f(λx + (1−λ)y) ≤ λf(x) + (1−λ)f(y). The chord always lies above or on the graph. Strict convexity implies a unique minimum. Strong convexity (f(x) ≥ f(y) + ∇f(y)ᵀ(x−y) + (m/2)||x−y||²) guarantees exponential convergence of gradient methods.
    - **[[Epigraph]]**: The set epi(f) = {(x,t) : f(x) ≤ t}; a function is convex if and only if its epigraph is a convex set. This geometric equivalence links analytic and set-theoretic perspectives.
    - **[[Subdifferential]]**: For non-differentiable convex functions, the subdifferential ∂f(x) = {g : f(y) ≥ f(x) + gᵀ(y−x) ∀y} generalises the gradient. Sub-gradient methods extend first-order algorithms to non-smooth settings (e.g., ℓ₁-norm minimisation).
    - **[[Conjugate Function]]**: The Fenchel conjugate f*(y) = sup_x{yᵀx − f(x)} is always convex, even when f is not; it appears in dual formulations, proximal operators, and Moreau envelopes.
    - **[[Slater's Condition]]**: A constraint qualification ensuring strong duality (zero duality gap) for convex programmes — requires the existence of a strictly feasible point. Under Slater's condition, [[KKT Conditions]] are both necessary and sufficient for global optimality.

  ## Problem Class Hierarchy
    Convex problem classes form a hierarchy of increasing expressive power and computational demand:
    - **[[Linear Programming]] (LP)**: Minimise cᵀx subject to Ax ≤ b, x ≥ 0. The simplest and most mature class; polynomial-time solvable via interior-point methods; pivotal in [[Operations Research]], logistics, and network flow. Simplex is practically fast despite exponential worst case.
    - **[[Quadratic Programming]] (QP)**: Convex quadratic objective with linear constraints (minimise (1/2)xᵀPx + qᵀx, Px ≽ 0). Encompasses [[Support Vector Machine]] training, Markowitz portfolio allocation, and linear MPC. Solvers: OSQP, Gurobi, CPLEX.
    - **[[Second-Order Cone Programming]] (SOCP)**: Linear objective over the second-order (Lorentz) cone; generalises LP and QP. Encompasses robust LP, portfolio problems with uncertainty sets, and beamforming in signal processing.
    - **[[Semidefinite Programming]] (SDP)**: Optimise a linear objective over the cone of positive semidefinite matrices {X : X ≽ 0}. The most expressive standard convex class; subsumes LP, QP, SOCP. Handles [[Lyapunov Stability Analysis]], spectral problems, and MAX-CUT relaxations. Solved by interior-point methods; computationally heavier than LP/QP.
    - **[[Geometric Programming]] (GP)**: Optimise posynomial objectives over monomial equality constraints; log-transformation converts to convex form. Arises in circuit design, transistor sizing, and engineering trade-off problems.
    - **Copositive and Completely Positive Programming**: Convex relaxations of NP-hard combinatorial problems; active research area connecting [[Combinatorial Optimisation]] to the SDP hierarchy.

  ## Algorithm Families
    - **[[Gradient Descent]] and Variants**: The workhorse first-order method. Standard GD converges at O(1/k) for smooth convex objectives (Lipschitz gradient). Nesterov Accelerated Gradient Descent (AGD) achieves the optimal O(1/k²) rate for smooth convex objectives — an information-theoretic lower bound showing AGD is optimal in the first-order oracle model.
    - **[[Interior-Point Method]]s**: Barrier and primal-dual methods that traverse the interior of the feasible set. The self-concordant barrier framework (Nesterov-Nemirovskii) yields O(√n log(1/ε)) iteration complexity, each iteration requiring a Newton step (linear system solve, O(n³) for dense problems). Industry standard for medium-scale LP/QP/SOCP/SDP. Solvers: MOSEK, Gurobi, CPLEX, Clarabel (open-source, 2022).
    - **[[Proximal Gradient Method]]s**: For composite objectives f(x) = g(x) + h(x) where g is smooth convex and h is non-smooth but has a cheap proximal operator (e.g., ℓ₁ norm, indicator of a convex set). ISTA converges at O(1/k); FISTA (Beck–Teboulle, 2009) at O(1/k²). Ubiquitous in sparse recovery, image processing, and [[Compressed Sensing]].
    - **[[Alternating Direction Method of Multipliers]] (ADMM)**: Decomposes large separable problems into smaller sub-problems via dual variable updates. Convergence for convex problems under mild conditions; extremely popular in distributed and federated settings where data or computation is partitioned across nodes. Active research extends ADMM to non-convex settings (2024-2025).
    - **[[Subgradient Method]]**: Extends gradient descent to non-differentiable functions using subgradients; convergence at O(1/√k) — slower than smooth case. Used for non-smooth regularised problems when proximal operators are unavailable.
    - **[[Frank-Wolfe Algorithm]] (Conditional Gradient)**: Projection-free method that linearises the objective and optimises over the feasible set; useful when the feasible set admits efficient linear minimisation but projections are expensive (e.g., nuclear norm ball for matrix completion, simplex for probability simplex).
    - **Stochastic Interior-Point Methods (2024-2025)**: New research direction extending interior-point methods to the stochastic/large-dataset regime, enabling conic optimisation on ML problems with large-N training sets where deterministic solvers are computationally prohibitive (arxiv:2412.12987, arxiv:2505.14973).

  ## Applications and Use Cases
    ### Machine Learning
    - **[[Support Vector Machine]]**: SVM training is a quadratic programme (QP) over dual variables; the convex formulation guarantees the unique maximum-margin hyperplane. Kernel SVMs use the kernel trick to implicitly operate in high-dimensional feature spaces while solving a finite-dimensional QP.
    - **[[LASSO Regression]]** and Ridge Regression: ℓ₁ (LASSO) and ℓ₂ (ridge) regularised linear regression are strictly convex problems (with appropriate assumptions) yielding sparse and shrinkage estimators respectively. Basis pursuit (ℓ₁-minimisation) is the canonical convex relaxation of sparse recovery.
    - **[[Logistic Regression]]**: Maximising cross-entropy log-likelihood over the sigmoid model is a strictly convex unconstrained programme; Newton's method converges quadratically to the unique maximum-likelihood estimator.
    - **[[Bayesian Optimisation]]**: The acquisition function optimisation sub-problem (e.g., maximising Expected Improvement over a Gaussian Process surrogate) is often non-convex, but convex quadratic programming is used in GP hyperparameter fitting (marginal likelihood maximisation under positivity constraints).
    - **[[Federated Learning]]**: Convex sub-problems (local model updates, penalty terms in FedProx, ADMM-based federation) structure federated training algorithms; ADMM-based federated methods achieve provable convergence even under partial participation (FedADMM, 2022; FedF-ADMM, 2025).

    ### Signal Processing and Imaging
    - **[[Compressed Sensing]]**: ℓ₁-minimisation (Basis Pursuit Denoising) recovers sparse signals from under-determined linear measurements when the sensing matrix satisfies the Restricted Isometry Property. This LP/SOCP formulation (Candes–Romberg–Tao, 2006; Donoho, 2006) underpins MRI acceleration, radar signal recovery, and single-pixel camera architectures.
    - **Total Variation (TV) Denoising**: Convex regularisation using the ℓ₁-norm of the discrete gradient (ROF model, Rudin–Osher–Fatemi, 1992); enables piecewise-smooth image reconstruction while preserving sharp edges; solved via proximal gradient or ADMM.
    - **Beamforming**: SOCP formulations optimise antenna array weights to maximise signal-to-noise ratio subject to interference constraints and per-antenna power limits; deployed in 4G/5G and Wi-Fi base stations.

    ### Control and Robotics
    - **[[Optimal Control]] via Model Predictive Control (MPC)**: At each time step, an MPC controller solves a finite-horizon QP (or SOCP for nonlinear dynamics) to compute optimal control inputs satisfying state and input constraints. Real-time QP solvers (OSQP, HPIPM) enable MPC at millisecond time scales for embedded automotive and aerospace applications.
    - **[[Lyapunov Stability Analysis]]**: Constructing quadratic Lyapunov functions for linear systems reduces to an SDP (Linear Matrix Inequalities, LMIs); more general Lyapunov/barrier function synthesis uses sum-of-squares (SOS) programming, which reduces to SDP.
    - **Trajectory Optimisation**: Convex relaxations (e.g., lossless convexification for powered descent guidance) enable real-time trajectory generation for [[Robotics]] and aerospace (used in SpaceX Falcon 9 landing guidance).

    ### Finance and Economics
    - **[[Portfolio Optimisation]]**: Markowitz mean-variance optimisation (minimise portfolio variance subject to target return) is a quadratic programme over portfolio weights. Extensions incorporating CVaR (Conditional Value at Risk), transaction costs, and cardinality constraints require SOCP or mixed-integer formulations.
    - **Arbitrage-Free Option Pricing**: Risk-neutral pricing bounds can be formulated as LPs over probability measures on payoff scenarios (Bertsimas–Popescu).

    ### Distributed Systems and Infrastructure
    - **Network Flow**: Minimum-cost flow and maximum-flow problems are LPs; ubiquitous in supply chain, transportation, and telecommunications routing. Efficient simplex-based network simplex algorithms exploit the unimodular structure.
    - **Optimal Power Flow (OPF)**: The AC-OPF problem for power grid dispatch is non-convex; SDP relaxations (Lavaei–Low, 2012) yield globally optimal solutions for networks satisfying certain conditions, enabling cost-minimising and renewable-integrating dispatch.

  ## Academic Context
    Convex optimisation sits at the intersection of pure mathematics (functional analysis, real analysis, [[Functional Analysis]]) and applied computation. The lineage runs through Caratheodory (1907), Minkowski (1910), and Farkas (1902) for polyhedral theory; through Kuhn–Tucker (1951) for optimality conditions; through Dantzig (1947) for LP; through Rockafellar (1970) for the canonical treatment of convex analysis. The interior-point revolution of the 1980s-1990s (Karmarkar, 1984; Nesterov-Nemirovskii, 1994) established the modern algorithmic framework.

    Stephen Boyd's research group at Stanford has been the primary force in disseminating convex optimisation to engineering and ML audiences: CVXPY (Diamond–Boyd, 2016), a Python-embedded disciplined convex programming (DCP) environment, has lowered the barrier to expressing and solving convex problems. CVXPY relies on open-source solvers (Clarabel, SCS, OSQP, HIGHS) and commercial solvers (MOSEK, Gurobi). CVXPYgen (2024-2025) extends CVXPY to generate C code for parametrised problems with solve times under one microsecond — enabling embedded real-time optimisation in microcontrollers and FPGAs.

    Key research threads in 2024-2026: (1) stochastic interior-point methods for large-scale conic optimisation (bridging convex theory and ML training at scale); (2) differentiable convex programming layers (cvxpylayers, differentiable optimisation as a neural network layer); (3) warmstarting interior-point methods for parametric families (arxiv:2512.00693); (4) non-convex ADMM and proximal methods in hierarchical federated learning (arxiv:2503.08869); (5) hyperbolic programming and generalised cones extending the SDP hierarchy.

  ## Current Landscape (2026)
    Convex optimisation as a field is mathematically mature, with production-grade open-source tooling (CVXPY, SCS, OSQP, Clarabel, GLPK) and commercial solvers (MOSEK, Gurobi, CPLEX) capable of solving LP/QP/SOCP/SDP instances with millions of variables and constraints within seconds to minutes on standard hardware. The field's maturity is reflected in its pervasive use as a sub-routine rather than a research object: convex QPs are solved inside MPC loops on automotive ECUs; SOCP underpins 5G beamforming in real-time signal processors; LP structures route packages through logistics networks at global scale.

    The active research frontier has shifted toward: (a) convex optimisation in large-scale statistical and ML settings where stochastic and distributed methods are required; (b) differentiable optimisation — embedding convex programmes as differentiable layers in neural networks (OptNet, cvxpylayers) so that the solution mapping dp*/dθ is computed via implicit differentiation and backpropagation; (c) embedded and real-time code generation for safety-critical control applications. The CVXPYgen project (arxiv:2504.14099, 2025) and explicit QP solver generation (arxiv:2506.11513, 2025) represent the state of the art in sub-microsecond embedded convex optimisation.

    The convergence of convex optimisation with [[Deep Learning]] is bidirectional: neural networks increasingly incorporate convex layers as structured prediction modules, while training neural networks (explicitly non-convex) borrows theoretical machinery from convex analysis for understanding loss landscape geometry, convergence of SGD on locally convex regions, and designing learning rate schedules.

  ## UK Context
    The United Kingdom has substantial contributions to convex optimisation theory and practice. Cambridge University's Statistical Laboratory and DAMTP (Department of Applied Mathematics and Theoretical Physics) have historical connections to linear programming and mathematical programming. The Smith Institute in Cambridge acts as an industrial mathematics knowledge transfer body, facilitating convex optimisation applications in engineering and defence. Imperial College London's Electrical and Electronic Engineering department has active groups in control theory and semidefinite programming for power systems and robust control (connecting to [[Optimal Control]] and [[Lyapunov Stability Analysis]]). UCL's Department of Statistics and the Gatsby Computational Neuroscience Unit have research programmes in statistical learning with convex regularisation.

    In industry, UK-based applications are prominent. BP and Shell deploy convex optimisation in refinery scheduling and logistics (LP/MILP). The National Grid ESO (Electricity System Operator) uses convex relaxations of the AC Optimal Power Flow problem for renewable energy dispatch — directly relevant given the UK's 50%+ renewable electricity generation targets. Rolls-Royce uses SDP-based control design for jet engine management. UK FinTech and asset management firms (BlackRock, Man Group, Winton) deploy mean-variance and CVaR portfolio optimisation (QP/SOCP) at scale. The EPSRC (Engineering and Physical Sciences Research Council) funds convex and non-convex optimisation research through mathematics and engineering panels.

    Northern English context: The University of Manchester's Department of Mathematics and Alan Turing Institute's Manchester node have connections to computational optimisation. Leeds University's School of Computing has applied optimisation research for healthcare scheduling and logistics. Sheffield's Advanced Manufacturing Research Centre applies convex optimisation methods to scheduling and process control problems in advanced manufacturing, relevant to the region's aerospace and steel industries.

  ## Future Directions (2026-2030)
    - **Differentiable Convex Layers**: Embedding convex programmes as differentiable sub-routines in neural architectures — enabling structured prediction and constraint satisfaction as first-class neural operations — is a rapidly growing paradigm (OptNet, cvxpylayers, differentiable QP/LP).
    - **Large-Scale Stochastic Interior-Point Methods**: Extending the polynomial-time guarantees of interior-point methods to stochastic objectives (mini-batch gradients, noisy constraints) will enable conic optimisation on ML-scale datasets, bridging the gap between convex theory and modern empirical ML.
    - **Embedded Real-Time Solvers**: CVXPYgen-style C code generation for parametrised convex problems enables microsecond-scale solving on embedded hardware (automotive ECUs, drone flight controllers, real-time signal processors), pushing MPC and safety filters into safety-critical fast loops.
    - **Quantum Convex Optimisation**: Early theoretical work on quantum interior-point methods suggests possible polynomial speedups in solving SDPs and LP; practical realisation depends on fault-tolerant quantum hardware (horizon: 2030+).
    - **Non-Convex ADMM and Hierarchical Federated Optimisation**: Extending ADMM convergence guarantees to non-convex and non-smooth composite objectives in hierarchical federated learning scenarios (Smoothing ADMM, 2025) enables privacy-preserving distributed training of neural networks with theoretical backing.
    - **Robust and Distributionally Robust Optimisation**: Convex reformulations of worst-case optimisation over uncertainty sets (SOCP, SDP) are growing in applications as supply chain disruption, climate risk, and adversarial ML motivate more conservative, risk-aware decision-making.
    - **Sum-of-Squares and Polynomial Optimisation**: The SOS/SDP hierarchy for optimising polynomials over semialgebraic sets is finding increasing applications in control (Lyapunov and barrier functions), robotics (collision avoidance), and formal verification of ML systems.

  ## Research and Literature
    1. Boyd, S., & Vandenberghe, L. (2004). *Convex Optimization*. Cambridge University Press. (Freely available at stanford.edu/~boyd/cvxbook)
    2. Rockafellar, R. T. (1970). *Convex Analysis*. Princeton University Press.
    3. Nesterov, Y., & Nemirovskii, A. (1994). *Interior-Point Polynomial Algorithms in Convex Programming*. SIAM.
    4. Nesterov, Y. (1983). A method for solving a convex programming problem with convergence rate O(1/k²). *Soviet Mathematics Doklady*, 27(2), 372-376.
    5. Karmarkar, N. (1984). A new polynomial-time algorithm for linear programming. *STOC 1984*, 302-311.
    6. Dantzig, G. B. (1963). *Linear Programming and Extensions*. Princeton University Press.
    7. Boyd, S., Parikh, N., Chu, E., Peleato, B., & Eckstein, J. (2011). Distributed optimization and statistical learning via the alternating direction method of multipliers. *Foundations and Trends in Machine Learning*, 3(1), 1-122.
    8. Beck, A., & Teboulle, M. (2009). A fast iterative shrinkage-thresholding algorithm for linear inverse problems. *SIAM Journal on Imaging Sciences*, 2(1), 183-202.
    9. Grant, M., & Boyd, S. (2008). Graph implementations for nonsmooth convex programs. *Recent Advances in Learning and Control*, Lecture Notes in Control and Information Sciences, 371.
    10. Diamond, S., & Boyd, S. (2016). CVXPY: A Python-embedded modeling language for convex optimization. *Journal of Machine Learning Research*, 17(83), 1-5.
    11. Vandenberghe, L., & Boyd, S. (1996). Semidefinite programming. *SIAM Review*, 38(1), 49-95.
    12. Ben-Tal, A., & Nemirovski, A. (2001). *Lectures on Modern Convex Optimization: Analysis, Algorithms, and Engineering Applications*. SIAM.
    13. Candes, E. J., Romberg, J., & Tao, T. (2006). Robust uncertainty principles: Exact signal reconstruction from highly incomplete frequency information. *IEEE Transactions on Information Theory*, 52(2), 489-509.
    14. Donoho, D. L. (2006). Compressed sensing. *IEEE Transactions on Information Theory*, 52(4), 1289-1306.
    15. Tibshirani, R. (1996). Regression shrinkage and selection via the lasso. *Journal of the Royal Statistical Society B*, 58(1), 267-288.
    16. Kuhn, H. W., & Tucker, A. W. (1951). Nonlinear programming. *Proceedings of the Second Berkeley Symposium on Mathematical Statistics and Probability*, 481-492.
    17. Lobo, M. S., Vandenberghe, L., Boyd, S., & Lebret, H. (1998). Applications of second-order cone programming. *Linear Algebra and its Applications*, 284(1-3), 193-228.
    18. Lavaei, J., & Low, S. H. (2012). Zero duality gap in optimal power flow problem. *IEEE Transactions on Power Systems*, 27(1), 92-107.
    19. Amos, B., & Kolter, J. Z. (2017). OptNet: Differentiable optimization as a layer in neural networks. *ICML 2017*.
    20. Agrawal, A., Barratt, S., Boyd, S., Busseti, E., & Moursi, W. M. (2019). Differentiating through a cone program. *Journal of Applied and Numerical Optimization*, 1(2), 107-115.
    21. Shi, W., Ling, Q., Wu, G., & Yin, W. (2016). Extra: An exact first-order algorithm for decentralized consensus optimization. *SIAM Journal on Optimization*, 25(2), 944-966.
    22. Li, Z., Shi, W., & Yan, M. (2019). A decentralized proximal-gradient method with network independent step-sizes and separated convergence. *IEEE Transactions on Signal Processing*, 67(17), 4494-4506.
    23. Huang, Y., Dai, L., Wang, S., & Chen, H. (2024). Stochastic interior-point methods for smooth conic optimization with applications. *arXiv:2412.12987*.
    24. Schaller, M., Cagienard, R., & Jones, C. N. (2025). Customized interior-point methods solver for embedded real-time convex optimization. *arXiv:2505.14973*.
    25. Stellato, B., Banjac, G., Goulart, P., Bemporad, A., & Boyd, S. (2020). OSQP: An operator splitting solver for quadratic programs. *Mathematical Programming Computation*, 12(4), 637-672.
    26. Ryu, E. K., & Boyd, S. (2016). Primer on monotone operator methods. *Applied and Computational Mathematics*, 15(1), 3-43.
    27. Sra, S., Nowozin, S., & Wright, S. J. (eds.) (2012). *Optimization for Machine Learning*. MIT Press.
    28. CVXPYgen project (2025). Code generation for solving and differentiating through convex optimization problems. *arXiv:2504.14099*.

  ## Key Terminology
    - **Convex Function**: A function f satisfying f(λx + (1−λ)y) ≤ λf(x) + (1−λ)f(y) for all x, y and λ ∈ [0,1]; the epigraph is a convex set; every local minimum is global.
    - **Convex Set**: A set closed under convex combinations; the feasible region in a convex optimisation problem must be convex.
    - **Duality Gap**: The difference between the primal and dual objective values; zero under strong duality (Slater's condition), allowing dual algorithms to certify primal optimality.
    - **KKT Conditions**: First-order necessary (and under convexity, sufficient) optimality conditions involving primal feasibility, dual feasibility, complementary slackness, and stationarity of the Lagrangian.
    - **Self-Concordant Barrier**: A function whose third derivative is controlled by the second (Nesterov-Nemirovskii); enables polynomial-time interior-point methods via Newton's method with affinely invariant step-size control.
    - **Proximal Operator**: prox_h(v) = argmin_x {h(x) + (1/2)||x−v||²}; the key computational primitive in proximal gradient and ADMM algorithms; often has a closed-form expression (soft-thresholding for ℓ₁ norm, projection for indicator functions).
    - **Disciplined Convex Programming (DCP)**: A formal ruleset (implemented in CVXPY) verifying that a composed expression preserves convexity through convexity-preserving operations (sums, scaling, composition with monotone convex functions of convex arguments); automatic convexity verification before solver dispatch.
    - **Strong Duality**: The property that the primal and dual optimal values are equal (zero duality gap); holds under Slater's condition for convex programmes with inequality constraints.
    - **Subdifferential**: The set ∂f(x) of all subgradients at x; equals {∇f(x)} when f is differentiable; enables optimality analysis and subgradient algorithms for non-smooth convex functions.
    - **Acceleration**: Nesterov's momentum technique that achieves the optimal O(1/k²) convergence rate for first-order smooth convex optimisation, versus O(1/k) for standard gradient descent; implemented in FISTA and similar methods.

- ### Provenance
  - sources:: Boyd & Vandenberghe (2004), *Convex Optimization* (stanford.edu/~boyd/cvxbook); Nesterov & Nemirovskii (1994), *Interior-Point Polynomial Algorithms*; Rockafellar (1970), *Convex Analysis*; Diamond & Boyd (2016), CVXPY JMLR; Boyd et al. (2011), ADMM Foundations and Trends; Beck & Teboulle (2009), FISTA SIAM; arxiv.org/pdf/2412.12987; arxiv.org/html/2505.14973; arxiv.org/pdf/2504.14099; dl.acm.org/doi/10.1561/2200000050; cvxpy.org; github.com/cvxpy/cvxpy
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
