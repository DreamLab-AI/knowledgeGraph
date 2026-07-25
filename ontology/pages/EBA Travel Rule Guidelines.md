public:: true

# EBA Travel Rule Guidelines
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:eba-travel-rule-guidelines",
  "@type": "Page",
  "vc:slug": "eba-travel-rule-guidelines",
  "title": "EBA Travel Rule Guidelines",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:eba-travel-rule-guidelines",
  "@type": "Class",
  "label": "EBA Travel Rule Guidelines",
  "definition": "The EBA Travel Rule Guidelines are guidance issued by the European Banking Authority on how payment service providers and crypto-asset service providers must comply with the EU Transfer of Funds Regulation. They specify the originator and beneficiary information that must accompany transfers of funds and crypto-assets, implementing the FATF Travel Rule within EU law. They define data fields, thresholds, and responsibilities for intermediaries to support anti-money-laundering controls.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:travel-rule", "label": "Travel Rule"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The EBA Travel Rule Guidelines are European Banking Authority guidance implementing the FATF [[Travel Rule]] for crypto-asset and fund transfers under the EU Transfer of Funds Regulation. They define what originator and beneficiary data must travel with a transfer.
- ### Content
  - The guidelines set out required data fields, handling of missing information, and obligations of intermediary providers, aligning EU crypto-asset transfers with anti-money-laundering and counter-terrorist-financing standards. Crypto-asset service providers implement them through travel-rule messaging protocols and compliance tooling.
