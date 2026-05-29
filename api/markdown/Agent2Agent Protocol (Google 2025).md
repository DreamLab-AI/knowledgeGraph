public:: true

# Agent2Agent Protocol (Google 2025)
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:agent2-agent-protocol-google-2025",
  "@type": "Page",
  "vc:slug": "agent2-agent-protocol-google-2025",
  "title": "Agent2Agent Protocol (Google 2025)",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agent2-agent-protocol-google-2025",
  "@type": "Class",
  "label": "Agent2Agent Protocol (Google 2025)",
  "definition": "The Agent2Agent Protocol (A2A), released by Google as an open specification in April 2025, is a JSON-RPC over HTTP(S) protocol that enables AI agents to discover one another via standardised agent cards, delegate tasks through a defined task lifecycle, and stream results back to requesting agents, regardless of the underlying model or framework used to implement the agents. It is designed as a complementary peer-to-peer layer alongside Anthropic's Model Context Protocol.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [
    {"@id": "urn:ngm:class:agent-to-agent-protocol", "label": "Agent-to-Agent Protocol"}
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:inter-agent-communication", "label": "Inter-Agent Communication"},
      {"@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:service-discovery", "label": "Service Discovery"},
      {"@id": "urn:ngm:class:message-passing", "label": "Message Passing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:model-context-protocol", "label": "Model Context Protocol"},
      {"@id": "urn:ngm:class:agent-communication-protocol", "label": "Agent Communication Protocol"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Agent2Agent Protocol (Google 2025)]] (A2A) is Google's open-sourced specification for direct agent-to-agent communication, announced alongside the Google Cloud Next 2025 keynote in April 2025. It defines a lightweight JSON-RPC 2.0 over HTTP(S) protocol with Server-Sent Events for streaming, a standardised "agent card" JSON schema for capability advertisement (hosted at `/.well-known/agent.json`), a task state machine (submitted → working → input-required → completed/failed/cancelled), and support for multimodal input and output artefacts. A2A is explicitly positioned as a peer-to-peer complement to [[Model Context Protocol]] (which governs agent-to-tool communication), together forming a two-protocol stack for the emerging agentic internet.

- ### Relationships
  - [[Agent2Agent Protocol (Google 2025)]] is a specific instantiation of [[Agent-to-Agent Protocol]], implementing peer-discovery via [[Service Discovery]] (agent cards at well-known URIs) and task delegation through structured [[Message Passing]]. It enables [[Inter-Agent Communication]] across frameworks and [[Agentic Workflow]] composition between agents from different organisations. It is complementary to [[Model Context Protocol]] — A2A governs agent-to-agent delegation while MCP governs agent-to-tool invocation — and is a concrete realisation of the broader [[Agent Communication Protocol]] concept.

- ### Content
  - Google published the A2A specification and a reference implementation on GitHub (github.com/google/A2A) on 9 April 2025, coinciding with Google Cloud Next. The protocol was developed in response to the practical challenge of composing AI agents across organisational boundaries: an enterprise might use a Google Gemini-based orchestrator that needs to delegate subtasks to agents built on Anthropic Claude, OpenAI GPT-4o, or bespoke fine-tuned models. Without a standard protocol, each pair of agents required bespoke integration code. A2A was announced with backing from over 50 technology partners including Salesforce, SAP, Atlassian, and Workday.

  - Technically, A2A defines five core concepts: Agent Cards (JSON documents advertising agent identity, capabilities, supported modalities, authentication requirements, and endpoint URL, hosted at `https://{host}/.well-known/agent.json`); Tasks (the unit of work, with a unique ID, message history, and state machine); Messages (exchanged between client and agent within a task, each containing parts of type text, file, or data); Artefacts (task outputs streamed or returned as final results); and Push Notifications (webhook callbacks for long-running task updates). Authentication is delegated to existing mechanisms (OAuth 2.0, API keys) declared in the agent card.

  - The specification supports both synchronous (request-response) and asynchronous (streaming via SSE, or push-notification callback) interaction patterns. Long-running agents — which may take minutes or hours to complete a task — use the asynchronous model. The protocol includes a `tasks/sendSubscribe` RPC for streaming incremental updates. Input-required states allow agents to pause execution and request clarification from the requesting agent or a human in the loop. The Python and JavaScript SDKs published alongside the specification include client, server, and testing utilities.

  - By mid-2025, A2A has been adopted in Google Cloud's Vertex AI Agent Builder and is supported by Agentspace (Google's enterprise agent platform). Integration with LangChain, CrewAI, and AutoGen is in progress through community-contributed adapters. The complementary nature of A2A and [[Model Context Protocol]] is increasingly recognised as the emerging two-layer standard for agentic systems. Key open areas include trust and authorisation models for cross-organisation delegation, standardised agent card registries for discovery at scale, and versioning and deprecation policies for evolving agent capabilities.