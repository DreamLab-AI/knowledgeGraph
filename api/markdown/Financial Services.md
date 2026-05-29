```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@type": "Page",
  "@id": "urn:visionflow:page:financial-services",
  "title": "Financial Services",
  "vc:slug": "financial-services",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:financial-services",
  "@type": "Class",
  "label": "Financial Services",
  "definition": "Financial Services encompasses the suite of economic services provided by the finance industry, including banking, investment, insurance, and payment systems. In digital and decentralised contexts, financial services extend to blockchain-based instruments, smart contract-mediated lending, tokenised asset management, and cross-border payment rails operating without traditional intermediaries.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "quality": 0.3,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Legal and Regulatory"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:financial-instruments", "label": "Financial Instruments"},
      {"@id": "urn:ngm:class:financial-infrastructure", "label": "Financial Infrastructure"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cryptocurrency", "label": "Cryptocurrency"},
      {"@id": "urn:ngm:class:smart-contracts", "label": "Smart Contracts"}
    ]
  }
}
```

## Financial Services

Financial Services encompasses the suite of economic services provided by the finance industry, including banking, investment, insurance, and payment systems. In digital and decentralised contexts, financial services extend to blockchain-based instruments, smart contract-mediated lending, tokenised asset management, and cross-border payment rails operating without traditional intermediaries.

### Relationships
- hasPart [[Financial Instruments]]
- hasPart [[Financial Infrastructure]]
- requires [[Financial Regulation]]
- relatedTo [[Cryptocurrency]]
- relatedTo [[Smart Contracts]]
