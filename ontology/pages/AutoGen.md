public:: true

# AutoGen
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fdfae3b111eba7caa003037ec66843a4aa28054a6e319fa06058fd04e124ca3a",
  "@type": "Page",
  "vc:slug": "auto-gen",
  "title": "AutoGen",
  "vc:public": true,
  "vc:outboundWikilinks": [
    { "@id": "urn:visionflow:linked:language-model", "vc:label": "Language Model" },
    { "@id": "urn:visionflow:linked:tool-use", "vc:label": "Tool Use" },
    { "@id": "urn:visionflow:linked:multi-agent-coordination", "vc:label": "Multi-Agent Coordination" },
    { "@id": "urn:visionflow:linked:agentic-workflow", "vc:label": "Agentic Workflow" },
    { "@id": "urn:visionflow:linked:ai-agent", "vc:label": "AI Agent" },
    { "@id": "urn:visionflow:linked:function-calling", "vc:label": "Function Calling" },
    { "@id": "urn:visionflow:linked:multi-agent-systems", "vc:label": "Multi-Agent Systems" },
    { "@id": "urn:visionflow:linked:large-language-models", "vc:label": "Large Language Models" },
    { "@id": "urn:visionflow:linked:agent-frameworks", "vc:label": "Agent Frameworks" },
    { "@id": "urn:visionflow:linked:orchestration", "vc:label": "Orchestration" },
    { "@id": "urn:visionflow:linked:autonomous-agent", "vc:label": "Autonomous Agent" },
    { "@id": "urn:visionflow:linked:code-execution", "vc:label": "Code Execution" },
    { "@id": "urn:visionflow:linked:human-in-the-loop", "vc:label": "Human-in-the-Loop" },
    { "@id": "urn:visionflow:linked:task-planning", "vc:label": "Task Planning" },
    { "@id": "urn:visionflow:linked:crewai", "vc:label": "CrewAI" },
    { "@id": "urn:visionflow:linked:langgraph", "vc:label": "LangGraph" },
    { "@id": "urn:visionflow:linked:openai-agents-sdk", "vc:label": "OpenAI Agents SDK" },
    { "@id": "urn:visionflow:linked:model-context-protocol", "vc:label": "Model Context Protocol" },
    { "@id": "urn:visionflow:linked:retrieval-augmented-generation", "vc:label": "Retrieval-Augmented Generation" },
    { "@id": "urn:visionflow:linked:chain-of-thought", "vc:label": "Chain of Thought" },
    { "@id": "urn:visionflow:linked:autonomous-coding", "vc:label": "Autonomous Coding" },
    { "@id": "urn:visionflow:linked:ai-safety", "vc:label": "AI Safety" },
    { "@id": "urn:visionflow:linked:prompt-injection", "vc:label": "Prompt Injection" },
    { "@id": "urn:visionflow:linked:agentic-ai", "vc:label": "Agentic AI" },
    { "@id": "urn:visionflow:linked:semantic-kernel", "vc:label": "Semantic Kernel" },
    { "@id": "urn:visionflow:linked:distributed-systems", "vc:label": "Distributed Systems" },
    { "@id": "urn:visionflow:linked:agent-memory", "vc:label": "Agent Memory" },
    { "@id": "urn:visionflow:linked:reinforcement-learning", "vc:label": "Reinforcement Learning" },
    { "@id": "urn:visionflow:linked:workflow-automation", "vc:label": "Workflow Automation" },
    { "@id": "urn:visionflow:linked:software-engineering", "vc:label": "Software Engineering" },
    { "@id": "urn:visionflow:linked:natural-language-processing", "vc:label": "Natural Language Processing" },
    { "@id": "urn:visionflow:linked:context-window", "vc:label": "Context Window" },
    { "@id": "urn:visionflow:linked:swe-bench", "vc:label": "SWE-bench" },
    { "@id": "urn:visionflow:linked:metagpt", "vc:label": "MetaGPT" },
    { "@id": "urn:visionflow:linked:single-agent-systems", "vc:label": "Single-Agent Systems" },
    { "@id": "urn:visionflow:linked:eu-ai-act", "vc:label": "EU AI Act" },
    { "@id": "urn:visionflow:linked:api-integration", "vc:label": "API Integration" },
    { "@id": "urn:visionflow:linked:microsoft-azure", "vc:label": "Microsoft Azure" },
    { "@id": "urn:visionflow:linked:re-act-pattern", "vc:label": "ReAct Pattern" },
    { "@id": "urn:visionflow:linked:actor-model", "vc:label": "Actor Model" }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    { "vc:key": "preferred-term", "vc:value": "AutoGen" }
  ],
  "prov:wasAttributedTo": { "@id": "did:nostr:jjohare" },
  "prov:generatedAtTime": { "@value": "2026-05-29T00:00:00Z", "@type": "xsd:dateTime" }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:auto-gen",
  "@type": "Class",
  "label": "AutoGen",
  "definition": "AutoGen is an open-source multi-agent conversation framework originating from Microsoft Research that defines conversable agents — autonomous entities backed by large language models, tools, or human inputs — which coordinate through structured message exchange to decompose and complete complex tasks. The framework introduced the conversable-agent abstraction as a unified primitive supporting LLM-powered reasoning, code execution, and adaptive human participation within a single coherent programming model. Forked in 2025 as the community-governed AG2 project and simultaneously merged by Microsoft into the broader Microsoft Agent Framework combining AutoGen agent abstractions with Semantic Kernel enterprise features.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.87,
  "subClassOf": [
    { "@id": "urn:ngm:class:multi-agent-systems", "label": "Multi-Agent Systems" },
    { "@id": "urn:ngm:class:agent-frameworks", "label": "Agent Frameworks" }
  ],
  "relations": {
    "hasPart": [
      { "@id": "urn:ngm:class:conversable-agent", "label": "Conversable Agent" },
      { "@id": "urn:ngm:class:group-chat", "label": "Group Chat" },
      { "@id": "urn:ngm:class:code-executor", "label": "Code Executor" }
    ],
    "requires": [
      { "@id": "urn:ngm:class:language-model", "label": "Language Model" },
      { "@id": "urn:ngm:class:tool-use", "label": "Tool Use" },
      { "@id": "urn:ngm:class:function-calling", "label": "Function Calling" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:multi-agent-coordination", "label": "Multi-Agent Coordination" },
      { "@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow" },
      { "@id": "urn:ngm:class:autonomous-coding", "label": "Autonomous Coding" },
      { "@id": "urn:ngm:class:task-planning", "label": "Task Planning" }
    ],
    "contrastsWith": [
      { "@id": "urn:ngm:class:langgraph", "label": "LangGraph" },
      { "@id": "urn:ngm:class:crewai", "label": "CrewAI" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:semantic-kernel", "label": "Semantic Kernel" },
      { "@id": "urn:ngm:class:model-context-protocol", "label": "Model Context Protocol" }
    ]
  },
  "quality": 0.87,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-20T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:auto-gen:c13155c197f7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fdfae3b111eba7caa003037ec66843a4aa28054a6e319fa06058fd04e124ca3a"
  },
  "vc:resolutions": [
    { "raw": "[[Language Model]]", "resolved": "urn:visionflow:linked:language-model", "kind": "ResolvedLink" },
    { "raw": "[[Tool Use]]", "resolved": "urn:visionflow:linked:tool-use", "kind": "ResolvedLink" },
    { "raw": "[[Multi-Agent Coordination]]", "resolved": "urn:visionflow:linked:multi-agent-coordination", "kind": "StubLink" },
    { "raw": "[[Agentic Workflow]]", "resolved": "urn:visionflow:linked:agentic-workflow", "kind": "ResolvedLink" },
    { "raw": "[[AI Agent]]", "resolved": "urn:visionflow:linked:ai-agent", "kind": "ResolvedLink" },
    { "raw": "[[Function Calling]]", "resolved": "urn:visionflow:linked:function-calling", "kind": "ResolvedLink" },
    { "raw": "[[Multi-Agent Systems]]", "resolved": "urn:visionflow:linked:multi-agent-systems", "kind": "ResolvedLink" },
    { "raw": "[[Large Language Models]]", "resolved": "urn:visionflow:linked:large-language-models", "kind": "ResolvedLink" },
    { "raw": "[[Agent Frameworks]]", "resolved": "urn:visionflow:linked:agent-frameworks", "kind": "ResolvedLink" },
    { "raw": "[[Orchestration]]", "resolved": "urn:visionflow:linked:orchestration", "kind": "ResolvedLink" },
    { "raw": "[[Autonomous Agent]]", "resolved": "urn:visionflow:linked:autonomous-agent", "kind": "ResolvedLink" },
    { "raw": "[[Code Execution]]", "resolved": "urn:visionflow:linked:code-execution", "kind": "StubLink" },
    { "raw": "[[Human-in-the-Loop]]", "resolved": "urn:visionflow:linked:human-in-the-loop", "kind": "ResolvedLink" },
    { "raw": "[[Task Planning]]", "resolved": "urn:visionflow:linked:task-planning", "kind": "ResolvedLink" },
    { "raw": "[[CrewAI]]", "resolved": "urn:visionflow:linked:crewai", "kind": "StubLink" },
    { "raw": "[[LangGraph]]", "resolved": "urn:visionflow:linked:langgraph", "kind": "StubLink" },
    { "raw": "[[OpenAI Agents SDK]]", "resolved": "urn:visionflow:linked:openai-agents-sdk", "kind": "StubLink" },
    { "raw": "[[Model Context Protocol]]", "resolved": "urn:visionflow:linked:model-context-protocol", "kind": "ResolvedLink" },
    { "raw": "[[Retrieval-Augmented Generation]]", "resolved": "urn:visionflow:linked:retrieval-augmented-generation", "kind": "ResolvedLink" },
    { "raw": "[[Chain of Thought]]", "resolved": "urn:visionflow:linked:chain-of-thought", "kind": "ResolvedLink" },
    { "raw": "[[Autonomous Coding]]", "resolved": "urn:visionflow:linked:autonomous-coding", "kind": "ResolvedLink" },
    { "raw": "[[AI Safety]]", "resolved": "urn:visionflow:linked:ai-safety", "kind": "ResolvedLink" },
    { "raw": "[[Prompt Injection]]", "resolved": "urn:visionflow:linked:prompt-injection", "kind": "ResolvedLink" },
    { "raw": "[[Agentic AI]]", "resolved": "urn:visionflow:linked:agentic-ai", "kind": "ResolvedLink" },
    { "raw": "[[Semantic Kernel]]", "resolved": "urn:visionflow:linked:semantic-kernel", "kind": "StubLink" },
    { "raw": "[[Distributed Systems]]", "resolved": "urn:visionflow:linked:distributed-systems", "kind": "ResolvedLink" },
    { "raw": "[[Agent Memory]]", "resolved": "urn:visionflow:linked:agent-memory", "kind": "ResolvedLink" },
    { "raw": "[[Reinforcement Learning]]", "resolved": "urn:visionflow:linked:reinforcement-learning", "kind": "ResolvedLink" },
    { "raw": "[[Workflow Automation]]", "resolved": "urn:visionflow:linked:workflow-automation", "kind": "ResolvedLink" },
    { "raw": "[[Software Engineering]]", "resolved": "urn:visionflow:linked:software-engineering", "kind": "StubLink" },
    { "raw": "[[Natural Language Processing]]", "resolved": "urn:visionflow:linked:natural-language-processing", "kind": "ResolvedLink" },
    { "raw": "[[Context Window]]", "resolved": "urn:visionflow:linked:context-window", "kind": "ResolvedLink" },
    { "raw": "[[SWE-bench]]", "resolved": "urn:visionflow:linked:swe-bench", "kind": "StubLink" },
    { "raw": "[[MetaGPT]]", "resolved": "urn:visionflow:linked:metagpt", "kind": "StubLink" },
    { "raw": "[[Single-Agent Systems]]", "resolved": "urn:visionflow:linked:single-agent-systems", "kind": "StubLink" },
    { "raw": "[[EU AI Act]]", "resolved": "urn:visionflow:linked:eu-ai-act", "kind": "ResolvedLink" },
    { "raw": "[[API Integration]]", "resolved": "urn:visionflow:linked:api-integration", "kind": "StubLink" },
    { "raw": "[[Microsoft Azure]]", "resolved": "urn:visionflow:linked:microsoft-azure", "kind": "StubLink" },
    { "raw": "[[ReAct Pattern]]", "resolved": "urn:visionflow:linked:re-act-pattern", "kind": "ResolvedLink" },
    { "raw": "[[Actor Model]]", "resolved": "urn:visionflow:linked:actor-model", "kind": "StubLink" }
  ],
  "prov:wasAttributedTo": { "@id": "did:nostr:enrichment-swarm" },
  "prov:generatedAtTime": { "@value": "2026-06-20T00:00:00Z", "@type": "xsd:dateTime" }
}
```


- ### Definition
  - AutoGen is an open-source [[Multi-Agent Systems]] framework originating from Microsoft Research that defines the conversable-agent abstraction — a unified primitive in which an [[Autonomous Agent]] may be backed by a [[Large Language Models]], a deterministic tool, human input, or any combination thereof — and coordinates such agents through structured message exchange to decompose and complete tasks of arbitrary complexity. First published in August 2023 (arXiv:2308.08155) by Wu, Bansal, Zhang et al. at Microsoft, AutoGen established the group-chat metaphor as the dominant interaction pattern for orchestrating multi-agent pipelines: agents participate in a shared conversation thread, a configurable selector determines turn order, each participant may generate natural-language replies, invoke [[Function Calling]] schemas, or emit code for external execution, and the conversation continues until a task termination condition is met. The framework's defining design choice — making every participant in a multi-agent system a first-class conversable entity capable of adaptive participation — eliminated the rigid producer-consumer distinctions that characterised earlier pipeline approaches and enabled flexible hybrid patterns in which [[AI Agent]] entities hand off sub-tasks, critique each other's outputs, execute and verify code, and escalate specific decisions to [[Human-in-the-Loop]] review within a single unified conversation graph. AutoGen gained rapid adoption across academic benchmarks and enterprise pilots, reaching over 38,000 GitHub stars by early 2025 and accumulating over 20,000 citations in the year following its release. In late 2024 and early 2025, the framework underwent a significant governance and architectural bifurcation: the original creators Chi Wang and Qingyun Wu departed Microsoft to establish AG2 — a community-governed fork maintaining the familiar conversable-agent architecture of AutoGen 0.2 with backward compatibility as a primary goal — while Microsoft pursued a complete architectural reimagining in AutoGen 0.4 built on the [[Actor Model]] for distributed, event-driven, async-first execution with enterprise-grade observability, subsequently merging AutoGen's agent abstractions with [[Semantic Kernel]]'s session management and middleware infrastructure into the Microsoft Agent Framework. Both branches continue active development in 2026, with AG2's v0.9 release introducing a unified Group Chat pattern that consolidates previously separate swarm, group-chat, and sequential-chat primitives into a single extensible orchestration substrate.

- ### Semantic Classification
  - owl-class:: ai:AutoGen
  - owl-role:: Framework | AgentOrchestrator | ExecutableProtocol
  - owl-inferred:: ai:AgentFramework, ai:MultiAgentSystem, ai:WorkflowAutomationTool
  - belongs-to-domain:: [[Agentic AI]]
  - implemented-in-layer:: [[Multi-Agent Systems]]

- ### Relationships
  - is-subclass-of:: [[Multi-Agent Systems]], [[Agent Frameworks]]
  - has-part:: [[Orchestration]], [[Human-in-the-Loop]], [[Code Execution]], [[Agent Memory]]
  - requires:: [[Large Language Models]], [[Tool Use]], [[Function Calling]], [[Context Window]]
  - enables:: [[Multi-Agent Coordination]], [[Agentic Workflow]], [[Autonomous Coding]], [[Task Planning]], [[Workflow Automation]]
  - implements:: [[ReAct Pattern]], [[Agentic Workflow]]
  - depends-on:: [[API Integration]], [[Language Model]], [[Actor Model]]
  - supports:: [[Human-in-the-Loop]], [[AI Safety]], [[Retrieval-Augmented Generation]]
  - uses:: [[Chain of Thought]], [[Natural Language Processing]], [[Model Context Protocol]]
  - contrasts-with:: [[LangGraph]], [[CrewAI]], [[OpenAI Agents SDK]], [[MetaGPT]], [[Single-Agent Systems]]
  - related-to:: [[Agentic AI]], [[AI Agent]], [[Autonomous Agent]], [[Software Engineering]], [[SWE-bench]], [[Semantic Kernel]], [[Microsoft Azure]]
  - standardized-by:: [[EU AI Act]], [[Model Context Protocol]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:hasPart ai:ConversableAgent))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:hasPart ai:GroupChat))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:hasPart ai:CodeExecutor))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:hasPart ai:Orchestration))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:hasPart ai:AgentMemory))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:hasPart ai:HumanInTheLoop))
  ## Dependency Relationships
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:requires ai:LargeLanguageModels))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:requires ai:ToolUse))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:requires ai:FunctionCalling))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:requires ai:ContextWindow))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:dependsOn ai:APIIntegration))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:dependsOn ai:ActorModel))
  ## Capability Relationships
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:enables ai:MultiAgentCoordination))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:enables ai:AgenticWorkflow))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:enables ai:AutonomousCoding))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:enables ai:TaskPlanning))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:enables ai:WorkflowAutomation))
  ## Implementation Relationships
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:implements ai:ReActPattern))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:implements ai:AgenticWorkflow))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:implements ai:MultiAgentSystems))
  ## Reduction Relationships
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:reducesTo ai:ConversableAgent))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:reducesTo ai:GroupChat))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:reducesTo ai:LargeLanguageModels))
  ## Support Relationships
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:supports ai:HumanInTheLoop))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:supports ai:AISafety))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:supports ai:RetrievalAugmentedGeneration))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:supports ai:WorkflowAutomation))
  ## Usage Relationships
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:uses ai:ChainOfThought))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:uses ai:NaturalLanguageProcessing))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:uses ai:ModelContextProtocol))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:uses ai:ContextWindow))
  ## Contrast Relationships
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:contrastsWith ai:LangGraph))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:contrastsWith ai:CrewAI))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:contrastsWith ai:SingleAgentSystems))
      SubClassOf(ai:AutoGen
        ObjectSomeValuesFrom(ai:contrastsWith ai:OpenAIAgentsSDK))

  ## About

  AutoGen emerged in 2023 from Microsoft Research as a direct response to the engineering friction of building reliable multi-agent systems with [[Large Language Models]]. Prior frameworks treated multi-agent coordination as a configuration problem — the developer would wire together chains of prompts, APIs, and deterministic functions, with each component playing a fixed producer or consumer role. AutoGen's foundational insight was that if every participant in a multi-agent pipeline is itself a conversable entity — capable of generating, receiving, and responding to messages using its own reasoning process — the pipeline topology becomes a property of the conversation rather than a property of the framework's wiring. This shift from topological composition to conversational composition produced three immediate engineering advantages: agents can be added to, removed from, or reconfigured within a conversation at runtime; human participants can be inserted at arbitrary points without framework-level modifications; and the conversation log becomes a self-documenting audit trail of multi-agent reasoning rather than an opaque sequence of function calls.

  The foundational paper (Wu et al., arXiv:2308.08155) demonstrated AutoGen across six benchmark application domains: mathematics (multi-step problem solving with code verification), coding (multi-turn code generation and execution with critic feedback), question answering (retrieval-augmented reasoning), operations research (constraint optimisation with tool use), online decision-making (web interaction tasks), and entertainment (role-play and creative writing). In all six domains, the AutoGen multi-agent configuration outperformed single-agent baselines, with the mathematics and coding domains showing the largest margins: 60% relative improvement over GPT-4 alone on the MATH dataset when augmenting with a code executor and critic agent, and 69.7% pass@1 on HumanEval coding benchmarks versus 67.0% for single-agent GPT-4. These results established that structured multi-agent conversation was not merely an architectural novelty but a measurable performance lever even on tasks where frontier [[Large Language Models]] already performed well.

  The framework's architecture centres on the ConversableAgent class, which implements a standardised messaging interface: every agent exposes a `generate_reply` method that accepts a conversation history and returns a message. The message may contain natural language, structured data, code blocks for execution, or special control tokens that trigger framework-level actions (terminating the conversation, routing to a specific agent, requesting human input). Two-agent chats — the simplest composition pattern — pair an AssistantAgent (LLM-backed) with a UserProxyAgent (human or automated), with the UserProxy automatically executing code emitted by the assistant and feeding results back. This simple two-agent pattern, which requires only a handful of lines of Python, covers the majority of practical single-task automation scenarios and was the entry point through which most practitioners first encountered AutoGen. Group chats extend this to three or more agents with a GroupChatManager selecting the next speaker via a configurable strategy (round-robin, LLM-based selection, custom selector logic), enabling the planner-coder-critic patterns that become necessary for complex multi-step tasks.

  ## Components / Architecture

  **ConversableAgent** — the base abstraction for every participant in an AutoGen system. A ConversableAgent maintains a system prompt defining its role and capabilities, a list of registered tools or functions it can invoke, a conversation history buffer, and a configurable human-input mode (ALWAYS, NEVER, or TERMINATE). The agent's `generate_reply` method dispatches to a configured LLM backend, a function executor, or a human input prompt depending on the incoming message and configuration. All other agent types in AutoGen are specialisations of ConversableAgent: AssistantAgent (LLM-backed, code generation focused), UserProxyAgent (human or automated proxy, code execution focused), and application-specific custom agents.

  **GroupChat and GroupChatManager** — the primary multi-agent coordination primitive. A GroupChat instance holds a list of participating agents and a shared conversation history; the GroupChatManager selects the next speaker using one of three built-in strategies: round-robin (for pipelines), auto (LLM-based dynamic selection from eligible agents), or a user-supplied callable. The AG2 v0.9 release (April 2025) consolidated previously separate swarm and group-chat primitives into a unified extensible GroupChat architecture with support for swarm-style handoffs within the group-chat framework, eliminating the need to choose an orchestration pattern at the framework level rather than at the application level. The v0.9 release also introduced context variables — typed shared state accessible to all agents in a group chat — enabling agents to read and write structured data without passing it through natural-language messages.

  **Code Executor** — the component responsible for executing code emitted by LLM-backed agents in a sandboxed environment and returning stdout, stderr, and exit codes as subsequent messages in the conversation. AutoGen supports Docker-based execution (isolated container environment per conversation), local subprocesses with configurable working directories, and Jupyter kernel execution for interactive data analysis. Code execution is the feature most responsible for AutoGen's strong performance on coding and mathematics benchmarks: rather than relying on the LLM to compute results in its forward pass, the code executor grounds arithmetic, data manipulation, and algorithm execution in a deterministic runtime, dramatically reducing hallucination on quantitative tasks. The AG2 2025 Shell tool integration with OpenAI's Responses API additionally enables agents to execute shell commands directly, enabling complete DevOps pipeline orchestration within a single agent workflow.

  **Tool Registry and [[Function Calling]]** — AutoGen integrates with the JSON-schema function-calling conventions of all major LLM providers (OpenAI, Anthropic, Google), allowing agents to invoke registered Python functions as structured tool calls rather than emitting ad-hoc code. Tools are registered on agents with type-annotated signatures, and the framework handles schema generation, call dispatch, result formatting, and conversation continuation. In 2025, AutoGen added first-class [[Model Context Protocol]] support, enabling agents to discover and invoke MCP-registered tools from any compatible server, dramatically expanding the tool ecosystem available to AutoGen-orchestrated agents.

  **[[Agent Memory]] and Context Management** — AutoGen's conversation history is the primary agent memory mechanism: all prior messages are available to each agent's `generate_reply` call, enabling agents to track multi-turn context, refer back to earlier results, and maintain coherent task state across many steps. For tasks that exceed the [[Context Window]] of the backing LLM, AutoGen supports configurable conversation summarisation (compressing older turns into a summary message) and [[Retrieval-Augmented Generation]] integration for persistent external memory. Structured context variables (introduced in v0.9) provide a typed shared memory outside the conversation thread for data that must be maintained with structure fidelity.

  **Event-Driven Architecture (AutoGen 0.4 / AG2 v0.5+)** — the 0.4 rewrite introduced an [[Actor Model]]-based distributed execution substrate where each agent is a stateful actor that processes incoming messages asynchronously, maintains its own message queue, and can be deployed across distributed infrastructure. This architecture enables horizontal scaling of individual agent types, persistent agents that run indefinitely processing task requests from a queue, and cross-language agent interoperability (Python and .NET agents in the same multi-agent system). The event-driven design is particularly significant for enterprise deployments where [[Orchestration]] of long-running agentic tasks must be decoupled from single-process lifetime and must survive infrastructure failures.

  ## Use Cases / Major Families

  **Autonomous Software Engineering** — AutoGen's most benchmarked application domain. Planner-coder-tester-critic four-agent configurations handle requirements decomposition, code generation, test execution, failure analysis, and iterative refinement within a single conversation. AutoGen-based agents contributed to state-of-the-art results on the [[SWE-bench]] benchmark (real GitHub issue resolution), demonstrating that conversational multi-agent coordination with code execution enables qualitatively better [[Autonomous Coding]] than single-pass code generation. The [[Software Engineering]] pipeline pattern — where an AssistantAgent generates code, a UserProxyAgent executes it and returns results, and the AssistantAgent iterates — is the canonical two-agent AutoGen deployment and the pattern documented in the original paper.

  **Scientific Research Workflows** — AutoGen has been applied to scientific domains including cosmological parameter inference (agents orchestrating code generation, [[Retrieval-Augmented Generation]]-based literature retrieval, and automated result verification), drug discovery literature synthesis, and clinical trial data analysis. The framework's ability to integrate specialist agents for domain knowledge (bio-chemistry expert agent), quantitative computation (code executor agent), and quality checking (critic agent) enables research automation workflows that would require weeks of human effort per cycle to complete in hours.

  **Enterprise Data and Analytics Automation** — multi-agent pipelines where a planner agent decomposes analytical tasks, data-retrieval agents query databases and APIs, computation agents execute statistical analysis code, and synthesis agents assemble results into structured reports. The structured output and code execution capabilities make AutoGen particularly well-suited to replacing human analysts on routine quantitative reporting tasks where the output format is known but the specific data pathway requires adaptive reasoning.

  **Conversational Product and Customer Service Agents** — AutoGen's group-chat pattern enables sophisticated multi-turn customer service deployments where specialist agents handle distinct query categories (billing, technical support, account management) within a coordinated conversation, with a routing agent selecting the appropriate specialist and a summary agent maintaining conversation continuity across handoffs. [[Human-in-the-Loop]] configuration allows seamless escalation to human agents when confidence falls below threshold.

  **Multi-Modal Research and Creative Pipelines** — AutoGen's extensible agent model supports non-textual modalities through tool registrations: image analysis agents call vision APIs, audio transcription agents call speech-to-text APIs, and document parsing agents handle PDF extraction, all feeding results into the shared conversation thread. This enables multi-modal pipelines for tasks such as automated document review (combining OCR, layout analysis, and semantic extraction agents), multimedia content analysis, and design critique (vision model agent + design expert agent + iteration agent).

  ## Academic Context

  AutoGen emerged from Microsoft Research's collaborative AI group and was presented as part of the broader wave of agentic AI frameworks that emerged alongside ReAct (Yao et al., 2022), Toolformer (Schick et al., 2023), and the availability of reliable [[Function Calling]] APIs from OpenAI and Anthropic. The foundational paper (Wu, Bansal, Zhang, Wu, Li, Zhu, Jiang, Zhang, Wang, 2023; arXiv:2308.08155) introduced and evaluated the multi-agent conversation paradigm, distinguishing AutoGen from earlier sequential pipeline frameworks (LangChain) and role-assignment frameworks ([[MetaGPT]]) through its flexible conversational topology model. The paper was among the most cited AI papers of 2023–2024, accumulating over 4,000 citations within the first year, and triggered substantial follow-on work characterising optimal multi-agent conversation patterns, failure modes, and comparison studies across frameworks.

  The AutoGen research group at Microsoft published several significant follow-on works. "EcoAssistant: Using LLM Assistant More Affordably and Accurately" (Zhang et al., 2023) demonstrated cost-efficient model-cascade configurations within AutoGen where simpler tasks route to cheaper models and complex tasks escalate to frontier models. "CAMEL: Communicative Agents for 'Mind' Exploration of Large Language Model Society" provided a related independently developed framework whose comparison with AutoGen illuminated the specific advantages of AutoGen's human-proxy design. "AgentCoder" (Huang et al., 2023) demonstrated specialised AutoGen configurations for competitive programming that achieved state-of-the-art performance on LeetCode-Hard problems through a programmer-test-designer-executor agent triplet configuration. The "MathChat" application study showed that AutoGen's conversational code execution pattern achieved 89.9% on the AMC 2022 competition relative to GPT-4 baseline of 67%, a 33% relative improvement attributable entirely to structured code execution and iterative correction within the conversation framework.

  The framework's research significance extends beyond its direct performance results to its role as an experimental platform for studying multi-agent AI behaviour. AutoGen conversations are fully loggable and replayable, enabling systematic study of failure modes, conversation topology effects, and agent interaction patterns. Research from the AutoGen team on "optimal agent count" found that performance on most tasks plateaus or decreases beyond three to five agents, due to coordination overhead and context saturation — a result with significant practical implications for production deployment design.

  ## Current Landscape (2026)

  The AutoGen/AG2 ecosystem in 2026 is bifurcated between two development paths that share a common intellectual heritage but have diverged in governance, architecture, and target use cases. The community-governed AG2 project (maintained at github.com/ag2ai/ag2 with over 40,000 GitHub stars by mid-2026) prioritises backward compatibility with AutoGen 0.2 patterns, making it the preferred migration path for teams with existing AutoGen deployments. AG2 v0.9 (April 2025) introduced the unified Group Chat architecture that consolidated swarm, group-chat, and sequential-chat primitives, context variables for typed shared state, and enhanced support for [[Model Context Protocol]] tool integration. AG2 Beta (late 2025) further added streaming responses, dependency injection for agent configuration, typed tools with Pydantic schema validation, and first-class test utilities — addressing the production observability gaps that had been a persistent critique of the AutoGen 0.2 architecture.

  Microsoft's path — now branded as the Microsoft Agent Framework (public preview, 2025) — combines AutoGen's conversable-agent model with [[Semantic Kernel]]'s enterprise features: session-based state management, middleware pipeline for authentication and logging, plugin architecture for tool registration, and telemetry integration with Azure Monitor and OpenTelemetry. The Microsoft Agent Framework adds graph-based workflow definition for explicit multi-agent [[Orchestration]] topologies, enabling AutoGen-style conversational coordination within explicitly specified agent graphs that can be visualised, versioned, and deployed as Azure AI services. Azure AI Foundry Agent Service reached general availability in May 2025, providing managed hosting for AutoGen-compatible agents with enterprise SLA, built-in audit logging, and [[Microsoft Azure]] identity integration.

  In the broader [[Agent Frameworks]] competitive landscape, AutoGen occupies a distinct position as the "group-chat-native" framework. Where [[LangGraph]] expresses agent topologies as explicit directed state graphs (best suited to workflows with well-defined branching conditions), and [[CrewAI]] assigns human-analogous role personas to agents (best suited to workflows where role specialisation is the primary coordination mechanism), AutoGen's group-chat metaphor is best suited to tasks where the optimal agent interaction sequence cannot be predetermined and must emerge from the conversation itself. This makes AutoGen particularly strong in research, debugging, and exploratory analysis workflows, and relatively less well-suited to high-volume production pipelines where deterministic routing and explicit audit trails are paramount requirements. The June 2025 framework adoption survey found AutoGen used by 34% of production multi-agent deployments, behind [[LangGraph]] (58%) but ahead of [[CrewAI]] (31%) and [[OpenAI Agents SDK]] (28%).

  ## UK Context

  AutoGen adoption in the UK spans academic research, enterprise deployment, and public-sector experimentation, driven by the framework's Python-native design, permissive MIT licence, and strong documentation.

  **Academic research:**
  - University of Edinburgh School of Informatics: AutoGen has been deployed in research automation pipelines for systematic literature review in natural language processing, with agent configurations including a search agent (querying Semantic Scholar and ArXiv), a screening agent (applying inclusion/exclusion criteria), an extraction agent (structured data extraction from PDF), and a synthesis agent (cross-document analysis). The Edinburgh group has published on the reliability and hallucination characteristics of AutoGen-based research pipelines.
  - Imperial College London Department of Computing: AutoGen is used in the AI4Health research programme for clinical data synthesis, with agent pipelines combining [[Retrieval-Augmented Generation]] over NHS clinical guidelines with code execution for statistical analysis and a human-in-the-loop checkpoint before any output intended for clinical decision support.
  - University of Manchester Department of Computer Science: Manchester's Data Science Institute uses AutoGen for automated exploratory data analysis in large bioinformatics datasets, deploying planner-coder-visualiser agent triplets that automatically generate, execute, and refine analysis code in response to research questions.
  - Alan Turing Institute: The Turing's Research Engineering Group has evaluated AutoGen against [[LangGraph]] and [[CrewAI]] for reproducibility and auditability in research automation, publishing guidance on agentic framework selection for academic research contexts (2025).

  **Industry and enterprise:**
  - London fintech cluster: multiple financial services firms (including insurtech and regtech startups in Level 39 and other London hubs) have adopted AutoGen for regulatory document analysis, deploying agent configurations that parse regulatory updates, identify affected internal processes, and draft compliance notes — a workflow pattern particularly suited to AutoGen's iterative document-plus-code execution model.
  - NHS Digital and NHS England: AutoGen-based pipelines are in pilot deployment for clinical coding assistance (ICD-10 code assignment from discharge summaries) and care pathway analysis. [[Human-in-the-Loop]] configuration is mandatory in all NHS clinical AI deployments under NHS AI Lab governance requirements.
  - Cambridge deep-tech ecosystem: several Cambridge University spinouts in materials science and drug discovery use AutoGen-orchestrated pipelines for hypothesis generation and literature synthesis, with the [[Retrieval-Augmented Generation]] integration enabling agents to ground reasoning in large proprietary document collections.
  - GCHQ / NCSC AI security research: public reports indicate UK national security research uses multi-agent frameworks including AutoGen for threat intelligence synthesis, security incident analysis, and vulnerability triage — with [[Human-in-the-Loop]] escalation as a constitutional requirement for all high-consequence recommendations.

  **Northern England industry presence:**
  - Leeds Data Science Cluster: AutoGen features in the Leeds Digital Festival AI track as a primary demonstration framework, with local firms in healthcare analytics and professional services using AutoGen for report generation and data quality automation.
  - Sheffield AMRC (Advanced Manufacturing Research Centre): AutoGen is evaluated for quality control workflows in aerospace component manufacturing, where multi-agent pipelines assess sensor data, query manufacturing specifications, and generate inspection reports — reducing cycle time versus manual analysis.
  - Newcastle Digital Institute: Research on [[Human-in-the-Loop]] design for agentic AI systems uses AutoGen as the primary experimental platform, with studies on the optimal frequency and granularity of human checkpoint placement in long-horizon agent workflows.

  ## Future Directions (2026-2030)

  **Persistent and long-running agents** — the AG2 and Microsoft Agent Framework teams are both investing in durable agent state management: agents that survive infrastructure restarts, model version upgrades, and multi-day task horizons while maintaining coherent goal tracking and conversation continuity. This requires state serialisation mechanisms, goal-drift detection (ensuring the agent's current behaviour remains aligned with the original task specification despite context evolution), and audit mechanisms that satisfy emerging regulatory requirements for AI decision traceability.

  **Cross-framework interoperability** — the [[Model Context Protocol]] is already enabling tool-level interoperability between AutoGen, [[LangGraph]], [[CrewAI]], and other frameworks. The next frontier is agent-level interoperability: an AutoGen AssistantAgent delegating sub-tasks to a LangGraph subgraph or a CrewAI crew, with structured handoff contracts defining the interface. The emerging OpenAPI-for-agents specification (under discussion in several open standards bodies) would provide the semantic contracts needed for reliable cross-framework delegation.

  **Formal safety and verification** — as AutoGen-based agents move into higher-stakes deployments (clinical decision support, financial recommendations, public-sector automation), formal verification of agent behaviour bounds — proving that certain action sequences are structurally impossible in a given configuration — will become a regulatory requirement. Research at Edinburgh, Imperial, and Manchester is developing formal methods approaches to multi-agent conversation system verification, adapting model-checking techniques to the conversational agent paradigm.

  **Adaptive agent composition** — rather than fixed agent configurations specified at deploy time, future systems will dynamically compose agent teams based on task characteristics: routing simple tasks to two-agent configurations, escalating to five-agent configurations for complex reasoning requirements, and spawning specialist agents on demand when unexpected domain requirements are encountered. This requires meta-agents that understand agent capabilities at an abstract level and can evaluate proposed configurations before committing to them.

  **Multimodal native group chats** — current AutoGen deployments handle multiple modalities through tool integrations, but future architectures will treat vision, audio, and document understanding as first-class message types within the conversation, enabling more natural multimodal workflows where agents exchange images, diagrams, and structured data alongside text without requiring modality-bridging tool calls.

  **Reinforcement learning from agent interaction** — [[Reinforcement Learning]] over multi-agent conversation trajectories, where successful conversation patterns (agent sequences that complete tasks reliably) are reinforced and failure patterns are penalised, offers a path toward agent configurations that improve through deployment experience without requiring labelled training data. Early research at Microsoft and academic groups is showing that even simple RL over conversation trajectory success signals produces measurable improvements in agent selector quality within GroupChat configurations.

  ## Failure Modes and Safety Engineering

  Multi-agent conversation systems introduce failure modes that are qualitatively different from single-agent systems and require dedicated engineering responses. Understanding these failure modes is essential for designing production-grade AutoGen deployments.

  **Context poisoning across agents** — each agent's generate_reply call receives the full conversation history, which means that an error or hallucination generated by one agent in an early turn propagates as ground truth to all subsequent agents. If the AssistantAgent incorrectly describes an API's return format in turn 3, the UserProxyAgent may write code assuming that format in turn 5, and a downstream synthesis agent may build conclusions on the incorrect result in turn 9. Unlike single-agent hallucination, which affects one output, cross-agent context poisoning compounds errors multiplicatively across the conversation. Mitigation requires step-level validation agents inserted at key points — a lightweight fact-checker agent that verifies factual claims against authoritative sources before allowing the conversation to proceed — and explicit marking of model-generated content as "to be verified" distinct from tool-execution results marked as "observed."

  **Unintended agent convergence** — in group-chat configurations using LLM-based speaker selection, agents can settle into local cooperation equilibria where a subset of agents engage in mutual agreement loops (each agreeing with the previous agent's output rather than providing independent critique), effectively reducing the multi-agent diversity benefit to a single-agent pattern. This pathological convergence is particularly common when agents are given system prompts that emphasise being helpful and collaborative without explicit instructions to challenge and critique. Mitigation requires explicitly assigning critic roles with system prompts that specify what to look for, mandatory critique turns in the conversation structure, and diversity penalties in the speaker-selection logic that reduce the probability of the same agent speaking consecutively.

  **Code execution security** — AutoGen's code executor is a powerful capability that is also a significant attack surface. If an LLM agent is manipulated through [[Prompt Injection]] in a retrieved document to emit malicious code, the UserProxyAgent will execute it in the configured sandboxed environment. Docker-based execution provides isolation at the container level; local subprocess execution provides minimal isolation. Beyond the injection risk, agents executing long-running or resource-intensive code (infinite loops, memory exhaustion, large file writes) can exhaust host resources without appropriate resource limits. Production AutoGen deployments require Docker-based execution with explicit resource limits (CPU, memory, network access, filesystem write scope), code review by a separate code-safety agent before execution, and timeout enforcement on all code execution calls.

  **Token budget exhaustion** — the shared conversation history grows with each turn, consuming tokens from the [[Context Window]] of every agent that receives it. In long group-chat conversations, the combined history may exceed the context window of less capable models in the group, causing them to either fail with context length errors or produce degraded output as earlier context is truncated. AutoGen's conversation summarisation mechanism addresses this but introduces summary quality dependency — the quality of summarisation (which is itself LLM-generated) becomes a reliability constraint on long conversations. Token budget exhaustion is managed by setting explicit maximum turn counts per conversation, triggering summarisation at defined thresholds, and partitioning long tasks into sub-conversations each within a comfortable context budget.

  **Non-deterministic group-chat orchestration** — when using LLM-based speaker selection (the "auto" strategy in GroupChatManager), the same task may follow different agent conversation paths on different runs, producing different outcomes. This non-determinism makes debugging, testing, and regulatory auditing challenging: it is difficult to reproduce a failure from logs when the conversation path that produced it cannot be reliably recreated. For production deployments requiring reproducibility, round-robin or rule-based speaker selection with deterministic transition logic is preferred over LLM-based dynamic selection, trading orchestration flexibility for operational predictability.

  **[[AI Safety]] and corrigibility** — in fully automated configurations (all agents configured with human_input_mode=NEVER), the multi-agent conversation can proceed to execute consequential actions (database writes, API calls with side effects, file system modifications) without any human oversight. The lack of corrigibility — the inability of a human to interrupt, redirect, or correct the system mid-execution — is a significant safety property for deployments involving irreversible actions. Production safety engineering for AutoGen requires identifying all tools that have irreversible effects, configuring those tools to require [[Human-in-the-Loop]] confirmation, implementing step-count budgets that trigger human review when exceeded, and providing explicit abort mechanisms that a supervising human can invoke to halt the conversation and roll back partial actions where possible.

  ## Programming Model and Ecosystem Integration

  AutoGen's Python programming model is designed to require minimal boilerplate for common patterns whilst remaining fully extensible for custom requirements. The ConversableAgent base class exposes clean extension points: `generate_reply_override` for custom generation logic; `register_reply` for adding new reply handlers at specific conversation positions; `register_tool` for adding callable tools with type-annotated signatures that AutoGen converts to JSON-schema function definitions; and `register_nested_chats` for configuring recursive sub-conversation patterns that enable hierarchical task decomposition. Custom agent types subclass ConversableAgent and override these extension points to implement specialist behaviours — database query agents, document extraction agents, code review agents — that can then be composed in group chats without framework modification.

  AutoGen integrates with the broader [[Natural Language Processing]] and [[Agentic AI]] tool ecosystem through several pathways. The LiteLLM backend abstraction supports over 100 model providers through a unified API, enabling AutoGen to route agent calls to OpenAI, Anthropic, Google, Mistral, Cohere, Ollama (local models), Together AI, Groq, and any other provider with an OpenAI-compatible API. This provider diversity is valuable for cost optimisation (routing different agents to appropriately priced models based on task complexity), privacy compliance (routing sensitive data through locally hosted models), and regulatory compliance (ensuring data residency by routing to region-specific API endpoints). The [[Model Context Protocol]] integration (2025) adds tool discovery: AutoGen agents can connect to MCP servers and automatically discover and register all tools exposed by the server, eliminating per-tool integration code and enabling dynamic tool ecosystem expansion without framework-level changes.

  The observability ecosystem around AutoGen has matured significantly in 2025–2026. OpenTelemetry integration enables distributed tracing of multi-agent conversations: each agent turn is recorded as a span with attributes including agent name, model backend, token counts, tool invocations, and latency, producing end-to-end traces that can be visualised in Jaeger, Grafana Tempo, or commercial APM platforms. This observability infrastructure is essential for production deployments where understanding which agent consumed which tokens on which task step is necessary for cost attribution, debugging, and compliance reporting. AgentOps.ai provides a higher-level observability SaaS layer specifically designed for AutoGen and other agentic frameworks, aggregating conversation metrics, tracking cost-per-task, alerting on anomalous conversation patterns, and providing replay tools for post-hoc debugging of failed conversations.

  ## Standards and Governance Context

  AutoGen's deployment in regulated industries — healthcare, financial services, public sector — is governed by the same regulatory frameworks applicable to all agentic AI systems.

  The [[EU AI Act]]'s GPAI provisions (effective August 2025) apply to frontier [[Large Language Models]] used as AutoGen's reasoning backends. Deployers of AutoGen-based systems must ensure that the backing LLMs have appropriate transparency documentation. For high-risk applications (as defined in Annex III of the EU AI Act), AutoGen deployments additionally require conformity assessment, risk management documentation, [[Human-in-the-Loop]] oversight mechanisms, and logging requirements compatible with the Act's traceability obligations. The group-chat conversation log that AutoGen maintains natively is well-suited to satisfying logging requirements, but deployers must ensure logs are retained, access-controlled, and interpretable to non-technical auditors.

  The NIST AI RMF Generative AI Profile (NIST AI 600-1, 2024) addresses risks specific to generative AI systems that apply to AutoGen deployments: hallucination propagation across agent turns (addressed by step-level validation patterns), data provenance of tool-retrieved content (requiring explicit sourcing and verification in the conversation), and harmful action execution risks (requiring tool-level human-in-the-loop gates for irreversible actions). The NIST profile's govern-map-measure-manage framework provides a process template for AutoGen deployment risk management that enterprise compliance teams can apply without bespoke AI-governance infrastructure.

  The [[Model Context Protocol]] (Anthropic, November 2024) functions as an emerging de-facto standard for tool integration in AutoGen and other frameworks, defining authentication, authorisation, schema, and invocation conventions that are being adopted across the agent framework ecosystem. MCP's server-side authentication requirements (OAuth 2.0 with tool-level scope granularity) provide a foundation for secure multi-tenant AutoGen deployments where different agents in the same group chat have access to different tool subsets based on their authorised scope, enforcing least-privilege access at the tool invocation level.

  ## Versioning History and Migration Guide

  Understanding AutoGen's versioning history is essential for teams choosing between the community AG2 fork and the Microsoft Agent Framework path.

  **AutoGen 0.1 (2023)** — initial public release accompanying the arXiv paper. Introduced ConversableAgent, AssistantAgent, UserProxyAgent, and basic GroupChat. Limited to OpenAI models. No Docker code execution. Experimental proof-of-concept quality.

  **AutoGen 0.2 (late 2023 — early 2024)** — production-ready release. Added:
  - Multi-provider LLM support via LiteLLM integration
  - Docker-based sandboxed code execution
  - Jupyter kernel code executor for interactive data analysis
  - Improved GroupChatManager with LLM-based speaker selection
  - Nested chat support for hierarchical task decomposition
  - FunctionCallingAgent for structured tool use
  - This is the version most enterprise teams deployed and the AG2 fork's compatibility baseline

  **AutoGen 0.3 (mid 2024)** — transitional release. Added:
  - Swarm orchestration pattern (agents with handoff capabilities)
  - Structured output support for JSON-schema-constrained responses
  - Improved conversation summarisation for long-running tasks
  - Model Context Protocol (MCP) tool integration (beta)
  - This version introduced the patterns that AG2 v0.9 later unified and standardised

  **AutoGen 0.4 (January 2025 — Microsoft path)** — complete architectural rewrite:
  - Actor model-based distributed execution substrate
  - Async-first message passing
  - Cross-language support (Python and .NET)
  - Pluggable orchestration strategies replacing fixed GroupChat model
  - Integration with Microsoft Azure AI Foundry Agent Service
  - Breaking API changes incompatible with 0.2 code

  **AG2 (community fork, January 2025 onwards)** — community-governed evolution of AutoGen 0.2:
  - AG2 v0.4-0.8: stabilisation and performance improvements on AutoGen 0.2 foundation
  - AG2 v0.9 (April 2025): unified Group Chat pattern merging swarm + group-chat + sequential-chat; context variables; extensible orchestration API
  - AG2 Beta (late 2025): streaming responses; dependency injection; typed tools with Pydantic validation; first-class test utilities; event-driven architecture option
  - PyPI package: `autogen-agentchat` (AG2 community) vs `pyautogen` (legacy Microsoft package)

  **Microsoft Agent Framework (2025)** — enterprise integration layer:
  - Combines AutoGen conversable-agent model with Semantic Kernel enterprise features
  - Graph-based workflow definition for explicit agent topology visualisation
  - Azure Monitor / OpenTelemetry telemetry integration
  - Session-based state management across conversation lifecycles
  - Azure AI Foundry Agent Service GA (May 2025): managed hosting with enterprise SLA

  ## Comparison with Adjacent Frameworks

  Understanding AutoGen's position requires comparing it systematically to the other dominant frameworks in the [[Agent Frameworks]] ecosystem, since the choice of framework has significant consequences for development productivity, production reliability, and operational cost.

  **AutoGen vs [[LangGraph]]** — LangGraph represents the graph-native approach to multi-agent orchestration: the developer explicitly defines a directed state graph where nodes represent agent or processing steps and edges represent conditional transitions between them. This provides maximum predictability and audit trail completeness at the cost of requiring the developer to specify all possible transitions at design time. AutoGen's group-chat approach requires far less upfront specification but produces non-deterministic execution paths and weaker audit trails. For compliance-sensitive production deployments where every decision pathway must be documentable, LangGraph is preferred; for research and exploratory workflows where the optimal path cannot be predetermined, AutoGen is preferred. LangGraph's 34.5 million monthly PyPI downloads (2026) versus AutoGen's AG2 at approximately 3 million reflect this dynamic: LangGraph dominates production enterprise deployment whilst AutoGen dominates research and prototype use cases.

  **AutoGen vs [[CrewAI]]** — CrewAI assigns human-analogous role personas (roles like "Senior Data Scientist," "Business Analyst," "Engineering Lead") to agents and structures collaboration around the social dynamics of those roles. This role-based framing is intuitive for domain experts who want to automate workflows they understand in role-assignment terms and produces predictable agent behaviour in well-defined task domains. AutoGen's conversable-agent abstraction is lower-level — agents are defined by system prompts and tool access, not social roles — making it more flexible but requiring more explicit engineering to achieve role-like specialisation. CrewAI is particularly strong for business process automation where the workflow maps naturally to human role assignments; AutoGen is stronger for technical automation (code execution, data analysis) where the role metaphor fits less naturally.

  ## Conversation Design Patterns in Depth

  Effective use of AutoGen requires mastery of a set of conversation design patterns that have emerged from the research and practitioner communities as reliably high-performing approaches to common multi-agent task families. These patterns are analogous to software design patterns — reusable templates for structuring agent conversations that encode accumulated engineering experience.

  **Two-Agent Code-Iteration Pattern** — the foundational AutoGen pattern and the one demonstrated in the original paper. An AssistantAgent (system prompt: expert programmer, tasked with solving a specific problem) pairs with a UserProxyAgent (configured to automatically execute Python code blocks in a sandboxed environment). The conversation proceeds: the assistant emits a code solution; the proxy executes it, captures stdout/stderr/exit code, and feeds the result back as a message; the assistant analyses the result and either confirms success or emits a corrected version; the loop continues until the code produces the expected result or a maximum turn count is reached. This pattern exploits the computational asymmetry between generating code (LLM strengths) and executing and verifying it (deterministic runtime strengths), delegating precisely those operations to whichever capability handles them better. It is the appropriate pattern for the vast majority of single-task code generation scenarios and should be the starting point before introducing additional agents.

  **Planner-Worker-Critic Triplet** — extends the two-agent pattern by adding a dedicated critic agent that evaluates the quality of the solution proposed by the assistant before presenting it to the proxy for execution. The critic agent's system prompt specifies explicit quality criteria (code style, error handling, edge case coverage, documentation) and its role is to provide structured feedback that the worker agent must address before the solution is accepted. This pattern is particularly valuable for tasks where the definition of a "correct" solution extends beyond just producing the right output (test suite completeness, code reviewability, security properties) and where a single evaluator (the execution result) is insufficient to capture all quality dimensions. The critic agent increases conversation turn count and token cost but produces significantly higher-quality solutions for tasks where quality is multi-dimensional.

  **Nested Chat for Hierarchical Decomposition** — AutoGen's nested chat feature allows a group chat to be embedded as a sub-conversation within a larger conversation, enabling hierarchical task decomposition where a high-level orchestrator delegates sub-tasks to specialist sub-conversations. The orchestrator might receive a complex research question, delegate the literature search to a two-agent sub-conversation (search agent + extraction agent), delegate statistical analysis to another sub-conversation (data agent + code agent), and then synthesise the results across sub-conversations into a final answer. Nested chats provide natural scoping of sub-task context — each sub-conversation has its own bounded conversation history that does not pollute the orchestrating conversation — whilst enabling the orchestrator to inspect and validate sub-conversation outputs before proceeding.

  **Swarm with Dynamic Handoffs (AG2 v0.9)** — the unified group chat architecture in AG2 v0.9 enables swarm-style dynamic handoffs where any agent can explicitly hand off control to another agent mid-conversation, bypassing the GroupChatManager selector. This is implemented through a special handoff message type that names the target agent; the framework immediately routes the next turn to the named agent regardless of the manager's selection logic. Swarm handoffs are appropriate when an agent encounters a sub-task outside its specialisation and "knows" which other agent is best positioned to handle it — an approach that is more contextually sensitive than static round-robin or LLM-based selection. The pattern enables workflows that are partially predetermined (common paths use handoffs defined at design time) and partially dynamic (unusual cases fall back to the manager's selection logic), combining the reliability of predetermined routing with the flexibility of adaptive orchestration.

  **Reflection Pattern via Self-Critique** — a single assistant agent is configured to generate a draft response, then immediately self-critique it before presenting it to the user or next agent. This is implemented as a two-message sequence within a single agent turn: the agent emits a tagged "DRAFT:" message containing the initial solution, then emits a tagged "CRITIQUE:" message identifying weaknesses, gaps, or errors in the draft, then emits a "REVISED:" message incorporating the critique's observations. This self-reflection pattern (drawing on the Reflexion work of Shinn et al., 2023) improves output quality on complex reasoning tasks by 15–25% on standard benchmarks compared to single-pass generation, at the cost of approximately 2.5x token usage per turn. It is most valuable for tasks where initial drafts predictably contain systematic errors that can be identified through self-review — mathematical derivations, logical arguments, API design decisions — and least valuable for tasks where errors are random and difficult to detect through self-review.

  **Multi-Agent Debate for Fact Verification** — two or more agents are configured with explicitly opposing perspectives (one tasked with defending a claim, one tasked with challenging it, one tasked as neutral judge) and engage in structured debate. The debate pattern exploits the computational asymmetry between generating arguments and detecting flaws in arguments: it is often easier to identify a flaw in a stated argument than to generate a correct argument from scratch. Du et al. (2023) demonstrated 11–23% improvement in factual accuracy on knowledge-intensive QA tasks using this pattern. The pattern is particularly appropriate for tasks where there is genuine uncertainty about the correct answer and where the cost of a factual error is high — medical information queries, legal analysis, scientific claim evaluation — and less appropriate for tasks with objectively verifiable correct answers (code execution provides a superior verification mechanism for coding tasks).

  **Sequential Pipeline with Structured Handoffs** — for tasks that decompose naturally into a fixed sequence of transformation steps (document → extraction → analysis → synthesis → report), a sequential pipeline where each agent receives the previous agent's structured output as its input provides the most predictable and auditable pattern. Unlike group chat, there is no speaker selection; the pipeline is deterministic. AutoGen implements this through the `initiate_chats` method, which sequences a list of two-agent conversations with `carryover` handling to pass relevant context from one step to the next. The sequential pipeline pattern sacrifices flexibility for reliability — the conversation path is fully predetermined — making it the preferred pattern for high-volume production pipelines where determinism and auditability are primary requirements and task variability is low.

  ## Intellectual Lineage and Research Context

  AutoGen does not exist in isolation but is the product of a broader intellectual lineage in distributed AI, multi-agent systems theory, and LLM-based agent research that shapes both its design decisions and its limitations.

  The theoretical antecedent most directly relevant to AutoGen is the CAMEL (Communicative Agents for Mind Exploration) framework (Li et al., 2023), developed independently at KAUST contemporaneously with AutoGen. CAMEL introduced the "role-playing" paradigm for LLM-based multi-agent conversation, assigning distinct AI roles (AI Assistant, AI User) with asymmetric system prompts that create a structured conversation where the User agent drives the task and the Assistant agent implements it. CAMEL's insight — that multi-agent conversation emerges naturally from role assignment and message exchange rather than requiring explicit coordination protocols — is shared with AutoGen's conversable-agent design, but CAMEL restricts the conversation to two-agent dyads with fixed role structure, while AutoGen generalises to arbitrary agent counts and topologies through the group-chat abstraction.

  The BabyAGI and AutoGPT projects (Nakajima, 2023; Gravitas, 2023) preceded both CAMEL and AutoGen by several months and demonstrated the public appetite for LLM-based autonomous agent systems. Both used a simple task-list management loop (generate tasks, prioritise, execute, reflect, generate new tasks) rather than multi-agent conversation, but their enormous viral adoption (AutoGPT reached 100,000 GitHub stars faster than any previous repository) established that autonomous LLM agents represented a major interest frontier. The reliability problems that made BabyAGI and AutoGPT impractical for most real tasks — hallucinated progress reports, infinite loops, context saturation, and task specification drift — motivated the structural multi-agent approach that AutoGen and its contemporaries introduced, where explicit agent roles, conversation turn management, and code execution grounding address many of the reliability failures that plagued the early autonomous agent experiments.

  The [[Distributed Systems]] theory of actor models (Hewitt, 1973; Agha, 1986) provides the theoretical foundation for AutoGen 0.4's architectural redesign. The actor model defines computational entities (actors) that communicate exclusively through asynchronous message passing, maintain private local state, and respond to messages by performing local computation, sending messages to other actors, or creating new actors. AutoGen 0.4's adoption of the actor model for its agent execution substrate provides formal theoretical grounding for the distributed, fault-tolerant, and horizontally scalable properties that the architecture claims. Each AutoGen agent becomes an actor in the formal sense — a first-class distributed computing entity with well-defined communication semantics — rather than a function in a sequential call stack.

  The practical limitations of the AutoGen approach are the reciprocal of its strengths. The conversational group-chat model, whilst flexible and natural for human developers familiar with meeting and discussion dynamics, does not provide the formal guarantees of directed-graph workflow systems: a given task may produce dramatically different agent conversation paths on different runs, making it difficult to bound worst-case behaviour, guarantee completion properties, or provide formal traces suitable for regulatory audit. The framework's reliance on LLM-generated speaker selection in the auto mode introduces the model's limitations and biases into the orchestration logic itself, potentially producing systematic biases in which agents are asked to contribute on which types of sub-tasks. Research on "speaker selection bias" in group-chat LLM orchestrators is an active area, with early results showing that certain agent names and system prompt characteristics systematically affect selection frequency in ways that are not related to the appropriateness of the agent for the current sub-task.

  **AutoGen vs [[OpenAI Agents SDK]]** — the OpenAI Agents SDK (released March 2025) is built around the "handoff" abstraction: an agent explicitly transfers control to another agent, carrying conversation context with it. This is more explicit than AutoGen's group-chat selector but less flexible than LangGraph's conditional graph edges. The SDK benefits from deep integration with OpenAI's model APIs, including streaming support, built-in thread management via the Assistants API, and native web search tool integration. AutoGen's provider-agnostic design (via LiteLLM) and richer group-chat patterns give it advantages for multi-provider deployments and research scenarios requiring flexible orchestration.

  ## Key Concepts Glossary

  Definitions of AutoGen-specific terminology as used in the framework's documentation and research papers:

  - **Conversable Agent**: the base abstraction; any participant in an AutoGen conversation that can send and receive messages
  - **AssistantAgent**: a ConversableAgent backed by an LLM; generates natural language and code responses
  - **UserProxyAgent**: a ConversableAgent that proxies for a human user and/or executes code; the standard counterpart to AssistantAgent in two-agent chats
  - **GroupChat**: a shared conversation space with multiple agents where a GroupChatManager selects speakers
  - **GroupChatManager**: the meta-agent that orchestrates speaker selection in a GroupChat
  - **ConversableAgent.generate_reply**: the core method that produces a reply message given the conversation history
  - **code_execution_config**: configuration dict specifying code executor type, working directory, and timeout
  - **human_input_mode**: enum (ALWAYS | NEVER | TERMINATE) controlling when human input is solicited
  - **max_consecutive_auto_reply**: the maximum number of automated agent replies before the UserProxyAgent solicits human input
  - **is_termination_msg**: a callable that returns True when a message should end the conversation
  - **nested_chats**: sub-conversations spawned within a parent conversation for hierarchical task decomposition
  - **speaker_selection_method**: the strategy the GroupChatManager uses to determine who speaks next
  - **context_variables** (AG2 v0.9): typed shared state accessible to all agents in a GroupChat, outside the conversation message history
  - **handoff** (AG2 v0.9): an explicit agent-to-agent control transfer within a swarm-style GroupChat
  - **tool / function**: a Python callable registered on an agent with a JSON-schema description; invokable by LLM backends via function calling
  - **code executor**: the component that runs code blocks emitted by agents (Docker, local subprocess, or Jupyter kernel)
  - **carryover**: the mechanism for passing relevant context from one sequential chat to the next in `initiate_chats`
  - **register_for_llm**: decorator that registers a Python function as a tool callable by LLM agents (generates JSON schema)
  - **register_for_execution**: decorator that registers a Python function as executable by UserProxyAgent
  - **initiate_chat**: method to start a two-agent conversation; initiates_chats for sequential multi-conversation pipelines
  - **LiteLLM backend**: the provider abstraction layer enabling 100+ model providers through a unified API interface
  - **actor model**: the distributed computing paradigm underlying AutoGen 0.4's architecture (Hewitt 1973); agents as stateful actors communicating via async message passing
  - **MCP (Model Context Protocol)**: open specification for tool discovery and invocation standardised by Anthropic (2024); first-class AutoGen integration added 2025

  ## Technical Specifications and Key Parameters

  Key configuration parameters that practitioners must understand for production AutoGen deployments:

  **LLM Configuration**
  - `model`: the model identifier passed to the LLM backend (e.g. `"gpt-4o"`, `"claude-sonnet-4-5"`, `"gemini-2.0-flash"`)
  - `temperature`: controls output randomness; 0.0 for deterministic outputs in structured tasks; 0.7-1.0 for creative tasks requiring diversity
  - `max_tokens`: maximum tokens per LLM response; constrains cost but may truncate long code outputs
  - `cache_seed`: integer seed for caching deterministic responses; enables reproducible testing
  - `timeout`: seconds before abandoning an LLM call and retrying or failing; important for production reliability

  **ConversableAgent Configuration**
  - `name`: unique agent identifier used in conversation logs and speaker selection
  - `system_message`: the agent's role specification; the most critical performance parameter
  - `human_input_mode`: ALWAYS | NEVER | TERMINATE; controls human oversight frequency
  - `max_consecutive_auto_reply`: integer limiting automated turns before soliciting human input
  - `is_termination_msg`: callable that inspects each message and returns True to terminate conversation
  - `code_execution_config`: dict specifying executor type (docker, local subprocess, jupyter), working directory, and resource limits

  **GroupChat Configuration**
  - `agents`: list of ConversableAgent instances participating in the chat
  - `messages`: conversation history (pre-populated or empty)
  - `max_round`: maximum total turns across all agents before forced termination
  - `speaker_selection_method`: "round_robin" | "auto" | "random" | callable
  - `allow_repeat_speaker`: whether the same agent can speak consecutively (default True; set False to force diversity)
  - `send_introductions`: whether agents introduce themselves at the start (useful for LLM-based speaker selection)

  **Performance Characteristics**
  - Typical two-agent task completion: 5-20 turns, 10k-100k total tokens, 30 seconds to 5 minutes wall-clock time
  - Typical group-chat (5 agents) task completion: 15-40 turns, 50k-500k total tokens, 2-20 minutes wall-clock time
  - Code execution latency: 0.1-30 seconds depending on code complexity and Docker startup overhead
  - LLM inference latency: 1-10 seconds per turn for frontier models in 2025-2026
  - Token throughput on frontier models: 50-200 tokens/second output, limiting turn frequency for very long responses

  ## Agent Type Taxonomy

  AutoGen defines a clear agent type taxonomy that practitioners should understand before designing group-chat topologies. Each agent type represents a specific bundle of capabilities and constraints that determines how it contributes to a multi-agent conversation.

  **AssistantAgent** — the standard LLM-backed agent. Key characteristics:
  - Backed by a configurable LLM (OpenAI GPT-4o, Anthropic Claude, Google Gemini, or any LiteLLM-supported model)
  - Default system prompt configures the agent as a helpful AI assistant capable of writing code and using tools
  - Does not execute code by default; relies on a UserProxyAgent for execution
  - human_input_mode defaults to NEVER (fully automated)
  - Registers Python functions as tools via the `register_for_llm` decorator, generating JSON-schema tool definitions for the LLM backend
  - Can be customised by overriding the system prompt to create specialist personas (mathematician, security auditor, domain expert)
  - Most commonly used in planner, worker, and critic roles in group-chat configurations

  **UserProxyAgent** — the hybrid human/automation proxy. Key characteristics:
  - Designed to represent a human participant in the conversation, with the ability to either solicit actual human input or automate responses based on rules
  - human_input_mode determines behaviour: ALWAYS (always ask the human), NEVER (fully automated), TERMINATE (ask only when the conversation should end)
  - Automatically executes code blocks (Python, Shell) emitted by other agents and feeds the execution result back as a message
  - Registers Python functions as tools via the `register_for_execution` decorator, making them callable by LLM-backed agents in the group chat
  - max_consecutive_auto_reply limits automated responses before requiring human input, providing a natural human oversight checkpoint
  - The most frequently used agent in two-agent AutoGen patterns, pairing with an AssistantAgent for code-iterate workflows

  **GroupChatManager** — the orchestration meta-agent. Key characteristics:
  - Does not contribute content to the task; manages the group chat topology only
  - speaker_selection_method determines speaker ordering: "round_robin" (fixed sequential order), "auto" (LLM-based dynamic selection), "random" (random selection from eligible agents), or a custom callable
  - LLM-based speaker selection uses the manager's own LLM backend to decide which agent should speak next, based on the conversation history and each agent's description field
  - max_round limits the total number of turns in the group chat before termination
  - Applies termination conditions: conversation terminates when any agent emits a message matching the termination_msg pattern
  - In AG2 v0.9, the GroupChatManager also handles context variables and supports swarm-style handoffs within the group chat framework

  **Custom Agents** — created by subclassing ConversableAgent and overriding key methods. Common custom agent patterns include:
  - DatabaseAgent: queries a structured database using SQL or ORM, formats results as natural language, returns them as a message
  - DocumentRetrievalAgent: searches a [[Vector Database]] or document store for relevant passages, returns the top-k results as messages for other agents to synthesise
  - CodeReviewAgent: applies static analysis tools (pylint, bandit, type checkers) to code emitted by the AssistantAgent and returns structured findings
  - ValidatorAgent: applies domain-specific validation rules (schema checking, unit testing, constraint verification) to proposed solutions before they are accepted
  - HumanEscalationAgent: presents structured summaries of the current task state to a human reviewer and waits for approval before allowing consequential actions to proceed

  ## Deployment Patterns and Engineering Best Practices

  Deploying AutoGen in production requires engineering discipline beyond the basic multi-agent conversation patterns documented in the framework's tutorials. The gap between a working prototype and a production-grade AutoGen deployment involves solving problems in reliability, cost management, observability, security, and human oversight that are not addressed by the framework itself.

  **Agent configuration management** — production AutoGen deployments maintain agent definitions in version-controlled configuration files (YAML or JSON) that specify system prompts, tool registrations, model backends, human-input modes, and conversation topology. This configuration-as-code approach enables reproducible deployments, A/B testing of different agent configurations, gradual rollout of changes (routing a subset of tasks to a new configuration before full deployment), and audit-trail documentation of exactly which agent configuration produced any given task output. The AG2 v0.9 dependency injection pattern enables type-safe, testable agent configuration that supports programmatic construction of configurations from parameterised templates — critical for deployments with dozens of agent variants handling different task categories.

  **Cost optimisation and model routing** — in high-volume AutoGen deployments, token cost is a primary operational constraint. A group chat with five agents each consuming 2,000 tokens per turn over 15 turns processes 150,000 tokens per task execution — at frontier model pricing (approximately $3–15 per million tokens for 2025 frontier models), this amounts to $0.45–$2.25 per task, making million-task-per-month deployments cost $450,000 to $2.25 million in inference costs alone. Cost optimisation strategies include model cascading (routing planning and orchestration tasks to expensive frontier models, routing simple retrieval and formatting tasks to cheaper models), caching (storing the results of deterministic tool calls — database lookups, static document retrievals — to avoid re-querying on repeated references within the same conversation), and conversation compression (periodically summarising older conversation history into a compact representation that preserves key information whilst reducing the token count fed to each subsequent agent). The EcoAssistant approach (Zhang et al., 2023) demonstrated 20–50% cost reduction versus uniform frontier model usage through intelligent routing across a cascade of models of increasing capability and cost.

  **Testing and quality assurance** — testing multi-agent systems requires methodologies that go beyond unit testing of individual agents. Integration tests must verify that the full multi-agent conversation produces correct outputs for representative task inputs, including edge cases where individual agents fail, produce unexpected outputs, or reach unusual conversation states. Simulation testing (using an LLM-emulated environment that simulates tool responses and external service outputs) enables testing of failure modes without requiring access to live external services, though simulation fidelity must be carefully calibrated. Regression testing must track not just task success rates but conversation path characteristics (number of turns, agents invoked, token consumption) to detect performance regressions that change efficiency without affecting correctness. The AG2 Beta's first-class test utilities — including a ConversationTester class that supports parameterised scenario execution and conversation outcome validation — represent a meaningful step toward testable multi-agent systems, though the inherent non-determinism of LLM-backed agents means tests must use statistical pass/fail thresholds rather than exact output matching.

  **Monitoring and incident response** — production AutoGen deployments require monitoring dashboards that track task success rates, conversation turn counts, token consumption per task, model latency, and tool call failure rates, with alerting on anomalous values. The conversation-level metrics that matter for incident response include: conversations exceeding maximum turn budget (indicating tasks where the agent failed to converge); conversations terminated by tool errors (indicating broken tool integrations); conversations with unusually high token consumption (indicating potential context poisoning or planning failures); and conversations that triggered [[Human-in-the-Loop]] escalation (indicating tasks where the automated configuration was insufficient). Incident response procedures must address LLM provider outages (failing over to alternative model backends), tool service outages (gracefully degrading to cached data or explicit failure messaging), and security incidents (isolating compromised tool integrations, auditing conversations that may have been exposed to malicious content).

  **Versioning and migration** — AutoGen's rapid development pace means that framework versions change significantly between releases, with some changes breaking backwards compatibility. Production deployments must pin specific framework versions and test all upgrades in staging environments before production rollout. The AutoGen 0.2 to AG2 migration is a significant compatibility break that requires updating import paths, agent class names, and configuration patterns. The Microsoft AutoGen 0.4 architectural rewrite is even more substantial, requiring complete redesign of the agent configuration and communication patterns. Teams with large existing AutoGen 0.2 deployments face a choice between maintaining the stable AG2 fork (which prioritises compatibility) or migrating to the Microsoft Agent Framework (which provides enterprise features but requires more significant rework). Framework lock-in risk — the risk that substantial investment in AutoGen-specific patterns makes migration to a different framework prohibitively expensive — is a real strategic consideration for enterprise deployments, arguing for maintaining provider-agnostic interfaces and avoiding deep dependencies on framework-specific non-standard patterns where possible.

  ## Evaluation and Benchmarking

  Evaluating AutoGen-based systems requires assessing both the performance of individual agents and the quality of their collective behaviour in multi-agent conversations. Standard single-agent evaluation metrics (accuracy on classification benchmarks, BLEU/ROUGE on generation benchmarks) are insufficient because they do not capture the collaborative dynamics and emergent behaviour that characterise multi-agent systems.

  The principal benchmarks relevant to AutoGen deployments are drawn from the broader agentic AI evaluation landscape. On [[SWE-bench]] Verified (500 real GitHub issue-fix pairs requiring multi-file code editing), AutoGen-based agent configurations have demonstrated state-of-the-art performance through planner-coder-tester-critic group-chat patterns, with the code executor providing a critical ground-truth feedback signal that single-pass code generation cannot replicate. Multi-agent debate configurations (Liang et al., 2023; Du et al., 2023) have shown 11–23% accuracy improvements on knowledge-intensive QA benchmarks compared to single-agent baselines, with the improvement attributable to the diversity of perspectives generated by multiple agents and the error-detection mechanism of inter-agent critique. The AgentBench benchmark (Liu et al., 2023) evaluates agents across eight task categories including OS interaction, database management, web browsing, and code execution — all domains where AutoGen's code executor and tool registry provide natural integration pathways.

  AutoGen-specific evaluation metrics that supplement benchmark performance include: conversation efficiency (task completion relative to token consumption, measuring how much computational cost is required per successful task); agent contribution analysis (tracking which agents in a group chat contribute useful information versus which agents primarily agree or repeat prior content, informing agent configuration optimisation); convergence analysis (how quickly the group chat reaches a final answer as a function of group composition); and robustness analysis (performance degradation under adversarial or unusual task inputs relative to benchmark conditions, measuring the gap between evaluation and production reliability). The June 2025 practitioner survey found this evaluation-to-production reliability gap to be 20–40% on average across enterprise deployments, making AutoGen-specific robustness evaluation a critical engineering activity before production deployment.

  ## Research and Literature

  1. Wu, Q., Bansal, G., Zhang, J., Wu, Y., Li, B., Zhu, E., Jiang, L., Zhang, X., Zhang, S., Liu, J., Awasthi, A., Peng, B., and Wang, C. (2023). AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation Framework. arXiv:2308.08155.
  2. Wang, C., Wu, Q., Weimer, M., and Zhu, E. (2023). FLAML: A Fast Library for Automated Machine Learning and Tuning. Proceedings of MLSys 2021. (Background on Microsoft Research's AutoML work underpinning AutoGen).
  3. Hong, S., Zhuge, M., Chen, J., Zheng, X., Cheng, Y., Zhang, C., Wang, J., Li, Z., Yau, D., Lin, Z., Zhou, L., Ran, C., Xiao, L., Wu, C., and Schmidhuber, J. (2024). MetaGPT: Meta Programming for Multi-Agent Collaborative Framework. ICLR 2024. arXiv:2308.00352.
  4. Yao, S., Zhao, J., Yu, D., Du, N., Shafran, I., Narasimhan, K., and Cao, Y. (2022). ReAct: Synergizing Reasoning and Acting in Language Models. NeurIPS 2022. arXiv:2210.03629.
  5. Schick, T., Dwivedi-Yu, J., Dessì, R., Raileanu, R., Lomeli, M., Hambro, E., Zettlemoyer, L., Cancedda, N., and Scialom, T. (2023). Toolformer: Language Models Can Teach Themselves to Use Tools. NeurIPS 2023. arXiv:2302.04761.
  6. Zhang, Y., Liu, T., Shi, R., Cheng, T., Li, X., Wang, C., and Wu, Q. (2023). EcoAssistant: Using LLM Assistant More Affordably and Accurately. arXiv:2310.03046.
  7. Huang, D., Bu, Q., Zhang, J.M., Luck, M., and Cui, H. (2023). AgentCoder: Multi-Agent-Based Code Generation with Iterative Testing and Optimisation. arXiv:2312.13010.
  8. Liang, T., He, Z., Jiao, W., Wang, X., Wang, Y., Wang, R., Yang, Y., Tu, Z., and Shi, S. (2023). Encouraging Divergent Thinking in Large Language Models through Multi-Agent Debate. arXiv:2305.19118.
  9. Park, J.S., O'Brien, J., Cai, C.J., Morris, M.R., Liang, P., and Bernstein, M.S. (2023). Generative Agents: Interactive Simulacra of Human Behavior. CHI 2023. arXiv:2304.03442.
  10. Shinn, N., Cassano, F., Gopinath, A., Narasimhan, K., and Yao, S. (2023). Reflexion: Language Agents with Verbal Reinforcement Learning. NeurIPS 2023. arXiv:2303.11366.
  11. Jimenez, C.E., Yang, J., Wettig, A., Yao, S., Pei, K., Press, O., and Narasimhan, K. (2024). SWE-Bench: Can Language Models Resolve Real-World GitHub Issues? ICLR 2024. arXiv:2310.06770.
  12. Liu, X., Yu, H., Zhang, H., Xu, Y., Lei, X., Lai, H., Gu, Y., Ding, H., Men, K., Yang, K., Zhang, S., Deng, X., Zeng, A., Du, Z., Zhang, C., Shen, S., Zhang, T., Su, Y., Sun, H., Huang, M., Dong, Y., and Tang, J. (2023). AgentBench: Evaluating LLMs as Agents. arXiv:2308.03688.
  13. Du, Y., Li, S., Torralba, A., Tenenbaum, J.B., and Mordatch, I. (2023). Improving Factuality and Reasoning in Language Models through Multiagent Debate. arXiv:2305.14325.
  14. Anthropic. (2024). Model Context Protocol Specification. anthropic.com/mcp.
  15. AG2 Project (2025). AG2 v0.9 Release Announcement: Introducing the New Group Chat Pattern. docs.ag2.ai/latest/docs/blog/2025/04/28/0.9-Release-Announcement.
  16. Microsoft Research. (2025). AutoGen v0.4: Reimagining the Foundation of Agentic AI for Scale. Microsoft Research Forum. microsoft.com/en-us/research/video/autogen-v0-4.
  17. Microsoft. (2025). Microsoft Agent Framework Overview. Microsoft Learn. learn.microsoft.com/en-us/agent-framework/overview.
  18. Microsoft Research. (2025). AutoGen: A Practical Executive Guide to AI Agents. WEF 2025 Leave-Behind. microsoft.com/en-us/research/wp-content/uploads/2025/01/WEF-2025_Leave-Behind_AutoGen.pdf.
  19. Pan, A., et al. (2025). Survey of AI Agent Practitioners: Reliability as the Dominant Barrier to Enterprise Adoption. arXiv:2511.14136.
  20. Zhou, S., Xu, F.F., Zhu, H., Zhou, X., Lo, R., Sridhar, V., Cheng, X., Ou, Y., Bisk, Y., Fried, D., Alon, U., and Neubig, G. (2024). WebArena: A Realistic Web Environment for Building Autonomous Agents. ICLR 2024. arXiv:2307.13854.
  21. Greshake, K., Abdelnabi, S., Mishra, S., Endres, C., Holz, T., and Fritz, M. (2023). Not What You've Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection. IEEE S&P Workshop 2023. arXiv:2302.12173.
  22. Ruan, Y., Dong, H., Wang, A., Pitis, S., Zhou, Y., Ba, J., Dubois, Y., Maddison, C.J., and Hashimoto, T. (2024). Identifying the Risks of LM Agents with an LM-Emulated Sandbox. ICLR 2024. arXiv:2309.15817.
  23. Chase, H. (2022). LangChain: Building Applications with LLMs through Composability. GitHub Repository. github.com/langchain-ai/langchain.
  24. Alan Turing Institute. (2025). Agentic Framework Selection for Academic Research. Turing Research Engineering Guidance Note. turing.ac.uk.
  25. European Parliament and Council. (2024). Regulation (EU) 2024/1689 on Artificial Intelligence (EU AI Act). Articles 51–55 (GPAI provisions applicable to frontier LLMs used as agentic reasoning engines).
  26. National Institute of Standards and Technology. (2024). Artificial Intelligence Risk Management Framework: Generative AI Profile (NIST AI 600-1). NIST.
  27. Gartner. (2025). Top Strategic Technology Trends 2026: Agentic AI. Gartner Research Report. (Projecting 40% of enterprise applications will feature task-specific AI agents by end 2026.)
  28. NHS AI Lab. (2025). AI in NHS Administration: Pilot Evaluation Report — Agentic Workflow Deployments in Scheduling and Clinical Coding. NHS England.

- ### Provenance
  - sources:: Wu et al. "AutoGen" (arXiv:2308.08155); AG2 v0.9 Release Announcement (docs.ag2.ai, 2025); Microsoft Agent Framework Overview (learn.microsoft.com, 2025); Microsoft Research AutoGen v0.4 video (2025); Pan et al. enterprise survey (arXiv:2511.14136); Hong et al. MetaGPT (arXiv:2308.00352); Yao et al. ReAct (arXiv:2210.03629); Alan Turing Institute agentic framework guidance (2025); EU AI Act 2024/1689; NIST AI 600-1 (2024); NHS AI Lab pilot report (2025); Gartner Top Trends 2026
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
