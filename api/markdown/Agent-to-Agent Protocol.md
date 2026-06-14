public:: true

# Agent-to-Agent Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:agent-to-agent-protocol",
  "@type": "Page",
  "vc:slug": "agent-to-agent-protocol",
  "title": "Agent-to-Agent Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agent-to-agent-protocol",
  "@type": "Class",
  "label": "Agent-to-Agent Protocol",
  "definition": "Agent-to-Agent Protocol is a class of communication specifications that define how autonomous AI agents discover one another, advertise capabilities, delegate tasks, and exchange results directly — without requiring a centralised broker — enabling peer-to-peer coordination between agents built by different organisations or on different frameworks. These protocols treat agents as first-class addressable entities with discoverable skill sets and negotiable service contracts.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": {"@id": "urn:ngm:class:agent-communication-protocol", "label": "Agent Communication Protocol"},
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:inter-agent-communication", "label": "Inter-Agent Communication"},
      {"@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow"},
      {"@id": "urn:ngm:class:decentralised-multi-agent-system", "label": "Decentralised Multi-Agent System"},
      {"@id": "urn:ngm:class:task-delegation", "label": "Task Delegation"},
      {"@id": "urn:ngm:class:capability-negotiation", "label": "Capability Negotiation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:service-discovery", "label": "Service Discovery"},
      {"@id": "urn:ngm:class:message-passing", "label": "Message Passing"},
      {"@id": "urn:ngm:class:agent-card", "label": "Agent Card"},
      {"@id": "urn:ngm:class:json-ld", "label": "JSON-LD"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:mutual-authentication", "label": "Mutual Authentication"},
      {"@id": "urn:ngm:class:authorisation-scope", "label": "Authorisation Scope"},
      {"@id": "urn:ngm:class:decentralised-identifier", "label": "Decentralised Identifier"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:agent2-agent-protocol-google-2025", "label": "Agent2Agent Protocol (Google 2025)"},
      {"@id": "urn:ngm:class:fipa-acl", "label": "FIPA ACL"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:autonomous-agent", "label": "Autonomous Agent"},
      {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:centralised-orchestration", "label": "Centralised Orchestration"},
      {"@id": "urn:ngm:class:remote-procedure-call", "label": "Remote Procedure Call"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:model-context-protocol", "label": "Model Context Protocol"},
      {"@id": "urn:ngm:class:multi-agent-framework", "label": "Multi-Agent Framework"},
      {"@id": "urn:ngm:class:prompt-injection", "label": "Prompt Injection"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"},
      {"@id": "urn:ngm:class:web-of-things", "label": "Web of Things"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:foundation-for-intelligent-physical-agents", "label": "Foundation for Intelligent Physical Agents"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:agent-interoperability-protocol", "label": "Agent Interoperability Protocol"},
    {"@id": "urn:ngm:class:peer-agent-protocol", "label": "Peer Agent Protocol"}
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Agent-to-Agent Protocol]] denotes a family of specifications enabling autonomous AI agents to interact directly with peers across organisational and framework boundaries. Unlike orchestrator-driven patterns where a central planner dispatches work, agent-to-agent protocols enable decentralised coordination: agents advertise their capabilities via [[Service Discovery]] mechanisms (agent cards, capability manifests), negotiate task assignments through structured [[Message Passing]], delegate sub-tasks to specialist peers, and propagate results back through defined callback or streaming channels. The protocol must address authentication (ensuring agents communicate with legitimate counterparts), authorisation (what actions a requesting agent may ask of a responding agent), and conversation management (correlating multi-turn task exchanges).

- ### Relationships
  - [[Agent-to-Agent Protocol]] is a subclass of [[Agent Communication Protocol]], extending it with peer-discovery and capability-negotiation semantics. It enables [[Inter-Agent Communication]] in decentralised multi-agent deployments and drives [[Agentic Workflow]] composition without centralised orchestration. It relies on [[Service Discovery]] for peer location and [[Message Passing]] for message transport. Prominent instantiations include [[Agent2Agent Protocol (Google 2025)]] and are complementary to [[Model Context Protocol]], which governs agent-to-tool communication.

- ### Content
  - The theoretical groundwork for agent-to-agent communication was laid by FIPA ACL in the 1990s and elaborated in peer-to-peer agent systems research at the turn of the millennium. The JADE platform (Java Agent Development Environment) implemented FIPA protocols for distributed agent coordination, but these remained largely confined to academic and enterprise automation contexts. The modern resurgence of interest in agent-to-agent protocols is driven by the proliferation of LLM-based agents and the practical need to compose specialist AI services across enterprise boundaries.

  - A contemporary agent-to-agent protocol specification typically defines: an agent identity layer (DID-style identifiers or X.509 certificates for mutual authentication), an agent card schema (a JSON or JSON-LD document advertising the agent's capabilities, input/output schemas, pricing model, and endpoint URL), a task envelope format (including task ID, instructions, required inputs, and callback endpoint), a streaming or polling mechanism for long-running task results, and error codes and retry semantics. Security considerations include preventing SSRF via agent endpoint URLs, rate limiting to prevent denial of service, and authorisation scopes to constrain what delegated agents may do.

  - Practical deployments are emerging in enterprise AI marketplaces where agents from different vendors compose into end-to-end workflows: a customer-facing LLM agent delegates background research to a specialist web-search agent from another vendor, a data analysis agent from a third, and a report-generation agent from a fourth. Cross-organisation agent delegation is also appearing in supply-chain automation, where procurement agents at different companies negotiate orders directly. The [[Agent2Agent Protocol (Google 2025)]] specification, open-sourced in April 2025, represents the most prominent current attempt to standardise this space.

  - By mid-2025, the agent-to-agent protocol landscape is fragmented but consolidating. Google's A2A, Anthropic's multi-agent patterns, Microsoft's AutoGen multi-agent mesh, and the OpenAgent initiative represent competing but increasingly interoperable approaches. Cross-protocol gateways and adapter layers are being built to bridge them. Key open problems include trust establishment between agents from untrusted organisations, billing and cost attribution in delegated task chains, and preventing adversarial prompt injection via agent-supplied task instructions.