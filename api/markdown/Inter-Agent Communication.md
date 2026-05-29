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
  "definition": "Inter-Agent Communication is the set of protocols, message formats, and transport mechanisms through which autonomous software agents exchange information, coordinate tasks, delegate subtasks, share observations, and negotiate commitments in multi-agent systems (MAS), spanning both classical symbolic AI frameworks (FIPA ACL, KQML) and contemporary LLM-based architectures (Model Context Protocol, Agent2Agent Protocol, tool-calling schemas). Effective inter-agent communication defines the content language (what is expressed), the interaction protocol (how exchanges are sequenced), and the transport layer (how messages are delivered), enabling heterogeneous agents built on different underlying models to collaborate without shared internal state. The discipline encompasses message authentication, semantic interoperability, context propagation, and trust boundaries between agents of differing capability and provenance.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:multi-agent-system", "label": "Multi-Agent System"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:mas", "label": "MAS"},
      {"@id": "urn:ngm:class:multi-agent-systems", "label": "Multi-Agent Systems"},
      {"@id": "urn:ngm:class:agent2-agent-protocol", "label": "Agent2Agent Protocol"},
      {"@id": "urn:ngm:class:message-passing", "label": "Message Passing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow"},
      {"@id": "urn:ngm:class:orchestration", "label": "Orchestration"},
      {"@id": "urn:ngm:class:agentic-ai", "label": "Agentic AI"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:model-context-protocol", "label": "Model Context Protocol"},
      {"@id": "urn:ngm:class:function-calling", "label": "Function Calling"},
      {"@id": "urn:ngm:class:tool-use", "label": "Tool Use"},
      {"@id": "urn:ngm:class:rest-api", "label": "REST API"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Inter-Agent Communication is the discipline of defining and implementing protocols through which autonomous [[Agentic AI]] instances exchange structured messages — task delegations, observations, results, and commitments — using standards such as [[Agent2Agent Protocol]] and [[Model Context Protocol]] to achieve goal-directed coordination across heterogeneous [[Multi-Agent Systems]].

- ### Relationships
  - The field inherits from classical [[MAS]] research (FIPA, KQML) and adapts it to LLM-era architectures where agents communicate through structured tool calls, JSON schemas, and context-passing rather than logic-based speech acts. [[Message Passing]] provides the foundational transport abstraction; [[Function Calling]] and [[Tool Use]] constitute the LLM-native message formats that instruct agents to invoke capabilities. [[Model Context Protocol]] standardises the server-side API surface that agents query, while [[Agent2Agent Protocol]] (Google, 2025) defines the peer-to-peer task delegation envelope for heterogeneous agents. [[REST API]] and WebSocket transports carry these messages, and the receiving agent uses the incoming context to extend its own [[Agentic Workflow]]. The capability enables emergent [[Orchestration]] of multi-step pipelines by decomposing goals across specialised sub-agents.

- ### Content
  - Inter-agent communication has roots in distributed AI research of the 1980s, when DARPA's Distributed Vehicle Monitoring Testbed demonstrated that networks of specialised agents could outperform monolithic AI systems on sensor fusion problems. The Knowledge Query and Manipulation Language (KQML, 1993) and FIPA Agent Communication Language (FIPA ACL, 1997) formalised performative-based communication — agents declare the illocutionary force of messages (INFORM, REQUEST, QUERY-IF) in addition to their content — enabling heterogeneous agents to reason about each other's intentions rather than merely processing data.

  - In contemporary LLM-based multi-agent systems, inter-agent communication is mediated through prompt engineering, structured output schemas, and increasingly standardised API contracts. An orchestrator agent (e.g., LangGraph StateGraph, AutoGen GroupChat) emits task messages to sub-agents in JSON format specifying the action, parameters, and expected output schema; sub-agents execute tool calls through capability interfaces and return results that the orchestrator incorporates into its next reasoning step. The Model Context Protocol (Anthropic, November 2024) introduces a standardised server interface allowing any MCP-compliant tool server to be discovered and invoked by any MCP-compliant agent, reducing integration friction. Google's Agent2Agent Protocol (April 2025) extends this to peer-to-peer delegation across independently deployed agents, defining an "AgentCard" capability manifest and a task lifecycle with streaming partial results.

  - The significance of effective inter-agent communication grows with the complexity of tasks assigned to agentic systems. Software engineering workflows now deploy coding agents, testing agents, documentation agents, and code-review agents in coordinated pipelines; scientific discovery workflows deploy literature-retrieval, hypothesis-generation, and experimental-design agents; financial workflows compose market-data, risk-analysis, and execution agents. Without standardised communication, each composition is a bespoke integration; with standards, agent capabilities become composable modules in a programmable ecosystem. Research shows that specialised multi-agent pipelines outperform single-agent approaches on complex reasoning tasks by enabling parallelism, specialisation, and independent verification.

  - As of 2024-2025, inter-agent communication standards are in active consolidation. MCP has attracted over 1,000 community server implementations within months of release; A2A is being piloted across enterprise automation platforms. Core unsolved problems include semantic interoperability (agents trained on different data may use the same terms with different meanings), trust and authentication (how does an orchestrator verify a sub-agent's identity and capabilities), context propagation efficiency (passing full conversation history to each sub-agent is expensive), and safety isolation (a compromised sub-agent should not be able to inject malicious instructions into the orchestrator's context). Emerging solutions include agent identity via DID documents, capability attestations via verifiable credentials, and compressed context representations via embedding-based retrieval.

