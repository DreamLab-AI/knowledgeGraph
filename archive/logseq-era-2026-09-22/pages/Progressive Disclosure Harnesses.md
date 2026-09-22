public:: true

# Progressive Disclosure Harnesses
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:progressive-disclosure-harnesses",
  "@type": "Page",
  "vc:slug": "progressive-disclosure-harnesses",
  "title": "Progressive Disclosure Harnesses",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:agent-harness", "vc:label": "Agent Harness"},
    {"@id": "urn:visionflow:linked:agent-memory-layers", "vc:label": "Agent Memory Layers"},
    {"@id": "urn:visionflow:linked:harness-configuration-packs", "vc:label": "Harness Configuration Packs"},
    {"@id": "urn:visionflow:linked:internal-ai-harness", "vc:label": "Internal AI Harness"},
    {"@id": "urn:visionflow:linked:external-ai-harness", "vc:label": "External AI Harness"},
    {"@id": "urn:visionflow:linked:context-window", "vc:label": "Context Window"},
    {"@id": "urn:visionflow:linked:model-context-protocol", "vc:label": "Model Context Protocol"},
    {"@id": "urn:visionflow:linked:tool-use", "vc:label": "Tool Use"},
    {"@id": "urn:visionflow:linked:function-calling", "vc:label": "Function Calling"},
    {"@id": "urn:visionflow:linked:large-language-models", "vc:label": "Large Language Models"},
    {"@id": "urn:visionflow:linked:retrieval-augmented-generation", "vc:label": "Retrieval-Augmented Generation"},
    {"@id": "urn:visionflow:linked:embeddings", "vc:label": "Embeddings"},
    {"@id": "urn:visionflow:linked:vector-database", "vc:label": "Vector Database"},
    {"@id": "urn:visionflow:linked:agent-loop", "vc:label": "Agent Loop"},
    {"@id": "urn:visionflow:linked:multi-agent-system", "vc:label": "Multi-Agent System"},
    {"@id": "urn:visionflow:linked:agentic-workflow", "vc:label": "Agentic Workflow"},
    {"@id": "urn:visionflow:linked:prompt-engineering", "vc:label": "Prompt Engineering"},
    {"@id": "urn:visionflow:linked:information-retrieval", "vc:label": "Information Retrieval"},
    {"@id": "urn:visionflow:linked:semantic-search", "vc:label": "Semantic Search"},
    {"@id": "urn:visionflow:linked:agentic-rag", "vc:label": "Agentic RAG"},
    {"@id": "urn:visionflow:linked:terminal-coding-agents", "vc:label": "Terminal Coding Agents"},
    {"@id": "urn:visionflow:linked:ide-coding-agents", "vc:label": "IDE Coding Agents"},
    {"@id": "urn:visionflow:linked:personal-agent-runtimes", "vc:label": "Personal Agent Runtimes"},
    {"@id": "urn:visionflow:linked:hallucination", "vc:label": "Hallucination"},
    {"@id": "urn:visionflow:linked:attention-mechanism", "vc:label": "Attention Mechanism"},
    {"@id": "urn:visionflow:linked:chain-of-thought", "vc:label": "Chain of Thought"},
    {"@id": "urn:visionflow:linked:ai-infrastructure", "vc:label": "AI Infrastructure"},
    {"@id": "urn:visionflow:linked:planning-and-scheduling", "vc:label": "Planning and Scheduling"},
    {"@id": "urn:visionflow:linked:knowledge-graph", "vc:label": "Knowledge Graph"},
    {"@id": "urn:visionflow:linked:task-automation", "vc:label": "Task Automation"},
    {"@id": "urn:visionflow:linked:foundation-model", "vc:label": "Foundation Model"},
    {"@id": "urn:visionflow:linked:multi-agent-orchestration-frameworks", "vc:label": "Multi-Agent Orchestration Frameworks"},
    {"@id": "urn:visionflow:linked:agent-evaluation-benchmarks", "vc:label": "Agent Evaluation Benchmarks"},
    {"@id": "urn:visionflow:linked:compression", "vc:label": "Compression"},
    {"@id": "urn:visionflow:linked:provenance", "vc:label": "Provenance"},
    {"@id": "urn:visionflow:linked:ai-safety", "vc:label": "AI Safety"},
    {"@id": "urn:visionflow:linked:human-in-the-loop", "vc:label": "Human-in-the-Loop"},
    {"@id": "urn:visionflow:linked:approximate-nearest-neighbour-search", "vc:label": "Approximate Nearest Neighbour Search"},
    {"@id": "urn:visionflow:linked:orchestration", "vc:label": "Orchestration"},
    {"@id": "urn:visionflow:linked:autonomous-agent", "vc:label": "Autonomous Agent"},
    {"@id": "urn:visionflow:linked:agent-identity", "vc:label": "Agent Identity"},
    {"@id": "urn:visionflow:linked:in-context-learning", "vc:label": "In-Context Learning"},
    {"@id": "urn:visionflow:linked:eu-ai-act", "vc:label": "EU AI Act"},
    {"@id": "urn:visionflow:linked:gdpr", "vc:label": "GDPR"},
    {"@id": "urn:visionflow:linked:privacy", "vc:label": "Privacy"},
    {"@id": "urn:visionflow:linked:fine-tuning", "vc:label": "Fine-Tuning"},
    {"@id": "urn:visionflow:linked:self-reflection", "vc:label": "Self-Reflection"},
    {"@id": "urn:visionflow:linked:cognitive-architecture", "vc:label": "Cognitive Architecture"}
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:progressive-disclosure-harnesses",
  "@type": "Class",
  "label": "Progressive Disclosure Harnesses",
  "definition": "Formats, runtimes, and patterns that reveal context, tools, or instructions to agents in layers — index first, details on demand — to control token usage and improve agent focus — includes MCP-Zero, ToolGen, ToolRAG, langgraph-bigtool, agents.md, and awesome-cursorrules.",
  "domain": "ai",
  "maturity": "emerging",
  "qualityScore": 0.90,
  "subClassOf": [
      {
            "@id": "urn:ngm:class:agent-harness",
            "label": "Agent Harness"
      }
],
  "relations": {
      "requires": [
            {"@id": "urn:ngm:class:model-context-protocol", "label": "Model Context Protocol"},
            {"@id": "urn:ngm:class:embeddings", "label": "Embeddings"},
            {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
            {"@id": "urn:ngm:class:context-window", "label": "Context Window"}
      ],
      "enables": [
            {"@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow"},
            {"@id": "urn:ngm:class:task-automation", "label": "Task Automation"},
            {"@id": "urn:ngm:class:multi-agent-system", "label": "Multi-Agent System"}
      ],
      "hasPart": [
            {"@id": "urn:ngm:class:tool-index", "label": "Tool Index"},
            {"@id": "urn:ngm:class:schema-loader", "label": "Schema Loader"},
            {"@id": "urn:ngm:class:semantic-router", "label": "Semantic Router"}
      ],
      "relatedTo": [
            {
                  "@id": "urn:ngm:class:agent-memory-layers",
                  "label": "Agent Memory Layers"
            },
            {
                  "@id": "urn:ngm:class:harness-configuration-packs",
                  "label": "Harness Configuration Packs"
            },
            {
                  "@id": "urn:ngm:class:terminal-coding-agents",
                  "label": "Terminal Coding Agents"
            },
            {
                  "@id": "urn:ngm:class:agentic-rag",
                  "label": "Agentic RAG"
            }
      ]
},
  "vc:termId": "AI-9916",
  "vc:schemaVersion": 2,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "FullEnrichment"
  }
}
```

- ### Definition
  - Progressive Disclosure Harnesses are a class of formats, runtimes, and design patterns within the [[Agent Harness]] taxonomy that regulate how context, tools, instructions, and capabilities are revealed to an [[Autonomous Agent]] in ordered layers — providing a high-level index first and surfacing full detail only when the agent explicitly requests it — with the primary engineering goal of controlling [[Context Window]] token consumption while maintaining full task competence across large and heterogeneous tool surfaces. The fundamental problem being solved is context bloat: when an [[Large Language Models]]-based agent has access to dozens or hundreds of tools via [[Model Context Protocol]] or [[Function Calling]] interfaces, naively injecting the complete JSON schema definition of every available tool into each model call creates a prohibitive context tax — often consuming 10,000-80,000 tokens before the agent has even begun reasoning about the task, degrading model accuracy through attention dilution, increasing per-call cost, and artificially limiting the tool surface to what can physically fit in the [[Context Window]]. Progressive Disclosure Harnesses resolve this by separating tool discoverability from tool specification: the agent receives a compact index of available capability categories at the outset, then issues targeted requests for detailed schemas of only the tools it actually needs for the current step, achieving 85-160x token reductions (benchmarked 2025-2026) while maintaining or improving task success rates. The paradigm has three implementation families: **active tool discovery** systems where the agent itself autonomously identifies capability gaps and issues requests for specific tools on-demand (MCP-Zero, arXiv:2506.01056, achieving 98% fewer tokens than full-schema injection at ~2.8K tools); **retrieval-based tool selection** systems that use [[Embeddings]]-based [[Semantic Search]] over a tool registry to surface the most relevant tools for the current agent state (langgraph-bigtool, ToolRAG, Toolshed); and **token-generation-unified** systems that encode tool knowledge directly into model weights rather than injecting tool schemas at inference time, eliminating the schema injection cost entirely (ToolGen, arXiv:2410.03439, ICLR 2025, demonstrating superior performance across 47,000+ tools). Beyond tool management, the same progressive disclosure principle is applied to instruction formats (agents.md, .cursorrules, Claude Code Skills — all structured to provide names and descriptions first, full instructions on task-relevance trigger) and to [[Agentic RAG]] document retrieval (index-first, chunk-on-demand). By mid-2026 progressive disclosure has become the de facto architecture for any agent deployment with more than 30 tools or complex instruction sets, with Claude Code v2.1.7 adopting automatic progressive disclosure that triggers when MCP tool descriptions would exceed 10% of available context, LangGraph DeepAgents codifying the pattern as a first-class primitive, and the MCP protocol itself adding tool-search capability as a standard extension. The class bridges [[Harness Configuration Packs]] (which provide the structured instruction content to be progressively disclosed) and [[Agent Memory Layers]] (which supply the retrieval substrate enabling semantic tool search).

- ### Semantic Classification
  - owl-class:: ai:ProgressiveDisclosureHarnesses
  - owl-role:: ExecutableProtocol | Concept | ContextManagementPattern
  - owl-inferred:: ai:TokenEfficientHarness, ai:ActiveToolDiscovery, ai:SemanticToolRouter, ai:DemandDrivenSchemaLoader, ai:CapabilityIndexSystem
  - belongs-to-domain:: [[AI-GroundedDomain]], [[ComputationAndIntelligenceDomain]]
  - implemented-in-layer:: [[ApplicationLayer]], [[InfrastructureLayer]]

- ### Relationships
  - is-subclass-of:: [[Agent Harness]], [[AI Infrastructure]], [[Cognitive Architecture]]
  - has-part:: [[Model Context Protocol]], [[Embeddings]], [[Vector Database]], [[Semantic Search]], [[Information Retrieval]], [[Tool Index]], [[Schema Loader]], [[Semantic Router]]
  - requires:: [[Model Context Protocol]], [[Embeddings]], [[Large Language Models]], [[Context Window]], [[Foundation Model]], [[Function Calling]], [[Agent Loop]], [[Vector Database]]
  - enables:: [[Agentic Workflow]], [[Task Automation]], [[Multi-Agent System]], [[Planning and Scheduling]], [[Tool Use]], [[In-Context Learning]], [[Orchestration]], [[Autonomous Agent]], [[Agentic RAG]]
  - implements:: [[Retrieval-Augmented Generation]], [[Agentic RAG]], [[Semantic Search]], [[Approximate Nearest Neighbour Search]], [[Chain of Thought]], [[Information Retrieval]]
  - depends-on:: [[Agent Loop]], [[Large Language Models]], [[Vector Database]], [[Embeddings]], [[Model Context Protocol]], [[Foundation Model]], [[Function Calling]]
  - supports:: [[Terminal Coding Agents]], [[IDE Coding Agents]], [[Multi-Agent Orchestration Frameworks]], [[AI Safety]], [[Human-in-the-Loop]], [[Agent Evaluation Benchmarks]], [[Personal Agent Runtimes]], [[Harness Configuration Packs]]
  - uses:: [[Function Calling]], [[Tool Use]], [[Knowledge Graph]], [[Prompt Engineering]], [[Compression]], [[Embeddings]], [[Approximate Nearest Neighbour Search]], [[Retrieval-Augmented Generation]]
  - contrasts-with:: [[Harness Configuration Packs]], [[In-Context Learning]], [[Fine-Tuning]], [[Hallucination]]
  - related-to:: [[Agent Memory Layers]], [[Harness Configuration Packs]], [[Personal Agent Runtimes]], [[Internal AI Harness]], [[External AI Harness]], [[Hallucination]], [[Privacy]], [[GDPR]], [[Provenance]], [[Attention Mechanism]], [[Self-Reflection]], [[Multi-Agent Orchestration Frameworks]], [[Agent Identity]], [[Agentic AI]]
  - standardized-by:: [[Model Context Protocol]], [[EU AI Act]]

- ### Content
  - ## Compositional Relationships (Components)
    - ```
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:hasPart ai:ToolIndex))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:hasPart ai:SchemaLoader))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:hasPart ai:SemanticRouter))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:hasPart ai:CapabilityCategories))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:hasPart ai:EmbeddingIndex))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:hasPart ai:DemandLoader))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:hasPart ai:InstructionLayerSpec))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:hasPart ai:FallbackFullLoader))
      ```
  - ## Dependency Relationships
    - ```
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:requires ai:ModelContextProtocol))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:requires ai:Embeddings))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:requires ai:LargeLanguageModels))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:requires ai:ContextWindow))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:requires ai:FunctionCalling))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:dependsOn ai:AgentLoop))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:dependsOn ai:VectorDatabase))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:dependsOn ai:FoundationModel))
      ```
  - ## Capability Relationships
    - ```
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:enables ai:AgenticWorkflow))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:enables ai:TaskAutomation))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:enables ai:MultiAgentSystem))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:enables ai:PlanningAndScheduling))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:enables ai:ToolUse))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:supports ai:TerminalCodingAgents))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:supports ai:IDECodingAgents))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:supports ai:MultiAgentOrchestrationFrameworks))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:supports ai:AISafety))
      ```
  - ## Implementation Relationships
    - ```
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:implements ai:RetrievalAugmentedGeneration))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:implements ai:SemanticSearch))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:implements ai:ApproximateNearestNeighbourSearch))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:uses ai:FunctionCalling))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:uses ai:ToolUse))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:uses ai:Embeddings))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:uses ai:PromptEngineering))
      ```
  - ## Reduction Relationships
    - ```
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:reducesTo ai:AgentHarness))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:contrastsWith ai:HarnessConfigurationPacks))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:contrastsWith ai:InContextLearning))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:bridgesTo ai:AgentMemoryLayers))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:bridgesTo ai:AgenticRAG))
      SubClassOf(ai:ProgressiveDisclosureHarnesses
        ObjectSomeValuesFrom(ai:bridgesTo ai:TerminalCodingAgents))
      ```

  - ## About
    - The progressive disclosure problem in agent harness engineering arises directly from the structural tension between two properties of transformer-based [[Large Language Models]]: the soft limit on useful information density within the [[Context Window]] and the expanding surface area of tools, capabilities, and instructions that production agent deployments require. In 2022-2023, most agents operated with fewer than 20 tools, and injecting all tool schemas was feasible. By 2024-2025, agent deployments began routinely integrating hundreds of [[Model Context Protocol]] servers, each exposing dozens of tools — a production deployment serving 300+ tools faces a 40,000-100,000 token context burden from tool schema injection alone before any task-specific content enters the window. Empirical research documented the accuracy degradation: models receiving more than 30-40 simultaneous tool descriptions show statistically significant drops in tool selection accuracy, task completion rates, and [[Chain of Thought]] coherence (Speakeasy 2025, solo.io analysis 2026, matthewkruczek.ai benchmark 2025). The lost-in-the-middle phenomenon — where [[Attention Mechanism]] weights assign lower influence to information positioned in the middle of a long context — was specifically identified as a driver of tool selection errors when tool schemas were densely packed into a single massive context prefix.
    - The progressive disclosure pattern resolves this by applying a layered information architecture borrowed from human-computer interaction design, where the term "progressive disclosure" was coined by J.M. Carroll and Mazur (1986) to describe interfaces that present minimal information at entry and reveal additional complexity only when users explicitly request it. Applied to agent harnesses, this translates to: at the start of each [[Agent Loop]] step, the agent receives a compact summary-level index of available tool categories and capability areas — typically under 500 tokens regardless of the total tool surface; when the agent determines it needs a specific tool, it issues a retrieval request specifying the capability it needs; the harness returns the full JSON schema for only the matched tools, typically 1,000-3,000 tokens rather than 40,000-100,000 tokens for the full library. The net result is a context window that remains predominantly allocated to task-relevant content rather than tool specification overhead.
    - Three distinct implementation philosophies have emerged. The **passive retrieval** approach (langgraph-bigtool, ToolRAG, Toolshed) positions progressive disclosure as a retrieval problem: tool schemas are stored in a [[Vector Database]] with [[Embeddings]]; at each step the harness embeds the agent's current query or state description and retrieves the top-k most semantically similar tools, injecting only those schemas into the window. This approach requires no model modification, works with any [[Foundation Model]], and achieves 85-100x token reduction. The **active discovery** approach (MCP-Zero, arXiv:2506.01056) inverts the locus of control: rather than the harness retrieving tools for the agent, the agent itself issues structured natural-language tool requests describing the capability gap it needs to fill; the harness routes these requests via a two-stage hierarchical semantic routing algorithm to the appropriate MCP server and tool. MCP-Zero achieves 98% token reduction at ~2,800 tools while maintaining strong multi-turn consistency (approximately 3% accuracy drop versus over 20% in passive retrieval baselines). The **generative unification** approach (ToolGen, arXiv:2410.03439, ICLR 2025) embeds tool knowledge directly into [[Fine-Tuning]]-adjusted model weights rather than injecting schemas at inference time: each tool is represented as a unique vocabulary token; the model retrieves and calls tools by generating the appropriate token sequence, with no schema injection at inference time. ToolGen demonstrates superior performance at 47,000+ tools — a scale at which both passive retrieval and active discovery face practical challenges — at the cost of requiring model fine-tuning for each new tool addition.
    - The instruction format dimension of progressive disclosure is equally significant: agents.md, .cursorrules, and Claude Code Skills all embody the same layered disclosure principle applied to system prompts and capability specifications rather than to API tool schemas. These formats use a tiered structure — frontmatter name and one-sentence description always present, full body content loaded only when task relevance is confirmed — enabling harnesses like Claude Code to maintain awareness of hundreds of skills without injecting their full specifications into the context. The blog.buildbetter.ai 2026 guide to AGENTS.md vs. .cursorrules vs. Claude Code Skills documents how this format competition has converged on the progressive disclosure pattern as the effective standard, with differences primarily in specificity of format and scope of supported harnesses.

  - ## Components / Architecture
    - **Tool Index / Capability Catalogue**
      - The foundational component: a structured registry of all available tools, grouped by capability category (file operations, web access, code execution, data retrieval, communication), with each entry containing only name, one-line description, and category tag — no full JSON schema. Total size: typically 200-800 tokens for 50-500 tools. The index is injected into the [[Context Window]] on every step; the full schemas are not.
      - Implementation: a structured JSON or Markdown list maintained by the [[Agent Harness]], updated when new [[Model Context Protocol]] servers are registered. In langgraph-bigtool, the index is stored in LangGraph's built-in persistence layer with support for in-memory and Postgres backends.
    - **Embedding-Based Semantic Router**
      - Converts the agent's current task description or tool request into a dense vector using an [[Embeddings]] model (typically a lightweight bi-encoder such as MiniLM-L6-v2 at 384 dimensions for low-latency retrieval). Runs [[Approximate Nearest Neighbour Search]] over the [[Vector Database]]-backed tool index to retrieve the top-k most semantically similar tools. Returns the full JSON schemas of only those tools.
      - Performance target: under 20ms retrieval latency for tool selection, adding negligible overhead to the [[Agent Loop]] step. langgraph-bigtool uses LangGraph's InMemoryStore with embedding-based retrieval; Toolshed (arXiv:2410.14594) uses a dedicated tool knowledge base with advanced RAG-tool fusion for better precision on complex tool selection scenarios.
    - **Active Tool Request Interface (MCP-Zero Model)**
      - Rather than a passive retrieval lookup, the agent issues a structured natural-language request: "I need a tool that can [capability description]". The harness runs a two-stage hierarchical semantic routing algorithm: stage 1 filters candidate MCP servers by category match; stage 2 ranks specific tools within those servers by semantic alignment to the capability description. MCP-Zero's iterative capability extension then allows the agent to progressively build a cross-domain toolchain across multiple request cycles without injecting any previously used schemas unless re-requested.
      - Token budget: MCP-Zero reports 98% reduction versus full-schema injection at 2,800 tools — from approximately 280,000 tokens to approximately 5,600 tokens per step.
    - **Schema Loader / On-Demand Resolver**
      - Triggered by the semantic router or active request interface, the schema loader fetches and injects the full JSON schema for one or more selected tools into the current step's context. For MCP-compliant tools, this is a standard MCP tool-describe call. For locally registered tools, it is an in-process lookup. The schema loader maintains a per-session cache of previously loaded schemas so that tools used in prior steps are not re-loaded redundantly.
      - The "describe_tools" meta-tool pattern (synapticlabs.ai 2025) provides the schema loader as an explicit agent-callable tool: the agent calls describe_tools(category="file_operations") to receive schemas for all file operation tools, enabling self-directed progressive disclosure without modifying the harness architecture.
    - **Instruction Layer Specifications (agents.md / .cursorrules / SKILL.md)**
      - The progressive disclosure principle applied to system prompts: instruction specifications are structured as layered files where outer layers (frontmatter, one-line descriptions) are always loaded and inner layers (detailed procedures, examples) are loaded only when relevance is confirmed by the harness routing logic. Claude Code Skills (SKILL.md files in the agentbox) implement this pattern explicitly: each skill has a one-line trigger description for the routing layer and a full specification body loaded when the skill is invoked.
      - The 2026 AGENTS.md vs. .cursorrules vs. Claude Code Skills comparison (blog.buildbetter.ai) documents that all three formats have converged on the progressive disclosure principle, with differences in: scope of harness support (AGENTS.md for Codex/Copilot Workspace; .cursorrules for Cursor; SKILL.md for Claude Code); instruction specificity; and the degree to which the format supports versioning and team-shared skill libraries.
    - **Bounded Context Packs (Meta-Tool Pattern)**
      - An advanced progressive disclosure variant (synapticlabs.ai 2025) that groups related tools into "context packs" — each pack is a single meta-tool that, when called, injects the schemas of a coherent set of related tools. A "file_operations_pack" meta-tool injects schemas for read, write, delete, search, move — but only when the agent explicitly invokes that meta-tool. This reduces the two-stage retrieval (index lookup → schema load) to a single agent call at the cost of coarser granularity.
      - MCP Tool Schema Bloat analysis (layered.dev 2025) identifies bounded context packs as the highest-impact single optimisation for agent deployments with fewer than 100 tools, achieving 85-95% token reduction with minimal retrieval overhead.
    - **Fallback Full-Load Mode**
      - Every progressive disclosure harness must implement a graceful degradation path: if the semantic router fails to identify a suitable tool, or if the task explicitly requires comprehensive awareness of all available capabilities, the harness falls back to injecting all tool schemas in the conventional manner. This ensures progressive disclosure never causes agent failure through tool blindness — it is a performance optimisation with a safe fallback, not a constraint on agent capability.

  - ## Use Cases / Major Families
    - **Large MCP Tool Ecosystem Management** — Production agent deployments routinely connect to 10-50+ MCP servers, each exposing multiple tools. Without progressive disclosure, injecting all schemas before each model call would consume the entire usable context budget. MCP Progressive Disclosure (solo.io 2026 guide) is the canonical deployment pattern: a compact tool index is injected once, and full schemas are retrieved on demand. Claude Code v2.1.7 (2026) automatically enables progressive disclosure via MCP Tool Search when tool descriptions would exceed 10% of available context — loading tools via search on demand rather than preloading. Token Optimize (tokenoptimize.dev 2025) documents 85% token reduction for large tool libraries, with tool definitions dropping from 10K+ tokens to approximately 3K per request.
    - **Large-Scale Coding Agent Tool Access** — [[Terminal Coding Agents]] such as Claude Code, Codex CLI, Aider, and Gemini CLI operate over codebases that may require hundreds of distinct file operation, build system, testing, linting, documentation, and deployment tools. Progressive disclosure enables these agents to maintain awareness of the full capability surface without context saturation. The Speakeasy dynamic toolset comparison (speakeasy.com 2025) documented 160x token reduction with dynamic toolsets versus static toolsets at 400 tools, with stable success rates as toolsets grow — demonstrating that progressive disclosure removes what had been a practical ceiling on useful agent tool surface size.
    - **IDE Agents with Plugin-Rich Environments** — [[IDE Coding Agents]] in environments such as Cursor, Copilot Workspace, and Windsurf operate within plugin-rich IDEs that expose language servers, linting tools, debuggers, test runners, and build systems as agent-callable capabilities. Progressive disclosure enables the agent to maintain a lean context while accessing the full plugin surface on demand. The .cursorrules format (awesome-cursorrules collection: github.com/PatrickJS/awesome-cursorrules, 48K+ GitHub stars as of 2026) implements progressive disclosure for rule specification — each rule file has a compact header loaded at all times and a detailed body loaded when relevant task context is detected.
    - **Multi-Agent Tool Routing** — In [[Multi-Agent System]] architectures with specialist subagents (a web search agent, a code execution agent, a database query agent, a file management agent), the orchestrator agent uses progressive disclosure to route subtasks to appropriate specialists: it receives an index of available specialist agents with one-line capability descriptions, selects the relevant one, then retrieves the full interaction specification for that specialist only when dispatching a task to it. This pattern is implemented by LangGraph DeepAgents (langchain-ai/deepagents, the "batteries-included agent harness") and by MCP-Zero's iterative capability extension mechanism.
    - **Instruction Progressive Disclosure in CLAUDE.md / agents.md Systems** — The CLAUDE.md, agents.md, and SKILL.md patterns implement progressive disclosure for system prompt composition. In the agentbox environment, the Claude Code harness loads a compact index of available skills (name + one-line trigger description) at the start of each session; when a user command matches a skill trigger, the full skill specification is loaded into the context. This prevents the accumulated total of all system-level instructions from consuming the context budget before the user's task is even stated. The skill-creator pattern extends this to user-generated skills, enabling teams to build progressive disclosure libraries of custom capabilities without modifying the core harness.
    - **ToolGen-Style Unified Tool Calling** — For very large tool surfaces (10,000+ tools), token-optimisation approaches that inject schemas at inference time — however efficiently — face practical limits. ToolGen (arXiv:2410.03439, ICLR 2025) embeds tool knowledge directly into model weights via multi-stage [[Fine-Tuning]] (tool memorisation, retrieval training, end-to-end agent task training). The model retrieves and calls tools by generating tool-specific vocabulary tokens rather than selecting from injected schema JSON. ToolGen demonstrated superior performance at 47,000+ tools in both tool retrieval accuracy and autonomous task completion, with zero token cost for tool schema injection. The limitation is that adding new tools requires fine-tuning iteration — a deployment model better suited to stable enterprise tool surfaces than rapidly evolving toolchains.

  - ## Academic Context
    - The human-computer interaction concept of progressive disclosure was formalised by Carroll & Mazur (1986) "The Navigator's Dilemma" and by Nielsen (1994, Usability Engineering) as a fundamental principle for managing interface complexity. Its application to AI agent context management is a 2024-2026 engineering innovation, not explicitly anticipated in the original UX literature.
    - The tool use and [[Function Calling]] research tradition — Schick et al. (2023) Toolformer, Yao et al. (2023) ReAct, Qin et al. (2023) ToolLLM — established the baseline problem: agents with access to large tool surfaces face selection difficulty as tool count grows. ToolLLM (Qin et al., arXiv:2307.16789, 2023) specifically demonstrated that providing all tool documentation inline degrades performance above a threshold of approximately 20-30 tools, establishing the empirical motivation for progressive disclosure.
    - ToolGen (Ren et al., arXiv:2410.03439, ICLR 2025) provided the first rigorous evaluation of a generative unified tool retrieval and calling approach at 47,000+ tool scale, establishing that embedding tool knowledge in model weights rather than schema injection achieves both better tool retrieval accuracy and better end-to-end task completion than retrieval-augmented approaches — at the cost of requiring fine-tuning.
    - Toolshed (arXiv:2410.14594) proposed tool knowledge bases as a RAG-tool fusion approach — maintaining a structured knowledge base of tool documentation that could be queried by the agent's tool selection logic — providing a middle path between pure schema injection and full fine-tuning.
    - MCP-Zero (Fei, Zheng, Feng, arXiv:2506.01056, submitted June 2025, revised June 2025 to v4) is the most recent landmark paper directly addressing progressive disclosure in the [[Model Context Protocol]] era. Its three core mechanisms — active tool request (agent-generated capability gap description), hierarchical semantic routing (two-stage server-then-tool ranking), and iterative capability extension (cross-domain toolchain building) — represent the current state-of-the-art for active progressive disclosure. The 98% token reduction at 2,800 tools result is the strongest published token efficiency benchmark for MCP-native progressive disclosure.
    - The Online-Optimized RAG for Tool Use and Function Calling (arXiv:2509.20415, 2025) explores adaptive approaches to tool selection that optimise retrieval quality based on observed task outcomes — an early signal of learned progressive disclosure policies analogous to the learned memory policies emerging in [[Agent Memory Layers]].
    - Tool-to-Agent Retrieval (arXiv:2511.01854, 2025) extends the progressive disclosure concept from individual tool selection to agent-to-agent delegation in [[Multi-Agent System]] architectures — demonstrating that the same index-first, detail-on-demand principle scales from single-agent tool selection to multi-agent capability routing.
    - UK academic context: the UKRI AI Safety Institute (AISI, launched 2023) has evaluated tool-calling agents using GAIA benchmark levels 1-3 in the Inspect AI evaluation framework, with progressive disclosure identified as a variable affecting benchmark performance. The Alan Turing Institute's work on interpretable and safe AI agents encompasses tool selection transparency — progressive disclosure's explicit on-demand schema loading provides a natural audit log of which tool capabilities the agent accessed, supporting the [[AI Safety]] and [[Human-in-the-Loop]] interpretability requirements emphasised in ATI research.
    - Key venues: ICLR, NeurIPS, ICML for the machine learning foundations; ACL, EMNLP for language model tool use; UIST, CHI for the HCI progressive disclosure ancestry; industry blogs (solo.io, speakeasy.com, layered.dev, matthewkruczek.ai, tokenoptimize.dev) are the primary venues for 2025-2026 production benchmarks given the pace of engineering innovation.

  - ## Current Landscape (2026)
    - By June 2026 progressive disclosure has moved from engineering insight to industry standard for large-tool-surface agent deployments. The maturation is evidenced by native harness adoption: Claude Code v2.1.7 (Anthropic, 2026) introduced automatic progressive disclosure that triggers MCP Tool Search when tool descriptions would consume more than 10% of the available context budget — loading tools via search on demand rather than preloading all tool definitions, with no user configuration required. LangGraph DeepAgents (langchain-ai/deepagents, 2025/2026) is marketed explicitly as "the batteries-included agent harness" with progressive tool disclosure as a first-class feature.
    - The benchmark landscape documents the performance improvements definitively. Speakeasy's dynamic toolset comparison (speakeasy.com 2025) measured 160x token reduction with dynamic toolsets versus static at 400 tools, with task success rates stable as toolset size grew from 40 to 400 tools — demonstrating that progressive disclosure removes the practical ceiling on agent tool surface. Matthew Kruczek's independent benchmark (matthewkruczek.ai 2025) documented 85x token savings from progressive MCP server schema disclosure with higher agent accuracy. The Token Optimize guide (tokenoptimize.dev 2025) reports 85% token reduction for large tool libraries, with tool definitions dropping from 10K+ tokens to approximately 3K per request. MCP-Zero (arXiv:2506.01056, June 2025) demonstrates 98% token reduction at 2,800 tools.
    - The instruction format competition has largely resolved: AGENTS.md (broad ecosystem support including Codex CLI, Copilot Workspace, Jules, Gemini CLI), .cursorrules/.cursor/rules/ (Cursor-specific, 48K+ stars on awesome-cursorrules), and Claude Code Skills (SKILL.md) are the three dominant instruction progressive disclosure formats as of 2026 (blog.buildbetter.ai 2026 comparison), with all three implementing the same index-first, detail-on-demand pattern and differing primarily in supported harnesses.
    - The [[Model Context Protocol]] ecosystem has added tool search as a standard extension in the 2025-2026 period, formalising progressive disclosure as a protocol-level concern rather than an application-level workaround. This is the clearest signal that progressive disclosure has achieved canonical status in the [[Agent Harness]] ecosystem.
    - The ToolRAG/ToolGen research lineage continues to advance: a 2025-2026 literature wave including ToolDreamer (arXiv:2510.19791, instilling LLM reasoning into tool retrievers), Ego-Graph Ensembles for enterprise tool retrieval (arXiv:2508.05888), and the Online-Optimized RAG for Tool Use (arXiv:2509.20415) demonstrates active research investment in making tool retrieval more accurate, adaptive, and computationally efficient.

  - ## UK Context
    - The UK AI Safety Institute (AISI, launched April 2024 as the world's first national AI safety institute) operates the Inspect AI evaluation framework, within which progressive disclosure is a variable in agent [[Tool Use]] evaluation. GAIA benchmark levels 1-3 testing of tool-calling agents implicitly evaluates tool selection accuracy under varying context conditions, making progressive disclosure an empirically relevant variable in UK government AI safety evaluation.
    - The Alan Turing Institute's programme on interpretable AI agents encompasses the specific question of tool selection transparency: when an agent selects a tool, can a human auditor reconstruct why? Progressive disclosure's on-demand schema loading creates a natural step-level audit trail — the log of which tool schemas were requested and loaded at each [[Agent Loop]] step provides an interpretable record of the agent's capability access pattern, supporting both [[AI Safety]] analysis and [[Human-in-the-Loop]] oversight requirements that ATI emphasises.
    - UCL's Centre for Artificial Intelligence and the UKRI national Generative AI Hub have published on context-efficient inference and long-context reasoning, directly relevant to the progressive disclosure problem. UCL researchers are participants in the EU AI Act implementation advisory bodies, where [[Tool Use]] transparency and [[Provenance]] requirements for AI agent actions are active policy concerns — progressive disclosure's audit trail property is relevant to [[EU AI Act]] Article 13 transparency obligations.
    - The University of Edinburgh's Informatics group has longstanding contributions to [[Information Retrieval]] and dynamic context management, including work on adaptive document retrieval that anticipates the progressive disclosure pattern in the document context rather than the tool context. Edinburgh's AARG group works on tool-equipped agent evaluation.
    - Manchester's industrial ecosystem — particularly the Northern England financial services sector — is an active deployment context for [[Terminal Coding Agents]] and compliance automation agents that operate over large tool surfaces. The GDPR and FCA data residency concerns in this sector push toward self-hosted progressive disclosure implementations (langgraph-bigtool with on-premise Postgres backend; self-hosted Qdrant for the tool embedding index) rather than cloud-managed MCP servers, creating a distinct UK deployment pattern.
    - Sheffield Robotics and the broader UK robotics community are beginning to encounter progressive disclosure as a practical engineering concern in embodied agent systems: robots equipped with many sensing and actuation tools face the same context bloat problem as software agents, and the same index-first, detail-on-demand pattern is emerging as the design response.

  - ## Future Directions (2026-2030)
    - **Learned Tool Routing Policies** — The current generation of progressive disclosure harnesses uses heuristic similarity search ([[Semantic Search]] via [[Approximate Nearest Neighbour Search]]) for tool selection. The next generation will use reinforcement learning-trained routing policies that optimise tool selection based on observed task outcomes, token budgets, and latency constraints. Online-Optimized RAG for Tool Use (arXiv:2509.20415, 2025) is an early signal of this direction; production learned tool routers are expected by 2027-2028.
    - **Multi-Modal Tool Discovery** — Current progressive disclosure operates over textual tool descriptions and query states. As agents become multimodal — operating over images, audio, and structured data as well as text — tool selection will require matching multimodal agent state descriptions to multimodal tool capability descriptions. This requires multimodal [[Embeddings]] and retrieval infrastructure extending the current text-only tool index approach.
    - **Tool Composition and Capability Synthesis** — Advanced progressive disclosure will move from selecting existing tools to composing novel tool sequences for capability gaps. MCP-Zero's iterative capability extension is an early step; future systems will synthesise multi-step tool chains for capabilities not explicitly available in any single registered tool — bridging progressive disclosure and [[Planning and Scheduling]].
    - **Cross-Agent Tool Sharing** — Tool-to-Agent Retrieval (arXiv:2511.01854) points toward a future where progressive disclosure operates at the agent level in large [[Multi-Agent System]] architectures: an orchestrator maintains an index of available specialist agents and retrieves the most relevant one for each subtask. This transforms agent catalogues into the tool libraries of the future, with progressive disclosure scaling from dozens of tools to hundreds of specialist agents.
    - **Privacy-Aware Tool Access Control** — As tool surfaces include access to sensitive data APIs (healthcare records, financial data, personal communications), progressive disclosure indices will need to integrate access control: each tool's index entry will carry access classification labels, and the semantic router will filter retrieval results by the querying agent's [[Agent Identity]] permissions before presenting the tool index. This connects progressive disclosure to [[GDPR]], [[Privacy]], and enterprise data governance — [[EU AI Act]] obligations for tool use transparency will drive this integration.
    - **Protocol Standardisation** — The [[Model Context Protocol]] tool search extension is a first step toward standardising progressive disclosure at the protocol level. Further standardisation — including a common tool index schema, standard capability category taxonomies, and standard token budget negotiation between agents and MCP servers — is expected by 2027, following the adoption pattern of REST APIs in the web era. This will enable interoperability between progressive disclosure harnesses and tool registries across vendors.

  - ## Key Terminology
    - **Context Bloat** — The condition in which tool schema injection, system prompt verbosity, or prior conversation history consumes an excessive fraction of the [[Context Window]], leaving insufficient space for task-relevant content and degrading model performance.
    - **Tool Index** — The compact registry of available tools — name, one-line description, category — injected on every step without full schema; the entry-point layer of progressive disclosure.
    - **Schema Loader** — The harness component that fetches and injects the full JSON schema for a specific tool on demand, triggered by the semantic router or agent tool request.
    - **Active Tool Discovery** — The MCP-Zero model in which the agent generates structured natural-language requests specifying capability gaps; the harness routes these to the appropriate tools autonomously.
    - **Meta-Tool Pattern** — Exposing a group of related tools as a single meta-tool; invoking the meta-tool injects schemas for all tools in the group — a bounded context pack.
    - **ToolGen** — The generative approach that embeds tool knowledge into model weights via [[Fine-Tuning]], enabling tool retrieval and calling by token generation rather than schema injection (ICLR 2025).
    - **MCP-Zero** — Active tool discovery framework for MCP-native agents; hierarchical semantic routing; iterative capability extension; 98% token reduction at 2,800 tools (arXiv:2506.01056, June 2025).
    - **langgraph-bigtool** — LangGraph library for embedding-based tool retrieval in agents with large tool registries; supports in-memory and Postgres backends; semantic similarity retrieval via InMemoryStore.
    - **awesome-cursorrules** — Community collection (48K+ GitHub stars) of .cursorrules instruction files for Cursor IDE implementing progressive disclosure for AI coding assistance instruction sets.
    - **agents.md** — Instruction format supported by Codex CLI, Copilot Workspace, Jules, and Gemini CLI for progressive disclosure of agent operating instructions in repository context.
    - **SKILL.md** — Claude Code Skills format for progressive disclosure of custom harness capabilities; name and trigger-description always loaded; full body loaded on invocation.

  - ## Research & Literature
    - 1. Ren, W. et al. (2025). ToolGen: Unified Tool Retrieval and Calling via Generation. ICLR 2025. arXiv:2410.03439. https://arxiv.org/abs/2410.03439 [Generative unified tool calling at 47K+ tools; embedding tool knowledge in model weights.]
    - 2. Fei, X., Zheng, X., & Feng, H. (2025). MCP-Zero: Active Tool Discovery for Autonomous LLM Agents. arXiv:2506.01056. https://arxiv.org/abs/2506.01056 [Active tool discovery for MCP agents; 98% token reduction; hierarchical semantic routing.]
    - 3. Yao, S. et al. (2023). ReAct: Synergizing Reasoning and Acting in Language Models. ICLR 2023. arXiv:2210.03629. https://arxiv.org/abs/2210.03629 [Foundation: tool use in agent loop; context tool schema injection baseline.]
    - 4. Qin, Y. et al. (2023). ToolLLM: Facilitating Large Language Models to Master 16000+ Real-World APIs. arXiv:2307.16789. https://arxiv.org/abs/2307.16789 [Large-scale tool use benchmark; documented accuracy degradation above 20-30 simultaneous tools.]
    - 5. Schick, T. et al. (2023). Toolformer: Language Models Can Teach Themselves to Use Tools. NeurIPS 2023. arXiv:2302.04761. https://arxiv.org/abs/2302.04761 [Self-supervised tool learning; baseline for tool calling without progressive disclosure.]
    - 6. arXiv:2410.14594. (2024). Toolshed: Scale Tool-Equipped Agents with Advanced RAG-Tool Fusion and Tool Knowledge Bases. https://arxiv.org/abs/2410.14594 [RAG-tool fusion; tool knowledge bases for structured tool retrieval.]
    - 7. arXiv:2511.01854. (2025). Tool-to-Agent Retrieval: Bridging Tools and Agents for Scalable LLM Multi-Agent Systems. https://arxiv.org/abs/2511.01854 [Progressive disclosure at the agent level in multi-agent architectures.]
    - 8. arXiv:2509.20415. (2025). Online-Optimized RAG for Tool Use and Function Calling. https://arxiv.org/abs/2509.20415 [Adaptive tool retrieval with outcome-based optimisation; precursor to learned routing policies.]
    - 9. arXiv:2510.19791. (2025). ToolDreamer: Instilling LLM Reasoning Into Tool Retrievers. https://arxiv.org/abs/2510.19791 [Reasoning-enhanced tool retrieval; improving selection accuracy via LLM reasoning.]
    - 10. arXiv:2508.05888. (2025). Planning Agents on an Ego-Trip: Leveraging Hybrid Ego-Graph Ensembles for Improved Tool Retrieval in Enterprise Task Planning. https://arxiv.org/abs/2508.05888 [Graph-ensemble tool retrieval for enterprise task planning contexts.]
    - 11. Speakeasy. (2025). Comparing Progressive Discovery and Semantic Search for Powering Dynamic MCP. https://www.speakeasy.com/blog/100x-token-reduction-dynamic-toolsets [160x token reduction benchmark; progressive disclosure vs. static toolset at 400 tools.]
    - 12. Solo.io. (2026). MCP Progressive Disclosure: Save Tokens, Retrieve Schemas. https://www.solo.io/blog/mcp-progressive-disclosure [Production guide to MCP token savings via on-demand schema retrieval.]
    - 13. Kruczek, M. (2025). Progressive Disclosure MCP: 85x Token Savings Benchmark. https://matthewkruczek.ai/blog/progressive-disclosure-mcp-servers.html [Independent benchmark: 85x token savings with progressive MCP server schema disclosure.]
    - 14. Synapticlabs. (2025). The Meta-Tool Pattern: Progressive Disclosure for MCP. https://blog.synapticlabs.ai/bounded-context-packs-meta-tool-pattern [Bounded context packs; meta-tool pattern for grouped schema injection.]
    - 15. LangChain. (2025). Progressive Tool Disclosure with Deep Agents. LangChain Support. https://support.langchain.com/articles/8488719552-progressive-tool-disclosure-with-deep-agents [Official LangGraph DeepAgents progressive disclosure documentation.]
    - 16. Layered.dev. (2025). MCP Tool Schema Bloat: The Hidden Token Tax (and How to Fix It). https://layered.dev/mcp-tool-schema-bloat-the-hidden-token-tax-and-how-to-fix-it/ [Analysis of schema bloat impact; bounded context packs as primary mitigation.]
    - 17. Token Optimize. (2025). Cut MCP and Tool Overhead to Save Thousands of LLM Tokens Per Request. https://www.tokenoptimize.dev/guides/reduce-tool-overhead-mcp-tokens [85% tool token reduction guide; tool definitions from 10K+ to ~3K per request.]
    - 18. The New Stack. (2025). 10 Strategies to Reduce MCP Token Bloat. https://thenewstack.io/how-to-reduce-mcp-token-bloat/ [10-strategy overview including progressive disclosure, schema compression, tool batching.]
    - 19. BuildBetter Blog. (2026). AGENTS.md vs .cursorrules vs Claude Skills: 2026 Guide. https://blog.buildbetter.ai/agents-md-vs-cursorrules-vs-claude-skills-2026-comparison/ [2026 comparison of progressive disclosure instruction formats across harnesses.]
    - 20. SwirlAI Newsletter. (2025). Agent Skills: Progressive Disclosure as a System Design Pattern. https://www.newsletter.swirlai.com/p/agent-skills-progressive-disclosure [System design framing of progressive disclosure for agent skills.]
    - 21. MindStudio Blog. (2026). Progressive Disclosure in AI Agents: How to Load Context Without Killing Output Quality. https://www.mindstudio.ai/blog/progressive-disclosure-ai-agents-context-management [Production guide; context loading strategy without accuracy degradation.]
    - 22. Harness Engineering (MadPlay). (2025). Beyond Prompts and Context: Harness Engineering for AI Agents. https://madplay.github.io/en/post/harness-engineering [Comprehensive harness engineering overview placing progressive disclosure in context.]
    - 23. GitHub: langchain-ai/langgraph-bigtool. (2025). Build LangGraph Agents with Large Numbers of Tools. https://github.com/langchain-ai/langgraph-bigtool [Official langgraph-bigtool repository; embedding-based tool retrieval implementation.]
    - 24. GitHub: RyanAlberts/best-of-Agent-Harnesses. (2025). Ranked List of 100+ Agent Harnesses. https://github.com/RyanAlberts/best-of-Agent-Harnesses [Weekly-scored agent harness ranking including progressive disclosure implementations.]
    - 25. GitHub: ai-boost/awesome-harness-engineering. (2025). Awesome Harness Engineering: Tools, Patterns, Evals, Memory, MCP, Permissions, Observability. https://github.com/ai-boost/awesome-harness-engineering [Curated list of agent harness engineering resources; progressive disclosure section.]
    - 26. Medium / Fernandez Garcia, M. (2025). Progressive Disclosure: The Technique That Helps Control Context (and Tokens) in AI Agents. https://medium.com/@martia_es/progressive-disclosure-the-technique-that-helps-control-context-and-tokens-in-ai-agents-8d6108b09289 [Practitioner explanation of the progressive disclosure pattern for agent context control.]
    - 27. Firecrawl. (2025). Agent Skills Explained: How SKILL.md Files Work and Why They're Everywhere. https://www.firecrawl.dev/blog/agent-skills [SKILL.md progressive disclosure format; harness loading behaviour explained.]
    - 28. arXiv:2602.18764. (2026). The Convergence of Schema-Guided Dialogue Systems and the Model Context Protocol. https://arxiv.org/abs/2602.18764 [Formal analysis of MCP schema structures; implications for progressive disclosure protocol design.]

- ### Provenance
  - sources:: ToolGen arXiv:2410.03439 (Ren et al. ICLR 2025); MCP-Zero arXiv:2506.01056 (Fei et al. June 2025); Toolshed arXiv:2410.14594 (2024); Tool-to-Agent Retrieval arXiv:2511.01854 (2025); Online-Optimized RAG arXiv:2509.20415 (2025); ToolDreamer arXiv:2510.19791 (2025); ToolLLM arXiv:2307.16789 (Qin et al. 2023); Speakeasy 160x token benchmark 2025; Solo.io MCP Progressive Disclosure guide 2026; Kruczek 85x savings benchmark 2025; Synapticlabs meta-tool pattern 2025; LangChain DeepAgents progressive disclosure 2025; layered.dev MCP schema bloat 2025; tokenoptimize.dev 2025; thenewstack.io 10 strategies 2025; buildbetter.ai AGENTS.md comparison 2026; swirlai agent skills 2025; mindstudio progressive disclosure 2026; madplay harness engineering 2025; langchain-ai/langgraph-bigtool GitHub; RyanAlberts/best-of-Agent-Harnesses GitHub; ai-boost/awesome-harness-engineering GitHub; firecrawl SKILL.md guide 2025; arXiv:2602.18764 MCP schema convergence 2026
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
