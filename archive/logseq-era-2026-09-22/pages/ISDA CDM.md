public:: true

# ISDA CDM
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:isda-cdm",
  "@type": "Page",
  "vc:slug": "isda-cdm",
  "title": "ISDA CDM",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:isda-cdm",
  "@type": "Class",
  "label": "ISDA CDM",
  "definition": "The ISDA CDM (Common Domain Model) is a standardised, machine-readable data and process model for derivatives and other financial transactions, published by the International Swaps and Derivatives Association. It provides a single, consistent representation of trade events, lifecycle processes, and legal terms so that disparate systems and smart contracts interpret them identically. It is foundational to interoperable enterprise tokenisation and automated post-trade processing on distributed ledgers.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:enterprise-token-standards", "label": "Enterprise Token Standards"},
      {"@id": "urn:ngm:class:enterprise-smart-contracts", "label": "Enterprise Smart Contracts"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The ISDA CDM is a standardised, machine-readable model of derivatives trades and their lifecycle. It standardises [[Enterprise Token Standards]] and [[Enterprise Smart Contracts]] so systems interpret financial events consistently.
- ### Content
  - By defining events, products, and processes once, the CDM removes the reconciliation overhead of bespoke representations and lets smart contracts execute lifecycle actions deterministically. It is a key enabler of tokenised derivatives and automated, auditable post-trade workflows.
