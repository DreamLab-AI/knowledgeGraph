public:: true

# Inter-Agent Communication
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:inter-agent-communication",
  "@type": "Page",
  "vc:slug": "inter-agent-communication",
  "title": "Inter-Agent Communication",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:inter-agent-communication",
  "@type": "Class",
  "label": "Inter-Agent Communication",
  "definition": "Inter-Agent Communication (IAC) is the set of protocols, message formats, and transport mechanisms through which autonomous software agents exchange information, coordinate tasks, delegate subtasks, share observations, and negotiate commitments in multi-agent systems. It spans classical symbolic AI frameworks (FIPA ACL, KQML) and contemporary LLM-based architectures (Model Context Protocol, Agent2Agent Protocol, tool-calling schemas), defining the content language (what is expressed), the interaction protocol (how exchanges are sequenced), and the transport layer (how messages are delivered). Effective IAC enables heterogeneous agents built on different underlying models to collaborate without shared internal state, encompassing message authentication, semantic interoperability, context propagation, and trust boundaries between agents of differing capability and provenance.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:multi-agent-system", "label": "Multi-Agent System"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:agent2-agent-protocol", "label": "Agent2Agent Protocol"},
      {"@id": "urn:ngm:class:message-passing", "label": "Message Passing"},
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"},
      {"@id": "urn:ngm:class:speech-act-theory", "label": "Speech Act Theory"},
      {"@id": "urn:ngm:class:semantic-interoperability", "label": "Semantic Interoperability"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow"},
      {"@id": "urn:ngm:class:orchestration", "label": "Orchestration"},
      {"@id": "urn:ngm:class:agentic-ai", "label": "Agentic AI"},
      {"@id": "urn:ngm:class:task-delegation", "label": "Task Delegation"},
      {"@id": "urn:ngm:class:collaborative-reasoning", "label": "Collaborative Reasoning"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:model-context-protocol", "label": "Model Context Protocol"},
      {"@id": "urn:ngm:class:function-calling", "label": "Function Calling"},
      {"@id": "urn:ngm:class:tool-use", "label": "Tool Use"},
      {"@id": "urn:ngm:class:rest-api", "label": "REST API"},
      {"@id": "urn:ngm:class:websocket", "label": "WebSocket"},
      {"@id": "urn:ngm:class:json-schema", "label": "JSON Schema"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:agent-identity", "label": "Agent Identity"},
      {"@id": "urn:ngm:class:authentication", "label": "Authentication"},
      {"@id": "urn:ngm:class:context-window", "label": "Context Window"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:fipa-acl", "label": "FIPA ACL"},
      {"@id": "urn:ngm:class:kqml", "label": "KQML"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:multi-agent-system", "label": "Multi-Agent System"},
      {"@id": "urn:ngm:class:autonomous-agent", "label": "Autonomous Agent"},
      {"@id": "urn:ngm:class:swarm-intelligence", "label": "Swarm Intelligence"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:monolithic-ai", "label": "Monolithic AI"},
      {"@id": "urn:ngm:class:single-agent-system", "label": "Single-Agent System"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:service-oriented-architecture", "label": "Service Oriented Architecture"},
      {"@id": "urn:ngm:class:microservices", "label": "Microservices"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:agent-communication", "label": "Agent Communication"},
    {"@id": "urn:ngm:class:multi-agent-communication", "label": "Multi-Agent Communication"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Inter-Agent Communication (IAC) is the discipline of defining and implementing protocols through which autonomous [[Agentic AI]] instances exchange structured messages — task delegations, observations, results, and commitments — enabling goal-directed coordination across heterogeneous [[Multi-Agent System]] architectures. Rooted in classical [[Distributed Systems]] research and formal [[Speech Act Theory]], IAC has evolved from symbolic performative languages (FIPA ACL, KQML) to contemporary LLM-native mechanisms including [[Model Context Protocol]], [[Agent2Agent Protocol]], and [[Function Calling]] schemas. The core challenge is achieving [[Semantic Interoperability]] between agents of differing provenance, capability, and internal representation without requiring shared global state.

- ### Overview
  - Inter-Agent Communication sits at the intersection of distributed computing, cognitive science, and software engineering. Where classical [[Distributed Systems]] required only data exchange between homogeneous services, multi-agent settings require agents to reason about each other's goals, capabilities, and states — making the semantics of the message as important as its content.
  - **Why it matters**: As AI systems shift from monolithic models to networks of specialised [[Autonomous Agent]] instances, the quality of communication between those agents directly governs the quality, reliability, and safety of collective behaviour. Poorly designed IAC leads to miscoordination, context loss, and prompt injection vulnerabilities; well-designed IAC enables composable, auditable, and scalable agentic pipelines.
  - **Core dimensions**:
    - Content language — what can be expressed (propositional facts, task specifications, belief states, queries)
    - Interaction protocol — the sequencing of exchanges (request-reply, subscribe-publish, contract net, blackboard)
    - Transport layer — how bytes move between agents ([[REST API]], [[WebSocket]], gRPC, message queues)
    - Identity and trust — how senders are authenticated and capabilities attested
  - **Evolution**: The field progresses through three overlapping eras — symbolic (1980s–2000s), service-oriented (2000s–2020s), and LLM-native (2023–present) — each layering new requirements atop existing foundations.

- ### Key Components
  - **Message Structure**
    - Every IAC message contains a performative (the speech act type), sender/receiver identity, content (the proposition or task), and metadata (conversation ID, reply-by time, language indicator). [[JSON Schema]] now commonly encodes this in LLM-native systems.
    - Classical performatives from [[FIPA ACL]]: INFORM, REQUEST, QUERY-IF, PROPOSE, AGREE, REFUSE, FAILURE, CANCEL.
    - LLM-native equivalents: tool-call JSON objects, system prompts specifying role and capability, structured output schemas enforcing result format.
  - **Interaction Protocols**
    - Request-reply (synchronous): orchestrator sends task, sub-agent responds with result; used in simple [[Tool Use]] chains.
    - Publish-subscribe (asynchronous): agents register interest in event streams; used in event-driven [[Agentic Workflow]] pipelines.
    - Contract net: orchestrator broadcasts task, sub-agents bid capability, orchestrator awards contract; used in dynamic [[Task Delegation]].
    - Blackboard: agents share a common working memory object; used in [[Swarm Intelligence]] and parallelised reasoning tasks.
  - **Transport and Serialisation**
    - HTTP/[[REST API]]: stateless, widely supported, low integration cost; dominant in MCP server-to-agent calls.
    - [[WebSocket]]: bidirectional streaming; preferred for partial result streaming in [[Agent2Agent Protocol]].
    - Message queues (RabbitMQ, Kafka): durable, decoupled delivery; used in enterprise [[Orchestration]] pipelines.
    - [[JSON Schema]]-validated payloads ensure structural correctness; OpenAPI specs document capability surfaces.
  - **Identity and Trust**
    - [[Agent Identity]] management via DID documents allows agents to carry cryptographically verifiable capability manifests.
    - OAuth 2.0 / OIDC token flows authenticate agent-to-agent API calls in cloud deployments.
    - [[Authentication]] of sub-agents prevents malicious impersonation and prompt injection escalation.
    - Capability attestations via [[Verifiable Credentials]] allow an agent to prove its permitted action scope to a receiving orchestrator.
  - **Context Propagation**
    - A central IAC challenge: how much conversation history, memory, and world state to carry in each message without exceeding [[Context Window]] limits.
    - Strategies: full-context pass-through (simple but expensive), compressed summaries, embedding-based retrieval of relevant context (RAG-style), and stateful session tokens that the receiving agent can use to reconstruct context independently.
  - **Semantic Interoperability**
    - [[Semantic Interoperability]] ensures that the meaning of terms is consistent across agents trained on different corpora. Solutions include shared ontologies, structured data schemas, and grounding protocols that map agent-internal representations to canonical concept identifiers.

- ### Historical Development
  - **1980s**: DARPA's Distributed Vehicle Monitoring Testbed demonstrated networks of specialised agents outperforming monolithic AI on sensor fusion. Blackboard architectures (HEARSAY-II) introduced shared working memory as a coordination medium.
  - **1993**: Knowledge Query and Manipulation Language ([[KQML]]) formalised performative-based communication, enabling agents to declare the illocutionary force of messages (not merely their content). The [[Speech Act Theory]] of Austin and Searle provided the philosophical grounding.
  - **1997**: [[FIPA ACL]] (Foundation for Intelligent Physical Agents Agent Communication Language) standardised KQML-inspired performatives with formal semantics based on modal logic (belief, desire, intention operators), enabling rigorous semantic specification of agent conversations.
  - **2000s**: Service-oriented architecture ([[Service-Oriented Architecture]]) and [[Microservices]] patterns introduced RESTful APIs, WSDL, and SOAP as pragmatic message contracts, divorcing communication from cognitive semantics in favour of engineering practicality.
  - **2023–2024**: LLM-native multi-agent frameworks ([[Orchestration]] via LangGraph, AutoGen, CrewAI) emerge, using structured JSON tool-call schemas as the de facto message format. Context injection via system prompts replaces formal belief-state specification.
  - **November 2024**: Anthropic releases [[Model Context Protocol]] (MCP), a standardised client-server protocol allowing any MCP-compliant tool server to be discovered and invoked by any MCP-compliant agent, dramatically reducing integration friction.
  - **April 2025**: Google releases [[Agent2Agent Protocol]] (A2A), defining peer-to-peer task delegation across independently deployed agents with an "AgentCard" capability manifest and streaming partial results over [[WebSocket]].

- ### Applications
  - **Software Engineering Automation**
    - Pipelines of coding, testing, documentation, and code-review agents communicate through IAC to deliver end-to-end software changes. Each specialised agent receives a structured task message, executes its capability, and returns structured results consumed by the orchestrating agent.
  - **Scientific Discovery**
    - Literature-retrieval, hypothesis-generation, and experimental-design agents exchange findings, ranked candidates, and experimental parameters via structured IAC, enabling AI-assisted research workflows that span data acquisition through to report generation.
  - **Enterprise Automation**
    - Financial workflows compose market-data, risk-analysis, and execution agents. Supply-chain workflows compose demand-forecasting, inventory, and logistics agents. Each composition relies on standardised IAC to enable modular replacement of individual agent components.
  - **Customer Service Orchestration**
    - Routing agents, knowledge-retrieval agents, and response-generation agents collaborate in real-time to answer complex queries, with IAC ensuring context (customer history, current intent) is propagated cleanly between agents without duplication or loss.
  - **Robotic and Cyber-Physical Systems**
    - Task planning agents delegate low-level control actions to motor-control sub-agents via IAC, bridging symbolic planning and reactive execution layers. Sensor fusion agents feed environment state to planning agents.
  - **Security and Red-Teaming**
    - Multi-agent red teams use IAC to coordinate attack-agent, assessment-agent, and reporting-agent pipelines, enabling parallelised vulnerability analysis.

- ### Key Challenges and Open Problems
  - **Semantic drift**: agents trained on different corpora may attach different meanings to identical terms; IAC without ontological grounding amplifies this.
  - **Prompt injection via IAC**: a malicious sub-agent can embed adversarial instructions in its response, causing the receiving orchestrator to execute unintended actions — a critical safety concern in [[Agentic AI]] pipelines.
  - **Context window pressure**: passing full conversation history to each sub-agent rapidly exhausts [[Context Window]] budgets; compression and selective retrieval strategies are actively researched.
  - **Trust hierarchies**: when an orchestrator delegates to an untrusted sub-agent, the principal-agent hierarchy must encode capability boundaries that cannot be overridden by the sub-agent's output.
  - **Observability and debugging**: distributed multi-agent pipelines with asynchronous IAC are difficult to trace; [[Orchestration]] platforms are adding structured logging and distributed tracing support.
  - **Standardisation fragmentation**: MCP, A2A, OpenAI Assistants API, and proprietary agent frameworks all implement competing IAC schemas, impeding interoperability across vendors.

- ### Relationships
  - uses:: [[Model Context Protocol]]
  - uses:: [[Function Calling]]
  - uses:: [[Tool Use]]
  - uses:: [[REST API]]
  - uses:: [[WebSocket]]
  - uses:: [[JSON Schema]]
  - enables:: [[Agentic Workflow]]
  - enables:: [[Orchestration]]
  - enables:: [[Agentic AI]]
  - enables:: [[Task Delegation]]
  - enables:: [[Collaborative Reasoning]]
  - requires:: [[Agent Identity]]
  - requires:: [[Authentication]]
  - requires:: [[Context Window]]
  - implements:: [[FIPA ACL]]
  - implements:: [[KQML]]
  - supports:: [[Multi-Agent System]]
  - supports:: [[Autonomous Agent]]
  - supports:: [[Swarm Intelligence]]
  - relatedTo:: [[Agent2Agent Protocol]]
  - relatedTo:: [[Message Passing]]
  - relatedTo:: [[Distributed Systems]]
  - relatedTo:: [[Speech Act Theory]]
  - relatedTo:: [[Semantic Interoperability]]
  - contrastsWith:: [[Monolithic AI]]
  - bridges-to:: [[Service-Oriented Architecture]]
  - bridges-to:: [[Microservices]]

- ### Standards and Context
  - **FIPA (Foundation for Intelligent Physical Agents)**: international body that produced [[FIPA ACL]], the most formally specified agent communication language, with modal-logic semantics and standardised interaction protocols (FIPA Request, FIPA Contract Net, FIPA Subscribe).
  - **W3C Verifiable Credentials**: provides the credential substrate for agent capability attestations and identity proofs in IAC trust frameworks.
  - **OpenAPI / Swagger**: de facto standard for documenting REST-based agent capability surfaces; widely used in [[Model Context Protocol]] server specifications.
  - **JSON-RPC 2.0**: underlies many LLM tool-calling implementations; provides a lightweight request-response envelope suitable for [[Function Calling]].
  - **OASIS AMQP**: message queuing standard used in enterprise multi-agent deployments requiring durable, guaranteed-delivery IAC.
  - **IEEE P2510 (IoT Data)** and **IEEE P7000-series (Ethics)**: adjacent standards whose ethical agent-behaviour clauses inform trust constraints in IAC design.
  - **W3C DID (Decentralised Identifiers)**: foundational specification for [[Agent Identity]] in cross-organisational IAC, enabling cryptographic verification of agent provenance without central registries.

- ### Provenance
  - sources:: FIPA Specifications (FIPA 2002), KQML reference (Finin et al. 1994), Anthropic MCP specification (Nov 2024), Google A2A specification (Apr 2025), Wooldridge "An Introduction to MultiAgent Systems" (2009), LangGraph / AutoGen documentation
  - updated:: 2026-06-13
