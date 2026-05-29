- ### Definition
  - AI Agents are software entities that combine large language models with tool-use capabilities and memory to autonomously perceive environmental state, plan sequences of actions, and execute those actions in pursuit of user-specified goals. Unlike single-shot inference, agents operate in iterative loops, calling external APIs, browsing the web, running code, or invoking other agents as sub-tasks. They sit at the intersection of language modeling, planning, and classical software agents in cognitive architectures.

- ### Semantic Classification
  - owl-class:: ai-agents:AI Agents
  - owl-role:: Concept

- ### Relationships
  - requires [[Large Language Models]]
  - requires [[Tool Use]]
  - enables [[Multi-Agent Systems]]
  - dependsOn [[Reasoning]]
  - dependsOn [[Planning and Scheduling]]

- ### Content
  - AI Agents are distinguished from conventional AI applications by their capacity for extended, goal-directed action over multiple steps. A typical agent architecture consists of a large language model acting as a reasoning core, a set of callable tools (web search, code execution, database access), a memory substrate (in-context, external vector store, or episodic), and a loop controller that interprets model outputs as action directives and routes results back as observations.
  - Key design patterns include ReAct (Reason + Act), Plan-and-Execute, and Reflexion, which introduce explicit reflection steps to correct errors mid-task. Multi-agent architectures extend the pattern by spawning specialist sub-agents that report to an orchestrating agent, enabling parallel task branches and separation of concerns.
  - Safety considerations are significant: agents with broad tool permissions can cause irreversible side-effects, so capability scoping, sandboxing, and human-in-the-loop checkpoints are active research and engineering concerns. Prompt injection attacks, where adversarial content hijacks agent reasoning, represent a particular threat surface. Frameworks such as LangChain, AutoGen, and CrewAI provide scaffolding for building production-grade agent pipelines.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z