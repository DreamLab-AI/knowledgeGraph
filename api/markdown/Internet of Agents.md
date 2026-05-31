public:: true

# Internet of Agents
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:internet-of-agents",
  "@type": "Page",
  "vc:slug": "internet-of-agents",
  "title": "Internet of Agents",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:internet-of-agents",
  "@type": "Class",
  "label": "Internet of Agents",
  "definition": "The Internet of Agents is an envisioned network architecture in which autonomous AI agents discover, communicate, transact, and collaborate with one another across organisational boundaries using shared protocols. It extends the web from human- and document-centric interaction to machine-to-machine delegation, negotiation, and task execution among agents. It depends on interoperable identity, messaging, and trust standards to let heterogeneous agents cooperate safely.",
  "domain": "ai",
  "maturity": "experimental",
  "subClassOf": [{"@id": "urn:ngm:class:ai-agent-system", "label": "AI Agent System"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:agentic-internet", "label": "Agentic Internet"},
      {"@id": "urn:ngm:class:decentralised-web", "label": "Decentralised Web"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The Internet of Agents is a network where autonomous agents discover and collaborate via shared protocols. It overlaps with the [[Agentic Internet]] vision and draws on the [[Decentralised Web]] for open, permissionless interaction.
- ### Content
  - Realising it requires agent identity, capability discovery, secure messaging, and economic settlement layers so agents can delegate work and verify counterparties. Emerging interoperability protocols aim to make agent-to-agent commerce and coordination as routine as web requests are today.
