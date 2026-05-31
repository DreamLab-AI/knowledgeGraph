public:: true

# ISDA Common Domain Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:isda-common-domain-model",
  "@type": "Page",
  "vc:slug": "isda-common-domain-model",
  "title": "ISDA Common Domain Model",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:isda-common-domain-model",
  "@type": "Class",
  "label": "ISDA Common Domain Model",
  "definition": "The ISDA Common Domain Model is the full name of the standardised, machine-readable representation of financial products, trade events, and lifecycle processes maintained by the International Swaps and Derivatives Association. It establishes a single canonical model so that distributed ledgers, smart contracts, and institutional systems process derivatives transactions identically and without reconciliation. It is a cornerstone standard for interoperable, automated post-trade infrastructure.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:isda-cdm", "label": "ISDA CDM"},
      {"@id": "urn:ngm:class:distributed-ledger", "label": "Distributed Ledger"},
      {"@id": "urn:ngm:class:enterprise-smart-contracts", "label": "Enterprise Smart Contracts"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The ISDA Common Domain Model is the canonical, machine-readable model of derivatives products and lifecycle events; it is the expanded name of the [[ISDA CDM]]. It standardises how a [[Distributed Ledger]] and [[Enterprise Smart Contracts]] represent trades.
- ### Content
  - Adopting one shared model eliminates the divergent in-house representations that drive costly reconciliation, enabling deterministic lifecycle automation. It is increasingly paired with DLT pilots that tokenise and settle derivatives with consistent legal and operational semantics.
