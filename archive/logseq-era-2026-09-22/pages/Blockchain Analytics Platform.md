public:: true

# Blockchain Analytics Platform
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:blockchain-analytics-platform",
  "@type": "Page",
  "vc:slug": "blockchain-analytics-platform",
  "title": "Blockchain Analytics Platform",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:blockchain-analytics-platform",
  "@type": "Class",
  "label": "Blockchain Analytics Platform",
  "definition": "A blockchain analytics platform is software that ingests, clusters, and analyses on-chain transaction data to trace fund flows, attribute addresses to entities, and assess risk. Platforms such as Chainalysis and Elliptic apply heuristics, machine learning, and labelled datasets to support anti-money-laundering, sanctions screening, and investigations. They are central tooling for exchange compliance teams, regulators, and law-enforcement agencies.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:blockchain-analysis", "label": "Blockchain Analysis"},
      {"@id": "urn:ngm:class:aml-kyc-compliance", "label": "AML KYC Compliance"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A blockchain analytics platform performs [[Blockchain Analysis]] at scale to trace funds and attribute addresses, providing the tooling that powers [[AML/KYC Compliance]].
- ### Content
  - These platforms combine address-clustering heuristics, entity labelling, and risk scoring over the full transaction graph. Exchanges and financial institutions use them to screen counterparties against sanctions lists and to file suspicious-activity reports, while investigators use them to follow illicit flows across chains.
