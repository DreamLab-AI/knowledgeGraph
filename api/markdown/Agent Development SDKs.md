public:: true

# Agent Development SDKs
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:agent-development-sdks",
  "@type": "Page",
  "vc:slug": "agent-development-sdks",
  "title": "Agent Development SDKs",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:agent-harness", "vc:label": "Agent Harness"},
    {"@id": "urn:visionflow:linked:multi-agent-orchestration-frameworks", "vc:label": "Multi-Agent Orchestration Frameworks"},
    {"@id": "urn:visionflow:linked:agent-execution-sandboxes", "vc:label": "Agent Execution Sandboxes"},
    {"@id": "urn:visionflow:linked:model-context-protocol", "vc:label": "Model Context Protocol"},
    {"@id": "urn:visionflow:linked:agent-evaluation-benchmarks", "vc:label": "Agent Evaluation Benchmarks"},
    {"@id": "urn:visionflow:linked:large-language-model", "vc:label": "Large Language Model"},
    {"@id": "urn:visionflow:linked:agentic-ai", "vc:label": "Agentic AI"},
    {"@id": "urn:visionflow:linked:tool-use", "vc:label": "Tool Use"},
    {"@id": "urn:visionflow:linked:tool-calling-api", "vc:label": "Tool Calling API"},
    {"@id": "urn:visionflow:linked:function-calling", "vc:label": "Function Calling"},
    {"@id": "urn:visionflow:linked:agent-communication-protocol", "vc:label": "Agent Communication Protocol"},
    {"@id": "urn:visionflow:linked:a2-a-protocol", "vc:label": "A2A Protocol"},
    {"@id": "urn:visionflow:linked:claude-agent-sdk", "vc:label": "Claude Agent SDK"},
    {"@id": "urn:visionflow:linked:google-adk", "vc:label": "Google ADK"},
    {"@id": "urn:visionflow:linked:pydantic-ai", "vc:label": "Pydantic AI"},
    {"@id": "urn:visionflow:linked:swe-agent", "vc:label": "SWE-agent"},
    {"@id": "urn:visionflow:linked:openai-agents-sdk", "vc:label": "OpenAI Agents SDK"},
    {"@id": "urn:visionflow:linked:strands-agents", "vc:label": "Strands Agents"},
    {"@id": "urn:visionflow:linked:mastra", "vc:label": "Mastra"},
    {"@id": "urn:visionflow:linked:lang-graph", "vc:label": "LangGraph"},
    {"@id": "urn:visionflow:linked:composio", "vc:label": "Composio"},
    {"@id": "urn:visionflow:linked:autonomous-coding", "vc:label": "Autonomous Coding"},
    {"@id": "urn:visionflow:linked:browser-automation", "vc:label": "Browser Automation"},
    {"@id": "urn:visionflow:linked:computer-use", "vc:label": "Computer Use"},
    {"@id": "urn:visionflow:linked:internal-ai-harness", "vc:label": "Internal AI Harness"},
    {"@id": "urn:visionflow:linked:external-ai-harness", "vc:label": "External AI Harness"},
    {"@id": "urn:visionflow:linked:agent-runtime", "vc:label": "Agent Runtime"},
    {"@id": "urn:visionflow:linked:memory-store", "vc:label": "Memory Store"},
    {"@id": "urn:visionflow:linked:re-act-pattern", "vc:label": "ReAct Pattern"},
    {"@id": "urn:visionflow:linked:plan-and-execute-pattern", "vc:label": "Plan-and-Execute Pattern"},
    {"@id": "urn:visionflow:linked:tool-registry", "vc:label": "Tool Registry"},
    {"@id": "urn:visionflow:linked:observability-stack", "vc:label": "Observability Stack"},
    {"@id": "urn:visionflow:linked:agent-frameworks", "vc:label": "Agent Frameworks"},
    {"@id": "urn:visionflow:linked:workflow-automation", "vc:label": "Workflow Automation"},
    {"@id": "urn:visionflow:linked:human-in-the-loop", "vc:label": "Human-in-the-Loop"},
    {"@id": "urn:visionflow:linked:ai-safety", "vc:label": "AI Safety"},
    {"@id": "urn:visionflow:linked:prompt-template", "vc:label": "Prompt Template"},
    {"@id": "urn:visionflow:linked:structured-output", "vc:label": "Structured Output"},
    {"@id": "urn:visionflow:linked:persistence-layer", "vc:label": "Persistence Layer"},
    {"@id": "urn:visionflow:linked:retrieval-augmented-generation", "vc:label": "Retrieval-Augmented Generation"},
    {"@id": "urn:visionflow:linked:chain-of-thought", "vc:label": "Chain-of-Thought"},
    {"@id": "urn:visionflow:linked:context-window", "vc:label": "Context Window"},
    {"@id": "urn:visionflow:linked:agent-to-agent-protocol", "vc:label": "Agent-to-Agent Protocol"},
    {"@id": "urn:visionflow:linked:ai-agent-payments", "vc:label": "AI Agent Payments"},
    {"@id": "urn:visionflow:owl:class:ai-technique", "vc:label": "AI-GroundedDomain"},
    {"@id": "urn:visionflow:owl:class:ai-research-area", "vc:label": "ComputationAndIntelligenceDomain"},
    {"@id": "urn:visionflow:owl:class:application-layer", "vc:label": "ApplicationLayer"}
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agent-development-sdks",
  "@type": "Class",
  "label": "Agent Development SDKs",
  "definition": "Official vendor SDKs and libraries for building custom AI agents with built-in tools, MCP support, session management, and deployment infrastructure — includes Claude Agent SDK, Google ADK, strands-agents, pydantic-ai, Composio, and SWE-agent.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [
      {
            "@id": "urn:ngm:class:agent-harness",
            "label": "Agent Harness"
      },
      {
            "@id": "urn:ngm:class:agent-frameworks",
            "label": "Agent Frameworks"
      }
  ],
  "relations": {
      "hasPart": [
            {"@id": "urn:ngm:class:claude-agent-sdk", "label": "Claude Agent SDK"},
            {"@id": "urn:ngm:class:google-adk", "label": "Google ADK"},
            {"@id": "urn:ngm:class:strands-agents", "label": "Strands Agents"},
            {"@id": "urn:ngm:class:openai-agents-sdk", "label": "OpenAI Agents SDK"},
            {"@id": "urn:ngm:class:pydantic-ai", "label": "Pydantic AI"},
            {"@id": "urn:ngm:class:tool-registry", "label": "Tool Registry"},
            {"@id": "urn:ngm:class:memory-store", "label": "Memory Store"}
      ],
      "requires": [
            {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"},
            {"@id": "urn:ngm:class:model-context-protocol", "label": "Model Context Protocol"},
            {"@id": "urn:ngm:class:tool-use", "label": "Tool Use"},
            {"@id": "urn:ngm:class:function-calling", "label": "Function Calling"}
      ],
      "enables": [
            {"@id": "urn:ngm:class:autonomous-coding", "label": "Autonomous Coding"},
            {"@id": "urn:ngm:class:browser-automation", "label": "Browser Automation"},
            {"@id": "urn:ngm:class:workflow-automation", "label": "Workflow Automation"},
            {"@id": "urn:ngm:class:human-in-the-loop", "label": "Human-in-the-Loop"}
      ],
      "implements": [
            {"@id": "urn:ngm:class:re-act-pattern", "label": "ReAct Pattern"},
            {"@id": "urn:ngm:class:a2-a-protocol", "label": "A2A Protocol"},
            {"@id": "urn:ngm:class:agent-communication-protocol", "label": "Agent Communication Protocol"}
      ],
      "relatedTo": [
            {
                  "@id": "urn:ngm:class:multi-agent-orchestration-frameworks",
                  "label": "Multi-Agent Orchestration Frameworks"
            },
            {
                  "@id": "urn:ngm:class:agent-execution-sandboxes",
                  "label": "Agent Execution Sandboxes"
            }
      ]
  },
  "quality": 0.90,
  "vc:termId": "AI-9918",
  "vc:schemaVersion": 2
}
```

- ### Definition
  - Agent Development SDKs are official vendor-provided software development kits, libraries, and runtime abstractions that give software engineers a structured, opinionated, and production-supported path for building autonomous [[Agentic AI]] systems on top of [[Large Language Model]] inference APIs, combining the model's reasoning capability with [[Tool Use]], state management, and deployment infrastructure in a coherent first-party package co-designed by the same organisation that produces and maintains the underlying model. Unlike general-purpose orchestration libraries such as [[LangGraph]] or the broader [[Agent Frameworks]] category — which prioritise cross-provider flexibility, compositional graph abstractions, and community extensibility above all — a first-party SDK makes a deliberate trade: it accepts tighter coupling to a specific model provider's API surface in exchange for a stable versioning contract, deep feature co-evolution (tool schema updates, streaming improvements, [[Context Window]] extension, computer-use support), production deployment infrastructure managed by the provider, and in some cases direct support contracts for enterprise customers. The major SDKs as of mid-2026 are the [[Claude Agent SDK]] (Anthropic, extracted from the Claude Code agent loop in June 2025 and renamed September 2025 after developers adopted it for legal assistants, SRE bots, and many other non-coding use cases, reaching 1.0 in December 2025), the [[Google ADK]] (Google DeepMind, available in Python, TypeScript, Java, and Go, with Vertex AI Agent Engine as the managed deployment target and Agent Cards for cross-team agent discovery via the [[A2A Protocol]]), [[Strands Agents]] (AWS, open-sourced Apache 2.0 in May 2025 after being built internally to power Amazon Q Developer, reaching production-ready Python 1.0 on May 21 2026 and TypeScript 1.0 on April 30 2026, with four new multi-agent primitives and A2A protocol integration), the [[OpenAI Agents SDK]] (the official evolution of the experimental Swarm project, making the Responses API the primary agentic interface, with built-in sandbox execution and structured approval gates), [[Pydantic AI]] (a typed Python agent framework from the team behind Pydantic, released late 2024, providing a strongly-typed declarative layer over multiple LLM provider APIs including Claude, GPT-4, Gemini, and others, popular with FastAPI-based backend teams), and [[Mastra]] (TypeScript-first, 23,200+ GitHub stars, $35M Series A, competing with the [[Claude Agent SDK]] for TypeScript-first teams). The ecosystem is unified by the convergence of two key protocols: the [[Model Context Protocol]] (MCP, released by Anthropic November 2024, contributed to the Linux Foundation December 2025) standardises how tools expose their capabilities and schemas to agents, providing a universal [[Tool Registry]] layer; and the [[A2A Protocol]] (Google, April 2025, absorbed into the Linux Foundation Agentic AI Foundation in late 2025) standardises cross-agent communication, enabling agents built on different SDKs to hand off tasks without bespoke integration code. By mid-2026, MCP had crossed 97 million monthly SDK downloads — a 970x increase in 16 months — with 41% of surveyed software organisations reporting MCP servers in limited or broad production deployment, and all major SDKs integrating MCP natively. The practical distinction between an SDK and an orchestration framework is one of integration depth, official support guarantee, and deployment infrastructure: an SDK ships with the model provider's blessing, receives coordinated updates when underlying APIs change, provides first-class managed deployment rather than requiring third-party hosting, and typically includes metered usage tracking tied to the provider's billing relationship.

- ### Semantic Classification
  - owl-class:: ai:AgentDevelopmentSDKs
  - owl-role:: ExecutableProtocol | DeveloperToolkit | RuntimeAbstraction
  - owl-inferred:: ai:AgentRuntimeLayer, ai:ToolCallingInfrastructure, ai:MultiAgentOrchestrationPrimitive
  - belongs-to-domain:: [[AI-GroundedDomain]], [[ComputationAndIntelligenceDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]

- ### Relationships
  - is-subclass-of:: [[Agent Harness]], [[Agent Frameworks]], [[LLM Orchestration]]
  - has-part:: [[Claude Agent SDK]], [[Google ADK]], [[Strands Agents]], [[OpenAI Agents SDK]], [[Pydantic AI]], [[Mastra]], [[Composio]], [[SWE-agent]], [[Tool Registry]], [[Memory Store]], [[Agent Runtime]], [[Observability Stack]]
  - requires:: [[Large Language Model]], [[Model Context Protocol]], [[Tool Use]], [[Function Calling]], [[Persistence Layer]], [[Context Window]], [[Agent Execution Sandboxes]], [[Tool Calling API]]
  - enables:: [[Autonomous Coding]], [[Browser Automation]], [[Computer Use]], [[Workflow Automation]], [[Human-in-the-Loop]], [[Retrieval-Augmented Generation]], [[AI Safety]], [[Agentic AI]], [[Multi-Agent Orchestration Frameworks]]
  - implements:: [[ReAct Pattern]], [[Plan-and-Execute Pattern]], [[A2A Protocol]], [[Agent Communication Protocol]], [[Structured Output]], [[Chain-of-Thought]], [[Agent-to-Agent Protocol]]
  - depends-on:: [[Agent Harness]], [[Internal AI Harness]], [[External AI Harness]], [[Agent Execution Sandboxes]], [[Large Language Model]], [[Model Context Protocol]]
  - supports:: [[Agent Evaluation Benchmarks]], [[Multi-Agent Orchestration Frameworks]], [[Observability Stack]], [[AI Safety]], [[AI Agent Payments]], [[Agentic AI]]
  - uses:: [[Tool Calling API]], [[Structured Output]], [[Prompt Template]], [[Model Context Protocol]], [[Agent-to-Agent Protocol]], [[Function Calling]], [[Persistence Layer]]
  - contrasts-with:: [[Multi-Agent Orchestration Frameworks]], [[LangGraph]], [[Agent Frameworks]]
  - related-to:: [[Agentic AI]], [[Agent Execution Sandboxes]], [[Agent Evaluation Benchmarks]], [[AI Agent Payments]], [[Autonomous AI Agents]], [[Agent Orchestrator]]
  - standardized-by:: [[Model Context Protocol]], [[A2A Protocol]], [[Agent Communication Protocol]], [[Linux Foundation]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:hasPart ai:ClaudeAgentSDK))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:hasPart ai:GoogleADK))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:hasPart ai:StrandsAgents))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:hasPart ai:OpenAIAgentsSDK))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:hasPart ai:PydanticAI))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:hasPart ai:ToolRegistry))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:hasPart ai:MemoryStore))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:hasPart ai:AgentRuntime))

  ## Dependency Relationships
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:requires ai:LargeLanguageModel))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:requires ai:ModelContextProtocol))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:requires ai:ToolUse))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:requires ai:FunctionCalling))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:requires ai:PersistenceLayer))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:requires ai:AgentExecutionSandboxes))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:requires ai:ContextWindow))

  ## Capability Relationships
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:enables ai:AutonomousCoding))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:enables ai:BrowserAutomation))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:enables ai:WorkflowAutomation))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:enables ai:HumanInTheLoop))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:enables ai:RetrievalAugmentedGeneration))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:enables ai:ComputerUse))

  ## Implementation Relationships
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:implements ai:ReActPattern))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:implements ai:PlanAndExecutePattern))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:implements ai:A2AProtocol))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:implements ai:AgentCommunicationProtocol))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:implements ai:StructuredOutput))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:implements ai:ChainOfThought))

  ## Reduction Relationships
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:reducesTo ai:AgentFrameworks))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:reducesTo ai:LLMOrchestration))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:reducesTo ai:AgentHarness))

  ## Support Relationships
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:supports ai:AgentEvaluationBenchmarks))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:supports ai:MultiAgentOrchestrationFrameworks))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:supports ai:ObservabilityStack))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:supports ai:AISafety))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:supports ai:AIAgentPayments))

  ## Contrasting Relationships
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:contrastsWith ai:MultiAgentOrchestrationFrameworks))
      SubClassOf(ai:AgentDevelopmentSDKs
        ObjectSomeValuesFrom(ai:contrastsWith ai:LangGraph))

  ## About

  ### The Problem That Agent Development SDKs Solve

  The category of Agent Development SDKs emerged from a transition in the AI industry: as frontier models became reliably capable of multi-step [[Tool Use]] and long-horizon task execution, the friction point shifted from model capability to infrastructure. Early agent builders, from roughly 2022 to 2024, constructed bespoke scaffolds around raw model APIs — hand-written prompt engineering loops, custom tool dispatch code, ad-hoc state management, informal retry logic, and hard-coded context truncation strategies. This approach was simultaneously functional and brittle: each model API update could break the scaffold in subtle ways, tool schemas drifted as providers updated their function-calling specifications, there was no standardised way to compose agents across providers or share tool definitions between teams, and testing was largely manual because no reproducible evaluation framework existed. The first generation of orchestration libraries (LangChain, 2022) addressed composability but remained so provider-agnostic that they imposed a significant abstraction overhead, and their rapidly changing internal APIs frustrated engineering teams trying to maintain production deployments.

  The second generation — proper first-party SDKs — represents a different design philosophy entirely: the model provider owns the loop from inference to tool execution, provides a stable API surface versioned alongside the model, and co-designs deployment infrastructure with the SDK. This means that when Anthropic adds computer-use capability to Claude, the computer-use API is exposed through the [[Claude Agent SDK]] as a first-class primitive rather than requiring SDK consumers to reverse-engineer the raw API changes. When AWS improves Amazon Bedrock's streaming performance, [[Strands Agents]] automatically benefits. When OpenAI extends the Responses API with new state management capabilities, the [[OpenAI Agents SDK]] exposes them immediately. The SDK relationship also carries an implicit support contract: enterprise customers buying Claude Agent SDK credits through Anthropic's billing relationship can expect Anthropic's support team to own the full stack from model to agent loop, rather than debugging at the seam between a third-party orchestration library and the provider API.

  ### Protocol Convergence as Enabler

  The decisive technical enabler of first-party SDKs was not any single capability improvement but the convergence of two key protocols that decoupled the tool layer from the agent loop and enabled inter-agent communication. The [[Model Context Protocol]] (MCP, Anthropic November 2024, contributed to the Linux Foundation Agentic AI Foundation in December 2025 alongside OpenAI and Block, backed by AWS, Google, Microsoft, and Cloudflare) standardised how tools expose their capabilities and schemas to any MCP-capable agent, regardless of which SDK is running the agent loop. This decoupling created an extraordinary network effect: a developer who builds an MCP server for their GitHub integration can immediately make it available to agents running on any SDK, not just Claude. By March 2026, the MCP ecosystem had grown to 9,652 registered server records in the official MCP Registry, over 10,000 active public MCP servers per Anthropic's December 2025 ecosystem update, and 97 million monthly SDK downloads — a 970x increase from the first month of availability. Uses of action tools (MCP calls, file operations, API requests) grew from 27% of total tool uses in November 2024 to 65% by February 2026, documenting the structural shift from information retrieval to action execution as the dominant agentic use pattern.

  The [[A2A Protocol]] (Google, April 2025, rapidly absorbed into the Linux Foundation Agentic AI Foundation alongside MCP) solved the complementary problem of inter-agent communication: how do agents built on different SDKs hand off tasks, share context, and coordinate without bespoke integration code? A2A defines Agent Cards — structured JSON manifests describing an agent's capabilities, schema, input/output types, and MCP server dependencies — and a protocol for agents to discover, address, and communicate with each other via these cards. Strands Agents 1.0 (May 2026) shipped with full A2A support, and Google ADK's Agent Cards are a core design feature. The combination of MCP (tool-layer interoperability) and A2A (agent-layer interoperability) means that, at the protocol level, the ecosystem is converging toward vendor-neutral standards even as SDKs compete on implementation quality, performance, and ancillary infrastructure.

  ### From Single-Agent to Multi-Agent Primitives

  The defining architectural evolution of 2025 to 2026 was the systematic incorporation of multi-agent primitives into every major SDK. Early SDKs exposed the basic single-agent loop: model call → tool dispatch → model call. By mid-2026, all major SDKs provide at least four distinct multi-agent composition patterns, most closely matching the set introduced by Strands Agents 1.0:

  - **SubAgent**: run an agent as a tool callable by a parent orchestrator; the parent dispatches work declaratively, the child executes it synchronously and returns a result; this enables hierarchical decomposition of complex tasks without writing explicit orchestration logic
  - **ParallelAgent**: fan-out the same task or a set of tasks to multiple agents simultaneously, collect results asynchronously, and merge outputs; particularly suited to map-reduce patterns such as parallel code review, parallel document analysis, or parallel hypothesis testing
  - **Pipeline**: chain agents sequentially where each agent's output is the next agent's input; enables transformation chains such as extract → classify → summarise → draft, where each stage has a specialised model or tool configuration
  - **GraphAgent** (or equivalents): define conditional routing between agents based on intermediate results using a state graph; enables branching workflows, retry loops, and escalation paths that cannot be represented as pure sequential pipelines

  These primitives bridge the gap between SDK-level single-agent deployment and [[Multi-Agent Orchestration Frameworks]] like CrewAI or AutoGen, making it possible to build moderate-complexity multi-agent systems entirely within a first-party SDK without adopting a separate orchestration layer. The practical question for engineering teams is increasingly not "which SDK or framework?" but "at what complexity level do SDK multi-agent primitives become insufficient and a dedicated orchestration framework become necessary?" — and the answer has shifted steadily toward the latter, as SDK primitives have grown more sophisticated.

  ## Components / Architecture

  ### Core Agent Loop

  All production Agent Development SDKs implement a common core loop architecture with provider-specific extensions:

  **Model Invocation Layer**
  The SDK wraps the provider's completions or messages API, handling streaming response processing, token budget management, automatic context truncation when the [[Context Window]] fills, stop-sequence detection, and structured output parsing. This layer abstracts the raw HTTP/SSE interface so that agent developers work with typed message objects rather than JSON payloads.

  **Tool Dispatch Layer**
  When the model emits a tool-call object in its response, the SDK intercepts it before it reaches the caller, resolves the tool name against the [[Tool Registry]], executes the tool (locally for native tools, via MCP protocol for remote tools, via [[Composio]] connector for SaaS integrations), captures the result or error, and formats it as a tool-result message for reinsertion into the conversation context. The SDK owns the retry policy on tool failures: how many times to attempt a failed tool call, whether to surface the error to the model for self-correction, and when to escalate to human review through [[Human-in-the-Loop]] gates.

  **Session Management Layer**
  The SDK tracks conversation state across turns, managing the accumulation of message history, tool-call/result pairs, and assistant reasoning traces. For multi-turn agentic tasks that may span hours or process boundaries (a software engineering task decomposed into many subtasks), the session management layer checkpoints state to a [[Persistence Layer]] (database, object store, or the provider's managed conversation state service) so that the agent can resume after interruption without losing context.

  **Approval Gate Layer**
  Enterprise-oriented SDKs provide structured [[Human-in-the-Loop]] approval gates: configurable rules that pause agent execution and surface a proposed action to a human reviewer before executing it. Criteria for triggering approval gates include: tool calls above a cost or risk threshold, irreversible actions (file deletion, email sending, database writes), actions matching specified patterns (any action involving customer PII, any external API call), or any action in a category that the deploying organisation has flagged as requiring human sign-off. The [[Claude Agent SDK]] and [[OpenAI Agents SDK]] have the most mature approval gate implementations as of mid-2026.

  **Observability Integration**
  All major SDKs emit structured traces of agent reasoning and action in OpenTelemetry format, compatible with standard [[Observability Stack]] tools (Datadog, Honeycomb, Langfuse, Braintrust). Traces capture: each model invocation with input tokens, output tokens, and latency; each tool call with tool name, arguments, result, and latency; each approval gate decision; and session-level aggregates including total cost, total latency, and success/failure disposition. This tracing is essential for debugging complex multi-step failures where the error occurred three tool calls before the visible symptom.

  ### Tool Integration Layers

  **Native Tools**
  First-party tool implementations shipped with the SDK, optimised for the provider's model and API. Examples: Anthropic's computer-use tool (screenshot + mouse/keyboard action API), code execution tool (runs Python in a sandboxed container), web search tool (integrated with Brave or Bing search API), file management tools. Native tools are versioned alongside the SDK and tested by the provider for compatibility with the model's tool-calling behaviour.

  **MCP Client**
  Discovers tools exposed by external MCP servers by reading the server's tool manifests, translates between MCP tool schemas and the model's function-calling schema, manages MCP server connection lifecycle (startup, health checking, graceful shutdown), and handles MCP server errors by surfacing structured error objects back to the model. The [[Claude Agent SDK]] has the deepest MCP integration of any SDK as of mid-2026, reflecting Anthropic's role as MCP author.

  **Custom Tools**
  Developer-defined functions decorated with typed schemas (Python dataclasses, TypeScript interfaces, Pydantic models) that are automatically converted to the model's tool-calling format. The SDK introspects function signatures and type annotations to generate tool schemas without requiring manual schema authoring. [[Pydantic AI]] extends this principle furthest: in Pydantic AI, every agent capability is expressed as a typed Python callable, and the entire agent configuration is a Pydantic model that validates at startup rather than failing at runtime.

  **External Integrations via [[Composio]]**
  [[Composio]] provides 250+ pre-built connectors to SaaS tools — GitHub, Jira, Linear, Salesforce, HubSpot, Notion, Slack, Google Workspace, and many others — each exposed as MCP-compatible tool schemas. Composio handles OAuth token management, schema versioning across API versions, rate limiting, and webhook integration. Any SDK with MCP client support can consume Composio connectors without bespoke integration code, making Composio effectively a managed tool-layer service that complements rather than competes with the agent loop SDKs.

  ### Memory and State Architecture

  **Ephemeral Context (In-Window)**
  Conversation history held in the active [[Context Window]]; fully managed by the SDK's context tracking; lost when the context window fills and truncation occurs or when the process ends. Suitable for single-turn or short multi-turn tasks.

  **Session Persistence (Cross-Process)**
  Conversation checkpoints written to a [[Persistence Layer]] (PostgreSQL, DynamoDB, Redis, or the provider's managed state service) for resumption across process boundaries, server restarts, or arbitrary interruption. Strands Agents 1.0 introduced a dedicated session manager for retrieving agent state from a remote datastore, recognising that production multi-agent workflows often span hours or days.

  **Long-Term Memory (Vector-Indexed)**
  Facts, user preferences, and prior task context that exceed context window capacity are stored in a vector-indexed [[Memory Store]] and retrieved via [[Retrieval-Augmented Generation]] at the start of each turn. The SDK provides either built-in vector store integration (Anthropic's Memory MCP server, Google ADK's integration with Vertex AI Vector Search) or hooks for connecting third-party vector databases (Pinecone, Weaviate, pgvector).

  **Agent Cards and Discovery**
  Structured JSON manifests (the A2A Protocol's Agent Card format) describing each agent's capabilities, schema, tool dependencies, and A2A address. Used by orchestrators to discover available agents and route tasks to the most appropriate one. Google ADK makes Agent Cards a first-class concept, providing tooling for generating, validating, and registering them in a team-internal agent directory.

  ### Deployment Infrastructure

  **Claude Agent SDK (Anthropic)**
  Deploys to Anthropic's managed compute via the Agent SDK API; local development via Python (3.10+) and TypeScript (Node 18+) packages; integrates with Anthropic's usage monitoring dashboard. Agent SDK credits metered separately from conversational API credits as of June 15 2026.

  **Google ADK**
  Primary deployment target: Vertex AI Agent Engine (fully managed, autoscaling, with built-in logging and monitoring); also supports Cloud Run (containerised), GKE (Kubernetes), and local execution. Agent Engine provides managed session state, removing the need for developers to implement the [[Persistence Layer]] themselves.

  **Strands Agents**
  Local execution for development (any Python or TypeScript environment); AWS AgentCore for production deployment (managed execution, auto-scaling, AWS IAM integration, CloudWatch logging); integrates natively with AWS Lambda, ECS, and Bedrock managed inference endpoints.

  **OpenAI Agents SDK**
  Deploys to the OpenAI platform's managed agent hosting; Responses API handles hosted conversation state; integrates with the Code Interpreter and File Search hosted tools; supports self-hosting via the open-source SDK against any OpenAI-compatible API.

  ## Major SDK Profiles (2026)

  ### [[Claude Agent SDK]] (Anthropic)

  Extracted from the Claude Code agent loop in June 2025 under the name "Claude Code SDK"; the name reflected its initial positioning as a library for building coding agents in the style of Claude Code. Renamed the Claude Agent SDK in September 2025 after the developer community had adopted it for legal research assistants, SRE automation bots, customer service agents, and a wide range of non-coding applications, demonstrating that the primitives were general-purpose. Version 1.0 shipped December 2025; production deployments at multiple Anthropic enterprise customers documented by early 2026. The SDK exposes the [[Internal AI Harness]] primitives that power Claude Code itself — [[Tool Use]], [[Computer Use]], multi-turn context management, structured approval gates, and comprehensive [[Observability Stack]] integration — as stable Python and TypeScript library APIs with semantic versioning and long-term support commitments.

  Deepest first-party [[Model Context Protocol]] integration of any SDK: Anthropic authored the MCP specification and co-maintains the reference client implementation, so the Claude Agent SDK's MCP client is effectively the reference implementation for all other SDKs. The SDK ships with the Anthropic Memory MCP server for managed long-term memory and the Code Execution MCP server for sandboxed Python execution. As of June 15 2026, Agent SDK credits are metered separately from conversational Claude API usage, reflecting the higher infrastructure cost of managing long-running stateful agent sessions versus stateless conversational turns.

  Primary use cases documented in Anthropic customer studies: [[Autonomous Coding]] assistants (software engineering agents building on the same capabilities as Claude Code), legal document analysis and contract review assistants, SRE incident triage and root-cause analysis bots, and financial modelling agents for quantitative research teams.

  ### [[Google ADK]] (Agent Development Kit)

  Multi-language SDK (Python, TypeScript, Java, Go) with Vertex AI Agent Engine as the managed deployment target. Google ADK 1.0 for Java and Go shipped in 2025, following the Python and TypeScript releases. Distinguishing features: Agent Cards for cross-team agent discovery (a structured JSON manifest describing an agent's capabilities, schema, and A2A address, consumed by the A2A protocol router to enable declarative agent composition); built-in integration with Google Search, Google Workspace (Gmail, Drive, Calendar, Docs), BigQuery, and other Google Cloud services; multi-modal support enabling vision and audio tool calls alongside text; and tightly integrated deployment to Vertex AI Agent Engine which provides managed session state, autoscaling, and Cloud Logging/Monitoring integration out of the box.

  Google ADK is particularly well-positioned for teams already invested in Google Cloud infrastructure: the managed deployment removes the need for teams to implement [[Persistence Layer]] abstractions, and the native integration with Google Workspace services makes it the natural choice for enterprise productivity automation. The A2A Agent Card architecture makes Google ADK the most interoperable SDK for cross-team multi-agent systems where different teams maintain different specialised agents and an orchestrator needs to compose them dynamically.

  ### [[Strands Agents]] (AWS)

  Open-source (Apache 2.0) model-driven SDK originally built internally at AWS to power Amazon Q Developer (the AI-powered developer assistant integrated into AWS services). Released publicly in May 2025 after demonstrating its capability in production at AWS Glue, VPC Reachability Analyzer, and multiple other internal services. Python SDK 1.0 shipped May 21 2026; TypeScript SDK 1.0 shipped April 30 2026. The 1.0 releases introduced the four multi-agent primitives (SubAgent, ParallelAgent, Pipeline, GraphAgent) and A2A protocol support, transforming Strands from a single-agent SDK into a production-grade multi-agent orchestration platform.

  Key differentiator: model flexibility achieved without compromising on the quality of the core loop. Strands supports any model available on Amazon Bedrock (including Claude, Llama, Mistral, Amazon Nova, and others), any Claude model via direct Anthropic API, any Llama model via Llama API, Ollama for local development, and any OpenAI-compatible provider via LiteLLM. This model neutrality, combined with AWS deployment infrastructure and the 20+ pre-built example tools included in the SDK, makes Strands the natural choice for teams who want AWS-managed deployment without committing exclusively to any single model provider. The AWS AgentCore managed runtime provides the same kind of serverless scaling and IAM-gated access control that characterises other AWS managed services.

  ### [[OpenAI Agents SDK]]

  The evolution of the experimental Swarm project that OpenAI published in late 2024 as a minimal reference implementation of multi-agent handoff patterns. The production Agents SDK makes the Responses API (OpenAI's stateful conversation API that maintains conversation history server-side) the primary agentic interface, abstracting away the need for clients to manage conversation history locally. Key features: the harness system provides structured [[Human-in-the-Loop]] approval gates and human escalation paths designed for enterprise compliance; built-in integration with OpenAI's Code Interpreter (sandboxed Python execution with file system access) and File Search (RAG over uploaded documents) tools; and a sandbox execution environment that provides [[Agent Execution Sandboxes|isolated execution]] for code generated by agents. Used internally by OpenAI for ChatGPT operator tools and the GPT-4o-based agent deployments offered to enterprise customers through the ChatGPT Enterprise API.

  ### [[Pydantic AI]]

  Python agent framework from the team behind Pydantic, the data validation library that underpins FastAPI and is ubiquitous in the Python ML ecosystem. Released late 2024. Philosophy: make agent code look like ordinary typed Python rather than a domain-specific language for LLM orchestration. Tool functions are decorated Python callables whose type annotations are automatically converted to tool schemas; agent responses are typed Pydantic models validated at runtime; LLM clients are dependency-injected rather than globally coupled, making it straightforward to swap providers in tests; and the entire agent configuration is a Pydantic model that validates at startup, surfacing configuration errors before the agent takes any real-world action.

  Pydantic AI supports Claude (via `AnthropicModel`), GPT-4 and GPT-4o (via `OpenAIModel`), Gemini (via `GeminiModel`), Grok, and Groq, with the model selection expressed as a typed model identifier string. Its integration with [[Model Context Protocol]] was added in early 2025. The framework is particularly popular with FastAPI-based backend teams building REST APIs that include agentic capabilities: the shared Pydantic validation model means that agent input/output types can be directly reused as FastAPI request/response schemas, reducing the boilerplate that would otherwise be required to bridge between the API layer and the agent layer.

  ### [[Mastra]] (TypeScript-first)

  Independent TypeScript-native agent framework with 23,200+ GitHub stars and a $35M Series A as of mid-2026. Positions itself as the TypeScript equivalent of [[Pydantic AI]]: strongly typed, ergonomic for web developers already familiar with Next.js and Vercel, and first-class [[Model Context Protocol]] support. Competes directly with the [[Claude Agent SDK]] for TypeScript-first teams building web-native agents. Mastra's integration with the Vercel deployment platform makes it the natural choice for teams building agents that are part of Next.js web applications. The $35M funding and strong community growth suggest that TypeScript-first agent development is a sufficiently distinct market segment to support an independent framework rather than requiring absorption by a model provider SDK.

  ### [[SWE-agent]] (Princeton NLP Group)

  Open-source research agent SDK from Princeton NLP Group, specifically designed for software engineering tasks. Defines the Agent-Computer Interface (ACI) concept — a principled abstraction for how an agent interacts with a terminal, file system, and code execution environment. The ACI design recognises that the interface between an agent and its computing environment is as important to agent capability as the underlying model: a poorly designed interface forces the model to waste context tokens on navigation and syntax rather than on problem-solving. SWE-agent demonstrated this by achieving 35% on SWE-bench Verified in early 2024 using a generic scaffold optimised for the ACI, when competing approaches using similar models but less carefully designed interfaces scored below 15%. While SWE-agent is now primarily a research platform rather than a production SDK, its ACI abstractions have directly influenced the terminal tool design in the [[Claude Agent SDK]] and the shell tool implementation in [[Strands Agents]].

  ### [[Composio]] (Tool Integration Layer)

  Not a full agent loop SDK but a critical dependency of most others. Provides 250+ pre-built integrations with SaaS tools (GitHub, Jira, Linear, Salesforce, HubSpot, Notion, Slack, Google Workspace, and many others), each exposed as MCP-compatible tool schemas with automatic OAuth token management, schema versioning across provider API versions, rate limiting, and webhook integration. The practical importance of Composio is that building and maintaining 250 enterprise integrations is a non-trivial ongoing engineering effort — OAuth token refreshes break, API schema versions change, rate limits vary by customer plan — and Composio handles all of this as a managed service, allowing agent developers to focus on the agent logic rather than integration maintenance. Supported natively by [[Claude Agent SDK]], [[Strands Agents]], [[Google ADK]], and [[Pydantic AI]].

  ## Use Cases / Major Families

  Agent Development SDKs enable a distinct set of production agent patterns that have emerged from the 2024 to 2026 deployment wave:

  **[[Autonomous Coding]] Assistants**
  Software engineering agents that read GitHub issues, inspect repository code, write patches, run tests, and open pull requests. Built on [[Claude Agent SDK]] (leveraging the same loop as Claude Code) or [[SWE-agent]] (for teams that prioritise SWE-bench performance over managed deployment). Key tools: Git MCP server, code execution sandbox, GitHub API via Composio connector. Current SOTA on SWE-bench Verified: 87.6% (Claude Opus 4.7, mid-2026).

  **Customer Service and Policy Adherence Agents**
  Multi-turn conversational agents that handle customer requests within defined policy constraints (return eligibility, refund thresholds, escalation rules). Built on [[OpenAI Agents SDK]] or [[Google ADK]] with structured approval gates for policy-deviant requests. Evaluated using [[TAU-bench]] (tool-agent-user interaction with policy adherence scoring). Critical requirement: the agent must follow policy even when the customer applies social pressure to deviate, a capability measured specifically by TAU-bench.

  **Data Analysis and Research Agents**
  [[Retrieval-Augmented Generation]] pipelines with code execution, built on [[Pydantic AI]] for type-safe data pipelines. These agents accept a research question, retrieve relevant documents from a vector store, write Python analysis code, execute it in a sandboxed environment, and synthesise the numerical results into a natural language report. Particularly common in quantitative finance, pharmaceutical research, and academic settings.

  **Enterprise Workflow Automation**
  [[Strands Agents]] multi-agent pipelines for document processing, approval routing, and cross-system data synchronisation, deployed on AWS AgentCore. A typical pipeline: a document intake agent extracts key fields from uploaded PDFs, a classification agent routes them to the appropriate processing queue, a compliance check agent verifies regulatory requirements, and an approval routing agent determines whether the request can be auto-approved or requires human review via [[Human-in-the-Loop]] gate. The structured nature of enterprise workflows makes Strands's Pipeline and GraphAgent primitives particularly well-suited.

  **SRE and Operations Agents**
  Alert triage and root-cause analysis agents that integrate with monitoring systems (Datadog, PagerDuty), Kubernetes APIs, and cloud provider consoles. Built on [[Claude Agent SDK]] for its strong approval gate primitives and audit logging. These agents ingest alert context, query metrics, inspect logs, check recent deployments, and suggest (or with appropriate approval, implement) remediation actions. The irreversibility concern (a misguided remediation could exacerbate an outage) makes the approval gate layer especially critical.

  **[[Computer Use]] Automation**
  Agents that control a desktop GUI environment via screenshot observation and simulated mouse/keyboard actions, used for automating legacy enterprise systems without APIs. Built on the Claude computer-use API through the [[Claude Agent SDK]], or through OSWorld-inspired open-source scaffolding. Primary targets: legacy ERP systems, healthcare clinical information systems, government portals, and any enterprise software too old or too expensive to provide an API. OSWorld SOTA of 73% (mid-2026) suggests sufficient reliability for many routine automation tasks, though human supervision remains important for high-stakes actions.

  **Research Assistant Agents**
  GAIA-class web research agents that combine web search, document retrieval, citation management, and multi-step reasoning to produce comprehensively sourced research reports. Built on [[Google ADK]] with Vertex AI Search integration for internal document retrieval plus web search for external sources, or on [[Claude Agent SDK]] with custom web search and academic paper retrieval MCP servers.

  ## Academic Context

  The conceptual foundations of Agent Development SDKs trace through several research lineages that converged in the 2023 to 2025 period:

  **The ReAct Paradigm**: The [[ReAct Pattern]] paper (Yao et al., 2023) established the alternating reason-act paradigm — model generates a thought about what to do, then acts using a tool, then observes the result, then reasons again — that all modern SDKs implement as their core loop. ReAct's empirical demonstration that interleaving reasoning traces with tool calls produced significantly better multi-step task performance than either pure reasoning or pure tool use motivated the tight integration of [[Chain-of-Thought]] thinking with tool dispatch that characterises production SDKs.

  **Toolformer and the Self-Teaching Paradigm**: Toolformer (Schick et al., 2023) showed that language models could learn to call tools during fine-tuning by generating their own training examples of useful tool invocations, motivating the subsequent wave of instruction-tuning for tool use that made GPT-4, Claude 3, and Gemini 1.5 reliably capable tool users. The fundamental insight — that tool use is a learnable skill that can be trained through self-supervised objectives — underpins the capability on which all SDKs depend.

  **MemGPT and Memory Architecture**: MemGPT (Packer et al., 2023) demonstrated that an agent could manage its own memory hierarchy by treating the [[Context Window]] as a CPU cache and external storage as RAM, using self-generated memory management commands to decide what to move in and out of context. This conceptual framework directly influenced the tiered memory architectures (ephemeral context, session persistence, vector-indexed long-term memory) that all mature SDKs now provide.

  **SWE-agent and the Agent-Computer Interface**: Yang et al. (2024) introduced the ACI concept that formalised the insight that the design of the tool interface matters as much as the model capability. By providing a bash shell interface with careful command history management and file viewing tools optimised for the model's context organisation, SWE-agent substantially improved performance over baselines using the same model with poorly designed interfaces. This insight influenced tool design in production SDKs, particularly for coding and system administration use cases.

  **MCP Usage Analysis**: The empirical analysis of 177,000 MCP tool calls (arXiv 2603.23802, 2026) provided the first systematic characterisation of actual tool-use patterns in production agents, revealing that action tools dominate over retrieval tools (65% of uses by early 2026), that agent-created MCP servers account for a rapidly growing share (62% of new servers created with AI assistance by February 2026), and that the tool-use patterns of agents differ substantially from the patterns of human developers using the same tools. These empirical findings are informing SDK design decisions about which native tools to prioritise and how to structure tool schemas for maximum model legibility.

  ## Current Landscape (2026)

  By mid-2026, three SDKs capture the majority of new agent project starts globally: [[Strands Agents]] (Apache 2.0, AWS-backed, model-neutral), the [[OpenAI Agents SDK]] (closed, OpenAI-backed, tightly integrated with the OpenAI platform), and [[Mastra]] (TypeScript-first, VC-backed, Vercel-integrated). The [[Claude Agent SDK]] is the preferred choice for teams already using Claude Code in their development workflow and for teams that prioritise MCP integration depth and safety approval gate features; Anthropic's decision to begin metering Agent SDK credits separately from conversational API credits in June 2026 reflects the commercial maturity of the SDK. [[Google ADK]] holds significant traction among Google Cloud enterprise customers, particularly those using Vertex AI for model inference and wanting a unified deployment target. [[Pydantic AI]] is the dominant choice for Python teams seeking type-safety guarantees and seamless integration with existing FastAPI-based services.

  The competitive differentiation axes have stabilised around five dimensions: (1) MCP and A2A protocol integration depth; (2) quality and coverage of managed deployment infrastructure; (3) multi-agent primitive completeness; (4) language ecosystem fit and ergonomic API design; and (5) approval gate and [[AI Safety]] feature set for regulated enterprise deployments.

  The Linux Foundation Agentic AI Foundation (LAAF, established December 2025 with Anthropic, OpenAI, AWS, Google, Microsoft, and Cloudflare as founding members) is standardising protocol interoperability via MCP and A2A, which will reduce structural lock-in between SDK vendors over time. The practical implication is that the tool ecosystem (MCP servers) is increasingly vendor-neutral, while competition concentrates on the loop quality, deployment infrastructure, and enterprise features that SDKs provide above the protocol layer.

  MCP's adoption trajectory — 97 million monthly downloads, 41% enterprise production adoption, 4x growth in remote MCP servers since May 2025 — indicates that the tool-layer commodity has effectively arrived. The competitive differentiation frontier is shifting upward to multi-agent orchestration primitive quality, session management reliability over long-horizon tasks, observability depth, and the economic and governance primitives ([[AI Agent Payments]]) that will be required as agentic systems begin to spend money and make business decisions autonomously.

  ## UK Context

  UK adoption of Agent Development SDKs is concentrated in financial services, legal technology, public sector digital services, and advanced manufacturing. The intersection of these domains with the UK's strong AI safety regulation posture means that enterprise buyers consistently prioritise approval gate quality, audit logging depth, and [[inspect_ai]]-compatible evaluation coverage — all features where the [[Claude Agent SDK]] and [[OpenAI Agents SDK]] have invested heavily.

  The Alan Turing Institute's UK Multi-Agent Systems Symposium 2025 (UK-MAS) at King's College London featured research on SDK-level abstractions for multi-agent coordination, with particular focus on the formal verification of agent communication protocols — work directly relevant to the [[A2A Protocol]] and [[Agent Communication Protocol]] implementations in production SDKs. The Turing Institute's multi-agent systems research programme, which includes model criticism for multi-agent systems and statistical hypothesis testing of probabilistic agent models, provides theoretical grounding for the empirical observations about SDK reliability that practitioners are accumulating from production deployments.

  Imperial College London's London AI Technology Centre at White City, established through a 2026 partnership with Lenovo, conducts research on agentic AI deployment for industrial and healthcare applications, with SDK evaluation forming a component of their applied research programme. The centre is positioned to bridge academic research on multi-agent systems and the practical SDK selection decisions that large enterprise customers face.

  Edinburgh University's School of Informatics, as part of the UKRI national generative AI hub network, has active research on agent interoperability and typed agent composition — the latter directly relevant to [[Pydantic AI]]'s design philosophy and the broader trend toward formally typed agent APIs. UCL, which leads the national generative AI hub consortium, coordinates cross-institutional evaluation of SDK usability and safety, with outputs informing the UK Government's guidance for public sector AI deployment.

  In Northern England, Sheffield and Leeds's industrial AI adoption programmes are seeing uptake of [[Strands Agents]] among manufacturing and logistics companies building supply-chain decision agents on AWS infrastructure — reflecting both the Apache 2.0 licensing (attractive to cost-sensitive industrial customers) and the AWS infrastructure familiarity in this sector. Manchester's financial services ecosystem has begun evaluating the [[Claude Agent SDK]] for compliance-sensitive applications in banking and insurance, prioritising the approval gate and audit logging features.

  ## Future Directions (2026–2030)

  - **LAAF protocol standardisation**: convergence on the Linux Foundation Agentic AI Foundation protocol stack (MCP + A2A) as universal agent infrastructure, progressively reducing provider lock-in and enabling true multi-vendor agent networks where agents from different providers collaborate seamlessly
  - **IDE-native SDK integration**: agent development kits integrated directly into Cursor, VS Code, JetBrains, and similar IDEs as first-class development experiences, with in-editor agent testing, trace visualisation, and approval gate simulation — blurring the line between IDE plugin and full SDK
  - **Typed agent schemas**: formal capability declaration for agents analogous to OpenAPI for REST services, enabling automated compatibility checking, safe composition, and discovery — extending the Agent Card concept into a richer formal language
  - **Safety-first primitives**: built-in red-teaming hooks, OWASP Agentic Application scan integration, and policy-adherence testing as first-class SDK features rather than third-party add-ons; regulatory pressure from EU AI Act implementing acts (expected 2026 to 2027) will accelerate this trend
  - **[[AI Agent Payments]] integration**: stablecoin micropayment infrastructure for agent-to-tool-provider billing, agent-to-agent task delegation billing, and cross-provider credit markets, becoming standard SDK features as agentic commerce matures beyond the experimental stage
  - **Embodied agent SDK extensions**: extending digital agent SDKs (particularly Google ADK and Strands) to support robot control APIs, bridging the gap between digital and physical agent action spaces for manufacturing, logistics, and scientific laboratory automation use cases
  - **Long-horizon reliability engineering**: SDK features specifically designed for week-scale agent tasks — checkpoint/restore, partial-failure recovery, human-in-the-loop consultation at ambiguity points, and cost budgets that can be dynamically adjusted mid-task — as agent autonomy time horizons extend beyond what current session management architectures handle reliably

  ## Key Terminology

  - **Agent loop**: the core iteration of a model development SDK — model inference, tool dispatch, observation, re-inference — that drives autonomous task execution
  - **Tool registry**: the component that maps tool names to implementations, maintains tool schemas for the model, and manages tool lifecycle (startup, health checking, shutdown)
  - **Agent Card**: the A2A Protocol's structured JSON manifest describing an agent's capabilities, schema, and communication address; enables agent discovery and declarative composition
  - **MCP server**: a service exposing one or more tools via the Model Context Protocol, discoverable and callable by any MCP-capable agent regardless of which SDK is running the agent loop
  - **Session persistence**: the mechanism by which an agent's conversation state is checkpointed to durable storage, enabling resumption after process interruption
  - **Approval gate**: a configurable decision point in the agent loop where execution pauses and a proposed action is surfaced to a human reviewer before being executed
  - **Multi-agent primitive**: a higher-order composition construct (SubAgent, ParallelAgent, Pipeline, GraphAgent) that combines multiple single-agent instances into a coordinated multi-agent system within a single SDK
  - **Time horizon**: the longest autonomous task completable at ≥50% pass rate; a key metric for assessing which agent SDK primitives are appropriate for a given use case (short tasks can use ephemeral context; long tasks require session persistence and [[Human-in-the-Loop]] check-ins)

  ## Research and Literature

  1. Yao, S., Zhao, J., Yu, D., Du, N., Shafran, I., Narasimhan, K., & Cao, Y. (2023). ReAct: Synergizing Reasoning and Acting in Language Models. *ICLR 2023*. https://arxiv.org/abs/2210.03629
  2. Schick, T., Dwivedi-Yu, J., Dessì, R., Raileanu, R., Lomeli, M., Zettlemoyer, L., & Scialom, T. (2023). Toolformer: Language Models Can Teach Themselves to Use Tools. *NeurIPS 2023*. https://arxiv.org/abs/2302.04761
  3. Packer, C., Wooders, S., Lin, K., Fang, V., Patil, S., Stoica, I., & Gonzalez, J. (2023). MemGPT: Towards LLMs as Operating Systems. *arXiv 2310.08560*. https://arxiv.org/abs/2310.08560
  4. Yang, J., Jimenez, C., Wettig, A., Lieret, K., Yao, S., Narasimhan, K., & Press, O. (2024). SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering. *arXiv 2405.15793*. https://arxiv.org/abs/2405.15793
  5. Anthropic (2024). Model Context Protocol Specification. https://spec.modelcontextprotocol.io
  6. Anthropic (2025–2026). Claude Agent SDK Documentation and Overview. https://code.claude.com/docs/en/agent-sdk/overview
  7. Anthropic (2026). Building Agents with the Claude Agent SDK. https://claude.com/blog/building-agents-with-the-claude-agent-sdk
  8. AWS Open Source Blog (2025). Introducing Strands Agents, an Open Source AI Agents SDK. https://aws.amazon.com/blogs/opensource/introducing-strands-agents-an-open-source-ai-agents-sdk/
  9. AWS Open Source Blog (2026). Introducing Strands Agents 1.0: Production-Ready Multi-Agent Orchestration Made Simple. https://aws.amazon.com/blogs/opensource/introducing-strands-agents-1-0-production-ready-multi-agent-orchestration-made-simple/
  10. AWS Machine Learning Blog (2025). Strands Agents SDK: A Technical Deep Dive into Agent Architectures and Observability. https://aws.amazon.com/blogs/machine-learning/strands-agents-sdk-a-technical-deep-dive-into-agent-architectures-and-observability/
  11. Google (2025). Agent Development Kit Documentation. https://google.github.io/adk-docs/
  12. MindStudio (2026). Agent SDK vs Framework: When to Use Claude Agent SDK vs Pydantic AI for Production. https://www.mindstudio.ai/blog/agent-sdk-vs-framework-claude-pydantic-ai-production
  13. Low Code Agency (2026). Claude vs Pydantic AI: SDK vs Agent Framework. https://www.lowcode.agency/blog/claude-vs-pydantic-ai
  14. Morphllm (2026). AI Agent Frameworks 2026 Update: 8 SDKs Compared + the Claude Agent SDK Primitive Reference. https://www.morphllm.com/ai-agent-framework
  15. QubitTool (2026). 2026 AI Agent Framework Showdown: LangGraph vs CrewAI vs AG2 vs Claude SDK vs Strands vs OpenAI. https://qubittool.com/blog/ai-agent-framework-comparison-2026
  16. RockB Blog (2026). AI Agents SDK Comparison 2026: Strands vs OpenAI SDK vs Mastra. https://baeseokjae.github.io/posts/ai-agents-sdk-comparison-2026/
  17. Digital Applied (2026). MCP Adoption Statistics 2026: Model Context Protocol. https://www.digitalapplied.com/blog/mcp-adoption-statistics-2026-model-context-protocol
  18. Digital Applied (2026). MCP Hits 97M Downloads: Model Context Protocol Guide. https://www.digitalapplied.com/blog/mcp-97-million-downloads-model-context-protocol-mainstream
  19. Zuplo (2026). The State of MCP — Adoption, Security and Production Readiness. https://zuplo.com/mcp-report
  20. How Are AI Agents Used? Evidence from 177,000 MCP Tools. *arXiv 2603.23802*. https://arxiv.org/html/2603.23802v1
  21. ClickHouse (2025). How to Build AI Agents with MCP: 12 Framework Comparison. https://clickhouse.com/blog/how-to-build-ai-agents-mcp-12-frameworks
  22. Firecrawl (2026). How to Build AI Agents with the Claude Agent SDK and Firecrawl. https://www.firecrawl.dev/blog/claude-agent-sdk-firecrawl
  23. Digital Applied (2026). AI Agent Protocol Ecosystem Map 2026: Complete Visual. https://www.digitalapplied.com/blog/ai-agent-protocol-ecosystem-map-2026-mcp-a2a-acp-ucp
  24. Pento (2025). A Year of MCP: From Internal Experiment to Industry Standard. https://www.pento.ai/blog/a-year-of-mcp-2025-review
  25. Alan Turing Institute (2025). UK Multi-Agent Systems Symposium 2025. https://www.turing.ac.uk/events/uk-multi-agent-systems-symposium-2025-uk-mas
  26. TechPlained (2026). Claude Agent SDK: Build Custom AI Agents. https://www.techplained.com/claude-agent-sdk
  27. Wang, X. et al. (2025). The 2025 AI Agent Index: Documenting Technical and Safety Features of Deployed Agentic AI Systems. *arXiv 2602.17753*. https://arxiv.org/abs/2602.17753
  28. AWS Builder Center (2026). Strands Agents and AgentCore: Two Pieces of the Same Puzzle. https://builder.aws.com/content/3CJ46VRteYg1vg0FIqbvcQBrGt8/strands-agents-and-agentcore-two-pieces-of-the-same-puzzle

  ## Protocol Integration Deep Dive

  The two standardised protocols that underpin all major Agent Development SDKs — [[Model Context Protocol]] and [[A2A Protocol]] — deserve detailed examination because understanding their design and relationship illuminates the architectural choices each SDK makes.

  ### [[Model Context Protocol]] (MCP) Architecture

  MCP defines a client-server protocol where an MCP client (running inside the agent) connects to one or more MCP servers (running as separate processes or remote services) to discover and invoke tools. The protocol uses JSON-RPC 2.0 over stdio (for local subprocess servers), HTTP with Server-Sent Events (for remote servers), or WebSockets (for bidirectional streaming). The protocol lifecycle is:

  **Server initialisation**
  - Client connects to server via transport (stdio, HTTP, WebSocket)
  - Client sends `initialize` request with protocol version and capabilities
  - Server responds with its capabilities, protocol version, and server info
  - Client sends `initialized` notification to complete handshake

  **Tool discovery**
  - Client sends `tools/list` request
  - Server responds with array of tool definitions: each tool has a name, description (used by the model to understand when to invoke it), and JSON Schema input specification
  - Client registers discovered tools with the model's function-calling schema translator

  **Tool invocation**
  - Model emits a tool-call with tool name and argument values matching the schema
  - SDK's MCP client sends `tools/call` request to the appropriate server
  - Server executes the tool and returns structured result (text, image, embedded resource, or error)
  - SDK formats the result as a tool-result message and reinserts it into the conversation context

  **Resource access (optional)**
  - Servers can expose resources (files, database rows, API responses) that tools can read
  - `resources/list` and `resources/read` requests enable agents to browse and read structured data without wrapping it in a tool call

  MCP's key design decisions: the tool description string is the primary interface between tool authors and models, so good MCP server quality depends on clear, concise, example-rich descriptions that help the model decide when and how to use each tool. The JSON Schema input specification provides type safety and enables the model to reason about valid argument combinations. The transport-agnostic design enables both local development (stdio subprocess) and production deployment (remote HTTPS server) without SDK code changes.

  ### [[A2A Protocol]] Architecture

  A2A (Agent-to-Agent) extends MCP's tool-calling pattern to cover the case where the "tool" being called is itself another agent. The protocol introduces:

  **Agent Cards**
  - JSON manifest files describing an agent's capabilities, input/output schema, supported task types, communication address, and authentication requirements
  - Published to an agent directory or discoverable via well-known URL
  - Consumed by orchestrators to determine which agents to route specific tasks to
  - Google ADK makes Agent Cards a first-class concept with tooling to generate and validate them

  **Task protocol**
  - Orchestrator sends task message to agent via A2A transport (HTTP/SSE or WebSocket)
  - Task message includes: task description, context (conversation history, relevant documents), required output schema, and callback address for async results
  - Agent accepts, processes, and returns structured result conforming to the requested schema
  - Streaming updates (progress, intermediate results) supported via SSE

  **Authentication and trust**
  - A2A defines OAuth 2.0 and API key authentication patterns for agent-to-agent communication
  - Enterprise deployments combine A2A authentication with service-mesh mTLS for additional security
  - The Linux Foundation Agentic AI Foundation (LAAF) is developing trust-level specifications for A2A communication in regulated contexts

  **Cross-SDK interoperability**
  - An orchestrator built on [[Strands Agents]] can discover and call an agent built on [[Google ADK]] via A2A, as long as both correctly implement the A2A Agent Card and task protocol
  - This is the key promise of standardised protocols: SDK competition on implementation quality, not lock-in via proprietary communication formats
  - As of mid-2026, A2A interoperability between [[Strands Agents]], [[Google ADK]], and [[Claude Agent SDK]] is in production use at several enterprise deployments

  ### MCP Statistics and Ecosystem Scale (Mid-2026)

  The growth of the MCP ecosystem provides concrete evidence of the network effects that standardised protocols enable:

  - Monthly SDK downloads: 97 million (March 2026), up from ~100,000 in November 2024 (970x growth in 16 months)
  - Official MCP Registry: 9,652 latest server records as of May 24, 2026
  - Active public MCP servers: over 10,000 (Anthropic December 2025 count); 17,468 indexed by Nerq in Q1 2026
  - Enterprise adoption: 41% of surveyed software organisations with MCP servers in limited or broad production
  - Remote MCP server growth: 4x since May 2025, indicating shift from experimentation to deployment
  - Tool use distribution shift: action tools (MCP calls, file ops, API requests) grew from 27% to 65% of total tool uses (November 2024 to February 2026)
  - AI-assisted server creation: 62% of new MCP servers created with AI assistance by February 2026 (up from 6% in January 2025), dominated by Claude Code

  These numbers establish MCP as the fastest-adopted developer protocol in AI infrastructure history, faster than REST, GraphQL, or gRPC at equivalent adoption milestones. For [[Agent Development SDKs]], the implication is that any SDK without strong MCP integration is effectively locked out of the standard tool ecosystem — a structural constraint that ensures continued convergence on MCP as the tool-layer standard.

  ## SDK Feature Comparison Matrix (Mid-2026)

  The following captures primary differentiating features across major SDK platforms as of mid-2026:

  **[[Claude Agent SDK]] (Anthropic)**
  - Languages: Python, TypeScript
  - MCP integration: deepest (Anthropic is MCP author); ships MCP reference client
  - A2A support: yes (full Agent Card generation and A2A routing)
  - Managed deployment: Anthropic managed compute; metered Agent SDK credits (separate from API credits since June 2026)
  - Computer use: yes (first-class native tool exposing screenshot + keyboard/mouse API)
  - Approval gates: advanced (configurable criteria, async human review, audit log)
  - Observability: OpenTelemetry traces, Anthropic dashboard
  - Multi-agent primitives: SubAgent (via tool nesting); Pipeline (via sequential calls); advanced orchestration requires external framework
  - Licence: commercial (tied to Anthropic API agreement)
  - Primary use case: coding agents, legal assistants, SRE bots; highest MCP ecosystem compatibility

  **[[Google ADK]] (Google DeepMind)**
  - Languages: Python, TypeScript, Java, Go
  - MCP integration: yes (via adapter); growing ecosystem
  - A2A support: yes (Agent Cards are a core native concept)
  - Managed deployment: Vertex AI Agent Engine (fully managed, autoscaling, built-in Cloud Logging)
  - Computer use: yes (via multi-modal tool calls and browser automation)
  - Approval gates: yes (integration with Cloud Workflows approval steps)
  - Observability: Cloud Trace, Cloud Logging, Vertex AI Model Monitoring
  - Multi-agent primitives: SubAgent, Parallel, Pipeline, GraphAgent (all four patterns)
  - Licence: open-source Apache 2.0 (SDK); Vertex AI Agent Engine is commercial managed service
  - Primary use case: Google Cloud-native enterprise deployments, Workspace automation, multi-language teams

  **[[Strands Agents]] (AWS)**
  - Languages: Python (1.0 May 2026), TypeScript (1.0 April 2026)
  - MCP integration: yes (full MCP client; 20+ pre-built tools; any MCP server pluggable)
  - A2A support: yes (added in 1.0 release)
  - Managed deployment: AWS AgentCore (managed), also Lambda/ECS/local
  - Computer use: via custom tools or MCP server integration
  - Approval gates: yes (human-in-the-loop hooks; AWS Step Functions integration for enterprise approval workflows)
  - Observability: AWS CloudWatch, X-Ray tracing; OpenTelemetry compatible
  - Multi-agent primitives: SubAgent, ParallelAgent, Pipeline, GraphAgent (introduced in 1.0)
  - Licence: Apache 2.0 (SDK); AWS AgentCore is commercial managed service
  - Model flexibility: highest (any Bedrock model, Anthropic direct, Llama API, Ollama, any OpenAI-compatible via LiteLLM)
  - Primary use case: AWS-infrastructure teams, model-neutral deployments, enterprise multi-agent systems

  **[[OpenAI Agents SDK]]**
  - Languages: Python, TypeScript
  - MCP integration: yes (via adapters); growing
  - A2A support: partial (Responses API handles state; cross-provider A2A in progress)
  - Managed deployment: OpenAI platform (Responses API with hosted session state)
  - Computer use: via Code Interpreter and Operator tool
  - Approval gates: yes (harness system with structured human review)
  - Observability: OpenAI platform dashboard; OpenTelemetry hooks
  - Multi-agent primitives: handoff pattern (from Swarm); parallel execution via async patterns
  - Licence: MIT (SDK); OpenAI API is commercial
  - Primary use case: GPT-4o-based deployments, ChatGPT operator integrations, OpenAI platform customers

  **[[Pydantic AI]]**
  - Languages: Python only
  - MCP integration: yes (added early 2025)
  - A2A support: community adapters; not first-class as of mid-2026
  - Managed deployment: any Python-compatible hosting; no first-party managed runtime
  - Computer use: via custom tools
  - Approval gates: via dependency injection pattern; no first-class built-in
  - Observability: Logfire integration (Pydantic's own observability product); OpenTelemetry compatible
  - Multi-agent primitives: agent-as-tool pattern; no dedicated multi-agent primitives yet
  - Licence: MIT
  - Primary use case: FastAPI-integrated backends, type-safe Python codebases, data engineering teams

  **[[Mastra]] (TypeScript-first)**
  - Languages: TypeScript / JavaScript only
  - MCP integration: yes (first-class)
  - A2A support: yes (growing)
  - Managed deployment: Vercel integration; also Cloudflare Workers
  - Computer use: via browser automation tool integrations
  - Approval gates: yes (workflow approval steps)
  - Observability: built-in tracing; Vercel analytics integration
  - Multi-agent primitives: workflow graph with agent nodes; parallel step execution
  - Licence: Apache 2.0
  - Primary use case: Next.js and web-native agent applications, TypeScript-first teams

  ## SDK Selection Decision Framework

  Practitioners selecting an Agent Development SDK in 2026 typically apply the following decision criteria in sequence:

  **Language and ecosystem fit (first filter)**
  - Python-only team building FastAPI service → [[Pydantic AI]]
  - TypeScript/Next.js team → [[Mastra]] or [[Claude Agent SDK]] TypeScript
  - Multi-language enterprise (Java, Go backends) → [[Google ADK]]
  - Python team with no language constraint → evaluate all Python SDKs on remaining criteria

  **Infrastructure lock-in tolerance**
  - AWS-committed infrastructure → [[Strands Agents]] + AWS AgentCore
  - Google Cloud-committed → [[Google ADK]] + Vertex AI Agent Engine
  - Provider-neutral requirement → [[Strands Agents]] (Apache 2.0, model-neutral) or [[Pydantic AI]]
  - Already Anthropic API customer → [[Claude Agent SDK]]

  **Feature priority ranking**
  - MCP ecosystem depth → [[Claude Agent SDK]] (Anthropic is MCP author)
  - Agent Card / A2A interoperability → [[Google ADK]] or [[Strands Agents]] 1.0
  - Model flexibility (run Claude, GPT-4, Llama, local models) → [[Strands Agents]]
  - Type safety and FastAPI integration → [[Pydantic AI]]
  - Computer use (GUI automation) → [[Claude Agent SDK]]
  - Regulated enterprise (approval gates, audit logging) → [[Claude Agent SDK]] or [[OpenAI Agents SDK]]

  **Deployment and scaling requirement**
  - Serverless, event-driven, low-cost → AWS Lambda + [[Strands Agents]]
  - Managed, autoscaling, no DevOps → Vertex AI Agent Engine + [[Google ADK]]
  - Vercel/Edge deployment → [[Mastra]]
  - On-premise or private cloud → [[Strands Agents]] or [[Pydantic AI]] (both self-hostable)

  **Evaluation and compliance**
  - Need [[Agent Evaluation Benchmarks]] coverage for procurement justification → all major SDKs run against relevant benchmarks; check provider's published scores on SWE-bench/GAIA/TAU-bench
  - Regulated sector (finance, healthcare, public sector UK) → prioritise approval gates, audit logging, and [[AI Safety]] feature set; [[Claude Agent SDK]] and [[OpenAI Agents SDK]] most mature here
  - EU AI Act high-risk deployment → ensure SDK supports structured audit trail and human oversight; verify against OWASP Agentic Application Top 10 evaluation suite

- ### Provenance
  - sources:: https://code.claude.com/docs/en/agent-sdk/overview, https://aws.amazon.com/blogs/opensource/introducing-strands-agents-an-open-source-ai-agents-sdk/, https://google.github.io/adk-docs/, https://www.digitalapplied.com/blog/mcp-adoption-statistics-2026-model-context-protocol, https://arxiv.org/html/2603.23802v1, https://arxiv.org/abs/2210.03629, https://arxiv.org/abs/2302.04761, https://arxiv.org/abs/2310.08560, https://arxiv.org/abs/2405.15793, https://www.turing.ac.uk/events/uk-multi-agent-systems-symposium-2025-uk-mas, https://www.morphllm.com/ai-agent-framework
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
