public:: true

# State Transition Function
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:state-transition-function",
  "@type": "Page",
  "vc:slug": "state-transition-function",
  "title": "State Transition Function",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:state-transition-function",
  "@type": "Class",
  "label": "State Transition Function",
  "definition": "A state transition function is the deterministic rule of a blockchain protocol that maps a current ledger state and a validated block of transactions to the next state, defining exactly how balances, contract storage, and other state evolve. Because every honest node applies the same function to the same inputs, all nodes converge on identical state, which is the basis of replicated consensus. It is the formal heart of a blockchain understood as a replicated state machine.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-protocol-and-consensus", "label": "Blockchain Protocol and Consensus"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:distributed-ledger", "label": "Distributed Ledger"},
      {"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A state transition function is the deterministic [[Blockchain Protocol and Consensus]] rule mapping a current ledger state plus a validated block of transactions to the next state, specifying precisely how balances and contract storage evolve.
- ### Content
  - Because every honest node applies the identical function to identical inputs, all replicas converge on the same state, making it the formal core of a blockchain modelled as a replicated state machine. It governs how a [[Distributed Ledger]] advances block by block, and its exact definition within a [[Blockchain Protocol]] determines the semantics of transaction execution and the conditions under which a block is considered valid.
