public:: true

# erasure coding
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:747074333cac8a1a956e067886cb8e02aad428dc94758cbe57aa9694dd207224",
  "@type": "Page",
  "vc:slug": "erasure-coding",
  "title": "erasure coding",
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
  "@id": "urn:ngm:class:erasure-coding",
  "@type": "Class",
  "label": "Erasure Coding",
  "definition": "Erasure coding is a forward error-correction technique that encodes a data object into n fragments (shards), distributed across nodes or storage devices, such that any k of those n fragments are sufficient to reconstruct the original data without any centralised copy. The redundancy overhead (n − k) / k is typically much lower than full replication, making erasure coding the preferred durability mechanism in large-scale distributed storage systems and distributed ledgers where storage efficiency matters. Common schemes include Reed-Solomon codes, and more computationally efficient variants such as LDPC and Cauchy Reed-Solomon.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"},
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:data-replication", "label": "Data Replication"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ipfs", "label": "IPFS"},
      {"@id": "urn:ngm:class:storage-infrastructure", "label": "Storage Infrastructure"},
      {"@id": "urn:ngm:class:distributed-ledger", "label": "Distributed Ledger"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Erasure coding is a forward error-correction technique that encodes a data object into n fragments (shards), distributed across nodes or storage devices, such that any k of those n fragments are sufficient to reconstruct the original data without any centralised copy. The redundancy overhead (n − k) / k is typically much lower than full replication, making erasure coding the preferred durability mechanism in large-scale distributed storage systems and distributed ledgers where storage efficiency matters. Common schemes include Reed-Solomon codes, and more computationally efficient variants such as LDPC and Cauchy Reed-Solomon.

- ### Semantic Classification
  - owl-class:: erasure-coding:Erasure Coding
  - owl-role:: Concept

- ### Relationships
  - enables [[Fault Tolerance]]
  - enables [[Distributed Systems]]
  - uses [[Data Replication]]
  - relatedTo [[IPFS]]
  - relatedTo [[Storage Infrastructure]]
  - relatedTo [[Distributed Ledger]]

- ### Content
  Erasure coding is founded on the mathematics of Galois Field arithmetic, which allows linear algebraic operations on data symbols such that any k out of n encoded fragments can invert the encoding matrix and recover the original k data symbols. Reed-Solomon codes are the classical construction, widely used in RAID-6 storage systems (which tolerate two simultaneous disk failures), optical disc error correction, and satellite communications. Modern distributed object storage systems—including Ceph, Facebook Haystack/f4, and Azure Blob Storage—use erasure coding as the default durability mechanism for cold or warm data tiers because it achieves comparable durability to triple replication at roughly one-half the storage overhead.

  In Distributed Systems, erasure coding is applied at the shard level: a storage object is split into k data chunks, n − k parity chunks are computed, and all n chunks are distributed across failure domains (racks, data centres, or geographic regions). The system tolerates any n − k simultaneous failures. Fault Tolerance properties are directly parameterised by the (k, n) choice, trading reconstruction cost (which requires reading k chunks and performing decoding) against storage overhead.

  Distributed Ledger projects such as Ethereum's Danksharding roadmap incorporate erasure coding (specifically KZG polynomial commitments combined with erasure codes) to implement data availability sampling, allowing light nodes to probabilistically verify data availability without downloading full blocks. IPFS and Filecoin use erasure coding within storage deals to guarantee retrievability. The technique therefore underpins both traditional Storage Infrastructure and emerging decentralised storage paradigms.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
