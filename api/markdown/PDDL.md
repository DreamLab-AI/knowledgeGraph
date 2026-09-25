The Planning Domain Definition Language (PDDL) is a standardised formal language for encoding automated-planning problems as domains and problem instances. A domain specifies predicates and actions with preconditions and effects, while a problem instance defines objects, an initial state, and a goal. PDDL provides a common input format that lets generic planners compute action sequences, and it underpins much of classical AI task planning.

### Content

- A PDDL model separates the reusable domain (types, predicates, parameterised actions) from the specific problem (objects, initial state, goal condition), enabling planners to search for valid action sequences. Successive versions added durative actions, numeric fluents, and temporal constraints, broadening PDDL from classical STRIPS-style planning to temporal and metric domains used in robotics and agentic systems.

