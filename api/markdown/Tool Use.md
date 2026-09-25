Tool Use is the capability of large language models and AI agent systems to invoke external functions, APIs, databases, or services at inference time, extending the model's effective knowledge and action repertoire beyond pure text generation. The model receives a structured description of available tools — a tool schema encoding names, descriptions, and JSON Schema parameter specifications — reasons about which tool to call and with what arguments, executes that call via a surrounding orchestration layer, and incorporates the returned observation into its subsequent reasoning. This capability is foundational to agentic AI systems that must take real-world actions such as code execution, web search, database queries, file manipulation, or actuator control, bridging the boundary between language generation and executable computation.

### In Plain Terms

- An AI's ability to reach beyond writing text and actually do things — run a search, look something up in a database, send an email, or run code — by calling external tools on your behalf. This is what turns a chatbot into an assistant that can take real actions.

### Overview

- Tool Use transforms a [[Large Language Models|language model]] from a closed-world text predictor into an open-world agent capable of interacting with live information and external systems.
- Prior to tool use, LLMs were confined to knowledge encoded in their training weights and the contents of a single context window; any information beyond the training cut-off or requiring live computation was inaccessible.
- By exposing a set of [[Tool Schema|tool definitions]] within the context, the orchestration layer delegates execution authority to the model while retaining control over which tools are available and when results are returned.
- The core interaction loop:
  - The user or system provides a prompt alongside one or more tool definitions.
  - The model reasons over the available tools and emits a structured function-call output (typically JSON) specifying the tool name and arguments.
  - The surrounding [[Orchestration Layer]] intercepts the call, executes it against the real tool, and returns an observation message.
  - The model incorporates the observation into its continued reasoning, potentially issuing further tool calls, before producing a final answer.
- This pattern decouples knowledge retrieval and action execution from model weights, enabling models to stay accurate and current without frequent retraining.
- Commercial adoption is now broad: OpenAI, Anthropic, Google, Mistral, Cohere, and others expose tool use natively through their inference APIs.

### Key Mechanisms

- **Tool Schema Definition**
  - Each tool is described by a name, a natural-language description, and a [[JSON Schema]] specifying the input parameters.
  - The quality of tool descriptions heavily influences whether the model selects the correct tool and supplies valid arguments — [[Prompt Engineering]] for tool descriptions is itself a sub-discipline.
  - Parallel tool invocation allows models to emit multiple simultaneous calls, reducing round-trip latency in pipelines that benefit from concurrent execution.
- **Function Calling**
  - [[Function Calling]] is the mechanism through which the model emits a structured, parseable tool invocation rather than free-form text.
  - Implementations typically constrain model output to a JSON object that schema-validates against the chosen tool's parameter definition.
  - Constrained decoding (e.g. via grammar-based sampling) can enforce structural validity at the token level, eliminating parse errors.
- **Observation Integration**
  - The result returned by the executed tool is appended to the conversation as an observation or tool-result message.
  - The model conditions its next generation step on this observation, enabling iterative refinement.
  - Multi-turn observations support long-horizon tasks where many sequential tool calls are needed before a final response is warranted.
- **Orchestration and Safety**
  - The [[Orchestration Layer]] is responsible for routing tool calls, enforcing permission policies, handling errors, and maintaining conversation state.
  - [[Access Control]] mechanisms gate which tools a given user or task context may invoke — crucial for preventing privilege escalation.
  - [[Audit Logging]] records every tool invocation and its result, supporting post-hoc accountability and debugging.
  - [[Human-in-the-Loop]] checkpoints can require explicit human approval before high-risk or irreversible tool calls are executed.

### Tool Use Frameworks and Standards

