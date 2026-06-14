public:: true

# Payment Channel Network
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:payment-channel-network",
  "@type": "Page",
  "vc:slug": "payment-channel-network",
  "title": "Payment Channel Network",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:payment-channel-network",
  "@type": "Class",
  "label": "Payment Channel Network",
  "definition": "A Payment Channel Network is a layer-2 scaling architecture in which participants open bilateral payment channels and route payments across a graph of connected channels without settling each transaction on the underlying blockchain. Funds are locked in multisignature channels, and balances update off-chain through signed state, with only channel opening and closing recorded on-chain. This enables high-throughput, low-fee, near-instant payments while inheriting base-layer security.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-network-component", "label": "Network Component"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:lightning-network", "label": "Lightning Network"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A Payment Channel Network routes off-chain payments across a graph of bilateral channels, the architecture generalized by the [[Lightning Network]] for scalable blockchain payments.
- ### Content
  - Participants lock funds in multisignature channels and exchange signed balance updates off-chain, committing only channel opens and closes to the base layer. Routing payments through intermediary channels yields near-instant, low-fee transactions while inheriting the settlement security of the underlying chain.
