
A hierarchical task network (HTN) is an automated planning formalism in which planning proceeds by recursively decomposing high-level compound tasks into networks of smaller subtasks until only primitive, directly executable actions remain. Decomposition is guided by domain-specific methods that encode expert knowledge about how tasks may be accomplished, together with ordering constraints between subtasks. HTN planning contrasts with classical state-space planning by searching over task decompositions rather than over world states alone, which often yields stronger guidance and greater efficiency in well-structured domains.

- ### Overview
  - In HTN planning a problem is expressed not as a single goal predicate but as an initial task network: a partially ordered set of tasks to be performed.
  - Tasks are either primitive (executable operators) or compound (requiring further decomposition).
  - Methods specify how a compound task may be reduced to a network of subtasks, subject to preconditions and ordering constraints.
  - The planner applies methods repeatedly until the network contains only primitive actions whose preconditions are mutually satisfiable.
- ### Key aspects
  - Compound versus primitive tasks distinguish abstract intentions from directly executable operators.
  - Methods carry the domain expertise that prunes the search space relative to classical planning.
  - Ordering constraints and variable bindings propagate through decomposition to preserve plan correctness.
  - Total-order and partial-order HTN variants trade expressiveness against computational complexity.
  - HTN expressiveness can exceed that of classical STRIPS planning, capturing problems that are otherwise hard to encode.
- ### Applications
  - Robotic task and motion planning where high-level missions decompose into manipulation and navigation primitives.
  - Game AI and non-player-character behaviour, where designers author methods that read as readable strategies.
  - Workflow and process automation in which business procedures decompose into concrete steps.
  - Military and logistics planning, an early and influential HTN application domain.
- ### Provenance

