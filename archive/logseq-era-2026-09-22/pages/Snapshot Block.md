public:: true

# Snapshot Block
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:snapshot-block",
  "@type": "Page",
  "vc:slug": "snapshot-block",
  "title": "Snapshot Block",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:snapshot-block",
  "@type": "Class",
  "label": "Snapshot Block",
  "definition": "A snapshot block is a specific block height at which token balances are recorded to determine voting weight in a governance proposal, freezing eligibility so that votes reflect holdings at one fixed moment rather than fluctuating balances. Using a past block prevents vote-buying or borrowing tokens after a proposal opens. It is a core primitive in off-chain and on-chain DAO voting systems.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-governance-and-regulation", "label": "Governance and Regulation"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:snapshot-voting", "label": "Snapshot Voting"},
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A snapshot block is the fixed block height used to record [[Governance Token]] balances for determining voting power in a proposal, freezing eligibility at a single point in time. It is the timing anchor underpinning [[Snapshot Voting]].
- ### Content
  - By measuring holdings at a past, immutable block, the snapshot block prevents participants from acquiring or borrowing tokens after a vote opens to inflate their influence. The chosen height is published with the proposal so any observer can independently verify each voter's weight, making the mechanism transparent and resistant to last-minute manipulation.
