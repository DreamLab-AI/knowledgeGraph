public:: true

# Governance Voting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:governance-voting",
  "@type": "Page",
  "vc:slug": "governance-voting",
  "title": "Governance Voting",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:governance-voting",
  "@type": "Class",
  "label": "Governance Voting",
  "definition": "Governance voting is the mechanism by which holders of governance tokens or members of a decentralised organisation cast votes on proposals to direct a protocol's decisions. Voting power is typically proportional to token holdings or delegated stake, and outcomes can execute automatically on-chain. It is the primary means by which token holders exercise collective control over protocol changes.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-governance-and-regulation", "label": "Governance and Regulation"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"}, {"@id": "urn:ngm:class:crypto-token", "label": "Crypto Token"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Governance voting lets token holders decide protocol proposals; it is implemented by a [[Blockchain Protocol]]'s governance module and is typically enabled by holding or delegating a [[Crypto Token]].
- ### Content
  - Common schemes include one-token-one-vote, quadratic voting to dampen whale dominance, and delegated voting where holders assign their power to representatives. Votes can be tallied off-chain via signed messages for gas efficiency or settled on-chain for binding execution behind a timelock. Design challenges include voter apathy, plutocracy, vote buying, and ensuring proposals are well-scoped and secure before execution.
