public:: true

# Agentic Workflow
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:agentic-workflow",
  "@type": "Page",
  "vc:slug": "agentic-workflow",
  "title": "Agentic Workflow",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agentic-workflow",
  "@type": "Class",
  "label": "Agentic Workflow",
  "definition": "An agentic workflow is a structured, iterative execution pattern in which an AI agent autonomously plans actions, invokes external tools or APIs, observes results, and revises its approach through successive reasoning cycles until a goal condition is satisfied or a stopping criterion is met. Unlike single-pass inference, agentic workflows employ persistent memory, branching logic, and multi-step planning that may span many inference calls and involve specialised sub-agents coordinated by an orchestrator. The pattern relies on large language model capabilities — tool use, function calling, long-context reasoning — and is the architectural basis for systems such as AutoGPT, LangGraph, CrewAI, OpenAI Agents SDK, and Anthropic's Claude toolset. Agentic workflows introduce novel safety and reliability challenges including error compounding, prompt injection via tool outputs, and the need for human-in-the-loop checkpoints in high-stakes deployments.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:workflow-automation",
      "label": "Workflow Automation"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:tool-use",
        "label": "Tool Use"
      },
      {
        "@id": "urn:ngm:class:function-calling",
        "label": "Function Calling"
      },
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      },
      {
        "@id": "urn:ngm:class:chain-of-thought",
        "label": "Chain of Thought"
      },
      {
        "@id": "urn:ngm:class:prompt-engineering",
        "label": "Prompt Engineering"
      },
      {
        "@id": "urn:ngm:class:re-act-pattern",
        "label": "ReAct Pattern"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:agentic-ai",
        "label": "Agentic AI"
      },
      {
        "@id": "urn:ngm:class:multi-agent-systems",
        "label": "Multi-Agent Systems"
      },
      {
        "@id": "urn:ngm:class:agent-frameworks",
        "label": "Agent Frameworks"
      },
      {
        "@id": "urn:ngm:class:orchestration",
        "label": "Orchestration"
      },
      {
        "@id": "urn:ngm:class:planning-and-scheduling",
        "label": "Planning and Scheduling"
      },
      {
        "@id": "urn:ngm:class:robotic-process-automation",
        "label": "Robotic Process Automation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ai-agent-system",
        "label": "AI Agent System"
      },
      {
        "@id": "urn:ngm:class:task-planning",
        "label": "Task Planning"
      },
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      },
      {
        "@id": "urn:ngm:class:autonomous-coding",
        "label": "Autonomous Coding"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:context-window",
        "label": "Context Window"
      },
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:agent-memory",
        "label": "Agent Memory"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:plan-and-execute-pattern",
        "label": "Plan and Execute Pattern"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:inference",
        "label": "LLM Inference"
      },
      {
        "@id": "urn:ngm:class:api-integration",
        "label": "API Integration"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:single-turn-inference",
        "label": "Single-Turn Inference"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:human-in-the-loop",
        "label": "Human in the Loop"
      },
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:prompt-injection",
        "label": "Prompt Injection"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:llm-agent-loop",
      "label": "LLM Agent Loop"
    },
    {
      "@id": "urn:ngm:class:autonomous-agent-workflow",
      "label": "Autonomous Agent Workflow"
    }
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
  - An **agentic workflow** is an iterative, goal-directed execution pattern in which an [[AI Agent]] autonomously plans actions, invokes [[Tool Use]] capabilities (web search, code interpreters, file systems, external APIs), processes observations, and loops through successive reasoning cycles until a task is complete or a stopping condition is met. It differs fundamentally from [[Single-Turn Inference]] by sustaining coherent, adaptive reasoning across many steps, enabling complex automation that requires [[Planning and Scheduling]], dynamic branching, and the ability to recover from intermediate failures. The pattern is the architectural backbone of [[Agentic AI]] systems and of frameworks such as [[LangGraph]], [[CrewAI]], and [[AutoGen]].

