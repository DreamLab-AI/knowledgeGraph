- ### Definition
  - [[Belief Desire Intention]] (BDI) is an [[Agent Architecture]] model representing agent mental states as beliefs, desires, and intentions.
  - **Beliefs** encode the agent's current world model; **desires** are goal states; **intentions** are committed action plans.
  - Originates from Michael Bratman's philosophy of [[Deliberative Reasoning]] and practical rationality.
  - Formalised into languages such as AgentSpeak and platforms like JADE for [[Multi-Agent System]] development.

- ### Overview
  - BDI agents continuously update beliefs from perception, reconsider desires against beliefs, and commit intentions to plan libraries.
  - The deliberation cycle: belief revision → desire generation → intention selection → plan execution.
  - Contrasts with [[Reactive Agent]] architectures that respond to stimuli without maintaining mental state.
  - Standardised through [[FIPA]] agent communication protocols for interoperability.

- ### Key Aspects
  - **Commitment strategy**: how strongly an agent maintains intentions once formed (blind, single-minded, open-minded).
  - **Plan library**: pre-compiled recipes mapping intention types to executable action sequences.
  - **Reconsideration**: periodic or event-driven re-evaluation of whether current intentions remain valid.
  - **Practical reasoning**: balancing responsiveness with commitment to avoid thrashing.

- ### Mechanisms
  - Belief base updated by perception and inter-agent communication.
  - Desire generator produces candidate goals from beliefs using domain rules.
  - Intention selector chooses among competing desires based on utility or priority.
  - Plan executor monitors plan progress and triggers re-planning on failure.

- ### Applications
  - [[Autonomous Agent]] systems for simulation, robotics, and logistics.
  - [[Multi-Agent System]] platforms for distributed negotiation and coordination.
  - [[Robotics]] task execution with recoverable plan hierarchies.
  - [[Distributed Collaboration]] scenarios with multiple competing stakeholder agents.
  - Integration with [[Large Language Model]] reasoning as a structured scaffolding layer.

- ### Relationships
  - uses:: [[Agent Architecture]]
  - uses:: [[Reasoning Engine]]
  - uses:: [[Knowledge Representation]]
  - implements:: [[Rational Agent]]
  - implements:: [[Deliberative Reasoning]]
  - requires:: [[Planning]]
  - requires:: [[Goal-Directed Behaviour]]
  - enables:: [[Multi-Agent System]]
  - enables:: [[Autonomous Agent]]
  - contrastsWith:: [[Reactive Agent]]
  - contrastsWith:: [[Reinforcement Learning]]
  - relatedTo:: [[Cognitive Architecture]]
  - relatedTo:: [[Symbolic AI]]
  - relatedTo:: [[Agentic AI]]
  - standardizedBy:: [[FIPA]]
  - supports:: [[Robotics]]
  - supports:: [[Distributed Collaboration]]
  - bridgesTo:: [[Large Language Model]]

- ### Provenance
  - updated:: 2026-06-15