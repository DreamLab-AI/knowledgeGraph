public:: true

# Contract Net Protocol

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:contract-net-protocol", "@type":"Page", "title":"Contract Net Protocol", "vc:slug":"contract-net-protocol", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:contract-net-protocol",
  "@type":"Class",
  "label":"Contract Net Protocol",
  "definition":"The Contract Net Protocol is a task-sharing interaction pattern for multi-agent systems in which a manager agent announces a task, soliciting bids from potential contractor agents, evaluates the responses, and awards the task to the most suitable bidder. It decomposes distributed problem solving into the phases of announcement, bidding, awarding, and result reporting, treating the agent population as a market for negotiating the allocation of work. The protocol provides a decentralised mechanism for dynamic task allocation without a fixed assignment table.",
  "domain":"artificial-intelligence",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:artificial-intelligence","label":"Artificial Intelligence"},{"@id":"urn:ngm:class:multi-agent-system","label":"Multi-Agent System"}],
  "relations":{
    "implements":[{"@id":"urn:ngm:class:consensus","label":"Consensus"}],
    "uses":[{"@id":"urn:ngm:class:agent","label":"Agent"}],
    "requires":[{"@id":"urn:ngm:class:agent","label":"Agent"}],
    "hasPart":[{"@id":"urn:ngm:class:consensus","label":"Consensus"}],
    "enables":[{"@id":"urn:ngm:class:automation","label":"Automation"}],
    "supports":[{"@id":"urn:ngm:class:decentralization","label":"Decentralization"}],
    "dependsOn":[{"@id":"urn:ngm:class:agent","label":"Agent"}],
    "bridgesTo":[{"@id":"urn:ngm:class:distributed-systems","label":"Distributed Systems"}],
    "contrastsWith":[{"@id":"urn:ngm:class:consensus","label":"Consensus"}],
    "standardizedBy":[{"@id":"urn:ngm:class:standards","label":"Standards"}],
    "relatedTo":[
      {"@id":"urn:ngm:class:artificial-intelligence","label":"Artificial Intelligence"},
      {"@id":"urn:ngm:class:distributed-systems","label":"Distributed Systems"},
      {"@id":"urn:ngm:class:automation","label":"Automation"},
      {"@id":"urn:ngm:class:decentralization","label":"Decentralization"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- The [[Contract Net Protocol]] is a task-sharing negotiation pattern in which an [[Agent]] acting as manager announces work and contractor agents bid, with the manager awarding the task by evaluating bids. It supports [[Decentralization]] of control across a population of agents and underpins [[Automation]] of work allocation in [[Distributed Systems]].
- ### Overview
- The protocol originated in research on distributed problem solving as a way to allocate tasks among autonomous agents without centrally precomputing assignments.
- A manager decomposes a problem into tasks and broadcasts a task announcement describing eligibility and evaluation criteria.
- Capable agents respond with bids that estimate their suitability, cost, or expected performance.
- The manager evaluates incoming bids, selects a contractor, and issues an award; the contractor executes and returns a result.
- Roles are fluid: any agent can be a manager for one task and a contractor for another, enabling recursive subcontracting.
- ### Mechanisms
- Task announcement: the manager advertises a task to relevant agents, often via broadcast or directed messages.
- Bid submission: contractors respond with proposals reflecting their local state and capabilities.
- Awarding: the manager applies a selection function to pick the best bid and notifies the winner.
- Result reporting: the contractor performs the task and reports completion or failure back to the manager.
- Eligibility filtering reduces communication overhead by targeting announcements at qualified agents.
- ### Applications
- Distributed scheduling and resource allocation across cooperating services.
- Robotic task allocation where robots bid for jobs based on proximity or load.
- Supply and logistics coordination where suppliers bid to fulfil orders.
- Grid and cloud workload distribution among heterogeneous compute nodes.
- ### Relationships
- subClassOf:: [[Artificial Intelligence]]
- implements:: [[Consensus]]
- uses:: [[Agent]]
- requires:: [[Agent]]
- enables:: [[Automation]]
- supports:: [[Decentralization]]
- bridgesTo:: [[Distributed Systems]]
- relatedTo:: [[Distributed Systems]]
- relatedTo:: [[Automation]]
- relatedTo:: [[Decentralization]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
