public:: true

# ICVCM Framework
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:icvcm-framework",
  "@type": "Page",
  "vc:slug": "icvcm-framework",
  "title": "ICVCM Framework",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:icvcm-framework",
  "@type": "Class",
  "label": "ICVCM Framework",
  "definition": "The ICVCM Framework is the governance framework established by the Integrity Council for the Voluntary Carbon Market to set quality benchmarks for carbon credits. Centred on the Core Carbon Principles and an associated Assessment Framework, it defines criteria for additionality, permanence, robust quantification, and transparent governance. The framework aims to restore trust and comparability across voluntary carbon-credit issuers.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:governance-framework", "label": "Governance Framework"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:icvcm-core-carbon-principles", "label": "ICVCM Core Carbon Principles"}],
    "supports": [{"@id": "urn:ngm:class:green-blockchain-initiatives", "label": "Green Blockchain Initiatives"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The ICVCM Framework sets integrity benchmarks for voluntary carbon credits through its [[ICVCM Core Carbon Principles]], underpinning the credibility of [[Green Blockchain Initiatives]] that tokenise such credits.
- ### Content
  - Credits assessed against the Core Carbon Principles earn a CCP label, signalling that they meet thresholds for additionality, no double counting, and sound governance. Tokenised carbon-market projects reference the framework to anchor on-chain assets to verifiable real-world climate outcomes.
