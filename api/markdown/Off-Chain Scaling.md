public:: true

# Off-Chain Scaling
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:off-chain-scaling",
  "@type": "Page",
  "vc:slug": "off-chain-scaling",
  "title": "Off-Chain Scaling",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:off-chain-scaling",
  "@type": "Class",
  "label": "Off-Chain Scaling",
  "definition": "Off-chain scaling is a class of blockchain scalability techniques that move transaction execution and state off the main chain while retaining its security as a settlement and dispute-resolution layer. By processing many interactions outside the base layer and committing only summaries or final balances on-chain, it greatly increases throughput and lowers fees. Examples include payment and state channels and various layer-2 constructions.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:bc-protocol-and-consensus", "label": "Protocol and Consensus"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:payment-channel", "label": "Payment Channel"},
      {"@id": "urn:ngm:class:state-channel", "label": "State Channel"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Off-chain scaling moves execution off the base chain while anchoring security on it. It generalises constructs such as the [[Payment Channel]] and the [[State Channel]].
- ### Content
  - Parties transact by exchanging signed state updates off-chain and only settle on-chain to open, close, or dispute a channel, so the base layer arbitrates rather than processes every interaction. The approach trades constant-latency, low-cost interaction for capital lock-up in channels and the requirement that participants stay online or delegate watchtowers to contest fraud.
