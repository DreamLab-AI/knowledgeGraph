An architectural pattern in which one autonomous agent, equipped with its own model, memory, and tool access, carries an entire task from goal to completion within a single reasoning loop — with no delegation, inter-agent messaging, or coordination overhead; simpler to build, debug, and evaluate than multi-agent designs, and often the stronger baseline when a capable model with good tools can hold the whole problem in context.

### Semantic Classification

### Content

## Definition

A **single-agent system** solves a task with exactly one autonomous [[Agent]]: one reasoning loop, one context, one set of tools, one locus of decision-making. The agent perceives its environment, plans, acts, and iterates until the goal is met, without delegating subtasks to peers or negotiating with other agents. In classical AI the term distinguishes environments where an agent optimises alone (a planner, a game-playing agent against a fixed environment) from multi-agent settings involving cooperation or competition; in the LLM era it describes the dominant deployment pattern — a single model instance driving a tool-call loop, as in most coding assistants and task agents.

The contrast with a [[Multi-Agent System]] is architectural, not one of capability. Single-agent designs avoid the costs that [[Multi-Agent Coordination]] introduces: message-passing protocols, shared-state consistency, role assignment, conflicting sub-agent conclusions, and the difficulty of attributing failures across agents. Everything the agent knows sits in one context window, so its behaviour is easier to trace, checkpoint, and evaluate. The corresponding limits are equally clear — context capacity bounds how much evidence one agent can hold, there is no parallelism across subtasks, and a single flawed line of reasoning has no adversarial peer to challenge it.

Practitioner guidance has converged on treating the single-agent system as the default and escalating only when the task demonstrably benefits from decomposition: very wide research fan-outs, role specialisation with different tool permissions, or workloads exceeding one context window. Many apparent multi-agent gains disappear when the single-agent baseline is given better tools, retrieval, and prompting, which is why rigorous comparisons keep both patterns in scope.

## Current Landscape

- **Dominant in production**: most deployed LLM agents (IDE coding agents, customer-support agents, browsing agents) are single-agent tool loops, because reliability and debuggability outweigh theoretical parallelism.
- **When multi-agent wins**: breadth-heavy tasks (parallel research, map-reduce over many documents), separation of privilege (a planner without write access delegating to constrained executors), and adversarial review patterns.
- **When single-agent wins**: depth-heavy tasks with strong sequential dependencies, tight token budgets (multi-agent systems multiply token spend), and settings where coordination errors dominate — studies of multi-agent failures repeatedly trace them to inter-agent misalignment rather than model weakness.
- **Hybrid drift**: a single agent that spawns ephemeral subagents for isolated subtasks blurs the boundary; the defining property remains a single locus of control and accountability.
- **The 2025 debate crystallised the trade-off**: within a day of each other in June 2025, Cognition published "Don't Build Multi-Agents" (arguing shared context and single-threaded control avoid conflicting sub-agent decisions) while Anthropic reported a multi-agent research system beating single-agent Claude Opus 4 by 90.2% on its internal eval — at roughly 15x the token cost of a chat.
- **Reconciliation via context engineering**: LangChain's synthesis (June 2025) noted both posts agree that context engineering is the core problem, and that multi-agent systems which primarily "read" (parallel research) are far easier to get right than those that "write" a single coherent artefact, where single-agent designs stay safer.
- **Token cost as the deciding variable**: measured overheads place a single agent at ~4x chat tokens and multi-agent at ~15x, so single-agent remains the default for coding and other write-heavy, sequentially dependent tasks; escalate only when parallel exploration clearly pays and sub-task assumptions rarely conflict.

  **Sources**:

- https://cognition.com/blog/dont-build-multi-agents
- https://www.anthropic.com/engineering/multi-agent-research-system
- https://www.langchain.com/blog/how-and-when-to-build-multi-agent-systems

### Provenance

