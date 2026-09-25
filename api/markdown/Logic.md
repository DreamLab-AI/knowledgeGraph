Logic is the systematic study of valid inference, formal reasoning, and the structural principles that distinguish correct arguments from fallacious ones. It provides the mathematical and philosophical foundation for deduction, proof theory, and formal systems, encompassing propositional logic, first-order predicate logic, modal logic, and higher-order logics. In computational contexts, logic underpins programming language semantics, automated theorem proving, knowledge representation, and the design of intelligent reasoning systems. It forms a bedrock discipline across mathematics, philosophy, linguistics, and artificial intelligence.

### Overview

- Logic originated in ancient Greek philosophy (notably Aristotle's syllogistic) and was formalised mathematically in the nineteenth and twentieth centuries through the work of Boole, Frege, Russell, Whitehead, Gödel, and Tarski. The discipline distinguishes between:
  - **Syntax**: the formal grammar of logical expressions (well-formed formulae, terms, connectives).
  - **Semantics**: the assignment of truth values to formulae under interpretations or models.
  - **Proof theory**: the study of formal derivations and their properties (soundness, completeness, decidability).
- Logic matters because it provides the only universally accepted standard of correctness for inference. In artificial intelligence it underpins [[Knowledge Representation]], [[Automated Reasoning]], and [[Formal Verification]]. In computer science it forms the basis of [[Programming Language Semantics]], type systems, and hardware design via Boolean algebra.
- Unlike [[Probabilistic Reasoning]], classical logic is two-valued (true/false), making it well suited to deterministic deduction but less suited to reasoning under uncertainty. Extensions such as [[Fuzzy Logic]], [[Probabilistic Logic Programming]], and [[Bayesian Networks]] address that gap.

### Key Components

#### Classical Logics

- **[[Propositional Logic]]** (sentential logic) — deals with propositions and Boolean connectives (AND, OR, NOT, IMPLIES, IFF). Decidable via truth tables or resolution.
- **[[Predicate Logic]]** (first-order logic, FOL) — extends propositional logic with quantifiers (∀, ∃), variables, predicates, and functions. The standard language for mathematics and most [[Ontology]] languages.
- **[[Higher-Order Logic]]** — allows quantification over predicates and functions; more expressive but generally undecidable. Used in [[Theorem Proving]] systems such as HOL4, Isabelle, and Coq.

#### Modal and Non-Classical Logics

- **[[Modal Logic]]** — introduces operators for necessity (□) and possibility (◇), used in [[Temporal Logic]] (LTL, CTL), epistemic logic, and deontic logic.
- **[[Temporal Logic]]** — modal logic indexed by time; essential for [[Formal Verification]] of concurrent and reactive systems (model checking).
- **[[Description Logic]]** — a decidable fragment of FOL that underpins [[OWL]] (Web Ontology Language) and the [[Semantic Web]]. Used to define classes, properties, and their relationships in [[Knowledge Representation]].
- **[[Fuzzy Logic]]** — multi-valued logic assigning degrees of truth in [0,1]; used in control systems and soft [[Constraint Satisfaction]].
- **[[Default Logic]]** and **[[Defeasible Reasoning]]** — non-monotonic extensions allowing conclusions to be retracted when new information arrives.

#### Proof-Theoretic Machinery

- **[[Proof Theory]]** — studies formal derivation systems: Hilbert calculi, natural deduction, sequent calculi, resolution.
- **[[Resolution Principle]]** — the basis for logic programming ([[Prolog]]) and [[Automated Theorem Proving]] (e.g., RESOLUTION, DPLL, CDCL for SAT solving).
- **[[Model Theory]]** — connects syntax to semantics; studies the relationship between formal theories and their models (structures). Completeness theorems (Gödel 1930) guarantee that every valid FOL formula is provable.
- **Decidability and Complexity** — propositional satisfiability is NP-complete (SAT); FOL is semi-decidable; description logics occupy a spectrum from polynomial to EXPTIME-complete, governing the feasibility of [[Automated Reasoning]] over [[Ontology|ontologies]].

### Applications

#### Artificial Intelligence and Knowledge Systems

- [[Knowledge Representation]] — ontologies (OWL/RDF) use [[Description Logic]] to encode domain knowledge, enabling [[Automated Reasoning]] and query answering (e.g., in SPARQL/SPARQL-DL).
- [[Expert Systems]] — rule-based systems use propositional or FOL rules and [[Inference Engine|inference engines]] (forward/backward chaining) to derive diagnoses or recommendations.
- [[Planning]] — classical planning (STRIPS, PDDL) and temporal planning use logical representations of states and actions.
- [[Natural Language Processing]] — semantic parsing maps natural language to logical forms (lambda calculus, AMR) for question answering, [[Information Extraction]], and dialogue systems.

#### Formal Methods and Software Engineering

- [[Formal Verification]] — hardware and software correctness is proved against formal logical specifications. Tools: Alloy (relational logic), TLA+ (temporal set theory), SPIN (LTL model checking), Coq/Isabelle/HOL (higher-order proof assistants).
- [[Type Systems]] — via the Curry-Howard correspondence, types in programming languages correspond to logical propositions and proofs to programs, connecting [[Proof Theory]] to software correctness.
- [[Model Checking]] — exhaustive state-space verification using temporal logic specifications; used in chip design (Intel, AMD) and safety-critical software (aerospace, automotive).

#### Logic Programming and Databases

- [[Prolog]] and Datalog use resolution-based inference; Datalog underpins modern graph databases and [[Semantic Web]] reasoning.
- [[Constraint Satisfaction]] — constraint logic programming (CLP) integrates logic with constraint solvers for scheduling, configuration, and combinatorial optimisation.
- [[Deductive Databases]] — extend relational databases with inferential rules, deriving new facts from stored data.

#### Machine Learning Integration

- **[[Neural-Symbolic Integration]]** — hybrid architectures combine differentiable learning with logical constraints (e.g., DeepProbLog, Logic Tensor Networks, Neural Theorem Provers), bridging [[Machine Learning]] and classical logic.
- **Inductive Logic Programming ([[ILP]])** — learns logical rules (Prolog clauses) from positive/negative examples; used in bioinformatics and relational learning.
- **[[Probabilistic Logic Programming]]** — extends logic with probabilistic annotations (ProbLog, PRISM), enabling reasoning under uncertainty.

### Standards & Context

- **W3C OWL 2** (2009, revised 2012) — Web Ontology Language grounded in [[Description Logic]] (OWL 2 DL ≡ SROIQ); the primary standard for ontology authoring on the [[Semantic Web]].
- **ISO/IEC 13817** — PROLOG standard (1995), formalising the core of [[Prolog]] logic programming.
- **IEEE 1076 (VHDL)** — hardware description language whose type system and simulation semantics rest on multi-valued logic (std_logic).
- **SMT-LIB** — standard interface for Satisfiability Modulo Theories ([[SMT Solvers]]), used in formal verification tools.
- **TPTP (Thousands of Problems for Theorem Provers)** — de facto benchmark and language standard for [[Automated Theorem Proving]] research.
- Governance bodies: W3C (Web standards), ACM SIGLOG, ASL (Association for Symbolic Logic), IFIP Working Group 1.6 (Rewriting).
- Logic is a foundational concern across AI safety (correctness guarantees), [[Governance]] (policy formalisation), and [[Data]] integration (schema alignment via ontological reasoning).

### Current Landscape (2026)

- The "reasoning-model era" that began with OpenAI o1 in late 2024 reframed machine logic around long-horizon chain-of-thought and reinforcement learning from verifiable rewards (RLVR); DeepSeek-R1 (open-weights, January 2025) showed this reasoning behaviour could be elicited by pure RL on verifiable rewards with no supervised reasoning traces.
- Formal deductive logic reached competition frontier: at IMO 2025 an advanced Gemini with Deep Think solved five of six problems (35/42, gold) end-to-end in natural language under the official time limit, while Google's neuro-symbolic AlphaGeometry 2 delivered gold-medal geometry performance.
- Neural theorem proving over Lean 4 matured rapidly with DeepSeek-Prover-V2-671B (April 2025) reaching 88.9% pass ratio on MiniF2F-test and solving 47/658 PutnamBench problems, narrowing the gap between informal and formal mathematical reasoning.
- The dominant applied paradigm is now neuro-symbolic: LLMs autoformalise natural language into first-order logic, SAT/SMT (Z3), constraint programs or Lean, then hand off to deterministic solvers, with frameworks such as Logic-LM, VERUS-LM and adaptive multi-paradigm systems (EACL 2026) reporting 17-39% accuracy gains over pure chain-of-thought.
- Theoretical grounding advanced too: "Sound and Complete Neurosymbolic Reasoning with LLM-Grounded Interpretations" (NeSy 2025) embeds an LLM inside the interpretation function of a paraconsistent logic, preserving soundness and completeness despite the model's inconsistency.
- Key players span frontier labs (OpenAI o3/GPT-5, DeepSeek, Google DeepMind Gemini Deep Think, Anthropic, xAI) and an active academic neuro-symbolic community (NeSy conference; a January 2026 ScienceDirect survey of 178 papers maps the field across knowledge representation, learning/inference and formal reasoning).
- Open challenges persist: LogiEval-Hard (2025) exposes consistent failures (avg ~38% accuracy) across all frontier models on artificial-language and syllogism tasks, and hard autoformalisation benchmarks (IndiMathBench, PutnamBench) remain largely unsolved, with translation fidelity, solver brittleness and logical consistency the frontier bottlenecks as of 2026.

### References

- 1. Emergent Mind / arXiv (2026). An Integrated Survey of Language Models, Neuro-symbolic Systems and Formal Reasoning. https://arxiv.org/html/2606.08728v1
- 2. Ren et al., DeepSeek-AI (2025). DeepSeek-Prover-V2: Advancing Formal Mathematical Reasoning via Reinforcement Learning for Subgoal Decomposition. https://arxiv.org/pdf/2504.21801
- 3. Allen, Chhikara, Ferguson, Ilievski & Groth (2025). Sound and Complete Neurosymbolic Reasoning with LLM-Grounded Interpretations (NeSy 2025). https://arxiv.org/abs/2507.09751
- 4. Anonymous (2025). Evaluating the Logical Reasoning Abilities of Large Language Models (LogiEval / LogiEval-Hard). https://openreview.net/pdf?id=uDP3P9TTRA
- 5. Adaptive LLM-Symbolic Reasoning via Dynamic Logical Solver Composition (EACL 2026). https://aclanthology.org/2026.eacl-long.54.pdf
- 6. Zylos Research (2026). Neuro-Symbolic AI for Agent Reasoning: Bridging Neural Fluency and Symbolic Rigour. https://zylos.ai/research/2026-03-21-neuro-symbolic-ai-agent-reasoning/

### Provenance