- ### Overview
  - Agentic workflows emerged as a practical paradigm in 2023–2024 when [[Large Language Models]] demonstrated sufficient [[Function Calling]], [[Reasoning]], and long-context capabilities to sustain coherent action over many inference steps without human intervention at each step.
  - The core loop:
    - 1. Receive a goal or natural language instruction from a user or upstream orchestrator.
    - 2. Generate a plan or select the next action using [[Chain of Thought]] or structured output.
    - 3. Execute a tool call — invoking a search engine, code interpreter, database query, REST API, or file system operation.
    - 4. Receive, parse, and integrate the tool result into the ongoing [[Context Window]].
    - 5. Evaluate whether the goal is satisfied or whether further steps are required, then loop.
  - The loop can be nested within [[Multi-Agent Systems]] where specialist sub-agents handle subtasks and report results to a coordinating [[Orchestration]] layer.
  - Why it matters:
    - Moves AI from advisor to actor, enabling delegation of complete tasks rather than mere informational queries.
    - Dramatically extends what [[AI Agent System]] architectures can accomplish without manual human intervention at every decision point.
    - Unlocks economically significant use cases: autonomous software engineering, research synthesis, enterprise process automation, and scientific hypothesis generation.

- ### Key Components
  - **Reasoning Engine** — the underlying [[Large Language Models]] that generates plans, selects tools, and interprets results. Capabilities like [[Chain of Thought]] and structured output are critical.
  - **Tool Registry** — a catalogue of callable functions (APIs, search, code execution, file I/O) that the agent can invoke via [[Function Calling]] or [[Tool Use]] mechanisms.
  - **Agent Memory** — state maintained across steps, which may include:
    - Short-term: the active [[Context Window]] containing conversation history and tool outputs.
    - Long-term: external [[Vector Database]] or key-value store enabling recall across sessions (see [[Retrieval-Augmented Generation]]).
    - Episodic: structured logs of past actions and outcomes used for [[Reflection Pattern]].
  - **Planner** — orchestrates task decomposition; may use [[Plan-and-Execute Pattern]] to generate a full task graph before execution, or reactive step-by-step planning via [[ReAct Pattern]].
  - **Executor** — dispatches tool calls, handles retries, timeouts, and error propagation.
  - **Evaluator / Stopper** — assesses whether the goal condition is met or whether the agent should escalate to a [[Human-in-the-Loop]] checkpoint.
  - **Orchestrator** — in [[Multi-Agent Systems]], coordinates multiple specialised sub-agents, distributes sub-tasks, and merges outputs.

- ### Design Patterns
  - **[[ReAct Pattern]]** (Reasoning + Acting) — interleaves [[Chain of Thought]] reasoning steps with explicit action invocations. Improves transparency and error recovery by making the agent's rationale visible at each step.
  - **[[Plan-and-Execute Pattern]]** — separates high-level planning (generating a task graph or ordered list of sub-tasks) from step-wise execution. Allows the plan to be revised when intermediate observations reveal unexpected conditions.
  - **[[Reflection Pattern]]** — adds a self-critique or verification step after each action or after the full plan is complete, enabling agents to catch and correct errors before they cascade through later steps.
  - **Tool-Call Loop** — the atomic unit of all agentic workflows: emit a tool call, receive the result, decide next action. Frameworks expose this as a directed graph (LangGraph), a role-based conversation (AutoGen), or a sequential chain (LangChain).
  - **Subagent Delegation** — a supervisor agent decomposes a complex task and spawns specialised sub-agents for retrieval, code writing, verification, or domain-specific reasoning, coordinated through [[Orchestration]].

- ### Applications
  - **Autonomous Coding** — agents like Devin, GitHub Copilot Workspace, and Cursor's background agents run agentic loops to write, test, debug, and refactor code across multi-file repositories with minimal human guidance. Relies on [[Tool Use]] for shell commands and file operations.
  - **Research & Synthesis** — research agents traverse the web, retrieve and chunk documents using [[Retrieval-Augmented Generation]], synthesise findings, and produce structured reports. Used in academic and enterprise intelligence workflows.
  - **Customer Support Automation** — multi-turn resolution workflows where an agent queries CRM systems, drafts responses, escalates to humans at defined confidence thresholds, and logs outcomes. Bridges to [[Human-in-the-Loop]] governance.
  - **Enterprise Process Automation** — agentic workflows are displacing rigid [[Robotic Process Automation]] scripts in scenarios requiring natural language understanding of variable document formats and adaptive handling of edge cases.
  - **Scientific Discovery** — agents drive hypothesis generation, literature search, experimental design suggestion, and result interpretation loops in domains such as drug discovery and materials science.
  - **Data Engineering** — agents orchestrate ETL pipelines, write and execute SQL/Python, validate outputs, and iterate until data quality criteria are met.
  - **Security Operations** — threat hunting agents correlate alerts, query threat intelligence feeds, draft incident reports, and recommend remediation — bridging to [[AI Safety]] and [[Prompt Injection]] defences.

