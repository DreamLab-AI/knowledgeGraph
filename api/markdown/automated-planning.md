- ### Definition
  - Automated Planning is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AutomatedPlanning
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Planning and Scheduling]]
  - enables:: [[Autonomous Systems]]
  - bridges-to:: [[Autonomous Robot]] (domain: rb)

- ### Content

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

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z