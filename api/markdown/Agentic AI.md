public:: true

# agentic ai
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e424a7d45cfa66ab146afd8b0675ebd7d890e9ecc437e0f2641f50b8b476398a",
  "@type": "Page",
  "vc:slug": "agentic-ai",
  "title": "agentic ai",
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
  "@id": "urn:ngm:class:agentic-ai",
  "@type": "Class",
  "label": "Agentic AI",
  "definition": "Agentic AI refers to AI systems characterised by autonomy, goal-directedness, and the capacity to take sustained sequences of actions — including calling external tools, spawning sub-agents, and modifying their own environment — in pursuit of high-level objectives specified by a user or orchestrator. Agentic systems differ from reactive or conversational AI in that they operate over extended time horizons, maintain persistent state across steps, and may take consequential or irreversible actions without per-step human approval. The architectural backbone is typically a large language model serving as a cognitive core inside a closed sense-plan-act loop, augmented by memory stores, tool registries, and inter-agent communication protocols. The term encompasses both single-agent pipelines and heterogeneous multi-agent architectures in which agentic components collaborate, compete, or are hierarchically orchestrated.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-application",
      "label": "AI Application"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:autonomous-ai-agent",
      "label": "Autonomous AI Agent"
    },
    {
      "@id": "urn:ngm:class:llm-agent",
      "label": "LLM Agent"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:tool-use",
        "label": "Tool Use"
      },
      {
        "@id": "urn:ngm:class:memory-management",
        "label": "Memory Management"
      },
      {
        "@id": "urn:ngm:class:task-planning",
        "label": "Task Planning"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:agent-loop",
        "label": "Agent Loop"
      },
      {
        "@id": "urn:ngm:class:tool-registry",
        "label": "Tool Registry"
      },
      {
        "@id": "urn:ngm:class:working-memory",
        "label": "Working Memory"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "Autonomous Agent"
      },
      {
        "@id": "urn:ngm:class:multi-agent-system",
        "label": "Multi-Agent System"
      },
      {
        "@id": "urn:ngm:class:workflow-automation",
        "label": "Workflow Automation"
      },
      {
        "@id": "urn:ngm:class:software-development-automation",
        "label": "Software Engineering Automation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:foundation-model",
        "label": "Foundation Models"
      },
      {
        "@id": "urn:ngm:class:vector-database",
        "label": "Vector Database"
      },
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:function-calling",
        "label": "Function Calling"
      },
      {
        "@id": "urn:ngm:class:chain-of-thought",
        "label": "Chain of Thought"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:model-context-protocol",
        "label": "Model Context Protocol"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:conversational-ai",
        "label": "Conversational AI"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:human-in-the-loop",
        "label": "Human in the Loop"
      },
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-agents",
        "label": "AI Agents"
      },
      {
        "@id": "urn:ngm:class:orchestration",
        "label": "Orchestration"
      },
      {
        "@id": "urn:ngm:class:prompt-engineering",
        "label": "Prompt Engineering"
      },
      {
        "@id": "urn:ngm:class:ai-alignment",
        "label": "AI Alignment"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:robotic-process-automation",
        "label": "Robotic Process Automation"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Agentic AI refers to AI systems characterised by autonomy, goal-directedness, and the capacity to take sustained sequences of actions in pursuit of high-level objectives, without requiring per-step human instruction. The architectural backbone is typically a [[Large Language Models]] serving as a cognitive core inside a closed sense-plan-act loop, augmented by [[Memory Management]] stores, [[Tool Use]] registries, and inter-agent communication protocols. Agentic systems differ fundamentally from [[Conversational AI]] in that they maintain persistent state across arbitrarily long task horizons, initiate actions proactively, and may interact with external services, file systems, APIs, and other agents. The concept encompasses both single-agent pipelines and heterogeneous [[Multi-Agent System]] architectures in which agentic components collaborate, compete, or are hierarchically orchestrated under a planner model.

- ### Overview
  - Agentic AI emerged as the dominant paradigm for deploying [[Foundation Models]] in production during 2024–2025, as practitioners moved beyond single-turn inference toward systems capable of completing complex, multi-step tasks autonomously.
  - The key differentiators from prior AI paradigms are:
    - **Persistence**: the agent retains memory of prior steps and accumulates context over an arbitrarily long task horizon.
    - **Agency**: the system can initiate actions (API calls, code execution, web search, file writes) without a human issuing each step.
    - **Composability**: tasks can be decomposed and delegated to specialist sub-agents or tools, enabling divide-and-conquer problem solving.
    - **Goal-directedness**: the system pursues a declared objective, re-planning when intermediate steps fail or produce unexpected results.
  - Agentic AI matters because it shifts AI from an assistant that answers questions to an actor that completes work, unlocking productivity gains across software engineering, research, data analysis, and business process automation.

- ### Key Components
  - **[[Agent Loop]]** — the core sense-plan-act cycle: observe environment state, reason about next action, execute action, observe result, repeat until goal achieved or budget exhausted.
  - **[[Large Language Models]]** — the cognitive engine that performs reasoning, planning, and natural-language interaction. Models such as GPT-4, Claude, and Gemini are commonly used as the backbone.
  - **[[Tool Use]] / [[Function Calling]]** — structured interfaces that allow the model to invoke external capabilities: web search, code interpreters, database queries, REST APIs, file I/O.
  - **[[Model Context Protocol]]** (MCP) — an open protocol standardising how agents discover and invoke tools, reducing per-integration engineering overhead.
  - **[[Memory Management]]**:
    - *In-context (working) memory* — the current prompt/context window, bounded by the model's context length.
    - *Episodic memory* — past steps and observations stored in a [[Vector Database]] and retrieved via [[Retrieval-Augmented Generation]].
    - *Semantic memory* — curated factual knowledge in structured stores or knowledge graphs.
    - *Procedural memory* — distilled patterns and preferences encoded in fine-tuned weights or system prompts.
  - **[[Task Planning]]** — decomposition of a high-level goal into a sequence or DAG of sub-tasks. Techniques include chain-of-thought prompting, tree-of-thoughts, and MCTS-based planners.
  - **[[Chain of Thought]]** — the extended reasoning traces that allow agents to externalise intermediate reasoning steps, improving reliability and debuggability.
  - **[[Orchestration]]** — the coordination layer that routes sub-tasks between agents, manages concurrency, handles failures, and aggregates results.
  - **[[Tool Registry]]** — a catalogue of available tools with schemas, enabling the model to select and parameterise appropriate actions dynamically.

- ### Architectural Patterns
  - **Single-agent loop** — one model instance with access to many tools; simplest pattern, highest coherence, limited parallelism.
  - **Hierarchical orchestration** — a planner (or orchestrator) model decomposes tasks and delegates to specialist worker agents; each worker operates within a narrower scope.
  - **Peer-to-peer multi-agent** — multiple agents negotiate, critique, or verify each other's outputs; used in debate, reflection, and red-team architectures.
  - **Swarm architectures** — large numbers of lightweight agents operating in parallel on independent sub-tasks, aggregated by a reducer agent.
  - **Human-in-the-loop checkpoints** — deliberate pauses for human review before irreversible actions (financial transactions, deployment commands, email sends).
  - **ReAct pattern** — interleaving Reasoning (chain-of-thought) and Acting (tool calls) within a single generation, enabling adaptive planning.
  - **Reflexion / self-critique** — agents evaluate their own outputs against success criteria and self-revise before committing results.

- ### Applications / Use Cases
  - **Software engineering automation** — agents that can read repositories, write code, run tests, interpret failures, and open pull requests with minimal human direction ([[Software Engineering Automation]]).
  - **Research assistance** — autonomous literature review, hypothesis generation, experimental design, and results summarisation using web search and code execution tools.
  - **Data analysis pipelines** — agents that query databases, generate and execute analytical code, interpret results, and produce reports iteratively.
  - **Customer support automation** — multi-step support workflows where the agent retrieves customer records, queries knowledge bases, and resolves tickets end-to-end.
  - **Enterprise workflow automation** — replacing [[Robotic Process Automation]] scripts with adaptive agents that handle exceptions without hard-coded rules.
  - **Scientific discovery** — agentic systems piloting wet-lab robots, analysing experimental data, and suggesting next experiments (bridging to [[Digital Twin]] simulation environments).
  - **Personal AI assistants** — long-running agents that manage calendars, draft communications, track tasks, and proactively surface relevant information.
  - **Cybersecurity** — red-team agents that enumerate attack surfaces, exploit vulnerabilities in sandboxed environments, and report findings.

- ### Safety and Reliability
  - Agentic AI introduces qualitatively new safety considerations relative to conversational AI because agents can take real-world actions with irreversible consequences.
  - **Minimal-footprint principle** — agents should request only the permissions needed for the current step, prefer reversible actions, and avoid acquiring resources or capabilities beyond task scope. This is central to [[AI Safety]] guidance from Anthropic and others.
  - **Scope-bounded permissions** — sandboxed execution environments, OAuth scopes limited to task context, and principle-of-least-privilege tooling.
  - **Prompt injection** — a key attack vector where malicious content in tool outputs or retrieved documents causes the agent to deviate from its objective or exfiltrate data.
  - **Cascading failures** — in multi-agent systems, an error in one agent can propagate; robust orchestrators implement circuit-breakers and fallback strategies.
  - **Evaluation** — assessing agentic systems requires task-completion benchmarks measuring both goal achievement and environmental side-effects, not just output quality; benchmarks such as SWE-Bench, WebArena, and AgentBench are widely used.
  - **[[AI Alignment]]** — ensuring the agent pursues the user's actual intent rather than a misspecified proxy objective, especially over long horizons where goal drift can compound.
  - **[[Human-in-the-Loop]]** — deliberate checkpoints that pause autonomous execution for human confirmation before high-stakes actions.

- ### Relationships
  - requires:: [[Large Language Models]]
  - requires:: [[Tool Use]]
  - requires:: [[Memory Management]]
  - requires:: [[Task Planning]]
  - hasPart:: [[Agent Loop]]
  - hasPart:: [[Tool Registry]]
  - hasPart:: [[Working Memory]]
  - enables:: [[Autonomous Agent]]
  - enables:: [[Multi-Agent System]]
  - enables:: [[Workflow Automation]]
  - enables:: [[Software Engineering Automation]]
  - dependsOn:: [[Foundation Models]]
  - dependsOn:: [[Vector Database]]
  - dependsOn:: [[Retrieval-Augmented Generation]]
  - uses:: [[Function Calling]]
  - uses:: [[Chain of Thought]]
  - uses:: [[Reinforcement Learning]]
  - uses:: [[Model Context Protocol]]
  - contrastsWith:: [[Conversational AI]]
  - contrastsWith:: [[Reactive System]]
  - supports:: [[Human-in-the-Loop]]
  - supports:: [[AI Safety]]
  - relatedTo:: [[AI Agents]]
  - relatedTo:: [[Orchestration]]
  - relatedTo:: [[Prompt Engineering]]
  - relatedTo:: [[AI Alignment]]
  - bridges-to:: [[Robotic Process Automation]]
  - bridges-to:: [[Digital Twin]]

- ### Standards & Context
  - **Model Context Protocol (MCP)** — open protocol from Anthropic (2024) for standardising agent–tool integration, now adopted across major frameworks including LangChain, LlamaIndex, and Claude Code.
  - **OpenAI Assistants API** — a hosted agentic runtime providing thread management, tool registration, and file access for building agents on GPT-4-class models.
  - **LangGraph / LangChain** — widely adopted open-source frameworks for constructing stateful agent graphs, defining tool-calling loops, and managing multi-agent topologies.
  - **AutoGen (Microsoft)** — a framework for orchestrating conversational multi-agent systems with support for human-in-the-loop and group-chat patterns.
  - **CrewAI** — a higher-level framework for role-based multi-agent crews, abstracting orchestration and delegation patterns.
  - **ReAct (Yao et al., 2022)** — seminal paper establishing the Reasoning + Acting prompting pattern that underpins most agentic loops.
  - **EU AI Act (2024)** — regulatory context: agentic AI systems operating with high autonomy in high-risk domains may be classified as high-risk AI systems requiring conformity assessment.
  - **NIST AI RMF** — the US AI Risk Management Framework provides guidance on evaluating and governing agentic AI deployments, especially regarding autonomy and accountability.

- ### Semantic Classification
  - owl-class:: agentic-ai:Agentic AI
  - owl-role:: Concept

- ### Provenance
  - sources:: Anthropic Model Specification; OpenAI Assistants documentation; ReAct paper (Yao et al. 2022); SWE-Bench benchmark; AgentBench; EU AI Act 2024; NIST AI RMF
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
