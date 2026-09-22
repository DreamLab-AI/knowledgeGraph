public:: true

# Combinatorial Optimisation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:combinatorial-optimisation",
  "@type": "Page",
  "title": "Combinatorial Optimisation",
  "vc:slug": "combinatorial-optimisation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:optimisation", "vc:label": "Optimisation"},
    {"@id": "urn:visionflow:linked:mathematical-optimisation", "vc:label": "Mathematical Optimisation"},
    {"@id": "urn:visionflow:linked:operations-research", "vc:label": "Operations Research"},
    {"@id": "urn:visionflow:linked:graph-theory", "vc:label": "Graph Theory"},
    {"@id": "urn:visionflow:linked:algorithm", "vc:label": "Algorithm"},
    {"@id": "urn:visionflow:linked:integer-programming", "vc:label": "Integer Programming"},
    {"@id": "urn:visionflow:linked:linear-programming", "vc:label": "Linear Programming"},
    {"@id": "urn:visionflow:linked:genetic-algorithm", "vc:label": "Genetic Algorithm"},
    {"@id": "urn:visionflow:linked:convex-optimisation", "vc:label": "Convex Optimisation"},
    {"@id": "urn:visionflow:linked:constraint-satisfaction", "vc:label": "Constraint Satisfaction"},
    {"@id": "urn:visionflow:linked:logistics", "vc:label": "Logistics"},
    {"@id": "urn:visionflow:linked:decision-making", "vc:label": "Decision Making"},
    {"@id": "urn:visionflow:linked:np-hardness", "vc:label": "NP-Hardness"},
    {"@id": "urn:visionflow:linked:computational-complexity", "vc:label": "Computational Complexity"},
    {"@id": "urn:visionflow:linked:branch-and-bound", "vc:label": "Branch and Bound"},
    {"@id": "urn:visionflow:linked:simulated-annealing", "vc:label": "Simulated Annealing"},
    {"@id": "urn:visionflow:linked:local-search", "vc:label": "Local Search"},
    {"@id": "urn:visionflow:linked:approximation-algorithm", "vc:label": "Approximation Algorithm"},
    {"@id": "urn:visionflow:linked:travelling-salesman-problem", "vc:label": "Travelling Salesman Problem"},
    {"@id": "urn:visionflow:linked:vehicle-routing-problem", "vc:label": "Vehicle Routing Problem"},
    {"@id": "urn:visionflow:linked:knapsack-problem", "vc:label": "Knapsack Problem"},
    {"@id": "urn:visionflow:linked:graph-colouring", "vc:label": "Graph Colouring"},
    {"@id": "urn:visionflow:linked:scheduling", "vc:label": "Scheduling"},
    {"@id": "urn:visionflow:linked:network-design", "vc:label": "Network Design"},
    {"@id": "urn:visionflow:linked:reinforcement-learning", "vc:label": "Reinforcement Learning"},
    {"@id": "urn:visionflow:linked:graph-neural-network", "vc:label": "Graph Neural Network"},
    {"@id": "urn:visionflow:linked:dynamic-programming", "vc:label": "Dynamic Programming"},
    {"@id": "urn:visionflow:linked:heuristic-search", "vc:label": "Heuristic Search"},
    {"@id": "urn:visionflow:linked:metaheuristic", "vc:label": "Metaheuristic"},
    {"@id": "urn:visionflow:linked:tabu-search", "vc:label": "Tabu Search"},
    {"@id": "urn:visionflow:linked:swarm-intelligence", "vc:label": "Swarm Intelligence"},
    {"@id": "urn:visionflow:linked:machine-learning", "vc:label": "Machine Learning"},
    {"@id": "urn:visionflow:linked:supply-chain", "vc:label": "Supply Chain"},
    {"@id": "urn:visionflow:linked:planning-and-scheduling", "vc:label": "Planning and Scheduling"},
    {"@id": "urn:visionflow:linked:hyperparameter-optimisation", "vc:label": "Hyperparameter Optimisation"},
    {"@id": "urn:visionflow:linked:neural-architecture-search", "vc:label": "Neural Architecture Search"},
    {"@id": "urn:visionflow:linked:quantum-computing", "vc:label": "Quantum Computing"},
    {"@id": "urn:visionflow:linked:multi-objective-optimisation", "vc:label": "Multi Objective Optimisation"},
    {"@id": "urn:visionflow:linked:constraint-solver", "vc:label": "Constraint Solver"},
    {"@id": "urn:visionflow:linked:bayesian-optimisation", "vc:label": "Bayesian Optimisation"}
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:combinatorial-optimisation",
  "@type": "Class",
  "label": "Combinatorial Optimisation",
  "definition": "Combinatorial optimisation is the study of finding an optimal object from a finite but typically enormous set of discrete candidate solutions. Problems are defined over discrete structures such as graphs, permutations and integer assignments, and many are NP-hard, meaning no known algorithm solves all instances efficiently. Practical approaches combine exact methods, approximation algorithms and metaheuristics to obtain good solutions within acceptable time bounds.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:optimisation",
      "label": "Optimisation"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:optimisation", "label": "Optimisation"},
      {"@id": "urn:ngm:class:operations-research", "label": "Operations Research"},
      {"@id": "urn:ngm:class:mathematical-optimisation", "label": "Mathematical Optimisation"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:branch-and-bound", "label": "Branch and Bound"},
      {"@id": "urn:ngm:class:approximation-algorithm", "label": "Approximation Algorithm"},
      {"@id": "urn:ngm:class:metaheuristic", "label": "Metaheuristic"},
      {"@id": "urn:ngm:class:local-search", "label": "Local Search"},
      {"@id": "urn:ngm:class:dynamic-programming", "label": "Dynamic Programming"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:graph-theory", "label": "Graph Theory"},
      {"@id": "urn:ngm:class:algorithm", "label": "Algorithm"},
      {"@id": "urn:ngm:class:computational-complexity", "label": "Computational Complexity"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:constraint-satisfaction", "label": "Constraint Satisfaction"},
      {"@id": "urn:ngm:class:logistics", "label": "Logistics"},
      {"@id": "urn:ngm:class:planning-and-scheduling", "label": "Planning and Scheduling"},
      {"@id": "urn:ngm:class:supply-chain", "label": "Supply Chain"},
      {"@id": "urn:ngm:class:network-design", "label": "Network Design"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:integer-programming", "label": "Integer Programming"},
      {"@id": "urn:ngm:class:linear-programming", "label": "Linear Programming"},
      {"@id": "urn:ngm:class:genetic-algorithm", "label": "Genetic Algorithm"},
      {"@id": "urn:ngm:class:simulated-annealing", "label": "Simulated Annealing"},
      {"@id": "urn:ngm:class:tabu-search", "label": "Tabu Search"},
      {"@id": "urn:ngm:class:graph-neural-network", "label": "Graph Neural Network"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:convex-optimisation", "label": "Convex Optimisation"},
      {"@id": "urn:ngm:class:bayesian-optimisation", "label": "Bayesian Optimisation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:mathematical-optimisation", "label": "Mathematical Optimisation"},
      {"@id": "urn:ngm:class:multi-objective-optimisation", "label": "Multi Objective Optimisation"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:quantum-computing", "label": "Quantum Computing"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:optimisation", "label": "Optimisation"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:decision-making", "label": "Decision Making"},
      {"@id": "urn:ngm:class:hyperparameter-optimisation", "label": "Hyperparameter Optimisation"},
      {"@id": "urn:ngm:class:neural-architecture-search", "label": "Neural Architecture Search"}
    ]
  },
  "quality": 0.90,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "EnrichmentWave6"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:link-resolution:combinatorial-optimisation",
  "@type": "LinkResolutionsAnnotation",
  "resolves": [
    {"wikilink": "Optimisation", "@id": "urn:ngm:class:optimisation"},
    {"wikilink": "Mathematical Optimisation", "@id": "urn:ngm:class:mathematical-optimisation"},
    {"wikilink": "Operations Research", "@id": "urn:ngm:class:operations-research"},
    {"wikilink": "Graph Theory", "@id": "urn:ngm:class:graph-theory"},
    {"wikilink": "Algorithm", "@id": "urn:ngm:class:algorithm"},
    {"wikilink": "Integer Programming", "@id": "urn:ngm:class:integer-programming"},
    {"wikilink": "Linear Programming", "@id": "urn:ngm:class:linear-programming"},
    {"wikilink": "Genetic Algorithm", "@id": "urn:ngm:class:genetic-algorithm"},
    {"wikilink": "Convex Optimisation", "@id": "urn:ngm:class:convex-optimisation"},
    {"wikilink": "Constraint Satisfaction", "@id": "urn:ngm:class:constraint-satisfaction"},
    {"wikilink": "Logistics", "@id": "urn:ngm:class:logistics"},
    {"wikilink": "Decision Making", "@id": "urn:ngm:class:decision-making"},
    {"wikilink": "NP-Hardness", "@id": "urn:ngm:class:np-hardness"},
    {"wikilink": "Computational Complexity", "@id": "urn:ngm:class:computational-complexity"},
    {"wikilink": "Branch and Bound", "@id": "urn:ngm:class:branch-and-bound"},
    {"wikilink": "Simulated Annealing", "@id": "urn:ngm:class:simulated-annealing"},
    {"wikilink": "Local Search", "@id": "urn:ngm:class:local-search"},
    {"wikilink": "Approximation Algorithm", "@id": "urn:ngm:class:approximation-algorithm"},
    {"wikilink": "Travelling Salesman Problem", "@id": "urn:ngm:class:travelling-salesman-problem"},
    {"wikilink": "Vehicle Routing Problem", "@id": "urn:ngm:class:vehicle-routing-problem"},
    {"wikilink": "Knapsack Problem", "@id": "urn:ngm:class:knapsack-problem"},
    {"wikilink": "Graph Colouring", "@id": "urn:ngm:class:graph-colouring"},
    {"wikilink": "Scheduling", "@id": "urn:ngm:class:scheduling"},
    {"wikilink": "Network Design", "@id": "urn:ngm:class:network-design"},
    {"wikilink": "Reinforcement Learning", "@id": "urn:ngm:class:reinforcement-learning"},
    {"wikilink": "Graph Neural Network", "@id": "urn:ngm:class:graph-neural-network"},
    {"wikilink": "Dynamic Programming", "@id": "urn:ngm:class:dynamic-programming"},
    {"wikilink": "Heuristic Search", "@id": "urn:ngm:class:heuristic-search"},
    {"wikilink": "Metaheuristic", "@id": "urn:ngm:class:metaheuristic"},
    {"wikilink": "Tabu Search", "@id": "urn:ngm:class:tabu-search"},
    {"wikilink": "Swarm Intelligence", "@id": "urn:ngm:class:swarm-intelligence"},
    {"wikilink": "Machine Learning", "@id": "urn:ngm:class:machine-learning"},
    {"wikilink": "Supply Chain", "@id": "urn:ngm:class:supply-chain"},
    {"wikilink": "Planning and Scheduling", "@id": "urn:ngm:class:planning-and-scheduling"},
    {"wikilink": "Hyperparameter Optimisation", "@id": "urn:ngm:class:hyperparameter-optimisation"},
    {"wikilink": "Neural Architecture Search", "@id": "urn:ngm:class:neural-architecture-search"},
    {"wikilink": "Quantum Computing", "@id": "urn:ngm:class:quantum-computing"},
    {"wikilink": "Multi Objective Optimisation", "@id": "urn:ngm:class:multi-objective-optimisation"},
    {"wikilink": "Constraint Solver", "@id": "urn:ngm:class:constraint-solver"},
    {"wikilink": "Bayesian Optimisation", "@id": "urn:ngm:class:bayesian-optimisation"}
  ]
}
```

- ### Definition
  - Combinatorial optimisation is a subfield of [[Optimisation]] and [[Mathematical Optimisation]] concerned with finding a provably or practically best element from a finite but astronomically large set of discrete candidate solutions, where the solution space is defined over combinatorial structures such as graphs, permutations, subsets, and integer assignments rather than continuous domains. The discipline inherits its theoretical backbone from [[Graph Theory]], [[Algorithm]] design, and [[Computational Complexity]], with the central challenge posed by [[NP-Hardness]]: the most practically important problem classes — the [[Travelling Salesman Problem]], the [[Knapsack Problem]], the [[Vehicle Routing Problem]], [[Graph Colouring]], bin packing, and job-shop [[Scheduling]] — admit no known polynomial-time exact solver, yet must be solved routinely in industry and government. To bridge the gap between theoretical intractability and practical necessity, three complementary methodological families have evolved: exact methods that guarantee optimality at the cost of exponential worst-case time (such as [[Branch and Bound]], cutting-plane procedures, and [[Dynamic Programming]]); [[Approximation Algorithm]]s that run in polynomial time and deliver solutions within a provable factor of optimal (the Christofides algorithm for metric TSP achieves a 3/2-approximation, only recently improved by Karlin et al., 2021 to 3/2 + ε); and [[Metaheuristic]] frameworks that trade guarantee for empirical scalability, including [[Simulated Annealing]], [[Tabu Search]], [[Genetic Algorithm]]s, and [[Swarm Intelligence]] methods. Studied centrally within [[Operations Research]], combinatorial optimisation underpins global [[Logistics]], [[Supply Chain]] management, [[Network Design]], [[Planning and Scheduling]], and increasingly [[Machine Learning]] pipelines through [[Hyperparameter Optimisation]] and [[Neural Architecture Search]], while [[Reinforcement Learning]] and [[Graph Neural Network]] methods are reshaping how classical combinatorial solvers are augmented and replaced. The field interacts with, but is structurally distinct from, [[Convex Optimisation]], which benefits from smooth feasible regions where every local optimum is global.

- ### Semantic Classification
  - owl-class:: ai:CombinatorialOptimisation
  - owl-role:: Concept | OptimisationParadigm | ComputationalMethod
  - owl-inferred:: ai:DiscreteOptimisation, ai:NpHardProblemClass, ai:OperationsResearchMethod
  - belongs-to-domain:: [[Mathematical Optimisation]]
  - implemented-in-layer:: [[Algorithm]]

- ### Relationships
  - is-subclass-of:: [[Optimisation]], [[Mathematical Optimisation]]
  - has-part:: [[Branch and Bound]], [[Approximation Algorithm]], [[Metaheuristic]], [[Local Search]], [[Dynamic Programming]]
  - requires:: [[Graph Theory]], [[Algorithm]], [[Computational Complexity]]
  - enables:: [[Constraint Satisfaction]], [[Logistics]], [[Planning and Scheduling]], [[Supply Chain]], [[Network Design]]
  - implements:: [[Heuristic Search]], [[Integer Programming]]
  - depends-on:: [[Graph Theory]], [[Algorithm]], [[NP-Hardness]]
  - supports:: [[Decision Making]], [[Hyperparameter Optimisation]], [[Neural Architecture Search]]
  - uses:: [[Integer Programming]], [[Linear Programming]], [[Genetic Algorithm]], [[Simulated Annealing]], [[Tabu Search]], [[Graph Neural Network]], [[Dynamic Programming]]
  - contrasts-with:: [[Convex Optimisation]], [[Bayesian Optimisation]]
  - related-to:: [[Mathematical Optimisation]], [[Multi Objective Optimisation]], [[Reinforcement Learning]], [[Quantum Computing]], [[Constraint Solver]]
  - standardized-by:: [[Operations Research]]

- ### Content
  - ## Compositional Relationships (Components)
    - ```
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:hasPart ai:BranchAndBound))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:hasPart ai:ApproximationAlgorithm))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:hasPart ai:Metaheuristic))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:hasPart ai:LocalSearch))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:hasPart ai:DynamicProgramming))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:hasPart ai:CuttingPlaneMethod))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:hasPart ai:ColumnGeneration))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:hasPart ai:IntegerProgrammingRelaxation))
      ```
  - ## Dependency Relationships
    - ```
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:requires ai:GraphTheory))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:requires ai:Algorithm))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:requires ai:ComputationalComplexity))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:dependsOn ai:NpHardness))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:dependsOn ai:LinearProgramming))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:dependsOn ai:IntegerProgramming))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:dependsOn ai:DiscreteStructure))
      ```
  - ## Capability Relationships
    - ```
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:enables ai:ConstraintSatisfaction))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:enables ai:Logistics))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:enables ai:PlanningAndScheduling))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:enables ai:SupplyChain))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:enables ai:NetworkDesign))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:enables ai:DecisionMaking))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:supports ai:HyperparameterOptimisation))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:supports ai:NeuralArchitectureSearch))
      ```
  - ## Implementation Relationships
    - ```
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:implements ai:HeuristicSearch))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:implements ai:IntegerProgramming))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:implements ai:GeneticAlgorithm))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:implements ai:SimulatedAnnealing))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:implements ai:TabuSearch))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:implements ai:GraphNeuralNetwork))
      ```
  - ## Reduction Relationships
    - ```
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:reducesTo ai:IntegerProgramming))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:reducesTo ai:ConstraintSatisfactionProblem))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:reducesTo ai:GraphSearchProblem))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:reducesTo ai:LinearProgrammingRelaxation))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:reducesTo ai:QuboFormulation))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:contrastsWith ai:ConvexOptimisation))
      SubClassOf(ai:CombinatorialOptimisation
        ObjectSomeValuesFrom(ai:relatedTo ai:MultiObjectiveOptimisation))
      ```
  ## Mathematical Framework

  Formally, a combinatorial optimisation problem is specified as a triple (S, f, C) where: S is the ground set of elements (e.g., edges, routes, assignments), f: 2^S → ℝ is the objective function mapping each candidate solution — a subset or arrangement of S — to a real-valued cost or value, and C ⊆ 2^S is the set of feasible solutions satisfying the problem constraints. The goal is to find x* ∈ C such that f(x*) ≤ f(x) for all x ∈ C (minimisation) or f(x*) ≥ f(x) for all x ∈ C (maximisation). The mathematical richness of the field arises from the combinatorial explosion of |C|: for a simple binary decision over n elements, |C| = 2^n (the power set), which for n = 100 exceeds 10^30 — more candidate solutions than atoms in the observable universe, making exhaustive enumeration impossible. For permutation-structured problems like [[Travelling Salesman Problem]], |C| = n! grows even faster: for n = 20 cities, 20! ≈ 2.4 × 10^18. The interplay between the combinatorial size of the feasible set and the structural properties of the objective function (submodularity, supermodularity, polymatroid structure, total unimodularity) determines which algorithmic approaches are tractable. Total unimodularity of the constraint matrix (as in [[Linear Programming]] formulations of bipartite matching and network flow) guarantees that LP relaxations have integer optimal solutions — making the corresponding combinatorial problems polynomially solvable despite their combinatorial feasible sets. The absence of such structure, as in [[Integer Programming]] formulations of [[Travelling Salesman Problem]] and [[Vehicle Routing Problem]], leads to the NP-hardness that motivates the field's algorithmic diversity.

  Key structural properties that determine tractability include: **submodularity** — where the objective function exhibits diminishing returns (f(A ∪ {e}) − f(A) ≥ f(B ∪ {e}) − f(B) whenever A ⊆ B), enabling greedy algorithms to achieve (1 − 1/e)-approximation guarantees (Nemhauser et al., 1978); **polymatroid structure** — where feasible sets form a matroid and greedy algorithms return exact optima; **total unimodularity** — a combinatorial property of constraint matrices guaranteeing that every vertex of the LP feasible polytope is integral; and **supermodularity** — arising in coverage, influence maximisation, and certain welfare maximisation problems, enabling complementary algorithmic approaches. The problem of maximising a submodular function subject to cardinality constraints — the "feature selection" structure — admits the celebrated (1 − 1/e) ≈ 0.632 approximation ratio that is known to be tight under P ≠ NP, making it one of the most elegant results in approximation theory. Understanding which structural property a problem instance possesses — or whether it can be reformulated to possess one — is the central modelling challenge of combinatorial optimisation practice.

  ## About

  Combinatorial optimisation sits at the intersection of [[Mathematical Optimisation]], [[Algorithm]] design, and [[Computational Complexity]] theory. Its central subject is the class of problems in which a best object must be selected from a set that is implicitly defined — often as exponentially large as 2^n or n! — over discrete mathematical structures such as graphs, sequences, binary vectors, and integer lattices. The defining characteristic differentiating combinatorial from [[Convex Optimisation]] is the absence of useful local structure: the neighbourhood of a solution gives no gradient pointing reliably towards global optimum, and the feasible set is typically non-convex and disconnected in any embedding into real space. A continuous optimisation problem such as minimising a smooth bowl-shaped function can be solved by following the gradient downhill until reaching the bottom; in a combinatorial problem the landscape may look like a jagged mountain range with no gradient to follow and millions of local valleys, each indistinguishable from the global minimum without exhaustive search. This structural gulf means that the powerful machinery of calculus-based [[Optimisation]] — gradient descent, Newton methods, interior-point algorithms — cannot be applied directly, and fundamentally different algorithmic paradigms are needed. The problem instances encountered in practice span an enormous range of scales and structures: a logistics company routing ten delivery vehicles through fifty locations deals with an instance small enough for exact methods to handle in seconds; the same company routing a thousand vehicles through ten thousand locations faces an instance where even identifying a feasible schedule, let alone an optimal one, requires expert modelling and hours of solver time.
    - The formal study of these problems was catalysed by the NP-completeness theory of Cook (1971) and Karp (1972), who established that dozens of practically vital problems — including satisfiability, [[Graph Colouring]], the [[Knapsack Problem]], the [[Travelling Salesman Problem]], and job-shop [[Scheduling]] — share the property that any polynomial-time algorithm for one would imply polynomial-time algorithms for all (P = NP). Since this equivalence is widely believed to be false, the field has developed along three productive lines. First, exact solvers — [[Branch and Bound]], branch-and-cut, cutting-plane algorithms, and [[Dynamic Programming]] — that guarantee optimality but face worst-case exponential running time. Modern commercial solvers such as Gurobi and CPLEX, and open-source tools such as Google OR-Tools CP-SAT, achieve remarkable practical performance on structured instances by combining LP relaxation tightening with sophisticated branching heuristics. These solvers embed decades of mathematical research: Gomory cutting planes (1958), Dantzig–Fulkerson–Johnson TSP cutting planes (1954), Benders decomposition, Lagrangian relaxation, and more recently machine-learning-guided variable selection. The empirical success of these tools means that in many application domains — airline crew scheduling, chip design, electricity market clearing — exact MIP solvers regularly find provably optimal solutions for instances that would have been unsolvable a decade ago. Second, [[Approximation Algorithm]]s provide polynomial-time procedures with provable worst-case quality guarantees: the Christofides (1976) 3/2-approximation for metric [[Travelling Salesman Problem]] held as the best known for 45 years before being improved by Karlin, Klein, and Gharan (2021, STOC) to 3/2 − ε for an unspecified but positive ε. PTAS (polynomial-time approximation scheme) and FPTAS results exist for many knapsack variants and bin-packing sub-problems. Third, [[Metaheuristic]] and population-based methods — including [[Simulated Annealing]], [[Tabu Search]], [[Genetic Algorithm]]s, and [[Swarm Intelligence]] — sacrifice guarantees for empirical scalability to very large instances. These are the workhorses of industrial combinatorial optimisation: major logistics and manufacturing firms run proprietary tabu search and evolutionary algorithm implementations on instances with hundreds of thousands of variables where exact methods are computationally infeasible.
    - Since roughly 2019 a fourth strand has emerged: machine learning–augmented solvers that blur the boundary between [[Machine Learning]] and classical combinatorial optimisation. [[Reinforcement Learning]] methods trained on distributions of problem instances learn policies for branching decisions, variable ordering, and neighbourhood selection within exact and heuristic solvers; [[Graph Neural Network]]s represent problem structure as graphs and predict solution quality, feasibility, or partial assignments; and end-to-end learned heuristics — based on Pointer Networks (Vinyals et al., 2015), the Attention Model (Kool et al., 2019), and subsequent architectures — can construct near-optimal tours for [[Travelling Salesman Problem]] instances without any classical algorithmic component. At NeurIPS 2024, the EURO–NeurIPS Vehicle Routing Challenge was won by a combinatorial-optimisation-enriched machine learning approach (Baty et al., 2024), demonstrating that neural methods can achieve state-of-the-art performance when carefully integrated with classical constraints. However, the FrontierCO benchmark (2025), the first large-scale evaluation of ML solvers on real-world problem instances rather than synthetic benchmarks, showed that for large, heterogeneous industrial instances of [[Vehicle Routing Problem]] and scheduling, well-tuned Gurobi and OR-Tools configurations still outperform learned solvers, highlighting that generalisation across instance distributions remains a central challenge for the field. A fifth, still nascent, strand involves quantum-inspired and hybrid quantum-classical approaches: problems reformulated as Quadratic Unconstrained Binary Optimisation (QUBO) instances have been submitted to D-Wave quantum annealers and QAOA circuits on IBM and Google hardware; as of early 2026, these approaches are competitive with classical heuristics only for problem sizes of tens to a few hundred binary variables, and the fundamental question of whether quantum hardware will provide practical combinatorial optimisation advantage remains open. Large language models have also entered the picture, with preliminary work (arXiv, 2025) showing that LLMs can generate problem-specific heuristic code and assist in problem formulation, though they are not yet competitive solvers for hard NP instances in the way that specialised exact or heuristic software is.
  - ## Components / Architecture
    - **Exact methods** solve to certified optimality at the cost of worst-case exponential time. [[Branch and Bound]] (Land and Doig, 1960) partitions the solution space into a tree of sub-problems, solves LP relaxations to obtain lower bounds, and prunes branches whose relaxed bound cannot improve the best known solution. In practice, modern branch-and-bound implementations incorporate an extensive toolkit: LP relaxation at each node (solved by the Simplex algorithm or an interior-point method), preprocessing and probing to tighten variable bounds, node selection heuristics (best-first, depth-first, best-estimate), variable selection heuristics (pseudocost branching, strong branching, ML-guided branching), cutting-plane separation to tighten relaxations between branch nodes, and primal heuristics to find good incumbents quickly. Cutting-plane methods (Gomory, 1958; Dantzig–Fulkerson–Johnson, 1954) iteratively add valid linear inequalities to the LP relaxation that exclude fractional solutions without removing any integer-feasible point; families of cuts include Chvátal–Gomory cuts, Lift-and-Project cuts, mixed-integer rounding cuts, and problem-specific cuts such as subtour-elimination constraints for TSP. [[Dynamic Programming]] (Bellman, 1957) exploits optimal substructure: the Held–Karp algorithm solves TSP exactly in O(2^n · n²) time and O(2^n · n) space, polynomial for n ≤ 20 but exponential in practice. Column generation decomposes large-scale problems with exponentially many variables (as arise in crew scheduling, vehicle routing with route enumeration, and cutting stock) into a restricted master problem and a pricing sub-problem, adding columns as needed; combined with branch-and-bound this gives branch-and-price.
    - **[[Approximation Algorithm]]s** provide polynomial-time guarantees on solution quality. The Christofides algorithm (1976) achieves a 3/2-approximation for metric [[Travelling Salesman Problem]] by (1) constructing a minimum spanning tree T, (2) finding a minimum-weight perfect matching M on the odd-degree vertices of T, (3) forming an Eulerian multigraph T ∪ M, (4) finding an Eulerian circuit, and (5) shortcutting repeated vertices. The triangle inequality ensures shortcuts cannot increase total tour length. The Karlin–Klein–Gharan algorithm (2021) broke the 45-year barrier by achieving 3/2 − ε for a small but unspecified ε, using a random spanning tree technique (maximum entropy spanning tree) with a refined analysis. For the [[Knapsack Problem]], a Fully Polynomial-Time Approximation Scheme (FPTAS) achieves (1 − ε)-optimal solutions in O(n/ε²) time for any ε > 0 by scaling and rounding profits. For graph colouring and certain other problems, strong inapproximability results (from the PCP theorem) rule out efficient approximation to within any constant factor unless P = NP.
    - **[[Metaheuristic]]s** are high-level template frameworks that guide search across the solution landscape without problem-specific gradient information. [[Simulated Annealing]] (Kirkpatrick, Gelatt, Vecchi, 1983) begins from a random starting solution and iteratively proposes random neighbouring solutions, accepting improvements always and worsening moves with probability exp(−Δ/T) where T is a temperature that decreases over time (annealing schedule). This probabilistic acceptance allows escape from local optima. [[Tabu Search]] (Glover, 1989) maintains a short-term memory structure (the tabu list) recording recently visited solutions or recently applied moves, forbidding their reconsideration for a tenure period; a long-term memory component (intensification and diversification) guides the search globally. [[Genetic Algorithm]]s (Holland, 1975) maintain a population of candidate solutions encoded as chromosomes, applying selection (proportional to fitness), crossover (recombination of parent chromosomes), and mutation (random perturbation of offspring) operators across generations, evolving the population toward high-quality regions. [[Swarm Intelligence]] methods include Ant Colony Optimisation (Dorigo and Gambardella, 1997), which builds solutions by simulating pheromone-reinforced trail following — shorter trails accumulate more pheromone and attract more ants in subsequent iterations — and Particle Swarm Optimisation, adapted to discrete spaces via velocity clamping or binary encoding.
    - **Neural combinatorial optimisation** uses [[Machine Learning]] to learn construction and improvement heuristics from data. Pointer Networks (Vinyals et al., 2015) introduced an encoder-decoder architecture with an attention-based pointer mechanism that, given a set of city coordinates, produces a tour by sequentially attending to and selecting unvisited cities. The Attention Model (Kool et al., 2019) refined this with a Transformer encoder and REINFORCE training, achieving strong performance on random TSP and [[Vehicle Routing Problem]] instances. [[Graph Neural Network]] approaches encode problem structure as a graph (cities as nodes, edge weights as features) and either directly predict solution quality for each candidate assignment (used in branch-and-bound integration) or guide local search improvement operators. Learning to branch (Khalil et al., 2016; Gasse et al., 2019) trains [[Graph Neural Network]]s on branch-and-bound trees to imitate or surpass expert branching heuristics (strong branching), dramatically reducing the number of tree nodes explored without sacrificing optimality certificates.
  - ## Use Cases / Major Families
    - **Routing and Logistics**: the [[Vehicle Routing Problem]] family — capacitated VRP, VRP with time windows (VRPTW), multi-depot VRP, pickup-and-delivery VRP, and the [[Travelling Salesman Problem]] as its single-vehicle special case — underpins last-mile parcel delivery, grocery home delivery, emergency response dispatch, field service engineering, and public transport scheduling. UPS processes roughly 20 million packages per day and reports saving over 100 million driving miles annually through route optimisation; Amazon's last-mile routing research team publishes regular improvements to its proprietary VRP solvers. The VRPTW with stochastic demand is one of the most actively studied problems in the academic operations research literature, and winning solutions to the EURO–NeurIPS 2024 Vehicle Routing Challenge combined classical branch-and-cut with neural heuristics. The associated [[Planning and Scheduling]] literature encompasses train crew rostering, airline flight crew pairing (a set-partitioning integer programme with tens of millions of variables solved nightly by every major airline), and NHS surgical theatre scheduling.
    - **Production Scheduling**: job-shop and flow-shop [[Scheduling]] problems assign a set of operations, each requiring a specific machine for a given duration, subject to precedence constraints and machine capacity, minimising makespan, lateness, or weighted tardiness. These problems are NP-hard even in their simplest forms (three machines, general job-shop). Semiconductor wafer fabrication involves thousands of jobs and hundreds of tools requiring cycle-time optimisation that runs continuously; automotive just-in-time sequencing on assembly lines requires real-time scheduling updates as vehicles are added or removed; and NHS surgical theatre scheduling must accommodate surgeon availability, equipment constraints, and clinical priority simultaneously. The Sheffield Advanced Manufacturing Research Centre and similar bodies have applied MIP and metaheuristic scheduling to aerospace component machining, where machine utilisation directly impacts contract profitability.
    - **Network Design**: minimum spanning tree problems are polynomially solvable (Kruskal's and Prim's algorithms), but Steiner tree (connecting a required subset of nodes at minimum cost), capacitated network design (choosing edge capacities subject to routing demands), and facility location (choosing warehouse or relay station locations) are all NP-hard. Telecoms companies use integer programming for fibre-optic network layout, balancing installation cost against bandwidth delivery; energy companies use combinatorial optimisation for electricity transmission grid expansion planning; and the UK government's broadband roll-out programme applies network design models to prioritise rural fibre installation.
    - **Resource Allocation and Assignment**: the [[Knapsack Problem]] in its binary form (choose a subset of items with weights and values such that total weight does not exceed capacity and total value is maximised) models capital project selection, satellite bandwidth allocation, and cloud VM bin-packing. Multiple-knapsack and generalised assignment variants model multi-resource, multi-agent problems. Matching problems — bipartite matching (polynomial, solved by the Hungarian algorithm), stable matching (Gale–Shapley algorithm, polynomial), and quadratic assignment (NP-hard, models chip layout and hospital department placement) — arise in personnel rostering, medical residency matching, and hardware placement optimisation.
    - **[[Constraint Satisfaction]]**: many combinatorial optimisation problems are naturally modelled as weighted constraint satisfaction problems (WCSPs) or constraint optimisation problems (COPs), solved by [[Constraint Solver]]s such as Google OR-Tools CP-SAT, MiniZinc/Gecode, Choco, and IBM CP Optimizer. CP solvers propagate constraints to prune the search space and are particularly effective on scheduling and configuration problems with rich logical structure that is hard to express in a linear programming model. The integration of CP and MIP (hybrid solvers) has produced the best results on many practical scheduling benchmarks.
    - **[[Hyperparameter Optimisation]] and [[Neural Architecture Search]]**: the problem of choosing neural network architecture and training hyperparameters has combinatorial and mixed-integer structure — number of layers, layer types, skip connections, learning rate schedules, regularisation choices. [[Neural Architecture Search]] methods range from random search and evolutionary algorithms to differentiable NAS (DARTS), reinforcement learning controllers (NAS with RL, Zoph and Le 2017), and multi-fidelity [[Bayesian Optimisation]] with [[Hyperparameter Optimisation]] frameworks such as Optuna, Ray Tune, and SMAC. The combinatorial explosion of architecture spaces (NASBench-101 contains 423,624 unique architectures) makes efficient search critical.
    - **Quantum QUBO applications**: problems reformulated as Quadratic Unconstrained Binary Optimisation — a canonical form min x^T Q x over binary vectors x, where Q encodes the objective and penalty terms for constraints — are the native problem class for quantum annealers (D-Wave 2000Q and Advantage) and the target of QAOA circuits on gate-based quantum hardware. As of 2026, D-Wave Advantage's 5000-qubit processor can embed QUBO instances with several hundred variables within its Chimera and Pegasus connectivity graphs; the VeloxQ classical QUBO solver (arXiv 2501.19221, 2025) provides a competitive classical baseline that quantum hardware must surpass to demonstrate utility, and currently does so for all but the smallest instance sizes.
  - ## Academic Context
    - The theoretical foundations of combinatorial optimisation trace back to Euler's analysis of the Königsberg bridge problem (1736), which introduced [[Graph Theory]] and the concept of Eulerian paths as a formal mathematical object. The modern field crystallised around three major developments in the twentieth century. First, linear programming was formulated by Dantzig (1947) and the Simplex algorithm provided the first systematic method for continuous resource allocation; the LP relaxation of discrete problems became the cornerstone of branch-and-cut. Second, the theory of NP-completeness — Cook's theorem (1971) proving satisfiability is NP-complete, and Karp's (1972) landmark paper establishing 21 combinatorial problems as NP-complete by polynomial reduction — gave the field a precise complexity-theoretic language for hardness. Third, Edmonds' work (1965–1972) on matroids, matching, and polyhedral combinatorics established that many problems previously thought hard actually admit polynomial algorithms when their structure is properly understood, and introduced the notion of "good characterisation" and combinatorial optimisation duality that drives modern polyhedral methods. The ellipsoid algorithm (Khachiyan, 1979) proved LP is in polynomial time, and Karmarkar's interior-point algorithm (1984) gave a practically fast alternative to Simplex. The approximability landscape was mapped by the PCP (Probabilistically Checkable Proofs) theorem (Arora, Lund, Motwani, Sudan, Szegedy, 1998), which enabled tight inapproximability results — for instance, approximating graph colouring or clique to within any polynomial factor is as hard as solving NP-hard problems exactly.
    - Key academic communities include: the mathematical programming community centred on the Mathematical Programming Society (MPS) and its journal Mathematical Programming; the theoretical computer science community publishing at STOC, FOCS, and SODA; the [[Operations Research]] community at INFORMS and EURO; and the ML4CO community crossing into machine learning. The NATCOR (National Taught Course Centre for Operational Research) network in the UK delivers postgraduate training in combinatorial optimisation and [[Operations Research]] across a network including Southampton, Warwick, Lancaster, Edinburgh, Leeds, and Nottingham, training hundreds of PhD students annually. The CO2024 conference (University of Southampton, June 2024), as the 22nd edition of the long-running Combinatorial Optimization conference series, convened European researchers working on approximation algorithms, polyhedral combinatorics, and exact solvers. Oxford's Department of Computer Science offers a dedicated graduate course in Combinatorial Optimisation in its 2024–2025 curriculum. The neural combinatorial optimisation sub-field has active workshop tracks at NeurIPS (ML4CO workshop, running since 2021), ICLR, and ICML; the EURO–NeurIPS 2024 Vehicle Routing Challenge drew over one hundred competing teams. The FrontierCO benchmark (2025) provides the first comprehensive large-scale real-world evaluation of ML solvers, filling a critical gap in the field's empirical grounding.
  - ## Current Landscape (2026)
    - The combinatorial optimisation solver ecosystem in 2026 is characterised by the dominance of mature commercial and open-source exact solvers, rapid progress in neural methods, and early but unproven quantum approaches. **Gurobi 11** (released 2024, Gurobi Optimization LLC) and **IBM CPLEX 22.1** remain the dominant commercial MIP solvers, routinely solving mixed-integer programmes with thousands of integer variables to proven optimality within minutes on modern hardware; both have incorporated machine learning–guided branching heuristics internally, reducing average solve times by 20–40% over prior versions on standard benchmarks. **Google OR-Tools CP-SAT** has achieved competitive or superior performance to commercial solvers on many scheduling and routing benchmarks, particularly for highly-constrained problems better suited to constraint programming than MIP, and is freely available under an Apache 2.0 licence. **HiGHS** (University of Edinburgh, Julian Hall et al.) is now the default open-source LP and MIP solver embedded in SciPy (Python) and Julia's JuMP modelling framework, representing a significant UK contribution to the global toolchain; its 2024 paper in Mathematical Programming Computation documents performance competitive with older versions of commercial solvers on LP benchmarks. **SCIP 9** (ZIB Berlin) remains the leading academic non-commercial MIP solver for research and educational use.
    - Neural combinatorial optimisation has matured from proof-of-concept to a research sub-field with dedicated benchmarks, competitions, and industrial interest. As of 2025, the FrontierCO evaluation — the first benchmark using real-world rather than synthetic combinatorial optimisation instances — shows that end-to-end learned solvers still underperform Gurobi + domain-specific heuristics on large heterogeneous instances of [[Vehicle Routing Problem]] and job-shop [[Scheduling]], but are competitive on medium-scale standardised benchmark instances. Research from Shanghai Jiao Tong's Thinklab group, DeepMind, Meta FAIR, and ETH Zurich is advancing the frontier on multi-task neural solvers that generalise across problem types and instance distributions. The Combinatorial Optimisation Augmented Machine Learning (COAML) paradigm (arXiv 2601.10583, 2025) integrates differentiable combinatorial optimisation layers into neural networks, enabling end-to-end training for tasks that require discrete decision-making as a sub-component.
    - Quantum-inspired and quantum approaches remain in the research phase. Quantum-inspired tensor-network methods and simulated-bifurcation algorithms show competitive performance on QUBO problems with hundreds to low thousands of variables. The VeloxQ solver (arXiv 2501.19221, 2025) represents a new generation of fast classical QUBO solvers that quantum hardware must outperform to demonstrate practical quantum advantage on combinatorial problems. The quantum search algorithm of Grover (1996) provides a quadratic speed-up for unstructured search, translating to a √2^n improvement for brute-force combinatorial search, but this advantage is too small to close the exponential gap for NP-hard problems at practically relevant instance sizes. Hybrid quantum-classical branch-and-bound algorithms under active research (arXiv 2603.28933) seek to exploit quantum search for sub-problems within a classical framework, but fault-tolerant quantum hardware capable of running these circuits is not yet available.
    - Large language models have entered combinatorial optimisation in an auxiliary capacity: systems like FunSearch (DeepMind, 2023) and subsequent work use LLMs to generate heuristic code that is then evaluated on problem instances, effectively making LLMs a generator of metaheuristics rather than a direct solver. A 2025 arXiv paper (2508.18091) systematically studied LLM reasoning on mathematical decision-making via optimisation, finding that while LLMs can express combinatorial problems formally and reason about small instances, they make systematic errors on larger instances and cannot compete with classical solvers on standard benchmarks.
  - ## UK Context
    - The UK has deep and sustained academic expertise in combinatorial optimisation and [[Operations Research]], anchored by the Operational Research Society (ORS), founded 1953, which is the world's oldest OR professional society and publishes the Journal of the Operational Research Society. The UK's academic infrastructure for this field is notably well-organised: NATCOR (National Taught Course Centre for Operational Research) provides a structured postgraduate training programme spanning the Universities of Southampton, Warwick, Lancaster, Edinburgh, Leeds, and Nottingham, offering residential courses on exact methods, metaheuristics, stochastic optimisation, and applications to logistics and healthcare, attended by hundreds of doctoral students across the country annually.
    - **University of Edinburgh** plays a uniquely important role through two contributions: the School of Mathematics hosts the Optimisation and Operational Research (OOR) group with research in combinatorial optimisation theory, network optimisation, and energy systems applications including electricity market design and wind farm layout optimisation; and the development of the HiGHS linear and mixed-integer programming solver (Julian Hall and colleagues), now the default open-source LP/MIP solver embedded in SciPy (Python's scientific computing stack) and in JuMP (Julia's mathematical optimisation framework), making Edinburgh-developed software the standard tool for LP and MIP computation worldwide in open-source contexts. PhD programmes in Optimisation and Operational Research are offered jointly by the School of Mathematics and the Business School.
    - **University of Warwick**: the Operations Research and Management Sciences (ORMS) group at Warwick Business School conducts combinatorial optimisation research with particular applications in health service planning (NHS theatre and ward scheduling, ambulance positioning), public transport (bus and rail timetabling), and supply chain network design. Warwick's Centre for Operational Research, Management Science and Information Systems (CORMSIS, jointly with Southampton) is a hub for scheduling theory and application.
    - **University of Southampton**: hosted the CO2024 (22nd Combinatorial Optimisation Conference, June 2024) and has strong groups in scheduling theory, graph theory, and network optimisation. Southampton's OR group has longstanding work on exact algorithms for bin packing, vehicle routing, and cutting and packing problems.
    - **Alan Turing Institute** (London): the national data science and AI institute has programmes in data-centric engineering and mathematical optimisation, including combinatorial problems arising in transport, energy, and manufacturing sectors. Several Turing Fellows work on machine learning for combinatorial optimisation.
    - **Northern industrial context**: the UK's northern cities provide real-world combinatorial optimisation demand at scale. Manchester's logistics sector — home to major parcel carriers, a large e-commerce fulfilment cluster, and the UK's largest inland port at Salford Quays (Manchester Ship Canal) — creates sustained demand for [[Vehicle Routing Problem]] solutions; the University of Manchester's Alliance Manchester Business School has an active OR group with logistics applications. Sheffield's Advanced Manufacturing Research Centre (AMRC) applies combinatorial scheduling to aerospace and automotive component machining at Rolls-Royce and Boeing supply-chain partners; Sheffield Hallam University has applied metaheuristic scheduling to NHS workforce planning. Leeds's NHS trust system has piloted MIP-based surgical theatre scheduling jointly with the University of Leeds's transport and OR group. Newcastle's combined authority uses combinatorial routing algorithms for Tyne and Wear Metro timetable optimisation and for integrating bus and metro services in the North East Devolution Deal transport plan. The University of Leeds has an active group in transport network optimisation, with applied work on rail station access, freight rail network design, and urban mobility modelling.
  - ## Future Directions (2026–2030)
    - The outlook for combinatorial optimisation over the next five years is shaped by four converging forces: the maturing of neural combinatorial optimisation, the prospects of quantum hardware, the integration of LLMs into optimisation pipelines, and growing regulatory and ethical demands on automated decision systems.
    - **Foundation models for combinatorial optimisation**: the field is moving towards large pre-trained models that generalise across problem types (TSP, VRP, bin packing, scheduling) and instance distributions, analogous to how large language models generalise across NLP tasks. Early multi-task neural solvers (Uni-CO, 2025; and related architectures) show that a single model can achieve competitive performance across several combinatorial problem classes, suggesting that a "combinatorial optimisation foundation model" pre-trained on millions of problem instances may be feasible within the next few years. This would enable fine-tuning for specific industry domains (logistics, chip design, scheduling) with relatively little problem-specific data.
    - **Hybrid quantum-classical solvers**: fault-tolerant quantum computers with hundreds of logical qubits are projected to become available around 2028–2031 by major hardware providers (IBM, Google, IonQ). At those scales, Grover's algorithm and quantum versions of dynamic programming may provide asymptotic advantages for specific combinatorial sub-problems. More immediately, variational quantum algorithms (QAOA) running on near-term noisy hardware are being actively studied for QUBO formulations of MAX-CUT and portfolio optimisation, though the crossover point where they outperform the best classical algorithms remains a major open question. Quantum-inspired algorithms (tensor network methods, simulated bifurcation, simulated annealing on digital hardware) are already providing practical value on industrial QUBO problems and will likely converge with quantum hardware approaches in a hybrid architecture.
    - **LLM-guided search and automated heuristic design**: the FunSearch paradigm (DeepMind, 2023–2024) — using LLMs to iteratively generate, evaluate, and improve heuristic code — is being extended to broader problem classes. Microsoft Research and Google DeepMind are exploring LLMs that generate cutting planes, variable selection policies, and problem reformulations that are inserted into classical MIP solvers. This "LLM as optimisation assistant" paradigm does not replace solvers but accelerates the expert modelling and algorithm design process.
    - **Real-time and online combinatorial optimisation**: logistics and mobility applications increasingly require solutions under dynamic, uncertain conditions — ride-share dispatch, real-time parcel routing as new orders arrive, adaptive manufacturing scheduling as machines fail or jobs are cancelled. [[Reinforcement Learning]]-based policies that map current system state to dispatching or routing decisions are replacing static solve-then-execute workflows; the challenge is to provide formal guarantees or at least quantified risk bounds for these learned policies.
    - **Explainable and fair combinatorial optimisation**: the EU AI Act (2024) and similar regulations in the UK post-Brexit AI strategy impose transparency requirements on automated decision systems in high-risk domains including logistics workforce management, NHS resource allocation, and public service routing. Research into combinatorial models with built-in fairness constraints (equitable distribution of workload across delivery drivers, equitable patient wait time across NHS trusts) and interpretable solution certificates that non-experts can audit is growing. The [[Decision Making]] literature in multi-criteria and multi-objective optimisation intersects here, with [[Multi Objective Optimisation]] frameworks enabling explicit trade-off exploration between efficiency and equity.
    - **Integration with large-scale simulation and digital twins**: manufacturing, transport, and energy sectors are building digital-twin environments — real-time simulation models of physical systems — that create demand for combinatorial solvers embedded in closed-loop simulation-optimisation pipelines. The combinatorial optimisation problem in a digital twin is inherently dynamic and multi-scale: optimal decisions must be recomputed as the simulation state evolves, driving research into warm-starting, incremental solving, and learned approximate solvers that can produce good solutions at the millisecond timescales required for real-time control.
  - ## Problem Formulation and Modelling
    - The process of applying combinatorial optimisation to a real-world problem requires translating domain knowledge into a formal mathematical model. This modelling step is as critical as the algorithmic solution step: a poor model (incorrect constraints, ill-specified objective, missing decision variables) will produce an optimal mathematical solution that is practically useless. The standard modelling language for combinatorial optimisation is [[Integer Programming]]: binary (0/1) decision variables encode yes/no choices (include a route, assign a worker, open a facility), general integer variables encode quantities or sequences, and linear constraints express logical relationships, capacity limits, and flow conservation. The power of binary variable encoding is that essentially any logical relationship — "if facility i is open, then at least one customer must be assigned to it"; "at most two out of five technologies can be selected"; "route j can only be included if vehicle k is dispatched" — can be expressed as a linear inequality over binary variables, making MIP an extremely expressive modelling formalism.
    - Dedicated modelling languages and APIs have been developed to separate the model from the solver: AMPL (A Mathematical Programming Language) and GAMS are classic standalone modelling languages; more recent Python-native APIs include Pyomo (open source, solver-agnostic), PuLP (lightweight, OR-Tools and CBC backend), and the commercial Gurobi Python API (gurobipy) and CPLEX Python API (docplex). The Google OR-Tools CP-SAT solver has its own Python modelling API (ortools.sat.python.cp_model) that blends MIP and [[Constraint Satisfaction]] paradigms. For routing specifically, OR-Tools provides a high-level Routing Model API that handles [[Vehicle Routing Problem]] variants including time windows, capacity constraints, pickups and deliveries, and multi-depot routing without requiring the user to write an explicit MIP formulation. These abstraction layers are critical for practitioner adoption: a logistics data scientist at a UK delivery company does not need to understand LP relaxation theory to solve a 1,000-customer VRPTW using OR-Tools, but the practitioner who understands the underlying [[Computational Complexity]] and solver theory will be far better equipped to handle the cases where the default settings fail or the problem is too large for out-of-the-box tools.
    - Constraint programming ([[Constraint Satisfaction]] models) provides an alternative modelling paradigm particularly suited to highly-constrained scheduling and configuration problems: variables range over discrete domains, constraints are propagated to prune domains iteratively (constraint propagation), and search explores remaining choices via backtracking. CP models are often more natural than MIP models for problems with complex logical structure. The OR-Tools CP-SAT solver implements both CP and MIP solving in a hybrid architecture that automatically selects the most effective technique per problem sub-structure, and has achieved competitive or superior performance to pure MIP approaches on many scheduling benchmarks.
    - Uncertainty and robustness add further modelling dimensions: stochastic combinatorial optimisation (where demand, travel times, or costs are random variables with known distributions) leads to stochastic programming (two-stage and multi-stage), chance-constrained programming, and distributionally robust optimisation models. Robust combinatorial optimisation (where uncertainty is modelled as a set of scenarios) seeks solutions that perform well across the worst-case scenario, connecting to min-max and regret-based formulations. These generalisations are computationally harder than their deterministic counterparts but are essential for real-world applications where plans must remain feasible and near-optimal when reality deviates from forecasts.

  - ## Key Terminology
    - **[[NP-Hardness]]**: a problem is NP-hard if every problem in NP (the class of problems whose solutions can be verified in polynomial time) can be reduced to it in polynomial time. If P ≠ NP (widely believed to be true), no polynomial-time algorithm solves all instances of an NP-hard problem. NP-hard combinatorial problems include [[Travelling Salesman Problem]], [[Knapsack Problem]], [[Graph Colouring]], bin-packing, and hundreds of scheduling, routing, and network design variants. The NP-hardness of a problem does not preclude practical solution: it is a worst-case statement, and specific instance classes (with special structure, small size, or near-optimality tolerance) are routinely solved efficiently.
    - **[[Computational Complexity]]**: the theoretical study of the resource requirements (time, space, randomness) of computation, providing the formal language for classifying problems as P, NP, NP-complete, #P-hard, PSPACE-complete, and so on. The P vs NP question — whether every problem whose solution can be verified in polynomial time can also be solved in polynomial time — is the central open problem in computer science and the foundational question of combinatorial optimisation complexity.
    - **Approximation ratio**: the worst-case ratio of the approximate solution value to the optimal, providing a quality guarantee independent of instance. A (3/2)-approximation [[Approximation Algorithm]] for the metric [[Travelling Salesman Problem]] guarantees that for any input instance, the tour it outputs has length at most 1.5 times the length of the optimal tour. Achieving tight (non-improvable) approximation ratios for many problems is itself a deep research problem, settled by the PCP theorem and inapproximability theory.
    - **LP relaxation**: the continuous [[Linear Programming]] programme obtained by dropping integrality constraints, used as a lower bound (for minimisation) in [[Branch and Bound]]. The LP relaxation is solved by the Simplex method or interior-point methods in polynomial time; its optimal value provides a bound on the integer optimal value. The difference between the LP relaxation optimum and the integer optimum (the "integrality gap") characterises how much work [[Branch and Bound]] must do.
    - **QUBO (Quadratic Unconstrained Binary Optimisation)**: a canonical form min_{x ∈ {0,1}^n} x^T Q x for a symmetric matrix Q, into which a wide range of combinatorial optimisation problems (MAX-CUT, graph colouring, [[Knapsack Problem]], portfolio optimisation) can be encoded via penalty terms. QUBO is the native problem class for quantum annealers (D-Wave) and the input form for QAOA circuits on gate-based [[Quantum Computing]] hardware. Classical QUBO solvers (simulated annealing, simulated bifurcation, Fujitsu Digital Annealer) are active competitors.
    - **[[Metaheuristic]]**: a high-level problem-independent framework that guides problem-specific heuristics (constructive heuristics, [[Local Search]] operators) through the solution landscape without gradient information. Key families: trajectory methods ([[Simulated Annealing]], [[Tabu Search]], Variable Neighbourhood Search) and population methods ([[Genetic Algorithm]], Ant Colony Optimisation, [[Swarm Intelligence]]). The No Free Lunch theorem implies that no single metaheuristic outperforms all others across all problem distributions; selection of the appropriate metaheuristic requires domain knowledge.
    - **[[Branch and Bound]]**: an exact tree-search algorithm that implicitly enumerates all candidate solutions by partitioning the solution space into a tree of sub-problems, solving LP relaxations to obtain bounds at each node, and pruning sub-trees whose bounds certify they cannot contain solutions better than the best known. The algorithm's practical performance depends heavily on the quality of bounds (tight LP relaxation, good cutting planes) and the effectiveness of branching rules. Modern MIP solvers (Gurobi, CPLEX, OR-Tools) implement hundreds of algorithmic extensions to the core branch-and-bound framework.
    - **Cutting plane**: a valid linear inequality that, when added to the LP relaxation, does not exclude any integer-feasible point but does exclude some fractional (non-integer) points, thereby tightening the bound without losing integer solutions. Named examples: Gomory cuts (generated from the simplex tableau), mixed-integer rounding cuts, clique cuts, subtour-elimination inequalities for [[Travelling Salesman Problem]]. The separation problem (finding the most violated cutting plane from a given family for a given fractional point) is itself often computationally challenging and may require problem-specific combinatorial algorithms.
    - **Column generation**: a technique for solving LP or IP formulations with exponentially many variables by maintaining a restricted master problem with a subset of columns and iteratively solving a pricing sub-problem to identify new columns (corresponding to good routes, schedules, or patterns) that can improve the master objective. Branch-and-price integrates column generation within [[Branch and Bound]], yielding exact solutions to problems such as [[Vehicle Routing Problem]], crew scheduling, and cutting stock that would be intractable with direct enumeration.
    - **Lagrangian relaxation**: a technique for obtaining lower bounds by dualising a subset of hard constraints into the objective function, penalised by Lagrange multipliers. The Lagrangian dual (optimised over multiplier values) provides a bound on the true optimum, and is often tighter than the LP relaxation bound for problems with complicating constraints. Subgradient optimisation is used to maximise the Lagrangian dual.
    - **Fitness landscape**: in the context of [[Metaheuristic]] and [[Genetic Algorithm]] methods, the mapping from solution space to objective value, visualised as a landscape over the discrete solution set. Rugged landscapes with many local optima require diverse search strategies (large population in [[Genetic Algorithm]]s, aggressive diversification in [[Tabu Search]]); smooth, funnel-shaped landscapes converge faster. Landscape analysis techniques (fitness-distance correlation, local optima network analysis) help predict which metaheuristic families are most effective for a given problem class.
  - ## Intersection with Machine Learning and AI
    - The relationship between combinatorial optimisation and [[Machine Learning]] is deep and bidirectional. On one side, [[Machine Learning]] pipelines contain numerous combinatorial sub-problems: [[Neural Architecture Search]] over a combinatorial space of layer configurations and connection patterns; [[Hyperparameter Optimisation]] over mixed-integer spaces of learning rates, batch sizes, and regularisation coefficients; feature selection (selecting a subset of k features from n that maximises model quality, a combinatorial problem with ⌊n choose k⌋ candidates); data augmentation policy search; and optimal transport formulations used in domain adaptation and generative models. On the other side, [[Machine Learning]] is increasingly being applied to enhance combinatorial optimisation algorithms: [[Graph Neural Network]]s learn to predict variable assignments, branching decisions, and cut selection in MIP solvers; [[Reinforcement Learning]] learns construction and improvement heuristics for routing and scheduling; and graph-structured representations of problem instances enable data-driven meta-learning of algorithm selection (which solver or metaheuristic to apply to which problem class). The combination of [[Graph Neural Network]]s and combinatorial optimisation is particularly natural because many combinatorial problems are defined over graphs — the [[Vehicle Routing Problem]] over road networks, [[Graph Colouring]] over interference graphs, facility location over geographic graphs — and GNN encoders can represent these structures as learned node and edge embeddings that capture global structural properties useful for downstream search guidance.
    - [[Bayesian Optimisation]] provides a bridge between probabilistic [[Machine Learning]] and combinatorial optimisation: it models the objective function as a Gaussian process surrogate and selects the next point to evaluate using an acquisition function that trades off exploitation (evaluating near the current best) and exploration (evaluating in uncertain regions). For [[Hyperparameter Optimisation]], Bayesian optimisation over mixed-integer search spaces (using appropriate kernels for discrete variables) has become the dominant approach for expensive black-box objectives such as neural network training, where each evaluation may take hours. The Optuna, Ray Tune, and SMAC frameworks implement Bayesian optimisation over mixed-integer hyperparameter spaces.
    - [[Multi Objective Optimisation]] extends single-objective combinatorial optimisation to settings with multiple competing objectives — for example, minimising both cost and carbon emissions in vehicle routing, or maximising both throughput and fairness in resource allocation. The Pareto front (the set of solutions not dominated by any other feasible solution on all objectives simultaneously) is the solution concept, and algorithms such as NSGA-II ([[Genetic Algorithm]]-based multi-objective evolutionary algorithm), MOEA/D (decomposition-based multi-objective evolutionary algorithm), and scalarised MIP approaches (weighted sum, epsilon-constraint) are used to approximate or exactly compute the Pareto front.

  ## Problem Taxonomy and Complexity Classes

  Combinatorial optimisation problems can be systematically classified along four dimensions: their feasibility structure (what makes a solution feasible), their objective structure (what is being optimised), their complexity class (how hard the problem is in the worst case), and their instance structure (what properties typical instances have that enable efficient solution in practice).

  **By feasibility structure:**
  - **Subset problems**: the solution is a subset S* ⊆ E of a ground set E. Examples: [[Knapsack Problem]] (select subset of items satisfying weight constraint); Set Cover (select minimum-cost subset of sets covering all elements); maximum independent set (largest subset of graph vertices with no two adjacent). Most interesting subset problems are NP-hard.
  - **Permutation problems**: the solution is a permutation π* of a set of objects. Examples: [[Travelling Salesman Problem]] (permutation of cities minimising total tour distance); sequencing (permutation of jobs on a machine minimising weighted completion time); linear arrangement. Permutation problems have n! candidate solutions, making exact enumeration intractable even for n = 20.
  - **Graph problems**: the solution is a subgraph (set of vertices and/or edges) satisfying a structural property. Examples: [[Graph Colouring]] (assign colours to vertices so adjacent vertices differ); minimum spanning tree (polynomially solvable by Kruskal/Prim); Steiner tree (NP-hard); maximum clique (NP-hard); vertex cover.
  - **Integer assignment problems**: the solution assigns integer values x_i ∈ Z to decision variables. Examples: [[Integer Programming]] problems in general; bin packing; cutting stock; crew scheduling. These are the most general formulation and subsume all other types.
  - **Routing and flow problems**: the solution specifies flows, paths, or routes in a network. Network flow and bipartite matching are polynomially solvable; [[Vehicle Routing Problem]] with capacity constraints is NP-hard; the Steiner forest problem is NP-hard. The distinction between solvable routing problems (flow, matching) and NP-hard ones (VRP, Steiner) is determined by the presence or absence of capacity or coupling constraints.

  **By complexity class:**
  - **P (polynomial time)**: minimum spanning tree (Kruskal/Prim, O(E log V)); bipartite matching (Hungarian algorithm, O(V³)); network flow (Edmonds-Karp, O(VE²)); shortest path without negative cycles (Dijkstra); linear programming (polynomial via ellipsoid and interior-point methods). These problems have known efficient exact algorithms and do not require heuristics.
  - **NP-complete** (decision versions): satisfiability (SAT); graph 3-colouring; Hamiltonian cycle; partition problem; bin packing decision; TSP decision. Whether P = NP remains the central open question; if P = NP, all these admit polynomial algorithms.
  - **NP-hard** (optimisation versions): [[Travelling Salesman Problem]] (minimise tour length); [[Vehicle Routing Problem]]; [[Knapsack Problem]] (maximise value); maximum independent set; [[Graph Colouring]] (minimise colours). NP-hard optimisation problems do not have known polynomial exact algorithms, motivating exact methods with exponential worst-case time, [[Approximation Algorithm]]s, and [[Metaheuristic]]s.
  - **APX-hard**: problems not in PTAS (no polynomial-time approximation scheme) unless P = NP. Maximum independent set in degree-bounded graphs; shortest superstring; max-3-SAT. For these, even a constant-factor approximation is the best achievable in polynomial time unless P = NP.
  - **#P-hard** (counting problems): counting the number of satisfying assignments of a Boolean formula; counting perfect matchings in a general graph (Valiant, 1979). These are harder than NP-hard optimisation problems in a precise formal sense.

  **By instance structure (where exact methods succeed in practice):**
  - **Highly structured instances** (total unimodularity, network structure, tree structure): LP relaxation has integer optimal solutions; exact polynomial algorithms exist.
  - **Instances with tight LP relaxations** (small integrality gap): [[Branch and Bound]] terminates quickly because the LP bound is very close to the integer optimum; few branch-and-cut nodes are needed. Modern MIP solvers excel on these instances.
  - **Random instances** (no structure): typically harder than structured instances; exact solvers may be slower, but [[Metaheuristic]]s are often competitive.
  - **Real-world instances** (heterogeneous structure, multiple constraints): often easier than worst-case theory suggests because domain structure aids pruning; the FrontierCO benchmark (Huang et al., 2025) showed that Gurobi and OR-Tools significantly outperform neural solvers on real-world VRP and scheduling instances.

  ## Solver Selection Guide

  Practitioners selecting a solver for a combinatorial optimisation problem face a complex technology landscape. The following decision framework (derived from the operations research literature and practitioner experience) provides a structured guide:

  **Step 1: Problem classification**
  - Is the problem a standard problem class (TSP, VRP, scheduling, knapsack, assignment)? If so, use a dedicated solver or modelling framework for that class (OR-Tools Routing for VRP, CP-SAT for scheduling).
  - Is it a custom problem? Model it as a [[Constraint Satisfaction]] problem (CP) or [[Integer Programming]] (MIP) depending on constraint structure.
  - Is the feasible set structured (network flow, matching)? Use polynomial algorithms (scipy.optimize.linear_sum_assignment for assignment; networkx for network flow).

  **Step 2: Scale assessment**
  - Small instances (< 1,000 binary variables, < 1,000 constraints): commercial MIP solver (Gurobi, CPLEX) or academic solver (HiGHS, SCIP) will typically solve to optimality within seconds. Use exact methods.
  - Medium instances (1,000–100,000 variables): MIP solvers are effective with good modelling; CP-SAT competitive for scheduling/configuration; [[Metaheuristic]]s useful when time budget is limited.
  - Large instances (> 100,000 variables): [[Metaheuristic]]s or neural solvers typically required; MIP solver with time limit and warm-start from heuristic solution; Lagrangian relaxation or [[Approximate Algorithm]]s.

  **Step 3: Time budget**
  - Real-time (< 1 second): learned policy (RL-trained for specific distribution); fast [[Local Search]] neighbourhood exploration; precomputed lookup for small instances.
  - Near-real-time (1–60 seconds): fast [[Metaheuristic]] (greedy construction + [[Simulated Annealing]] or [[Tabu Search]]); OR-Tools CP-SAT with time limit.
  - Offline (minutes to hours): commercial MIP solver; branch-and-cut with problem-specific cuts; population-based [[Genetic Algorithm]]; column generation for structured problems.

  **Step 4: Solution quality requirement**
  - Provably optimal (with certificate): [[Branch and Bound]] with MIP solver; column generation; [[Dynamic Programming]] for small instances.
  - Bounded suboptimality (with approximation guarantee): [[Approximation Algorithm]] with known ratio; LP relaxation bound for certificate of distance from optimal.
  - Best-effort empirical quality (no guarantee): [[Metaheuristic]] with restart; neural heuristic; ensemble of multiple solver approaches.

  **Step 5: Open-source vs commercial**
  - Free for research and small commercial use: HiGHS (LP/MIP), SCIP (MIP), Google OR-Tools (routing, scheduling, CP-SAT), CBC (LP/MIP), Cbc, Clp.
  - Commercial licences (academic licences often free): Gurobi (industry-leading MIP performance, free academic licence), CPLEX (IBM, free for academia), MOSEK (conic programming).
  - Python ecosystem: `scipy.optimize` (LP/NLP, uses HiGHS for LP), `PuLP` (LP/MIP modelling, multiple solvers), `Pyomo` (modelling language), `gurobipy` (Gurobi Python API), `ortools` (Google OR-Tools Python).

  ## Classic Benchmark Problem Instances

  The combinatorial optimisation community maintains a set of canonical benchmark problem instances and libraries that serve as standardised evaluation platforms across solver generations. These benchmarks are essential for tracking progress and comparing competing approaches:

  **Travelling Salesman Problem benchmarks:**
  - TSPLIB (Reinelt, 1991): the oldest and most widely used TSP benchmark library, containing real-world and random instances ranging from 14 to 85,900 cities. The TSP benchmark records include: optimal tour for eil51 (51 cities, optimal = 426); optimal tour for berlin52 (52 cities, optimal = 7,542); optimal tour for d15112 (15,112 cities, Germany; solved by Concorde in 2001); optimal tour for pla85900 (85,900 cities; solved by Applegate, Bixby, Chvátal, Cook in 2006 using Concorde solver with 136 CPU-years). The Concorde solver (Applegate et al., 2006) remains the gold standard exact TSP solver.
  - Large-scale neural TSP benchmarks: random uniform instances with 100, 500, 1,000, 10,000 cities are standard in the neural combinatorial optimisation literature; optimal or near-optimal solutions for up to 1,000 cities are obtainable by Concorde.

  **Vehicle Routing Problem benchmarks:**
  - Solomon benchmark (Solomon, 1987): 56 instances with 100 customers, time windows, and a single depot; still widely used as a standard evaluation set for VRPTW algorithms.
  - Gehring-Homberger benchmark (Gehring & Homberger, 1999): larger instances with 200–1,000 customers; the standard large-scale VRPTW benchmark.
  - EURO-NeurIPS 2024 Vehicle Routing Challenge: dynamic VRP with time windows; won by Baty et al. (2024) with a hybrid neural-classical approach.

  **Scheduling benchmarks:**
  - OR-Library scheduling instances (Beasley, 1990): classic job-shop, flow-shop, and open-shop scheduling instances with up to 100 jobs and 10 machines; many instances remain open (best known solution not proven optimal).
  - JSP (job-shop scheduling problem) benchmark set: the "ft10" instance (10 machines, 10 jobs) was open for 26 years before being optimally solved by Carlier and Pinson (1989); "ft20" remains a challenge.

  **Mixed Integer Programming benchmarks:**
  - MIPLIB (Koch et al., 2011–2021): the standard MIP benchmark library, maintained collaboratively by the mathematical programming community. MIPLIB 2017 contains 1,065 instances across hundreds of problem types; instances range from trivially easy to computationally intractable. Gurobi, CPLEX, SCIP, and HiGHS publish regular performance comparisons on MIPLIB.
  - Mittelmann benchmarks (Hans Mittelmann, Arizona State): independent, regularly updated LP and MIP solver benchmarks widely used for comparing commercial and open-source solvers.

  **Quantum and QUBO benchmarks:**
  - MAX-CUT Gset benchmark (Goemans & Williamson, 1995): 54 graph instances for the maximum cut problem, the prototypical QUBO problem; best-known solutions serve as comparison points for quantum annealers and classical QUBO solvers.
  - D-Wave performance comparisons: NPJ Quantum Information benchmark (Kittichaikoonkij et al., 2025) compares D-Wave quantum annealing against Gurobi and Fixstars classical solvers on QUBO instances of sizes 111–663; Fixstars demonstrates highest accuracy while D-Wave provides lower execution time on hardware-embeddable instances.

  ## Computational Tools and Software Ecosystem

  The combinatorial optimisation software ecosystem in 2026 is mature and diverse, spanning commercial solvers, open-source tools, modelling languages, and Python libraries:

  **Commercial MIP solvers:**
  - Gurobi Optimizer v11 (2024): consistently top-ranked commercial MIP solver; incorporates ML-guided branching, MILP, MIQP, MIQCP, MINLP capabilities; free academic licence; Python API (gurobipy) and cloud API. Benchmarks show Gurobi is typically 2–10x faster than open-source alternatives on medium-to-large structured instances.
  - IBM CPLEX 22.1: mature commercial solver with comprehensive LP, QP, and MIP capabilities; strong in constraint programming via IBM CP Optimizer; free academic programme. IBM's Concert Technology C++ API and Python DOcplex are primary interfaces.
  - COPT (Cardinal Optimizer, 2020): newer commercial solver from Cardinal Operations, strong LP performance; outperforms Gurobi on LP benchmarks according to Mittelmann comparisons.

  **Open-source MIP and LP solvers:**
  - HiGHS (University of Edinburgh, Julian Hall et al.): default LP/MIP solver in SciPy (Python), JuMP (Julia), and numerous frameworks. Competitive with older commercial solvers on LP; weaker on large MIP. Key contribution: world-class LP simplex and interior-point implementations freely available.
  - SCIP 9 (Zuse Institute Berlin): leading academic non-commercial MIP solver; implements branch-and-cut-and-price; handles non-linear constraints; used widely in academic research for its transparency and extensibility.
  - CBC (COIN-OR Branch and Cut): mature open-source MIP solver; default backend for PuLP and other modelling tools.
  - Clp (COIN-OR LP): companion LP solver to CBC.

  **Constraint programming and routing:**
  - Google OR-Tools (Perron & Furnon, 2023): CP-SAT for constraint optimisation; Routing Library for VRP variants; provides Python, C++, Java, C# APIs; competitive with or superior to commercial MIP on many scheduling instances; open-source (Apache 2.0).
  - Choco Solver (IMT Atlantique): Java CP solver; strong on CSP and scheduling problems.
  - MiniZinc/Gecode: modelling language (MiniZinc) + CP solver (Gecode); widely used in constraint programming education and research.

  **Python modelling frameworks:**
  - PuLP (Python LP/MIP modelling): simple API for LP and MIP; calls CBC, Gurobi, CPLEX as back-end solvers. Best for teaching and small problems.
  - Pyomo (Python Optimisation Modelling Objects): powerful modelling framework supporting LP, MIP, NLP, stochastic programming; calls multiple solvers via NEOS or local installation.
  - CVXPY: convex optimisation modelling framework; handles LP, SOCP, SDP; calls MOSEK, ECOS, SCS as solvers. Bridges [[Convex Optimisation]] and combinatorial relaxations.
  - ortools.sat.python.cp_model: OR-Tools CP-SAT Python API; expressive constraint modelling for scheduling, rostering, VRP variants.

  **Neural combinatorial optimisation frameworks:**
  - PyTorch Geometric (PyG): [[Graph Neural Network]] framework widely used for neural solver implementation.
  - RL4CO (Reinforcement Learning for Combinatorial Optimisation): emerging framework standardising neural CO implementations.
  - Attention model (Kool et al., 2019) reference implementation: widely forked baseline for [[Vehicle Routing Problem]] neural solvers.

  ## Connections to Broader AI Research

  Combinatorial optimisation intersects several active AI research frontiers beyond the [[Machine Learning]] / [[Graph Neural Network]] intersection described above:

  **Automated reasoning and constraint propagation**: [[Constraint Satisfaction]] solvers use arc consistency, path consistency, and domain filtering techniques from automated reasoning to prune the search space before backtracking search. The integration of satisfiability modulo theories (SMT) solvers with combinatorial optimisation — as in MaxSMT and optimisation modulo theories (OMT) — enables solving combinatorial problems with rich logical structure including arithmetic, bitvectors, and uninterpreted functions. These approaches are used in formal verification, hardware design, and automated planning.

  **Automated planning**: classical AI planning (STRIPS, PDDL) is a form of combinatorial optimisation over plan space; the cost-optimal planning problem is PSPACE-complete in general. Modern planners (Fast Downward, Lama) use A*-based search with admissible heuristics derived from problem relaxations, connecting directly to [[Heuristic Search]] methodology. The International Planning Competition (IPC) tracks state-of-the-art planning performance; optimal planning benchmarks include all classical combinatorial challenge problems represented as planning instances.

  **Stochastic and robust optimisation**: when problem parameters are uncertain — as is common in supply chain, scheduling, and network design applications — deterministic combinatorial models must be extended to stochastic programming (two-stage and multi-stage models with recourse) or robust optimisation (min-max or regret-based models over uncertainty sets). Two-stage stochastic integer programmes, where first-stage decisions are made before uncertainty is revealed and second-stage recourse is available, are among the most challenging problem classes in the field, requiring scenario-based decomposition (Benders, L-shaped method) or sample-average approximation.

  **Game-theoretic formulations**: many real-world combinatorial problems involve multiple agents with potentially conflicting objectives — toll-setting in road networks, pricing in energy markets, spectrum auction design, combinatorial procurement auctions. These are modelled as combinatorial mechanism design or algorithmic game theory problems, requiring the computation of Nash equilibria, the design of incentive-compatible auction mechanisms, or the analysis of price-of-anarchy bounds that quantify the social cost of strategic behaviour relative to coordinated optimisation.

  ## Approximability Landscape

  The approximability landscape of NP-hard combinatorial problems — the question of which approximation ratios are achievable in polynomial time — has been largely mapped by the PCP theorem and its applications, providing a rigorous theoretical framework for understanding which problems are tractable to approximate and which are hard even to approximate:

  **FPTAS problems** (arbitrary precision in polynomial time):
  - [[Knapsack Problem]] (standard binary variant): FPTAS with O(n/ε²) time, achieving (1−ε)-optimality for any ε > 0 by scaling and rounding profits.
  - Makespan minimisation on identical parallel machines (preemptive): FPTAS.
  - Subset sum: FPTAS via scaling.

  **PTAS problems** (constant-factor precision, fixed ε):
  - [[Travelling Salesman Problem]] in Euclidean space: Arora (1998) PTAS, O(n(log n)^O(1/ε)) time; Mitchell (1999) independent PTAS. These results apply only to geometric Euclidean instances, not general metric TSP.
  - Many geometric and planar graph problems: Baker's PTAS framework for planar graphs (1994) gives PTAS for independent set, vertex cover, dominating set on planar graphs.
  - Maximum knapsack with multiple dimensions: PTAS for constant dimension.

  **Constant-factor approximation problems** (provably cannot do better in polynomial time under PCP):
  - Metric [[Travelling Salesman Problem]]: Christofides (1976) 3/2-approximation; Karlin-Klein-Gharan (2021) 3/2−ε. Inapproximability: no polynomial approximation ratio < 1 + ε for general (non-metric) TSP unless P = NP.
  - Vertex Cover: best known is 2-approximation (trivially by LP rounding); known to be APX-hard; assuming the Unique Games Conjecture (Khot, 2002), even 2−ε is hard for any ε > 0.
  - Set Cover: O(log n)-approximation by greedy; inapproximable to within (1−ε) log n under P ≠ NP (Feige, 1998).
  - Maximum independent set: O(n^(1−ε))-hard to approximate for any ε > 0 (Hastad, 1996); polynomial algorithms achieve only O(n/log n) approximation.
  - [[Graph Colouring]]: χ(G)-colouring (minimum colours) has no polynomial O(n^(1−ε))-approximation for any ε > 0 unless ZPP = NP; Wigderson's greedy achieves O(sqrt(n)) colours.

  **Problems with no poly-time approximation** (unless P = NP):
  - Exact cover (no relaxation possible by NP-hardness of feasibility).
  - Longest path problem: cannot even determine if a path of length k exists in polynomial time for arbitrary k.

  ## Polyhedral Combinatorics

  The polyhedral approach to combinatorial optimisation — studying the facial structure of integer feasible sets viewed as polytopes in continuous space — is among the most powerful theoretical tools in the field, providing both algorithmic insights (tight LP relaxations) and structural understanding (which problems are "easy" vs "hard" at the level of linear programming geometry):

  The **integer hull** of a combinatorial problem is the convex hull of all feasible integer solutions: conv({x ∈ {0,1}^n | x feasible}). If we could formulate the integer hull with a compact set of inequalities, LP optimisation over it would solve the integer problem exactly in polynomial time. The fundamental challenge is that integer hulls typically require exponentially many facet-defining inequalities to describe compactly, making such complete descriptions impractical for NP-hard problems. However, partial descriptions — particularly tight families of valid inequalities — dramatically improve LP relaxation bounds and accelerate [[Branch and Bound]].

  Key polyhedral results by problem:
  - **Perfect matching polytope** (Edmonds, 1965): the convex hull of perfect matchings in a graph is described by a polynomial-size system (degree constraints + odd-set constraints), proving bipartite matching and general matching are polynomially solvable as LP problems and enabling the polynomial Blossom algorithm.
  - **Spanning tree polytope** (Edmonds, 1970): described by a compact LP with exponential-size constraints that can be separated in polynomial time via max-flow; enables polynomial exact algorithms for minimum spanning tree and its relatives.
  - **Travelling Salesman polytope**: exponentially many facets (subtour-elimination, comb inequalities, clique tree inequalities, ...); no compact LP description unless P = NP. The ongoing TSP polytope project (Applegate et al.; Naddef and Rinaldi) catalogues known facet families used in the Concorde solver.
  - **Matroid polytope** (Edmonds, 1970): uniform integer hull description via rank function inequalities; underpins the greedy algorithm's optimality for matroid optimisation.

  Understanding the polytope structure of a problem directly informs the choice of cutting-plane families in [[Branch and Bound]] implementations and the design of valid inequalities for MIP formulations.

  The practical consequence of polyhedral theory for MIP solver performance is direct and substantial. Modern solvers (Gurobi, CPLEX, SCIP) automatically detect problem structure at solve time and select appropriate cut families: Gomory cuts for general MIP, clique cuts for covering problems, flow cover cuts for network flow problems, and problem-specific cuts (subtour-elimination for routing sub-problems detected in the formulation). This automated cut selection — developed over decades of theoretical and computational research — is a large part of why modern MIP solvers can solve instances that were intractable a decade ago. The improvement rate of MIP solver performance has historically exceeded hardware improvement: while hardware speed has increased approximately 2x every 18 months (Moore's Law, now slowing), MIP solver algorithmic improvements contributed an additional 10,000x improvement in effective solve rate between 1990 and 2010 (Bixby, 2012), and have continued at a high rate since. This algorithmic progress, rooted in polyhedral combinatorics, is the primary driver of expanded practical applicability across logistics, manufacturing, energy, and finance domains.

  ## Teaching and Training Resources

  The UK and international combinatorial optimisation educational infrastructure is well-developed and internationally regarded:

  **UK NATCOR (National Taught Course Centre for Operational Research)**:
  - Residential courses at rotating host universities (Southampton, Warwick, Lancaster, Edinburgh, Leeds, Nottingham)
  - Courses on: heuristic and metaheuristic methods; integer programming and combinatorial optimisation; stochastic optimisation; supply chain and logistics; scheduling
  - Attended by hundreds of UK doctoral students annually; internationally regarded as a model for national postgraduate training coordination
  - All course materials available to registered PhD students; some made publicly available
  - Course schedule: spring, summer, and autumn residential blocks

  **University courses:**
  - Oxford Department of Computer Science: Combinatorial Optimisation (BT8/MT9), graduate course covering exact algorithms, polyhedral theory, and approximation
  - UCL: Combinatorial Optimisation module in the MSc Operations Research
  - Warwick Business School: Integer Programming and Combinatorial Optimisation (WBS module)
  - University of Edinburgh: Optimisation and Operational Research MSc programme

  **Online resources and MOOCs:**
  - Google OR-Tools documentation and examples: comprehensive tutorials on routing, scheduling, and constraint programming; widely used for self-study
  - Coursera: Discrete Optimisation (University of Melbourne, Pascal Van Hentenryck): one of the most-enrolled optimisation MOOCs; covers LP, IP, CP, [[Local Search]], and metaheuristics
  - OR-Library (Beasley): benchmark instance library freely available online with problem descriptions and best-known solution tables

  **Key textbooks:**
  - Nemhauser & Wolsey (1988), *Integer and Combinatorial Optimization*: the classical graduate text; comprehensive coverage of polyhedral combinatorics, [[Branch and Bound]], and cutting-plane theory
  - Papadimitriou & Steiglitz (1982), *Combinatorial Optimization: Algorithms and Complexity*: foundational treatment of complexity and algorithms
  - Traub & Vygen (2022), *Approximation Algorithms for Traveling Salesman Problems*: definitive modern treatment of TSP approximation theory, incorporating the Karlin-Klein-Gharan breakthrough
  - Schrijver (2003), *Combinatorial Optimization: Polyhedra and Efficiency* (3 volumes): encyclopaedic treatment of polyhedral combinatorics; the definitive reference for theoretical researchers

  **Journals and conferences:**
  - Mathematical Programming (MPS journal): premier venue for exact and approximation algorithms
  - INFORMS Journal on Computing: algorithms and computational results
  - European Journal of Operational Research (EJOR): applications and methodology
  - Journal of the Operational Research Society (JORS): UK flagship OR journal, published since 1950
  - STOC, FOCS, SODA: theoretical complexity and algorithms
  - IPCO (Integer Programming and Combinatorial Optimization conference): dedicated biennial venue
  - NeurIPS, ICLR ML4CO workshops: neural combinatorial optimisation
  - EURO (European Conference on Operational Research): largest OR conference in Europe; EURO-NeurIPS VRC Challenge 2024 drew over 100 competing teams
  - INFORMS Annual Meeting: primary North American OR conference; co-organises several combinatorial optimisation tracks
  - Combinatorial Optimization conference series (CO2024, Southampton): focused European academic venue with 22nd edition in 2024

  - ## Research & Literature
    - 1. Cook, S. A. (1971). The complexity of theorem-proving procedures. *STOC 1971*, pp. 151–158. https://doi.org/10.1145/800157.805047
    - 2. Karp, R. M. (1972). Reducibility among combinatorial problems. In Miller & Thatcher (Eds.), *Complexity of Computer Computations*, Plenum Press, pp. 85–103.
    - 3. Held, M., & Karp, R. M. (1962). A dynamic programming approach to sequencing problems. *SIAM Journal on Applied Mathematics*, 10(1), 196–210. https://doi.org/10.1137/0110015
    - 4. Christofides, N. (1976). Worst-case analysis of a new heuristic for the travelling salesman problem. *Carnegie Mellon University Report*, 388.
    - 5. Karlin, A. R., Klein, N., & Gharan, S. O. (2021). A (slightly) improved approximation algorithm for metric TSP. *STOC 2021*, pp. 32–45. https://doi.org/10.1145/3406325.3451009
    - 6. Dantzig, G. B. (1947). Maximisation of a linear function of variables subject to linear inequalities. In *Activity Analysis of Production and Allocation*, Wiley.
    - 7. Nemhauser, G. L., & Wolsey, L. A. (1988). *Integer and Combinatorial Optimization*. Wiley-Interscience.
    - 8. Papadimitriou, C. H., & Steiglitz, K. (1982). *Combinatorial Optimization: Algorithms and Complexity*. Prentice-Hall.
    - 9. Beasley, J. E. (1990). OR-Library: distributing test problems by electronic mail. *Journal of the Operational Research Society*, 41(11), 1069–1072. https://doi.org/10.1057/jors.1990.166
    - 10. Bengio, Y., Lodi, A., & Prouvost, A. (2021). Machine learning for combinatorial optimization: A methodological tour d'horizon. *European Journal of Operational Research*, 290(2), 405–421. https://doi.org/10.1016/j.ejor.2020.07.063
    - 11. Vinyals, O., Fortunato, M., & Jaitly, N. (2015). Pointer Networks. *NeurIPS 2015*. arXiv:1506.03134
    - 12. Kool, W., van Hoof, H., & Welling, M. (2019). Attention, Learn to Solve Routing Problems! *ICLR 2019*. arXiv:1803.08475
    - 13. Cappart, Q., Chételat, D., Khalil, E., Lodi, A., Morris, C., & Veličković, P. (2023). Combinatorial optimization and reasoning with graph neural networks. *Journal of Machine Learning Research*, 24(130), 1–61.
    - 14. Joshi, C. K., Laurent, T., & Bresson, X. (2019). An efficient graph convolutional network technique for the travelling salesman problem. arXiv:1906.01227
    - 15. Land, A. H., & Doig, A. G. (1960). An automatic method of solving discrete programming problems. *Econometrica*, 28(3), 497–520. https://doi.org/10.2307/1910129
    - 16. Gomory, R. E. (1958). Outline of an algorithm for integer solutions to linear programs. *Bulletin of the American Mathematical Society*, 64(5), 275–278.
    - 17. Kirkpatrick, S., Gelatt, C. D., & Vecchi, M. P. (1983). Optimization by simulated annealing. *Science*, 220(4598), 671–680. https://doi.org/10.1126/science.220.4598.671
    - 18. Glover, F. (1989). Tabu search — Part I. *ORSA Journal on Computing*, 1(3), 190–206. https://doi.org/10.1287/ijoc.1.3.190
    - 19. Holland, J. H. (1975). *Adaptation in Natural and Artificial Systems*. University of Michigan Press.
    - 20. Dorigo, M., & Gambardella, L. M. (1997). Ant Colony System: A cooperative learning approach to the travelling salesman problem. *IEEE Transactions on Evolutionary Computation*, 1(1), 53–66.
    - 21. Baty, L., Jungel, K., Klein, P. S., Parmentier, A., & Schiffer, M. (2024). Combinatorial optimization enriched machine learning to solve the dynamic vehicle routing problem with time windows. *EURO-NeurIPS 2024 Vehicle Routing Challenge*, winning solution.
    - 22. Huang, T., Huang, J., Yu, X., Rong, Y., Zheng, W., & Huang, J. (2025). FrontierCO: Real-world and large-scale evaluation of machine learning solvers for combinatorial optimization. arXiv:2505.16952
    - 23. Traub, V., & Vygen, J. (2022). *Approximation Algorithms for Traveling Salesman Problems*. Cambridge University Press. https://doi.org/10.1017/9781009308052
    - 24. Hall, J., McKinnon, K., Meeuse, G., & Walsh, T. (2024). HiGHS — high performance software for linear optimisation. *Mathematical Programming Computation*, 16(1). https://doi.org/10.1007/s12532-024-00261-9
    - 25. Perron, L., & Furnon, V. (2023). OR-Tools v9.7. Google LLC. https://developers.google.com/optimization
    - 26. Gurobi Optimization LLC (2024). Gurobi Optimizer Reference Manual, v11. https://www.gurobi.com
    - 27. Arora, S., Lund, C., Motwani, R., Sudan, M., & Szegedy, M. (1998). Proof verification and the hardness of approximation problems. *Journal of the ACM*, 45(3), 501–555.
    - 28. Universität Southampton (2024). Proceedings of CO2024: 22nd Combinatorial Optimisation Conference. https://generic.wordpress.soton.ac.uk/co2024/

- ### Provenance
  - sources:: https://developers.google.com/optimization; https://www.gurobi.com; https://generic.wordpress.soton.ac.uk/co2024/; https://arxiv.org/abs/2505.16952; https://arxiv.org/abs/2601.10583; https://doi.org/10.1145/3406325.3451009; https://www.natcor.ac.uk/courses/; https://www.cs.ox.ac.uk/teaching/courses/2024-2025/co/; https://ieeexplore.ieee.org/document/11100821/; https://www.nature.com/articles/s41534-025-01020-1; https://arxiv.org/pdf/2602.20730; https://arxiv.org/pdf/2410.09693; https://arxiv.org/pdf/2412.10163; https://highs.dev/; https://github.com/Thinklab-SJTU/awesome-ml4co
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
