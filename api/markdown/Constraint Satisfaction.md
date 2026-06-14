public:: true

# Constraint Satisfaction
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2be4293f7d8f9c06fa0a4becc0110115c60b90418ad9e55941eca20f08fcf2c5",
  "@type": "Page",
  "vc:slug": "constraint-satisfaction",
  "title": "Constraint Satisfaction",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:search-algorithm",
      "vc:label": "Search Algorithm"
    },
    {
      "@id": "urn:visionflow:linked:automated-planning",
      "vc:label": "Automated Planning"
    },
    {
      "@id": "urn:visionflow:linked:symbolic-ai",
      "vc:label": "Symbolic AI"
    },
    {
      "@id": "urn:visionflow:linked:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Constraint Satisfaction"
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
  "@id": "urn:ngm:class:constraint-satisfaction",
  "@type": "Class",
  "label": "Constraint Satisfaction",
  "definition": "Constraint Satisfaction is a paradigm in artificial intelligence and combinatorial mathematics in which a problem is represented as a set of variables, each with a domain of possible values, and a set of constraints that restrict the allowable combinations of those values. The goal is to find an assignment of values to all variables such that every constraint is simultaneously satisfied, or to determine that no such assignment exists. Solution methods combine systematic backtracking search with constraint propagation techniques — notably arc consistency and path consistency — that prune infeasible values early, dramatically reducing the search space. Constraint satisfaction underpins scheduling, configuration, planning, and combinatorial optimisation across virtually every engineering domain.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "qualityScore": 0.74,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "Ai Technique"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:constraint-satisfaction-problem",
      "label": "Constraint Satisfaction Problem"
    },
    {
      "@id": "urn:ngm:class:csp",
      "label": "CSP"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:arc-consistency",
        "label": "Arc Consistency"
      },
      {
        "@id": "urn:ngm:class:backtracking-search",
        "label": "Backtracking Search"
      },
      {
        "@id": "urn:ngm:class:constraint-propagation",
        "label": "Constraint Propagation"
      },
      {
        "@id": "urn:ngm:class:variable-ordering-heuristic",
        "label": "Variable Ordering Heuristic"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:search-algorithm",
        "label": "Search Algorithm"
      },
      {
        "@id": "urn:ngm:class:domain-representation",
        "label": "Domain Representation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:automated-planning",
        "label": "Automated Planning"
      },
      {
        "@id": "urn:ngm:class:scheduling",
        "label": "Scheduling"
      },
      {
        "@id": "urn:ngm:class:configuration-management",
        "label": "Configuration Management"
      },
      {
        "@id": "urn:ngm:class:resource-allocation",
        "label": "Resource Allocation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:combinatorial-optimisation",
        "label": "Combinatorial Optimisation"
      },
      {
        "@id": "urn:ngm:class:graph-theory",
        "label": "Graph Theory"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:symbolic-ai",
        "label": "Symbolic AI"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:local-search",
        "label": "Local Search"
      },
      {
        "@id": "urn:ngm:class:inference-engine",
        "label": "Inference Engine"
      },
      {
        "@id": "urn:ngm:class:heuristic",
        "label": "Heuristic"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      },
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:linear-programming",
        "label": "Linear Programming"
      },
      {
        "@id": "urn:ngm:class:satisfiability",
        "label": "Satisfiability"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:supply-chain-optimisation",
        "label": "Supply Chain Optimisation"
      },
      {
        "@id": "urn:ngm:class:robotic-task-planning",
        "label": "Robotic Task Planning"
      },
      {
        "@id": "urn:ngm:class:network-configuration",
        "label": "Network Configuration"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:propositional-logic",
        "label": "Propositional Logic"
      },
      {
        "@id": "urn:ngm:class:integer-programming",
        "label": "Integer Programming"
      },
      {
        "@id": "urn:ngm:class:probabilistic-inference",
        "label": "Probabilistic Inference"
      }
    ]
  },
  "quality": 0.74,
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
  "@id": "urn:visionflow:annotation:link-resolutions:constraint-satisfaction:4452aa137464",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2be4293f7d8f9c06fa0a4becc0110115c60b90418ad9e55941eca20f08fcf2c5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Search Algorithm]]",
      "resolved": "urn:visionflow:linked:search-algorithm",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Automated Planning]]",
      "resolved": "urn:visionflow:linked:automated-planning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Symbolic AI]]",
      "resolved": "urn:visionflow:linked:symbolic-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:linked:artificial-intelligence",
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
  - Constraint Satisfaction (CS) is a foundational paradigm in [[Artificial Intelligence]] and [[Combinatorial Optimisation]] in which a problem is formally encoded as a triple — a set of variables, a set of finite or continuous domains (one per variable), and a set of constraints over subsets of variables — and the objective is to find a complete, consistent assignment of values. It provides a declarative representation layer for combinatorial problems, separating problem specification from the search strategy, and is intimately related to [[Symbolic AI]], [[Propositional Logic]], and [[Search Algorithm]] design.

