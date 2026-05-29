public:: true

# data integrity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:57c9ba2faa70b21fde3310821564ac45570bc40dd856b336f210d39c230b47b9",
  "@type": "Page",
  "vc:slug": "data-integrity",
  "title": "data integrity",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-integrity",
  "@type": "Class",
  "label": "Data Integrity",
  "definition": "Data integrity is the property that data remains accurate, consistent, and unaltered throughout its entire lifecycle—spanning creation, storage, transmission, and processing—without authorised modification. It is enforced through a combination of technical controls including cryptographic hash functions, digital signatures, Merkle trees, and immutable audit trails, as well as procedural controls such as access management and change-control workflows. Violations of data integrity—whether from storage errors, transmission corruption, or malicious tampering—can have cascading consequences in systems that rely on the data for decision-making.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:hash-function", "label": "Hash Function"},
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:audit-trail", "label": "Audit Trail"},
      {"@id": "urn:ngm:class:immutability", "label": "Immutability"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:distributed-ledger", "label": "Distributed Ledger"},
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Data integrity is the property that data remains accurate, consistent, and unaltered throughout its entire lifecycle—spanning creation, storage, transmission, and processing—without unauthorised modification. It is enforced through a combination of technical controls including cryptographic hash functions, digital signatures, Merkle trees, and immutable audit trails, as well as procedural controls such as access management and change-control workflows. Violations of data integrity—whether from storage errors, transmission corruption, or malicious tampering—can have cascading consequences in systems that rely on the data for decision-making.

- ### Semantic Classification
  - owl-class:: data-integrity:Data Integrity
  - owl-role:: Concept

- ### Relationships
  - uses [[Hash Function]]
  - uses [[Merkle Tree]]
  - enables [[Audit Trail]]
  - enables [[Immutability]]
  - relatedTo [[Distributed Ledger]]
  - relatedTo [[Fault Tolerance]]

- ### Content
  - Data integrity is typically decomposed into referential integrity (consistency of relationships between data entities), domain integrity (values conforming to permitted types and ranges), and entity integrity (uniqueness and completeness of primary identifiers). Database management systems enforce these through constraint mechanisms, transactions with ACID properties, and write-ahead logging that allows recovery from partial failures.
  - At the storage layer, checksums and erasure codes detect and correct bit-rot and media failures in distributed storage systems. Cryptographic hashing—using algorithms such as SHA-256 or BLAKE3—extends detection to intentional tampering: any modification of the data, however small, produces a completely different hash, making alterations detectable without requiring comparison of full content.
  - Distributed ledger technologies such as blockchain operationalise data integrity at a system level through Merkle tree structures that efficiently prove the inclusion and unaltered state of any individual record within a chain of blocks. This immutability-by-construction property makes blockchain an attractive substrate for audit trails, supply-chain provenance records, and regulated financial data where external verification is required without trusting a central custodian.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
