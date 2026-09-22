public:: true

# Cross-Border Payment Transparency
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cross-border-payment-transparency",
  "@type": "Page",
  "vc:slug": "cross-border-payment-transparency",
  "title": "Cross-Border Payment Transparency",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cross-border-payment-transparency",
  "@type": "Class",
  "label": "Cross-Border Payment Transparency",
  "definition": "Cross-border payment transparency is the requirement and practice of making the originator, beneficiary, fees, and routing of international payments visible to counterparties and regulators. It supports anti-money-laundering controls and consumer protection by exposing hidden costs and identifying parties to a transfer. In crypto it is advanced through measures such as the FATF Travel Rule and on-chain settlement traceability.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:travel-rule", "label": "Travel Rule"}, {"@id": "urn:ngm:class:cross-border-settlement", "label": "Cross-Border Settlement"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Cross-border payment transparency is the disclosure of parties, costs, and routing in international transfers to support oversight and fair pricing. It is enabled by the [[Travel Rule]] and supports trustworthy [[Cross-Border Settlement]].
- ### Content
  - Transparency obligations require sharing originator and beneficiary information and surfacing total transfer costs, countering both illicit flows and opaque correspondent-banking fees. On public ledgers, settlement is inherently traceable, but reconciling pseudonymous addresses with regulated identity data remains the core implementation challenge.