- ### Challenges & Risks
  - **Error Compounding** — mistakes in early steps may not surface until many steps later, by which point recovery is expensive. Drives investment in step-level logging and rollback mechanisms.
  - **[[Prompt Injection]]** — hostile content embedded in tool outputs (web pages, documents, database records) can hijack the agent's subsequent actions. A significant [[AI Safety]] concern specific to agentic contexts.
  - **Context Window Saturation** — long-running workflows accumulate tool outputs that may exhaust the [[Context Window]], degrading reasoning quality. Mitigated by summarisation, compression, and external [[Agent Memory]] stores.
  - **Latency and Cost** — chained [[LLM Inference]] calls multiply both token cost and wall-clock time. Efficient [[Orchestration]] and caching are engineering priorities.
  - **Alignment and Oversight** — fully autonomous agents acting in the world require robust [[AI Safety]] guardrails, audit logs, and [[Human-in-the-Loop]] escalation paths to prevent irreversible actions.
  - **Evaluation Difficulty** — assessing multi-step agent performance requires end-to-end task benchmarks (SWE-Bench, WebArena, GAIA) rather than single-turn accuracy metrics.

- ### Relationships
  - subClassOf:: [[Workflow Automation]]
  - uses:: [[Tool Use]]
  - uses:: [[Function Calling]]
  - uses:: [[Reasoning]]
  - uses:: [[Chain of Thought]]
  - uses:: [[Prompt Engineering]]
  - uses:: [[ReAct Pattern]]
  - relatedTo:: [[Agentic AI]]
  - relatedTo:: [[Multi-Agent Systems]]
  - relatedTo:: [[Agent Frameworks]]
  - relatedTo:: [[Orchestration]]
  - relatedTo:: [[Planning and Scheduling]]
  - relatedTo:: [[Robotic Process Automation]]
  - enables:: [[AI Agent System]]
  - enables:: [[Task Planning]]
  - enables:: [[Retrieval-Augmented Generation]]
  - enables:: [[Autonomous Coding]]
  - enables:: [[AI Research Assistant]]
  - requires:: [[Context Window]]
  - requires:: [[Large Language Models]]
  - requires:: [[Agent Memory]]
  - hasPart:: [[Plan-and-Execute Pattern]]
  - hasPart:: [[Reflection Pattern]]
  - hasPart:: [[Tool Call Loop]]
  - dependsOn:: [[LLM Inference]]
  - dependsOn:: [[API Integration]]
  - contrastsWith:: [[Single-Turn Inference]]
  - contrastsWith:: [[Traditional Workflow Orchestration]]
  - bridgesTo:: [[Human-in-the-Loop]]
  - bridgesTo:: [[AI Safety]]
  - bridgesTo:: [[Prompt Injection]]

- ### Standards & Context
  - No formal international standards body has yet ratified an "agentic workflow" specification (as of mid-2026), though several industry efforts are shaping de facto norms:
    - **OpenAI Agents SDK** and **Anthropic's Claude Tooling** define competing but converging conventions for tool schemas, agent loops, and handoff protocols.
    - **LangChain / LangGraph** introduced graph-based state machine representations that have become widely adopted for expressing agent topologies.
    - **Model Context Protocol (MCP)** — an emerging open standard for structured tool and resource exposure to LLM agents, increasing interoperability across frameworks.
    - **IEEE P3394** (draft) — working group on autonomous AI agent behaviour covers related concerns around accountability and transparency.
    - **NIST AI RMF 1.0** and its forthcoming agentic AI supplement address risk management for autonomous AI systems in enterprise contexts.
    - **EU AI Act** (applicable from 2025–2026) classifies some agentic AI deployments as high-risk systems subject to conformity assessment, transparency, and human oversight requirements.
  - Agentic workflow design intersects with [[AI Safety]] research on reward hacking, goal misgeneralisation, and corrigibility — concerns that intensify as agent autonomy and capability increase.

- ### Provenance
  - sources:: Yao et al. "ReAct: Synergizing Reasoning and Acting in Language Models" (2023); Chase et al. LangChain documentation; Anthropic Claude tool-use documentation; OpenAI Agents SDK documentation; NIST AI RMF 1.0; EU AI Act 2024/1689.
  - updated:: 2026-06-13
