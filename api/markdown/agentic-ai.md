- ### Definition
  - Agentic AI refers to AI systems characterised by autonomy, goal-directedness, and the capacity to take sustained sequences of actions — including calling tools, spawning sub-agents, and modifying their own environment — in pursuit of high-level objectives specified by a user or orchestrator. Agentic systems differ from conversational AI in that they operate over extended time horizons, maintain state across steps, and may take consequential irreversible actions. The term is used both to describe individual agents and multi-agent architectures in which agentic components collaborate.

- ### Semantic Classification
  - owl-class:: agentic-ai:Agentic AI
  - owl-role:: Concept

- ### Relationships
  - requires [[Large Language Models]]
  - requires [[Tool Use]]
  - enables [[Autonomous Agent]]
  - relatedTo [[AI Agents]]
  - relatedTo [[Orchestration]]

- ### Content
  - Agentic AI systems are distinguished from reactive chatbots by three properties: persistence (maintaining context and state across arbitrarily long task horizons), agency (the ability to initiate actions without step-by-step human instructions), and composability (ability to delegate sub-tasks to specialised agents or tools). Modern agentic architectures are built on large language models that serve as the cognitive core, with an agent loop that alternates between generation (producing a thought or action) and observation (receiving the result of that action from the environment).
  - Key architectural patterns include single-agent loops (one model, many tools), hierarchical orchestration (a planning model decomposing tasks and routing to specialist models), and peer-to-peer multi-agent collaboration (multiple models negotiating and collaborating without a fixed hierarchy). Memory management is critical: agents maintain short-term in-context memory, external episodic memory in vector stores, and structured state in databases, with retrieval mechanisms determining what context is surfaced per step.
  - Safety and reliability are central concerns in agentic AI. Agents with broad permissions can cause irreversible harm — deleting files, sending emails, executing financial transactions. Minimal-footprint principles, scope-bounded permissions, human-in-the-loop checkpoints, and explicit reversibility preferences are emerging engineering norms. Evaluation of agentic systems requires task-completion benchmarks with environmental side-effect measurement rather than the simpler turn-based evaluation applicable to conversational models.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z