- ### OntologyBlock
  - ontology:: true
  - public-access:: true
  - term-id:: AI-1008
  - preferred-term:: Automated Planning
  - source-domain:: ai
  - status:: draft

### Relationships
- is-subclass-of:: [[Planning and Scheduling]]
- is-subclass-of:: [[Artificial Intelligence]]
- uses:: [[STRIPS]]
- uses:: [[Search Algorithms]]
- skos:related:: [[Knowledge Representation]]
- skos:related:: [[Formal Methods]]
- enables:: [[Autonomous Systems]]

### Definition
Automated planning is the computational study of deliberation processes that generate action sequences to achieve specified goals. It involves representing states, actions, and goals formally, then using algorithmic techniques to synthesize plans that transform initial states into goal states while respecting domain constraints and optimizing objectives.

### Representation Components
**States:**
- Propositional/first-order logic
- State variables
- Fluents (changing properties)

**Actions:**
- Preconditions (when applicable)
- Effects (state changes)
- Costs/durations

**Goals:**
- Desired state properties
- Optimization criteria

### Planning Languages
- STRIPS (Stanford Research Institute Problem Solver)
- ADL (Action Description Language)
- PDDL (Planning Domain Definition Language)
- RDDL (Relational Dynamic Influence Diagram Language)

### Planning Techniques
**Graph-based:**
- Planning graphs
- GraphPlan algorithm

**State-space Search:**
- Forward search (progression)
- Backward search (regression)
- Heuristic search (Fast Forward, A*)

**Plan-space Search:**
- Partial-order planning
- Hierarchical task networks (HTN)

**SAT-based Planning:**
- Encode as satisfiability problem
- Use SAT solvers

### Applications
- Autonomous robot missions
- Space mission planning (NASA Deep Space 1)
- Manufacturing process planning
- Video game AI
- Logistics and transportation
- Automated software configuration
