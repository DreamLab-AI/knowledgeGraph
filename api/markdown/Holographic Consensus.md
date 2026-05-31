public:: true

# Holographic Consensus
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:holographic-consensus",
  "@type": "Page",
  "vc:slug": "holographic-consensus",
  "title": "Holographic Consensus",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:holographic-consensus",
  "@type": "Class",
  "label": "Holographic Consensus",
  "definition": "Holographic consensus is a DAO governance mechanism that uses a prediction market of staked tokens to surface which proposals reflect the collective will, allowing a small attentive subset to make decisions that represent the whole. Predictors stake on whether a proposal will pass, boosting promising proposals to a faster majority-vote track while filtering spam. It addresses scalability of decentralised governance without requiring every member to vote on everything.",
  "domain": "blockchain",
  "maturity": "experimental",
  "subClassOf": [{"@id": "urn:ngm:class:bc-governance-and-regulation", "label": "BC Governance and Regulation"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"},
      {"@id": "urn:ngm:class:decentralized-governance", "label": "Decentralized Governance"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Holographic consensus is a prediction-market governance mechanism implemented using a [[Governance Token]] to scale [[Decentralized Governance]] in DAOs.
- ### Content
  - By letting stakers bet on proposal outcomes, the system elevates likely-relevant proposals for expedited resolution while economically discouraging noise. The design (popularised by the DAOstack framework) seeks to keep decisions representative even when most token holders are passive, balancing inclusiveness against decision throughput.
