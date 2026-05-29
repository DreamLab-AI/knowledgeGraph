public:: true

# LLM Agents
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:llm-agents",
  "@type": "Page",
  "vc:slug": "llm-agents",
  "title": "LLM Agents",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:llm-agents",
  "@type": "Class",
  "label": "LLM Agents",
  "definition": "LLM Agents are autonomous software systems that use large language models as their core reasoning engine to perceive inputs, plan multi-step actions, invoke external tools, and pursue goals over extended horizons with minimal per-step human oversight. They extend base language models with memory, tool use, and feedback loops to accomplish tasks that require sequential decision-making.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:agentic-ai", "label": "Agentic AI"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:tool-use", "label": "Tool Use"},
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:multi-agent-system", "label": "Multi-Agent System"},
      {"@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:function-calling", "label": "Function Calling"},
      {"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - LLM Agents are computational systems that use [[Large Language Models]] as a central cognitive component to interpret instructions, reason about state, and autonomously select and execute sequences of actions — such as web browsing, code execution, database queries, and API calls — to accomplish user-defined goals. Unlike single-turn prompting, agents operate in a perceive–plan–act loop, maintaining intermediate results across steps and adapting plans in response to environmental feedback. Frameworks such as ReAct, AutoGPT, and LangGraph formalize the interaction patterns between the LLM reasoner and external [[Tool Use]] capabilities.

- ### Relationships
  - LLM Agents are instantiated from [[Large Language Models]] augmented with structured [[Tool Use]] interfaces (code interpreters, search APIs, browser control) and [[Retrieval-Augmented Generation]] for long-term context beyond the [[Context Window]]. They compose into [[Multi-Agent System]] architectures where specialist agents collaborate under an orchestrator. Individual agent capabilities are shaped by [[Prompt Engineering]] and [[Function Calling]] interfaces that expose tool schemas to the model. Completed agents drive [[Agentic Workflow]] pipelines that encode multi-step business processes as directed agent graphs.

- ### Content
  - The precursor to modern LLM agents was the GOFAI planning tradition, in which symbolic planners decomposed goals into operator sequences. Neural language models began exhibiting primitive goal-directed behaviour through chain-of-thought prompting (Wei et al., 2022), which revealed that multi-step reasoning could be elicited by instructing models to verbalise intermediate steps. The ReAct pattern (Yao et al., 2022) interleaved reasoning traces with action calls to external tools, demonstrating agents capable of web search and database interaction. AutoGPT (2023) popularised the notion of self-prompted agentic loops, attracting widespread developer attention despite brittle real-world performance.

  - Architecturally, an LLM agent comprises: a language model backbone performing reasoning and instruction-following; a context window that serves as working memory, accumulating observations from the environment; a tool registry mapping natural-language intents to structured API calls; and optionally a long-term memory store addressed via [[Retrieval-Augmented Generation]]. The agent loop generates a thought (plan step), selects a tool, executes the action, observes the result, and updates its plan. Error handling — detecting and recovering from failed tool calls or unexpected outputs — remains an open engineering challenge, as LLMs may hallucinate tool capabilities or misinterpret return values.

  - Production deployments of LLM agents as of 2023–2024 include software engineering assistants (GitHub Copilot Workspace, Devin), customer service agents that access CRM and ticketing systems, research agents that retrieve and synthesise scientific literature, and financial agents that query live market data. [[Multi-Agent System]] frameworks — LangGraph, AutoGen, CrewAI — orchestrate populations of specialised agents with defined roles and message-passing protocols. Sandboxed code execution environments (e.g., E2B, Modal) provide safe substrates for agents that write and run code.

  - By 2025, LLM agent capability has advanced markedly: frontier models including Claude 3.5 Sonnet, GPT-4o, and Gemini 2.0 demonstrate substantially improved tool use accuracy, context utilisation, and multi-step plan adherence. Computer-use interfaces (Anthropic, OpenAI) allow agents to control desktop GUIs directly, expanding the action space beyond structured APIs. Reliability — the fraction of long-horizon tasks completed without human intervention — remains the key bottleneck, with current systems achieving 50–80% success on controlled benchmarks such as SWE-bench and WebArena but lower rates on open-ended real-world tasks. Safety research into agent oversight, sandboxing, and minimal-authority principles is intensifying alongside capability development.

