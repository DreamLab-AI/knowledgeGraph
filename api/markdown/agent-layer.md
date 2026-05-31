- ### Definition
  - The Agent Layer is the stratum that hosts autonomous entities capable of perceiving, deciding, and acting toward goals. It sits above control and inference strata that supply its capabilities and below coordination and application strata that direct collectives of agents. It contains agent policies, goal representations, memory, and decision loops.

- ### Semantic Classification
  - owl-class:: agent:AgentLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Autonomous Agent]], [[Reinforcement Learning]]
  - requires:: [[Inference Layer]], [[Control Layer]]
  - enables:: [[Coordination Layer]], [[Application Layer]]

- ### Content
  - The Agent Layer encapsulates entities that pursue objectives with some degree of autonomy. Typical members include decision policies, goal and task representations, working and long-term memory, planning routines, and the perception-action loops that connect them. Each agent maps observations to actions in service of its goals.
  - It requires the Inference Layer for the model-driven judgements it relies on and the Control Layer to carry out chosen actions. It enables the Coordination Layer, which composes many agents, and the Application Layer, which exposes agent behaviour to users.
  - The layer bridges to autonomous agents and reinforcement learning, paradigms that define how agents choose actions under uncertainty. Goal specification and bounded autonomy set here determine how safely agents can be entrusted with tasks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z