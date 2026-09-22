public:: true

# Majority Voting

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:majority-voting", "@type":"Page", "title":"Majority Voting", "vc:slug":"majority-voting", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:majority-voting",
  "@type":"Class",
  "label":"Majority Voting",
  "definition":"Majority voting is a decision rule under which an outcome is accepted only when it is supported by more than half of the participating nodes or samples, providing a simple mechanism for reaching agreement in the presence of disagreement or faults. In distributed consensus algorithms such as Paxos, a value is considered chosen once it has been acknowledged by a majority quorum of acceptors, which guarantees that any two majorities intersect and so prevents conflicting values from being chosen. In machine learning, majority voting aggregates multiple independently sampled outputs, as in self-consistency prompting, selecting the most frequent answer as the final prediction. Its fault tolerance follows directly from quorum intersection: a system with 2f+1 nodes tolerates f faults under majority voting.",
  "domain":"distributed-systems",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:consensus-algorithm","label":"Consensus Algorithm"}],
  "relations":{}
}
```

- ### Definition
	- Majority voting is a decision rule under which an outcome is accepted only when it is supported by more than half of the participating nodes or samples, providing a simple mechanism for reaching agreement in the presence of disagreement or faults. In distributed consensus algorithms such as Paxos, a value is considered chosen once it has been acknowledged by a majority quorum of acceptors, which guarantees that any two majorities intersect and so prevents conflicting values from being chosen. In machine learning, majority voting aggregates multiple independently sampled outputs, as in self-consistency prompting, selecting the most frequent answer as the final prediction. Its fault tolerance follows directly from quorum intersection: a system with 2f+1 nodes tolerates f faults under majority voting.
- ### Relationships
	- subClassOf:: [[Consensus Algorithm]]
