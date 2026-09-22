public:: true

# Event Emission
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:event-emission",
  "@type": "Page",
  "vc:slug": "event-emission",
  "title": "Event Emission",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:event-emission",
  "@type": "Class",
  "label": "Event Emission",
  "definition": "Event emission is the act by which a smart contract or software component publishes a structured log entry recording that something notable occurred during execution. On blockchains, emitted events are written to transaction logs that off-chain applications and indexers subscribe to, since contracts cannot push data outward directly. Events provide a cheap, queryable record of state changes and are the primary bridge between on-chain logic and external systems.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:agent-event-stream", "label": "Agent Event Stream"}, {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Event emission is how a [[Smart Contract]] publishes structured logs of significant occurrences, forming a record that downstream systems such as an [[Agent Event Stream]] consume.
- ### Content
  - Because contracts cannot call external systems, emitted events written to transaction logs are the standard outbound channel. Indexers and dApps subscribe to these logs to track state changes cheaply and reconstruct application history.
