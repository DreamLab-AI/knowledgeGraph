- ### Definition
  - [[Sat Solving]] decides whether a [[Propositional Logic]] formula is satisfiable using [[Heuristic Search]] and [[Search Algorithm]] techniques, acting as a [[Constraint Solver]] that enables [[Formal Verification]], [[Model Checking]], and [[Automated Planning]] within [[Automated Reasoning]].

- ### Overview
  - SAT solving tackles the Boolean satisfiability problem — the first problem proven NP-complete — yet engineering advances have made it one of the most successful practical reasoning technologies.
  - Conflict-driven clause-learning (CDCL) solvers combine systematic search with unit propagation, learning new clauses from conflicts and backjumping non-chronologically, allowing them to scale to industrial instances.
  - SAT serves as a universal back-end: many problems in verification, planning, and combinatorics are encoded into propositional formulae and decided by off-the-shelf solvers.

- ### Mechanisms
  - Unit propagation: forced assignments are propagated to prune the search space rapidly.
  - Clause learning: conflicts are analysed to derive new constraints that prevent repeating failures.
  - Non-chronological backtracking: solvers backjump to the relevant decision rather than undoing one step at a time.
  - Encoding: practical problems are translated into conjunctive normal form for the solver to decide.

- ### Applications
  - Formal verification and model checking of hardware and software.
  - Automated planning by encoding plans as satisfiability instances.
  - Combinatorial design, configuration, and constraint solving via SMT extensions.

- ### Relationships
  - uses:: [[Propositional Logic]]
  - uses:: [[Logic]]
  - uses:: [[Heuristic Search]]
  - uses:: [[Search Algorithm]]
  - hasPart:: [[Constraint Solver]]
  - hasPart:: [[Constraint Satisfaction Problem]]
  - enables:: [[Formal Verification]]
  - enables:: [[Model Checking]]
  - enables:: [[Automated Planning]]
  - supports:: [[Theorem Proving]]
  - supports:: [[Verification]]
  - implements:: [[Automated Reasoning]]
  - requires:: [[Optimization Algorithm]]
  - relatedTo:: [[Planning]]
  - relatedTo:: [[Electronic Design Automation]]
  - partOf:: [[Automated Reasoning]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation