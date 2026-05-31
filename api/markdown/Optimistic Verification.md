public:: true

# Optimistic Verification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:optimistic-verification",
  "@type": "Page",
  "vc:slug": "optimistic-verification",
  "title": "Optimistic Verification",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:optimistic-verification",
  "@type": "Class",
  "label": "Optimistic Verification",
  "definition": "Optimistic Verification is a security model in which state transitions or cross-chain messages are presumed valid and accepted after a challenge period unless a fraud proof demonstrates otherwise. It avoids the cost of validating every claim upfront, relying instead on economically incentivized watchers to detect and dispute invalid assertions. The approach underpins optimistic rollups and many cross-chain bridge designs that prioritize throughput over instant finality.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:bc-protocol-and-consensus", "label": "Blockchain Protocol and Consensus"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:cross-chain-bridge", "label": "Cross-Chain Bridge"},
      {"@id": "urn:ngm:class:blockchain-interoperability", "label": "Blockchain Interoperability"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Optimistic Verification presumes claims valid pending a fraud-proof challenge window, a model that a [[Cross-Chain Bridge]] uses to achieve [[Blockchain Interoperability]] with high throughput.
- ### Content
  - Watchers monitor asserted state transitions and submit fraud proofs to revert invalid ones during the dispute period. By validating only contested claims, the scheme reduces verification cost at the price of delayed finality, a trade-off central to optimistic rollups and bridges.
