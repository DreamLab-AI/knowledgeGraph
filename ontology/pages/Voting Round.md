public:: true

# Voting Round
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:voting-round",
  "@type": "Page",
  "vc:slug": "voting-round",
  "title": "Voting Round",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:voting-round",
  "@type": "Class",
  "label": "Voting Round",
  "definition": "A voting round is a discrete phase within a Byzantine fault-tolerant consensus protocol during which participating nodes exchange and tally votes on a proposed value or block. Multi-round protocols such as PBFT and Tendermint progress through prepare, pre-commit, and commit rounds to achieve agreement despite faulty or malicious participants. The round abstraction provides liveness via view changes and safety via supermajority thresholds.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:consensus-protocol", "label": "Consensus Protocol"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:byzantine-fault-tolerance", "label": "Byzantine Fault Tolerance"}, {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A voting round is one structured phase of vote exchange in a [[Consensus Mechanism]], the mechanism by which [[Byzantine Fault Tolerance]] protocols converge on a single agreed value.
- ### Content
  - Rounds typically require a 2f+1 supermajority among 3f+1 nodes to tolerate f Byzantine faults, with a leader or proposer driving each round and view-change subprotocols handling leader failure. The number of message rounds and the quorum certificate design directly govern latency and communication complexity, motivating pipelined variants such as HotStuff.
