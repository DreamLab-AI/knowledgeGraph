public:: true

# Payments Infrastructure
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:payments-infrastructure",
  "@type": "Page",
  "vc:slug": "payments-infrastructure",
  "title": "Payments Infrastructure",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:payments-infrastructure",
  "@type": "Class",
  "label": "Payments Infrastructure",
  "definition": "Payments infrastructure is the aggregate of networks, rails, processors, and settlement systems that move value between parties. It spans card schemes, interbank transfer rails, clearing houses, and blockchain-based settlement layers that enable assets such as stablecoins to circulate. As a backbone system it determines the speed, cost, reach, and finality of monetary transactions.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-computing-and-cloud", "label": "Computing and Cloud"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:stable-coins", "label": "Stable Coins"}, {"@id": "urn:ngm:class:payment-processor", "label": "Payment Processor"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Payments infrastructure is the layered system of rails, clearing, and settlement that moves value, and it enables instruments like [[Stablecoins]] to function as transactional money alongside a [[Payment Processor]].
- ### Content
  - Traditional payments infrastructure relies on card networks, ACH, RTGS, and interbank messaging such as ISO 20022, while emerging blockchain rails offer programmable, near-instant settlement. The choice of infrastructure dictates latency, fees, cross-border reach, and settlement finality, shaping how digital economies transfer money at scale.
