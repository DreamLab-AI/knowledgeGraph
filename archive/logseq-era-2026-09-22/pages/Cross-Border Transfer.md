public:: true

# Cross-Border Transfer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cross-border-transfer",
  "@type": "Page",
  "vc:slug": "cross-border-transfer",
  "title": "Cross-Border Transfer",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cross-border-transfer",
  "@type": "Class",
  "label": "Cross-Border Transfer",
  "definition": "A cross-border transfer is the movement of value or funds between parties located in different countries, settled across distinct currency and regulatory regimes. It encompasses bank wires, card networks, money-transfer operators, and increasingly digital-payment and cryptocurrency rails. Speed, cost, foreign-exchange handling, and compliance with multiple jurisdictions are its defining constraints.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:financial-services", "label": "Financial Services"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:digital-payments", "label": "Digital Payments"}, {"@id": "urn:ngm:class:cryptocurrency", "label": "Cryptocurrency"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A cross-border transfer is the international movement of value across currency and regulatory boundaries. It is enabled by [[Digital Payments]] infrastructure and increasingly by [[Cryptocurrency]] settlement networks.
- ### Content
  - Traditional cross-border transfers traverse correspondent-banking chains, adding intermediaries, FX spreads, and settlement delay. Digital and crypto rails aim to collapse these hops, but must still satisfy multi-jurisdictional AML, sanctions, and travel-rule obligations while managing currency conversion and liquidity at each endpoint.
