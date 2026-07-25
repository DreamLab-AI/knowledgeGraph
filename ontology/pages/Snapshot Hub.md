public:: true

# Snapshot Hub
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:snapshot-hub",
  "@type": "Page",
  "vc:slug": "snapshot-hub",
  "title": "Snapshot Hub",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:snapshot-hub",
  "@type": "Class",
  "label": "Snapshot Hub",
  "definition": "Snapshot Hub is the backend service of the Snapshot off-chain governance platform that stores proposals, collects signed votes, and computes results using token balances read at a chosen block height. Votes are signed messages that incur no gas, while the hub indexes and tallies them according to a configurable voting strategy. It lets DAOs run gasless, verifiable governance while final execution remains optional and off-chain.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-network-component", "label": "Network Component"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:snapshot-voting", "label": "Snapshot Voting"},
      {"@id": "urn:ngm:class:snapshot-block", "label": "Snapshot Block"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Snapshot Hub is the indexing and tallying backend of the Snapshot governance platform, a [[Blockchain Network Component]] that stores proposals and aggregates gasless signed votes. It is the service [[Snapshot Voting]] depends on to compute outcomes.
- ### Content
  - The hub reads token balances at a designated [[Snapshot Block]], applies a configurable voting strategy, and tallies cryptographically signed off-chain messages so participation costs no gas. Results are verifiable by anyone, but execution of a passed proposal is not automatic and typically requires a separate on-chain transaction or a bridge such as an execution module.
