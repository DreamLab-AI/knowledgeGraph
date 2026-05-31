public:: true

# Quorum Mechanism
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:quorum-mechanism",
  "@type": "Page",
  "vc:slug": "quorum-mechanism",
  "title": "Quorum Mechanism",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:quorum-mechanism",
  "@type": "Class",
  "label": "Quorum Mechanism",
  "definition": "A quorum mechanism is a governance rule that requires a minimum threshold of participation or stake to be reached before a vote or decision is considered valid and binding. In on-chain governance it guards against capture by small, motivated minorities and ensures decisions reflect sufficient stakeholder engagement. Quorum thresholds are often expressed as a fraction of total voting power or eligible participants.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-governance-and-regulation", "label": "Blockchain Governance and Regulation"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:on-chain-voting", "label": "On-Chain Voting"},
      {"@id": "urn:ngm:class:delegate-democracy", "label": "Delegate Democracy"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A quorum mechanism sets the minimum participation needed for a governance vote to pass. It is a constituent part of [[On-Chain Voting]] and is required by [[Delegate Democracy]] models to legitimise outcomes.
- ### Content
  - Setting quorum is a balance: too high and proposals stall through voter apathy; too low and a small coalition can push through changes. DAOs experiment with adaptive quorums, conviction voting, and delegation to raise effective participation while preventing both gridlock and minority capture.
