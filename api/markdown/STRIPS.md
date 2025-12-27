- ### OntologyBlock
  - ontology:: true
  - public-access:: true
  - term-id:: AI-1009
  - preferred-term:: STRIPS
  - source-domain:: ai
  - status:: draft
  - owl:class:: ai:Strips

### Relationships
- is-subclass-of:: [[Knowledge Representation]]
- is-subclass-of:: [[Planning Languages]]
- used-in:: [[Automated Planning]]
- skos:related:: [[Automated Planning]]
- skos:related:: [[Logic Programming]]
- precursor-to:: [[PDDL]]

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
