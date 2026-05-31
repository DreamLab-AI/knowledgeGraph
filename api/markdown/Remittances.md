public:: true

# Remittances
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:remittances",
  "@type": "Page",
  "vc:slug": "remittances",
  "title": "Remittances",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:remittances",
  "@type": "Class",
  "label": "Remittances",
  "definition": "Remittances are cross-border transfers of money, typically sent by migrant workers to family in their home country, representing a major global flow of funds to developing economies. Traditional rails impose high fees and slow settlement, which cryptocurrencies and the Lightning Network aim to reduce. As a use case, remittances anchor much of the argument for Bitcoin and stablecoins as practical money.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:financial-services", "label": "Financial Services"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:bitcoin-as-money", "label": "Bitcoin as Money"},
      {"@id": "urn:ngm:class:bitcoin-value-proposition", "label": "Bitcoin Value Proposition"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Remittances are cross-border personal money transfers, a use case central to [[Bitcoin as Money]] and a pillar of the [[Bitcoin Value Proposition]] given the high cost of legacy channels.
- ### Content
  - Conventional providers can charge several percent and take days to settle, especially on low-value corridors. Crypto rails and Lightning offer near-instant, low-fee transfers, though on- and off-ramp friction, volatility, and local liquidity remain practical barriers to mainstream adoption.
