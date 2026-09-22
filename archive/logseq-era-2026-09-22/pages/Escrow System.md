public:: true

# Escrow System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:escrow-system",
  "@type": "Page",
  "vc:slug": "escrow-system",
  "title": "Escrow System",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:escrow-system",
  "@type": "Class",
  "label": "Escrow System",
  "definition": "An escrow system is a mechanism that holds assets or funds with a trusted third party or, on blockchains, in a smart contract until predefined release conditions are met. It reduces counterparty risk in transactions by guaranteeing that neither party can unilaterally seize value before obligations are fulfilled. On-chain escrows use conditional logic and timelocks to release or refund funds automatically.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:economic-mechanism", "label": "Economic Mechanism"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:timelock", "label": "Timelock"}, {"@id": "urn:ngm:class:marketplace", "label": "Marketplace"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - An escrow system holds value until release conditions are met, often using a [[Timelock]] for conditional settlement, and is a common component of a [[Marketplace]].
- ### Content
  - In smart-contract escrows, funds are locked and released by deterministic logic rather than a human intermediary, eliminating trust in a single custodian. Timelocks and dispute paths handle non-performance, refunds, and arbitration.
