public:: true

# AI Agent Coordination
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ai-agent-coordination",
  "@type": "Page",
  "vc:slug": "ai-agent-coordination",
  "title": "AI Agent Coordination",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-agent-coordination",
  "@type": "Class",
  "label": "AI Agent Coordination",
  "definition": "AI Agent Coordination is the set of mechanisms by which multiple autonomous AI agents align their actions, share state, allocate tasks, and resolve conflicts to achieve goals that exceed any single agent's capability. It covers communication protocols, role assignment, consensus, and negotiation, and may be centralized through an orchestrator or fully decentralized. Effective coordination is essential for multi-agent systems operating over shared resources or distributed ledgers.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-agent-system", "label": "AI Agent System"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralised-coordination", "label": "Decentralised Coordination"},
      {"@id": "urn:ngm:class:rgb-and-client-side-validation", "label": "RGB and Client-Side Validation"}
    ]
  },
  "quality": 0.72
}
```
- ### Definition
  - AI Agent Coordination governs how multiple autonomous agents communicate, divide labour, and reconcile conflicting actions. It overlaps with [[Decentralised Coordination]] when no central controller exists, and can be anchored by verifiable state such as [[RGB and Client-Side Validation]].
- ### Content
  - Coordination strategies include task auctions, blackboard sharing, leader election, and message-passing protocols. The central trade-off is between centralized orchestration, which is simpler but a single point of failure, and decentralized schemes, which are resilient but require consensus and conflict-resolution machinery to stay consistent.
