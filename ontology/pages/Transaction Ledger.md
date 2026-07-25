public:: true

# Transaction Ledger
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:transaction-ledger",
  "@type": "Page",
  "vc:slug": "transaction-ledger",
  "title": "Transaction Ledger",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:transaction-ledger",
  "@type": "Class",
  "label": "Transaction Ledger",
  "definition": "A transaction ledger is an ordered, append-only record of value transfers or state changes that serves as the authoritative history of activity within a financial or blockchain system. Each entry captures the parties, amounts, and timing of a transaction, and in distributed settings the ledger is cryptographically chained and replicated to guarantee integrity and auditability.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-data-structure", "label": "Distributed Data Structure"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:digital-tax-compliance-node", "label": "Digital Tax Compliance Node"}, {"@id": "urn:ngm:class:transaction-standard", "label": "Transaction Standard"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - An append-only, ordered record of value transfers and state changes that forms the authoritative transaction history of a system. It is a required substrate for a [[Digital Tax Compliance Node]] and a component of any [[Transaction Standard]].
- ### Content
  - In distributed ledgers, entries are grouped into blocks, hash-chained, and replicated across nodes so that tampering with any record invalidates subsequent ones. This structure provides verifiable provenance, supports reconciliation and audit, and underpins regulatory reporting and tax-compliance workflows.