- **OpenAI Function Calling API** — the first widely-adopted API standardisation of the tool-use pattern (2023), establishing JSON-based tool definitions and structured output conventions.
- **Anthropic Tool Use API** — parallel implementation with Claude models, supporting parallel tool invocation and native XML-structured tool results.
- **[[Model Context Protocol]]** (MCP) — open protocol from Anthropic standardising how LLM clients discover and invoke external tools and resources, enabling interoperable tool ecosystems.
- **Google Gemini Function Calling** — Google's implementation supporting multi-turn function-calling with structured responses and native grounding tools.
- **LangChain / LlamaIndex Tool Abstractions** — open-source framework layers that normalise tool-use patterns across multiple LLM backends and provide pre-built tool libraries.
- **ReAct (Reason + Act)** — prompting strategy that interleaves explicit chain-of-thought reasoning traces with tool action emissions, improving reliability of multi-step tool use.
- **Toolformer** — research model that learned which APIs to call and when by self-supervising on API call insertions, demonstrating that tool use can be learned end-to-end.

### Applications and Use Cases

- **Web Search and Information Retrieval**
  - Models invoke search APIs (e.g. Bing Search, Brave Search, Tavily) to fetch current information beyond the training cut-off.
  - [[Retrieval-Augmented Generation]] can be modelled as a specialised tool-use pattern where the retrieval operation is a first-class tool call returning document excerpts.
- **Code Execution and Data Analysis**
  - [[Code Execution]] sandboxes (e.g. Python REPL, Jupyter kernels) are among the most powerful tool-use targets, allowing models to write and run code to perform calculations, data analysis, and visualisation.
  - Used extensively in data science assistants (e.g. OpenAI Code Interpreter / Advanced Data Analysis).
- **Database and Knowledge Graph Queries**
  - Models generate SQL, SPARQL, or graph query language statements as tool arguments, retrieving structured data from production databases or [[Knowledge Graph]]s.
- **File and Document Manipulation**
  - Tools for reading, writing, searching, and editing files enable models to function as software engineering assistants within project codebases.
- **API Integration and Workflow Automation**
  - Models call third-party APIs (calendar, CRM, ERP, communication platforms) to complete tasks autonomously.
  - Bridges to [[Robotic Process Automation]] for legacy system integration via screen-scraping and form-filling tools.
- **Multi-Agent Coordination**
  - In [[Multi-Agent System]]s, tool calls can invoke subordinate agents, enabling hierarchical decomposition of complex tasks.
  - [[Autonomous Agent]] frameworks such as AutoGPT, BabyAGI, and Claude's Projects feature rely on tool use as the primary action primitive.
- **Robotics and Embodied AI**
  - Language models serving as high-level planners issue tool calls to robotic control APIs, translating natural-language instructions into sequences of low-level actuator commands.
  - Connects tool use to [[Robotic Process Automation]] and embodied agent research.
- **Scientific and Research Assistance**
  - Tools for literature search, simulation invocation, statistical computation, and experimental logging augment LLM-based research assistants.

### Challenges and Limitations

- **Hallucinated Tool Calls** — models may emit calls to non-existent tools or with syntactically invalid arguments; constrained decoding and schema validation mitigate this.
- **Error Recovery** — graceful handling of tool failures (network errors, permission denials, unexpected return types) requires explicit error-handling logic in both the model's prompting and the orchestration layer.
- **Context Window Pressure** — long tool-call histories with verbose observations can consume large portions of the [[Context Window]], degrading performance on the primary task.
- **Security and Prompt Injection** — tool outputs may contain adversarial content attempting to hijack the model's subsequent actions (indirect prompt injection); sandboxing and output sanitisation are active research areas.
- **Latency** — sequential tool-call round trips introduce wall-clock latency; parallelism, caching, and speculative execution are mitigation strategies.
- **Planning Depth** — reliable multi-step tool use requires models to maintain a coherent plan across many turns, which remains challenging without explicit [[Planning]] scaffolds such as [[ReAct Prompting]] or tree-of-thought approaches.

### Standards and Context

