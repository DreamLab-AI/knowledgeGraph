public:: true

# Constraint
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8610ab5a331143af044c5c779546bd2f7a5670ec97b763c64c5773d53aaea6a8",
  "@type": "Page",
  "vc:slug": "constraint",
  "title": "Constraint",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:owl:class:artificial-intelligence", "vc:label": "Artificial Intelligence"},
    {"@id": "urn:visionflow:owl:class:blockchain", "vc:label": "Blockchain"},
    {"@id": "urn:visionflow:owl:class:digital-twin", "vc:label": "Digital Twin"},
    {"@id": "urn:visionflow:linked:objective", "vc:label": "Objective"},
    {"@id": "urn:visionflow:linked:model", "vc:label": "Model"},
    {"@id": "urn:visionflow:linked:formal-verification", "vc:label": "Formal Verification"},
    {"@id": "urn:visionflow:linked:reasoning", "vc:label": "Reasoning"},
    {"@id": "urn:visionflow:linked:safety", "vc:label": "Safety"},
    {"@id": "urn:visionflow:linked:algorithm", "vc:label": "Algorithm"},
    {"@id": "urn:visionflow:linked:search-algorithm", "vc:label": "Search Algorithm"},
    {"@id": "urn:visionflow:linked:inference", "vc:label": "Inference"},
    {"@id": "urn:visionflow:linked:machine-learning-discipline", "vc:label": "Machine Learning Discipline"},
    {"@id": "urn:visionflow:linked:fairness", "vc:label": "Fairness"},
    {"@id": "urn:visionflow:linked:ontology", "vc:label": "Ontology"},
    {"@id": "urn:visionflow:linked:parameter", "vc:label": "Parameter"},
    {"@id": "urn:visionflow:linked:property", "vc:label": "Property"},
    {"@id": "urn:visionflow:linked:system", "vc:label": "System"},
    {"@id": "urn:visionflow:linked:smart-contract", "vc:label": "Smart Contract"},
    {"@id": "urn:visionflow:linked:neural-network", "vc:label": "Neural Network"},
    {"@id": "urn:visionflow:linked:reinforcement-learning", "vc:label": "Reinforcement Learning"},
    {"@id": "urn:visionflow:linked:optimisation", "vc:label": "Optimisation"},
    {"@id": "urn:visionflow:linked:constraint-satisfaction-problem", "vc:label": "Constraint Satisfaction Problem"},
    {"@id": "urn:visionflow:linked:constraint-programming", "vc:label": "Constraint Programming"},
    {"@id": "urn:visionflow:linked:regularisation", "vc:label": "Regularisation"},
    {"@id": "urn:visionflow:linked:loss-function", "vc:label": "Loss Function"},
    {"@id": "urn:visionflow:linked:backtracking-search", "vc:label": "Backtracking Search"},
    {"@id": "urn:visionflow:linked:arc-consistency", "vc:label": "Arc Consistency"},
    {"@id": "urn:visionflow:linked:satisfiability", "vc:label": "Satisfiability"},
    {"@id": "urn:visionflow:linked:linear-programming", "vc:label": "Linear Programming"},
    {"@id": "urn:visionflow:linked:integer-programming", "vc:label": "Integer Programming"},
    {"@id": "urn:visionflow:linked:model-checking", "vc:label": "Model Checking"},
    {"@id": "urn:visionflow:linked:theorem-proving", "vc:label": "Theorem Proving"},
    {"@id": "urn:visionflow:linked:planning", "vc:label": "Planning"},
    {"@id": "urn:visionflow:linked:scheduling", "vc:label": "Scheduling"},
    {"@id": "urn:visionflow:linked:knowledge-representation", "vc:label": "Knowledge Representation"},
    {"@id": "urn:visionflow:linked:gradient-descent", "vc:label": "Gradient Descent"},
    {"@id": "urn:visionflow:linked:markov-decision-process", "vc:label": "Markov Decision Process"},
    {"@id": "urn:visionflow:linked:deep-learning", "vc:label": "Deep Learning"},
    {"@id": "urn:visionflow:linked:explainability", "vc:label": "Explainability"},
    {"@id": "urn:visionflow:linked:monotonicity-constraint", "vc:label": "Monotonicity Constraint"},
    {"@id": "urn:visionflow:linked:weight-sharing", "vc:label": "Weight Sharing"},
    {"@id": "urn:visionflow:linked:smt-solver", "vc:label": "SMT Solver"},
    {"@id": "urn:visionflow:linked:answer-set-programming", "vc:label": "Answer Set Programming"},
    {"@id": "urn:visionflow:linked:description-logic", "vc:label": "Description Logic"},
    {"@id": "urn:visionflow:linked:combinatorial-optimisation", "vc:label": "Combinatorial Optimisation"}
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {"vc:key": "legacy-term-id", "vc:value": "AI-0836"},
    {"vc:key": "preferred-term", "vc:value": "Constraint"}
  ],
  "prov:wasAttributedTo": {"@id": "did:nostr:jjohare"},
  "prov:generatedAtTime": {"@value": "2026-05-18T07:12:05Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:constraint",
  "@type": "Class",
  "label": "Constraint",
  "definition": "A Constraint is a condition, restriction, or rule that limits the set of permissible states, actions, or solutions within a computational, logical, or physical system. Constraints formalise requirements such as resource bounds, logical invariants, safety properties, and optimality criteria, and are manipulated by constraint-satisfaction and optimisation algorithms to find feasible or optimal solutions. They appear across AI planning, machine learning regularisation, smart-contract execution, and formal verification.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.90,
  "subClassOf": [
    {"@id": "urn:ngm:class:ai-technique", "label": "AI Technique"}
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:objective", "label": "Objective"},
      {"@id": "urn:ngm:class:model", "label": "Model"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:formal-verification", "label": "Formal Verification"},
      {"@id": "urn:ngm:class:reasoning", "label": "Reasoning"},
      {"@id": "urn:ngm:class:safety", "label": "Safety"},
      {"@id": "urn:ngm:class:optimisation", "label": "Optimisation"},
      {"@id": "urn:ngm:class:planning", "label": "Planning"},
      {"@id": "urn:ngm:class:scheduling", "label": "Scheduling"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:algorithm", "label": "Algorithm"},
      {"@id": "urn:ngm:class:search-algorithm", "label": "Search Algorithm"},
      {"@id": "urn:ngm:class:inference", "label": "Inference"},
      {"@id": "urn:ngm:class:backtracking-search", "label": "Backtracking Search"},
      {"@id": "urn:ngm:class:smt-solver", "label": "SMT Solver"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:constraint-satisfaction-problem", "label": "Constraint Satisfaction Problem"},
      {"@id": "urn:ngm:class:constraint-programming", "label": "Constraint Programming"},
      {"@id": "urn:ngm:class:regularisation", "label": "Regularisation"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning Discipline"},
      {"@id": "urn:ngm:class:fairness", "label": "Fairness"},
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"},
      {"@id": "urn:ngm:class:explainability", "label": "Explainability"},
      {"@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:combinatorial-optimisation", "label": "Combinatorial Optimisation"},
      {"@id": "urn:ngm:class:linear-programming", "label": "Linear Programming"},
      {"@id": "urn:ngm:class:integer-programming", "label": "Integer Programming"},
      {"@id": "urn:ngm:class:answer-set-programming", "label": "Answer Set Programming"},
      {"@id": "urn:ngm:class:description-logic", "label": "Description Logic"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:heuristic-methods", "label": "Heuristic Methods"},
      {"@id": "urn:ngm:class:gradient-descent", "label": "Gradient Descent"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:parameter", "label": "Parameter"},
      {"@id": "urn:ngm:class:property", "label": "Property"},
      {"@id": "urn:ngm:class:system", "label": "System"},
      {"@id": "urn:ngm:class:loss-function", "label": "Loss Function"},
      {"@id": "urn:ngm:class:markov-decision-process", "label": "Markov Decision Process"},
      {"@id": "urn:ngm:class:satisfiability", "label": "Satisfiability"},
      {"@id": "urn:ngm:class:arc-consistency", "label": "Arc Consistency"},
      {"@id": "urn:ngm:class:model-checking", "label": "Model Checking"},
      {"@id": "urn:ngm:class:theorem-proving", "label": "Theorem Proving"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"},
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-20T00:00:00Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:constraint:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8610ab5a331143af044c5c779546bd2f7a5670ec97b763c64c5773d53aaea6a8"
  },
  "vc:resolutions": [
    {"raw": "[[Artificial Intelligence]]", "resolved": "urn:visionflow:owl:class:artificial-intelligence", "kind": "ResolvedLink"},
    {"raw": "[[Blockchain]]", "resolved": "urn:visionflow:owl:class:blockchain", "kind": "ResolvedLink"},
    {"raw": "[[Digital Twin]]", "resolved": "urn:visionflow:owl:class:digital-twin", "kind": "ResolvedLink"},
    {"raw": "[[Objective]]", "resolved": "urn:visionflow:linked:objective", "kind": "ResolvedLink"},
    {"raw": "[[Model]]", "resolved": "urn:visionflow:linked:model", "kind": "ResolvedLink"},
    {"raw": "[[Formal Verification]]", "resolved": "urn:visionflow:linked:formal-verification", "kind": "ResolvedLink"},
    {"raw": "[[Reasoning]]", "resolved": "urn:visionflow:linked:reasoning", "kind": "ResolvedLink"},
    {"raw": "[[Safety]]", "resolved": "urn:visionflow:linked:safety", "kind": "ResolvedLink"},
    {"raw": "[[Algorithm]]", "resolved": "urn:visionflow:linked:algorithm", "kind": "ResolvedLink"},
    {"raw": "[[Search Algorithm]]", "resolved": "urn:visionflow:linked:search-algorithm", "kind": "ResolvedLink"},
    {"raw": "[[Inference]]", "resolved": "urn:visionflow:linked:inference", "kind": "ResolvedLink"},
    {"raw": "[[Machine Learning Discipline]]", "resolved": "urn:visionflow:linked:machine-learning-discipline", "kind": "ResolvedLink"},
    {"raw": "[[Fairness]]", "resolved": "urn:visionflow:linked:fairness", "kind": "ResolvedLink"},
    {"raw": "[[Ontology]]", "resolved": "urn:visionflow:linked:ontology", "kind": "ResolvedLink"},
    {"raw": "[[Parameter]]", "resolved": "urn:visionflow:linked:parameter", "kind": "ResolvedLink"},
    {"raw": "[[Property]]", "resolved": "urn:visionflow:linked:property", "kind": "ResolvedLink"},
    {"raw": "[[System]]", "resolved": "urn:visionflow:linked:system", "kind": "ResolvedLink"},
    {"raw": "[[Smart Contract]]", "resolved": "urn:visionflow:linked:smart-contract", "kind": "ResolvedLink"},
    {"raw": "[[Neural Network]]", "resolved": "urn:visionflow:linked:neural-network", "kind": "ResolvedLink"},
    {"raw": "[[Reinforcement Learning]]", "resolved": "urn:visionflow:linked:reinforcement-learning", "kind": "ResolvedLink"},
    {"raw": "[[Optimisation]]", "resolved": "urn:visionflow:linked:optimisation", "kind": "ResolvedLink"},
    {"raw": "[[Constraint Satisfaction Problem]]", "resolved": "urn:visionflow:linked:constraint-satisfaction-problem", "kind": "ResolvedLink"},
    {"raw": "[[Constraint Programming]]", "resolved": "urn:visionflow:linked:constraint-programming", "kind": "ResolvedLink"},
    {"raw": "[[Regularisation]]", "resolved": "urn:visionflow:linked:regularisation", "kind": "ResolvedLink"},
    {"raw": "[[Loss Function]]", "resolved": "urn:visionflow:linked:loss-function", "kind": "ResolvedLink"},
    {"raw": "[[Backtracking Search]]", "resolved": "urn:visionflow:linked:backtracking-search", "kind": "ResolvedLink"},
    {"raw": "[[Arc Consistency]]", "resolved": "urn:visionflow:linked:arc-consistency", "kind": "ResolvedLink"},
    {"raw": "[[Satisfiability]]", "resolved": "urn:visionflow:linked:satisfiability", "kind": "ResolvedLink"},
    {"raw": "[[Linear Programming]]", "resolved": "urn:visionflow:linked:linear-programming", "kind": "ResolvedLink"},
    {"raw": "[[Integer Programming]]", "resolved": "urn:visionflow:linked:integer-programming", "kind": "ResolvedLink"},
    {"raw": "[[Model Checking]]", "resolved": "urn:visionflow:linked:model-checking", "kind": "ResolvedLink"},
    {"raw": "[[Theorem Proving]]", "resolved": "urn:visionflow:linked:theorem-proving", "kind": "ResolvedLink"},
    {"raw": "[[Planning]]", "resolved": "urn:visionflow:linked:planning", "kind": "ResolvedLink"},
    {"raw": "[[Scheduling]]", "resolved": "urn:visionflow:linked:scheduling", "kind": "ResolvedLink"},
    {"raw": "[[Knowledge Representation]]", "resolved": "urn:visionflow:linked:knowledge-representation", "kind": "ResolvedLink"},
    {"raw": "[[Gradient Descent]]", "resolved": "urn:visionflow:linked:gradient-descent", "kind": "ResolvedLink"},
    {"raw": "[[Markov Decision Process]]", "resolved": "urn:visionflow:linked:markov-decision-process", "kind": "ResolvedLink"},
    {"raw": "[[Deep Learning]]", "resolved": "urn:visionflow:linked:deep-learning", "kind": "ResolvedLink"},
    {"raw": "[[Explainability]]", "resolved": "urn:visionflow:linked:explainability", "kind": "ResolvedLink"},
    {"raw": "[[SMT Solver]]", "resolved": "urn:visionflow:linked:smt-solver", "kind": "ResolvedLink"},
    {"raw": "[[Answer Set Programming]]", "resolved": "urn:visionflow:linked:answer-set-programming", "kind": "ResolvedLink"},
    {"raw": "[[Description Logic]]", "resolved": "urn:visionflow:linked:description-logic", "kind": "ResolvedLink"},
    {"raw": "[[Combinatorial Optimisation]]", "resolved": "urn:visionflow:linked:combinatorial-optimisation", "kind": "ResolvedLink"},
    {"raw": "[[Heuristic Methods]]", "resolved": "urn:visionflow:linked:heuristic-methods", "kind": "ResolvedLink"}
  ],
  "prov:wasAttributedTo": {"@id": "did:nostr:enrichment-swarm"},
  "prov:generatedAtTime": {"@value": "2026-06-20T00:00:00Z", "@type": "xsd:dateTime"}
}
```

- ### Definition
  - A **Constraint** is a condition, restriction, or rule that delimits the set of permissible states, actions, values, or solutions within a computational, logical, mathematical, or physical [[System]]. Constraints encode requirements drawn from multiple sources — physical laws that bound what nature permits, resource capacities that bound what hardware can provide, logical invariants that bound what is consistent, safety properties that bound what is acceptable, and optimality criteria that bound what is preferable — and are the raw material from which [[Constraint Satisfaction Problem|constraint satisfaction problems]] (CSPs), [[Constraint Programming]], [[Optimisation]], [[Formal Verification]], and [[Reasoning]] algorithms derive their structure. In a CSP, a finite set of variables must each be assigned a value from a domain such that every constraint in the problem is satisfied simultaneously; in [[Constraint Programming]] the domain is extended to continuous or mixed variables with global constraints compactly representing combinatorial structure; in mathematical [[Optimisation]] a constraint defines the feasible region within which a minimum or maximum of an [[Objective]] function is sought. In [[Machine Learning Discipline]], constraints enter as [[Regularisation]] penalties added to the [[Loss Function]] (L1-norm lasso, L2-norm ridge, elastic-net) that prevent overfitting by penalising model complexity, as [[Fairness]] constraints (demographic parity, equalised odds, individual fairness) that encode non-discrimination requirements, as architectural [[Weight Sharing]] and [[Monotonicity Constraint|monotonicity constraints]] baked into [[Neural Network]] structure, and as safety constraints on [[Reinforcement Learning]] policies operating within [[Markov Decision Process|constrained Markov decision processes]]. In [[Formal Verification]], constraints are temporal or logical predicates over a [[Model]] of a hardware or software [[System]] and are checked by [[Model Checking]] (exhaustive reachability) or [[Theorem Proving]] (symbolic proof). In [[Knowledge Representation]] and [[Ontology]], description-logic axioms (subsumption, cardinality restrictions, property ranges) are constraints over individuals, enabling [[Inference]] via tableau algorithms. Constraints are a unifying abstraction bridging [[Artificial Intelligence]], operations research, logic, and software engineering, expressed concisely in specialised languages (MiniZinc, OPL, XCSP3, [[Answer Set Programming]]) and solved with techniques ranging from [[Backtracking Search]] and [[Arc Consistency]] propagation to [[SMT Solver|SMT solvers]] and [[Linear Programming]] relaxations, while their role in [[Blockchain]] smart-contract invariants and [[Digital Twin]] physical fidelity models further extends the concept into distributed and cyber-physical computation.

- ### Semantic Classification
  - owl-class:: ai:Constraint
  - owl-role:: Concept | FormalismPrimitive | OptimisationMechanism | SafetyMechanism
  - owl-inferred:: ai:KnowledgeRepresentationElement, ai:RegularisationMechanism, ai:SafetyConstraint, ai:LogicalAxiom
  - belongs-to-domain:: [[Artificial Intelligence]]
  - implemented-in-layer:: [[Algorithm Layer]]

- ### Relationships
  - is-subclass-of:: [[AI Technique]], [[Knowledge Representation]], [[Formal Method]]
  - has-part:: [[Constraint Satisfaction Problem]], [[Constraint Programming]], [[Regularisation]], [[Arc Consistency]], [[Backtracking Search]]
  - requires:: [[Objective]], [[Model]], [[System]], [[Algorithm]]
  - enables:: [[Formal Verification]], [[Reasoning]], [[Safety]], [[Optimisation]], [[Planning]], [[Scheduling]], [[Fairness]], [[Explainability]]
  - implements:: [[Combinatorial Optimisation]], [[Linear Programming]], [[Integer Programming]], [[Answer Set Programming]], [[Description Logic]]
  - depends-on:: [[Search Algorithm]], [[Inference]], [[SMT Solver]], [[Satisfiability]]
  - supports:: [[Machine Learning Discipline]], [[Fairness]], [[Ontology]], [[Knowledge Representation]], [[Deep Learning]], [[Explainability]]
  - uses:: [[Algorithm]], [[Search Algorithm]], [[Inference]], [[Backtracking Search]], [[SMT Solver]], [[Gradient Descent]]
  - contrasts-with:: [[Heuristic Methods]], [[Gradient Descent]]
  - related-to:: [[Parameter]], [[Property]], [[System]], [[Loss Function]], [[Markov Decision Process]], [[Satisfiability]], [[Arc Consistency]], [[Model Checking]], [[Theorem Proving]], [[Neural Network]], [[Reinforcement Learning]]
  - bridges-to:: [[Digital Twin]], [[Blockchain]], [[Smart Contract]]

- ### Content
  - ## Compositional Relationships (Components)
    ```
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:hasPart ai:ConstraintSatisfactionProblem))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:hasPart ai:ConstraintProgramming))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:hasPart ai:Regularisation))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:hasPart ai:ArcConsistency))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:hasPart ai:BacktrackingSearch))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:hasPart ai:GlobalConstraint))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:hasPart ai:FairnessConstraint))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:hasPart ai:SafetyConstraint))
    ```
  - ## Dependency Relationships
    ```
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:requires ai:Objective))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:requires ai:Model))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:requires ai:System))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:requires ai:Algorithm))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:requires ai:SearchAlgorithm))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:requires ai:Inference))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:requires ai:SMTSolver))
    ```
  - ## Capability Relationships
    ```
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:enables ai:FormalVerification))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:enables ai:Reasoning))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:enables ai:Safety))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:enables ai:Optimisation))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:enables ai:Planning))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:enables ai:Scheduling))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:enables ai:Fairness))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:enables ai:Explainability))
    ```
  - ## Implementation Relationships
    ```
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:implements ai:CombinatorialOptimisation))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:implements ai:LinearProgramming))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:implements ai:IntegerProgramming))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:implements ai:AnswerSetProgramming))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:implements ai:DescriptionLogic))
    ```
  - ## Reduction Relationships
    ```
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:reducesTo ai:BooleanSatisfiability))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:reducesTo ai:LinearProgrammingRelaxation))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:reducesTo ai:GraphColouring))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:reducesTo ai:NetworkFlowProblem))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:contrastsWith ai:HeuristicMethods))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:contrastsWith ai:GradientDescent))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:supports ai:DeepLearning))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:bridges ai:DigitalTwin))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:bridges ai:Blockchain))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:bridges ai:SmartContract))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:relatedTo ai:NeuralNetwork))
    SubClassOf(ai:Constraint
      ObjectSomeValuesFrom(ai:relatedTo ai:ReinforcementLearning))
    ```
  - ## About
    - A **Constraint** is one of the foundational abstractions in [[Artificial Intelligence]], operations research, and formal logic, encoding the limits within which a computational or physical [[System]] must operate. The history of constraint-based reasoning runs from the early formal logic of Frege and Russell through Waltz's (1972) constraint propagation in scene interpretation, through Montanari's (1974) network-of-constraints formalism, to the modern unified treatment in Dechter's seminal textbook *Constraint Processing* (2003). Over five decades, the notion has expanded from simple equality and inequality predicates over integer domains into a rich taxonomy that includes unary, binary, and global constraints; hard (mandatory) and soft (preferably satisfied) constraints; temporal constraints (Allen's interval algebra); resource constraints in [[Scheduling]]; integrity constraints in databases; and safety constraints in cyber-physical [[System|systems]]. The central algorithmic challenge is to find, enumerate, or optimise over assignments that satisfy all constraints simultaneously, which is in general NP-complete but tractable through a combination of propagation (reducing domains by detecting infeasibility early), search heuristics (variable ordering, value selection), and relaxation ([[Linear Programming]] or Lagrangian relaxation providing bounds that guide [[Backtracking Search]]). The tractability landscape is nuanced: while general CSP solving is NP-complete, large classes of constraint networks have polynomial-time tractable structure — constraint networks whose primal graph has bounded tree-width are solvable in polynomial time via tree decomposition, a result that connects constraint processing to parameterised complexity theory and informs the design of practical solving strategies that exploit problem structure before resorting to exhaustive search.

    - The mathematical formalisation of a CSP identifies three components: a set of variables X = {x₁, ..., xₙ}, domains D = {D₁, ..., Dₙ} where each Dᵢ is a finite set of permissible values for xᵢ, and a set of constraints C = {c₁, ..., cₘ} where each cᵢ is a relation over a subset of variables (the scope of the constraint). A solution is a complete assignment σ: X → ⋃Dᵢ such that σ(xᵢ) ∈ Dᵢ for all i and all constraints are satisfied. This deceptively simple formalism subsumes an enormous range of combinatorial problems: Boolean [[Satisfiability]] is a CSP over binary domains with clause constraints; graph colouring is a CSP with AllDifferent constraints on adjacent vertices; the n-queens puzzle is a binary CSP with inequality and offset constraints; nurse-scheduling is a CSP with resource constraints on shifts per nurse per period and fairness constraints on workload distribution. The formalism generalises naturally to continuous domains (constraint satisfaction over the reals, handled by interval arithmetic or [[SMT Solver|SMT]] solvers with linear arithmetic theories), to optimisation (constraint optimisation problems, COPs, minimise or maximise an [[Objective]] subject to constraints), and to distributed settings (distributed CSPs, DisCSPs, where variables and constraints are partitioned across agents that must coordinate to find a consistent global assignment without sharing private information).

    - The relationship between [[Constraint Satisfaction Problem|constraint satisfaction]] and [[Machine Learning Discipline]] has deepened substantially since 2020. Rather than treating ML and constraint-solving as separate disciplines, the emerging integration uses each to address the other's weaknesses. Learned heuristics guide [[Backtracking Search]] in classical CSP solvers — graph neural networks predict variable-value branching decisions more accurately than hand-crafted heuristics such as minimum remaining values (MRV) or degree heuristic, reducing node counts in search trees by orders of magnitude on structured problem families. Conversely, constraints are embedded directly in neural architectures through differentiable constraint layers, projection operators that map gradient steps back into the feasible region, and [[Regularisation]] penalties that penalise degrees of constraint violation. Differentiable constraint satisfaction (DC-Sat) and differentiable Integer Linear Programming (DC-ILP) layers allow neural networks to produce outputs that satisfy combinatorial constraints end-to-end, enabling learning-augmented combinatorial [[Optimisation]] for vehicle routing, protein design, and chip placement. At NeurIPS 2025, a dedicated workshop on Constrained Optimisation for Machine Learning surveyed how safety-critical domains — medical diagnosis, autonomous vehicles, credit scoring — demand that model outputs satisfy formal constraints encoding fairness, robustness, and physical plausibility, arguing that unconstrained statistical fitting is insufficient for deployment in regulated contexts. A 2025 NeurIPS keynote on *Constraint-Aware Generative Models* demonstrated that large diffusion and language models frequently violate physical conservation laws and logical consistency requirements, motivating post-hoc constraint projection and constrained fine-tuning methods. The [[Deep Learning]] community has responded with constrained decoding — beam search or nucleus sampling restricted to token sequences satisfying syntactic, semantic, or safety constraints defined by formal grammars, finite automata, or logic programs — as a practical mechanism for steering generation toward constraint-compliant outputs without retraining.

    - In [[Reinforcement Learning]], constraints appear through the [[Markov Decision Process|constrained MDP]] (CMDP) framework introduced by Altman (1999), where a policy must maximise expected cumulative reward subject to one or more safety cost constraints expressed as bounds on expected cumulative cost signals. Lagrangian relaxation of CMDPs — as in the Constrained Policy Optimisation (CPO) algorithm of Achiam et al. (2017) and its successors — converts the constrained problem into an unconstrained saddle-point problem, iteratively updating primal policy and dual multipliers. The Lagrangian multiplier serves as an adaptive penalty coefficient: when the cost constraint is violated the multiplier increases, pushing the policy toward safer behaviour; when the constraint is satisfied with slack the multiplier decreases, allowing more aggressive reward maximisation. A 2024 survey of safe [[Reinforcement Learning]] and constrained MDPs (arXiv:2505.17342) catalogues over 200 methods, identifying Lagrangian, trust-region, interior-point, and projection-based approaches as the dominant families. The sTRPO algorithm presented at NeurIPS 2025 augments trust-region policy optimisation with explicit exclusion of unsafe policy-space regions identified by an auxiliary learned risk model, outperforming seven baseline algorithms on Safety-Gymnasium benchmarks with significantly fewer constraint violations. Beyond the CMDP framework, constraint-based safety also enters [[Reinforcement Learning]] through control-barrier functions (CBFs) that define safe sets in state space and enforce forward invariance — the property that once the [[System]] is in a safe state it cannot leave the safe set — through quadratic programming constraints on the control action at each time step. CBF-based safe RL has been applied to robotic manipulation, drone flight, and autonomous driving, where worst-case constraint violation during exploration carries physical consequences that episodic reward shaping cannot adequately capture.

    - The role of constraints in [[Knowledge Representation]] and [[Ontology]] deserves separate treatment because it instantiates a fundamentally different computational paradigm from either CSP solving or ML. In [[Description Logic]] (DL), an ontology is a finite set of axioms — constraints — over a shared vocabulary of class names and property names. An ABox (assertional box) states facts about named individuals; a TBox (terminological box) states subsumption and restriction constraints between class expressions. A query asks whether a new fact can be derived from the ontology by sound logical [[Inference]]. OWL 2 DL (the Web Ontology Language, standardised by the W3C) provides a rich TBox language including: existential restrictions (owl:someValuesFrom, encoding "there exists at least one value of this property satisfying this class"), universal restrictions (owl:allValuesFrom), cardinality constraints (owl:minCardinality, owl:maxCardinality, owl:exactCardinality), nominals, property chains, and disjoints. Reasoning services — classification (computing the subsumption hierarchy), consistency checking (detecting contradictory axioms), instance retrieval (finding individuals satisfying a class expression), and conjunctive query answering — are implemented by tableau [[Algorithm|algorithms]] in reasoners such as HermiT, Pellet, and ELK. The computational cost of these reasoning services ranges from polynomial (EL profile, used by SNOMED CT with millions of concepts) through EXPTIME-complete (OWL DL) to undecidable (OWL Full). This tractability stratification is itself a constraint satisfaction insight: the choice of constraint language (DL expressivity) determines the computational profile of the [[Inference]] problem.

  - ## Components / Architecture
    - **Constraint types by scope:**
      - *Unary constraints*: restrict a single variable (e.g. x ∈ {1,3,5}). Equivalent to domain restriction; enforced trivially by removing violating values from the domain before search.
      - *Binary constraints*: relate two variables (e.g. x ≠ y, x ≤ y + 2, x + y = k). Binary CSPs have been the focus of most theoretical analysis; every CSP can be converted to a binary CSP by introducing auxiliary variables, though this may increase network size.
      - *Non-binary (k-ary) constraints*: generalise binary to k variables. Global constraints are a special case where the arity is variable and can range over the entire variable set.
      - *Global constraints*: compactly express complex combinatorial structure over arbitrary-arity variable sets with dedicated, efficient propagation algorithms.
        - **AllDifferent** (Régin, 1994): all variables in a set must take distinct values; O(n^1.5) filtering via bipartite matching (Hopcroft-Karp).
        - **Cumulative** (Nuijten 1994, Baptiste et al. 2001): a set of tasks with start times, durations, and resource consumptions must not collectively exceed a capacity bound at any time point; filtered by edge-finding (O(n log n)) and energetic reasoning.
        - **Circuit**: values must form a Hamiltonian circuit on the variable index graph; underpins vehicle routing and Travelling Salesperson Problem formulations; propagated by subtour elimination via strongly connected components (Caseau & Laburthe 1997).
        - **Regular** (Pesant 2004): the sequence of values assigned to an ordered variable set must be a word in a given regular language; propagated in linear time via a DFA traversal.
        - **GCC** (Global Cardinality Constraint, Régin 1996): specifies lower and upper bounds on how many times each value can appear in a set of variables; solved via network flow in O(n·|D|) per call.
        - The Global Constraint Catalogue (Beldiceanu, Carlsson et al.) documents over 400 global constraints with propagation algorithms and computational complexity.
      - *Soft constraints*: carry a violation cost rather than being mandatory; partial CSPs allow some constraints to be violated at a cost, while weighted CSP and valued CSP frameworks assign ordered semi-ring costs to violation levels. Solved by branch-and-bound on violation cost, enabling optimisation over partially satisfiable constraint sets — critical for real-world problems where perfect satisfaction is unattainable and the goal is best-compromise solutions.
      - *Conditional constraints*: are active only when a condition variable takes a particular value; used in configuration problems where the presence of component A implies constraints between its sub-components that are irrelevant if A is absent.
    - **Constraint families by domain:**
      - *Propositional and Boolean*: clause constraints (disjunctions of literals), pseudo-Boolean constraints (linear combinations of 0-1 variables), [[Satisfiability|SAT]] encodings that represent arbitrary constraint networks over Boolean domains. Modern CDCL SAT solvers (MiniSAT, CaDiCaL, Kissat) solve industrial SAT instances with millions of variables, underpinning hardware formal verification and bounded model checking.
      - *Arithmetic over integers*: linear equalities/inequalities (exploited by [[Linear Programming]] and [[Integer Programming]] solvers), non-linear arithmetic (polynomial constraints, solved by Cylindrical Algebraic Decomposition or [[SMT Solver|SMT]] with non-linear arithmetic theories — generally undecidable but heuristically tractable for bounded formulas).
      - *Arithmetic over reals*: continuous constraint satisfaction and [[Optimisation]] over real-valued variables, handled by interval arithmetic (computing sound over-approximations of the feasible set), [[Linear Programming]] for convex linear cases, semi-definite programming (SDP) for polynomial constraints via Sum-of-Squares relaxations.
      - *Temporal*: Allen's interval algebra (13 mutually exclusive temporal relations between intervals: before, meets, overlaps, starts, during, finishes, equals, and their inverses); difference constraints (linear constraints of the form xᵢ - xⱼ ≤ dᵢⱼ, solvable by Bellman-Ford in O(nE) time — the foundation of Simple Temporal Networks (STNs) used in AI [[Planning]] with durations); temporal constraint propagation in scheduling networks.
      - *Logical*: [[Description Logic]] axioms in [[Ontology|ontologies]] (TBox constraints enabling [[Inference]] over ABox assertions); [[Answer Set Programming]] (ASP) rules encoding non-monotonic reasoning via stable-model semantics (Gelfond and Lifschitz, 1988); integrity constraints in relational databases (primary key, foreign key, functional dependency, uniqueness constraints enforced by the RDBMS engine).
      - *Physical/cyber-physical*: differential-equation constraints in [[Digital Twin|digital twin]] simulation models encoding Newton's laws, Kirchhoff's circuit laws, thermodynamic conservation principles, and material constitutive relations; energy/mass conservation constraints in physics-aware ML models ensuring learned dynamics respect physical invariants.
      - *Fairness*: demographic parity (DP: P(Ŷ=1|A=0) = P(Ŷ=1|A=1)), equalised odds (EOdds: equal TPR and FPR across groups), individual fairness (similar individuals receive similar predictions), and counterfactual fairness (prediction unchanged in a counterfactual world where the protected attribute differs) — each formalisable as a constraint on the prediction function's behaviour over population subgroups.
    - **Solving paradigms and their relationships:**
      - *Constraint propagation*: enforce local consistency — arc consistency (AC-3: each value in each domain has a support in each neighbouring domain), path consistency (PC: each pair of values in two domains has a consistent extension to all triples), and higher k-consistency — to prune domains before or during [[Backtracking Search]]. Propagation is interleaved with search in the MAC (Maintaining Arc Consistency) algorithm, triggering fresh AC-3 propagation after each variable assignment.
      - *Look-ahead ordering heuristics*: the Minimum Remaining Values (MRV) heuristic selects the variable with the smallest current domain (the "fail-first" principle); the Degree Heuristic breaks MRV ties by selecting the variable involved in the most constraints with unassigned variables; the Least Constraining Value (LCV) heuristic selects the value that removes the fewest values from neighbouring domains, preserving flexibility.
      - *[[Backtracking Search]] with clause learning (CDCL)*: backtracking augmented with conflict-driven clause learning that analyses the implication graph of propagation steps, records "no-goods" as new clause constraints, and enables non-chronological backjumping. This is the key innovation behind modern SAT solver efficiency.
      - *[[Linear Programming]] relaxation and branch-and-bound*: for Mixed [[Integer Programming]] problems, LP relaxation provides lower bounds; branch-and-bound divides the problem by branching on a fractional variable; cutting planes (Gomory cuts, cover cuts, lift-and-project) strengthen the LP relaxation. Modern MIP solvers (Gurobi, CPLEX, SCIP, HiGHS) combine branch-and-cut with primal heuristics and presolve reduction.
      - *Local search and meta-heuristics*: hill climbing, simulated annealing, tabu search, and population-based algorithms (genetic algorithms, ant colony [[Optimisation]], particle swarm [[Optimisation]]) operate on complete assignments and iteratively improve constraint satisfaction; does not guarantee completeness but finds good solutions quickly for large-scale, over-constrained problems.
      - *Hybrid CP+LP*: integration of [[Constraint Programming]] with [[Linear Programming]] in frameworks such as IBM ILOG CP Optimizer and the LCG (Lazy Clause Generation) Chuffed solver — generating Boolean clauses from CP propagation and feeding them into CDCL for stronger learning.
    - **Constraint modelling languages and tools:**
      - *MiniZinc*: a high-level, solver-independent constraint modelling language developed at Monash University; models compiled to FlatZinc for execution on diverse back-ends (Gecode, Chuffed, OR-Tools, CPLEX, Gurobi). The annual MiniZinc Challenge provides rigorous benchmarking; OR-Tools won all medals in both 2024 and 2025.
      - *XCSP3*: an XML-based format standardising the representation of CSP and COP instances for solver interoperability and competition benchmarking (CSP Competition / XCSP competition series).
      - *OPL (Optimization Programming Language)*: IBM ILOG's high-level language for modelling and solving constraint and [[Optimisation]] problems, tightly integrated with CPLEX and CP Optimizer. Widely deployed in enterprise scheduling and configuration.
      - *Conjure / Essence*: a high-level abstract constraint modelling language (University of St Andrews); Essence models are automatically reformulated into MiniZinc by the Conjure tool with symmetry detection and problem-specific reformulation; the Savile Row translator performs second-stage simplification before solver execution.
      - *ASP solvers*: Clingo (Potassco group, University of Potsdam) and DLVHEX implement [[Answer Set Programming]], handling non-monotonic constraints and disjunctive reasoning — particularly useful for planning, diagnosis, and configuration problems requiring closed-world semantics.
      - *SMT solvers*: Z3 (Microsoft Research), CVC5 (Stanford/Iowa), Yices 2 (SRI) extend propositional [[Satisfiability]] with arithmetic, bit-vector, array, and uninterpreted-function theories via the DPLL(T) architecture. SMT is the foundation for software verification (Boogie/Dafny, Verus, Prusti) and hardware model checking.

  - ## Use Cases / Major Families
    - **Scheduling and timetabling** — a constraint's most classical application domain:
      - *Crew rostering*: Air France, British Airways, Ryanair deploy CP-based solvers for pilot/cabin crew pairing and rostering; constraints encode duty time limits, rest requirements, qualification constraints, and fairness rules across the roster period
      - *University timetabling*: International Timetabling Competition (ITC) benchmarks; room-timeslot-course assignment under room capacity, lecturer availability, student conflict, and educational preference constraints
      - *Operating-theatre scheduling*: NHS trusts deploy constraint-based scheduling to assign surgical procedures to theatres, surgeons, anaesthetists, and equipment under infection control, staff availability, and sterility constraints
      - *Engineering possession scheduling (Network Rail)*: nightly OR-Tools CP-SAT model allocates track access windows against train service requirements, safety rules, and engineering resource constraints
    - **Configuration problems**: product configurators for automobiles, computers, and industrial equipment must satisfy large hierarchies of compatibility constraints; ILOG Configurator underpinned major automotive OEM systems. Amazon's product configurator for custom products uses constraint graphs over thousands of component-level dependencies.
    - **Resource allocation and [[Planning]]**:
      - PDDL family [[Planning]] languages encode action preconditions and effects as constraints; temporal [[Planning]] under disjunctive constraints addressed by KCL's integration of CP with AI planners (2024–2025)
      - Healthcare resource allocation: ICU bed assignment, staff scheduling, equipment maintenance scheduling all modelled as constraint optimisation problems under capacity, qualification, and safety constraints
      - Cloud computing: Google Cloud scheduler uses OR-Tools CP-SAT to allocate VMs to hypervisor hosts under capacity, affinity, and migration-cost constraints
    - **[[Machine Learning Discipline]] regularisation**:
      - L1 (lasso): enforces sparse weight vectors; equivalent to L1-ball domain constraint on model weights
      - L2 (ridge): enforces small weight magnitudes; equivalent to L2-ball domain constraint
      - Elastic-net: combination of L1 and L2; enforces both sparsity and magnitude bounds
      - Dropout: stochastic binary mask constraining active neurons during training; implicit constraint on effective model capacity
      - [[Weight Sharing]]: architectural constraint enforcing parameter reuse across groups of neurons (convolutional networks, transformers)
      - [[Monotonicity Constraint|Monotonicity constraints]]: architectural constraint enforcing monotone input-output relationships in tabular models for regulated industries
    - **AI [[Fairness]]**:
      - Demographic parity: P(Ŷ=1|A=0) = P(Ŷ=1|A=1) — constraint on prediction rates across groups
      - Equalised odds: equal TPR and FPR across groups — tighter than demographic parity, addresses both positive and negative prediction accuracy
      - Individual fairness: similar individuals receive similar predictions — formalisable as a Lipschitz constraint on the prediction function
      - Counterfactual fairness: prediction unchanged in a counterfactual world where the protected attribute differs — formalisable as an invariance constraint
    - **Safe [[Reinforcement Learning]]**:
      - CMDP-based: CPO (Achiam et al. 2017), PCPO, FOCOPS, sTRPO enforce safety budget constraints on cumulative cost signals
      - CBF-based: Control Barrier Functions enforce forward invariance of safe state sets, applied to drone flight, robot manipulation, autonomous driving
      - PECTS (arXiv:2604.06463): CBF-constrained MPC framework with learned stochastic dynamics, enabling probabilistic safety guarantees under model uncertainty
    - **[[Formal Verification]] and [[Model Checking]]**:
      - BMC (bounded model checking): encodes reachability as [[Satisfiability]], solved by CDCL SAT; scales to complex hardware
      - IC3/PDR (property-directed reachability): generates inductive invariants by iteratively over-approximating reachable states; rIC3 (2025) achieved state-of-the-art on HWMCC 2024
      - seL4 microkernel formal proof (NICTA/Data61, now CSIRO): canonical industrial-scale theorem-proving achievement demonstrating full functional correctness of a real OS kernel
    - **[[Blockchain]] and [[Smart Contract]] invariants**:
      - Solidity's require/revert statements: run-time constraint enforcement in Ethereum smart contracts
      - Certora Prover, K framework: off-chain formal verification of smart contract safety and liveness constraints using SMT solving
      - Access control modifiers (OpenZeppelin): role-based constraint enforcement as pre-condition guards
    - **[[Digital Twin]] fidelity**: physical constraints (Newton's laws, thermodynamic limits, material stress bounds) woven into simulation models so twin predictions remain physically consistent; constraint violation signals trigger anomaly alerts and model recalibration.
    - **[[Knowledge Representation]] and [[Ontology]]**: OWL 2 DL axioms (existential restrictions, cardinality constraints, property chains) are [[Description Logic]] constraints checked by reasoners (HermiT, Pellet, ELK) enabling [[Inference]] of implicit facts and detection of inconsistencies. SNOMED CT (37 million axioms) and the Gene Ontology are maintained using EL-profile reasoners that exploit polynomial-time tractability of the EL description logic fragment.

  - ## Constraint in AI Agent Architectures
    - **Tool-use pattern**: LLM agent calls a constraint solver (OR-Tools, Z3, Gurobi) as an external tool when faced with a combinatorial sub-task; the solver returns a guaranteed-feasible solution or a proof of infeasibility; the agent incorporates this into its reasoning chain. Formalised in "Formalize, Don't Optimize" (arXiv:2605.12421) as the dominant strategy for LLM+solver integration.
    - **Constraint-as-guardrail**: constraint satisfaction checking is applied as a post-generation filter on LLM outputs, rejecting any generation that violates a formal constraint specification (safety property, factual consistency, legal requirement). Implemented in constrained decoding, constrained beam search, and FUDGE-style token-level rejection sampling.
    - **Constraint-guided planning**: AI agents solving multi-step tasks use constraint solving to prune the action space — checking precondition satisfiability before attempting an action, maintaining consistency of the agent's world model under temporal constraints. PDDL+ planners (KCL, 2024–2025) demonstrate this pattern with CP-based temporal reasoning.
    - **Constraint-based memory management**: vector database retrieval in RAG (Retrieval-Augmented Generation) pipelines can be augmented with constraint filtering — retrieved documents must satisfy recency, provenance, and topic constraints before being included in the context window. Constraint filtering eliminates irrelevant or contradictory documents early, improving generation quality.
    - **Neuro-symbolic reasoning**: agent architectures that maintain a symbolic constraint model (ontology, CSP, or SMT formula) alongside a neural world model; the symbolic model enforces logical consistency while the neural model provides perceptual and linguistic understanding. DeepMind's AlphaProof (2024) demonstrated constraint-guided formal mathematical proof synthesis as a proof-of-concept for this architecture.
    - **Safe exploration**: in RL agent training, constraints define the boundary of the safe exploration region; the agent may only select actions that satisfy safety constraints (no collision, no regulatory violation, no irreversible state change); CMDP, CBF-augmented RL, and shield synthesis all instantiate this pattern with different enforcement mechanisms.
    - **Multi-agent constraint coordination**: distributed CSP (DisCSP) and distributed constraint optimisation (DCOP) formalise multi-agent coordination as constraint satisfaction across private agent variables, with message-passing algorithms (ADOPT, DPOP, Max-Sum) achieving near-optimal coordination without centralised information pooling.

  - ## Integration Patterns
    - **Constraint as filter (post-prediction)**: apply constraint checking as a post-processing step on [[Neural Network]] or [[Deep Learning]] model outputs; invalid outputs are rejected, projected, or re-sampled. Simple but may reject many outputs without correcting them.
    - **Constraint as penalty (training-time)**: add constraint violation measures as penalty terms to the [[Loss Function]]; the model learns to avoid violations through [[Gradient Descent]], but does not guarantee zero violation at inference.
    - **Constraint as architecture (structural)**: encode constraints directly into model architecture — [[Weight Sharing]] for translational invariance, [[Monotonicity Constraint|monotonicity layers]] for regulatory compliance, [[Regularisation]] layers for complexity bounds. Violations are architecturally impossible.
    - **Constraint as verification target (post-hoc)**: use [[SMT Solver|SMT]] or [[Satisfiability]] solving to verify that all possible model outputs within an input region satisfy a given constraint; applied in neural network robustness verification (Reluplex, Marabou, Venus2).
    - **Constraint as learning objective (P+O)**: the "predict-then-optimise" paradigm (Elmachtoub & Grigas 2021) trains the ML model's output directly on the downstream constrained optimisation cost, not on prediction accuracy; aligns ML model with downstream decision quality.
    - **Constraint as environment boundary (safe RL)**: in [[Reinforcement Learning]], constraints define the boundary of the safe exploration region; CMDP (Constrained Markov Decision Process) formalises this as budget constraints on cumulative cost; CBFs (Control Barrier Functions) enforce hard safety boundary constraints in continuous control.
    - **Constraint as ontology axiom (KR)**: in [[Knowledge Representation]], OWL 2 DL axioms ARE constraints — they define what class memberships can be inferred and what states are logically inconsistent; [[Inference]] is constraint solving over the ABox given the TBox.
    - **Constraint as smart contract rule (blockchain)**: Solidity require/revert statements ARE runtime constraints; formal verification of smart contracts is CSP-like reasoning over all possible execution paths to detect constraint violations before deployment.
    - **Constraint as digital-twin invariant**: physical invariants (mass conservation, energy bounds, kinematic limits) woven into [[Digital Twin]] models as constraints whose violation signals model drift or physical anomaly, enabling predictive maintenance and safety monitoring.
    - **Constraint as regulatory specification**: EU AI Act Article 9 risk management obligations, fairness requirements under GDPR Article 22, and safety requirements under EN ISO 13849 functional safety standards are all translatable into formal constraint specifications checkable by SMT solvers, marking the convergence of regulatory compliance and constraint technology.

  - ## Formal Analysis
    - **Complexity landscape**: General CSP solving (finite domains, arbitrary constraints) is NP-complete; the decision problem of whether a given constraint network has any solution subsumes Boolean [[Satisfiability]] (Cook 1971). However, large tractable islands exist:
      - *Bounded tree-width*: Constraint networks whose primal graph has tree-width k are solvable in O(n · d^k) time by dynamic programming over a tree decomposition (Freuder 1990, Dechter 1990).
      - *2-SAT*: All clauses binary → polynomial via implication graph SCC analysis (O(n + e)).
      - *Horn SAT*: All clauses with at most one positive literal → polynomial via unit propagation.
      - *Row-convex constraints*: Polynomial-time tractable (Van Hentenryck et al. 1992).
      - *Quantifier-free linear arithmetic*: NP-complete (QF_LIA/QF_LRA for SMT).
      - *Quantified linear arithmetic (Presburger arithmetic)*: Decidable but non-elementarily complex.
      - *AC-3*: Runs in O(e · d²) time; path consistency in O(n³ · d³).
    - **Reduction relationships**:
      - Any finite-domain CSP can be encoded as Boolean [[Satisfiability]] (by domain or order encoding), establishing SAT as the universal substrate for constraint solving.
      - Integer [[Linear Programming]] (ILP) constraints encode as pseudo-Boolean constraints, solved by PBS solvers or MIP branch-and-bound.
      - Graph colouring = CSP with AllDifferent constraints on cliques; polynomial for 2-colourability.
      - Network flow = CSP with flow-conservation constraints; polynomial via augmenting paths.
      - Vehicle Routing Problem = CSP/COP with Cumulative + Circuit + time-window constraints over vehicle-customer assignments.
    - **Symmetric structures**: many practical constraint networks have permutational, value, variable, or row/column symmetry in matrix problems that causes exponential redundant search effort. Symmetry-breaking mechanisms include:
      - SBDS (Symmetry-Breaking During Search, Gent & Smith 2000): adds symmetry-breaking constraints dynamically during search.
      - Symmetry-breaking predicates (Petrie & Smith 2003): static constraints eliminating all symmetric solutions except the lexicographically smallest.
      - Conjure/Essence (St Andrews): automatically detects and exploits structural symmetry during model reformulation, often eliminating the need for manual symmetry analysis.
    - **Soft constraint frameworks**:
      - Weighted CSP (WCSP): assigns non-negative costs to constraint violations; seeks minimum total cost assignment.
      - Max-CSP: maximises the number of satisfied constraints.
      - Partial CSP: requires at least k constraints to be satisfied; rest may be violated.
      - Valued CSP (VCSP): generalises all above with ordered semi-ring cost structures.
      - Connection to probabilistic graphical models: a WCSP is equivalent to a Markov Random Field where constraint violation costs are negative log-potentials; this duality enables belief propagation inference as a form of constraint relaxation.

  - ## Constraint Taxonomy Summary
    | Constraint Family | Examples | Solver Type | Complexity |
    |---|---|---|---|
    | Boolean/Propositional | SAT clauses, Pseudo-Boolean | SAT (CaDiCaL, Kissat) | NP-complete |
    | Integer linear | MIP constraints (a·x ≤ b) | MIP (Gurobi, HiGHS) | NP-hard |
    | Global (AllDifferent) | AllDiff, Cumulative, Circuit | CP (OR-Tools, Choco) | NP-hard; poly GAC |
    | SMT arithmetic | x + y ≤ 5, x ≠ 0 | SMT (Z3, CVC5) | NP-complete (QF_LIA) |
    | Description Logic | OWL subsumption, cardinality | DL Reasoner (ELK, HermiT) | EL: poly; OWL DL: EXPTIME |
    | Temporal (Allen) | Before, overlaps, during | STN solver | Poly (difference constraints) |
    | Fairness (ML) | Demographic parity, equalised odds | Constrained opt. (Lagrangian) | Problem-specific |
    | Safety (RL) | CMDP cost budget, CBF invariant | CMDP/CBF solver | Problem-specific |
    | Physical invariant | F=ma, energy conservation | ODE/PDE constraint solver | Problem-specific |
    | Blockchain | require(), invariant | SMT (Certora Prover, K) | NP-complete (EVM encoding) |

  - ## Constraint Lifecycle and Engineering
    - The constraint lifecycle in a deployed system has several distinct phases, each with its own tools and challenges:
      - *Requirement elicitation*: translating informal human requirements (business rules, regulatory obligations, physical limits, user preferences) into formal constraint specifications. This is the most error-prone phase; constraint acquisition (CONACQ, QUACQ) and LLM-assisted modelling (ConstraintLLM) are addressing it.
      - *Modelling*: expressing constraints in a formal language (MiniZinc, OPL, Essence, XCSP3, Python-OR-Tools, ASP). Modelling quality determines solver performance; over-constrained models have no solutions, under-constrained models allow too many.
      - *Solving*: invoking a constraint solver (CP, SAT, SMT, MIP, or hybrid) to find a satisfying or optimal assignment; solver selection and parameter tuning are key engineering decisions.
      - *Solution validation*: checking that the returned assignment satisfies all constraints; automated validation via the same constraint model used for solving provides a sanity check against solver bugs.
      - *Solution explanation*: generating a human-readable justification of why a particular assignment was chosen, or why certain alternatives were excluded; the ExCoS (Explanations with Constraints and Satisfiability) workshop at CP2025 signalled growing community interest in solver interpretability.
      - *Deployment and monitoring*: embedding solver calls within larger applications (scheduling systems, configurators, recommendation engines) with real-time performance requirements; OR-Tools CP-SAT Python API, Gurobi's Python SDK, and Z3Py enable integration into production Python pipelines.
      - *Model maintenance*: updating constraint specifications as requirements change; version-controlled MiniZinc or Essence models enable reproducible constraint evolution with solver regression testing across versions.
    - The engineering challenge of constraint specification quality parallels the challenge of ML data quality: garbage in, garbage out. Poorly specified constraints lead to over-constrained (infeasible) or under-constrained (trivially satisfiable) problems. Tools for automated constraint quality checking — detecting implied constraints that can be added to improve propagation, detecting redundant constraints that can be removed to reduce overhead, and detecting inconsistencies that predict infeasibility — are an active research and engineering priority.

  - ## Academic Context
    - The intellectual roots of constraint-based reasoning trace to propositional logic, [[Linear Programming]] (Dantzig, 1947), and Waltz's PhD thesis at MIT (1972). Montanari (1974) formalised networks of constraints as a mathematical object; Mackworth (1977) introduced [[Arc Consistency]] (AC-1, AC-2, AC-3) algorithms that enforce domain-level consistency without search; Haralick and Elliot (1980) classified k-consistency levels and established the relationship between consistency strength and problem tractability. The first dedicated Constraint Programming conference (CP) was held in 1995 and continues as the discipline's principal venue, complemented by CPAIOR (Integration of AI and OR approaches) and ECAI/IJCAI workshops. Key foundational texts include: Dechter, *Constraint Processing* (2003, Morgan Kaufmann) — the definitive graduate-level reference; Marriott and Stuckey, *Programming with Constraints: An Introduction* (1998, MIT Press); Rossi, van Beek, and Walsh (eds), *Handbook of Constraint Programming* (2006, Elsevier) — a 900-page comprehensive reference; and Biere, Heule, van Maaren, and Walsh (eds), *Handbook of Satisfiability* (2nd edition, 2021, IOS Press) — covering the adjacent Boolean satisfiability landscape.
    - The CP+ML integration has been a growing subdiscipline since Lombardi and Milano (2018) popularised *constraint learning* for training set completion — using constraints to complete partially observed training sets rather than imputation — and Vayanos et al.'s decision-rule methods for robust [[Optimisation]]. A landmark 2021 paper by Elmachtoub and Grigas, *Smart Predict, Then Optimise*, formalised the task-loss perspective: training an ML model whose predictions are plugged into a downstream constrained [[Optimisation]] should be done by minimising the optimisation cost rather than prediction error, giving rise to the *predict-and-optimise* (P+O) learning paradigm. The Journal of Artificial Intelligence Research dedicated a special track to Constraint Programming and Machine Learning in 2024–2025 (https://jair.org/index.php/jair/SpecialTrack-CPML), explicitly recognising the bidirectional relationship: CP for ML (constraints as structure in learning), and ML for CP (learned heuristics and value predictors in constraint solvers). The MiniZinc Challenge — an annual international competition comparing CP solvers on benchmark problem sets — provides the community's empirical scoreboard; the 2023 challenge included problems from NP-hard scheduling, graph theory, and configuration domains solved by OR-Tools, Chuffed, and commercial solvers.
    - Prominent researchers include: Rina Dechter (UC Irvine, constraint processing, bucket elimination, mini-bucket approximation); Toby Walsh (UNSW, global constraints, social constraints, AI ethics); Christian Bessiere (CNRS/Montpellier, arc consistency algorithms, constraint learning); Peter Stuckey (Monash, MiniZinc, lazy clause generation CP, Boolean satisfiability integration); Francesca Rossi (IBM Research, social choice and preference constraints); Eugene Freuder (Cork, constraint-based configuration, valued CSPs); Karen Petrie, Ian Miguel, Özgür Akgün, Ruth Hoffmann (St Andrews, Conjure/Essence modelling language, constraint acquisition); Jimmy Lee (Chinese University of Hong Kong, soft constraints, partial and weighted CSPs); Pascal Van Hentenryck (Georgia Tech/ANU, CP for operations research, stochastic constraint programming); and Luca Pulina and Armando Tacchella (constraint-based formal analysis of neural network robustness). The safe [[Reinforcement Learning]] constraint literature is led by Pieter Abbeel and colleagues (CPO), Zachary Lipton (constrained exploration), and the Oxford Future of Humanity Institute's work on AI safety constraints as a formal alignment mechanism.

  - ## Current Landscape (2026)
    - The NeurIPS 2025 Constrained Optimisation for Machine Learning workshop (https://constrained-opt-ml.github.io/) highlighted accelerating uptake of constrained formulations in safety-critical AI deployments. Regulatory pressure from the EU AI Act (Regulation (EU) 2024/1689) mandates that high-risk AI systems maintain documented risk management systems, data governance frameworks, and human oversight mechanisms. Key deadlines: prohibited AI practices and AI literacy obligations applied from 2 February 2025; GPAI model obligations applied from 2 August 2025; full high-risk system obligations apply from 2 August 2026. Non-compliance carries fines of up to €15 million or 3% of global turnover for high-risk system violations. This regulatory pressure is driving practitioners toward formalised constraint specifications and auditable decision traces as a compliance mechanism, making constraint technology directly commercially relevant beyond its traditional OR and formal-methods niches.
    - The 2025 paper *Self-Supervised Transformers as Iterative Solution Improvers for Constraint Satisfaction* (arXiv:2502.15794) demonstrated that transformer architectures can learn to iteratively improve CSP solutions by masking and re-predicting variable assignments, achieving competitive performance on graph colouring, Boolean satisfiability, and combinatorial scheduling benchmarks without solver-specific engineering. This establishes a new paradigm of neural solution improvement complementing (rather than replacing) exact solver technology.
    - OR-Tools (Google) won all MiniZinc Challenge 2025 medals (Glasgow, August 2025), continuing its uninterrupted dominance of the annual CP benchmark. The CP-SAT solver within OR-Tools (a CDCL-based CP solver operating over integer domains) routinely outperforms commercial MIP solvers on combinatorial scheduling at scale; it is used by Alphabet, SNCF, and multiple NHS trust scheduling systems, as well as Amazon Robotics for warehouse coordination. Machine learning integration within OR-Tools CP-SAT has progressed with reinforcement-learning-trained search policies for scheduling benchmarks (arXiv:2508.20056) demonstrating meaningful search tree size reductions.
    - Safe RL constraint satisfaction has matured from academic benchmarks toward production systems: Waymo uses CMDP-based policy training with collision and comfort constraints; DeepMind's AlphaFold successors incorporate structural-plausibility constraints into protein structure prediction; OpenAI's RLHF pipelines incorporate harmlessness constraints via constitutional AI preference learning. The CBF-constrained MPC framework (PECTS, arXiv:2604.06463) combines learned stochastic dynamics with control barrier function constraints in a model predictive control loop, enabling probabilistic safety guarantees under model uncertainty — a significant advance toward trusted deployment of RL-trained policies in physical systems.
    - Constraint acquisition (CONACQ family) has advanced with the "Overcoming Over-Fitting in Constraint Acquisition" paper (arXiv:2509.24489), which applies regularisation techniques to prevent acquisition systems from learning overly specific constraint models from finite noisy datasets. This mirrors the regularisation story in ML: just as L1/L2 penalties prevent neural network over-fitting, regularised constraint acquisition prevents over-constrained models that fail to generalise beyond the training examples. Active constraint acquisition (GuessAndCheck, BayesAcq, SeqAcq) continues to mature, with the Guided Bottom-Up Interactive Constraint Acquisition (arXiv:2307.06126) approach demonstrating significantly reduced query counts on benchmark problems.
    - The CP2025 conference (Glasgow, August 2025) co-located with SAT2025 and SoCS2025 validated the continued vitality of constraint research: accepted papers spanned transformer-based algorithm selection, constraint-based train dispatching, expansion-based quantified integer programming, and a dedicated ExCoS (Explanations with Constraints and Satisfiability) workshop highlighting solver interpretability as an emerging research priority aligned with regulatory transparency requirements. The JAIR special track on CP and ML (2024–2025) published a comprehensive survey of bidirectional integration methods, establishing CP+ML as a recognised subfield with dedicated publication venues.

  - ## UK Context
    - **University of St Andrews** hosts the UK's most active constraint programming research group, led by Ian Miguel, Özgür Akgün, Karen Petrie, and Ruth Hoffmann. Their Essence/Conjure toolchain abstracts over low-level solver details, enabling automatic reformulation of high-level constraint models into MiniZinc for diverse solver back-ends. The group presented multiple papers at CP2024, including work on permutation patterns, constraint acquisition, and algorithm selection (https://blogs.cs.st-andrews.ac.uk/csblog/2024/09/19/constraint-programming-research-group-at-the-cp2024-conference/). CP2025, held in Glasgow in August 2025 — the first UK-hosted CP conference in over a decade — further elevated UK CP research visibility. The group's 2024 publication "Plotting: A Case Study in Lifted Planning with Constraints" (Espasa, Miguel, Nightingale, Salamon & Villaret, *Constraints* journal) demonstrates the Conjure/Essence methodology on temporal AI planning benchmarks, connecting constraint programming theory to practical AI planning applications.
    - **King's College London** applied [[Constraint Programming]] to disjunctive [[Scheduling]] in temporal AI [[Planning]], demonstrating significant reductions in search states on real-world temporal planning benchmarks and contributing to PDDL+ planning theory. KCL's group bridges CP and AI planning, positioning constraint technology within the broader AI [[Reasoning]] ecosystem.
    - **University of Edinburgh** has active constraint and [[Optimisation]] research within the School of Informatics, including development of HiGHS (the leading open-source LP/MIP solver, used by OR-Tools, SciPy, and the Julia JuMP ecosystem) and contributions to HOL4 theorem proving (formal constraint verification). The HiGHS Workshop 2026 (Edinburgh, June 2026) exemplifies the group's practitioner engagement. Edinburgh's [[Reinforcement Learning]] safety research (safe exploration, constrained MDPs) further anchors the constraint-ML intersection in the UK academic landscape.
    - **University of Oxford** (Department of Computer Science) hosts formal-methods and [[Satisfiability]] research including work on [[SMT Solver|SMT]] theories, certified verification tools, and the Owl security analysis toolkit for binary analysis. The Oxford Future of Humanity Institute (now Centre for the Governance of AI) has contributed to formal specification of AI [[Safety]] constraints as alignment mechanisms, connecting constraint theory to AI governance. The Oxford Responsible Technology Institute is contributing to EU AI Act implementation guidance, where constraint formalisation is a core technical mechanism.
    - **Imperial College London** contributes to formal verification of safety-critical systems, applying SAT/SMT constraint solving to hardware security and embedded software verification. The Department of Electrical and Electronic Engineering's hardware verification group uses Jasper Gold (Cadence) SMT-based constraint solving for chip design.
    - **Alan Turing Institute** (headquartered in London with partner institutions across the UK, including Edinburgh, Cambridge, Manchester, and Oxford) explicitly lists constrained [[Optimisation]] for public-sector decision-making as a strategic priority, and has funded research on constraint-based resource allocation for NHS capacity planning, rail network scheduling, and emergency response routing.
    - **Manchester** has a strong tradition in constraint-based scheduling applied to NHS resource planning and industrial logistics; the city's role as the UK's second logistics hub makes vehicle routing and warehouse optimisation a commercially significant constraint application. The University of Manchester (Computer Science) contributes to knowledge representation and [[Description Logic]] ontology reasoning — OWL 2 DL reasoners (HermiT, Pellet, ELK) enforce constraint axioms over large-scale biomedical ontologies including SNOMED CT and the Gene Ontology.
    - **Northern-England industrial context**: Sheffield and Leeds manufacturing sectors (steel, advanced materials, aerospace component fabrication) have adopted constraint-based job-shop scheduling for production sequencing under machine availability and tooling constraints. The National Railway Laboratory (Derby, opened 2025) is exploring constraint-satisfaction methods for timetable optimisation under disruption, using OR-Tools CP-SAT for conflict detection and resolution in disrupted timetable scenarios. Newcastle's Nissan plant applies MIP-based production scheduling. The STFC Hartree Centre (Daresbury, Cheshire) conducts HPC-oriented research into quantum-classical hybrid constraint solving, building on its IBM quantum computing partnership.

  - ## Future Directions (2026–2030)
    - **Neurosymbolic constraint integration**: architectures that embed symbolic constraints directly as differentiable layers in [[Neural Network|neural networks]], enabling end-to-end training that guarantees constraint satisfaction at inference time — extending beyond penalty methods to architecturally enforced feasibility. DC-Sat, DC-ILP, and SPO (Smart Predict, then Optimise) layers are early steps; by 2028, constraint-embedding layers will be standard toolkit components analogous to batch normalisation or dropout, with certified feasibility as the output guarantee rather than just reduced empirical violation rates.
    - **Foundation models as constraint modellers**: large language models fine-tuned on constraint modelling corpora (MiniZinc, XCSP3, OPL, Prolog, Python-OR-Tools) are beginning to generate solver-ready constraint formulations from natural-language problem descriptions, democratising access to [[Constraint Programming]] for non-specialist practitioners. The "Formalize, Don't Optimize" study (2025) confirmed that the correct LLM mode for combinatorial problems is constraint modelling rather than heuristic code generation; ConstraintLLM (EMNLP 2025) demonstrated a full CARM + Tree-of-Thoughts pipeline; by 2028, practitioner-facing constraint modelling assistants will be embedded in ERP systems, scheduling tools, and OR workbenches.
    - **Automated constraint acquisition at scale**: learning constraint specifications from positive and negative examples (CONACQ, QUACQ, GuessAndCheck, BayesAcq) combined with active learning to reduce the number of required oracle queries — enabling automatic discovery of business rules, physical laws, and regulatory requirements from operational data without manual encoding. Integration with LLM paraphrasing will allow acquisition systems to propose constraint candidates in natural language for human review before formalisation, bridging the gap between domain knowledge and formal specification.
    - **Quantum-hybrid constraint solving**: QUBO formulations continue to map CSPs to quantum annealing hardware (D-Wave Advantage, Fujitsu Digital Annealer); D-Wave's CQM (Constrained Quadratic Model) solver now accepts constraints natively, avoiding manual penalty-term engineering. Near-term practical utility for specific constraint families (dense graph problems, portfolio optimisation, protein design) is under active evaluation; by 2030 quantum annealing will likely be a practical subroutine for problem-specific constraint subproblems where classical branch-and-bound exhibits poor scaling.
    - **Real-time constraint enforcement in generative AI**: constrained decoding (beam search, nucleus sampling, token-level constraint checking via finite automata and logic programs) is becoming standard for large language model deployment in regulated domains — legal text generation must comply with jurisdiction-specific terminology constraints, medical report generation must comply with clinical terminology and dosage constraints, financial text must comply with regulatory disclosure constraints. By 2028, constraint-compliant generation will be an expected feature of enterprise LLM deployments, with formal constraint specifications replacing informal prompt engineering for safety-critical applications.
    - **Regulatory-driven constraint formalisation**: the EU AI Act (full application August 2026) and emerging ISO/IEC AI standards (ISO 42001, ISO 5469) require machine-readable risk management frameworks, data governance specifications, and human oversight mechanisms — which translate naturally into formal constraint specifications that can be checked by SMT solvers and model checkers. A new discipline of regulatory constraint engineering will emerge, bridging [[Fairness]], [[Safety]], and [[Explainability]] requirements with formal symbolic methods, making constraint specification a core competency for AI governance teams in regulated industries (healthcare, finance, transport, energy).
    - **Constraint-guided scientific discovery**: protein structure prediction constraints (AlphaFold's geometry constraints), molecular dynamics constraints (bond length, angle, and planarity constraints in molecular simulation), and materials science constraints (crystal symmetry, stoichiometry, energy bounds) point toward constraints as a unifying formalism for AI-assisted scientific modelling. Constraint-based neural ODE models that enforce physical conservation laws at each integration step represent the intersection of [[Deep Learning]] and physical constraint solving, enabling scientifically trustworthy surrogate models.

  - ## Key Terminology
    - **Constraint Satisfaction Problem (CSP)**: the canonical decision problem of finding a variable assignment satisfying all constraints; the optimisation variant (COP) seeks the assignment minimising/maximising an objective subject to constraints. Formally: given (X, D, C) — a set of variables, domains, and constraints — find σ: X → ⋃D such that all constraints in C are satisfied.
    - **Hard constraint**: a constraint that must be satisfied in every valid solution; its violation renders a candidate assignment infeasible, not just penalised. Contrast with soft constraints that carry violation costs rather than absolute infeasibility.
    - **Soft constraint**: a constraint whose violation incurs a cost rather than infeasibility; weighted CSP and valued CSP frameworks assign ordered semi-ring costs to violation levels, enabling best-compromise solutions when perfect satisfaction is unattainable.
    - **[[Arc Consistency]] (AC)**: a local consistency property whereby, for every value v in domain Dᵢ, there exists at least one consistent value in each neighbouring domain Dⱼ for each binary constraint between xᵢ and xⱼ. AC-3 is the standard algorithm; stronger notions (PC, k-consistency) eliminate more infeasible values at higher computational cost.
    - **Generalised Arc Consistency (GAC)**: the extension of AC to non-binary and global constraints; a value v in domain Dᵢ is GAC-supported if there exists a consistent tuple extension through all variables in the constraint's scope.
    - **[[Backtracking Search]]**: a systematic depth-first search algorithm that assigns variables one at a time and backtracks when a partial assignment violates a constraint. Enhanced with conflict-driven clause learning (CDCL), back-jumping, and restarts in modern Boolean SAT solvers (MiniSAT, CaDiCaL, Kissat).
    - **Global constraint**: a constraint over an arbitrary number of variables that captures complex combinatorial structure and can be propagated in polynomial time despite potentially exponential extension. The AllDifferent, Cumulative, Circuit, and Regular constraints are the canonical examples; the Global Constraint Catalogue (Beldiceanu et al.) documents over 400 global constraints with their propagation algorithms and complexity.
    - **[[Constraint Programming]] (CP)**: the paradigm of expressing combinatorial problems as sets of constraints over typed variables and solving them with propagation-augmented [[Backtracking Search]]. Commercial systems (IBM ILOG CP Optimizer) and open-source systems (Gecode, OR-Tools, Choco) implement this paradigm. CP excels at heavily constrained scheduling and configuration problems where the combinatorial structure makes pure [[Linear Programming]] inferior.
    - **[[Linear Programming]] (LP)**: [[Optimisation]] of a linear [[Objective]] over a convex feasible region defined by linear constraints (inequalities and equalities). The simplex method (Dantzig, 1947) and interior-point methods (Karmarkar, 1984) solve LP in polynomial time. LP relaxations of [[Integer Programming]] problems provide lower bounds used in branch-and-bound.
    - **[[Integer Programming]] (IP / MIP)**: LP with the additional constraint that some or all variables must take integer values. In general NP-hard; solved by branch-and-bound augmented with cutting planes (Gomory cuts, lift-and-project cuts) in commercial solvers (Gurobi, CPLEX, SCIP, HiGHS).
    - **[[SMT Solver]]**: Satisfiability Modulo Theories solver — extends propositional [[Satisfiability]] with background theories (linear arithmetic, bit-vectors, arrays, uninterpreted functions) to handle constraints from program verification, hardware design, and formal methods. Z3 (Microsoft Research), CVC5, and Yices are the dominant solvers.
    - **Lagrangian relaxation**: a technique for handling difficult constraints by moving them into the objective with a penalty multiplier (Lagrange multiplier), yielding a relaxed problem that lower-bounds the original. Iterative adjustment of multipliers via subgradient methods tightens the relaxation; widely used in combinatorial [[Optimisation]] and [[Reinforcement Learning]] for CMDP constraint handling.
    - **[[Regularisation]]**: in [[Machine Learning Discipline]], the addition of constraint-encoding penalty terms to the [[Loss Function]] that prevent overfitting by penalising model complexity. L1 regularisation (lasso) enforces sparse weight vectors; L2 regularisation (ridge) enforces small weight magnitudes; elastic-net combines both. Dropout and batch normalisation can be interpreted as stochastic regularisation mechanisms that implicitly constrain the effective capacity of the [[Neural Network]].
    - **Constrained MDP (CMDP)**: extension of the [[Markov Decision Process]] where the agent must maximise expected cumulative reward subject to constraints on expected cumulative cost signals, encoding [[Safety]] requirements for [[Reinforcement Learning]] in real-world environments.
    - **Control Barrier Function (CBF)**: a Lyapunov-like function whose superlevel set defines a safe region of state space; a CBF constraint on the control input guarantees forward invariance of the safe set, providing formal [[Safety]] certificates for continuous dynamical systems under RL control.
    - **Constraint modelling language**: a high-level, solver-independent language for expressing CSP and COP problems; MiniZinc, OPL (IBM ILOG), Essence/Conjure (St Andrews), and XCSP3 are the principal languages, each providing different trade-offs between expressivity, solver coverage, and user accessibility.
    - **Constraint acquisition**: the process of learning constraint specifications from positive (solution) and negative (non-solution) examples rather than manual hand-specification; CONACQ (LIRMM), QUACQ, and GuessAndCheck are leading frameworks, increasingly combined with active learning to minimise oracle queries.
    - **Predict-and-optimise (P+O)**: a learning paradigm (Elmachtoub & Grigas 2021) where an ML model is trained by minimising the downstream constrained optimisation cost of its predictions rather than prediction error, aligning ML model training with decision quality in constraint-bounded applications.
    - **Integrity constraint (database)**: a rule enforced by a database management system to maintain data consistency — primary key uniqueness, referential integrity (foreign keys), CHECK constraints, NOT NULL; these are the closest relative of CSP constraints in data management systems, enforced at every transaction.
    - **Physical constraint (cyber-physical)**: a constraint encoding a physical law or material limit — Newton's second law (F = ma), energy conservation (ΔE = Q − W), material yield stress (σ ≤ σ_yield) — woven into digital twin or physics simulation models to ensure prediction physical plausibility.

  - ## Constraint Specification Standards and Interoperability
    - *MiniZinc* (Monash, 2007–2026): the dominant solver-independent CP modelling standard; supported as input by OR-Tools, Choco, Gecode, Chuffed, Gurobi, CPLEX; annual MiniZinc Challenge is the community benchmark; OR-Tools won all medals 2024 and 2025
    - *XCSP3* (Boussemart, Hemery, Lecoutre; 2023 update): XML format for CSP/COP instances; supports satisfaction and optimisation, all constraint arities, global constraints; used in XCSP Competition series for solver interoperability testing
    - *OPL* (IBM ILOG): enterprise-grade constraint modelling with CPLEX/CP Optimizer back-ends; deployed in major airline, rail, and manufacturing scheduling systems worldwide
    - *PDDL* (Planning Domain Definition Language; Ghallab et al. 1998; PDDL+ extensions 2015): the AI planning community's constraint language; action effects and preconditions are state-change constraints; supported by Fast Downward, OPTIC, and emerging CP-hybrid planners (KCL 2024)
    - *SMTLIB2*: the standard input format for SMT solvers (Z3, CVC5, Yices 2); defines theory declarations (QF_LIA, QF_BV, QF_AUFLIA) and script commands (assert, check-sat, get-model); ensures solver interoperability for formal verification toolchains
    - *QUBO/BQM/CQM*: D-Wave's input formats for quantum constraint solving; QUBO is the base quadratic form; BQM (Binary Quadratic Model) adds linear terms; CQM (Constrained Quadratic Model, 2022) accepts constraints directly without penalty engineering
    - *ISO/IEC 25010 quality model*: standardises software quality requirements as constraints on maintainability, reliability, security, and performance metrics; relevant to constraint engineering for software certification
    - *EU AI Act technical standards (CEN/CENELEC JTC 21)*: developing European harmonised standards for AI system requirements including risk classification constraints, transparency obligations, and human oversight mechanisms (publication expected 2026–2027)

  - ## Research & Literature
    - 1. Waltz, D. (1972). *Understanding line drawings of scenes with shadows*. PhD thesis, MIT — first major constraint propagation in AI vision.
    - 2. Montanari, U. (1974). Networks of constraints: fundamental properties and applications to picture processing. *Information Sciences*, 7, 95–132.
    - 3. Mackworth, A. K. (1977). Consistency in networks of relations. *Artificial Intelligence*, 8(1), 99–118. — AC-3 algorithm.
    - 4. Dantzig, G. B. (1963). *Linear Programming and Extensions*. Princeton University Press.
    - 5. Freuder, E. C. (1978). Synthesizing constraint expressions. *CACM*, 21(11), 958–966.
    - 6. Dechter, R. (2003). *Constraint Processing*. Morgan Kaufmann. — definitive graduate textbook.
    - 7. Marriott, K. & Stuckey, P. J. (1998). *Programming with Constraints: An Introduction*. MIT Press.
    - 8. Rossi, F., van Beek, P., & Walsh, T. (eds). (2006). *Handbook of Constraint Programming*. Elsevier Science.
    - 9. Altman, E. (1999). *Constrained Markov Decision Processes*. CRC Press. — CMDP theoretical foundation.
    - 10. Achiam, J., Held, D., Tamar, A., & Abbeel, P. (2017). Constrained Policy Optimization. *ICML 2017*.
    - 11. Netzer, A. & Gal, A. (2022). Self-Supervised Transformers as Iterative Solution Improvers for Constraint Satisfaction. arXiv:2502.15794.
    - 12. Yang, T.-Y., et al. (2024). A Survey of Constraint Formulations in Safe Reinforcement Learning. arXiv:2402.02025.
    - 13. Survey of Safe Reinforcement Learning and Constrained MDPs (2025). arXiv:2505.17342.
    - 14. Lombardi, M. & Milano, M. (2018). Boosting combinatorial problem solving with neural networks. arXiv:1803.10957.
    - 15. Bessiere, C., et al. (2023). Learning constraints from data. *JAIR*, special track.
    - 16. Akgün, Ö., Miguel, I., et al. (2024). Constraint modelling and reformulation with Conjure/Essence. CP2024, ModRef 2024 Workshop.
    - 17. Hoffman, R., Akgün, Ö., & Jefferson, C. (2025). Constraint Programming for permutation patterns. University of St Andrews, CP Group.
    - 18. Zhang, C., et al. (2024). sTRPO: Safe Trust Region Policy Optimisation. NeurIPS 2025, Safety-Gymnasium benchmark evaluation.
    - 19. Stuckey, P. J. et al. (2014). The MiniZinc Challenge 2008–2013. *AI Magazine*, 35(2), 55–60.
    - 20. Google. (2023). OR-Tools CP-SAT solver documentation. https://developers.google.com/optimization/reference/python/sat/python/cp_model.
    - 21. Vayanos, P., Kuhn, D., & Rustem, B. (2012). A constraint satisfaction approach to data-driven distributionally robust optimization. *Operations Research*, 60(2), 275–295.
    - 22. King's College London. (2024–2025). Using Constraint Programming for disjunctive scheduling in temporal AI planning. KCL Pure. https://kclpure.kcl.ac.uk/portal/en/publications/using-constraint-programming-for-disjunctive-scheduling-in-tempor.
    - 23. NeurIPS 2025. Workshop on Constrained Optimisation for Machine Learning. https://constrained-opt-ml.github.io/.
    - 24. NeurIPS 2025. Keynote: Constraint-Aware Generative Models. https://neurips.cc/virtual/2025/loc/san-diego/123339.
    - 25. JAIR. (2024–2025). Special Track: Constraint Programming and Machine Learning. https://jair.org/index.php/jair/SpecialTrack-CPML.
    - 26. Biere, A., Heule, M., van Maaren, H., & Walsh, T. (eds). (2021). *Handbook of Satisfiability* (2nd ed.). IOS Press.
    - 27. European Parliament. (2024). EU AI Act — Regulation (EU) 2024/1689. Official Journal of the European Union, 12 July 2024.
    - 28. Petrie, K. E. & Smith, B. M. (2003). Symmetry breaking in Grace: lessons learned. *CP 2003*, LNCS 2833.
    - 29. Elmachtoub, A. N. & Grigas, P. (2021). Smart Predict, Then Optimize. *Management Science*, 68(1), 9–26.
    - 30. MiniZinc Challenge 2025 Results. https://www.minizinc.org/challenge/2025/results/
    - 31. CP 2025 — 31st International Conference on Principles and Practice of Constraint Programming. Glasgow, August 2025. https://cp2025.a4cp.org/
    - 32. Anonymous. (2025). Overcoming Over-Fitting in Constraint Acquisition via Regularisation. arXiv:2509.24489. https://arxiv.org/pdf/2509.24489
    - 33. Espasa, J., Miguel, I., Nightingale, P., Salamon, A., & Villaret, M. (2024). Plotting: A Case Study in Lifted Planning with Constraints. *Constraints*, Springer.
    - 34. European Commission. (2026). EU AI Act: Full application from 2 August 2026. https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
    - 35. Anonymous. (2025). Reinforcement Learning for Search Tree Size Minimization in CP: New Results on Scheduling Benchmarks. arXiv:2508.20056. https://arxiv.org/pdf/2508.20056
    - 36. Anonymous. (2025). Combining Constraint Programming and Machine Learning: From Current Progress to Future Opportunities. *Journal of Artificial Intelligence Research*. https://jair.org/index.php/jair/article/view/19533
    - 37. Anonymous. (2026). CBF-Constrained MPC Framework for Safe RL (PECTS). arXiv:2604.06463. https://arxiv.org/pdf/2604.06463
    - 38. Global Constraint Catalogue. Beldiceanu, N., Carlsson, M., et al. SICS Technical Report. http://www.emn.fr/z-info/sdemasse/gccat/

  - ## Cross-Cutting Themes (2026)
    - **Constraint-as-trustworthiness mechanism**: in 2026, constraints have emerged as the primary technical mechanism for operationalising AI trustworthiness. Safety constraints (CBF, CMDP), fairness constraints (demographic parity, equalised odds), explainability constraints (monotonicity, feature attribution bounds), and robustness constraints (ε-perturbation invariance) together constitute a formal trust specification framework that bridges technical AI development and regulatory compliance.
    - **Neuro-symbolic unification**: the traditional boundary between symbolic constraint reasoning and neural learning is dissolving; architectures that embed constraint layers in neural networks, train neural networks to predict constraint-relevant quantities (branching decisions, variable orderings), and use LLMs to generate constraint models from natural language are all aspects of a single neuro-symbolic synthesis. The Journal of Artificial Intelligence Research special track on CP and ML (2024–2025) formalised this convergence, and NeurIPS 2025 dedicated multiple workshops to constraint-informed generative AI.
    - **Constraint engineering as a profession**: the demand for practitioners who can translate regulatory, physical, and business requirements into formal constraint specifications — and select appropriate solvers and modelling languages — is growing rapidly. This role combines elements of operations research, formal methods, and AI safety engineering, and is distinct from both data science and software engineering. University curricula at St Andrews, Edinburgh, KCL, and Manchester are expanding constraint programming and formal methods coverage to meet this demand.
    - **Open-source democratisation**: HiGHS (Edinburgh), OR-Tools (Google), CaDiCaL/Kissat (open), Z3 (Microsoft open-source), CVC5, Choco, Gecode, and Clingo together constitute a comprehensive open-source constraint solving ecosystem covering all major problem families. Commercial solvers (Gurobi, CPLEX) remain faster on MIP benchmarks but the open-source gap is narrowing with each release cycle.

- ### Provenance
  - sources:: https://constrained-opt-ml.github.io/, https://jair.org/index.php/jair/SpecialTrack-CPML, https://arxiv.org/abs/2402.02025, https://arxiv.org/html/2505.17342v1, https://arxiv.org/pdf/2502.15794, https://blogs.cs.st-andrews.ac.uk/csblog/2024/09/19/constraint-programming-research-group-at-the-cp2024-conference/, https://kclpure.kcl.ac.uk/portal/en/publications/using-constraint-programming-for-disjunctive-scheduling-in-tempor, https://neurips.cc/virtual/2025/loc/san-diego/123339, https://www.minizinc.org/challenge/2025/results/, https://cp2025.a4cp.org/, https://arxiv.org/pdf/2509.24489, https://arxiv.org/pdf/2508.20056, https://arxiv.org/pdf/2604.06463, https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai, https://jair.org/index.php/jair/article/view/19533
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
