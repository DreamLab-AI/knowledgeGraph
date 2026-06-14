public:: true

# ai agents
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:305a6aeb4aba6d867123d9c1a34727aec665594871b66539d10850ee1a33f8c5",
  "@type": "Page",
  "vc:slug": "ai-agents",
  "title": "ai agents",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-agents",
  "@type": "Class",
  "label": "AI Agents",
  "definition": "AI Agents are software entities that combine a reasoning core (typically a large language model) with tool-use capabilities, memory, and a perception-action loop to autonomously pursue user-specified goals across multiple steps. They differ from single-shot inference systems by operating in iterative observe-think-act cycles, invoking external APIs, executing code, browsing the web, or delegating sub-tasks to specialised agents. The architecture integrates classical notions of rational agency with modern deep learning, spanning planning, grounding, and self-correction mechanisms. Safety, controllability, and alignment are first-class concerns because agents can initiate irreversible real-world side-effects.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-application",
      "label": "AI Application"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:tool-use", "label": "Tool Use"},
      {"@id": "urn:ngm:class:memory", "label": "Memory"},
      {"@id": "urn:ngm:class:reasoning", "label": "Reasoning"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:planning-and-scheduling", "label": "Planning and Scheduling"},
      {"@id": "urn:ngm:class:perception", "label": "Perception"},
      {"@id": "urn:ngm:class:action-execution", "label": "Action Execution"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:multi-agent-systems", "label": "Multi-Agent Systems"},
      {"@id": "urn:ngm:class:autonomous-decision-making", "label": "Autonomous Decision Making"},
      {"@id": "urn:ngm:class:workflow-automation", "label": "Workflow Automation"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:cognitive-architecture", "label": "Cognitive Architecture"},
      {"@id": "urn:ngm:class:vector-databases", "label": "Vector Databases"},
      {"@id": "urn:ngm:class:function-calling", "label": "Function Calling"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:react-framework", "label": "ReAct Framework"},
      {"@id": "urn:ngm:class:plan-and-execute", "label": "Plan and Execute"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"},
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"},
      {"@id": "urn:ngm:class:sandboxing", "label": "Sandboxing"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:chatbots", "label": "Chatbots"},
      {"@id": "urn:ngm:class:robotic-process-automation", "label": "Robotic Process Automation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:prompt-injection", "label": "Prompt Injection"},
      {"@id": "urn:ngm:class:human-in-the-loop", "label": "Human in the Loop"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:robotic-systems", "label": "Robotic Systems"},
      {"@id": "urn:ngm:class:smart-contracts", "label": "Smart Contracts"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:llm-agents", "label": "LLM Agents"},
    {"@id": "urn:ngm:class:autonomous-ai-agents", "label": "Autonomous AI Agents"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - AI Agents are software entities that combine a reasoning core — typically a [[Large Language Models]] — with [[Tool Use]], [[Memory]], and a perception-action loop to autonomously pursue user-specified goals across multiple steps. They differ from single-shot inference systems by operating in iterative observe-think-act cycles, invoking external APIs, executing code, browsing the web, or delegating sub-tasks to specialised agents. The architecture integrates classical notions of rational agency (inherited from [[Cognitive Architecture]] and [[Multi-Agent Systems]] research) with modern deep learning, spanning [[Planning and Scheduling]], grounding, and self-correction mechanisms. Safety, controllability, and alignment are first-class concerns because agents can initiate irreversible real-world side-effects, making [[AI Safety]] an integral design consideration.

- ### Overview
  - AI Agents represent a paradigm shift from prompt-response inference towards goal-directed, persistent computation. Where a conventional language model returns a single completion, an agent enters a loop: it observes the current state of its environment (files, browser, database), reasons about what action to take next, executes that action via a tool or sub-agent, observes the result, and repeats until the goal is satisfied or a budget is exhausted.
  - This loop structure emerged from decades of classical AI research into rational agents and Belief-Desire-Intention (BDI) architectures, now re-expressed with neural language models as the reasoning substrate. The result is a system that can tackle open-ended, multi-step tasks without pre-programmed decision trees, generalising to novel situations through language understanding.
  - The commercial significance is substantial: agents are the primary mechanism by which language models are integrated into production workflows, replacing brittle rule-based automation with flexible, instruction-following systems capable of handling edge cases through natural-language reasoning.

- ### Key Components
  - **Reasoning Core** — a [[Large Language Models]] (e.g., GPT-4, Claude, Gemini) that interprets observations, plans actions, and generates structured outputs directing tool calls. The LLM acts as the "brain" of the agent.
  - **Tool Registry** — a catalogue of callable functions exposed to the agent: web search, code execution, database queries, file I/O, REST API calls. Tool definitions are typically expressed as [[Function Calling]] schemas (JSON Schema format) that the model can parse and invoke.
  - **Memory Systems** — agents maintain state across steps through layered memory:
    - *In-context memory*: the active prompt window containing recent observations and scratchpad reasoning.
    - *External memory*: [[Vector Databases]] (e.g., Pinecone, Weaviate, pgvector) storing episodic records retrievable via [[Retrieval-Augmented Generation]].
    - *Procedural memory*: fine-tuned weights or cached tool sequences encoding reusable skill patterns.
  - **Planning Module** — responsible for decomposing a high-level goal into an ordered sequence of sub-tasks. Approaches range from single-shot plans generated by the LLM to dynamic re-planning after each action. See [[Planning and Scheduling]].
  - **Loop Controller / Orchestrator** — the scaffolding layer (often implemented in frameworks like LangChain, AutoGen, or CrewAI) that parses LLM outputs into tool calls, routes results back as observations, manages token budgets, and enforces safety policies.
  - **Observation Interface** — the mechanism by which the agent perceives its environment: structured JSON from APIs, rendered HTML from web pages, file contents, or sensor data from [[Robotic Systems]].
  - **Sandboxing & Safety Layer** — [[Sandboxing]] isolates tool execution (code interpreters, shell access) to prevent unintended side-effects. Combined with capability scoping and [[Human-in-the-Loop]] checkpoints, this layer governs what the agent is permitted to do.

- ### Design Patterns
  - **ReAct (Reason + Act)** — interleaves chain-of-thought reasoning steps with tool-use action steps, allowing the agent to ground its reasoning in real observations. Introduced by Yao et al. (2022), this pattern is now near-universal.
  - **Plan-and-Execute** — the agent first produces a complete plan, then executes each step in turn, optionally re-planning on failure. Separates strategic thinking from tactical execution. See [[Plan and Execute]].
  - **Reflexion** — after task completion or failure, the agent generates a verbal self-reflection summarising what went wrong, which is stored as memory to improve subsequent attempts. A form of lightweight self-improvement without weight updates.
  - **MRKL (Modular Reasoning, Knowledge, and Language)** — routes queries to specialised symbolic or neural modules (calculators, APIs, retrieval engines) based on the LLM's routing decision, predating the modern function-calling interface.
  - **Tree-of-Thought / LATS** — explores multiple reasoning branches simultaneously, using search algorithms (BFS, MCTS) to evaluate and prune paths, yielding higher-quality solutions for combinatorially hard problems.
  - **Self-Discover** — agent autonomously selects and composes reasoning primitives (decomposition, critical thinking, step-by-step) before tackling the task, improving generalisation.

- ### Multi-Agent Architectures
  - When a single agent is insufficient for complex, long-horizon tasks, [[Multi-Agent Systems]] architectures distribute work across specialised sub-agents co-ordinated by an orchestrating supervisor.
  - **Orchestrator–Worker pattern** — a planner agent decomposes the goal and dispatches sub-tasks to worker agents (researcher, coder, critic), collecting results and synthesising a final output.
  - **Peer-to-Peer / Society of Agents** — agents communicate laterally via a shared message bus or blackboard, negotiating roles and resolving conflicts without a fixed hierarchy. Inspired by BDI and Stigmergy models.
  - **Role-playing frameworks** (e.g., AutoGen, CrewAI) — each agent is instantiated with a persona, a system prompt defining its role, and a constrained tool set, enabling character-consistent specialisation.
  - Inter-agent communication protocols are an emerging standardisation target; early proposals include Anthropic's Model Context Protocol (MCP) and OpenAI's Agent-to-Agent (A2A) messaging schema.

- ### Applications / Use Cases
  - **Software Engineering** — coding agents (GitHub Copilot Workspace, Devin) autonomously write, test, debug, and submit pull requests. Combines code generation with tool calls to linters, test runners, and version control.
  - **Research Assistance** — agents retrieve papers via [[Retrieval-Augmented Generation]], summarise findings, synthesise literature reviews, and iteratively refine hypotheses. Examples: Elicit, OpenScholar, AI Scientist.
  - **Enterprise Workflow Automation** — replacing [[Robotic Process Automation]] with flexible agents that handle exceptions through language understanding rather than brittle rule paths. CRM updates, invoice processing, compliance checking.
  - **Customer Support** — multi-turn agents with CRM and knowledge-base access resolve support tickets autonomously, escalating to human agents when confidence is low via [[Human-in-the-Loop]] mechanisms.
  - **Scientific Discovery** — agents design experiments, run simulations, interpret results, and iterate hypotheses in closed-loop "AI Scientist" configurations (materials discovery, drug candidate screening).
  - **Data Analysis and Reporting** — agents ingest raw datasets, write and execute analysis code, generate visualisations, and produce natural-language reports, compressing multi-hour analyst workflows to minutes.
  - **Robotics** — embodied agents combine language understanding with physical actuation, planning navigation and manipulation tasks grounded in real-world perception. Bridges to [[Robotic Systems]] via the perception-action loop.
  - **Decentralised Autonomous Organisations** — agents interacting with [[Smart Contracts]] on blockchains can execute financial transactions, vote on proposals, and manage treasury operations without human intermediaries, bridging AI to distributed governance.
  - **Personal Assistants** — scheduling, email triage, calendar management, and web research performed autonomously on behalf of users, integrating with productivity suites via OAuth-authenticated tool calls.

- ### Safety and Alignment Considerations
  - Agents with broad tool permissions represent a qualitatively higher risk profile than single-shot language models because mistakes can propagate across actions and cause irreversible real-world effects (data deletion, financial transactions, email sends).
  - **Prompt Injection** — a class of attack where adversarial content embedded in retrieved documents or web pages hijacks the agent's reasoning, redirecting it to perform unintended actions. See [[Prompt Injection]].
  - **Capability Scoping** — the principle of least privilege applied to tool registries: agents should be granted only the tools strictly necessary for the task, minimising blast radius.
  - **Human-in-the-Loop checkpoints** — deferring irreversible actions (file deletion, financial transfers) to human approval, preserving oversight without blocking routine reversible steps. See [[Human-in-the-Loop]].
  - **Sandboxing** — executing code and shell commands inside isolated containers (Docker, WebAssembly) so that even compromised tool calls cannot affect host systems. See [[Sandboxing]].
  - **Monitoring and Logging** — full action traces (inputs, tool calls, outputs) logged for post-hoc audit, anomaly detection, and forensic analysis.
  - These concerns connect to broader [[AI Safety]] and alignment research, including corrigibility, value alignment, and interruptibility.

- ### Frameworks and Tooling
  - **LangChain / LangGraph** — the dominant open-source framework for agent construction; LangGraph adds graph-based workflow orchestration for complex branching agent logic.
  - **AutoGen (Microsoft)** — conversational multi-agent framework supporting group chats between specialised agents with human feedback integration.
  - **CrewAI** — role-based multi-agent framework emphasising crew composition, delegation, and sequential/parallel task execution.
  - **Semantic Kernel (Microsoft)** — plugin-oriented SDK for integrating LLMs with enterprise systems, used for agent development in .NET and Python.
  - **OpenAI Assistants API / Responses API** — hosted agent infrastructure with built-in tool execution (code interpreter, file search, web search), memory, and function calling.
  - **Anthropic Model Context Protocol (MCP)** — open protocol for standardising tool/resource exposure to agents, enabling composable tool ecosystems across vendors.

- ### Relationships
  - requires:: [[Large Language Models]]
  - requires:: [[Tool Use]]
  - requires:: [[Memory]]
  - requires:: [[Reasoning]]
  - hasPart:: [[Planning and Scheduling]]
  - hasPart:: [[Perception]]
  - hasPart:: [[Action Execution]]
  - enables:: [[Multi-Agent Systems]]
  - enables:: [[Autonomous Decision Making]]
  - enables:: [[Workflow Automation]]
  - dependsOn:: [[Cognitive Architecture]]
  - dependsOn:: [[Vector Databases]]
  - dependsOn:: [[Function Calling]]
  - implements:: [[ReAct Framework]]
  - implements:: [[Plan and Execute]]
  - uses:: [[Prompt Engineering]]
  - uses:: [[Retrieval-Augmented Generation]]
  - uses:: [[Sandboxing]]
  - contrastsWith:: [[Chatbots]]
  - contrastsWith:: [[Robotic Process Automation]]
  - relatedTo:: [[Reinforcement Learning]]
  - relatedTo:: [[AI Safety]]
  - relatedTo:: [[Prompt Injection]]
  - relatedTo:: [[Human-in-the-Loop]]
  - bridges-to:: [[Robotic Systems]]
  - bridges-to:: [[Smart Contracts]]

- ### Standards & Context
  - The field lacks mature formal standards but several emerging specifications are gaining traction:
  - **Model Context Protocol (MCP)** — Anthropic's open protocol (2024) for standardising how tools and resources are exposed to agents; adopted by major IDE and IDE-adjacent vendors.
  - **OpenAI Function Calling schema** — de-facto standard for structured tool invocation, adopted by most LLM providers.
  - **Agent-to-Agent (A2A)** — Google's proposed protocol for inter-agent communication and task delegation across disparate systems.
  - **W3C PROV Ontology** — used for provenance tracking of agent actions, linking decisions to data sources and reasoning traces for auditability.
  - Regulatory context: the EU AI Act classifies autonomous agents as high-risk AI systems when used in consequential domains (employment, credit, critical infrastructure), mandating human oversight and conformity assessments.
  - [[Reinforcement Learning]] from Human Feedback (RLHF) and Constitutional AI approaches from [[AI Safety]] research are increasingly applied to agent training to improve alignment and reduce harmful action tendencies.

- ### Provenance
  - sources:: Yao et al. "ReAct" (2022); Shinn et al. "Reflexion" (2023); Wang et al. "Survey of LLM-based Autonomous Agents" (2024); Anthropic MCP specification (2024); OpenAI Assistants API documentation
  - updated:: 2026-06-13
