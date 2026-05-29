public:: true

# Agent Communication Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:agent-communication-protocol",
  "@type": "Page",
  "vc:slug": "agent-communication-protocol",
  "title": "Agent Communication Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agent-communication-protocol",
  "@type": "Class",
  "label": "Agent Communication Protocol",
  "definition": "An Agent Communication Protocol is a formalised specification governing the syntax, semantics, and pragmatics of message exchange between autonomous software agents, enabling them to coordinate actions, share information, delegate tasks, and negotiate goals across heterogeneous runtime environments. Such protocols define the speech act primitives, message envelope formats, conversation policies, and error-handling procedures that agents must implement to participate in a multi-agent system.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [
    {"@id": "urn:ngm:class:coordination-protocol", "label": "Coordination Protocol"}
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:inter-agent-communication", "label": "Inter-Agent Communication"},
      {"@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow"},
      {"@id": "urn:ngm:class:autonomous-task-execution", "label": "Autonomous Task Execution"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:message-passing", "label": "Message Passing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:agent-to-agent-protocol", "label": "Agent-to-Agent Protocol"},
      {"@id": "urn:ngm:class:model-context-protocol", "label": "Model Context Protocol"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - An [[Agent Communication Protocol]] is a formal specification defining how autonomous software agents exchange messages to achieve joint objectives. It specifies the performative vocabulary (the illocutionary force of messages: inform, request, propose, confirm, refuse), the message envelope structure (sender, receiver, conversation ID, language, ontology), and the conversational patterns (finite-state machines or interaction protocols such as contract-net, auction, or subscribe-notify). A well-defined protocol enables [[Inter-Agent Communication]] across agents built by different vendors, using [[Message Passing]] as the substrate, and coordinates [[Agentic Workflow]] execution through structured turn-taking and commitment tracking.

- ### Relationships
  - [[Agent Communication Protocol]] is a subclass of [[Coordination Protocol]], sitting above raw [[Message Passing]] transport. It enables [[Inter-Agent Communication]] between heterogeneous agents, drives [[Agentic Workflow]] composition, and underpins [[Autonomous Task Execution]] by providing the negotiation and delegation primitives agents need. It is closely related to [[Agent-to-Agent Protocol]] (a specific modern instantiation) and to [[Model Context Protocol]], which defines tool-call semantics for LLM-based agents.

- ### Content
  - The intellectual foundations of agent communication protocols lie in speech act theory (Austin, Searle) and knowledge query and manipulation language (KQML, 1993). The FIPA (Foundation for Intelligent Physical Agents) standards body produced the FIPA ACL specification in the late 1990s, defining a comprehensive ontology of communicative acts and interaction protocol templates (FIPA Request, FIPA Contract Net, FIPA Subscribe) that influenced academic multi-agent systems research for two decades.

  - A protocol specification typically addresses four layers: the transport layer (HTTP, WebSocket, AMQP, or gRPC), the envelope layer (JSON-LD, protobuf, or XML with sender/receiver metadata), the performative layer (the speech-act verb and its semantic commitments), and the conversation layer (the state machine governing valid sequences of messages). Modern LLM-based agent frameworks such as AutoGen, CrewAI, and LangGraph implement lightweight informal protocols based on structured JSON, often encoding task delegation as function-call invocations rather than explicit speech acts.

  - Practical deployments appear in robotic warehouse logistics (agents negotiating pick-task allocation via contract-net protocols), enterprise automation (RPA orchestrators using event-driven messaging), financial trading (algorithmic agents exchanging orders via FIX protocol extensions), and IoT device management (MQTT-based agent coordination). The emergence of LLM agents has created demand for richer protocols that handle long-horizon task decomposition, progress reporting, error propagation, and capability advertisement.

  - In 2025, the ecosystem is converging around a small set of influential specifications: Anthropic's [[Model Context Protocol]] for tool-call semantics, Google's [[Agent-to-Agent Protocol]] for cross-agent delegation, and the emerging OpenAgent standard from the Linux Foundation AI. Interoperability remains the central challenge — agents built on different frameworks implement incompatible message schemas, requiring gateway adapters. Standardisation efforts are expected to mature through 2026 as multi-agent deployments move from research to production environments.