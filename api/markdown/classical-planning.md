- ### Definition
  - [[Classical Planning]] is a foundational subfield of [[Automated Planning]] and [[Artificial Intelligence]] that formalises deliberation as the computational problem of finding a sequence of deterministic, discrete actions that transforms a fully observable initial world state into a state satisfying a given goal condition. Unlike [[Reinforcement Learning]], which learns behaviour through environmental interaction, or the [[Markov Decision Process]] framework, which handles stochastic uncertainty explicitly, classical planning operates under the closed-world assumption with deterministic action effects, full observability, a single acting agent, and instantaneous action execution. Problems are encoded in symbolic languages — principally [[STRIPS]] (Stanford Research Institute Problem Solver), introduced by Fikes and Nilsson in 1971, and the Planning Domain Definition Language ([[PDDL]]) standardised for the International Planning Competition (IPC) from 1998 onward — that separate a reusable action domain from a specific problem instance comprising objects, initial state, and goal. A planner receives domain and problem as input and outputs a totally or partially ordered sequence of grounded actions called a plan. Practical planners overwhelmingly employ [[Heuristic Search]] over the forward state-space, guided by domain-independent heuristics derived automatically by relaxing the original planning problem: the delete-relaxation heuristics h^max, h^add, and h^FF (the Fast-Forward heuristic of Hoffmann and Nebel) are obtained by ignoring delete effects; landmark heuristics count the number of facts that must be achieved on every solution path; and the causal graph heuristic exploits the dependency structure among state variables. The landmark-cut (h^LM-cut) and potential heuristics provide tighter admissible bounds enabling provably optimal plans. Planners such as Fast Downward — the dominant framework in IPC competitions — translate PDDL tasks into multi-valued variable representations (SAS+) and run A* or greedy best-first search with these heuristics. Alternative search modalities include backward (regression) search from the goal, plan-space search using partial-order planning that delays commitment to action ordering, and compilation to [[SAT Solving]] or [[Constraint Satisfaction]] for batch plan verification or optimal search. Since approximately 2023, a new research frontier has emerged in which [[Large Language Models]] are used to generate PDDL domain models from natural language descriptions, to produce domain-dependent heuristic functions as Python code, and to interleave step-wise LLM reasoning with PDDL simulation engines via agentic tool calls — approaches that challenge state-of-the-art classical planners on several benchmarks while raising questions about reliability and computational cost.

- ### Semantic Classification
  - owl-class:: ai:ClassicalPlanning
  - owl-role:: ExecutableProtocol | SearchAlgorithm | FormalismDomain
  - owl-inferred:: ai:AutomatedPlanning, ai:SymbolicAI, ai:KnowledgeRepresentation, ai:SearchAlgorithm
  - belongs-to-domain:: [[AI-GroundedDomain]]
  - implemented-in-layer:: [[AlgorithmLayer]]

