iri:: http://narrativegoldmine.com/artificial-intelligence#STRIPS
uri:: urn:visionclaw:concept:artificial-intelligence:strips
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:artificial-intelligence:strips
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: artificial-intelligence
preferred-term:: STRIPS
content-hash:: sha256-12-16967c01c9e8
legacy-term-id:: AI-1009
status:: draft
maturity:: draft
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - STRIPS is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Strips
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Knowledge Representation]]

- ### Content

  ### Definition
  STRIPS (Stanford Research Institute Problem Solver) is a classical automated planning language and algorithm developed in the 1970s. It represents states as conjunctions of propositions (facts), actions as operators with preconditions and effects, and uses means-ends analysis to construct plans by backward chaining from goals to achievable states.

  ### STRIPS Representation
  **State:**
  - Set of ground atomic formulas
  - Closed-world assumption
  - Example: {On(A,B), On(B,Table), Clear(A)}

  **Operators (Actions):**
  - Name and parameters
  - Preconditions: must be true to execute
  - Add list: facts made true
  - Delete list: facts made false

  ### Classic Example: Blocks World
  ```
  Action: Move(block, from, to)
  Preconditions:
  - On(block, from)
  - Clear(block)
  - Clear(to)
  Add effects:
  - On(block, to)
  - Clear(from)
  Delete effects:
  - On(block, from)
  - Clear(to)
  ```

  ### STRIPS Algorithm
  1. Start with initial state and goal
  2. Find unsatisfied goal condition
  3. Find operator that achieves it
  4. Recursively plan for operator's preconditions
  5. Execute operator
  6. Repeat until all goals satisfied

  ### Limitations
  - Propositional representation only
  - No time or resources
  - Deterministic actions
  - Complete observability
  - Static world during planning

  ### Historical Significance
  - Foundation for modern planning
  - Influenced PDDL standard
  - Basis for many planning competitions
  - Led to hierarchical and temporal extensions

  ### Successors
  - ADL (richer representation)
  - PDDL (standardized language)
  - HTN (hierarchical planning)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