- The [[Model Context Protocol]] (MCP) is the primary open standard for tool discovery and invocation interoperability, developed by Anthropic and gaining multi-vendor adoption.
- OpenAI's function-calling specification, first released in 2023, established a de facto standard for JSON-based tool schemas that subsequent providers largely followed.
- [[JSON Schema]] (IETF draft standard) underpins parameter validation in virtually all current tool-use implementations.
- Safety considerations are addressed in emerging AI governance frameworks such as the EU AI Act and NIST AI Risk Management Framework, which flag autonomous tool invocation as a high-risk AI capability requiring transparency and human oversight.
- Benchmark suites such as ToolBench, BFCL (Berkeley Function-Calling Leaderboard), and APIBench evaluate tool-use accuracy across diverse API collections.

### Current Landscape (2026)

- Anthropic's Model Context Protocol (MCP), released 25 November 2024, became the de facto cross-vendor standard for exposing tools to models: OpenAI adopted it across the Responses API and Agents SDK in March 2025 and Google committed Gemini support in April 2025, collapsing the N×M integration problem to N+M.
- MCP was donated to the vendor-neutral Agentic AI Foundation under the Linux Foundation on 9 December 2025 (co-founded with OpenAI and Block; Google, Microsoft and AWS as platinum members); by that point the ecosystem counted over 10,000 active public MCP servers and 97M+ monthly SDK downloads.
- The protocol matured rapidly through spec revisions — Streamable HTTP transport (2025-03-26), an OAuth 2.1 resource-server authorisation model with elicitation (2025-06-18), and the current 2025-11-25 revision — turning remote, enterprise-grade tool servers into a viable deployment target.
- "Too many tools" emerged as the new bottleneck: Anthropic's Advanced Tool Use release (24 November 2025) added tool search and programmatic tool calling, while code-execution patterns (CodeAct, Cloudflare's Code Mode) let models write one program orchestrating many calls — Anthropic reported a 98.7% token reduction on a Google Drive-to-Salesforce workflow.
- Evaluation matured from single-call accuracy to agentic, multi-turn behaviour: the Berkeley Function Calling Leaderboard reached V4 with relevance detection and closed-source test sets, alongside tau-bench (Sierra), MCPVerse (550+ executable tools) and MCPToolBench++ (4k+ MCP servers); frontier closed models (Claude Opus 4.x, GPT-5.x, Gemini 3) cluster near the top with open weights like Qwen3 and GLM within a few points.
- Multi-turn coherence remains the hard problem: models that top BFCL often degrade on tau-bench, where Claude Sonnet 4.5 posted the strongest published airline/retail scores, and larger tool sets still cause accuracy loss for most models.
- Security became the dominant frontier concern: prompt injection ranks #1 on OWASP's 2025 LLM Top 10 with tool abuse as the primary attack surface, and Check Point's August 2026 analysis of Cloudflare Code Mode found five vulnerabilities in the workerd runtime (two rated Critical), underscoring the risk of giving models a code-execution sandbox over live tools.

### References

- 1. Taskade (2026). How LLMs Got Hands: A History of Tool Use. https://www.taskade.com/blog/tool-use-history
- 2. Zylos AI (2026). Tool Use and Function Calling in AI Agents — Standards and Benchmarks. https://zylos.ai/research/2026-04-07-tool-use-function-calling-standards-benchmarks/
- 3. Dubrov, S. (2026). AI Agent Tool Use: MCP, CLI, Skills, and Code Execution. https://slavadubrov.github.io/blog/2026/03/24/ai-agent-tool-use/
- 4. Model Context Protocol (2026). Tools — Server Specification (2026-07-28). https://modelcontextprotocol.io/specification/2026-07-28/server/tools
- 5. Yu et al. (2025). MCPVerse: An Expansive, Real-World Benchmark for Agentic Tool Use. https://arxiv.org/html/2508.16260v1
- 6. Check Point Research (2026). When Agentic Glue Melts: Exploiting Cloudflare Code Mode. https://research.checkpoint.com/2026/when-agentic-glue-melts/

### Provenance

