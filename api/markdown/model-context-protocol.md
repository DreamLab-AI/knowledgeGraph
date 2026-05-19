- ### Definition
  - The Model Context Protocol (MCP) is an open standard published by Anthropic in November 2024 that defines a JSON-RPC 2.0-based client–server protocol for connecting [[Large Language Model]] inference hosts (MCP clients) to external capability providers (MCP servers), exposing tools, resources, and prompts in a uniform interface that allows any compliant LLM application to discover and invoke heterogeneous external services — databases, file systems, APIs, agent memory stores — without bespoke integration code, forming the primary tool-surface interface within [[VisionClaw Agentic Container]] for agent-to-environment interaction.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ModelContextProtocol
  - owl-role:: Process
  - owl-inferred:: ai:AgentToolProtocol
  - belongs-to-domain:: [[AI Domain]]
  - implemented-in-layer:: [[ProtocolLayer]], [[AgentLayer]]

- ### Relationships
  - is-subclass-of:: [[Agent Communication Protocol]], [[JSON-RPC Protocol]]
  - has-part:: [[MCP Tool]], [[MCP Resource]], [[MCP Prompt]], [[MCP Server]], [[MCP Client]], [[MCP Transport Layer]]
  - is-part-of:: [[VisionClaw Agentic Container]], [[LangChain Agent Framework]], [[Claude Agent SDK]]
  - requires:: [[JSON-RPC 2.0]], [[HTTP Protocol]], [[WebSocket Protocol]], [[STDIO Transport]]
  - enables:: [[Agent Tool Use]], [[Context Injection]], [[Sandboxed Capability Discovery]], [[Multi-Agent Orchestration]]
  - implements:: [[Anthropic MCP Specification v0.1]], [[JSON Schema]], [[OAuth 2.0 Resource Server]]
  - bridges-to:: [[Robot Operating System]] (domain: rb), [[Nostr Protocol]] (domain: bc), [[Solid Pod]] (domain: ngm), [[WebAssembly]] (domain: ngm)
  - depends-on:: [[JSON Schema Validator]], [[TypeScript SDK]], [[Python MCP SDK]]

- ### Content

  The Model Context Protocol emerged from Anthropic's work on Claude tool use and the observation that every organisation integrating LLMs with external systems was independently solving the same problem: how to expose a tool's input schema, invoke it safely, and return structured results to the model. MCP standardises this interaction as a lightweight protocol, analogous to the Language Server Protocol (LSP) in the IDE ecosystem — a single client-side integration that unlocks a growing ecosystem of server-side capability providers.

  #### Key Characteristics

  - **Three Primitive Abstractions**: MCP defines exactly three server-side primitives — **Tools** (functions the model can call; model-controlled), **Resources** (data the host exposes to the model context; application-controlled), and **Prompts** (templated instruction sequences; user-controlled). This minimal surface area keeps implementations tractable.
  - **JSON-RPC 2.0 Transport**: All messages are JSON-RPC 2.0 requests and responses. The transport layer is pluggable: STDIO (subprocess communication), HTTP with Server-Sent Events (SSE), and WebSocket are all specified. This allows MCP servers to be embedded in CLIs, web services, or Docker sidecars.
  - **Capability Negotiation**: On connection, client and server exchange `initialize` handshakes that advertise supported protocol versions and optional capability flags (sampling, roots, logging). This enables graceful degradation when client and server versions differ.
  - **Tool Schema Validation**: Each tool advertisement includes a JSON Schema defining its input parameters. The LLM uses this schema to generate valid tool-call arguments; the MCP client validates the call before forwarding it to the server, preventing malformed invocations.
  - **Security Boundaries**: MCP servers run as separate processes with their own permission scope; the client never grants a server direct access to the model's context window. Capability grants are explicit and auditable.

  #### How It Works

  An MCP interaction follows a well-defined lifecycle. An MCP client (e.g., Claude Desktop, a LangChain agent, or a [[VisionClaw Agentic Container]] skill host) spawns or connects to an MCP server. The client sends `initialize` to negotiate capabilities and receive the server's tool, resource, and prompt manifests. When the LLM decides to invoke a tool, the client sends `tools/call` with the tool name and validated arguments. The server executes the tool — querying a database, calling an API, reading from a [[Solid Pod]] — and returns a structured `CallToolResult` containing text, image, or embedded resource content. The client inserts this result into the model's context for the next inference step.

  Within [[VisionClaw Agentic Container]], each agent skill is exposed as an MCP server. The skill host (a Wasmtime-based [[WebAssembly]] runner) launches the skill's Wasm module and communicates with it over STDIO MCP. Agent orchestration — spawning sub-agents, routing tasks, checking memory — is handled by the `claude-flow` MCP server, which exposes swarm coordination and [[RuVector Memory]] operations as MCP tools. This architecture means the LLM (Claude Sonnet/Opus) never needs bespoke code per skill; it discovers and invokes all capabilities through the uniform MCP tool-call surface.

  #### Current Landscape

  Since its November 2024 release, MCP has achieved rapid adoption. By mid-2025, over 2,000 open-source MCP servers had been published on GitHub and the official MCP server registry. Major integrations include: GitHub (repository search, PR management), PostgreSQL (schema inspection, query execution), Cloudflare (KV store, Workers deployment), Brave Search, and Puppeteer browser automation. The Anthropic [[Claude Agent SDK]] ships with built-in MCP client support. OpenAI, Google DeepMind, and Mistral have all announced MCP compatibility for their agent tooling frameworks. The Nostr community is prototyping [[Nostr Protocol]] MCP servers that expose relay subscriptions and event publishing as LLM tools, enabling censorship-resistant agent communication.

  #### Cross-Domain Applications

  In the [[Robotics Domain]], MCP servers bridge to [[Robot Operating System]] topics and services, enabling natural-language robot commanding: an LLM agent calls an MCP tool `ros2_action_send_goal` to navigate a robot to coordinates. In the [[Blockchain Domain]], MCP servers expose blockchain RPC endpoints (Ethereum, Bitcoin) as tools, allowing agents to query on-chain data and submit transactions. In the [[NGM Domain]], [[Solid Pod]] MCP servers expose pod containers as resources, enabling agents to personalise themselves from the user's linked data without centralised data stores. In the [[Telecollaboration Domain]], MCP tools can trigger [[WebRTC]] session establishment or inject shared context into collaborative virtual environments.

  #### Standards and References

  - Anthropic. (2024). *Model Context Protocol Specification*. https://modelcontextprotocol.io/specification
  - Anthropic. (2024). "Introducing the Model Context Protocol." Anthropic Blog. https://www.anthropic.com/news/model-context-protocol
  - IETF. (2020). *JSON-RPC 2.0 Specification*. https://www.jsonrpc.org/specification
  - Microsoft. (2016). *Language Server Protocol Specification*. https://microsoft.github.io/language-server-protocol/
  - GitHub MCP Server Registry. (2025). https://github.com/modelcontextprotocol/servers

- ### Provenance
  - sources:: [[Anthropic MCP Specification]], [[Model Context Protocol GitHub]], [[Claude Agent SDK Documentation]], [[JSON-RPC 2.0 Specification]]
  - migration-date:: 2026-04-26T00:00:00Z