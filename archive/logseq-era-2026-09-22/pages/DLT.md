public:: true

# DLT
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dlt",
  "@type": "Page",
  "vc:slug": "dlt",
  "title": "DLT",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:dlt",
  "@type": "Class",
  "label": "DLT",
  "definition": "Distributed Ledger Technology (DLT) is a class of systems in which transaction records are replicated, shared, and synchronised across multiple nodes without a single central authority. Blockchains are one form of DLT, but the term also covers directed-acyclic-graph and other non-chained ledger structures. DLT underpins many digital-asset and central-bank-digital-currency designs because it provides tamper-evidence, auditability, and resilience.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-data-structure", "label": "Distributed Data Structure"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:cbdcs", "label": "CBDCs"}, {"@id": "urn:ngm:class:cbdc-frameworks", "label": "CBDC Frameworks"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Distributed Ledger Technology (DLT) is a family of systems that maintain a shared, replicated record of transactions across many nodes without central control. [[Blockchain]] is the best-known instance, and DLT is a prerequisite for many [[CBDCs]] designs.
- ### Content
  - DLT achieves consistency through consensus protocols and cryptographic linking of records, giving tamper-evidence and high availability. Implementations range from permissionless public chains to permissioned consortium ledgers used in regulated finance, where [[CBDC Frameworks]] require auditable, controllable infrastructure.
