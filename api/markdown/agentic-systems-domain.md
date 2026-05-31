- ### Definition
  - The Agentic Systems Domain covers software agents that pursue goals over multiple steps by planning, invoking tools and acting on an environment. Its scope includes single-agent control loops, tool use, memory and the coordination of multiple agents. It is a sub-area of the Artificial Intelligence Domain that composes models from other domains into goal-directed behaviour. The boundary excludes the underlying model training, which belongs to the Machine Learning Domain.

- ### Semantic Classification
  - owl-class:: agent:AgenticSystemsDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence Domain]]
  - bridges-to:: [[AI Safety Domain]], [[Robotics Domain]], [[Knowledge Representation Domain]]
  - has-part:: [[Autonomous Agent]], [[Tool Use]], [[Planning]], [[Agent Memory]], [[Multi-Agent Coordination]]
  - requires:: [[Natural Language Processing Domain]], [[Knowledge Representation Domain]], [[Reinforcement Learning]]
  - enables:: [[Task Automation]], [[Workflow Orchestration]], [[Tool-Augmented Reasoning]]

- ### Content
  - The Agentic Systems Domain studies how autonomous software agents decompose objectives, select actions and adapt to feedback over an extended interaction. Its scope covers the control loop of perception, reasoning and action, the use of external tools and the maintenance of memory across steps. The boundary lies above model training, so the domain treats a language or policy model as a component and concerns itself with how that component is orchestrated.
  - Member concepts include the Autonomous Agent as the unit of behaviour, Tool Use for invoking external capabilities, Planning for action selection, Agent Memory for state persistence and Multi-Agent Coordination for collective behaviour. These rely on natural language processing for instruction following, knowledge representation for grounding and reinforcement learning for sequential decision making.
  - The domain bridges to the AI Safety Domain because autonomous action raises alignment and oversight concerns, to the Robotics Domain where embodied agents act in the physical world, and to knowledge representation for the symbolic structures agents reason over. It enables task automation, workflow orchestration and tool-augmented reasoning.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z