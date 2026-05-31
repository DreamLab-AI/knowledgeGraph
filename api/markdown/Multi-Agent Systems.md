public:: true
alias:: Multi Agent Systems

# multi-agent systems
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4dde014a50f64498cd0a8fd2844a65a650ef6d22fd036848700061a84063ea48",
  "@type": "Page",
  "vc:slug": "multi-agent-systems",
  "title": "multi-agent systems",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:multi-agent-systems",
  "@type": "Class",
  "label": "Multi-Agent Systems",
  "definition": "Multi-agent systems (MAS) are computational architectures in which multiple autonomous agents—each with their own perception, memory, and action capabilities—interact within a shared environment to accomplish tasks that benefit from parallelisation, specialisation, or distributed coordination. In contemporary AI, MAS are realised through networks of LLM-backed agents orchestrated by frameworks that manage inter-agent communication, tool invocation, and task decomposition. Emergent collective behaviours, coordination protocols, and mechanism-design principles from classical MAS theory inform how modern agentic systems handle conflict, deception, and incentive alignment.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-application",
      "label": "AI Application"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:autonomous-agent", "label": "Autonomous Agent"},
      {"@id": "urn:ngm:class:agent-frameworks", "label": "Agent Frameworks"},
      {"@id": "urn:ngm:class:orchestration", "label": "Orchestration"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:agentic-ai", "label": "Agentic AI"},
      {"@id": "urn:ngm:class:task-planning", "label": "Task Planning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Multi-agent systems (MAS) are computational architectures in which multiple autonomous agents—each with their own perception, memory, and action capabilities—interact within a shared environment to accomplish tasks that benefit from parallelisation, specialisation, or distributed coordination. In contemporary AI, MAS are realised through networks of LLM-backed agents orchestrated by frameworks that manage inter-agent communication, tool invocation, and task decomposition. Emergent collective behaviours, coordination protocols, and mechanism-design principles from classical MAS theory inform how modern agentic systems handle conflict, deception, and incentive alignment.

- ### Semantic Classification
  - owl-class:: multi-agent-systems:Multi-Agent Systems
  - owl-role:: Concept

- ### Relationships
  - uses [[Autonomous Agent]]
  - uses [[Agent Frameworks]]
  - uses [[Orchestration]]
  - enables [[Agentic AI]]
  - enables [[Task Planning]]
  - relatedTo [[Reinforcement Learning]]

- ### Content
  Multi-agent systems research draws on distributed AI, game theory, and economics. Classical MAS architectures—reactive agents, deliberative BDI (Belief-Desire-Intention) agents, and hybrid architectures—model agent cognition and inter-agent communication using FIPA ACL or KQML message-passing protocols. Mechanism design provides frameworks for incentive-compatible protocols that produce desirable collective outcomes even when individual agents act selfishly.

  Contemporary LLM-based MAS implement Autonomous Agents as instances of large language models equipped with tools (web search, code execution, API calls) and memory, orchestrated by an Orchestration layer that routes tasks, manages context windows, and aggregates results. Agent Frameworks such as LangGraph, AutoGen, and CrewAI provide abstractions for defining agent roles, communication topologies (hierarchical, peer-to-peer, blackboard), and retry logic. Task Planning is distributed: a planner agent decomposes a high-level goal into subtasks dispatched to specialist agents, with results synthesised by an aggregator.

  Reinforcement Learning from multi-agent environments—including self-play—has produced superhuman performance in strategic games (AlphaGo, OpenAI Five) and is increasingly applied to robotics coordination and supply-chain simulation. Challenges include emergent communication, credit assignment across agents, and the safety of open-ended agent populations that may develop unintended coordination strategies. Agentic AI systems deployed in enterprise contexts must address trust, access control, and observability of inter-agent message flows to maintain governance and auditability.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
