
Logical inference is the process of deriving new statements (conclusions) from existing ones (premises) according to rules that preserve truth, such that whenever the premises are true the conclusion must also be true. It encompasses deductive mechanisms like modus ponens, resolution, and unification, and is the operational core of automated reasoning systems. Logical inference connects formal logics to practical computation by turning syntactic manipulation of formulae into sound derivations of consequences.

- ### Overview
  - An inference rule licenses a syntactic transformation that is guaranteed to preserve semantic truth.
  - Deductive inference draws conclusions that are necessarily true given the premises; resolution provides a single complete rule for first-order logic.
  - Unification matches terms by computing substitutions, enabling generalised inference over quantified statements.
  - Soundness ensures only valid conclusions are derived; completeness ensures all valid conclusions can be derived.
- ### Mechanisms
  - Modus ponens and modus tollens — elementary truth-preserving deductive steps.
  - Resolution — a refutation-complete rule operating on clausal normal forms.
  - Unification — computing most-general substitutions to apply rules to quantified formulae.
  - Forward and backward chaining — data-driven versus goal-driven inference strategies.
  - Proof search — managing the combinatorial space of derivations with heuristics and ordering.
- ### Applications
  - Automated theorem provers and interactive proof assistants.
  - Inference engines in rule-based and expert systems.
  - Reasoners over ontologies and knowledge graphs for entailment.
  - Verification tools deriving correctness obligations and their discharge.
- ### Provenance

