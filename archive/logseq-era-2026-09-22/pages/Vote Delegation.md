public:: true

# Vote Delegation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:vote-delegation",
  "@type": "Page",
  "vc:slug": "vote-delegation",
  "title": "Vote Delegation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:vote-delegation",
  "@type": "Class",
  "label": "Vote Delegation",
  "definition": "Vote delegation is a governance mechanism by which a token holder assigns their voting power to another address that votes on their behalf, without transferring ownership of the underlying assets. It is central to on-chain DAO governance, enabling passive holders to entrust active, informed delegates and improving participation rates. Delegation can be revoked or reassigned, and may be liquid, allowing chained or topic-specific delegation.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-governance-and-regulation", "label": "Governance and Regulation"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:delegate-democracy", "label": "Delegate Democracy"}, {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Vote delegation lets a holder assign voting power to a representative while retaining custody of their [[Governance Token]]; it is the on-chain primitive underlying liquid or [[Delegate Democracy]] models.
- ### Content
  - In ERC20Votes-style contracts, delegation is recorded as a checkpointed mapping so that voting weight at any block height can be queried for snapshot-based proposals. Liquid democracy extends this with transitive delegation and per-issue overrides, trading off accountability and expertise concentration against the risk of delegate cartels and low independent scrutiny.