- ### Relationships
  - is-subclass-of:: [[Automated Planning]], [[Planning and Scheduling]]
  - has-part:: [[STRIPS]], [[PDDL]], [[Heuristic Search]], [[State Space Search]], [[Hierarchical Task Network]]
  - requires:: [[Constraint Satisfaction]], [[Search Algorithm]], [[Formal Logic]], [[Knowledge Representation]]
  - enables:: [[Agent]], [[Robotics]], [[Autonomous System]], [[Task Automation]], [[Multi-Agent Coordination]]
  - implements:: [[STRIPS]], [[PDDL]], [[A Star Algorithm]]
  - depends-on:: [[Search Algorithm]], [[Knowledge Representation]], [[Formal Logic]]
  - supports:: [[Game Playing]], [[Motion Planning]], [[Logistics Optimisation]], [[Pathfinding]]
  - uses:: [[Knowledge Representation]], [[Graph Search]], [[Formal Logic]], [[SAT Solving]]
  - contrasts-with:: [[Reinforcement Learning]], [[Markov Decision Process]], [[Reactive Planning]]
  - related-to:: [[Optimisation]], [[Pathfinding]], [[Temporal Planning]], [[Large Language Models]], [[A Star Algorithm]]
  - standardized-by:: [[PDDL]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:hasPart ai:STRIPS))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:hasPart ai:PDDL))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:hasPart ai:HeuristicSearch))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:hasPart ai:StateSpaceSearch))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:hasPart ai:HierarchicalTaskNetwork))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:hasPart ai:PartialOrderPlanning))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:hasPart ai:GraphPlan))
  ## Dependency Relationships
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:requires ai:ConstraintSatisfaction))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:requires ai:SearchAlgorithm))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:requires ai:FormalLogic))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:requires ai:KnowledgeRepresentation))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:dependsOn ai:HeuristicFunction))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:dependsOn ai:DeleteRelaxation))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:dependsOn ai:GroundedPredicate))
  ## Capability Relationships
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:enables ai:AutonomousSystem))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:enables ai:Robotics))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:enables ai:TaskAutomation))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:enables ai:MultiAgentCoordination))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:enables ai:LogisticsOptimisation))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:supports ai:MotionPlanning))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:supports ai:GamePlaying))
  ## Implementation Relationships
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:implements ai:STRIPS))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:implements ai:PDDL))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:implements ai:AStarAlgorithm))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:uses ai:GraphSearch))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:uses ai:SATSolving))
  ## Reduction Relationships
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:reducesTo ai:StateSpaceSearch))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:reducesTo ai:ConstraintSatisfaction))
      SubClassOf(ai:ClassicalPlanning
        ObjectSomeValuesFrom(ai:reducesTo ai:BooleanSatisfiability))

  ## About
    Classical planning occupies a central position in symbolic [[Artificial Intelligence]], formalising the deliberation problem — "what sequence of actions achieves my goal?" — as a combinatorial search over discrete world states. Its intellectual roots trace to the General Problem Solver of Newell and Simon (1957) and the means-ends analysis framework, but the field crystallised with Fikes and Nilsson's [[STRIPS]] system (1971), which introduced the propositional state representation and the precondition/add-list/delete-list operator model that remains the conceptual core of modern planning formalisms. The closed-world assumption inherent in STRIPS — anything not stated is false — dramatically simplifies the state description but also constrains the expressiveness of the model. The 1980s saw extensions including ADL (Action Description Language, Pednault 1989), which added conditional effects and universal quantification, and the emergence of partial-order planning (TWEAK, Chapman 1987; SNLP, McAllester and Rosenblitt 1991) that reasoned directly in plan space rather than state space.

    The establishment of the Planning Domain Definition Language ([[PDDL]]) as the input standard for the International Planning Competition (IPC, 1998) catalysed rapid progress. Successive IPC editions drove advances in forward heuristic search: the FF planner (Hoffmann and Nebel, 2001) introduced the h^FF delete-relaxation heuristic with enforced hill-climbing, achieving dramatic speedups over plan-space methods. LAMA (Richter and Westphal, 2010) combined landmark and FF heuristics with iterative length-limiting to win the IPC satisficing track. Fast Downward (Helmert, 2006) introduced the multi-valued SAS+ translation, causal graph heuristic, and the lazy greedy best-first search framework that currently underlies the majority of competitive planners. Optimal planning received a major advance with the h^LM-cut heuristic (Helmert and Domshlak, 2009) providing admissible, informative bounds. The 2010s brought landmark-based heuristics, potential heuristics, and merge-and-shrink abstractions that continue to set benchmarks in optimal planning.

    A transformative development since 2023 is the integration of [[Large Language Models]] with classical planning infrastructure. LLMs have been used as PDDL domain model writers, converting informal task descriptions into formal action specifications; as heuristic generators, producing Python heuristic functions that outperform established implementations in Fast Downward on several IPC domains (Correa et al., 2025); and as step-by-step search policies that use a PyPDDLEngine exposed via Model Context Protocol tool calls to simulate action execution interactively. Research from 2025 demonstrates that frontier LLMs such as GPT-5 achieve performance competitive with LAMA on standard PDDL benchmarks, though at orders-of-magnitude higher computational cost. Hybrid systems that pair LLM commonsense reasoning with formal PDDL validation are deployed in emerging agentic AI products.

  ## Components / Architecture

    The canonical architecture of a classical planner decomposes into four layers:

    **Problem Representation Layer**
    - PDDL domain file: typed objects, predicates (relational properties of states), and parameterised action schemata with preconditions (conjunction of literals that must hold before execution) and effects (conjunction of add and delete literals)
    - PDDL problem file: constant declarations, initial state (set of ground atoms), and goal condition (logical formula over ground atoms)
    - Grounding: instantiation of action schemata by substituting typed objects, producing the ground operator set; preprocessing with invariant analysis removes unreachable actions and mutually exclusive atom groups
    - SAS+ translation (Fast Downward specific): converts propositional problem to multi-valued state variable representation for more compact state encoding

    **Heuristic Computation Layer**
    - Delete-relaxation heuristics: h^max (maximum cost over goals in relaxed problem), h^add (additive sum, inadmissible but fast), h^FF (relaxed plan length via Dijkstra in the planning graph — used by FF and LAMA planners)
    - Landmark heuristics: extract facts/actions that every plan must achieve, count remaining landmarks as lower bound
    - Admissible heuristics: h^LM-cut, merge-and-shrink abstractions, pattern databases (PDB), potential heuristics — used in optimal planners
    - LLM-generated heuristics: Python functions scoring states, selected by IPC training-task evaluation (Correa et al., 2025)

    **Search Layer**
    - Greedy best-first search (GBFS): expands node with lowest h-value; satisficing, not optimal; used by FF, LAMA, Fast-Forward
    - A* search: optimal when using admissible heuristic; memory-intensive for large state spaces; used by Fast Downward in optimal mode
    - Weighted A* (WA*): inflates heuristic by factor w ≥ 1, trading optimality for speed
    - Enforced hill-climbing (EHC): local hill-climbing with GBFS fallback; used by FF planner
    - Bidirectional search: expanding from initial state and goal simultaneously; reduces search frontier
    - Partial-order planning (POP): search in plan space; inserts causal links and resolves threats
    - SAT-based planning: encode plan existence as propositional formula for t time steps; use SAT solver; classical via planning-as-satisfiability (Kautz and Selman, 1992)

    **Plan Output and Validation Layer**
    - Total-order plan: linearly ordered sequence of grounded actions
    - Partial-order plan: action set with ordering and causal-link constraints
    - Plan validation: VAL tool (Howey et al.) checks precondition/effect correctness against PDDL model
    - Optimality guarantees: cost-optimal plans achieve minimum action cost; length-optimal plans minimise step count

  ## Use Cases / Major Families

    **Robotics Task Sequencing**
    Classical planning provides the deliberative symbolic layer in robot architectures operating on the belief-desire-intention (BDI) model. A mobile robot in a warehouse maps high-level task goals ("deliver parcel A to bay 7") to sequences of navigation, pick, and place actions encoded as PDDL operators. The ROSPlan framework (Cashmore et al.) integrates Fast Downward with ROS, enabling online re-planning when action execution fails. King's College London's Centre for Robotics Research applies PDDL-based planners to autonomous service robot missions in domestic environments.

    **Space Mission Automation**
    NASA's Remote Agent Experiment (1999) demonstrated in-orbit autonomous planning and scheduling, using classical planning to generate sequences of spacecraft commands. The MAPGEN planner was used for Mars Exploration Rover science activity scheduling. ESA continues using PDDL-based planners for satellite operations planning in the ExoMars programme.

    **Logistics and Supply Chain**
    Classical planners model logistics domains as PDDL problems with truck/aircraft transport actions, generating optimal shipment routings subject to capacity constraints. IPC logistics domains remain standard benchmarks. Commercial deployment occurs in manufacturing line scheduling, where action schemata capture machine setup and part transfer constraints.

    **Video Game AI**
    Game task planning uses lightweight PDDL-style planners (GOAP — Goal-Oriented Action Planning) for NPC decision-making in titles including F.E.A.R., Halo, and Tomb Raider. These planners run at interactive rates, selecting action sequences that satisfy character goals within the game world state.

    **AI Agents and LLM Integration**
    LLM+P (Liu et al., 2023) demonstrated translating natural language task descriptions to PDDL, solving with a classical planner, and translating the plan back to natural language. PyPDDLEngine (2026) exposes PDDL simulation via MCP tool calls, allowing LLMs to step through planning interactively. This hybrid architecture enables reliable agentic task execution where pure LLM planning fails under combinatorial constraints.

    **Workflow and Process Automation**
    Declarative business process management models workflows as partially ordered action sets with resource constraints, compiling to PDDL for plan generation and optimisation. Applications include clinical pathway planning in NHS hospital informatics and software deployment pipeline sequencing.

  ## Academic Context

    Classical planning theory is built on foundations from computational complexity theory, formal logic, and algorithms. The complexity of plan existence under STRIPS was shown PSPACE-complete by Bylander (1994) for propositional planning; restricted fragments are NP-complete or polynomial-time. Optimal planning is PSPACE-complete in general and EXP-complete for certain formulations with numeric state variables.

    Key research groups and milestones:

    - **Stanford Research Institute (SRI)**: Fikes and Nilsson (1971), original STRIPS system and regression planning via means-ends analysis
    - **Carnegie Mellon University**: Blum and Furst (1997), GraphPlan algorithm using planning graphs for polynomial heuristic computation, predecessor to FF
    - **University of Freiburg (Germany)**: Hoffmann and Nebel (2001), FF planner and h^FF heuristic — one of the most cited planning papers
    - **Saarland University / MMCI**: Helmert (2006), Fast Downward and SAS+ translation; Helmert and Domshlak (2009), LM-cut heuristic
    - **University of Basel**: Continuation of Fast Downward research; Keyder and Geffner (2008), h^m heuristics and additive admissible heuristics
    - **University of Toronto / Sheila McIlraith's group**: LLM+P and integration of foundation models with PDDL solvers
    - **University of Melbourne**: Geffner and Bonet — foundational texts on heuristic search planning; Bonet and Geffner (2001), h^add and h^max
    - **University of Edinburgh**: Coles, Coles, and colleagues — temporal and metric planning, POPF and COLIN planners
    - **King's College London**: Centre for Robotics Research — ROSPlan integration, robot mission planning

  ## Current Landscape (2026)

    Classical planning in 2026 operates in a dual role: as a mature engineering discipline deployed in robotics, space, and logistics, and as a benchmark challenge for emerging LLM-based agentic planners. Fast Downward with LAMA configuration remains the standard satisficing planner for industrial deployment. The ICAPS community has formalised the LLM integration challenge in the LM4Plan workshop, which began at ICAPS 2024 and continued at ICAPS 2025.

    Research from 2025 (Correa et al., arxiv:2503.18809) demonstrated that LLM-generated Python heuristic functions, selected by performance on IPC training tasks, outperform the best configurations in Fast Downward on several benchmarks — the first result to challenge the classical planner state of the art from a learning-based approach to heuristic design. A parallel paper (arxiv:2507.23589, 2025) benchmarks whether LLM reasoning models can replace classical planners, finding that GPT-5 achieves LAMA-competitive coverage on standard domains but fails on larger instances where combinatorial depth exceeds LLM context limits.

    The agentic planning paradigm (PyPDDLEngine, 2026; DUPLEX, 2026) wraps classical planners as tool-callable backends for LLM agents, combining LLM natural language understanding and commonsense knowledge with formal PDDL soundness guarantees. This hybrid architecture is entering production in enterprise workflow automation and autonomous scientific experiment management pipelines.

    In robotics, the National Robotarium (Edinburgh) applies PDDL-based planning alongside neural perception for assistive robot systems under EPSRC funding. The Dyson Robotics Lab at Imperial College integrates classical planners with learned world models for domestic robot task sequencing.

  ## UK Context

    The UK has a strong tradition in classical planning research and deployment:

    **Academic Groups**
    - **University of Edinburgh**: Long history in planning, including work on partial-order and temporal planning; the Bayes Centre hosts ELIAI (Edinburgh Laboratory for Integrated Artificial Intelligence) with connections to the National Robotarium at Heriot-Watt — a joint facility applying task planning to assistive and industrial robots
    - **King's College London**: Centre for Robotics Research uses PDDL-based planners for lifelong autonomous service robot missions, collaborating with Imperial, Bath, Newcastle, and Birmingham
    - **Imperial College London**: Dyson Robotics Lab integrates classical symbolic planning with neural scene understanding for domestic manipulation tasks; Data Science Institute explores LLM-PDDL hybrid planning
    - **University of Edinburgh / Heriot-Watt National Robotarium**: Planning for assistive robotics in healthcare settings, supported by EPSRC and Innovate UK
    - **University of Leeds and University of Sheffield**: Applied planning for autonomous manufacturing and industrial robotics in the Northern Powerhouse context; Sheffield Robotics group uses symbolic planning for human-robot collaboration in steel and advanced manufacturing
    - **University of Manchester**: Planning for autonomous systems in logistics; collaboration with The Alan Turing Institute on foundational aspects of AI planning and verification

    **Industry and Deployment**
    - BAE Systems and Rolls-Royce use scheduling and planning systems for manufacturing process optimisation in Northern England sites (Warton, Derby)
    - UK Space Agency-funded projects apply PDDL-based planners to satellite operations automation, leveraging Edinburgh and Surrey Space Centre expertise
    - NHS Digital has explored planning-based clinical pathway automation for patient journey optimisation in hospital information systems

  ## Future Directions (2026-2030)

    **LLM-Classical Planner Hybrids**: The convergence of LLM foundation models with classical PDDL infrastructure will deepen, with automatic PDDL domain generation, learned heuristics, and LLM-as-search-policy becoming standard components of planning systems. Reliability guarantees and computational cost reduction are the key research challenges.

    **Neural-Symbolic Integration**: Learning action models from demonstration data (inverse planning) will close the gap between learned world models and classical planning, enabling deployment in domains where expert PDDL encoding is infeasible.

    **Temporal and Numeric Planning at Scale**: Advances in temporal PDDL (PDDL 2.1+ numeric fluents, durative actions) will drive deployment in complex scheduling domains including hospital resource allocation and energy grid management.

    **Verified Agentic Planning**: Formal verification of LLM-generated plans using PDDL validators will become a regulatory requirement for autonomous systems in safety-critical applications (medical robotics, autonomous vehicles), driving demand for PDDL-grounded architectures.

    **Multi-Agent Classical Planning**: Decentralised planning for heterogeneous robot teams using factored PDDL representations and distributed search algorithms will scale to supply-chain coordination and disaster-response multi-robot deployment.

    **Planning for Explainable AI**: Classical planning's inherent interpretability — plans are sequences of human-readable actions with stated preconditions and effects — positions it as the explanation layer in hybrid AI systems, addressing EU AI Act requirements for human-understandable decision rationale in high-risk autonomous systems.

  ## Research and Literature

    1. Fikes, R. E., & Nilsson, N. J. (1971). STRIPS: A New Approach to the Application of Theorem Proving to Problem Solving. *Artificial Intelligence*, 2(3–4), 189–208.
    2. Pednault, E. P. D. (1989). ADL: Exploring the Middle Ground Between STRIPS and the Situation Calculus. *KR*, 1989, 324–332.
    3. Blum, A., & Furst, M. L. (1997). Fast Planning Through Planning Graph Analysis. *Artificial Intelligence*, 90(1–2), 281–300.
    4. Kautz, H., & Selman, B. (1992). Planning as Satisfiability. *ECAI*, 1992, 359–363.
    5. Hoffmann, J., & Nebel, B. (2001). The FF Planning System: Fast Plan Generation Through Heuristic Search. *JAIR*, 14, 253–302.
    6. Bylander, T. (1994). The Computational Complexity of Propositional STRIPS Planning. *Artificial Intelligence*, 69(1–2), 165–204.
    7. McDermott, D., et al. (1998). PDDL — The Planning Domain Definition Language. Technical Report, Yale University / AIPS-98 Planning Competition.
    8. Helmert, M. (2006). The Fast Downward Planning System. *JAIR*, 26, 191–246.
    9. Richter, S., & Westphal, M. (2010). The LAMA Planner: Guiding Cost-Based Anytime Planning with Landmarks. *JAIR*, 39, 127–177.
    10. Helmert, M., & Domshlak, C. (2009). Landmarks, Critical Paths and Abstractions: What's the Difference Anyway? *ICAPS*, 2009, 162–169.
    11. Bonet, B., & Geffner, H. (2001). Planning as Heuristic Search. *Artificial Intelligence*, 129(1–2), 5–33.
    12. Geffner, H., & Bonet, B. (2013). *A Concise Introduction to Models and Methods for Automated Planning*. Morgan & Claypool.
    13. Cashmore, M., Fox, M., Long, D., Magazzeni, D., Ridder, B., Carrera, A., Palomeras, N., Hurtos, N., & Carreras, M. (2015). ROSPlan: Planning in the Robot Operating System. *ICAPS*, 2015.
    14. Fox, M., & Long, D. (2003). PDDL2.1: An Extension to PDDL for Expressing Temporal Planning Domains. *JAIR*, 20, 61–124.
    15. Coles, A., Coles, A., Fox, M., & Long, D. (2012). COLIN: Planning with Continuous Linear Numeric Change. *JAIR*, 44, 1–96.
    16. Liu, B., et al. (2023). LLM+P: Empowering Large Language Models with Optimal Planning Proficiency. *arXiv:2304.11477*.
    17. Correa, C., et al. (2025). Classical Planning with LLM-Generated Heuristics: Challenging the State of the Art with Python Code. *arXiv:2503.18809*.
    18. Aghzal, M., et al. (2025). The 2025 Planning Performance of Frontier Large Language Models. *arXiv:2511.09378*.
    19. Anonymous. (2025). Can LLM-Reasoning Models Replace Classical Planning? A Benchmark Study. *arXiv:2507.23589*.
    20. Romero, M., et al. (2026). Agentic LLM Planning via Step-Wise PDDL Simulation: An Empirical Characterisation. *arXiv:2603.06064*.
    21. Taitler, A., et al. (2024). The 2023 International Planning Competition. *AI Magazine*, Wiley. doi:10.1002/aaai.12169.
    22. Chapman, D. (1987). Planning for Conjunctive Goals. *Artificial Intelligence*, 32(3), 333–377.
    23. McAllester, D., & Rosenblitt, D. (1991). Systematic Nonlinear Planning. *AAAI*, 1991, 634–639.
    24. Keyder, E., & Geffner, H. (2008). Soft Goals Can Be Compiled Away. *JAIR*, 36, 547–556.
    25. Newell, A., & Simon, H. A. (1957). Heuristic Problem Solving: The Next Advance in Operations Research. *Operations Research*, 6(1), 1–10.
    26. Howey, R., Long, D., & Fox, M. (2004). VAL: Automatic Plan Validation, Continuing Threat and Explanations for Failures of Temporal Plans. *ICTAI*, 2004.
    27. Rintanen, J. (2012). Planning as Satisfiability: Heuristics. *Artificial Intelligence*, 193, 45–86.

  ## Benchmark Domains and Competitions

    The International Planning Competition (IPC) has served as the primary driver of progress in classical planning since 1998. Held biennially (odd years since 2011), the IPC provides standardised PDDL benchmark domains and problem instances across satisficing, agile, and optimal planning tracks, enabling reproducible comparison across systems.

    **Canonical Benchmark Domains**

    - **Blocks World**: the original STRIPS test domain — stacks of coloured blocks on a table, with pick-up and put-down actions; deceptively difficult for greedy planners due to goal-destroying interactions; instances with 15+ blocks expose exponential branching factors
    - **Logistics**: packages transported between locations in different cities using trucks (intra-city) and airplanes (inter-city); highly parallelisable; first appeared in IPC 1998; hundreds of IPC instances ranging from 5 to 100+ packages
    - **Gripper**: a robot with two grippers carries balls between rooms; frequently cited as pathological for h^FF due to misleading heuristic values; appeared in IPC 1998
    - **Depot**: warehouse forklift operations combining Blocks World stacking with Logistics transport; IPC 2002 domain
    - **Transport**: vehicle routing with capacity constraints; IPC 2008 and 2014; tests numeric fluents in PDDL 2.1
    - **Elevators**: multi-passenger elevator control; tests temporal ordering; IPC 2008
    - **Barman**: bartender mixing cocktails; large branching factor; tests landmark guidance
    - **Floortile**: mobile painting robot on a grid; IPC 2011; tests goal-ordering heuristics
    - **Satellite**: resource-constrained spacecraft instrument scheduling; tests temporal and numeric PDDL; historically connected to NASA mission planning
    - **Sokoban**: single-agent puzzle pushing boxes to goals; highly constrained; requires long-range reasoning; used to stress-test LLM planners in 2025 evaluations

    **Competition Track Results (Selected)**

    - IPC 2018 satisficing track: LAMA-2011 configuration of Fast Downward remains a top-performing baseline
    - IPC 2023 learning track: systems using SMAC-optimised Fast Downward configurations (GOFAI) and learned cost functions (planning-as-CSP with learned weights) achieved top coverage
    - IPC 2023/2025 classical tracks: Complementary Anytime Heuristic Search Planner (CAHU), Mercury, and Fast Downward variants dominated; LLM systems competitive only on small instances as of 2025 evaluations

    **LLM Planning Benchmarks (2025–2026)**

    - **PlanBench** (Valmeekam et al.): systematic evaluation of LLM planning ability on blocks world, logistics, mystery; showed GPT-4 achieves < 10% coverage on hard instances without external tools
    - **PDDL-INSTRUCT**: fine-tuning dataset for LLM PDDL domain generation; evaluated on IPC domains
    - **PyPDDLEngine evaluation** (2026): step-wise PDDL simulation with LLM search policy; improves on pure LLM coverage by 3× on IPC instances via formal state tracking

  ## Formal Algorithm: Forward State-Space Search with Delete-Relaxation Heuristic

    The core algorithmic pattern of a modern classical planner — greedy best-first search guided by the FF heuristic — can be stated precisely:

    **Input**: PDDL domain D, problem P = ⟨O, I, G⟩ where O is the object set, I the initial state (set of ground atoms), G the goal (logical formula)

    **Preprocessing**:
    1. Ground all action schemata in D against O to produce ground operator set Ops
    2. Apply reachability analysis (relaxed planning graph forward pass) to discard unreachable operators and atoms
    3. Build SAS+ representation: identify invariant atom groups, construct multi-valued state variables V with domain Dom(v)

    **Delete-Relaxation (h^FF computation)**:
    1. Construct relaxed planning problem P^+ by removing all delete effects from operators
    2. Build layered planning graph G^+ = ⟨A_0, F_0, A_1, F_1, ...⟩ alternating action and fact layers until G ⊆ F_k or fixpoint without goal
    3. Extract relaxed plan by backward chaining from goal facts: greedily select cheapest action achieving each unsatisfied goal; recurse on that action's preconditions
    4. h^FF(s) = |relaxed plan| for state s

    **Search Algorithm (Greedy Best-First Search)**:
    ```
    open ← PriorityQueue([(h^FF(I), I, [])])  // (h-value, state, plan-prefix)
    closed ← {}
    while open is not empty:
        (h, s, π) ← open.pop_min()
        if s satisfies G: return π
        if s ∈ closed: continue
        closed.add(s)
        for op ∈ applicable_ops(s, Ops):
            s' ← apply(op, s)
            if s' ∉ closed:
                open.push((h^FF(s'), s', π + [op]))
    return FAILURE
    ```

    **Optimality Note**: Greedy best-first search with h^FF is satisficing — it finds a plan but not necessarily the shortest. For cost-optimal planning, replace GBFS with A* and use an admissible heuristic (h^LM-cut or merge-and-shrink); A* with consistent h guarantees optimal plan cost.

    **Complexity**:
    - Plan existence under STRIPS: PSPACE-complete (Bylander 1994)
    - Plan existence with acyclic causal graphs: polynomial time
    - Optimal planning: PSPACE-complete (polynomial space sufficiency of BFS over polynomial state encodings)
    - Computing h^FF: polynomial in |Ops| × |atoms| (Dijkstra in the relaxed planning graph)

  ## Key Terminology

    **State**: a complete assignment of truth values to all ground atoms in the domain under the closed-world assumption; equivalently, a set of true ground atoms (the rest are false by default.

    **Action schema**: a parameterised operator template (e.g., Move(?b, ?from, ?to)) instantiated by substituting typed objects to produce a ground operator.

    **Ground operator**: a fully instantiated action with specific objects; has a defined precondition set, add-list, and delete-list.

    **Precondition**: the set of ground atoms that must be true in the current state for the operator to be applicable; an operator is applicable in state s iff precondition ⊆ s.

    **Add effect / delete effect**: after executing operator op in state s, the successor state s' = (s \ del(op)) ∪ add(op); add and delete lists may not overlap in STRIPS.

    **Closed-world assumption (CWA)**: any ground atom not explicitly stated true in the current state description is assumed false; this simplifies state representation but prevents reasoning under uncertainty.

    **Delete relaxation**: the relaxed problem P^+ obtained by ignoring delete effects — every operator's delete list is set to empty; the relaxed problem is polynomial to solve and yields admissible (h^max) or inadmissible (h^add, h^FF) heuristics for the original problem.

    **Landmark**: a ground atom or action that must appear in every valid plan for a given problem; landmark counts provide admissible lower bounds on plan length and remaining plan cost.

    **Heuristic admissibility**: a heuristic h is admissible if h(s) ≤ h*(s) for all states s, where h*(s) is the true minimum cost plan from s to the goal; admissibility ensures A* finds an optimal solution.

    **Heuristic consistency (monotonicity)**: h satisfies the triangle inequality h(s) ≤ c(s, op, s') + h(s') for all operators op taking state s to s'; consistency implies admissibility and prevents re-expansion of states in A*.

    **Satisficing planning**: finding any valid plan, not necessarily the shortest or cheapest; satisficing planners (FF, LAMA) prioritise speed over optimality.

    **Cost-optimal planning**: finding a plan with minimum total action cost; requires admissible heuristics; tractable for small instances, PSPACE-hard in general.

    **Plan validity**: a plan π = [op_1, ..., op_n] is valid if op_1 is applicable in I, op_{i+1} is applicable in the state resulting from executing op_1...op_i, and the state after executing all ops satisfies G.

    **Partial-order plan**: a plan represented as a set of actions with a partial ordering constraint (op_i ≺ op_j) and causal links (op_i -p→ op_j meaning op_i achieves precondition p for op_j); total-order plans are a special case with a complete ordering.

    **PDDL requirements**: (:requirements :strips :typing :negative-preconditions :disjunctive-preconditions :equality :existential-preconditions :universal-preconditions :conditional-effects :action-costs) — each requirement flag activates a language extension beyond basic STRIPS.

    **SAS+**: the multi-valued state variable representation used by Fast Downward; each state variable v has a finite domain Dom(v); the representation is often more compact than propositional STRIPS and supports invariant analysis.

    **Regression planning**: planning backward from the goal rather than forward from the initial state; a precondition-weakened subgoal is obtained for each action applied in reverse, reducing the goal condition progressively until the initial state subsumes it.

    **Hierarchical Task Network (HTN)**: an extension of classical planning where tasks can be decomposed into sub-tasks via method operators, providing problem decomposition structure that complements state-space search; [[Hierarchical Task Network]] planning is undecidable in general but practical for robot task sequencing with fixed domain hierarchies.

    **Conditional effect**: an action effect that only applies when an additional condition holds in the state at execution time; supported by ADL (pednault 1989) and PDDL, enabling more compact operator representations than the STRIPS factored operator model requires.

    **Numeric fluent**: a state variable taking real-valued (rather than Boolean) values; supported by PDDL 2.1 numeric extensions; enables modelling fuel levels, battery charge, or time resources as continuous quantities subject to action-induced arithmetic updates.

    **Plan validation**: the process of verifying that a candidate plan π actually achieves the goal from the initial state by simulating execution and checking preconditions and effects at each step; the VAL tool (Howey, Long, Fox 2004) is the standard PDDL plan validator.

    **Domain-independent heuristic**: a heuristic function automatically constructed from the PDDL problem structure without requiring domain-specific human engineering; distinguishes modern classical planners from the hand-coded heuristics of early AI systems; key examples are h^FF, h^max, h^add, h^LM-cut, merge-and-shrink abstractions, and pattern database (PDB) heuristics.

    **International Planning Competition (IPC)**: the biennial benchmark competition for classical planning systems, providing standardised PDDL domains and problems; held since 1998 (AIPS 1998); tracks include satisficing, agile (speed-weighted), and cost-optimal; results drive the field's algorithmic progress; the IPC learning track (since 2023) evaluates systems that learn from provided training plans.

- ### Provenance
  - sources:: https://arxiv.org/abs/2503.18809, https://arxiv.org/abs/2507.23589, https://arxiv.org/abs/2603.06064, https://arxiv.org/abs/2304.11477, https://arxiv.org/abs/2511.09378, https://icaps-conference.org/competitions/, https://www.kcl.ac.uk/events/autonomous-service-robot-for-the-home, https://ipc2023-learning.github.io/
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm