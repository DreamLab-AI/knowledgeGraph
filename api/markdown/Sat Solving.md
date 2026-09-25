SAT solving is the algorithmic process of determining whether a propositional logic formula, typically in conjunctive normal form, has a satisfying truth assignment — the Boolean satisfiability problem. Although SAT is the canonical NP-complete problem, modern conflict-driven clause-learning solvers routinely decide instances with millions of variables and clauses, making SAT a practical engine for many computational tasks. SAT solving uses systematic search with unit propagation, clause learning, and intelligent backtracking. It underpins formal verification, automated planning, and constraint solving, and is closely related to satisfiability-modulo-theories reasoning.

### Overview

- SAT solving tackles the Boolean satisfiability problem — the first problem proven NP-complete — yet engineering advances have made it one of the most successful practical reasoning technologies.
- Conflict-driven clause-learning (CDCL) solvers combine systematic search with unit propagation, learning new clauses from conflicts and backjumping non-chronologically, allowing them to scale to industrial instances.
- SAT serves as a universal back-end: many problems in verification, planning, and combinatorics are encoded into propositional formulae and decided by off-the-shelf solvers.

### Mechanisms

- Unit propagation: forced assignments are propagated to prune the search space rapidly.
- Clause learning: conflicts are analysed to derive new constraints that prevent repeating failures.
- Non-chronological backtracking: solvers backjump to the relevant decision rather than undoing one step at a time.
- Encoding: practical problems are translated into conjunctive normal form for the solver to decide.

### Applications

- Formal verification and model checking of hardware and software.
- Automated planning by encoding plans as satisfiability instances.
- Combinatorial design, configuration, and constraint solving via SMT extensions.

### Provenance

