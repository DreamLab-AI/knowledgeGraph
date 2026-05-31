public:: true

# Cross-Border Remittances
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cross-border-remittances",
  "@type": "Page",
  "vc:slug": "cross-border-remittances",
  "title": "Cross-Border Remittances",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cross-border-remittances",
  "@type": "Class",
  "label": "Cross-Border Remittances",
  "definition": "Cross-border remittances are transfers of money by individuals—typically migrant workers—to recipients in another country, often family members. Traditionally routed through banks and money-transfer operators with high fees and slow settlement, they are increasingly served by stablecoins and crypto rails that lower cost and latency. They represent a major global financial flow and a key driver of crypto payment adoption.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:financial-services", "label": "Financial Services"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:stable-coins", "label": "Stablecoins"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Cross-border remittances are person-to-person international money transfers, often from workers abroad to families at home. They are increasingly enabled and made cheaper by [[Stablecoins]] and other crypto payment rails.
- ### Content
  - Conventional remittance corridors carry high fees and multi-day settlement, especially in underbanked regions. Stablecoin-based transfers compress cost and time by settling on public ledgers, but mainstream adoption depends on reliable fiat on- and off-ramps, regulatory clarity, and accessible custody for non-technical users.
