public:: true

# Agent2Agent Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:agent2-agent-protocol",
  "@type": "Page",
  "vc:slug": "agent2-agent-protocol",
  "title": "Agent2Agent Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agent2-agent-protocol",
  "@type": "Class",
  "label": "Agent2Agent Protocol",
  "definition": "Agent2Agent Protocol (A2A) is an open specification developed by Google and partner organisations that enables heterogeneous AI agents to discover, communicate, and collaborate across organisational and platform boundaries. It defines a standardised messaging envelope, capability advertisement mechanism, and task-delegation schema so that agents built on different frameworks — such as LangChain, CrewAI, or custom enterprise systems — can interoperate without bespoke integration code. The protocol operates over HTTPS with JSON-RPC 2.0 and supports both synchronous request-response and asynchronous streaming via Server-Sent Events. Agent capability cards, analogous to service discovery manifests, allow an agent to advertise its skills so that orchestrating agents can route work appropriately.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"}
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:multi-agent-systems", "label": "Multi-Agent Systems"},
      {"@id": "urn:ngm:class:agent-event-stream", "label": "Agent Event Stream"},
      {"@id": "urn:ngm:class:server-sent-events", "label": "Server-Sent Events"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow"},
      {"@id": "urn:ngm:class:orchestration", "label": "Orchestration"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:rest-api", "label": "REST API"},
      {"@id": "urn:ngm:class:model-context-protocol", "label": "Model Context Protocol"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:interoperability-protocol", "label": "Interoperability Protocol"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Agent2Agent Protocol is an open interoperability specification that allows [[AI Agents]] built on disparate frameworks to discover each other's capabilities and collaborate via standardised [[Communication Protocol]] primitives over HTTPS.

- ### Relationships
  - A2A sits alongside [[Model Context Protocol]] as a complementary standard: MCP governs how agents access tools and context, while A2A governs how agents delegate tasks to one another. It directly enables [[Agentic Workflow]] pipelines that span multiple vendors, and relies on [[Server-Sent Events]] for streaming progress updates. [[Orchestration]] platforms use A2A capability cards to build dynamic [[Multi-Agent Systems]] without hard-coded routing logic.

- ### Content
  - Agent2Agent Protocol emerged from a 2025 initiative by Google alongside over fifty technology partners who recognised that the proliferation of agent frameworks was creating a fragmented ecosystem. Each framework had invented its own wire format for inter-agent calls, making cross-vendor collaboration prohibitively expensive. A2A standardises the handshake: an agent exposes a well-known JSON endpoint describing its skills, accepted input schemas, and authentication requirements, and any compliant caller can invoke it using a common task-request envelope.

  - The protocol is deliberately transport-agnostic at the logical level while mandating HTTPS as the baseline transport for security. Tasks are submitted as JSON-RPC 2.0 calls containing a structured goal, input artefacts, and optional context. Long-running tasks return a task identifier that callers can poll or subscribe to via [[Server-Sent Events]], enabling real-time progress streaming without requiring persistent connections. The [[Agent Event Stream]] abstraction handles back-pressure and reconnection transparently.

  - Security in A2A is addressed through OAuth 2.0 bearer tokens for caller authentication and optional mutual TLS for high-assurance deployments. The capability card includes a scopes field so orchestrators can determine whether they hold the necessary credentials before dispatching work. This design reduces the blast radius of compromised agents because each agent only exposes the minimal capability surface it advertises.

  - From an architectural perspective, A2A is complementary rather than competitive with [[Model Context Protocol]]: MCP provides the tool-and-resource layer that a single agent uses to interact with its environment, while A2A provides the peer-to-peer delegation layer between agents. Enterprise deployments typically stack both protocols, using MCP-connected agents as leaf workers that are orchestrated by an A2A-speaking coordinator agent.

  - The protocol is designed to support the emerging [[Agentic Internet]] vision in which specialised agents — coding assistants, data analysts, legal reviewers — form ad hoc coalitions to complete complex tasks. By standardising discovery and delegation, A2A lowers the barrier to building agent marketplaces where capability providers can publish agents that any compliant orchestrator can hire dynamically.
