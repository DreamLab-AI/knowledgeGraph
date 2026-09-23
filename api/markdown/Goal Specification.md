
Goal specification is the formal description of what an autonomous agent or planner is meant to achieve, expressed as target states, conditions, objectives, or reward functions. It translates high-level intent into a representation that planning and reasoning systems can evaluate and pursue. Clear goal specification is essential for task planning and avoiding misaligned or unsafe agent behaviour.

- ### Content
  - Goals may be stated as logical conditions over states, as numeric objectives or reward functions, or as natural-language instructions that an LLM grounds into actionable subgoals. Ambiguous or underspecified goals lead to reward hacking, specification gaming, and unintended behaviour, making precise specification a safety concern. Hierarchical decomposition turns a top-level goal into ordered subgoals that planners can satisfy incrementally.

