
A goal-driven inference strategy that starts from a hypothesis to be proved and works backwards through the rule base, decomposing each goal into the subgoals given by the antecedents of rules whose consequents match it, recursing until every subgoal is grounded in known facts or fails. It is the query-answering counterpart to forward chaining, the evaluation strategy underlying Prolog's SLD resolution, and the diagnostic engine of classic expert systems such as MYCIN.

- ### Semantic Classification

- ### Content

  ## Definition

  **Backward chaining** is the goal-driven mode of inference in [[Rule-Based Systems]]: reasoning starts from the conclusion one wants to establish and works backwards towards supporting evidence. Given a goal `Q`, the [[Inference Engine]] finds rules of the form `P₁ ∧ … ∧ Pₙ → Q`, and recursively attempts to prove each antecedent `Pᵢ` as a subgoal. A branch succeeds when its subgoals bottom out in facts already known (or supplied by the user when asked); it fails when no rule or fact can discharge a subgoal, prompting backtracking to alternative rules.

  This is the evaluation strategy of logic programming: Prolog executes definite-clause programs by SLD resolution, a depth-first backward-chaining search with unification, trying clauses in order and backtracking on failure. It is also the natural fit for consultation-style [[Expert Systems]]. MYCIN, the landmark 1970s medical system, backward-chained from candidate organism diagnoses to the laboratory findings that would support them — which meant it asked the clinician only for information relevant to the hypothesis under consideration, and could answer "why?" by displaying the rule chain it was trying to complete. That explanation capability remains a selling point of rule-based reasoning over opaque statistical models.

  Compared with [[Forward Chaining]], backward chaining touches only the portion of the knowledge base relevant to the query, so its cost can be far below linear in the size of the rule base; the price is repeated subgoal derivation and potential non-termination on recursive rules, addressed by memoising strategies such as tabling (SLG resolution in XSB and modern Prologs) and by magic-sets rewriting, which transforms a query so that bottom-up evaluation simulates goal-directed search.

  ## Technical Details

  - **Algorithm**: depth-first AND–OR search — OR choices over rules concluding the goal, AND decomposition over each rule's antecedents; unification propagates variable bindings between subgoals.
  - **Properties**: sound for Horn-clause knowledge bases; complete under fair search strategies (Prolog's unbounded depth-first search sacrifices completeness for efficiency).
  - **Termination and efficiency**: tabling/memoisation avoids recomputing and loops on recursive predicates; magic sets bridge backward-style goal focus with forward-style materialisation in deductive databases.
  - **When preferred**: interactive diagnosis and consultation, query answering over large fact bases, top-down planning — anywhere the set of possible conclusions is vast but the question is specific.
  - **Modern use**: Prolog and Datalog query engines, SPARQL entailment via query rewriting, business-rules decision services evaluating a single decision, and goal-regression planners; hybrid engines (e.g. Drools) offer both chaining modes and choose per query.

  ## Current Landscape

  Backward chaining is a mature technique, but it is being actively revisited as the symbolic half of neurosymbolic LLM reasoning.

  - **Neurosymbolic backward chaining (2024-25)**: Work such as SymBa (*Symbolic Backward Chaining*, arXiv 2402.12806) argues that LLM-based backward-chaining prompting schemes (least-to-most, LAMBADA) are *incomplete* because they omit components of the classic SLD-resolution algorithm; SymBa puts a symbolic solver in control of the proof and calls the LLM only to supply a unifying rule or fact, improving deductive, relational and arithmetic reasoning.
  - **Explainable domain reasoning**: Prolog-synergised language models (e.g. arXiv 2409.11589) use SWI-Prolog backward chaining over a first-order-logic knowledge base to assemble an auditable proof trail as context for an LLM query — reviving MYCIN's "why?" explanation property in a modern stack.
  - **Tabling as the standard fix for termination**: SWI-Prolog and XSB implement tabled execution (SLG resolution), which memoises goals and answers to guarantee termination and avoid recomputation on recursive predicates, giving a goal-oriented superset of Datalog's bottom-up semantics — the production answer to the non-termination weakness of naive backward chaining.

  **Sources**:
  - https://arxiv.org/html/2402.12806v3
  - https://www.swi-prolog.org/pldoc/man?section=tabling
  - https://arxiv.org/html/2409.11589v1

- ### Provenance

