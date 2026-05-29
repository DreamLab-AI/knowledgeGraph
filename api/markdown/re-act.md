- ### Definition
  - ReAct (Reasoning and Acting) is a prompting framework for large language models that interleaves free-form reasoning traces (thought steps) with structured action calls (tool invocations) in a single output sequence, enabling the model to dynamically plan multi-step tasks, observe the results of tool actions, and revise its reasoning accordingly. Unlike pure chain-of-thought prompting which only produces reasoning without grounding, or pure action-only agents which cannot explain their decisions, ReAct unifies both in a synergistic loop that improves task completion rates and interpretability. ReAct has become foundational to agentic AI frameworks including LangChain, LlamaIndex, and OpenAI's Assistants API.

- ### Semantic Classification
  - owl-class:: re-act:ReAct
  - owl-role:: Concept

- ### Relationships
  - requires [[Chain of Thought]]
  - requires [[Tool Use]]
  - enables [[Agentic AI]]
  - enables [[Autonomous Agent]]
  - relatedTo [[Reasoning]]
  - relatedTo [[Planning and Scheduling]]

- ### Content
  - The ReAct framework, introduced by Yao et al. in 2022, structures LLM outputs as an alternating sequence of Thought (free-form reasoning about the current state and next step), Action (a structured call to an external tool such as a search engine, calculator, or database), and Observation (the returned result of the action). This cycle repeats until the model produces a final answer. The framework was evaluated on HotpotQA, FEVER, AlfWorld, and WebShop benchmarks, demonstrating improved reasoning and grounding over chain-of-thought and action-only baselines.
  - A key advantage of ReAct's explicit reasoning traces is interpretability: operators can inspect the thought steps to understand why an agent took a particular action or reached a particular conclusion, enabling debugging and safety monitoring. The traces also provide a natural mechanism for human-in-the-loop approval: a human can interrupt between thought and action steps to verify or redirect the agent's plan.
  - Modern agentic frameworks generalise ReAct into multi-agent orchestration architectures. In frameworks such as LangGraph and AutoGen, multiple ReAct-style agents operate concurrently with shared memory and message passing, enabling parallel tool execution and specialisation (e.g., a search agent, a code execution agent, and a critic agent collaborating on a complex task). The fundamental ReAct loop—reason, act, observe—remains the core interaction primitive even in these more complex orchestration patterns.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z