public:: true

# Constraint Solver
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:constraint-solver",
  "@type": "Page",
  "vc:slug": "constraint-solver",
  "title": "Constraint Solver",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:constraint-satisfaction", "vc:label": "Constraint Satisfaction"},
    {"@id": "urn:visionflow:linked:constraint-propagation", "vc:label": "Constraint Propagation"},
    {"@id": "urn:visionflow:linked:backtracking-search", "vc:label": "Backtracking Search"},
    {"@id": "urn:visionflow:linked:arc-consistency", "vc:label": "Arc Consistency"},
    {"@id": "urn:visionflow:linked:search-algorithm", "vc:label": "Search Algorithm"},
    {"@id": "urn:visionflow:linked:automated-planning", "vc:label": "Automated Planning"},
    {"@id": "urn:visionflow:linked:motion-planning", "vc:label": "Motion Planning"},
    {"@id": "urn:visionflow:linked:planning-and-scheduling", "vc:label": "Planning and Scheduling"},
    {"@id": "urn:visionflow:linked:formal-verification", "vc:label": "Formal Verification"},
    {"@id": "urn:visionflow:linked:combinatorial-optimisation", "vc:label": "Combinatorial Optimisation"},
    {"@id": "urn:visionflow:linked:logic-programming", "vc:label": "Logic Programming"},
    {"@id": "urn:visionflow:linked:satisfiability", "vc:label": "Satisfiability"},
    {"@id": "urn:visionflow:linked:smt-solving", "vc:label": "SMT Solving"},
    {"@id": "urn:visionflow:linked:linear-programming", "vc:label": "Linear Programming"},
    {"@id": "urn:visionflow:linked:physics-simulation", "vc:label": "Physics Simulation"},
    {"@id": "urn:visionflow:linked:computer-aided-design", "vc:label": "Computer-Aided Design"},
    {"@id": "urn:visionflow:linked:heuristic-search", "vc:label": "Heuristic Search"},
    {"@id": "urn:visionflow:linked:neural-network", "vc:label": "Neural Network"},
    {"@id": "urn:visionflow:linked:constraint-based-design", "vc:label": "Constraint Based Design"},
    {"@id": "urn:visionflow:linked:trajectory-planning", "vc:label": "Trajectory Planning"},
    {"@id": "urn:visionflow:linked:mixed-integer-programming", "vc:label": "Mixed-Integer Programming"},
    {"@id": "urn:visionflow:linked:robotics", "vc:label": "Robotics"},
    {"@id": "urn:visionflow:linked:spatial-computing", "vc:label": "Spatial Computing"},
    {"@id": "urn:visionflow:linked:symbolic-ai", "vc:label": "Symbolic AI"},
    {"@id": "urn:visionflow:linked:branch-and-bound", "vc:label": "Branch and Bound"},
    {"@id": "urn:visionflow:linked:operations-research", "vc:label": "Operations Research"},
    {"@id": "urn:visionflow:linked:neuro-symbolic-ai", "vc:label": "Neuro-Symbolic AI"},
    {"@id": "urn:visionflow:linked:machine-learning", "vc:label": "Machine Learning"},
    {"@id": "urn:visionflow:linked:reinforcement-learning", "vc:label": "Reinforcement Learning"},
    {"@id": "urn:visionflow:linked:graph-neural-network", "vc:label": "Graph Neural Network"},
    {"@id": "urn:visionflow:linked:quantum-computing", "vc:label": "Quantum Computing"},
    {"@id": "urn:visionflow:linked:gpu-computing", "vc:label": "GPU Computing"},
    {"@id": "urn:visionflow:linked:propositional-logic", "vc:label": "Propositional Logic"},
    {"@id": "urn:visionflow:linked:supply-chain-optimisation", "vc:label": "Supply Chain Optimisation"},
    {"@id": "urn:visionflow:linked:decision-making", "vc:label": "Decision Making"},
    {"@id": "urn:visionflow:linked:knowledge-representation", "vc:label": "Knowledge Representation"},
    {"@id": "urn:visionflow:linked:interval-arithmetic", "vc:label": "Interval Arithmetic"},
    {"@id": "urn:visionflow:linked:local-search", "vc:label": "Local Search"},
    {"@id": "urn:visionflow:linked:graph-theory", "vc:label": "Graph Theory"},
    {"@id": "urn:visionflow:linked:variable-ordering-heuristic", "vc:label": "Variable Ordering Heuristic"}
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:constraint-solver",
  "@type": "Class",
  "label": "Constraint Solver",
  "definition": "A constraint solver is a computational engine that finds assignments of values to variables such that all specified constraints — mathematical relationships, logical predicates, or physical laws — are simultaneously satisfied, drawing on techniques from constraint programming, SAT/SMT solving, linear programming, and numerical methods. Solvers operate by propagating constraint implications to prune the search space, applying backtracking or branch-and-bound search, and invoking domain-specific inference procedures that make the infeasibility of partial assignments detectable early. They are applied across planning and scheduling, combinatorial optimisation, formal verification, physics simulation, computer-aided design, and robotic motion planning.",
  "domain": "ai",
  "maturity": "established",
  "qualityScore": 0.90,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:optimization-algorithm",
      "label": "Optimization Algorithm"
    },
    {
      "@id": "urn:ngm:class:inference-engine",
      "label": "Inference Engine"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:constraint-propagation", "label": "Constraint Propagation"},
      {"@id": "urn:ngm:class:backtracking-search", "label": "Backtracking Search"},
      {"@id": "urn:ngm:class:arc-consistency", "label": "Arc Consistency"},
      {"@id": "urn:ngm:class:variable-ordering-heuristic", "label": "Variable Ordering Heuristic"},
      {"@id": "urn:ngm:class:branch-and-bound", "label": "Branch and Bound"},
      {"@id": "urn:ngm:class:local-search", "label": "Local Search"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:constraint-satisfaction", "label": "Constraint Satisfaction"},
      {"@id": "urn:ngm:class:search-algorithm", "label": "Search Algorithm"},
      {"@id": "urn:ngm:class:propositional-logic", "label": "Propositional Logic"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:automated-planning", "label": "Automated Planning"},
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"},
      {"@id": "urn:ngm:class:planning-and-scheduling", "label": "Planning and Scheduling"},
      {"@id": "urn:ngm:class:formal-verification", "label": "Formal Verification"},
      {"@id": "urn:ngm:class:combinatorial-optimisation", "label": "Combinatorial Optimisation"},
      {"@id": "urn:ngm:class:physics-simulation", "label": "Physics Simulation"},
      {"@id": "urn:ngm:class:supply-chain-optimisation", "label": "Supply Chain Optimisation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:logic-programming", "label": "Logic Programming"},
      {"@id": "urn:ngm:class:satisfiability", "label": "Satisfiability"},
      {"@id": "urn:ngm:class:smt-solving", "label": "SMT Solving"},
      {"@id": "urn:ngm:class:linear-programming", "label": "Linear Programming"},
      {"@id": "urn:ngm:class:interval-arithmetic", "label": "Interval Arithmetic"},
      {"@id": "urn:ngm:class:heuristic-search", "label": "Heuristic Search"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:physics-simulation", "label": "Physics Simulation"},
      {"@id": "urn:ngm:class:computer-aided-design", "label": "Computer-Aided Design"},
      {"@id": "urn:ngm:class:constraint-based-design", "label": "Constraint Based Design"},
      {"@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation"},
      {"@id": "urn:ngm:class:decision-making", "label": "Decision Making"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:heuristic-search", "label": "Heuristic Search"},
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"},
      {"@id": "urn:ngm:class:local-search", "label": "Local Search"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:constraint-based-design", "label": "Constraint Based Design"},
      {"@id": "urn:ngm:class:trajectory-planning", "label": "Trajectory Planning"},
      {"@id": "urn:ngm:class:mixed-integer-programming", "label": "Mixed-Integer Programming"},
      {"@id": "urn:ngm:class:neuro-symbolic-ai", "label": "Neuro-Symbolic AI"},
      {"@id": "urn:ngm:class:quantum-computing", "label": "Quantum Computing"},
      {"@id": "urn:ngm:class:gpu-computing", "label": "GPU Computing"},
      {"@id": "urn:ngm:class:graph-neural-network", "label": "Graph Neural Network"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:robotics", "label": "Robotics"},
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"},
      {"@id": "urn:ngm:class:operations-research", "label": "Operations Research"}
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:constraint-satisfaction-solver",
      "label": "Constraint Satisfaction Solver"
    }
  ],
  "quality": 0.90,
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
  "@id": "urn:visionflow:annotation:link-resolutions:constraint-solver:7f3b2c891045",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:constraint-solver"
  },
  "vc:resolutions": [
    {"raw": "[[Constraint Satisfaction]]", "resolved": "urn:visionflow:linked:constraint-satisfaction", "kind": "ResolvedLink"},
    {"raw": "[[Constraint Propagation]]", "resolved": "urn:visionflow:linked:constraint-propagation", "kind": "ResolvedLink"},
    {"raw": "[[Backtracking Search]]", "resolved": "urn:visionflow:linked:backtracking-search", "kind": "ResolvedLink"},
    {"raw": "[[Arc Consistency]]", "resolved": "urn:visionflow:linked:arc-consistency", "kind": "ResolvedLink"},
    {"raw": "[[Search Algorithm]]", "resolved": "urn:visionflow:linked:search-algorithm", "kind": "ResolvedLink"},
    {"raw": "[[Automated Planning]]", "resolved": "urn:visionflow:linked:automated-planning", "kind": "ResolvedLink"},
    {"raw": "[[Motion Planning]]", "resolved": "urn:visionflow:linked:motion-planning", "kind": "ResolvedLink"},
    {"raw": "[[Planning and Scheduling]]", "resolved": "urn:visionflow:linked:planning-and-scheduling", "kind": "ResolvedLink"},
    {"raw": "[[Formal Verification]]", "resolved": "urn:visionflow:linked:formal-verification", "kind": "ResolvedLink"},
    {"raw": "[[Combinatorial Optimisation]]", "resolved": "urn:visionflow:linked:combinatorial-optimisation", "kind": "ResolvedLink"},
    {"raw": "[[Logic Programming]]", "resolved": "urn:visionflow:linked:logic-programming", "kind": "ResolvedLink"},
    {"raw": "[[Satisfiability]]", "resolved": "urn:visionflow:linked:satisfiability", "kind": "ResolvedLink"},
    {"raw": "[[SMT Solving]]", "resolved": "urn:visionflow:linked:smt-solving", "kind": "ResolvedLink"},
    {"raw": "[[Linear Programming]]", "resolved": "urn:visionflow:linked:linear-programming", "kind": "ResolvedLink"},
    {"raw": "[[Physics Simulation]]", "resolved": "urn:visionflow:linked:physics-simulation", "kind": "ResolvedLink"},
    {"raw": "[[Computer-Aided Design]]", "resolved": "urn:visionflow:linked:computer-aided-design", "kind": "ResolvedLink"},
    {"raw": "[[Heuristic Search]]", "resolved": "urn:visionflow:linked:heuristic-search", "kind": "ResolvedLink"},
    {"raw": "[[Neural Network]]", "resolved": "urn:visionflow:linked:neural-network", "kind": "ResolvedLink"},
    {"raw": "[[Constraint Based Design]]", "resolved": "urn:visionflow:linked:constraint-based-design", "kind": "ResolvedLink"},
    {"raw": "[[Trajectory Planning]]", "resolved": "urn:visionflow:linked:trajectory-planning", "kind": "ResolvedLink"},
    {"raw": "[[Mixed-Integer Programming]]", "resolved": "urn:visionflow:linked:mixed-integer-programming", "kind": "ResolvedLink"},
    {"raw": "[[Robotics]]", "resolved": "urn:visionflow:linked:robotics", "kind": "ResolvedLink"},
    {"raw": "[[Spatial Computing]]", "resolved": "urn:visionflow:linked:spatial-computing", "kind": "ResolvedLink"},
    {"raw": "[[Symbolic AI]]", "resolved": "urn:visionflow:linked:symbolic-ai", "kind": "ResolvedLink"},
    {"raw": "[[Branch and Bound]]", "resolved": "urn:visionflow:linked:branch-and-bound", "kind": "ResolvedLink"},
    {"raw": "[[Operations Research]]", "resolved": "urn:visionflow:linked:operations-research", "kind": "ResolvedLink"},
    {"raw": "[[Neuro-Symbolic AI]]", "resolved": "urn:visionflow:linked:neuro-symbolic-ai", "kind": "ResolvedLink"},
    {"raw": "[[Machine Learning]]", "resolved": "urn:visionflow:linked:machine-learning", "kind": "ResolvedLink"},
    {"raw": "[[Reinforcement Learning]]", "resolved": "urn:visionflow:linked:reinforcement-learning", "kind": "ResolvedLink"},
    {"raw": "[[Graph Neural Network]]", "resolved": "urn:visionflow:linked:graph-neural-network", "kind": "ResolvedLink"},
    {"raw": "[[Quantum Computing]]", "resolved": "urn:visionflow:linked:quantum-computing", "kind": "ResolvedLink"},
    {"raw": "[[GPU Computing]]", "resolved": "urn:visionflow:linked:gpu-computing", "kind": "ResolvedLink"},
    {"raw": "[[Propositional Logic]]", "resolved": "urn:visionflow:linked:propositional-logic", "kind": "ResolvedLink"},
    {"raw": "[[Supply Chain Optimisation]]", "resolved": "urn:visionflow:linked:supply-chain-optimisation", "kind": "ResolvedLink"},
    {"raw": "[[Decision Making]]", "resolved": "urn:visionflow:linked:decision-making", "kind": "ResolvedLink"},
    {"raw": "[[Knowledge Representation]]", "resolved": "urn:visionflow:linked:knowledge-representation", "kind": "ResolvedLink"},
    {"raw": "[[Interval Arithmetic]]", "resolved": "urn:visionflow:linked:interval-arithmetic", "kind": "ResolvedLink"},
    {"raw": "[[Local Search]]", "resolved": "urn:visionflow:linked:local-search", "kind": "ResolvedLink"},
    {"raw": "[[Graph Theory]]", "resolved": "urn:visionflow:linked:graph-theory", "kind": "ResolvedLink"},
    {"raw": "[[Variable Ordering Heuristic]]", "resolved": "urn:visionflow:linked:variable-ordering-heuristic", "kind": "ResolvedLink"}
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:enrichment-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-06-20T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - A [[Constraint Solver]] is a computational engine that systematically finds assignments of values to variables such that all specified constraints — expressed as mathematical relations, logical predicates, physical equations, or domain-specific rules — are simultaneously satisfied, or certifies that no such assignment exists. Solvers implement the full algorithmic stack of [[Constraint Satisfaction]]: a [[Constraint Propagation]] layer that enforces local consistency conditions (primarily [[Arc Consistency]] and generalised arc consistency) to prune infeasible domain values without search, and a complete or incomplete [[Search Algorithm]] that explores remaining assignments through [[Backtracking Search]], [[Branch and Bound]], or [[Local Search]]. The propagation-search interplay is the defining architectural feature: propagation reduces the effective search space by orders of magnitude, while search ensures completeness (or provides approximate solutions at scale). Constraint solvers are distinguished from generic optimisers by their tight integration of high-level declarative [[Knowledge Representation]] — global constraints such as AllDifferent, Cumulative, and Element carry dedicated polynomial-time filtering algorithms — with low-level search control, and from pure [[Satisfiability]] (SAT) solvers by their ability to handle rich, structured constraint languages beyond propositional clauses. Major solver families include CP (constraint programming) engines such as Google OR-Tools CP-SAT, IBM ILOG CP Optimizer, and Choco; [[Satisfiability]] (SAT) solvers such as CaDiCaL and Kissat; [[SMT Solving]] solvers such as Z3 and CVC5; [[Mixed-Integer Programming]] engines (Gurobi, CPLEX) combining [[Linear Programming]] relaxation with [[Branch and Bound]]; numerical constraint solvers for continuous domains using [[Interval Arithmetic]]; and physics constraint solvers that resolve contact, joint, and articulation constraints in game engines and robotic [[Physics Simulation]]. The unifying concept is constraint-directed search: constraints are not merely filters applied after the fact but active inference components that propagate information through the variable network, enabling the solver to detect infeasibility early and focus computational effort on the most constrained regions of the search space. Modern constraint solvers increasingly incorporate [[Machine Learning]] components — [[Reinforcement Learning]]-trained variable ordering heuristics, [[Graph Neural Network]]-based branching policies, and LLM-driven problem modelling — forming the emerging class of neuro-symbolic systems that combine the exactness of symbolic solving with the pattern recognition of [[Neural Network]] architectures. Applications span [[Automated Planning]], [[Planning and Scheduling]], [[Motion Planning]], [[Trajectory Planning]], [[Formal Verification]], [[Computer-Aided Design]], [[Physics Simulation]], [[Supply Chain Optimisation]], and [[Spatial Computing]] across virtually every engineering discipline.

- ### Semantic Classification
  - owl-class:: ai:ConstraintSolver
  - owl-role:: ExecutableProtocol | ReasoningEngine | OptimisationAlgorithm
  - owl-inferred:: ai:InferenceEngine, ai:SearchEngine, ai:CombinatoricsTool
  - belongs-to-domain:: [[Artificial Intelligence]]
  - implemented-in-layer:: [[Symbolic AI]]

- ### Relationships
  - is-subclass-of:: [[Combinatorial Optimisation]], [[Symbolic AI]]
  - has-part:: [[Constraint Propagation]], [[Backtracking Search]], [[Arc Consistency]], [[Variable Ordering Heuristic]], [[Branch and Bound]], [[Local Search]]
  - requires:: [[Constraint Satisfaction]], [[Search Algorithm]], [[Propositional Logic]]
  - enables:: [[Automated Planning]], [[Motion Planning]], [[Planning and Scheduling]], [[Formal Verification]], [[Combinatorial Optimisation]], [[Physics Simulation]], [[Supply Chain Optimisation]], [[Trajectory Planning]]
  - implements:: [[Constraint Satisfaction]], [[Symbolic AI]]
  - depends-on:: [[Constraint Propagation]], [[Arc Consistency]], [[Graph Theory]], [[Propositional Logic]]
  - uses:: [[Logic Programming]], [[Satisfiability]], [[SMT Solving]], [[Linear Programming]], [[Interval Arithmetic]], [[Heuristic Search]], [[Local Search]]
  - supports:: [[Physics Simulation]], [[Computer-Aided Design]], [[Constraint Based Design]], [[Knowledge Representation]], [[Decision Making]], [[Robotics]]
  - contrasts-with:: [[Heuristic Search]], [[Neural Network]], [[Local Search]]
  - related-to:: [[Constraint Based Design]], [[Trajectory Planning]], [[Mixed-Integer Programming]], [[Neuro-Symbolic AI]], [[Quantum Computing]], [[GPU Computing]], [[Graph Neural Network]], [[Reinforcement Learning]], [[Operations Research]]
  - standardized-by:: [[MiniZinc]], [[XCSP3]]

- ### Content
  ## Compositional Relationships (Components)
  ```
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:hasPart ai:ConstraintPropagation))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:hasPart ai:BacktrackingSearch))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:hasPart ai:ArcConsistency))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:hasPart ai:VariableOrderingHeuristic))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:hasPart ai:BranchAndBound))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:hasPart ai:LocalSearch))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:hasPart ai:PropagationEngine))
  ```
  ## Dependency Relationships
  ```
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:requires ai:ConstraintSatisfaction))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:requires ai:SearchAlgorithm))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:dependsOn ai:ConstraintPropagation))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:dependsOn ai:GraphTheory))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:dependsOn ai:PropositionalLogic))
  ```
  ## Capability Relationships
  ```
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:enables ai:AutomatedPlanning))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:enables ai:MotionPlanning))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:enables ai:PlanningAndScheduling))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:enables ai:FormalVerification))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:enables ai:PhysicsSimulation))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:enables ai:SupplyChainOptimisation))
  ```
  ## Implementation Relationships
  ```
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:implements ai:ConstraintSatisfaction))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:implements ai:SymbolicAI))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:uses ai:Satisfiability))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:uses ai:SMTSolving))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:uses ai:LinearProgramming))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:uses ai:LogicProgramming))
  ```
  ## Reduction Relationships
  ```
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:reducesTo ai:SATSolver))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:reducesTo ai:MIPSolver))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:contrastsWith ai:HeuristicSearch))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:contrastsWith ai:NeuralNetwork))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:contrastsWith ai:LocalSearch))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:supports ai:Robotics))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:supports ai:ConstraintBasedDesign))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:relatedTo ai:NeuroSymbolicAI))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:relatedTo ai:QuantumComputing))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:relatedTo ai:GraphNeuralNetwork))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:enables ai:TrajectoryPlanning))
  SubClassOf(ai:ConstraintSolver
    ObjectSomeValuesFrom(ai:bridges ai:OperationsResearch))
  ```

  ## About
  A constraint solver is the computational realisation of [[Constraint Satisfaction]] theory: an engine that receives a formal problem description (variables, domains, constraints) and either produces a satisfying assignment, finds an optimal assignment with respect to an objective, or proves that no solution exists. The solver's core logic is the propagation-search loop. In the propagation phase, the solver enforces consistency conditions — most critically [[Arc Consistency]] (AC-3 and its successors) and Generalised Arc Consistency (GAC) for global constraints — by iterating over a constraint queue, removing domain values that have no support in the domains of constrained neighbours. This prunes the search space without losing any solutions. In the search phase, the solver selects an unassigned variable (guided by a [[Variable Ordering Heuristic]] such as MRV / fail-first), assigns a domain value (guided by a value ordering heuristic such as least-constraining value), triggers propagation, and recurses. On failure (empty domain detected), it backtracks — either chronologically or, in modern solvers, using conflict-directed backjumping (CBJ) or non-chronological backtracking with no-good clause learning (CDCL, ported from SAT solving).

  The theoretical roots of constraint solving converge from three traditions: mathematical programming (linear and [[Mixed-Integer Programming]] solvers, 1940s-1950s), [[Logic Programming]] (Prolog and Constraint Logic Programming, 1970s), and the AI [[Constraint Satisfaction]] literature formalised by Ugo Montanari and Alan Mackworth in the 1970s. Montanari (1974) introduced network constraint representations; Mackworth (1977) defined arc consistency and the AC-3 algorithm; Freuder (1978, 1982) established k-consistency theory. The SAT branch arrived with the Davis-Putnam-Logemann-Loveland (DPLL) procedure (1960, 1962) and was revolutionised by the introduction of Conflict-Driven Clause Learning (CDCL) in the late 1990s via Grasp (Marques-Silva & Sakallah, 1999) and Chaff (Moskewicz et al., 2001), enabling industrial-scale hardware verification. The CP-SAT hybrid solver architecture — introduced in OR-Tools v6.x and matured through 2019-2024 — combines CDCL with CP global constraint propagators and LP relaxation, representing the current state of the art for discrete combinatorial problems.

  Modern solvers are not monolithic: they run portfolio strategies across multiple CPU cores, each executing different search heuristics and clause-sharing policies. The objective-shaving search worker in OR-Tools CP-SAT, introduced in recent releases, dedicates a CPU thread to improving lower bounds of the objective function, complementing the primary CDCL search. Job affinity mechanisms ensure that related workers share learned clauses efficiently. This portfolio architecture allows a single solver invocation to exploit modern many-core hardware without requiring user-level parallelism decisions.

  ## Solver Families and Architecture
  Constraint solvers exist across a spectrum of domain specialisation:

  **CP (Constraint Programming) Solvers** are the most general, handling discrete domains with arbitrary constraint types:
  - *Google OR-Tools CP-SAT* — open source (Apache 2.0), hybrid CDCL/CP/LP architecture, won gold in multiple MiniZinc Challenge 2024 categories, used in production at Google for cloud infrastructure scheduling. Supports C++, Python, Java, C# APIs.
  - *IBM ILOG CP Optimizer* — commercial, dominant in industrial scheduling and timetabling, integrates with the CPLEX MIP solver in the IBM Decision Optimization suite. Deployed in aerospace (Airbus, Boeing), rail (SNCF, Network Rail), and manufacturing.
  - *Choco* — open source (Java), winner of MiniZinc Challenge 2024 Fixed Search category (score 279.00), strongest in pure CP propagation quality.
  - *Gecode* — open source (C++), highly modular, widely used in academic research and the MiniZinc reference implementation. Supports parallel portfolio solving via Gecode/Par.
  - *MiniCP* — educational open-source CP framework (Java/Python), designed for teaching CP algorithm implementation.

  **SAT Solvers** operate on propositional [[Satisfiability]] (Boolean variables, clause constraints) and underpin many CP and formal verification systems:
  - *CaDiCaL* — open source, modern CDCL solver (Armin Biere), entered SAT Competition 2024. CaDiCaL 2.0 introduced improved inprocessing and clause subsumption.
  - *Kissat* — open source, C port of CaDiCaL with optimised data structures; dominated SAT competition 2020-2022, with all top-ten 2022 solvers being Kissat descendants.
  - *MiniSat* — historically influential open-source solver (Eén & Sörensson, 2003) that established the modern CDCL architecture.

  **SMT (Satisfiability Modulo Theories) Solvers** extend SAT with theory-specific reasoning over arithmetic, arrays, bitvectors, strings, and uninterpreted functions:
  - *Z3* — Microsoft Research, open source, industry standard for software verification, symbolic execution, and program analysis. Used in LLVM's Clang static analyser, the Dafny verifier, and countless program analysis tools.
  - *CVC5* — academic open-source SMT solver (Stanford, Iowa, NYU collaboration), strong on quantified formulas and string constraints.
  - *Yices 2* — SRI International, competitive performance on linear arithmetic; used in hardware verification pipelines.

  **MIP (Mixed-Integer Programming) Solvers** combine [[Linear Programming]] relaxation with [[Branch and Bound]] integer search:
  - *Gurobi* — commercial, consistently top-ranked in academic benchmarks, widely deployed in [[Operations Research]], finance, energy, and logistics.
  - *CPLEX (IBM)* — commercial, tight integration with CP Optimizer for hybrid CP/MIP solving.
  - *SCIP* — open-source academic MIP solver (Zuse Institute Berlin), used for research and education; SCIP-Jack specialises on Steiner tree problems.
  - *HiGHS* — open source (University of Edinburgh), high-performance LP/MIP solver gaining rapid adoption in the open-source community.

  **Numerical / Continuous Constraint Solvers** handle real-domain constraints via [[Interval Arithmetic]]:
  - *Realpaver* — interval-based complete solver for nonlinear systems of equations and inequalities; used in geometric constraint solving for [[Computer-Aided Design]].
  - *RealPaver / GloptiPoly* — polynomial global optimisation via moment/SOS hierarchies.
  - Physics constraint solvers in game engines (PhysX, Bullet, MuJoCo, Havok) implement iterative constraint solving (Gauss-Seidel / PGS) and position-based dynamics (PBD) for contact, joint, and soft-body simulation.

  **Specialised GPU-Accelerated Solvers**: Recent systems achieve massively parallel [[Local Search]] (min-conflicts, simulated annealing) across thousands of GPU threads, enabling interactive-rate constraint solving for [[Physics Simulation]] and [[Spatial Computing]].

  ## Solver Landscape Comparison (2026)
  | Solver | Type | Licence | Primary Domain | MiniZinc 2025 |
  |---|---|---|---|---|
  | OR-Tools CP-SAT | CP/SAT/LP Hybrid | Apache 2.0 | Scheduling, VRP | Gold (all categories) |
  | IBM ILOG CP Optimizer | CP | Commercial | Industrial scheduling | — |
  | Choco | CP | Open (LGPL) | CP research | Fixed Search 2024 winner |
  | Gecode | CP | Open (MIT) | Academic, MiniZinc reference | — |
  | Gurobi | MIP | Commercial | OR, Finance | — |
  | HiGHS | LP/MIP | Open (MIT) | OR, LP/MIP backbone | — |
  | SCIP | MIP | Open (academic) | Academic MIP | — |
  | CaDiCaL / Kissat | SAT | Open (MIT) | Boolean verification | — |
  | Z3 | SMT | Open (MIT) | Program verification | — |
  | CVC5 | SMT | Open | Formal methods | — |
  | MuJoCo | Physics | Open (Apache) | Robot simulation | — |
  | PhysX 5 | Physics | NVIDIA SDK | Game engines / robotics | — |

  **Key Benchmarking Standards:**
  - *MiniZinc Challenge* (annual since 2008): 100 model instances across scheduling, graph theory, configuration; scored by solution quality and speed. OR-Tools has dominated 2020–2025 across free-search categories.
  - *SAT Competition* (annual since 2002, co-located with SAT/CP conferences): industrial, crafted, and random instance tracks; CaDiCaL and Kissat have dominated 2020–2024 UNSAT tracks.
  - *Hardware Model Checking Competition (HWMCC)*: evaluates BMC and IC3/PDR solvers on industrial VLSI hardware circuits; rIC3 and IC3ref achieved top results in 2024.
  - *XCSP Competition*: evaluates CP solvers on XML-standardised CSP/COP instances; complements MiniZinc with different benchmark families.
  - *CPAIOR* (annual): academic conference combining CP and OR benchmarks, with special issue competitions for specific problem families (RCPSP, VRPTW, nurse rostering).

  ## Use Cases
  - **Industrial [[Planning and Scheduling]]**: OR-Tools CP-SAT is used by Google to schedule maintenance windows for cloud infrastructure hypervisor hosts, balancing host availability against VM migration costs and time-window constraints. IBM CP Optimizer is deployed by airlines (Air France KLM crew scheduling), rail operators (Deutsche Bahn, Network Rail), and manufacturing plants (Airbus, Toyota) for production sequencing and resource allocation. Network Rail's nightly engineering possession scheduling model encodes tens of thousands of constraints — train service impacts, equipment availability, safety clearance windows, possession territory adjacency — and solves nightly to produce the maintenance plan for the following operational day. Air France uses CP Optimizer to solve the crew pairing problem (monthly) and daily re-optimisation under disruption, significantly reducing deadhead crew cost.
  - **[[Formal Verification]] and Hardware Design**: CaDiCaL/Kissat power bounded model checking in hardware verification flows for VLSI chips. Z3 is the backend for the Dafny program verification language (Microsoft) and is embedded in the CBMC bounded model checker, the Infer static analyser (Meta), and numerous academic verification tools. The Hardware Model Checking Competition 2024 evaluated state-of-the-art BMC and PDR solvers on industrial circuits; rIC3 and IC3ref achieved top results using tight SAT/model-checker integration. At AMD, formal verification of GPU microarchitecture using property checking (Jasper Gold, Synopsys VC Formal) runs SAT/SMT instances with hundreds of millions of clauses over multi-week wall-clock times.
  - **[[Robotics]] and [[Motion Planning]]**: MuJoCo (DeepMind, open-sourced 2022) uses generalised velocity-level constraint solving for articulated rigid body simulation, and is the dominant simulator for reinforcement learning of robot locomotion and manipulation. TrajOpt and CHOMP frame trajectory optimisation as continuous constraint satisfaction with collision avoidance penalty terms. Projection-based constraint solvers (2025, arXiv:2506.14865) achieve >100 Hz planning for 7-DOF robot arms, enabling reactive planning in dynamic environments. Boston Dynamics Spot and Atlas robots use proprietary continuous constraint solvers for whole-body control, resolving joint torque, kinematic, and contact stability constraints at 1 kHz. Inverse kinematics solvers in animation (Unreal MetaHuman, Unity Avatar Mask) use iterative constraint satisfaction for real-time character posing.
  - **[[Computer-Aided Design]]**: Geometric constraint solvers in CAD systems (SolidWorks, CATIA, Siemens NX) enforce dimensional and geometric constraints (parallelism, coincidence, concentricity, distance) between sketch entities using dedicated graph-based solvers that decompose the constraint graph into solvable subproblems. The D-Cubed 2D DCM (Dimensional Constraint Manager) and 3D DCM components power geometric constraint solving in Siemens NX, SolidWorks, and PTC Creo. CATIA's geometric modeller uses a constraint graph decomposition into sequential/parallel/well-constrained subproblems, solving each subsystem with Newton-Raphson methods. Constraint-[[Based Design]] paradigms in FreeCAD and OpenSCAD expose the underlying CSP solving directly to parametric model users.
  - **[[Physics Simulation]] and Games**: Position-based dynamics (PBD) and impulse-based constraint solvers in PhysX (NVIDIA), Bullet, and Havok resolve collision contacts, joint constraints, and soft-body deformation at interactive frame rates. PhysX 5 introduces GPU-accelerated Temporal Gauss-Seidel (TGS) constraint iteration, improving stability for stiff joint chains (robotic arms, ragdolls) at interactive simulation rates. NVIDIA Isaac Sim (2025) uses GPU-accelerated MuJoCo-compatible physics for robot learning simulation at thousands of environment instances per second, enabling sim-to-real transfer research at scale. Physarum-inspired constraint relaxation algorithms are explored for fabric simulation and volumetric elastic body dynamics.
  - **Supply Chain and Logistics**: Gurobi and CPLEX solve vehicle routing problems (VRP), warehouse slot assignment, network design, and production planning at logistics firms. Amazon, UPS, and DHL deploy MIP solvers for last-mile delivery route optimisation. OR-Tools' Vehicle Routing extension provides a purpose-built constraint propagation layer for time-window, capacity, and pickup-delivery constraints over large vehicle fleets. Amazon Robotics' Kiva system uses CP-based task assignment to coordinate hundreds of mobile robots in fulfilment centres, solving real-time path and priority constraint problems.
  - **[[Neuro-Symbolic AI]] Integration**: ConstraintLLM (EMNLP 2025) uses a fine-tuned LLM to generate MiniZinc constraint models from natural language industrial problem descriptions, with a CP solver backend for exact solving. LLM+solver hybrid systems outperform pure LLM chain-of-thought on constraint-heavy problems (Zebra puzzles, LSAT logic games) by delegating combinatorial search to exact symbolic engines. The DCP-Bench-Open (2025) evaluates LLMs on discrete combinatorial problem modelling, providing a systematic benchmark for this emergent capability. Scaling neuro-symbolic problem solving (arXiv:2508.20978) explores solver-free learning of constraints and objectives from data, enabling constraint discovery without hand-specified models. The "Formalize, Don't Optimize" study (arXiv:2605.12421) conclusively demonstrated that LLMs should produce formal CP/MIP models rather than heuristic code, establishing solver-backed formalisation as the canonical pattern for LLM-assisted combinatorial problem solving.
  - **[[Machine Learning]] and Safe AI**: Healthcare scheduling (arXiv:2409.07547) combines OR-Tools CP-SAT with ML demand forecasting to produce nurse shift schedules that satisfy both capacity constraints and predicted demand distributions, demonstrating the complementarity of data-driven prediction and exact constraint solving in regulated domains. Constrained machine learning pipelines for credit scoring, medical diagnosis, and autonomous driving all deploy constraint solvers to verify or enforce that ML model outputs satisfy regulatory fairness and safety constraints — a use case accelerating rapidly under EU AI Act obligations (full application August 2026) that mandate documented, auditable constraint satisfaction for high-risk AI systems.

  ## Academic Context
  The foundational papers are Montanari (1974) on network constraint representations, Mackworth (1977) on arc consistency and the AC-3 algorithm, and Freuder (1978, 1982) on k-consistency theory and sufficient conditions for backtrack-free search. The CDCL SAT revolution is traced through Davis & Putnam (1960), Davis, Logemann & Loveland (1962) — establishing DPLL, the direct ancestor of all modern SAT solvers — and Marques-Silva & Sakallah (1999, GRASP) — introducing Conflict-Driven Clause Learning (CDCL) proper. The integration of CP and SAT was pioneered by Barták (1999), Boussemart et al. (2004, conflict-based heuristics for CSP), and Perron's work at Google on CP-SAT (2018–2024) which fused CDCL, CP global constraint propagation, and LP relaxation into a single engine. Rossi, van Beek & Walsh (2006) edited the definitive *Handbook of Constraint Programming*, a 900-page reference covering theory, algorithms, and applications that remains the field's standard text. The MiniZinc modelling language (Nethercote et al., 2007; Stuckey et al., 2014) standardised CP benchmarking and enabled systematic multi-solver comparison. The SAT competition (annual since 2002, organised by the SAT Association) and the MiniZinc Challenge (annual since 2008, organised at Monash University) provide standardised solver evaluation across hundreds of benchmark instances drawn from scheduling, graph theory, planning, and configuration domains. CP2025, co-located with SAT2025 in Glasgow, represented the 31st year of the CP conference series and saw the publication of 31 accepted papers across theory, algorithms, and applications.

  Key research groups span the globe. In North America: UC Irvine (Rina Dechter, AND/OR search trees, bucket elimination, mini-bucket approximations, STO graphical model solving); Georgia Tech/Monash (Pascal Van Hentenryck, stochastic CP, online optimisation, CP for operations research); Cornell (Carla Gomes, algorithm selection, computational sustainability, randomisation in CP). In Europe: Montpellier LIRMM (Christian Bessière, arc consistency algorithms AC*, constraint acquisition CONACQ); Potsdam (Potassco group, Answer Set Programming, Clingo); Uppsala/Chalmers (Peter Stuckey, Lazying Clause Generation (LCG), MiniZinc, Chuffed); KU Leuven (Luc De Raedt, probabilistic CP, statistical relational learning); University College Cork (Eugene Freuder, constraint-based configuration, ITCSC). In Asia: Chinese University of Hong Kong (Jimmy Lee, soft constraints, partial CSPs, SBDS symmetry breaking). In the UK: University of St Andrews (Conjure/Essence automatic reformulation); University of Edinburgh (HiGHS LP/MIP solving, HOL4 theorem proving); UCL PPLV (program verification with SMT).

  The intersection of [[Machine Learning]] and constraint solving became a major research thread after Khalil et al. (2016) showed learned branching policies competitive with CPLEX default branching on MILP; Gasse et al. (2019) achieved state-of-the-art imitation-learning branching policies using bipartite [[Graph Neural Network]] representations of LP relaxations at MILP branch nodes; Sonnerat et al. (2021, Google DeepMind) introduced neural branching integrated into CP-SAT; and a 2024 study (PMC11753336) established supervised fine-tuning of value-selection heuristics inside CP solvers. The 2025 study on RL for search tree minimisation (arXiv:2508.20056) demonstrated reinforcement learning training of branching policies on standard RCPSP scheduling benchmarks, achieving significantly smaller search trees than hand-crafted heuristics. The JAIR special track on Constraint Programming and Machine Learning (2024–2025) formalised bidirectional CP↔ML research as a recognised subfield. The Global Constraint Catalogue maintained by Beldiceanu, Carlsson, and collaborators documents over 400 global constraints with propagation algorithms, complexity bounds, and application contexts — the definitive reference for solver implementors and modellers.

  The academic literature on constraint solving is published across three principal communities: the CP conference (annual, proceedings in DROPS since 2024); the SAT conference and competition (proceedings in LIPIcs); and Operations Research venues (INFORMS, EURO) for MIP-oriented work. The journal *Constraints* (Springer) is the primary archival venue for constraint programming theory. CPAIOR (Integration of AI and OR Approaches in Constraint Programming for Combinatorial Optimization Problems) bridges the CP and OR communities with an annual conference that has influenced both CP solver design (global constraints for OR models) and MIP solver design (CP-style propagation in MIP branch-and-cut).

  ## Solver Architecture Deep Dive
  **The propagation-search loop** is the architectural core of every CP and SAT solver:
  - *Propagation phase*: each triggered constraint invokes its filtering algorithm, which removes domain values lacking support; changes propagate transitively through the constraint network until a fixed point or failure is detected
  - *Search phase*: a branching decision selects a variable (MRV heuristic) and a value (least-constraining-value or domain-independent heuristic); the solver recurses into the branch
  - *Conflict analysis*: on failure, CDCL solvers analyse the implication graph to learn a no-good clause; backjumping returns to the conflict level; the no-good prevents revisiting the failed assignment
  - *Restart strategy*: after learning, solvers may restart with a random or Luby restart schedule, retaining learned clauses but resetting the search tree; restarts prevent getting stuck in bad search subtrees
  - *Inprocessing*: between restarts, some solvers apply clause minimisation, subsumption checking, variable elimination (bounded resolution), or failed literal detection to simplify the problem

  **Hybrid CP/SAT/LP architecture** (OR-Tools CP-SAT model):
  - CDCL SAT core handles the primary Boolean constraint propagation and no-good learning
  - CP global constraint propagators (AllDifferent, Cumulative, etc.) operate as theory solvers called by the CDCL core when relevant variables are assigned
  - LP relaxation solver (HiGHS) computes a linear relaxation at each branch node, providing lower bounds and cutting planes that tighten the CP search
  - Objective-shaving worker: a dedicated search thread iteratively tightens the objective bound by fixing portions of the objective expression and solving sub-problems, improving lower bounds faster than the primary CDCL search
  - Portfolio workers: multiple search threads run with distinct random seeds and heuristic configurations; learned clauses (no-goods) are shared across threads via a shared clause database

  **Global constraint filtering algorithms**:
  - AllDifferent (Régin 1994): build a bipartite graph (values × variables); maximum bipartite matching identifies arc-consistent edges; O(n√n) per propagation call via Hopcroft-Karp
  - Cumulative (Nuijten 1994, Baptiste et al. 2001): edge-finding (O(n log n)) and not-first/not-last rules identify mandatory task intervals and deduce earliest start / latest end adjustments
  - GCC (Régin 1996): network flow formulation; assignment counts must lie in [lv, uv]; O(n·|D|) per call
  - Circuit / Hamiltonian path (Caseau & Laburthe 1997): subtour elimination via strongly connected components on the successor graph
  - Regular (Pesant 2004): DFA traversal propagation, O(n·|Q|·|D|) per call where |Q| is the automaton state count
  - Element: indexed array lookup constraint; O(n) propagation via domain intersection
  - Sequence: bounded number of values from a given set must occur in every subsequence of length q; propagates via sliding-window flow reasoning

  **Variable and Value Ordering Heuristics (detailed)**:
  Variable ordering (choosing which variable to branch on next):
  - *MRV (Minimum Remaining Values) / Fail-First*: select the variable with the fewest remaining domain values; reduces average tree depth because the most constrained variable is processed first
  - *Degree Heuristic*: among tied MRV variables, choose the one involved in the most constraints with unassigned variables; maximises propagation impact per branching decision
  - *DOM/WDEG (Weighted Degree Heuristic, Boussemart et al. 2004)*: divide domain size by the weighted sum of constraint arities, where weights accumulate per constraint each time a conflict involving that constraint is detected; one of the best-performing heuristics on benchmark CSPs
  - *VSIDS (Variable State Independent Decaying Sum)*: SAT-specific activity heuristic borrowed from CDCL solvers; activity score incremented for variables appearing in recent conflicts, decayed exponentially over time
  - *Learned Heuristics (GNN-based, Gasse et al. 2019)*: bipartite graph neural network trained to imitate strong branching predicts branching variable from LP relaxation features at MIP branch nodes; 10–100× node count reduction on structured instances
  - *RL-based heuristics (arXiv:2508.20056, 2025)*: reinforcement learning trains search-tree-minimising policies for CP scheduling benchmarks, outperforming all hand-crafted heuristics on RCPSP
  Value ordering (choosing which domain value to assign first):
  - *Least Constraining Value (LCV)*: choose the value that removes the fewest values from neighbouring variable domains, preserving flexibility for subsequent assignments
  - *Value Prediction (PMC11753336, 2024)*: supervised learning trains a value-selection heuristic from historical CP solver solutions; reduces wasted assignments on structured problems
  - *Random (with restarts)*: random value selection combined with frequent Luby restarts provides portfolio diversity, enabling portfolio solvers to cover broad heuristic space

  **Clause learning and restart strategies in SAT/CP**:
  - *CDCL (Conflict-Driven Clause Learning)*: on each conflict, analyse the implication graph (the directed graph of unit propagation steps), identify the Unique Implication Point (UIP), derive a conflict clause that is the negation of the UIP cut, and add it to the clause database
  - *Clause deletion*: periodic removal of low-quality learned clauses (those with high LBD — Literal Block Distance — scores); prevents memory blowup in long solver runs
  - *Restarts*: after a fixed or Luby-scheduled number of conflicts, restart search (resetting variable assignments but retaining learned clauses and VSIDS scores); prevents solver from getting trapped in bad search subtrees
  - *Inprocessing*: between restarts, apply clause minimisation (removing redundant literals from learned clauses), bounded variable elimination, and self-subsumption — reducing clause database size without losing information

  The geometry-physics intersection of constraint solving — solving systems of rigid-body contact and articulation constraints — has its own rich literature. Baraff (1989) formalised the contact constraint formulation for rigid bodies; Featherstone (1987) introduced spatial algebra for articulated body dynamics, reducing multi-body constraint solving from O(n³) to O(n). Macklin et al. (2016) introduced XPBD (Extended Position-Based Dynamics), enabling viscoelastic compliant constraint solving at GPU-native rates, now the dominant approach in game engines and robotic simulation. The SolSearch framework (2025, arXiv:2502.14328) applies LLM-guided code generation to produce optimised SAT-solving implementations, illustrating the emerging intersection of LLMs and solver engineering.

  The DCP-Bench-Open benchmark (2025, arXiv:2506.06052) systematically evaluates LLMs on discrete combinatorial problem modelling — the task of translating a natural language problem specification into a solver-readable formal model (MiniZinc, Python/OR-Tools). Results establish baseline capabilities for GPT-4, Claude, and Gemini-class models, providing a reproducible evaluation framework for the LLM-to-CP pipeline. This benchmark is expected to become the standard for evaluating constraint modelling capability in LLMs, analogous to HumanEval for code generation.

  Solver technology for [[Robotics]] has advanced rapidly with the GPU simulation trend. NVIDIA Isaac Sim (2025, arXiv:2606.03551) integrates photorealistic rendering, multi-sensor modelling, and GPU-accelerated physics constraint solving (contact, joint, deformable bodies) for robot learning at scale. Parallel constraint solving across 4,096 simultaneous environments on a single A100 GPU achieves simulation throughputs previously requiring HPC clusters. The rIC3 hardware model checker (2025) achieves state-of-the-art performance on industrial circuits by tightly integrating SAT solving with IC3/PDR (Property Directed Reachability), a model checking algorithm that generates inductive invariants by iteratively strengthening over-approximations of reachable state sets.

  ## Solver Certification and Proof Logging
  Modern constraint solvers increasingly produce machine-checkable certificates of their results, enabling independent verification of both satisfying assignments and unsatisfiability claims:

  **DRAT (Deletion Resolution Asymmetric Tautology) proofs** — the standard format for SAT solver certification:
  - Produced by all major SAT solvers (CaDiCaL, Kissat, Glucose) for UNSAT answers
  - Checked by independent verifiers (DRAT-trim, gratuit, VeriPB) that replay the clause learning steps and confirm no valid assignment was erroneously excluded
  - Mandatory in the SAT Competition since 2013; proofs for industrial instances can reach terabytes but are validated in hours
  - DRUP (Deletion Resolution Unit Propagation), GRAT, and LRAT are simpler sub-formats enabling faster checking at the cost of reduced solver flexibility

  **MIP proof certificates**:
  - LP duality certificates provide lower bounds provably better than any feasible assignment below the bound; Farkas lemma certificates prove infeasibility by exhibiting a dual ray
  - Cutting-plane proofs (Gurobi, CPLEX) certify that no integer solution exists with objective better than the proven bound; SCIP supports MIP certificate output
  - VeriPB (Bogaerts et al., 2023) extends proof logging to pseudo-Boolean constraints and cutting-plane certificates, applicable to CP global constraints

  **Model checking witnesses**:
  - SAT-based BMC counter-examples (concrete execution traces) serve as witnesses to safety violations; IC3/PDR inductive invariants serve as safety certificates
  - AIGER and BTOR2 formats standardise witness encoding for hardware model checking; HWMCC 2024 required counter-example witnesses and invariant certificates alongside solver results
  - UNSAT certificates in hardware verification (proved safety) are independently checked by certifying model checkers such as CoqPilot and Isabelle/HOL integrations

  **Importance for safety-critical deployment**:
  - EU AI Act obligations for high-risk AI systems (full application August 2026) include requirements for human oversight and technical documentation; solver proof certificates provide auditable records of combinatorial reasoning
  - Avionics (DO-178C) and medical device (IEC 62304) safety standards require tool qualification; DRAT proof checking enables SAT/SMT solvers to achieve tool qualification by separating the trust requirement from the solving engine to the (simpler) proof checker
  - Certified solving reduces the trusted code base: even if the solver itself has bugs, the proof checker (orders of magnitude simpler) provides the final correctness guarantee

  ## Constraint Modelling Languages (Detailed)
  The solver ecosystem requires standardised input languages to separate model specification from solving strategy:

  - *MiniZinc (Nethercote et al. 2007, Monash University)*:
    - High-level solver-independent language; models compiled via the minizinc compiler to FlatZinc
    - Rich built-in global constraint library (AllDifferent, Cumulative, Circuit, Element, Regular, etc.)
    - FlatZinc back-ends: Gecode, Chuffed, OR-Tools, CPLEX, Gurobi, Yices, OptiMathSAT, Choco
    - Annual MiniZinc Challenge provides independent multi-solver comparison across standardised problem libraries
    - MiniZinc 2.9.x (2025) supports parallel solving, multi-objective optimisation, and extended global constraint library
  - *XCSP3 (Boussemart, Hemery, Lecoutre 2005, updated 2023)*:
    - XML-based format standardising CSP and COP instances for solver interoperability
    - Used in XCSP Competition (annual) for independent solver benchmarking
    - Supports all constraint arity levels, global constraints, objectives, and satisfaction/optimisation modes
  - *OPL (IBM ILOG Optimization Programming Language)*:
    - High-level modelling language tightly integrated with CPLEX and CP Optimizer back-ends
    - Supports both MIP (CPLEX) and CP (CP Optimizer) solving from the same model with engine directives
    - Widely deployed in enterprise scheduling, configuration, and logistics at Fortune 500 companies
  - *Essence/Conjure (Frisch, Jefferson, Miguel, Nightingale, Akgün et al.; University of St Andrews)*:
    - Abstract specification language above MiniZinc level; Conjure translates Essence models to MiniZinc
    - Savile Row performs second-stage optimisation, symmetry breaking, and constraint reformulation
    - Automatic model reformulation discovers problem-specific strengthenings that would require expert knowledge manually
    - Presented at ModRef workshops (CP2024, CP2025) with new results on streaming reformulation and solver-portfolio selection
  - *Answer Set Programming (ASP, Gelfond & Lifschitz 1988)*:
    - Logic-based constraint language with non-monotonic, closed-world semantics
    - Clingo (Potsdam Potassco group) is the dominant ASP solver; integrates with Python for hybrid CP+ML pipelines
    - Used for planning (AI planning in discrete time), configuration, and diagnosis problems
  - *OR-Tools Python API*: the programmatic alternative to declarative languages; OR-Tools CP-SAT is increasingly used directly via Python API, with the 2025 study "Formalize, Don't Optimize" confirming Python+OR-Tools as the highest-accuracy solver-backed LLM interaction pattern

  ## Constraint Acquisition and Learning
  Constraint solvers require a formal problem specification as input — a set of variables, domains, and constraints. Historically this specification was produced by hand, requiring specialist OR or CP expertise. Constraint acquisition addresses the inverse problem: given a set of positive examples (solutions) and negative examples (non-solutions), automatically infer the constraint network that separates them. The CONACQ framework (Bessière, Coletta, O'Sullivan, et al., LIRMM) formalised this as a SAT-based version space algorithm that maintains a set of candidate constraints consistent with all observed examples and uses active learning (membership queries to the user or an oracle) to efficiently converge to the target network. Subsequent developments include QUACQ (Query-Driven Constraint Acquisition, 2013) which focuses queries on detected conflicts to minimise user interaction; GuessAndCheck (Tsouros et al.) which combines neural network classification with constraint inference to scale to larger constraint libraries; and the Overcoming Over-Fitting variant (arXiv:2509.24489) which uses regularisation to prevent the acquisition system from learning an over-specific constraint model from noisy training data. Constraint acquisition is directly relevant to [[Neuro-Symbolic AI]] integration: rather than asking an LLM to generate a constraint model from scratch, a hybrid system can propose candidate constraints from a library of global constraints, test them against labelled examples, and iterate — combining the LLM's language understanding with the solver's formal reasoning to bootstrap models from descriptions with fewer tokens and fewer hallucinations. The growing SeqAcq and BayesAcq approaches handle noise in training sets using sequential analysis and naive Bayes classification respectively, enabling acquisition from real-world datasets where some examples may be mislabelled. Constraint acquisition represents the modelling complement to the solving advances discussed elsewhere in this entry: while solving concerns how to efficiently find assignments satisfying a given constraint set, acquisition concerns how to discover the constraint set from observations.

  ## Formal Analysis and Complexity
  The complexity landscape of constraint solving stratifies cleanly by constraint language. General CSP solving (finite domains, arbitrary constraints) is NP-complete; the decision problem of whether a given constraint network has a solution is NP-complete even for binary constraints over finite domains (Cook 1971 for SAT, Mackworth 1977 for CSP). However, tractable islands are large and practically important. Constraint networks whose constraint graph has bounded tree-width k are solvable in O(n · d^k) time by tree decomposition (Freuder 1990), where d is the maximum domain size and n is the number of variables — exponential in tree-width but polynomial for fixed k. Arc consistency (AC-3) runs in O(e · d²) time where e is the number of binary constraints; Generalised Arc Consistency (GAC) on non-binary constraints runs in O(e · d^a) time where a is the constraint arity. The arc consistency decision problem — computing whether a CSP with given AC level is satisfiable — remains NP-hard in general but becomes polynomial for fixed tree-width or restricted constraint classes such as row-convex constraints (Van Hentenryck et al. 1992). SAT (propositional CSP with clause constraints) is NP-complete (Cook 1971); 2-SAT (all clauses binary) is polynomial (linear time) via implication graph SCC analysis; Horn SAT (all clauses have at most one positive literal) is polynomial via unit propagation. [[SMT Solving]] complexity is theory-dependent: quantifier-free linear arithmetic (QF_LIA/QF_LRA) is NP-complete; quantified linear arithmetic (Presburger arithmetic) is decidable but doubly exponential; non-linear arithmetic (involving polynomial constraints) is decidable (Tarski 1951 real closed fields) but non-elementary in general. The practical gap between worst-case complexity and observed solver performance on structured industrial instances is enormous: CP-SAT routinely solves instances with 10⁶ Boolean variables in seconds because real-world problems have exploitable structure — tight constraint graphs with few globally optimal solutions — that allows propagation to prune the search space by many orders of magnitude before search even begins. The 2025 paper "Formalize, Don't Optimize: The Heuristic Trap in LLM-Generated Combinatorial Solvers" (arXiv:2605.12421) demonstrated that LLMs defaulting to heuristic approximation rather than exact constraint formulation consistently underperform on combinatorial problems where exact CP/SAT solutions are achievable, establishing a formal argument for solver primacy over heuristic generation in combinatorial domains.

  ## Current Landscape (2026)
  The constraint solver landscape in 2026 is characterised by four converging trends: hybrid CP/SAT/LP architectures that dominate benchmarks, neuro-symbolic LLM-to-solver integration reaching production maturity, GPU/quantum parallelism expanding solver throughput, and regulatory pressure from the EU AI Act driving formalised constraint specification in AI deployments.

  OR-Tools CP-SAT (Google) continues its uninterrupted dominance of the [[MiniZinc]] Challenge. In the MiniZinc Challenge 2025, held at CP2025 in Glasgow (Scotland, August 10–15, 2025) — co-located with SAT2025 and SoCS2025 — Google OR-Tools again won all medals across the standard categories. The announcement noted that, for the first time, there were no portfolio-solver entrants and hence no OPEN medal was awarded. The broader CP2025 programme, organised under the Association for Constraint Programming (A4CP), included 31 accepted research papers spanning topics such as transformer-based feature learning for algorithm selection, constraint-based in-station train dispatching, and expansion-based approaches for quantified integer programming. Invited speakers included Ruzica Piskac (formal methods, Yale), Christine Solnon (constraint-based combinatorial optimisation), and Sylvie Thiébaux (AI planning with constraints). The joint CP/SAT doctoral programme and the 1st Workshop on Explanations with Constraints and Satisfiability (ExCoS) highlighted the community's interest in solver interpretability and alignment with human reasoning.

  HiGHS (High-performance Linear Programming Solver, University of Edinburgh) reached a significant milestone in 2025–2026. Version 1.12 introduced HiPO, a native interior-point LP solver dependent on BLAS, expanding HiGHS beyond its dual simplex core. Version 1.14 extended HiPO to handle convex quadratic programming (QP), positioning HiGHS as a complete LP/QP/MIP solver. In February 2026, the Edinburgh ERGO-Code group completed a prototype multithreaded branch-and-cut MIP solver, expected to be released by June 2026, with the `mip_ipm_solver` option allowing selection of HiPO as the LP sub-solver within the MIP search tree. The HiGHS Workshop 2026 was held in Edinburgh (June 2026), continuing the annual practitioner-facing event that supports the growing ecosystem of HiGHS integrations. HiGHS is now the LP/MIP back-end for OR-Tools, SciPy's `scipy.optimize.milp`, the Julia JuMP ecosystem, AMPL, GAMS, and multiple commercial decision-support platforms, representing the most successful open-source LP solver since GLPK.

  In [[Formal Verification]], CaDiCaL 2.0 (CAV 2024) introduced improved inprocessing, clause subsumption, and tighter integration with model checking workflows. The Hardware Model Checking Competition 2024 confirmed CaDiCaL and Kissat as leading SAT backends for BMC (Bounded Model Checking) and K-induction across industrial circuits. SAT instances at billion-variable scale are now routinely processed in chip design verification at NVIDIA, Intel, and AMD, enabled by incremental CDCL, efficient clause database management, and DRAT proof logging. CP2025 hosted the SAT 2025 Competition and showcased the rIC3 hardware model checker's state-of-the-art performance on IC3/PDR tasks.

  Z3 and CVC5 continue to dominate SMT solving. Z3 is the universal backend for program analysis tools, with integrations into GitHub Copilot Workspace (automated program repair), the Verus Rust verifier, and the Prusti verifier. CVC5 has advanced quantifier handling and string constraint reasoning, positioning it for natural language and code verification tasks. The ExCoS workshop at CP2025 explicitly connected SMT-based explanation generation to constraint satisfaction, indicating growing interest in solver transparency for safety-critical deployments.

  The neuro-symbolic LLM-to-solver pipeline has matured substantially. A key 2025 study, "Formalize, Don't Optimize: The Heuristic Trap in LLM-Generated Combinatorial Solvers" (arXiv:2605.12421), demonstrated that LLMs prompted to solve combinatorial problems by generating heuristic code consistently underperform compared to LLMs that formalise the problem as a [[Constraint Satisfaction]] model and call an exact solver (Python + OR-Tools). The study confirmed that Python + OR-Tools attains the highest correctness rate across all tested LLMs when used as a problem-solving back-end. ConstraintLLM (EMNLP 2025) established a Constraint-Aware Retrieval Module (CARM) within a Tree-of-Thoughts framework with guided self-correction, enabling industrial-level CP model generation with fewer modelling errors than direct generation. Reinforcement learning has entered CP search itself: a 2025 study (arXiv:2508.20056) used RL to minimise search tree size in CP scheduling, demonstrating significant node count reductions on standard RCPSP benchmarks, confirming that learned search policies can outperform hand-crafted heuristics at a fraction of the engineering cost.

  Physics constraint solvers have been transformed by GPU parallelism. NVIDIA Isaac Sim (2025), built on Isaac Lab's GPU-accelerated framework, runs thousands of parallel MuJoCo-compatible physics environments on a single A100 GPU, enabling large-scale robot learning. Position-based dynamics (XPBD, Macklin et al., 2016) is now implemented on GPU for real-time cloth, fluid, and soft-body simulation in game engines (Unreal Engine 5, Unity DOTS). The ALSPG continuous constraint solver uses augmented Lagrangian methods with geometric projections to achieve real-time performance for collision-constrained robot motion. A 2025 paper on real-time motion planning (arXiv:2506.14865) presents a projection-based continuous constraint solver achieving planning frequencies exceeding 100 Hz for 7-DOF robot arms in cluttered environments — matching real-time control loop requirements.

  On the [[Quantum Computing]] frontier, D-Wave's Leap Hybrid Constrained Quadratic Model (CQM) solver has emerged as the most practical quantum-classical hybrid tool for constraint solving. The CQM path accepts constraints natively (as opposed to the penalty-term QUBO encoding), preserves problem sparsity, and internally orchestrates decomposition across classical CPU resources and the quantum processing unit without requiring the user to perform QUBO embedding manually. A 2026 study (Morapakula, *Advanced Quantum Technologies* 2026) compared D-Wave's CQM hybrid solver against Gurobi for portfolio optimisation under strict runtime limits, finding solution quality competitive with Gurobi in time-constrained large-scale settings. Classical CP-SAT remains dominant for medium and large combinatorial instances, but the CQM hybrid solver is carving out a practical niche for time-critical financial and logistics optimisation where approximate solutions within tight wall-clock budgets are valued.

  In the MIP landscape, Gurobi and CPLEX maintain dominance in commercial applications, but HiGHS (University of Edinburgh, open source) has emerged as the leading open-source LP/MIP solver, now integrated into OR-Tools as its LP relaxation engine, SciPy's optimise module, and the Julia JuMP ecosystem. HiGHS's dual revised simplex method and MIP branch-and-bound engine rival commercial solvers on benchmark suites, representing a significant democratisation of optimisation technology. SCIP 8 (Zuse Institute Berlin, 2024) remains the premier academic MIP solver, providing a plugin architecture for custom cuts, heuristics, and constraint handlers that makes it the reference platform for MIP research.

  ## UK Context
  The UK has strong representation in both academic constraint solving research and industrial deployment. The University of St Andrews Constraint Programming Research Group (led by Ian Miguel, Özgür Akgün, Karen Petrie, and Ruth Hoffmann) is the UK's most active CP research group: their Essence/Conjure toolchain automatically reformulates high-level abstract constraint models into solver-ready MiniZinc, and they presented multiple papers at CP2024 on permutation patterns, algorithm selection, and constraint acquisition. CP2025, held in Glasgow in August 2025, was on UK soil — the first time the flagship CP conference returned to the UK in over a decade — and further elevated St Andrews' and other UK groups' visibility. A 2024 paper from the St Andrews group, "Plotting: A Case Study in Lifted Planning with Constraints" (Espasa, Miguel, Nightingale, Salamon & Villaret, *Constraints* journal), demonstrated the Conjure/Essence approach to automated reformulation on temporal AI planning benchmarks. The University of Edinburgh School of Informatics has a tradition spanning logic programming through to modern SMT solving; HiGHS (High-Performance Linear Programming Solver), developed at Edinburgh by Huangfu and Hall, has become a leading open-source LP/MIP solver, integrated into OR-Tools, SciPy, and the Julia JuMP optimisation ecosystem. The HiGHS Workshop 2026, held in Edinburgh in June 2026, reflected the solver's growing practitioner community.

  Imperial College London contributes to formal verification applications of SAT/SMT solving, with research on hardware model checking and security verification using Z3. UCL's Programming Principles, Logic, and Verification (PPLV) group applies constraint and SMT techniques to program verification and static analysis. The Alan Turing Institute (London, Edinburgh) runs a programme on automated decision-making that includes CP-based resource allocation and scheduling.

  In industry, Network Rail deploys OR-Tools-based constraint solving for engineering possession scheduling across the UK rail network, allocating overnight track access windows against train service requirements, safety rules, and engineering resource constraints — a real-time-critical COP with thousands of constraints. Rolls-Royce applies CP Optimizer to engine test scheduling and maintenance planning at its Derby facility. BT (formerly British Telecom) was one of the earliest industrial adopters of CP for frequency assignment in the 1990s; its frequency planning group used constraint-based solvers to assign radio spectrum channels subject to interference distance constraints.

  In the Northern English industrial context, Sheffield-based precision engineering firms (e.g., suppliers to the aerospace and nuclear sectors) use CPLEX-based job-shop scheduling tools. Manchester hosts several logistics technology firms applying OR-Tools for urban delivery routing; the city's role as the UK's second logistics hub (after London) makes vehicle routing and warehouse optimisation a commercially significant constraint application. The STFC Hartree Centre (Daresbury, Cheshire) conducts HPC-oriented research into quantum-classical hybrid constraint solving, building on its quantum computing partnership with IBM.

  ## Future Directions (2026-2030)
  The major trajectories for constraint solver development over 2026-2030 are:

  1. **Neuro-Symbolic Solver Integration**: End-to-end pipelines where LLMs automatically translate natural language problem specifications into formal constraint models (MiniZinc, XCSP3, or solver-native APIs), with iterative self-correction loops driven by solver feedback. The ConstraintLLM framework (EMNLP 2025) established the CARM + Tree-of-Thoughts architecture as a reference design for LLM-to-CP pipelines; by 2028, production CP deployments will likely include LLM-based problem modelling assistants that lower the expertise barrier from specialist OR engineers to domain-expert practitioners with no solver background. The DCP-Bench-Open benchmark (arXiv:2506.06052) provides standardised evaluation for these systems analogous to HumanEval for code generation. Active constraint acquisition — using active learning to discover hidden constraints from positive/negative examples (CONACQ, QUACQ families) — will be integrated with LLM paraphrasing to bootstrap constraint models from natural language descriptions with minimal human supervision.

  2. **GPU-Native Constraint Solving**: Current CP solvers are primarily CPU-bound, but the gap with GPU hardware is closing. GPU-parallel portfolio solving (thousands of independent search threads with shared clause databases) and massively parallel local search (GPU min-conflicts, GPU simulated annealing) will mature into production-ready tools. The 2025 success of GPU-accelerated physics constraint solvers (NVIDIA PhysX 5 TGS, Isaac Lab) demonstrates that the GPU concurrency model is compatible with iterative constraint solving when problem decomposition is fine-grained. Discrete CP and SAT will follow: GPU-accelerated unit propagation and conflict analysis, already demonstrated in research prototypes, will enter production solver stacks before 2028. The expected speedup on highly parallelisable local search (Walksat, min-conflicts) over GPU is 100-1000×, sufficient to make problems currently requiring HPC clusters tractable on desktop-class workstations.

  3. **Constraint Acquisition and Self-Modelling Systems**: Learning constraint specifications from data — rather than requiring hand-specification by experts — will become a mainstream capability. The CONACQ framework will scale to thousands of constraints learned from millions of examples using active learning to reduce user queries. Hybrid acquisition pipelines will combine LLM-generated constraint candidates with formal verification of candidate constraints against labelled data, enabling constraint discovery for domains where experts cannot articulate rules explicitly (biological systems, emergent social norms, implicit business rules). By 2028, constraint acquisition will be a standard preprocessing step in industrial scheduling and configuration systems.

  4. **Quantum-Classical Hybrid Decomposition**: As quantum annealing hardware (D-Wave), gate-model NISQ devices (IBM, IonQ), and neutral-atom arrays (QuEra, Pasqal) scale, CP decomposition strategies that route tractable subproblems to quantum backends will mature. D-Wave's CQM solver already handles constraints natively without QUBO penalty engineering; this architecture will deepen as the QPU qubit count and connectivity improve. The QUBO encoding bottleneck (requiring quadratic number of binary variables) will be partially overcome by domain-specific decompositions exploiting constraint sparsity. By 2030, hybrid quantum-classical constraint solvers will offer practical speed advantages for specific problem families (dense combinatorial problems, portfolio optimisation, protein design) where quantum tunnelling provides genuine sampling advantages over classical branch-and-bound.

  5. **Formal Verification at Scale**: The relentless growth of chip complexity (3 nm to 2 nm to gate-all-around transistors, chiplet architectures) demands proportional scaling of formal verification capacity. SAT/SMT solvers must scale from billions to tens of billions of variables. Incremental solving, modular verification, and abstraction-refinement techniques will be the primary strategies, with [[Machine Learning]] increasingly used to predict relevant lemmas and guide inductive strengthening in hardware model checking. The rIC3 hardware model checker (2025) demonstrates that integrating SAT solving tightly with IC3/PDR (Property Directed Reachability) inductive invariant synthesis achieves state-of-the-art results on industrial benchmarks; this integration architecture will deepen as verification tasks grow. Certified solving — where DRAT proof logs are checked by independent verifiers to guarantee solution correctness — will become mandatory in safety-critical verification pipelines (avionics, medical devices, nuclear control) following ISO 26262 and DO-178C guidance.

  6. **Solver-as-Reasoning-Module in AI Agents**: Constraint solvers are increasingly positioned not as standalone tools but as reasoning modules embedded within larger AI agent architectures. An LLM agent might call a CP-SAT solver as a tool to handle any subtask requiring exact discrete reasoning (scheduling, planning, combinatorial selection), while handling natural language understanding, context management, and user interaction natively. The "Formalize, Don't Optimize" study (2025) empirically established that this solver-as-tool pattern consistently outperforms end-to-end LLM reasoning on combinatorial problems; by 2028 it will be a standard pattern in agentic AI deployment frameworks. EU AI Act requirements for high-risk AI systems — fully applicable August 2026 — are accelerating adoption of constraint-based specification and formal reasoning in regulated domains, as these provide the auditable decision traces that compliance requires. Integration with [[Neuro-Symbolic AI]] platforms will position constraint solvers as the exact reasoning backbone for AI systems that must guarantee correctness under hard combinatorial constraints.

  ## Key Terminology Glossary
  - **CP Solver** — a constraint programming engine that combines propagation, global constraints, and complete search; representative systems include OR-Tools CP-SAT, IBM ILOG CP Optimizer, Gecode, and Choco
  - **SAT Solver** — a Boolean satisfiability engine; typically CDCL architecture processing clause-based propositional problems; representative systems include CaDiCaL, Kissat, and MiniSAT
  - **SMT Solver** — a Satisfiability Modulo Theories engine extending SAT with arithmetic, arrays, strings, bit-vectors, and uninterpreted functions; Z3 (Microsoft Research), CVC5, and Yices 2 are the dominant systems
  - **MIP Solver** — Mixed-Integer Programming solver combining LP relaxation with branch-and-bound and cutting planes; Gurobi, CPLEX, SCIP, and HiGHS are the leading commercial and open-source engines
  - **CDCL** — Conflict-Driven Clause Learning; the algorithmic core of modern SAT solvers, enabling non-chronological backjumping by analysing the implication graph of constraint propagation steps to identify and record no-good clauses
  - **GAC** — Generalised Arc Consistency; arc consistency extended to non-binary and global constraints; each value in each domain must have support in all constrained neighbouring domains through a consistent tuple extension
  - **AllDifferent** — global constraint requiring all variable values to be distinct; has O(n√n) GAC filtering via maximum bipartite matching (Régin 1994); among the most widely deployed global constraints
  - **Cumulative** — global constraint encoding a scheduling resource capacity bound across time; a set of tasks with start times, durations, and resource consumptions must not collectively exceed a capacity bound at any time point; filtered by edge-finding (O(n log n)) and energetic reasoning
  - **PBD** — Position-Based Dynamics; iterative constraint solver for real-time physics simulation; each constraint is modelled as a projection onto a constraint manifold; Gauss-Seidel iteration over constraint projections converges to a consistent configuration
  - **XPBD** — Extended Position-Based Dynamics (Macklin et al. 2016); adds compliance parameters to PBD constraints, enabling simulation of viscoelastic materials and soft joints at GPU-native rates; now dominant in game engines (PhysX 5, Unreal Engine 5)
  - **QUBO** — Quadratic Unconstrained Binary Optimisation; native encoding for quantum annealers (D-Wave); any binary constraint satisfaction or optimisation problem can be encoded as minimising a quadratic objective over binary variables, but the QUBO encoding may require a quadratic number of auxiliary variables
  - **CQM** — Constrained Quadratic Model; D-Wave's constraint-native model format that accepts constraints directly without penalty-term QUBO encoding, preserving sparsity and eliminating manual penalty coefficient tuning
  - **No-good** — a clause learned from a conflict during CDCL search; encodes a minimal set of variable-value assignments responsible for a detected infeasibility; prevents the solver rediscovering the same failure state during subsequent search
  - **Portfolio solver** — runs multiple solver configurations in parallel (different random seeds, heuristic policies, search strategies), returning the first solution found; OR-Tools CP-SAT implements portfolio solving with shared-clause databases across worker threads
  - **Propagation engine** — the worklist-based component that enforces arc/GAC consistency by triggering constraint filtering algorithms whenever domains change; iterates until a fixed point or failure is detected
  - **Inprocessing** — simplification techniques applied between restarts in SAT/CP solvers: clause minimisation, subsumption checking, variable elimination by bounded resolution, and failed literal detection; reduces problem size without losing solutions
  - **Tree decomposition** — a structural decomposition of a constraint graph into a tree of overlapping subsets (bags) whose tree-width controls the tractability of constraint solving; problems with tree-width k can be solved in O(n · d^k) time, making structural analysis a practical presolve strategy
  - **MiniZinc** — the standard CP modelling language developed at Monash University; solver-independent high-level models compiled to FlatZinc for back-end execution; the MiniZinc Challenge is the annual benchmark for CP solver performance
  - **XCSP3** — XML-based standardised format for CSP and COP instances, used in the annual XCSP competition for solver interoperability benchmarking

  ## Research and Literature
  1. Mackworth, A.K. (1977). "Consistency in Networks of Relations." *Artificial Intelligence*, 8(1), 99–118. https://doi.org/10.1016/0004-3702(77)90007-8
  2. Montanari, U. (1974). "Networks of Constraints: Fundamental Properties and Applications to Picture Processing." *Information Sciences*, 7, 95–132.
  3. Freuder, E.C. (1982). "A Sufficient Condition for Backtrack-Free Search." *Journal of the ACM*, 29(1), 24–32.
  4. Davis, M., Logemann, G., & Loveland, D. (1962). "A Machine Program for Theorem Proving." *Communications of the ACM*, 5(7), 394–397.
  5. Marques-Silva, J.P. & Sakallah, K.A. (1999). "GRASP: A Search Algorithm for Propositional Satisfiability." *IEEE Transactions on Computers*, 48(5), 506–521.
  6. Moskewicz, M.W. et al. (2001). "Chaff: Engineering an Efficient SAT Solver." *Proceedings DAC 2001*, 530–535.
  7. Régin, J.-C. (1994). "A Filtering Algorithm for Constraints of Difference in CSPs." *Proceedings AAAI-94*, 362–367.
  8. Dechter, R. (2003). *Constraint Processing*. Morgan Kaufmann.
  9. Rossi, F., van Beek, P., & Walsh, T. (eds.) (2006). *Handbook of Constraint Programming*. Elsevier. https://dl.acm.org/doi/book/10.5555/2843512
  10. Perron, L. & Furnon, V. (2023). *OR-Tools*. Google. https://developers.google.com/optimization/
  11. Stuckey, P.J. et al. (2014). "The MiniZinc Challenge 2008–2013." *AI Magazine*, 35(2), 55–66.
  12. MiniZinc Challenge 2024 Results. https://www.minizinc.org/challenge/2024/results/
  13. Biere, A. et al. (2024). "CaDiCaL, Gimsatul, IsaSAT and Kissat Entering the SAT Competition 2024." https://cca.informatik.uni-freiburg.de/papers/BiereFallerFazekasFleuryFroleyksPollitt-SAT-Competition-2024-solvers.pdf
  14. Biere, A. et al. (2024). "CaDiCaL 2.0." *Proceedings CAV 2024*, LNCS. https://link.springer.com/chapter/10.1007/978-3-031-65627-9_7
  15. Hardware Model Checking Competition 2024. https://hwmcc.github.io/2024/hwmcc24slides.pdf
  16. Zhou, Y. et al. (2025). "ConstraintLLM: A Neuro-Symbolic Framework for Industrial-Level Constraint Programming." *Proceedings EMNLP 2025*. https://aclanthology.org/2025.emnlp-main.809/
  17. Gasse, M. et al. (2019). "Exact Combinatorial Optimization with Graph Convolutional Neural Networks." *Advances in NeurIPS 32*.
  18. Khalil, E. et al. (2016). "Learning to Branch in Mixed Integer Programming." *Proceedings AAAI-2016*.
  19. Nethercote, N. et al. (2007). "MiniZinc: Towards a Standard CP Modelling Language." *CP 2007*, LNCS 4741, 529–543.
  20. Macklin, M. et al. (2016). "XPBD: Position-Based Simulation of Compliant Constrained Dynamics." *Proceedings MIG 2016*.
  21. NVIDIA Isaac Sim. (2025). "Enabling Scalable, GPU-Accelerated Simulation for Robotics." arXiv:2606.03551. https://arxiv.org/html/2606.03551v1
  22. Djidjev, H.N. et al. (2024). "Solving the Resource Constrained Project Scheduling Problem with Quantum Annealing." *Scientific Reports*. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11263701/
  23. Anonymous (2025). "Learning and Fine-Tuning a Generic Value-Selection Heuristic Inside a Constraint Programming Solver." *PMC*. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11753336/
  24. Huangfu, Q. & Hall, J.A.J. (2018). "Parallelizing the Dual Revised Simplex Method." *Mathematical Programming Computation*, 10(1), 119–142. [HiGHS basis]
  25. De Moura, L. & Bjørner, N. (2008). "Z3: An Efficient SMT Solver." *Tools and Algorithms for the Construction and Analysis of Systems*, LNCS 4963, 337–340.
  26. Müller, T. (2025). "Efficient and Real-Time Motion Planning for Robotics Using Projection-Based Optimization." arXiv:2506.14865. https://arxiv.org/html/2506.14865v1
  27. Pesant, G. (2004). "A Regular Language Membership Constraint for Sequence Data." *CP 2004*, LNCS 3258, 482–495.
  28. Constraint Programming Research Group, University of St Andrews. https://www.st-andrews.ac.uk/computer-science/research/groups/constraint-programming/
  29. Anonymous (2025). "Scaling Neuro-Symbolic Problem Solving: Solver-Free Learning of Constraints and Objectives." arXiv:2508.20978. https://arxiv.org/html/2508.20978v2
  30. Anonymous (2025). "DCP-Bench-Open: Evaluating LLMs for Constraint Modelling of Discrete Combinatorial Problems." arXiv:2506.06052.
  31. rIC3 Hardware Model Checker. (2025). arXiv:2502.13605. https://arxiv.org/html/2502.13605
  32. Baraff, D. (1989). "Analytical Methods for Dynamic Simulation of Non-Penetrating Rigid Bodies." *SIGGRAPH 1989*, 23(3), 223–232.
  33. Featherstone, R. (1987). *Robot Dynamics Algorithms*. Kluwer Academic Publishers.
  34. Eén, N. & Sörensson, N. (2003). "An Extensible SAT-Solver." *SAT 2003*, LNCS 2919, 502–518.
  35. Anonymous. (2025). "Formalize, Don't Optimize: The Heuristic Trap in LLM-Generated Combinatorial Solvers." arXiv:2605.12421. https://arxiv.org/html/2605.12421
  36. Anonymous. (2025). "Reinforcement Learning for Search Tree Size Minimization in Constraint Programming: New Results on Scheduling Benchmarks." arXiv:2508.20056. https://arxiv.org/pdf/2508.20056
  37. MiniZinc Challenge 2025 Results. https://www.minizinc.org/challenge/2025/results/
  38. CP 2025 — 31st International Conference on Principles and Practice of Constraint Programming, Glasgow, Scotland, August 10–15, 2025. https://cp2025.a4cp.org/
  39. Morapakula, S.N. (2026). "End-to-End Portfolio Optimization with Hybrid Quantum Annealing." *Advanced Quantum Technologies*. https://advanced.onlinelibrary.wiley.com/doi/10.1002/qute.202500753
  40. HiGHS Changelog, ERGO-Code, University of Edinburgh. https://ergo-code.github.io/HiGHS/dev/
  41. Freuder, E.C. (1990). "Complexity of K-Tree Structured Constraint Satisfaction Problems." *AAAI-1990*, 4–9.

- ### Provenance
  - sources:: Mackworth (1977); Dechter (2003); OR-Tools documentation (developers.google.com); MiniZinc Challenge 2024 (minizinc.org/challenge/2024/results/); MiniZinc Challenge 2025 (minizinc.org/challenge/2025/results/); CP2025 Glasgow (cp2025.a4cp.org); CaDiCaL 2.0 CAV 2024; SAT Competition 2024 CaDiCaL paper; ConstraintLLM EMNLP 2025; NVIDIA Isaac Sim arXiv:2606.03551; Quantum annealing RCPSP PMC11263701; Value-selection heuristic learning PMC11753336; HiGHS Edinburgh (highs.dev, ergo-code.github.io/HiGHS); Z3 TACAS 2008; St Andrews CP Group; Formalize Don't Optimize arXiv:2605.12421; RL for CP search arXiv:2508.20056; D-Wave CQM hybrid quantum annealing 2026
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
