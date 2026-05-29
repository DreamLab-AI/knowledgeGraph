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
  "definition": "An agentic workflow is a structured pattern of autonomous agent behaviour in which an AI model iteratively plans, executes tool calls, observes results, and revises its approach until a goal is achieved or a stopping condition is met. Unlike single-pass inference, agentic workflows employ loops, branching logic, memory, and multi-step reasoning that may span seconds to hours and involve multiple specialised sub-agents. The pattern emerged from large language model capabilities (tool use, function calling, long context) and underlies systems such as AutoGPT, LangGraph, Claude's computer use, and OpenAI's Agents SDK.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:workflow-automation", "label": "Workflow Automation"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:tool-use", "label": "Tool Use"},
      {"@id": "urn:ngm:class:function-calling", "label": "Function Calling"},
      {"@id": "urn:ngm:class:reasoning", "label": "Reasoning"},
      {"@id": "urn:ngm:class:chain-of-thought", "label": "Chain of Thought"},
      {"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:agentic-ai", "label": "Agentic AI"},
      {"@id": "urn:ngm:class:multi-agent-systems", "label": "Multi-Agent Systems"},
      {"@id": "urn:ngm:class:agent-frameworks", "label": "Agent Frameworks"},
      {"@id": "urn:ngm:class:orchestration", "label": "Orchestration"},
      {"@id": "urn:ngm:class:planning-and-scheduling", "label": "Planning and Scheduling"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-agent-system", "label": "AI Agent System"},
      {"@id": "urn:ngm:class:task-planning", "label": "Task Planning"},
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:context-window", "label": "Context Window"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - An agentic workflow is an iterative, goal-directed execution pattern in which an AI agent autonomously plans actions, invokes tools, processes observations, and loops until a task is complete — enabling complex multi-step automation beyond single-turn inference.
- ### Relationships
  - Agentic Workflow is a subclass of [[Workflow Automation]], extending it with autonomous decision-making. It depends on [[Tool Use]], [[Function Calling]], [[Reasoning]], [[Chain of Thought]], and [[Prompt Engineering]] as core mechanisms, and requires adequate [[Context Window]] capacity and [[Large Language Models]] as the reasoning substrate. It relates closely to [[Agentic AI]], [[Multi-Agent Systems]], [[Agent Frameworks]], [[Orchestration]], and [[Planning and Scheduling]]. It enables the realisation of [[AI Agent System]] architectures, [[Task Planning]] capabilities, and [[Retrieval-Augmented Generation]] loops.
- ### Content
  - The term "agentic workflow" gained traction in 2023–2024 as large language models demonstrated sufficient tool-use and long-context capabilities to sustain coherent action over many inference steps. The core loop involves: (1) receiving a goal or user instruction, (2) generating a plan or selecting the next action, (3) executing a tool call (web search, code interpreter, file system, API, etc.), (4) receiving and parsing the result, and (5) deciding whether the goal is met or further steps are required. This loop can be nested within multi-agent architectures where specialist sub-agents handle specific subtasks.

  - Several design patterns have been codified within agentic workflow frameworks. The ReAct (Reasoning + Acting) pattern interleaves chain-of-thought reasoning steps with explicit action invocations, improving transparency and error recovery. Plan-and-Execute separates high-level planning (which produces a task graph) from step-wise execution, allowing the plan to be revised in light of observations. Reflection patterns add a self-critique step after each action, enabling agents to catch and correct errors before they cascade. These patterns are now standard in frameworks including LangGraph, CrewAI, AutoGen, and Anthropic's Claude toolset.

  - Agentic workflows introduce challenges that differ qualitatively from single-turn inference. Error compounding is the primary concern: a mistake in step three of a thirty-step workflow may not manifest as an observable failure until much later, at which point recovery is expensive. This drives investment in agent evaluation frameworks, step-level logging, and human-in-the-loop checkpoint systems. Prompt injection — where hostile content in tool outputs hijacks the agent's subsequent actions — is an active security research area specific to agentic contexts.

  - Commercially, agentic workflows underpin a new generation of software products as of 2024–2025. Coding assistants (Devin, GitHub Copilot Workspace, Cursor) run agentic loops to write, test, debug, and refactor code autonomously. Customer-support agents handle multi-turn resolution workflows. Research agents traverse the web, synthesise sources, and produce structured reports. Enterprise deployments commonly pair agentic workflows with retrieval-augmented generation to ground agent reasoning in proprietary data and reduce hallucination risk.

  - The boundary between agentic workflows and traditional software automation (RPA, workflow orchestration tools like Airflow or Temporal) is actively debated. The key differentiators are adaptive planning — the agent can handle novel situations not explicitly pre-programmed — and natural language interfaces that remove the need for rigid schema definitions. As AI reliability improves, expectations for autonomous task completion rates in production agentic systems have moved from roughly 20–30% (2023 baselines) toward 50–70% on well-scoped software engineering tasks by early 2025, with rapid ongoing improvement.