- ### Overview
  - **What it is**: A constraint satisfaction problem (CSP) consists of variables X = {x₁, …, xₙ}, domains D = {D₁, …, Dₙ}, and constraints C = {c₁, …, cₘ}. A solution is a complete assignment v: X → D such that every constraint cᵢ is satisfied.
  - **Why it matters**: CSPs provide a uniform model for a vast range of real-world combinatorial problems — scheduling timetables, configuring products, routing vehicles, planning robot motions, solving logic puzzles, and verifying hardware designs. A single CSP engine can attack all of these without custom algorithms.
  - **Complexity**: Many CSPs are NP-complete in the worst case, but structured instances (tree-structured or low-treewidth constraint graphs) can be solved in polynomial time. Tractability theory maps which structural or semantic properties guarantee efficient solving.
  - **Historical roots**: Early work arose from scene labelling and picture interpretation in the 1970s (Waltz filtering, Mackworth's arc consistency). The field was formalised by researchers including Alan Mackworth, Eugene Freuder, and Rina Dechter, and is now treated in depth in the Russell & Norvig AI textbook.

- ### Key Mechanisms
  - **Backtracking Search** — the baseline complete algorithm ([[Backtracking Search]]): assign one variable at a time, check constraints, and backtrack when a dead end is reached. Depth-first with chronological backtracking is the simplest form.
  - **Constraint Propagation** — [[Constraint Propagation]] reduces domain sizes by enforcing local consistency before and during search:
    - **Arc Consistency (AC-3)** — [[Arc Consistency]]: for every pair of variables connected by a binary constraint, eliminates values from Dᵢ that have no supporting value in Dⱼ. Iteratively applied until a fixed point.
    - **Path Consistency** — extends consistency to triples of variables.
    - **Generalised Arc Consistency (GAC)** — applies to non-binary (global) constraints.
  - **Variable Ordering Heuristics** — [[Variable Ordering Heuristic]]:
    - *Minimum Remaining Values (MRV)*: choose the variable with the fewest legal values first (fail-first principle).
    - *Degree heuristic*: prefer the variable involved in most constraints.
    - *Conflict-directed backjumping*: jump back to the actual cause of failure rather than the chronological parent.
  - **Value Ordering Heuristics** — least-constraining value: choose the value that rules out fewest choices for neighbours.
  - **Global Constraints** — high-level constraints (AllDifferent, Cumulative, Element) with dedicated filtering algorithms, exploited by modern CP solvers for efficiency.
  - **Local Search** — [[Local Search]] methods (min-conflicts, GSAT, WalkSAT) provide fast incomplete solving for large instances, especially effective in over-constrained settings.
  - **Soft Constraints and Optimisation** — constraint optimisation problems (COPs) add an objective function; weighted CSPs, valued CSPs, and over-constrained variants (partial CSPs) model real-world trade-offs.

- ### Formal Structure
  - A CSP is a directed constraint hypergraph: variables are nodes, constraints are hyperedges over subsets of variables.
  - The constraint graph (binary case) connects xi and xj if a constraint exists between them; its treewidth determines worst-case solver complexity.
  - A *k*-consistency property: for every consistent assignment to k-1 variables, it can be extended to any k-th variable. Strong k-consistency (where i-consistency holds for all i ≤ k) implies backtrack-free search if k ≥ n.
  - Duality: any CSP can be transformed into an equivalent binary CSP via dual or hidden-variable transformations; also equivalent in expressiveness to a finite-domain [[Satisfiability]] (SAT) formula.

- ### Solver Architectures
  - **CP Solvers** — dedicated constraint programming systems such as Choco, ECLiPSe, Gecode, OR-Tools (Google), and IBM ILOG CP Optimizer combine complete backtracking with rich global constraint libraries and optional branch-and-bound for optimisation.
  - **SAT/SMT Backends** — many CSPs are compiled to [[Satisfiability]] (SAT) or Satisfiability Modulo Theories (SMT) and solved with DPLL/CDCL SAT solvers.
  - **Hybrid Solvers** — combine CP with [[Linear Programming]] (LP relaxations) or [[Integer Programming]] for mixed discrete/continuous problems.
  - **Probabilistic Extensions** — [[Probabilistic Inference]] techniques (belief propagation, survey propagation) approximate CSP solutions in loopy constraint graphs.
  - **Neural-Guided Search** — recent systems use [[Machine Learning]] to learn variable/value ordering policies, blending learned [[Heuristic|heuristics]] with traditional backtracking.

- ### Applications
  - **Scheduling** — [[Scheduling]]: nurse rostering, timetabling, job-shop scheduling, railway slot allocation. Constraints encode time windows, resource capacities, regulatory limits.
  - **Configuration Management** — [[Configuration Management]]: product configurators (cars, computers, telephony) ensure that chosen components satisfy compatibility constraints.
  - **Automated Planning** — [[Automated Planning]]: temporal and resource constraints are embedded in planning tasks; CP-based planners (LPG, CPT) treat planning as CSP/COP.
  - **Robotic Task Planning** — [[Robotic Task Planning]]: motion planning, grasp planning, and task sequencing for robots involve kinematic and collision constraints.
  - **Network Configuration** — [[Network Configuration]]: assigning frequencies, IP addresses, and bandwidth in telecommunications subject to interference and capacity constraints.
  - **Supply Chain Optimisation** — [[Supply Chain Optimisation]]: vehicle routing, warehouse slot assignment, and procurement decisions modelled as large-scale COPs.
  - **Hardware Verification** — bounded model checking encodes state transition systems as CSPs/SAT instances.
  - **Bioinformatics** — protein structure prediction, multiple sequence alignment, and RNA folding modelled as CSPs.
  - **Puzzle Solving** — n-Queens, Sudoku, graph colouring, and crossword generation are canonical benchmark CSPs.

- ### Relationships
  - subClassOf:: [[Combinatorial Optimisation]]
  - implements:: [[Symbolic AI]]
  - hasPart:: [[Arc Consistency]]
  - hasPart:: [[Backtracking Search]]
  - hasPart:: [[Constraint Propagation]]
  - hasPart:: [[Variable Ordering Heuristic]]
  - requires:: [[Search Algorithm]]
  - requires:: [[Domain Representation]]
  - enables:: [[Automated Planning]]
  - enables:: [[Scheduling]]
  - enables:: [[Configuration Management]]
  - enables:: [[Resource Allocation]]
  - dependsOn:: [[Combinatorial Optimisation]]
  - dependsOn:: [[Graph Theory]]
  - uses:: [[Local Search]]
  - uses:: [[Inference Engine]]
  - uses:: [[Heuristic]]
  - supports:: [[Knowledge Representation]]
  - supports:: [[Decision Making]]
  - contrastsWith:: [[Linear Programming]]
  - contrastsWith:: [[Satisfiability]]
  - bridges-to:: [[Supply Chain Optimisation]]
  - bridges-to:: [[Robotic Task Planning]]
  - bridges-to:: [[Network Configuration]]
  - relatedTo:: [[Propositional Logic]]
  - relatedTo:: [[Integer Programming]]
  - relatedTo:: [[Probabilistic Inference]]

- ### Standards & Context
  - **Constraint Programming (CP)** is an IATM/ACP (Association for Constraint Programming) discipline with annual CP conferences (CP, CPAIOR, IJCAI tracks).
  - **MiniZinc** — standardised high-level constraint modelling language (ISO-alike, open standard) that compiles to multiple back-end solvers; widely used in academic and industrial settings.
  - **XCSP3** — XML-based constraint problem specification format enabling interoperable benchmarking across solvers.
  - **OR-Tools** (Google, Apache 2.0 licence) is the most widely deployed open-source CP-SAT solver, incorporating CDCL SAT with CP global constraint propagators.
  - Constraint satisfaction is a core topic in the AAAI, IJCAI, and ECAI research communities, and is covered extensively in standard AI curricula (Russell & Norvig, Apt & Wallace).

- ### Provenance
  - sources:: Russell & Norvig "Artificial Intelligence: A Modern Approach" (Ch. 6); Dechter "Constraint Processing" (2003); Apt "Principles of Constraint Programming" (2003); MiniZinc documentation; OR-Tools documentation
  - updated:: 2026-06-13
